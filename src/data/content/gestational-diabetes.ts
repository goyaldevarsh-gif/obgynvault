import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI–ICOG GCPR Hyperglycemia in Pregnancy 2024 (full PDF read)        -> fogsi-gdm
 *  - MoHFW GDM Technical & Operational Guidelines 2018 (first ~40% verbatim;
 *    delivery/intrapartum/postpartum sections from summary, flagged)        -> mohfw-gdm
 *  - NICE NG3 recommendations page (GDM parts)                             -> nice-ng3
 *  - ACOG positions via AAFP 2023 review (PB 190 not readable)             -> acog-gdm-aafp
 * RCOG: no RCOG Green-top Guideline on GDM was found; UK practice follows NICE NG3.
 */
const F = 'fogsi-gdm';
const M = 'mohfw-gdm';
const N = 'nice-ng3';
const A = 'acog-gdm-aafp';

export const gestationalDiabetes: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Gestational diabetes is hyperglycaemia first recognised in pregnancy. Indian guidance (MoHFW 2018 and FOGSI 2024) uses universal screening with a single-step 75 g OGTT taken in the fasting or non-fasting state, with a 2-hour value of ≥140 mg/dL (the DIPSI "One Nation, One Test" approach). NICE tests women with risk factors using a fasting 75 g OGTT. ACOG prefers the two-step 50 g then 100 g method. All four agree on starting with nutrition and exercise, using insulin when targets are not met (metformin as an alternative), avoiding delivery before 39 weeks in well-controlled GDM, and testing for diabetes after birth.',
  keyPoints: [
    { text: 'India: test every pregnant woman at the first visit with a 75 g OGTT (fasting or non-fasting) and repeat at 24–28 weeks if negative. GDM = 2-h plasma glucose ≥140 mg/dL.', refs: [{ guidelineId: M, locator: '§4.4–4.5, p.4–5' }, { guidelineId: F, locator: 'p.6' }] },
    { text: 'FOGSI adds a repeat test at 32–34 weeks for high-risk women, and calls a 2-h value of 120–139 mg/dL gestational glucose intolerance needing follow-up.', refs: [{ guidelineId: F, locator: 'p.6' }] },
    { text: 'Targets: fasting <95 mg/dL, 1-h after meals <140 mg/dL, 2-h after meals <120 mg/dL.', refs: [{ guidelineId: F, locator: 'p.7' }, { guidelineId: M, locator: 'p.13' }, { guidelineId: A }] },
    { text: 'Start with medical nutrition therapy and 30 minutes of exercise a day. Add drugs if targets are not met after 1–2 weeks.', refs: [{ guidelineId: F, locator: 'p.8–9' }, { guidelineId: M, locator: 'p.6, p.11' }, { guidelineId: N }] },
    { text: 'Insulin is the drug of choice in Indian guidance and ACOG. Metformin is an alternative after 20 weeks (MoHFW). NICE offers metformin first and adds insulin if needed.', refs: [{ guidelineId: F, locator: 'p.9–10' }, { guidelineId: M, locator: 'p.11–12' }, { guidelineId: N }, { guidelineId: A }] },
    { text: 'Well-controlled GDM: do not deliver before 39 weeks. NICE advises birth no later than 40+6. Deliver earlier if control is poor or complications develop.', refs: [{ guidelineId: F, locator: 'p.10' }, { guidelineId: N }, { guidelineId: A }] },
    { text: 'After birth, stop glucose-lowering drugs and test for diabetes: OGTT at 6–12 weeks (India) or fasting glucose / HbA1c (NICE), then yearly.', refs: [{ guidelineId: F, locator: 'p.12–13' }, { guidelineId: M, locator: '§3, p.3' }, { guidelineId: N }] },
  ],
  sections: [
    {
      id: 'screening',
      title: 'Screening & Diagnosis',
      icon: 'screening',
      body: [
        { heading: 'Indian approach (MoHFW, FOGSI)', text: 'Universal testing of all pregnant women, because Indian women are at high risk. Test at the first antenatal contact; if negative, repeat at 24–28 weeks and at least 4 weeks after the first test. Women presenting after 28 weeks get one test.', refs: [{ guidelineId: M, locator: '§4.4, p.4' }, { guidelineId: F, locator: 'p.6' }] },
        { text: 'Method: 75 g glucose dissolved in about 300 mL water, drunk within 5–10 minutes, taken fasting or non-fasting. Measure venous plasma glucose (or use a plasma-calibrated glucometer) at 2 hours. If the woman vomits within 30 minutes, repeat the test the next day.', refs: [{ guidelineId: M, locator: '§3, §4.5, p.3–5' }] },
        {
          text: 'Interpretation of the 2-hour value:',
          refs: [{ guidelineId: F, locator: 'p.6' }, { guidelineId: M, locator: 'p.5' }],
          table: { columns: ['2-h plasma glucose', 'Interpretation'], rows: [['≥140 mg/dL (7.8 mmol/L)', 'GDM'], ['120–139 mg/dL', 'Gestational glucose intolerance: follow up (FOGSI)'], ['<120 mg/dL', 'Normal: repeat test as scheduled']] },
        },
        { text: 'FOGSI timing differs slightly: repeat at 24–26 weeks, and again at 32–34 weeks in high-risk women.', refs: [{ guidelineId: F, locator: 'p.6' }] },
        { heading: 'NICE', text: 'Assess risk at booking: BMI over 30, previous baby of 4.5 kg or more, previous GDM, first-degree relative with diabetes, or high-risk ethnicity. Offer a 75 g OGTT at 24–28 weeks if any is present. After previous GDM, offer early self-monitoring or an OGTT soon after booking, repeated at 24–28 weeks if normal. Do not use fasting glucose, random glucose, HbA1c, glucose challenge test or urine glucose to assess risk.', refs: [{ guidelineId: N }] },
        { text: 'NICE diagnostic thresholds: fasting plasma glucose ≥5.6 mmol/L or 2-hour ≥7.8 mmol/L. Measure HbA1c at diagnosis to look for pre-existing type 2 diabetes.', refs: [{ guidelineId: N }] },
        { heading: 'ACOG (via AAFP 2023)', text: 'Screen at 24–28 weeks. ACOG recommends the two-step method: a 50 g 1-hour challenge (positive at 130–140 mg/dL depending on institution), then a 100 g 3-hour OGTT, with GDM diagnosed on two abnormal values. Consider early screening for women with overweight or obesity plus another risk factor.', refs: [{ guidelineId: A }] },
        {
          text: '100 g OGTT thresholds (mg/dL):',
          refs: [{ guidelineId: A }],
          table: { columns: ['Time', 'Carpenter–Coustan', 'NDDG'], rows: [['Fasting', '95', '105'], ['1 h', '180', '190'], ['2 h', '155', '165'], ['3 h', '140', '145']] },
        },
        { text: 'The one-step IADPSG 75 g test (fasting 92, 1-h 180, 2-h 153 mg/dL; one abnormal value is enough) diagnoses about twice as many women, with no clear outcome benefit in the studies the AAFP review cites.', refs: [{ guidelineId: A }] },
      ],
    },
    {
      id: 'targets',
      title: 'Glycaemic Targets & Monitoring',
      icon: 'monitoring',
      body: [
        {
          text: 'Targets by source:',
          refs: [{ guidelineId: F, locator: 'p.7' }, { guidelineId: M, locator: 'p.13' }, { guidelineId: N }, { guidelineId: A }],
          table: {
            columns: ['Source', 'Fasting', '1-h after meal', '2-h after meal'],
            rows: [['FOGSI', '<95 mg/dL', '<140 mg/dL', '<120 mg/dL'], ['MoHFW', '<95 mg/dL', '—', '<120 mg/dL'], ['NICE', '5.3 mmol/L (95 mg/dL)', '7.8 mmol/L (140 mg/dL)', '6.4 mmol/L (115 mg/dL)'], ['ACOG (AAFP)', '95 mg/dL', '140 mg/dL', '120 mg/dL']],
          },
        },
        { text: 'FOGSI: review at least weekly. HbA1c is of limited use in pregnancy.', refs: [{ guidelineId: F, locator: 'p.7' }] },
        { text: 'MoHFW: on insulin, check fasting and 2-h post-meal glucose every third day and adjust the dose; on metformin, twice a week. High-risk follow-up means 8 antenatal visits (4 extra).', refs: [{ guidelineId: M, locator: 'p.11–13' }] },
        { text: 'NICE: on diet, oral therapy or once-daily insulin, test fasting and 1 hour after each meal daily. On multiple daily injections, also test before meals and at bedtime. Keep insulin-treated women above 4 mmol/L.', refs: [{ guidelineId: N }] },
      ],
    },
    {
      id: 'nutrition',
      title: 'Nutrition & Exercise',
      icon: 'lifestyle',
      body: [
        { text: 'Start medical nutrition therapy and exercise as soon as GDM is diagnosed, and review after 2 weeks (1 week if diagnosed in the third trimester).', refs: [{ guidelineId: F, locator: 'p.8–9' }, { guidelineId: M, locator: '§4.7, p.6' }] },
        {
          text: 'FOGSI nutrition prescription:',
          refs: [{ guidelineId: F, locator: 'p.8–9' }],
          table: { columns: ['Component', 'Recommendation'], rows: [['Carbohydrate', '35–45% of calories, at least 135 g/day, in 3 meals and 2–4 snacks'], ['Protein', '1.5 g/kg/day'], ['Fibre', '30–40 g/day'], ['Saturated fat', '<10% of calories'], ['Exercise', 'At least 30 min of moderate aerobic activity, 5 or more days a week']] },
        },
        { text: 'MoHFW calculates energy needs from ICMR BMR × activity level, adds 350 kcal/day in the second and third trimesters, and adjusts by ±500 kcal by BMI category. Walking 30 minutes a day is advised.', refs: [{ guidelineId: M, locator: '§4.7, p.7–9' }] },
        { text: 'NICE: refer every woman to a dietitian; advise switching from high to low glycaemic-index foods and regular exercise such as a 30-minute walk after meals.', refs: [{ guidelineId: N }] },
      ],
    },
    {
      id: 'pharmacotherapy',
      title: 'Insulin & Metformin',
      icon: 'drug',
      body: [
        {
          text: 'Stepwise GDM care (MoHFW 2018, FOGSI; NICE thresholds where stated).',
          refs: [{ guidelineId: M, locator: 'p.5–17' }, { guidelineId: F, locator: 'p.6–10' }],
          flow: {
            caption: 'Gestational diabetes (India)',
            steps: [
              { title: 'Test every pregnant woman', text: '75 g OGTT, fasting or non-fasting, 2-h plasma glucose at first visit; if negative repeat at 24–28 weeks.', tone: 'start' },
              { title: '2-h glucose', tone: 'decision', branches: [
                { when: '140 mg/dL or more', then: 'GDM' },
                { when: '120–139 mg/dL', then: 'Glucose intolerance: follow up (FOGSI)' },
                { when: 'Under 120 mg/dL', then: 'Normal: repeat as scheduled' },
              ] },
              { title: 'Nutrition therapy and exercise', text: '2 weeks (1 week in third trimester); targets fasting under 95, 2-h post-meal under 120 mg/dL.' },
              { title: '2-h post-meal still 120 mg/dL or more?', tone: 'decision', branches: [
                { when: 'Yes', then: 'Insulin (any gestation) or metformin (from 20 weeks)' },
                { when: 'No', then: 'Continue diet; monitor' },
              ] },
              { title: 'Refer if', text: 'Fasting over 200 mg/dL, insulin over 20 U/day, or repeated hypoglycaemia.', tone: 'urgent' },
              { title: 'Birth and after', text: 'Diet-controlled: not before 39 weeks; poorly controlled: 37+0 to 38+6 weeks. Retest glucose after birth.' },
            ],
          },
        },
        { heading: 'When to start', text: 'MoHFW: after 2 weeks of nutrition therapy, check the 2-h post-meal glucose. If it is ≥120 mg/dL, start metformin or insulin.', refs: [{ guidelineId: M, locator: 'p.6, p.11' }] },
        { text: 'NICE: if fasting glucose is below 7.0 mmol/L at diagnosis, try diet and exercise first and offer metformin if targets are not met in 1–2 weeks. Offer insulin at diagnosis if fasting glucose is 7.0 mmol/L or more, and consider it at 6.0–6.9 mmol/L with macrosomia or polyhydramnios.', refs: [{ guidelineId: N }] },
        { heading: 'Choice of drug', text: 'FOGSI and MoHFW: insulin is the drug of choice and can be started at any gestation. Metformin can be used from 20 weeks (MoHFW); about 26–50% of women on metformin later need insulin (FOGSI).', refs: [{ guidelineId: F, locator: 'p.9–10' }, { guidelineId: M, locator: 'p.11–12' }] },
        { text: 'ACOG (via AAFP): insulin is preferred; metformin may be used after discussing risks and benefits; glyburide is third line.', refs: [{ guidelineId: A }] },
        { text: 'FOGSI: avoid metformin with significant organ dysfunction, hypertensive disorders, fetal growth restriction, or high risk of preterm birth.', refs: [{ guidelineId: F, locator: 'p.9–10' }] },
        {
          heading: 'Doses as stated in source',
          text: 'Shown for clinician review:',
          refs: [{ guidelineId: M, locator: 'p.12–13' }, { guidelineId: F, locator: 'p.9–10' }],
          table: {
            columns: ['Drug', 'Regimen'],
            rows: [
              ['Metformin (MoHFW)', '500 mg twice daily; maximum 2 g/day; add insulin if not controlled'],
              ['Metformin (FOGSI)', '500 mg once daily for a week, then 500 mg twice daily; maximum 2 g/day'],
              ['Insulin start (MoHFW)', 'Premixed human insulin 30/70 subcutaneously 30 min before breakfast: 4 U if 2-h PPBS 120–160, 6 U if 160–200, 8 U if >200 mg/dL'],
              ['Insulin requirement (FOGSI)', 'About 0.8, 1.0 and 1.2 U/kg/day by trimester'],
            ],
          },
        },
        { heading: 'When to refer (MoHFW)', text: 'Fasting glucose >200 mg/dL; fasting >150 or post-meal >250 mg/dL despite treatment; post-meal >200 mg/dL at any time; insulin need above 20 U/day; or more than one hypoglycaemic episode a day.', refs: [{ guidelineId: M, locator: 'p.15' }] },
      ],
    },
    {
      id: 'fetal',
      title: 'Fetal Surveillance',
      icon: 'fetus',
      body: [
        { text: 'MoHFW: anomaly scan at 18–20 weeks if GDM is diagnosed before 20 weeks; growth scans at 28–30 and 34–36 weeks (at least 3 weeks apart) for biometry and liquor; daily fetal movement count.', refs: [{ guidelineId: M, locator: '§4.8, p.16–17' }] },
        { text: 'FOGSI: growth and liquor scans every 3–4 weeks from 28 weeks. Weekly NST and BPP from 36 weeks for women on medication. Well-controlled diet-only GDM needs no special fetal testing. Daily fetal movement count from 32 weeks.', refs: [{ guidelineId: F, locator: 'p.6–7' }] },
        { text: 'NICE: growth and liquor ultrasound every 4 weeks from 28 to 36 weeks; no routine fetal wellbeing tests before 38 weeks unless growth restriction is suspected.', refs: [{ guidelineId: N }] },
        { text: 'ACOG (via AAFP): consider fetal surveillance from 32 weeks for poor control or medication-treated GDM; assess for macrosomia (EFW >4000 g).', refs: [{ guidelineId: A }] },
        { text: 'If birth is expected between 24 and 34 weeks, give dexamethasone 6 mg IM 12-hourly for 2 days and monitor glucose closely for 72 hours.', refs: [{ guidelineId: M, locator: '§4.8' }] },
      ],
    },
    {
      id: 'delivery',
      title: 'Timing & Mode of Delivery',
      icon: 'delivery',
      body: [
        {
          text: 'Recommended timing:',
          refs: [{ guidelineId: F, locator: 'p.10' }, { guidelineId: N }, { guidelineId: A }],
          table: {
            columns: ['Situation', 'FOGSI', 'NICE', 'ACOG (AAFP)'],
            rows: [
              ['Well controlled (diet only)', 'Not before 39 weeks', 'By 40+6 weeks', '39+0 to 40+6 weeks'],
              ['On medication, well controlled', 'Not before 39 weeks', 'By 40+6 weeks', '39+0 to 39+6 weeks'],
              ['Poorly controlled', '37+0 to 38+6 weeks', 'Consider earlier', 'Individualise'],
              ['Comorbidity, abnormal fetal tests or failed inpatient control', '34+0 to 36+6 weeks', 'Consider earlier', 'Individualise'],
            ],
          },
        },
        { text: 'Mode: vaginal birth is preferred; caesarean for obstetric indications. FOGSI suggests elective caesarean if EFW exceeds 4500 g, and in Indian women considers it at EFW >3500 g at 39 weeks if fetopelvic disproportion is suspected. ACOG (via AAFP) suggests discussing caesarean if EFW exceeds 4500 g.', refs: [{ guidelineId: F, locator: 'p.10' }, { guidelineId: A }] },
      ],
    },
    {
      id: 'intrapartum',
      title: 'Intrapartum & Neonatal Care',
      icon: 'delivery',
      body: [
        { text: 'Most women with GDM need no insulin in labour. Give the usual night-before insulin, withhold the morning dose, and keep glucose 70–120 mg/dL with checks every 1–2 hours in active labour (FOGSI). NICE keeps capillary glucose 4–7 mmol/L with hourly checks and uses IV dextrose and insulin if outside this range.', refs: [{ guidelineId: F, locator: 'p.11' }, { guidelineId: N }] },
        {
          text: 'Insulin in 500 mL normal saline at 100 mL/h by blood glucose (FOGSI; same table in MoHFW):',
          refs: [{ guidelineId: F, locator: 'p.11' }, { guidelineId: M, locator: 'summary' }],
          table: { columns: ['Blood glucose (mg/dL)', 'Insulin added'], rows: [['90–120', '0 U'], ['120–140', '4 U'], ['140–180', '6 U'], ['>180', '8 U']] },
        },
        { text: 'Newborn: early breastfeeding and glucose checks (FOGSI: at birth and at 6, 12, 24 and 48 hours). Aim for ≥40 mg/dL in the first 24 hours and 50–60 mg/dL after 24–48 hours.', refs: [{ guidelineId: F, locator: 'p.12' }] },
      ],
    },
    {
      id: 'postpartum',
      title: 'Postpartum & Long-term Follow-up',
      icon: 'followup',
      body: [
        { text: 'Stop glucose-lowering treatment after birth and check glucose before discharge to exclude persistent hyperglycaemia. Encourage breastfeeding.', refs: [{ guidelineId: N }, { guidelineId: F, locator: 'p.12–13' }] },
        {
          heading: 'India: 75 g OGTT',
          text: 'Repeat the 75 g OGTT at 6 weeks (MoHFW) or 6–12 weeks (FOGSI):',
          refs: [{ guidelineId: F, locator: 'p.12–13' }, { guidelineId: M, locator: '§3, p.3' }],
          table: { columns: ['2-h glucose', 'Result', 'Next step'], rows: [['<140 mg/dL', 'Normal', 'Yearly test (MoHFW: refer to NCD clinic)'], ['140–199 mg/dL', 'Impaired glucose tolerance', 'Diet, exercise or metformin; yearly OGTT'], ['≥200 mg/dL', 'Diabetes', 'Treat and refer']] },
        },
        { heading: 'NICE', text: 'Fasting plasma glucose at 6–13 weeks (or HbA1c after 13 weeks); do not routinely use an OGTT. Fasting <6.0 mmol/L is low risk, 6.0–6.9 high risk, ≥7.0 probable type 2 diabetes. HbA1c <39 mmol/mol low risk, 39–47 high risk, ≥48 diabetes. Check HbA1c yearly if the postnatal test is negative.', refs: [{ guidelineId: N }] },
        { text: 'In the next pregnancy, offer early self-monitoring or an early OGTT, repeated later if normal.', refs: [{ guidelineId: N }] },
        { text: 'ACOG (via AAFP): insulin resistance usually resolves after birth, but the lifetime risk of type 2 diabetes stays high. Lifestyle change, breastfeeding and metformin for impaired glucose tolerance can reduce it.', refs: [{ guidelineId: A }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Who and how to test',
      entries: [
        { guidelineId: F, text: 'Universal; 75 g OGTT fasting or non-fasting at first visit, 24–26 wk, and 32–34 wk if high risk. GDM if 2-h ≥140 mg/dL.', locator: 'p.6' },
        { guidelineId: A, text: 'Universal at 24–28 wk; two-step 50 g then 100 g OGTT preferred; early test if overweight plus a risk factor.' },
        { guidelineId: N, text: 'Risk-factor based; 75 g OGTT at 24–28 wk; GDM if fasting ≥5.6 or 2-h ≥7.8 mmol/L.' },
        { guidelineId: M, text: 'Universal; 75 g non-fasting OGTT at first visit and 24–28 wk. GDM if 2-h ≥140 mg/dL.', locator: '§4.4–4.5' },
      ],
    },
    {
      domain: 'First-line drug',
      entries: [
        { guidelineId: F, text: 'Insulin (drug of choice); metformin as alternative with exclusions.', locator: 'p.9–10' },
        { guidelineId: A, text: 'Insulin preferred; metformin acceptable after counselling; glyburide third line.' },
        { guidelineId: N, text: 'Metformin first if targets not met on diet; insulin if metformin unsuitable or fasting ≥7.0 mmol/L.' },
        { guidelineId: M, text: 'Insulin first choice; metformin from 20 weeks.', locator: 'p.11' },
      ],
    },
    {
      domain: 'Postpartum test',
      entries: [
        { guidelineId: F, text: '75 g OGTT at 6–12 weeks, then yearly.', locator: 'p.12' },
        { guidelineId: N, text: 'Fasting glucose at 6–13 weeks or HbA1c later; yearly HbA1c.' },
        { guidelineId: M, text: '75 g OGTT at 6 weeks; yearly via NCD clinic.', locator: '§3' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI–ICOG Hyperglycemia in Pregnancy GCPR (2024) in full; NICE NG3 GDM recommendations (the page gives no recommendation numbers, so none are cited); MoHFW GDM guideline (2018), first part verbatim, while its delivery, intrapartum, neonatal and postpartum sections came from a summary and need checking. ACOG positions come from the 2023 AAFP review because Practice Bulletin 190 could not be accessed. No RCOG Green-top Guideline on GDM was found; UK practice follows NICE NG3. All doses are quoted from the source for clinician review.',
};
