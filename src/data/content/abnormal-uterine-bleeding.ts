import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI–ICOG GCPR on Management of AUB (2024), text read in full, figures not read -> fogsi-aub
 *  - NICE NG88 (2018, updated July 2026), recommendations 1.1–1.5                   -> nice-ng88
 *  - ACOG positions via AAFP 2019 review (PB 128 / CO 557 not readable)             -> acog-aub-aafp
 * RCOG: no RCOG Green-top Guideline on HMB; UK practice follows NICE NG88.
 */
const F = 'fogsi-aub';
const N = 'nice-ng88';
const A = 'acog-aub-aafp';

export const abnormalUterineBleeding: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Abnormal uterine bleeding (AUB) is bleeding from the uterine corpus that is abnormal in frequency, regularity, duration or volume. FOGSI, ACOG and NICE all use the FIGO system: normal limits for menstruation and the PALM-COEIN classification of causes (structural: polyp, adenomyosis, leiomyoma, malignancy/hyperplasia; non-structural: coagulopathy, ovulatory, endometrial, iatrogenic, not classified). Every woman needs a pregnancy test, blood count and ultrasound or hysteroscopy as indicated. Acute bleeding is controlled with high-dose progestogens, combined pills or tranexamic acid. Chronic heavy bleeding is usually treated first with the LNG-IUS, with tranexamic acid, NSAIDs, combined pills and progestogens as alternatives, and surgery when medical treatment fails.',
  keyPoints: [
    { text: 'Use the FIGO PALM-COEIN system instead of older terms like "DUB" or "menorrhagia".', refs: [{ guidelineId: F, locator: 'p.11 (A; L4)' }, { guidelineId: A }] },
    { text: 'Every woman with AUB: pregnancy test, full blood count and TSH (FOGSI). NICE limits thyroid tests to women with thyroid symptoms. Screen for a bleeding disorder with a structured history.', refs: [{ guidelineId: F, locator: 'p.12' }, { guidelineId: N, locator: '1.2.6–1.2.9' }, { guidelineId: A }] },
    { text: 'Transvaginal ultrasound is the usual first imaging test. Use hysteroscopy or saline sonography for suspected polyps or submucous fibroids.', refs: [{ guidelineId: F, locator: 'p.12–13 (A; L1)' }, { guidelineId: N, locator: '1.3.3–1.3.4' }, { guidelineId: A }] },
    { text: 'Endometrial biopsy: ACOG (via AAFP) for all women aged 45 or older, and for younger women with unopposed oestrogen exposure, persistent bleeding or failed treatment. NICE takes biopsies only at hysteroscopy, not blind.', refs: [{ guidelineId: A }, { guidelineId: N, locator: '1.3.10–1.3.11' }] },
    { text: 'Acute heavy bleeding: oral progestogens, multidose combined pills or tranexamic acid first. FOGSI: MPA 20 mg or norethisterone 10 mg three times daily; tranexamic acid 10 mg/kg IV 8-hourly.', refs: [{ guidelineId: F, locator: 'p.13 (A; L1)' }, { guidelineId: A }] },
    { text: 'Chronic heavy bleeding: LNG-IUS is the most effective medical option. Alternatives: tranexamic acid, NSAIDs, combined pills, cyclical progestogens. Hysterectomy is the most effective treatment overall.', refs: [{ guidelineId: N, locator: '1.5.2–1.5.3' }, { guidelineId: F, locator: 'p.17' }, { guidelineId: A }] },
    { text: 'Hyperplasia without atypia: LNG-IUS first line for at least 6 months, with 6-monthly biopsy until two are negative. Atypical hyperplasia: hysterectomy unless fertility is wanted.', refs: [{ guidelineId: F, locator: 'p.14–15' }] },
  ],
  sections: [
    {
      id: 'definitions',
      title: 'Definitions & Normal Limits',
      icon: 'definition',
      body: [
        { text: 'Acute AUB is an episode of heavy bleeding that needs immediate treatment. Chronic AUB is bleeding abnormal in volume, regularity or timing for most of the past 6 months.', refs: [{ guidelineId: F, locator: 'p.9' }] },
        {
          text: 'FIGO normal limits (5th–95th percentiles):',
          refs: [{ guidelineId: F, locator: 'Table 1, p.9–10' }],
          table: {
            columns: ['Parameter', 'Normal', 'Abnormal'],
            rows: [
              ['Frequency', '24–38 days', 'Frequent <24 days; infrequent >38 days; absent'],
              ['Regularity (variation over 12 months)', '±2 to 20 days', 'Irregular >20 days'],
              ['Duration', '4.5–8 days', 'Prolonged >8 days; short <4.5 days'],
              ['Volume', '5–80 mL', 'Heavy >80 mL; light <5 mL'],
            ],
          },
        },
        { text: 'Heavy menstrual bleeding is a subjective diagnosis. NICE stresses that its effect on quality of life, not the measured blood loss, should guide treatment.', refs: [{ guidelineId: F, locator: 'p.17' }, { guidelineId: N, locator: '1.1.1, 1.2.2' }] },
      ],
    },
    {
      id: 'palm-coein',
      title: 'PALM-COEIN Classification',
      icon: 'classification',
      body: [
        {
          text: 'Causes of AUB:',
          refs: [{ guidelineId: F, locator: 'Table 2, p.10' }, { guidelineId: A }],
          table: {
            columns: ['Code', 'Cause', 'Notes'],
            rows: [
              ['P', 'Polyp', 'Structural; seen on imaging or hysteroscopy'],
              ['A', 'Adenomyosis', 'Structural'],
              ['L', 'Leiomyoma', 'FIGO types 0–8; submucosal (0–2) most often cause bleeding'],
              ['M', 'Malignancy and hyperplasia', 'Structural; histology'],
              ['C', 'Coagulopathy', 'Commonest is von Willebrand disease'],
              ['O', 'Ovulatory dysfunction', 'PCOS, thyroid, prolactin, puberty, perimenopause'],
              ['E', 'Endometrial', 'Ovulatory cycles, other causes excluded'],
              ['I', 'Iatrogenic', 'Hormones, IUS/IUD, anticoagulants, drugs affecting dopamine'],
              ['N', 'Not otherwise classified', 'Chronic endometritis, AVM, myometrial hypertrophy'],
            ],
          },
        },
      ],
    },
    {
      id: 'assessment',
      title: 'History & Investigations',
      icon: 'lab',
      body: [
        { text: 'Take a full history (bleeding pattern, symptoms suggesting structural disease, impact on life, medicines) and examine: weight, pallor, thyroid, breasts, acne and hirsutism, abdomen, speculum and bimanual examination.', refs: [{ guidelineId: F, locator: 'p.11 (A; L4)' }, { guidelineId: N, locator: '1.2.1–1.2.5' }] },
        { text: 'NICE: with heavy bleeding and no other symptoms, drug treatment can start without examination (except before an LNG-IUS). Examine women with other symptoms and before any investigation.', refs: [{ guidelineId: N, locator: '1.2.3–1.2.5' }] },
        {
          heading: 'Screen for a bleeding disorder',
          text: 'Positive if any one of the following (90% sensitive):',
          refs: [{ guidelineId: F, locator: 'Table 3, p.12 (B; L4)' }, { guidelineId: N, locator: '1.2.7' }],
          table: {
            columns: ['Criterion', 'Details'],
            rows: [['Heavy bleeding since menarche', 'Alone is enough'], ['One of', 'Postpartum haemorrhage, surgical bleeding, bleeding with dental work'], ['Two or more of', 'Bruising 1–2 times a month, nosebleeds 1–2 times a month, frequent gum bleeding, family history of bleeding']],
          },
        },
        { text: 'A positive screen needs haematology referral and von Willebrand tests (vWF antigen, ristocetin cofactor activity, factor VIII).', refs: [{ guidelineId: F, locator: 'p.12' }] },
        {
          text: 'Laboratory tests:',
          refs: [{ guidelineId: F, locator: 'p.12' }, { guidelineId: N, locator: '1.2.6–1.2.9' }, { guidelineId: A }],
          table: {
            columns: ['Test', 'FOGSI', 'NICE', 'ACOG (AAFP)'],
            rows: [
              ['Pregnancy test', 'When indicated', '—', 'All'],
              ['Full blood count', 'All', 'All', 'All (anaemia)'],
              ['TSH', 'All', 'Only with thyroid symptoms', '—'],
              ['Coagulation (BT, platelets, PT, aPTT)', 'All adolescents; adults with positive screen', 'If heavy since menarche or suggestive history', '—'],
              ['Female hormones', '—', 'Do not test', '—'],
            ],
          },
        },
        { heading: 'Imaging', text: 'Ultrasound is mandatory in FOGSI to assess the uterus, adnexa and endometrium (TVS usually first, except in young girls). Doppler for suspected AVM, malignancy, or fibroid vs adenomyoma. Saline sonography and hysteroscopy for intracavitary lesions.', refs: [{ guidelineId: F, locator: 'p.12–13' }, { guidelineId: A }] },
        { text: 'NICE chooses between outpatient hysteroscopy and ultrasound on history: hysteroscopy (with vaginoscopy, scope ≤3.5 mm) for suspected submucous fibroids, polyps or endometrial disease; ultrasound if the uterus is palpable, a mass is suspected, or examination is difficult; TVS for suspected adenomyosis. Saline sonography, MRI and D&C are not first-line tests.', refs: [{ guidelineId: N, locator: '1.3.3–1.3.18' }] },
        { heading: 'Endometrial sampling', text: 'ACOG (via AAFP): biopsy all women aged 45 or older, and younger women with unopposed oestrogen exposure, persistent bleeding or failed medical treatment. NICE: consider biopsy at hysteroscopy for persistent intermenstrual or irregular bleeding, infrequent heavy bleeding with obesity or PCOS, tamoxifen use, or failed treatment; no blind biopsies. FOGSI gives no age cut-off.', refs: [{ guidelineId: A }, { guidelineId: N, locator: '1.3.10–1.3.11' }] },
      ],
    },
    {
      id: 'acute',
      title: 'Acute Heavy Bleeding',
      icon: 'emergency',
      body: [
        {
          text: 'Stepwise approach to AUB (FOGSI–ICOG GCPR 2024, NICE NG88).',
          refs: [{ guidelineId: F, locator: 'pp.11–20' }, { guidelineId: N }],
          flow: {
            caption: 'Abnormal uterine bleeding',
            steps: [
              { title: 'Assess', text: 'History and examination; pregnancy test, CBC, TSH; bleeding-disorder screen; TVS. Biopsy if 45 or older or risk factors.', tone: 'start' },
              { title: 'Acute heavy bleeding?', tone: 'urgent', text: 'Resuscitate; MPA 20 mg or norethisterone 10 mg three times daily, or COC 2 pills 12-hourly, or tranexamic acid 10 mg/kg IV 8-hourly.' },
              { title: 'Cause (PALM-COEIN)', tone: 'decision', branches: [
                { when: 'Polyp', then: 'Hysteroscopic polypectomy; histology' },
                { when: 'Fibroid', then: 'Medical (TXA, NSAID, LNG-IUS); submucous under 4 cm: hysteroscopic resection; larger: myomectomy' },
                { when: 'Adenomyosis', then: 'NSAID, progestogen, dienogest, LNG-IUS; hysterectomy if medical fails' },
                { when: 'Ovulatory', then: 'Oral progestogens; COC or LNG-IUS if no pregnancy wish' },
                { when: 'No structural cause', then: 'Tranexamic acid ± NSAID; LNG-IUS (NICE first line)' },
              ] },
              { title: 'Medical treatment fails', text: 'Endometrial ablation or hysterectomy, by fertility wish and patient choice.' },
            ],
          },
        },
        { text: 'Medical treatment first for most women. Hormonal treatment is first line when no bleeding disorder is known or suspected. Resuscitate and transfuse as needed.', refs: [{ guidelineId: F, locator: 'p.13 (A; L1)' }] },
        {
          text: 'Acute regimens:',
          refs: [{ guidelineId: F, locator: 'p.7, p.13' }, { guidelineId: A }],
          table: {
            columns: ['Drug', 'FOGSI', 'ACOG (via AAFP Table 4)'],
            rows: [
              ['Oral progestogen', 'MPA 20 mg or norethisterone 10 mg three times daily', 'Norethindrone 5 mg three times daily for 7 days'],
              ['Combined pill', '30 µg EE: 2 pills every 12 h for 5 days, then 1 daily for 15 days (with antiemetic)', '35 µg EE monophasic pill three times daily for 7 days'],
              ['Tranexamic acid', '10 mg/kg IV every 8 h (max 600 mg/dose), then 500 mg orally three times daily', '10 mg/kg IV every 8 h, or 20–25 mg/kg orally every 8 h'],
              ['Conjugated oestrogen', '"Hardly ever used"', 'Unstable: 25 mg IV every 4–6 h for up to 24 h, then a progestin. Stable: 2.5 mg orally every 6 h for 21 days'],
              ['Desmopressin', 'For von Willebrand disease (C; L3)', '—'],
            ],
          },
        },
        { text: 'Avoid oestrogen-containing regimens and tranexamic acid when thrombosis risk is high.', refs: [{ guidelineId: A }] },
      ],
    },
    {
      id: 'chronic',
      title: 'Chronic Heavy Bleeding: Medical Treatment',
      icon: 'drug',
      body: [
        { text: 'NICE: LNG-IUS is first line when there is no pathology, fibroids are under 3 cm without cavity distortion, or adenomyosis is suspected. If it is declined or unsuitable: tranexamic acid, NSAIDs, combined hormonal contraception or cyclical oral progestogens. Allow at least 6 cycles to judge the LNG-IUS.', refs: [{ guidelineId: N, locator: '1.4.3, 1.5.2–1.5.3' }] },
        { text: 'FOGSI (non-structural causes): tranexamic acid first line, alone or with NSAIDs (B; L1); LNG-IUS if contraception is wanted (A; L1); cyclical progestogens day 5–25 second line (B; L1); combined pills if LNG-IUS is unsuitable (A; L4); Centchroman (ormeloxifene) when other options are unsuitable (B; L3); GnRH agonists as a last resort (B; L4). Luteal-phase-only progestogens are not recommended.', refs: [{ guidelineId: F, locator: 'p.17' }] },
        {
          text: 'Maintenance doses (ACOG via AAFP Table 4):',
          refs: [{ guidelineId: A }],
          table: {
            columns: ['Drug', 'Dose'],
            rows: [
              ['LNG-IUS', '52 mg (20 µg/day)'],
              ['Tranexamic acid', '1000–1500 mg orally three times daily during menses'],
              ['NSAID', 'Naproxen 500 mg twice daily, only while bleeding; avoid in coagulopathy'],
              ['Norethindrone', '2.5–5 mg once daily (luteal-only use is much less effective)'],
              ['Combined pill', '35 µg EE monophasic daily; fewer pill-free days may work better'],
              ['DMPA', '150 mg IM or 104 mg SC every 13 weeks'],
            ],
          },
        },
        { text: 'FOGSI gives no chronic doses for most of these drugs.', refs: [{ guidelineId: F }] },
      ],
    },
    {
      id: 'by-cause',
      title: 'Management by Cause',
      icon: 'management',
      body: [
        {
          text: 'FOGSI management by PALM-COEIN category:',
          refs: [{ guidelineId: F, locator: 'p.13–17' }],
          table: {
            columns: ['Cause', 'Management'],
            rows: [
              ['Polyp', 'Hysteroscopic polypectomy (A; L1); send all polyps for histology. Multiple polyps, no fertility wish: polypectomy then LNG-IUS'],
              ['Adenomyosis', 'NSAIDs, progestogens, COC, dienogest, LNG-IUS (A; L1); GnRH agonist second line; hysterectomy if medical treatment fails'],
              ['Leiomyoma', 'Medical: TXA, NSAIDs, GnRH analogues, LNG-IUS. Submucous <4 cm: hysteroscopic resection; >4 cm: laparoscopic or open myomectomy. Over 40 with no fertility wish: hysterectomy'],
              ['Coagulopathy', 'TXA first line (A; L2); COC or LNG-IUS with a haematologist; NSAIDs contraindicated'],
              ['Ovulatory', 'Oral progestogens first line (A; L1); COC or LNG-IUS if pregnancy not wanted; reassess at 1 year'],
              ['Endometrial', 'TXA with mefenamic acid, oral progestogens or COC; LNG-IUS very effective'],
              ['Iatrogenic', 'Counsel before LNG-IUS; NSAIDs/TXA for early IUS bleeding; on anticoagulants, progestogens, DMPA or LNG-IUS'],
              ['Not classified', 'LNG-IUS first if contraception wanted (A; L1); COC second; NSAIDs and TXA for predictable bleeding'],
            ],
          },
        },
        { text: 'Fibroid detail is covered on the Uterine Fibroids page.', refs: [{ guidelineId: N, locator: '1.5.7–1.5.19' }] },
      ],
    },
    {
      id: 'hyperplasia',
      title: 'Endometrial Hyperplasia',
      icon: 'complications',
      body: [
        {
          text: 'FOGSI approach:',
          refs: [{ guidelineId: F, locator: 'p.14–15' }],
          table: {
            columns: ['Type', 'Treatment', 'Surveillance'],
            rows: [
              ['Without atypia', 'LNG-IUS first line (A; L1); if declined, continuous MPA 10–20 mg/day or norethisterone 10–15 mg/day; at least 6 months (B; L2). Cyclical progestogens should not be used', 'Biopsy at least 6-monthly until two consecutive negatives; with BMI ≥35 or oral progestogens, 6-monthly then yearly'],
              ['With atypia, no fertility wish', 'Total hysterectomy (A; L1)', '—'],
              ['With atypia, fertility wish', 'Exclude invasive and ovarian cancer; LNG-IUS first, continuous progestogens if not possible', 'Biopsy every 3 months until two consecutive negatives; hysterectomy if persistent (B; L2)'],
            ],
          },
        },
        { text: 'Hysterectomy for hyperplasia without atypia if it progresses to atypia, does not regress after 12 months, relapses after treatment, bleeding persists, or the woman declines surveillance.', refs: [{ guidelineId: F, locator: 'p.15' }] },
      ],
    },
    {
      id: 'adolescents',
      title: 'Adolescents',
      icon: 'adolescent',
      body: [
        { text: 'Bleeding disorders cause 20–33% of severe or prolonged bleeding in adolescents. Exclude pregnancy, bleeding disorders and injury. Pelvic examination only if pregnancy is suspected; ultrasound is not mandatory (transabdominal if needed). Minimum tests: CBC, peripheral smear, ferritin, PT, aPTT.', refs: [{ guidelineId: F, locator: 'p.17' }] },
        {
          text: 'FOGSI adolescent regimens (as stated; some differ from the adult section):',
          refs: [{ guidelineId: F, locator: 'p.18–20' }],
          table: {
            columns: ['Severity', 'Treatment'],
            rows: [
              ['Mild', 'NSAIDs; review every 3 months with a menstrual diary'],
              ['Moderate', 'COC (≥30 µg EE) one pill every 8–12 h until bleeding stops, then daily for at least 21 days; or MPA 5–10 mg / norethisterone 2.5–5 mg three times daily, then twice daily for 2 weeks. Continue COC 3–6 months until Hb ≥12 g/dL'],
              ['Severe, stable (Hb 8–10 g/dL)', 'As moderate; if no response after 2 doses, 3–4 pills daily until bleeding stops, then taper'],
              ['Severe, unstable', 'Admit, prepare blood, exclude bleeding disorder. MPA 20–40 mg/day or norethisterone 10–15 mg/day, or 35–50 µg EE pill 6-hourly tapered over a week; tranexamic acid 3–4 g/day in 3 doses for 4–5 days'],
              ['Failure at 24–36 h', 'Examination under anaesthesia, endometrial sampling, therapeutic curettage'],
            ],
          },
        },
      ],
    },
    {
      id: 'surgery',
      title: 'Surgical Options',
      icon: 'surgery',
      body: [
        { text: 'If medical treatment fails, is declined or symptoms are severe, consider referral for other drugs, second-generation endometrial ablation or hysterectomy. Do not use D&C as treatment.', refs: [{ guidelineId: N, locator: '1.5.6, 1.5.23' }] },
        { text: 'Hysterectomy is the most effective treatment for heavy bleeding (SORT A). Choose the route individually, discuss total vs subtotal, and remove ovaries only with explicit consent. Hysterectomy can cause loss of ovarian function even when ovaries are kept.', refs: [{ guidelineId: A }, { guidelineId: N, locator: '1.4.9, 1.5.20–1.5.22' }] },
        { text: 'After ablation, avoid pregnancy and use contraception if needed. FOGSI notes ablation is used less often now, with the LNG-IUS acting as "medical ablation".', refs: [{ guidelineId: N, locator: '1.4.6' }, { guidelineId: F, locator: 'p.17' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'First-line for chronic heavy bleeding',
      entries: [
        { guidelineId: F, text: 'Tranexamic acid ± NSAIDs; LNG-IUS if contraception wanted.', locator: 'p.17' },
        { guidelineId: A, text: 'LNG-IUS is the most effective medical option (SORT A).' },
        { guidelineId: N, text: 'LNG-IUS first; TXA, NSAIDs, CHC or progestogens if unsuitable.', locator: '1.5.2–1.5.3' },
      ],
    },
    {
      domain: 'Thyroid testing',
      entries: [
        { guidelineId: F, text: 'TSH for all women with AUB.', locator: 'p.12' },
        { guidelineId: N, text: 'Only with other signs of thyroid disease.', locator: '1.2.9' },
      ],
    },
    {
      domain: 'Endometrial biopsy',
      entries: [
        { guidelineId: F, text: 'No age cut-off stated; histology of polyps and in hyperplasia follow-up.' },
        { guidelineId: A, text: 'All aged ≥45; younger with unopposed oestrogen, persistent bleeding or failed treatment.' },
        { guidelineId: N, text: 'At hysteroscopy only, for high-risk women; no blind biopsy.', locator: '1.3.10–1.3.11' },
      ],
    },
    {
      domain: 'Acute bleeding, oral progestogen',
      entries: [
        { guidelineId: F, text: 'MPA 20 mg or norethisterone 10 mg three times daily.', locator: 'p.13' },
        { guidelineId: A, text: 'Norethindrone 5 mg three times daily for 7 days.' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI–ICOG AUB GCPR (2024), full text but not the figures (PBAC chart, flowcharts); NICE NG88 recommendations (wording paraphrased). ACOG Practice Bulletin 128 and Committee Opinions 557 and 785 could not be accessed, so ACOG-side content comes from the 2019 AAFP review, which cites them. RCOG has no Green-top Guideline on heavy menstrual bleeding; the RCOG endometrial hyperplasia guideline (GTG 67) was not read. The FOGSI document gives different doses in its adult and adolescent sections, and some grades differ between its summary and body. Postmenopausal bleeding is not covered here. Doses are quoted from the source for clinician review.',
};
