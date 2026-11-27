import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first (see project rule).
 * Written 2026-11-28 from:
 *  - FOGSI Preterm Labour Practice Algorithms (TOG Conclave 2025)  -> fogsi-ptl-algorithms
 *  - MoHFW Antenatal Corticosteroids Operational Guidelines (2014) -> mohfw-acs-2014
 *  - ICOG Campus: Preterm labour (2017)                            -> icog-campus-ptl-2017
 *  - NICE NG25 (2022), NG207 (2021/2026), NG235 (2023/2026)        -> nice-ng25, nice-ng207, nice-ng235
 *  - RCOG GTG 73 (2019), landing-page summary only                 -> rcog-gtg-73
 *  - ACOG Practice Bulletin 217 (2020), full text                  -> acog-pb-217
 *  - WHO preterm birth interventions (2015); WHO ACS (2022)        -> who-ptb-2015, who-acs-2022
 */
const F = 'fogsi-ptl-algorithms';
const MA = 'mohfw-acs-2014';
const IC = 'icog-campus-ptl-2017';
const N25 = 'nice-ng25';
const N207 = 'nice-ng207';
const N235 = 'nice-ng235';
const R = 'rcog-gtg-73';
const A = 'acog-pb-217';
const W15 = 'who-ptb-2015';
const W22 = 'who-acs-2022';

export const promPprom: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'PROM is rupture of the membranes before labour; PPROM is rupture before 37 weeks. Confirm it with a sterile speculum examination and avoid digital vaginal examination unless in labour. In PPROM, the core management is expectant care with latency antibiotics (erythromycin; never co-amoxiclav), antenatal corticosteroids up to 34 weeks, magnesium sulfate for neuroprotection when birth is imminent before about 32 weeks, and close watch for intra-amniotic infection, which is an indication for delivery. Tocolysis is not recommended by RCOG or ACOG (FOGSI\'s 2025 algorithm differs). Plan birth by 37 weeks (NICE, RCOG); between 34 and 37 weeks either expectant care or delivery is reasonable (ACOG), and GBS-positive women beyond 34 weeks should be delivered. At term, offer induction, or expectant care for up to about 24 hours.',
  keyPoints: [
    { text: 'Diagnose with a sterile speculum exam looking for pooling; if no pooling, consider IGFBP-1 or PAMG-1. Do not use nitrazine (NICE). Avoid digital vaginal examination unless in labour or delivery is imminent.', refs: [{ guidelineId: N25, locator: '1.3.1–1.3.4' }, { guidelineId: R }, { guidelineId: A, locator: 'Level C' }] },
    { text: 'PPROM antibiotics: oral erythromycin 250 mg four times a day for 10 days or until established labour, whichever is sooner (NICE, WHO, RCOG, FOGSI). An oral penicillin if erythromycin is not tolerated. Do not give co-amoxiclav (NEC risk).', refs: [{ guidelineId: N25, locator: '1.4.1–1.4.3' }, { guidelineId: W15 }, { guidelineId: R }, { guidelineId: F, locator: 'p.12, Table 4' }] },
    { text: 'ACOG alternative: 7 days of IV ampicillin 2 g 6-hourly plus erythromycin 250 mg 6-hourly for 48 h, then oral amoxicillin 250 mg 8-hourly plus erythromycin 333 mg 8-hourly (azithromycin 1 g once may replace erythromycin). No latency antibiotics at 34 weeks or later.', refs: [{ guidelineId: A }] },
    { text: 'Antenatal corticosteroids: offer at 24+0–33+6 weeks (NICE, ACOG); RCOG and ICOG extend to 34+6; WHO 24–34 weeks if no clinical infection. Regimen: betamethasone 12 mg IM × 2, 24 h apart, or dexamethasone 6 mg IM × 4, 12 h apart (MoHFW uses dexamethasone).', refs: [{ guidelineId: N25, locator: '1.9.2' }, { guidelineId: A, locator: 'Level A' }, { guidelineId: R }, { guidelineId: W22, locator: 'Rec 1.3, 1.9' }, { guidelineId: MA, locator: 'p.6, p.12' }] },
    { text: 'Magnesium sulfate for fetal neuroprotection when preterm birth is imminent before 32 weeks (WHO, ACOG); NICE offers it at 24+0–29+6 and considers it at 30+0–33+6 weeks. FOGSI regimen: 4 g IV over 5–10 min, then 1 g/h until delivery.', refs: [{ guidelineId: W15 }, { guidelineId: A, locator: 'Level A' }, { guidelineId: N25, locator: '1.10.1–1.10.3' }, { guidelineId: F, locator: 'p.11' }] },
    { text: 'Tocolysis is not recommended in PPROM (RCOG; ACOG at 34–37 weeks). Note: the FOGSI 2025 algorithm lists isoxsuprine or atosiban in PPROM without infection.', refs: [{ guidelineId: R }, { guidelineId: A, locator: 'Level B' }, { guidelineId: F, locator: 'p.8, p.15' }] },
    { text: 'Timing: below 34 weeks, expectant management unless infection or fetal compromise. 34–37 weeks: NICE and RCOG favour expectant care to 37+0 weeks after discussion; ACOG accepts either. GBS-positive beyond 34 weeks: immediate induction or caesarean.', refs: [{ guidelineId: N207, locator: '1.2.10–1.2.12' }, { guidelineId: R }, { guidelineId: A, locator: 'Level B' }, { guidelineId: F, locator: 'p.13' }] },
    { text: 'Intra-amniotic infection (fever, uterine tenderness, maternal or fetal tachycardia, offensive liquor) is an indication to treat and deliver. Use clinical signs, CRP, WCC and CTG together, not any one alone.', refs: [{ guidelineId: A, locator: 'Box 1' }, { guidelineId: N25, locator: '1.5.1–1.5.3' }] },
    { text: 'Term PROM: offer induction as soon as possible or expectant management for up to 24 hours, and induction if labour has not started by about 24 hours. GBS-positive: immediate induction.', refs: [{ guidelineId: N207, locator: '1.2.13–1.2.16' }, { guidelineId: N235, locator: '1.7.6–1.7.11' }, { guidelineId: A, locator: 'Level B' }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Definition',
      icon: 'definition',
      body: [
        { text: 'PROM: rupture of membranes before the onset of labour. PPROM: rupture before 37 weeks. Periviable PROM: before about 23–24 weeks (ACOG).', refs: [{ guidelineId: A, locator: 'Box 1' }, { guidelineId: F, locator: 'p.3' }] },
      ],
    },
    {
      id: 'diagnosis',
      title: 'Diagnosis',
      icon: 'diagnosis',
      body: [
        { text: 'Diagnosis rests on the history and a sterile speculum examination for pooling of fluid. If pooling is seen, no further test is needed.', refs: [{ guidelineId: N25, locator: '1.3.1' }, { guidelineId: R }] },
        { text: 'If no pooling: consider an IGFBP-1 or PAMG-1 test, but do not decide care on the result alone. If negative and no fluid seen, do not give prophylactic antibiotics.', refs: [{ guidelineId: N25, locator: '1.3.1–1.3.3' }, { guidelineId: R }] },
        { text: 'NICE: do not use nitrazine to diagnose PPROM. ACOG still lists pooling, pH (nitrazine) and ferning, with biomarker kits only selectively (19–30% false positives). Ultrasound is a useful adjunct but not diagnostic.', refs: [{ guidelineId: N25, locator: '1.3.4' }, { guidelineId: A, locator: 'Level C' }] },
        { text: 'Avoid digital vaginal examination unless in labour or delivery is imminent. At term, do not do a speculum examination if rupture is certain.', refs: [{ guidelineId: A, locator: 'Level C' }, { guidelineId: N235, locator: '1.7.3–1.7.4' }] },
        { text: 'Do not perform diagnostic tests for PPROM once labour is established.', refs: [{ guidelineId: N25, locator: '1.3.5' }] },
      ],
    },
    {
      id: 'pprom-management',
      title: 'PPROM: Step-by-step Management',
      icon: 'management',
      body: [
        { heading: '1. Admit and assess', text: 'Confirm gestation, presentation and fetal wellbeing (CTG). Look for infection, labour, abruption and cord prolapse. Take a GBS culture if expectant management is planned (ACOG).', refs: [{ guidelineId: A }] },
        { text: 'MoHFW: refer to a facility with caesarean section and a special care newborn unit.', refs: [{ guidelineId: MA, locator: 'p.4' }] },
        { heading: '2. Start latency antibiotics', text: 'Erythromycin 250 mg orally four times a day for a maximum of 10 days or until established labour (NICE, WHO, RCOG, FOGSI). Oral penicillin if erythromycin is not tolerated or contraindicated. Co-amoxiclav is not recommended (NEC).', refs: [{ guidelineId: N25, locator: '1.4.1–1.4.3' }, { guidelineId: W15 }, { guidelineId: R }, { guidelineId: F, locator: 'p.12' }] },
        { text: 'ACOG regimen (7 days): IV ampicillin 2 g every 6 h plus erythromycin 250 mg every 6 h for 48 h, then oral amoxicillin 250 mg every 8 h plus erythromycin base 333 mg every 8 h; azithromycin 1 g single dose may substitute for erythromycin. Latency antibiotics are not appropriate at 34 weeks or later.', refs: [{ guidelineId: A }] },
        { heading: '3. Corticosteroids', text: 'NICE: discuss at 22+0–23+6 weeks; offer at 24+0–33+6 weeks; consider at 34+0–35+6 weeks. One repeat course may be considered if under 34 weeks, more than 7 days since the last, and birth likely within 48 h; never more than 2 courses.', refs: [{ guidelineId: N25, locator: '1.9.1–1.9.5' }] },
        { text: 'RCOG (2022 note): offer up to 34+6 weeks. WHO: 24–34 weeks for PPROM with no clinical signs of infection; not recommended with chorioamnionitis. MoHFW: frank chorioamnionitis is an absolute contraindication.', refs: [{ guidelineId: R }, { guidelineId: W22, locator: 'Rec 1.0, 1.3, 1.4' }, { guidelineId: MA, locator: 'p.7, Table 2' }] },
        { text: 'Regimen: betamethasone 12 mg IM × 2 doses 24 h apart, or dexamethasone 6 mg IM × 4 doses 12 h apart (total 24 mg). MoHFW (ANM operational guideline): dexamethasone 6 mg IM 12-hourly × 4.', refs: [{ guidelineId: W22, locator: 'Rec 1.9' }, { guidelineId: IC, locator: 'Table 2' }, { guidelineId: MA, locator: 'p.6, p.12' }] },
        { heading: '4. Magnesium sulfate (neuroprotection)', text: 'Give when preterm birth is imminent: WHO and ACOG before 32 weeks; NICE offers at 24+0–29+6 and considers at 30+0–33+6 weeks for established labour or planned birth within 24 h. FOGSI: 4 g IV over 5–10 min, then 1 g/h until delivery.', refs: [{ guidelineId: W15 }, { guidelineId: A }, { guidelineId: N25, locator: '1.10.1–1.10.3' }, { guidelineId: F, locator: 'p.11' }] },
        { heading: '5. No tocolysis', text: 'RCOG: tocolysis is not recommended. ACOG: not recommended at 34+0–36+6 weeks; it may prolong latency but raises chorioamnionitis risk without proven neonatal benefit. The FOGSI 2025 algorithm lists isoxsuprine or atosiban with steroids and MgSO4 in PPROM without infection and not in labour; this differs from RCOG and ACOG.', refs: [{ guidelineId: R }, { guidelineId: A, locator: 'Level B' }, { guidelineId: F, locator: 'p.8, p.15' }] },
        { heading: '6. Monitor for infection', text: 'Watch for fever, uterine tenderness, maternal or fetal tachycardia and offensive liquor. Combine clinical assessment with CRP, WCC and CTG; do not rely on any one; if results conflict, observe and repeat.', refs: [{ guidelineId: A }, { guidelineId: N25, locator: '1.5.1–1.5.3' }, { guidelineId: R }] },
        { heading: '7. Do not use', text: '17-OHPC should not be used to extend latency (ACOG). FOGSI Focus found no evidence for injectable progesterone in PPROM.', refs: [{ guidelineId: A }, { guidelineId: 'fogsi-focus-ptl', locator: 'p.28' }] },
        { heading: 'Outpatient care', text: 'ACOG: not recommended for a viable fetus (not studied enough); periviable PROM may be managed at home after inpatient assessment. RCOG: care at home may be appropriate for some women.', refs: [{ guidelineId: A, locator: 'Level C' }, { guidelineId: R }] },
      ],
    },
    {
      id: 'timing',
      title: 'Timing & Mode of Birth',
      icon: 'delivery',
      body: [
        { heading: 'Below 34 weeks', text: 'Do not induce before 34+0 weeks unless there are additional obstetric indications such as infection or fetal compromise; offer expectant management (NICE, ACOG Level A, FOGSI).', refs: [{ guidelineId: N207, locator: '1.2.10' }, { guidelineId: A, locator: 'Level A' }, { guidelineId: F, locator: 'p.13' }] },
        { heading: '34+0 to 37+0 weeks', text: 'NICE: discuss expectant management until 37+0 weeks or induction, weighing sepsis risk, caesarean risk, NICU availability and her preference. RCOG: expectant management until 37+0 weeks if no contraindications. ACOG: either expectant management or immediate delivery is reasonable, but not beyond 37+0 weeks.', refs: [{ guidelineId: N207, locator: '1.2.11' }, { guidelineId: R }, { guidelineId: A, locator: 'Level B' }] },
        { heading: 'GBS positive', text: 'After 34+0 weeks: offer immediate induction or caesarean (NICE); early delivery may be preferable (FOGSI). Give intrapartum GBS prophylaxis when indicated regardless of earlier antibiotics (ACOG).', refs: [{ guidelineId: N207, locator: '1.2.12' }, { guidelineId: F, locator: 'p.13, Table 5' }, { guidelineId: A, locator: 'Level A' }] },
        { heading: 'Deliver now', text: 'Intra-amniotic infection, significant abruption or fetal compromise are clear indications for delivery (ACOG).', refs: [{ guidelineId: A }] },
        { heading: 'Mode', text: 'Discuss caesarean versus vaginal birth, including the higher chance of a classical incision at early gestations (NICE). FOGSI: avoid ventouse; delayed cord clamping.', refs: [{ guidelineId: N25, locator: '1.13.1–1.13.2' }, { guidelineId: F, locator: 'p.13' }] },
      ],
    },
    {
      id: 'term-prom',
      title: 'Term PROM (≥37 weeks)',
      icon: 'management',
      body: [
        { text: 'Offer a choice: induction as soon as possible, or expectant management for up to 24 hours. Offer induction if labour has not started after about 24 hours, and respect a decision to wait longer.', refs: [{ guidelineId: N207, locator: '1.2.13–1.2.15' }, { guidelineId: N235, locator: '1.7.6–1.7.7' }] },
        { text: 'ACOG: induction should be recommended; a short expectant period of 12–24 hours is reasonable. Allow at least 12–18 hours of oxytocin before calling induction failed. No routine antibiotics at term without a GBS indication.', refs: [{ guidelineId: A, locator: 'Level B' }] },
        { text: 'GBS positive: offer immediate induction (or caesarean if planned) and do not delay prophylaxis.', refs: [{ guidelineId: N235, locator: '1.7.11' }, { guidelineId: N207, locator: '1.2.16' }, { guidelineId: A }] },
        { text: 'Counselling (NICE): about 60% labour within 24 hours; the risk of serious neonatal infection is 1% rather than 0.5% with intact membranes.', refs: [{ guidelineId: N235, locator: '1.7.5' }] },
        { text: 'During expectant management: temperature every 4 hours while awake; fetal movements and heart rate every 24 hours; no routine lower vaginal swabs or CRP. Red flags: offensive liquor, meconium, bleeding.', refs: [{ guidelineId: N235, locator: '1.7.1, 1.7.8–1.7.9' }] },
      ],
    },
    {
      id: 'future',
      title: 'Next Pregnancy',
      icon: 'followup',
      body: [
        { text: 'Consider prophylactic cerclage if the cervical length is 25 mm or less and there was PPROM in a previous pregnancy (NICE).', refs: [{ guidelineId: N25, locator: '1.2.4' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Latency antibiotic',
      entries: [
        { guidelineId: F, text: 'Erythromycin for 10 days; no dose stated. Avoid co-amoxiclav.', locator: 'p.12' },
        { guidelineId: N25, text: 'Erythromycin 250 mg QDS up to 10 days; oral penicillin if not tolerated.', locator: '1.4.1–1.4.2' },
        { guidelineId: W15, text: 'Erythromycin is the antibiotic of choice; avoid co-amoxiclav.' },
        { guidelineId: A, text: 'IV ampicillin + erythromycin 48 h, then oral amoxicillin + erythromycin; 7 days total.' },
      ],
    },
    {
      domain: 'Tocolysis in PPROM',
      entries: [
        { guidelineId: F, text: 'Isoxsuprine or atosiban if no infection and not in labour.', locator: 'p.15' },
        { guidelineId: R, text: 'Not recommended.' },
        { guidelineId: A, text: 'Not recommended at 34–37 weeks.', locator: 'Level B' },
      ],
    },
    {
      domain: 'Timing of birth, 34–37 weeks',
      entries: [
        { guidelineId: N207, text: 'Discuss expectant care to 37+0 or induction.', locator: '1.2.11' },
        { guidelineId: R, text: 'Expectant management until 37+0 weeks.' },
        { guidelineId: A, text: 'Either is reasonable; not beyond 37+0.', locator: 'Level B' },
        { guidelineId: F, text: 'Expectant management; early delivery if GBS-colonised >34 weeks.', locator: 'p.13' },
      ],
    },
    {
      domain: 'Corticosteroid upper limit',
      entries: [
        { guidelineId: N25, text: 'Offer to 33+6; consider 34+0–35+6.', locator: '1.9.2–1.9.3' },
        { guidelineId: R, text: 'Offer up to 34+6 (2022 note).' },
        { guidelineId: A, text: '24+0–33+6; late preterm if no prior course.' },
        { guidelineId: W22, text: '24–34 weeks, no clinical infection.', locator: 'Rec 1.3' },
        { guidelineId: MA, text: '24–34 weeks (dexamethasone).', locator: 'p.4' },
      ],
    },
  ],
  editorNote:
    'Sources read on 28 Nov 2026 through a summarising fetch tool; check quotes against the originals. No dedicated FOGSI GCPR or ICOG guideline on PROM/PPROM was found; FOGSI content comes from the 2025 TOG Conclave algorithms (self-described expert opinion, not a guideline), which give no antibiotic doses and list tocolysis in PPROM, unlike RCOG and ACOG. The PROM chapter of FOGSI Focus PTL could not be extracted. RCOG GTG 73 full text (Wiley) could not be read; only its landing-page summary was used, so no section numbers or grades. WHO 2015 recommendations were read from database entries without recommendation numbers; the WHO 2022 corticosteroid PDF was read except its last part. ACOG PB 217 (2020) was read in full; whether newer ACOG guidance exists was not checked. Doses are quoted from the guidelines; confirm against the original and your unit protocol.',
};
