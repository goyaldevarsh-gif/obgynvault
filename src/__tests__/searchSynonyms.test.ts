import { describe, expect, it } from 'vitest';
import { search } from '@/lib/search';

const top = (q: string) => search(q).find((r) => r.kind === 'topic')?.item.slug;

describe('search understands abbreviations and spellings', () => {
  it.each([
    ['PE', 'preeclampsia'],
    ['MgSO4', 'preeclampsia'],
    ['PPH', 'postpartum-haemorrhage'],
    ['IUGR', 'fetal-growth-restriction'],
    ['AUB', 'abnormal-uterine-bleeding'],
    ['LSCS', 'caesarean-section'],
    ['IUFD', 'stillbirth-iufd'],
    ['hemorrhage postpartum', 'postpartum-haemorrhage'],
    ['anemia', 'anaemia-in-pregnancy'],
    ['GDM', 'gestational-diabetes'],
    ['OASIS', 'perineal-tears-oasis'],
  ])('%s → %s', (q, slug) => {
    expect(top(q)).toBe(slug);
  });
});
