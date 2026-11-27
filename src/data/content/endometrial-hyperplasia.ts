import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from RCOG/BSGE Green-top Guideline No. 67 (2016) only -> rcog-gtg-67.
 * Grades were not recoverable from the extracted text. PMB work-up not covered (NICE NG12, ACOG CO 734 not read).
 */
const R = 'rcog-gtg-67';

export const endometrialHyperplasia: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Endometrial hyperplasia is classified by the WHO 2014 system into hyperplasia without atypia and atypical hyperplasia, and diagnosis needs histology. Without atypia, the risk of progression to cancer is under 5% over 20 years: correct risk factors (obesity, unopposed oestrogen), then treat with the LNG-IUS first line (continuous oral progestogens if declined) for at least 6 months, with biopsy every 6 months until two are negative. Atypical hyperplasia is managed by total hysterectomy, preferably laparoscopic; women who want fertility or are unfit for surgery can have LNG-IUS or oral progestogens after MDT discussion, with 3-monthly biopsies.',
  keyPoints: [
    { text: 'Use the WHO 2014 classification: hyperplasia without atypia vs atypical hyperplasia. Diagnosis requires histology.', refs: [{ guidelineId: R, locator: '§5–6' }] },
    { text: 'Without atypia: progression risk under 5% over 20 years; correct reversible risk factors (obesity, HRT). Progestogens give higher regression than observation alone; treat if no regression on observation or if there is abnormal bleeding.', refs: [{ guidelineId: R, locator: '§7.1' }] },
    { text: 'First line: LNG-IUS. If declined: continuous oral medroxyprogesterone 10–20 mg/day or norethisterone 10–15 mg/day. Do not use cyclical progestogens.', refs: [{ guidelineId: R, locator: '§7.2' }] },
    { text: 'Treat for at least 6 months; biopsy at least 6-monthly and discharge after two consecutive negative biopsies. BMI 35 or more or oral progestogen: consider annual biopsy long term after that.', refs: [{ guidelineId: R, locator: '§7.3' }] },
    { text: 'Hysterectomy (without atypia) is not first line; it is indicated, if fertility is not wanted, for progression to atypia, no regression after 12 months, relapse, persistent bleeding, or declining surveillance.', refs: [{ guidelineId: R, locator: '§7.4' }] },
    { text: 'Atypical hyperplasia: total hysterectomy, laparoscopic preferred; postmenopausal women also have BSO. No supracervical hysterectomy, no endometrial ablation, no routine frozen section or lymphadenectomy.', refs: [{ guidelineId: R, locator: '§8.1' }] },
    { text: 'Fertility-sparing for atypia: exclude invasive endometrial or coexisting ovarian cancer, discuss at MDT, use LNG-IUS (oral progestogen second best), biopsy 3-monthly until two negatives, then every 6–12 months; hysterectomy once fertility is no longer needed.', refs: [{ guidelineId: R, locator: '§8.2–8.3' }] },
  ],
  sections: [
    {
      id: 'no-atypia',
      title: 'Hyperplasia Without Atypia: Step-by-step',
      icon: 'management',
      body: [
        {
          text: 'Stepwise pathway as set out in GTG 67.',
          refs: [{ guidelineId: R, locator: '§7.1–7.4' }],
          flow: {
            caption: 'Hyperplasia without atypia (RCOG GTG 67)',
            steps: [
              { title: 'Histology: hyperplasia without atypia', text: 'Counsel: under 5% progression over 20 years; most regress.' },
              { title: 'Correct risk factors', text: 'Weight loss if BMI over 30; review HRT (no unopposed oestrogen with a uterus).' },
              { title: 'Treat with progestogen', text: 'Observation alone is possible, but treat if no regression or abnormal bleeding.', tone: 'decision', branches: [
                { when: 'First line', then: 'LNG-IUS (can stay up to 5 years if fertility not wanted)' },
                { when: 'LNG-IUS declined', then: 'Continuous MPA 10–20 mg/day or norethisterone 10–15 mg/day; not cyclical' },
              ] },
              { title: 'At least 6 months, biopsy 6-monthly', text: 'Discharge after 2 consecutive negative biopsies. BMI 35+ or oral progestogen: then consider annual biopsy.' },
              { title: 'Hysterectomy if fertility not wanted and:', text: 'Progression to atypia, no regression at 12 months, relapse, persistent bleeding, or declines surveillance.', tone: 'urgent' },
            ],
          },
        },
        { heading: 'Observation', text: 'Observation with follow-up biopsies can be considered, especially where a reversible cause is corrected, but regression rates are higher with progestogens.', refs: [{ guidelineId: R, locator: '§7.1' }] },
        { heading: 'Progestogens', text: 'LNG-IUS is first line. Continuous oral progestogens (medroxyprogesterone 10–20 mg/day or norethisterone 10–15 mg/day) for women who decline it. Cyclical progestogens should not be used.', refs: [{ guidelineId: R, locator: '§7.2' }] },
        { heading: 'Duration & surveillance', text: 'Treat for at least 6 months to induce regression. Endometrial biopsy at least every 6 months, individualised; discharge after at least two consecutive 6-monthly negative biopsies, with advice to return urgently if bleeding recurs. Higher-risk women (BMI 35 or more, or on oral progestogens) have 6-monthly biopsies and, after two negatives, long-term annual biopsy can be considered.', refs: [{ guidelineId: R, locator: '§7.3' }] },
      ],
    },
    {
      id: 'surgery-no-atypia',
      title: 'Surgery for Hyperplasia Without Atypia',
      icon: 'surgery',
      body: [
        { text: 'Hysterectomy is not first line. Offer it to women who do not want to preserve fertility if there is progression to atypia, no regression despite 12 months of treatment, relapse after completing treatment, persistent bleeding, or the woman declines surveillance or medical treatment.', refs: [{ guidelineId: R, locator: '§7.4' }] },
        { text: 'Postmenopausal women: total hysterectomy with bilateral salpingo-oophorectomy. Premenopausal women: individualise removal of ovaries and consider bilateral salpingectomy. Laparoscopic route preferred; avoid supracervical (subtotal) hysterectomy. Endometrial ablation is not recommended.', refs: [{ guidelineId: R, locator: '§7.4' }] },
      ],
    },
    {
      id: 'atypia',
      title: 'Atypical Hyperplasia',
      icon: 'surgery',
      body: [
        { heading: 'Surgery', text: 'Total hysterectomy, laparoscopic route preferred, because of the risk of underlying malignancy or progression. Intraoperative frozen section and routine lymphadenectomy give no benefit. Postmenopausal women: bilateral salpingo-oophorectomy; premenopausal: individualise ovarian removal and consider bilateral salpingectomy. Endometrial ablation is not recommended.', refs: [{ guidelineId: R, locator: '§8.1' }] },
        { heading: 'Fertility-sparing or unfit for surgery', text: 'Counsel about the risk of underlying or future cancer. Complete investigations to exclude invasive endometrial cancer or coexisting ovarian cancer, and discuss at a multidisciplinary meeting. LNG-IUS is first line, oral progestogens second best. Offer hysterectomy once fertility is no longer needed.', refs: [{ guidelineId: R, locator: '§8.2' }] },
        { heading: 'Follow-up on medical treatment', text: 'Endometrial biopsy every 3 months until two consecutive negative biopsies, then every 6–12 months until hysterectomy.', refs: [{ guidelineId: R, locator: '§8.3' }] },
      ],
    },
    {
      id: 'fertility',
      title: 'Wanting to Conceive',
      icon: 'fertility',
      body: [
        { text: 'Show regression on at least one endometrial sample before trying to conceive. Refer to a fertility specialist; assisted reproduction may be considered, and regression should be achieved before it starts. Obese women should aim for BMI under 30.', refs: [{ guidelineId: R, locator: '§9' }] },
      ],
    },
    {
      id: 'hrt-tamoxifen',
      title: 'On HRT or Tamoxifen',
      icon: 'drug',
      body: [
        { heading: 'HRT', text: 'No systemic oestrogen-only HRT in women with a uterus. Women on sequential HRT who wish to continue should switch to continuous progestogen (LNG-IUS or continuous combined HRT). Women on continuous combined HRT should review the need for HRT; the LNG-IUS can be considered as the progestogen.', refs: [{ guidelineId: R, locator: '§10' }] },
        { heading: 'Tamoxifen', text: 'Tamoxifen raises the risk of hyperplasia and cancer; women should report abnormal bleeding or discharge promptly. Aromatase inhibitors are not known to raise these risks. The LNG-IUS reduces polyps and hyperplasia on tamoxifen but is not routinely recommended (uncertain effect on breast cancer recurrence). If hyperplasia develops, review the need for tamoxifen with the oncologist and manage by histological class.', refs: [{ guidelineId: R, locator: '§11' }] },
      ],
    },
    {
      id: 'diagnosis',
      title: 'Diagnosis & Classification',
      icon: 'diagnosis',
      body: [
        { text: 'WHO 2014 classification: hyperplasia without atypia and atypical hyperplasia.', refs: [{ guidelineId: R, locator: '§5' }] },
        { text: 'Diagnosis requires histology. Surveillance is by outpatient endometrial biopsy; use diagnostic hysteroscopy if outpatient sampling fails or is non-diagnostic, and hysteroscopy with directed biopsy when hyperplasia is in a polyp or other focal lesion. TVS may help in pre- and postmenopausal women. CT, diffusion-weighted MRI and biomarkers are not routinely recommended.', refs: [{ guidelineId: R, locator: '§6' }] },
        { text: 'Endometrial polyps: remove completely and biopsy the background endometrium.', refs: [{ guidelineId: R, locator: '§12' }] },
      ],
    },
  ],
  editorNote:
    'Draft from one source only: RCOG/BSGE Green-top Guideline No. 67 (2016), read on 28 Nov 2026 from the BSGE-hosted PDF. Grade letters could not be matched to recommendations in the extracted text, so none are shown; the last few pages (likely references/appendices) were not read. The postmenopausal bleeding work-up (endometrial thickness cut-off, NICE NG12 referral, ACOG CO 734), any FOGSI position, and the ESGO/ESHRE/ESGE fertility-sparing guideline were not read and are not included.',
};
