import { CheckCircle2, GitCompareArrows, Info, ListOrdered } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { BookmarkButton, CitationChips, CitedParagraph, ReaderCheckCard, UnverifiedUpdate, GuidelineCard, NoteEditor, PositionsTable, SECTION_ICONS, SPECIALTY, SourceBadge } from '@/components/content';
import { AccordionItem, Chip, SampleNotice, StatusBadge } from '@/components/ui';
import { getGuideline, getSource, getTopic, WATCH } from '@/data';
import { useVault } from '@/store/VaultContext';
import { useReviews } from '@/store/ReviewContext';
import { TopicShareButton } from '@/components/content/ShareSheet';
import { formatDate } from '@/lib/format';
import { ReadingSettingsButton } from '@/components/settings/ReadingSettings';
import NotFoundPage from './NotFoundPage';

type Tab = 'overview' | 'guidelines' | 'notes';

/** Section types that hold management: shown first in a quick bar and the first one opens by default. */
const MGMT_ICONS = new Set(['management', 'emergency', 'drug', 'injection', 'delivery', 'fluids', 'surgery']);

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
          <Chip role="tab" active={tab === 'guidelines'} count={guidelines.length} onClick={() => setTab('guidelines')}>Guidelines</Chip>
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
            <p className="prose-read text-[16.5px] text-navy-700">{topic.overview}</p>

            <section className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-teal/25">
              <h3 className="flex items-center gap-2 bg-teal-50 px-4 py-3 text-[17px] font-extrabold text-navy">
                <CheckCircle2 className="size-5 fill-teal text-white" aria-hidden />
                {topic.status === 'sample' ? 'Key points' : 'Summary & recommendations'}
              </h3>
              <ol className="divide-y divide-navy-100/70">
                {topic.keyPoints.map((k, i) => (
                  <li key={k.text} className="flex gap-3 px-4 py-3.5">
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
                {topic.sections.map((x, i) => (
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
              {topic.sections.map((s) => {
                const Icon = SECTION_ICONS[s.icon];
                return (
                  <AccordionItem key={s.id} id={s.id} title={s.title} icon={Icon ? <Icon className="size-5" /> : undefined} open={openSections.has(s.id)} onToggle={() => toggleSection(s.id)}>
                    {s.body.map((p) => (
                      <CitedParagraph key={p.text} point={p} />
                    ))}
                  </AccordionItem>
                );
              })}
            </section>

            {topic.positions && <PositionsTable positions={topic.positions} />}

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
