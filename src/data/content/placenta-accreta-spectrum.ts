import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI–ICOG GCPR, Placenta Previa & PAS (file dated March 2024), read in full -> fogsi-pas-gcpr
 *  - RCOG GTG 27a (2018), NHS England copy, read to section 8.6                 -> rcog-gtg-27a
 *  - ACOG/SMFM Obstetric Care Consensus No. 7 (2018), SMFM copy                  -> acog-occ-7
 *  - FIGO 2018 PAS papers (diagnosis, surgery, conservative), manuscripts        -> figo-pas-*
 *  - FIGO 2019 clinical classification, accepted manuscript                       -> figo-pas-classification
 *  NICE was not searched for this topic.
 */
const F = 'fogsi-pas-gcpr';
const R = 'rcog-gtg-27a';
const A = 'acog-occ-7';
const FD = 'figo-pas-diagnosis';
const FS = 'figo-pas-surgery';
const FC = 'figo-pas-conservative';
const FG = 'figo-pas-classification';

export const placentaAccretaSpectrum: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Placenta accreta spectrum (PAS) is a placenta that is abnormally adherent to, or invades through, the uterine wall. Its main driver is a previous caesarean combined with a placenta praevia, so the risk climbs steeply with every repeat caesarean. Every woman with a low-lying placenta or praevia and a uterine scar should be screened by an experienced sonographer and, if PAS is suspected, referred to a specialist centre with a multidisciplinary team and massive-transfusion support. Planned delivery is at about 35–36 weeks (RCOG, FOGSI) or 34–35 weeks (ACOG). The usual operation is a caesarean hysterectomy with the placenta left in situ; forcing the placenta off is strongly discouraged. Leaving the placenta to resorb is an option only for carefully selected women in expert centres. Methotrexate is not recommended.',
  keyPoints: [
    { text: 'With placenta praevia, accreta risk is about 3%, 11%, 40%, 61% and 67% after 1, 2, 3, 4 and 5 or more caesareans.', refs: [{ guidelineId: R, locator: '7.1' }, { guidelineId: A, locator: 'Risk factors' }] },
    { text: 'Localise the placenta at the anomaly scan. If it is low-lying or praevia and she has a prior caesarean, look for PAS signs and refer any suspicious scan to a specialist team.', refs: [{ guidelineId: R, locator: '4.2, 7.2.1' }, { guidelineId: FD, locator: 'Recommendations' }, { guidelineId: F }] },
    { text: 'Ultrasound by an experienced operator is the main test (pooled sensitivity about 91%, specificity about 97%). MRI is not essential; it helps with posterior placentas and suspected pelvic extension.', refs: [{ guidelineId: FD, locator: 'Table 1' }, { guidelineId: A, locator: 'Diagnosis' }, { guidelineId: F, locator: 'MRI' }] },
    { text: 'A normal scan does not rule PAS out. Risk factors matter as much as ultrasound signs.', refs: [{ guidelineId: F }, { guidelineId: A, locator: 'Grade 1A' }] },
    { text: 'Deliver in a centre with a multidisciplinary team, ICU, NICU and blood bank able to run massive transfusion. Optimise haemoglobin beforehand.', refs: [{ guidelineId: FS, locator: 'Strong' }, { guidelineId: A, locator: 'Grade 1B' }, { guidelineId: R, locator: '7.3' }, { guidelineId: F, locator: 'Level 1B' }] },
    { text: 'Planned delivery for PAS: 35+0–36+6 weeks (RCOG, FOGSI); 34+0–35+6 weeks and not beyond 36+0 (ACOG/SMFM).', refs: [{ guidelineId: R, locator: '7.4' }, { guidelineId: F, locator: 'Level 1A' }, { guidelineId: A, locator: 'Grade 1A' }] },
    { text: 'Caesarean hysterectomy with the placenta left in situ, through a hysterotomy that avoids the placenta. Do not try to separate it forcibly. Total hysterectomy is preferred.', refs: [{ guidelineId: FS }, { guidelineId: A, locator: 'Surgical management' }, { guidelineId: R, locator: '8.4.1' }] },
    { text: 'Methotrexate is not recommended when the placenta is left in situ (RCOG, ACOG, FIGO, FOGSI).', refs: [{ guidelineId: R, locator: '8.5' }, { guidelineId: A }, { guidelineId: FC }, { guidelineId: F }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Definitions & FIGO Grading',
      icon: 'definition',
      body: [
        { heading: 'Placenta praevia', text: 'The placenta lies directly over the internal os. A low-lying placenta has its edge less than 20 mm from the os after 16 weeks. The terms "partial" and "marginal" are no longer recommended.', refs: [{ guidelineId: R, locator: '4.2' }, { guidelineId: F }] },
        { heading: 'PAS', text: 'Covers placenta accreta (adherent), increta (villi into the myometrium) and percreta (villi through the whole uterine wall, sometimes into the bladder or other organs).', refs: [{ guidelineId: R, locator: '2.2' }] },
        {
          text: 'FIGO clinical grading at surgery:',
          refs: [{ guidelineId: FG }],
          table: {
            columns: ['Grade', 'Findings at laparotomy'],
            rows: [
              ['1: Adherent (creta)', 'No obvious distension over the placental bed; little or no new vessels.'],
              ['2: Increta', 'Bluish or purple discolouration, placental bulge and marked hypervascularity; no tissue breaching the serosa. "Dimple sign" with cord traction.'],
              ['3a: Percreta to serosa', 'Placenta reaches the serosa; a clear surgical plane remains between bladder and uterus.'],
              ['3b: Percreta into bladder', 'No clear plane between bladder and uterus.'],
              ['3c: Percreta beyond', 'Invades the broad ligament, vaginal wall, pelvic sidewall or another pelvic organ.'],
            ],
          },
        },
      ],
    },
    {
      id: 'risk',
      title: 'Risk Factors',
      icon: 'risk',
      body: [
        {
          text: 'Accreta risk with placenta praevia, by number of previous caesareans:',
          refs: [{ guidelineId: R, locator: '7.1' }, { guidelineId: A }],
          table: {
            columns: ['Previous caesareans', 'Risk of accreta'],
            rows: [['None', 'About 3%'], ['1', '3%'], ['2', '11%'], ['3', '40%'], ['4', '61%'], ['5 or more', '67%']],
          },
        },
        { text: 'Placenta praevia is present in over 80% of accretas. Without praevia, the risk is 0.3% after one caesarean and 6.7% after five or more.', refs: [{ guidelineId: A }] },
        { text: 'ACOG reports US incidence of 1 in 272 deliveries (2016), up from 1 in 533 in 1982–2002.', refs: [{ guidelineId: A }] },
        { text: 'Other risk factors: maternal age over 35, multiparity, previous uterine surgery (myomectomy, curettage), Asherman syndrome, IVF and smoking.', refs: [{ guidelineId: F, locator: 'Grade B' }, { guidelineId: A }, { guidelineId: R, locator: '4.1' }] },
        { text: 'A continuing caesarean scar pregnancy carries a PAS risk that approaches 100%.', refs: [{ guidelineId: F }] },
      ],
    },
    {
      id: 'diagnosis',
      title: 'Ultrasound & MRI',
      icon: 'diagnosis',
      body: [
        {
          text: 'Standard ultrasound signs (EW-AIP definitions):',
          refs: [{ guidelineId: FD, locator: 'Table 2' }, { guidelineId: R, locator: '7.2.1' }, { guidelineId: F }],
          table: {
            columns: ['Sign', 'What it looks like'],
            rows: [
              ['Loss of clear zone', 'Loss or irregularity of the hypoechoic plane under the placental bed'],
              ['Abnormal lacunae', 'Many large, irregular "moth-eaten" spaces, often with turbulent flow'],
              ['Bladder wall interruption', 'Loss of the bright bladder wall line'],
              ['Myometrial thinning', 'Myometrium under 1 mm or not visible'],
              ['Placental bulge / exophytic mass', 'Placenta bulging into or through the uterine outline'],
              ['Hypervascularity', 'Uterovesical or subplacental vessels; bridging vessels crossing the myometrium and serosa'],
            ],
          },
        },
        {
          text: 'Accuracy of single signs (FIGO pooled data):',
          refs: [{ guidelineId: FD, locator: 'Table 1' }],
          table: {
            columns: ['Sign', 'Sensitivity', 'Specificity'],
            rows: [
              ['Lacunae', '77%', '95%'],
              ['Loss of clear zone', '66%', '96%'],
              ['Uterus–bladder interface abnormality', '50%', '99.8%'],
              ['Colour Doppler abnormality', '91%', '88%'],
            ],
          },
        },
        { text: 'Pooled ultrasound accuracy across 23 studies (3,707 pregnancies) was 90.7% sensitivity and 96.9% specificity. ACOG notes this likely overstates real-world performance; agreement between observers is only moderate (kappa 0.47).', refs: [{ guidelineId: FD }, { guidelineId: A }] },
        { text: 'ACOG/SMFM suggest scans at about 18–20, 28–30 and 32–34 weeks for asymptomatic women at risk.', refs: [{ guidelineId: A }] },
        { heading: 'MRI', text: 'Pooled sensitivity 94.4% and specificity 84.0%. Not essential or mandatory. Consider it for a posterior placenta, an inconclusive scan, very high suspicion or suspected pelvic extension of a percreta.', refs: [{ guidelineId: F, locator: 'Grade C' }, { guidelineId: FD }, { guidelineId: R, locator: '7.2.2' }, { guidelineId: A }] },
        { heading: 'First trimester', text: 'In a woman with a caesarean scar, look at the implantation site early. Signs of scar pregnancy include a sac in the scar defect, high-velocity low-resistance flow and a negative "sliding organs" sign.', refs: [{ guidelineId: FD }, { guidelineId: F, locator: '11–14 wk' }] },
        { text: 'Maternal serum AFP is too nonspecific to use for diagnosis (ACOG); FOGSI lists an unexplained raised MSAFP as a risk marker.', refs: [{ guidelineId: A }, { guidelineId: F }] },
      ],
    },
    {
      id: 'praevia-followup',
      title: 'Praevia: Follow-up Scans & Cervical Length',
      icon: 'monitoring',
      body: [
        { text: 'Localise the placenta at the anomaly scan (18+6–21+6 weeks). Ask every woman about a previous caesarean at this scan.', refs: [{ guidelineId: R, locator: 'GPP' }, { guidelineId: FD }, { guidelineId: F }] },
        { text: 'If the placenta is low-lying or praevia, repeat a transvaginal scan at 32 weeks, and again at about 36 weeks if it persists and she has no symptoms. Transvaginal scanning is more accurate than transabdominal and is safe.', refs: [{ guidelineId: R, locator: '4.2, Grade D' }, { guidelineId: F }] },
        { text: 'RCOG: a cervical length under 31 mm is associated with emergency delivery for bleeding before 34 weeks, and under 25 mm with a higher risk of massive haemorrhage (RR 7.2).', refs: [{ guidelineId: R, locator: 'Evidence text' }] },
      ],
    },
    {
      id: 'antenatal-bleeding',
      title: 'Antenatal Care & Bleeding in Praevia',
      icon: 'emergency',
      body: [
        { text: 'Decide on admission case by case. She should come in immediately with any bleeding, spotting, contractions or pain. Home care can be considered if she has no symptoms, support at home and quick access to hospital.', refs: [{ guidelineId: R, locator: '4.4' }, { guidelineId: F, locator: 'GPP' }] },
        { text: 'Bleeding before 29 weeks, repeated bleeds, a previous caesarean and a need for transfusion predict emergency delivery.', refs: [{ guidelineId: R, locator: '4.4' }] },
        { text: 'Assess VTE risk on admission.', refs: [{ guidelineId: R, locator: '4.4' }] },
        { text: 'FOGSI: keep Hb above 11 g/dL; give anti-D 300 mcg to Rh-negative women who bleed, guided by a Kleihauer test.', refs: [{ guidelineId: F }] },
        { text: 'Cerclage is not recommended (FOGSI; RCOG: only within trials).', refs: [{ guidelineId: F }, { guidelineId: R, locator: '4.4' }] },
        { text: 'Antenatal corticosteroids: one course at 34+0–35+6 weeks, or earlier if preterm delivery is more likely. Tocolysis may be considered for 48 hours to allow steroids, never to delay a delivery that is indicated.', refs: [{ guidelineId: R, locator: '4.6–4.7' }] },
        { text: 'Deliver for heavy bleeding, a non-reassuring CTG or maternal instability.', refs: [{ guidelineId: F, locator: 'Grade C' }] },
      ],
    },
    {
      id: 'timing',
      title: 'Timing of Delivery',
      icon: 'delivery',
      body: [
        {
          text: 'Planned delivery gestation:',
          refs: [{ guidelineId: R, locator: '5, 7.4' }, { guidelineId: F }, { guidelineId: A }],
          table: {
            columns: ['Situation', 'Gestation'],
            rows: [
              ['Uncomplicated praevia (RCOG)', '36+0–37+0 weeks'],
              ['Praevia with bleeding or other preterm risk (RCOG)', 'Consider 34+0–36+6 weeks'],
              ['PAS (RCOG, FOGSI)', '35+0–36+6 weeks'],
              ['PAS, stable (ACOG/SMFM)', '34+0–35+6 weeks; not beyond 36+0'],
            ],
          },
        },
        { text: 'ACOG notes about half of women with PAS who go beyond 36 weeks need emergency delivery for bleeding. Give steroids if delivery is expected before 37 weeks.', refs: [{ guidelineId: A }] },
        { text: 'FIGO strongly recommends a planned, non-emergency delivery and discusses 34–38 weeks.', refs: [{ guidelineId: FS }] },
      ],
    },
    {
      id: 'mdt',
      title: 'Where & Who: Centre of Excellence',
      icon: 'followup',
      body: [
        { text: 'Suspected PAS should be delivered in a specialist centre (ACOG: level III or IV) by a dedicated multidisciplinary team.', refs: [{ guidelineId: FS, locator: 'Strong' }, { guidelineId: A, locator: 'Grade 1B' }, { guidelineId: R, locator: '7.3' }, { guidelineId: F, locator: 'Level 1B' }] },
        { text: 'The team includes obstetric/MFM surgeons with complex pelvic surgery skills, urology, interventional radiology (where available), anaesthesia, critical care and neonatology, with a blood bank able to run massive transfusion, ICU/HDU and NICU on site.', refs: [{ guidelineId: A }, { guidelineId: R, locator: '7.3' }, { guidelineId: F }] },
        { text: 'For praevia without PAS, deliver in a unit with on-site blood transfusion and critical care, with a consultant obstetrician and anaesthetist present.', refs: [{ guidelineId: R, locator: '5–6.1' }] },
      ],
    },
    {
      id: 'blood',
      title: 'Blood Preparation',
      icon: 'fluids',
      body: [
        { text: 'Optimise haemoglobin before surgery with oral or IV iron. FOGSI aims for Hb above 11 g/dL.', refs: [{ guidelineId: FS }, { guidelineId: F }] },
        { text: 'Plan blood availability with the transfusion lab in advance and document it. Have rapid infusers, fluid warmers and wide-bore (14–16 G) cannulas ready.', refs: [{ guidelineId: R }, { guidelineId: F, locator: 'Grade D' }] },
        { text: 'For massive transfusion, ACOG/SMFM give red cells : FFP : platelets in ratios from 1:1:1 to 1:2:4. Low fibrinogen best predicts severe bleeding; viscoelastic testing can guide replacement.', refs: [{ guidelineId: A, locator: 'Grade 1A' }] },
        { text: 'Cell salvage may be used or kept on stand-by, especially for women who decline donor blood.', refs: [{ guidelineId: FS }, { guidelineId: R, locator: 'Grade D' }, { guidelineId: F, locator: 'Grade D' }] },
      ],
    },
    {
      id: 'surgery',
      title: 'Surgery: Caesarean Hysterectomy',
      icon: 'injection',
      body: [
        { heading: 'Incision', text: 'Consider a midline vertical skin incision for invasive PAS. Place the hysterotomy away from the placenta, usually above its upper edge (often fundal). Map the placental edge with ultrasound beforehand. Lithotomy position is commonly used.', refs: [{ guidelineId: FS, locator: 'Weak' }, { guidelineId: A }, { guidelineId: F }, { guidelineId: R, locator: '6.4' }] },
        { heading: 'Placenta in situ', text: 'After delivering the baby, leave the placenta in place and do not give uterotonics. Caesarean hysterectomy with the placenta in situ is the accepted approach; forced removal is strongly discouraged. Total hysterectomy is preferred over subtotal for increta or percreta with praevia.', refs: [{ guidelineId: FS, locator: 'Strong' }, { guidelineId: A }, { guidelineId: R, locator: '8.4.1' }, { guidelineId: F, locator: 'Grade C' }] },
        { heading: 'Unexpected PAS', text: 'If a percreta is found at an elective caesarean, delay until the right staff and blood are present, or close and transfer. If accreta is found after the baby is born, leave the placenta and proceed to hysterectomy.', refs: [{ guidelineId: R }] },
        { heading: 'Bladder', text: 'Ureteric stents are not routine but help when imaging suggests bladder invasion. Cystoscopy may be needed if the bladder is involved.', refs: [{ guidelineId: R, locator: 'Grade C' }, { guidelineId: FS }, { guidelineId: A }] },
        { heading: 'Tranexamic acid', text: 'FIGO: where available, give tranexamic acid 1 g slow IV before or during surgery. ACOG/SMFM note its use in PAS is unstudied.', refs: [{ guidelineId: FS, locator: 'Strong' }, { guidelineId: A }] },
        { heading: 'Interventional radiology', text: 'Prophylactic balloon catheters are not routine; evidence is insufficient. Embolisation can help persistent bleeding. Internal iliac ligation is of unclear value.', refs: [{ guidelineId: A }, { guidelineId: FS }, { guidelineId: R, locator: '8.6' }] },
        { heading: 'Anaesthesia', text: 'Regional anaesthesia is safe, with readiness to convert to general.', refs: [{ guidelineId: R, locator: 'Grade D' }] },
        { text: 'Delayed hysterectomy (FOGSI: 3–7 days; FIGO: for percreta with extensive pelvic invasion) may be considered.', refs: [{ guidelineId: F }, { guidelineId: FS }] },
      ],
    },
    {
      id: 'conservative',
      title: 'Conservative Management',
      icon: 'complications',
      body: [
        { text: 'Approaches: leaving the placenta in situ, one-step conservative surgery, or the Triple-P procedure. Manual removal of a suspected PAS should be abandoned.', refs: [{ guidelineId: FC }] },
        { text: 'Suits only women who want to keep fertility, accept long follow-up and are treated in an expert centre. ACOG/SMFM consider it investigational, for carefully selected cases. Not for women who are bleeding heavily.', refs: [{ guidelineId: FC }, { guidelineId: A, locator: 'Grade 2C' }, { guidelineId: R, locator: '8.5' }] },
        {
          text: 'Outcomes of leaving the placenta in situ (French series, 167 women):',
          refs: [{ guidelineId: FC }, { guidelineId: A }],
          table: {
            columns: ['Outcome', 'Rate'],
            rows: [
              ['Uterus preserved', '78% (56% with percreta)'],
              ['Delayed hysterectomy', '22% overall (44% percreta, 7% less invasive)'],
              ['Infection / sepsis', '28% / 4%'],
              ['Secondary PPH', '11%'],
              ['Severe maternal morbidity', '6% (one death)'],
              ['Spontaneous resorption', '75%, median 13.5 weeks'],
            ],
          },
        },
        { text: 'Follow up weekly for 2 months, then monthly, with symptoms, ultrasound, Hb, white count and vaginal swabs. Give prophylactic antibiotics.', refs: [{ guidelineId: FC }] },
        { text: 'PAS recurs in 22–29% of later pregnancies.', refs: [{ guidelineId: FC }] },
        { text: 'FOGSI: partial myometrial resection can be considered where invasion is limited, in tertiary centres only. It also describes the Paily aorta clamp, an Indian low-resource technique that still awaits trials.', refs: [{ guidelineId: F, locator: 'Grade C' }] },
      ],
    },
    {
      id: 'methotrexate',
      title: 'Methotrexate: Not Recommended',
      icon: 'drug',
      body: [
        { text: 'All four sources advise against methotrexate when the placenta is left in situ.', refs: [{ guidelineId: R, locator: '8.5, Grade C' }, { guidelineId: A }, { guidelineId: FC }, { guidelineId: F }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Planned delivery for PAS',
      entries: [
        { guidelineId: R, text: '35+0–36+6 weeks; earlier if heavy bleeding expected.', locator: '7.4' },
        { guidelineId: F, text: '35+0–36+6 weeks.', locator: 'Level 1A' },
        { guidelineId: A, text: '34+0–35+6 weeks; not beyond 36+0.', locator: 'Grade 1A' },
        { guidelineId: FS, text: 'Planned delivery; 34–38 weeks discussed.' },
      ],
    },
    {
      domain: 'MRI',
      entries: [
        { guidelineId: FD, text: 'Not essential; for pelvic extension or posterior placenta.' },
        { guidelineId: R, text: 'Similar accuracy to expert ultrasound; complements it.', locator: '7.2.2' },
        { guidelineId: A, text: 'Added value unclear.' },
        { guidelineId: F, text: 'Not mandatory; for inconclusive scans or posterior placenta.', locator: 'Grade C' },
      ],
    },
    {
      domain: 'Prophylactic balloons',
      entries: [
        { guidelineId: A, text: 'Routine use not recommended.' },
        { guidelineId: FS, text: 'Evidence insufficient for firm recommendation.' },
        { guidelineId: R, text: 'Needs larger studies before routine use.', locator: '8.6' },
      ],
    },
    {
      domain: 'Conservative management',
      entries: [
        { guidelineId: FC, text: 'Option for selected women in expert centres.' },
        { guidelineId: A, text: 'Investigational; carefully selected cases only.', locator: 'Grade 2C' },
        { guidelineId: R, text: 'Consider if hysterectomy unacceptable; not with major bleeding.', locator: '8.5' },
        { guidelineId: F, text: 'Partial resection for limited invasion, tertiary centres.', locator: 'Grade C' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: the FOGSI–ICOG GCPR in full (file dated March 2024); RCOG GTG 27a (2018) from the NHS England copy, up to section 8.6 (the rest and the Appendix III sign table were not read); ACOG/SMFM OCC 7 (2018) from the SMFM-hosted PDF, where some numbers were garbled in extraction; and four FIGO papers from submitted or accepted manuscripts, not the typeset versions. The FIGO epidemiology paper, NICE, the IOG Ireland 2023 and RANZCOG guidelines were not read. Reaffirmation of OCC 7 and any RCOG update after 2018 were not checked. Check every number against the published versions.',
};
