import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - RCOG GTG 37a (2015), prevention, third-party copy + NICE evidence copy of the scoring tool -> rcog-gtg-37a
 *  - RCOG GTG 37b (2015), acute management, third-party copy                                -> rcog-gtg-37b
 *  - NICE NG89 section 1.16 (read)                                                          -> nice-ng89
 *  - ACOG PB 196 (graded statements via Guideline Central only)                             -> acog-pb-196
 *  - ACOG PB 197 (full text read)                                                           -> acog-pb-197
 *  No FOGSI or ICOG document on VTE in pregnancy was found.
 */
const R = 'rcog-gtg-37a';
const RB = 'rcog-gtg-37b';
const N = 'nice-ng89';
const A = 'acog-pb-196';
const AT = 'acog-pb-197';

export const vteInPregnancy: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Pregnancy and the first 6 weeks after birth carry an increased risk of venous thromboembolism, and VTE remains a leading direct cause of maternal death (9.3% of US maternal deaths). Every woman should have a documented risk assessment at booking, on any admission, and again after birth. Prophylaxis with low-molecular-weight heparin (LMWH) is dosed by weight and started antenatally or postnatally according to the risk score. When DVT or PE is suspected, start treatment-dose LMWH straight away and confirm with compression duplex ultrasound, or with chest X-ray and V/Q scan or CTPA for PE; D-dimer is not used. Treatment continues for the rest of pregnancy and at least 6 weeks after birth. Warfarin and DOACs are avoided in pregnancy.',
  keyPoints: [
    { text: 'Assess VTE risk at booking, on every admission and within 6 hours of birth, using the RCOG scoring tool. NICE recommends a published tool and notes the RCOG one is the most widely used.', refs: [{ guidelineId: R, locator: 'App. III' }, { guidelineId: N, locator: '1.1.9–1.1.10' }] },
    { text: 'RCOG antenatal thresholds: score ≥4, consider LMWH from the first trimester; score 3, from 28 weeks. Postnatal: score ≥2, consider LMWH for at least 10 days; high-risk women (e.g. previous VTE) for 6 weeks.', refs: [{ guidelineId: R, locator: 'App. III, 4.1, 7.1' }] },
    { text: 'Prophylactic enoxaparin for 50–90 kg is 40 mg once daily; adjust by booking weight (20 mg below 50 kg, 60 mg at 91–130 kg, 80 mg at 131–170 kg).', refs: [{ guidelineId: R, locator: 'Table 3' }, { guidelineId: AT, locator: 'Table 4' }] },
    { text: 'Suspected VTE: start treatment-dose LMWH immediately unless contraindicated, then confirm. DVT: compression duplex ultrasound. PE: ECG and chest X-ray, then V/Q or CTPA (duplex first if the legs are symptomatic). Do not use D-dimer.', refs: [{ guidelineId: RB, locator: '4.1–4.3, 6.1' }, { guidelineId: A, locator: 'Level A' }] },
    { text: 'Treat with LMWH for the rest of pregnancy and at least 6 weeks after birth, at least 3 months in total. Avoid warfarin and DOACs antenatally.', refs: [{ guidelineId: RB, locator: '8.1' }, { guidelineId: AT, locator: 'Warfarin, DOACs' }] },
    { text: 'Around birth: stop LMWH when labour starts. No neuraxial block within 12 hours of a prophylactic dose or 24 hours of a treatment dose. Restart prophylaxis 4 hours after a spinal or epidural catheter removal.', refs: [{ guidelineId: R, locator: '6' }, { guidelineId: RB, locator: '9' }, { guidelineId: A, locator: 'Level C' }] },
    { text: 'LMWH, unfractionated heparin and warfarin are all compatible with breastfeeding. DOACs are not recommended while breastfeeding.', refs: [{ guidelineId: A, locator: 'Level B' }, { guidelineId: R, locator: '8.6, 8.8' }, { guidelineId: AT, locator: 'DOACs' }] },
  ],
  sections: [
    {
      id: 'epidemiology',
      title: 'Burden & Why It Matters',
      icon: 'epidemiology',
      body: [
        { text: 'About 80% of thromboembolic events in pregnancy are venous. VTE accounts for 9.3% of maternal deaths in the US.', refs: [{ guidelineId: A, locator: 'Summary' }] },
        { text: 'Emergency caesarean section carries roughly twice the VTE risk of elective caesarean.', refs: [{ guidelineId: R, locator: '7.4' }] },
        { text: 'No FOGSI or ICOG guideline on VTE in pregnancy could be found for this review, so the scoring and doses here come from RCOG, NICE and ACOG. Treat this as a gap until an Indian document is located.', refs: [{ guidelineId: R }] },
      ],
    },
    {
      id: 'risk-assessment',
      title: 'Risk Assessment (RCOG Score)',
      icon: 'risk',
      body: [
        { text: 'Score every woman at booking, at any admission, and again after birth, miscarriage or termination (NICE: within 6 hours) and whenever her condition changes.', refs: [{ guidelineId: R, locator: 'App. III' }, { guidelineId: N, locator: '1.1.10' }] },
        {
          text: 'Pre-existing risk factors:',
          refs: [{ guidelineId: R, locator: 'Appendix III' }],
          table: {
            columns: ['Risk factor', 'Score'],
            rows: [
              ['Previous VTE (except a single event related to major surgery)', '4'],
              ['Previous VTE provoked by major surgery', '3'],
              ['Known high-risk thrombophilia', '3'],
              ['Medical comorbidity: cancer, heart failure, active SLE, inflammatory polyarthropathy or IBD, nephrotic syndrome, type 1 diabetes with nephropathy, sickle cell disease, current IV drug use', '3'],
              ['Family history of unprovoked or oestrogen-related VTE in a first-degree relative', '1'],
              ['Low-risk thrombophilia (no VTE)', '1'],
              ['Age >35', '1'],
              ['BMI ≥30 (score 2 if BMI ≥40)', '1 (2)'],
              ['Parity ≥3', '1'],
              ['Smoker', '1'],
              ['Gross varicose veins', '1'],
            ],
          },
        },
        {
          text: 'Obstetric risk factors:',
          refs: [{ guidelineId: R, locator: 'Appendix III' }],
          table: {
            columns: ['Risk factor', 'Score'],
            rows: [
              ['Caesarean section in labour', '2'],
              ['Pre-eclampsia in current pregnancy', '1'],
              ['ART/IVF (antenatal only)', '1'],
              ['Multiple pregnancy', '1'],
              ['Elective caesarean section', '1'],
              ['Mid-cavity or rotational operative delivery', '1'],
              ['Prolonged labour (>24 hours)', '1'],
              ['PPH >1 litre or transfusion', '1'],
              ['Preterm birth <37+0 weeks in current pregnancy', '1'],
              ['Stillbirth in current pregnancy', '1'],
            ],
          },
        },
        {
          text: 'Transient risk factors:',
          refs: [{ guidelineId: R, locator: 'Appendix III' }],
          table: {
            columns: ['Risk factor', 'Score'],
            rows: [
              ['Ovarian hyperstimulation syndrome (first trimester only)', '4'],
              ['Any surgical procedure in pregnancy or the puerperium (except immediate perineal repair)', '3'],
              ['Hyperemesis', '3'],
              ['Current systemic infection', '1'],
              ['Immobility or dehydration', '1'],
            ],
          },
        },
      ],
    },
    {
      id: 'thresholds',
      title: 'Who Gets Prophylaxis, When & How Long',
      icon: 'management',
      body: [
        {
          text: 'RCOG thresholds (the guideline says "consider" rather than "must"):',
          refs: [{ guidelineId: R, locator: 'App. III, 4.1, 5.1, 7.1' }],
          table: {
            columns: ['Situation', 'Action'],
            rows: [
              ['Antenatal score ≥4', 'Consider LMWH from the first trimester'],
              ['Antenatal score 3', 'Consider LMWH from 28 weeks'],
              ['Any antenatal admission', 'Consider LMWH'],
              ['Postnatal score ≥2', 'Consider LMWH for at least 10 days'],
              ['Postnatal admission ≥3 days or readmission', 'Consider LMWH'],
              ['High postnatal risk (e.g. any previous VTE)', 'LMWH for at least 6 weeks'],
              ['Lower postnatal risk', 'Early mobilisation and avoid dehydration'],
            ],
          },
        },
        { text: 'Previous VTE: LMWH from early pregnancy, except a single VTE after major surgery with no other risk factors. All women with a previous confirmed VTE need at least 6 weeks of postnatal prophylaxis.', refs: [{ guidelineId: R, locator: '4.2, 7.2' }] },
        { text: 'Start in the first trimester for hyperemesis, OHSS, or IVF pregnancy with three other risk factors. BMI ≥40 alone: postnatal LMWH for 10 days. Extend if risk factors persist beyond 10 days.', refs: [{ guidelineId: R, locator: '5.2, 7.1, 7.5' }] },
        { text: 'Caesarean: RCOG says consider 10 days of LMWH after any caesarean; for elective caesarean only with additional risk factors. NICE: consider LMWH plus mechanical prophylaxis if mobility is expected to be significantly reduced for 3 days or more.', refs: [{ guidelineId: R, locator: '7.4' }, { guidelineId: N, locator: '1.16.6' }] },
        { text: 'NICE timing for admitted women: start LMWH as soon as possible and within 14 hours of the risk assessment; after birth, miscarriage or termination, start 4–8 hours after the event and continue for at least 7 days.', refs: [{ guidelineId: N, locator: '1.16.4–1.16.5' }] },
      ],
    },
    {
      id: 'thrombophilia',
      title: 'Thrombophilia (ACOG)',
      icon: 'lab',
      body: [
        { text: 'Low-risk thrombophilias: heterozygous factor V Leiden, heterozygous prothrombin G20210A, protein C or protein S deficiency. High-risk: homozygous factor V Leiden or prothrombin G20210A, compound heterozygous for both, or antithrombin deficiency.', refs: [{ guidelineId: AT, locator: 'Table 3 footnotes' }] },
        {
          text: 'ACOG anticoagulation by thrombophilia and history:',
          refs: [{ guidelineId: AT, locator: 'Table 3' }],
          table: {
            columns: ['Scenario', 'Antepartum', 'Postpartum'],
            rows: [
              ['Low-risk, no VTE', 'Surveillance', 'Surveillance, or prophylactic if other risk factors'],
              ['Low-risk, first-degree relative with VTE', 'Surveillance or prophylactic', 'Prophylactic or intermediate'],
              ['Low-risk, single previous VTE, not on long-term anticoagulation', 'Prophylactic or intermediate', 'Prophylactic or intermediate'],
              ['High-risk, no VTE', 'Prophylactic or intermediate', 'Prophylactic or intermediate'],
              ['High-risk with previous VTE or affected first-degree relative', 'Prophylactic, intermediate or adjusted', 'Same, for 6 weeks'],
              ['Two or more VTEs, not on long-term anticoagulation', 'Intermediate or adjusted', 'Intermediate or adjusted, for 6 weeks'],
              ['Two or more VTEs, on long-term anticoagulation', 'Adjusted dose', 'Resume long-term anticoagulation'],
            ],
          },
        },
        { text: 'Do not screen for thrombophilia before starting treatment for an acute VTE; test after anticoagulation stops, and only if the result would change management.', refs: [{ guidelineId: RB, locator: '5, 12' }] },
      ],
    },
    {
      id: 'doses',
      title: 'LMWH & Heparin Doses',
      icon: 'injection',
      body: [
        {
          text: 'RCOG prophylactic doses by booking (or latest) weight:',
          refs: [{ guidelineId: R, locator: 'Table 3, 8.1' }],
          table: {
            columns: ['Weight', 'Enoxaparin', 'Dalteparin', 'Tinzaparin'],
            rows: [
              ['<50 kg', '20 mg daily', '2500 units daily', '3500 units daily'],
              ['50–90 kg', '40 mg daily', '5000 units daily', '4500 units daily'],
              ['91–130 kg', '60 mg daily*', '7500 units daily', '7000 units daily*'],
              ['131–170 kg', '80 mg daily*', '10 000 units daily', '9000 units daily*'],
              ['>170 kg', '0.6 mg/kg/day*', '75 units/kg/day', '75 units/kg/day*'],
            ],
          },
        },
        { text: '*May be given in two divided doses. Reduce the dose if creatinine clearance is below 30 mL/min (enoxaparin, dalteparin) or below 20 mL/min (tinzaparin).', refs: [{ guidelineId: R, locator: 'Table 3' }] },
        {
          text: 'RCOG treatment doses by early-pregnancy weight:',
          refs: [{ guidelineId: RB, locator: 'Tables 1a–c, 6.2' }],
          table: {
            columns: ['Weight', 'Enoxaparin', 'Dalteparin'],
            rows: [
              ['<50 kg', '40 mg BD or 60 mg OD', '5000 iu BD or 10 000 iu OD'],
              ['50–69 kg', '60 mg BD or 90 mg OD', '6000 iu BD or 12 000 iu OD'],
              ['70–89 kg', '80 mg BD or 120 mg OD', '8000 iu BD or 16 000 iu OD'],
              ['90–109 kg', '100 mg BD or 150 mg OD', '10 000 iu BD or 20 000 iu OD'],
              ['110–125 kg', '120 mg BD or 180 mg OD', '12 000 iu BD or 24 000 iu OD'],
              ['>125 kg', 'Discuss with haematologist', 'Discuss with haematologist'],
            ],
          },
        },
        { text: 'Tinzaparin treatment dose: 175 units/kg once daily. Routine anti-Xa monitoring is not needed except at weight extremes (<50 kg or ≥90 kg), renal impairment or recurrent VTE; target peak 0.5–1.2 units/mL at 3 hours. Routine platelet counts are not needed.', refs: [{ guidelineId: RB, locator: '6.2–6.3, 8.1' }] },
        {
          text: 'ACOG dose categories:',
          refs: [{ guidelineId: AT, locator: 'Table 4' }],
          table: {
            columns: ['Category', 'Regimens'],
            rows: [
              ['Prophylactic LMWH', 'Enoxaparin 40 mg SC daily; dalteparin 5000 units daily; tinzaparin 4500 units daily'],
              ['Intermediate LMWH', 'Enoxaparin 40 mg every 12 h; dalteparin 5000 units every 12 h'],
              ['Adjusted (therapeutic) LMWH', 'Enoxaparin 1 mg/kg every 12 h; dalteparin 200 units/kg daily or 100 units/kg every 12 h; tinzaparin 175 units/kg daily; anti-Xa 0.6–1.0 units/mL 4 h after a twice-daily dose'],
              ['Prophylactic UFH', '5000–7500 units every 12 h (1st trimester); 7500–10 000 units every 12 h (2nd); 10 000 units every 12 h (3rd) unless aPTT is raised'],
              ['Adjusted UFH', '≥10 000 units SC every 12 h, aPTT 1.5–2.5 × control 6 h after injection'],
            ],
          },
        },
        { text: 'ACOG prefers LMWH to unfractionated heparin in pregnancy.', refs: [{ guidelineId: A, locator: 'Level B' }] },
      ],
    },
    {
      id: 'diagnosis',
      title: 'Diagnosing DVT & PE',
      icon: 'diagnosis',
      body: [
        { text: 'Start treatment-dose LMWH as soon as VTE is suspected, unless strongly contraindicated, and continue until objective testing excludes it. Take FBC, coagulation screen, U&E and LFTs first.', refs: [{ guidelineId: RB, locator: '5, 6.1' }] },
        { heading: 'Suspected DVT', text: 'Compression duplex ultrasound of the proximal veins. If negative but suspicion remains high, stop anticoagulation and repeat the scan on days 3 and 7. For suspected iliac vein thrombosis consider Doppler, MR venography or contrast venography.', refs: [{ guidelineId: RB, locator: '4.1' }, { guidelineId: A, locator: 'Level A' }] },
        { heading: 'Suspected PE', text: 'ECG and chest X-ray first. If there are leg symptoms or signs, do compression duplex; a positive scan confirms VTE. If not, do a V/Q scan or CTPA, choosing CTPA if the chest X-ray is abnormal.', refs: [{ guidelineId: RB, locator: '4.2' }] },
        {
          text: 'Radiation trade-off to discuss with the woman:',
          refs: [{ guidelineId: RB, locator: '4.2' }],
          table: {
            columns: ['Test', 'Fetal dose', 'Main concern'],
            rows: [
              ['CTPA', 'About 0.1 mGy', 'Up to 20 mGy to maternal breast; slightly higher maternal breast cancer risk'],
              ['V/Q scan', 'About 0.5 mGy', 'Slightly higher childhood cancer risk'],
            ],
          },
        },
        { text: 'D-dimer should not be used to investigate acute VTE in pregnancy, and pretest probability scores are not validated in pregnancy.', refs: [{ guidelineId: RB, locator: '4.3–4.4' }] },
      ],
    },
    {
      id: 'treatment',
      title: 'Treatment & Massive PE',
      icon: 'drug',
      body: [
        { text: 'Therapeutic LMWH for the rest of pregnancy and at least 6 weeks after birth, with at least 3 months of treatment in total. Once-daily and twice-daily regimens are both acceptable.', refs: [{ guidelineId: RB, locator: '6.2, 8.1' }, { guidelineId: A, locator: 'Level C' }] },
        { text: 'Add leg elevation, graduated compression stockings and early mobilisation. Consider a temporary IVC filter around delivery for iliac vein VTE, or for recurrent PE despite adequate anticoagulation.', refs: [{ guidelineId: RB, locator: '7.1–7.2' }] },
        { heading: 'Massive PE', text: 'Unfractionated heparin is the preferred first treatment: 80 units/kg IV bolus, then 18 units/kg/hour adjusted by APTT. Get an urgent echocardiogram or CTPA within 1 hour and consider thrombolysis. If resuscitation fails beyond 20 weeks, perform a perimortem caesarean within 5 minutes.', refs: [{ guidelineId: RB, locator: '6.4' }] },
        { text: 'Avoid warfarin in pregnancy (ACOG allows a possible exception for mechanical heart valves). Avoid DOACs (dabigatran, rivaroxaban, apixaban) in pregnancy.', refs: [{ guidelineId: AT, locator: 'Warfarin, DOACs' }, { guidelineId: RB, locator: '8.1' }] },
        { text: 'Protamine fully reverses unfractionated heparin and partially reverses LMWH.', refs: [{ guidelineId: AT, locator: 'Reversal' }] },
      ],
    },
    {
      id: 'delivery',
      title: 'Labour, Delivery & Neuraxial Timing',
      icon: 'delivery',
      body: [
        {
          text: 'Timing intervals:',
          refs: [{ guidelineId: R, locator: '6' }, { guidelineId: RB, locator: '9' }, { guidelineId: A, locator: 'Level C' }, { guidelineId: AT, locator: 'Delivery' }],
          table: {
            columns: ['Step', 'Prophylactic LMWH', 'Treatment (adjusted) LMWH'],
            rows: [
              ['Onset of labour or bleeding', 'Stop; reassess on admission', 'Stop; no further heparin in labour'],
              ['Before planned induction or caesarean', 'Stop 12 h before (ACOG ≥12 h); give the day before and omit the morning dose for elective CS (RCOG)', 'Stop 24 h before'],
              ['Neuraxial block allowed after', '12 h', '24 h'],
              ['Epidural catheter removal', 'Not within 12 h of the last dose', 'Not within 12 h of the last dose'],
              ['Next dose after spinal or catheter removal', 'At least 4 h', 'At least 4 h'],
            ],
          },
        },
        { text: 'Unfractionated heparin: stop subcutaneous UFH 12 hours and IV UFH 6 hours before planned delivery. ACOG allows switching from LMWH to UFH near term because of its shorter half-life.', refs: [{ guidelineId: RB, locator: '9' }, { guidelineId: A, locator: 'Level C' }] },
        { text: 'After caesarean on treatment doses (RCOG): prophylactic dose 4 hours after surgery (enoxaparin 40 mg, dalteparin 5000 iu or tinzaparin 75 iu/kg), then the treatment dose 8–12 hours later. Consider wound drains and interrupted skin sutures; IV UFH if bleeding risk is high.', refs: [{ guidelineId: RB, locator: '9' }] },
        { text: 'ACOG: restart anticoagulation no sooner than 4–6 hours after vaginal birth or 6–12 hours after caesarean.', refs: [{ guidelineId: A, locator: 'Level B' }] },
        { text: 'A thrombophilia alone is not an indication for induction, but planned induction at term can help time the last dose.', refs: [{ guidelineId: AT, locator: 'Delivery' }] },
      ],
    },
    {
      id: 'mechanical',
      title: 'Mechanical Prophylaxis',
      icon: 'monitoring',
      body: [
        { text: 'ACOG: pneumatic compression devices before caesarean for all women not already on anticoagulation, and for women with thrombophilia in labour until fully mobile.', refs: [{ guidelineId: A, locator: 'Level C' }, { guidelineId: AT, locator: 'Intrapartum' }] },
        { text: 'NICE: intermittent pneumatic compression first line when mechanical prophylaxis is used after caesarean; stockings if IPC is contraindicated. Continue until mobility is normal or discharge.', refs: [{ guidelineId: N, locator: '1.16.6' }] },
        { text: 'RCOG: anti-embolism stockings (calf pressure 14–15 mmHg) for admitted women who cannot have LMWH, and for travel over 4 hours. Full-length preferred; knee-length if fit or compliance is poor.', refs: [{ guidelineId: R, locator: '9' }] },
      ],
    },
    {
      id: 'postnatal',
      title: 'Postnatal Care & Breastfeeding',
      icon: 'followup',
      body: [
        { text: 'After treatment for VTE the woman may choose LMWH or warfarin postnatally. Do not start warfarin before day 5; check INR daily and continue heparin until INR is above 2.0 for 24 hours (RCOG). ACOG overlaps until INR is 2.0–3.0 on two consecutive days.', refs: [{ guidelineId: RB, locator: '10' }, { guidelineId: AT, locator: 'Warfarin' }] },
        { text: 'Heparins and warfarin do not accumulate in breast milk and do not anticoagulate the baby. DOACs: RCOG says not currently recommended in breastfeeding; ACOG says avoid in lactation.', refs: [{ guidelineId: A, locator: 'Level B' }, { guidelineId: R, locator: '8.8' }, { guidelineId: AT, locator: 'DOACs' }] },
        { text: 'Prescribe graduated compression stockings on the affected leg for post-thrombotic symptoms.', refs: [{ guidelineId: RB, locator: '11' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Postnatal prophylaxis duration',
      entries: [
        { guidelineId: R, text: 'At least 10 days (intermediate risk); 6 weeks (high risk).', locator: '7.1–7.2' },
        { guidelineId: N, text: 'At least 7 days after birth for admitted women at risk.', locator: '1.16.5' },
        { guidelineId: AT, text: '6–8 weeks as indicated; 6 weeks in higher-risk groups.', locator: 'Table 3–4' },
      ],
    },
    {
      domain: 'Caesarean section',
      entries: [
        { guidelineId: R, text: 'Consider 10 days LMWH after any CS; elective CS only with other risk factors.', locator: '7.4' },
        { guidelineId: N, text: 'LMWH plus mechanical if mobility reduced ≥3 days.', locator: '1.16.6' },
        { guidelineId: A, text: 'Pneumatic compression for all not already anticoagulated.', locator: 'Level C' },
      ],
    },
    {
      domain: 'Therapeutic LMWH dosing',
      entries: [
        { guidelineId: RB, text: 'Fixed bands by early-pregnancy weight; anti-Xa only at extremes.', locator: 'Tables 1a–c' },
        { guidelineId: AT, text: 'Enoxaparin 1 mg/kg every 12 h; anti-Xa target 0.6–1.0.', locator: 'Table 4' },
      ],
    },
    {
      domain: 'Switch to UFH near term',
      entries: [
        { guidelineId: A, text: 'May convert LMWH to UFH (shorter half-life).', locator: 'Level C' },
        { guidelineId: RB, text: 'Stop LMWH 24 h before planned delivery; UFH for high bleeding risk.', locator: '9' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: RCOG GTG 37a and 37b (2015) from third-party copies of the PDFs (not rcog.org.uk), the 37a scoring tool from the NICE evidence copy, and NICE NG89 section 1.16. ACOG PB 197 was read in full; PB 196 is paywalled, so only its graded statements (via Guideline Central) are used, and its PE algorithm and dose table were not seen. No FOGSI or ICOG guideline on VTE in pregnancy was found. NICE NG158 could not be read. Whether RCOG or ACOG have updated these 2015 and 2018 documents was not checked. All doses are quoted from the source for clinician and pharmacology review.',
};
