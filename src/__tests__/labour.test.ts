import { describe, expect, it } from 'vitest';
import { classifyCtg, lcgFirstStageAlert, lcgSecondStageAlert, MEWS_PARAMS, mewsLevel, mewsParamScore, niceSuspectedDelay } from '@/lib/labour';

describe('CTG (NICE NG229)', () => {
  it('all white is normal', () => {
    expect(classifyCtg({ contractions: 'lt5', baseline: 'normal', variability: 'normal', decelerations: 'none' }).category).toBe('normal');
  });
  it('one amber is suspicious, two amber pathological', () => {
    expect(classifyCtg({ contractions: 'ge5', baseline: 'normal', variability: 'normal', decelerations: 'none' }).category).toBe('suspicious');
    expect(classifyCtg({ contractions: 'ge5', baseline: '100-109', variability: 'normal', decelerations: 'none' }).category).toBe('pathological');
  });
  it('late decelerations are red', () => {
    const r = classifyCtg({ contractions: 'lt5', baseline: 'normal', variability: 'normal', decelerations: 'late' });
    expect(r.category).toBe('pathological');
    expect(r.acuteBradycardia).toBe(false);
  });
  it('flags the acute bradycardia pathway', () => {
    expect(classifyCtg({ decelerations: 'prolonged' }).acuteBradycardia).toBe(true);
    expect(classifyCtg({ decelerations: 'prolonged' }).complete).toBe(false);
  });
});

describe('Labour progress', () => {
  it('WHO LCG first-stage limits', () => {
    expect(lcgFirstStageAlert(5, 5.9)?.alert).toBe(false);
    expect(lcgFirstStageAlert(5, 6)?.alert).toBe(true);
    expect(lcgFirstStageAlert(8, 2.5)?.alert).toBe(true);
    expect(lcgFirstStageAlert(4, 3)).toBeNull();
  });
  it('WHO LCG second stage', () => {
    expect(lcgSecondStageAlert('nulliparous', 2.5)?.alert).toBe(false);
    expect(lcgSecondStageAlert('multiparous', 2)?.alert).toBe(true);
  });
  it('NICE suspected delay', () => {
    expect(niceSuspectedDelay(1.5)).toBe(true);
    expect(niceSuspectedDelay(2)).toBe(false);
  });
});

describe('MEWS', () => {
  const p = (k: string) => MEWS_PARAMS.find((x) => x.key === k)!.bands;
  it('scores bands', () => {
    expect(mewsParamScore(p('hr'), 71)).toBe(0);
    expect(mewsParamScore(p('hr'), 70)).toBe(1);
    expect(mewsParamScore(p('hr'), 122)).toBe(2);
    expect(mewsParamScore(p('spo2'), 95)).toBe(0);
    expect(mewsParamScore(p('sbp'), 145)).toBe(2);
  });
  it('escalation levels', () => {
    expect(mewsLevel(1, false)).toBe('low');
    expect(mewsLevel(2, false)).toBe('low-medium');
    expect(mewsLevel(5, false)).toBe('medium');
    expect(mewsLevel(8, false)).toBe('high');
    expect(mewsLevel(0, true)).toBe('low-medium');
    expect(mewsLevel(3, true)).toBe('medium');
  });
});
