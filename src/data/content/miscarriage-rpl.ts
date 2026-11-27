import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from NICE NG126, MoHFW CAC guidelines 2023 + CAC Providers Manual, WHO Abortion Care,
 * ACOG PB 200, ESHRE RPL 2022, RANZCOG C-Gyn 38 (2025) and two sponsored FOGSI Key Practice Points (2024).
 * RCOG GTG 17 (2023) full text not readable. Quotes came through a summarising fetch tool.
 */
const N = 'nice-ng126';
const MC = 'mohfw-cac-2023';
const MM = 'mohfw-cac-manual';
const W = 'who-abortion-care';
const A = 'acog-pb-200';
const E = 'eshre-rpl-2022';
const RZ = 'ranzcog-cgyn38';
const R17 = 'rcog-gtg-17';
const FT = 'fogsi-kpp-threatened-2024';
const FR = 'fogsi-kpp-rpl-2024';

export const miscarriageRpl: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Confirm miscarriage on transvaginal scan with NICE criteria (CRL 7 mm or more with no heartbeat, or MSD 25 mm or more with no fetal pole, needs a second opinion or a rescan at least 7 days later). Then offer a choice: expectant management for 7–14 days first line (NICE), medical management (missed miscarriage: mifepristone 200 mg then misoprostol 800 µg; incomplete: misoprostol 600 µg), or vacuum aspiration (MVA under local anaesthetic, up to 12 weeks in Indian CAC guidelines). Confirm completion with a urine pregnancy test at 3 weeks. Anti-D policies differ. Women with bleeding and a previous miscarriage may be offered vaginal progesterone 400 mg twice daily to 16 weeks (NICE). Recurrent pregnancy loss (RCOG 3 or more; ESHRE and RANZCOG 2 or more) needs antiphospholipid antibodies, thyroid tests and uterine imaging; treat APS with aspirin plus heparin, and avoid unproven treatments.',
  keyPoints: [
    { text: 'Diagnosis (TVS): CRL under 7.0 mm with no heartbeat, or MSD under 25.0 mm with no fetal pole: rescan at least 7 days later. CRL 7.0 mm or more, or MSD 25.0 mm or more: second opinion and/or rescan at least 7 days later.', refs: [{ guidelineId: N, locator: '1.4.6–1.4.11' }, { guidelineId: A }] },
    { text: 'Expectant management for 7–14 days is first line (NICE), unless there is higher bleeding risk, a previous traumatic pregnancy experience, or infection. ACOG: about 80% complete within up to 8 weeks.', refs: [{ guidelineId: N, locator: '1.10.1' }, { guidelineId: A }] },
    { text: 'Missed miscarriage, medical: mifepristone 200 mg orally, then misoprostol 800 µg 48 hours later (NICE, any route) or 24 hours later vaginally (ACOG).', refs: [{ guidelineId: N, locator: '1.11.1' }, { guidelineId: A, locator: 'Level A' }, { guidelineId: W }] },
    { text: 'Incomplete miscarriage, medical: misoprostol 600 µg single dose (NICE, any route; 800 µg alternative). WHO and MoHFW: 600 µg oral or 400 µg sublingual. Do not give mifepristone for incomplete miscarriage.', refs: [{ guidelineId: N, locator: '1.11.3–1.11.4' }, { guidelineId: W, locator: 'Rec 36a' }, { guidelineId: MM, locator: 'p.84' }] },
    { text: 'Surgical: manual vacuum aspiration under local anaesthetic as an outpatient, or in theatre under GA (NICE). MoHFW: vacuum aspiration up to 12 weeks; cervical priming with misoprostol 400 µg before the procedure.', refs: [{ guidelineId: N, locator: '1.12.1' }, { guidelineId: MC, locator: 'Ch.6, pp.37–41' }] },
    { text: 'Follow-up: urine pregnancy test 3 weeks after expectant or medical management; if positive, review for retained tissue, molar or ectopic pregnancy.', refs: [{ guidelineId: N, locator: '1.10.5, 1.11.7–1.11.9' }] },
    { text: 'Threatened miscarriage with a previous miscarriage: NICE offers vaginal micronised progesterone 400 mg twice daily, continued to 16 completed weeks if a heartbeat is confirmed.', refs: [{ guidelineId: N, locator: '1.9.2–1.9.3' }] },
    { text: 'Recurrent loss: test antiphospholipid antibodies, TSH and TPO antibodies, and image the uterus (3D TVS preferred). Do not screen for hereditary thrombophilia routinely.', refs: [{ guidelineId: E, locator: 'Recs 14, 15, 24, 34' }, { guidelineId: RZ, locator: 'Rec 8' }] },
    { text: 'APS with recurrent loss: low-dose aspirin (ESHRE 75–100 mg; RANZCOG 75–150 mg) plus prophylactic heparin from a positive pregnancy test (RANZCOG: until at least 34 weeks). Unexplained RPL: no heparin, aspirin, steroids or intralipid.', refs: [{ guidelineId: E, locator: 'Recs 45, 70, 71, 74' }, { guidelineId: RZ, locator: 'Rec 10' }] },
  ],
  sections: [
    {
      id: 'choosing',
      title: 'Confirmed Miscarriage: Choosing Management',
      icon: 'management',
      body: [
        {
          text: 'Offer a choice once miscarriage is confirmed; the pathway below follows NICE with Indian and WHO doses alongside.',
          refs: [{ guidelineId: N, locator: '1.10–1.12' }, { guidelineId: MC }, { guidelineId: W }],
          flow: {
            caption: 'Missed or incomplete miscarriage (NICE NG126; MoHFW; WHO)',
            steps: [
              { title: 'Miscarriage confirmed on TVS', text: 'Check Rh status, haemodynamics and signs of infection.' },
              { title: 'Urgent vacuum aspiration if', text: 'Haemorrhage, haemodynamic instability or signs of infection (ACOG).', tone: 'urgent' },
              { title: 'Otherwise, offer a choice:', tone: 'decision', branches: [
                { when: 'Expectant (first line, NICE)', then: '7–14 days; rescan if bleeding has not started or persists' },
                { when: 'Medical: missed', then: 'Mifepristone 200 mg, then misoprostol 800 µg after 48 h (NICE) or 24 h (ACOG)' },
                { when: 'Medical: incomplete', then: 'Misoprostol 600 µg (NICE); 600 µg oral or 400 µg SL (WHO, MoHFW)' },
                { when: 'Surgical', then: 'MVA under local anaesthetic, or theatre under GA; MoHFW up to 12 weeks' },
              ] },
              { title: 'Confirm completion', text: 'Urine pregnancy test at 3 weeks (NICE). After vacuum aspiration, follow up in 1–2 weeks (MoHFW).' },
            ],
          },
        },
        { heading: 'When not to wait', text: 'Explore options other than expectant management if there is a higher risk of haemorrhage (for example late first trimester), a previous adverse or traumatic pregnancy experience, a higher risk from the effects of haemorrhage, or evidence of infection.', refs: [{ guidelineId: N, locator: '1.5.4 (older numbering)' }] },
        { heading: 'Expectant follow-up', text: 'Repeat the scan if bleeding has not started or is persisting; if she continues expectant management, review at least 14 days after the first follow-up.', refs: [{ guidelineId: N, locator: '1.10.6–1.10.7' }] },
      ],
    },
    {
      id: 'medical',
      title: 'Medical Management: Regimens',
      icon: 'drug',
      body: [
        {
          text: 'Doses by source.',
          refs: [{ guidelineId: N, locator: '1.11.1–1.11.4' }, { guidelineId: W, locator: 'Recs 36a–b' }, { guidelineId: A, locator: 'Box 1' }, { guidelineId: MM, locator: 'p.84' }],
          table: {
            columns: ['Situation', 'Regimen'],
            rows: [
              ['Missed miscarriage (NICE)', 'Mifepristone 200 mg oral; 48 h later misoprostol 800 µg vaginal, oral or sublingual (unless the sac has passed)'],
              ['Missed miscarriage (ACOG)', 'Misoprostol 800 µg vaginally, repeat no earlier than 3 h if needed; add mifepristone 200 mg orally 24 h before when available'],
              ['Missed abortion under 14 weeks (WHO)', 'Mifepristone 200 mg oral then misoprostol 800 µg (buccal, sublingual or vaginal); or misoprostol 800 µg alone'],
              ['Incomplete miscarriage (NICE)', 'Misoprostol 600 µg single dose, any route; 800 µg as an alternative; no mifepristone'],
              ['Incomplete, under 14 weeks uterine size (WHO; MoHFW)', 'Misoprostol 600 µg oral or 400 µg sublingual'],
              ['Incomplete, 14 weeks or more (WHO)', 'Misoprostol 400 µg sublingual, vaginal or buccal every 3 h'],
              ['IUFD 14–28 weeks (WHO)', 'Mifepristone 200 mg, then 1–2 days later misoprostol 400 µg SL or vaginal every 4–6 h'],
            ],
          },
        },
        { text: 'Give pain relief and anti-emetics. She should contact the service if bleeding has not started within 48 hours after misoprostol.', refs: [{ guidelineId: N, locator: '1.11.2, 1.11.5' }] },
        { text: 'ACOG: confirm passage with ultrasound within 7–14 days. No surgery for an asymptomatic thickened endometrial stripe.', refs: [{ guidelineId: A, locator: 'Box 1; Level B' }] },
      ],
    },
    {
      id: 'surgical',
      title: 'Surgical Management (Vacuum Aspiration)',
      icon: 'surgery',
      body: [
        { text: 'MoHFW: vacuum aspiration for incomplete abortion up to 12 weeks gestation or uterine size, and for missed abortion.', refs: [{ guidelineId: MC, locator: 'Ch.6 §II–III, pp.37–38' }] },
        { heading: 'Cervical priming (MoHFW)', text: 'Misoprostol 400 µg sublingually 1–2 hours, or buccally/vaginally 2–3 hours, before the procedure; alternative 15-methyl PGF2α 250 µg IM 45 minutes before. Advised over 9 weeks, in nulliparous women and those under 18.', refs: [{ guidelineId: MC, locator: 'Ch.6 §VII, p.41' }] },
        { heading: 'Paracervical block (MoHFW)', text: 'Lignocaine 1% (10 mL; never more than 20 mL), 2–4 mL at each site, 1.5–2 cm deep at 4 and 8 o’clock. Oral analgesic or antispasmodic an hour before; NSAIDs after.', refs: [{ guidelineId: MC, locator: 'pp.40–41' }] },
        { heading: 'Antibiotic prophylaxis', text: 'MoHFW: single dose of oral ampicillin or azithromycin 1 g with metronidazole 800 mg (doxycycline 100 mg may replace ampicillin/azithromycin in non-lactating women, continued twice daily for 7 days). ACOG: single preoperative dose of doxycycline 200 mg 1 hour before.', refs: [{ guidelineId: MC, locator: 'Ch.6 §VI, p.40' }, { guidelineId: A, locator: 'Level C' }] },
        { heading: 'Bleeding', text: 'MoHFW: for bleeding from the uterine cavity, give misoprostol 400 µg sublingually or 600 µg orally and observe.', refs: [{ guidelineId: MC, locator: 'pp.49, 52' }] },
      ],
    },
    {
      id: 'anti-d',
      title: 'Anti-D After Miscarriage',
      icon: 'injection',
      body: [
        { text: 'NICE: 250 IU (50 µg) for Rh-negative women having surgical management; not after medical-only management, threatened, complete miscarriage or PUL; no Kleihauer test.', refs: [{ guidelineId: N, locator: '1.7.x (older numbering)' }] },
        { text: 'ACOG: at least 50 µg within 72 hours of the first misoprostol dose, i.e. after medical management too. MoHFW: anti-D 50 µg for Rh-negative women. RANZCOG: 250 IU up to 12 weeks, 625 IU after 12 weeks.', refs: [{ guidelineId: A }, { guidelineId: MC, locator: 'Ch.6 §VIII, p.47' }, { guidelineId: RZ, locator: 'GPS 29' }] },
      ],
    },
    {
      id: 'threatened',
      title: 'Threatened Miscarriage & Progesterone',
      icon: 'drug',
      body: [
        { text: 'If bleeding persists beyond 14 days, she should return for assessment.', refs: [{ guidelineId: N, locator: '1.9.1' }] },
        { heading: 'NICE', text: 'Offer vaginal micronised progesterone 400 mg twice daily to women with bleeding, an intrauterine pregnancy on scan and a previous miscarriage; continue to 16 completed weeks if a heartbeat is confirmed.', refs: [{ guidelineId: N, locator: '1.9.2–1.9.3' }] },
        { heading: 'RANZCOG / ESHRE', text: 'RANZCOG: not for threatened miscarriage with one or no prior loss; 400 mg vaginally twice daily to 16 weeks with bleeding after recurrent loss; no progestogens for prior losses without bleeding. ESHRE: vaginal progesterone may improve live birth in women with 3 or more losses who bleed in a later pregnancy.', refs: [{ guidelineId: RZ, locator: 'Recs 7, 17, 18' }, { guidelineId: E, locator: 'Rec 73' }] },
        { heading: 'FOGSI Key Practice Points (sponsored)', text: 'Oral dydrogesterone 40 mg at onset of bleeding, then 10 mg three times daily until bleeding stops, then 10 mg twice daily up to 16 weeks; oral preferred over vaginal. These are industry-sponsored consensus points, not a FOGSI GCPR, and differ from NICE on drug and route.', refs: [{ guidelineId: FT, locator: 'Grade B/2a, A/1a' }] },
      ],
    },
    {
      id: 'rpl-workup',
      title: 'Recurrent Pregnancy Loss: Work-up',
      icon: 'lab',
      body: [
        { heading: 'Definition', text: 'RCOG: three or more first-trimester miscarriages (judgement to investigate after two); NASGP summary adds two or more second-trimester losses. ESHRE: two or more pregnancy losses. RANZCOG: two or more miscarriages up to 20 weeks.', refs: [{ guidelineId: R17, locator: 'Landing page' }, { guidelineId: E }, { guidelineId: RZ }] },
        {
          text: 'What to test (ESHRE 2022; RANZCOG 2025).',
          refs: [{ guidelineId: E, locator: 'Recs 11–16, 24–25, 34' }, { guidelineId: RZ, locator: 'Recs 8–9' }],
          table: {
            columns: ['Test', 'Advice'],
            rows: [
              ['Lupus anticoagulant, anticardiolipin IgG/IgM', 'Yes, after two losses (ESHRE strong)'],
              ['Anti-β2 glycoprotein I', 'Can be considered / case by case'],
              ['TSH and TPO antibodies', 'Yes; T4 if TSH abnormal'],
              ['Uterine anatomy', '3D transvaginal ultrasound preferred'],
              ['Parental karyotype', 'After individual risk assessment'],
              ['Pregnancy tissue genetics', 'Not routine'],
              ['Hereditary thrombophilia, NK cells, HLA, prolactin', 'Not routine'],
            ],
          },
        },
      ],
    },
    {
      id: 'rpl-treatment',
      title: 'Recurrent Pregnancy Loss: Treatment',
      icon: 'management',
      body: [
        { heading: 'Antiphospholipid syndrome', text: 'Low-dose aspirin from before conception (ESHRE 75–100 mg/day; RANZCOG 75–150 mg/day, preconception or from a positive test) plus prophylactic heparin from a positive pregnancy test; RANZCOG continues LMWH until at least 34 weeks.', refs: [{ guidelineId: E, locator: 'Rec 45' }, { guidelineId: RZ, locator: 'Rec 10 (strong)' }] },
        { heading: 'Thyroid', text: 'Treat overt hypothyroidism. Evidence for subclinical hypothyroidism is conflicting. Euthyroid women with thyroid antibodies should not be given levothyroxine (ESHRE); RANZCOG: do not offer if TSH 2.5 or less and TPO positive.', refs: [{ guidelineId: E, locator: 'Recs 47–48' }, { guidelineId: RZ, locator: 'Recs 14–16' }] },
        { heading: 'Not recommended for unexplained RPL', text: 'Heparin or low-dose aspirin, glucocorticoids, intralipid, G-CSF; treatment for hereditary thrombophilia outside research. Insufficient evidence for hCG and metformin. PGT-A not for unexplained RM (RANZCOG).', refs: [{ guidelineId: E, locator: 'Recs 44, 53–54, 70–71, 74' }, { guidelineId: RZ }] },
        { heading: 'Septum', text: 'RANZCOG does not recommend septum resection; ESHRE neither recommends nor advises against it.', refs: [{ guidelineId: RZ, locator: 'Rec 13' }, { guidelineId: E }] },
        { heading: 'FOGSI Key Practice Points (sponsored)', text: 'Dydrogesterone 40 mg loading then 30 mg/day until symptoms subside; vaginal micronised progesterone 600 mg/day when there is no bleeding. ESHRE finds insufficient evidence for progesterone in RPL generally.', refs: [{ guidelineId: FR }, { guidelineId: E, locator: 'Rec 52' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Definition of recurrent loss',
      entries: [
        { guidelineId: R17, text: '3 or more first-trimester miscarriages.' },
        { guidelineId: E, text: '2 or more pregnancy losses.' },
        { guidelineId: RZ, text: '2 or more miscarriages up to 20 weeks.' },
      ],
    },
    {
      domain: 'Progesterone for bleeding',
      entries: [
        { guidelineId: N, text: 'Vaginal 400 mg BD to 16 weeks if one or more previous miscarriages.', locator: '1.9.2' },
        { guidelineId: RZ, text: 'Only with recurrent loss; 400 mg vaginal BD to 16 weeks.', locator: 'Recs 7, 18' },
        { guidelineId: E, text: 'May help with 3 or more losses.', locator: 'Rec 73' },
        { guidelineId: FT, text: 'Oral dydrogesterone 40 mg, then 10 mg TID, then BD to 16 weeks.' },
      ],
    },
    {
      domain: 'Anti-D after miscarriage',
      entries: [
        { guidelineId: N, text: '250 IU only with surgical management.' },
        { guidelineId: A, text: 'At least 50 µg, including after medical management.' },
        { guidelineId: MC, text: '50 µg to Rh-negative women.', locator: 'p.47' },
        { guidelineId: RZ, text: '250 IU to 12 weeks; 625 IU after.', locator: 'GPS 29' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026 through a summarising fetch tool; check every dose against the source. NICE NG126 recommendation numbers differ between the chapter page (1.9–1.12) and the older recommendations page (1.5.x, 1.7.x); confirm the current numbering. RCOG GTG 17 (2023) full text could not be opened (only the landing page and a NASGP summary); RANZCOG C-Gyn 38 (2025) is used instead. The WHO interval between mifepristone and misoprostol for missed abortion was not captured. MoHFW CAC 2023 chapter 7 (medical methods) was truncated. No FOGSI GCPR or FOCUS on miscarriage was found; the two FOGSI documents used are industry-sponsored 2024 Key Practice Points.',
};
