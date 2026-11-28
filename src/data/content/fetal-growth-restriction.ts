import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI GCPR on Fetal Growth Restriction (read in full)          -> fogsi-fgr
 *  - ACOG PB 227 (2021, read from SMFM-hosted PDF)                  -> acog-pb-227
 *  - SMFM Consult Series #52 (2020, read from SMFM-hosted PDF)      -> smfm-cs-52
 *  - ISUOG Practice Guidelines on SGA and FGR (2020, read in full)   -> isuog-fgr
 *  - NICE NG201 antenatal care, SFH and scans                        -> nice-ng201
 *  - RCOG GTG 31, 3rd ed 2024 (landing page only; Wiley-blocked)     -> rcog-gtg-31
 */
const F = 'fogsi-fgr';
const A = 'acog-pb-227';
const S = 'smfm-cs-52';
const I = 'isuog-fgr';
const N = 'nice-ng201';
const R = 'rcog-gtg-31';

export const fetalGrowthRestriction: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'A small-for-gestational-age (SGA) fetus has an estimated fetal weight (EFW) or abdominal circumference (AC) below the 10th centile. Fetal growth restriction (FGR) means the fetus has failed to reach its growth potential because of a pathological process, most often placental. Early-onset FGR (before 32 weeks) is less common, more severe and tied to umbilical artery Doppler changes; late-onset FGR is commoner and subtler. Detection relies on serial fundal height and targeted scans. Surveillance uses umbilical artery Doppler with CTG, adding ductus venosus and computerised CTG in early FGR. Timing of birth balances the risk of stillbirth against prematurity and is set by Doppler findings and gestation.',
  keyPoints: [
    { text: 'SGA: EFW or AC below the 10th centile. FGR: below the 3rd centile on its own, or below the 10th centile with Doppler abnormality or falling growth (Delphi criteria). ACOG and SMFM label every fetus below the 10th centile as FGR.', refs: [{ guidelineId: I, locator: 'Table 2' }, { guidelineId: F, locator: 'pp.1–3' }, { guidelineId: S, locator: 'Rec 1' }, { guidelineId: A, locator: 'Background' }] },
    { text: 'Measure symphysis–fundal height at every visit from 24 weeks and plot it. A single value below the 10th centile, or slow or static growth, needs a growth scan.', refs: [{ guidelineId: N, locator: '1.2.30–1.2.32' }, { guidelineId: F, locator: 'pp.8–11' }] },
    { text: 'Early-onset FGR (<32 weeks): detailed anomaly scan and offer of chromosomal microarray; CMV PCR if amniocentesis is done. Do not screen for toxoplasma, rubella or herpes.', refs: [{ guidelineId: S, locator: 'Recs 5–8' }, { guidelineId: F, locator: 'Tables 5.2–5.4' }] },
    { text: 'Umbilical artery Doppler is the main surveillance tool and improves outcome. Increase frequency as flow worsens: every 1–2 weeks if normal, weekly if diastolic flow is reduced, 2–3 times a week with absent end-diastolic flow, admit with reversed flow.', refs: [{ guidelineId: S, locator: 'Recs 9–12' }, { guidelineId: A, locator: 'Level A' }] },
    { text: 'SMFM timing: EFW 3rd–10th centile with normal Doppler 38–39 weeks; EFW <3rd centile or reduced diastolic flow 37 weeks; absent EDF 33–34 weeks; reversed EDF 30–32 weeks.', refs: [{ guidelineId: S, locator: 'Recs 15–18' }, { guidelineId: F, locator: 'Table 8.1' }] },
    { text: 'Give antenatal steroids if birth is likely before 34 weeks, and magnesium sulphate for neuroprotection before 32 weeks.', refs: [{ guidelineId: S, locator: 'Recs 20–21' }, { guidelineId: F, locator: 'p.21' }, { guidelineId: I, locator: 'Steroids' }] },
    { text: 'Not effective: bed rest, sildenafil, dietary supplements, and heparin to prevent recurrence. Ductus venosus and MCA Doppler are for specialist timing decisions, not routine use.', refs: [{ guidelineId: S, locator: 'Recs 3, 4, 13' }, { guidelineId: A, locator: 'Prevention' }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Definitions: SGA vs FGR',
      icon: 'definition',
      body: [
        { text: 'SGA is a size label: EFW or AC below the 10th centile. FGR is a failure to meet biological growth potential because of a pathological factor. Many SGA fetuses are constitutionally small and healthy.', refs: [{ guidelineId: F, locator: 'pp.1–3' }, { guidelineId: R, locator: 'Summary' }] },
        {
          text: 'Delphi consensus definition (used by ISUOG and FOGSI), in the absence of congenital anomalies:',
          refs: [{ guidelineId: I, locator: 'Table 2' }, { guidelineId: F, locator: 'Table 1.2' }],
          table: {
            columns: ['Type', 'Solitary criterion', 'Or contributory criteria'],
            rows: [
              ['Early FGR (<32 weeks)', 'AC or EFW <3rd centile, or absent end-diastolic flow in the umbilical artery', 'AC or EFW <10th centile with uterine artery PI >95th and/or umbilical artery PI >95th centile'],
              ['Late FGR (≥32 weeks)', 'AC or EFW <3rd centile', 'At least 2 of: AC or EFW <10th centile; AC or EFW crossing more than 2 quartiles; CPR <5th or umbilical artery PI >95th centile'],
            ],
          },
        },
        { text: 'ACOG and SMFM use a wider definition: any EFW or AC below the 10th centile is called FGR, using population charts such as Hadlock.', refs: [{ guidelineId: S, locator: 'Recs 1–2' }, { guidelineId: A, locator: 'Background' }] },
        { text: 'Early-onset FGR is about 30% of cases and late-onset about 70% (SMFM: 70–80%). Late-onset FGR is usually milder but harder to detect.', refs: [{ guidelineId: F, locator: 'Table 1.3' }, { guidelineId: S, locator: 'B5' }] },
        { text: 'A fall in growth of more than 2 quartiles (50 centiles) should prompt assessment for FGR even if the fetus is still above the 10th centile.', refs: [{ guidelineId: I, locator: 'Grade C' }, { guidelineId: F, locator: 'p.11' }] },
        { text: 'FOGSI recommends customised or Indian growth charts, noting Indian term birthweight is about 2.6–2.9 kg.', refs: [{ guidelineId: F, locator: 'pp.8–11' }] },
      ],
    },
    {
      id: 'risk-prevention',
      title: 'Risk Factors & Prevention',
      icon: 'risk',
      body: [
        { text: 'Assess risk at booking (FOGSI Table 2.2 lists maternal, placental and fetal risk factors). Biochemical and ultrasound markers should not be used for universal FGR screening.', refs: [{ guidelineId: F, locator: 'Table 2.2, p.5' }] },
        { text: 'Aspirin: FOGSI says aspirin 150 mg from 12–16 weeks may be considered in selected high-risk women. ACOG says evidence is insufficient to give it routinely after a previous SGA baby, and recommends against it for FGR prevention alone (FOGSI Table 6.1 cites this too).', refs: [{ guidelineId: F, locator: 'p.7, Table 6.1' }, { guidelineId: A, locator: 'Prevention' }, { guidelineId: S, locator: 'B5' }] },
        { text: 'Not effective for prevention or treatment: bed rest or activity restriction, sildenafil, nutritional supplements, and LMWH given only to prevent recurrent FGR.', refs: [{ guidelineId: S, locator: 'Recs 3–4' }, { guidelineId: A, locator: 'Level A' }] },
      ],
    },
    {
      id: 'detection',
      title: 'Detection: Fundal Height & Scans',
      icon: 'imaging',
      body: [
        { text: 'NICE: measure symphysis–fundal height at each appointment from 24+0 weeks (not more than every 2 weeks, and not if the woman is having serial growth scans) and plot it on a chart. If it is small, offer a growth and wellbeing scan; urgency depends on other findings such as reduced movements or high blood pressure.', refs: [{ guidelineId: N, locator: '1.2.30–1.2.32' }] },
        { text: 'FOGSI: fundal height rises about 1 cm a week from 14 to 32 weeks; a lag of 3 cm or more suggests FGR. A routine growth scan at 32–36 weeks is an alternative where universal scanning is the policy.', refs: [{ guidelineId: F, locator: 'pp.8–11' }] },
        { text: 'NICE does not offer routine scans after 28 weeks in uncomplicated singleton pregnancies, and asks about fetal movements from 24 weeks.', refs: [{ guidelineId: N, locator: '1.2.33–1.2.34' }] },
        { text: 'Growth scans should be at least 2 weeks apart (ACOG: usually every 3–4 weeks) to judge growth velocity reliably.', refs: [{ guidelineId: A, locator: 'Surveillance' }, { guidelineId: I, locator: 'SGA' }] },
      ],
    },
    {
      id: 'evaluation',
      title: 'Evaluating a Small Fetus',
      icon: 'lab',
      body: [
        { text: 'Detailed anatomy scan for early-onset FGR; up to 20% of these fetuses have structural or chromosomal abnormalities.', refs: [{ guidelineId: S, locator: 'Rec 5' }] },
        { text: 'Offer chromosomal microarray when FGR comes with a malformation or polyhydramnios at any gestation, and for unexplained isolated FGR before 32 weeks. FOGSI also lists karyotype and exome sequencing for early-onset or <3rd centile FGR.', refs: [{ guidelineId: S, locator: 'Recs 6–7' }, { guidelineId: A, locator: 'Evaluation' }, { guidelineId: F, locator: 'Tables 5.2–5.4' }] },
        { text: 'Infection: test for CMV by PCR on amniotic fluid if amniocentesis is done; do not screen for toxoplasma, rubella or herpes (SMFM). FOGSI lists CMV and toxoplasma serology (not routine), and malaria or Zika testing in endemic areas.', refs: [{ guidelineId: S, locator: 'Rec 8' }, { guidelineId: F, locator: 'Tables 5.2–5.4' }] },
        { text: 'FOGSI also lists maternal blood tests and antiphospholipid antibodies, and uterine artery Doppler if severe SGA is seen at 18–20 weeks.', refs: [{ guidelineId: F, locator: 'Tables 5.2–5.4' }] },
      ],
    },
    {
      id: 'surveillance',
      title: 'Surveillance by Doppler Category',
      icon: 'monitoring',
      body: [
        {
          text: 'SMFM surveillance schedule:',
          refs: [{ guidelineId: S, locator: 'Recs 9–14, Fig. 1' }],
          table: {
            columns: ['Category', 'Umbilical artery Doppler', 'CTG / NST', 'Growth scan'],
            rows: [
              ['EFW 3rd–10th centile, normal UA', 'Every 1–2 weeks, then every 2–4 weeks if stable', 'Weekly', 'Every 3–4 weeks'],
              ['Reduced diastolic flow (PI >95th) or EFW <3rd centile', 'Weekly', '1–2 times a week', 'Every 2 weeks'],
              ['Absent end-diastolic flow', '2–3 times a week', 'Twice weekly; consider admission', 'Every 2 weeks'],
              ['Reversed end-diastolic flow', 'Inpatient', '1–2 times a day', 'Every 2 weeks'],
            ],
          },
        },
        { text: 'FOGSI: SGA, growth scan every 2 weeks with UA and MCA Doppler every 1–2 weeks and weekly NST or BPP; uncomplicated FGR, Doppler 1–2 times a week; absent or reversed flow, admit and give steroids, with magnesium below 32 weeks.', refs: [{ guidelineId: F, locator: 'Table 7.2' }] },
        { text: 'ISUOG uses multimodal monitoring (Doppler plus computerised CTG or BPP). In late FGR with UA PI >95th centile, Doppler once or twice a week; confirm an abnormal MCA or CPR within 24 hours. In early FGR with absent or reversed flow, review every 2–3 days.', refs: [{ guidelineId: I, locator: 'Surveillance' }] },
        { text: 'MCA Doppler and CPR help time birth at or near term, but should not be used to time delivery before 32 weeks. SMFM and ACOG do not recommend routine ductus venosus or MCA Doppler in US practice.', refs: [{ guidelineId: I, locator: 'Surveillance' }, { guidelineId: S, locator: 'Rec 13' }, { guidelineId: A, locator: 'Surveillance' }] },
        { text: 'Start CTG or BPP only from a gestation at which delivery would be considered for the baby\'s benefit.', refs: [{ guidelineId: A, locator: 'Surveillance' }] },
      ],
    },
    {
      id: 'timing',
      title: 'Timing of Delivery',
      icon: 'delivery',
      body: [
        {
          text: 'Surveillance and timing of birth by Doppler finding (FOGSI, SMFM/ACOG).',
          refs: [{ guidelineId: F, locator: 'pp.30–35' }, { guidelineId: S }, { guidelineId: A, locator: 'Timing' }],
          flow: {
            caption: 'Fetal growth restriction',
            steps: [
              { title: 'EFW or AC under 10th centile', text: 'Detailed anatomy scan; microarray if anomaly or early unexplained FGR; umbilical artery (UA) Doppler.', tone: 'start' },
              { title: 'UA Doppler', tone: 'decision', branches: [
                { when: 'Normal, EFW 3rd–10th', then: 'UA Doppler every 1–2 weeks, growth 3–4 weekly; birth 37–39 weeks' },
                { when: 'EFW under 3rd or raised UA PI', then: 'Weekly Doppler, NST 1–2 a week; birth at 37 weeks (FOGSI 34–37 for Doppler change)' },
                { when: 'Absent end-diastolic flow', then: 'Admit; birth 32–34 weeks, caesarean (FOGSI)' },
                { when: 'Reversed end-diastolic flow', then: 'Inpatient; birth 30–32 weeks, caesarean' },
              ] },
              { title: 'Before birth', text: 'Steroids if under 34 weeks; magnesium sulphate if under 32 weeks.' },
              { title: 'Labour', text: 'FGR alone is not an indication for caesarean; continuous fetal monitoring in labour.' },
            ],
          },
        },
        {
          text: 'Recommended timing by finding:',
          refs: [{ guidelineId: S, locator: 'Recs 15–18' }, { guidelineId: F, locator: 'Table 8.1' }, { guidelineId: I, locator: 'Delivery' }],
          table: {
            columns: ['Finding', 'SMFM / ACOG', 'FOGSI', 'ISUOG'],
            rows: [
              ['SGA 3rd–10th centile, normal Doppler', '38–39 weeks', '37–39 weeks, induction', 'From 38+0, not beyond 39+0'],
              ['EFW <3rd centile', '37 weeks', '37–38 weeks, induction', 'By 36+0 to 37+6'],
              ['Reduced UA diastolic flow / UA PI >95th', '37 weeks', '34–37 weeks (mild abnormality)', '36+0 to 37+6'],
              ['Cerebral redistribution (late FGR)', 'Not used', 'CPR <5th after 32 weeks is a trigger', '38+0 to 39+0'],
              ['Absent end-diastolic flow', '33–34 weeks', '32–34 weeks, caesarean', 'From 32+0 weeks'],
              ['Reversed end-diastolic flow', '30–32 weeks', '30–32 weeks, caesarean', 'From 30+0 weeks'],
              ['Abnormal ductus venosus', 'Not used routinely', '26–30 weeks, caesarean', 'Deliver (a-wave at or below baseline)'],
            ],
          },
        },
        {
          text: 'ISUOG early-FGR triggers by gestation (computerised CTG short-term variation):',
          refs: [{ guidelineId: I, locator: 'Early FGR' }],
          table: {
            columns: ['Gestation', 'Deliver if'],
            rows: [
              ['24+0 to 25+6', 'Individualised care'],
              ['26+0 to 28+6', 'STV <2.6 ms, or DV a-wave at or below baseline'],
              ['29+0 to 31+6', 'STV <3.0 ms, or DV a-wave at or below baseline'],
              ['32+0 to 33+6', 'STV <3.5 ms'],
              ['34+0 onwards', 'STV <4.5 ms'],
              ['Any, from 26 weeks', 'Repeated unprovoked decelerations, or BPP ≤4'],
            ],
          },
        },
        { text: 'FOGSI India-adapted triggers: below 32 weeks, ductus venosus PI <5th centile (as printed) or absent/reversed flow; above 32 weeks, CPR <5th centile or absent/reversed flow; at any gestation, STV <4.5 ms or BPP ≤4. Absolute indications: STV <2.6 ms, absent DV a-wave, BPP <4/10.', refs: [{ guidelineId: F, locator: 'p.27, Table 8.2' }] },
        { text: 'ACOG: additional risk factors (oligohydramnios, abnormal Doppler, maternal comorbidity) support delivery at 34+0 to 37+6 weeks; absent or reversed flow needs earlier delivery.', refs: [{ guidelineId: A, locator: 'Timing' }] },
      ],
    },
    {
      id: 'steroids-mgso4',
      title: 'Steroids & Magnesium Sulphate',
      icon: 'injection',
      body: [
        { text: 'Antenatal corticosteroids if birth is anticipated before 34 weeks (SMFM: before 33+6; also at 34+0 to 36+6 if birth is likely within 7 days and no previous course). FOGSI: up to 34 weeks, ideally 1–7 days before birth.', refs: [{ guidelineId: S, locator: 'Rec 20' }, { guidelineId: F, locator: 'p.21' }, { guidelineId: I, locator: 'Grade B' }] },
        { text: 'Magnesium sulphate for fetal neuroprotection when birth is before 32 weeks (SMFM recommends; ACOG says consider). ISUOG notes local thresholds vary from below 29 to below 33 weeks.', refs: [{ guidelineId: S, locator: 'Rec 21' }, { guidelineId: A, locator: 'Level A' }, { guidelineId: F, locator: 'p.21' }, { guidelineId: I, locator: 'MgSO4' }] },
      ],
    },
    {
      id: 'mode',
      title: 'Mode of Birth & Labour',
      icon: 'delivery',
      body: [
        { text: 'FGR alone is not an indication for caesarean (ACOG). Consider caesarean with absent or reversed end-diastolic flow, taking the whole picture into account (SMFM).', refs: [{ guidelineId: A, locator: 'Level C' }, { guidelineId: S, locator: 'Rec 19' }] },
        { text: 'ISUOG: in early FGR, elective caesarean if STV is abnormal, ductus venosus is altered, there is absent or reversed flow, BPP is abnormal, or for maternal reasons. In late FGR and SGA, induction is reasonable unless there is absent or reversed flow.', refs: [{ guidelineId: I, locator: 'Mode of delivery' }] },
        { text: 'Use continuous fetal heart rate monitoring in labour.', refs: [{ guidelineId: I, locator: 'Labour' }, { guidelineId: F, locator: 'p.35' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'What counts as FGR',
      entries: [
        { guidelineId: F, text: 'Delphi criteria; SGA alone is not FGR.', locator: 'Table 1.2' },
        { guidelineId: A, text: 'Any EFW or AC <10th centile.', locator: 'Background' },
        { guidelineId: I, text: 'Delphi: <3rd centile alone, or <10th with Doppler or growth criteria.', locator: 'Table 2' },
      ],
    },
    {
      domain: 'Absent end-diastolic flow: deliver at',
      entries: [
        { guidelineId: F, text: '32–34 weeks, caesarean.', locator: 'Table 8.1' },
        { guidelineId: S, text: '33–34 weeks.', locator: 'Rec 16' },
        { guidelineId: I, text: 'From 32+0 weeks.', locator: 'Early FGR' },
      ],
    },
    {
      domain: 'Ductus venosus and MCA Doppler',
      entries: [
        { guidelineId: F, text: 'Used as delivery triggers (DV <32 weeks, CPR >32 weeks).', locator: 'p.27' },
        { guidelineId: A, text: 'Not shown to improve outcome; not routine.', locator: 'Surveillance' },
        { guidelineId: I, text: 'DV a-wave and cCTG time early FGR; MCA/CPR for late FGR only.', locator: 'Delivery' },
      ],
    },
    {
      domain: 'Aspirin',
      entries: [
        { guidelineId: F, text: '150 mg from 12–16 weeks may be considered in high risk.', locator: 'p.7' },
        { guidelineId: A, text: 'Not for FGR prevention alone; insufficient evidence after prior SGA.', locator: 'Prevention' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI GCPR on FGR in full (no year printed; some tables garbled), ACOG PB 227 and SMFM Consult Series #52 from SMFM-hosted PDFs, ISUOG 2020 practice guidelines (third-party copy) and NICE NG201. RCOG published a third edition of GTG 31 in 2024 but its full text (Wiley) could not be accessed; the superseded 2013 edition was deliberately not used, so RCOG positions are missing from this review. A few SMFM grades differ between its PDF and website, and its algorithm figure was not readable. All numbers need clinician verification against the original documents.',
};
