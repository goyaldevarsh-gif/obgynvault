import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - Indian Menopause Society CPG executive summary 2020 + osteoporosis guideline 2020 (PMC)
 *  - NICE NG23 (2024 update) recommendations, rationale and update pages (numbers not quoted)
 *  - The Menopause Society 2023 nonhormone statement (full); 2022 HT statement (secondary summary only)
 *  - AAFP 2023 review and 2026 editorial for US practice (ACOG paywalled)
 *  - Global consensus on testosterone for women (2019)
 *  No FOGSI menopause document was found.
 */
const I = 'ims-menopause-2020';
const IO = 'ims-osteoporosis-2020';
const N = 'nice-ng23';
const H = 'nams-ht-2022';
const NH = 'nams-nonhormone-2023';
const US = 'aafp-menopause-2023';
const US26 = 'aafp-menopause-2026';
const T = 'testosterone-consensus-2019';

export const menopause: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Menopause is the last menstrual period, confirmed after 12 months without a period. In a healthy woman over 45 with typical symptoms it is a clinical diagnosis and needs no blood tests. Below 40, think of premature ovarian insufficiency (POI), confirmed by raised FSH on two samples weeks apart; these women need hormone replacement at least until the usual age of menopause. Menopausal hormone therapy (MHT/HRT) is the most effective treatment for hot flushes and night sweats and also protects bone. For healthy women under 60 or within 10 years of menopause, the benefits generally outweigh the risks. Women with a uterus need a progestogen with oestrogen. Transdermal oestrogen does not raise VTE or stroke risk the way oral oestrogen does. MHT is not used only to prevent heart disease or dementia. Vaginal oestrogen treats genitourinary symptoms safely, at any age and for as long as needed. When MHT is unsuitable, CBT, SSRIs/SNRIs, gabapentin or fezolinetant help vasomotor symptoms.',
  keyPoints: [
    { text: 'Diagnose perimenopause or menopause clinically, without blood tests, in healthy women over 45 with symptoms. Consider FSH only at 40–45 with symptoms and cycle change, or under 40.', refs: [{ guidelineId: N }, { guidelineId: I, locator: 'Section I' }] },
    { text: 'POI: under 40, with raised FSH on two samples 4–6 weeks apart (NICE); IMS uses FSH >25 IU/L twice after at least 4 months of oligo- or amenorrhoea. Give HRT or combined hormonal contraception until at least the age of natural menopause.', refs: [{ guidelineId: N }, { guidelineId: I, locator: 'Section III' }] },
    { text: 'MHT is the most effective treatment for vasomotor symptoms. For healthy women under 60 or within 10 years of menopause, benefits outweigh risks for most.', refs: [{ guidelineId: I, locator: 'Grade A' }, { guidelineId: N }, { guidelineId: H }] },
    { text: 'Women with a uterus need a progestogen (or LNG-IUS) with oestrogen; unopposed oestrogen raises endometrial cancer risk 2–10-fold.', refs: [{ guidelineId: IO, locator: 'Grade A' }, { guidelineId: I }] },
    { text: 'Prefer transdermal oestrogen for women at higher VTE risk (obesity, previous DVT, smokers, high triglycerides, glucose intolerance); at standard doses its VTE risk is no higher than baseline.', refs: [{ guidelineId: IO, locator: 'Grade B' }, { guidelineId: N }] },
    { text: 'Do not start MHT only to prevent heart disease or dementia, or only for bone more than 10 years after menopause.', refs: [{ guidelineId: I, locator: 'Grade A' }, { guidelineId: IO, locator: 'Grade B' }, { guidelineId: N }] },
    { text: 'Vaginal oestrogen first line for genitourinary syndrome, including in women on systemic HRT, for as long as needed. After breast cancer, only after non-hormonal options fail (NICE).', refs: [{ guidelineId: I, locator: 'Grade A' }, { guidelineId: N }, { guidelineId: H }] },
    { text: 'If MHT is not wanted or not safe: CBT, paroxetine, citalopram, escitalopram, venlafaxine, desvenlafaxine, gabapentin or fezolinetant (Menopause Society, level I).', refs: [{ guidelineId: NH }, { guidelineId: N }] },
  ],
  sections: [
    {
      id: 'diagnosis',
      title: 'Diagnosis',
      icon: 'diagnosis',
      body: [
        { text: 'Natural menopause: 12 consecutive months without a period, diagnosed in retrospect. Menstrual irregularity is the only objective marker of the transition.', refs: [{ guidelineId: I, locator: 'Section I' }, { guidelineId: US }] },
        { text: 'NICE: no laboratory tests needed in healthy women over 45 with symptoms. Do not use AMH, inhibin, oestradiol, antral follicle count or ovarian volume. Do not use FSH in women on combined contraception or high-dose progestogen.', refs: [{ guidelineId: N }] },
        { text: 'IMS: hormone tests are for special situations and fertility questions. FSH above 40 IU/L on two tests at least 4 weeks apart with low oestradiol reliably marks menopause; FSH above 20 IU/L with flushes suggests ovarian insufficiency in perimenopause.', refs: [{ guidelineId: I, locator: 'Section I' }] },
        { text: 'Vasomotor symptoms usually last from 6 months to 2 years, but in some women 10 years or more; about half have daily flushes that can persist 7–10 years.', refs: [{ guidelineId: I }, { guidelineId: US26 }] },
      ],
    },
    {
      id: 'poi',
      title: 'Premature Ovarian Insufficiency & Surgical Menopause',
      icon: 'risk',
      body: [
        { text: 'POI is loss of ovarian function before 40. NICE: diagnose from symptoms plus raised FSH on two samples 4–6 weeks apart, never on a single test. IMS (ESHRE 2015 criteria): oligo- or amenorrhoea for at least 4 months and FSH above 25 IU/L on two occasions more than 4 weeks apart.', refs: [{ guidelineId: N }, { guidelineId: I, locator: 'Section III, Grade C' }] },
        { text: 'Offer HRT or a combined hormonal contraceptive and continue until at least the average age of natural menopause. IMS prefers physiological-dose HT over contraceptives and reminds that HT is not contraception.', refs: [{ guidelineId: N }, { guidelineId: I }, { guidelineId: H }] },
        { text: 'IMS: there is no evidence that HT in POI raises breast cancer, cardiovascular or dementia risk above that of women with menopause at the usual age. MHT is the main therapy to protect bone in premature menopause.', refs: [{ guidelineId: I }, { guidelineId: IO, locator: 'Grade C' }] },
        { text: 'Surgical menopause: avoid unnecessary oophorectomy. Consider MHT for women under 50 after oophorectomy; WHI findings do not apply to them, and younger women may need higher doses.', refs: [{ guidelineId: I }] },
      ],
    },
    {
      id: 'mht-indications',
      title: 'MHT: Who Benefits',
      icon: 'management',
      body: [
        { text: 'Offer HRT for vasomotor symptoms after discussing short- and long-term benefits and risks: oestrogen with progestogen if she has a uterus, oestrogen alone after hysterectomy.', refs: [{ guidelineId: N }, { guidelineId: US, locator: 'SORT A' }] },
        { text: 'Benefits outweigh risks for most healthy symptomatic women under 60 or within 10 years of menopause. Starting after 60 needs careful individual assessment.', refs: [{ guidelineId: H }, { guidelineId: US }, { guidelineId: I }] },
        { text: 'Low-dose combined pills can be used during the transition for contraception and symptom control in suitable women.', refs: [{ guidelineId: I, locator: 'Grade A' }] },
        { text: 'Bone: oestrogen with or without progestogen can be used for low bone mass in early postmenopause with symptoms; all MHT preparations, including low-dose and non-oral, preserve bone. Do not start MHT only for bone more than 10 years after menopause.', refs: [{ guidelineId: IO, locator: 'Grade A, Grade B' }] },
        { text: 'Not for prevention alone: MHT is not used solely for cardiovascular protection or to prevent dementia.', refs: [{ guidelineId: I, locator: 'Grade A' }, { guidelineId: N }, { guidelineId: US26 }] },
      ],
    },
    {
      id: 'contraindications',
      title: 'Contraindications',
      icon: 'risk',
      body: [
        {
          text: 'Avoid MHT with (IMS Appendix 4):',
          refs: [{ guidelineId: IO, locator: 'Appendix 4' }, { guidelineId: US26, locator: 'Table 2' }],
          table: {
            columns: ['Contraindication'],
            rows: [
              ['Active breast, endometrial or other hormone-dependent cancer'],
              ['Undiagnosed abnormal vaginal bleeding'],
              ['Moderate or high breast cancer risk'],
              ['Established or high-risk cardiovascular disease, previous stroke'],
              ['Personal or family history of VTE'],
              ['SLE'],
              ['Diabetes with end-organ damage'],
              ['Severe active liver disease'],
              ['Known or suspected pregnancy'],
            ],
          },
        },
        { text: 'IMS notes the breast cancer risk tools (NCI, IBIS) are not validated in Indian women.', refs: [{ guidelineId: I }] },
      ],
    },
    {
      id: 'regimens',
      title: 'Regimens & Routes',
      icon: 'drug',
      body: [
        { text: 'Sequential (cyclic) regimen: progestogen for the last 10–14 days of each 28–30-day cycle, giving a monthly bleed; used in the perimenopause. Continuous combined: oestrogen and progestogen daily, aiming for no bleeding; lowers endometrial cancer risk compared with long-term sequential use.', refs: [{ guidelineId: US }, { guidelineId: N }] },
        { text: 'Unscheduled bleeding is common in the first 3 months of HRT.', refs: [{ guidelineId: N }] },
        { text: 'The LNG-IUS can provide endometrial protection (off-label in the US) and treats heavy bleeding.', refs: [{ guidelineId: US }, { guidelineId: I, locator: 'Grade B' }] },
        {
          text: 'Example doses (US preparations, AAFP 2023):',
          refs: [{ guidelineId: US, locator: 'Tables 2–3' }],
          table: {
            columns: ['Preparation', 'Dose'],
            rows: [
              ['Oral oestradiol', '0.5, 1 or 2 mg daily'],
              ['Oral conjugated oestrogens', '0.3–1.25 mg daily'],
              ['Transdermal oestradiol patch', '0.025–0.1 mg/day, changed once or twice weekly'],
              ['Micronised progesterone (sequential)', '200 mg daily for 12–14 days a month'],
              ['Medroxyprogesterone acetate', '2.5, 5 or 10 mg, continuous or for 10–14 days a month'],
              ['Tibolone (IMS)', '2.5 mg daily'],
            ],
          },
        },
        { text: 'Indian MHT doses (oestradiol valerate, dydrogesterone, oestradiol gel) were not found in the documents read; check the IMS MHT monograph.', refs: [{ guidelineId: I }] },
      ],
    },
    {
      id: 'risks',
      title: 'Risks: Breast, VTE, Stroke, Heart',
      icon: 'complications',
      body: [
        {
          text: 'Absolute risks from WHI-based data (note the different denominators):',
          refs: [{ guidelineId: IO, locator: 'Table 6' }, { guidelineId: N }, { guidelineId: US26 }],
          table: {
            columns: ['Outcome', 'Oestrogen only', 'Oestrogen + progestogen'],
            rows: [
              ['Breast cancer, 5 yr use, per 1,000 (baseline 59)', '69', '79'],
              ['Breast cancer, ages 50–59, per 10,000/yr (IMS)', '—', '5 extra'],
              ['VTE, ages 50–59, per 10,000/yr (IMS)', '4 extra', '11 extra'],
              ['Stroke, ages 50–59, per 10,000/yr (IMS)', '1 extra', '4 extra'],
              ['CHD, per 1,000 over 7.5 yr (NICE, baseline 26.3)', '6 fewer', '5 more'],
            ],
          },
        },
        { heading: 'Breast', text: 'Risk is consistently higher with combined HRT than with oestrogen alone. In RCTs oestrogen-only HRT reduced breast cancer, but observational data differ and NICE notes a possible small increase in breast cancer mortality. The Menopause Society: risk does not rise appreciably with short-term combined use.', refs: [{ guidelineId: N }, { guidelineId: H }] },
        { heading: 'VTE and stroke', text: 'Oral oestrogen raises VTE (relative risk about 1.7) and stroke risk; transdermal oestrogen does not raise stroke risk and carries less VTE risk.', refs: [{ guidelineId: I }, { guidelineId: N }] },
        { heading: 'Heart', text: 'Started within 10 years of menopause, MHT was associated with less coronary disease (RR 0.52) and lower all-cause mortality (RR 0.70) in a Cochrane analysis. NICE: CHD risk was not increased.', refs: [{ guidelineId: I, locator: 'Grade A' }, { guidelineId: N }] },
        { heading: 'Other', text: 'NICE: ovarian cancer risk rises by about 1 in 1,000; dementia risk may rise if combined HRT is started at an older age. No increase in type 2 diabetes (IMS: fewer new cases).', refs: [{ guidelineId: N }, { guidelineId: I }] },
        { text: 'IMS classes all MHT risks in women aged 50–59 as "rare" by CIOMS definitions.', refs: [{ guidelineId: IO, locator: 'Grade A' }] },
        { text: 'In November 2025 the US FDA moved to remove the boxed warnings on breast cancer, cardiovascular disease and dementia from menopausal hormone products.', refs: [{ guidelineId: US26 }] },
      ],
    },
    {
      id: 'duration',
      title: 'Review, Duration & Stopping',
      icon: 'monitoring',
      body: [
        { text: 'Review 3 months after starting, then yearly. There is no fixed time limit (NICE); review benefits and risks every year (IMS).', refs: [{ guidelineId: N }, { guidelineId: IO, locator: 'Grade C' }] },
        { text: 'The Menopause Society: no need to stop routinely at 60 or 65; continue for persistent symptoms, quality of life or bone after counselling. US family-medicine advice suggests considering a taper from 60.', refs: [{ guidelineId: H }, { guidelineId: US26 }] },
        { text: 'Stopping gradually or suddenly makes no long-term difference; tapering may limit early recurrence of symptoms.', refs: [{ guidelineId: N }] },
        { text: 'IMS: yearly clinical breast examination and mammography every 1–3 years while on MHT.', refs: [{ guidelineId: IO, locator: 'Grade C' }] },
      ],
    },
    {
      id: 'gsm',
      title: 'Genitourinary Syndrome (Vaginal Symptoms)',
      icon: 'drug',
      body: [
        { text: 'Low-dose vaginal oestrogen is first line, including for women already on systemic HRT, at any age and for as long as needed. A progestogen is generally not needed.', refs: [{ guidelineId: I, locator: 'Grade A' }, { guidelineId: N }, { guidelineId: H }, { guidelineId: US }] },
        { text: 'Vaginal lubricants and moisturisers also work, alone or with oestrogen.', refs: [{ guidelineId: US, locator: 'SORT B' }] },
        { text: 'After breast cancer: NICE offers vaginal oestrogen only as a second-line option when non-hormonal treatment has failed; discuss with the oncology team.', refs: [{ guidelineId: N }, { guidelineId: US }] },
        { text: 'Examples (US): oestradiol vaginal tablet 10 µg daily for 2 weeks then twice weekly; oestradiol ring 7.5 µg/day changed every 3 months; prasterone 6.5 mg nightly; ospemifene 60 mg daily.', refs: [{ guidelineId: US }] },
      ],
    },
    {
      id: 'nonhormonal',
      title: 'Non-hormonal Options',
      icon: 'drug',
      body: [
        {
          text: 'For vasomotor symptoms (The Menopause Society 2023):',
          refs: [{ guidelineId: NH }],
          table: {
            columns: ['Option', 'Dose / level'],
            rows: [
              ['CBT, clinical hypnosis', 'Recommended (level I)'],
              ['Paroxetine', '7.5 mg (or 10–25 mg/day)'],
              ['Citalopram / escitalopram', '10–20 mg/day'],
              ['Venlafaxine', '37.5–150 mg/day'],
              ['Desvenlafaxine', '100–150 mg/day'],
              ['Gabapentin', '900–2,400 mg/day'],
              ['Fezolinetant', '45 mg daily'],
              ['Oxybutynin', '2.5–5 mg twice daily (level I–II)'],
              ['Not recommended', 'Paced breathing, herbal supplements, soy, yoga/exercise for flushes, clonidine, pregabalin'],
            ],
          },
        },
        { text: 'NICE: do not routinely offer SSRIs, SNRIs or clonidine as first-line treatment for vasomotor symptoms alone. CBT can be offered alongside HRT or when HRT is unsuitable, and also helps mood and sleep.', refs: [{ guidelineId: N }] },
        { text: 'Avoid paroxetine and fluoxetine in women taking tamoxifen.', refs: [{ guidelineId: N }, { guidelineId: US }] },
        { text: 'IMS: non-hormonal prescription drugs when MHT is contraindicated or declined; lifestyle measures for mild symptoms; complementary therapies with caution.', refs: [{ guidelineId: I, locator: 'Grade B' }] },
      ],
    },
    {
      id: 'tibolone-testosterone',
      title: 'Tibolone & Testosterone',
      icon: 'drug',
      body: [
        { heading: 'Tibolone', text: '2.5 mg daily; an option within 10 years of menopause, preferred over MHT for women with dense breasts, and helpful for low libido with less spotting. Use with caution over 60; avoid with stroke risk factors and after breast cancer.', refs: [{ guidelineId: IO, locator: 'Appendix 4, Grade A' }, { guidelineId: I }] },
        { heading: 'Testosterone', text: 'The only evidence-based indication is low sexual desire causing distress (HSDD), when HRT alone has not helped. Aim for premenopausal levels, check total testosterone at baseline and after 3–6 weeks, and stop if there is no benefit by 6 months.', refs: [{ guidelineId: T }, { guidelineId: N }] },
        { text: 'IMS (India): female testosterone products are not available in India and male preparations should not be prescribed for women. The global consensus allows careful use of male products at female doses with monitoring.', refs: [{ guidelineId: I }, { guidelineId: T }] },
      ],
    },
    {
      id: 'bone',
      title: 'Bone Health',
      icon: 'lab',
      body: [
        { text: 'DXA of spine and hip for all women 5 or more years after menopause, or earlier with one high-risk factor or more than two risk factors. Repeat about every 2 years on the same machine. Use FRAX where DXA is unavailable.', refs: [{ guidelineId: IO, locator: 'Grade B–C' }] },
        { text: 'Calcium: total intake over 800 mg/day, with no more than 500 mg in a single dose.', refs: [{ guidelineId: IO, locator: 'Grade B' }] },
        { text: 'Vitamin D: for deficiency 60,000 IU weekly for 8 weeks; maintenance 2,000 IU daily or 60,000 IU once or twice a month. Upper limit 4,000 IU/day.', refs: [{ guidelineId: IO, locator: 'Grade B' }] },
        { text: 'HRT lowers fragility fracture risk while it is taken.', refs: [{ guidelineId: N }, { guidelineId: US26 }] },
      ],
    },
    {
      id: 'contraception',
      title: 'Contraception in the Perimenopause',
      icon: 'drug',
      body: [
        { text: 'Discuss contraception with perimenopausal women; HRT is not a contraceptive.', refs: [{ guidelineId: N }, { guidelineId: I }] },
        { text: 'IMS: healthy, normal-weight non-smokers can continue combined pills up to menopause; progestogen-only methods suit women with previous VTE; IUDs are suitable. Consider switching to HT at about 45–50 if FSH is above 30 IU/L and oestradiol below 20 pg/mL on two tests 6 weeks apart.', refs: [{ guidelineId: I, locator: 'Section II, Grade B' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'FSH testing over 45',
      entries: [
        { guidelineId: N, text: 'No laboratory tests needed.' },
        { guidelineId: I, text: 'History-based; FSH >40 IU/L twice is a reliable marker.' },
      ],
    },
    {
      domain: 'SSRIs/SNRIs/clonidine for flushes',
      entries: [
        { guidelineId: N, text: 'Not routinely first line.' },
        { guidelineId: NH, text: 'SSRIs/SNRIs recommended; clonidine not recommended.' },
        { guidelineId: US, text: 'SSRIs, SNRIs, gabapentin, clonidine reasonable alternatives.', locator: 'SORT B' },
      ],
    },
    {
      domain: 'Duration of MHT',
      entries: [
        { guidelineId: N, text: 'No fixed limit; review yearly.' },
        { guidelineId: H, text: 'No routine stop at 60–65.' },
        { guidelineId: US26, text: 'Consider tapering yearly from 60.' },
      ],
    },
    {
      domain: 'Testosterone products',
      entries: [
        { guidelineId: I, text: 'Do not prescribe male preparations to women.' },
        { guidelineId: T, text: 'Male products at female doses, with monitoring.' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: Indian Menopause Society executive summary and osteoporosis guideline (2020) from PMC; NICE NG23 recommendations, rationale and update pages (the recommendations page appeared to use 2015 numbering, so NICE numbers are not quoted; PDF and MHRA tables not opened); The Menopause Society 2023 nonhormone statement in full, but its 2022 HT statement only via a secondary summary; AAFP 2023 and 2026 for US practice (ACOG paywalled); the 2019 global testosterone consensus. No FOGSI menopause document, IMS MHT monograph with Indian doses, BMS consensus or ESHRE 2024 POI guideline was read. The perimenopause/continuous-combined descriptions are standard summaries, not quotations. Absolute risks use different denominators; do not compare rows directly. Check all doses and numbers against the originals.',
};
