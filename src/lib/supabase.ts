import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Supabase client. It exists only when both env vars are set at build time
 * (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY). Without them the app runs fully offline
 * on localStorage, exactly as in Phase 1.
 */
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabase: SupabaseClient | null = url && anonKey ? createClient(url, anonKey) : null;
export const isBackendConfigured = supabase !== null;
