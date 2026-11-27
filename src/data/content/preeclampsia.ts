import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI–Gestosis–ICOG HDP GCPR, 3rd ed. 2026 (full PDF read)            -> fogsi-hdp
 *  - NICE NG133 recommendations page (read; 1.3.12 and 1.4.4 not retrieved) -> nice-ng133
 *  - ACOG Practice Bulletin No. 202 via AAFP summary (No. 222 not readable) -> acog-pb-202
 * RCOG: no current Green-top Guideline on this topic was found; UK practice follows NICE NG133.
 * Locators: FOGSI = section/page, NICE = recommendation number.
 */
const F = 'fogsi-hdp';
const N = 'nice-ng133';
const A = 'acog-pb-202';

export const preeclampsia: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Preeclampsia is new-onset hypertension after 20 weeks of pregnancy with proteinuria or other maternal organ or uteroplacental dysfunction. FOGSI, NICE and ACOG agree on the core definition, urgent treatment of severe-range blood pressure, magnesium sulphate for severe disease, and delivery at 37 weeks for disease without severe features. They differ on aspirin dose and duration, the treatment target after severe hypertension, and how severity is named. This review brings their recommendations together, with the FOGSI 2026 recommendations given first for Indian practice.',
  keyPoints: [
    { text: 'Diagnose preeclampsia with BP ≥140/90 mmHg on two readings ≥4 h apart after 20 weeks, plus proteinuria (uPCR ≥30 mg/mmol or ACR ≥8 mg/mmol) or end-organ / uteroplacental dysfunction.', refs: [{ guidelineId: F, locator: '§3.2, §7.2' }, { guidelineId: N, locator: 'Terms; 1.2.6–1.2.7' }, { guidelineId: A }] },
    { text: 'Screen every pregnant woman (FOGSI: HDP Gestosis score) and give low-dose aspirin to those at risk, ideally starting before 16 weeks.', refs: [{ guidelineId: F, locator: '§4, §5.1' }, { guidelineId: N, locator: '1.1.2–1.1.3' }, { guidelineId: A }] },
    { text: 'Start antihypertensives at ≥140/90 and aim for 135/85. Labetalol is first line, then nifedipine (never sublingual), then methyldopa. ACE inhibitors and ARBs are contraindicated.', refs: [{ guidelineId: F, locator: '§8, §8.1' }, { guidelineId: N, locator: '1.5.6; Table 2' }] },
    { text: 'Treat severe-range BP (≥160/110) as an emergency in a monitored setting, within 60 minutes, with IV labetalol, oral nifedipine or IV hydralazine.', refs: [{ guidelineId: F, locator: '§8.2' }, { guidelineId: N, locator: '1.8.6' }, { guidelineId: A }] },
    { text: 'Give magnesium sulphate for severe preeclampsia and eclampsia (FOGSI prefers Pritchard) and continue it for 24 h after delivery or the last fit. Do not use diazepam or phenytoin instead.', refs: [{ guidelineId: F, locator: '§10.2–10.4' }, { guidelineId: N, locator: '1.8.1–1.8.5' }, { guidelineId: A }] },
    { text: 'Deliver at 37 weeks if there are no severe features. With severe features or complications, deliver after maternal stabilisation; give steroids below 34 weeks but do not delay delivery to finish the course.', refs: [{ guidelineId: F, locator: '§9.1, §8.6' }, { guidelineId: N, locator: 'Table 3' }, { guidelineId: A }] },
    { text: 'Restrict fluids to 80 mL/h (about 1 mL/kg/h) and do not preload. Fluid overload causes pulmonary oedema and maternal death.', refs: [{ guidelineId: F, locator: '§8.5' }] },
    { text: 'After delivery, keep monitoring BP, review at 6–8 weeks, and counsel about recurrence (about 1 in 5) and lifelong cardiovascular risk.', refs: [{ guidelineId: N, locator: '1.5.13–1.5.22; 1.10.1–1.10.2' }, { guidelineId: F, locator: '§10.9–10.11, §12' }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Definitions & Classification',
      icon: 'definition',
      body: [
        {
          text: 'Hypertensive disorders of pregnancy as defined by FOGSI:',
          refs: [{ guidelineId: F, locator: '§3.1–3.7, p.10' }],
          table: {
            columns: ['Disorder', 'Definition'],
            rows: [
              ['Gestational hypertension', 'BP ≥140/90 on two occasions ≥4 h apart after 20 weeks, without other features of preeclampsia; usually normal within 6 weeks postpartum'],
              ['Preeclampsia', 'Same BP criteria after 20 weeks plus significant proteinuria or end-organ dysfunction (neurological, pulmonary oedema, thrombocytopenia, hepatic or renal derangement, uteroplacental dysfunction)'],
              ['Eclampsia', 'Generalised tonic-clonic seizures in a woman with preeclampsia'],
              ['Chronic hypertension', 'Present before pregnancy or before 20 weeks and persisting beyond 6 weeks postpartum; primary or secondary'],
              ['Superimposed preeclampsia', 'Preeclampsia developing in a woman with chronic hypertension'],
              ['White-coat hypertension', 'Clinic BP ≥140/90 but home or ambulatory BP <135/85'],
              ['Masked hypertension', 'Clinic BP <140/90 but home or ambulatory BP ≥135/85'],
            ],
          },
        },
        { heading: 'NICE definition', text: 'New hypertension (over 140 systolic or over 90 diastolic) after 20 weeks with one or more of: new proteinuria; other maternal organ dysfunction (renal, liver, neurological, haematological); or uteroplacental dysfunction (fetal growth restriction, abnormal umbilical artery Doppler, stillbirth). Severe hypertension is over 160 systolic or over 110 diastolic.', refs: [{ guidelineId: N, locator: 'Terms used' }] },
        { heading: 'ACOG definition', text: 'BP ≥140 systolic or ≥90 diastolic on two occasions at least 4 hours apart after 20 weeks in a previously normotensive woman, with proteinuria; or, without proteinuria, new thrombocytopenia, renal insufficiency, impaired liver function, pulmonary oedema, or new headache or visual symptoms. Up to half of women with gestational hypertension go on to develop preeclampsia.', refs: [{ guidelineId: A }] },
        { heading: 'Severity', text: 'FOGSI, without severe features: BP between 140/90 and 160/110 with no premonitory symptoms and normal laboratory results.', refs: [{ guidelineId: F, locator: '§3.8.1' }] },
        { text: 'FOGSI, with severe features: BP ≥160/110 with or without symptoms or abnormal labs; or BP ≥140/90 with premonitory symptoms (headache, blurred vision, vomiting, right upper quadrant pain, sudden excessive weight gain, severe oedema) and/or abnormal labs (thrombocytopenia, raised liver enzymes, raised creatinine, abnormal coagulation).', refs: [{ guidelineId: F, locator: '§3.8.2, p.11' }] },
        { text: 'NICE, severe preeclampsia: preeclampsia with severe hypertension that does not respond to treatment, or with ongoing headache, visual scotomata, nausea or vomiting, epigastric pain, oliguria, worsening laboratory tests, or failing fetal growth or abnormal Doppler.', refs: [{ guidelineId: N, locator: 'Terms used' }] },
        { heading: 'Early vs late onset', text: 'Early-onset preeclampsia (before 34 completed weeks) causes more severe maternal disease, with fetal growth restriction and iatrogenic prematurity common. Late-onset disease (after 34 weeks) is often linked to maternal metabolic factors and is usually milder.', refs: [{ guidelineId: F, locator: '§3.9, p.11' }] },
      ],
    },
    {
      id: 'screening',
      title: 'Screening & Prevention',
      icon: 'prevention',
      body: [
        { heading: 'Screening', text: 'FOGSI recommends universal screening for preeclampsia using the HDP Gestosis score; a total of 3 or more means "at risk". Repeat it at the first visit and at every antenatal visit until 32 weeks, or at least once per trimester or whenever a new risk factor appears.', refs: [{ guidelineId: F, locator: '§4.1, p.12' }] },
        { text: 'Where available, multimodal screening at 11–14 weeks combines maternal characteristics, mean arterial pressure, uterine artery Doppler pulsatility index and serum PlGF. FOGSI notes that combined markers improve prediction but are not cost-effective at present.', refs: [{ guidelineId: F, locator: '§4.2, p.13; Annexure 3' }] },
        { heading: 'Who needs aspirin (NICE)', text: 'One high-risk factor: hypertensive disease in a previous pregnancy, chronic kidney disease, autoimmune disease such as SLE or antiphospholipid syndrome, type 1 or type 2 diabetes, or chronic hypertension.', refs: [{ guidelineId: N, locator: '1.1.2' }] },
        { text: 'More than one moderate-risk factor: first pregnancy, age 40 or over, pregnancy interval over 10 years, BMI 35 or more at first visit, family history of preeclampsia, multi-fetal pregnancy.', refs: [{ guidelineId: N, locator: '1.1.3' }] },
        { heading: 'Aspirin regimen', text: 'FOGSI: 75 mg/day for women positive on the Gestosis score; 150 mg/day may be offered after a positive multimodal screen. Start as soon as possible, optimally before 16 weeks (up to 20 weeks), take at bedtime, aim for over 90% adherence, and continue to at least 36 completed weeks.', refs: [{ guidelineId: F, locator: '§5.1.1–5.1.4, p.14' }] },
        { text: 'NICE: 75–150 mg daily from 12 weeks until birth for women with one high-risk or more than one moderate-risk factor.', refs: [{ guidelineId: N, locator: '1.1.2–1.1.3' }] },
        { text: 'ACOG: 81 mg daily for women with one high-risk or at least two moderate-risk factors, starting between 12 and 28 weeks (preferably by 16 weeks) and continuing until delivery.', refs: [{ guidelineId: A }] },
        { heading: 'Other measures', text: 'FOGSI recommends calcium 1.5–2 g elemental per day. Vitamin D 1,000–2,000 IU/day is described as a pragmatic option with weak evidence.', refs: [{ guidelineId: F, locator: '§5.2–5.3' }] },
      ],
    },
    {
      id: 'assessment',
      title: 'Diagnosis & Assessment',
      icon: 'diagnosis',
      body: [
        { heading: 'Proteinuria', text: 'Significant proteinuria is uPCR ≥30 mg/mmol, ACR ≥8 mg/mmol, ≥0.3 g in 24 hours, or ≥1+ on dipstick (FOGSI). NICE quantifies any dipstick result of 1+ or more with ACR or PCR, uses an automated strip reader in secondary care, and advises against first-morning samples and routine 24-hour collections.', refs: [{ guidelineId: F, locator: '§7.2, p.16' }, { guidelineId: N, locator: '1.2.2–1.2.7' }] },
        {
          heading: 'Laboratory thresholds',
          text: 'FOGSI laboratory markers of severe disease and HELLP:',
          refs: [{ guidelineId: F, locator: 'Annexure 2, p.40–41' }],
          table: {
            columns: ['Test', 'Severe feature', 'HELLP criterion'],
            rows: [
              ['Platelets', '<100 × 10⁹/L', '<100 × 10⁹/L'],
              ['Creatinine', '>1.1 mg/dL or doubling from baseline', '—'],
              ['AST / ALT', '≥2× upper limit with RUQ pain or clinical signs', 'AST ≥70 U/L'],
              ['LDH', '—', '≥600 U/L (haemolysis)'],
            ],
          },
        },
        { text: 'Note for reviewer: FOGSI §6 lists different alert values (platelets <1,50,000/mm³, creatinine ≥1 mg/dL) from Annexure 2.', refs: [{ guidelineId: F, locator: '§6, p.16' }] },
        { text: 'NICE examples that should prompt admission: sustained systolic BP ≥160, creatinine ≥90 µmol/L, ALT >70 IU/L, platelets <150,000/µL, or signs of impending eclampsia or pulmonary oedema. The fullPIERS or PREP-S models can help predict risk (PREP-S only up to 34 weeks).', refs: [{ guidelineId: N, locator: '1.5.2–1.5.4' }] },
        { heading: 'Angiogenic markers', text: 'Where available, PlGF or the sFlt-1/PlGF ratio can support the diagnosis and prognosis. Normal PlGF (≥5th centile, or ≥100 pg/mL) or a ratio <38 suggests no uteroplacental dysfunction. PlGF ≤12 pg/mL or a ratio >85 indicates high risk of complications.', refs: [{ guidelineId: F, locator: '§7.7, p.17' }] },
        { heading: 'Other investigations', text: 'Baseline bloods; coagulation profile if platelets are below 150,000; electrolytes in severe disease; obstetric ultrasound with Doppler; fundoscopy; maternal echocardiography preferably in all women with preeclampsia; MRI for diagnostic doubt, PRES or stroke.', refs: [{ guidelineId: F, locator: '§7.3–7.6, p.16–18' }] },
        {
          heading: 'Maternal monitoring schedule',
          text: 'FOGSI laboratory panel (CBC, LFT, renal function, uric acid, spot urine protein:creatinine):',
          refs: [{ guidelineId: F, locator: 'Annexure 2A, p.40; §7.8' }],
          table: {
            columns: ['Stage', 'Frequency'],
            rows: [
              ['Booking (≤14 weeks)', 'Baseline panel plus electrolytes and fasting glucose or HbA1c; repeat at 20–24 weeks if hypertensive or at risk'],
              ['20–28 weeks, hypertensive', 'At diagnosis, then weekly if stable; twice weekly if symptomatic or severe-range BP'],
              ['28–36 weeks', 'Weekly if stable; every 48–72 h if severe or rapidly evolving'],
              ['Term / intrapartum', 'On admission, then every 24–48 h or sooner if worsening; platelet count on admission to delivery room'],
              ['Postpartum 48–72 h', 'Once; repeat if abnormal or symptomatic'],
            ],
          },
        },
        { text: 'In labour, check BP hourly. If it reaches 160/110, repeat every 15–30 minutes until it falls.', refs: [{ guidelineId: F, locator: '§8.5, p.21' }] },
      ],
    },
    {
      id: 'antihypertensives',
      title: 'Antihypertensive Treatment',
      icon: 'drug',
      body: [
        { heading: 'When to treat and target', text: 'Treat sustained BP ≥140/90, including isolated systolic hypertension, and aim for 135/85 mmHg.', refs: [{ guidelineId: F, locator: '§8, §8.1, p.19' }, { guidelineId: N, locator: 'Table 2' }] },
        { text: 'Drug order: labetalol first; nifedipine if labetalol is unsuitable; methyldopa if both are unsuitable.', refs: [{ guidelineId: N, locator: '1.5.6' }] },
        {
          heading: 'Oral agents for non-severe hypertension',
          text: 'Doses as stated by FOGSI, shown for review:',
          refs: [{ guidelineId: F, locator: '§8.1, p.19' }],
          table: {
            columns: ['Drug', 'Start', 'Maximum', 'Notes'],
            rows: [
              ['Labetalol', '100–200 mg two or three times daily', '2400 mg/day', 'First line; preferred if pulse >100/min'],
              ['Nifedipine SR', '10–20 mg two or three times daily', '120 mg/day', 'Preferred if pulse <100/min; never sublingual'],
              ['Methyldopa', '250–500 mg/day in 3–4 doses', '2250 mg/day', 'Third line; avoid postpartum'],
            ],
          },
        },
        { text: 'ACE inhibitors and ARBs are contraindicated in pregnancy because of fetotoxicity. Oral drugs may be poorly absorbed in labour, so parenteral agents can be used.', refs: [{ guidelineId: F, locator: '§8, p.20' }] },
        { heading: 'Severe hypertension (≥160/110)', text: 'Treat urgently in a monitored setting, within one hour of presentation. ACOG treats severe-range BP that lasts 15 minutes or more, starting within 60 minutes.', refs: [{ guidelineId: F, locator: '§8.2, p.20' }, { guidelineId: A }] },
        {
          text: 'Acute regimens as stated by FOGSI. Lower BP promptly but gradually, to ≤140/90:',
          refs: [{ guidelineId: F, locator: '§8.3, p.21; Annexure 4, p.43' }],
          table: {
            columns: ['Drug', 'Regimen'],
            rows: [
              ['Labetalol IV', '20 mg slowly over 2 min; double the dose every 20–30 min up to 80 mg; maximum total 300 mg'],
              ['Nifedipine oral', '10–30 mg orally (not sublingual); repeat after 30–45 min; maximum 120 mg'],
              ['Hydralazine IV', '5 mg IV, then 5–10 mg every 20–40 min'],
            ],
          },
        },
        { text: 'NICE critical-care options are labetalol (oral or IV), oral nifedipine or IV hydralazine. FOGSI also lists IV nicardipine, and nitroglycerin for refractory severe hypertension with pulmonary oedema in a monitored setting.', refs: [{ guidelineId: N, locator: '1.8.6' }, { guidelineId: F, locator: '§8.2, §8.4' }] },
      ],
    },
    {
      id: 'magnesium-eclampsia',
      title: 'Magnesium Sulphate & Eclampsia',
      icon: 'emergency',
      body: [
        { heading: 'Indications', text: 'FOGSI: a full loading and maintenance dose of MgSO4 for all women with severe preeclampsia, and as first-choice treatment for eclampsia. ACOG: for gestational hypertension or preeclampsia with severe features and for eclampsia, during stabilisation and for 24 hours after delivery, including during caesarean. In non-severe disease ACOG leaves the choice to clinician and patient.', refs: [{ guidelineId: F, locator: '§8.3, §10.2, §10.4' }, { guidelineId: A }] },
        { text: 'NICE: give IV MgSO4 for severe hypertension or severe preeclampsia with a previous or current eclamptic fit. Consider it for severe preeclampsia if birth is planned within 24 hours, or if there are severe features such as headache, visual scotomata, vomiting, epigastric pain or oliguria.', refs: [{ guidelineId: N, locator: '1.8.1–1.8.3' }] },
        {
          heading: 'Regimens',
          text: 'As stated by each source:',
          refs: [{ guidelineId: F, locator: '§10.4.1–10.4.2, p.25–26' }, { guidelineId: N, locator: '1.8.4' }],
          table: {
            columns: ['Regimen', 'Loading', 'Maintenance'],
            rows: [
              ['Pritchard (FOGSI preferred)', '4 g IV of 20% solution + 5 g deep IM in each buttock (14 g total); if fits continue, 2 g IV over 10 min after 15 min', '5 g deep IM in alternate buttocks every 4 h, only if RR >16/min, patellar reflexes present and urine >100 mL in last 4 h'],
              ['Zuspan (FOGSI alternative)', '4 g IV over 5–10 min', '1 g/h IV infusion (pump preferred); stop if RR, reflexes or urine output (≥30 mL/h) criteria not met'],
              ['NICE (Collaborative Eclampsia Trial)', '4 g IV over 5–15 min', '1 g/h for 24 h; recurrent fits: further 2–4 g IV over 5–15 min'],
            ],
          },
        },
        { text: 'Continue for 24 hours after delivery or the last fit, whichever is later. Routine serum magnesium monitoring is not needed. Do not use diazepam, phenytoin or other anticonvulsants as an alternative.', refs: [{ guidelineId: F, locator: '§10.4' }, { guidelineId: N, locator: '1.8.4–1.8.5' }] },
        {
          heading: 'Magnesium toxicity',
          text: 'FOGSI actions:',
          refs: [{ guidelineId: F, locator: '§10.4.3–10.4.4, p.27' }],
          table: {
            columns: ['Finding', 'Action'],
            rows: [
              ['Urine <100 mL in 4 h, breathing and reflexes normal', 'Check catheter; reduce next IM dose to 2.5 g or infusion to 0.5 g/h'],
              ['Absent patellar reflex, normal breathing', 'Withhold further doses until reflexes return'],
              ['Respiratory depression', 'Stop MgSO4; calcium gluconate 10 mL of 10% IV over 10 min with oximetry and ECG; oxygen 8–10 L/min; secure airway'],
              ['Respiratory arrest', 'Stop MgSO4; intubate and ventilate; calcium gluconate 1 g IV; ventilate until breathing returns'],
            ],
          },
        },
        { text: 'Serum levels: therapeutic 4–7 mEq/L; reflexes lost above 7–10; respiratory depression above 10–12; cardiac arrest above 20–24.', refs: [{ guidelineId: F, locator: '§10.4.3' }] },
        { heading: 'Managing an eclamptic fit', text: 'Treat any convulsion in pregnancy as eclampsia until proven otherwise (consider epilepsy, tumour, haemorrhage, TTP/HUS, cerebral venous thrombosis, hypoglycaemia). Call for help first.', refs: [{ guidelineId: F, locator: '§10.1, §10.3, p.25' }] },
        { text: 'Airway: left lateral position, mouth gag, neck extension, prevent injury. Breathing: oxygen, suction, keep SpO2 ≥94%. Circulation: IV access, bloods, crystalloid at 80 mL/h, Foley catheter with hourly urine output, BP control, corticosteroids if under 34 weeks. Deliver once stabilised.', refs: [{ guidelineId: F, locator: '§10.3, p.25' }], bullet: true },
        { text: 'Recurrent fits: involve the multidisciplinary team and continue MgSO4. The anaesthetist may give thiopentone 0.5 g in 20 mL 5% dextrose; if that fails, intubate and ventilate. IV levetiracetam is an alternative (loading 20–60 mg/kg over 15 min, maximum 3–4.5 g; then 500–1500 mg 12-hourly). Involve a neurologist and consider CT/MRI.', refs: [{ guidelineId: F, locator: '§10.5, p.26–27' }], bullet: true },
        { text: 'Transient fetal bradycardia during a fit is not by itself a sign of fetal compromise; persistent bradycardia may mean abruption.', refs: [{ guidelineId: F, locator: '§10.7' }], bullet: true },
        { heading: 'Referral from a peripheral centre', text: 'Give the Pritchard loading dose and write it in the referral note. Give oral nifedipine SR 20 mg or labetalol 200 mg (never sublingual nifedipine), and the first steroid dose if under 34 weeks. Transfer with an attendant, monitoring, the eclampsia kit, and advance notice to the receiving centre.', refs: [{ guidelineId: F, locator: '§10.13, p.28' }] },
      ],
    },
    {
      id: 'hellp',
      title: 'HELLP Syndrome',
      icon: 'complications',
      body: [
        { text: 'HELLP is diagnosed with LDH ≥600 U/L, AST ≥70 U/L and platelets <100 × 10⁹/L. Manage it as severe preeclampsia and anticipate coagulopathy and liver complications.', refs: [{ guidelineId: F, locator: 'Annexure 2C, p.41' }] },
        { text: 'HELLP is an indication for immediate delivery after stabilisation.', refs: [{ guidelineId: F, locator: '§9.1.3, p.24' }] },
        { text: 'Do not give corticosteroids to speed up resolution of HELLP; give them only for fetal lung maturity where indicated.', refs: [{ guidelineId: F, locator: '§8.6, p.22' }] },
        { text: 'Regional anaesthesia needs platelets above 70–80 × 10⁹/L and normal coagulation; general anaesthesia is recommended in HELLP with severe thrombocytopenia.', refs: [{ guidelineId: F, locator: '§9.3, p.24' }] },
      ],
    },
    {
      id: 'fluids-anaesthesia',
      title: 'Fluids & Anaesthesia',
      icon: 'fluids',
      body: [
        { heading: 'Fluids', text: 'Restrict total fluids (all sources) to 80 mL/h or 1 mL/kg/h using Ringer lactate or normal saline. Do not preload. FOGSI warns that inappropriate fluids can cause pulmonary oedema and maternal death.', refs: [{ guidelineId: F, locator: '§8.5, p.21' }] },
        { text: 'Point-of-care ultrasound of the IVC, lungs and LV outflow tract can guide fluid responsiveness and detect early pulmonary oedema (PCPNDT rules apply).', refs: [{ guidelineId: F, locator: '§8.5' }] },
        { heading: 'Anaesthesia', text: 'Regional (epidural or spinal) anaesthesia is preferred when coagulation is normal and platelets exceed 70–80 × 10⁹/L. General anaesthesia is recommended for fetal compromise, abruption, pulmonary oedema, HELLP or severe thrombocytopenia; laryngeal oedema raises the risk of failed intubation.', refs: [{ guidelineId: F, locator: '§9.3, p.24' }] },
      ],
    },
    {
      id: 'fetal',
      title: 'Fetal Surveillance',
      icon: 'fetus',
      body: [
        { text: 'Baseline anomaly scan with uterine artery Doppler, then serial growth scans from 28 weeks if risk factors are present.', refs: [{ guidelineId: F, locator: '§7.9, p.17–18' }] },
        {
          text: 'FOGSI surveillance by clinical situation:',
          refs: [{ guidelineId: F, locator: '§7.9, p.17–18' }],
          table: {
            columns: ['Situation', 'Surveillance'],
            rows: [
              ['Chronic hypertension, previous severe PE, abruption or IUFD', 'Growth scan with Doppler every 4 weeks from 28 weeks'],
              ['Gestational hypertension without severe features', 'Growth and Doppler at diagnosis; if normal, every 4 weeks'],
              ['Severe features or preeclampsia', 'Inpatient care; CTG at admission then as indicated; growth every 2 weeks, Doppler weekly or alternate days'],
              ['No FGR, mild disease', 'Growth every 3–4 weeks; CTG as required'],
              ['FGR or abnormal umbilical artery Doppler', 'Growth every 2 weeks; Doppler 1–2 per week; NST or modified BPP 2–3 per week'],
              ['AEDF/REDF <32 weeks, abnormal DV, or CPR <5th centile >32 weeks', 'Closer monitoring, consider admission, daily CTG'],
            ],
          },
        },
        { text: 'Measure liquor (AFI or deepest pocket) at each growth scan, more often if oligohydramnios.', refs: [{ guidelineId: F, locator: '§7.9' }] },
      ],
    },
    {
      id: 'delivery',
      title: 'Timing & Mode of Delivery',
      icon: 'delivery',
      body: [
        { text: 'Delivery is the only definitive treatment for preeclampsia.', refs: [{ guidelineId: F, locator: '§9.1, p.23' }] },
        {
          text: 'Recommended timing:',
          refs: [{ guidelineId: F, locator: '§9.1, p.23–24' }, { guidelineId: N, locator: 'Table 3; 1.4.7' }, { guidelineId: A }],
          table: {
            columns: ['Situation', 'FOGSI', 'NICE', 'ACOG'],
            rows: [
              ['Gestational hypertension', '38 wk if mild and untreated; by 37 wk if comorbid or frequent rises', 'No planned birth before 37 wk if BP <160/110', '37 wk or later'],
              ['Chronic hypertension on treatment', '37–38 wk', '—', '—'],
              ['Preeclampsia without severe features', '37 completed weeks', 'Initiate birth within 24–48 h from 37 wk; consider from 34 wk', '37 wk or later'],
              ['Severe features, ≥34 weeks', '34–37 wk depending on clinical picture', 'Consider planned early birth', 'Deliver after maternal stabilisation'],
              ['Severe features, <34 weeks', 'Deliver irrespective of gestation if worsening', 'Surveillance unless indication for early birth; MgSO4 + steroids', 'Expectant management can be considered in suitable centres'],
            ],
          },
        },
        { text: 'Deliver immediately (after stabilisation) for eclampsia or impending eclampsia, BP uncontrolled on three drug classes, HELLP, worsening platelets or liver function, abruption, renal dysfunction, pulmonary oedema, DIC, non-reassuring fetal status or intrauterine death. NICE adds maternal SpO2 <90% and reversed end-diastolic umbilical flow.', refs: [{ guidelineId: F, locator: '§9.1, p.24' }, { guidelineId: N, locator: '1.5.7' }] },
        { text: 'Antenatal corticosteroids for 24–34 weeks if birth is expected within 7 days (dexamethasone 6 mg IM 12-hourly × 4), but do not delay delivery only to complete the course.', refs: [{ guidelineId: F, locator: '§8.6, p.22' }, { guidelineId: A }] },
        { text: 'Mode: vaginal birth may be considered if conditions permit and the Bishop score is favourable; caesarean for obstetric indications. Women with eclampsia should deliver in a tertiary centre with HDU, NICU, blood bank, anaesthetist and neonatologist.', refs: [{ guidelineId: F, locator: '§10.7–10.8, p.27' }] },
      ],
    },
    {
      id: 'postpartum',
      title: 'Postpartum Care',
      icon: 'monitoring',
      body: [
        { heading: 'Monitoring', text: 'FOGSI: BP every 4–6 hours for the first 48 hours, then twice daily at home for the first week; outpatient review within 3–5 days of discharge. NICE: at least four times a day as an inpatient, at least once between days 3 and 5, then on alternate days until normal.', refs: [{ guidelineId: F, locator: '§10.9–10.11, §11.3' }, { guidelineId: N, locator: '1.5.13' }] },
        { text: 'Treat persistent BP above 140/90 (FOGSI). NICE starts treatment in untreated women at 150/100 or above and allows transfer to community care when BP is 150/100 or less and bloods are stable.', refs: [{ guidelineId: F, locator: '§10.9' }, { guidelineId: N, locator: '1.5.14, 1.5.19' }] },
        { text: 'Postpartum drug options listed by FOGSI: labetalol, atenolol, nifedipine SR, amlodipine and enalapril. Do not use methyldopa after delivery. A short course of furosemide (3–5 days) may be used for volume overload.', refs: [{ guidelineId: F, locator: '§11.1, p.29' }] },
        { text: 'Analgesia: FOGSI advises avoiding NSAIDs postpartum, while ACOG prefers NSAIDs to opioids. Reviewer to reconcile.', refs: [{ guidelineId: F, locator: '§10.9' }, { guidelineId: A }] },
        { heading: 'After eclampsia', text: 'Close follow-up for 3 months; contraception for at least 2–3 years (IUCD or progestogen-only preferred). Test for antiphospholipid antibodies 6–12 weeks after an early-onset preeclampsia delivered before 34 weeks.', refs: [{ guidelineId: F, locator: '§10.12, p.28' }] },
        { heading: 'Review at 6–8 weeks', text: 'Medical review at 6–8 weeks with a urine dipstick; if proteinuria is 1+ or more, arrange kidney function review at 3 months. Women still on treatment should be reviewed 2 weeks after transfer to community care.', refs: [{ guidelineId: N, locator: '1.5.21–1.5.27' }, { guidelineId: F, locator: 'Checklist, p.31' }] },
      ],
    },
    {
      id: 'long-term',
      title: 'Long-term Risk & Preconception',
      icon: 'followup',
      body: [
        { text: 'Recurrence is about 1 in 5 (NICE) or 20.7% overall (FOGSI); 25–65% after early-onset severe preeclampsia and 5–7% after preeclampsia without severe features.', refs: [{ guidelineId: N, locator: '1.10.1' }, { guidelineId: F, locator: '§12, p.32–33' }] },
        { text: 'A hypertensive disorder of pregnancy increases later hypertension and cardiovascular disease; FOGSI says it doubles long-term cardiovascular morbidity and mortality. Advise annual BP and cardiovascular risk assessment.', refs: [{ guidelineId: N, locator: '1.10.2' }, { guidelineId: F, locator: '§12; Checklist p.31' }] },
        { text: 'Recurrence risk rises with an interpregnancy interval over 10 years. Do not routinely screen for thrombophilia.', refs: [{ guidelineId: N, locator: '1.10.6, 1.10.8' }] },
        { heading: 'Preconception', text: 'Counsel before the next pregnancy: assess cardiovascular, renal, metabolic and autoimmune status; switch to labetalol, nifedipine or amlodipine; stop ACE inhibitors, ARBs and statins before conception; achieve BP <135/85 in chronic hypertension; and plan early aspirin.', refs: [{ guidelineId: F, locator: '§13, p.34' }, { guidelineId: N, locator: '1.10.4' }] },
      ],
    },
    {
      id: 'epidemiology',
      title: 'Background: Burden',
      icon: 'epidemiology',
      body: [
        { text: 'Preeclampsia/eclampsia and HELLP syndrome remain important worldwide, with pooled global prevalences of 0.43% and 0.39% in one meta-analysis.', refs: [{ guidelineId: F, locator: '§1, p.8' }] },
        { text: 'In India, a systematic review of 22 studies (92,220 pregnancies) found a pooled prevalence of hypertensive disorders of pregnancy of 9% (95% CI 5–17%).', refs: [{ guidelineId: F, locator: '§1, p.8' }] },
        {
          text: 'Prevalence by zone of India:',
          refs: [{ guidelineId: F, locator: 'Table 1, p.8' }],
          table: { columns: ['Zone', 'HDP prevalence (95% CI)'], rows: [['Northern', '9.5% (8.7–10.3)'], ['Southern', '9.2% (8.9–9.5)'], ['Western', '8.9% (7.5–10.3)'], ['Central', '7.7% (7.1–8.2)']] },
        },
        { text: 'Barriers to better outcomes in India named by FOGSI: myths and misconceptions, poor transport, low socioeconomic status, limited multidisciplinary antenatal care, lack of accurate prediction, and too few high-dependency units.', refs: [{ guidelineId: F, locator: '§1, p.8' }] },
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
      domain: 'Magnesium sulphate',
      entries: [
        { guidelineId: F, text: 'Pritchard preferred; Zuspan acceptable. All severe preeclampsia. Continue 24 h after delivery or last fit.', locator: '§10.4' },
        { guidelineId: A, text: 'Severe features or eclampsia, until 24 h after delivery; also during caesarean. Non-severe: individualise.' },
        { guidelineId: N, text: 'IV 4 g then 1 g/h for 24 h. Give after a fit; consider in severe disease or if birth planned within 24 h.', locator: '1.8.1–1.8.4' },
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
    {
      domain: 'Postpartum analgesia',
      entries: [
        { guidelineId: F, text: 'Avoid NSAIDs.', locator: '§10.9' },
        { guidelineId: A, text: 'NSAIDs preferred over opioids.' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI–Gestosis–ICOG HDP GCPR 3rd ed. (2026) in full; NICE NG133 recommendations (PlGF recommendations 1.3.12 and 1.4.4 not retrieved). ACOG content comes from the AAFP summary of Practice Bulletin No. 202 (2019). The current No. 222 (2020) and acog.org pages could not be accessed from here, so check No. 222 for changes. No current RCOG Green-top Guideline on preeclampsia was found; UK practice follows NICE NG133. Pathophysiology is not covered in any of these guidelines and still needs a source. All doses are quoted from the source for clinician review.',
};
