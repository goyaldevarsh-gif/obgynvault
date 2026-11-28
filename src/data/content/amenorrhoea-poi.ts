import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from FOGSI Focus: Amenorrhea (2021), ESHRE/ASRM/IMS POI guideline (2024), Endocrine Society
 * FHA guideline (2017) and the ACOG CO 605 abstract.
 */
const F = 'fogsi-focus-amenorrhoea-2021';
const E = 'eshre-poi-2024';
const EN = 'endo-fha-2017';
const A = 'acog-co-605';

export const amenorrhoeaPoi: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Amenorrhoea is a sign, not a diagnosis: rule out pregnancy first, then measure FSH, LH, prolactin and TSH (with oestradiol), add androgens only if there are signs of excess, and scan the pelvis. Low or normal FSH with low oestrogen points to a hypothalamic or pituitary cause; high FSH points to ovarian failure; a normal hormone picture with no bleed may mean an outflow tract problem. Functional hypothalamic amenorrhoea is managed by restoring energy balance, psychological support and bone protection, not by the pill alone. Premature ovarian insufficiency (POI) is diagnosed before 40 with at least 4 months of disordered cycles and one FSH over 25 IU/L (ESHRE 2024); do a karyotype and FMR1 premutation test, give oestrogen replacement (at least 2 mg oral or 100 µg transdermal oestradiol, with progestogen) until the usual age of menopause, check bone density, and discuss egg donation for fertility.',
  keyPoints: [
    { text: 'Primary amenorrhoea (FOGSI): no menses by 14 without secondary sexual characteristics, or by 16 with them. Secondary: no menses for 3 usual cycle lengths or 6 months. Endocrine Society: evaluate if cycles persistently over 45 days or amenorrhoea 3 months or more.', refs: [{ guidelineId: F, locator: 'Ch1' }, { guidelineId: EN, locator: 'Rec 1.2' }] },
    { text: 'Work-up: pregnancy test first; then FSH, LH, prolactin, TSH, oestradiol (AMH); testosterone/DHEA-S only if hyperandrogenic; pelvic ultrasound. MRI pituitary for headache, visual change or unexplained hyperprolactinaemia.', refs: [{ guidelineId: F, locator: 'Ch1–2' }, { guidelineId: EN, locator: 'Recs 2.2–2.6' }] },
    { text: 'Functional hypothalamic amenorrhoea: restore energy balance (eat more, exercise less), CBT, DXA after 6 months of amenorrhoea. Endocrine Society advises against the pill just to bring back periods or protect bone.', refs: [{ guidelineId: EN, locator: 'Recs 2.7, 3.2–3.5' }, { guidelineId: F, locator: 'Ch3' }] },
    { text: 'POI (ESHRE 2024): under 40, disordered cycles for at least 4 months, one FSH over 25 IU/L; repeat FSH only if uncertain. Do not diagnose on oestradiol or AMH alone.', refs: [{ guidelineId: E, locator: 'pp.512–513' }] },
    { text: 'POI tests: karyotype and FMR1 premutation in all non-iatrogenic cases; 21-hydroxylase antibodies if cause unknown; TSH at diagnosis then every 5 years.', refs: [{ guidelineId: E, locator: 'p.514' }] },
    { text: 'POI hormone therapy until the usual age of menopause: oestradiol at least 2 mg oral or 100 µg transdermal, plus progestogen if she has a uterus. HRT is not contraception.', refs: [{ guidelineId: E, locator: 'pp.514–516' }, { guidelineId: F, locator: 'Ch3' }] },
    { text: 'Hyperprolactinaemia: dopamine agonist first; cabergoline is more effective and better tolerated than bromocriptine.', refs: [{ guidelineId: F, locator: 'Ch2, Ch4' }] },
  ],
  sections: [
    {
      id: 'stepwise',
      title: 'Step-by-step Work-up',
      icon: 'management',
      body: [
        {
          text: 'Stepwise evaluation of amenorrhoea.',
          refs: [{ guidelineId: F, locator: 'Ch1–2' }, { guidelineId: EN, locator: 'Recs 2.2–2.8' }, { guidelineId: E }],
          flow: {
            caption: 'Amenorrhoea',
            steps: [
              { title: 'Exclude pregnancy', text: 'Urine or serum hCG in every case.', tone: 'start' },
              { title: 'History, examination, pelvic scan', text: 'Weight, exercise, stress, eating; secondary sexual characteristics; hirsutism; galactorrhoea; outflow tract.' },
              { title: 'FSH, LH, prolactin, TSH, oestradiol', tone: 'decision', branches: [
                { when: 'High prolactin', then: 'Repeat morning sample; MRI if unexplained; dopamine agonist' },
                { when: 'Abnormal TSH', then: 'Treat thyroid disease' },
                { when: 'High FSH', then: 'Ovarian insufficiency: karyotype, FMR1 (see POI)' },
                { when: 'Low or normal FSH/LH, low oestradiol', then: 'Hypothalamic or pituitary: exclude organic cause, then FHA care' },
                { when: 'Normal, with hyperandrogenism', then: 'Testosterone, DHEA-S, 17-OHP; consider PCOS' },
              ] },
              { title: 'Progestogen challenge (if needed)', text: 'MPA 10 mg for 5 days. Bleed = oestrogen present and outflow intact; no bleed = low oestrogen or outflow problem.', tone: 'action' },
              { title: 'Primary amenorrhoea', text: 'Assess Müllerian anomalies by examination, ultrasound and/or MRI; karyotype where indicated.' },
            ],
          },
        },
        { text: 'WHO groups (FOGSI): I hypogonadotropic hypogonadism; II normogonadotropic; III hypergonadotropic (ovarian failure); IV hyperprolactinaemic. Outflow tract causes are usually treated surgically.', refs: [{ guidelineId: F, locator: 'Ch1' }] },
        { text: 'Endocrine Society also suggests general screening: blood count, electrolytes, glucose, renal and liver function, and ESR/CRP where appropriate.', refs: [{ guidelineId: EN, locator: 'Rec 2.3' }] },
      ],
    },
    {
      id: 'fha',
      title: 'Functional Hypothalamic Amenorrhoea',
      icon: 'lifestyle',
      body: [
        { text: 'Diagnose only after excluding anatomical and organic causes. Screen for psychological stressors and disordered eating. Admit for severe bradycardia, hypotension, orthostasis or electrolyte imbalance.', refs: [{ guidelineId: EN, locator: 'Recs 1.1, 1.3, 3.1' }] },
        { text: 'Correct energy deficit by increasing calories and/or reducing exercise, usually with weight gain; offer cognitive behavioural therapy.', refs: [{ guidelineId: EN, locator: 'Recs 3.2–3.3' }] },
        { text: 'Bone: baseline DXA after 6 months or more of amenorrhoea (earlier if severe nutritional deficiency or fragility). If lifestyle measures fail, short-term transdermal 17β-oestradiol with cyclic oral progestogen (not the pill) is suggested. Do not use bisphosphonates, denosumab, testosterone or leptin for bone.', refs: [{ guidelineId: EN, locator: 'Recs 2.7, 3.4–3.7' }] },
        { text: 'FOGSI differs: the pill may be used for cycle control and bone if lifestyle measures fail.', refs: [{ guidelineId: F, locator: 'Ch2' }] },
        { text: 'Fertility: pulsatile GnRH first, gonadotrophins if unavailable (with care), clomiphene if oestrogen is adequate; induce ovulation only when BMI is 18.5 or more.', refs: [{ guidelineId: EN, locator: 'Recs 3.9–3.10' }] },
      ],
    },
    {
      id: 'prolactin',
      title: 'Hyperprolactinaemia',
      icon: 'drug',
      body: [
        { text: 'Normal prolactin about 5–25 ng/mL; take a morning sample. Dopamine agonists are first line: bromocriptine 1.25 mg at bedtime for a week then increased gradually, or cabergoline 0.25 mg once or twice weekly (more effective, better tolerated). Transsphenoidal surgery for intolerance, resistance or compressive non-secreting lesions.', refs: [{ guidelineId: F, locator: 'Ch2, Ch4' }] },
      ],
    },
    {
      id: 'poi',
      title: 'Premature Ovarian Insufficiency',
      icon: 'classification',
      body: [
        { heading: 'Diagnosis', text: 'Loss of ovarian activity before 40: oligo/amenorrhoea for at least 4 months and one FSH over 25 IU/L (ESHRE 2024; repeat after 4–6 weeks only if uncertain). AMH may help if FSH is inconclusive but is not the primary test. FOGSI 2021 still asks for two menopausal-range FSH levels at least a month apart.', refs: [{ guidelineId: E, locator: 'pp.512–513, 518' }, { guidelineId: F, locator: 'Ch3' }] },
        { heading: 'Cause', text: 'Karyotype (abnormal in about one-third, FOGSI) and FMR1 premutation for all non-iatrogenic POI; 21-hydroxylase (adrenal) antibodies if no cause found. Do not use anti-ovarian antibodies; do not routinely test TPO antibodies. TSH at diagnosis, then every 5 years or with symptoms.', refs: [{ guidelineId: E, locator: 'p.514' }, { guidelineId: F, locator: 'Ch3' }] },
        {
          heading: 'Hormone therapy',
          text: 'Continue until the usual age of menopause.',
          refs: [{ guidelineId: E, locator: 'pp.515–516' }, { guidelineId: F, locator: 'Ch3' }],
          table: {
            columns: ['Item', 'ESHRE 2024', 'FOGSI 2021'],
            rows: [
              ['Oestrogen', 'At least 2 mg oral or 100 µg transdermal oestradiol (for bone)', 'Transdermal oestradiol 100 µg daily, or conjugated oestrogens 0.625 mg daily'],
              ['Progestogen', 'For all with a uterus; increase with oestrogen dose', 'Micronised progesterone 200 mg daily for 12 days a month'],
              ['Pill option', 'Continuous or extended regimen if COC used', 'Not specified'],
              ['Wants pregnancy', 'Sequential HRT if intermittent ovarian function', '—'],
              ['Supplements', '—', 'Calcium 1,200 mg and vitamin D 1,000 IU daily; weight-bearing exercise'],
            ],
          },
        },
        { heading: 'Bone and heart', text: 'DXA at diagnosis; if normal and on adequate HT, repeat within 5 years has low value; if low, repeat every 1–3 years. Untreated POI shortens life expectancy, mainly from cardiovascular disease: check BP, weight and smoking yearly; lipids and diabetes at diagnosis.', refs: [{ guidelineId: E, locator: 'pp.514–515' }] },
        { heading: 'Fertility', text: 'Spontaneous ovulation can still occur, so use contraception if pregnancy is not wanted. No treatment reliably restores ovarian activity; egg donation is an established option. Refer to reproductive medicine; review at least yearly with psychological support.', refs: [{ guidelineId: E, locator: 'p.514' }, { guidelineId: A }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'FSH for POI diagnosis',
      entries: [
        { guidelineId: E, text: 'One FSH over 25 IU/L.', locator: 'p.513' },
        { guidelineId: F, text: 'Two menopausal FSH levels a month apart.', locator: 'Ch3' },
      ],
    },
    {
      domain: 'Pill in functional hypothalamic amenorrhoea',
      entries: [
        { guidelineId: EN, text: 'Not just to restore menses or bone.', locator: 'Recs 3.4–3.5' },
        { guidelineId: F, text: 'May be used if lifestyle fails.', locator: 'Ch2' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. FOGSI Focus is a monograph, not a formal GCPR, and its page numbers were not available. ACOG CO 605 read as abstract only. Not read: NICE NG23 POI section, ACOG CO 698, ASRM amenorrhoea guidance, Indian Menopause Society POI consensus, Endocrine Society hyperprolactinaemia guideline, ICMR STW. Primary amenorrhoea ages differ between sources (US sources commonly use 13 and 15; not read here).',
};
