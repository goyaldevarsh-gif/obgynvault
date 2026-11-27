import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { getBackend, isBackendConfigured, type BackendUser, type Role } from '@/lib/backend';

export type { Role };

interface AuthApi {
  configured: boolean;
  loading: boolean;
  userId: string | null;
  email: string | null;
  name: string | null;
  role: Role | null;
  isEditor: boolean;
  /** Sends a one-time sign-in link to the email. Returns an error message, or null on success. */
  signIn: (email: string) => Promise<string | null>;
  signInWithGoogle: () => Promise<string | null>;
  signOut: () => Promise<void>;
}

const AuthCtx = createContext<AuthApi | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<BackendUser | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(isBackendConfigured);

  useEffect(() => {
    let unsub: (() => void) | undefined;
    let cancelled = false;
    getBackend().then((b) => {
      if (!b || cancelled) return;
      unsub = b.onUser((u) => {
        setUser(u);
        setLoading(false);
        setRole(null);
        if (u) b.getRole(u).then(setRole).catch(() => setRole('reader'));
      });
    });
    return () => {
      cancelled = true;
      unsub?.();
    };
  }, []);

  const signIn = useCallback(async (email: string) => {
    const b = await getBackend();
    return b ? b.sendEmailLink(email) : 'Sign-in is not set up yet.';
  }, []);

  const signInWithGoogle = useCallback(async () => {
    const b = await getBackend();
    return b ? b.signInWithGoogle() : 'Sign-in is not set up yet.';
  }, []);

  const signOut = useCallback(async () => {
    const b = await getBackend();
    await b?.signOut();
  }, []);

  const api = useMemo<AuthApi>(() => {
    const r = user ? (role ?? 'reader') : null;
    return {
      configured: isBackendConfigured,
      loading,
      userId: user?.id ?? null,
      email: user?.email ?? null,
      name: user?.name ?? null,
      role: r,
      isEditor: r === 'editor' || r === 'admin',
      signIn,
      signInWithGoogle,
      signOut,
    };
  }, [user, role, loading, signIn, signInWithGoogle, signOut]);

  return <AuthCtx.Provider value={api}>{children}</AuthCtx.Provider>;
}

export function useAuth(): AuthApi {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
