import { describe, expect, it } from 'vitest';
import { search } from '@/lib/search';

describe('search', () => {
  it('finds a topic by a drug mentioned only in its body', () => {
    const slugs = search('methotrexate').filter((r) => r.kind === 'topic').map((r) => (r.kind === 'topic' ? r.item.slug : ''));
    expect(slugs.join(' ')).toContain('ectopic');
  });

  it('ranks the title match first', () => {
    const first = search('preeclampsia')[0];
    expect(first.kind).toBe('topic');
  });

  it('returns nothing for an empty query', () => {
    expect(search('   ')).toEqual([]);
  });
});
