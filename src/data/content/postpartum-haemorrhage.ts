import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI–FIGO PPH Management Protocol 2025 (full PDF read)          -> fogsi-pph
 *  - MoHFW Guidance Note on PPH, Dec 2015 (pp.1–9 read verbatim)      -> mohfw-pph
 *  - RCOG GTG 52 (RCOG summary page only; full text Wiley-blocked)    -> rcog-gtg-52
 *  - ACOG PB 183 (published summary paragraph only)                   -> acog-pb-183
 *  - WHO/FIGO/ICM consolidated PPH guideline 2025 (WHO news release)  -> who-pph-2025
 */
const F = 'fogsi-pph';
const W = 'who-pph-2025';
const M = 'mohfw-pph';
const R = 'rcog-gtg-52';
const A = 'acog-pb-183';

export const postpartumHaemorrhage: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Postpartum haemorrhage is the leading cause of maternal death worldwide. Most women who bleed have no identifiable risk factor, so every birth needs active management of the third stage and close monitoring. Current guidance replaces visual estimates with measured blood loss, and replaces slow step-by-step escalation with an immediate first-response bundle. The 2025 FOGSI–FIGO protocol puts this into one pathway for Indian labour rooms: measured blood loss with trigger lines at 300 and 500 mL, the obstetric shock index, colour-coded escalation zones, uterotonics with tranexamic acid, tamponade, then surgery.',
  keyPoints: [
    { text: 'Define PPH as ≥500 mL within 24 h of birth (FOGSI: >1000 mL after caesarean, or any loss causing instability). ACOG uses ≥1000 mL or any loss with signs of hypovolaemia.', refs: [{ guidelineId: F, locator: 'Definition' }, { guidelineId: R, locator: 'Summary' }, { guidelineId: A, locator: 'Summary' }] },
    { text: 'Measure blood loss with calibrated drapes, or by weighing (1 g = 1 mL). Act at 300 mL if vital signs are abnormal.', refs: [{ guidelineId: F, locator: 'Blood loss measurement' }, { guidelineId: W }] },
    { text: 'Use the obstetric shock index (HR ÷ SBP). ≥0.9 predicts transfusion; ≥1.4 needs urgent aggressive treatment. Tachycardia is the earliest warning sign.', refs: [{ guidelineId: F, locator: 'Shock classification' }] },
    { text: 'Prevent PPH at every birth with active management of the third stage, using oxytocin as the uterotonic of choice. Carbetocin is an alternative; misoprostol is used where oxytocin is not available.', refs: [{ guidelineId: M, locator: 'p.3' }, { guidelineId: W }] },
    { text: 'At diagnosis, start everything together: massage, uterotonics, tranexamic acid 1 g IV, IV fluids, examination of the genital tract, and escalation.', refs: [{ guidelineId: W }, { guidelineId: F, locator: 'Medical management' }] },
    { text: 'If bleeding continues, use tamponade (balloon or suction), NASG or compression as a bridge, then embolisation, compression sutures or devascularisation, and hysterectomy.', refs: [{ guidelineId: F, locator: 'Mechanical & surgical' }] },
    { text: 'Replace blood early: after 4 units of RBC with 4 FFP and 1 platelet unit, give calcium; give fibrinogen if below 1 g/L. Target platelets >50, fibrinogen >1 g/L and Hb >8.5 g/dL.', refs: [{ guidelineId: F, locator: 'Coagulopathy & blood products' }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Definition & Classification',
      icon: 'definition',
      body: [
        { text: 'RCOG: primary PPH is loss of 500 mL or more from the genital tract within 24 hours of birth. Minor PPH is 500–1000 mL; major PPH is over 1000 mL, divided into moderate (1000–2000 mL) and severe (over 2000 mL).', refs: [{ guidelineId: R, locator: 'Summary' }] },
        { text: 'FOGSI 2025: ≥500 mL after a vaginal birth, >1000 mL after caesarean, or any blood loss that could cause haemodynamic instability.', refs: [{ guidelineId: F, locator: 'Definition' }] },
        { text: 'ACOG: cumulative blood loss ≥1000 mL, or blood loss with signs or symptoms of hypovolaemia, within 24 hours of birth.', refs: [{ guidelineId: A, locator: 'Summary' }] },
        { text: 'MoHFW: ≥500 mL within 24 hours after birth; massive or severe PPH is ≥1000 mL.', refs: [{ guidelineId: M, locator: 'p.1' }] },
        { text: 'WHO/FIGO/ICM 2025: in addition to the traditional ≥500 mL threshold, act when measured loss reaches 300 mL together with any abnormal vital sign.', refs: [{ guidelineId: W }] },
      ],
    },
    {
      id: 'risk-factors',
      title: 'Causes & Risk Factors (Four Ts)',
      icon: 'risk',
      body: [
        {
          text: 'FOGSI groups causes as the Four Ts. Most PPH happens in women with no identifiable risk factor.',
          refs: [{ guidelineId: F, locator: 'Risk factor table' }],
          table: {
            columns: ['Cause', 'Share'],
            rows: [['Tone (atony)', '~70%'], ['Trauma', '~20%'], ['Tissue (retained placenta or fragments)', '~10%'], ['Thrombin (coagulopathy)', '~1%']],
          },
        },
        {
          text: 'Risk factors listed by FOGSI, by stage:',
          refs: [{ guidelineId: F, locator: 'Risk factor table' }],
          table: {
            columns: ['Stage', 'Risk factors'],
            rows: [
              ['Antepartum', 'Age ≥35; overdistension (multiple pregnancy, polyhydramnios, macrosomia >4 kg); grand multiparity; uterine anomalies; previous PPH; antepartum haemorrhage; BMI ≥35; placenta praevia or accreta spectrum; intrauterine death; therapeutic anticoagulation; bleeding disorders (von Willebrand, ITP, HDP thrombocytopenia, DIC)'],
              ['Intrapartum', 'Precipitate, prolonged or arrested labour; fever ≥38 °C; oxytocin induction or augmentation; intrapartum haemorrhage; caesarean; perineal, cervical or uterine lacerations; forceps or vacuum; retained placenta needing manual removal; uterine inversion; amniotic fluid embolism; DIC'],
              ['Postpartum', 'Drug-induced hypotension (MgSO4, anaesthetic agents); bladder distension; retained placenta'],
            ],
          },
        },
        { text: 'Correct anaemia during pregnancy with iron and folic acid, using IV iron when rapid correction is needed.', refs: [{ guidelineId: W }] },
      ],
    },
    {
      id: 'prevention',
      title: 'Prevention',
      icon: 'drug',
      body: [
        { heading: 'Active management of the third stage', text: 'MoHFW strongly recommends oxytocin for active management of the third stage of labour (AMTSL), together with controlled cord traction and uterine massage. This reduces PPH by more than 60%. Oxytocin is the uterotonic of choice.', refs: [{ guidelineId: M, locator: 'p.3' }] },
        { text: 'WHO 2025: give every woman a quality-assured uterotonic in the third stage, preferably oxytocin or heat-stable carbetocin. Use misoprostol only as a last resort, when injectable options and a reliable cold chain are not available.', refs: [{ guidelineId: W }] },
        { text: 'If oxytocin is not available, give oral misoprostol. Controlled cord traction is not recommended where no skilled birth attendant is present.', refs: [{ guidelineId: M, locator: 'p.3' }] },
        { heading: 'Home births', text: 'Under the national policy, ASHAs may give misoprostol in advance to women likely to deliver at home: one 600 µg tablet by mouth with water after birth.', refs: [{ guidelineId: M, locator: 'p.8–9' }] },
        { heading: 'Other measures', text: 'WHO 2025 discourages routine episiotomy and supports perineal massage in late pregnancy.', refs: [{ guidelineId: W }] },
        { text: 'Doses for prophylactic oxytocin and carbetocin are not yet included: the RCOG and ACOG full texts could not be accessed, and the FOGSI 2025 protocol does not cover prevention.', refs: [{ guidelineId: R }, { guidelineId: A }] },
      ],
    },
    {
      id: 'recognition',
      title: 'Recognition & Measuring Blood Loss',
      icon: 'diagnosis',
      body: [
        { text: 'Monitor closely after birth and measure loss with calibrated drapes, which collect and quantify blood.', refs: [{ guidelineId: W }] },
        { text: 'FOGSI: use calibrated drapes or trays with trigger lines at 300 mL and 500 mL.', refs: [{ guidelineId: F, locator: 'Blood loss measurement' }] },
        { heading: 'Quantified blood loss (QBL)', text: 'QBL = (weight of soaked items − dry weight of those items) + blood collected in containers, taking 1 g as 1 mL. For example, 300 g of extra weight means 300 mL of blood.', refs: [{ guidelineId: F, locator: 'QBL formula' }] },
        {
          heading: 'Shock classification',
          text: 'FOGSI classification by blood loss:',
          refs: [{ guidelineId: F, locator: 'Shock classification' }],
          table: {
            columns: ['Zone', 'Blood loss', 'Consciousness', 'Pulse', 'Systolic BP', 'Perfusion', 'Transfusion'],
            rows: [
              ['Green: compensated', '500–1000 mL', 'Normal', '60–90', '>90', 'Normal', 'Usually not needed; cross-match 2 units'],
              ['Yellow: mild', '1000–1500 mL', 'Normal or anxious', '91–100', '80–90', 'Pallor, cold extremities', 'Possible; 2 units PRBC'],
              ['Red: moderate', '1500–2000 mL', 'Agitated', '101–120', '70–79', 'Plus delayed capillary refill', 'Likely; PRBC, FFP, platelets'],
              ['Deep red: severe', '>2000 mL', 'Lethargic or unconscious', '>120', '<70', 'Capillary refill >3 s', 'Necessary; massive transfusion protocol'],
            ],
          },
        },
        {
          heading: 'Obstetric shock index',
          text: 'Shock index = heart rate ÷ systolic BP. Tachycardia is the most important early sign of falling blood volume.',
          refs: [{ guidelineId: F, locator: 'Shock classification' }],
          table: { columns: ['Shock index', 'Meaning'], rows: [['0.7–0.9', 'Normal in pregnancy'], ['≥0.9', 'Risk of needing transfusion'], ['≥1.4', 'Needs urgent aggressive treatment'], ['≥1.7', 'High risk of adverse outcome']] },
        },
        { heading: 'Bedside clotting test', text: 'Put 2–5 mL of blood in a plain glass tube, keep it warm in a closed fist, and tilt it every 30 seconds after 4 minutes. No clot within 5–10 minutes suggests coagulation failure; over 10 minutes indicates hypofibrinogenaemia.', refs: [{ guidelineId: F, locator: 'Point-of-care test' }] },
      ],
    },
    {
      id: 'first-response',
      title: 'First Response & Medical Management',
      icon: 'emergency',
      body: [
        {
          text: 'Stepwise PPH management (FOGSI with WHO 2025 MOTIVE bundle).',
          refs: [{ guidelineId: F, locator: 'Flow of management; Medical management; Mechanical & surgical' }, { guidelineId: W }],
          flow: {
            caption: 'Postpartum haemorrhage',
            steps: [
              { title: 'PPH recognised', text: 'Measure loss on a calibrated drape (trigger lines 300 and 500 mL); shock index = heart rate ÷ systolic BP (0.9 or more: transfusion risk).', tone: 'start' },
              { title: 'Start the MOTIVE bundle together', text: 'Massage uterus, Oxytocic, Tranexamic acid 1 g IV over 10 min, IV fluids, Vaginal and genital tract examination, Escalate if bleeding continues.', tone: 'urgent' },
              { title: 'Call help, resuscitate, send tests', text: 'Anaesthetist; lie flat; oxygen 10–15 L/min; catheter; Hb, platelets, PT/INR, aPTT, fibrinogen; order blood.' },
              { title: 'Treat the cause (4 Ts)', tone: 'decision', branches: [
                { when: 'Tone', then: 'Oxytocin 15 IU IV then 10–20 IU/h; misoprostol 800 µg; methylergometrine 0.2 mg; carboprost 250 µg every 15 min (max 8)' },
                { when: 'Tissue', then: 'Manual removal of placenta, curettage' },
                { when: 'Trauma', then: 'Examine vagina and cervix, exclude rupture, repair' },
                { when: 'Thrombin', then: 'Bedside clotting test; blood products' },
              ] },
              { title: 'Still bleeding?', tone: 'urgent', branches: [
                { when: 'First', then: 'Balloon tamponade; bimanual or aortic compression or NASG as a bridge' },
                { when: 'Stable', then: 'Consider uterine artery embolisation' },
                { when: 'Laparotomy', then: 'Compression sutures, uterine then internal iliac ligation, hysterectomy' },
              ] },
            ],
          },
        },
        { heading: 'MOTIVE bundle (WHO 2025)', text: 'As soon as PPH is diagnosed, start all of these together: Massage of the uterus; Oxytocic drugs; Tranexamic acid; Intravenous fluids; Vaginal and genital tract examination; Escalation of care if bleeding continues.', refs: [{ guidelineId: W }] },
        { heading: 'Initial assessment (FOGSI)', text: 'Assess Tone, Trauma, Tissue and Thrombin; check vital signs; call the anaesthetist; send baseline tests (Hb, platelets, PT/INR, aPTT, fibrinogen, ROTEM if available, blood gas, calcium and electrolytes); and order blood products.', refs: [{ guidelineId: F, locator: 'Flow of management' }] },
        {
          heading: 'Drugs',
          text: 'FOGSI medical management. Doses as stated in the source, shown for review:',
          refs: [{ guidelineId: F, locator: 'Medical management' }],
          table: {
            columns: ['Agent', 'Dose as stated'],
            rows: [
              ['Uterine massage', 'If the uterus is atonic'],
              ['Tranexamic acid', '1 g in 100 mL normal saline IV over 10 min'],
              ['Oxytocin', '15 IU IV, then infusion of 10–20 IU/h'],
              ['Misoprostol', '800 µg rectally or sublingually (with or instead of oxytocin)'],
              ['Methylergometrine', '0.2 mg IM or IV'],
              ['Carboprost', '250 µg IM every 15 min, up to 8 doses'],
            ],
          },
        },
        { heading: 'Resuscitation', text: 'Lie the woman flat; give oxygen 10–15 L/min; secure IV access; give crystalloid (2 L, or 500 mL over 30 min then 500 mL over an hour), or use permissive hypotension with haemostatic resuscitation; give tranexamic acid 1 g IV over 10 min if not already given; transfuse 2 units of O-negative RBC as required; insert a urinary catheter and keep an input/output chart.', refs: [{ guidelineId: F, locator: 'Fluids & resuscitation' }] },
        {
          heading: 'Escalation zones',
          text: 'FOGSI colour-coded escalation (labelled "EMOTIVE" in the source):',
          refs: [{ guidelineId: F, locator: 'Zone table' }],
          table: {
            columns: ['Zone', 'Trigger', 'Action'],
            rows: [
              ['Green', '500–1000 mL, no other concern', 'Call for help, increase monitoring, start basic PPH management, escalate if needed'],
              ['Yellow', '1000–1500 mL or clinician concern', 'Move to theatre, inform medical officer, measure loss, start PPH protocol, prepare transfusion'],
              ['Red', '1500–2000 mL with concerning signs', 'Immediate escalation; high risk of deterioration'],
              ['Deep red', '>2000 mL with critical signs', 'Life-threatening emergency: theatre, rapid response team, aggressive PPH protocol, transfuse'],
            ],
          },
        },
        { text: 'A heart rate over 100/min is a cue to move to theatre. Record blood loss, shock index and observations on the MEOWS chart.', refs: [{ guidelineId: F, locator: 'Flow of management; Monitoring' }] },
      ],
    },
    {
      id: 'mechanical-surgical',
      title: 'Mechanical & Surgical Management',
      icon: 'surgery',
      body: [
        { heading: 'Tissue and trauma', text: 'Check the placenta for completeness (ultrasound if needed); perform manual removal of the placenta and curettage for retained tissue; examine the vagina and cervix, exclude uterine rupture, and repair genital tract trauma.', refs: [{ guidelineId: F, locator: 'Placenta & trauma' }] },
        { heading: 'Tamponade', text: 'Uterine tamponade with a balloon catheter or suction cannula.', refs: [{ guidelineId: F, locator: 'Mechanical & surgical' }] },
        { heading: 'Bridging measures', text: 'Non-pneumatic anti-shock garment (NASG), external aortic compression, or bimanual uterine compression while definitive care is arranged.', refs: [{ guidelineId: F, locator: 'Mechanical & surgical' }] },
        { heading: 'If bleeding continues', text: 'If the woman is stable and bleeding continues despite tamponade, consider uterine artery embolisation. Otherwise, at laparotomy: compression sutures, stepwise uterine artery ligation, internal iliac artery ligation, and emergency hysterectomy if bleeding still persists.', refs: [{ guidelineId: F, locator: 'Mechanical & surgical' }] },
        {
          heading: 'PPH at caesarean section',
          text: 'Steps by team (FOGSI):',
          refs: [{ guidelineId: F, locator: 'Caesarean PPH' }],
          table: {
            columns: ['Team', 'Actions'],
            rows: [
              ['Obstetric', 'Monitor vitals and urine output; baseline labs; order 4 RBC, 4 FFP, 1 platelet unit (SDP or 4 RDP), cryoprecipitate, fibrinogen and rFVIIa if available; inform the blood bank'],
              ['Medical', 'Uterine massage; tranexamic acid 1 g; oxytocin 15 IU IV then 10–20 IU/h; misoprostol 800 µg; methylergometrine 0.2 mg; carboprost 250 µg every 15 min up to 8 doses'],
              ['Anaesthesia', 'Oxygen 10–15 L/min; arterial line; crystalloid or permissive hypotension; tranexamic acid if not given; O-negative RBC; catheter; rapid-sequence intubation when needed'],
              ['Surgical if bleeding persists', 'Compression sutures; stepwise uterine devascularisation; internal iliac ligation; second round of blood products; emergency hysterectomy'],
            ],
          },
        },
      ],
    },
    {
      id: 'blood-products',
      title: 'Coagulopathy & Blood Products',
      icon: 'fluids',
      body: [
        { text: 'Order products early: 4 RBC, 4 FFP and 1 platelet unit (SDP or 4 RDP), plus cryoprecipitate.', refs: [{ guidelineId: F, locator: 'Coagulopathy & blood products' }] },
        { text: 'After 4 units of RBC, 4 FFP and 1 platelet unit, consider calcium gluconate 1 g. Give fibrinogen 2 g IV if fibrinogen is below 1 g/L. Use rFVIIa if available and bleeding persists.', refs: [{ guidelineId: F, locator: 'Coagulopathy & blood products' }] },
        {
          text: 'Resuscitation targets:',
          refs: [{ guidelineId: F, locator: 'Fluids & resuscitation' }],
          table: { columns: ['Parameter', 'Target'], rows: [['Platelets', '>50 × 10⁹/L'], ['Fibrinogen', '>1 g/L'], ['Mean arterial pressure', '≥50 mmHg'], ['pH', '>7.2'], ['Haemoglobin', '>85 g/L (8.5 g/dL)']] },
        },
        { text: 'Repeat coagulation tests every 1–2 hours and after each haemostatic intervention. FOGSI gives no fixed RBC:FFP:platelet ratio and no fixed cryoprecipitate dose.', refs: [{ guidelineId: F, locator: 'Coagulopathy & blood products' }] },
      ],
    },
    {
      id: 'complications',
      title: 'Complications',
      icon: 'complications',
      body: [
        { text: 'Complications of PPH include ARDS, shock, DIC, acute renal failure, loss of fertility, and pituitary necrosis (Sheehan syndrome).', refs: [{ guidelineId: A, locator: 'Summary' }] },
      ],
    },
    {
      id: 'after-pph',
      title: 'After PPH',
      icon: 'followup',
      body: [
        { text: 'Monitor temperature, pulse, respiration, BP, SpO2 and urine output, and repeat labs (Hb, platelets, coagulation, fibrinogen, blood gas, calcium). Provide pain relief and watch for complications.', refs: [{ guidelineId: F, locator: 'Monitoring' }] },
        { text: 'Correct anaemia after PPH with iron and folate; use IV iron when rapid correction is needed.', refs: [{ guidelineId: W }] },
        { text: 'Secondary PPH (24 hours to 12 weeks after birth) is not covered yet. The RCOG and ACOG full texts that address it could not be accessed.', refs: [{ guidelineId: R }, { guidelineId: A }] },
      ],
    },
    {
      id: 'epidemiology',
      title: 'Background: Burden',
      icon: 'epidemiology',
      body: [
        { text: 'Maternal haemorrhage is the leading cause of maternal mortality worldwide. In the US, haemorrhage requiring transfusion is the leading cause of severe maternal morbidity, and PPH rates rose 26% between 1994 and 2006, mainly from more uterine atony.', refs: [{ guidelineId: A, locator: 'Summary' }] },
        { text: 'Blood loss after birth is seldom measured in practice, and visual estimates underestimate it.', refs: [{ guidelineId: M, locator: 'p.2' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Diagnostic threshold',
      entries: [
        { guidelineId: F, text: '≥500 mL after vaginal birth, >1000 mL after caesarean, or any loss threatening stability.' },
        { guidelineId: A, text: '≥1000 mL cumulative, or any loss with hypovolaemia, within 24 h.' },
        { guidelineId: R, text: '≥500 mL within 24 h; minor 500–1000, major >1000 (moderate 1000–2000, severe >2000).' },
        { guidelineId: W, text: '≥500 mL, and act at 300 mL with abnormal vital signs.' },
        { guidelineId: M, text: '≥500 mL within 24 h; severe ≥1000 mL.', locator: 'p.1' },
      ],
    },
    {
      domain: 'Prophylactic uterotonic',
      entries: [
        { guidelineId: M, text: 'Oxytocin first choice; oral misoprostol if oxytocin unavailable.', locator: 'p.3' },
        { guidelineId: W, text: 'Oxytocin or heat-stable carbetocin; misoprostol only as a last resort.' },
      ],
    },
    {
      domain: 'Blood loss measurement',
      entries: [
        { guidelineId: F, text: 'Calibrated drape with 300 and 500 mL trigger lines, or weighing (1 g = 1 mL).' },
        { guidelineId: W, text: 'Calibrated drapes for objective measurement.' },
        { guidelineId: M, text: 'Notes that loss is seldom measured and visual estimates underestimate it.', locator: 'p.2' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI–FIGO PPH Management Protocol (2025) in full; MoHFW Guidance Note (2015) pages 1–9; WHO/FIGO/ICM 2025 guideline through the WHO news release only (the full PDF was blocked from here). The RCOG GTG 52 full text (Wiley) and the ACOG PB 183 recommendations could not be accessed, so only their definitions are cited. RCOG says GTG 52 is being split into 52a (prevention) and 52b (management). All doses are quoted from the source for clinician review.',
};
