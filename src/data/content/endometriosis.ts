import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI–ICOG GCPR Updates in Endometriosis Management (2024), read in full       -> fogsi-endo
 *  - NICE NG73 (2017, updated Nov 2024), recommendations 1.1–1.10                  -> nice-ng73
 *  - ESHRE guideline: endometriosis (2022), read in full                           -> eshre-endo
 *  - ACOG positions via AAFP 2022 review (PB 114 not readable)                     -> acog-endo-aafp
 * RCOG: no current RCOG Green-top Guideline on endometriosis was found.
 */
const F = 'fogsi-endo';
const N = 'nice-ng73';
const E = 'eshre-endo';
const A = 'acog-endo-aafp';

export const endometriosis: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Endometriosis affects about 10–15% of women of reproductive age and up to 70% of those with chronic pelvic pain, yet diagnosis is often delayed by 4–11 years. Current guidance has moved away from diagnostic laparoscopy as the first step: suspect it from symptoms, examine, scan every woman with transvaginal ultrasound, and start empirical treatment (analgesia plus combined hormonal contraception or a progestogen) without waiting for surgical proof. Laparoscopy is kept for negative imaging with failed treatment, or for treatment itself. Surgery for endometriomas and deep disease should be done once, well, by an experienced team, followed by long-term hormonal suppression unless the woman is trying to conceive.',
  keyPoints: [
    { text: 'Suspect endometriosis with dysmenorrhoea affecting daily life, chronic pelvic pain, deep dyspareunia, cyclical bowel or urinary symptoms, or infertility with any of these, including in girls 17 and under.', refs: [{ guidelineId: N, locator: '1.3.1' }, { guidelineId: F, locator: 'p.4' }] },
    { text: 'Offer transvaginal ultrasound to every woman with suspected endometriosis, even if examination is normal. A normal scan does not exclude it. Do not use CA-125 to diagnose it.', refs: [{ guidelineId: N, locator: '1.5.2–1.5.4, 1.5.8' }, { guidelineId: E }, { guidelineId: F, locator: 'p.5' }] },
    { text: 'Start empirical treatment without surgical diagnosis. Laparoscopy is no longer the first diagnostic step; use it when imaging is negative and treatment fails.', refs: [{ guidelineId: F, locator: 'p.4–5, p.7' }, { guidelineId: E }, { guidelineId: A }] },
    { text: 'First line: paracetamol or NSAID trial plus combined hormonal contraception (continuous preferred) or a progestogen such as dienogest 2 mg daily or the LNG-IUS.', refs: [{ guidelineId: N, locator: '1.4.2, 1.4.6' }, { guidelineId: F, locator: 'p.9–10 (Grade A)' }, { guidelineId: E }, { guidelineId: A }] },
    { text: 'Second line: GnRH agonists with add-back from the start (limit duration), GnRH antagonists, and aromatase inhibitors for refractory pain.', refs: [{ guidelineId: F, locator: 'p.10–11' }, { guidelineId: E }, { guidelineId: A }] },
    { text: 'For endometriomas, cystectomy is preferred over drainage and coagulation, with care to protect ovarian reserve. Do not routinely operate before IVF.', refs: [{ guidelineId: E }, { guidelineId: F, locator: 'p.8, p.12 (Grade A)' }, { guidelineId: N, locator: '1.9.6, 1.10.2' }] },
    { text: 'After surgery, give LNG-IUS or combined hormonal contraception for at least 18–24 months to prevent recurrence, unless the woman wants to conceive. Do not give hormones to women trying to conceive.', refs: [{ guidelineId: E }, { guidelineId: F, locator: 'p.12 (Grade A)' }, { guidelineId: N, locator: '1.9.7, 1.10.4' }] },
  ],
  sections: [
    {
      id: 'epidemiology',
      title: 'Epidemiology & Symptoms',
      icon: 'epidemiology',
      body: [
        { text: 'About 10–15% of women of reproductive age are affected, up to 70% of women with chronic pelvic pain, and 20–50% of subfertile women. Diagnosis is delayed by 4–11 years, and by 6–8 years in adolescents. FOGSI gives no India-specific prevalence figure.', refs: [{ guidelineId: F, locator: 'p.3, p.6–7' }] },
        { text: 'Symptoms: dysmenorrhoea, deep dyspareunia, dysuria, dyschezia, chronic pelvic pain, subfertility, abnormal bleeding, painful rectal bleeding or haematuria. Rarer: shoulder-tip pain, catamenial pneumothorax, cyclical cough or haemoptysis, cyclical swelling in a scar. Suggest a pain and symptom diary.', refs: [{ guidelineId: F, locator: 'p.4 (GPP)' }, { guidelineId: N, locator: '1.3.1–1.3.3' }] },
        { text: 'Ask about endometriosis in first-degree relatives, which raises the likelihood. Remember that pain is expressed differently across cultures and in neurodiverse people.', refs: [{ guidelineId: N, locator: '1.3.2, 1.3.4' }] },
      ],
    },
    {
      id: 'diagnosis',
      title: 'Examination & Imaging',
      icon: 'diagnosis',
      body: [
        { text: 'Offer abdominal and pelvic examination to look for masses, reduced mobility or enlargement, tender nodularity in the posterior fornix and visible vaginal lesions. If pelvic examination is declined, examine the abdomen.', refs: [{ guidelineId: N, locator: '1.3.5–1.3.6' }] },
        {
          text: 'Imaging:',
          refs: [{ guidelineId: F, locator: 'p.4–5' }, { guidelineId: N, locator: '1.5.2–1.5.12' }, { guidelineId: E }, { guidelineId: A }],
          table: {
            columns: ['Test', 'Use'],
            rows: [
              ['Transvaginal ultrasound', 'First test for all, even with normal examination. Endometrioma: sensitivity 93%, specificity 96%. Deep disease: sensitivity 79%, specificity 94%. Use a systematic (IDEA) approach'],
              ['Transabdominal ultrasound', 'If TVS is declined or unsuitable; shows bladder lesions and hydronephrosis. FOGSI advises renal ultrasound in all patients to detect ureteric involvement'],
              ['Specialist TVS or MRI', 'To map deep endometriosis before surgery; MRI detects lesions >5 mm, separates endometrioma from dermoid, misses peritoneal disease'],
              ['CA-125 and other markers', 'Do not use to diagnose or exclude endometriosis'],
            ],
          },
        },
        { text: 'Do not exclude endometriosis because examination and ultrasound are normal; refer if symptoms persist.', refs: [{ guidelineId: N, locator: '1.5.4' }, { guidelineId: E }] },
        { heading: 'Laparoscopy', text: 'Consider diagnostic laparoscopy when imaging is negative and empirical treatment has failed or is unsuitable. Inspect the pelvis systematically, record findings with images, and take biopsies; negative histology does not fully exclude disease. If a thorough laparoscopy is normal, tell the woman endometriosis is unlikely.', refs: [{ guidelineId: N, locator: '1.5.11–1.5.15' }, { guidelineId: F, locator: 'p.5' }, { guidelineId: E }] },
        { heading: 'Classification', text: 'FOGSI uses rASRM staging and the Endometriosis Fertility Index (EFI, 0–10) after surgery to predict non-IVF pregnancy; an EFI of 0–3 may be offered early ART. NICE: treat by symptoms and priorities, not by stage.', refs: [{ guidelineId: F, locator: 'p.8 (LE 3, Grade C)' }, { guidelineId: N, locator: '1.6.1–1.6.2' }] },
      ],
    },
    {
      id: 'referral',
      title: 'Referral',
      icon: 'referral',
      body: [
        { text: 'Refer to gynaecology if initial treatment is ineffective, not tolerated or contraindicated, symptoms affect daily life or keep recurring, or there are pelvic signs.', refs: [{ guidelineId: N, locator: '1.5.5' }] },
        { text: 'Refer to a specialist endometriosis centre if an endometrioma, deep endometriosis (bowel, bladder, ureter) or disease outside the pelvis is suspected or confirmed. Refer girls 17 and under to paediatric and adolescent gynaecology or a specialist centre.', refs: [{ guidelineId: N, locator: '1.5.6–1.5.7' }] },
        { text: 'Run investigations and referral alongside starting treatment, not one after another.', refs: [{ guidelineId: N, locator: '1.5.1' }] },
      ],
    },
    {
      id: 'medical',
      title: 'Medical Treatment',
      icon: 'drug',
      body: [
        {
          text: 'Stepwise management of endometriosis (FOGSI, NICE NG73, ESHRE 2022).',
          refs: [{ guidelineId: F }, { guidelineId: N, locator: '1.4–1.10' }, { guidelineId: E }],
          flow: {
            caption: 'Endometriosis',
            steps: [
              { title: 'Suspect', text: 'Examination + TVS for all (normal scan does not exclude it); no CA-125. Treat while investigating.', tone: 'start' },
              { title: 'Main goal', tone: 'decision', branches: [
                { when: 'Pain', then: 'NSAID/paracetamol 3 months + COC (continuous), dienogest 2 mg, other progestogen or LNG-IUS' },
                { when: 'Fertility', then: 'No ovarian suppression; laparoscopy for stage I–II then try 6–12 months; IVF if EFI low or severe disease' },
              ] },
              { title: 'First line fails', text: 'GnRH agonist with add-back, or GnRH antagonist; refer to gynaecology.' },
              { title: 'Refer to specialist centre', tone: 'urgent', text: 'Endometrioma, deep disease (bowel, bladder, ureter) or disease outside the pelvis.' },
              { title: 'Surgery once, by an expert', text: 'Excise all visible lesions; cystectomy for endometrioma; then LNG-IUS or COC 18–24 months unless pregnancy wanted.' },
            ],
          },
        },
        { text: 'Analgesia: consider a 3-month trial of paracetamol or an NSAID, alone or together. NSAIDs relieve pain but do not stop progression.', refs: [{ guidelineId: N, locator: '1.4.2' }, { guidelineId: F, locator: 'p.9 (LE 4, Grade C)' }, { guidelineId: E }] },
        { text: 'Hormonal treatment reduces pain and does not harm later fertility. Offer the combined pill or a progestogen to women with suspected, confirmed or recurrent disease.', refs: [{ guidelineId: N, locator: '1.4.5–1.4.6' }, { guidelineId: E }] },
        {
          text: 'Treatment options:',
          refs: [{ guidelineId: F, locator: 'p.9–11, p.20' }, { guidelineId: A }, { guidelineId: E }],
          table: {
            columns: ['Line', 'Drug', 'Details as stated in source'],
            rows: [
              ['First', 'Combined hormonal contraception', 'Pill, patch or ring; continuous use preferred; avoid over 35 in smokers or with thrombosis history (FOGSI Grade A)'],
              ['First', 'Dienogest', '2 mg daily; similar efficacy to GnRH agonist with fewer side effects (FOGSI)'],
              ['First', 'Other progestogens', 'Norethisterone acetate, MPA (oral or depot), desogestrel, etonogestrel implant'],
              ['First', 'LNG-IUS (52 mg)', 'As effective as GnRH agonist for pain; lowers recurrence after surgery'],
              ['Second', 'GnRH agonist + add-back', 'Monthly depot with norethisterone acetate 5 mg daily (± CEE 0.625 mg); calcium 1000 mg daily (FOGSI). AAFP: up to 6 months alone, up to 1 year with add-back'],
              ['Second', 'GnRH antagonist', 'Elagolix 150 mg daily (up to 24 months) or 200 mg twice daily (up to 6 months); relugolix 40 mg / estradiol 1 mg / norethindrone 0.5 mg daily (up to 24 months), contraindicated in smokers over 35 (AAFP)'],
              ['Refractory', 'Aromatase inhibitor', 'Letrozole or anastrozole with add-back or another hormonal agent, for drug-resistant (e.g. rectovaginal) disease'],
            ],
          },
        },
        { text: 'ESHRE: GnRH agonists and antagonists are second line because of side effects; give combined add-back with agonists. Do not give preoperative hormones to improve surgical outcome.', refs: [{ guidelineId: E }] },
        { text: 'NICE refers to its appraisals for relugolix combination therapy (TA1057) and linzagolix with add-back (TA1067).', refs: [{ guidelineId: N, locator: '1.4.7' }] },
        { text: 'Traditional Chinese medicine, herbal remedies and supplements are not supported by evidence.', refs: [{ guidelineId: N, locator: '1.8.1' }] },
      ],
    },
    {
      id: 'adolescents',
      title: 'Adolescents',
      icon: 'adolescent',
      body: [
        { text: 'Suspect endometriosis when severe dysmenorrhoea interferes with daily life and persists despite NSAIDs and the pill. Risk factors include family history, obstructive genital anomalies, early menarche and short cycles. Early, progressive dysmenorrhoea should prompt a search for a Müllerian anomaly.', refs: [{ guidelineId: F, locator: 'p.6 (Grade A, GPP)' }] },
        { text: 'Use TVS where appropriate; do not use CA-125. First line: hormonal contraception (continuous pill) or progestogens, including the LNG-IUS in sexually active adolescents. NSAIDs can be used.', refs: [{ guidelineId: E }, { guidelineId: F, locator: 'p.6–7 (Grade A)' }] },
        { text: 'GnRH agonists are second line: ESHRE allows up to 1 year with add-back; FOGSI restricts them to girls over 18 with add-back. Monitor bone density on DMPA or GnRH agonists. Dienogest reduced lumbar bone density by 1.2% over 52 weeks, partly reversible.', refs: [{ guidelineId: E }, { guidelineId: F, locator: 'p.7, p.10' }] },
        { text: 'If hormones fail, diagnostic laparoscopy may be considered. The first surgery should be by an experienced endometriosis surgeon, followed by long-term hormones. Discuss fertility preservation with bilateral endometriomas.', refs: [{ guidelineId: F, locator: 'p.7 (GPP)' }, { guidelineId: E }] },
      ],
    },
    {
      id: 'surgery',
      title: 'Surgery & Endometrioma',
      icon: 'surgery',
      body: [
        { text: 'Indications: failed, refused or poorly tolerated medical treatment; severe pain; endometriomas or deep disease distorting anatomy; emergencies (rupture, abscess, obstructed ureter or bowel); infertility. Operate laparoscopically and record findings with images.', refs: [{ guidelineId: F, locator: 'p.11 (LE 3)' }, { guidelineId: N, locator: '1.9.3' }] },
        { text: 'Surgery should be done once, by an expert, at an appropriate centre; repeat surgery halves pregnancy rates compared with first surgery. Excise rather than ablate where possible and treat all visible lesions.', refs: [{ guidelineId: F, locator: 'p.3, p.12' }, { guidelineId: E }] },
        { heading: 'Endometrioma', text: 'Cystectomy is preferred over drainage and coagulation (lower recurrence and pain), but take care to limit ovarian damage. CO2 laser vaporisation is an alternative (ESHRE). NICE: when fertility is a priority, either cystectomy or drainage and ablation; ablation may preserve more ovarian reserve. AMH falls by about 26% a year in women with endometriomas.', refs: [{ guidelineId: E }, { guidelineId: F, locator: 'p.8, p.12, p.18 (Grade A)' }, { guidelineId: N, locator: '1.9.6, 1.10.2' }] },
        { text: 'Monitor endometriomas over 3 cm and deep disease in outpatients if surgery is declined.', refs: [{ guidelineId: N, locator: '1.7.1' }] },
        { heading: 'Deep endometriosis', text: 'Operate at a centre with colorectal and urology input. Consider 3 months of GnRH agonist before surgery for deep disease (NICE). For rectal disease, discoid resection suits single lesions under 3 cm; segmental resection otherwise (FOGSI). Do not remove uncomplicated deep lesions in women without symptoms.', refs: [{ guidelineId: N, locator: '1.9.5' }, { guidelineId: F, locator: 'p.8, p.13' }, { guidelineId: E }] },
        { heading: 'Hysterectomy', text: 'Consider when conservative treatment fails and family is complete, excising all visible lesions at the same time, laparoscopically where possible. It may not cure the disease. If the ovaries are removed, discuss early menopause and HRT.', refs: [{ guidelineId: N, locator: '1.9.9–1.9.11' }, { guidelineId: F, locator: 'p.13 (GPP)' }, { guidelineId: E }] },
        { heading: 'After surgery', text: 'Give LNG-IUS (52 mg) or combined hormonal contraception for at least 18–24 months to prevent recurrence, unless pregnancy is wanted soon.', refs: [{ guidelineId: E }, { guidelineId: F, locator: 'p.12 (LE 4, Grade A)' }, { guidelineId: N, locator: '1.9.7' }] },
      ],
    },
    {
      id: 'infertility',
      title: 'Endometriosis & Infertility',
      icon: 'fertility',
      body: [
        { text: 'Do not give ovarian suppression to improve fertility, alone or after surgery; it does not raise pregnancy rates.', refs: [{ guidelineId: N, locator: '1.10.4' }, { guidelineId: E }, { guidelineId: F, locator: 'p.7 (Grade A)' }, { guidelineId: A }] },
        { text: 'Operative laparoscopy (excision or ablation with adhesiolysis) improves spontaneous pregnancy in minimal to mild (rASRM I/II) disease. Most benefit comes within 6–12 months, so plan fertility treatment promptly.', refs: [{ guidelineId: N, locator: '1.10.1' }, { guidelineId: E }, { guidelineId: F, locator: 'p.7, p.12' }] },
        { text: 'IUI with ovarian stimulation can be used in rASRM I/II disease (ESHRE). Move to IVF/ICSI with low ovarian reserve, older age, long infertility, failed IUI, tubal or male factor, recurrent endometriomas or a low EFI.', refs: [{ guidelineId: E }, { guidelineId: F, locator: 'p.8' }] },
        { text: 'Before IVF: do not routinely operate on endometriomas or minimal disease (it lowers ovarian reserve). Consider surgery for pain, inaccessible follicles or suspicious features. Do not give prolonged GnRH agonist before IVF. Antagonist and agonist protocols are both acceptable, and IVF does not increase recurrence.', refs: [{ guidelineId: E }, { guidelineId: F, locator: 'p.7–8 (Grade A)' }] },
        { text: 'Consider oocyte freezing for women with severe or bilateral endometriomas at risk of ovarian insufficiency.', refs: [{ guidelineId: F, locator: 'p.18' }] },
      ],
    },
    {
      id: 'special',
      title: 'Scar Endometriosis, Cancer & Menopause',
      icon: 'complications',
      body: [
        { heading: 'Scar endometriosis', text: 'Cyclical pain or swelling in a caesarean, episiotomy or laparoscopy scar suggests scar endometriosis (caesarean scar incidence 0.03–1.5%). Wide excision with clear margins is preferred; hormones give only partial relief. Prevent it by keeping decidua out of the closure and irrigating the wound.', refs: [{ guidelineId: F, locator: 'p.15–16' }] },
        {
          heading: 'Cancer risk',
          text: 'Overall risk is not significantly increased, but small absolute increases exist (lifetime risk):',
          refs: [{ guidelineId: F, locator: 'p.16' }, { guidelineId: E }],
          table: { columns: ['Cancer', 'All women', 'With endometriosis'], rows: [['Ovarian', '1.3%', '2.5%'], ['Breast', '12.8%', '13.3%'], ['Thyroid', '1.3%', '1.8%']] },
        },
        { text: 'Do not screen routinely beyond population programmes. Complete excision of visible disease may lower ovarian cancer risk. The combined pill reduces ovarian, endometrial and colorectal cancer risk.', refs: [{ guidelineId: E }, { guidelineId: F, locator: 'p.16' }] },
        { heading: 'Asymptomatic disease', text: 'Do not operate on or medically treat endometriosis found incidentally in a woman without symptoms.', refs: [{ guidelineId: E }] },
        { heading: 'Menopause', text: 'Use combined (not oestrogen-only) HRT, continued at least until the natural age of menopause after surgical menopause. Stop HRT first if pain returns. Aromatase inhibitors are an option when surgery is not feasible. Tibolone is not recommended (FOGSI).', refs: [{ guidelineId: E }, { guidelineId: F, locator: 'p.17' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Is laparoscopy needed for diagnosis?',
      entries: [
        { guidelineId: F, text: 'Called the gold standard, but not the first step; imaging plus empirical treatment first.', locator: 'p.5, p.7' },
        { guidelineId: A, text: 'Start empirical treatment; laparoscopy if no response (ACOG endorses treating before surgical diagnosis).' },
        { guidelineId: N, text: 'TVS for all; consider laparoscopy even if imaging is normal.', locator: '1.5.2, 1.5.11' },
        { guidelineId: E, text: 'Imaging first; laparoscopy only if imaging is negative and empirical treatment fails.' },
      ],
    },
    {
      domain: 'Endometrioma surgery',
      entries: [
        { guidelineId: F, text: 'Cystectomy over drainage and coagulation (Grade A).', locator: 'p.12' },
        { guidelineId: N, text: 'Fertility priority: cystectomy or drainage and ablation; ablation may spare reserve.', locator: '1.10.2' },
        { guidelineId: E, text: 'Cystectomy over drainage and coagulation (strong); CO2 laser also acceptable.' },
      ],
    },
    {
      domain: 'GnRH agonist in adolescents',
      entries: [
        { guidelineId: F, text: 'Only over 18, with add-back (Grade C).', locator: 'p.7' },
        { guidelineId: E, text: 'Up to 1 year with add-back after first-line failure (weak).' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI–ICOG Endometriosis GCPR (2024) in full; NICE NG73 recommendations 1.1–1.10 (wording paraphrased); ESHRE 2022 guideline text in full (figures not readable). ACOG Practice Bulletin 114 (2010) could not be accessed, so ACOG-side content and the GnRH antagonist doses come from the 2022 AAFP review. No current RCOG Green-top Guideline on endometriosis was found. FOGSI has some internal inconsistencies (e.g. GnRH agonists in adolescents). Adenomyosis is covered in the FOGSI document and will get its own page. Doses are quoted from the source for clinician review.',
};
