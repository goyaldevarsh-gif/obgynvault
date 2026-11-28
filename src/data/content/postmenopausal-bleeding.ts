import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from NICE NG12 (2015, updated Apr 2026), Irish national PMB guideline (HSE/IOG 2022),
 * BMS-led multi-society guideline on unscheduled bleeding on HRT (2026), NHS GGC PMB pathway (2025) and the
 * ACOG CO 734 abstract. No Indian PMB guideline was found.
 */
const N = 'nice-ng12';
const H = 'hse-pmb-2022';
const B = 'bms-hrt-bleeding-2026';
const G = 'nhs-ggc-pmb-486';
const A = 'acog-co-734';

export const postmenopausalBleeding: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Postmenopausal bleeding (PMB) is bleeding 12 months or more after the last period, and up to about 1 in 10 women with it have endometrial cancer, so every episode needs prompt assessment (Ireland: seen within 28 days; NICE: suspected cancer pathway at 55 or over). Examine the vulva, vagina and cervix, then do a transvaginal scan. An endometrium that is fully seen, uniform and 4 mm or less makes cancer very unlikely (negative predictive value over 99%). Sample the endometrium when it is thicker (HRT-dependent thresholds), irregular, not fully seen or has fluid, and use hysteroscopy for focal lesions, tamoxifen users and persistent or recurrent bleeding. Blind sampling alone is not enough, and D&C should not be first line. Unscheduled bleeding on HRT has its own risk-based pathway.',
  keyPoints: [
    { text: 'Definition: bleeding 12 months or more after the final menstrual period in a woman not on HRT. Endometrial cancer is found in up to about 9–10%; about 90% have a benign cause.', refs: [{ guidelineId: H, locator: 'Rec 2, Ch2' }, { guidelineId: G }, { guidelineId: N }] },
    { text: 'NICE: refer on a suspected cancer pathway if aged 55 or over with unexplained PMB not due to HRT; consider it under 55.', refs: [{ guidelineId: N, locator: '1.5.12, 1.5.14' }] },
    { text: 'Transvaginal scan first. Endometrium 4 mm or less, uniform and fully seen: negative predictive value over 99% for cancer (ACOG). Ireland samples at 4 mm or more; NHS GGC above 4 mm.', refs: [{ guidelineId: A }, { guidelineId: H, locator: 'Rec 14' }, { guidelineId: G }] },
    { text: 'Sample regardless of thickness if the endometrium is not fully seen, is irregular, or there is fluid in the cavity (add both layers to measure).', refs: [{ guidelineId: G }, { guidelineId: H, locator: '§2.5' }] },
    { text: 'Hysteroscopy for focal lesions on scan, women on tamoxifen (scan unreliable) and persistent or recurrent bleeding. Blind sampling alone is insufficient; D&C is not first line.', refs: [{ guidelineId: H, locator: 'Recs 15–22' }, { guidelineId: G }, { guidelineId: A }] },
    { text: 'On HRT: thresholds are 4 mm or less with continuous combined HRT and 7 mm or less with sequential HRT. Refer urgently with one major or three minor risk factors.', refs: [{ guidelineId: B, locator: 'pp.4, 11, 22' }, { guidelineId: G }] },
    { text: 'Incidental thick endometrium without bleeding: investigate at 11 mm or more (Ireland; cancer risk 6.7%); between 4 and 11 mm, decide on risk factors. ACOG: over 4 mm need not routinely trigger evaluation.', refs: [{ guidelineId: H, locator: 'Rec 23, §2.7' }, { guidelineId: A }] },
  ],
  sections: [
    {
      id: 'stepwise',
      title: 'Step-by-step Work-up',
      icon: 'management',
      body: [
        {
          text: 'Women not on HRT (Irish national guideline and NHS GGC, with ACOG).',
          refs: [{ guidelineId: H, locator: 'Recs 10–22' }, { guidelineId: G }, { guidelineId: A }, { guidelineId: N, locator: '1.5.12' }],
          flow: {
            caption: 'Postmenopausal bleeding',
            steps: [
              { title: 'Bleeding 12 months or more after menopause', text: 'Fast-track: Ireland within 28 days; NICE suspected cancer pathway at 55 or over. Speculum examination of vulva, vagina and cervix.', tone: 'start' },
              { title: 'Transvaginal scan', tone: 'decision', branches: [
                { when: '4 mm or less, uniform, fully seen', then: 'Low risk; reassure. Reinvestigate if bleeding recurs' },
                { when: 'Over 4 mm (Ireland: 4 mm or more)', then: 'Endometrial sampling (Pipelle) with hysteroscopy' },
                { when: 'Focal lesion, irregular, not fully seen, fluid', then: 'Hysteroscopy and biopsy' },
                { when: 'On tamoxifen', then: 'Hysteroscopy and biopsy (scan unreliable)' },
              ] },
              { title: 'Insufficient tissue', text: 'If endometrium thick: hysteroscopy and repeat biopsy. If hysteroscopy is reassuring, she may be discharged.', tone: 'action' },
              { title: 'Persistent or recurrent bleeding', text: 'Low threshold for hysteroscopy and repeat biopsy (GGC: re-investigate recurrence after 6 months).', tone: 'urgent' },
            ],
          },
        },
      ],
    },
    {
      id: 'thresholds',
      title: 'Endometrial Thickness Thresholds',
      icon: 'imaging',
      body: [
        {
          text: 'Cut-offs for biopsy by situation.',
          refs: [{ guidelineId: H, locator: 'Rec 14, Rec 23' }, { guidelineId: G }, { guidelineId: B, locator: 'p.22' }, { guidelineId: A }],
          table: {
            columns: ['Situation', 'Reassuring', 'Investigate'],
            rows: [
              ['PMB, no HRT', '4 mm or less (NPV over 99%)', 'Ireland 4 mm or more; GGC over 4 mm'],
              ['Bleeding on continuous combined HRT', '4 mm or less', 'Over 4 mm'],
              ['Bleeding on sequential HRT', '7 mm or less', 'Over 7 mm'],
              ['No bleeding, incidental finding', 'Below 11 mm without risk factors (Ireland)', '11 mm or more (Ireland); 10 mm or more on HRT (BMS)'],
              ['Tamoxifen with bleeding', 'Scan not reliable', 'Hysteroscopy and biopsy'],
            ],
          },
        },
        { text: 'Published cut-offs range from 3 to 5 mm; the Irish guideline does not adopt 3 mm. Ultrasound is not a screening tool in women without bleeding.', refs: [{ guidelineId: H, locator: '§2.5' }, { guidelineId: A }] },
      ],
    },
    {
      id: 'sampling',
      title: 'Sampling & Hysteroscopy',
      icon: 'surgery',
      body: [
        { text: 'Pipelle was better than other outpatient sampling devices. Blind sampling alone is not sufficient; isolated D&C should not be first line. Diagnostic hysteroscopy when the scan shows focal pathology, or straight to office hysteroscopy if the endometrium is not fully seen.', refs: [{ guidelineId: H, locator: 'Recs 15, 18–19, §2.5' }] },
        { text: 'If outpatient investigation cannot be completed, schedule day surgery ideally within 7–10 days.', refs: [{ guidelineId: H, locator: '§2.5' }] },
        { text: 'ACOG: after negative blind sampling with persistent bleeding, hysteroscopy with D&C is warranted.', refs: [{ guidelineId: A }] },
        { text: 'Hyperplasia found: manage as per the Endometrial hyperplasia topic (RCOG GTG 67).', refs: [{ guidelineId: B, locator: 'p.26' }] },
      ],
    },
    {
      id: 'hrt',
      title: 'Unscheduled Bleeding on HRT',
      icon: 'drug',
      body: [
        { text: 'Bleeding in the first 6 months of HRT or within 3 months of a change is expected; on continuous combined HRT, amenorrhoea is expected by about 6 months. It is not necessary to stop HRT before assessment.', refs: [{ guidelineId: B, locator: 'pp.7, 19' }, { guidelineId: G }] },
        {
          text: 'BMS 2026 risk factors.',
          refs: [{ guidelineId: B, locator: 'pp.4, 11, 21' }],
          table: {
            columns: ['Major (1 = urgent referral)', 'Minor (3 = urgent referral)'],
            rows: [
              ['BMI 40 or more', 'BMI 30–39'],
              ['Lynch or Cowden syndrome', 'Diabetes'],
              ['Oestrogen-only HRT for over 6 months (with a uterus)', 'Anovulatory cycles'],
              ['Sequential HRT for over 5 years started at 45 or older', 'Progestogen underdosing'],
            ],
          },
        },
        { text: 'Urgent scan within 6 weeks for heavy or prolonged bleeding, two minor risk factors, or bleeding persisting after 6 months of adjustment. Without risk factors, adjust the progestogen or preparation for 6 months in total; consider the 52 mg LNG-IUS. Hysteroscopy is generally preferred for investigation.', refs: [{ guidelineId: B, locator: 'pp.4–5, 21, 24' }] },
        { text: 'Ireland: on sequential HRT, refer if irregular bleeding persists despite adjustment; on continuous combined HRT, refer for bleeding beyond 6 months of starting or after a spell of amenorrhoea. Atypia or cancer: stop HRT and refer to gynae-oncology.', refs: [{ guidelineId: H, locator: 'Recs 25–26' }, { guidelineId: B, locator: 'p.25' }] },
      ],
    },
    {
      id: 'causes',
      title: 'Causes & Risk Factors',
      icon: 'risk',
      body: [
        { text: 'Cancer up to about 9–10%; hyperplasia up to 12.4% (atypical hyperplasia: about 9% progress to cancer). Atrophy is the commonest benign cause; polyps are also common. Over 90% of postmenopausal women with endometrial cancer present with bleeding.', refs: [{ guidelineId: H, locator: 'Ch2, §2.3' }, { guidelineId: G }, { guidelineId: A }] },
        { text: 'Risk factors for endometrial cancer: obesity, unopposed oestrogen, tamoxifen, nulliparity, older age, Lynch syndrome (HNPCC), diabetes.', refs: [{ guidelineId: H, locator: '§2.3' }, { guidelineId: B, locator: 'p.11' }] },
        { text: 'Atrophic findings: offer vaginal oestrogen (BMS); lubricants or moisturisers can ease examination.', refs: [{ guidelineId: B, locator: 'p.5' }, { guidelineId: G }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Endometrial thickness for biopsy (no HRT)',
      entries: [
        { guidelineId: H, text: '4 mm or more.', locator: 'Rec 14' },
        { guidelineId: G, text: 'Over 4 mm.' },
        { guidelineId: A, text: '4 mm or less reassuring (NPV over 99%).' },
      ],
    },
    {
      domain: 'Incidental thick endometrium, no bleeding',
      entries: [
        { guidelineId: H, text: 'Investigate at 11 mm or more.', locator: 'Rec 23' },
        { guidelineId: A, text: 'Over 4 mm need not routinely trigger evaluation.' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. No Indian guideline on postmenopausal bleeding was found: the FOGSI AUB GCPR (2024) and the ICMR image-guided vaginal bleeding workflow do not cover it. ACOG Committee Opinion 734 read as abstract only. The Irish and BMS documents were read to about 90–95%. Not read: SOGC, ESGO-ESTRO-ESP 2020. No source gave a vaginal oestrogen regimen or said when atrophy can be accepted as the cause without endometrial assessment.',
};
