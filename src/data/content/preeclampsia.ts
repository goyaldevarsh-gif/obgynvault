import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI–Gestosis–ICOG HDP GCPR, 3rd ed. 2026 (full PDF read)            -> fogsi-hdp
 *  - NICE NG133 recommendations page (read; 1.3.12 and 1.4.4 not retrieved) -> nice-ng133
 *  - ACOG Practice Bulletin No. 202 via AAFP summary (No. 222 not read)     -> acog-pb-202
 * Locators: FOGSI = section/page, NICE = recommendation number.
 */
const F = 'fogsi-hdp';
const N = 'nice-ng133';
const A = 'acog-pb-202';

export const preeclampsia: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Preeclampsia is new-onset hypertension after 20 weeks of pregnancy with proteinuria or other maternal organ or uteroplacental dysfunction. FOGSI, NICE and ACOG agree on the core definition, the urgency of treating severe-range blood pressure, magnesium sulphate for severe disease, and delivery at 37 weeks. They differ mainly on aspirin dose and duration, the severe-range target, and how the severity categories are named.',
  keyPoints: [
    { text: 'BP ≥140/90 mmHg after 20 weeks plus proteinuria or end-organ / uteroplacental dysfunction', refs: [{ guidelineId: F, locator: '§3.2' }, { guidelineId: N, locator: 'Terms' }, { guidelineId: A }] },
    { text: 'Severe-range BP (≥160/110) is treated urgently, within 60 minutes of presentation', refs: [{ guidelineId: F, locator: '§8.2' }, { guidelineId: A }] },
    { text: 'Magnesium sulphate for severe preeclampsia and eclampsia, continued 24 hours after delivery or the last fit', refs: [{ guidelineId: F, locator: '§10.4' }, { guidelineId: N, locator: '1.8.4' }, { guidelineId: A }] },
    { text: 'Deliver at 37 weeks for preeclampsia without severe features; earlier for severe or worsening disease after stabilisation', refs: [{ guidelineId: F, locator: '§9.1.3' }, { guidelineId: N, locator: 'Table 3' }, { guidelineId: A }] },
    { text: 'Low-dose aspirin for women at risk, started before 16 weeks where possible', refs: [{ guidelineId: F, locator: '§5.1' }, { guidelineId: N, locator: '1.1.2' }, { guidelineId: A }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Definition & Classification',
      icon: 'definition',
      body: [
        { text: 'FOGSI: BP ≥140/90 mmHg on two occasions at least 4 hours apart, after 20 weeks, with one or more of significant proteinuria or end-organ dysfunction (neurological, pulmonary oedema, thrombocytopenia, hepatic or renal derangement, uteroplacental dysfunction).', refs: [{ guidelineId: F, locator: '§3.2, p.10' }] },
        { text: 'NICE: new hypertension (over 140 systolic or over 90 diastolic) after 20 weeks with new proteinuria, other maternal organ dysfunction (renal, liver, neurological, haematological) or uteroplacental dysfunction (fetal growth restriction, abnormal umbilical artery Doppler, stillbirth).', refs: [{ guidelineId: N, locator: 'Terms used' }] },
        { text: 'Significant proteinuria: uPCR ≥30 mg/mmol or ACR ≥8 mg/mmol (FOGSI and NICE); FOGSI and ACOG also accept ≥300 mg/24 h. NICE advises against routine 24-hour collection.', refs: [{ guidelineId: F, locator: '§7.2' }, { guidelineId: N, locator: '1.2.5–1.2.7' }, { guidelineId: A }] },
        { text: 'FOGSI severe features: BP ≥160/110, or BP ≥140/90 with premonitory symptoms (headache, blurred vision, vomiting, RUQ pain, sudden weight gain, severe oedema) and/or abnormal labs (thrombocytopenia, raised liver enzymes or creatinine, abnormal coagulation).', refs: [{ guidelineId: F, locator: '§3.8.2, p.11' }] },
        { text: 'Gestational hypertension is the same BP rise after 20 weeks without features of preeclampsia; ACOG notes up to half go on to develop preeclampsia.', refs: [{ guidelineId: F, locator: '§3.1' }, { guidelineId: A }] },
      ],
    },
    {
      id: 'risk-factors',
      title: 'Screening, Risk Factors & Prevention',
      icon: 'risk',
      body: [
        { text: 'FOGSI recommends universal screening with the HDP Gestosis score (≥3 = at risk), repeated at each visit until 32 weeks; multimodal screening at 11–14 weeks (maternal factors, MAP, uterine artery Doppler, PlGF) where available.', refs: [{ guidelineId: F, locator: '§4.1–4.2, p.12–13' }] },
        { text: 'NICE high-risk factors: hypertensive disease in a previous pregnancy, chronic kidney disease, autoimmune disease (SLE, APS), type 1 or 2 diabetes, chronic hypertension.', refs: [{ guidelineId: N, locator: '1.1.2' }] },
        { text: 'NICE moderate-risk factors: nulliparity, age ≥40, interval >10 years, BMI ≥35 at first visit, family history of preeclampsia, multi-fetal pregnancy. Aspirin if more than one moderate factor.', refs: [{ guidelineId: N, locator: '1.1.3' }] },
        { text: 'Aspirin: FOGSI 75 mg/day if Gestosis-score positive, 150 mg/day may be offered if multimodal-screen positive, optimally before 16 weeks (up to 20), at bedtime, until at least 36 weeks. NICE 75–150 mg daily from 12 weeks until birth. ACOG 81 mg daily from 12–28 weeks (ideally before 16) until delivery.', refs: [{ guidelineId: F, locator: '§5.1' }, { guidelineId: N, locator: '1.1.2' }, { guidelineId: A }] },
        { text: 'FOGSI also recommends calcium 1.5–2 g elemental daily; vitamin D is noted with weak evidence.', refs: [{ guidelineId: F, locator: '§5.2–5.3' }] },
      ],
    },
    {
      id: 'diagnosis',
      title: 'Assessment',
      icon: 'diagnosis',
      body: [
        { text: 'If dipstick is 1+ or more, quantify with ACR or PCR; use an automated reagent-strip reader in secondary care.', refs: [{ guidelineId: N, locator: '1.2.2–1.2.3' }] },
        { text: 'NICE examples of concern needing admission: sustained systolic ≥160, creatinine ≥90 µmol/L, ALT >70 IU/L, platelets <150,000/µL, signs of impending eclampsia or pulmonary oedema. fullPIERS or PREP-S risk models may be considered.', refs: [{ guidelineId: N, locator: '1.5.2–1.5.4' }] },
        { text: 'FOGSI lab thresholds for severe features: platelets <100×10⁹/L, creatinine >1.1 mg/dL or doubling, AST/ALT ≥2× upper limit with RUQ pain. HELLP: LDH ≥600, AST ≥70 U/L, platelets <100×10⁹/L.', refs: [{ guidelineId: F, locator: 'Annexure 2, p.40–41' }] },
        { text: 'Note: FOGSI §6 lists different alert values (platelets <1,50,000/mm³, creatinine ≥1 mg/dL) from Annexure 2. Reviewer to confirm which applies.', refs: [{ guidelineId: F, locator: '§6, p.16' }] },
      ],
    },
    {
      id: 'management',
      title: 'Management',
      icon: 'management',
      body: [
        { text: 'Start antihypertensives at ≥140/90 (FOGSI, NICE). Target 135/85 mmHg for non-severe hypertension.', refs: [{ guidelineId: F, locator: '§8, §8.1' }, { guidelineId: N, locator: 'Table 2' }] },
        { text: 'First line: labetalol, then nifedipine, then methyldopa (NICE order). FOGSI lists labetalol as first line, nifedipine preferred when pulse <100/min, and says nifedipine must never be given sublingually. ACE inhibitors and ARBs are contraindicated in pregnancy (FOGSI).', refs: [{ guidelineId: N, locator: '1.5.6' }, { guidelineId: F, locator: '§8.1, p.19–20' }] },
        { text: 'Severe hypertension (≥160/110): treat urgently in a monitored setting with IV labetalol, oral nifedipine or IV hydralazine, within one hour of presentation. ACOG treats severe BP lasting 15 minutes or more.', refs: [{ guidelineId: F, locator: '§8.2' }, { guidelineId: N, locator: '1.8.6' }, { guidelineId: A }] },
        { text: 'MgSO4 regimens as stated by source. NICE (Collaborative Eclampsia Trial): 4 g IV over 5–15 min, then 1 g/h for 24 h. FOGSI prefers Pritchard (4 g IV + 5 g deep IM each buttock, then 5 g IM 4-hourly if RR >16, reflexes present, urine >100 mL/4 h); Zuspan (4 g IV then 1 g/h) is an alternative.', refs: [{ guidelineId: N, locator: '1.8.4' }, { guidelineId: F, locator: '§10.4.1–10.4.2, p.25–26' }] },
        { text: 'Do not use diazepam, phenytoin or other anticonvulsants in place of magnesium sulphate.', refs: [{ guidelineId: N, locator: '1.8.5' }] },
        { text: 'Antenatal corticosteroids for 24–34 weeks when birth is expected within 7 days, but do not delay delivery only to complete the course.', refs: [{ guidelineId: F, locator: '§8.6' }, { guidelineId: A }] },
      ],
    },
    {
      id: 'complications',
      title: 'Timing of Delivery & Complications',
      icon: 'complications',
      body: [
        { text: 'All three sources: deliver at 37 weeks for preeclampsia without severe features (NICE: initiate birth within 24–48 h from 37 weeks).', refs: [{ guidelineId: F, locator: '§9.1.3' }, { guidelineId: N, locator: 'Table 3' }, { guidelineId: A }] },
        { text: 'Before 34 weeks: NICE continues surveillance unless indications for planned early birth; ACOG says expectant management of severe features can be considered depending on local capability.', refs: [{ guidelineId: N, locator: 'Table 3' }, { guidelineId: A }] },
        { text: 'Indications for delivery regardless of gestation (FOGSI): eclampsia or impending eclampsia, severe BP despite three drug classes, HELLP, worsening platelets or liver function, abruption, renal dysfunction, pulmonary oedema, DIC, non-reassuring fetal status, IUFD.', refs: [{ guidelineId: F, locator: '§9.1, p.23–24' }, { guidelineId: N, locator: '1.5.7' }] },
        { text: 'Eclampsia: deliver once stabilised on MgSO4; vaginal birth may be considered if conditions permit and Bishop score is favourable.', refs: [{ guidelineId: F, locator: '§10.7' }] },
      ],
    },
    {
      id: 'follow-up',
      title: 'Postpartum & Long-term Follow-up',
      icon: 'followup',
      body: [
        { text: 'Postnatal BP: NICE at least 4 times daily as inpatient and once on day 3–5; FOGSI every 4–6 hours for the first 48 hours, then twice daily at home for the first week.', refs: [{ guidelineId: N, locator: '1.5.13' }, { guidelineId: F, locator: '§10.9, §11.3' }] },
        { text: 'Avoid NSAIDs postpartum (FOGSI); ACOG prefers NSAIDs over opioids for pain. Reviewer to reconcile.', refs: [{ guidelineId: F, locator: '§10.9' }, { guidelineId: A }] },
        { text: 'Methyldopa should not be used postpartum (FOGSI). Enalapril is listed among postpartum options.', refs: [{ guidelineId: F, locator: '§11.1, p.29' }] },
        { text: 'Medical review at 6–8 weeks (NICE); routine 6-week check and annual BP and cardiovascular risk review (FOGSI). Urine dipstick at 6–8 weeks; renal review at 3 months if proteinuria persists.', refs: [{ guidelineId: N, locator: '1.5.22, 1.5.25–1.5.27' }, { guidelineId: F, locator: 'Checklist, p.31' }] },
        { text: 'Recurrence about 1 in 5 (NICE; FOGSI 20.7%). HDP is linked to later hypertension and cardiovascular disease; FOGSI says it doubles long-term CVD risk.', refs: [{ guidelineId: N, locator: '1.10.1–1.10.2' }, { guidelineId: F, locator: '§12, p.32–33' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Aspirin prophylaxis',
      entries: [
        { guidelineId: F, text: '75 mg/day (score-positive) or 150 mg/day (multimodal-positive), before 16 weeks, until at least 36 weeks.', locator: '§5.1' },
        { guidelineId: A, text: '81 mg/day from 12–28 weeks (ideally by 16) until delivery; 1 high or ≥2 moderate risk factors.' },
        { guidelineId: N, text: '75–150 mg/day from 12 weeks until birth; 1 high or >1 moderate risk factor.', locator: '1.1.2–1.1.3' },
      ],
    },
    {
      domain: 'Target BP on treatment',
      entries: [
        { guidelineId: F, text: '135/85 for non-severe; ≤140/90 after acute treatment of severe-range BP.', locator: '§8.1, §8.3' },
        { guidelineId: N, text: '135/85 mmHg or less.', locator: 'Table 2' },
      ],
    },
    {
      domain: 'Magnesium sulphate regimen',
      entries: [
        { guidelineId: F, text: 'Pritchard preferred; Zuspan acceptable. Continue 24 h after delivery or last fit, whichever is later.', locator: '§10.4' },
        { guidelineId: A, text: 'For severe features or eclampsia, during stabilisation and until 24 h after delivery; also during caesarean.' },
        { guidelineId: N, text: 'IV: 4 g over 5–15 min, then 1 g/h for 24 h.', locator: '1.8.4' },
      ],
    },
    {
      domain: 'Delivery without severe features',
      entries: [
        { guidelineId: F, text: 'Generally at 37 completed weeks.', locator: '§9.1.3' },
        { guidelineId: A, text: 'At 37 weeks or later.' },
        { guidelineId: N, text: 'Initiate birth within 24–48 h from 37 weeks; consider from 34 weeks.', locator: 'Table 3' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI–Gestosis–ICOG HDP GCPR 3rd ed. (2026) in full; NICE NG133 recommendations page (PlGF recommendations 1.3.12 and 1.4.4 not retrieved); ACOG content from the AAFP summary of Practice Bulletin No. 202, because the current No. 222 is behind a paywall. No current RCOG Green-top Guideline on preeclampsia was found; UK practice is covered by NICE NG133. WHO 2011 recommendations not yet read. Doses are quoted from the source for review only.',
};
