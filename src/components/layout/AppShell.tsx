import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BottomNav } from './BottomNav';
import { SideNav } from './SideNav';

export function AppShell() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-dvh">
      <SideNav />
      <main className="min-w-0 flex-1 pb-24 md:pb-10">
        <div className="mx-auto w-full max-w-3xl">
          <Outlet />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
