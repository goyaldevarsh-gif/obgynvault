import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BottomNav } from './BottomNav';
import { SideNav } from './SideNav';
import { WifiOff } from 'lucide-react';
import { useOnline } from '@/hooks/useOnline';

export function AppShell() {
  const { pathname } = useLocation();
  const online = useOnline();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-dvh">
      <SideNav />
      <main className="min-w-0 flex-1 pb-24 md:pb-10">
        {!online && (
          <div role="status" className="sticky top-0 z-40 flex items-center justify-center gap-2 bg-navy px-4 py-1.5 text-xs font-semibold text-white">
            <WifiOff className="size-3.5" aria-hidden /> You are offline. All topics, tools and your vault still work.
          </div>
        )}
        <div className="mx-auto w-full max-w-3xl">
          <Outlet />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
