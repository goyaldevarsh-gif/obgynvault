import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from RCOG/BSGE GTG 62 (2011), NICE CG122 chapter 1, AAFP 2023 (abstract + SORT),
 * NHS GG&C local guidelines 514 (premenopausal, 2025) and 549 (postmenopausal, 2026; based on RCOG GTG 34).
 * Read through a summarising fetch tool. RCOG GTG 34 itself, ACOG PB 174, FOGSI, IOTA/O-RADS primary papers not read.
 */
const R62 = 'rcog-gtg-62';
const N = 'nice-cg122';
const AF = 'aafp-adnexal-2023';
const G514 = 'nhs-ggc-514';
const G549 = 'nhs-ggc-549';

export const ovarianCystAdnexalMass: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Assess every adnexal mass with transvaginal ultrasound, a pregnancy test in women of reproductive age, and a risk-of-malignancy assessment (IOTA simple rules or RMI I). Before the menopause, simple cysts under 5 cm need no follow-up, 5–7 cm are rescanned, and over 7 cm need MRI or surgery; CA-125 is not needed for a clear simple cyst, and women under 40 with a complex mass need LDH, AFP and hCG. After the menopause, simple cysts under 3 cm need no follow-up, 3–5 cm are followed with CA-125 and scans, and over 5 cm are referred. A high RMI (200 locally; NICE 250) or any IOTA M feature means gynae-oncology referral. Operate laparoscopically where possible, avoid spillage, and consent for oophorectomy. Torsion is an emergency and surgery should not wait.',
  keyPoints: [
    { text: 'TVS is the imaging test of choice; routine CT or MRI does not add to it. Check a pregnancy test (β-hCG) in women of reproductive age.', refs: [{ guidelineId: R62, locator: '4.3.1–4.3.2' }, { guidelineId: AF, locator: 'SORT (C)' }] },
    { text: 'Premenopausal simple cyst: under 50 mm no follow-up (usually resolves within 3 cycles); 50–70 mm yearly ultrasound (RCOG) or 6-monthly for 1 year (GG&C); over 70 mm consider MRI or surgery.', refs: [{ guidelineId: R62, locator: '6.1–6.2' }, { guidelineId: G514 }] },
    { text: 'CA-125 is not needed for a clear simple cyst. Under 40 with a complex mass: LDH, AFP and hCG. CA-125 over 200 U/mL: discuss with a gynae-oncologist.', refs: [{ guidelineId: R62, locator: '4.2' }, { guidelineId: G514 }] },
    { text: 'IOTA simple rules (sensitivity 95%, specificity 91%) can be used without CA-125; any M-rule feature means referral to gynae-oncology.', refs: [{ guidelineId: R62, locator: '5.2' }] },
    { text: 'RMI I = U × M × CA-125. NICE refers RMI I of 250 or more to a specialist MDT; RCOG and GG&C use 200.', refs: [{ guidelineId: N, locator: 'Ch. 1' }, { guidelineId: G549 }, { guidelineId: R62, locator: '5.1' }] },
    { text: 'Postmenopausal simple unilocular cyst: under 3 cm no follow-up; 3–5 cm CA-125, then TVS + CA-125 6-monthly for 1 year if it persists; over 5 cm urgent gynaecology referral.', refs: [{ guidelineId: G549 }] },
    { text: 'Surgery: laparoscopy preferred; avoid spillage (consider a bag; lavage if spill); discuss and document possible oophorectomy; aspiration recurs in 53–84%.', refs: [{ guidelineId: R62, locator: '6.4–6.9' }, { guidelineId: G514 }] },
    { text: 'Ovarian torsion is an emergency: do not delay surgery for MDT discussion.', refs: [{ guidelineId: G549 }, { guidelineId: G514 }, { guidelineId: AF }] },
  ],
  sections: [
    {
      id: 'premenopausal',
      title: 'Premenopausal: Step-by-step',
      icon: 'management',
      body: [
        {
          text: 'Pathway for a premenopausal adnexal mass (not acute, not pregnant).',
          refs: [{ guidelineId: R62, locator: '4–6' }, { guidelineId: G514 }],
          flow: {
            caption: 'Premenopausal adnexal mass (RCOG GTG 62; NHS GG&C 514)',
            steps: [
              { title: 'History, examination, pregnancy test, TVS', text: 'Family history of ovarian or breast cancer; endometriosis symptoms. Acute pain: think torsion or ectopic.' },
              { title: 'Any IOTA M-rule feature, CA-125 over 200, ascites or metastases?', text: 'Refer to gynae-oncology.', tone: 'urgent' },
              { title: 'Simple cyst, by size:', tone: 'decision', branches: [
                { when: 'Under 5 cm', then: 'No follow-up; most resolve within 3 cycles' },
                { when: '5–7 cm', then: 'Repeat TVS: yearly (RCOG) or 6-monthly for 1 year (GG&C)' },
                { when: 'Over 7 cm', then: 'Consider MRI or surgery; refer with CA-125' },
              ] },
              { title: 'Complex mass', text: 'Under 40: LDH, AFP, hCG. Dermoid: surgery usually appropriate after RMI/IOTA. Persistent or enlarging: surgery.' },
            ],
          },
        },
        { heading: 'Simple cysts', text: 'Under 50 mm: no follow-up; they usually resolve within 3 menstrual cycles. 50–70 mm: yearly ultrasound. Over 70 mm: consider MRI or surgical intervention. Persistent or enlarging cysts are unlikely to be functional and may need surgery.', refs: [{ guidelineId: R62, locator: '6.1–6.2' }] },
        { text: 'GG&C local practice: simple cyst 5–7 cm, or bilocular 3–7 cm, gets TVS every 6 months for 1 year; discharge if resolved or smaller, refer with CA-125 if larger or unchanged. Over 7 cm: refer with CA-125.', refs: [{ guidelineId: G514 }] },
        { heading: 'Dermoid & endometrioma', text: 'Dermoid: surgery is usually appropriate after RMI I or IOTA assessment; there is no evidence-based size threshold (RCOG). GG&C: refer with CA-125, plus LDH/AFP/hCG if under 40. Typical endometrioma: routine referral without markers (GG&C).', refs: [{ guidelineId: R62, locator: '6.2' }, { guidelineId: G514 }] },
        { heading: 'Pills', text: 'The combined oral contraceptive pill does not help functional cysts resolve.', refs: [{ guidelineId: R62, locator: '6.3' }] },
      ],
    },
    {
      id: 'postmenopausal',
      title: 'Postmenopausal: Step-by-step',
      icon: 'management',
      body: [
        {
          text: 'Pathway from NHS GG&C 549, which is based on RCOG GTG 34 (not read directly).',
          refs: [{ guidelineId: G549 }],
          flow: {
            caption: 'Postmenopausal ovarian cyst (NHS GG&C 549)',
            steps: [
              { title: 'TVS + CA-125, calculate RMI I', text: 'M = 3 after the menopause.' },
              { title: 'RMI 200 or more', text: 'Urgent suspicion-of-cancer referral and gynae-oncology MDT; CT chest, abdomen and pelvis.', tone: 'urgent' },
              { title: 'Simple unilocular unilateral cyst, by size:', tone: 'decision', branches: [
                { when: 'Under 3 cm', then: 'No follow-up' },
                { when: '3–5 cm, CA-125 under 35', then: 'TVS + CA-125 every 6 months for 1 year if it persists; discharge if unchanged or smaller' },
                { when: 'Over 5 cm', then: 'Urgent gynaecology referral with CA-125 for surgery' },
              ] },
              { title: 'Low RMI but symptomatic, CA-125 over 35 or over 5 cm', text: 'Consider surgery.' },
            ],
          },
        },
        { text: 'Refer urgently if a followed cyst becomes symptomatic, enlarges or changes features.', refs: [{ guidelineId: G549 }] },
      ],
    },
    {
      id: 'surgery',
      title: 'Surgery',
      icon: 'surgery',
      body: [
        { text: 'Laparoscopy is preferred to laparotomy; laparotomy may suit large masses with solid parts. Surgery should be by an experienced surgeon with suitable equipment, or the woman should be referred.', refs: [{ guidelineId: R62, locator: '6.4–6.5' }] },
        { text: 'Avoid spillage; consider a tissue bag. If spillage occurs, wash out with plenty of warm fluid. Chemical peritonitis after dermoid spill occurs in under 0.2%. Retrieve the specimen through the umbilical port.', refs: [{ guidelineId: R62, locator: '6.7, 6.9' }] },
        { text: 'Discuss possible oophorectomy before surgery and record it on the consent form.', refs: [{ guidelineId: R62, locator: '6.8' }, { guidelineId: G514 }] },
        { text: 'Aspiration has a 53–84% recurrence rate; use only in highly selected cases.', refs: [{ guidelineId: R62, locator: '6.6' }] },
      ],
    },
    {
      id: 'torsion',
      title: 'Torsion & Pregnancy',
      icon: 'emergency',
      body: [
        { heading: 'Torsion', text: 'Ovarian torsion is an emergency; surgery should not wait for MDT discussion. Torsion needs gynaecology consultation.', refs: [{ guidelineId: G549 }, { guidelineId: G514 }, { guidelineId: AF }] },
        { heading: 'Pregnancy', text: 'Asymptomatic, non-suspicious adnexal masses found in pregnancy can be safely observed.', refs: [{ guidelineId: AF, locator: 'SORT (C)' }] },
      ],
    },
    {
      id: 'risk-assessment',
      title: 'Risk of Malignancy: RMI & IOTA',
      icon: 'lab',
      body: [
        {
          text: 'RMI I = U × M × CA-125 (IU/mL).',
          refs: [{ guidelineId: G549 }, { guidelineId: G514 }, { guidelineId: N, locator: 'Ch. 1' }],
          table: {
            columns: ['Component', 'Scoring'],
            rows: [
              ['U (ultrasound)', '1 point each: multilocular, solid areas, metastases, ascites, bilateral. 0 points: U = 0; 1 point: U = 1; 2–5 points: U = 3'],
              ['M (menopause)', 'Premenopausal M = 1; postmenopausal M = 3'],
              ['CA-125', 'Serum level in IU/mL'],
              ['Cut-off', 'GG&C and RCOG: 200 (sensitivity 78%, specificity 87% at 200). NICE: refer 250 or more to a specialist MDT'],
            ],
          },
        },
        { text: 'RMI I is the most effective RMI but less useful before the menopause; RMI II–IV add no benefit.', refs: [{ guidelineId: R62, locator: '5.1' }, { guidelineId: G549 }] },
        { text: 'IOTA simple rules: usable without CA-125; masses that cannot be classified go to a gynaecological ultrasound specialist; any M feature goes to gynae-oncology.', refs: [{ guidelineId: R62, locator: '5.2' }] },
        { text: 'CA-125 is unreliable before the menopause; a rising level is more worrying than a static one. NICE: measure CA-125 in secondary care for suspected ovarian cancer, ultrasound first, CT if cancer is suggested, and do not use MRI routinely.', refs: [{ guidelineId: R62, locator: '4.2' }, { guidelineId: N, locator: '1.2.1.1' }] },
        { text: 'AAFP high-risk features: size over 10 cm, solid components, high colour flow. Do not screen asymptomatic average-risk women.', refs: [{ guidelineId: AF, locator: 'Abstract; SORT (A)' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'RMI I referral cut-off',
      entries: [
        { guidelineId: N, text: '250 or more: specialist MDT.' },
        { guidelineId: R62, text: '200 (evidence cut-off).', locator: '5.1' },
        { guidelineId: G549, text: '200: urgent suspicion-of-cancer referral.' },
      ],
    },
    {
      domain: 'Premenopausal simple cyst 5–7 cm',
      entries: [
        { guidelineId: R62, text: 'Yearly ultrasound.', locator: '6.2' },
        { guidelineId: G514, text: 'TVS 6-monthly for 1 year.' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026 through a summarising fetch tool (exact wording and RCOG grades need checking against the PDFs). RCOG GTG 34 (postmenopausal) could not be opened; its pathway is given through NHS Greater Glasgow & Clyde guideline 549, which is based on it. NICE CG122 primary-care section and RMI appendix, ACOG PB 174 and the AAFP full text (paywalled), IOTA and O-RADS primary papers, and any FOGSI document were not read. No source covered torsion technique or surgery timing in pregnancy.',
};
