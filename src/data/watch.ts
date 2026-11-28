/**
 * Guideline Watch. Updated every week by the scheduled "Guideline Watch" job (see docs/GUIDELINE-WATCH.md).
 * - lastChecked: date the cited guidelines were last checked against their official pages.
 * - pending: topics updated from a new or changed guideline whose new text is NOT yet verified by a clinician.
 *   The topic shows a banner, and each changed CitedPoint carries `update` so readers see "not yet verified".
 * - FEED: what the What's new page shows, newest first.
 * Policy (Devarsh, 28 Nov 2026): the weekly job applies guideline changes straight to the topic text on main,
 * flags every changed line, and lists what needs verifying. Nothing waits for approval.
 */
export interface PendingUpdate {
  guidelineId: string;
  note: string; // what changed, in one line
  detected: string; // ISO date the change was applied
  /** Short list of the changed statements, shown on What's new and in the topic banner. */
  changes?: string[];
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
  { id: 'topic-aph-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Antepartum Haemorrhage', body: 'First-response flowchart, placenta praevia timing, abruption and vasa praevia (FOGSI, RCOG 27a/27b, NHS).', to: '/topics/antepartum-haemorrhage' },
  { id: 'topic-pop-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Pelvic Organ Prolapse', body: 'PFMT, pessary care, surgery by compartment and mesh rules from NICE NG123, with a flowchart and POP-Q table.', to: '/topics/pelvic-organ-prolapse' },
  { id: 'topic-mtp-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Medical Termination of Pregnancy (India)', body: 'MTP Act and Rules 2021 limits and forms, medical abortion up to 9 weeks, MVA steps, and when to start each contraceptive (MoHFW CAC 2023).', to: '/topics/mtp-india' },
  { id: 'topic-misc-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Miscarriage & Recurrent Pregnancy Loss', body: 'Expectant, medical and MVA pathways with doses (NICE, MoHFW CAC, WHO, ACOG), progesterone positions, RPL work-up and APS treatment (ESHRE, RANZCOG).', to: '/topics/miscarriage-rpl' },
  { id: 'app-rmi-2026-11-28', date: '2026-11-28', kind: 'app', title: 'Calculator: RMI for ovarian masses', body: 'RMI I with both cut-offs shown (RCOG/NHS 200, NICE 250). Bishop score now shows the NICE threshold.', to: '/tools/calculators' },
  { id: 'topic-ovary-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Ovarian Cyst & Adnexal Mass', body: 'Pre- and postmenopausal flowcharts, RMI I scoring table, IOTA, follow-up by cyst size and surgery (RCOG GTG 62, NICE CG122).', to: '/topics/ovarian-cyst-adnexal-mass' },
  { id: 'topic-pid-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: PID & Vaginal Discharge', body: 'NACO colour-coded kits, CDC 2021 PID regimens and admission criteria, BV, candida and trichomonas, with a PID flowchart.', to: '/topics/pid-vaginal-discharge' },
  { id: 'app-checklists-2026-11-28', date: '2026-11-28', kind: 'app', title: 'Labour room: IOL and VBAC checklists', body: 'Tick-as-you-go bedside checklists, each line cited. Plus flowcharts in Ectopic, Hyperemesis, PROM and Endometrial Hyperplasia.', to: '/tools/labour-room' },
  { id: 'topic-eh-2026-11-28', date: '2026-11-28', kind: 'topic', title: 'New: Endometrial Hyperplasia', body: 'LNG-IUS first line, surveillance biopsies, when to operate and fertility-sparing care (RCOG GTG 67), with a flowchart.', to: '/topics/endometrial-hyperplasia' },
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
