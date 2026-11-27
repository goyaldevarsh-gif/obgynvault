import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cx } from '@/lib/format';

interface Props {
  to: string;
  label: string;
  icon: LucideIcon;
  tint: string; // tile background class
  fg: string; // icon colour class
  soon?: boolean;
}

export function ModuleTile({ to, label, icon: Icon, tint, fg, soon }: Props) {
  return (
    <Link to={to} className="relative flex min-w-0 flex-col items-center justify-center gap-2 rounded-2xl bg-surface px-1.5 py-3.5 shadow-card ring-1 ring-navy-100/60 transition hover:ring-teal/50 active:scale-[0.98]">
      <span className={cx('grid size-10 place-items-center rounded-xl', tint)}>
        <Icon className={cx('size-5', fg)} strokeWidth={2} aria-hidden />
      </span>
      <span className="w-full truncate text-center text-[12.5px] font-semibold text-navy">{label}</span>
      {soon && <span className="absolute right-2 top-2 rounded-full bg-navy-100 px-1.5 py-px text-[9px] font-bold uppercase text-navy-500">Soon</span>}
    </Link>
  );
}
