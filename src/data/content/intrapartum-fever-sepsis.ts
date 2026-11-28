import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from:
 *  - NICE NG235 (2023/2026) fever thresholds; NG121 (2019) fever and sepsis in labour -> nice-ng235, nice-ng121
 *  - NICE NG255 Suspected sepsis in pregnant or recently pregnant people (Nov 2025)   -> nice-ng255
 *  - NICE NG195 Neonatal infection (intrapartum antibiotics)                          -> nice-ng195
 *  - ACOG Committee Opinion 712 (2017)                                                -> acog-co-712
 *  - RCOG GTG 64b (2012, superseded by GTG 64, 2024)                                  -> rcog-gtg-64b, rcog-gtg-64
 *  Added 2026-11-28 (pm): NCDC NTG 2016 Section G and NTG 2025 §3.4 (India), WHO 2017 statement, WHO 2015 treatment recs (via BIGG-REC).
 */
const N235 = 'nice-ng235';
const N121 = 'nice-ng121';
const N255 = 'nice-ng255';
const N195 = 'nice-ng195';
const A = 'acog-co-712';
const R = 'rcog-gtg-64b';
const R24 = 'rcog-gtg-64';
const NT16 = 'ncdc-ntg-2016';
const NT25 = 'ncdc-ntg-2025';
const W17 = 'who-maternal-sepsis-2017';
const W15 = 'who-peripartum-infection-2015';

export const intrapartumFeverSepsis: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Fever in labour is 38°C or above once, or 37.5°C or above on two readings an hour apart (NICE). Suspected intra-amniotic infection (chorioamnionitis) is fever with another sign such as fetal tachycardia, maternal leukocytosis or purulent discharge (ACOG). Start intrapartum antibiotics as soon as infection is suspected and continue until birth; chorioamnionitis alone is rarely an indication for caesarean. Maternal sepsis is a time-critical emergency: think sepsis, use an early warning score, take blood cultures and lactate, and give a broad-spectrum antibiotic within 1 hour of meeting high-risk criteria, with senior obstetric, anaesthetic and (if organ dysfunction) critical care input. If the genital tract is the source, expedite birth. Tell the neonatal team.',
  keyPoints: [
    { text: 'Fever in labour: 38°C or above on a single reading, or 37.5°C or above on 2 consecutive readings 1 hour apart. Record temperature 4-hourly in labour.', refs: [{ guidelineId: N235, locator: '1.8.11, 1.8.19–1.8.20' }, { guidelineId: N121, locator: '1.11.5' }] },
    { text: 'Suspected intra-amniotic infection: temperature 38.0–38.9°C plus one more risk factor (fetal tachycardia, maternal leukocytosis, purulent cervical drainage), or 39.0°C or above alone.', refs: [{ guidelineId: A, locator: 'Definitions' }] },
    { text: 'Give intrapartum antibiotics as soon as infection is suspected or confirmed and continue until birth. NICE (chorioamnionitis): benzylpenicillin + gentamicin + metronidazole. ACOG: ampicillin 2 g IV 6-hourly + gentamicin.', refs: [{ guidelineId: N195, locator: '1.6.1–1.6.4, Table 1' }, { guidelineId: A, locator: 'Table 1' }] },
    { text: 'Intra-amniotic infection alone is rarely, if ever, an indication for caesarean. If the genital tract is the source of sepsis, expedite the birth.', refs: [{ guidelineId: A }, { guidelineId: N121, locator: '1.13.10' }] },
    { text: 'Sepsis high-risk criteria (any one): RR 25 or more, systolic BP 90 or less, HR over 130, no urine for 18 h, new altered mental state, or lactate over 2 mmol/L.', refs: [{ guidelineId: N255, locator: '1.5.2 Table 1, 1.7.11' }] },
    { text: 'High risk: senior review immediately; blood cultures, lactate and bloods; broad-spectrum IV antibiotic within 1 hour; 500 mL crystalloid bolus if lactate over 4 or SBP 90 or less, and critical care referral.', refs: [{ guidelineId: N255, locator: '1.7.2–1.7.4, 1.9.2' }, { guidelineId: R, locator: '11–12' }] },
    { text: 'India (NCDC): obstetric sepsis in pregnancy or after birth: ceftriaxone 2 g IV once daily + metronidazole 500 mg IV 8-hourly ± gentamicin 7 mg/kg once daily; in shock, piperacillin-tazobactam or cefoperazone-sulbactam. Follow the hospital antibiogram.', refs: [{ guidelineId: NT16, locator: 'Section G' }] },
    { text: 'Take blood cultures before antibiotics, but never let this delay treatment.', refs: [{ guidelineId: N121, locator: '1.13.22' }, { guidelineId: R, locator: '12' }] },
    { text: 'Sepsis in labour: multidisciplinary review (senior obstetrician, obstetric anaesthetist, senior midwife; add neonatologist and microbiologist if confirmed; intensivist if organ dysfunction). Continuous CTG; start antibiotics before regional anaesthesia.', refs: [{ guidelineId: N121, locator: '1.13.4–1.13.17' }] },
    { text: 'Paracetamol may be given for fever but is not a treatment for sepsis and must not delay investigation. Tell the neonatal team.', refs: [{ guidelineId: N121, locator: '1.12.1–1.12.2' }, { guidelineId: A }] },
  ],
  sections: [
    {
      id: 'definitions',
      title: 'Definitions',
      icon: 'definition',
      body: [
        { heading: 'WHO definition', text: 'Maternal sepsis is a life-threatening condition defined as organ dysfunction resulting from infection during pregnancy, childbirth, post-abortion or the postpartum period. Identify it from simple bedside signs and act (antibiotics, fluids) before laboratory confirmation.', refs: [{ guidelineId: W17, locator: 'pp.2–3, Box 2' }] },
        { text: 'Maternal fever in labour (NICE): 38°C or above on a single reading, or 37.5°C or above on 2 consecutive readings 1 hour apart.', refs: [{ guidelineId: N235, locator: '1.8.11, 1.8.20' }, { guidelineId: N121, locator: '1.11.5' }] },
        { text: 'ACOG: suspected intra-amniotic infection = 38.0–38.9°C with one additional risk factor, or 39.0°C or above. Confirmed = positive amniotic fluid test. Isolated maternal fever = 38.0–38.9°C with no other risk factor.', refs: [{ guidelineId: A, locator: 'Definitions' }] },
        { text: 'Recently pregnant (NICE NG255): within 4 weeks after birth, or 24 hours after a termination or miscarriage. Birth, termination or miscarriage in the past 6 weeks places a woman in a high-risk group for sepsis.', refs: [{ guidelineId: N255, locator: 'Terms, 1.2.1' }] },
      ],
    },
    {
      id: 'recognition',
      title: 'Recognising Sepsis',
      icon: 'diagnosis',
      body: [
        { text: 'Risk factors include prolonged rupture of membranes, continued vaginal bleeding or offensive discharge, and recent birth, termination or miscarriage.', refs: [{ guidelineId: N255, locator: '1.2.1' }] },
        { text: 'Assess temperature, heart rate, respiratory rate, blood pressure, consciousness and oxygen saturation; consider an early warning score (see the MEWS tool in Labour room).', refs: [{ guidelineId: N255, locator: '1.1.8, 1.3.1' }] },
        {
          text: 'NICE NG255 risk stratification (paraphrased; check the table):',
          refs: [{ guidelineId: N255, locator: '1.5.2, Table 1' }],
          table: {
            columns: ['Sign', 'High risk', 'Moderate–high risk'],
            rows: [
              ['Respiratory rate', '25 or more', '21–24'],
              ['Systolic BP', '90 or less', '91–100'],
              ['Heart rate', 'Over 130', '100–130 or new arrhythmia'],
              ['Urine output', 'None for 18 h', 'None for 12–18 h'],
              ['Mental state', 'New altered state', 'Not listed'],
            ],
          },
        },
        { text: 'RCOG (2012) red flags prompting urgent hospital assessment include temperature over 38°C and sustained tachycardia over 90/min.', refs: [{ guidelineId: R, locator: '10' }] },
      ],
    },
    {
      id: 'sepsis-management',
      title: 'Sepsis: First Hour',
      icon: 'emergency',
      body: [
        {
          text: 'Fever in labour or suspected maternal sepsis (NICE NG235, NG255, NG195; ACOG CO 712).',
          refs: [{ guidelineId: N235, locator: '1.8.11, 1.8.20' }, { guidelineId: N255, locator: '1.5–1.7' }, { guidelineId: N195, locator: '1.6' }, { guidelineId: A }],
          flow: {
            caption: 'Intrapartum fever and sepsis',
            steps: [
              { title: 'Fever in labour', text: '38°C or more once, or 37.5°C or more twice 1 hour apart. Check HR, RR, BP, SpO2, mental state, urine output.', tone: 'start' },
              { title: 'Any high-risk sepsis sign?', tone: 'decision', branches: [
                { when: 'Yes', then: 'RR 25+, SBP 90 or less, HR over 130, no urine 18 h, new confusion, lactate over 2' },
                { when: 'No', then: 'Treat as suspected intra-amniotic infection if fever + fetal tachycardia, leukocytosis or purulent discharge' },
              ] },
              { title: 'Sepsis: first hour', tone: 'urgent', text: 'Senior review now; cultures, lactate, bloods; broad-spectrum IV antibiotic within 1 hour; 500 mL crystalloid if lactate over 4 or SBP 90 or less; critical care referral.' },
              { title: 'Chorioamnionitis antibiotics until birth', text: 'NICE: benzylpenicillin + gentamicin + metronidazole. ACOG: ampicillin 2 g IV 6-hourly + gentamicin.' },
              { title: 'Birth', text: 'Infection alone is rarely a reason for caesarean; continuous CTG; expedite if genital tract is the source. Inform the neonatal team.' },
            ],
          },
        },
        { heading: '1. Senior review now', text: 'If any high-risk criterion is met, the senior clinical decision maker assesses immediately and a consultant is informed.', refs: [{ guidelineId: N255, locator: '1.7.2' }] },
        { heading: '2. Investigations', text: 'Venous blood gas with glucose and lactate, blood cultures, FBC, CRP, U&E and creatinine, LFTs, clotting. Consider urine analysis and chest X-ray to find the source. Blood cultures before antibiotics.', refs: [{ guidelineId: N255, locator: '1.7.2, 1.11.2' }, { guidelineId: N121, locator: '1.13.22' }, { guidelineId: R, locator: '12' }] },
        { heading: '3. Antibiotic within 1 hour', text: 'Give a broad-spectrum antimicrobial without delay, within 1 hour of identifying high-risk criteria. Clear source: follow local guidance; unclear source: broad-spectrum IV antimicrobial from the local formulary. RCOG 2012 example: piperacillin–tazobactam or a carbapenem plus clindamycin; add vancomycin or teicoplanin if MRSA is suspected.', refs: [{ guidelineId: N255, locator: '1.7.2' }, { guidelineId: N121, locator: '1.13.23–1.13.24' }, { guidelineId: R, locator: '11, 13.1' }] },
        { heading: '4. Fluids and oxygen', text: 'Lactate over 4 mmol/L or systolic BP 90 or less: crystalloid bolus of 500 mL (sodium 130–154 mmol/L) and refer to critical care. Target oxygen saturation 94–98%.', refs: [{ guidelineId: N255, locator: '1.7.4, 1.9.2, 1.10.1' }] },
        { heading: '5. Escalate', text: 'Moderate–high risk with 2 or more criteria: clinician review within 1 hour; senior decision on antibiotics within 3 hours. Involve the obstetrician and surgical team early to control the source.', refs: [{ guidelineId: N255, locator: '1.7.10–1.7.14, 1.11.4' }] },
        { text: 'Avoid NSAIDs in sepsis (RCOG 2012). Treat any group A streptococcus aggressively.', refs: [{ guidelineId: R, locator: '7, 17' }] },
        { text: 'RCOG GTG 64 (2024) replaces 64a/64b and stresses "think sepsis", rapid broad-spectrum antibiotics and senior review; its full text could not be read.', refs: [{ guidelineId: R24 }] },
      ],
    },
    {
      id: 'india-regimens',
      title: 'Indian Antibiotic Regimens (NCDC)',
      icon: 'drug',
      body: [
        {
          text: 'NCDC National Treatment Guidelines (2016, Section G). Send cultures first; adjust to the hospital antibiogram.',
          refs: [{ guidelineId: NT16, locator: 'Section G' }],
          table: {
            columns: ['Condition', 'First line', 'If shock / already treated / other'],
            rows: [
              ['Obstetric sepsis in pregnancy', 'Ceftriaxone 2 g IV once daily + metronidazole 500 mg IV 8-hourly ± gentamicin 7 mg/kg once daily', 'Shock: piperacillin-tazobactam or cefoperazone-sulbactam'],
              ['Puerperal sepsis', 'Same as above', 'Shock: piperacillin-tazobactam or cefoperazone-sulbactam; add vancomycin or teicoplanin if MRSA suspected'],
              ['Septic abortion; endomyometritis', 'Ampicillin + metronidazole 500 mg IV 8-hourly if no prior antibiotic (ampicillin dose: check the original)', 'IV ceftriaxone; partly treated: piperacillin-tazobactam or cefoperazone-sulbactam'],
              ['Chorioamnionitis', 'Clindamycin, vancomycin or teicoplanin + cefoperazone-sulbactam', 'Not septic: IV ampicillin'],
              ['GBS prophylaxis in labour', 'Penicillin G 5 million units IV, then 2.5–3 million units 6-hourly until birth; or ampicillin 2 g IV, then 1 g 6-hourly', 'Allergy: clindamycin 900 mg IV 8-hourly, vancomycin, teicoplanin or cefazolin'],
            ],
          },
        },
        { text: 'No duration of treatment is stated in the NCDC table. Fluoroquinolones and cotrimoxazole are contraindicated in the first trimester; avoid doxycycline while breastfeeding.', refs: [{ guidelineId: NT16, locator: 'Section G' }] },
        { heading: 'Sepsis with no clear source (adult, NTG 2025)', text: 'Community-acquired: piperacillin-tazobactam 4.5 g IV 6-hourly (or cefoperazone-sulbactam 3 g IV 12-hourly). Septic shock: meropenem 1 g IV 8-hourly + teicoplanin 400 mg IV 12-hourly for 3 doses, then 6–12 mg/kg daily. De-escalate if cultures are negative at 48 h and she is improving. First hour: lactate, blood cultures, antibiotics, 30 mL/kg crystalloid for hypotension or lactate 4 or more, norepinephrine for MAP under 65.', refs: [{ guidelineId: NT25, locator: '§3.4, pp.30–32' }] },
        { text: 'The 2025 NCDC obstetric section (septic abortion, puerperal sepsis, chorioamnionitis) could not be read, so the 2016 rows above may have changed.', refs: [{ guidelineId: NT25 }] },
      ],
    },
    {
      id: 'chorioamnionitis',
      title: 'Chorioamnionitis in Labour',
      icon: 'drug',
      body: [
        { text: 'Offer intrapartum antibiotics with a clinical diagnosis of chorioamnionitis; give the first dose as soon as possible and continue until the baby is born.', refs: [{ guidelineId: N195, locator: '1.6.1, 1.6.4' }, { guidelineId: A }] },
        {
          text: 'Regimens as stated:',
          refs: [{ guidelineId: N195, locator: 'Table 1, 1.6.3' }, { guidelineId: A, locator: 'Table 1' }, { guidelineId: W15 }, { guidelineId: NT16, locator: 'Section G' }],
          table: {
            columns: ['Source', 'First line', 'Penicillin allergy'],
            rows: [
              ['NICE NG195', 'Benzylpenicillin + gentamicin + metronidazole (no doses given; gentamicin once daily)', 'Severe: vancomycin + gentamicin + metronidazole'],
              ['ACOG CO 712', 'Ampicillin 2 g IV 6-hourly + gentamicin 2 mg/kg IV load, then 1.5 mg/kg 8-hourly', 'Mild: cefazolin 2 g IV 8-hourly. Severe: clindamycin 900 mg IV 8-hourly or vancomycin 1 g IV 12-hourly'],
              ['WHO 2015 (maintained)', 'Ampicillin + once-daily gentamicin, or another simple, locally available regimen (no doses given)', 'Not stated'],
              ['India NCDC NTG 2016', 'Clindamycin, vancomycin or teicoplanin + cefoperazone-sulbactam (no doses given); IV ampicillin if not septic', 'Not stated'],
            ],
          },
        },
        { text: 'ACOG: consider antibiotics even for isolated maternal fever unless another source is found and documented. Give antipyretics as well.', refs: [{ guidelineId: A }] },
        { heading: 'Birth', text: 'Intra-amniotic infection alone is rarely, if ever, an indication for caesarean; continue labour with continuous CTG. Fetal blood sample results may be falsely reassuring in sepsis.', refs: [{ guidelineId: A }, { guidelineId: N121, locator: '1.13.17–1.13.19' }] },
        { heading: 'After birth', text: 'ACOG: after caesarean, one additional dose; after vaginal birth, no further doses needed. Do not continue antibiotics automatically postpartum.', refs: [{ guidelineId: A, locator: 'Table 1' }] },
        { text: 'Communicate with the neonatal team so the baby can be assessed.', refs: [{ guidelineId: A }, { guidelineId: R, locator: '15' }] },
      ],
    },
    {
      id: 'sepsis-labour',
      title: 'Sepsis During Labour',
      icon: 'management',
      body: [
        { text: 'Suspected sepsis: ongoing multidisciplinary review with a named lead (senior obstetrician, senior obstetric anaesthetist, senior midwife, labour ward coordinator). Confirmed: add a senior neonatologist and microbiologist; organ dysfunction: add an intensivist.', refs: [{ guidelineId: N121, locator: '1.13.4–1.13.6' }] },
        { text: 'Make a shared decision on induction, continuing or augmenting labour, instrumental birth or caesarean. If the genital tract is the source, expedite the birth.', refs: [{ guidelineId: N121, locator: '1.13.8, 1.13.10' }] },
        { text: 'Start antibiotics before inserting the needle for regional analgesia. Advise continuous CTG. Observations: pulse and temperature hourly, BP and RR 4-hourly while on antibiotics.', refs: [{ guidelineId: N121, locator: '1.13.14, 1.13.17, 1.11.6' }] },
        { text: 'Continue multidisciplinary review for the first 24 hours after birth.', refs: [{ guidelineId: N121, locator: '1.13.26' }] },
      ],
    },
    {
      id: 'endometritis',
      title: 'Postpartum Endometritis',
      icon: 'drug',
      body: [
        { text: 'WHO (2015, maintained): clindamycin + gentamicin first line (no doses given). India NCDC 2016: treat as for septic abortion (see Indian regimens).', refs: [{ guidelineId: W15 }, { guidelineId: NT16, locator: 'Section G' }] },
        { text: 'RCOG 2012 (Appendix 3): gentamicin plus cefotaxime; with penicillin allergy, options include gentamicin, clindamycin, ciprofloxacin and metronidazole; follow local antimicrobial guidance.', refs: [{ guidelineId: R, locator: 'Appendix 3' }] },
        { text: 'Consult a paediatrician if sepsis occurs in the puerperium (baby may also be at risk).', refs: [{ guidelineId: R, locator: '15' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Antibiotics for chorioamnionitis',
      entries: [
        { guidelineId: N195, text: 'Benzylpenicillin + gentamicin + metronidazole.', locator: 'Table 1' },
        { guidelineId: A, text: 'Ampicillin + gentamicin.', locator: 'Table 1' },
        { guidelineId: W15, text: 'Ampicillin + once-daily gentamicin (conditional).' },
        { guidelineId: NT16, text: 'Clindamycin/vancomycin/teicoplanin + cefoperazone-sulbactam; ampicillin if not septic.', locator: 'Section G' },
      ],
    },
    {
      domain: 'Antibiotic timing in sepsis',
      entries: [
        { guidelineId: N255, text: 'Within 1 hour of meeting any high-risk criterion.', locator: '1.7.2' },
        { guidelineId: R, text: 'Within 1 hour of recognising severe sepsis.', locator: '11' },
      ],
    },
  ],
  editorNote:
    'Indian guidance added 28 Nov 2026 from NCDC NTG 2016 Section G (obstetric regimens) and NTG 2025 §3.4 (adult sepsis); NTG 2025 Section 6 (obstetric) could not be read, and the septic-abortion ampicillin dose needs checking against the original. WHO 2017 statement read; WHO 2015 treatment recommendations read only as recommendation records (no doses). No FOGSI sepsis guideline was found. Sources read on 28 Nov 2026 through a summarising fetch tool. NICE NG235 was read only to about section 1.9. The status of NICE NG121 was not confirmed. NICE NG255 (Nov 2025) table columns were partly unclear in extraction. NICE NG195 gives no doses. ACOG Committee Opinion 712 (2017) was read from a third-party copy and its reaffirmation status is unknown. RCOG GTG 64 (2024) is paywalled; RCOG content comes from the superseded GTG 64b (2012). Doses are quoted from the guidelines; follow local antimicrobial policy.',
};
