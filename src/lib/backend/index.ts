import type { Backend } from './types';

export * from './types';

/**
 * Firebase web config comes from build-time env vars. These values are public by design
 * (they ship in every Firebase web app); access is controlled by firestore.rules.
 */
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
  recaptchaKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined,
};

export const isBackendConfigured = !!(config.apiKey && config.authDomain && config.projectId && config.appId);

let pending: Promise<Backend | null> | null = null;

/** Loads the Firebase SDK only when configured, so the on-device build stays small. */
export function getBackend(): Promise<Backend | null> {
  if (!isBackendConfigured) return Promise.resolve(null);
  pending ??= import('./firebase').then((m) => m.createFirebaseBackend(config as { apiKey: string; authDomain: string; projectId: string; appId: string; recaptchaKey?: string }));
  return pending;
}
