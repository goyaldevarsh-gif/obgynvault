import { registerSW } from 'virtual:pwa-register';

/**
 * Keeps the installed app current without the user reinstalling or reopening it:
 * - checks for a new version on launch, whenever the app comes back to the foreground, and every 30 minutes;
 * - applies it at once if it arrives while the app is starting or in the background;
 * - if it arrives mid-reading, waits until the user leaves the screen (or taps "Refresh") so nothing jumps under them.
 */
export const UPDATE_READY_EVENT = 'obgynvault:update-ready';
const CHECK_EVERY_MS = 30 * 60 * 1000;
const LAUNCH_GRACE_MS = 8000;

let apply: ((reload?: boolean) => Promise<void>) | null = null;

export function applyUpdate() {
  void apply?.(true);
}

export function setupAutoUpdate() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;
  const launchedAt = Date.now();
  let pending = false;

  apply = registerSW({
    immediate: true,
    onNeedRefresh() {
      if (document.visibilityState === 'hidden' || Date.now() - launchedAt < LAUNCH_GRACE_MS) {
        applyUpdate();
        return;
      }
      pending = true;
      window.dispatchEvent(new Event(UPDATE_READY_EVENT));
    },
    onRegisteredSW(_url, reg) {
      if (!reg) return;
      const check = () => {
        if (navigator.onLine) reg.update().catch(() => {});
      };
      window.setInterval(check, CHECK_EVERY_MS);
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') check();
        else if (pending) applyUpdate();
      });
    },
  });
}
