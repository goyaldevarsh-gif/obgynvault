import { lazy, Suspense } from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import { VaultProvider } from '@/store/VaultContext';
import { ToastProvider } from '@/store/ToastContext';
import { AuthProvider } from '@/store/AuthContext';
import { ReviewProvider } from '@/store/ReviewContext';
import { ReaderChecksProvider } from '@/store/ReaderChecksContext';
import { PageSkeleton } from '@/components/ui/Skeleton';
import { GettingStarted } from '@/components/onboarding/GettingStarted';
import { UpdateBanner } from '@/components/layout/UpdateBanner';

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
const ComparePage = lazy(() => import('@/pages/ComparePage'));
const AdminPage = lazy(() => import('@/pages/AdminPage'));
const CalculatorsPage = lazy(() => import('@/pages/CalculatorsPage'));
const EmergencyPage = lazy(() => import('@/pages/EmergencyPage'));
const UpdatesPage = lazy(() => import('@/pages/UpdatesPage'));
const LabourRoomPage = lazy(() => import('@/pages/LabourRoomPage'));
const DrugVaultPage = lazy(() => import('@/pages/DrugVaultPage'));

const s = (el: React.ReactNode) => <Suspense fallback={<PageSkeleton />}>{el}</Suspense>;

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
        { path: 'tools/compare', element: s(<ComparePage />) },
        { path: 'tools/admin', element: s(<AdminPage />) },
        { path: 'tools/calculators', element: s(<CalculatorsPage />) },
        { path: 'tools/emergency', element: s(<EmergencyPage />) },
        { path: 'updates', element: s(<UpdatesPage />) },
        { path: 'tools/labour-room', element: s(<LabourRoomPage />) },
        { path: 'tools/drug-vault', element: s(<DrugVaultPage />) },
        { path: 'tools/drug-vault/:slug', element: s(<DrugVaultPage />) },
        { path: 'tools/:module', element: s(<ComingSoonPage />) },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  useHash ? undefined : { basename: import.meta.env.BASE_URL.replace(/\/$/, '') || '/' },
);

export default function App() {
  return (
    <AuthProvider>
      <ReviewProvider>
        <ReaderChecksProvider>
        <VaultProvider>
          <ToastProvider>
            <RouterProvider router={router} />
            <GettingStarted />
            <UpdateBanner />
          </ToastProvider>
        </VaultProvider>
        </ReaderChecksProvider>
      </ReviewProvider>
    </AuthProvider>
  );
}
