import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from NACO 2024 (pp. 1–36 only), NACO kit specification 2023,
 * CDC STI Treatment Guidelines 2021 (PID, BV, VVC, trichomoniasis). BASHH, WHO 2021, FOGSI not read.
 */
const NG = 'naco-sti-2024';
const NK = 'naco-kits-2023';
const CP = 'cdc-pid-2021';
const CB = 'cdc-bv-2021';
const CV = 'cdc-vvc-2021';
const CT = 'cdc-trich-2021';

export const pidVaginalDischarge: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'In India, NACO manages reproductive tract infections syndromically with pre-packaged colour-coded kits: Kit 2 (green) for vaginitis and Kit 6 (yellow) for lower abdominal pain (PID). Treat PID presumptively when a sexually active woman has pelvic pain with cervical motion, uterine or adnexal tenderness and no other cause. Most women can be treated as outpatients; admit for pregnancy, tubo-ovarian abscess, severe illness, a possible surgical emergency or failure of oral treatment, and review at 72 hours. For discharge, separate bacterial vaginosis, candidiasis and trichomoniasis by examination and simple tests; avoid oral fluconazole, tinidazole and secnidazole in pregnancy (CDC). Treat partners for PID and trichomonas, not for BV or candida.',
  keyPoints: [
    { text: 'PID: treat presumptively if there is pelvic or lower abdominal pain, no other cause, and cervical motion, uterine or adnexal tenderness. NACO: cervical movement and/or adnexal tenderness suggests PID.', refs: [{ guidelineId: CP, locator: 'Diagnostic considerations' }, { guidelineId: NG, locator: 'p.23, Box 2.4' }] },
    { text: 'NACO Kit 6 (yellow, lower abdominal pain): cefixime 400 mg (1 tablet) + metronidazole 400 mg + doxycycline 100 mg (28 tablets each). Check dosing on the kit label.', refs: [{ guidelineId: NK, locator: 'pp.2–4' }] },
    { text: 'CDC outpatient PID: ceftriaxone 500 mg IM once + doxycycline 100 mg twice daily for 14 days + metronidazole 500 mg twice daily for 14 days.', refs: [{ guidelineId: CP, locator: 'IM/oral regimens' }] },
    { text: 'Admit if: surgical emergency not excluded, tubo-ovarian abscess, pregnancy, severe illness/vomiting/temperature over 38.5°C, cannot take oral treatment, or no response. Review at 72 hours; no improvement means admission and reassessment.', refs: [{ guidelineId: CP, locator: 'Hospitalization; Follow-up' }] },
    { text: 'IUD in situ: it does not need removal; consider removal if no improvement in 48–72 hours.', refs: [{ guidelineId: CP, locator: 'IUD' }] },
    { text: 'Partners: test and treat partners from the 60 days before symptoms (PID) and all partners at the same time (trichomonas). Routine partner treatment is not recommended for BV or candida.', refs: [{ guidelineId: CP, locator: 'Partners' }, { guidelineId: CT, locator: 'Partners' }, { guidelineId: CB }, { guidelineId: CV }] },
    { text: 'NACO Kit 2 (green, vaginitis): secnidazole 1 g × 2 tablets + fluconazole 150 mg × 1 tablet.', refs: [{ guidelineId: NK, locator: 'pp.2–4' }] },
    { text: 'Pregnancy (CDC): BV and trichomonas: metronidazole is fine, avoid tinidazole and secnidazole; candida: topical azole for 7 days only, no oral fluconazole.', refs: [{ guidelineId: CB, locator: 'Pregnancy' }, { guidelineId: CT, locator: 'Pregnancy' }, { guidelineId: CV, locator: 'Pregnancy' }] },
  ],
  sections: [
    {
      id: 'pid-management',
      title: 'PID: Step-by-step Management',
      icon: 'management',
      body: [
        {
          text: 'Pathway combining the NACO kit with CDC criteria.',
          refs: [{ guidelineId: CP }, { guidelineId: NK, locator: 'Kit 6' }],
          flow: {
            caption: 'Lower abdominal pain / suspected PID',
            steps: [
              { title: 'Pelvic pain + cervical motion, uterine or adnexal tenderness', text: 'Exclude ectopic (pregnancy test), appendicitis and other causes.' },
              { title: 'Admit if any:', text: 'Pregnancy, tubo-ovarian abscess, surgical emergency not excluded, severe illness / vomiting / temp over 38.5°C, cannot take oral drugs.', tone: 'urgent' },
              { title: 'Otherwise outpatient:', tone: 'decision', branches: [
                { when: 'NACO (India)', then: 'Kit 6 (yellow): cefixime 400 mg + metronidazole 400 mg + doxycycline 100 mg' },
                { when: 'CDC', then: 'Ceftriaxone 500 mg IM + doxycycline 100 mg BD + metronidazole 500 mg BD, 14 days' },
              ] },
              { title: 'Review at 72 hours', text: 'No improvement: admit, reassess, further investigation. Treat partners.' },
            ],
          },
        },
        { heading: 'Supportive findings', text: 'Oral temperature over 38.3°C; mucopurulent cervical discharge or friability; abundant WBCs on saline microscopy; raised ESR or CRP; laboratory-confirmed gonorrhoea or chlamydia.', refs: [{ guidelineId: CP, locator: 'Diagnostic considerations' }] },
        { heading: 'Inpatient (CDC)', text: 'Ceftriaxone 1 g IV every 24 h + doxycycline 100 mg orally or IV every 12 h + metronidazole 500 mg orally or IV every 12 h; or cefotetan 2 g IV every 12 h or cefoxitin 2 g IV every 6 h, each with doxycycline. Switch to oral within 24–48 h of improvement and complete 14 days of doxycycline 100 mg and metronidazole 500 mg twice daily.', refs: [{ guidelineId: CP, locator: 'Parenteral regimens' }] },
        { text: 'Alternative parenteral: clindamycin 900 mg IV every 8 h + gentamicin 2 mg/kg loading then 1.5 mg/kg every 8 h (or 3–5 mg/kg once daily); or ampicillin–sulbactam 3 g IV every 6 h + doxycycline.', refs: [{ guidelineId: CP, locator: 'Alternative parenteral regimens' }] },
        { heading: 'Cephalosporin allergy (CDC)', text: 'Only if gonorrhoea risk is low and follow-up likely: levofloxacin 500 mg once daily + metronidazole 500 mg twice daily for 14 days, or moxifloxacin 400 mg once daily for 14 days.', refs: [{ guidelineId: CP, locator: 'Alternative oral regimens' }] },
        { heading: 'Pregnancy', text: 'Admit and give IV antibiotics, with infectious disease input (high risk of maternal morbidity and preterm birth).', refs: [{ guidelineId: CP, locator: 'Pregnancy' }] },
        { heading: 'Follow-up', text: 'Expect improvement within 3 days. Retest women with chlamydial or gonococcal PID 3 months after treatment.', refs: [{ guidelineId: CP, locator: 'Follow-up' }] },
      ],
    },
    {
      id: 'discharge',
      title: 'Vaginal Discharge: Which Infection?',
      icon: 'diagnosis',
      body: [
        { text: 'NACO: white, curd-like discharge strongly suggests candidiasis; a strawberry cervix suggests trichomoniasis.', refs: [{ guidelineId: NG, locator: 'p.22, Box 2.3' }] },
        {
          text: 'Distinguishing features (CDC).',
          refs: [{ guidelineId: CB, locator: 'Diagnosis' }, { guidelineId: CV, locator: 'Diagnosis' }, { guidelineId: CT, locator: 'Diagnosis' }],
          table: {
            columns: ['Infection', 'Diagnosis'],
            rows: [
              ['Bacterial vaginosis', 'Amsel 3 of 4: thin homogeneous discharge, clue cells, pH over 4.5, positive whiff test; or Nugent 7–10'],
              ['Candidiasis', 'KOH wet mount or culture, normal pH (under 4.5); do not treat a positive culture without symptoms'],
              ['Trichomoniasis', 'NAAT preferred; wet mount is only 44–68% sensitive, so follow a negative with NAAT'],
            ],
          },
        },
        { heading: 'Syndromic kit (NACO)', text: 'Kit 2 (green) for vaginitis: secnidazole 1 g (two tablets) and fluconazole 150 mg (one tablet). Kit 1 (grey) for cervicitis: azithromycin 1 g and cefixime 400 mg, one tablet each.', refs: [{ guidelineId: NK, locator: 'pp.2–4' }] },
      ],
    },
    {
      id: 'regimens',
      title: 'Treatment Regimens (CDC)',
      icon: 'drug',
      body: [
        {
          text: 'Recommended first-line regimens.',
          refs: [{ guidelineId: CB, locator: 'Recommended regimens' }, { guidelineId: CV, locator: 'Uncomplicated VVC' }, { guidelineId: CT, locator: 'Treatment' }],
          table: {
            columns: ['Infection', 'First line', 'Alternatives'],
            rows: [
              ['Bacterial vaginosis', 'Metronidazole 500 mg orally twice daily × 7 days; or metronidazole 0.75% gel 5 g vaginally daily × 5 days; or clindamycin 2% cream 5 g at bedtime × 7 days', 'Clindamycin 300 mg orally twice daily × 7 days; clindamycin 100 mg ovules × 3 days; secnidazole 2 g once; tinidazole 2 g daily × 2 days or 1 g daily × 5 days'],
              ['Candidiasis (uncomplicated)', 'Fluconazole 150 mg orally once; or a topical azole (e.g. clotrimazole 2% cream 5 g × 3 days, miconazole 200 mg pessary × 3 days)', 'Other topical azoles, 1–14 days by product'],
              ['Trichomoniasis', 'Women: metronidazole 500 mg orally twice daily × 7 days', 'Tinidazole 2 g once'],
            ],
          },
        },
        { heading: 'Severe or recurrent candidiasis', text: 'Severe: topical azole 7–14 days or fluconazole 150 mg two doses 72 h apart. Recurrent (3 or more in a year): induction with topical azole 7–14 days or fluconazole 100/150/200 mg on days 1, 4 and 7, then weekly fluconazole for 6 months. Non-albicans: non-fluconazole azole 7–14 days; if it recurs, boric acid 600 mg vaginally daily for 3 weeks.', refs: [{ guidelineId: CV, locator: 'Complicated VVC' }] },
        { heading: 'Recurrent BV', text: 'Metronidazole 0.75% gel twice weekly for more than 3 months after multiple recurrences.', refs: [{ guidelineId: CB, locator: 'Recurrent BV' }] },
        { heading: 'Trichomonas follow-up', text: 'Retest about 3 months after treatment. Failure with re-exposure: repeat the 7-day course; without re-exposure: metronidazole or tinidazole 2 g daily for 7 days.', refs: [{ guidelineId: CT, locator: 'Follow-up; Treatment failure' }] },
        { heading: 'Trichomonas: NACO differs', text: 'NACO lists metronidazole 2 g orally as a single dose (persistent urethral discharge table); CDC prefers 7 days for women.', refs: [{ guidelineId: NG, locator: 'p.35, Table 3.3' }, { guidelineId: CT }] },
      ],
    },
    {
      id: 'pregnancy',
      title: 'Pregnancy & Breastfeeding',
      icon: 'fetus',
      body: [
        { text: 'BV: treat if symptomatic with any recommended regimen, or oral clindamycin or clindamycin ovules; avoid tinidazole and secnidazole. No routine screening of asymptomatic women.', refs: [{ guidelineId: CB, locator: 'Pregnancy' }] },
        { text: 'Candidiasis: topical azole for 7 days only; do not use oral fluconazole.', refs: [{ guidelineId: CV, locator: 'Pregnancy' }] },
        { text: 'Trichomoniasis: treat symptomatic women at any stage with metronidazole; avoid tinidazole. Breastfeeding: some clinicians defer feeds 12–24 h after metronidazole, 72 h after tinidazole 2 g.', refs: [{ guidelineId: CT, locator: 'Pregnancy; Breastfeeding' }] },
        { text: 'NACO Kit 2 contains secnidazole and fluconazole, which CDC advises against in pregnancy; the NACO pregnancy alternative has not been read yet.', refs: [{ guidelineId: NK }, { guidelineId: CV, locator: 'Pregnancy' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'PID outpatient regimen',
      entries: [
        { guidelineId: NK, text: 'Kit 6: oral cefixime 400 mg + metronidazole 400 mg + doxycycline 100 mg.', locator: 'Kit 6' },
        { guidelineId: CP, text: 'Ceftriaxone 500 mg IM + doxycycline + metronidazole 500 mg, 14 days.', locator: 'IM/oral regimens' },
      ],
    },
    {
      domain: 'Trichomonas in women',
      entries: [
        { guidelineId: NG, text: 'Metronidazole 2 g single dose.', locator: 'Table 3.3' },
        { guidelineId: CT, text: 'Metronidazole 500 mg twice daily for 7 days.' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. NACO 2024 guideline: only pp. 1–36 could be extracted, so the vaginal discharge and lower abdominal pain flowcharts, NACO regimens, referral criteria and pregnancy alternatives are not included. NACO kit specification 2023: contents and quantities only; label dosing for kits 4–6 was unreadable, so no NACO schedule is given. CDC 2021 PID, BV, VVC and trichomoniasis pages read in full (VVC via a paraphrasing tool). Not read: BASHH PID 2019 and vaginal discharge guidelines, WHO 2021 symptomatic STI guideline, CDC cervicitis, any FOGSI document.',
};
