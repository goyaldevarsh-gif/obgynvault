import { describe, expect, it } from 'vitest';
import { buildAiContext } from '@/lib/aiContext';

describe('AI context', () => {
  it('finds authored topics and includes cited text', () => {
    const { topics, context } = buildAiContext('postpartum haemorrhage');
    expect(topics.length).toBeGreaterThan(0);
    expect(context).toContain('### TOPIC:');
    expect(context).toMatch(/\[[^\]]+\]/);
    expect(context.length).toBeLessThanOrEqual(60000);
  });
  it('returns nothing for unrelated text', () => {
    expect(buildAiContext('zzqx football').topics).toHaveLength(0);
  });
});
