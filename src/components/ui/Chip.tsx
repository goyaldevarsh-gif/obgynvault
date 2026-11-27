import type { ButtonHTMLAttributes } from 'react';
import { cx } from '@/lib/format';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  count?: number;
}

/** Filter / segmented chip used for search filters, source tabs and vault tabs. */
export function Chip({ active, count, className, children, ...rest }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cx(
        'inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition',
        active ? 'bg-teal text-white shadow-sm' : 'bg-surface text-navy-600 ring-1 ring-navy-100 hover:bg-teal-50',
        className,
      )}
      {...rest}
    >
      {children}
      {count !== undefined && <span className={cx('tabular-nums', active ? 'text-white/85' : 'text-navy-400')}>({count})</span>}
    </button>
  );
}
