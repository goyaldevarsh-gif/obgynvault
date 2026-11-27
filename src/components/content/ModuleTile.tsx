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
    <Link to={to} className="relative flex flex-col items-center justify-center gap-2 rounded-2xl bg-surface px-2 py-4 shadow-card ring-1 ring-navy-100/60 transition hover:-translate-y-0.5 hover:ring-teal/50">
      <span className={cx('grid size-11 place-items-center rounded-xl', tint)}>
        <Icon className={cx('size-6', fg)} aria-hidden />
      </span>
      <span className="text-[13px] font-bold text-navy">{label}</span>
      {soon && <span className="absolute right-2 top-2 rounded-full bg-navy-100 px-1.5 py-px text-[9px] font-bold uppercase text-navy-500">Soon</span>}
    </Link>
  );
}
