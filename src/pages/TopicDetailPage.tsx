import { CheckCircle2, GitCompareArrows, Info, ListOrdered, Share2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { BookmarkButton, CitationChips, CitedParagraph, GuidelineCard, NoteEditor, PositionsTable, SECTION_ICONS, SPECIALTY, SourceBadge } from '@/components/content';
import { AccordionItem, Chip, SampleNotice, StatusBadge } from '@/components/ui';
import { getGuideline, getSource, getTopic } from '@/data';
import { useVault } from '@/store/VaultContext';
import { useReviews } from '@/store/ReviewContext';
import { useShare } from '@/hooks/useShare';
import { formatDate } from '@/lib/format';
import NotFoundPage from './NotFoundPage';

type Tab = 'overview' | 'guidelines' | 'notes';

export default function TopicDetailPage() {
  const { slug = '' } = useParams();
  const topic = getTopic(slug);
  const [tab, setTab] = useState<Tab>('overview');
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
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
  const share = useShare();

  useEffect(() => {
    if (topic) recordView('topic', topic.slug);
    setTab('overview');
    setOpenSections(new Set());
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

  if (!topic) return <NotFoundPage />;
  const sp = SPECIALTY[topic.specialty];
  const status = statusFor(topic.slug, topic.status);

  return (
    <div>
      <PageHeader
        title={topic.title}
        actions={
          <>
            <button type="button" onClick={() => share(topic.title)} aria-label="Share" className="grid size-9 place-items-center rounded-full text-navy hover:bg-surface">
              <Share2 className="size-5" />
            </button>
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
          <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-navy">{topic.title}</h2>
          <p className="text-[15px] font-medium text-navy-500">{topic.subtitle}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {Array.from(new Set(guidelines.map((g) => g.sourceId))).map((id) => (
              <SourceBadge key={id} id={id} />
            ))}
          </div>
        </header>

        <SampleNotice compact status={status} />

        {tab === 'overview' && (
          <>
            <section className="rounded-2xl bg-teal-50 p-4 ring-1 ring-teal/20">
              <h3 className="mb-2 text-base font-extrabold text-navy">
                {topic.status === 'sample' ? (<><span className="text-teal-700">Key</span> points</>) : (<><span className="text-teal-700">Summary</span> &amp; recommendations</>)}
              </h3>
              <ul className="space-y-2">
                {topic.keyPoints.map((k) => (
                  <li key={k.text} className="flex gap-2.5 text-sm font-medium leading-snug text-navy-700">
                    <CheckCircle2 className="mt-px size-[18px] shrink-0 fill-teal text-white" aria-hidden />
                    <span>
                      {k.text}
                      <CitationChips refs={k.refs} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <p className="text-sm leading-relaxed text-navy-600">{topic.overview}</p>

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
                    <button type="button" onClick={() => jumpTo(x.id)} className="flex w-full items-baseline gap-2 rounded-lg px-2 py-1.5 text-left text-[13px] font-semibold text-navy-600 hover:bg-teal-50 hover:text-teal-700">
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
              <p className="flex gap-2 rounded-xl bg-navy-100/40 p-3 text-xs leading-relaxed text-navy-600">
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
            <p className="text-xs text-navy-400">Last updated {formatDate(topic.updatedAt)}{topic.status === 'sample' ? ' (sample date)' : ''}</p>
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
            className="fixed bottom-24 right-4 z-30 flex items-center gap-1.5 rounded-full bg-navy px-4 py-2.5 text-sm font-bold text-white shadow-lg md:bottom-6"
          >
            <ListOrdered className="size-4" aria-hidden />
            Contents
          </button>
        )}
      </div>
    </div>
  );
}
