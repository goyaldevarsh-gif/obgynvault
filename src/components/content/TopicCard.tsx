import { ChevronRight, Siren } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Topic } from '@/types/content';
import { SPECIALTY } from './specialtyStyle';
import { BookmarkButton } from './BookmarkButton';
import { cx } from '@/lib/format';

export function TopicCard({ topic, showBookmark = true, highlight = false }: { topic: Topic; showBookmark?: boolean; highlight?: boolean }) {
  const sp = SPECIALTY[topic.specialty];
  const Icon = topic.emergency ? Siren : sp.icon;
  return (
    <Link
      to={`/topics/${topic.slug}`}
      className={cx(
        'group flex items-center gap-3 rounded-2xl p-3 shadow-card ring-1 transition hover:ring-teal/50',
        highlight ? 'bg-amber-50 ring-amber/30' : 'bg-surface ring-navy-100/60',
      )}
    >
      <span className={cx('grid size-11 shrink-0 place-items-center rounded-xl', topic.emergency ? 'bg-alert-50 text-alert' : cx(sp.tint, sp.fg))}>
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-bold text-navy">{topic.title}</span>
        <span className="block truncate text-xs font-medium text-navy-500">
          Clinical topic · {sp.label} · {topic.category}
        </span>
      </span>
      {showBookmark && <BookmarkButton kind="topic" id={topic.slug} label={topic.title} />}
      <ChevronRight className="size-5 shrink-0 text-navy-300 group-hover:text-teal" aria-hidden />
    </Link>
  );
}
