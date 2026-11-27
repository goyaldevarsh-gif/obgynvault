import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { getBackend, type ReviewRecord, type ReviewStatus } from '@/lib/backend';
import type { VerificationStatus } from '@/types/content';
import { useAuth } from './AuthContext';

/**
 * Clinical review status for topics, from the backend review log (Firestore `topicReviews`).
 * The latest review overrides the status written in the content file. Without a backend,
 * every topic keeps the status in its file (draft or sample).
 */
export type { ReviewRecord, ReviewStatus };

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
  const [all, setAll] = useState<ReviewRecord[]>([]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    getBackend()
      .then((b) => b?.listReviews())
      .then((rows) => {
        if (cancelled || !rows) return;
        setAll(rows);
        const m = new Map<string, ReviewRecord>();
        for (const r of rows) if (!m.has(r.topic_slug)) m.set(r.topic_slug, r); // rows are newest first
        setLatest(m);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [tick]);

  const statusFor = useCallback(
    (slug: string, fallback: VerificationStatus): VerificationStatus => {
      const r = latest.get(slug);
      if (!r || fallback === 'sample') return fallback; // sample placeholders can never become verified
      return r.status === 'changes_requested' ? 'in_review' : r.status;
    },
    [latest],
  );

  const history = useCallback(async (slug: string) => all.filter((r) => r.topic_slug === slug), [all]);

  const submit = useCallback(
    async (slug: string, status: ReviewStatus, comment: string) => {
      const b = await getBackend();
      if (!b || !userId) return 'Please sign in first.';
      const error = await b.addReview({ slug, status, comment: comment.trim() || null, reviewerId: userId, reviewerName: name ?? email });
      if (error) return error;
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
