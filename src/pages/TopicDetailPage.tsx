import { CheckCircle2, ChevronDown, GitCompareArrows, Image as ImageIcon, Info, ListOrdered, Table2, Workflow } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { BookmarkButton, CitationChips, CitedParagraph, FlowDiagram, ReaderCheckCard, UnverifiedUpdate, GuidelineCard, NoteEditor, PositionsTable, SECTION_ICONS, SPECIALTY, SourceBadge } from '@/components/content';
import { AccordionItem, Chip, SampleNotice, StatusBadge } from '@/components/ui';
import { getGuideline, getSource, getTopic, WATCH } from '@/data';
import { useVault } from '@/store/VaultContext';
import { useReviews } from '@/store/ReviewContext';
import { TopicShareButton } from '@/components/content/ShareSheet';
import { formatDate } from '@/lib/format';
import { ReadingSettingsButton } from '@/components/settings/ReadingSettings';
import NotFoundPage from './NotFoundPage';

type Tab = 'overview' | 'graphics' | 'guidelines' | 'notes';

/** Section types that hold management: shown first in a quick bar and the first one opens by default. */
const MGMT_ICONS = new Set(['management', 'emergency', 'drug', 'injection', 'delivery', 'fluids', 'surgery']);
/** Theory sections: shown last, under a Background label, so management leads the page. */
const BG_ICONS = new Set(['definition', 'epidemiology']);

export default function TopicDetailPage() {
  const { slug = '' } = useParams();
  const topic = getTopic(slug);
  const [tab, setTab] = useState<Tab>('overview');
  const mgmtIds = (topic?.sections ?? []).filter((x) => MGMT_ICONS.has(x.icon)).map((x) => x.id);
  const [openSections, setOpenSections] = useState<Set<string>>(() => new Set(mgmtIds.slice(0, 1)));
  const toggleSection = (id: string) =>
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const jumpTo = (id: string) => {
    setOpenSections((prev) => new Set(prev).add(id));
    window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  };
  const [showJump, setShowJump] = useState(false);
  const [allKeys, setAllKeys] = useState(false);
  const [bgOpen, setBgOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowJump(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const { hash } = useLocation();
  const { recordView } = useVault();
  const { statusFor } = useReviews();

  useEffect(() => {
    if (topic) recordView('topic', topic.slug);
    setTab('overview');
    setAllKeys(false);
    setBgOpen(false);
    // Open the first management section by default: management is what clinicians come for.
    setOpenSections(new Set((topic?.sections ?? []).filter((x) => MGMT_ICONS.has(x.icon)).slice(0, 1).map((x) => x.id)));
  }, [topic, recordView]);

  // Deep link: /topics/:slug#section-id opens and scrolls to that section (used by Emergency).
  useEffect(() => {
    const id = decodeURIComponent(hash.slice(1));
    if (id && topic?.sections.some((x) => x.id === id)) jumpTo(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, topic?.slug]);

  const guidelines = useMemo(
    () =>
      (topic?.guidelineIds ?? [])
        .map((id) => getGuideline(id)!)
        .filter(Boolean)
        .sort((a, b) => getSource(a.sourceId).priority - getSource(b.sourceId).priority),
    [topic],
  );

  // The topic's main algorithm: first flowchart in a management section (else any section), shown at the top.
  const glance = useMemo(() => {
    const secs = [...(topic?.sections ?? [])].sort((a, b) => Number(MGMT_ICONS.has(b.icon)) - Number(MGMT_ICONS.has(a.icon)));
    for (const sec of secs) {
      const p = sec.body.find((x) => x.flow);
      if (p) return { sec, p };
    }
    return null;
  }, [topic]);

  // Section order on the page: management first, then other clinical sections, then background.
  const ordered = useMemo(() => {
    const secs = topic?.sections ?? [];
    const rank = (icon: string) => (MGMT_ICONS.has(icon) ? 0 : BG_ICONS.has(icon) ? 2 : 1);
    return [...secs].sort((a, b) => rank(a.icon) - rank(b.icon));
  }, [topic]);
  const firstBg = ordered.findIndex((x) => BG_ICONS.has(x.icon));

  // Every flowchart, table and figure in the topic, in page order (like a "Graphics" list in a textbook review).
  const graphics = useMemo(
    () =>
      ordered.flatMap((sec, si) =>
        sec.body.flatMap((p) => {
          const out: { kind: 'flow' | 'table' | 'figure'; title: string; secId: string; secNo: number; secTitle: string }[] = [];
          const base = { secId: sec.id, secNo: si + 1, secTitle: sec.title };
          if (p.flow) out.push({ kind: 'flow', title: p.heading ?? sec.title, ...base });
          if (p.table) out.push({ kind: 'table', title: p.table.caption ?? (p.heading && p.heading.length > 8 ? p.heading : sec.title), ...base });
          if (p.figure) out.push({ kind: 'figure', title: p.heading ?? p.figure.alt, ...base });
          return out;
        }),
      ),
    [ordered],
  );

  const sourceIds = useMemo(() => Array.from(new Set(guidelines.map((g) => g.sourceId))), [guidelines]);

  if (!topic) return <NotFoundPage />;
  const sp = SPECIALTY[topic.specialty];
  const status = statusFor(topic.slug, topic.status);

  return (
    <div>
      <PageHeader
        title={topic.title}
        actions={
          <>
            <ReadingSettingsButton />
            <TopicShareButton topic={topic} sourceIds={sourceIds} />
            <BookmarkButton kind="topic" id={topic.slug} label={topic.title} className="text-navy" />
          </>
        }
      />
      <div className="space-y-4 px-4 md:px-6">
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0" role="tablist" aria-label="Topic sections">
          <Chip role="tab" active={tab === 'overview'} onClick={() => setTab('overview')}>Overview</Chip>
          {graphics.length > 0 && <Chip role="tab" active={tab === 'graphics'} count={graphics.length} onClick={() => setTab('graphics')}>Graphics</Chip>}
          <Chip role="tab" active={tab === 'guidelines'} count={guidelines.length} onClick={() => setTab('guidelines')}>Society guidelines</Chip>
          <Chip role="tab" active={tab === 'notes'} onClick={() => setTab('notes')}>My notes</Chip>
        </div>

        <header>
          <div className="mb-1.5 flex flex-wrap items-center gap-2">
            <Link to={`/library/${topic.specialty}`} className="text-xs font-bold uppercase tracking-wide text-teal-700">{sp.label}</Link>
            <span className="text-xs text-navy-300">/</span>
            <span className="text-xs font-semibold text-navy-500">{topic.category}</span>
            <StatusBadge status={status} />
          </div>
          <h2 className="text-[30px] font-extrabold leading-[1.15] tracking-tight text-navy">{topic.title}</h2>
          <p className="mt-1 text-[16px] font-medium text-navy-500">{topic.subtitle}</p>
          <p className="mt-1.5 text-xs text-navy-400">Guidelines last checked {formatDate(WATCH.lastChecked)} · {guidelines.length} source documents</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {Array.from(new Set(guidelines.map((g) => g.sourceId))).map((id) => (
              <SourceBadge key={id} id={id} />
            ))}
          </div>
        </header>

        <SampleNotice compact status={status} />
        {WATCH.pending[topic.slug] && (
          <Link to={`/guidelines/${WATCH.pending[topic.slug].guidelineId}`} className="block rounded-2xl bg-amber-50 px-4 py-3 text-sm ring-1 ring-amber/30">
            <strong className="block font-bold text-amber-800">Updated {formatDate(WATCH.pending[topic.slug].detected)} from a new guideline: not yet verified</strong>
            <span className="block text-navy-600">{WATCH.pending[topic.slug].note}</span>
            <span className="mt-1 block text-xs font-semibold text-amber-700">Changed lines are marked. Please check them against the original guideline before relying on them.</span>
          </Link>
        )}

        {tab === 'overview' && (
          <>
            <section className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-teal/25">
              <h3 className="flex items-center gap-2 bg-ink px-4 py-3 text-[17px] font-extrabold text-white dark:bg-teal-900">
                <CheckCircle2 className="size-5 fill-teal text-ink dark:text-teal-900" aria-hidden />
                {topic.status === 'sample' ? 'Key points' : 'Management in short'}
              </h3>
              <ol className="divide-y divide-navy-100/70">
                {topic.keyPoints.map((k, i) => (
                  <li key={k.text} className="flex gap-3 px-4 py-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-teal text-[12px] font-bold text-white tabular-nums">{i + 1}</span>
                    <div className="min-w-0">
                      {k.update && <UnverifiedUpdate update={k.update} />}
                      <p className="prose-read font-medium text-navy">{k.text}</p>
                      <CitationChips refs={k.refs} />
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {glance && (
              <section className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60">
                <button
                  type="button"
                  onClick={() => setAllKeys(!allKeys)}
                  aria-expanded={allKeys}
                  className="flex w-full items-center gap-2 px-4 py-3 text-left text-[15px] font-extrabold text-navy"
                >
                  <Workflow className="size-5 text-teal-700" aria-hidden />
                  <span className="min-w-0 flex-1">Flowchart: {glance.sec.title}</span>
                  <ChevronDown className={`size-4 text-navy-400 transition ${allKeys ? 'rotate-180' : ''}`} aria-hidden />
                </button>
                {allKeys && (
                  <div className="space-y-2 px-3 pb-3">
                    <FlowDiagram flow={glance.p.flow!} />
                    <div className="flex flex-wrap items-center justify-between gap-2 px-1">
                      <CitationChips refs={glance.p.refs} />
                      <button type="button" onClick={() => jumpTo(glance.sec.id)} className="text-xs font-bold text-teal-700 hover:text-teal">
                        Full details →
                      </button>
                    </div>
                  </div>
                )}
              </section>
            )}

            {mgmtIds.length > 0 && (
              <section className="rounded-2xl bg-ink p-4 text-white shadow-card dark:bg-teal-900">
                <h3 className="text-xs font-bold uppercase tracking-wider text-teal-200">Management</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {topic.sections
                    .filter((x) => mgmtIds.includes(x.id))
                    .map((x) => (
                      <button key={x.id} type="button" onClick={() => jumpTo(x.id)} className="rounded-xl bg-white/10 px-3 py-2 text-left text-[14px] font-semibold text-white ring-1 ring-white/15 hover:bg-white/20">
                        {x.title}
                      </button>
                    ))}
                </div>
              </section>
            )}

            <nav id="contents" aria-label="Contents" className="scroll-mt-20 rounded-2xl bg-surface p-3 shadow-card ring-1 ring-navy-100/60">
              <div className="mb-2 flex items-center justify-between px-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy-400">Contents</h3>
                <button
                  type="button"
                  onClick={() => setOpenSections(openSections.size === topic.sections.length ? new Set() : new Set(topic.sections.map((x) => x.id)))}
                  className="text-xs font-bold text-teal-700 hover:text-teal"
                >
                  {openSections.size === topic.sections.length ? 'Collapse all' : 'Expand all'}
                </button>
              </div>
              <ol className="grid gap-1 sm:grid-cols-2">
                {ordered.map((x, i) => (
                  <li key={x.id}>
                    <button type="button" onClick={() => jumpTo(x.id)} className="flex w-full items-baseline gap-2 rounded-lg px-2 py-2 text-left text-[14.5px] font-semibold text-navy-700 hover:bg-teal-50 hover:text-teal-700">
                      <span className="w-4 shrink-0 text-right tabular-nums text-navy-300">{i + 1}</span>
                      {x.title}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            <section className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60">
              {ordered.map((s, idx) => {
                const Icon = SECTION_ICONS[s.icon];
                return (
                  <div key={s.id}>
                  {idx === firstBg && idx > 0 && (
                    <p className="border-t border-navy-100 bg-canvas px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-navy-400">Background</p>
                  )}
                  <AccordionItem id={s.id} title={`${idx + 1}. ${s.title}`} icon={Icon ? <Icon className="size-5" /> : undefined} open={openSections.has(s.id)} onToggle={() => toggleSection(s.id)}>
                    {s.body.map((p) => (
                      <CitedParagraph key={p.text} point={p} />
                    ))}
                  </AccordionItem>
                  </div>
                );
              })}
            </section>

            {topic.positions && <PositionsTable positions={topic.positions} />}

            {topic.overview && (
              <section className="rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
                <h3 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-navy-400">Background</h3>
                <p className={`prose-read text-navy-700 ${bgOpen ? '' : 'line-clamp-3'}`}>{topic.overview}</p>
                <button type="button" onClick={() => setBgOpen(!bgOpen)} className="mt-1 text-sm font-bold text-teal-700">
                  {bgOpen ? 'Show less' : 'Read more'}
                </button>
              </section>
            )}

            {topic.editorNote && (
              <p className="flex gap-2 rounded-xl bg-navy-100/40 p-3.5 text-[13.5px] leading-relaxed text-navy-600">
                <Info className="mt-px size-4 shrink-0 text-navy-400" aria-hidden />
                {topic.editorNote}
              </p>
            )}

            {topic.positions?.length ? (<Link to={`/tools/compare?topic=${topic.slug}`} className="flex items-center gap-3 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber/30">
              <GitCompareArrows className="size-6 shrink-0 text-amber-700" aria-hidden />
              <span className="flex-1 text-sm">
                <strong className="block font-bold text-navy">Compare FOGSI · ACOG · RCOG · NICE</strong>
                <span className="text-navy-500">See every source side by side for this topic.</span>
              </span>
            </Link>) : null}
            {topic.status !== 'sample' && <ReaderCheckCard slug={topic.slug} />}
            <p className="text-xs text-navy-400">Last updated {formatDate(topic.updatedAt)}{topic.status === 'sample' ? ' (sample date)' : ''} · Guidelines last checked {formatDate(WATCH.lastChecked)}</p>
          </>
        )}

        {tab === 'graphics' && (
          <section className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60">
            <ol className="divide-y divide-navy-100/70">
              {graphics.map((g, i) => {
                const Icon = g.kind === 'flow' ? Workflow : g.kind === 'table' ? Table2 : ImageIcon;
                return (
                  <li key={`${g.secId}-${i}`}>
                    <button
                      type="button"
                      onClick={() => {
                        setTab('overview');
                        jumpTo(g.secId);
                      }}
                      className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-teal-50"
                    >
                      <Icon className="mt-0.5 size-5 shrink-0 text-teal-700" aria-hidden />
                      <span className="min-w-0">
                        <span className="block text-[14.5px] font-semibold text-navy">{g.title}</span>
                        <span className="block text-xs text-navy-400">
                          {g.kind === 'flow' ? 'Flowchart' : g.kind === 'table' ? 'Table' : 'Figure'} · Section {g.secNo}: {g.secTitle}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </section>
        )}

        {tab === 'guidelines' && (
          <section className="space-y-2.5">
            {guidelines.length ? guidelines.map((g) => <GuidelineCard key={g.id} guideline={g} />) : <p className="py-6 text-center text-sm text-navy-500">No guidelines linked yet.</p>}
          </section>
        )}

        {tab === 'notes' && <NoteEditor kind="topic" targetId={topic.slug} />}

        {tab === 'overview' && showJump && topic.sections.length > 1 && (
          <button
            type="button"
            onClick={() => document.getElementById('contents')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="fixed bottom-24 right-4 z-30 flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-white shadow-lg md:bottom-6"
          >
            <ListOrdered className="size-4" aria-hidden />
            Contents
          </button>
        )}
      </div>
    </div>
  );
}
