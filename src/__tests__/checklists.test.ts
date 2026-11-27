import { describe, expect, it } from 'vitest';
import { CHECKLISTS, getGuideline, getTopic } from '@/data';

describe('labour room checklists', () => {
  it('link to real topics and cite real guidelines', () => {
    for (const c of CHECKLISTS) {
      expect(getTopic(c.topicSlug), c.topicSlug).toBeDefined();
      for (const g of c.groups)
        for (const it of g.items) {
          expect(it.refs.length, it.text).toBeGreaterThan(0);
          for (const r of it.refs) expect(getGuideline(r.guidelineId), r.guidelineId).toBeDefined();
        }
    }
  });
});
