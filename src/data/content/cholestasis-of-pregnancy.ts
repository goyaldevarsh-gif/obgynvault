import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from SMFM Consult Series #53 (2021, reaffirmed 2024) and three NHS guidelines that follow
 * RCOG GTG 43 (2022): NHS BNSSG 2023, a Scottish board guideline 2024, NHS Lanarkshire 2023.
 * RCOG GTG 43 itself and any FOGSI document not read.
 */
const S = 'smfm-cs53';
const B = 'nhs-bnssg-icp-2023';
const SC = 'nhs-scot-icp-2024';
const L = 'nhs-lanark-icp-2023';

export const cholestasisOfPregnancy: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Suspect intrahepatic cholestasis of pregnancy (ICP) in a woman with itching (classically palms and soles) and check non-fasting serum bile acids and transaminases, after excluding other causes such as pre-eclampsia and acute fatty liver. UK practice (following RCOG 2022) diagnoses ICP at bile acids of 19 µmol/L or more and grades it as mild (19–39), moderate (40–99) or severe (100 or more); stillbirth risk rises sharply only at 100 or more. Timing of birth follows the peak bile acid level: around 40 weeks if mild, 38–39 weeks if moderate, 35–36 weeks if severe (SMFM: 36 weeks at 100 or more, 36–39 weeks below). Ursodeoxycholic acid relieves itch but does not prevent stillbirth; SMFM still recommends it first line, UK guidance does not offer it routinely. Recheck LFTs and bile acids 4–6 weeks after birth.',
  keyPoints: [
    { text: 'Diagnosis: non-fasting total bile acids. UK (RCOG-based): 19 µmol/L or more. SMFM: above the laboratory upper limit (often over 10 µmol/L). Exclude other causes; itch with raised ALT but normal bile acids is not ICP.', refs: [{ guidelineId: B, locator: 'pp.1–2' }, { guidelineId: SC }, { guidelineId: S, locator: 'B2' }] },
    { text: 'Severity and stillbirth risk: mild 19–39 µmol/L (0.13%), moderate 40–99 (0.28%), severe 100 or more (3.44%; HR 30.5).', refs: [{ guidelineId: B, locator: 'p.3' }, { guidelineId: SC }, { guidelineId: S, locator: 'B3' }] },
    { text: 'Timing of birth (UK): mild by 40 weeks, moderate 38–39 weeks, severe 35–36 weeks. SMFM: 100 or more, deliver at 36+0; below 100, 36+0 to 39+0 weeks (40 or more towards the earlier end).', refs: [{ guidelineId: B, locator: 'p.3' }, { guidelineId: SC }, { guidelineId: S, locator: '#4–5 (1B, 1C)' }] },
    { text: 'Ursodeoxycholic acid relieves itch but does not reduce stillbirth. SMFM: first line, 10–15 mg/kg/day in 2–3 doses (max 21 mg/kg/day). UK: not routine; may be considered when bile acids are over 40 µmol/L.', refs: [{ guidelineId: S, locator: '#2 (1A), B4' }, { guidelineId: B, locator: 'p.4' }, { guidelineId: SC }] },
    { text: 'Do not deliver before 37 weeks without laboratory confirmation; give antenatal steroids if birth is planned before 37 weeks.', refs: [{ guidelineId: S, locator: '#6–7 (1A, 1B)' }] },
    { text: 'Continuous CTG in labour if peak bile acids are 100 µmol/L or more. ICP alone is not an indication for caesarean.', refs: [{ guidelineId: B, locator: 'p.4' }, { guidelineId: SC }, { guidelineId: L }] },
    { text: 'After birth: recheck LFTs and bile acids at 4–6 weeks; if still abnormal, consider other diagnoses or hepatology referral. Recurrence is common (SMFM: up to 90%).', refs: [{ guidelineId: B, locator: 'p.4' }, { guidelineId: S, locator: 'B5, B7' }] },
  ],
  sections: [
    {
      id: 'stepwise',
      title: 'Step-by-step Management',
      icon: 'management',
      body: [
        {
          text: 'Pathway by peak bile acid level (UK practice following RCOG 2022; SMFM differences noted).',
          refs: [{ guidelineId: B }, { guidelineId: SC }, { guidelineId: S }],
          flow: {
            caption: 'Intrahepatic cholestasis of pregnancy',
            steps: [
              { title: 'Itch in pregnancy', text: 'Non-fasting bile acids + LFTs. Exclude pre-eclampsia, acute fatty liver, gallstones, hepatitis, drugs, skin disease. Normal results with ongoing itch: repeat weekly.' },
              { title: 'Peak bile acids (µmol/L):', tone: 'decision', branches: [
                { when: 'Mild 19–39', then: 'Plan birth by 40 weeks; weekly bile acids from about 35–38 weeks' },
                { when: 'Moderate 40–99', then: 'Plan birth at 38–39 weeks; consider UDCA (UK)' },
                { when: 'Severe 100 or more', then: 'Plan birth at 35–36 weeks (SMFM 36+0); steroids if before 37; continuous CTG in labour' },
              ] },
              { title: 'Adjust earlier for', text: 'GDM, pre-eclampsia, multiple pregnancy (UK); SMFM considers 34–36 weeks at 100 or more with unremitting itch, previous ICP stillbirth before 36 weeks, or worsening liver disease.', tone: 'urgent' },
              { title: 'Postnatal', text: 'Recheck LFTs and bile acids at 4–6 weeks; hepatology if still abnormal.' },
            ],
          },
        },
      ],
    },
    {
      id: 'drugs',
      title: 'Drug Treatment',
      icon: 'drug',
      body: [
        { heading: 'Ursodeoxycholic acid', text: 'SMFM: first line for maternal symptoms, start 10–15 mg/kg/day in 2–3 divided doses, titrate up to 21 mg/kg/day; perinatal benefit not shown (PITCHES). UK: do not routinely offer to reduce adverse perinatal outcomes; may reduce late preterm birth when bile acids are over 40 µmol/L. UK doses differ: 8–12 mg/kg in 2–3 doses (BNSSG); start 8–9 mg/kg, max 16 mg/kg (Lanarkshire). Stop after birth.', refs: [{ guidelineId: S, locator: '#2, B4' }, { guidelineId: SC }, { guidelineId: B, locator: 'p.4' }, { guidelineId: L }] },
        { heading: 'Itch relief', text: 'Chlorphenamine 4 mg three times daily or promethazine 25 mg at night; menthol 1% in aqueous cream (Lanarkshire).', refs: [{ guidelineId: L }] },
        { heading: 'Other drugs', text: 'SMFM: rifampin as an add-on to UDCA in refractory cases (no dose given); cholestyramine has limited effect; SAMe less effective than UDCA.', refs: [{ guidelineId: S, locator: 'B4' }] },
        { heading: 'Vitamin K', text: 'Only with fat malabsorption (steatorrhoea) or abnormal prothrombin time: oral 10 mg once daily. Routine coagulation testing is not recommended.', refs: [{ guidelineId: B, locator: 'p.4' }, { guidelineId: SC }] },
      ],
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Timing of Birth',
      icon: 'delivery',
      body: [
        {
          text: 'Timing of birth by peak bile acids.',
          refs: [{ guidelineId: B, locator: 'p.3' }, { guidelineId: SC }, { guidelineId: L }, { guidelineId: S, locator: '#4–5' }],
          table: {
            columns: ['Peak bile acids', 'UK (RCOG-based)', 'SMFM'],
            rows: [
              ['19–39 µmol/L (mild)', 'By 40 weeks', '36+0–39+0, towards the later end'],
              ['40–99 µmol/L (moderate)', '38–39 weeks', '36+0–39+0, consider earlier'],
              ['100 µmol/L or more (severe)', '35–36 weeks', 'Offer at 36+0; 34–36 with added risk'],
            ],
          },
        },
        { heading: 'Blood tests', text: 'UK: repeat bile acids about a week after the first result; weekly bile acids from 35–40 weeks if mild, from 32–38 weeks if moderate (Scottish guideline). SMFM: routine weekly bile acids not recommended, though follow-up can help timing in severe cases.', refs: [{ guidelineId: SC }, { guidelineId: B }, { guidelineId: S, locator: 'B4–B5' }] },
        { heading: 'Fetal monitoring', text: 'SMFM: start antenatal surveillance when an abnormal result would lead to delivery (efficacy unknown; 2C). UK: CTG and scans are not advised to prevent stillbirth.', refs: [{ guidelineId: S, locator: '#3' }, { guidelineId: L }] },
        { heading: 'Twins', text: 'Higher stillbirth risk; refer to the multiple pregnancy clinic.', refs: [{ guidelineId: L }] },
      ],
    },
    {
      id: 'after',
      title: 'After Birth, Recurrence & Contraception',
      icon: 'followup',
      body: [
        { text: 'Itch usually resolves within days. Recheck LFTs and bile acids at 4 weeks or more; if still abnormal beyond 6 weeks, consider other diagnoses or hepatology referral.', refs: [{ guidelineId: B, locator: 'p.4' }, { guidelineId: SC }] },
        { text: 'Recurrence: SMFM up to 90%; check baseline LFTs and bile acids at booking in the next pregnancy. Later hepatobiliary disease is more common (SMFM: hepatitis C and cirrhosis associations; some advise hepatitis C testing).', refs: [{ guidelineId: S, locator: 'B7' }, { guidelineId: B, locator: 'p.5' }] },
        { text: 'Contraception: progestogen-only and non-hormonal methods unrestricted; combined hormonal methods once symptoms and tests have resolved, unless there was previous cholestasis on contraception (UKMEC 2 for COC).', refs: [{ guidelineId: B, locator: 'p.5' }, { guidelineId: L }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Diagnostic bile acid threshold',
      entries: [
        { guidelineId: S, text: 'Above lab upper limit; often over 10 µmol/L.', locator: 'B2' },
        { guidelineId: B, text: '19 µmol/L or more (non-fasting).', locator: 'p.1' },
      ],
    },
    {
      domain: 'Ursodeoxycholic acid',
      entries: [
        { guidelineId: S, text: 'First line for symptoms (1A).', locator: '#2' },
        { guidelineId: SC, text: 'Not routine; may help if over 40 µmol/L at 34–36 weeks.' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. RCOG GTG 43 (2022) itself could not be read; UK positions come from NHS BNSSG (2023), a Scottish board guideline (2024) and NHS Lanarkshire (2023), which cite it. SMFM #53 was read from its society page and a third-party copy with extraction errors (units shown as mmol/L; corrected to µmol/L). Lanarkshire gives different stillbirth figures for moderate ICP (0.72%); the 0.28% figure used here is from BNSSG and the Scottish guideline. No FOGSI or Indian guidance was found; ACOG, AAFP and EASL not read. Rifampicin dose not given by any source.',
};
