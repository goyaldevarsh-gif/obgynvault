import { CalendarDays, ExternalLink, FileText, Globe2, Share2 } from 'lucide-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { BookmarkButton, NoteEditor, SourceBadge, TopicCard } from '@/components/content';
import { Card, SampleNotice, StatusBadge } from '@/components/ui';
import { getGuideline, getSource, getTopic } from '@/data';
import { useVault } from '@/store/VaultContext';
import { useShare } from '@/hooks/useShare';
import NotFoundPage from './NotFoundPage';

export default function GuidelineDetailPage() {
  const { id = '' } = useParams();
  const g = getGuideline(id);
  const { recordView } = useVault();
  const share = useShare();

  useEffect(() => {
    if (g) recordView('guideline', g.id);
  }, [g, recordView]);

  if (!g) return <NotFoundPage />;
  const src = getSource(g.sourceId);
  const topics = g.topicSlugs.map((s) => getTopic(s)).filter((t) => t !== undefined);

  const meta = [
    { icon: Globe2, label: 'Issued by', value: `${src.fullName} (${src.region})` },
    { icon: FileText, label: 'Document', value: `${g.documentType}${g.reference ? ` ${g.reference}` : ''}` },
    { icon: CalendarDays, label: 'Year', value: g.year ? String(g.year) : 'To be confirmed' },
  ];

  return (
    <div>
      <PageHeader
        title="Guideline"
        actions={
          <>
            <button type="button" onClick={() => share(g.title)} aria-label="Share" className="grid size-9 place-items-center rounded-full text-navy hover:bg-surface">
              <Share2 className="size-5" />
            </button>
            <BookmarkButton kind="guideline" id={g.id} label={g.title} />
          </>
        }
      />
      <div className="space-y-4 px-4 md:px-6">
        <header>
          <div className="mb-2 flex items-center gap-2">
            <SourceBadge id={g.sourceId} />
            <StatusBadge status={g.status} />
          </div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-navy">{g.title}</h2>
        </header>
        <SampleNotice />
        <Card className="divide-y divide-navy-100">
          {meta.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-3 px-4 py-3">
              <Icon className="mt-0.5 size-5 shrink-0 text-navy-400" aria-hidden />
              <div>
                <div className="text-xs font-semibold text-navy-400">{label}</div>
                <div className="text-sm font-semibold text-navy">{value}</div>
              </div>
            </div>
          ))}
        </Card>
        <section>
          <h3 className="mb-1.5 text-sm font-bold text-navy">Scope</h3>
          <p className="text-sm leading-relaxed text-navy-600">{g.summary}</p>
        </section>
        <button type="button" disabled className="flex w-full items-center justify-center gap-2 rounded-2xl bg-navy px-4 py-3 text-sm font-bold text-white opacity-50">
          <ExternalLink className="size-4" /> Open official document (link added after verification)
        </button>
        {topics.length > 0 && (
          <section>
            <h3 className="mb-2 text-sm font-bold text-navy">Related topics</h3>
            <div className="space-y-2.5">
              {topics.map((t) => (
                <TopicCard key={t.slug} topic={t} />
              ))}
            </div>
          </section>
        )}
        <NoteEditor kind="guideline" targetId={g.id} />
      </div>
    </div>
  );
}
