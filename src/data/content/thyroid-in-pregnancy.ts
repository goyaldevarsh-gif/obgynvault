import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from FOGSI Endocrinology Committee poster (c.2022–23, based on ITS-FOGSI 2019),
 * FOGSI Thyroid Update in Pregnancy (2021), ATA 2026 pregnancy guideline (Sections C–F read), a Healio report
 * of ATA 2026 (hyperthyroidism items) and NICE NG145.
 */
const FP = 'fogsi-endo-hypo-poster';
const FU = 'fogsi-thyroid-update-2021';
const A = 'ata-2026';
const AH = 'ata-2026-healio';
const N = 'nice-ng145';

export const thyroidInPregnancy: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'FOGSI advises FT4, TSH and anti-TPO at the first antenatal visit and uses TSH upper limits of 2.5 mIU/L in the first trimester and 3.0 in the second and third. The ATA (2026) prefers laboratory, trimester-specific ranges (or 0.1–4.0 mU/L in the first two trimesters) and recommends risk-based rather than universal testing. Treat overt hypothyroidism with levothyroxine; for subclinical hypothyroidism FOGSI decides on TSH plus TPO status, while ATA 2026 decides on TSH alone and no longer treats TPO-positive euthyroid women. Women already on levothyroxine should increase the dose by about 25–30% as soon as pregnancy is confirmed and aim for TSH 0.5–2.5. For hyperthyroidism, PTU is preferred in the first trimester; titrate on FT4. Return to the pre-pregnancy dose after birth and recheck at 6 weeks.',
  keyPoints: [
    { text: 'FOGSI: FT4, TSH and anti-TPO at the first antenatal visit. TSH upper limits 2.5 mIU/L (first trimester) and 3.0 (second and third). Test TPO antibodies only once.', refs: [{ guidelineId: FP }, { guidelineId: FU, locator: 'Vyas' }] },
    { text: 'ATA 2026: no universal screening; assess risk in every newly pregnant woman and offer TSH to those at increased risk. Use local trimester-specific ranges, or 0.1–4.0 mU/L in the first two trimesters if none.', refs: [{ guidelineId: A, locator: 'Sect C, Tables 1–2, Box 1' }] },
    { text: 'Levothyroxine for subclinical hypothyroidism (FOGSI): recommended if TSH over 10, or 4–10 with TPO positive; can be considered if TSH 4–10 with TPO negative, or 2.5–4 with TPO positive.', refs: [{ guidelineId: FP }, { guidelineId: FU, locator: 'Vyas' }] },
    { text: 'ATA 2026: treat TSH 6 mU/L or more, or overt hypothyroidism, with levothyroxine (Strong). Do not offer levothyroxine to TPO-positive women with normal thyroid function (Strong, High).', refs: [{ guidelineId: A, locator: 'Sect F, Tables 7 and 9' }] },
    { text: 'Known hypothyroidism: increase levothyroxine as soon as pregnancy is confirmed (ATA about 25%; FOGSI 30%). Target TSH 0.5–2.5 (ATA); check TSH every 4 weeks in the first half of pregnancy.', refs: [{ guidelineId: A, locator: 'Box 3, Tables 2 and 4' }, { guidelineId: FP }] },
    { text: 'Hyperthyroidism: radioactive iodine is contraindicated. PTU in the first trimester (FOGSI then switches to methimazole); titrate on FT4, not TSH. ATA 2026 aims for high-normal to slightly raised FT4.', refs: [{ guidelineId: FU, locator: 'Kulkarni' }, { guidelineId: AH }, { guidelineId: N, locator: '1.6' }] },
    { text: 'After birth: return to the pre-pregnancy levothyroxine dose and recheck TSH at 6 weeks. Postpartum thyroiditis affects up to 10%; test at 3 and 6 months if TPO positive, type 1 diabetes or postpartum depression.', refs: [{ guidelineId: A, locator: 'Sect F' }, { guidelineId: FP }] },
  ],
  sections: [
    {
      id: 'stepwise',
      title: 'Step-by-step: Raised TSH in Pregnancy',
      icon: 'management',
      body: [
        {
          text: 'FOGSI pathway (ITS-FOGSI 2019 thresholds). ATA 2026 differences are shown in the table below.',
          refs: [{ guidelineId: FP }, { guidelineId: FU, locator: 'Vyas' }],
          flow: {
            caption: 'Hypothyroidism in pregnancy (FOGSI)',
            steps: [
              { title: 'First antenatal visit', text: 'FT4, TSH and anti-TPO.' },
              { title: 'Low FT4 with raised TSH', text: 'Overt hypothyroidism: start levothyroxine.', tone: 'urgent' },
              { title: 'Normal FT4, TSH (mIU/L):', tone: 'decision', branches: [
                { when: 'Over 10', then: 'Levothyroxine recommended' },
                { when: '4–10, TPO positive', then: 'Levothyroxine recommended' },
                { when: '4–10, TPO negative', then: 'Levothyroxine can be considered' },
                { when: '2.5–4, TPO positive', then: 'Levothyroxine can be considered' },
                { when: 'Normal, TPO positive', then: 'Observe; TSH at least once each trimester. Low-dose LT4 may be considered after previous pregnancy loss' },
              ] },
              { title: 'Start and titrate', text: 'Start 50–100 µg/day (overt: 1.6–2.0 µg/kg/day). Target TSH 2.5 or less. Adjust by 12.5–25 µg/day. TSH every 4–6 weeks until mid-pregnancy and once near 28 weeks.', tone: 'action' },
            ],
          },
        },
        {
          text: 'Thresholds compared.',
          refs: [{ guidelineId: FP }, { guidelineId: A, locator: 'Sect C, F; Tables 1, 7, 9' }],
          table: {
            columns: ['Question', 'FOGSI (ITS-FOGSI 2019)', 'ATA 2026'],
            rows: [
              ['Who to test', 'All: FT4, TSH, anti-TPO at first visit', 'Risk assessment for all; TSH if at increased risk'],
              ['TSH upper limit', '2.5 (T1), 3.0 (T2, T3)', 'Local trimester range, or 4.0 (T1, T2)'],
              ['When to treat', 'TSH over 10, or 4–10 with TPO positive', 'TSH 6 or more, or overt (Strong)'],
              ['TPO positive, TSH normal', 'Observe; consider LT4 after pregnancy loss', 'Do not offer LT4 (Strong, High)'],
            ],
          },
        },
        { heading: 'ATA 2026: TSH above range but below 6', text: 'Confirmatory testing within 3 weeks may be done (Conditional, Low). Antibody status should not decide treatment of subclinical hypothyroidism, and levothyroxine started in or after the second trimester does not improve outcomes.', refs: [{ guidelineId: A, locator: 'Table 9' }, { guidelineId: AH }] },
      ],
    },
    {
      id: 'known-hypo',
      title: 'Known Hypothyroidism on Levothyroxine',
      icon: 'drug',
      body: [
        { text: 'Increase the dose as soon as pregnancy is confirmed: ATA about 25% on a positive pregnancy test (most women need about 25% more by week 12 and 50% by week 20); FOGSI 30%.', refs: [{ guidelineId: A, locator: 'Box 3' }, { guidelineId: FP }] },
        { text: 'Overtreatment is more likely if pre-pregnancy TSH was below 1.5, the dose was above 100 µg/day, or the increase is taken as two extra tablets a week.', refs: [{ guidelineId: A, locator: 'Box 3' }] },
        { text: 'Target TSH 0.5–2.5 mU/L before and during pregnancy. Check TSH about 2 weeks after a positive test, then about every 4 weeks in the first half, at least once in the third trimester, and 4–6 weeks after any dose change.', refs: [{ guidelineId: A, locator: 'Tables 2 and 4' }] },
        { text: 'Take levothyroxine 60 minutes before breakfast, or at bedtime more than 3 hours after the last meal. Recheck TSH after a brand change. If the dose needed is unexpectedly high, look for H. pylori, atrophic gastritis or coeliac disease.', refs: [{ guidelineId: FP }] },
        { heading: 'Preconception', text: 'ATA: overt hypothyroidism 1.5–1.7 µg/kg/day; subclinical 25–50 µg/day. Infertility with subclinical hypothyroidism: 25–75 µg/day titrated to TSH 0.5–2.5; treat if TSH over 10. FOGSI: target TSH between the lower reference limit and 2.5.', refs: [{ guidelineId: A, locator: 'Flowchart 1, Table 6' }, { guidelineId: FP }] },
      ],
    },
    {
      id: 'hyper',
      title: 'Hyperthyroidism & Graves’ Disease',
      icon: 'drug',
      body: [
        { text: 'Radioactive iodine is contraindicated in pregnancy. NICE: avoid it first-line if pregnant or planning pregnancy (or fathering a child) within 4 to 6 months.', refs: [{ guidelineId: FU, locator: 'Kulkarni' }, { guidelineId: N, locator: '1.6' }] },
        { heading: 'Choice of drug', text: 'Added birth-defect risk is up to 3% with PTU and up to 5% with methimazole or carbimazole.', table: { columns: ['Guideline', 'Advice'], rows: [['FOGSI', 'PTU in the first trimester, then switch to methimazole in the second'], ['NICE', 'PTU if pregnant or trying to conceive within 6 months'], ['ATA 2026', 'Switch methimazole to PTU before conception. If conceiving on methimazole, discuss switching early (weeks 6–10 most sensitive). Stopping in the first trimester is possible if relapse risk is low. Continuing PTU vs switching after 16 weeks is unclear.']] }, refs: [{ guidelineId: FU, locator: 'Kulkarni' }, { guidelineId: N, locator: '1.6' }, { guidelineId: AH }] },
        { heading: 'Doses (FOGSI)', text: 'PTU 50–150 mg three times daily to start, then 50 mg two or three times daily. Methimazole 10–20 mg once daily, then adjust to thyroid function.', refs: [{ guidelineId: FU, locator: 'Kulkarni' }] },
        { heading: 'Monitoring', text: 'Titrate on FT4, not TSH; reduce the dose when FT4 reaches the upper limit of normal. Thyroid function every 3–4 weeks at first. ATA 2026: high-normal to slightly raised FT4 is probably safest.', refs: [{ guidelineId: FU, locator: 'Kulkarni' }, { guidelineId: AH }] },
        { heading: 'Fetus', text: 'Uncontrolled disease can cause growth restriction, fetal tachycardia and fetal goitre: record fetal heart rate and thyroid size on anomaly and growth scans.', refs: [{ guidelineId: FU, locator: 'Kulkarni' }] },
        { heading: 'After birth', text: 'Graves’ often relapses within 3 months: check TSH and FT4 at 6 and 12 weeks.', refs: [{ guidelineId: FU, locator: 'Kulkarni' }] },
      ],
    },
    {
      id: 'postpartum',
      title: 'After Birth & Postpartum Thyroiditis',
      icon: 'followup',
      body: [
        { text: 'Known hypothyroidism: return to the pre-pregnancy dose and recheck TSH at 6 weeks. Levothyroxine started in pregnancy may be stopped, especially at 50 µg/day or less, with TSH 6 weeks later. TPO-positive women: TSH every year.', refs: [{ guidelineId: A, locator: 'Sect F' }, { guidelineId: FP }] },
        { text: 'Postpartum thyroiditis affects up to 10%. No routine screening; test TSH at 3 and 6 months if TPO positive, type 1 diabetes, postpartum depression or previous postpartum thyroiditis.', refs: [{ guidelineId: FP }, { guidelineId: FU, locator: 'Medhekar' }] },
        { text: 'Hypothyroid phase: if asymptomatic with TSH below 10, monitor every 4–6 weeks without treatment unless planning pregnancy. If symptomatic or TSH over 10, levothyroxine about 50–100 µg/day, wean after 6–12 months and recheck about 6 weeks later. Up to 30% stay hypothyroid: TSH yearly.', refs: [{ guidelineId: FU, locator: 'Medhekar' }] },
        { text: 'Thyrotoxic phase: beta-blocker for symptoms (propranolol preferred when breastfeeding). Postpartum thyroiditis starts within 3 months with FT4 higher than FT3 and negative TRAb; Graves’ usually starts after 6 months.', refs: [{ guidelineId: FU, locator: 'Medhekar' }] },
      ],
    },
    {
      id: 'iodine',
      title: 'Iodine & Breastfeeding',
      icon: 'prevention',
      body: [
        { text: 'Aim for 250 µg/day iodine in pregnancy and lactation; supplement 150 µg/day from at least 3 months before pregnancy in women at risk; avoid more than 500 µg/day.', refs: [{ guidelineId: A, locator: 'Sect D, Table 3' }] },
        { text: 'Antithyroid drugs in breast milk: methimazole/carbimazole at most 0.1–0.2% of the maternal dose; PTU below 0.1%.', refs: [{ guidelineId: A, locator: 'Fig 4' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Screening',
      entries: [
        { guidelineId: FP, text: 'FT4, TSH and anti-TPO for all at first visit.' },
        { guidelineId: A, text: 'Risk-based TSH; no universal screening.', locator: 'Sect C' },
      ],
    },
    {
      domain: 'TPO positive, normal TSH',
      entries: [
        { guidelineId: FP, text: 'Observe; consider low-dose LT4 after pregnancy loss.' },
        { guidelineId: A, text: 'Do not offer LT4 (Strong, High).', locator: 'Table 7' },
      ],
    },
    {
      domain: 'Antithyroid drug by trimester',
      entries: [
        { guidelineId: FU, text: 'PTU in T1, methimazole from T2.', locator: 'Kulkarni' },
        { guidelineId: AH, text: 'PTU before conception; after 16 weeks unclear.' },
        { guidelineId: N, text: 'PTU if pregnant or planning within 6 months.', locator: '1.6' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. ATA 2026 (Thyroid, May 2026, doi 10.1177/10507256261445624) was read from the eScholarship copy, which ends before Section G (hyperthyroidism, Graves’, TRAb) and Section I (postpartum thyroiditis); ATA hyperthyroidism points come from a Healio news report (Oct 2026). Its Flowchart 2 text for subclinical hypothyroidism was garbled and is not used. ITS-FOGSI 2019 is cited only as quoted in the FOGSI documents. Not read: ACOG PB 223, MoHFW 2014 national guideline, ETA 2014, Endocrine Society. TRAb timing and threshold, gestational transient thyrotoxicosis and neonatal Graves’ assessment are not covered by any source read, so they are left out. Beta-blocker doses in the FOGSI postpartum chapter were garbled and are omitted.',
};
