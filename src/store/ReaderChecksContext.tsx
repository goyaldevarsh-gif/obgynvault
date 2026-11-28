import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { getBackend, type CheckVerdict, type ReaderCheck } from '@/lib/backend';
import { useAuth } from './AuthContext';

/**
 * Reader checks: any signed-in doctor can say "I compared this topic with the cited guidelines and it
 * matches" or "I found a problem" (with a note). This does not make a topic verified; it shows readers
 * how many colleagues checked it and sends problems to the admin queue.
 */
export type { ReaderCheck, CheckVerdict };

export interface CheckSummary {
  matches: number;
  problems: ReaderCheck[];
  mine: ReaderCheck | null;
}

interface ChecksApi {
  summary: (slug: string) => CheckSummary;
  allProblems: ReaderCheck[];
  submit: (slug: string, verdict: CheckVerdict, note: string) => Promise<string | null>;
}

const Ctx = createContext<ChecksApi | null>(null);

export function ReaderChecksProvider({ children }: { children: ReactNode }) {
  const { userId, name, email } = useAuth();
  const [rows, setRows] = useState<ReaderCheck[]>([]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    getBackend()
      .then((b) => b?.listReaderChecks())
      .then((r) => {
        if (!cancelled && r) setRows(r);
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, [tick]);

  const summary = useCallback(
    (slug: string): CheckSummary => {
      const mineRows = rows.filter((r) => r.topic_slug === slug);
      return {
        matches: mineRows.filter((r) => r.verdict === 'matches').length,
        problems: mineRows.filter((r) => r.verdict === 'problem'),
        mine: userId ? (mineRows.find((r) => r.user_id === userId) ?? null) : null,
      };
    },
    [rows, userId],
  );

  const submit = useCallback(
    async (slug: string, verdict: CheckVerdict, note: string) => {
      const b = await getBackend();
      if (!b || !userId) return 'Please sign in first (Profile tab → Sign in).';
      const err = await b.setReaderCheck({ slug, uid: userId, verdict, note: note.trim() ? note.trim().slice(0, 600) : null, name: name ?? email });
      if (!err) setTick((t) => t + 1);
      return err;
    },
    [userId, name, email],
  );

  const allProblems = useMemo(() => rows.filter((r) => r.verdict === 'problem').sort((a, b) => (a.created_at < b.created_at ? 1 : -1)), [rows]);
  const api = useMemo(() => ({ summary, allProblems, submit }), [summary, allProblems, submit]);
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useReaderChecks(): ChecksApi {
  const c = useContext(Ctx);
  if (!c) throw new Error('useReaderChecks must be used inside <ReaderChecksProvider>');
  return c;
}
