import { useCallback } from 'react';
import { useToast } from '@/store/ToastContext';

export function useShare() {
  const toast = useToast();
  return useCallback(
    async (title: string) => {
      const url = window.location.href;
      try {
        if (navigator.share) {
          await navigator.share({ title, url });
          return;
        }
        await navigator.clipboard.writeText(url);
        toast('Link copied');
      } catch {
        /* user cancelled share sheet */
      }
    },
    [toast],
  );
}
