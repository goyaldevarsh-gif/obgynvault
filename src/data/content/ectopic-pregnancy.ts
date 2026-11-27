import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI GCPR on Ectopic Pregnancy, v01 Sept 2020 (full PDF read)     -> fogsi-ectopic
 *  - NICE NG126 recommendations page (read)                             -> nice-ng126
 *  - ACOG positions via AAFP 2020 review (PB 193 not readable)          -> acog-ectopic-aafp
 *  - RCOG GTG 21 (summary page only; full text Wiley-blocked)           -> rcog-gtg-21
 */
const F = 'fogsi-ectopic';
const N = 'nice-ng126';
const A = 'acog-ectopic-aafp';
const R = 'rcog-gtg-21';

export const ectopicPregnancy: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Ectopic pregnancy is implantation outside the endometrial cavity, most often in the fallopian tube. It accounts for about 1–2% of pregnancies in Indian studies, and genital tuberculosis is an important local risk factor. Diagnosis rests on transvaginal ultrasound interpreted with serial serum hCG, not on a single hCG value. Stable women with small, unruptured tubal ectopics and low hCG can be managed expectantly or with single-dose methotrexate. Surgery (laparoscopic salpingectomy in most cases) is needed for higher hCG, cardiac activity, pain or rupture.',
  keyPoints: [
    { text: 'Consider ectopic pregnancy in every woman of reproductive age with pain or bleeding, and do a pregnancy test even if symptoms are vague. About a third have no risk factor.', refs: [{ guidelineId: N, locator: '1.3.2–1.3.8' }, { guidelineId: F, locator: 'Risk factors' }] },
    { text: 'Use transvaginal ultrasound. Do not use a single hCG value to locate the pregnancy; use two values 48 hours apart to judge trophoblast activity.', refs: [{ guidelineId: N, locator: '1.4.1, 1.4.24–1.4.27' }, { guidelineId: F, locator: 'Diagnosis' }] },
    { text: 'Expectant management (NICE): stable, pain-free, mass <35 mm, no heartbeat and hCG ≤1000 IU/L (consider up to 1500).', refs: [{ guidelineId: N, locator: '1.6.3–1.6.4' }] },
    { text: 'Methotrexate: stable, unruptured, mass <35 mm, no heartbeat, no intrauterine pregnancy, able to follow up. NICE offers it below 1500 IU/L and as a choice up to 5000. FOGSI uses ≤5000, single dose 50 mg/m² IM.', refs: [{ guidelineId: N, locator: '1.6.8–1.6.10' }, { guidelineId: F, locator: 'Medical management' }] },
    { text: 'After methotrexate, check hCG on days 4 and 7. A fall of more than 15% between them means weekly hCG until negative; less than that means a second dose or surgery.', refs: [{ guidelineId: F, locator: 'Follow-up' }, { guidelineId: A }, { guidelineId: N, locator: '1.6.11' }] },
    { text: 'Surgery first line for significant pain, mass ≥35 mm, visible heartbeat, hCG ≥5000 IU/L, rupture or doubtful follow-up. Do it laparoscopically; salpingectomy unless the other tube is damaged.', refs: [{ guidelineId: N, locator: '1.6.9, 1.6.12–1.6.16' }, { guidelineId: F, locator: 'Surgical management' }] },
    { text: 'Anti-D: NICE gives 250 IU only to Rh-negative women having surgery. FOGSI offers it to all Rh-negative women treated medically or surgically.', refs: [{ guidelineId: N, locator: '1.7.1–1.7.2' }, { guidelineId: F, locator: 'Rh prophylaxis' }] },
  ],
  sections: [
    {
      id: 'epidemiology',
      title: 'Definition & Epidemiology',
      icon: 'epidemiology',
      body: [
        { text: 'Ectopic pregnancy is implantation outside the uterine cavity. About 97% are in the fallopian tube; the rest are in the cervix, ovary, peritoneal cavity or a uterine scar.', refs: [{ guidelineId: F, locator: 'Definition' }] },
        { text: 'Incidence is 0.25–2.0% of pregnancies worldwide and 1–2% in Indian studies. Case fatality in Indian series ranges from 0% to 3.5%. Genital tuberculosis was found in 13.2% of cases in one Indian study.', refs: [{ guidelineId: F, locator: 'Incidence' }] },
        { text: 'In the UK the incidence is about 11 per 1000 pregnancies, about 11,000 diagnoses a year.', refs: [{ guidelineId: R, locator: 'Summary' }] },
      ],
    },
    {
      id: 'risk-factors',
      title: 'Risk Factors',
      icon: 'risk',
      body: [
        { text: 'Pelvic inflammatory disease including pelvic tuberculosis; previous ectopic pregnancy; pregnancy with an IUD in place; tubal surgery; sexually transmitted infections; smoking; infertility; ovulation induction or ART.', refs: [{ guidelineId: F, locator: 'Risk factors' }, { guidelineId: R, locator: 'Summary' }] },
        { text: 'Most women have no identifiable risk factor; NICE says about a third have none, so exclude ectopic pregnancy even without them.', refs: [{ guidelineId: N, locator: '1.3.8' }, { guidelineId: F, locator: 'Risk factors' }] },
      ],
    },
    {
      id: 'presentation',
      title: 'Clinical Presentation & Referral',
      icon: 'emergency',
      body: [
        { text: 'Common symptoms: abdominal or pelvic pain, missed period, vaginal bleeding with or without clots. Others: breast tenderness, GI symptoms, dizziness or fainting, shoulder-tip pain, urinary symptoms, passing tissue, rectal pressure or pain on defecation.', refs: [{ guidelineId: N, locator: '1.3.2–1.3.3' }] },
        { text: 'Signs: pelvic, adnexal or abdominal tenderness; cervical motion tenderness; rebound or peritonism; pallor; distension; pulse over 100 or BP under 100/60; shock or collapse; orthostatic hypotension.', refs: [{ guidelineId: N, locator: '1.3.4' }] },
        { text: 'Send a woman who is haemodynamically unstable, or with significant pain or bleeding, straight to emergency care. With a positive test plus pain, abdominal or pelvic tenderness, or cervical motion tenderness, refer immediately to an early pregnancy assessment service.', refs: [{ guidelineId: N, locator: '1.3.1, 1.3.7' }] },
        { text: 'Bleeding without pain under 6 weeks with no risk factors can be managed expectantly with a repeat urine pregnancy test after 7–10 days; return if symptoms worsen.', refs: [{ guidelineId: N, locator: '1.3.10–1.3.11' }] },
      ],
    },
    {
      id: 'diagnosis',
      title: 'Diagnosis: Ultrasound & hCG',
      icon: 'diagnosis',
      body: [
        { heading: 'Ultrasound', text: 'Transvaginal ultrasound is preferred; use transabdominal scanning if the uterus is enlarged or the woman declines TVS. MRI is reserved for unusual sites.', refs: [{ guidelineId: N, locator: '1.4.1–1.4.3' }, { guidelineId: F, locator: 'Diagnosis' }] },
        {
          text: 'Ultrasound findings for tubal ectopic (NICE):',
          refs: [{ guidelineId: N, locator: '1.4.17–1.4.21' }],
          table: {
            columns: ['Certainty', 'Finding'],
            rows: [
              ['Diagnostic', 'Adnexal mass moving separately from the ovary ("sliding sign") containing a gestational sac with yolk sac, or a sac with fetal pole (with or without heartbeat)'],
              ['High probability', 'Adnexal mass with an empty sac ("tubal ring" or "bagel sign"), or a complex inhomogeneous mass separate from the ovary'],
              ['Possible', 'Empty uterus, or a pseudo-sac (distinguish from an early sac with double decidual sign)'],
              ['Associated', 'Moderate or large free fluid in the pouch of Douglas (possible haemoperitoneum); always check for heterotopic pregnancy'],
            ],
          },
        },
        { heading: 'hCG', text: 'Do not use hCG to determine location. Take two serum hCG levels as close to 48 hours apart as possible and give more weight to symptoms than to hCG. Do not use progesterone to diagnose location.', refs: [{ guidelineId: N, locator: '1.4.24–1.4.27, 1.4.32' }, { guidelineId: F, locator: 'Diagnosis' }] },
        { text: 'FOGSI: hCG is typically 50–100 IU/L on the day of the missed period, and a healthy intrauterine pregnancy doubles every 1.4–2.1 days. A rise of under 50% in 48 hours suggests an abnormal pregnancy. Use paired hCG with TVS.', refs: [{ guidelineId: F, locator: 'Diagnosis' }] },
        { text: 'ACOG (via AAFP): a discriminatory level as high as 3500 mIU/mL may be used to avoid unnecessary intervention in a possibly viable pregnancy.', refs: [{ guidelineId: A }] },
        { text: 'FOGSI does not recommend routine endometrial curettage to look for an Arias-Stella reaction.', refs: [{ guidelineId: F, locator: 'Diagnosis' }] },
      ],
    },
    {
      id: 'pul',
      title: 'Pregnancy of Unknown Location',
      icon: 'lab',
      body: [
        {
          text: 'NICE interpretation of two hCG values 48 hours apart:',
          refs: [{ guidelineId: N, locator: '1.4.29–1.4.31' }],
          table: {
            columns: ['hCG change in 48 h', 'Likely meaning', 'Action'],
            rows: [
              ['Rise >63%', 'Developing intrauterine pregnancy (ectopic not excluded)', 'TVS in 7–14 days, earlier if hCG ≥1500 IU/L; senior review if IUP not seen'],
              ['Fall >50%', 'Failing pregnancy', 'Urine pregnancy test at 14 days; return within 24 h if positive'],
              ['Rise <63% or fall <50%', 'Uncertain; ectopic possible', 'Clinical review in the early pregnancy unit within 24 h'],
            ],
          },
        },
        { text: 'Give every woman written advice and a 24-hour contact number, whatever the hCG result.', refs: [{ guidelineId: N, locator: '1.4.28' }] },
        { text: 'ACOG (via AAFP) suggests uterine aspiration in selected women with pregnancy of unknown location.', refs: [{ guidelineId: A }] },
      ],
    },
    {
      id: 'expectant',
      title: 'Expectant Management',
      icon: 'monitoring',
      body: [
        { text: 'Offer if the woman is stable and pain-free, the tubal ectopic is under 35 mm with no heartbeat, hCG is 1000 IU/L or less, and she can return for follow-up. Consider it if hCG is 1000–1500 IU/L with the same criteria.', refs: [{ guidelineId: N, locator: '1.6.3–1.6.4' }] },
        { text: 'Check hCG on days 2, 4 and 7. If it falls by 15% or more each time, repeat weekly until under 20 IU/L. If not, seek senior review.', refs: [{ guidelineId: N, locator: '1.6.5' }] },
        { text: 'Limited evidence shows no difference from methotrexate in resolution, rupture, need for further treatment, future fertility or mental health.', refs: [{ guidelineId: N, locator: '1.6.6–1.6.7' }] },
      ],
    },
    {
      id: 'methotrexate',
      title: 'Medical Management: Methotrexate',
      icon: 'drug',
      body: [
        { heading: 'Eligibility', text: 'NICE: no significant pain; unruptured tubal ectopic under 35 mm with no heartbeat; hCG under 1500 IU/L; no intrauterine pregnancy; able to return. With hCG 1500–5000 IU/L, offer a choice of methotrexate or surgery (methotrexate more often needs further treatment).', refs: [{ guidelineId: N, locator: '1.6.8, 1.6.10' }] },
        { text: 'FOGSI: haemodynamically stable; hCG 5000 IU/L or less; mean sac diameter under 3.5 cm with no cardiac activity; follow-up feasible. The same criteria apply to selected scar and cervical ectopics.', refs: [{ guidelineId: F, locator: 'Medical management' }] },
        { heading: 'Contraindications', text: 'Haemodynamic instability; intrauterine pregnancy (including heterotopic with a viable IUP); signs of rupture; significant blood, kidney or liver abnormality; immunodeficiency; active lung disease (e.g. TB); peptic ulcer; hypersensitivity; breastfeeding. Check blood count, renal and liver function first.', refs: [{ guidelineId: F, locator: 'Contraindications' }, { guidelineId: A }] },
        {
          heading: 'Regimens',
          text: 'As stated in the source:',
          refs: [{ guidelineId: F, locator: 'Regimens' }, { guidelineId: A }],
          table: {
            columns: ['Regimen', 'Protocol', 'Notes'],
            rows: [
              ['Single dose', 'Methotrexate 50 mg/m² IM on day 1', 'FOGSI recommends this regimen only; lowest side-effect risk (ACOG via AAFP)'],
              ['Two dose', '50 mg/m² IM on days 0 and 4', 'ACOG (AAFP): consider for higher hCG, especially >5000'],
              ['Multiple dose', '1 mg/kg IM on days 1, 3, 5, 7 with folinic acid 0.1 mg/kg IM on days 2, 4, 6, 8', 'Not preferred (more toxicity)'],
            ],
          },
        },
        {
          text: 'Single-dose success by starting hCG (ACOG via AAFP):',
          refs: [{ guidelineId: A }],
          table: { columns: ['Initial hCG (mIU/mL)', 'Success'], rows: [['<1000', '98%'], ['1000–1999', '94%'], ['2000–4999', '96%'], ['5000–9999', '85%'], ['≥10,000', '81%']] },
        },
        { heading: 'Follow-up', text: 'Measure hCG on days 4 and 7 (it often rises on day 4). If it falls by more than 15% between days 4 and 7, check weekly until negative. If it falls by 15% or less, give a second dose (or refer for surgery) and recheck. If there is no fall after two doses, consider surgery. A plateau or rise during weekly follow-up suggests persistent ectopic.', refs: [{ guidelineId: F, locator: 'Follow-up' }, { guidelineId: A }, { guidelineId: N, locator: '1.6.11' }] },
      ],
    },
    {
      id: 'surgery',
      title: 'Surgical Management',
      icon: 'management',
      body: [
        { heading: 'Indications', text: 'Surgery is first line if the woman cannot return for follow-up, or has significant pain, a mass of 35 mm or more, a visible heartbeat, hCG 5000 IU/L or more, or signs of rupture or haemoperitoneum; and when medical treatment fails.', refs: [{ guidelineId: N, locator: '1.6.9' }, { guidelineId: F, locator: 'Surgical management' }] },
        { heading: 'Approach', text: 'Use laparoscopy whenever possible; laparotomy if laparoscopy is unavailable or for life-saving surgery. FOGSI advises taking consent for laparotomy before laparoscopy when adhesions are likely (PID, previous surgery), and looking for pelvic tuberculosis at surgery.', refs: [{ guidelineId: N, locator: '1.6.12–1.6.14' }, { guidelineId: F, locator: 'Surgical management' }] },
        { heading: 'Salpingectomy or salpingotomy', text: 'Offer salpingectomy unless the woman has other risk factors for infertility, such as damage to the other tube, in which case consider salpingotomy. FOGSI prefers salpingectomy for a ruptured, damaged tube. Up to 1 in 5 women after salpingotomy need further treatment.', refs: [{ guidelineId: N, locator: '1.6.15–1.6.17' }, { guidelineId: F, locator: 'Surgical management' }] },
        { text: 'After salpingotomy, check hCG at 7 days and then weekly until negative. After salpingectomy, do a urine pregnancy test at 3 weeks. Send all tissue for histopathology.', refs: [{ guidelineId: N, locator: '1.6.18–1.6.19' }, { guidelineId: F, locator: 'Surgical management' }] },
      ],
    },
    {
      id: 'special-sites',
      title: 'Non-tubal Ectopic Pregnancy',
      icon: 'complications',
      body: [
        {
          text: 'FOGSI management by site (refer to a tertiary centre):',
          refs: [{ guidelineId: F, locator: 'Special sites' }],
          table: {
            columns: ['Site', 'Diagnostic clue', 'Management'],
            rows: [
              ['Cervical', 'Sac in the cervix below the internal os', 'Medical first line; surgery if it fails or bleeding is life-threatening'],
              ['Caesarean scar', 'Sac in the anterior lower segment at the scar', 'Surgery preferred'],
              ['Interstitial', 'Less than 5 mm myometrium around the sac; interstitial line sign', 'Medical first line; cornual resection or salpingotomy if surgery needed'],
              ['Cornual / rudimentary horn', 'Sac in a rudimentary horn', 'Surgery; check for urinary tract anomalies'],
              ['Ovarian', 'Sac within the ovary', 'Surgery'],
              ['Heterotopic', 'Intrauterine plus ectopic pregnancy', 'Medical or conservative only if the IUP is not viable'],
              ['Abdominal', 'Sac in the peritoneal cavity', 'Early laparoscopy; laparotomy if advanced; placenta may be left in place'],
            ],
          },
        },
        { text: 'RCOG GTG 21 also covers these sites, but its recommendations could not be read for this draft.', refs: [{ guidelineId: R }] },
      ],
    },
    {
      id: 'anti-d-counselling',
      title: 'Anti-D, Counselling & Future Fertility',
      icon: 'followup',
      body: [
        { text: 'NICE: give 250 IU (50 µg) anti-D to all Rh-negative women having surgery for ectopic pregnancy. Do not give it for medical management only, threatened or complete miscarriage, or pregnancy of unknown location, and do not use a Kleihauer test.', refs: [{ guidelineId: N, locator: '1.7.1–1.7.3' }] },
        { text: 'FOGSI: offer anti-D to all Rh-negative women treated medically or surgically.', refs: [{ guidelineId: F, locator: 'Rh prophylaxis' }] },
        { text: 'Future fertility is similar whichever management is used, unless there is previous subfertility or tubal disease; then expectant or medical management gives better reproductive outcomes (FOGSI).', refs: [{ guidelineId: F, locator: 'Counselling' }, { guidelineId: N, locator: '1.6.6' }] },
        { text: 'Treat women with dignity, give clear written information and a 24-hour contact number, offer follow-up, and let women with a previous ectopic self-refer early in future pregnancies.', refs: [{ guidelineId: N, locator: '1.1.1–1.1.4, 1.6.1–1.6.2' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Methotrexate hCG ceiling',
      entries: [
        { guidelineId: F, text: '≤5000 IU/L; single dose only.', locator: 'Medical management' },
        { guidelineId: A, text: 'Single dose usually <3600; two-dose for higher levels, especially >5000.' },
        { guidelineId: N, text: 'Offer <1500 IU/L; choice with surgery at 1500–4999; surgery at ≥5000.', locator: '1.6.8–1.6.10' },
      ],
    },
    {
      domain: 'Anti-D',
      entries: [
        { guidelineId: F, text: 'All Rh-negative women, medical or surgical.', locator: 'Rh prophylaxis' },
        { guidelineId: N, text: '250 IU only with surgical management.', locator: '1.7.1–1.7.2' },
      ],
    },
    {
      domain: 'Tube choice at surgery',
      entries: [
        { guidelineId: F, text: 'Salpingectomy if ruptured or damaged; salpingotomy if unruptured or fertility factors.' },
        { guidelineId: N, text: 'Salpingectomy unless other infertility risk factors.', locator: '1.6.15–1.6.16' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI GCPR on Ectopic Pregnancy (2020) in full; NICE NG126 recommendations. ACOG positions come from the 2020 AAFP review because Practice Bulletin 193 could not be accessed; some AAFP details came from a partial summary. RCOG GTG 21 recommendations (Wiley) could not be accessed, so only its summary is cited. All doses are quoted from the source for clinician review.',
};
