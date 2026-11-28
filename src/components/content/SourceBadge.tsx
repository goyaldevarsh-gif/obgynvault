import { getSource } from '@/data';
import type { SourceId } from '@/types/content';
import { cx } from '@/lib/format';
import { SOURCE_TINT, tintStyle } from '@/lib/sourceColor';

/**
 * Text-only source badge: organisation name plus its colour. Deliberately no official
 * logos (trademark / implied endorsement); see the "not affiliated" note on the About page.
 */
export function SourceBadge({ id, className }: { id: SourceId; className?: string }) {
  const s = getSource(id);
  return (
    <span
      title={`${s.fullName} (${s.region})`}
      className={cx(
        'inline-flex items-center gap-1 whitespace-nowrap rounded-full py-0.5 pl-1.5 pr-2 text-[10.5px] font-extrabold uppercase leading-4 tracking-wide',
        SOURCE_TINT,
        className,
      )}
      style={tintStyle(s.color)}
    >
      <span className="size-1.5 shrink-0 rounded-full" style={{ backgroundColor: s.color }} aria-hidden />
      {s.shortName}
    </span>
  );
}
