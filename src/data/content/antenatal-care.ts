import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - MoHFW ANC & SBA guidelines (2010), MO handbook (2009), PMSMA, calcium guideline (2014)
 *  - ICMR Standard Treatment Workflow, antenatal management of normal pregnancy (Dec 2025)
 *  - NICE NG201 (2021) recommendations page and PDF (most of it)
 *  - WHO ANC 2016 executive summary (+ Harvard SPH briefing for contact timings and doses)
 *  - AAFP 2023 "Prenatal care: an evidence-based approach" for US practice (ACOG paywalled)
 *  No FOGSI or ICOG antenatal care document was searched within budget.
 */
const M = 'mohfw-anc-2010';
const MO = 'mohfw-mo-anc-2009';
const P = 'mohfw-pmsma';
const CA = 'mohfw-calcium-2014';
const I = 'icmr-stw-anc';
const N = 'nice-ng201';
const W = 'who-anc-2016';
const US = 'aafp-prenatal-2023';

export const antenatalCare: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Routine antenatal care aims to keep a low-risk pregnancy healthy and to pick out women who need specialist care. Indian national guidance asks for at least four visits (first within 12 weeks), plus a doctor checkup under PMSMA on the 9th of every month; WHO recommends at least eight contacts and NICE ten for a first pregnancy. At booking, check Hb, blood group and Rh, urine, HIV, syphilis and hepatitis B, and screen for GDM (DIPSI in India). Every woman should get folic acid early, iron-folic acid from the second trimester, calcium, and two doses of Td (or one booster). At each visit check weight, BP, urine protein, fundal height and fetal heart, and teach the danger signs. Indian, WHO, UK and US advice differs on number of visits, scans, supplement doses and fetal movement counting; these differences are shown side by side below.',
  keyPoints: [
    { text: 'India: at least four visits: first within 12 weeks, then 14–26, 28–34 and 36 weeks to term. WHO: at least eight contacts. NICE: book by 10 weeks; 10 appointments for a first baby, 7 for later ones.', refs: [{ guidelineId: M }, { guidelineId: W, locator: 'E.7' }, { guidelineId: N, locator: '1.1.4–1.1.8' }] },
    { text: 'PMSMA: a fixed-day antenatal checkup by a doctor on the 9th of every month, so every woman gets at least one checkup in the 2nd or 3rd trimester. Mark high-risk women with a red sticker.', refs: [{ guidelineId: P }] },
    { text: 'Booking tests: Hb, blood group and Rh, urine (protein, sugar, microscopy), HIV, syphilis (VDRL/RPR) and HBsAg. Screen for GDM (DIPSI at first visit and again after 24 weeks). TSH only in high-risk women.', refs: [{ guidelineId: I, locator: 'First visit' }, { guidelineId: M }, { guidelineId: N, locator: '1.2.12–1.2.13' }] },
    { text: 'Folic acid 400 µg daily from 2–3 months before conception to 12 weeks. Then one IFA tablet (100 mg elemental iron + 0.5 mg folic acid) daily from 14–16 weeks for at least 100 days and 3 months postpartum; two daily if anaemic.', refs: [{ guidelineId: M }, { guidelineId: I }] },
    { text: 'Calcium 500 mg with vitamin D3 250 IU twice daily (1 g/day) from 14 weeks to 6 months postpartum, taken apart from IFA.', refs: [{ guidelineId: CA, locator: '3.2' }] },
    { text: 'Td: first dose at the first visit, second dose at least 4 weeks later; a single booster if vaccinated in a pregnancy within the last 3 years. Albendazole 400 mg single dose (WHO: deworm after the first trimester in endemic areas).', refs: [{ guidelineId: I }, { guidelineId: M }, { guidelineId: W, locator: 'C.4–C.5' }] },
    { text: 'At every visit: weight, BP, urine protein, and after 24 weeks fundal height and fetal heart. BP ≥140/90 on two readings is hypertension; refer same day if ≥160/110 (NICE).', refs: [{ guidelineId: M }, { guidelineId: N, locator: '1.2.27–1.2.30' }] },
    { text: 'Ultrasound: NICE offers a dating scan at 11+2–14+1 weeks and an anomaly scan at 18+0–20+6 weeks; WHO one scan before 24 weeks; ICMR a level II scan at 18–20 weeks. No routine scans after 28 weeks in uncomplicated pregnancy (NICE).', refs: [{ guidelineId: N, locator: '1.2.14–1.2.15, 1.2.33' }, { guidelineId: W, locator: 'B.2.4' }, { guidelineId: I }] },
  ],
  sections: [
    {
      id: 'schedule',
      title: 'Visit Schedule',
      icon: 'followup',
      body: [
        {
          text: 'Number and timing of visits:',
          refs: [{ guidelineId: M }, { guidelineId: MO }, { guidelineId: I }, { guidelineId: W, locator: 'E.7' }, { guidelineId: N, locator: '1.1' }],
          table: {
            columns: ['Source', 'Visits', 'Timing'],
            rows: [
              ['MoHFW 2010', 'At least 4', '≤12 wk; 14–26; 28–34; 36 wk–term'],
              ['MoHFW MO handbook 2009', 'At least 4', '≤12 wk; 14–26; 28–32; 36–40'],
              ['ICMR STW 2025', '4', '1st trimester; 2nd trimester; 28–34; 36–40'],
              ['WHO 2016', 'At least 8', '≤12 wk; 20; 26; 30; 34; 36; 38; 40 (return at 41 if undelivered)'],
              ['NICE NG201', '10 (first baby) / 7 (parous)', 'Book by 10+0 weeks'],
            ],
          },
        },
        { text: 'PMSMA adds a fixed-day antenatal checkup on the 9th of every month at government facilities, with a green sticker for no risk factors and a red sticker for high risk.', refs: [{ guidelineId: P }] },
        { text: 'NICE: if a woman first makes contact after 9 weeks, book her within 2 weeks. US practice starts care at 6–10 weeks.', refs: [{ guidelineId: N, locator: '1.1.5' }, { guidelineId: US }] },
      ],
    },
    {
      id: 'investigations',
      title: 'Booking & Routine Investigations',
      icon: 'lab',
      body: [
        {
          text: 'Tests by visit (ICMR STW, India):',
          refs: [{ guidelineId: I }],
          table: {
            columns: ['Visit', 'Essential', 'Desirable'],
            rows: [
              ['First', 'Hb, urine routine and microscopy, ABO/Rh', 'VDRL/RPR, HIV, HBsAg, DIPSI; TSH in high-risk women'],
              ['Second', 'Hb, urine albumin', 'Repeat DIPSI if beyond 24 weeks and at least 4 weeks after the first'],
              ['Third and fourth', 'Hb, urine albumin', '—'],
            ],
          },
        },
        { text: 'MoHFW by facility: sub-centre does a pregnancy test, Hb, urine sugar and protein and a rapid malaria test; PHC/CHC/FRU adds blood group and Rh, VDRL/RPR, HIV, blood sugar and HBsAg.', refs: [{ guidelineId: M }] },
        { text: 'Anaemia is Hb below 11 g/dL; 7–11 is moderate and below 7 is severe. Refer if Hb is below 7 g/dL or does not rise after 4 weeks of oral iron.', refs: [{ guidelineId: M }, { guidelineId: I }] },
        { text: 'NICE: FBC, blood group and RhD status at booking; screening for HIV, syphilis, hepatitis B, sickle cell and thalassaemia; repeat FBC and antibodies at 28 weeks.', refs: [{ guidelineId: N, locator: '1.2.12–1.2.16' }] },
        { text: 'WHO: test for asymptomatic bacteriuria with midstream urine culture (or Gram stain) and treat with a 7-day antibiotic course. Ask about intimate partner violence. Screen for TB where prevalence is high.', refs: [{ guidelineId: W, locator: 'B.1.2, B.1.3, B.1.8, C.1' }] },
        { text: 'US practice also includes rubella immunity, chlamydia, gonorrhoea and hepatitis C screening, group B streptococcus swab at 36–37 weeks, and depression screening in the first and third trimesters.', refs: [{ guidelineId: US }] },
        { text: 'No source reviewed recommends universal TSH testing: ICMR limits it to high-risk women, and US practice to those with a thyroid history or symptoms.', refs: [{ guidelineId: I }, { guidelineId: US }] },
      ],
    },
    {
      id: 'gdm',
      title: 'GDM Screening',
      icon: 'screening',
      body: [
        { text: 'India: ICMR uses the DIPSI test at the first visit and repeats it after 24 weeks (at least 4 weeks after the first test). PMSMA lists GDM screening with OGTT. See the GDM topic for the 75 g test and cut-offs.', refs: [{ guidelineId: I }, { guidelineId: P }] },
        { text: 'NICE: assess risk factors at booking and offer an OGTT at 24+0–28+0 weeks only to women at risk.', refs: [{ guidelineId: N, locator: '1.2.21–1.2.22' }] },
      ],
    },
    {
      id: 'ultrasound',
      title: 'Ultrasound',
      icon: 'imaging',
      body: [
        {
          text: 'Routine scans recommended:',
          refs: [{ guidelineId: N, locator: '1.2.14–1.2.15' }, { guidelineId: W, locator: 'B.2.4' }, { guidelineId: I }, { guidelineId: P }, { guidelineId: US }],
          table: {
            columns: ['Source', 'Scans'],
            rows: [
              ['NICE', '11+2–14+1 wk (dating, multiples, combined screening if chosen); 18+0–20+6 wk (anomaly, placenta)'],
              ['WHO', 'One scan before 24 weeks'],
              ['ICMR STW', 'Level II scan at 18–20 weeks (desirable)'],
              ['PMSMA', 'One scan in the 2nd or 3rd trimester for all'],
              ['US (AAFP)', 'Anatomy scan at 18–22 weeks; aneuploidy screening offered to all; cfDNA from 10 weeks'],
            ],
          },
        },
        { text: 'Do not routinely scan after 28 weeks in an uncomplicated singleton pregnancy. WHO advises against routine Doppler and routine antenatal CTG.', refs: [{ guidelineId: N, locator: '1.2.33' }, { guidelineId: W, locator: 'B.2.3, B.2.5' }] },
        { text: 'After 36 weeks, check presentation by palpation; if breech is suspected, confirm by scan and offer external cephalic version.', refs: [{ guidelineId: N, locator: '1.2.36–1.2.38' }] },
      ],
    },
    {
      id: 'supplements',
      title: 'Supplements',
      icon: 'drug',
      body: [
        {
          text: 'Doses compared:',
          refs: [{ guidelineId: M }, { guidelineId: CA, locator: '3.2' }, { guidelineId: I }, { guidelineId: W, locator: 'A.2–A.3' }, { guidelineId: US }],
          table: {
            columns: ['Supplement', 'India (MoHFW)', 'WHO 2016'],
            rows: [
              ['Folic acid', '400 µg daily, 2–3 months before conception to 12 weeks', '400 µg daily with iron (US: 400–800 µg)'],
              ['Iron', 'IFA 100 mg elemental iron + 0.5 mg folic acid daily from 14–16 wk, ≥100 days and 3 months postpartum; 2 tablets daily if anaemic', '30–60 mg elemental iron daily (120 mg if anaemic); weekly 120 mg where anaemia <20%'],
              ['Calcium', '500 mg + vit D3 250 IU twice daily (1 g/day), 14 weeks to 6 months postpartum', '1.5–2.0 g daily in 3 doses, only where intake is low'],
              ['Vitamin D', 'Given with calcium', 'Not recommended to improve outcomes'],
              ['Deworming', 'Albendazole 400 mg single dose', 'After the first trimester in endemic areas'],
            ],
          },
        },
        { text: 'Take IFA apart from calcium, and not with tea, coffee or milk.', refs: [{ guidelineId: M }, { guidelineId: CA }] },
        { text: 'WHO: vitamin A only where deficiency is severe; zinc only in research; reduce caffeine if intake is above 300 mg/day.', refs: [{ guidelineId: W, locator: 'A.4, A.5, A.10' }] },
        { text: 'No source reviewed gave iodine advice.', refs: [{ guidelineId: W }] },
      ],
    },
    {
      id: 'vaccines',
      title: 'Vaccines',
      icon: 'injection',
      body: [
        { text: 'India (ICMR 2025): Td first dose at the first visit and a second at least 4 weeks later; a single booster if vaccinated in a pregnancy within the last 3 years. Older MoHFW documents use TT on the same schedule, ideally completing at least a month before the due date.', refs: [{ guidelineId: I }, { guidelineId: M }, { guidelineId: MO }] },
        { text: 'WHO: tetanus toxoid for all pregnant women who need it.', refs: [{ guidelineId: W, locator: 'C.5' }] },
        { text: 'NICE: discuss influenza, pertussis and RSV vaccination. US practice: Tdap from 27 weeks, influenza and COVID-19.', refs: [{ guidelineId: N, locator: '1.3.8' }, { guidelineId: US }] },
        { text: 'None of the Indian documents reviewed mention Tdap, influenza, COVID-19 or RSV vaccination in pregnancy.', refs: [{ guidelineId: I }] },
      ],
    },
    {
      id: 'each-visit',
      title: 'At Every Visit',
      icon: 'monitoring',
      body: [
        { heading: 'Weight', text: 'MoHFW: total gain about 9–11 kg, roughly 2 kg a month after the first trimester. Less than 2 kg a month suggests poor intake; more than 3 kg in a month, think of pre-eclampsia, twins or diabetes. US targets vary by pre-pregnancy BMI (e.g. 11–16 kg if normal BMI).', refs: [{ guidelineId: M }, { guidelineId: US }] },
        { heading: 'Blood pressure', text: 'Hypertension is ≥140 and/or ≥90 mmHg on two readings at least 4 hours apart (MoHFW; ICMR says 6 hours). Diastolic above 110 is a danger sign. NICE: refer the same day at 160/110 or higher.', refs: [{ guidelineId: M }, { guidelineId: I }, { guidelineId: N, locator: '1.2.27' }] },
        { heading: 'Urine', text: 'Dipstick for protein at every visit.', refs: [{ guidelineId: N, locator: '1.2.28' }, { guidelineId: M }] },
        { heading: 'Fundal height', text: 'After 24 weeks fundal height in cm roughly equals gestational weeks; refer for a gap of 3 cm or more or no growth (MoHFW), or more than 4 weeks (ICMR). NICE: measure at each visit after 24 weeks and plot on a chart; scan if large or small.', refs: [{ guidelineId: M }, { guidelineId: I }, { guidelineId: N, locator: '1.2.30–1.2.32' }] },
        { heading: 'Fetus', text: 'Fetal heart rate 120–160 is normal. Check the lie from 32 weeks and refer any non-cephalic presentation to an FRU.', refs: [{ guidelineId: M }] },
      ],
    },
    {
      id: 'fetal-movements',
      title: 'Fetal Movements',
      icon: 'fetus',
      body: [
        { text: 'MoHFW: movements start at about 18–22 weeks. Count lying on the left side for 1 hour, three times a day after meals; refer if the total is under 10.', refs: [{ guidelineId: M }] },
        { text: 'ICMR: report reduced or absent movements after 28 weeks.', refs: [{ guidelineId: I }] },
        { text: 'NICE: after 24 weeks ask about movements at each contact and tell her to contact the unit with any concern, without formal counting. Advise not to go to sleep on her back after 28 weeks.', refs: [{ guidelineId: N, locator: '1.2.34, 1.3.25–1.3.26' }] },
        { text: 'WHO: daily kick counting only in research. US practice: routine counting raises anxiety and visits without improving outcomes.', refs: [{ guidelineId: W, locator: 'B.2.1' }, { guidelineId: US }] },
      ],
    },
    {
      id: 'prevention',
      title: 'Aspirin & Anti-D',
      icon: 'prevention',
      body: [
        { text: 'Assess pre-eclampsia risk at booking and offer aspirin to women at risk (see the Pre-eclampsia topic for dose and risk factors). US practice uses 81 mg daily from 12–16 weeks.', refs: [{ guidelineId: N, locator: '1.2.23' }, { guidelineId: US }] },
        { text: 'Routine antenatal anti-D prophylaxis at 28 weeks for RhD-negative women (NICE; US 300 µg). The Indian documents reviewed test Rh status but do not state routine anti-D; see the Rh Isoimmunisation topic.', refs: [{ guidelineId: N, locator: '1.2.16' }, { guidelineId: US }] },
      ],
    },
    {
      id: 'counselling',
      title: 'Lifestyle & Common Symptoms',
      icon: 'lifestyle',
      body: [
        { text: 'Alcohol: no known safe level; avoid. Ask about alcohol and tobacco (including second-hand smoke) at every visit and support quitting.', refs: [{ guidelineId: N, locator: '1.3.9–1.3.10' }, { guidelineId: W, locator: 'B.1.5–B.1.6' }] },
        { text: 'Healthy diet and physical activity; about 30 minutes of moderate activity on 5 days a week (US).', refs: [{ guidelineId: W, locator: 'A.1.1' }, { guidelineId: N, locator: '1.3.9' }, { guidelineId: US }] },
        { text: 'Air travel is generally safe up to 36 weeks; long flights raise VTE risk (US).', refs: [{ guidelineId: US }] },
        {
          text: 'Common symptoms (WHO):',
          refs: [{ guidelineId: W, locator: 'D.1–D.6' }],
          table: {
            columns: ['Symptom', 'Options'],
            rows: [
              ['Nausea and vomiting', 'Ginger, chamomile, vitamin B6 or acupuncture'],
              ['Heartburn', 'Diet and lifestyle advice; antacids if needed'],
              ['Leg cramps', 'Magnesium, calcium or non-drug options'],
              ['Back and pelvic pain', 'Regular exercise'],
              ['Constipation', 'Wheat bran or other fibre'],
              ['Varicose veins', 'Compression stockings, leg elevation'],
            ],
          },
        },
      ],
    },
    {
      id: 'birth-plan',
      title: 'Birth Preparedness & Danger Signs',
      icon: 'emergency',
      body: [
        { text: 'Make a micro birth plan with the family: early registration, the place of delivery and the skilled person who will conduct it, transport and money.', refs: [{ guidelineId: M }, { guidelineId: MO }] },
        { text: 'NICE: from 28 weeks discuss labour and birth preferences; from 38 weeks discuss options for prolonged pregnancy. WHO: return at 41 weeks if not delivered.', refs: [{ guidelineId: N, locator: '1.3.15–1.3.17' }, { guidelineId: W }] },
        { text: 'Teach the danger signs listed in the MoHFW guideline and when to come to hospital immediately; ICMR also asks women to report reduced or absent fetal movements after 28 weeks.', refs: [{ guidelineId: M }, { guidelineId: I }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Number of contacts',
      entries: [
        { guidelineId: M, text: 'At least 4 visits.' },
        { guidelineId: W, text: 'At least 8 contacts.', locator: 'E.7' },
        { guidelineId: N, text: '10 (nulliparous) or 7 (parous).', locator: '1.1.7–1.1.8' },
      ],
    },
    {
      domain: 'Iron dose',
      entries: [
        { guidelineId: M, text: '100 mg elemental iron daily (IFA).' },
        { guidelineId: W, text: '30–60 mg elemental iron daily.', locator: 'A.2.1' },
      ],
    },
    {
      domain: 'Calcium',
      entries: [
        { guidelineId: CA, text: '1 g/day for all, 14 weeks to 6 months postpartum.', locator: '3.2' },
        { guidelineId: W, text: '1.5–2.0 g/day where dietary intake is low.', locator: 'A.3' },
      ],
    },
    {
      domain: 'Fetal movement counting',
      entries: [
        { guidelineId: M, text: 'Formal count; under 10 in 3 hours means refer.' },
        { guidelineId: N, text: 'Ask at each contact; no formal counting.', locator: '1.2.34' },
        { guidelineId: W, text: 'Counting only in research.', locator: 'B.2.1' },
      ],
    },
    {
      domain: 'GDM screening',
      entries: [
        { guidelineId: I, text: 'Universal DIPSI at first visit, repeat after 24 weeks.' },
        { guidelineId: N, text: 'OGTT at 24–28 weeks for women with risk factors.', locator: '1.2.22' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: MoHFW ANC/SBA guidelines 2010 (about 91% read) and MO handbook 2009, PMSMA guidelines (year not printed), the MoHFW calcium guideline 2014, the ICMR STW (Dec 2025), NICE NG201 (recommendations page and most of the PDF) and the WHO 2016 executive summary. WHO contact timings and some doses come from a Harvard SPH briefing, not the full WHO document. US practice comes from the AAFP 2023 review because ACOG documents are paywalled. No FOGSI or ICOG antenatal document, the NICE week-by-week schedule, the MoHFW 2018 GDM guideline or the MoHFW Td notification was read. Check all numbers against the originals.',
};
