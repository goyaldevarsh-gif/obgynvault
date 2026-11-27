import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, isNavActive } from './navItems';
import { cx } from '@/lib/format';

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav aria-label="Primary" className="pb-safe fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-surface/95 backdrop-blur md:hidden">
      <ul className="mx-auto grid max-w-lg grid-cols-5">
        {NAV_ITEMS.map((item) => {
          const active = isNavActive(pathname, item);
          const Icon = item.icon;
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                aria-current={active ? 'page' : undefined}
                className={cx('flex flex-col items-center gap-0.5 py-2 text-[11px] font-semibold transition', active ? 'text-teal' : 'text-navy-400 hover:text-navy')}
              >
                <span className={cx('grid h-7 w-12 place-items-center rounded-full transition', active && 'bg-teal-50')}>
                  <Icon className="size-[22px]" strokeWidth={active ? 2.4 : 2} aria-hidden />
                </span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
