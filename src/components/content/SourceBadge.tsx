import { getSource } from '@/data';
import type { SourceId } from '@/types/content';
import { cx } from '@/lib/format';

/** Darken a #RRGGBB colour so badge text stays readable on its pale tint (e.g. FOGSI amber). */
function darken(hex: string, amount: number): string {
  const n = parseInt(hex.slice(1), 16);
  const ch = (shift: number) => Math.round(((n >> shift) & 255) * (1 - amount));
  return `rgb(${ch(16)}, ${ch(8)}, ${ch(0)})`;
}

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
        'inline-flex items-center gap-1 whitespace-nowrap rounded-full py-0.5 pl-1.5 pr-2 text-[10.5px] font-extrabold uppercase leading-4 tracking-wide ring-1 ring-inset',
        className,
      )}
      style={{ color: darken(s.color, 0.3), backgroundColor: `${s.color}14`, ['--tw-ring-color' as string]: `${s.color}40` }}
    >
      <span className="size-1.5 shrink-0 rounded-full" style={{ backgroundColor: s.color }} aria-hidden />
      {s.shortName}
    </span>
  );
}
