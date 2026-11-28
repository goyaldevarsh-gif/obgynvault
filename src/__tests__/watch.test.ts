import { describe, expect, it } from 'vitest';
import { getGuideline, getTopic, TOPICS, WATCH } from '@/data';

describe('guideline watch flags', () => {
  it('pending updates point at real topics and guidelines', () => {
    for (const [slug, p] of Object.entries(WATCH.pending)) {
      expect(getTopic(slug), slug).toBeDefined();
      expect(getGuideline(p.guidelineId), p.guidelineId).toBeDefined();
    }
  });
  it('every "not yet verified" line cites the guideline it came from', () => {
    for (const t of TOPICS) {
      const full = getTopic(t.slug)!;
      const points = [...full.keyPoints, ...full.sections.flatMap((s) => s.body)];
      for (const pt of points) {
        if (!pt.update) continue;
        expect(getGuideline(pt.update.guidelineId), pt.update.guidelineId).toBeDefined();
        expect(pt.refs?.some((r) => r.guidelineId === pt.update!.guidelineId), pt.text).toBe(true);
      }
    }
  });
});
