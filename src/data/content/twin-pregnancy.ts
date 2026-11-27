import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from:
 *  - FOGSI–ICOG GCPR Multifetal Pregnancy Management (~2024) -> fogsi-twins-gcpr
 *  - NICE NG137 Twin and triplet pregnancy (2019/2024)       -> nice-ng137
 *  - ISUOG Practice Guidelines: twin pregnancy (2025)        -> isuog-twins-2025
 *  - ACOG PB 234 preterm birth via AAFP 2022                 -> acog-pb234-aafp
 *  RCOG GTG 51, ACOG PB 231 and FIGO 2019 could not be read.
 */
const F = 'fogsi-twins-gcpr';
const N = 'nice-ng137';
const I = 'isuog-twins-2025';
const A = 'acog-pb234-aafp';

export const twinPregnancy: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Management of a twin pregnancy hinges on chorionicity, which must be determined on the first-trimester scan (before 13+6 weeks) together with amnionicity; if unsure, manage as monochorionic. Date from the larger twin. Dichorionic twins are scanned about every 4 weeks from 20 weeks; monochorionic twins every 2 weeks from 16 weeks to detect twin-to-twin transfusion (TTTS), selective growth restriction and, per ISUOG, TAPS. Offer low-dose aspirin where risk factors exist, screen for anaemia, and avoid routine bed rest, cerclage, pessary, oral tocolytics or IM progesterone; NICE now offers vaginal progesterone if the cervix is 25 mm or less. Plan birth at 37 weeks for uncomplicated DCDA, 36 weeks for MCDA and 32–34 weeks by caesarean for MCMA. Vaginal birth is reasonable when the first twin is cephalic; offer caesarean if it is not. Labour needs continuous monitoring of both twins.',
  keyPoints: [
    { text: 'Determine chorionicity and amnionicity at the first-trimester scan (before 13+6 weeks) using placental masses, membrane and lambda/T sign; if uncertain, get a second opinion and manage as monochorionic.', refs: [{ guidelineId: F, locator: 'p.4' }, { guidelineId: N, locator: '1.1.1–1.1.7' }, { guidelineId: I, locator: 'Chorionicity' }] },
    { text: 'Date the pregnancy from the larger crown–rump length (CRL 45–84 mm); IVF pregnancies from the embryo transfer date.', refs: [{ guidelineId: N, locator: '1.1.2' }, { guidelineId: F, locator: 'p.4' }, { guidelineId: I, locator: 'Dating' }] },
    { text: 'Scans: DCDA at 20, 24, 28, 32, 36 weeks (about 4-weekly). Monochorionic: every 2 weeks from 16 weeks, with deepest pool of each sac at every scan to detect TTTS.', refs: [{ guidelineId: N, locator: '1.3.7–1.3.8, 1.4.25' }, { guidelineId: I, locator: 'Routine monitoring' }] },
    { text: 'Refer MC twins to fetal medicine if deepest vertical pocket is under 2 cm in one sac and over 8 cm (before 20 weeks) or over 10 cm (from 20 weeks) in the other; growth discordance of 25% or more with one twin below the 10th centile.', refs: [{ guidelineId: N, locator: '1.4.23, 1.4.28' }, { guidelineId: I, locator: 'TTTS, sFGR' }] },
    { text: 'Preterm birth prevention: do not routinely use bed rest, cerclage, Arabin pessary, oral tocolytics or IM progesterone. NICE (2024): one cervical length scan at 16–20 weeks and vaginal progesterone 200 mg nightly to 34 weeks if 25 mm or less.', refs: [{ guidelineId: N, locator: '1.5.2–1.5.6' }, { guidelineId: F, locator: 'p.8' }] },
    { text: 'Offer targeted (not routine) antenatal corticosteroids; low-dose aspirin from 12 weeks where risk factors exist; full blood count at 20–24 and 28 weeks.', refs: [{ guidelineId: N, locator: '1.5.7–1.5.8, 1.6.2, 1.2.4' }, { guidelineId: F, locator: 'p.4, p.8' }] },
    { text: 'Timing of planned birth: uncomplicated DCDA 37 weeks; MCDA 36 weeks (after considering steroids); MCMA 32+0–33+6 weeks by caesarean.', refs: [{ guidelineId: N, locator: '1.9.9–1.9.10' }, { guidelineId: F, locator: 'p.9' }, { guidelineId: I, locator: 'Timing' }] },
    { text: 'Mode: vaginal birth is reasonable if the first twin is cephalic (uncomplicated, over 32 weeks, no major discordance); offer caesarean if the first twin is not cephalic, and for monoamniotic twins.', refs: [{ guidelineId: N, locator: '1.10.1–1.10.6' }, { guidelineId: F, locator: 'p.9–11' }] },
    { text: 'Labour: continuous CTG of both twins (over 26 weeks), bedside ultrasound at the start, epidural offered, active management of the third stage. If twin 2 has an abnormal CTG and vaginal birth is not possible within 20 minutes, discuss caesarean.', refs: [{ guidelineId: N, locator: '1.11.3–1.11.20, 1.12.2' }, { guidelineId: F, locator: 'p.11–12 (Grade A)' }] },
  ],
  sections: [
    {
      id: 'first-trimester',
      title: 'First Trimester: Chorionicity & Dating',
      icon: 'diagnosis',
      body: [
        { text: 'Determine chorionicity before 13+6 weeks from the number of placental masses, membrane thickness and the lambda or T sign, and amnionicity at the same scan. Keep an image in the records.', refs: [{ guidelineId: F, locator: 'p.4' }, { guidelineId: N, locator: '1.1.1, 1.1.3' }, { guidelineId: I, locator: 'Chorionicity (Grade D, GPP)' }] },
        { text: 'If chorionicity cannot be determined: transvaginal scan, then a tertiary second opinion; if still unclear, manage as monochorionic. Do not use 3D ultrasound to determine chorionicity.', refs: [{ guidelineId: N, locator: '1.1.7, 1.1.11–1.1.12' }, { guidelineId: I }] },
        { text: 'Date when CRL is 45–84 mm using the larger twin (to avoid dating from a twin with early growth pathology); after 14 weeks use the larger head circumference.', refs: [{ guidelineId: N, locator: '1.1.2' }, { guidelineId: F, locator: 'p.4' }, { guidelineId: I, locator: 'Dating (Grade C–D)' }] },
        { text: 'Label the twins with a reliable, consistent strategy. Refer MCMA twins to a tertiary centre.', refs: [{ guidelineId: I, locator: 'GPP' }] },
      ],
    },
    {
      id: 'antenatal',
      title: 'Antenatal Care Plan',
      icon: 'management',
      body: [
        { heading: 'Team and visits', text: 'Care by a multidisciplinary specialist team. NICE: DCDA at least 8 appointments (2 with the specialist obstetrician); MCDA at least 11; MCMA individualised by a tertiary consultant.', refs: [{ guidelineId: N, locator: '1.3.6–1.3.11' }] },
        {
          text: 'NICE scan schedule:',
          refs: [{ guidelineId: N, locator: '1.3.7–1.3.8' }, { guidelineId: I, locator: 'Routine monitoring' }],
          table: {
            columns: ['Type', 'Scans'],
            rows: [
              ['DCDA', 'CRL 45–84 mm, then 20, 24, 28, 32 and 36 weeks (ISUOG: anomaly scan ~20 weeks, then every 4 weeks)'],
              ['MCDA', 'CRL 45–84 mm, then every 2 weeks from 16 to 34 weeks'],
              ['MCMA', 'Individualised, tertiary care'],
            ],
          },
        },
        { heading: 'Growth', text: 'Do not use palpation or symphysis–fundal height. Assess discordance with 2 or more biometric parameters and fluid: DC from 24 weeks at intervals of no more than 28 days; MC from 16 weeks at no more than 14 days. At least weekly scans with umbilical artery Doppler if discordance is 20% or more and/or one EFW is below the 10th centile; refer to tertiary care at 25% or more with EFW below the 10th centile.', refs: [{ guidelineId: N, locator: '1.4.17–1.4.23, 1.4.30–1.4.36' }] },
        { heading: 'Anaemia', text: 'Higher incidence in twins. NICE: full blood count at 20–24 weeks and again at 28 weeks. FOGSI: at the first visit, 20–24, 28–32 and 34–36 weeks.', refs: [{ guidelineId: N, locator: '1.2.3–1.2.4' }, { guidelineId: F, locator: 'p.4' }] },
        { heading: 'Preeclampsia', text: 'BP and urine protein at every visit. NICE: low-dose aspirin from 12 weeks until birth if 2 or more risk factors (per the hypertension guideline). FOGSI: 75–150 mg aspirin daily from 12 weeks in women with a high gestosis score.', refs: [{ guidelineId: N, locator: '1.6.1–1.6.2' }, { guidelineId: F, locator: 'p.8' }] },
        { heading: 'Cardiac scan', text: 'FOGSI: detailed fetal cardiac assessment in all monochorionic twins; anomaly scan at about 20–22 weeks.', refs: [{ guidelineId: F, locator: 'p.6–7' }] },
      ],
    },
    {
      id: 'mc-complications',
      title: 'Monochorionic Complications',
      icon: 'fetus',
      body: [
        { heading: 'TTTS', text: 'Scan every 2 weeks from 16 weeks until birth, measuring the deepest vertical pocket in each sac. Weekly if the difference is 4 cm or more. Refer if under 2 cm in one sac and over 8 cm (before 20+0 weeks) or over 10 cm (from 20+0 weeks) in the other.', refs: [{ guidelineId: N, locator: '1.4.25–1.4.29' }, { guidelineId: I, locator: 'TTTS' }] },
        { text: 'ISUOG: stage with Quintero; laser ablation for stages II–IV (Grade A).', refs: [{ guidelineId: I, locator: 'TTTS' }] },
        { heading: 'TAPS', text: 'ISUOG: record MCA-PSV from 20 weeks in all MC twins to screen for TAPS (donor ≥1.5 MoM and recipient ≤0.8 MoM, or delta ≥1.0 MoM). NICE does not recommend routine screening: weekly MCA-PSV from 16 weeks only after treated TTTS or with sFGR, and seek advice immediately if advanced TAPS is suspected. FOGSI: refer suspected TAPS to tertiary care.', refs: [{ guidelineId: I, locator: 'TAPS' }, { guidelineId: N, locator: '1.4.37–1.4.38' }, { guidelineId: F, locator: 'p.8' }] },
        { heading: 'Selective FGR', text: 'One twin below the 10th centile with discordance of 25% or more (ISUOG; 20% acceptable). Classify by umbilical artery end-diastolic flow (Gratacós I–III) and refer to fetal medicine.', refs: [{ guidelineId: I, locator: 'sFGR' }, { guidelineId: F, locator: 'p.7, 12.2' }] },
        { heading: 'Single twin death (MC)', text: 'ISUOG: plan delivery at 34–36 weeks.', refs: [{ guidelineId: I, locator: 'Timing' }] },
      ],
    },
    {
      id: 'preterm',
      title: 'Preterm Birth Prevention',
      icon: 'prevention',
      body: [
        { text: 'About 60% of twins are born spontaneously before 37 weeks. Do not use fetal fibronectin alone or home uterine activity monitoring to predict preterm birth.', refs: [{ guidelineId: N, locator: '1.9.1, 1.4.14–1.4.15' }] },
        { text: 'Do not routinely offer bed rest, cervical cerclage, Arabin pessary or oral tocolytics, alone or combined. Do not offer IM progesterone.', refs: [{ guidelineId: N, locator: '1.5.5–1.5.6' }, { guidelineId: F, locator: 'p.8' }, { guidelineId: A }] },
        { heading: 'Short cervix', text: 'NICE (2024): single transvaginal cervical length scan at 16–20 weeks; if 25 mm or less, offer vaginal progesterone 200 mg at night until 34 weeks (off label). ISUOG: progesterone may be considered at 25 mm or less (Grade C); cerclage may be considered at 15 mm or less before 24 weeks. ACOG (PB 234): vaginal progesterone does not appear to reduce risk in multiples; cerclage may help below 15 mm.', refs: [{ guidelineId: N, locator: '1.5.2–1.5.3' }, { guidelineId: I, locator: 'Cervical length' }, { guidelineId: A }] },
        { heading: 'Steroids', text: 'Offer targeted corticosteroids when preterm birth is likely; do not give routine (untargeted) courses.', refs: [{ guidelineId: N, locator: '1.5.7–1.5.8' }, { guidelineId: F, locator: 'p.8' }] },
      ],
    },
    {
      id: 'timing',
      title: 'Timing & Mode of Birth',
      icon: 'delivery',
      body: [
        {
          text: 'Planned birth for uncomplicated twins:',
          refs: [{ guidelineId: N, locator: '1.9.9–1.9.10' }, { guidelineId: F, locator: 'p.9, p.12' }, { guidelineId: I, locator: 'Timing' }],
          table: {
            columns: ['Type', 'NICE', 'FOGSI', 'ISUOG'],
            rows: [
              ['DCDA', '37 weeks', 'After 37 completed weeks', '37+0 to 37+6'],
              ['MCDA', '36 weeks (after steroids considered)', 'Beyond 36 completed weeks', '36+0 to 36+6'],
              ['MCMA', '32+0 to 33+6 weeks', '32–34 weeks, by caesarean (document inconsistent)', 'Not stated'],
            ],
          },
        },
        { text: 'NICE: fetal death risk rises beyond 37+6 (DCDA), 36+6 (MCDA) and 33+6 (MCMA) weeks. If planned birth is declined, weekly specialist review with scan, fluid and umbilical artery Doppler, plus 2-weekly growth scans.', refs: [{ guidelineId: N, locator: '1.9.4–1.9.6, 1.9.12' }] },
        { heading: 'Mode', text: 'Planned vaginal birth and planned caesarean are both safe if uncomplicated, over 32 weeks, first twin cephalic and no significant size discordance; over a third of planned vaginal births end in caesarean. Offer caesarean if the first twin is not cephalic, and for MCMA twins.', refs: [{ guidelineId: N, locator: '1.10.1–1.10.6' }, { guidelineId: F, locator: 'p.9–11' }] },
        { text: 'FOGSI: elective caesarean if under 28 weeks or the second twin is under 1500 g; with cephalic/non-cephalic twins, trial of labour with breech extraction of twin 2 is an option.', refs: [{ guidelineId: F, locator: 'p.10–11 (D1–D3)' }] },
      ],
    },
    {
      id: 'intrapartum',
      title: 'Intrapartum Management',
      icon: 'management',
      body: [
        { text: 'Continuous CTG of both twins in established labour over 26 weeks; do not use intermittent auscultation. Portable ultrasound at the start of labour to confirm presentation. Fetal scalp electrode on twin 1 only after 34 weeks.', refs: [{ guidelineId: N, locator: '1.11.3–1.11.14' }, { guidelineId: F, locator: 'p.11 (Grade A)' }] },
        { text: 'Offer an epidural.', refs: [{ guidelineId: N, locator: '1.12.2' }] },
        { heading: 'Second twin', text: 'After twin 1, confirm the lie of twin 2; FOGSI: ECV or internal podalic version if breech or transverse. NICE: if twin 2\'s CTG is suspicious or pathological and vaginal birth cannot be achieved within 20 minutes, discuss caesarean. No source read gives a fixed maximum inter-twin interval.', refs: [{ guidelineId: F, locator: 'p.11–12' }, { guidelineId: N, locator: '1.11.19–1.11.20' }] },
        { heading: 'Third stage', text: 'Active management of the third stage (higher PPH risk).', refs: [{ guidelineId: F, locator: 'p.12' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Vaginal progesterone for short cervix',
      entries: [
        { guidelineId: N, text: 'Offer 200 mg nightly to 34 weeks if ≤25 mm.', locator: '1.5.3' },
        { guidelineId: I, text: 'May be considered if ≤25 mm.' },
        { guidelineId: A, text: 'Does not appear to reduce risk in multiples.' },
        { guidelineId: F, text: 'Not addressed; IM progesterone not to be used.', locator: 'p.8' },
      ],
    },
    {
      domain: 'Cerclage',
      entries: [
        { guidelineId: N, text: 'Not routinely.', locator: '1.5.6' },
        { guidelineId: F, text: 'Not routinely.', locator: 'p.8' },
        { guidelineId: I, text: 'May be considered if ≤15 mm before 24 weeks.' },
        { guidelineId: A, text: 'May reduce risk if <15 mm.' },
      ],
    },
    {
      domain: 'Routine TAPS screening (uncomplicated MC)',
      entries: [
        { guidelineId: I, text: 'Yes, MCA-PSV from 20 weeks.' },
        { guidelineId: N, text: 'No; only after treated TTTS or with sFGR.', locator: '1.4.37' },
      ],
    },
  ],
  editorNote:
    'Sources read on 28 Nov 2026 through a summarising fetch tool; NICE wording was paraphrased by the tool and must be checked. FOGSI–ICOG GCPR Multifetal Pregnancy Management has no printed year (file stamped April 2024); its scan-schedule figures were images and could not be read, its section labels for DCDA/MCMA are swapped, and its MCMA timing is internally inconsistent. NICE NG137 (updated April 2024) was read except its final rationale pages. ISUOG 2025 was read from the ISUOG PDF. RCOG GTG 51 (2024 partial update), ACOG Practice Bulletin 231 and FIGO 2019 twin guidance could not be accessed; ACOG content is from an AAFP summary of PB 234 (preterm birth prevention). Triplets are not covered here.',
};
