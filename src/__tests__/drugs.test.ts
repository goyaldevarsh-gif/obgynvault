import { describe, expect, it } from 'vitest';
import { DRUGS, drugMentions } from '@/data';

describe('Drug Vault', () => {
  it('slugs are unique', () => {
    expect(new Set(DRUGS.map((d) => d.slug)).size).toBe(DRUGS.length);
  });
  it('every drug is mentioned in at least one cited topic statement', () => {
    for (const d of DRUGS) expect(drugMentions(d).length, d.slug).toBeGreaterThan(0);
  });
  it('every mention carries a citation', () => {
    for (const d of DRUGS) for (const m of drugMentions(d)) expect(m.point.refs?.length ?? 0, `${d.slug} in ${m.topic.slug}`).toBeGreaterThan(0);
  });
});
