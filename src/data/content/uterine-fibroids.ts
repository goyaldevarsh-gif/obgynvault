import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI Key Practice Points on Fibroids: Indian Perspective (2019), ~60% verbatim   -> fogsi-fibroids-kpp
 *  - ICMR STW Uterine Fibroids and Polyps (Dec 2025), read in full                     -> icmr-stw-fibroids
 *  - ACOG PB 228 (2021): Background + Summary of Recommendations only                  -> acog-pb-228
 *  - NICE NG88 (2018, updated July 2026), recommendations 1.1–1.5                      -> nice-ng88
 * RCOG: no RCOG Green-top Guideline on fibroids; UK practice follows NICE NG88.
 * FOGSI Gyan-Vahini Fibroid Focus (2025) was mostly available only as a summary, so it is not cited.
 */
const F = 'fogsi-fibroids-kpp';
const I = 'icmr-stw-fibroids';
const A = 'acog-pb-228';
const N = 'nice-ng88';

export const uterineFibroids: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Uterine fibroids (leiomyomas) are benign smooth-muscle tumours present in about 70% of women by menopause, of whom about a quarter need treatment. Most are found on ultrasound and need no treatment. Treatment is chosen by symptoms (heavy bleeding, pressure, infertility), fibroid size, number and FIGO type, and the woman\'s wish to keep her uterus or fertility. Options range from expectant management and medical therapy (LNG-IUS, tranexamic acid, hormonal treatment, GnRH analogues, ulipristal with liver monitoring) to hysteroscopic, laparoscopic or open myomectomy, uterine artery embolisation and hysterectomy.',
  keyPoints: [
    { text: 'Ultrasound is the first-line investigation (transabdominal plus transvaginal). MRI is for mapping large or multiple fibroids, planning UAE or myomectomy, or suspected malignancy.', refs: [{ guidelineId: F, locator: 'Diagnosis' }, { guidelineId: N, locator: '1.5.16' }, { guidelineId: I }] },
    { text: 'Asymptomatic fibroids do not need treatment. ICMR: no treatment for asymptomatic fibroids under 5 cm. Observe with counselling and yearly review.', refs: [{ guidelineId: I }, { guidelineId: F, locator: 'Expectant management' }, { guidelineId: A, locator: 'Level C' }] },
    { text: 'Heavy bleeding with fibroids under 3 cm that do not distort the cavity: LNG-IUS first line (NICE). If unsuitable: tranexamic acid, NSAIDs, combined hormonal contraception or cyclical progestogens.', refs: [{ guidelineId: N, locator: '1.5.2–1.5.3' }, { guidelineId: A, locator: 'Level B/C' }] },
    { text: 'Fibroids 3 cm or more: consider specialist referral, and choose between drugs, uterine artery embolisation, myomectomy and hysterectomy by size, site, number and symptoms. Drugs work less well with fibroids much larger than 3 cm.', refs: [{ guidelineId: N, locator: '1.5.8, 1.5.11, 1.5.15' }] },
    { text: 'Submucosal fibroids: hysteroscopic myomectomy is first line, especially with infertility. Experienced surgeons can remove types 0–2 up to 4–5 cm.', refs: [{ guidelineId: N, locator: '1.5.7' }, { guidelineId: F, locator: 'Hysteroscopic myomectomy' }] },
    { text: 'Ulipristal acetate carries a risk of serious liver injury. Use it only intermittently when surgery and UAE are unsuitable, have failed or are declined, with liver tests before and during treatment.', refs: [{ guidelineId: N, locator: '1.5.13–1.5.14' }, { guidelineId: F, locator: 'Ulipristal' }] },
    { text: 'Hysterectomy is the definitive option when childbearing is complete; prefer vaginal or laparoscopic routes. ICMR advises avoiding hysterectomy under 35 where possible. Use contained morcellation where possible because occult sarcoma cannot be excluded.', refs: [{ guidelineId: A, locator: 'Level B' }, { guidelineId: F, locator: 'Hysterectomy, Morcellation' }, { guidelineId: I }] },
  ],
  sections: [
    {
      id: 'epidemiology',
      title: 'Epidemiology & Symptoms',
      icon: 'epidemiology',
      body: [
        { text: 'Reported prevalence ranges from 4.5% to 68.6% worldwide; fibroids are clinically apparent in about 25% of reproductive-age women. Indian data show 37.65% in rural and 24% in urban women.', refs: [{ guidelineId: F, locator: 'Epidemiology' }] },
        { text: 'Up to 70% of women have fibroids by menopause, and about 25% are significant enough to need treatment. Prevalence is 2–3 times higher in Black women than White women.', refs: [{ guidelineId: A, locator: 'Background' }] },
        { text: 'Most fibroids cause no symptoms. Symptoms include heavy or irregular bleeding, pressure and urinary symptoms, heaviness or a mass, pain or dysmenorrhoea, infertility and pregnancy complications. In an Indian survey of women with abnormal bleeding, 74.9% had spotting or intermenstrual bleeding and 73.4% heavy menstrual bleeding.', refs: [{ guidelineId: F, locator: 'Symptoms' }, { guidelineId: I }] },
        { heading: 'Red flags (ICMR)', text: 'Severe anaemia, severe pain (degeneration or torsion), bleeding not responding to medical treatment, and acute urinary retention.', refs: [{ guidelineId: I }] },
      ],
    },
    {
      id: 'classification',
      title: 'FIGO Classification',
      icon: 'definition',
      body: [
        {
          text: 'FIGO leiomyoma subtypes:',
          refs: [{ guidelineId: F, locator: 'Figure 1' }, { guidelineId: I }],
          table: {
            columns: ['Type', 'Description', 'Group'],
            rows: [
              ['0', 'Pedunculated, intracavitary', 'Submucosal'],
              ['1', 'Submucosal, <50% intramural', 'Submucosal'],
              ['2', 'Submucosal, ≥50% intramural', 'Submucosal'],
              ['3', 'Contacts endometrium, 100% intramural', 'Other'],
              ['4', 'Intramural', 'Other'],
              ['5', 'Subserosal, ≥50% intramural', 'Other'],
              ['6', 'Subserosal, <50% intramural', 'Other'],
              ['7', 'Subserosal, pedunculated', 'Other'],
              ['8', 'Other (cervical, parasitic)', 'Other'],
              ['Hybrid (e.g. 2–5)', 'Submucosal and subserosal, each <50% of diameter in the cavity and peritoneal space', '—'],
            ],
          },
        },
        { text: 'The ESGE classification for submucosal fibroids: type 0 entirely in the cavity; type I less than 50% in the myometrium (angle <90°); type II 50% or more in the myometrium (angle ≥90°).', refs: [{ guidelineId: F, locator: 'Table 1' }] },
        { heading: 'FIGO types on the uterus (figure)', text: 'Where each FIGO type sits: 0–2 distort the cavity, 3 touches the endometrium, 4 is within the wall, 5–7 are subserosal, 8 is elsewhere (e.g. cervical).', refs: [{ guidelineId: F, locator: 'Figure 1' }, { guidelineId: I }], figure: { src: 'fig-figo-fibroid.svg', alt: 'Schematic coronal uterus showing fibroid FIGO types 0 to 8 in their positions, with a table of definitions', caption: 'Schematic, not to scale.' } },
      ],
    },
    {
      id: 'diagnosis',
      title: 'Assessment & Imaging',
      icon: 'diagnosis',
      body: [
        { text: 'ICMR essentials: full blood count and ultrasound. Thyroid function is desirable; MRI is optional at tertiary level.', refs: [{ guidelineId: I }] },
        { text: 'NICE: take a history of bleeding and related symptoms; examine; full blood count for every woman with heavy bleeding; test for a coagulation disorder if heavy since menarche or a suggestive history; do not test female hormones, and test thyroid only with other symptoms.', refs: [{ guidelineId: N, locator: '1.2.1–1.2.9' }] },
        { heading: 'Ultrasound', text: 'Pelvic ultrasound is first line, ideally both transabdominal and transvaginal; TVS is more accurate for small fibroids, and colour Doppler helps in special situations. NICE offers ultrasound if the uterus is palpable abdominally, a mass is suspected, or examination is difficult.', refs: [{ guidelineId: F, locator: 'Diagnosis' }, { guidelineId: N, locator: '1.3.12' }] },
        { heading: 'Cavity assessment', text: 'Saline infusion sonography and hysteroscopy are better than TVS for intracavitary fibroids and polyps. NICE offers outpatient hysteroscopy if submucosal fibroids, polyps or endometrial pathology are suspected, and does not use SIS or MRI as first-line tools.', refs: [{ guidelineId: F, locator: 'Diagnosis' }, { guidelineId: N, locator: '1.3.4, 1.3.16–1.3.17' }] },
        { heading: 'MRI', text: 'MRI separates leiomyoma from adenomyosis and malignancy, and maps fibroids better than TVS in large uteri (>375 mL) with more than 4 fibroids. Before UAE or myomectomy, assess with ultrasound and consider MRI for position, size, number and vascularity.', refs: [{ guidelineId: F, locator: 'Diagnosis' }, { guidelineId: N, locator: '1.5.16' }] },
      ],
    },
    {
      id: 'expectant',
      title: 'When to Treat',
      icon: 'management',
      body: [
        {
          text: 'Choosing treatment for fibroids (ICMR STW, FOGSI, NICE NG88, ACOG PB 228).',
          refs: [{ guidelineId: I }, { guidelineId: F }, { guidelineId: N, locator: '1.5' }, { guidelineId: A }],
          flow: {
            caption: 'Uterine fibroids',
            steps: [
              { title: 'Confirm', text: 'TAS + TVS; CBC; hysteroscopy or saline sonography if submucous suspected; MRI for mapping before UAE or complex myomectomy.', tone: 'start' },
              { title: 'Symptoms?', tone: 'decision', branches: [
                { when: 'None', then: 'No treatment (ICMR: under 5 cm); counsel, yearly review' },
                { when: 'Heavy bleeding, under 3 cm, cavity normal', then: 'LNG-IUS first; else tranexamic acid, NSAID, COC, progestogen' },
                { when: 'Submucous (type 0–2)', then: 'Hysteroscopic myomectomy (up to 4–5 cm in experienced hands)' },
                { when: '3 cm or more, symptomatic', then: 'Specialist choice below' },
              ] },
              { title: 'Wants uterus or fertility?', tone: 'decision', branches: [
                { when: 'Yes', then: 'Myomectomy (laparoscopic preferred); UAE or RFA only after counselling on fertility' },
                { when: 'No', then: 'Hysterectomy (vaginal or laparoscopic); UAE or ablation as alternatives' },
              ] },
              { title: 'Before surgery', text: 'GnRH agonist 3–4 months to shrink fibroids and correct anaemia (max 3–6 months).' },
            ],
          },
        },
        { text: 'Expectant management suits women who are asymptomatic or do not want intervention. Counsel and review yearly.', refs: [{ guidelineId: A, locator: 'Level C' }, { guidelineId: F, locator: 'Expectant management' }] },
        { text: 'ICMR: asymptomatic fibroids under 5 cm need no treatment. A "large fibroid" means uterine size over 12 weeks. Explain all options, including observation; not every woman with fibroids needs a hysterectomy.', refs: [{ guidelineId: I }] },
        { text: 'FOGSI: discuss medical or surgical treatment if the uterus is 14 weeks\' size or more. Consider hysterectomy for asymptomatic fibroids that keep growing after menopause without HRT.', refs: [{ guidelineId: F, locator: 'Expectant management' }] },
        { text: 'Choose treatment with the woman, considering her preferences, comorbidities, fibroid size, number and site, other pathology, and pressure and pain symptoms.', refs: [{ guidelineId: N, locator: '1.5.1' }, { guidelineId: A }] },
      ],
    },
    {
      id: 'medical',
      title: 'Medical Treatment',
      icon: 'drug',
      body: [
        {
          text: 'Options by fibroid size (NICE):',
          refs: [{ guidelineId: N, locator: '1.5.2–1.5.15' }],
          table: {
            columns: ['Situation', 'Options'],
            rows: [
              ['No fibroid or fibroids <3 cm not distorting the cavity', 'LNG-IUS first; if unsuitable, tranexamic acid, NSAIDs, combined hormonal contraception, cyclical oral progestogens'],
              ['While waiting for investigations', 'Tranexamic acid and/or NSAIDs, continued while they help'],
              ['Fibroids ≥3 cm', 'Tranexamic acid, NSAIDs, LNG-IUS, combined hormonal contraception, cyclical progestogens, ulipristal (restricted), or UAE / myomectomy / hysterectomy'],
            ],
          },
        },
        { text: 'ACOG (Level B): the 52-mg LNG-IUD and tranexamic acid can be considered for fibroid-related bleeding, and an oral GnRH antagonist with hormonal add-back can be used for up to 2 years. Level C: combined and progestin-only contraceptives are a reasonable option, with limited direct data.', refs: [{ guidelineId: A, locator: 'Summary of recommendations' }] },
        { text: 'FOGSI: combined pills control bleeding but do not shrink fibroids. LNG-IUS reduces bleeding and volume in observational data; avoid it with intracavitary fibroids that can be removed hysteroscopically.', refs: [{ guidelineId: F, locator: 'Medical management' }] },
        { heading: 'Progestogens (ICMR)', text: 'Norethisterone or medroxyprogesterone acetate (maximum 40 mg/day each) by mouth daily in divided doses for 3 weeks, repeated cyclically for 4–6 cycles.', refs: [{ guidelineId: I }] },
        { heading: 'GnRH agonists', text: 'Use for 3–6 months only, because of menopausal symptoms and bone loss. Given for 3–4 months before surgery, they shrink the uterus and fibroids, correct anaemia and reduce blood loss. FOGSI advises against them before open or laparoscopic myomectomy (loss of cleavage planes) but accepts them before hysteroscopic myomectomy and hysterectomy. NICE: consider GnRH analogue pretreatment before hysterectomy or myomectomy if fibroids enlarge or distort the uterus.', refs: [{ guidelineId: F, locator: 'GnRH agonists' }, { guidelineId: N, locator: '1.5.19' }] },
        { heading: 'GnRH antagonists', text: 'NICE refers to its technology appraisals for relugolix–estradiol–norethisterone acetate (TA832, 2022) and linzagolix (TA996, 2024).', refs: [{ guidelineId: N, locator: '1.5.4, 1.5.12' }, { guidelineId: A, locator: 'Level B' }] },
        {
          heading: 'Ulipristal acetate',
          text: 'Restricted because of serious liver injury:',
          refs: [{ guidelineId: N, locator: '1.5.13–1.5.14' }, { guidelineId: F, locator: 'Ulipristal' }],
          table: {
            columns: ['Item', 'Detail'],
            rows: [
              ['Who', 'Premenopausal women with moderate to severe symptoms and fibroids ≥3 cm, when surgery and UAE are unsuitable, have failed or are declined; particularly if Hb ≤102 g/L (NICE)'],
              ['Dose', '5 mg daily; one course is 13 weeks (FOGSI); up to 4 intermittent courses'],
              ['Liver tests', 'Before starting, monthly during the first 2 courses, and before each new course; stop and test urgently if liver failure is suspected'],
              ['Avoid', 'Known liver disease; defer or stop if liver enzymes exceed twice the upper limit (FOGSI)'],
            ],
          },
        },
        { heading: 'Other agents (FOGSI)', text: 'Mifepristone 25 mg daily for 3 months, then 10 mg daily, shrank fibroids in Indian studies. Letrozole 2.5 mg daily for 12 weeks reduced fibroid volume by about half, but FOGSI says evidence is not enough for routine use.', refs: [{ guidelineId: F, locator: 'Mifepristone, Letrozole' }] },
        { text: 'ICMR primary care: NSAIDs, iron and folic acid, and oral contraceptives or progestins for abnormal bleeding; refer when definitive diagnosis, special treatment or surgery is needed.', refs: [{ guidelineId: I }] },
      ],
    },
    {
      id: 'surgery',
      title: 'Surgical Treatment',
      icon: 'surgery',
      body: [
        { heading: 'Myomectomy', text: 'Recommended for symptomatic fibroids when the woman wants to keep her uterus or have children, after counselling about recurrence (ACOG Level B). Use a minimally invasive approach where feasible. Laparoscopic myomectomy causes less fall in haemoglobin and a shorter stay than open myomectomy. FOGSI suggests waiting 3 months after myomectomy before pregnancy.', refs: [{ guidelineId: A, locator: 'Level B' }, { guidelineId: F, locator: 'Myomectomy' }] },
        { heading: 'Hysteroscopic myomectomy', text: 'First line for symptomatic intracavitary fibroids. Experienced surgeons can remove types 0, 1 and 2 up to 4–5 cm; single-step success is about 88%.', refs: [{ guidelineId: F, locator: 'Hysteroscopic myomectomy' }, { guidelineId: N, locator: '1.5.7' }] },
        { heading: 'Hysterectomy', text: 'Definitive treatment when childbearing is complete or the woman does not wish to keep her uterus (ACOG Level B). Prefer vaginal or laparoscopic routes. Discuss total vs subtotal hysterectomy, and remove ovaries only at the woman\'s express wish. Warn that hysterectomy with fibroids carries a higher risk of haemorrhage and organ injury. ICMR: avoid hysterectomy under 35 where possible.', refs: [{ guidelineId: A, locator: 'Level B' }, { guidelineId: F, locator: 'Hysterectomy' }, { guidelineId: N, locator: '1.4.8, 1.5.20–1.5.22' }, { guidelineId: I }] },
        { heading: 'Endometrial ablation', text: 'Second-generation ablation can be considered for heavy bleeding with fibroids of 3 cm or more if they meet the device criteria. Advise against pregnancy afterwards.', refs: [{ guidelineId: N, locator: '1.4.6, 1.5.17' }] },
        { heading: 'Morcellation', text: 'Leiomyosarcoma is rare and cannot be reliably diagnosed before surgery. Discuss the risk, use contained morcellation where possible, and be cautious in perimenopausal women or when suspicion is high.', refs: [{ guidelineId: F, locator: 'Morcellation' }] },
      ],
    },
    {
      id: 'uterus-sparing',
      title: 'UAE, Ablation & Fertility',
      icon: 'surgery',
      body: [
        { text: 'Uterine artery embolisation controls symptoms and reduces size, with a shorter stay and quicker recovery, but more complications and re-interventions than surgery, and it may reduce fertility. Explain the effect on fertility before UAE or surgery.', refs: [{ guidelineId: F, locator: 'UAE' }, { guidelineId: N, locator: '1.4.4–1.4.5' }] },
        { text: 'Laparoscopic radiofrequency ablation can be considered for women who want to keep their uterus, after counselling that data on pregnancy outcomes are limited (ACOG Level B).', refs: [{ guidelineId: A, locator: 'Level B' }] },
        { text: 'ICMR: UAE, radiofrequency ablation and MRI-guided focused ultrasound may be considered at tertiary centres where available, for example in women with fibroids and subfertility.', refs: [{ guidelineId: I }] },
        { text: 'Myomectomy may improve fertility. Hysteroscopic myomectomy is first line for intracavitary fibroids, and laparoscopic is preferred over open myomectomy. Poor closure after deep intramural myomectomy has been linked to uterine rupture in later pregnancy.', refs: [{ guidelineId: F, locator: 'Fertility, Myomectomy' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Threshold for "large" fibroid',
      entries: [
        { guidelineId: F, text: 'Discuss treatment if the uterus is ≥14 weeks\' size.' },
        { guidelineId: N, text: 'Fibroids ≥3 cm change the treatment pathway; consider specialist referral.', locator: '1.5.8' },
        { guidelineId: I, text: 'No treatment for asymptomatic fibroids <5 cm; "large" means uterus >12 weeks.' },
      ],
    },
    {
      domain: 'First-line medical option for heavy bleeding',
      entries: [
        { guidelineId: A, text: 'LNG-IUD, tranexamic acid, or GnRH antagonist with add-back (Level B).' },
        { guidelineId: N, text: 'LNG-IUS first if fibroids <3 cm and cavity not distorted.', locator: '1.5.2' },
        { guidelineId: I, text: 'Oral contraceptives or progestins in primary care; NSAIDs and iron.' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI Key Practice Points on Fibroids (2019), about 60% in full; ICMR STW (Dec 2025) in full; NICE NG88 recommendations 1.1–1.5 (wording paraphrased). Only the summary of ACOG Practice Bulletin 228 could be read (from a copy hosted by a device company), so ACOG detail on GnRH agents, UAE and morcellation is missing. RCOG has no fibroid Green-top Guideline. FOGSI Gyan-Vahini Fibroid Focus (2025) was mostly available only as a summary and is not cited. Fibroids in pregnancy and leiomyosarcoma red flags were not covered by the sections that could be read. Doses are quoted from the source for clinician review.',
};
