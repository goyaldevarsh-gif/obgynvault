import { getSource } from '@/data';
import type { SourceId } from '@/types/content';
import { cx } from '@/lib/format';

export function SourceBadge({ id, className }: { id: SourceId; className?: string }) {
  const s = getSource(id);
  return (
    <span
      className={cx('inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide', className)}
      style={{ color: s.color, backgroundColor: `${s.color}1A` }}
    >
      {s.shortName}
    </span>
  );
}
