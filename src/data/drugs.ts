import { TOPICS } from './topics';
import type { CitedPoint, Topic } from '@/types/content';

/**
 * Drug Vault. A drug page never contains its own clinical claims: it gathers, word for word,
 * the cited statements that already exist in the topic reviews, so every line keeps its guideline
 * citation and its draft/verified status. Add a drug here only with search terms; the content follows.
 */
export interface DrugDef {
  slug: string;
  name: string;
  /** Plain group label for browsing. */
  group: 'Uterotonics' | 'Antihypertensives' | 'Labour & preterm' | 'Haematology' | 'Hormonal' | 'Other';
  /** Case-insensitive patterns matched against topic text. */
  terms: string[];
  aka?: string;
}

export const DRUGS: DrugDef[] = [
  { slug: 'oxytocin', name: 'Oxytocin', group: 'Uterotonics', terms: ['oxytocin'] },
  { slug: 'carbetocin', name: 'Carbetocin', group: 'Uterotonics', terms: ['carbetocin'] },
  { slug: 'misoprostol', name: 'Misoprostol', group: 'Uterotonics', terms: ['misoprostol'] },
  { slug: 'ergometrine', name: 'Ergometrine / methylergometrine', group: 'Uterotonics', terms: ['ergometrine', 'methylergo', 'ergonovine', 'syntometrine'] },
  { slug: 'carboprost', name: 'Carboprost (15-methyl PGF2α)', group: 'Uterotonics', terms: ['carboprost', 'PGF2'] },
  { slug: 'dinoprostone', name: 'Dinoprostone (PGE2)', group: 'Uterotonics', terms: ['dinoprostone', 'PGE2'] },
  { slug: 'tranexamic-acid', name: 'Tranexamic acid', group: 'Haematology', terms: ['tranexamic', '\\bTXA\\b'] },
  { slug: 'magnesium-sulfate', name: 'Magnesium sulfate', group: 'Labour & preterm', terms: ['magnesium sulph?fate', 'MgSO4', 'MgSO₄'] },
  { slug: 'calcium-gluconate', name: 'Calcium gluconate', group: 'Labour & preterm', terms: ['calcium gluconate'] },
  { slug: 'labetalol', name: 'Labetalol', group: 'Antihypertensives', terms: ['labetalol'] },
  { slug: 'nifedipine', name: 'Nifedipine', group: 'Antihypertensives', terms: ['nifedipine'] },
  { slug: 'hydralazine', name: 'Hydralazine', group: 'Antihypertensives', terms: ['hydralazine'] },
  { slug: 'methyldopa', name: 'Methyldopa', group: 'Antihypertensives', terms: ['methyldopa'] },
  { slug: 'aspirin', name: 'Low-dose aspirin', group: 'Other', terms: ['aspirin'] },
  { slug: 'corticosteroids', name: 'Antenatal corticosteroids', group: 'Labour & preterm', terms: ['betamethasone', 'dexamethasone', 'antenatal corticosteroid', 'antenatal steroid'] },
  { slug: 'atosiban', name: 'Atosiban', group: 'Labour & preterm', terms: ['atosiban'] },
  { slug: 'terbutaline', name: 'Terbutaline / betamimetics', group: 'Labour & preterm', terms: ['terbutaline', 'betamimetic', 'salbutamol', 'isoxsuprine'] },
  { slug: 'progesterone', name: 'Progesterone', group: 'Hormonal', terms: ['progesterone', '17-OHPC', 'hydroxyprogesterone'] },
  { slug: 'iron', name: 'Iron (oral and IV)', group: 'Haematology', terms: ['iron sucrose', 'carboxymaltose', '\\bFCM\\b', 'oral iron', '\\bIFA\\b', 'parenteral iron', 'IV iron'] },
  { slug: 'folic-acid', name: 'Folic acid', group: 'Other', terms: ['folic acid', 'folate'] },
  { slug: 'calcium', name: 'Calcium supplements', group: 'Other', terms: ['calcium(?! gluconate| channel)'] },
  { slug: 'anti-d', name: 'Anti-D immunoglobulin', group: 'Haematology', terms: ['anti-D'] },
  { slug: 'lmwh', name: 'Low-molecular-weight heparin', group: 'Haematology', terms: ['LMWH', 'low-molecular-weight heparin', 'enoxaparin', 'dalteparin', 'tinzaparin'] },
  { slug: 'insulin', name: 'Insulin', group: 'Other', terms: ['insulin'] },
  { slug: 'metformin', name: 'Metformin', group: 'Other', terms: ['metformin'] },
  { slug: 'methotrexate', name: 'Methotrexate', group: 'Other', terms: ['methotrexate'] },
  { slug: 'letrozole', name: 'Letrozole', group: 'Hormonal', terms: ['letrozole'] },
  { slug: 'clomiphene', name: 'Clomiphene', group: 'Hormonal', terms: ['clomiphene', 'clomifene'] },
  { slug: 'gnrh', name: 'GnRH analogues', group: 'Hormonal', terms: ['GnRH', 'leuprolide', 'leuprorelin', 'relugolix', 'elagolix'] },
  { slug: 'dienogest', name: 'Dienogest', group: 'Hormonal', terms: ['dienogest'] },
  { slug: 'lng-ius', name: 'LNG-IUS', group: 'Hormonal', terms: ['LNG-IUS', 'levonorgestrel'] },
  { slug: 'hrt', name: 'Menopausal hormone therapy', group: 'Hormonal', terms: ['hormone therapy', '\\bMHT\\b', '\\bHRT\\b', 'oestrogen', 'estrogen'] },
  { slug: 'antibiotics', name: 'Antibiotics (obstetric use)', group: 'Other', terms: ['antibiotic', 'erythromycin', 'ampicillin', 'azithromycin', 'penicillin', 'co-amoxiclav', 'cefazolin', 'clindamycin', 'gentamicin'] },
];

export interface DrugMention {
  topic: Topic;
  section: string;
  heading?: string;
  point: CitedPoint;
}

const cache = new Map<string, DrugMention[]>();

export function drugRegex(d: DrugDef) {
  return new RegExp(d.terms.join('|'), 'i');
}

/** Every cited statement in authored topics that mentions the drug, grouped in reading order. */
export function drugMentions(d: DrugDef): DrugMention[] {
  const hit = cache.get(d.slug);
  if (hit) return hit;
  const re = drugRegex(d);
  const out: DrugMention[] = [];
  const has = (p: CitedPoint) => re.test(p.text) || !!p.table?.rows.some((r) => r.some((c) => re.test(c)));
  for (const t of TOPICS) {
    if (t.status === 'sample') continue;
    for (const p of t.keyPoints) if (has(p)) out.push({ topic: t, section: 'Key points', point: p });
    for (const s of t.sections) {
      let heading: string | undefined;
      for (const p of s.body) {
        if (p.heading) heading = p.heading;
        if (has(p)) out.push({ topic: t, section: s.title, heading, point: p });
      }
    }
  }
  cache.set(d.slug, out);
  return out;
}

export const getDrug = (slug: string) => DRUGS.find((d) => d.slug === slug);
