import { useEffect, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { applyUpdate, UPDATE_READY_EVENT } from '@/lib/pwaUpdate';

/** Small pill shown only when a new version arrives while the app is in use. */
export function UpdateBanner() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const on = () => setReady(true);
    window.addEventListener(UPDATE_READY_EVENT, on);
    return () => window.removeEventListener(UPDATE_READY_EVENT, on);
  }, []);
  if (!ready) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-24 z-50 flex justify-center px-4 md:bottom-6">
      <button
        type="button"
        onClick={applyUpdate}
        className="pointer-events-auto flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white shadow-float dark:bg-teal-600 dark:text-ink"
      >
        <RefreshCw className="size-4" /> New version ready · Refresh
      </button>
    </div>
  );
}
