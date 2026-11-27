import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from:
 *  - NICE NG235 (2023/2026) fever thresholds; NG121 (2019) fever and sepsis in labour -> nice-ng235, nice-ng121
 *  - NICE NG255 Suspected sepsis in pregnant or recently pregnant people (Nov 2025)   -> nice-ng255
 *  - NICE NG195 Neonatal infection (intrapartum antibiotics)                          -> nice-ng195
 *  - ACOG Committee Opinion 712 (2017)                                                -> acog-co-712
 *  - RCOG GTG 64b (2012, superseded by GTG 64, 2024)                                  -> rcog-gtg-64b, rcog-gtg-64
 *  NOT READ: any FOGSI / MoHFW / ICMR source, WHO 2015/2017. Indian guidance still to add.
 */
const N235 = 'nice-ng235';
const N121 = 'nice-ng121';
const N255 = 'nice-ng255';
const N195 = 'nice-ng195';
const A = 'acog-co-712';
const R = 'rcog-gtg-64b';
const R24 = 'rcog-gtg-64';

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
      id: 'chorioamnionitis',
      title: 'Chorioamnionitis in Labour',
      icon: 'drug',
      body: [
        { text: 'Offer intrapartum antibiotics with a clinical diagnosis of chorioamnionitis; give the first dose as soon as possible and continue until the baby is born.', refs: [{ guidelineId: N195, locator: '1.6.1, 1.6.4' }, { guidelineId: A }] },
        {
          text: 'Regimens as stated:',
          refs: [{ guidelineId: N195, locator: 'Table 1, 1.6.3' }, { guidelineId: A, locator: 'Table 1' }],
          table: {
            columns: ['Source', 'First line', 'Penicillin allergy'],
            rows: [
              ['NICE NG195', 'Benzylpenicillin + gentamicin + metronidazole (no doses given; gentamicin once daily)', 'Severe: vancomycin + gentamicin + metronidazole'],
              ['ACOG CO 712', 'Ampicillin 2 g IV 6-hourly + gentamicin 2 mg/kg IV load, then 1.5 mg/kg 8-hourly', 'Mild: cefazolin 2 g IV 8-hourly. Severe: clindamycin 900 mg IV 8-hourly or vancomycin 1 g IV 12-hourly'],
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
    'IMPORTANT GAP: no FOGSI, ICOG, MoHFW or ICMR source on maternal sepsis or chorioamnionitis could be read before the web-reading limit was reached, and WHO 2015/2017 were not read; Indian guidance must be added. Sources read on 28 Nov 2026 through a summarising fetch tool. NICE NG235 was read only to about section 1.9. The status of NICE NG121 was not confirmed. NICE NG255 (Nov 2025) table columns were partly unclear in extraction. NICE NG195 gives no doses. ACOG Committee Opinion 712 (2017) was read from a third-party copy and its reaffirmation status is unknown. RCOG GTG 64 (2024) is paywalled; RCOG content comes from the superseded GTG 64b (2012). Doses are quoted from the guidelines; follow local antimicrobial policy.',
};
