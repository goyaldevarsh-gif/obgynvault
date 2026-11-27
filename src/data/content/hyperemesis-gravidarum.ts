import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from:
 *  - FOGSI–ICOG GCPR Nausea & Vomiting of Pregnancy / HG (~2024) -> fogsi-nvp-gcpr
 *  - RCOG GTG 69, 2nd edition (2024), body text only            -> rcog-gtg-69
 *  Appendices of GTG 69 (PUQE bands, dose table), NICE, ACOG and MoHFW not read.
 */
const F = 'fogsi-nvp-gcpr';
const R = 'rcog-gtg-69';

export const hyperemesisGravidarum: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Hyperemesis gravidarum (HG) is severe nausea and vomiting starting before 16 weeks that stops a woman eating and drinking normally and limits daily life. Grade severity with the PUQE score, exclude other causes, and treat in steps: diet and first-line antiemetics (antihistamines, phenothiazines or doxylamine–pyridoxine), then combinations, then second-line metoclopramide or ondansetron, with day-care IV rehydration when oral treatment fails. Admit if she cannot keep antiemetics down, is clinically dehydrated or has lost over 5% of body weight, or has a comorbidity. Rehydrate with 0.9% saline plus potassium (not dextrose), give thiamine, and offer LMWH while admitted. Steroids are reserved for refractory cases. FOGSI and RCOG differ on ketonuria and on ondansetron in the first trimester.',
  keyPoints: [
    { text: 'Use the PUQE score to grade severity (mild, moderate, severe) in every woman with NVP/HG.', refs: [{ guidelineId: F, locator: 'p.4, Annexure 2' }, { guidelineId: R, locator: 'Grade C' }] },
    { text: 'First line: H1 antihistamines (cyclizine, promethazine, dimenhydrinate), phenothiazines (prochlorperazine, chlorpromazine) or doxylamine–pyridoxine (10 mg/10 mg delayed release). Combine drugs if one fails.', refs: [{ guidelineId: R, locator: '5.2.1 (Grade A–B, GPP)' }, { guidelineId: F, locator: 'p.6' }] },
    { text: 'Second line: metoclopramide (max 30 mg/24 h or 0.5 mg/kg/24 h, whichever is lower; stop if extrapyramidal effects) or ondansetron.', refs: [{ guidelineId: R, locator: '5.2.1 (Grade B–C)' }, { guidelineId: F, locator: 'p.6–7' }] },
    { text: 'Ondansetron in the first trimester: RCOG 2024 says do not discourage it if first-line drugs fail (cleft risk 11 → 14 per 10,000); FOGSI advises avoiding it in the first trimester.', refs: [{ guidelineId: R, locator: '5.2.1' }, { guidelineId: F, locator: 'p.7 (Grade B)' }] },
    { text: 'Admit if: unable to keep down oral antiemetics; dehydration or weight loss over 5% despite antiemetics; or a confirmed/suspected comorbidity. Use ambulatory day care when community measures fail.', refs: [{ guidelineId: R, locator: '5.1' }, { guidelineId: F, locator: 'p.7' }] },
    { text: 'IV fluids: 0.9% saline with potassium chloride, guided by daily U&E. Do not use dextrose for rehydration. FOGSI: 1 L 0.9% saline with 20 mmol KCl over 2 hours is often appropriate.', refs: [{ guidelineId: R, locator: '6.1 (Grade C–D)' }, { guidelineId: F, locator: 'p.7' }] },
    { text: 'Thiamine for all women admitted with vomiting or very poor intake (oral 100 mg three times daily, or IV as vitamin B complex), before any glucose, to prevent Wernicke encephalopathy.', refs: [{ guidelineId: R, locator: 'Grade D' }, { guidelineId: F, locator: 'p.7' }] },
    { text: 'Offer LMWH thromboprophylaxis while admitted; stop at discharge if no other indication.', refs: [{ guidelineId: R, locator: '5.2.3 (Grade C)' }, { guidelineId: F, locator: 'p.9 (Grade C)' }] },
    { text: 'Refractory: corticosteroids only after IV fluids and regular antiemetics have failed, with antiemetics: IV hydrocortisone 100 mg twice daily, then oral prednisolone 40–50 mg daily tapered (RCOG); screen for GDM.', refs: [{ guidelineId: R, locator: '5.2.1 (Grade A)' }, { guidelineId: F, locator: 'p.7' }] },
  ],
  sections: [
    {
      id: 'diagnosis',
      title: 'Definition & Assessment',
      icon: 'diagnosis',
      body: [
        { text: 'HG (Windsor definition): nausea and vomiting, at least one severe, starting before 16 weeks, with inability to eat and drink normally and strong limitation of daily activities; signs of dehydration support the diagnosis.', refs: [{ guidelineId: R, locator: 'Definition' }] },
        { text: 'Grade severity with PUQE (or HELP). FOGSI bands: mild 4–6, moderate 7–12, severe 12 or more (the document also says over 13 elsewhere).', refs: [{ guidelineId: R, locator: 'Grade C' }, { guidelineId: F, locator: 'Annexure 2, p.7' }] },
        { text: 'Exclude other causes, including diabetic or starvation ketoacidosis and pancreatitis (FOGSI workup, Fig. 1). Check U&E to guide IV fluids.', refs: [{ guidelineId: F, locator: 'p.4–5' }, { guidelineId: R, locator: 'Table 1' }] },
        { heading: 'Ketones', text: 'RCOG 2024 (Grade A): ketonuria is not an indicator of dehydration and should not be used to judge severity or guide treatment. FOGSI still uses moderate ketonuria (3–4+) as an admission criterion and re-checks ketones after 2 L of fluid.', refs: [{ guidelineId: R, locator: 'Table 1 (Grade A)' }, { guidelineId: F, locator: 'p.7–8' }] },
      ],
    },
    {
      id: 'stepwise',
      title: 'Step-by-step Antiemetics',
      icon: 'drug',
      body: [
        { heading: 'Step 1: mild (PUQE under 7)', text: 'Diet and lifestyle advice. FOGSI: pyridoxine orally 8-hourly (maximum 100 mg/day) and doxylamine–pyridoxine as first-line drug treatment. RCOG: doxylamine 10 mg + pyridoxine 10 mg delayed release can be used first line for mild–moderate NVP.', refs: [{ guidelineId: F, locator: 'p.6 (Grade A)' }, { guidelineId: R, locator: '5.2.1 (Grade B)' }] },
        { heading: 'Step 2: moderate (PUQE 7–12)', text: 'H1 antihistamines (promethazine, cyclizine, cinnarizine, dimenhydrinate) or phenothiazines. If one drug fails, use a combination of drugs from different classes.', refs: [{ guidelineId: F, locator: 'p.6' }, { guidelineId: R, locator: '5.2.1 (Grade A, GPP)' }] },
        { heading: 'Step 3: second line', text: 'Metoclopramide: FOGSI 5–10 mg orally three times daily, maximum 30 mg/day; RCOG maximum 30 mg/24 h or 0.5 mg/kg/24 h (whichever is lower), IV by slow bolus over at least 3 minutes, and may continue beyond 5 days if helping. Stop immediately if extrapyramidal symptoms occur.', refs: [{ guidelineId: F, locator: 'p.6 (Grade B)' }, { guidelineId: R, locator: '5.2.1 (Grade B–C)' }] },
        { text: 'Ondansetron 4 mg orally or IV (FOGSI). RCOG: second line, not to be discouraged if first-line drugs fail; FOGSI: avoid in the first trimester.', refs: [{ guidelineId: F, locator: 'p.7' }, { guidelineId: R, locator: '5.2.1 (Grade B)' }] },
        { heading: 'Step 4: refractory', text: 'Corticosteroids with antiemetics, only after IV fluids and regular antiemetics have failed. RCOG: IV hydrocortisone 100 mg twice daily, then oral prednisolone 40–50 mg daily, tapered to the lowest effective dose; screen for GDM. FOGSI: hydrocortisone 100 mg IV twice daily for 2–3 days; no response within 3 days makes response unlikely.', refs: [{ guidelineId: R, locator: '5.2.1 (Grade A)' }, { guidelineId: F, locator: 'p.7' }] },
        { heading: 'Reflux', text: 'H2 blockers or proton pump inhibitors may be used; offer a PPI for reflux.', refs: [{ guidelineId: R, locator: '5.2.3 (Grade D, GPP)' }] },
      ],
    },
    {
      id: 'inpatient',
      title: 'Admission & Inpatient Care',
      icon: 'management',
      body: [
        { heading: 'Who to admit', text: 'Continued vomiting with inability to keep down oral antiemetics; dehydration or more than 5% weight loss despite oral antiemetics; confirmed or suspected comorbidity (e.g. UTI unable to take oral antibiotics; epilepsy, diabetes, HIV, hypoadrenalism, psychiatric illness). FOGSI adds electrolyte disturbance and nutritional deficiency.', refs: [{ guidelineId: R, locator: '5.1' }, { guidelineId: F, locator: 'p.7' }] },
        { heading: 'IV fluids', text: '0.9% sodium chloride with potassium chloride in each bag, guided by daily electrolytes (RCOG). FOGSI: 1 L 0.9% saline with 20 mmol KCl over 2 hours, then at least 1 L over 4–6 hours in the first 24 hours; if K+ is under 3.2 mmol/L, 1 L saline with 40 mmol K+. Do not use dextrose for rehydration (RCOG; FOGSI only once sodium is normal).', refs: [{ guidelineId: R, locator: '6.1 (Grade C–D)' }, { guidelineId: F, locator: 'p.7, Annexure 7' }] },
        { heading: 'Thiamine', text: 'RCOG: oral 100 mg three times daily or IV vitamin B complex for all admitted women. FOGSI: thiamine 100 mg IV first to prevent Wernicke encephalopathy.', refs: [{ guidelineId: R, locator: 'Grade D' }, { guidelineId: F, locator: 'p.7, p.9' }] },
        { heading: 'VTE prophylaxis', text: 'LMWH while admitted; discontinue at discharge unless another indication exists.', refs: [{ guidelineId: R, locator: '5.2.3 (Grade C)' }, { guidelineId: F, locator: 'p.9 (Grade C)' }] },
        { heading: 'Monitoring', text: 'FOGSI: vitals 2-hourly; serum electrolytes and urea daily.', refs: [{ guidelineId: F, locator: 'p.7' }] },
        { heading: 'Discharge', text: 'FOGSI: when she tolerates 2 meals without vomiting.', refs: [{ guidelineId: F, locator: 'p.8' }] },
        { heading: 'Nutrition', text: 'If all therapies fail, consider enteral tube feeding or parenteral nutrition with gastroenterology referral.', refs: [{ guidelineId: R, locator: '7.2 (Grade D)' }] },
        { heading: 'Termination', text: 'All therapeutic measures should be offered and tried before termination is considered.', refs: [{ guidelineId: R, locator: '7.3 (Grade C)' }] },
      ],
    },
    {
      id: 'future',
      title: 'Next Pregnancy',
      icon: 'followup',
      body: [
        { text: 'Recurrence risk is 15–81%; advise early lifestyle and dietary measures and early antiemetics in the next pregnancy.', refs: [{ guidelineId: R, locator: '8.1, 8.3 (Grade B)' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Ketonuria',
      entries: [
        { guidelineId: F, text: 'Moderate ketonuria (3–4+) is an admission criterion; re-check after 2 L.', locator: 'p.7–8' },
        { guidelineId: R, text: 'Do not use to assess severity or guide treatment.', locator: 'Grade A' },
      ],
    },
    {
      domain: 'Ondansetron, first trimester',
      entries: [
        { guidelineId: F, text: 'Avoid.', locator: 'p.7 (Grade B)' },
        { guidelineId: R, text: 'Do not discourage as second line; small cleft risk.', locator: '5.2.1' },
      ],
    },
    {
      domain: 'Steroid regimen',
      entries: [
        { guidelineId: F, text: 'Hydrocortisone 100 mg IV BD for 2–3 days, then taper.', locator: 'p.7' },
        { guidelineId: R, text: 'Hydrocortisone 100 mg IV BD, then prednisolone 40–50 mg/day tapered.', locator: '5.2.1' },
      ],
    },
  ],
  editorNote:
    'Sources read on 28 Nov 2026 through a summarising fetch tool before the reading limit was hit. FOGSI–ICOG GCPR (no printed year; file dated 2024): several values were garbled or inconsistent and were left out or flagged — pyridoxine dose range, doxylamine "40 mg", promethazine frequency, "prednisolone 16 mg IV", ondansetron "4.8 mg", PUQE severe cut-off (≥12 vs >13) and steroid taper (2 weeks vs 7–10 days). RCOG GTG 69 (2024) was read from an NHS copy without its appendices, so the PUQE bands and the drug dose table (Appendix III) were not available. NICE NG201 table, ACOG Practice Bulletin 189 and any MoHFW/ICMR workflow were not read.',
};
