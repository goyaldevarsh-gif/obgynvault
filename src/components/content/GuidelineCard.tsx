import { ChevronRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Guideline } from '@/types/content';
import { getSource } from '@/data';
import { SourceBadge } from './SourceBadge';
import { BookmarkButton } from './BookmarkButton';
import { StatusBadge } from '@/components/ui';

export function guidelineLabel(g: Guideline) {
  return `${getSource(g.sourceId).shortName}: ${g.title}`;
}

export function GuidelineCard({ guideline: g, showBookmark = true }: { guideline: Guideline; showBookmark?: boolean }) {
  return (
    <Link to={`/guidelines/${g.id}`} className="group flex items-start gap-3 rounded-2xl bg-surface p-3 shadow-card ring-1 ring-navy-100/60 transition hover:ring-teal/50">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-100/60 text-navy-600">
        <FileText className="size-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="mb-1 flex flex-wrap items-center gap-1.5">
          <SourceBadge id={g.sourceId} />
          <StatusBadge status={g.status} />
        </span>
        <span className="block text-[14px] font-bold leading-snug text-navy">{g.title}</span>
        <span className="mt-0.5 block text-xs font-medium text-navy-500">
          {g.documentType}
          {g.reference ? ` ${g.reference}` : ''}
          {g.year ? ` · ${g.year}` : ''}
        </span>
      </span>
      {showBookmark && <BookmarkButton kind="guideline" id={g.id} label={g.title} />}
      <ChevronRight className="mt-3 size-5 shrink-0 text-navy-300 group-hover:text-teal" aria-hidden />
    </Link>
  );
}
