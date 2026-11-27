import { CheckCircle2, GitCompareArrows, Info, Share2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { BookmarkButton, CitationChips, CitedParagraph, GuidelineCard, NoteEditor, PositionsTable, SECTION_ICONS, SPECIALTY, SourceBadge } from '@/components/content';
import { AccordionItem, Chip, SampleNotice, StatusBadge } from '@/components/ui';
import { getGuideline, getSource, getTopic } from '@/data';
import { useVault } from '@/store/VaultContext';
import { useShare } from '@/hooks/useShare';
import { formatDate } from '@/lib/format';
import NotFoundPage from './NotFoundPage';

type Tab = 'overview' | 'guidelines' | 'notes';

export default function TopicDetailPage() {
  const { slug = '' } = useParams();
  const topic = getTopic(slug);
  const [tab, setTab] = useState<Tab>('overview');
  const { recordView } = useVault();
  const share = useShare();

  useEffect(() => {
    if (topic) recordView('topic', topic.slug);
    setTab('overview');
  }, [topic, recordView]);

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
            <StatusBadge status={topic.status} />
          </div>
          <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-navy">{topic.title}</h2>
          <p className="text-[15px] font-medium text-navy-500">{topic.subtitle}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {Array.from(new Set(guidelines.map((g) => g.sourceId))).map((id) => (
              <SourceBadge key={id} id={id} />
            ))}
          </div>
        </header>

        <SampleNotice compact status={topic.status} />

        {tab === 'overview' && (
          <>
            <section className="rounded-2xl bg-teal-50 p-4 ring-1 ring-teal/20">
              <h3 className="mb-2 text-base font-extrabold text-navy">
                <span className="text-teal-700">Key</span> points
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

            <section className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60">
              {topic.sections.map((s) => {
                const Icon = SECTION_ICONS[s.icon];
                return (
                  <AccordionItem key={s.id} id={s.id} title={s.title} icon={Icon ? <Icon className="size-5" /> : undefined}>
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

            <Link to="/tools/compare" className="flex items-center gap-3 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber/30">
              <GitCompareArrows className="size-6 shrink-0 text-amber-700" aria-hidden />
              <span className="flex-1 text-sm">
                <strong className="block font-bold text-navy">Compare FOGSI · ACOG · RCOG · NICE</strong>
                <span className="text-navy-500">Side-by-side comparison arrives in Phase 3.</span>
              </span>
            </Link>
            <p className="text-xs text-navy-400">Last updated {formatDate(topic.updatedAt)}{topic.status === 'sample' ? ' (sample date)' : ''}</p>
          </>
        )}

        {tab === 'guidelines' && (
          <section className="space-y-2.5">
            {guidelines.length ? guidelines.map((g) => <GuidelineCard key={g.id} guideline={g} />) : <p className="py-6 text-center text-sm text-navy-500">No guidelines linked yet.</p>}
          </section>
        )}

        {tab === 'notes' && <NoteEditor kind="topic" targetId={topic.slug} />}
      </div>
    </div>
  );
}
