import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI–ICOG GCPR "Update in Managing PCOS in Women" (draft 5, May 2024): pp.1–15 read in full;
 *    pp.16–24 (metabolic, endometrium, mental health) from a summary only        -> fogsi-pcos
 *  - FOGSI Focus PCOS Practice Points 2024 (obesity, lifestyle, infertility)    -> fogsi-pcos-focus
 *  - 2023 International Evidence-based PCOS Guideline (Teede et al.): diagnosis, risk,
 *    psychological sections read in full; pharmacology/infertility/pregnancy from summary -> eshre-pcos
 *  - RCOG GTG 33 (2014), non-RCOG copy of the PDF                              -> rcog-gtg-33
 *  - ACOG positions via AAFP 2023 review (PB 194 not readable)                  -> acog-pcos-aafp
 *  - NICE: no published PCOS guideline yet (GID-NG10436, expected Dec 2026)     -> nice-pcos-dev
 */
const F = 'fogsi-pcos';
const FF = 'fogsi-pcos-focus';
const I = 'eshre-pcos';
const R = 'rcog-gtg-33';
const A = 'acog-pcos-aafp';
const N = 'nice-pcos-dev';

export const pcos: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Polycystic ovary syndrome is the commonest endocrine disorder of reproductive-age women. It is diagnosed with the Rotterdam criteria (two of: ovulatory dysfunction, clinical or biochemical hyperandrogenism, polycystic ovarian morphology on ultrasound or raised AMH) after excluding other causes. Indian women develop more hirsutism, insulin resistance and metabolic syndrome than other groups, so FOGSI adds acanthosis nigricans as a supportive feature and screens every woman with an OGTT. Management is lifestyle first, then targeted treatment for the main complaint: COCs for cycles and hirsutism, metformin for metabolic risk, letrozole for ovulation induction, plus lifelong screening for diabetes, cardiovascular risk, endometrial hyperplasia and depression.',
  keyPoints: [
    { text: 'Diagnose with Rotterdam (2 of 3) after excluding thyroid disease, hyperprolactinaemia, non-classic CAH and other causes. If irregular cycles and hyperandrogenism are both present, no ultrasound or AMH is needed.', refs: [{ guidelineId: F, locator: '3.1, 3.7' }, { guidelineId: I, locator: '1.4.9, 1.5.2' }, { guidelineId: R, locator: '4.1' }] },
    { text: 'Polycystic ovarian morphology in adults: ≥20 follicles per ovary and/or ovarian volume ≥10 mL on TVS. FOGSI accepts AMH ≥3.2 ng/mL (Elecsys) instead of ultrasound in adults. Do not use ultrasound or AMH in adolescents.', refs: [{ guidelineId: F, locator: '3.5, 3.7' }, { guidelineId: I, locator: '1.4.4–1.5.4' }] },
    { text: 'Adolescents need both irregular cycles and hyperandrogenism. Those with features but not the full criteria are "at risk" and are reassessed up to 8 years after menarche.', refs: [{ guidelineId: F, locator: 'p.11' }, { guidelineId: A }] },
    { text: 'Screen every woman at diagnosis: 75 g OGTT (HbA1c/fasting glucose if OGTT is not possible), lipid profile, BP, BMI and waist, and depression/anxiety. Repeat glucose testing every 1–3 years by risk.', refs: [{ guidelineId: F, locator: 'Table 5' }, { guidelineId: I, locator: '1.8.3–1.9.10, 2.2.1–2.2.4' }, { guidelineId: R, locator: '6.1.2, 6.3, 6.4' }] },
    { text: 'Lifestyle is first line for everyone. A 5–10% weight loss in overweight women improves cycles, androgens and fertility.', refs: [{ guidelineId: F, locator: '6.1, 8.1' }, { guidelineId: I, locator: '3.1.1' }, { guidelineId: R, locator: '8.1.1' }] },
    { text: 'Low-dose COC (20–30 µg EE) is first line for irregular cycles, hirsutism and acne when pregnancy is not wanted. Metformin is for BMI ≥25 or metabolic risk. Antiandrogens only after 6 months of COC, with contraception.', refs: [{ guidelineId: F, locator: '7.1–7.3' }, { guidelineId: A }] },
    { text: 'Protect the endometrium: ensure a withdrawal bleed at least every 3–4 months if cycles are infrequent.', refs: [{ guidelineId: R, locator: '7.1' }, { guidelineId: I, locator: '1.11.4' }] },
    { text: 'Infertility: letrozole is first line; clomiphene (± metformin), gonadotrophins or laparoscopic ovarian drilling are second line; IVF is third line, using an antagonist protocol with agonist trigger and freeze-all to prevent OHSS.', refs: [{ guidelineId: F, locator: '9.3–9.5' }, { guidelineId: FF, locator: 'Infertility p.8' }, { guidelineId: A }] },
  ],
  sections: [
    {
      id: 'epidemiology',
      title: 'Epidemiology & Phenotypes',
      icon: 'epidemiology',
      body: [
        { text: 'In India, PCOS affects 3.7–22.5% of young women and 9.13–36% of adolescents. The pooled Indian prevalence by Rotterdam criteria is 11.34%. Indian women with PCOS have more hirsutism, infertility, acne and insulin resistance than other ethnic groups, and lower IVF live-birth rates.', refs: [{ guidelineId: F, locator: 'p.7, Table 1' }] },
        { text: 'Worldwide prevalence by Rotterdam criteria is 10–13%.', refs: [{ guidelineId: I, locator: '1.6.1' }] },
        { text: 'Between 38% and 88% of women with PCOS are overweight or obese, and 50–90% have insulin resistance (75% of lean and 95% of women with higher BMI on clamp studies).', refs: [{ guidelineId: FF, locator: 'Obesity p.3–5' }] },
        {
          text: 'Rotterdam phenotypes and their frequency in one Indian study:',
          refs: [{ guidelineId: FF, locator: 'Obesity p.4' }],
          table: {
            columns: ['Phenotype', 'Features', 'Indian study'],
            rows: [['A (complete)', 'Hyperandrogenism + ovulatory dysfunction + PCOM', '52.6%'], ['B', 'Hyperandrogenism + ovulatory dysfunction', '11.4%'], ['C', 'Hyperandrogenism + PCOM', '15.1%'], ['D', 'Ovulatory dysfunction + PCOM', '21%']],
          },
        },
      ],
    },
    {
      id: 'diagnosis',
      title: 'Diagnostic Criteria',
      icon: 'diagnosis',
      body: [
        { heading: 'Rotterdam criteria (adults)', text: 'Two of three: (1) oligo- or anovulation, (2) clinical and/or biochemical hyperandrogenism, (3) polycystic ovarian morphology on ultrasound or, in adults, raised AMH. Exclude other causes first. Once two criteria are present, the third need not be tested.', refs: [{ guidelineId: F, locator: '3.1' }, { guidelineId: R, locator: '4.1' }, { guidelineId: I, locator: '1.4.9' }, { guidelineId: A }] },
        {
          heading: 'Irregular cycles',
          text: 'Definitions shared by FOGSI and the International guideline:',
          refs: [{ guidelineId: F, locator: '3.2' }, { guidelineId: I, locator: '1.1.1' }],
          table: {
            columns: ['Time since menarche', 'Irregular if'],
            rows: [['First year', 'Normal (part of puberty), but any one cycle >90 days is irregular'], ['1 to <3 years', 'Cycles <21 or >45 days'], ['3 years to perimenopause', 'Cycles <21 or >35 days, or fewer than 8 cycles a year'], ['Primary amenorrhoea', 'No periods by age 15, or more than 3 years after breast development']],
          },
        },
        { heading: 'Clinical hyperandrogenism', text: 'Hirsutism is the strongest predictor; acne and hair loss alone are weak predictors. Use the modified Ferriman–Gallwey (mFG) score. FOGSI grades it as <4 mild, 4–7 moderate and ≥8 severe. The International guideline uses a cut-off of 4–6 depending on ethnicity. FOGSI also uses the Indian Acne Association grading for acne, the Ludwig scale for alopecia, and the Burks scale for acanthosis.', refs: [{ guidelineId: F, locator: '3.3' }, { guidelineId: I, locator: '1.3.1–1.3.5' }] },
        { text: 'FOGSI counts acanthosis nigricans as an additional diagnostic feature in Indian adults and adolescents, with or without obesity.', refs: [{ guidelineId: F, locator: '3.8 (Grade B)' }] },
        { heading: 'Biochemical hyperandrogenism', text: 'Measure total and free testosterone (or free androgen index). If these are normal, consider androstenedione and DHEAS. Stop hormonal contraception for at least 3 months before testing. LC-MS/MS is preferred over immunoassay.', refs: [{ guidelineId: F, locator: '3.4' }, { guidelineId: I, locator: '1.2.1–1.2.6' }, { guidelineId: R, locator: '4.1' }] },
        {
          heading: 'Polycystic ovarian morphology',
          text: 'Thresholds in adults:',
          refs: [{ guidelineId: F, locator: '3.5, 3.7' }, { guidelineId: I, locator: '1.4.4–1.5.6' }, { guidelineId: R, locator: '4.1' }],
          table: {
            columns: ['Method', 'Threshold', 'Source'],
            rows: [
              ['TVS (8 MHz probe)', '≥20 follicles per ovary and/or volume ≥10 mL in either ovary, with no corpus luteum, cyst or dominant follicle', 'FOGSI, International'],
              ['TVS, older equipment', 'Volume ≥10 mL or ≥10 follicles per cross-section', 'International'],
              ['Transabdominal', 'Ovarian volume ≥10 mL', 'FOGSI, International'],
              ['AMH (adults only)', '≥3.2 ng/mL (23 pmol/L) on Elecsys AMH Plus; use AMH or ultrasound, not both', 'FOGSI; International (no fixed cut-off)'],
              ['RCOG 2014', '≥12 follicles or volume >10 cm³', 'RCOG (older threshold)'],
            ],
          },
        },
        { text: 'Do not use ultrasound within 8 years of menarche, and do not use AMH in adolescents.', refs: [{ guidelineId: F, locator: '3.5' }, { guidelineId: I, locator: '1.4.6, 1.5.4' }] },
        { heading: 'Adolescents', text: 'Both irregular cycles and hyperandrogenism are needed. Girls with features who do not meet the criteria (for example, hirsutism or acne not responding to treatment, persistent menstrual problems, significant weight gain) are "at risk" and should be reassessed at or before 8 years after menarche.', refs: [{ guidelineId: F, locator: 'p.11' }, { guidelineId: A }] },
      ],
    },
    {
      id: 'investigations',
      title: 'Investigations',
      icon: 'lab',
      body: [
        {
          text: 'FOGSI investigation plan:',
          refs: [{ guidelineId: F, locator: 'Table 5, pp.10–11' }],
          table: {
            columns: ['Purpose', 'Tests'],
            rows: [
              ['Exclude differentials', 'TSH, T3, T4; prolactin; FSH and LH; AMH (optional); pregnancy test'],
              ['All women with PCOS', '75 g OGTT (fasting and 2 h); HbA1c and fasting glucose if OGTT not feasible; fasting lipid profile'],
              ['If no clinical hyperandrogenism', 'Total testosterone / free androgen index'],
              ['Ovarian morphology', 'Ultrasound (TVS preferred)'],
              ['If indicated', 'Androgen profile and imaging for rapid virilisation; dexamethasone suppression test for Cushing; LFT and abdominal ultrasound for fatty liver; sleep study if OSA symptoms; endometrial thickness on TVS for abnormal bleeding'],
            ],
          },
        },
        {
          text: 'Differentials and the tests that exclude them:',
          refs: [{ guidelineId: F, locator: 'Table 4' }, { guidelineId: A }],
          table: {
            columns: ['Condition', 'Test'],
            rows: [
              ['Non-classic CAH', '17-OH progesterone before 8 am (follicular phase)'],
              ['Cushing syndrome', '24-h urinary free cortisol, overnight dexamethasone suppression'],
              ['Androgen-secreting tumour', 'Testosterone and DHEAS, with imaging'],
              ['Hyperprolactinaemia', 'Prolactin; MRI pituitary if raised'],
              ['Thyroid disease', 'TSH'],
              ['Ovarian insufficiency', 'FSH, LH, AMH, oestradiol, ovarian ultrasound'],
              ['Hypothalamic amenorrhoea', 'FSH, LH, oestradiol'],
              ['Acromegaly', 'IGF-1 (AAFP)'],
            ],
          },
        },
        { text: 'Routine insulin assays are not recommended.', refs: [{ guidelineId: I, locator: '1.9.12' }] },
      ],
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle & Weight Management',
      icon: 'lifestyle',
      body: [
        { text: 'Lifestyle change (healthy eating, physical activity and behavioural strategies) is recommended for every woman with PCOS. FOGSI advises 6 months of lifestyle change as the first step in all women. Benefits occur even without weight loss.', refs: [{ guidelineId: F, locator: '6.1, 8.1 (Grade A)' }, { guidelineId: I, locator: '3.1.1–3.1.5' }, { guidelineId: R, locator: '8.1.1' }] },
        {
          text: 'Targets:',
          refs: [{ guidelineId: F, locator: '6.1–6.4' }, { guidelineId: FF, locator: 'Lifestyle p.4–6' }],
          table: {
            columns: ['Area', 'FOGSI recommendation'],
            rows: [
              ['Weight', '5–10% loss in overweight women; 2–5% already improves ovulation'],
              ['Diet', 'No single diet is best. Energy deficit of 30% or 500–750 kcal/day (about 1200–1500 kcal/day). Low-GI, high-fibre, protein about 1 g/kg; DASH diet suggested'],
              ['Activity (adults)', 'At least 150 min/week moderate activity plus muscle strengthening on 2 non-consecutive days; more (≥250 min/week) for weight loss; 10,000 steps/day as an ideal'],
              ['Activity (adolescents)', 'At least 60 min/day moderate to vigorous, with muscle and bone strengthening 3 times a week'],
              ['Behaviour', 'SMART goals, self-monitoring, slower eating, relapse prevention; CBT, mindfulness and yoga can help'],
            ],
          },
        },
        { text: 'Lean PCOS (BMI ≤25): maintain weight, focus on resistance exercise and nutrition. Metformin gives no metabolic advantage unless there is glucose intolerance.', refs: [{ guidelineId: FF, locator: 'Lifestyle p.8–9' }] },
        { text: 'Bariatric surgery can be considered for severe obesity when other measures fail (RCOG: BMI ≥40, or ≥35 with a high-risk condition). Avoid pregnancy for about 12 months afterwards.', refs: [{ guidelineId: R, locator: '8.4.1' }, { guidelineId: F, locator: '7.6, 9.4b' }, { guidelineId: FF, locator: 'Obesity p.9–11' }] },
      ],
    },
    {
      id: 'cycles-hirsutism',
      title: 'Irregular Cycles, Hirsutism & Acne',
      icon: 'drug',
      body: [
        {
          text: 'Management by what the woman wants (FOGSI 2023, International PCOS guideline).',
          refs: [{ guidelineId: F, locator: '7–9' }, { guidelineId: I }],
          flow: {
            caption: 'PCOS',
            steps: [
              { title: 'Confirm (Rotterdam, 2 of 3)', text: 'Irregular cycles, hyperandrogenism, PCO on TVS or AMH (adults). Exclude thyroid, prolactin, NCAH. OGTT and lipids for all.', tone: 'start' },
              { title: 'Lifestyle for everyone', text: '5–10% weight loss if overweight; 150 min/week activity; 6 months first step (FOGSI).' },
              { title: 'Main concern', tone: 'decision', branches: [
                { when: 'Irregular cycles / no pregnancy wish', then: 'Low-dose COC; or cyclical progestogen (bleed every 3–4 months)' },
                { when: 'Hirsutism or acne', then: 'COC with antiandrogenic progestin 6 months + laser; antiandrogen only if COC fails' },
                { when: 'Metabolic (BMI 25+ or IGT)', then: 'Metformin 500 mg, up by 500 mg weekly, max 2.5 g/day' },
                { when: 'Wants pregnancy', then: 'Letrozole first (up to 6 cycles); then clomiphene ± metformin, gonadotrophins or drilling; then IVF' },
              ] },
              { title: 'Long term', text: 'Screen glucose, lipids, BP, mood; protect endometrium.' },
            ],
          },
        },
        { heading: 'Combined oral contraceptives', text: 'First line for irregular cycles and hyperandrogenism in adults and adolescents who do not want pregnancy. All COCs work equally well; use the lowest effective dose (20–30 µg ethinylestradiol). Check contraindications, especially obesity, hypertension and dyslipidaemia.', refs: [{ guidelineId: F, locator: '7.1a–b (Grade A)' }, { guidelineId: A }] },
        { text: 'For hirsutism and severe acne, FOGSI prefers a low-dose COC with an antiandrogenic progestin (cyproterone acetate, drospirenone or desogestrel) for at least 6 months, combined with laser hair removal. Refer to a dermatologist for cosmetic methods and moderate to severe acne.', refs: [{ guidelineId: F, locator: '8.3a–b' }] },
        { text: 'The International guideline considers 35 µg EE with cyproterone acetate a second-line option because of VTE risk.', refs: [{ guidelineId: I, locator: '4.2.5 (from summary)' }] },
        { heading: 'Progestogens', text: 'Lifestyle plus cyclical progestogen withdrawal is an alternative when a COC is not wanted. Endometrial protection needs a bleed at least every 3–4 months.', refs: [{ guidelineId: F, locator: '8.2' }, { guidelineId: R, locator: '7.1' }] },
        { heading: 'Antiandrogens', text: 'Spironolactone, cyproterone acetate or finasteride only if COCs are contraindicated, not tolerated or ineffective after 6 months, with endocrinologist input and reliable contraception (risk to a male fetus).', refs: [{ guidelineId: F, locator: '7.3, 8.3a (Grade B)' }, { guidelineId: A }] },
        { heading: 'Hair loss', text: 'COC or spironolactone first line with an endocrinologist; dermatology referral for minoxidil or hair transplant in severe cases.', refs: [{ guidelineId: F, locator: '8.3c' }] },
      ],
    },
    {
      id: 'metabolic-drugs',
      title: 'Metformin, Inositol & Anti-obesity Drugs',
      icon: 'drug',
      body: [
        { heading: 'Metformin', text: 'FOGSI: with lifestyle change for adults with BMI ≥25 (Grade A); in adolescents with BMI ≥25 if lifestyle change fails (Grade B); added to a COC in women with obesity or metabolic problems. AAFP: offer ≥1500 mg/day to women with metabolic abnormalities. RCOG: consider for impaired glucose tolerance not improving with lifestyle change; it is unlicensed for PCOS.', refs: [{ guidelineId: F, locator: '7.1c, 7.2' }, { guidelineId: A }, { guidelineId: R, locator: '8.2' }] },
        {
          text: 'Metformin dosing as stated by FOGSI:',
          refs: [{ guidelineId: F, locator: 'p.13' }, { guidelineId: FF, locator: 'Obesity p.6–8' }],
          table: {
            columns: ['Item', 'Detail'],
            rows: [['Start', '500 mg once or twice daily (immediate release)'], ['Titrate', 'Increase by 500 mg each week'], ['Maximum', '2.5 g/day adults, 2 g/day adolescents'], ['Side effects', 'GI upset in up to 30%; monitor vitamin B12 on long-term use'], ['Contraindications', 'Severe renal dysfunction, metabolic acidosis, hypersensitivity']],
          },
        },
        { heading: 'Inositol', text: 'FOGSI: inositols may improve metabolic markers, androgens and cycles, and can be used when metformin causes severe GI upset; myo-inositol is safe and can be considered. Metformin plus myo-inositol gave better results than either alone in Indian studies (for example, metformin 500 mg with myo-inositol 600 mg; the FOGSI documents differ on twice vs three times daily). The International guideline says inositol may be considered by preference but its benefit is limited.', refs: [{ guidelineId: F, locator: '7.5' }, { guidelineId: FF, locator: 'Obesity p.6–10, Lifestyle p.10' }, { guidelineId: I, locator: '4.7 (from summary)' }] },
        { heading: 'Anti-obesity drugs', text: 'Liraglutide, semaglutide or orlistat may be considered in adults with higher weight, alongside lifestyle change and with an endocrinologist. FOGSI Focus strongly favours GLP-1 agonists when there is glucose intolerance, diabetes or cardiovascular risk. Use contraception during treatment; do not use them in adolescents.', refs: [{ guidelineId: F, locator: '7.4' }, { guidelineId: FF, locator: 'Obesity p.8–11' }] },
      ],
    },
    {
      id: 'infertility',
      title: 'Infertility & Ovulation Induction',
      icon: 'fertility',
      body: [
        { text: 'Before treatment: weight reduction, about 60 minutes of activity a day for up to 3 months, and stopping smoking and alcohol. Counsel on treatment options, success and cost. If LH is three times basal, FOGSI suggests a low-dose COC for at least 2 months first.', refs: [{ guidelineId: F, locator: '9.1–9.3a' }] },
        {
          text: 'Treatment ladder:',
          refs: [{ guidelineId: F, locator: '9.3–9.5' }, { guidelineId: FF, locator: 'Infertility p.3–8' }, { guidelineId: A }, { guidelineId: I, locator: '5.3–5.7 (from summary)' }],
          table: {
            columns: ['Line', 'Treatment', 'Notes'],
            rows: [
              ['First', 'Letrozole', 'Better ovulation, pregnancy and live-birth rates than clomiphene; up to 6 cycles'],
              ['Second', 'Clomiphene citrate (± metformin)', 'Up to 6 cycles with ultrasound monitoring; CC plus metformin is better than either alone'],
              ['Second', 'Gonadotrophins', 'After oral agents fail; counsel about OHSS, multiple pregnancy and cancellation; FSH and hMG equally effective'],
              ['Second', 'Laparoscopic ovarian drilling', 'For clomiphene resistance, especially with LH hypersecretion and normal BMI; FOGSI limits it to 4 punctures per ovary'],
              ['Third', 'IVF / ICSI', 'Antagonist protocol, GnRH agonist trigger and freeze-all to prevent OHSS; luteal progesterone; IVM where expertise exists'],
            ],
          },
        },
        { text: 'Add metformin to fertility treatment in women with impaired glucose tolerance, obese women on clomiphene, clomiphene-resistant women and those at high risk of hyperstimulation.', refs: [{ guidelineId: F, locator: '9.3d (Grade A)' }] },
        { text: 'AAFP dosing (from summary, verify): letrozole 2.5 mg/day for 5 days from about day 3, increased to 5 and up to 7.5 mg; clomiphene 50 mg/day for 5 days, maximum 100 mg/day, up to 6 cycles. FOGSI documents give no doses.', refs: [{ guidelineId: A }] },
        { text: 'NICE CG156 covers ovulation induction in PCOS but could not be read for this draft.', refs: [{ guidelineId: N }] },
      ],
    },
    {
      id: 'pregnancy',
      title: 'Pregnancy in PCOS',
      icon: 'fetus',
      body: [
        { text: 'Pregnancies in women with PCOS carry higher risks of gestational diabetes, miscarriage, hypertensive disorders, growth restriction (SGA) and preterm birth. Optimise weight and check OGTT and BP before pregnancy.', refs: [{ guidelineId: F, locator: '8.6' }, { guidelineId: I, locator: '1.9.11, 4.10' }] },
        { text: 'Offer an OGTT before pregnancy or at the first antenatal visit, and to all women at 24–28 weeks.', refs: [{ guidelineId: I, locator: '1.9.11' }, { guidelineId: R, locator: '6.1.1' }] },
        { text: 'Metformin in pregnancy has not been shown to prevent GDM, late miscarriage, hypertension, preeclampsia or macrosomia. It may be considered where there is a risk of preterm birth.', refs: [{ guidelineId: FF, locator: 'Infertility p.5' }, { guidelineId: I, locator: '4.11 (from summary)' }] },
      ],
    },
    {
      id: 'long-term',
      title: 'Long-term Risks & Monitoring',
      icon: 'followup',
      body: [
        {
          text: 'Screening schedule:',
          refs: [{ guidelineId: I, locator: '1.8–1.11' }, { guidelineId: R, locator: '6.1–7.1' }, { guidelineId: F, locator: 'Table 5, §11 (from summary)' }],
          table: {
            columns: ['Risk', 'What to do'],
            rows: [
              ['Type 2 diabetes', '75 g OGTT at diagnosis for all (FOGSI; International). Repeat every 1–3 years (International); yearly if IFG or IGT (RCOG). RCOG targets BMI ≥25, or <25 with age >40, previous GDM or family history; South Asian women regardless of BMI'],
              ['Cardiovascular', 'Lipids at diagnosis; BP yearly and before pregnancy or fertility treatment; assess weight, waist and smoking'],
              ['Endometrial cancer', 'Inform women of the higher risk; no routine screening. Withdrawal bleed at least every 3–4 months. TVS if no withdrawal bleed or abnormal bleeding; endometrium <7 mm makes hyperplasia unlikely (RCOG); biopsy if thickened'],
              ['Sleep apnoea', 'Ask about snoring, unrefreshing sleep and daytime sleepiness; sleep study if positive'],
              ['Depression and anxiety', 'Screen all at diagnosis with validated tools (FOGSI: PHQ-9); consider eating disorders; offer psychological therapy (CBT) first'],
              ['Fatty liver', 'LFTs and ultrasound if insulin resistance or metabolic syndrome (FOGSI, from summary)'],
            ],
          },
        },
        { text: 'RCOG does not recommend extra breast or ovarian cancer screening. Lipid-lowering drugs should be prescribed by a specialist only.', refs: [{ guidelineId: R, locator: '6.3, 7.1' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Ultrasound threshold for PCOM',
      entries: [
        { guidelineId: F, text: '≥20 follicles per ovary and/or volume ≥10 mL; AMH ≥3.2 ng/mL as alternative.', locator: '3.5, 3.7' },
        { guidelineId: R, text: '≥12 follicles or volume >10 cm³ (2014 criteria).', locator: '4.1' },
        { guidelineId: I, text: '≥20 follicles per ovary; AMH can replace ultrasound in adults.', locator: '1.4.4, 1.5.1' },
      ],
    },
    {
      domain: 'Diabetes screening',
      entries: [
        { guidelineId: F, text: 'OGTT in all women with PCOS.', locator: 'Table 5' },
        { guidelineId: R, text: 'OGTT if BMI ≥25, or BMI <25 with other risk factors; South Asian women regardless of BMI.', locator: '6.1.2' },
        { guidelineId: I, text: 'OGTT preferred for all at diagnosis; repeat every 1–3 years.', locator: '1.9.2–1.9.9' },
      ],
    },
    {
      domain: 'Metformin',
      entries: [
        { guidelineId: F, text: 'With lifestyle change for BMI ≥25; up to 2.5 g/day.', locator: '7.2' },
        { guidelineId: A, text: '≥1500 mg/day for women with metabolic abnormalities.' },
        { guidelineId: R, text: 'Only for impaired glucose tolerance not improving with lifestyle change.', locator: '8.2' },
      ],
    },
    {
      domain: 'NICE',
      entries: [{ guidelineId: N, text: 'No guideline yet; NICE is adapting the 2023 International guideline, expected December 2026.' }],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI–ICOG PCOS GCPR (draft 5, May 2024), pages 1–15 in full and pages 16–24 from a summary; three FOGSI Focus PCOS practice-point documents (2024); the 2023 International PCOS guideline, diagnosis, risk and psychological sections in full and later sections from a summary (marked "from summary"); RCOG GTG 33 (2014) from a non-RCOG copy, evidence grades not matched. ACOG Practice Bulletin 194 could not be accessed, so ACOG-side content comes from the 2023 AAFP review. NICE has no PCOS guideline yet (due December 2026), and NICE CG156 could not be read. FOGSI documents give no letrozole, clomiphene or gonadotrophin doses. All doses are quoted from the source for clinician review.',
};
