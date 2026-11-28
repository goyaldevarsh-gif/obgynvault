import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from MoHFW CAC Training & Service Delivery Guidelines (3rd ed., 2023),
 * MTP (Amendment) Rules 2021 and the MoHFW CAC Providers Manual.
 * WHO Abortion Care 2022 regimens added (recommendation numbers; pages unconfirmed).
 * Not read: MTP (Amendment) Act 2021 text, MTP Amendment Rules 2024,
 * any FOGSI document, second-trimester regimens. Emergency contraception not covered.
 */
const MC = 'mohfw-cac-2023';
const MR = 'mtp-rules-2021';
const MM = 'mohfw-cac-manual';
const WA = 'who-abortion-care';

export const mtpIndia: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Under the MTP (Amendment) Act and Rules 2021, pregnancy can be terminated up to 20 weeks on the opinion of one registered medical practitioner (RMP), from 20 to 24 weeks for special categories on the opinion of two RMPs, and beyond 24 weeks for substantial fetal abnormality only with Medical Board approval. Medical abortion (mifepristone + misoprostol) is approved up to 9 weeks; vacuum aspiration (MVA/EVA) is used up to 12 weeks. Give antibiotic prophylaxis, analgesia with a paracervical block for aspiration, anti-D 50 µg to Rh-negative women, and start contraception before discharge.',
  keyPoints: [
    { text: 'Up to 20 weeks: one RMP (Form I). 20–24 weeks: two RMPs (Form E) for special categories only. Beyond 24 weeks: Medical Board (Form D), for substantial fetal abnormality.', refs: [{ guidelineId: MC, locator: 'Ch.2, pp.5–9' }, { guidelineId: MR, locator: 'Rules 3A, 3B, 4A' }] },
    { text: 'Special categories up to 24 weeks: survivors of sexual assault, rape or incest; minors; change of marital status during pregnancy (widowhood, divorce); women with physical disabilities; mentally ill women; fetal malformation with substantial risk of being incompatible with life; humanitarian, disaster or emergency settings.', refs: [{ guidelineId: MR, locator: 'Rule 3B' }] },
    { text: 'Medical Board: opinion within 3 days of the request; termination within 5 days. Members: gynaecologist, paediatrician, radiologist or sonologist (CAC 2023).', refs: [{ guidelineId: MR, locator: 'Rule 3A' }, { guidelineId: MC, locator: 'p.8' }] },
    { text: 'Medical abortion is approved up to 9 weeks (63 days): mifepristone 200 mg orally on day 1, misoprostol 800 µg sublingual, vaginal or buccal on day 3, follow-up on day 15 (CAC Providers Manual). Success 95–99%.', refs: [{ guidelineId: MM, locator: 'pp.78–80' }, { guidelineId: MC, locator: 'pp.54–55' }] },
    { text: 'Vacuum aspiration up to 12 weeks (success over 98%); priming with misoprostol 400 µg is optional, advised beyond 9 weeks, in nulliparous women and under-18s.', refs: [{ guidelineId: MC, locator: 'pp.37, 41' }] },
    { text: 'Antibiotic prophylaxis: single oral dose ampicillin or azithromycin 1 g + metronidazole 800 mg. Anti-D 50 µg for Rh-negative women.', refs: [{ guidelineId: MC, locator: 'pp.40, 47' }] },
    { text: 'Contraception: IUCD immediately (or within 12 days) after surgical abortion, about day 15 after medical abortion; pills, injectable and implant immediately after surgical abortion or on the misoprostol day.', refs: [{ guidelineId: MC, locator: 'Annexure 3.1, pp.24–27' }] },
  ],
  sections: [
    {
      id: 'legal',
      title: 'Legal Framework (MTP Act & Rules 2021)',
      icon: 'documentation',
      body: [
        {
          text: 'Gestation limits, opinions and forms.',
          refs: [{ guidelineId: MC, locator: 'Ch.2, pp.5–9' }, { guidelineId: MR, locator: 'Rules 3A, 3B, 4A' }],
          table: {
            columns: ['Gestation', 'Who may terminate / opine', 'Form'],
            rows: [
              ['Up to 20 weeks (any woman, extended indications)', 'One RMP', 'Form I'],
              ['20–24 weeks (special categories, Rule 3B)', 'Two RMPs', 'Form E'],
              ['Beyond 24 weeks (substantial fetal abnormality)', 'Medical Board approval; termination by RMPs', 'Form D'],
            ],
          },
        },
        {
          text: 'Provider qualifications (CAC 2023).',
          refs: [{ guidelineId: MC, locator: 'p.7' }, { guidelineId: MR, locator: 'Rule 4(ca)' }],
          table: {
            columns: ['Procedure', 'Qualification'],
            rows: [
              ['Medical abortion up to 9 weeks', 'PG in ObGyn, or 3 months ObGyn experience, or 6-month house job, plus CAC/MTP and MMA training. Rule 4(ca) also allows 10 supervised medical terminations.'],
              ['Up to 12 weeks', 'PG, or 1 year ObGyn experience, or 6-month house job, plus CAC/MTP training'],
              ['13–24 weeks and beyond (after Board)', 'PG, or 1 year ObGyn experience, or 6-month house job'],
            ],
          },
        },
        { heading: 'Where', text: 'Government hospitals, or sites approved by the District Level Committee (chaired by the CMO). Medical abortion up to 9 weeks may be prescribed from a clinic with referral access to an approved site. Approved places now cover up to 24 weeks; sites for terminations beyond 24 weeks need facilities for abdominal surgery.', refs: [{ guidelineId: MC, locator: 'pp.9, 19' }, { guidelineId: MR, locator: 'Rule 5' }] },
        { heading: 'Medical Board', text: 'May allow or deny termination beyond 24 weeks, co-opt specialists and request investigations. It gives its opinion in Form D within 3 days of the request, and the procedure is done within 5 days.', refs: [{ guidelineId: MR, locator: 'Rule 3A' }] },
      ],
    },
    {
      id: 'medical',
      title: 'Medical Abortion (up to 9 Weeks)',
      icon: 'drug',
      body: [
        {
          text: 'MMA pathway (MoHFW).',
          refs: [{ guidelineId: MM, locator: 'pp.78–80' }, { guidelineId: MC, locator: 'pp.54–55' }],
          flow: {
            caption: 'Medical method of abortion up to 63 days (MoHFW)',
            steps: [
              { title: 'Day 1: confirm eligibility', text: 'Gestation up to 9 weeks (63 days LMP), consent and opinion documented. Mifepristone 200 mg orally.' },
              { title: 'Day 3: misoprostol', text: '800 µg sublingual, vaginal or buccal (may be taken at home). If she vomits within 30 min, repeat 800 µg after an anti-emetic.' },
              { title: 'Day 15: follow-up', text: 'Confirm completion. Incomplete with a non-viable sac: misoprostol 600 µg oral or 400 µg sublingual. Ongoing pregnancy: vacuum aspiration.', tone: 'decision' },
            ],
          },
        },
        { text: 'Three facility visits, or two if misoprostol is taken at home. Anti-D if Rh negative.', refs: [{ guidelineId: MC, locator: 'pp.54–55' }, { guidelineId: MM, locator: 'p.80' }] },
      ],
    },
    {
      id: 'vacuum',
      title: 'Vacuum Aspiration (MVA/EVA, up to 12 Weeks)',
      icon: 'surgery',
      body: [
        { heading: 'Cannula size', text: '4–6 mm at 4–6 weeks; 6–10 mm at 7–9 weeks; 8–12 mm at 9–12 weeks.', refs: [{ guidelineId: MC, locator: 'p.40' }] },
        { heading: 'Cervical priming', text: 'Not mandatory; may be used beyond 9 weeks, especially in nulliparous women and those under 18: misoprostol 400 µg sublingual 1–2 h before, or buccal/vaginal 2–3 h before; if misoprostol cannot be used, 15-methyl PGF2α 250 µg IM 45 min before.', refs: [{ guidelineId: MC, locator: 'p.41' }] },
        { heading: 'Pain relief', text: 'Oral analgesic or antispasmodic 1 h before. Paracervical block: lignocaine 1%, 10 mL (never more than 20 mL), 22–24 G needle, 2–4 mL at 4 and 8 o’clock after aspirating, wait 2–4 min. Local anaesthetic toxicity with convulsions: diazepam 10 mg IV or phenytoin 100 mg IV slowly.', refs: [{ guidelineId: MC, locator: 'pp.40–41, 48' }] },
        { heading: 'Antibiotics', text: 'Single oral dose of ampicillin or azithromycin 1 g plus metronidazole 800 mg; in non-lactating women doxycycline 100 mg may replace ampicillin/azithromycin, continued 100 mg twice daily for 7 days.', refs: [{ guidelineId: MC, locator: 'p.40' }] },
        { heading: 'Completion', text: 'Signs: red or pink foam without tissue in the cannula, gritty feel of the uterine wall, cervix gripping the cannula, uterine contraction. Check the aspirate for villi and decidua; chorionic villi exclude ongoing pregnancy.', refs: [{ guidelineId: MC, locator: 'pp.43, 52' }] },
        { heading: 'After', text: 'Anti-D 50 µg for Rh-negative women at discharge. Follow up in 1–2 weeks; she should report if her period has not come by 6 weeks. Fertility can return within 10 days of a first-trimester abortion.', refs: [{ guidelineId: MC, locator: 'pp.22, 47–48, 52' }] },
      ],
    },
    {
      id: 'who-regimens',
      title: 'WHO 2022 Regimens by Gestation',
      icon: 'drug',
      body: [
        {
          text: 'WHO Abortion Care 2022 medical regimens. Interval between mifepristone and misoprostol at least 24 hours; misoprostol may be repeated if needed. Indian law and the CAC guidance still decide who may use these, and up to what gestation (medical abortion approved to 9 weeks in India).',
          refs: [{ guidelineId: WA, locator: 'Recs 27, 29, 31, 32, 36' }],
          table: {
            columns: ['Situation', 'Mifepristone + misoprostol', 'Misoprostol alone'],
            rows: [
              ['Induced, under 12 weeks', 'Mifepristone 200 mg oral, then 1–2 days later misoprostol 800 µg vaginal, sublingual or buccal', '800 µg vaginal, sublingual or buccal'],
              ['Induced, 12 weeks or more', 'Mifepristone 200 mg oral, then 1–2 days later misoprostol 400 µg vaginal, sublingual or buccal every 3 h', '400 µg every 3 h (vaginal route most effective)'],
              ['Missed abortion, under 14 weeks', 'Mifepristone 200 mg oral, then misoprostol 800 µg any route (preferred)', '800 µg any route; repeat dosing works better from 9 weeks'],
              ['Fetal death, 14 to 28 weeks', 'Mifepristone 200 mg oral, then 1–2 days later misoprostol 400 µg sublingual or vaginal every 4–6 h', '400 µg sublingual or vaginal every 4–6 h'],
              ['Incomplete abortion, uterus under 14 weeks', 'Not needed', '600 µg oral or 400 µg sublingual (or vacuum aspiration)'],
              ['Incomplete abortion, uterus 14 weeks or more', 'Not needed', '400 µg sublingual, vaginal or buccal every 3 h'],
            ],
          },
        },
        { heading: 'Previous uterine scar', text: 'At 12 weeks or more, use caution and clinical judgement in deciding the maximum number of misoprostol doses. WHO gives no fixed maximum.', refs: [{ guidelineId: WA, locator: 'Rec 29 footnote' }] },
        { heading: 'Cervical priming (surgical)', text: 'Under 12 weeks, if priming is used: mifepristone 200 mg oral 24–48 h before, or misoprostol 400 µg sublingual 1–2 h before, or 400 µg vaginal or buccal 2–3 h before; no osmotic dilators. 12–19 weeks: priming suggested, with medication (mifepristone plus misoprostol preferred) or dilator plus medication. 19 weeks or more: dilator plus medication. Dilators no longer than 2 days before.', refs: [{ guidelineId: WA, locator: 'Recs 17–18' }] },
        { heading: 'Anti-D: WHO vs India', text: 'WHO recommends against anti-D for medical or surgical abortion under 12 weeks; standard care applies from 12 weeks. The Indian CAC guidance gives anti-D 50 µg to Rh-negative women after vacuum aspiration. Follow local protocol.', refs: [{ guidelineId: WA, locator: 'Rec 8' }, { guidelineId: MC }] },
      ],
    },
    {
      id: 'contraception',
      title: 'Post-abortion Contraception',
      icon: 'counselling',
      body: [
        {
          text: 'When to start each method (CAC 2023 Annexure 3.1).',
          refs: [{ guidelineId: MC, locator: 'Annexure 3.1, pp.24–27' }],
          table: {
            columns: ['Method', 'After surgical abortion', 'After medical abortion'],
            rows: [
              ['IUCD', 'Immediately or within 12 days of confirmed completion (also second trimester)', 'Around day 15, once expulsion is confirmed'],
              ['COC, injectable MPA', 'Immediately or within 7 days', 'On the misoprostol day or within 5 days'],
              ['Implant', 'Immediately or within 7 days', 'On the misoprostol day'],
              ['POP, centchroman', 'Immediately or within 7 days', 'Day 3, with misoprostol'],
              ['Female sterilisation', 'Concurrently or within 7 days if no infection or severe blood loss', 'Only after the first menstrual cycle'],
            ],
          },
        },
        { text: 'After abortion beyond 24 weeks: IUCD within 48 h of expulsion or after 6 weeks; COC at 3 weeks; MPA, implant, POP and centchroman by 3 weeks. Male sterilisation is independent of the abortion (use another method for at least 3 months or until azoospermia).', refs: [{ guidelineId: MC, locator: 'Annexure 3.1' }] },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. The CAC 2023 text extraction did not include the medical abortion dose tables, second-trimester regimens or anti-D by gestation; the MMA regimen shown is from the CAC Providers Manual (year not captured). The MTP (Amendment) Act 2021 itself and the MTP Amendment Rules 2024 were not read and may change details. WHO Abortion Care 2022 regimens were read from the executive summary and a hosted copy of the full guideline; page numbers were not confirmed, so locators use recommendation numbers. FOGSI guidance and all emergency contraception sources were not read, so emergency contraception is not covered yet. Check the Rule 3B(f) fetal malformation category against the Act section 3(2B).',
};
