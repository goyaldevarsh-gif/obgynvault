import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from NICE NG123 (2019, recommendations 1.6–1.11, partly truncated) and AAFP 2017 review.
 * ACOG PB 214 recommendations, FOGSI, RCOG/BSUG not read.
 */
const N = 'nice-ng123';
const AF = 'aafp-pop-2017';
const IU = 'iuga-ics-pop-2016';

export const pelvicOrganProlapse: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Examine and record prolapse by compartment with POP-Q, assess the pelvic floor, exclude a pelvic mass, and ask about bladder, bowel and sexual symptoms. Offer a choice that includes no treatment. First options are lifestyle advice, supervised pelvic floor muscle training for at least 16 weeks (stage 1–2) and a vaginal pessary, which suits most women at any stage. Offer surgery when conservative treatment fails or is declined: native-tissue anterior or posterior repair without mesh; for uterine prolapse hysterectomy or uterus-preserving surgery (sacrospinous hysteropexy, Manchester repair, sacrohysteropexy); for vault prolapse sacrospinous fixation or sacrocolpopexy; colpocleisis for frail women not wanting vaginal intercourse. Transvaginal mesh for anterior or posterior repair is research-only in the UK.',
  keyPoints: [
    { text: 'Specialist examination: record prolapse by compartment with POP-Q, assess pelvic floor muscle activity and exclude a pelvic mass. Do not image routinely when examination shows the prolapse.', refs: [{ guidelineId: N, locator: '1.6.3, 1.6.5' }] },
    { text: 'Discuss all options including no treatment; give lifestyle advice on weight, heavy lifting and constipation.', refs: [{ guidelineId: N, locator: '1.7.1–1.7.2' }, { guidelineId: AF }] },
    { text: 'Stage 1–2: consider supervised pelvic floor muscle training for at least 16 weeks as a first option.', refs: [{ guidelineId: N, locator: '1.7.5' }] },
    { text: 'Pessary for symptomatic prolapse, alone or with PFMT; remove it at least every 6 months. AAFP: first line for most women; fitting succeeds in more than 85%.', refs: [{ guidelineId: N, locator: '1.7.6–1.7.9' }, { guidelineId: AF, locator: 'SORT (C)' }] },
    { text: 'Surgery when non-surgical treatment has not helped or is declined. Anterior and posterior repair without mesh; transvaginal mesh for these is research-only (NICE IPG599).', refs: [{ guidelineId: N, locator: '1.8.1, 1.8.20–1.8.23' }] },
    { text: 'Uterine prolapse, uterus-preserving: sacrospinous hysteropexy with sutures, Manchester repair (unless she may want children), or sacrohysteropexy with mesh. Vault: sacrospinous fixation or sacrocolpopexy with mesh.', refs: [{ guidelineId: N, locator: '1.8.11, 1.8.16' }] },
    { text: 'Do not add continence surgery for continent women having prolapse surgery, but warn about later incontinence after anterior or apical repair.', refs: [{ guidelineId: N, locator: '1.8.3–1.8.4' }, { guidelineId: AF }] },
  ],
  sections: [
    {
      id: 'stepwise',
      title: 'Step-by-step Management',
      icon: 'management',
      body: [
        {
          text: 'Pathway from NICE NG123.',
          refs: [{ guidelineId: N, locator: '1.6–1.8' }],
          flow: {
            caption: 'Pelvic organ prolapse (NICE NG123)',
            steps: [
              { title: 'Assess', text: 'POP-Q by compartment, pelvic floor, exclude pelvic mass; bladder, bowel and sexual symptoms. Urine dipstick and post-void residual (AAFP).' },
              { title: 'Conservative first', tone: 'decision', branches: [
                { when: 'All', then: 'Lifestyle: weight, heavy lifting, constipation; no treatment is an option' },
                { when: 'Stage 1–2', then: 'Supervised PFMT for at least 16 weeks' },
                { when: 'Symptomatic, any stage', then: 'Vaginal pessary ± PFMT; consider vaginal oestrogen first' },
              ] },
              { title: 'Surgery if not improved or declined', tone: 'decision', branches: [
                { when: 'Anterior / posterior wall', then: 'Native-tissue repair without mesh' },
                { when: 'Uterine', then: 'Hysterectomy, or sacrospinous hysteropexy, Manchester repair, sacrohysteropexy' },
                { when: 'Vault', then: 'Sacrospinous fixation or sacrocolpopexy (mesh)' },
                { when: 'Frail, no vaginal intercourse', then: 'Consider colpocleisis' },
              ] },
              { title: 'Review 6 months after surgery', text: 'Vaginal examination; check for mesh exposure if mesh was used.' },
            ],
          },
        },
      ],
    },
    {
      id: 'conservative',
      title: 'Conservative: PFMT, Lifestyle & Oestrogen',
      icon: 'lifestyle',
      body: [
        { heading: 'Pelvic floor muscle training', text: 'NICE: supervised programme for at least 16 weeks as a first option for stage 1 or 2 prolapse. AAFP: 45–60 contractions a day in 2–3 sets; may slightly improve mild prolapse but does not reverse it.', refs: [{ guidelineId: N, locator: '1.7.5' }, { guidelineId: AF }] },
        { heading: 'Lifestyle', text: 'Advice on weight loss, avoiding heavy lifting and constipation, and stopping smoking. Obesity roughly tripled the odds of progression (OR 2.9) but weight loss does not reverse prolapse (AAFP).', refs: [{ guidelineId: N, locator: '1.7.2' }, { guidelineId: AF }] },
        { heading: 'Vaginal oestrogen', text: 'NICE: consider an oestrogen-releasing ring for women with genitourinary symptoms of menopause who may struggle with creams or pessaries. AAFP: a retrospective cohort found vaginal oestrogen did not protect against pessary ulceration or bleeding.', refs: [{ guidelineId: N, locator: '1.7.4' }, { guidelineId: AF }] },
      ],
    },
    {
      id: 'pessary',
      title: 'Pessary',
      icon: 'management',
      body: [
        { text: 'Consider for symptomatic prolapse, alone or with PFMT. Before fitting: consider vaginal oestrogen, explain that several fittings may be needed, discuss effects on sex and describe complications. Remove at least once every 6 months; offer 6-monthly pessary clinic review to women at risk of complications. Refer to urogynaecology if no local pessary service.', refs: [{ guidelineId: N, locator: '1.7.6–1.7.9' }] },
        { text: 'AAFP: suitable at all stages; avoid if she is unlikely to follow care instructions (erosion risk), and dementia or pelvic pain may make it unsuitable. Short vaginal length, introitus wider than four fingerbreadths and prior hysterectomy predict failure. Ring and Gellhorn give similar symptom relief (PESSRI).', refs: [{ guidelineId: AF }] },
        { text: 'Complications: bacterial vaginosis in up to 30%, ulceration and bleeding; bleeding with a uterus in place needs endometrial evaluation. AAFP follow-up: 1–2 weeks after fitting, then annually if self-managing, otherwise about every 3 months.', refs: [{ guidelineId: AF }] },
      ],
    },
    {
      id: 'surgery',
      title: 'Surgery by Compartment',
      icon: 'surgery',
      body: [
        { text: 'Offer surgery if symptoms have not improved with non-surgical treatment or she declined it. Use a decision aid covering options, risks, recurrence and uncertainty about mesh. Refer if the chosen procedure is not available locally.', refs: [{ guidelineId: N, locator: '1.8.1–1.8.2, 1.8.5' }] },
        {
          text: 'Options by compartment (NICE NG123).',
          refs: [{ guidelineId: N, locator: '1.8.8–1.8.23' }],
          table: {
            columns: ['Prolapse', 'Options'],
            rows: [
              ['Anterior wall', 'Anterior repair without mesh; transvaginal mesh only in research (IPG599)'],
              ['Posterior wall', 'Posterior repair without mesh'],
              ['Uterine, uterus preserved', 'Vaginal sacrospinous hysteropexy with sutures; Manchester repair (not if she may want children); abdominal or laparoscopic sacrohysteropexy with mesh'],
              ['Uterine', 'Discuss non-surgical options, hysterectomy and uterus-preserving surgery'],
              ['Vault', 'Vaginal sacrospinous fixation with sutures; abdominal or laparoscopic sacrocolpopexy with mesh'],
              ['Vault or uterine, high operative risk, no vaginal intercourse planned', 'Consider colpocleisis'],
            ],
          },
        },
        { heading: 'Continence', text: 'Do not offer surgery to prevent incontinence in continent women having prolapse surgery; warn those having anterior or apical repair about later urinary incontinence (AAFP: up to half may develop de novo stress incontinence).', refs: [{ guidelineId: N, locator: '1.8.3–1.8.4' }, { guidelineId: AF }] },
        { heading: 'Follow-up', text: 'Review 6 months after surgery with a vaginal examination and a check for mesh exposure if mesh was used.', refs: [{ guidelineId: N, locator: '1.8.24' }] },
      ],
    },
    {
      id: 'mesh',
      title: 'Mesh: Rules & Complications',
      icon: 'complications',
      body: [
        { text: 'If mesh is used, explain the type and whether it is permanent, record it in the national registry and give written implant details. A regional MDT should review plans for repeat same-site surgery, when vaginal mesh is an option, for mesh complications, and for women who may want children.', refs: [{ guidelineId: N, locator: '1.8.6, 1.1.4' }] },
        { text: 'Exposed mesh: consider partial or complete removal of the vaginal part if she does not want topical oestrogen, the exposure is 1 cm² or larger, there is extrusion, or no response to non-surgical treatment after 3 months. Complete removal carries a higher risk of urinary tract or bowel injury.', refs: [{ guidelineId: N, locator: '1.11.5, 1.11.8' }] },
      ],
    },
    {
      id: 'assessment',
      title: 'Assessment & POP-Q',
      icon: 'diagnosis',
      body: [
        { text: 'Consider referral to a clinician with expertise in prolapse when prolapse is found incidentally. Consider a validated pelvic floor symptom questionnaire. If the examination does not explain the symptoms, repeat it standing or squatting, or at another time.', refs: [{ guidelineId: N, locator: '1.6.2, 1.6.4, 1.6.6' }] },
        {
          text: 'POP-Q stages. Stage 0: no prolapse demonstrated.',
          refs: [{ guidelineId: IU, locator: 'p.659' }, { guidelineId: AF }],
          table: {
            columns: ['Stage', 'Most distal point'],
            rows: [
              ['I', 'More than 1 cm above the hymen'],
              ['II', '1 cm or less above or below the hymen'],
              ['III', 'More than 1 cm below the hymen, but no further than 2 cm less than total vaginal length'],
              ['IV', 'Complete eversion, or eversion to within 2 cm of total vaginal length'],
            ],
          },
        },
        { text: 'Ask about urinary and faecal incontinence, overactive bladder and sexual function; women often do not volunteer symptoms.', refs: [{ guidelineId: AF, locator: 'SORT (C)' }] },
        {
          heading: 'POP-Q points',
          text: 'Hymen is the reference (0): above it is negative, below it positive, in cm. Aa: anterior midline 3 cm proximal to the external urethral meatus (range −3 to +3). Ap: posterior midline 3 cm proximal to the hymen (range −3 to +3). Ba and Bp: most dependent point of the upper anterior and posterior walls; −3 when there is no prolapse. C: cervix or vault. D: posterior fornix, omitted when there is no cervix. gh: mid urethral meatus to posterior hymen. pb: posterior hymen to mid anal opening. tvl: posterior fornix to hymen with C or D reduced. Record on a 3 × 3 grid.',
          refs: [{ guidelineId: IU, locator: 'pp.661–662' }],
          figure: { src: 'figures/fig-popq-grid.svg', alt: 'POP-Q 3 × 3 grid: Aa Ba C; gh pb tvl; Ap Bp D', caption: 'Grid order as commonly taught (IUGA/ICS 2016 Fig. 8 not read cell by cell).' },
        },
      ],
    },
  ],
  positions: [
    {
      domain: 'Pessary follow-up',
      entries: [
        { guidelineId: N, text: 'Remove at least every 6 months; 6-monthly clinic if at risk.', locator: '1.7.8–1.7.9' },
        { guidelineId: AF, text: '1–2 weeks after fitting, then annually if self-managing, else about 3-monthly.' },
      ],
    },
    {
      domain: 'Transvaginal mesh (anterior/posterior)',
      entries: [
        { guidelineId: N, text: 'Research only (IPG599).', locator: '1.8.21–1.8.22' },
        { guidelineId: AF, text: 'ACOG/AUGS 2011: reserve for complex cases (advanced or recurrent prolapse, high surgical risk).' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026 through a summarising fetch tool. NICE NG123 recommendations 1.6.1, 1.7.3, 1.8.7, 1.8.9 (hysterectomy options), 1.8.10, 1.8.12–1.8.15, 1.8.17 and 1.8.19 were cut off and are missing. The AAFP 2017 review does not cover anterior/posterior colporrhaphy or sacrospinous fixation in detail. ACOG PB 214 (2019) recommendations, any FOGSI document, RCOG/BSUG and Indian standard treatment guidelines were not read.',
};
