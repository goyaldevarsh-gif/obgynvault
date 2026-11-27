import { lazy, Suspense } from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import { VaultProvider } from '@/store/VaultContext';
import { ToastProvider } from '@/store/ToastContext';

// Route-level code splitting keeps the first load small on mobile networks.
const SearchPage = lazy(() => import('@/pages/SearchPage'));
const LibraryPage = lazy(() => import('@/pages/LibraryPage'));
const SpecialtyLibraryPage = lazy(() => import('@/pages/SpecialtyLibraryPage'));
const GuidelinesLibraryPage = lazy(() => import('@/pages/GuidelinesLibraryPage'));
const GuidelineDetailPage = lazy(() => import('@/pages/GuidelineDetailPage'));
const TopicDetailPage = lazy(() => import('@/pages/TopicDetailPage'));
const MyVaultPage = lazy(() => import('@/pages/MyVaultPage'));
const ToolsPage = lazy(() => import('@/pages/ToolsPage'));
const ComingSoonPage = lazy(() => import('@/pages/ComingSoonPage'));

const Loading = () => <div className="grid min-h-[50vh] place-items-center"><div className="size-8 animate-spin rounded-full border-4 border-teal-100 border-t-teal" /></div>;
const s = (el: React.ReactNode) => <Suspense fallback={<Loading />}>{el}</Suspense>;

// Hash routing is used only for the single-file preview build, where the page has no server routes.
const useHash = import.meta.env.VITE_HASH_ROUTER === 'true';
const createRouter = useHash ? createHashRouter : createBrowserRouter;

const router = createRouter(
  [
    {
      path: '/',
      element: <AppShell />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'search', element: s(<SearchPage />) },
        { path: 'library', element: s(<LibraryPage />) },
        { path: 'library/:specialty', element: s(<SpecialtyLibraryPage />) },
        { path: 'guidelines', element: s(<GuidelinesLibraryPage />) },
        { path: 'guidelines/:id', element: s(<GuidelineDetailPage />) },
        { path: 'topics/:slug', element: s(<TopicDetailPage />) },
        { path: 'vault', element: s(<MyVaultPage />) },
        { path: 'tools', element: s(<ToolsPage />) },
        { path: 'tools/:module', element: s(<ComingSoonPage />) },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  useHash ? undefined : { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/' },
);

export default function App() {
  return (
    <VaultProvider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </VaultProvider>
  );
}
