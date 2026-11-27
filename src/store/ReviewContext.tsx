import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import type { VerificationStatus } from '@/types/content';
import { useAuth } from './AuthContext';

/**
 * Clinical review status for topics, from the Supabase `topic_reviews` table.
 * The latest review overrides the status written in the content file. Without a backend,
 * every topic keeps the status in its file (draft or sample).
 */
export type ReviewStatus = 'draft' | 'in_review' | 'changes_requested' | 'verified';

export interface ReviewRecord {
  topic_slug: string;
  status: ReviewStatus;
  comment: string | null;
  reviewer_name: string | null;
  created_at: string;
}

interface ReviewApi {
  latest: Map<string, ReviewRecord>;
  statusFor: (slug: string, fallback: VerificationStatus) => VerificationStatus;
  history: (slug: string) => Promise<ReviewRecord[]>;
  submit: (slug: string, status: ReviewStatus, comment: string) => Promise<string | null>;
  refresh: () => void;
}

const ReviewCtx = createContext<ReviewApi | null>(null);

export function ReviewProvider({ children }: { children: ReactNode }) {
  const { userId, email, name } = useAuth();
  const [latest, setLatest] = useState<Map<string, ReviewRecord>>(new Map());
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!supabase) return;
    supabase
      .from('topic_review_status')
      .select('*')
      .then(({ data }) => setLatest(new Map((data ?? []).map((r) => [r.topic_slug as string, r as ReviewRecord]))));
  }, [tick]);

  const statusFor = useCallback(
    (slug: string, fallback: VerificationStatus): VerificationStatus => {
      const r = latest.get(slug);
      if (!r || fallback === 'sample') return fallback; // sample placeholders can never become verified
      return r.status === 'changes_requested' ? 'in_review' : r.status;
    },
    [latest],
  );

  const history = useCallback(async (slug: string) => {
    if (!supabase) return [];
    const { data } = await supabase.from('topic_reviews').select('*').eq('topic_slug', slug).order('created_at', { ascending: false });
    return (data ?? []) as ReviewRecord[];
  }, []);

  const submit = useCallback(
    async (slug: string, status: ReviewStatus, comment: string) => {
      if (!supabase || !userId) return 'Please sign in first.';
      const { error } = await supabase
        .from('topic_reviews')
        .insert({ topic_slug: slug, status, comment: comment.trim() || null, reviewer_id: userId, reviewer_name: name ?? email });
      if (error) return error.message;
      setTick((t) => t + 1);
      return null;
    },
    [userId, name, email],
  );

  const api = useMemo<ReviewApi>(() => ({ latest, statusFor, history, submit, refresh: () => setTick((t) => t + 1) }), [latest, statusFor, history, submit]);
  return <ReviewCtx.Provider value={api}>{children}</ReviewCtx.Provider>;
}

export function useReviews(): ReviewApi {
  const ctx = useContext(ReviewCtx);
  if (!ctx) throw new Error('useReviews must be used inside <ReviewProvider>');
  return ctx;
}
