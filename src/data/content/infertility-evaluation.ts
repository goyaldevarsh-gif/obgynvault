import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - ICMR STWs, female and male infertility                       -> icmr-stw-female-infertility, icmr-stw-male-infertility
 *  - NICE NG257 (March 2026, replaces CG156), ~85% read            -> nice-ng257
 *  - ASRM 2026 female evaluation; ASRM 2023 definition             -> asrm-female-eval-2026, asrm-definition-2023
 *  - WHO 2025 infertility guideline recommendations (Fertil Steril) -> who-infertility-2025
 *  - ESHRE 2023 unexplained infertility (page + flowchart only)     -> eshre-ui-2023
 *  - FOGSI Focus PCOS practice points (infertility)                -> fogsi-pcos-focus
 *  No FOGSI GCPR on infertility, ICMR ART guidelines or AUA/ASRM male guideline was read.
 */
const IF = 'icmr-stw-female-infertility';
const IM = 'icmr-stw-male-infertility';
const N = 'nice-ng257';
const A = 'asrm-female-eval-2026';
const AD = 'asrm-definition-2023';
const W = 'who-infertility-2025';
const E = 'eshre-ui-2023';
const F = 'fogsi-pcos-focus';

export const infertilityEvaluation: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Infertility is failure to conceive after 12 months of regular unprotected intercourse, and it affects up to 15% of couples. Evaluate after 12 months if the woman is under 35, after 6 months if she is 35 or older, and straight away if she is over 40 or there is a known cause (irregular cycles, tubal or pelvic disease, endometriosis, previous surgery or chemotherapy, or a male problem). Always assess both partners together; male factor is the sole cause in about 20% and contributes in another 30%. The core work-up is a semen analysis, confirmation of ovulation (mid-luteal progesterone), tubal patency (HSG or HyCoSy) and a transvaginal scan with antral follicle count. Ovarian reserve tests predict response to IVF, not natural conception, and should not be used to deny treatment. First-line treatment is letrozole for anovulation (PCOS), with IUI or IVF chosen by cause, age and duration.',
  keyPoints: [
    { text: 'Start evaluation at 12 months if the woman is under 35, at 6 months if 35 or older, and immediately if over 40 or with a known cause in either partner.', refs: [{ guidelineId: AD }, { guidelineId: A, locator: 'Introduction' }, { guidelineId: IF }] },
    { text: 'Evaluate both partners from the start. Never skip examining the male partner.', refs: [{ guidelineId: IM }, { guidelineId: N, locator: '1.16' }] },
    { text: 'Semen analysis against WHO 2021 lower limits: volume 1.4 mL, concentration 16 million/mL, total count 39 million, progressive motility 30%, normal forms 4%. Repeat an abnormal result after about 3 months (NICE) or at least 11 weeks (WHO).', refs: [{ guidelineId: N, locator: '1.17.1–1.17.4' }, { guidelineId: W }, { guidelineId: IM }] },
    { text: 'Confirm ovulation with a mid-luteal progesterone about 7 days before the expected period (day 21 of a 28-day cycle); above 3 ng/mL suggests ovulation (ASRM). Do not use basal body temperature charts.', refs: [{ guidelineId: N, locator: '1.18.7–1.18.9' }, { guidelineId: A }, { guidelineId: W }] },
    { text: 'Tubal patency: HSG or HyCoSy for women without known pelvic disease; laparoscopy and dye for those with suspected PID, endometriosis or previous ectopic (NICE). ICMR uses laparoscopy as the confirmatory test.', refs: [{ guidelineId: N, locator: '1.18.13–1.18.15' }, { guidelineId: W }, { guidelineId: IF }] },
    { text: 'Ovarian reserve: age is the best predictor. AMH or AFC predict response to IVF, not natural pregnancy, and should not exclude anyone from treatment.', refs: [{ guidelineId: N, locator: '1.18.2–1.18.5' }, { guidelineId: A }, { guidelineId: W }] },
    { text: 'TSH and prolactin are not routine; test with symptoms, irregular cycles or galactorrhoea.', refs: [{ guidelineId: N, locator: '1.18.11–1.18.12' }, { guidelineId: A }] },
    { text: 'Anovulatory PCOS: letrozole is first line (WHO, FOGSI); gonadotrophins or ovarian drilling second line, IVF third.', refs: [{ guidelineId: W }, { guidelineId: F, locator: 'pp. 4–8' }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Definition & When to Evaluate',
      icon: 'definition',
      body: [
        { text: 'Infertility: no pregnancy after 12 months of regular unprotected intercourse (NICE also: after 6 cycles of artificial insemination). ASRM also counts the need for medical help, including donor gametes, as infertility.', refs: [{ guidelineId: N }, { guidelineId: AD }, { guidelineId: IF }] },
        {
          text: 'When to start the work-up:',
          refs: [{ guidelineId: AD }, { guidelineId: A }, { guidelineId: IF }, { guidelineId: IM }, { guidelineId: N, locator: '1.16.5–1.16.8' }],
          table: {
            columns: ['Situation', 'ICMR / ASRM', 'NICE'],
            rows: [
              ['Woman under 35', 'After 12 months', 'After 1 year'],
              ['Woman 35 or older', 'After 6 months', 'Refer at presentation if 36 or older'],
              ['Woman over 40', 'Immediately', 'Refer at presentation'],
              ['Known cause in either partner', 'Early', 'Refer at presentation'],
            ],
          },
        },
        { text: 'Early evaluation (ICMR): oligo- or amenorrhoea, known or suspected uterine, tubal or peritoneal disease, previous tubal or ovarian surgery, chemotherapy or radiotherapy, endometriosis, or suspected male factor.', refs: [{ guidelineId: IF }] },
      ],
    },
    {
      id: 'history',
      title: 'History & Examination',
      icon: 'diagnosis',
      body: [
        { heading: 'Woman', text: 'Duration of infertility, previous pregnancies and treatment, menstrual pattern, chronic illness including tuberculosis, drugs that raise prolactin, pelvic surgery, coital frequency and knowledge of the fertile window, dyspareunia, time apart from the partner, smoking, alcohol, exercise and eating habits.', refs: [{ guidelineId: IF }, { guidelineId: N, locator: '1.16.1' }] },
        { text: 'Examine height, weight, BMI, waist, BP, hirsutism, acne, acanthosis, thyroid and breasts, then a pelvic examination and cervical screening.', refs: [{ guidelineId: IF }] },
        { heading: 'Man', text: 'Sexually transmitted infection, diabetes, fever in the last 3 months, chemotherapy or radiotherapy, undescended testis, torsion, hernia repair, consanguinity, anabolic steroids, heat or toxin exposure. Examine testicular size and consistency, epididymis, presence of the vas, varicocele and gynaecomastia.', refs: [{ guidelineId: IM }] },
      ],
    },
    {
      id: 'male',
      title: 'Semen Analysis & Male Work-up',
      icon: 'lab',
      body: [
        {
          text: 'WHO 2021 (6th edition) lower reference limits:',
          refs: [{ guidelineId: N, locator: '1.17.1' }, { guidelineId: IM }],
          table: {
            columns: ['Parameter', 'Lower limit'],
            rows: [
              ['Volume', '1.4 mL'],
              ['Concentration', '16 million/mL'],
              ['Total sperm number', '39 million per ejaculate'],
              ['Total motility', '42%'],
              ['Progressive motility', '30%'],
              ['Vitality', '54%'],
              ['Normal morphology', '4%'],
              ['pH', '7.2'],
            ],
          },
        },
        { text: 'Collection (ICMR): 1–3 days of abstinence; deliver to the lab within 1 hour at room temperature; at least 2 samples 2–4 weeks apart.', refs: [{ guidelineId: IM }] },
        { text: 'Repeat an abnormal result ideally 3 months later (NICE) or after at least 11 weeks (WHO); repeat sooner for azoospermia or severe oligozoospermia. WHO: no need to repeat if all values are normal.', refs: [{ guidelineId: N, locator: '1.17.3–1.17.4' }, { guidelineId: W }] },
        { text: 'Abnormal semen: check FSH, LH, prolactin, testosterone and oestradiol. Small testes with FSH more than twice normal suggest testicular failure; normal FSH with a full epididymis suggests obstruction. Genetic tests, TRUS and sperm DNA fragmentation are tertiary-level tests.', refs: [{ guidelineId: IM }] },
        { text: 'Azoospermia: surgical sperm retrieval (PESA/TESE) with ICSI, or donor insemination.', refs: [{ guidelineId: IM }] },
      ],
    },
    {
      id: 'ovulation',
      title: 'Ovulation',
      icon: 'monitoring',
      body: [
        { text: 'Regular cycles usually mean ovulation, but NICE still offers a mid-luteal progesterone (day 21 of a 28-day cycle). With irregular cycles test later and repeat weekly until the next period.', refs: [{ guidelineId: N, locator: '1.18.7–1.18.8' }] },
        { text: 'ASRM: draw it about 1 week before the expected period; above 3 ng/mL is presumptive evidence of ovulation. Testing is often unnecessary when the history is clearly normal or clearly abnormal.', refs: [{ guidelineId: A }] },
        { text: 'Do not use basal body temperature charts.', refs: [{ guidelineId: N, locator: '1.18.9' }] },
      ],
    },
    {
      id: 'reserve',
      title: 'Ovarian Reserve',
      icon: 'lab',
      body: [
        { text: 'Age is the best initial predictor. Do not use AMH to predict natural conception; use AMH or AFC to predict response to IVF stimulation. NICE says not to use FSH.', refs: [{ guidelineId: N, locator: '1.18.2–1.18.5' }, { guidelineId: W }] },
        { text: 'ASRM: if FSH is used, measure it with oestradiol on cycle days 2–4. Inhibin B and the clomiphene challenge test are not recommended. Ovarian reserve tests must not be used to exclude women from treatment.', refs: [{ guidelineId: A }] },
        { text: 'ICMR: AFC on day 2–5 is part of the essential scan; AMH and day 2/3 FSH/LH are optional. Poor reserve is taken as AFC below 5 or AMH below 1.2 ng/mL.', refs: [{ guidelineId: IF }] },
      ],
    },
    {
      id: 'tubes-uterus',
      title: 'Tubes & Uterus',
      icon: 'imaging',
      body: [
        {
          text: 'Tubal tests:',
          refs: [{ guidelineId: N, locator: '1.18.13–1.18.15' }, { guidelineId: A }, { guidelineId: W }, { guidelineId: IF }, { guidelineId: E }],
          table: {
            columns: ['Test', 'Use'],
            rows: [
              ['HSG', 'First line if no known pelvic disease (NICE, WHO, ICMR). Sensitivity 65–94%, specificity 83–92% vs laparoscopy (ASRM).'],
              ['HyCoSy', 'Alternative where expertise exists; sensitivity 76–96%, operator dependent.'],
              ['Laparoscopy and dye', 'If PID, endometriosis or previous ectopic suspected (NICE); confirmatory (ICMR); not routine (ASRM).'],
            ],
          },
        },
        { text: 'ESHRE: in low-risk women without hydrosalpinx, tubal testing can wait until male factor has been ruled out.', refs: [{ guidelineId: E }] },
        { text: 'Uterus: transvaginal ultrasound for fibroids, adenomyosis, polyps, Müllerian anomalies and hydrosalpinx (ICMR). Saline sonography or 3D scanning is better than 2D (WHO, ESHRE). Hysteroscopy only if a cavity problem is suspected (NICE); it is the definitive test and treatment (ASRM).', refs: [{ guidelineId: IF }, { guidelineId: W }, { guidelineId: E }, { guidelineId: N, locator: '1.18.16' }, { guidelineId: A }] },
      ],
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle & Preconception',
      icon: 'lifestyle',
      body: [
        { text: 'Intercourse every 2–3 days optimises the chance of pregnancy.', refs: [{ guidelineId: N, locator: '1.5.1' }] },
        { text: 'Stop smoking (brief advice at every visit); avoid alcohol or keep to 1–2 units once or twice a week.', refs: [{ guidelineId: N, locator: '1.6–1.7' }, { guidelineId: W }] },
        { text: 'NICE gives specific advice for women with a BMI of 30 or more, and for those below 18.5 with menstrual disturbance.', refs: [{ guidelineId: N, locator: '1.9–1.10' }] },
        { text: 'Offer rubella vaccination if not immune and avoid pregnancy for 1 month afterwards. Give folic acid (see the Routine Antenatal Care topic).', refs: [{ guidelineId: N, locator: '1.15.1, 1.20.2' }] },
      ],
    },
    {
      id: 'treatment',
      title: 'First-line Treatment by Cause',
      icon: 'management',
      body: [
        {
          text: 'Treatment pathway:',
          refs: [{ guidelineId: W }, { guidelineId: F }, { guidelineId: IF }, { guidelineId: N }],
          table: {
            columns: ['Cause', 'First step'],
            rows: [
              ['Anovulation / PCOS', 'Letrozole (WHO, FOGSI); clomiphene + metformin if letrozole cannot be used. Then gonadotrophins or ovarian drilling, then IVF.'],
              ['Hyperprolactinaemia', 'Cabergoline (NICE)'],
              ['Hypogonadotropic hypogonadism', 'Gonadotrophins (ICMR)'],
              ['Poor ovarian reserve', 'IVF/ICSI or donor oocytes (ICMR)'],
              ['Both tubes blocked', 'IVF; remove or clip a hydrosalpinx first (ICMR). WHO: surgery under 35 for mild–moderate disease, IVF at 35+.'],
              ['Polyp, septum, adhesions, cavity-distorting fibroid', 'Hysteroscopic surgery or myomectomy (ICMR)'],
              ['Severe male factor / azoospermia', 'ICSI with ejaculated or surgically retrieved sperm, or donor sperm (ICMR)'],
            ],
          },
        },
        { text: 'ICMR: ovulation induction with or without IUI for 3–6 cycles before moving on.', refs: [{ guidelineId: IF }] },
        { text: 'NICE IVF access: under 40, 3 full cycles (up to 3 more may be offered); 40–41, 1 full cycle.', refs: [{ guidelineId: N, locator: '1.39' }] },
        { text: 'No source reviewed gave letrozole or clomiphene doses; see the PCOS topic.', refs: [{ guidelineId: F }] },
      ],
    },
    {
      id: 'unexplained',
      title: 'Unexplained Infertility',
      icon: 'management',
      body: [
        { text: 'A diagnosis of exclusion after normal semen analysis, ovulation, tubal patency and uterine assessment.', refs: [{ guidelineId: E }] },
        { text: 'NICE: do not offer ovarian stimulation on its own. Consider up to 4 cycles of IUI with gonadotrophin stimulation; offer IVF after 2 years of trying.', refs: [{ guidelineId: N, locator: '1.38' }] },
        { text: 'WHO: expectant management rather than unstimulated IUI; stimulated IUI with clomiphene or letrozole; IVF rather than expectant management in some situations.', refs: [{ guidelineId: W }] },
        { text: 'ESHRE: expectant management for 6 months if the prognosis is good; IVF if poor.', refs: [{ guidelineId: E }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'When to investigate',
      entries: [
        { guidelineId: AD, text: '12 months (<35); 6 months (≥35).' },
        { guidelineId: IF, text: 'As ASRM; immediately if over 40.' },
        { guidelineId: N, text: '1 year; refer at presentation if 36+ or known cause.', locator: '1.16.5–1.16.8' },
      ],
    },
    {
      domain: 'Repeat semen analysis',
      entries: [
        { guidelineId: N, text: 'Ideally 3 months after an abnormal test.', locator: '1.17.3' },
        { guidelineId: W, text: 'After at least 11 weeks; not if normal.' },
        { guidelineId: IM, text: 'At least 2 samples 2–4 weeks apart.' },
      ],
    },
    {
      domain: 'Laparoscopy for tubes',
      entries: [
        { guidelineId: N, text: 'Only if pelvic comorbidity suspected.', locator: '1.18.15' },
        { guidelineId: A, text: 'Not routine.' },
        { guidelineId: IF, text: 'Confirmatory test.' },
      ],
    },
    {
      domain: 'Unexplained infertility',
      entries: [
        { guidelineId: N, text: 'Gonadotrophin IUI up to 4 cycles; IVF after 2 years.', locator: '1.38' },
        { guidelineId: W, text: 'Stimulated IUI (clomiphene or letrozole).' },
        { guidelineId: E, text: '6 months expectant if good prognosis.' },
        { guidelineId: IF, text: 'Ovulation induction ± IUI, 3–6 cycles.' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: ICMR STWs for female and male infertility (dates not printed); NICE NG257 (March 2026, replaces CG156), about 85% read; ASRM 2026 female evaluation (about 85%) and 2023 definition; WHO 2025 recommendations as published in Fertil Steril (not the full WHO document); ESHRE 2023 unexplained infertility page and flowchart only; FOGSI Focus PCOS practice points. Not read: ICMR national ART guidelines, ISAR guidance, any FOGSI GCPR on infertility, the AUA/ASRM male infertility guideline (members only), and the WHO semen manual (values taken from NICE and ICMR). WHO conditions for IVF in unexplained infertility and for IVF vs ICSI were unclear and are not quoted. Check all numbers against the originals.',
};
