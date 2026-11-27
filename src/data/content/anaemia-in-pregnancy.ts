import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from (all PDFs read as extracted text; flowcharts garbled in places):
 *  - FOGSI GCPR, Management of IDA in Pregnancy (2017 upload)            -> fogsi-ida-gcpr
 *  - FOGSI–FIGO Delphi consensus on IDA in pregnancy and lactation (2025) -> fogsi-figo-anaemia-delphi
 *  - FOGSI FAQ on IV ferric carboxymaltose (2025)                         -> fogsi-fcm-faq
 *  - MoHFW Anemia Mukt Bharat Abhiyaan operational guidelines             -> mohfw-amb
 *  - MoHFW AMB training tool kit, module 1 (2019)                         -> mohfw-amb-training
 *  - BSH UK guideline on iron deficiency in pregnancy (2020)              -> bsh-ida-pregnancy
 *  - RCOG GTG 47, Blood transfusion in obstetrics (2015)                  -> rcog-gtg-47
 *  - NICE NG201 antenatal care (testing schedule only)                    -> nice-ng201
 *  - ACOG PB 233 (cut-offs only, via secondary source)                    -> acog-pb-233
 */
const F = 'fogsi-ida-gcpr';
const FD = 'fogsi-figo-anaemia-delphi';
const FQ = 'fogsi-fcm-faq';
const M = 'mohfw-amb';
const MT = 'mohfw-amb-training';
const B = 'bsh-ida-pregnancy';
const R = 'rcog-gtg-47';
const N = 'nice-ng201';
const A = 'acog-pb-233';

export const anaemiaInPregnancy: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Anaemia in pregnancy means haemoglobin below 11 g/dL in the first and third trimesters and below 10.5 g/dL in the second. Iron deficiency is by far the commonest cause in India, where the Anemia Mukt Bharat programme sets national screening and treatment. Every woman should be screened at booking and again later in pregnancy, take prophylactic iron and folic acid, and be dewormed after the first trimester. Mild and moderate anaemia are treated with oral iron, checking that Hb rises within 2–4 weeks. IV iron (iron sucrose or ferric carboxymaltose) is used from the second trimester when oral iron fails, is not tolerated, or time is short. Transfusion is reserved for severe anaemia, late gestation, heart failure or bleeding.',
  keyPoints: [
    { text: 'Cut-offs: Hb <11 g/dL in the first and third trimesters and <10.5 g/dL in the second (FOGSI, ACOG). The UK uses <11, <10.5 and <10 g/dL postpartum. MoHFW grades severe anaemia as Hb <7 g/dL.', refs: [{ guidelineId: F, locator: '1.1' }, { guidelineId: A }, { guidelineId: B, locator: 'Diagnosis (2D)' }, { guidelineId: M, locator: '4.1' }] },
    { text: 'Screen everyone: Hb at the first visit (CBC preferred) and repeated each trimester. MoHFW asks for Hb at every ANC contact, at least four times. UK practice is booking and 28 weeks.', refs: [{ guidelineId: F, locator: '1.2, 2.2' }, { guidelineId: M, locator: 'Table 1' }, { guidelineId: B, locator: 'Screening (1D)' }, { guidelineId: N, locator: '1.2.12, 1.2.16' }] },
    { text: 'Prophylaxis in India: one IFA tablet (60 mg elemental iron + 500 mcg folic acid) daily for 180 days from the second trimester, and 180 days after delivery. Albendazole 400 mg once after the first trimester.', refs: [{ guidelineId: M, locator: 's3, 5.1' }, { guidelineId: MT, locator: 'pp.25–30' }] },
    { text: 'Treatment of mild to moderate anaemia: MoHFW gives two IFA tablets daily; FOGSI 100 mg elemental iron twice daily. BSH uses lower doses (40–80 mg once daily). Recheck Hb at 2–4 weeks; a rise under 1 g/dL after a month of good adherence is non-response.', refs: [{ guidelineId: M, locator: 'Table 1, 4.3–4.4' }, { guidelineId: F, locator: '2.4' }, { guidelineId: B, locator: 'Oral iron (2C)' }] },
    { text: 'IV iron from the second trimester when oral iron is not tolerated, not taken or not working, in moderate to severe anaemia, or when time to delivery is short. Not in the first trimester. Give only where anaphylaxis can be managed.', refs: [{ guidelineId: F, locator: '2.7–2.10' }, { guidelineId: MT, locator: '2.4' }, { guidelineId: FD, locator: 'Stmt 28–29' }, { guidelineId: B, locator: 'IV iron (2B, 1C)' }] },
    { text: 'Transfusion (FOGSI): before 34 weeks if Hb <5 g/dL, or 5–7 g/dL with impending heart failure; after 34 weeks if Hb <7 g/dL; in labour or postpartum if Hb <7 g/dL or bleeding with instability.', refs: [{ guidelineId: F, locator: '2.14–2.16' }, { guidelineId: MT, locator: 'p.37' }] },
    { text: 'Do not give more empirical iron to a non-responder without first excluding a haemoglobinopathy.', refs: [{ guidelineId: M, locator: '6.1.3' }, { guidelineId: F, locator: '1.8–1.9' }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Definition & Severity',
      icon: 'definition',
      body: [
        { text: 'FOGSI: anaemia is Hb below 11 g/dL in the first and third trimesters and below 10.5 g/dL in the second. ACOG uses the same values (haematocrit below 33% and 32%).', refs: [{ guidelineId: F, locator: '1.1' }, { guidelineId: A }] },
        {
          text: 'Severity bands used by the national programme (g/dL):',
          refs: [{ guidelineId: M, locator: '4.1, p.34' }],
          table: {
            columns: ['Grade', '1st & 3rd trimester', '2nd trimester'],
            rows: [
              ['Normal', '≥11.0', '≥10.5'],
              ['Mild', '10.0–10.9', '9.5–10.4'],
              ['Moderate', '7.0–9.9', '7.0–9.4'],
              ['Severe', '<7.0', '<7.0'],
            ],
          },
        },
        { text: 'The 2019 MoHFW training protocol also splits severe anaemia into 5.0–6.9 g/dL and below 5 g/dL, because management differs (IV iron versus admission and transfusion).', refs: [{ guidelineId: MT, locator: 'p.17, p.37' }] },
        { text: 'UK (BSH): Hb <110 g/L in the first trimester, <105 g/L in the second and third, and <100 g/L postpartum. Note the UK applies 10.5 to the third trimester as well.', refs: [{ guidelineId: B, locator: 'Diagnosis (2D)' }, { guidelineId: R, locator: '4.1.1' }] },
        { text: 'The 2025 FOGSI–FIGO Delphi panel kept severe anaemia as Hb <7 g/dL but did not reach agreement on trimester-specific cut-offs.', refs: [{ guidelineId: FD, locator: 'Stmt 3, 30' }] },
      ],
    },
    {
      id: 'screening',
      title: 'Screening Schedule',
      icon: 'monitoring',
      body: [
        { text: 'FOGSI: universal screening with Hb at the first antenatal visit, preferably a complete blood count, and Hb repeated in each trimester.', refs: [{ guidelineId: F, locator: '1.2, 2.2' }] },
        {
          text: 'MoHFW: Hb at every ANC contact, at least four times (high-risk pregnancies eight times):',
          refs: [{ guidelineId: M, locator: 'Table 1, p.40' }],
          table: {
            columns: ['Contact', 'Gestation'],
            rows: [
              ['1', 'Within 12 weeks'],
              ['2', '14–26 weeks'],
              ['3', '28–34 weeks'],
              ['4', '36–40 weeks'],
              ['Postpartum', 'Within 6 months of delivery'],
            ],
          },
        },
        { text: 'NICE and BSH: full blood count at booking and at 28 weeks. RCOG adds an FBC at 20–24 weeks in multiple pregnancy.', refs: [{ guidelineId: N, locator: '1.2.12, 1.2.16' }, { guidelineId: B, locator: 'Screening (1D)' }, { guidelineId: R, locator: '4.1.1' }] },
        { text: 'FOGSI–FIGO 2025: screen before conception as well as during pregnancy; a HemoCue point-of-care device is the preferred field test.', refs: [{ guidelineId: FD, locator: 'Stmt 1, 6' }] },
      ],
    },
    {
      id: 'investigations',
      title: 'Investigations',
      icon: 'lab',
      body: [
        { text: 'FOGSI: CBC with peripheral smear and red cell indices, reticulocyte count, malaria films in endemic areas and stool examination. If MCV is low, check serum ferritin with CRP.', refs: [{ guidelineId: F, locator: '1.5–1.6' }] },
        { text: 'Ferritin below 30 µg/L confirms iron deficiency in pregnancy; a higher value does not exclude it, because ferritin rises with inflammation. BSH does not recommend routine ferritin for all women.', refs: [{ guidelineId: B, locator: 'Ferritin (2C, 1D)' }, { guidelineId: FD, locator: 'Stmt 8, 31' }] },
        { text: 'In normocytic or microcytic anaemia with no other obvious cause, a trial of oral iron is itself diagnostic: start without delay and repeat the count in 2–3 weeks.', refs: [{ guidelineId: B, locator: 'Diagnosis (1D)' }, { guidelineId: R, locator: '4.1.1' }] },
        { heading: 'Haemoglobinopathy', text: 'For microcytic anaemia FOGSI advises Hb electrophoresis where available. Where it is not, the Mentzer index (MCV ÷ RBC count) helps: above 13 suggests iron deficiency, below 13 suggests thalassaemia trait. MoHFW: do not keep giving iron to a non-responder until a haemoglobinopathy is excluded.', refs: [{ guidelineId: F, locator: '1.8–1.9' }, { guidelineId: M, locator: '6.1.3' }] },
        { text: 'NICE offers sickle cell and thalassaemia screening at booking. BSH advises measuring ferritin in women with a known haemoglobinopathy before giving iron.', refs: [{ guidelineId: N, locator: '1.2.13' }, { guidelineId: B, locator: 'Ferritin (1D)' }] },
      ],
    },
    {
      id: 'prophylaxis',
      title: 'Prevention: IFA, Folic Acid & Deworming',
      icon: 'drug',
      body: [
        {
          text: 'Prophylactic iron as recommended by each source:',
          refs: [{ guidelineId: M, locator: 's3, p.28' }, { guidelineId: F, locator: '2.2, 2.5' }, { guidelineId: FD, locator: 'Stmt 48' }, { guidelineId: B, locator: 'Prophylaxis (1B)' }],
          table: {
            columns: ['Source', 'Regimen'],
            rows: [
              ['MoHFW (Anemia Mukt Bharat)', '1 IFA tablet (60 mg iron + 500 mcg folic acid) daily for 180 days from the 2nd trimester, then 180 days postpartum'],
              ['FOGSI GCPR', '60–100 mg iron + 500 µg folic acid daily from the first visit; continue 6 months postpartum'],
              ['FOGSI–FIGO Delphi 2025', 'Low-dose daily iron, 30–60 mg elemental; 180 days in pregnancy and 180 days postpartum'],
              ['BSH (UK)', 'No routine iron for all; 40–80 mg daily for non-anaemic women at increased risk (or check ferritin first)'],
            ],
          },
        },
        { text: 'Folic acid 400 mcg daily from before conception through the first trimester; women planning a pregnancy should take folic acid rather than IFA.', refs: [{ guidelineId: M, locator: 's3, p.27' }] },
        { text: 'Deworming: albendazole 400 mg as a single dose after the first trimester, preferably in the second.', refs: [{ guidelineId: M, locator: '5.1' }, { guidelineId: MT, locator: 'p.30' }, { guidelineId: F, locator: '2.9 (2016)' }] },
      ],
    },
    {
      id: 'oral-iron',
      title: 'Treatment: Oral Iron',
      icon: 'drug',
      body: [
        {
          text: 'Treatment doses:',
          refs: [{ guidelineId: M, locator: 'Table 1–2' }, { guidelineId: F, locator: '1.3, 2.4' }, { guidelineId: B, locator: 'Oral iron (2C)' }],
          table: {
            columns: ['Source', 'Dose', 'Review'],
            rows: [
              ['MoHFW', '2 IFA tablets daily (each 60 mg iron + 500 mcg folic acid)', 'Retest after 1 month'],
              ['FOGSI GCPR', '100 mg elemental iron twice daily + 500 µg folic acid (if before 30–32 weeks)', 'Repeat Hb after 4 weeks'],
              ['BSH (UK)', '40–80 mg elemental iron every morning; ferrous salts first choice', 'Hb at 2–3 weeks'],
            ],
          },
        },
        { text: 'How to take it: on an empty stomach (about an hour before a meal) with water or a vitamin C source, away from antacids and multivitamins. Avoid slow-release and enteric-coated forms.', refs: [{ guidelineId: B, locator: 'Oral iron (1A, 1B)' }, { guidelineId: F, locator: '2.5 (2016)' }] },
        { text: 'If nausea or epigastric pain limits adherence, try alternate-day dosing or a lower-dose preparation before switching route.', refs: [{ guidelineId: B, locator: 'Oral iron (1A)' }, { guidelineId: FD, locator: 'Stmt 41' }] },
        { heading: 'Expected response', text: 'A rise should be seen by 2 weeks. MoHFW counts a rise of more than 1 g/dL after a month as improvement and less than 1 g/dL as non-response, needing referral to an FRU or district hospital. The Delphi panel quotes 0.3–1.0 g/dL per week with oral iron.', refs: [{ guidelineId: B, locator: 'Response' }, { guidelineId: M, locator: '4.3–4.4' }, { guidelineId: FD, locator: 'Introduction' }] },
        { text: 'Before calling it non-response, check adherence, folate deficiency and malabsorption.', refs: [{ guidelineId: B, locator: 'Response (1A)' }] },
        { text: 'Once Hb is normal, continue iron to replenish stores: MoHFW 2–3 months; BSH 3 months and until at least 6 weeks postpartum.', refs: [{ guidelineId: M, locator: '4.4' }, { guidelineId: B, locator: 'Duration (1D)' }] },
      ],
    },
    {
      id: 'iv-iron',
      title: 'Treatment: IV Iron',
      icon: 'injection',
      body: [
        {
          text: 'When to use IV iron:',
          refs: [{ guidelineId: F, locator: '2.7–2.8' }, { guidelineId: MT, locator: '2.4, p.39' }, { guidelineId: FQ }, { guidelineId: B, locator: 'IV iron (2B, 1C)' }],
          table: {
            columns: ['Source', 'Indications'],
            rows: [
              ['FOGSI GCPR', 'Mild–moderate anaemia when oral iron is not tolerated or not taken; severe anaemia in a stable woman in the 2nd or early 3rd trimester'],
              ['MoHFW training protocol', 'Moderate anaemia after the 1st trimester or postpartum if oral iron fails (not tolerated, not taken, or rise <1 g/dL in a month); severe anaemia (Hb 5.0–6.9) at 13–34 weeks'],
              ['FOGSI FCM FAQ', 'From the 2nd trimester, especially Hb 5–9.9 g/dL; and postpartum'],
              ['BSH (UK)', 'From the 2nd trimester if oral iron fails or is not tolerated; after 34 weeks with confirmed iron deficiency and Hb <10 g/dL'],
            ],
          },
        },
        { text: 'Not in the first trimester. Other contraindications in the MoHFW protocol: iron overload, previous hypersensitivity to IV iron, anaemia not due to iron deficiency (including thalassaemia, sickle cell and haemolytic anaemia), liver disease and acute heart failure. BSH adds active bacteraemia.', refs: [{ guidelineId: MT, locator: '2.4' }, { guidelineId: FD, locator: 'Stmt 29' }, { guidelineId: B, locator: 'IV iron' }] },
        { text: 'Give it only where resuscitation and anaphylaxis treatment are available, and observe the woman afterwards (MoHFW: 1 hour).', refs: [{ guidelineId: F, locator: '2.9' }, { guidelineId: R, locator: '4.1.2' }, { guidelineId: MT, locator: 'p.43' }] },
        {
          heading: 'Total iron dose',
          text: 'Two versions of the Ganzoni formula appear in Indian sources. Use one consistently and check with the product label.',
          refs: [{ guidelineId: MT, locator: 'p.41' }, { guidelineId: F, locator: '2.7' }],
          table: {
            columns: ['Source', 'Formula', 'Note'],
            rows: [
              ['MoHFW training', 'Weight (kg) × (11 − actual Hb) × 2.4 + 500 mg', 'Use 15 mg/kg instead of 500 if weight <35 kg; e.g. 60 kg, Hb 9.5 → 716 mg'],
              ['FOGSI GCPR', '2.4 × (11 − actual Hb) × pre-pregnancy weight (kg) + 1000 mg', 'Allows 1000 mg for stores'],
            ],
          },
        },
        {
          heading: 'Regimens in the sources',
          text: 'Not reviewed by a pharmacologist; follow the product label and unit protocol.',
          refs: [{ guidelineId: MT, locator: 'pp.39–46' }, { guidelineId: FQ }, { guidelineId: M, locator: 'Table 1' }, { guidelineId: F, locator: '2.10, 2.12' }],
          table: {
            columns: ['Drug', 'Regimen', 'Source'],
            rows: [
              ['Iron sucrose', '200 mg in 100 mL 0.9% saline over 20–30 min; no more than 600 mg (3 doses) a week; course over 2–3 weeks', 'MoHFW training'],
              ['Ferric carboxymaltose', 'Up to 1000 mg in a single infusion', 'FOGSI FAQ'],
              ['Either', 'Moderate anaemia: "iron sucrose 5 doses or FCM 2 doses", as the physician decides by gestation', 'MoHFW AMB'],
            ],
          },
        },
        { text: 'FOGSI GCPR prefers iron sucrose in pregnancy and notes FCM\'s advantage of single-dose (bolus) use postpartum. The Delphi panel did not agree on preferring FCM.', refs: [{ guidelineId: F, locator: '2.10, 2.12' }, { guidelineId: FD, locator: 'Stmt 21 (dropped)' }] },
        { text: 'After IV iron, check Hb at about 4 weeks; investigate if it has risen less than 1 g/dL. After a full calculated dose, oral IFA may not be needed for 3 months. MoHFW reports a rise of about 2.5 g/dL (severe) and 1.6 g/dL (moderate) at 3 weeks after an iron sucrose course.', refs: [{ guidelineId: FQ }, { guidelineId: FD, locator: 'Stmt 47' }, { guidelineId: MT, locator: 'p.40' }] },
      ],
    },
    {
      id: 'severe',
      title: 'Severe Anaemia & Transfusion',
      icon: 'emergency',
      body: [
        {
          text: 'Indian thresholds for admission and transfusion:',
          refs: [{ guidelineId: F, locator: '2.14–2.16' }, { guidelineId: MT, locator: 'p.37' }],
          table: {
            columns: ['Situation', 'FOGSI GCPR', 'MoHFW training protocol'],
            rows: [
              ['Hb <5 g/dL', 'Transfuse at any gestation, with or without failure', 'Admit immediately for transfusion, any gestation'],
              ['Hb 5–6.9, up to 34 weeks', 'Consider transfusion if heart failure is impending', 'IV iron (13–34 weeks)'],
              ['Hb <7, after 34 weeks', 'Transfuse', 'Admit and transfuse (Hb 5–6.9)'],
              ['Labour or postpartum', 'Consider if Hb <7 or unstable with ongoing bleeding', 'Not specified'],
            ],
          },
        },
        { text: 'RCOG: there are no firm criteria for starting a red cell transfusion; it is almost always needed below 6 g/dL and rarely above 10 g/dL. Postnatally, with Hb <7 g/dL and no ongoing bleeding, decide case by case on symptoms and history.', refs: [{ guidelineId: R, locator: '7.2.1, 9–10' }] },
        { text: 'For elective transfusion in a non-bleeding woman, give a single unit and reassess before giving more. Document informed consent.', refs: [{ guidelineId: B, locator: 'Transfusion' }, { guidelineId: R, locator: '10' }] },
        { text: 'Refer to specialist care for Hb <7 g/dL, significant symptoms, gestation beyond 34 weeks, or no response after 2–3 weeks of correctly taken oral iron.', refs: [{ guidelineId: B, locator: 'Referral (2B)' }] },
      ],
    },
    {
      id: 'delivery',
      title: 'Labour & Delivery Planning',
      icon: 'delivery',
      body: [
        { text: 'Iron deficiency anaemia on its own does not change the timing or mode of birth, and is not a reason for induction.', refs: [{ guidelineId: B, locator: 'Delivery (2D)' }] },
        { text: 'Women with Hb <10 g/dL should give birth in an obstetric-led unit, with IV access and a group and save sample in labour, and active management of the third stage.', refs: [{ guidelineId: B, locator: 'Delivery (1D)' }] },
        { text: 'Group and antibody screen at booking and 28 weeks. Crossmatch samples should be less than 3 days old if the woman was pregnant or transfused in the last 3 months.', refs: [{ guidelineId: R, locator: '5.2' }] },
        { text: 'Delayed cord clamping (1–3 minutes, or until pulsation stops) improves the baby\'s iron stores.', refs: [{ guidelineId: M, locator: '5.2' }] },
        { text: 'For women who decline blood, start iron early (IV if needed) and correct deficiency before birth if Hb is below 10.5 g/dL.', refs: [{ guidelineId: R, locator: '11' }] },
      ],
    },
    {
      id: 'postpartum',
      title: 'Postpartum Anaemia',
      icon: 'followup',
      body: [
        { text: 'Check Hb within 48 hours of birth if blood loss exceeded 500 mL, antenatal anaemia was not corrected, or the woman has symptoms.', refs: [{ guidelineId: B, locator: 'Postpartum (2A)' }] },
        { text: 'Stable with Hb <10 g/dL and mild or no symptoms: oral iron for at least 3 months (BSH 40–80 mg daily; MoHFW 2 IFA tablets daily for 3 months). MoHFW retests at 1 month if severe, 2 months if moderate, 3 months if mild.', refs: [{ guidelineId: B, locator: 'Postpartum (2A)' }, { guidelineId: M, locator: 'Table 2' }] },
        { text: 'Moderate to severe postpartum anaemia should be prioritised for IV iron; FCM allows a single bolus dose before discharge.', refs: [{ guidelineId: FD, locator: 'Postpartum' }, { guidelineId: F, locator: '2.11–2.12' }, { guidelineId: MT, locator: 'p.39' }] },
        { text: 'Continue prophylactic IFA for 6 months after delivery.', refs: [{ guidelineId: M, locator: 's3' }, { guidelineId: F, locator: '2.5' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Hb cut-off, third trimester',
      entries: [
        { guidelineId: F, text: '<11 g/dL.', locator: '1.1' },
        { guidelineId: A, text: '<11 g/dL (Hct <33%).' },
        { guidelineId: B, text: '<10.5 g/dL (105 g/L).', locator: 'Diagnosis' },
      ],
    },
    {
      domain: 'Routine screening',
      entries: [
        { guidelineId: F, text: 'First visit (CBC) and every trimester.', locator: '1.2, 2.2' },
        { guidelineId: N, text: 'FBC at booking and 28 weeks.', locator: '1.2.12, 1.2.16' },
        { guidelineId: M, text: 'Every ANC contact, at least 4 times.', locator: 'Table 1' },
      ],
    },
    {
      domain: 'Routine prophylactic iron',
      entries: [
        { guidelineId: F, text: '60–100 mg iron + 500 µg folic acid daily for all.', locator: '2.2' },
        { guidelineId: M, text: '60 mg iron + 500 mcg folic acid daily for 180 days from the 2nd trimester.', locator: 's3' },
        { guidelineId: B, text: 'Not for all; 40–80 mg only for at-risk women.', locator: 'Prophylaxis' },
      ],
    },
    {
      domain: 'Oral treatment dose',
      entries: [
        { guidelineId: F, text: '100 mg elemental iron twice daily.', locator: '2.4' },
        { guidelineId: M, text: 'Two IFA tablets (120 mg iron) daily.', locator: 'Table 1' },
        { guidelineId: B, text: '40–80 mg once daily; alternate days if not tolerated.', locator: 'Oral iron' },
      ],
    },
    {
      domain: 'Transfusion trigger, after 34 weeks',
      entries: [
        { guidelineId: F, text: 'Hb <7 g/dL.', locator: '2.15' },
        { guidelineId: R, text: 'No firm trigger; almost always <6, rarely >10 g/dL.', locator: '7.2.1' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026, all as text extracted from PDFs: FOGSI GCPR on IDA in pregnancy (2016 and 2017 versions), FOGSI–FIGO Delphi consensus 2025, FOGSI FAQ on IV FCM 2025, MoHFW Anemia Mukt Bharat operational guidelines (dated June 2026 in the extract, not confirmed) and the 2019 AMB training module, BSH 2020 UK guideline (via a non-journal copy), RCOG GTG 47 (2015, via an inquiry copy) and NICE NG201. ACOG PB 233 is paywalled; only its cut-offs are cited, through a secondary review. Several MoHFW flowcharts (IV iron versus transfusion by Hb and gestation) were garbled and must be checked visually. The 2024 MoHFW guidance note on IV iron in pregnancy was not found, so no national FCM mg/kg cap, weekly limit or test-dose policy is given. FOGSI GCPR prints the albendazole dose as "40 mg", almost certainly 400 mg. All doses are quoted for clinician and pharmacology review.',
};
