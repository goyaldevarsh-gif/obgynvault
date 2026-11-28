import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from the MoHFW Injectable Contraceptive (MPA) Reference Manual 2016, NHSRC/MoHFW family planning
 * training manual for CHOs 2021, WHO Family Planning Handbook 2022 (COC chapter), FSRH Emergency Contraception
 * guideline (2017, amended) and the WHO MEC 6th edition web annex (2025). Postpartum timing is in a separate topic.
 */
const D = 'mohfw-dmpa-2016';
const C = 'nhsrc-cho-fp-2021';
const W = 'who-fp-handbook-2022';
const F = 'fsrh-ec-2017';
const M = 'who-mec-2025';

export const contraceptionEc: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'India’s national programme offers condoms, combined pills (Mala-N), weekly ormeloxifene (Chhaya), injectable DMPA (Antara), copper IUCDs (380A for 10 years, 375 for 5 years), emergency pills and sterilisation. Start most methods any time you are reasonably sure she is not pregnant: within the first 5 days of the cycle for pills (7 days for DMPA) no backup is needed; later, use condoms for 7 days. Check eligibility with WHO MEC: no combined pills with BP 160/100 or more, migraine with aura, current VTE, breast cancer, or smoking at 35 or older. For emergency contraception, the copper IUD is most effective (up to 5 days after sex or expected ovulation); levonorgestrel 1.5 mg works best within 72 hours (ineffective beyond 96 hours) and ulipristal 30 mg up to 120 hours, and both may be less effective at higher body weight.',
  keyPoints: [
    { text: 'Start rules: COC within 5 days of period start, DMPA within 7 days — no backup. Later in the cycle, if reasonably not pregnant: condoms for 7 days.', refs: [{ guidelineId: W, locator: 'p.11' }, { guidelineId: D, locator: '§2.6.1' }] },
    { text: 'DMPA (Antara): 150 mg IM every 3 months, with a 4-week grace period; more than 4 months late → rule out pregnancy, inject, 7 days backup. Fertility returns in about 7–10 months after the last injection.', refs: [{ guidelineId: D, locator: '§2.3.1, 6.2' }] },
    { text: 'Chhaya (ormeloxifene): twice weekly for 3 months (day 1 of period, then 3 days later), then once weekly. Over 7 days late: restart as a new user.', refs: [{ guidelineId: C, locator: 'pp.21–22' }] },
    { text: 'Missed COC (WHO): 1–2 pills, take one now and continue. 3 or more, take one now, 7 days backup, consider EC if sex in the last 5 days; if in week 3, skip the inactive pills.', refs: [{ guidelineId: W, locator: 'p.17' }] },
    { text: 'No COC: BP 160/100 or more, migraine with aura (or without aura at 35 or older), current DVT/PE, breast cancer, smoking at 35 or older. Enzyme inducers reduce efficacy.', refs: [{ guidelineId: W, locator: 'pp.6–10' }] },
    { text: 'Emergency contraception: Cu-IUD most effective (under 0.1% pregnancy), up to 5 days after first unprotected sex or earliest likely ovulation. LNG 1.5 mg within 72 h (ineffective after 96 h). Ulipristal 30 mg up to 120 h, more effective than LNG.', refs: [{ guidelineId: F, locator: '§8, 13' }, { guidelineId: C, locator: 'pp.20–21' }] },
    { text: 'EC and weight: LNG may be less effective over 70 kg or BMI 26 (give 3 mg if ulipristal unsuitable); ulipristal over 85 kg or BMI 30 (do not double). Quick-start contraception right after LNG; wait 5 days after ulipristal.', refs: [{ guidelineId: F, locator: '§9.2, 18.2' }] },
  ],
  sections: [
    {
      id: 'stepwise',
      title: 'Step-by-step: Choosing and Starting',
      icon: 'management',
      body: [
        {
          text: 'Counselling and quick start.',
          refs: [{ guidelineId: W }, { guidelineId: D, locator: '§2.6, 4.2.4' }, { guidelineId: M }, { guidelineId: F }],
          flow: {
            caption: 'Starting contraception',
            steps: [
              { title: 'Unprotected sex in the last 5 days?', tone: 'decision', branches: [
                { when: 'Yes', then: 'Offer emergency contraception first (Cu-IUD best)' },
                { when: 'No', then: 'Choose method' },
              ] },
              { title: 'Check eligibility', text: 'WHO MEC: blood pressure, migraine, VTE, smoking and age, breast cancer, drugs (enzyme inducers), breastfeeding.', tone: 'action' },
              { title: 'Reasonably not pregnant?', tone: 'decision', branches: [
                { when: 'Yes', then: 'Start today; backup 7 days if beyond day 5 (pills) or day 7 (DMPA)' },
                { when: 'Unsure, no test', then: 'Barrier method until next period, then start (DMPA manual)' },
              ] },
              { title: 'Follow-up', text: 'IUCD check at 6 weeks or after the first period; DMPA every 3 months; review side effects.' },
            ],
          },
        },
      ],
    },
    {
      id: 'methods',
      title: 'National Programme Methods',
      icon: 'drug',
      body: [
        {
          text: 'Methods offered free in India.',
          refs: [{ guidelineId: C, locator: 'pp.17–28' }, { guidelineId: D, locator: '§1.4, 2.1, 2.3' }],
          table: {
            columns: ['Method', 'How used', 'Key points'],
            rows: [
              ['Mala-N (COC)', 'LNG 0.15 mg + EE 30 µg: 21 active + 7 iron tablets, no break between packs', 'Not if breastfeeding under 6 months (programme rule)'],
              ['Chhaya (ormeloxifene)', 'Twice weekly × 3 months, then weekly', 'Non-steroidal; delayed periods in about 8%'],
              ['Antara (DMPA)', '150 mg IM (or 104 mg SC) every 3 months', '4-week grace; amenorrhoea about 50% at 1 year'],
              ['Cu-IUCD 380A / 375', 'Any time in cycle; within 48 h postpartum; within 12 days post-abortion', '380A 10 years, 375 5 years; fertility returns at removal'],
              ['Condoms', 'Each act', '2/100 perfect use, 15/100 typical use in year 1'],
              ['Emergency pill', 'LNG 1.5 mg within 72 h', 'Repeat if vomiting within 2 h'],
              ['Sterilisation', 'Day-care procedure', 'Pregnancy test and Hb before; FPIS compensation scheme'],
            ],
          },
        },
        { heading: 'DMPA side effects', text: 'Irregular bleeding: ibuprofen 400 mg three times daily or tranexamic acid 500 mg three times daily for 5 days. Prolonged or heavy bleeding (over 8 days or twice usual): same first; if no response, EE 50 µg daily for 21 days or refer, plus iron. Amenorrhoea: reassure. Weight gain about 1–2 kg in a year. Stop if migraine with aura develops. BMD falls 5–6% over 5 years and recovers; routine BMD checks not needed.', refs: [{ guidelineId: D, locator: '§7.1–7.2, 8.1' }] },
        { heading: 'Chhaya missed pill', text: 'Less than 7 days late: take and continue with backup until next period. More than 7 days: restart as a new user. Periods delayed over 15 days: rule out pregnancy.', refs: [{ guidelineId: C, locator: 'pp.21–22' }] },
      ],
    },
    {
      id: 'coc',
      title: 'Combined Pills: Missed Pills & Side Effects',
      icon: 'drug',
      body: [
        {
          text: 'Missed active pills (WHO Handbook).',
          refs: [{ guidelineId: W, locator: 'pp.17–18' }],
          table: {
            columns: ['Situation', 'What to do'],
            rows: [
              ['1–2 missed, or pack 1–2 days late', 'Take one now; continue; no backup'],
              ['3 or more missed in weeks 1–2, or pack 3+ days late', 'Take one now; backup 7 days; consider EC if sex in last 5 days'],
              ['3 or more missed in week 3', 'Finish active pills, discard inactive ones, start new pack next day; backup 7 days; consider EC'],
              ['Vomiting within 2 h', 'Take another pill'],
              ['Vomiting or diarrhoea over 2 days', 'Follow the 3-or-more-missed rule'],
            ],
          },
        },
        { text: 'The national CHO manual uses a simpler rule: 1–2 missed, take immediately; more than 2, use backup and restart with the next period.', refs: [{ guidelineId: C, locator: 'pp.17–19' }] },
        { text: 'Irregular bleeding: ibuprofen 800 mg three times daily for 5 days; if it persists, try another formulation for at least 3 months. Fertility returns without delay after stopping.', refs: [{ guidelineId: W, locator: 'pp.21–25' }] },
        { text: 'BP 140–159/90–99: recheck; if still 140/90 or more, do not use COC.', refs: [{ guidelineId: W, locator: 'p.7' }] },
      ],
    },
    {
      id: 'ec',
      title: 'Emergency Contraception',
      icon: 'emergency',
      body: [
        {
          text: 'Options compared (FSRH).',
          refs: [{ guidelineId: F, locator: '§8–13' }],
          table: {
            columns: ['Method', 'Time limit', 'Notes'],
            rows: [
              ['Copper IUD', '5 days after first UPSI or after earliest likely ovulation', 'Most effective (pregnancy under 0.1%); can stay as ongoing method'],
              ['Ulipristal 30 mg', 'Up to 120 h', 'More effective than LNG; less effective over 85 kg/BMI 30; avoid progestogen for 5 days after'],
              ['Levonorgestrel 1.5 mg', 'Licensed to 72 h; ineffective after 96 h', 'Pregnancy 0.6–2.6%; 3 mg if over 70 kg/BMI 26 or on enzyme inducers'],
            ],
          },
        },
        { text: 'Oral EC does not work if taken after ovulation. Enzyme inducers in the last 28 days: Cu-IUD preferred. Repeat EC in the same cycle is allowed, but do not give LNG within 5 days after ulipristal. Start regular contraception immediately after LNG; delay hormonal methods 5 days after ulipristal and use condoms.', refs: [{ guidelineId: F, locator: '§8, 10.1, 15, 18.2' }] },
        { text: 'Breastfeeding: no interruption needed after ulipristal per FSRH; LNG product information advises avoiding nursing for at least 8 hours.', refs: [{ guidelineId: F, locator: '§12.2–12.3' }] },
        { text: 'Ulipristal is not part of the Indian national programme; the programme ECP is LNG 1.5 mg within 72 hours.', refs: [{ guidelineId: C, locator: 'pp.20–21' }] },
      ],
    },
    {
      id: 'mec',
      title: 'Eligibility Updates (WHO MEC 2025)',
      icon: 'classification',
      body: [
        { text: 'WHO MEC 6th edition changes: DMPA (IM and SC) and NET-EN while breastfeeding under 6 weeks moved from category 3 to 2; nevirapine and protease inhibitors moved to category 1. Cu-IUD within 48 h postpartum is category 1; LNG-IUD category 2. PrEP is category 1 for all methods.', refs: [{ guidelineId: M, locator: 'Web annex pp.5–6, 15–16, 24–25' }] },
        { text: 'The 2016 Indian DMPA manual still lists breastfeeding under 6 weeks, BP 160/100 or more and unexplained vaginal bleeding as category 4 for DMPA.', refs: [{ guidelineId: D, locator: '§1.3.1, 4.1' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'DMPA while breastfeeding under 6 weeks',
      entries: [
        { guidelineId: D, text: 'Category 4: wait 6 weeks.', locator: '§4.1' },
        { guidelineId: M, text: 'Category 2 (changed from 3).' },
      ],
    },
    {
      domain: 'LNG emergency pill window',
      entries: [
        { guidelineId: C, text: 'Within 72 hours.', locator: 'pp.20–21' },
        { guidelineId: F, text: 'Licensed 72 h; off-licence to 96 h; ineffective after.', locator: '§8.2.2' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. The MoHFW OCP Reference Manual 2016 could not be fetched, so national POP rules, the Chhaya 30 mg dose and its contraindications are not covered. WHO MEC 6th edition main document not read (web annex only); COC contraindications are from the WHO Handbook. FSRH amendment date needs checking. Not read: MoHFW IUCD manual 2018, MoHFW sterilisation standards (NSV backup and semen analysis), FOGSI, FSRH COC/UKMEC, NICE CG30. Postpartum and post-abortion timing: see Postpartum Contraception.',
};
