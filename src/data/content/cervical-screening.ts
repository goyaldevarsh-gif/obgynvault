import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI–ICOG GCPR cervical cancer (June 2024), read in full  -> fogsi-cxca-gcpr
 *  - MoHFW common NCD operational guidelines (~2016)             -> mohfw-ncd-ops
 *  - MoHFW NP-NCD operational guidelines 2023–2030 (~90%)        -> mohfw-npncd-2023
 *  - PIB note on national HPV vaccination programme (Feb 2026)   -> mohfw-hpv-2026
 *  - WHO 2021 guideline (news, Q&A, Bookshelf copy of chapters)  -> who-cxca
 *  - NHS Cervical Screening Programme pages (July 2025)          -> nhscsp-2025
 *  - USPSTF 2018; ASCCP 2019 (PMC); ACOG 2026 via news only      -> uspstf-cxca-2018, asccp-2019, acog-cxca-2026
 */
const F = 'fogsi-cxca-gcpr';
const M = 'mohfw-ncd-ops';
const MN = 'mohfw-npncd-2023';
const MV = 'mohfw-hpv-2026';
const W = 'who-cxca';
const UK = 'nhscsp-2025';
const US = 'uspstf-cxca-2018';
const A = 'acog-cxca-2026';
const AS = 'asccp-2019';

export const cervicalScreening: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Cervical cancer is largely preventable by HPV vaccination and by screening to find and treat pre-cancer. The best screening test is high-risk HPV DNA testing, which WHO strongly recommends over VIA or cytology; a sample can be taken by the provider or by the woman herself. In India the national programme still screens women aged 30 and above with VIA every five years at primary care level, treating eligible lesions by ablation; FOGSI recommends HPV testing every 5–10 years where available, cytology every 3 years or VIA every 3–5 years, from 30 (25 in well-resourced settings) to 65. HPV-positive women are either treated directly after checking eligibility for ablation (screen-and-treat) or triaged first by VIA, colposcopy, cytology or genotyping. Women living with HIV start at 25 and are screened more often. India began single-dose HPV vaccination of 14-year-old girls in February 2026. Vaccinated women still need screening.',
  keyPoints: [
    { text: 'HPV DNA testing is the preferred primary test (WHO strong recommendation); FOGSI also prefers it. VIA or cytology are used where HPV testing is not available.', refs: [{ guidelineId: W, locator: 'Ch. 4' }, { guidelineId: F, locator: 'Table 5' }] },
    { text: 'India programme: VIA for all women aged 30 and above, once every five years, by trained nurses, ANMs or medical officers at primary level.', refs: [{ guidelineId: M, locator: 'iii' }, { guidelineId: MN, locator: 'Ch. 4' }] },
    { text: 'FOGSI: start at 30 (25 in well-resourced settings), stop at 65 after adequate negative screening. Intervals: HPV every 5–10 years, cytology every 3 years, VIA every 3–5 years; at least twice in a lifetime (35 and 45) in low-resource settings.', refs: [{ guidelineId: F, locator: 'Table 5' }] },
    { text: 'HPV-positive: either treat after checking ablation eligibility (screen-and-treat) or triage with VIA, colposcopy, cytology or genotyping before treating.', refs: [{ guidelineId: W, locator: 'Ch. 4' }, { guidelineId: F, locator: 'p. 7' }] },
    { text: 'Ablation (thermal ablation or cryotherapy) if the transformation zone is type 1, the whole lesion is visible and there is no suspicion of invasive or glandular disease. Otherwise LLETZ/LEEP or cone biopsy.', refs: [{ guidelineId: W, locator: 'Ch. 3' }, { guidelineId: F, locator: 'pp. 7–8' }] },
    { text: 'After treatment, retest with HPV DNA at 12 months.', refs: [{ guidelineId: W, locator: 'Ch. 4' }, { guidelineId: F }] },
    { text: 'Women living with HIV: start at 25 and screen every 3–5 years with HPV DNA in a screen-triage-and-treat approach.', refs: [{ guidelineId: W }, { guidelineId: F, locator: 'p. 9' }] },
    { text: 'India national HPV vaccination (from 28 Feb 2026): single dose of Gardasil-4 for girls aged 14. FOGSI schedule: 2 doses at 9–14 years, 3 doses from 15 years. Vaccination does not replace screening.', refs: [{ guidelineId: MV }, { guidelineId: F, locator: 'Table 1' }] },
  ],
  sections: [
    {
      id: 'who-when',
      title: 'Who, When & How Often',
      icon: 'screening',
      body: [
        {
          text: 'Start, stop and interval by source:',
          refs: [{ guidelineId: M }, { guidelineId: F, locator: 'Table 5' }, { guidelineId: W }, { guidelineId: UK, locator: '1–2' }, { guidelineId: US }],
          table: {
            columns: ['Source', 'Start', 'Primary test and interval', 'Stop'],
            rows: [
              ['MoHFW India', 'Over 30', 'VIA every 5 years', 'Not stated'],
              ['FOGSI 2024', '30 (25 if well resourced)', 'HPV 5–10 yr; cytology 3 yr; VIA 3–5 yr', '65 with 3 negative cytology, or 2 negative HPV tests in 10 years'],
              ['WHO 2021', '30', 'HPV DNA every 5–10 yr; VIA or cytology every 3 yr if no HPV test', 'After 50 with 2 consecutive negative results'],
              ['NHS England', '24.5', 'HPV with cytology triage; 5-yearly if HPV-negative', 'Ceased at 60+ if the next test would fall after 65'],
              ['USPSTF 2018', '21', 'Cytology 3 yr (21–29); at 30–65 cytology 3 yr, HPV 5 yr or co-test 5 yr', 'Over 65 with adequate prior screening'],
            ],
          },
        },
        { text: 'WHO: screening even twice in a lifetime is beneficial. FOGSI suggests ages 35 and 45 where resources are limited.', refs: [{ guidelineId: W }, { guidelineId: F, locator: 'Table 5' }] },
        { text: 'ACOG 2026 (seen only via a news report): primary hrHPV every 5 years is preferred at 30–65, co-testing is acceptable, and self-collection is now an option.', refs: [{ guidelineId: A }] },
        { text: 'Do not screen after hysterectomy with removal of the cervix for benign disease. Continue if the hysterectomy was for cancer or pre-cancer.', refs: [{ guidelineId: F, locator: 'Table 5' }, { guidelineId: US }] },
      ],
    },
    {
      id: 'tests',
      title: 'Screening Tests',
      icon: 'lab',
      body: [
        {
          text: 'Sensitivity for CIN2+ (FOGSI):',
          refs: [{ guidelineId: F, locator: 'Table 4' }],
          table: {
            columns: ['Test', 'Sensitivity'],
            rows: [['Cytology (Pap/LBC)', '62.5–72.9%'], ['VIA', '74.2–79.4%'], ['HPV DNA', '94%']],
          },
        },
        { heading: 'HPV DNA', text: 'Use a clinically validated PCR-based high-risk HPV test. Provider-collected or self-collected samples are both acceptable.', refs: [{ guidelineId: F, locator: 'p. 6' }, { guidelineId: W, locator: 'Ch. 4' }] },
        { heading: 'VIA', text: 'Apply about 5% acetic acid and inspect after 1 minute. Needs space for a speculum examination and sterilisation; staff are trained for about 2 weeks.', refs: [{ guidelineId: F, locator: 'p. 6' }, { guidelineId: M, locator: 'vii' }] },
        { heading: 'Cytology', text: 'Conventional Pap or liquid-based cytology, reported using the Bethesda system.', refs: [{ guidelineId: F, locator: 'p. 6' }] },
      ],
    },
    {
      id: 'positive',
      title: 'Managing a Positive Screen',
      icon: 'management',
      body: [
        {
          text: 'Screening and management pathway (WHO 2021, FOGSI–ICOG GCPR 2024, MoHFW).',
          refs: [{ guidelineId: W, locator: 'Ch. 4' }, { guidelineId: F }, { guidelineId: M }],
          flow: {
            caption: 'Cervical screening (India)',
            steps: [
              { title: 'Screen from 30', text: 'HPV DNA preferred (every 5–10 years); VIA every 3–5 years (programme: every 5) or cytology every 3 years if no HPV test. HIV: from 25, every 3–5 years.', tone: 'start' },
              { title: 'Result', tone: 'decision', branches: [
                { when: 'Negative', then: 'Rescreen at the interval' },
                { when: 'HPV-positive', then: 'Screen-and-treat, or triage with VIA, colposcopy, cytology or HPV16/18' },
                { when: 'VIA-positive (programme)', then: 'Refer to CHC or district hospital for colposcopy and treatment' },
                { when: 'Suspicious of cancer', then: 'Biopsy and refer to a cancer centre' },
              ] },
              { title: 'Treat', tone: 'decision', branches: [
                { when: 'Ablation eligible', then: 'Type 1 TZ, whole lesion visible: thermal ablation or cryotherapy' },
                { when: 'Not eligible', then: 'LLETZ/LEEP or cone biopsy' },
              ] },
              { title: 'Follow-up', text: 'HPV DNA at 12 months after treatment. HPV-positive but triage-negative: retest at 24 months.' },
            ],
          },
        },
        { heading: 'Screen-and-treat', text: 'Every HPV-positive woman is treated, after a visual check (with acetic acid) of eligibility for ablation. Allows treatment at a single visit, at the cost of some overtreatment.', refs: [{ guidelineId: W, locator: 'Ch. 3' }, { guidelineId: F, locator: 'p. 7' }] },
        { heading: 'Screen-triage-and-treat', text: 'HPV-positive women are triaged with partial genotyping (HPV16/18), colposcopy, VIA or cytology, and only triage-positive women are treated. FOGSI favours triage by colposcopy or VIA where possible.', refs: [{ guidelineId: W, locator: 'Ch. 4' }, { guidelineId: F, locator: 'p. 7, Algorithm 4' }] },
        { text: 'WHO follow-up: HPV-positive but triage-negative, retest with HPV DNA at 24 months; cytology-positive with normal colposcopy, retest at 12 months.', refs: [{ guidelineId: W, locator: 'Ch. 4' }] },
        { text: 'India programme: VIA-positive women are referred to the CHC or district hospital for confirmation, colposcopy and cryotherapy; biopsy-needing cases go to the district or tertiary centre.', refs: [{ guidelineId: M, locator: 'iii' }, { guidelineId: MN, locator: 'Ch. 4' }] },
        { text: 'NHS England: HPV-positive with abnormal cytology, refer for colposcopy; HPV-positive with normal cytology, repeat in 12 months, and refer at the third consecutive HPV-positive result.', refs: [{ guidelineId: UK, locator: 'Care pathway' }] },
        { text: 'US (ASCCP 2019): management is based on risk. Refer for colposcopy when the immediate risk of CIN3+ is 4% or more; HPV16/18-positive with normal cytology goes straight to colposcopy.', refs: [{ guidelineId: AS }] },
      ],
    },
    {
      id: 'treatment',
      title: 'Treatment of Pre-cancer',
      icon: 'surgery',
      body: [
        {
          text: 'Choosing the treatment:',
          refs: [{ guidelineId: W, locator: 'Ch. 3' }, { guidelineId: F, locator: 'pp. 7–8' }],
          table: {
            columns: ['Situation', 'Treatment'],
            rows: [
              ['Type 1 transformation zone, whole lesion visible, no endocervical extension, no suspicion of invasive or glandular disease', 'Ablation: thermal ablation or cryotherapy'],
              ['Not eligible for ablation (type 2/3 zone, large lesion, suspected glandular disease)', 'LLETZ/LEEP or cold-knife cone'],
              ['Suspected invasive cancer', 'Biopsy and referral to a cancer centre'],
            ],
          },
        },
        { text: 'The Indian NCD guidelines name only cryotherapy at primary level; FOGSI allows cryotherapy or thermal ablation.', refs: [{ guidelineId: M }, { guidelineId: F }] },
        { text: 'About 10% of ablations fail; excision has lower failure rates.', refs: [{ guidelineId: W, locator: 'Ch. 4' }] },
        { text: 'CIN1: FOGSI advises repeat cytology at 1–2 years rather than treatment.', refs: [{ guidelineId: F }] },
      ],
    },
    {
      id: 'follow-up',
      title: 'Follow-up After Treatment',
      icon: 'monitoring',
      body: [
        { text: 'WHO: retest with HPV DNA at 12 months, rather than cytology, VIA or co-testing. FOGSI: HPV DNA at 1 year (preferred) or cytology.', refs: [{ guidelineId: W, locator: 'Ch. 4' }, { guidelineId: F }] },
        { text: 'NHS England: test of cure at 6 months after treatment of CIN2/3; HPV-positive at that point goes back to colposcopy.', refs: [{ guidelineId: UK, locator: 'Care pathway' }] },
        { text: 'ASCCP: after treatment of HSIL, CIN2/3 or AIS, HPV testing or co-testing every 3 years for at least 25 years.', refs: [{ guidelineId: AS }] },
      ],
    },
    {
      id: 'special',
      title: 'Special Groups',
      icon: 'risk',
      body: [
        { heading: 'Women living with HIV', text: 'Start at 25, screen every 3–5 years with HPV DNA, using screen-triage-and-treat, and follow up sooner after a positive test or treatment (FOGSI: 12 and 24 months). FOGSI Table 5 says the interval should not exceed 3 years, which conflicts with its own 3–5 year text.', refs: [{ guidelineId: W }, { guidelineId: F, locator: 'p. 9, Table 5' }] },
        { heading: 'Pregnancy', text: 'If screen-positive during pregnancy, it is good practice to defer treatment until after delivery. ASCCP: CIN3 is treated except during pregnancy.', refs: [{ guidelineId: F, locator: 'p. 9' }, { guidelineId: AS }] },
        { heading: 'Vaccinated women', text: 'HPV vaccination does not remove the need for screening.', refs: [{ guidelineId: F, locator: 'p. 5' }] },
      ],
    },
    {
      id: 'vaccination',
      title: 'HPV Vaccination',
      icon: 'injection',
      body: [
        { text: 'India national programme (launched 28 February 2026): a single dose of Gardasil-4 for about 1.15 crore girls aged 14, given only at government facilities with a medical officer present. Not given in pregnancy or with yeast or previous vaccine allergy.', refs: [{ guidelineId: MV }] },
        {
          text: 'FOGSI schedule:',
          refs: [{ guidelineId: F, locator: 'Table 1' }],
          table: {
            columns: ['Group', 'Schedule'],
            rows: [
              ['Girls and boys 9–14', '2 doses, at least 6 months apart'],
              ['15–26 years', '3 doses (0, 1–2, 6 months)'],
              ['Women up to 45', '3 doses'],
              ['Single dose, 9–20 years', 'Alternative, pending DCGI approval'],
            ],
          },
        },
        { text: 'Licensed ages: Cervarix 10–45 (girls); Gardasil-4 and Gardasil-9 9–45; Cervavac 9–26 (girls and boys).', refs: [{ guidelineId: F, locator: 'p. 5' }] },
        { text: 'Not recommended in pregnancy; if pregnancy occurs mid-course, complete after delivery. Inadvertent vaccination in pregnancy is not a reason for termination. Safe while breastfeeding.', refs: [{ guidelineId: F, locator: 'p. 5' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Age to start',
      entries: [
        { guidelineId: M, text: 'Over 30.' },
        { guidelineId: F, text: '30; 25 in well-resourced settings.', locator: 'Table 5' },
        { guidelineId: W, text: '30 (25 if living with HIV).' },
        { guidelineId: UK, text: '24.5.' },
        { guidelineId: US, text: '21.' },
      ],
    },
    {
      domain: 'Primary test',
      entries: [
        { guidelineId: M, text: 'VIA.' },
        { guidelineId: F, text: 'hrHPV preferred; VIA or cytology allowed.' },
        { guidelineId: W, text: 'HPV DNA (strong recommendation).' },
        { guidelineId: UK, text: 'HPV with cytology triage.' },
        { guidelineId: US, text: 'Cytology, HPV alone or co-test.' },
      ],
    },
    {
      domain: 'When to stop',
      entries: [
        { guidelineId: F, text: '65 after adequate negative screening.', locator: 'Table 5' },
        { guidelineId: W, text: 'After 50 with two consecutive negatives.' },
        { guidelineId: US, text: 'Over 65 with adequate prior screening.' },
      ],
    },
    {
      domain: 'HPV vaccine doses',
      entries: [
        { guidelineId: MV, text: 'Single dose of Gardasil-4 at age 14 (national programme).' },
        { guidelineId: F, text: '2 doses at 9–14; single dose as an alternative pending DCGI approval.', locator: 'Table 1' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI–ICOG GCPR (June 2024) in full; two MoHFW NCD operational guidelines (no upper age for VIA was seen, so the commonly quoted "30–65" could not be confirmed); the PIB note on the national HPV programme; WHO 2021 via its news release, Q&A and an NCBI Bookshelf mirror (recommendations for women living with HIV not read in full); NHS England programme and care-pathway pages; USPSTF 2018 (update in progress); and ASCCP 2019 from PMC. The ACOG 2026 update was seen only through a news report, and the ACOG 2021 advisory, ACS 2020, NICE CKS, RCOG and ICMR documents were not read. The FOGSI wording on referral of type 2/3 transformation zones and the NHS post-treatment recall interval were ambiguous in extraction. Check all figures against the originals.',
};
