import { GUIDELINES, TOPICS, getSource } from '@/data';
import type { Guideline, Topic } from '@/types/content';

/**
 * Client-side search over the sample catalogue. In Phase 3 this is replaced by a backend
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

/** Full text of each authored topic (summary, sections, tables), so a search for a drug or test finds the topic that covers it. */
const topicText = new Map(
  TOPICS.map((t) => {
    const parts: string[] = [t.overview ?? ''];
    const add = (p: { heading?: string; text: string; table?: { columns: string[]; rows: string[][] } }) => {
      parts.push(p.heading ?? '', p.text);
      if (p.table) parts.push(p.table.columns.join(' '), ...p.table.rows.flat());
    };
    t.keyPoints.forEach(add);
    t.sections.forEach((s) => {
      parts.push(s.title);
      s.body.forEach(add);
    });
    return [t.slug, parts.join(' ')];
  }),
);

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
      ...t.sections.map((x) => [x.title, 3] as [string, number]),
      [topicText.get(t.slug) ?? '', 1],
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
