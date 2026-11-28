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

/**
 * Abbreviations, brand-ish names and British/American spellings clinicians actually type.
 * Keys are normalised single words; a query word matches if it or any alternative matches.
 */
const SYNONYMS: Record<string, string[]> = {
  pe: ['preeclampsia', 'pre eclampsia'], pih: ['preeclampsia', 'hypertension'], hdp: ['preeclampsia', 'hypertension'], gh: ['gestational hypertension'],
  eclampsia: ['preeclampsia'], hellp: ['preeclampsia'], mgso4: ['magnesium'], pritchard: ['magnesium'], zuspan: ['magnesium'],
  pph: ['postpartum haemorrhage'], aph: ['antepartum haemorrhage'], pp: ['placenta praevia'], previa: ['praevia'], abruption: ['antepartum haemorrhage', 'abruption'],
  gdm: ['gestational diabetes'], ogtt: ['gestational diabetes', 'ogtt'], dipsi: ['gestational diabetes'],
  iugr: ['fetal growth restriction'], fgr: ['fetal growth restriction'], sga: ['fetal growth restriction', 'small for gestational age'],
  ptl: ['preterm labour'], prom: ['prom'], pprom: ['pprom'], ptb: ['preterm'], tocolysis: ['tocolysis', 'nifedipine', 'atosiban'],
  iol: ['induction of labour'], induction: ['induction of labour'], lscs: ['caesarean'], cs: ['caesarean'], csection: ['caesarean'], vbac: ['vbac', 'previous caesarean'], tolac: ['vbac'],
  ecv: ['breech', 'external cephalic'], iufd: ['stillbirth', 'fetal death'], iud: ['stillbirth', 'intrauterine'], sb: ['stillbirth'],
  ivf: ['infertility'], art: ['antiretroviral', 'assisted reproduction'], oi: ['ovulation induction', 'letrozole'], amh: ['amh', 'ovarian reserve'],
  aub: ['abnormal uterine bleeding'], hmb: ['heavy menstrual bleeding', 'abnormal uterine bleeding'], dub: ['abnormal uterine bleeding'], palm: ['abnormal uterine bleeding'], coein: ['abnormal uterine bleeding'],
  pmb: ['postmenopausal bleeding'], pcos: ['polycystic'], pcod: ['polycystic'], poi: ['premature ovarian insufficiency'], pof: ['premature ovarian insufficiency'],
  fibroid: ['fibroids', 'leiomyoma'], myoma: ['fibroids', 'leiomyoma'], leiomyoma: ['fibroids'], tah: ['hysterectomy'],
  pid: ['pelvic inflammatory disease'], std: ['sexually transmitted'], sti: ['sexually transmitted'], bv: ['bacterial vaginosis'], vvc: ['candida', 'vulvovaginal'],
  pop: ['prolapse'], popq: ['pop q', 'prolapse'], sui: ['stress urinary incontinence'], uui: ['urge urinary incontinence'], oab: ['overactive bladder'],
  oasis: ['obstetric anal sphincter'], oasi: ['obstetric anal sphincter'], episiotomy: ['episiotomy'], tear: ['perineal'],
  mtp: ['medical termination', 'abortion'], abortion: ['termination', 'miscarriage'], mva: ['manual vacuum aspiration'], rpl: ['recurrent pregnancy loss', 'recurrent miscarriage'],
  ectopic: ['ectopic'], mtx: ['methotrexate'], gtd: ['gestational trophoblastic'], gtn: ['gestational trophoblastic'], mole: ['molar', 'gestational trophoblastic'],
  hg: ['hyperemesis'], nvp: ['nausea and vomiting'], icp: ['cholestasis'], ocp: ['cholestasis', 'oral contraceptive'], udca: ['ursodeoxycholic'],
  vte: ['venous thromboembolism', 'thrombosis'], dvt: ['venous thromboembolism', 'deep vein'], lmwh: ['low molecular weight heparin', 'enoxaparin'],
  hiv: ['hiv'], hbv: ['hepatitis b'], hbsag: ['hepatitis b'], vdrl: ['syphilis'], rpr: ['syphilis'], pptct: ['hiv', 'syphilis'],
  rh: ['rh', 'anti d'], antid: ['anti d'], isoimmunisation: ['alloimmunisation', 'isoimmunisation'],
  tsh: ['thyroid'], hypothyroid: ['thyroid'], hyperthyroid: ['thyroid'], ptu: ['propylthiouracil'],
  anc: ['antenatal care'], pnc: ['postnatal', 'postpartum'], ppiucd: ['postpartum contraception', 'iucd'], iucd: ['intrauterine', 'iucd', 'copper'], cuiud: ['copper'],
  dmpa: ['dmpa', 'antara'], ec: ['emergency contraception'], ecp: ['emergency contraception'], lng: ['levonorgestrel'], mirena: ['lng ius'],
  hrt: ['menopausal hormone therapy', 'hormone therapy'], mht: ['menopausal hormone therapy'], cin: ['cervical intraepithelial', 'cervical screening'],
  pap: ['cytology', 'cervical screening'], via: ['visual inspection', 'cervical screening'], hpv: ['hpv'], leep: ['lletz', 'excision'], lletz: ['excision', 'lletz'],
  ca: ['cancer'], carcinoma: ['cancer'], ovarian: ['ovarian'], endometrial: ['endometrial'], eh: ['endometrial hyperplasia'],
  ida: ['iron deficiency', 'anaemia'], fcm: ['ferric carboxymaltose'], ivi: ['intravenous iron'], hb: ['haemoglobin', 'anaemia'],
  sepsis: ['sepsis'], chorio: ['chorioamnionitis'], chorioamnionitis: ['chorioamnionitis', 'intrapartum fever'],
  mca: ['middle cerebral artery'], ctg: ['cardiotocograph', 'ctg'], bpp: ['biophysical profile'], afi: ['amniotic fluid'],
  pas: ['placenta accreta'], accreta: ['placenta accreta'], percreta: ['placenta accreta'], increta: ['placenta accreta'],
  sd: ['shoulder dystocia'], mcroberts: ['shoulder dystocia'], ttts: ['twin to twin', 'monochorionic'], mcda: ['monochorionic'], dcda: ['dichorionic'],
  // spellings
  anemia: ['anaemia'], hemorrhage: ['haemorrhage'], haemorrhage: ['haemorrhage', 'hemorrhage'], cesarean: ['caesarean'], fetal: ['fetal', 'foetal'],
  edema: ['oedema'], estrogen: ['oestrogen'], gynecology: ['gynaecology'], sulfate: ['sulphate', 'sulfate'], sulphate: ['sulfate', 'sulphate'],
  labor: ['labour'], tumor: ['tumour'], hysteroscopy: ['hysteroscopic'], ultrasound: ['ultrasound', 'scan', 'usg'], usg: ['ultrasound'],
};

function scoreText(query: string[], fields: Array<[string, number]>): number {
  let total = 0;
  for (const term of query) {
    const alts = [term, ...(SYNONYMS[term] ?? []).map(norm)];
    let best = 0;
    for (const [text, weight] of fields) {
      const t = norm(text);
      for (const a of alts) {
        const multi = a.includes(' ');
        if (t === a) best = Math.max(best, weight * 3);
        else if (!multi && a.length > 2 && t.split(/\s+/).some((w) => w.startsWith(a))) best = Math.max(best, weight * 2);
        else if (!multi && a.length <= 2 && t.split(/\s+/).includes(a)) best = Math.max(best, weight * 2);
        else if ((multi || a.length > 2) && t.includes(a)) best = Math.max(best, weight);
      }
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
