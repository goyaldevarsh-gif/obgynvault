import { GUIDELINES, TOPICS, getSource } from '@/data';
import type { Guideline, Topic } from '@/types/content';

/**
 * Client-side search over the sample catalogue. In Phase 3 this is replaced by a Supabase
 * RPC (Postgres full-text + pg_trgm), returning the same SearchResult shape.
 */
export type SearchResult =
  | { kind: 'topic'; score: number; item: Topic }
  | { kind: 'guideline'; score: number; item: Guideline };

const norm = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N}\s]/gu, ' ');

function scoreText(query: string[], fields: Array<[string, number]>): number {
  let total = 0;
  for (const term of query) {
    let best = 0;
    for (const [text, weight] of fields) {
      const t = norm(text);
      if (t === term) best = Math.max(best, weight * 3);
      else if (t.split(/\s+/).some((w) => w.startsWith(term))) best = Math.max(best, weight * 2);
      else if (t.includes(term)) best = Math.max(best, weight);
    }
    if (best === 0) return 0; // every term must match somewhere
    total += best;
  }
  return total;
}

export function search(raw: string): SearchResult[] {
  const terms = norm(raw).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  const results: SearchResult[] = [];
  for (const t of TOPICS) {
    const score = scoreText(terms, [
      [t.title, 10],
      ...t.tags.map((x) => [x, 8] as [string, number]),
      [t.subtitle, 4],
      [t.category, 3],
    ]);
    if (score) results.push({ kind: 'topic', score: score + 5, item: t });
  }
  for (const g of GUIDELINES) {
    const src = getSource(g.sourceId);
    const score = scoreText(terms, [
      [g.title, 8],
      [src.shortName, 6],
      [g.reference ?? '', 6],
      [g.documentType, 2],
      ...g.topicSlugs.map((x) => [x.replace(/-/g, ' '), 5] as [string, number]),
    ]);
    if (score) results.push({ kind: 'guideline', score: score - src.priority * 0.1, item: g });
  }
  return results.sort((a, b) => b.score - a.score);
}

export const TRENDING_SEARCHES = ['Preeclampsia', 'PPH', 'GDM', 'Ectopic', 'PCOS', 'Fibroids'];
