import { describe, expect, it } from 'vitest';
import { GUIDELINES, TOPICS, getGuideline } from '@/data';
import { SECTION_ICONS } from '@/components/content/sectionIcons';
import type { CitedPoint } from '@/types/content';

/**
 * Safety net for clinical content: every citation must point to a real guideline entry,
 * so no statement in the app can appear without a traceable source.
 */
const authored = TOPICS.filter((t) => t.status !== 'sample');

function points(t: (typeof TOPICS)[number]): CitedPoint[] {
  return [...t.keyPoints, ...t.sections.flatMap((s) => s.body)];
}

describe('content integrity', () => {
  it('has authored topic reviews', () => {
    expect(authored.length).toBeGreaterThanOrEqual(13);
  });

  it('guideline ids are unique', () => {
    const ids = GUIDELINES.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  for (const t of authored) {
    describe(t.slug, () => {
      it('every citation resolves to a guideline', () => {
        for (const p of points(t)) for (const r of p.refs ?? []) expect(getGuideline(r.guidelineId), `${t.slug}: ${r.guidelineId}`).toBeDefined();
        for (const pos of t.positions ?? []) for (const e of pos.entries) expect(getGuideline(e.guidelineId), `${t.slug}: ${e.guidelineId}`).toBeDefined();
      });

      it('every key point and section paragraph is cited', () => {
        for (const p of points(t)) expect(p.refs?.length ?? 0, `${t.slug}: "${p.text.slice(0, 60)}"`).toBeGreaterThan(0);
      });

      it('section ids are unique and icons exist', () => {
        const ids = t.sections.map((s) => s.id);
        expect(new Set(ids).size).toBe(ids.length);
        for (const s of t.sections) expect(SECTION_ICONS[s.icon], `${t.slug}/${s.id}: ${s.icon}`).toBeDefined();
      });

      it('tables are rectangular', () => {
        for (const p of points(t)) if (p.table) for (const row of p.table.rows) expect(row.length, `${t.slug}: ${p.table.caption ?? p.text.slice(0, 40)}`).toBe(p.table.columns.length);
      });

      it('is not marked verified in the content file', () => {
        expect(t.status).not.toBe('verified');
      });
    });
  }
});
