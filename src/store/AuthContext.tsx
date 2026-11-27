import type { Session } from '@supabase/supabase-js';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { supabase } from '@/lib/supabase';

export type Role = 'reader' | 'editor' | 'admin';

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
  signOut: () => Promise<void>;
}

const AuthCtx = createContext<AuthApi | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<{ role: Role; full_name: string | null } | null>(null);
  const [loading, setLoading] = useState(!!supabase);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!supabase || !session) {
      setProfile(null);
      return;
    }
    supabase
      .from('profiles')
      .select('role, full_name')
      .eq('id', session.user.id)
      .maybeSingle()
      .then(({ data }) => setProfile(data ? { role: data.role as Role, full_name: data.full_name } : { role: 'reader', full_name: null }));
  }, [session]);

  const signIn = useCallback(async (email: string) => {
    if (!supabase) return 'Sign-in is not set up yet.';
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin + window.location.pathname },
    });
    return error ? error.message : null;
  }, []);

  const signOut = useCallback(async () => {
    await supabase?.auth.signOut();
  }, []);

  const api = useMemo<AuthApi>(() => {
    const role = session ? (profile?.role ?? 'reader') : null;
    return {
      configured: !!supabase,
      loading,
      userId: session?.user.id ?? null,
      email: session?.user.email ?? null,
      name: profile?.full_name ?? null,
      role,
      isEditor: role === 'editor' || role === 'admin',
      signIn,
      signOut,
    };
  }, [session, profile, loading, signIn, signOut]);

  return <AuthCtx.Provider value={api}>{children}</AuthCtx.Provider>;
}

export function useAuth(): AuthApi {
  const ctx = useContext(AuthCtx);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
