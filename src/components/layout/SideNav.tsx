import { Newspaper } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useUnreadCount } from '@/lib/feed';
import { NAV_ITEMS, isNavActive } from './navItems';
import { Logo } from '@/components/brand/Logo';
import { cx } from '@/lib/format';

/** Desktop / tablet navigation rail. Same destinations as the bottom nav. */
export function SideNav() {
  const { pathname } = useLocation();
  const unread = useUnreadCount();
  return (
    <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-r border-navy-100 bg-surface px-4 py-6 md:flex">
      <Link to="/" className="mb-8 px-2">
        <Logo size="sm" />
      </Link>
      <nav aria-label="Primary">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = isNavActive(pathname, item);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  aria-current={active ? 'page' : undefined}
                  className={cx('flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition', active ? 'bg-teal-50 text-teal-700' : 'text-navy-500 hover:bg-canvas hover:text-navy')}
                >
                  <Icon className="size-5" aria-hidden />
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              to="/updates"
              aria-current={pathname === '/updates' ? 'page' : undefined}
              className={cx('flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition', pathname === '/updates' ? 'bg-teal-50 text-teal-700' : 'text-navy-500 hover:bg-canvas hover:text-navy')}
            >
              <Newspaper className="size-5" aria-hidden />
              <span className="flex-1">What's new</span>
              {unread > 0 && <span className="rounded-full bg-amber px-1.5 text-[11px] font-bold leading-[18px] text-white">{unread}</span>}
            </Link>
          </li>
        </ul>
      </nav>
      <p className="mt-auto px-2 text-[11px] leading-snug text-navy-400">
        Preview build. Topic reviews are drafts pending clinician verification; other entries are sample data.
      </p>
    </aside>
  );
}
