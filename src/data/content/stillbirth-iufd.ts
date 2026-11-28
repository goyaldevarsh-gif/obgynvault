import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from FOGSI GCPR Prevention and Management of Stillbirths (2024), RCOG GTG 55 2nd ed (2024;
 * read from the July 2023 author manuscript), NHS England North West Stillbirth Guideline V5 (2025) and the FIGO 2023 misoprostol chart.
 */
const F = 'fogsi-sb-2024';
const R = 'rcog-gtg-55';
const NW = 'nhs-nw-stillbirth-2025';
const FG = 'figo-miso-2023';

export const stillbirthIufd: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Confirm intrauterine fetal death with real-time ultrasound (not CTG or auscultation) and offer a second opinion. Deliver promptly if she has pre-eclampsia, sepsis, abruption, ruptured membranes or DIC; otherwise a short delay of up to 48 hours is unlikely to harm, and coagulation should be checked if birth is delayed beyond that. Vaginal birth is recommended for most women: mifepristone 200 mg followed by misoprostol in a gestation-based dose. With a previous caesarean, FOGSI advises against prostaglandins and uses Foley and oxytocin, while RCOG allows misoprostol up to 26 weeks. Investigate for the cause (including post-mortem, placental histology and genetics), give anti-D after a Kleihauer test if Rh negative, offer cabergoline for lactation suppression, and plan bereavement care and a 6-week follow-up visit.',
  keyPoints: [
    { text: 'Diagnose with real-time ultrasound; do not use CTG or auscultation. Offer a second opinion. Rescan if she reports movements afterwards (passive movements can occur).', refs: [{ guidelineId: F, locator: 'p.7' }, { guidelineId: R, locator: '§4' }] },
    { text: 'Deliver immediately for pre-eclampsia, sepsis, abruption, ruptured membranes or DIC. If well with intact membranes, a delay of up to 48 hours is unlikely to harm; check for DIC if birth is delayed beyond 48 hours.', refs: [{ guidelineId: F, locator: 'p.9' }, { guidelineId: R, locator: '§5.1' }] },
    { text: 'Induction (unscarred uterus): mifepristone 200 mg once, then misoprostol by gestation. Misoprostol is preferred to PGE2; oxytocin is an alternative.', refs: [{ guidelineId: F, locator: 'p.10, Table 5' }, { guidelineId: R, locator: '§5.2' }] },
    { text: 'Previous caesarean: induction is not contraindicated. FOGSI: no prostaglandin or misoprostol; Foley after 28 weeks and oxytocin with counselling. RCOG: misoprostol 200 µg 4–6 hourly up to 26 weeks; insufficient evidence beyond.', refs: [{ guidelineId: F, locator: 'pp.10–11' }, { guidelineId: R, locator: '§5.3' }] },
    { text: 'Rh negative: urgent Kleihauer and anti-D as soon as possible, ideally within 72 hours.', refs: [{ guidelineId: R, locator: '§7.3' }] },
    { text: 'Offer full post-mortem, placental histology and chromosomal microarray to all; offer limited autopsy or MRI if declined.', refs: [{ guidelineId: F, locator: 'pp.7–9' }, { guidelineId: R, locator: '§7.2, 7.6' }] },
    { text: 'Lactation suppression: cabergoline (as effective as bromocriptine with fewer side effects); use with care in hypertension or pre-eclampsia.', refs: [{ guidelineId: F, locator: 'p.11' }, { guidelineId: R, locator: '§6.2' }] },
  ],
  sections: [
    {
      id: 'stepwise',
      title: 'Step-by-step Management',
      icon: 'management',
      body: [
        {
          text: 'Pathway after the diagnosis of fetal death.',
          refs: [{ guidelineId: F, locator: 'pp.7–11' }, { guidelineId: R, locator: '§4–5' }, { guidelineId: NW, locator: '§5.5–5.6' }],
          flow: {
            caption: 'Intrauterine fetal death',
            steps: [
              { title: 'Confirm', text: 'Real-time ultrasound; second opinion if wished. Break news in a private space with a companion present.', tone: 'start' },
              { title: 'Unwell or high risk?', text: 'Check BP, urine protein, temperature, bleeding, membranes, FBC, coagulation.', tone: 'decision', branches: [
                { when: 'Pre-eclampsia, sepsis, abruption, ruptured membranes or DIC', then: 'Deliver promptly; treat the cause (IV antibiotics for sepsis)' },
                { when: 'Well, membranes intact, no DIC', then: 'A delay of up to 48 hours is unlikely to harm' },
              ] },
              { title: 'Previous caesarean?', tone: 'decision', branches: [
                { when: 'No', then: 'Mifepristone 200 mg, then misoprostol by gestation' },
                { when: 'Yes', then: 'Senior-led plan: see "Previous caesarean" below' },
              ] },
              { title: 'Delivery delayed beyond 48 hours', text: 'Test for DIC (NHS NW: FBC and clotting twice weekly). DIC risk about 10% within 4 weeks of fetal death and rising.', tone: 'urgent' },
              { title: 'After birth', text: 'Investigations and post-mortem consent, anti-D if Rh negative, cabergoline, VTE assessment, bereavement care, 6-week review.' },
            ],
          },
        },
      ],
    },
    {
      id: 'induction',
      title: 'Induction Regimens',
      icon: 'drug',
      body: [
        {
          text: 'Misoprostol after mifepristone 200 mg (unscarred uterus).',
          refs: [{ guidelineId: F, locator: 'Table 5, p.10' }, { guidelineId: R, locator: '§5.2' }, { guidelineId: NW, locator: '§5.7, pp.11–13' }],
          table: {
            columns: ['Gestation', 'FOGSI 2024', 'RCOG 2024', 'NHS North West 2025'],
            rows: [
              ['24 to 26+6 wk', '200 µg PV/SL/PO 4–6 hourly', '200 µg every 4–6 h (up to 26 wk)', '200 µg PV/PO 4-hourly, max 5 doses (to 27+6)'],
              ['27 to 27+6 wk', '100 µg PV/SL/PO 6 hourly', '100 µg every 4 h (27–28 wk)', 'As above'],
              ['28 wk onwards', '50 µg PV/SL/PO 6 hourly', '25 µg PV 6-hourly or 25 µg oral 2-hourly', '50 µg PV 4-hourly or 50 µg oral 2-hourly, max 5 doses'],
            ],
          },
        },
        { text: 'Mifepristone 200 mg shortens induction to delivery by about 7 hours. NHS North West gives misoprostol 0–48 hours after it (24 hours recommended).', refs: [{ guidelineId: F, locator: 'p.10' }, { guidelineId: NW, locator: '§5.7' }] },
        { text: 'If induction fails: FOGSI repeats misoprostol at least 12 hours after the last dose after senior review; NHS North West rests 12 hours and repeats one cycle. RCOG and FIGO set no maximum misoprostol dose. Oxytocin infusion is a safe alternative.', refs: [{ guidelineId: F, locator: 'p.10' }, { guidelineId: NW, locator: 'p.13' }, { guidelineId: R, locator: '§5.2' }, { guidelineId: FG }] },
        { text: 'Vaginal birth is recommended for most women. Caesarean may be considered for maternal wish or a medical reason after explaining the maternal risks and that there is no fetal benefit.', refs: [{ guidelineId: R, locator: '§5.1' }, { guidelineId: F, locator: 'p.10' }] },
      ],
    },
    {
      id: 'scar',
      title: 'Previous Caesarean',
      icon: 'surgery',
      body: [
        { text: 'FOGSI: induction is not contraindicated. Do not use prostaglandin gel or misoprostol. Use a Foley catheter for a low Bishop score after 28 weeks; oxytocin with careful counselling. Senior obstetrician to lead.', refs: [{ guidelineId: F, locator: 'pp.10–11 (LE2, B)' }] },
        { text: 'RCOG: misoprostol 200 µg every 4–6 hours can be used at 13+0 to 26+0 weeks; insufficient evidence for any regimen beyond 26 weeks; safety unknown with two or more caesareans or atypical scars. After 28 weeks a Foley catheter has rupture rates comparable to spontaneous labour. Watch closely for scar rupture.', refs: [{ guidelineId: R, locator: '§5.3' }] },
        { text: 'FIGO: misoprostol is safe below 28 weeks even after a caesarean, and not recommended at 28 weeks or more with a prior caesarean. NHS North West (one previous caesarean): 100 µg 4-hourly at 24 to 27+6 weeks; from 28 weeks 50 µg or a balloon/Dilapan; two or more caesareans individualised by a consultant.', refs: [{ guidelineId: FG }, { guidelineId: NW, locator: 'pp.14–16' }] },
      ],
    },
    {
      id: 'care',
      title: 'Intrapartum & Immediate Postnatal Care',
      icon: 'monitoring',
      body: [
        { heading: 'Infection', text: 'Sepsis: IV broad-spectrum antibiotics (RCOG: include antichlamydial cover). Routine prophylaxis: FOGSI says it may be offered; RCOG says it should not be used, and GBS prophylaxis is not indicated.', refs: [{ guidelineId: F, locator: 'p.11' }, { guidelineId: R, locator: '§5.5' }] },
        { heading: 'Analgesia', text: 'Epidural may be used if there is no DIC or sepsis; regional anaesthesia is contraindicated with DIC.', refs: [{ guidelineId: F, locator: 'p.11' }, { guidelineId: R, locator: '§5.6' }] },
        { heading: 'Anti-D', text: 'Rh negative: urgent Kleihauer; anti-D as soon as possible, ideally within 72 hours (benefit up to 10 days); adjust and repeat Kleihauer at 48 hours if large bleed. NHS North West: 1500 IU IM if the fetal group is positive or unknown.', refs: [{ guidelineId: R, locator: '§7.3' }, { guidelineId: NW, locator: '§5.10' }] },
        { heading: 'Lactation', text: 'Dopamine agonists suppress lactation in over 90%; cabergoline preferred. NHS North West: cabergoline 1 mg orally once; avoid in hypertension, pre-eclampsia or puerperal psychosis.', refs: [{ guidelineId: F, locator: 'p.11' }, { guidelineId: R, locator: '§6.2' }, { guidelineId: NW, locator: '§5.12' }] },
        { heading: 'VTE', text: 'Late fetal death is an independent VTE risk factor (up to six-fold): assess risk; discuss heparin with a haematologist if DIC is present.', refs: [{ guidelineId: R, locator: '§6.3' }, { guidelineId: NW, locator: '§5.12' }] },
      ],
    },
    {
      id: 'investigations',
      title: 'Finding the Cause',
      icon: 'lab',
      body: [
        { text: 'FOGSI core tests: CBC, renal and liver function, thyroid function, bile acids, HbA1c, blood group and antibody screen, coagulation, lupus anticoagulant, anticardiolipin and anti-β2GP1, plus external examination, photographs, post-mortem, placental histology and chromosomal microarray. Routine infection screening and inherited thrombophilia testing are not recommended; repeat a positive APS test after 12 weeks.', refs: [{ guidelineId: F, locator: 'Table 4, pp.8–9' }] },
        { text: 'RCOG lists a broader panel, including CRP, Kleihauer, bacteriology, serology, anti-Ro/La, parental karyotype and toxicology where indicated. A possible or probable cause can be found in up to three-quarters (FOGSI: no cause in about 45–50%).', refs: [{ guidelineId: R, locator: 'Table 2, §7.1' }, { guidelineId: F, locator: 'p.7' }] },
        { heading: 'Genetic samples', text: 'FOGSI: 1 cm thigh skin biopsy and 1 cm placental biopsy near the cord insertion, in saline with gentamicin (no formalin), processed within 48 hours. RCOG: placental biopsy about 1 cm, cord about 0.5 cm, with written consent.', refs: [{ guidelineId: F, locator: 'p.8' }, { guidelineId: R, locator: '§7.5' }] },
        { heading: 'Post-mortem', text: 'Full autopsy is the gold standard; if declined, offer limited autopsy (external examination, X-ray, photographs) or MRI. Always recommend placental pathology. Allow at least an hour for the consent discussion, by trained staff.', refs: [{ guidelineId: F, locator: 'pp.7–9' }, { guidelineId: R, locator: '§7.6' }, { guidelineId: NW, locator: '§5.10' }] },
      ],
    },
    {
      id: 'followup',
      title: 'Bereavement, Follow-up & Next Pregnancy',
      icon: 'followup',
      body: [
        { text: 'Offer to see and hold the baby, photographs and mementos; care away from busy labour wards with a companion. Inform all key staff and cancel antenatal appointments.', refs: [{ guidelineId: F, locator: 'pp.9, 11' }, { guidelineId: R, locator: '§6.4' }] },
        { text: 'Follow-up visit at 6 weeks to discuss results; offer contraception. Waiting 6–12 months before the next conception is reasonable.', refs: [{ guidelineId: F, locator: 'pp.11–12' }] },
        { heading: 'Next pregnancy (FOGSI)', text: 'Early and 24–28 week diabetes screening; low-dose aspirin; anatomy scan 18–20 weeks, uterine artery Doppler 22–24 weeks, serial growth scans from 28 weeks; fetal surveillance from 32 weeks (or 1–2 weeks before the earlier loss); birth at 39 weeks or earlier if indicated; screen for depression, anxiety and PTSD. NHS North West: consider aspirin 150 mg daily until 36 weeks.', refs: [{ guidelineId: F, locator: 'pp.12–13' }, { guidelineId: NW, locator: '§5.15' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Misoprostol with previous caesarean',
      entries: [
        { guidelineId: F, text: 'Not to be used.', locator: 'p.10' },
        { guidelineId: R, text: '200 µg 4–6 hourly up to 26 weeks.', locator: '§5.3' },
        { guidelineId: FG, text: 'Safe below 28 weeks; not at 28 or more.' },
      ],
    },
    {
      domain: 'Routine antibiotic prophylaxis',
      entries: [
        { guidelineId: F, text: 'May be offered (CPP).', locator: 'p.11' },
        { guidelineId: R, text: 'Should not be used.', locator: '§5.5' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. RCOG GTG 55 (2nd edition, 2024) was read from the July 2023 author-accepted manuscript at UCL; its follow-up and next-pregnancy sections were not reached. FIGO 2023 fetal-death dose bands were extracted with lost table alignment, so FIGO doses by gestation are not shown; only its previous-caesarean notes and no-maximum-dose note are used. Not read: ACOG Obstetric Care Consensus 10 (2020), NICE, WHO, RANZCOG/PSANZ, MoHFW. Stillbirth certification rules differ in India and are not covered.',
};
