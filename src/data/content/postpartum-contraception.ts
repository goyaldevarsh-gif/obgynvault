import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from:
 *  - MoHFW PPIUCD Reference Manual (2010)                       -> mohfw-ppiucd-2010
 *  - MoHFW Reference Manual for Injectable Contraceptive MPA (2016) -> mohfw-mpa-2016
 *  - NHSRC FP Guidance Booklet for CHO (~2022)                   -> nhsrc-fp-cho
 *  - FOGSI Practical Handbook on Postpregnancy Contraceptive Choices (~2024) -> fogsi-ppfp-handbook
 *  - WHO MEC 5th edn (2015) and 6th edn (2025, web annex only)   -> who-mec-2015, who-mec-2025
 *  - NHS Lanarkshire guideline citing FSRH 2017 (secondary)      -> nhs-lanarkshire-cap
 *  - ACOG CO 670 (2016); CDC US MEC 2024 changes page            -> acog-co-670, cdc-usmec-2024
 */
const M = 'mohfw-ppiucd-2010';
const MP = 'mohfw-mpa-2016';
const C = 'nhsrc-fp-cho';
const F = 'fogsi-ppfp-handbook';
const W15 = 'who-mec-2015';
const W25 = 'who-mec-2025';
const U = 'nhs-lanarkshire-cap';
const A = 'acog-co-670';
const US = 'cdc-usmec-2024';

export const postpartumContraception: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Discuss contraception antenatally and offer it before discharge. In India the main options are PPIUCD (post-placental within 10 minutes, during caesarean, or within 48 hours; otherwise wait until 6 weeks), injectable MPA (Antara) from 6 weeks if breastfeeding, centchroman (Chhaya), progestogen-only pills, condoms, LAM for up to 6 months, and sterilisation within 7 days of delivery or after 6 weeks. Combined oestrogen methods are avoided in the first weeks because of VTE risk, and for 6 months (India, FOGSI) or 6 weeks (WHO, UK) when breastfeeding. Advise waiting at least 24 months after a birth and 6 months after an abortion before the next pregnancy. After an uncomplicated abortion, almost any method can start immediately.',
  keyPoints: [
    { text: 'PPIUCD windows: post-placental (within 10 minutes of placenta, vaginal birth), intra-caesarean, or within 48 hours before discharge. Do NOT insert between 48 hours and 6 weeks; after 6 weeks, interval insertion.', refs: [{ guidelineId: M, locator: 'Ch. 2' }, { guidelineId: C, locator: '2.1' }] },
    { text: 'PPIUCD expulsion may be 8–10% (under 3% with good technique); post-placental and intra-caesarean insertions have the lowest expulsion. Not with puerperal sepsis or unresolved PPH (MEC 4); avoid with chorioamnionitis or membranes ruptured over 18 h (MEC 3).', refs: [{ guidelineId: M, locator: 'Ch. 5, Ch. 9' }, { guidelineId: F, locator: 'Ch. 3C, Table 3' }] },
    { text: 'Injectable MPA (Antara): breastfeeding, start at 6 weeks; not breastfeeding, any time (backup 7 days if over 4 weeks postpartum). IM 150 mg or SC 104 mg every 3 months; grace period 2 weeks early to 4 weeks late.', refs: [{ guidelineId: MP, locator: '2.6.1, 1.4.3, 6.2.2' }, { guidelineId: C, locator: '2.2' }] },
    { text: 'Note: WHO MEC 2025 moved progestogen-only injectables in breastfeeding women under 6 weeks postpartum from category 3 to 2; the MoHFW 2016 manual still says wait until 6 weeks.', refs: [{ guidelineId: W25, locator: 'Web annex p.10' }, { guidelineId: MP, locator: '4.1' }] },
    { text: 'Centchroman (Chhaya) can start immediately after delivery regardless of breastfeeding: 30 mg twice a week for 3 months, then once a week.', refs: [{ guidelineId: F, locator: 'Ch. 4B, Table 1, p.58' }, { guidelineId: C, locator: '2.3' }] },
    { text: 'Combined pills: avoid in the first 6 weeks (VTE). Breastfeeding: India and FOGSI from 6 months; WHO MEC 2015 category 3 from 6 weeks to 6 months and 2 after. Not breastfeeding: from 21 days if no VTE risk factors (WHO, UK).', refs: [{ guidelineId: F, locator: 'Ch. 4B' }, { guidelineId: W15, locator: 'Table 1, items 2–3' }, { guidelineId: U }] },
    { text: 'LAM works only if all three: exclusive breastfeeding day and night, no return of periods, baby under 6 months. Switch to another method before 6 months.', refs: [{ guidelineId: M, locator: 'Annexure C, Ch. 3' }, { guidelineId: F, locator: 'Ch. 2' }] },
    { text: 'Female sterilisation: within 7 days of delivery, or after 6 weeks (interval). After abortion, concurrently if first trimester (mini-lap only after second trimester), once infection is excluded.', refs: [{ guidelineId: M, locator: 'Annexure C' }, { guidelineId: F, locator: 'Ch. 2, Tables 2–3' }, { guidelineId: C, locator: '2.6' }] },
    { text: 'Spacing: wait at least 24 months after a live birth (but under 5 years) and at least 6 months after an abortion before trying again.', refs: [{ guidelineId: M, locator: 'Ch. 1' }, { guidelineId: F, locator: 'Ch. 2' }, { guidelineId: C, locator: '1.1' }] },
  ],
  sections: [
    {
      id: 'counselling',
      title: 'When to Counsel',
      icon: 'counselling',
      body: [
        { text: 'Counsel during antenatal care so the woman can choose before delivery (ACOG: optimally prenatally). Contraception is not needed in the first 21 days after birth, but immediate methods prevent missed opportunities.', refs: [{ guidelineId: A, locator: 'p.e32' }, { guidelineId: U }] },
        { text: 'Fertility returns within 10–11 days after an abortion; start contraception within 48 hours (MoHFW).', refs: [{ guidelineId: M, locator: 'Ch. 1' }] },
      ],
    },
    {
      id: 'methods',
      title: 'Method-by-method Timing',
      icon: 'drug',
      body: [
        {
          text: 'Postpartum start times (India first; see notes for differences):',
          refs: [{ guidelineId: M, locator: 'Ch. 2, Annexure C' }, { guidelineId: MP, locator: '2.6.1' }, { guidelineId: F, locator: 'Ch. 2–4' }, { guidelineId: C }],
          table: {
            columns: ['Method', 'Breastfeeding', 'Not breastfeeding'],
            rows: [
              ['Copper IUCD (PPIUCD)', 'Within 10 min of placenta, at caesarean, or within 48 h; else from 6 weeks', 'Same'],
              ['Injectable MPA (Antara)', 'From 6 weeks (MoHFW, FOGSI)', 'Any time; backup 7 days if >4 weeks postpartum'],
              ['Progestogen-only pill', 'MoHFW job aid: from 6 weeks. FOGSI: immediately', 'FOGSI: immediately'],
              ['Centchroman (Chhaya)', 'Immediately (FOGSI); earlier than 4 weeks (CHO booklet)', 'Immediately'],
              ['Implant', 'Immediately (FOGSI citing ACOG)', 'Immediately'],
              ['Combined pill', 'From 6 months (FOGSI)', 'FOGSI inconsistent: 3 weeks if no VTE risk, or 6 weeks; CHO: not before 3 weeks'],
              ['Condoms', 'When intercourse resumes', 'Same'],
              ['LAM', 'Up to 6 months if all 3 criteria met', 'Not applicable'],
              ['Female sterilisation', 'Within 7 days or after 6 weeks', 'Same'],
            ],
          },
        },
        { heading: 'PPIUCD technique points', text: 'Insertion between 48 hours and 6 weeks carries higher infection, expulsion and perforation risk (soft uterus). About 5–10 in 100 women find the device expelled in the first 3 months.', refs: [{ guidelineId: M, locator: 'Ch. 2, Ch. 6, Annexure A' }] },
        { heading: 'MPA details', text: 'Return of fertility takes 7–10 months from the last injection. Bone loss of 5–6% over 5 years, reversible on stopping; review long-term users every 2 years. MPA-SC must not be given IM.', refs: [{ guidelineId: MP, locator: '2.5, 8.1, 1.3.2, 2.6.2' }] },
        { heading: 'Centchroman dosing', text: 'One 30 mg tablet twice a week for the first 3 months (first on day 1 of the period, second 3 days later), then once a week. Safe in breastfeeding.', refs: [{ guidelineId: F, locator: 'p.58' }, { guidelineId: 'fogsi-pankh-centchroman' }] },
        { heading: 'Vasectomy', text: 'Use condoms or another method for 3 months after the procedure.', refs: [{ guidelineId: M, locator: 'Annexure C' }] },
      ],
    },
    {
      id: 'mec',
      title: 'Eligibility (WHO MEC)',
      icon: 'risk',
      body: [
        { heading: 'Combined hormonal', text: 'WHO 2015: breastfeeding under 6 weeks category 4, 6 weeks–6 months category 3, 6 months or more category 2. Not breastfeeding: under 21 days category 3 (4 with other VTE risks); 21–42 days category 2 (3 with VTE risks); over 42 days category 1.', refs: [{ guidelineId: W15, locator: 'Table 1, items 2–3' }] },
        { heading: 'Progestogen-only', text: 'WHO 2025: breastfeeding under 6 weeks, POPs, implants and progestogen-only injectables are category 2 (injectables changed from 3). From 6 weeks, all category 1.', refs: [{ guidelineId: W25, locator: 'Web annex p.6, p.10' }, { guidelineId: W15 }] },
        { heading: 'IUDs', text: 'WHO 2025: copper IUD within 48 h postpartum while breastfeeding category 1; LNG-IUD category 2. WHO 2015 LNG-IUD: 48 h to 4 weeks category 3; 4 weeks or more category 1. Puerperal sepsis: category 4.', refs: [{ guidelineId: W25, locator: 'Web annex p.16–18' }, { guidelineId: W15, locator: 'item 6b' }] },
        { text: 'MoHFW PPIUCD manual: post-placental, within 48 h, intra-caesarean and over 6 weeks category 1; 48 h–6 weeks, chorioamnionitis and membranes ruptured over 18 h category 3; puerperal sepsis and unresolved PPH category 4.', refs: [{ guidelineId: M, locator: 'Ch. 5' }] },
      ],
    },
    {
      id: 'post-abortion',
      title: 'After Abortion or Miscarriage',
      icon: 'management',
      body: [
        { text: 'Any method can be started immediately after an uncomplicated abortion (UK). IUCD and sterilisation only once infection is excluded or treated.', refs: [{ guidelineId: U }, { guidelineId: F, locator: 'Ch. 2, Table 3' }, { guidelineId: M, locator: 'Ch. 2' }] },
        { text: 'MPA: immediately or within 7 days of a first- or second-trimester abortion with no backup; later starts need 7 days of backup. Pills within 7 days need no backup.', refs: [{ guidelineId: MP, locator: '2.6.1' }, { guidelineId: F, locator: 'p.38, p.56' }] },
        { text: 'Sterilisation: concurrently after a first-trimester abortion; only mini-lap after a second-trimester abortion. The CHO booklet gives a post-abortion IUCD window of within 12 days.', refs: [{ guidelineId: F, locator: 'Table 3' }, { guidelineId: C, locator: '2.1' }] },
        { text: 'US MEC 2024: after first-trimester abortion all methods category 1; IUD after septic abortion category 4.', refs: [{ guidelineId: US }] },
      ],
    },
    {
      id: 'spacing',
      title: 'Birth Spacing Advice',
      icon: 'counselling',
      body: [
        { text: 'India: wait at least 24 months after a live birth (not more than 5 years) before the next pregnancy; ideal spacing between births 3 years (CHO booklet: at least 36 months between births). After abortion or miscarriage, at least 6 months.', refs: [{ guidelineId: M, locator: 'Ch. 1, Ch. 3' }, { guidelineId: C, locator: '1.1' }, { guidelineId: F, locator: 'Ch. 2' }] },
        { text: 'UK local guidance (citing FSRH) uses an interpregnancy interval of at least 12 months.', refs: [{ guidelineId: U }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'DMPA while breastfeeding, under 6 weeks',
      entries: [
        { guidelineId: MP, text: 'Not recommended; start at 6 weeks.', locator: '2.6.1, 4.1' },
        { guidelineId: F, text: 'Start at 6 weeks.', locator: 'Ch. 3B' },
        { guidelineId: W25, text: 'Category 2 (changed from 3).', locator: 'Web annex p.10' },
      ],
    },
    {
      domain: 'Progestogen-only pill start',
      entries: [
        { guidelineId: M, text: 'From 6 weeks, even if breastfeeding.', locator: 'Annexure C' },
        { guidelineId: F, text: 'Immediately postpartum.', locator: 'Ch. 4A' },
        { guidelineId: U, text: 'Any time, including immediately.' },
      ],
    },
    {
      domain: 'IUD between 48 h and 4–6 weeks',
      entries: [
        { guidelineId: M, text: 'Do not insert from 48 h to 6 weeks.', locator: 'Ch. 2' },
        { guidelineId: U, text: 'Delay until 28 days.' },
        { guidelineId: US, text: '10 min to <4 weeks category 2.' },
      ],
    },
  ],
  editorNote:
    'Sources read on 28 Nov 2026 through a summarising fetch tool before the reading limit was hit. MoHFW PPIUCD manual (2010) and MPA manual (2016) were read except their final annexures; the DMPA/COC timings from the PPIUCD job-aid chart were garbled and are not used. The NHSRC CHO booklet has no year or page numbers. The FOGSI handbook (about 2024) is internally inconsistent on combined pill timing for non-breastfeeding women. WHO MEC 2025 main document could not be opened (only the web annex); WHO MEC 2015 Part II tables were not extracted. The FSRH guideline itself was not read; UK content comes from an NHS Lanarkshire guideline citing it. CDC US MEC 2024 content comes from its "changes from 2016" page only. Not read: MoHFW OCP manual, sterilisation manual, IUCD manual 2018, Antara SC guideline.',
};
