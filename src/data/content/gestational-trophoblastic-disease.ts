import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from ICOG/FOGSI GCPR on GTD (c.2004–2009), FIGO Cancer Report 2021 GTD update,
 * RCOG GTG 38 (2020, read as a journal reprint) and EOTTD practical guidelines (2020).
 */
const F = 'fogsi-gtd-gcpr';
const FI = 'figo-gtd-2021';
const R = 'rcog-gtg-38';
const E = 'eottd-gtd-2020';

export const gestationalTrophoblasticDisease: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Suspect molar pregnancy on ultrasound but confirm it on histology of all products of conception. Evacuate by suction curettage (avoid medical evacuation for complete mole), give anti-D to Rh-negative women, and do not repeat evacuation routinely. Follow serum hCG every 1–2 weeks until normal, then as per mole type: partial mole stops after a confirmatory normal value; complete mole continues monthly for about 6 months (RCOG: 6 months from evacuation if normal within 56 days). Use reliable contraception during follow-up; combined pills are acceptable. Diagnose post-molar GTN on an hCG plateau or rise (FIGO 2000), stage with FIGO anatomy and the WHO/FIGO prognostic score: 6 or less is low risk (single-agent methotrexate or actinomycin D), 7 or more is high risk (EMA-CO) and needs referral to a specialist centre.',
  keyPoints: [
    { text: 'Ultrasound detects complete mole well (sensitivity 95%) but partial mole poorly (20%): send all products of conception for histology, which is the definitive diagnosis.', refs: [{ guidelineId: R }, { guidelineId: F, locator: 'p.5' }] },
    { text: 'Suction curettage is the method of choice for complete mole whatever the uterine size; avoid medical evacuation (about 16 times more GTN needing chemotherapy). Ultrasound guidance; blood available if uterus over 16 weeks.', refs: [{ guidelineId: R }, { guidelineId: FI }] },
    { text: 'Anti-D for Rh-negative women after evacuation. Second evacuation is not routine: discuss with a GTD centre (FOGSI: only if residual tissue on scan at 1 week).', refs: [{ guidelineId: R }, { guidelineId: F, locator: 'p.5' }, { guidelineId: FI }] },
    { text: 'hCG follow-up, RCOG: complete mole normal within 56 days → 6 months from evacuation; otherwise 6 months from normalisation. Partial mole → stop after 2 normal samples at least 4 weeks apart.', refs: [{ guidelineId: R, locator: 'hCG follow-up (C)' }] },
    { text: 'GTN (FIGO 2000): hCG plateau over 4 values across 3 weeks, rise over 3 weekly values across 2 weeks, or histological choriocarcinoma. Histology is not needed.', refs: [{ guidelineId: FI, locator: 'Box 1' }, { guidelineId: R }] },
    { text: 'WHO/FIGO score 6 or less: low risk, single-agent methotrexate or actinomycin D (cure about 100%). Score 7 or more: high risk, EMA-CO (cure about 94%). Score 13 or more: ultra-high risk.', refs: [{ guidelineId: FI, locator: 'Table 2, Box 3, Table 3' }, { guidelineId: R }] },
    { text: 'Avoid pregnancy until follow-up is complete and for 1 year after chemotherapy. Recurrence risk about 1% (FIGO 0.6–2%).', refs: [{ guidelineId: R }, { guidelineId: F, locator: 'pp.6, 8' }, { guidelineId: FI }] },
  ],
  sections: [
    {
      id: 'stepwise',
      title: 'Step-by-step Management of Molar Pregnancy',
      icon: 'management',
      body: [
        {
          text: 'From suspicion to discharge from follow-up.',
          refs: [{ guidelineId: R }, { guidelineId: FI }, { guidelineId: F, locator: 'pp.4–6' }],
          flow: {
            caption: 'Molar pregnancy',
            steps: [
              { title: 'Suspected mole', text: 'Ultrasound; serum hCG before evacuation; blood group for anti-D.', tone: 'start' },
              { title: 'Suction evacuation', text: 'Ultrasound-guided suction (FIGO: 12–14 mm cannula); blood available if uterus over 16 weeks; anti-D if Rh negative. Send all tissue for histology.', tone: 'action' },
              { title: 'Histology', tone: 'decision', branches: [
                { when: 'Partial mole', then: 'hCG every 1–2 weeks until normal; stop after confirmatory normal (RCOG: 2 samples 4 weeks apart)' },
                { when: 'Complete mole', then: 'hCG every 1–2 weeks until normal, then monthly (RCOG 56-day rule)' },
              ] },
              { title: 'hCG plateaus or rises', text: 'Post-molar GTN: imaging, FIGO stage and WHO/FIGO score; refer to a GTD or oncology centre.', tone: 'urgent' },
              { title: 'Follow-up complete', text: 'Pregnancy allowed. RCOG: no hCG after a later pregnancy unless she had chemotherapy (FOGSI: hCG 6–10 weeks after every later pregnancy).' },
            ],
          },
        },
      ],
    },
    {
      id: 'evacuation',
      title: 'Evacuation Details',
      icon: 'surgery',
      body: [
        { heading: 'Method', text: 'Suction curettage for complete mole irrespective of uterine size; avoid medical evacuation. Partial mole: suction preferred; medical evacuation acceptable if fetal parts prevent suction. FOGSI: under general anaesthesia.', refs: [{ guidelineId: R, locator: 'Evacuation' }, { guidelineId: F, locator: 'p.5' }] },
        { heading: 'Cervical preparation', text: 'Safe immediately before evacuation (RCOG, grade D); FOGSI: PGE1 ripening not contraindicated.', refs: [{ guidelineId: R }, { guidelineId: F, locator: 'p.5' }] },
        { heading: 'Oxytocin', text: 'Sources differ. RCOG: avoid infusion until evacuation is complete; if there is significant bleeding, expedite evacuation and weigh oxytocin against embolisation risk. FIGO: start at the onset of suction and continue for several hours. FOGSI: start at the end of evacuation.', refs: [{ guidelineId: R }, { guidelineId: FI }, { guidelineId: F, locator: 'p.5' }] },
        { heading: 'Hysterectomy', text: 'An option if family is complete; it reduces but does not remove GTN risk, so hCG follow-up is still needed.', refs: [{ guidelineId: F, locator: 'p.5' }, { guidelineId: FI }] },
        { heading: 'Prophylactic chemotherapy', text: 'Not routine. FIGO: limit to much higher than usual risk or where hCG follow-up is not feasible (reduces post-molar GTN to about 3–8%).', refs: [{ guidelineId: F, locator: 'p.5' }, { guidelineId: FI }] },
        { heading: 'After miscarriage or abortion', text: 'RCOG: histology if no fetal parts seen; if tissue is not sent, or after medical abortion, urine pregnancy test at 3 weeks. Check hCG if bleeding persists beyond 8 weeks after any pregnancy event.', refs: [{ guidelineId: R }] },
      ],
    },
    {
      id: 'followup',
      title: 'hCG Follow-up & Contraception',
      icon: 'monitoring',
      body: [
        {
          text: 'hCG follow-up schedules compared.',
          refs: [{ guidelineId: R }, { guidelineId: FI }, { guidelineId: E }, { guidelineId: F, locator: 'p.6' }],
          table: {
            columns: ['Source', 'Complete mole', 'Partial mole'],
            rows: [
              ['RCOG 2020', 'Normal by 56 days: 6 months from evacuation. Later: 6 months from normalisation', '2 normal samples at least 4 weeks apart'],
              ['FIGO 2021', 'Monthly for 6 months after normal', 'One confirmatory normal about 1 month later'],
              ['EOTTD 2020', 'At least 2-weekly until normal, then monthly for 6 months', 'One confirmatory normal'],
              ['FOGSI', 'Negative by 8 weeks: 6 more months. Positive beyond 8 weeks: 2 years', 'Same (no separate schedule)'],
            ],
          },
        },
        { text: 'Contraception: reliable contraception during follow-up; combined oral contraceptives are safe once hCG is normal (FOGSI) or during surveillance (FIGO). Wait 1 year after completing chemotherapy before conceiving.', refs: [{ guidelineId: F, locator: 'pp.6, 8' }, { guidelineId: FI }, { guidelineId: R }] },
        { text: 'An accidental pregnancy after hCG has normalised is not an indication for termination (FIGO).', refs: [{ guidelineId: FI }] },
      ],
    },
    {
      id: 'twin',
      title: 'Twin Mole with a Live Fetus',
      icon: 'fetus',
      body: [
        { text: 'Refer to fetal medicine and a GTD centre; counsel on perinatal risk; consider prenatal karyotyping. RCOG UK data: early fetal loss 40%, preterm birth 36%; GTN risk no higher than a singleton mole. FIGO: 40–60% live births and GTN risk 27–46%. Continuing is acceptable if there are no complications and genetic and ultrasound findings are normal.', refs: [{ guidelineId: R, locator: 'p.92' }, { guidelineId: FI }, { guidelineId: F, locator: 'p.5' }] },
      ],
    },
    {
      id: 'gtn',
      title: 'Gestational Trophoblastic Neoplasia: Staging & Scoring',
      icon: 'classification',
      body: [
        { text: 'Work-up: chest X-ray (lungs), CT or ultrasound (liver), MRI or CT (brain). FIGO stage: I uterus; II adnexa or vagina; III lungs; IV other sites. Report as stage:score (e.g. II:4).', refs: [{ guidelineId: F, locator: 'p.6' }, { guidelineId: FI, locator: 'Table 1' }] },
        {
          text: 'Modified WHO/FIGO prognostic score (total 6 or less low risk, 7 or more high risk).',
          refs: [{ guidelineId: FI, locator: 'Table 2' }],
          table: {
            columns: ['Factor', '0', '1', '2', '4'],
            rows: [
              ['Age (years)', 'Under 40', '40 or more', '', ''],
              ['Antecedent pregnancy', 'Mole', 'Abortion', 'Term', ''],
              ['Interval from pregnancy (months)', 'Under 4', '4–6', '7–12', 'Over 12'],
              ['Pre-treatment hCG (IU/L)', 'Under 10³', '10³–10⁴', '10⁴–10⁵', 'Over 10⁵'],
              ['Largest tumour incl. uterus', '', '3–4 cm', '5 cm or more', ''],
              ['Site of metastases', 'Lung', 'Spleen, kidney', 'GI tract', 'Brain, liver'],
              ['Number of metastases', '', '1–4', '5–8', 'Over 8'],
              ['Previous failed chemotherapy', '', '', 'Single drug', '2 or more drugs'],
            ],
          },
        },
        { text: 'Risk groups: 6 or less low risk; 7 or more high risk; 13 or more ultra-high risk with danger of early death within 4 weeks (EOTTD calls 7–12 high and over 12 ultra-high). Placental-site and epithelioid trophoblastic tumours are not scored: hysterectomy is first-line.', refs: [{ guidelineId: FI }, { guidelineId: R }, { guidelineId: E }] },
      ],
    },
    {
      id: 'chemo',
      title: 'Chemotherapy Regimens',
      icon: 'drug',
      body: [
        { heading: 'Low risk (FIGO)', text: 'Methotrexate 50 mg IM on days 1, 3, 5, 7 with folinic acid 15 mg orally 24 hours after each dose (days 2, 4, 6, 8), every 2 weeks. Or methotrexate 0.4 mg/kg (max 25 mg) IV/IM daily for 5 days every 2 weeks. Or actinomycin D 1.25 mg/m² IV pulse every 2 weeks, or 0.5 mg IV daily for 5 days every 2 weeks.', refs: [{ guidelineId: FI, locator: 'Box 3' }] },
        { heading: 'Low risk (FOGSI)', text: 'Methotrexate 1 mg/kg IM on alternate days ×4 with folinic acid 0.1 mg/kg 24 hours after each dose, every 2 weeks; or actinomycin D 9–12 µg/kg IV daily ×5 days every 2 weeks. CBC, renal and liver function before each course; weekly hCG.', refs: [{ guidelineId: F, locator: 'p.7' }] },
        { heading: 'Resistance', text: 'Switch to the other single agent if hCG plateaus or rises or toxicity limits treatment (FIGO). EOTTD: actinomycin D if hCG 1000 IU/L or less, EMA-CO if over 1000.', refs: [{ guidelineId: FI }, { guidelineId: E }] },
        { heading: 'Consolidation after normal hCG', text: 'Sources differ: RCOG 6 weeks; FIGO 2–3 cycles; EOTTD at least 2 cycles (4 weeks) for low risk; FOGSI at least 1, usually 2–3 courses.', refs: [{ guidelineId: R }, { guidelineId: FI }, { guidelineId: E }, { guidelineId: F, locator: 'p.7' }] },
        { heading: 'High risk: EMA-CO (FIGO)', text: 'Refer to a specialist centre. Ultra-high risk: induction etoposide 100 mg/m² + cisplatin 20 mg/m² on days 1–2, weekly for 1–3 weeks, before EMA-CO.', table: { columns: ['Day', 'Drugs and doses'], rows: [['Day 1', 'Etoposide 100 mg/m² IV over 30 min; actinomycin D 0.5 mg IV; methotrexate 100 mg/m² IV bolus then 200 mg/m² over 12 hours'], ['Day 2', 'Etoposide 100 mg/m²; actinomycin D 0.5 mg; folinic acid 15 mg every 12 hours ×4, starting 24 hours after methotrexate'], ['Day 8', 'Vincristine 1 mg/m² (max 2 mg); cyclophosphamide 600 mg/m²']] }, refs: [{ guidelineId: FI, locator: 'Table 3' }, { guidelineId: E }, { guidelineId: F, locator: 'p.7' }] },
        { heading: 'After treatment', text: 'FIGO: hCG monthly for at least 12 months with contraception. Later pregnancies occur in about 80%; combination chemotherapy brings menopause earlier.', refs: [{ guidelineId: FI }, { guidelineId: R }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Partial mole hCG follow-up',
      entries: [
        { guidelineId: R, text: '2 normal samples 4 weeks apart.' },
        { guidelineId: FI, text: 'One confirmatory normal about 1 month later.' },
      ],
    },
    {
      domain: 'hCG after a later pregnancy',
      entries: [
        { guidelineId: R, text: 'Only if she had chemotherapy.' },
        { guidelineId: F, text: 'At 6–10 weeks after every pregnancy.', locator: 'p.6' },
      ],
    },
    {
      domain: 'GTN criteria',
      entries: [
        { guidelineId: FI, text: 'Plateau, rise or choriocarcinoma (FIGO 2000).', locator: 'Box 1' },
        { guidelineId: F, text: 'Also hCG over 20,000 at 4 weeks or positive at 16 weeks.', locator: 'p.6' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. The only Indian source is the ICOG/FOGSI GCPR (drafted 2004–2009), which is old; newer international guidance is shown alongside. RCOG GTG 38 (2020) was read as a reprint in a Ukrainian journal; its chemotherapy-indications box and methotrexate doses were not captured. EOTTD regimen appendices were not in the text read. Not read: ESGO-ISSTD-EORTC-GCIG 2021, FIGO Cancer Report 2025, ACOG, ESMO. Chemotherapy doses are quoted from guidelines for reference; treatment should be given in an oncology or GTD centre.',
};
