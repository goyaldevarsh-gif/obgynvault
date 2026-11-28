import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from FOGSI Focus APH (2010), FOGSI–ICOG GCPR placenta previa/PAS (2024), RCOG GTG 27a and 27b (2018),
 * NHS GG&C APH 1036 (2026) and Frimley Health APH (2023) (both based on RCOG GTG 63), AAFP 2025 (abstract + SORT).
 * RCOG GTG 63 itself not read; FOGSI abruption chapter cut off.
 */
const FF = 'fogsi-focus-aph-2010';
const FP = 'fogsi-pas-gcpr';
const R27a = 'rcog-gtg-27a';
const R27b = 'rcog-gtg-27b';
const GG = 'nhs-ggc-aph-1036';
const FR = 'frimley-aph-2023';
const AF = 'aafp-lpb-2025';

export const antepartumHaemorrhage: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'APH is bleeding from the genital tract from 24+0 weeks until birth. Resuscitate the mother first, quantify loss (spotting, minor under 50 mL, major 50–1000 mL, massive over 1000 mL or shock), and never do a digital vaginal examination until placenta praevia is excluded on scan. Take FBC and group and save (crossmatch for major or massive bleeds), Kleihauer and anti-D for Rh-negative women, CTG from 26 weeks, steroids if preterm birth is likely and MgSO4 for neuroprotection when delivery is imminent at early gestations. Deliver immediately if the mother or fetus is compromised. Plan delivery of uncomplicated praevia at 36+0–37+0 weeks (RCOG; FOGSI 2010: at 37 completed weeks), earlier (34+0–36+6) after bleeding; vasa praevia by caesarean at 34–36 weeks.',
  keyPoints: [
    { text: 'Classify blood loss: spotting; minor under 50 mL that has settled; major 50–1000 mL without shock; massive over 1000 mL and/or clinical shock.', refs: [{ guidelineId: GG }, { guidelineId: FR }] },
    { text: 'No digital vaginal examination until the placental site is known; scan first, then speculum.', refs: [{ guidelineId: GG }, { guidelineId: FR }, { guidelineId: FF, locator: 'Placenta praevia' }, { guidelineId: AF, locator: 'SORT (C)' }] },
    { text: 'Mother first: resuscitate, then decide on delivery. Deliver immediately by caesarean if there is maternal or fetal compromise.', refs: [{ guidelineId: FR }, { guidelineId: GG }] },
    { text: 'Rh-negative women who bleed: Kleihauer and anti-D. FOGSI 2024: 300 µg (standard dose if Kleihauer unavailable).', refs: [{ guidelineId: FP, locator: 'p.5 (Grade D)' }, { guidelineId: GG }, { guidelineId: AF, locator: 'SORT (C)' }] },
    { text: 'Placenta praevia: uncomplicated, deliver at 36+0–37+0 weeks; previous bleeding or other preterm risk, consider 34+0–36+6 weeks (RCOG). FOGSI 2010: planned caesarean at 37 completed weeks.', refs: [{ guidelineId: R27a, locator: '§4.8 (C)' }, { guidelineId: FF, locator: 'Placenta praevia' }] },
    { text: 'Tocolysis in praevia only for up to 48 h to allow steroids; not to prolong pregnancy when delivery is indicated.', refs: [{ guidelineId: R27a, locator: '§4.7 (C)' }] },
    { text: 'Vasa praevia: consider admission from 30–32 weeks, steroids from 32 weeks, planned caesarean at 34–36 weeks; if membranes rupture or labour starts, caesarean without delay.', refs: [{ guidelineId: R27b }] },
  ],
  sections: [
    {
      id: 'first-response',
      title: 'APH: First Response',
      icon: 'emergency',
      body: [
        {
          text: 'Initial pathway (NHS guidelines based on RCOG GTG 63).',
          refs: [{ guidelineId: GG }, { guidelineId: FR }],
          flow: {
            caption: 'Antepartum haemorrhage: first response',
            steps: [
              { title: 'Assess mother first; estimate blood loss', text: 'Weigh pads. Spotting / minor (under 50 mL) / major (50–1000 mL) / massive (over 1000 mL or shock).' },
              { title: 'Major or massive', text: 'Two 16G cannulae, high-flow oxygen, left lateral tilt; FBC, coagulation, fibrinogen, U&E, LFTs, crossmatch 4 units; O-negative or group-specific blood if needed; think DIC.', tone: 'urgent' },
              { title: 'Scan for placental site before any digital VE', text: 'Speculum examination. CTG from 26 weeks.' },
              { title: 'Maternal or fetal compromise?', tone: 'decision', branches: [
                { when: 'Yes', then: 'Deliver now, usually caesarean with consultant present' },
                { when: 'No, preterm', then: 'Admit; steroids; MgSO4 if under 30+0 and delivery imminent; anti-D if Rh-negative' },
                { when: 'No, 37 weeks or more', then: 'Consider expediting delivery' },
              ] },
            ],
          },
        },
        { heading: 'Investigations', text: 'Minor: FBC, group and save, Kleihauer if Rh-negative. Major: add coagulation screen and crossmatch 4 units. Massive: crossmatch 4 units, clotting, U&E, LFTs, Kleihauer if Rh-negative.', refs: [{ guidelineId: FR }, { guidelineId: GG }] },
        { heading: 'Fluids', text: 'GG&C: crystalloid up to 2 L, colloid up to 1.5 L. Frimley: 2 L Plasma-Lyte plus 1–2 L colloid; transfuse early (O-negative or group-specific, cell salvage).', refs: [{ guidelineId: GG }, { guidelineId: FR }] },
        { heading: 'Who stays in', text: 'Anything heavier than spotting, or ongoing bleeding, stays in hospital. Spotting that has stopped, with praevia excluded, can go home. After a major bleed, discharge is a consultant decision once bleeding has stopped and observations are normal for at least 24 hours.', refs: [{ guidelineId: GG }, { guidelineId: FR }] },
        { heading: 'Steroids & MgSO4', text: 'Steroids if preterm birth is expected (Frimley: 24–34+6 weeks, consider 22+3–23+6; AAFP: 24–34 weeks); do not delay emergency delivery for them. MgSO4 for fetal neuroprotection under 30+0 weeks (GG&C), without delaying delivery if the mother is compromised.', refs: [{ guidelineId: FR }, { guidelineId: AF, locator: 'SORT (A)' }, { guidelineId: GG }] },
        { heading: 'After birth', text: 'Active management of the third stage; anticipate PPH.', refs: [{ guidelineId: FR }] },
      ],
    },
    {
      id: 'praevia',
      title: 'Placenta Praevia',
      icon: 'management',
      body: [
        { heading: 'Diagnosis', text: 'Screen for placenta previa at the 18–22 week scan; do not diagnose before 18–20 weeks. Follow-up scan including TVS at 32 weeks; if still low-lying and asymptomatic, repeat TVS at about 36 weeks to plan mode of delivery. Low-lying: edge under 20 mm from the os.', refs: [{ guidelineId: FP, locator: 'pp.3–4' }, { guidelineId: R27a, locator: '§4.2–4.3 (D)' }] },
        { heading: 'Where', text: 'RCOG and FOGSI 2024: individualise admission. FOGSI 2010: major praevia with any bleeding admitted from 34 weeks; outpatient care reasonable in selected women after a first bleed. AAFP: no routine bed rest.', refs: [{ guidelineId: R27a, locator: '§4.4' }, { guidelineId: FP, locator: 'p.5' }, { guidelineId: FF }, { guidelineId: AF, locator: 'SORT (C)' }] },
        { heading: 'Steroids & tocolysis', text: 'RCOG: a single course of steroids at 34+0–35+6 weeks (earlier if higher risk of preterm birth). Tocolysis may be considered for 48 h to allow steroids. A short cervix before 34 weeks raises the risk of preterm emergency delivery. Cerclage only in a trial.', refs: [{ guidelineId: R27a, locator: '§4.3, 4.5–4.7' }, { guidelineId: FP, locator: 'p.5 (GPP)' }] },
        { heading: 'Optimise', text: 'Correct anaemia to keep Hb above 11 g/dL. Liaise with the transfusion lab; rapid infusers and fluid warmers available. FOGSI 2010: crossmatch at least 4 units, available in theatre. Regional anaesthesia is not contraindicated; cell salvage if blood is declined.', refs: [{ guidelineId: FP, locator: 'pp.5–6' }, { guidelineId: R27a, locator: '§6.3' }, { guidelineId: FF }] },
        {
          text: 'Timing of delivery.',
          refs: [{ guidelineId: R27a, locator: '§4.8, 7.4' }, { guidelineId: FF }, { guidelineId: FP, locator: 'pp.6, 8–9' }],
          table: {
            columns: ['Situation', 'Timing'],
            rows: [
              ['Uncomplicated praevia', 'RCOG: 36+0–37+0 weeks. FOGSI 2010: caesarean at 37 completed weeks'],
              ['Previous bleeding or other preterm risk', 'RCOG: consider 34+0–36+6 weeks'],
              ['Heavy or uncontrolled bleeding, non-reassuring fetal status, maternal instability', 'Deliver now (FOGSI 2024, Grade C)'],
              ['Placenta accreta spectrum', '35+0–36+6 weeks with a dedicated team (see PAS topic)'],
            ],
          },
        },
        { heading: 'Mode', text: 'RCOG: no fixed mm cut-off; decide on clinical background and her wishes (vaginal birth succeeds in 56–93% with the edge 10–20 mm from the os). FOGSI 2010: edge under 2 cm usually means caesarean; vaginal birth only for minor praevia with the head engaged.', refs: [{ guidelineId: R27a, locator: '§4.9 (D)' }, { guidelineId: FF }] },
      ],
    },
    {
      id: 'abruption',
      title: 'Placental Abruption',
      icon: 'emergency',
      body: [
        { text: 'Suspected abruption with a live fetus: emergency caesarean with senior staff. With fetal death, consider vaginal birth if the mother is stable. (Frimley flowchart; reading of the chart, to verify.)', refs: [{ guidelineId: FR }] },
        { text: 'Consider DIC: coagulation screen, fibrinogen and early haematology input. Kleihauer for Rh-negative women.', refs: [{ guidelineId: GG }, { guidelineId: FF }] },
        { text: 'After abruption or unexplained APH: consultant-led care with serial growth scans.', refs: [{ guidelineId: GG }] },
      ],
    },
    {
      id: 'vasa',
      title: 'Vasa Praevia',
      icon: 'delivery',
      body: [
        { text: 'No universal screening; targeted mid-pregnancy screening in higher-risk pregnancies. Combined transabdominal and transvaginal colour Doppler; confirm persistence in the third trimester (follow-up scan at 32 weeks suggested).', refs: [{ guidelineId: R27b, locator: 'D, GPP' }] },
        { text: 'Prophylactic admission from 30–32 weeks is individual. Steroids from 32 weeks. Planned caesarean before labour at 34–36 weeks.', refs: [{ guidelineId: R27b, locator: 'GPP, D' }] },
        { text: 'Rupture of membranes or labour at a viable gestation: caesarean without delay; do not delay to confirm the diagnosis. Have neonatal resuscitation including transfusion ready.', refs: [{ guidelineId: R27b, locator: 'D, B, GPP' }] },
        { text: 'FOGSI 2010: if fetal distress or death follows a minor bleed, test the blood for fetal origin (Kleihauer on the discharged blood). RCOG notes bedside tests are often not timely.', refs: [{ guidelineId: FF }, { guidelineId: R27b }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Delivery of uncomplicated praevia',
      entries: [
        { guidelineId: FF, text: 'Planned caesarean at 37 completed weeks.' },
        { guidelineId: R27a, text: '36+0 to 37+0 weeks.', locator: '§4.8' },
        { guidelineId: FP, text: 'No week given; deliver for heavy bleeding, fetal or maternal compromise.', locator: 'p.6' },
      ],
    },
    {
      domain: 'Steroids',
      entries: [
        { guidelineId: R27a, text: 'Praevia: one course at 34+0–35+6 (earlier if at risk).', locator: '§4.6' },
        { guidelineId: AF, text: 'Late pregnancy bleeding: 24–34 weeks.' },
        { guidelineId: R27b, text: 'Vasa praevia: from 32 weeks.' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026 through a summarising fetch tool. RCOG GTG 63 (APH, 2011) itself was not read; its content comes via NHS GG&C 1036 and Frimley Health guidelines. The FOGSI Focus 2010 is an educational monograph, not a GCPR, and its abruption chapter was cut off. RCOG 27b was read from a pre-publication copy. AAFP 2025 full text is paywalled. No source gave an anti-D dose except FOGSI 2024 (300 µg), and none covered tocolysis in abruption. No MoHFW or WHO source was read.',
};
