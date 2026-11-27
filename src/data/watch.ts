/**
 * Guideline Watch. Updated every week by the scheduled "Guideline Watch" job (see docs/GUIDELINE-WATCH.md).
 * - lastChecked: date the cited guidelines were last checked against their official pages.
 * - pending: topics whose source guideline changed; an updated draft is waiting for clinician review.
 * - FEED: what the bell on Home shows, newest first.
 * Only this metadata is changed automatically. Clinical text changes always go through a reviewed pull request.
 */
export interface PendingUpdate {
  guidelineId: string;
  note: string; // what changed, in one line
  detected: string; // ISO date
  prUrl?: string;
}

export interface FeedItem {
  id: string;
  date: string; // ISO date
  kind: 'guideline' | 'topic' | 'app';
  title: string;
  body: string;
  to?: string;
}

export const WATCH: { lastChecked: string; pending: Record<string, PendingUpdate> } = {
  lastChecked: '2026-11-27',
  pending: {},
};

export const FEED: FeedItem[] = [
  { id: 'topic-hg-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Hyperemesis Gravidarum', body: 'Stepwise antiemetics, admission criteria, fluids, thiamine and steroids from FOGSI and RCOG 2024.', to: '/topics/hyperemesis-gravidarum' },
  { id: 'topic-ppfp-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Postpartum Contraception', body: 'PPIUCD windows, Antara, Chhaya, LAM and sterilisation timing from MoHFW and FOGSI, with WHO MEC 2025 changes.', to: '/topics/postpartum-contraception' },
  { id: 'topic-sepsis-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Intrapartum Fever & Maternal Sepsis', body: 'Fever thresholds, chorioamnionitis antibiotics, and the sepsis first-hour plan from NICE NG255 (2025) and ACOG.', to: '/topics/intrapartum-fever-sepsis' },
  { id: 'topic-twins-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Twin Pregnancy', body: 'Chorionicity, scan schedule, TTTS/TAPS, preterm prevention and timing of birth for DCDA, MCDA and MCMA.', to: '/topics/twin-pregnancy' },
  { id: 'topic-vbac-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Birth after Caesarean (VBAC)', body: 'Selection, counselling numbers, labour management, induction rules, uterine rupture and repeat caesarean timing.', to: '/topics/vbac' },
  { id: 'topic-prom-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: PROM & PPROM', body: 'Step-by-step PPROM management (antibiotics, steroids, MgSO4, timing) and term PROM, with FOGSI, NICE, RCOG, ACOG and WHO compared.', to: '/topics/prom-pprom' },
  { id: 'app-drug-vault-2026-11-28', date: '2026-11-28', kind: 'app', title: 'Drug Vault is live', body: 'What the guidelines say about 34 drugs, each line cited, gathered from the topic reviews.', to: '/tools/drug-vault' },
  { id: 'topic-iol-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Induction of Labour', body: 'Timing, Bishop score, misoprostol, Foley, oxytocin and previous caesarean, with FOGSI, MoHFW, NICE, WHO and ACOG side by side.', to: '/topics/induction-of-labour' },
  { id: 'app-labour-room-2026-11-28', date: '2026-11-28', kind: 'app', title: 'Labour room toolkit', body: 'CTG classifier (NICE NG229), labour progress checks (WHO LCG, NICE) and the NHS maternity early warning score.', to: '/tools/labour-room' },
  { id: '2026-11-27-share', date: '2026-11-27', kind: 'app', title: 'Share any topic as a summary card', body: 'Tap Share on a topic to send a clean summary image on WhatsApp.', to: '/topics/postpartum-haemorrhage' },
  { id: '2026-11-27-ng257', date: '2026-11-27', kind: 'guideline', title: 'NICE NG257 replaces CG156', body: 'Fertility problems: assessment and treatment (March 2026) is now the NICE source for infertility.', to: '/topics/infertility-evaluation' },
  { id: '2026-11-27-gtg65', date: '2026-11-27', kind: 'guideline', title: 'RCOG GTG 65 archived', body: 'RCOG archived its red-cell antibody guideline in January 2026; the review now follows BSH 2025.', to: '/topics/rh-isoimmunisation' },
  { id: '2026-11-27-hpv', date: '2026-11-27', kind: 'guideline', title: 'National HPV vaccination launched', body: 'Single-dose Gardasil-4 for girls aged 14, from 28 February 2026.', to: '/topics/cervical-screening' },
  { id: '2026-11-27-topics', date: '2026-11-27', kind: 'topic', title: '8 new topic reviews', body: 'PAS, shoulder dystocia, antenatal care, cervical screening, infertility, menopause and more.', to: '/library' },
];
