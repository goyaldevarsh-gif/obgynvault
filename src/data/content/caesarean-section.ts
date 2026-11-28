import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from NICE NG192 (2021, updated Jan 2024), WHO Statement on CS rates (2015), WHO Robson
 * Implementation Manual (2017), LaQshya (MoHFW 2017), a MoHFW parliamentary answer (2020) and the WHO 2015
 * peripartum infection evidence base. No FOGSI or ICMR clinical guideline on caesarean was found.
 */
const N = 'nice-ng192';
const WS = 'who-cs-rates-2015';
const RB = 'who-robson-2017';
const LQ = 'mohfw-laqshya-2017';
const LS = 'mohfw-cs-ls-2020';
const WI = 'who-peripartum-infection-2015';

export const caesareanSection: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Classify every caesarean by urgency (categories 1–4) and audit rates with the Robson ten-group classification, which WHO proposes as the global standard and India has circulated to all States and LaQshya facilities. Category 1 birth should usually happen within 30 minutes of the decision and category 2 within 75 minutes. Do not routinely plan caesarean before 39 weeks. Before surgery give antacids, prophylactic antibiotics before skin incision (not co-amoxiclav) and thromboprophylaxis by risk; prefer regional anaesthesia. Technique: low transverse incision, blunt uterine extension, controlled cord traction for the placenta, single or double layer uterine closure as appropriate, no peritoneal closure, oxytocin 5 IU slow IV, and sutures rather than staples for skin. Afterwards: early eating, catheter out once mobile (at least 12 hours after the last regional top-up), regular paracetamol and an NSAID, and discharge after 24 hours if well.',
  keyPoints: [
    { text: 'Urgency: category 1 (immediate threat to life) within 30 minutes of decision; category 2 within 75 minutes in most situations; balance speed against risk.', refs: [{ guidelineId: N, locator: '1.4.2–1.4.5' }] },
    { text: 'Robson ten-group classification is the global standard for auditing CS rates; interpret all 10 groups together. CS audit is part of LaQshya in India.', refs: [{ guidelineId: WS }, { guidelineId: RB, locator: 'Table 3, p.36' }, { guidelineId: LQ, locator: 'pp.12–13' }] },
    { text: 'Do not routinely plan caesarean before 39 weeks (neonatal respiratory morbidity).', refs: [{ guidelineId: N, locator: '1.4.1' }] },
    { text: 'Prophylactic antibiotics before skin incision (more effective than after cord clamping); do not use co-amoxiclav. Offer thromboprophylaxis by risk; antacids or H2 blockers/PPIs.', refs: [{ guidelineId: N, locator: '1.4.18, 1.4.43–1.4.46' }, { guidelineId: WI, locator: 'Table 16a' }] },
    { text: 'Oxytocin 5 IU by slow IV injection at caesarean birth. Remove the placenta by controlled cord traction, not manually.', refs: [{ guidelineId: N, locator: '1.4.33–1.4.34' }] },
    { text: 'Do not suture visceral or parietal peritoneum; close subcutaneous tissue only if fat over 2 cm; consider sutures rather than staples for skin.', refs: [{ guidelineId: N, locator: '1.4.37–1.4.41' }] },
    { text: 'Caesarean on request without a medical indication: explore reasons, give balanced information, offer mental health support for fear of birth, and support the choice after discussion.', refs: [{ guidelineId: N, locator: '1.2.26–1.2.31' }] },
  ],
  sections: [
    {
      id: 'urgency',
      title: 'Urgency Categories & Decision-to-Birth',
      icon: 'emergency',
      body: [
        {
          text: 'NICE 4-category scheme.',
          refs: [{ guidelineId: N, locator: '1.4.2–1.4.4' }],
          table: {
            columns: ['Category', 'Meaning', 'Target'],
            rows: [
              ['1', 'Immediate threat to life of woman or fetus (e.g. suspected uterine rupture, cord prolapse)', 'As soon as possible; usually within 30 min of decision'],
              ['2', 'Maternal or fetal compromise, not immediately life-threatening', 'As soon as possible; usually within 75 min'],
              ['3', 'No maternal or fetal compromise, but needs early birth', 'No time target given by NICE'],
              ['4', 'Birth timed to suit the woman or healthcare provider', 'Planned; no time target'],
            ],
          },
        },
        { text: 'Take the condition of the woman and baby into account: rapid birth can itself be harmful in some situations.', refs: [{ guidelineId: N, locator: '1.4.5' }] },
      ],
    },
    {
      id: 'stepwise',
      title: 'Step-by-step Perioperative Care',
      icon: 'management',
      body: [
        {
          text: 'From decision to discharge (NICE NG192).',
          refs: [{ guidelineId: N, locator: '1.2, 1.4, 1.6' }],
          flow: {
            caption: 'Caesarean birth pathway',
            steps: [
              { title: 'Decision and consent', text: 'Category 1–4; evidence-based information; document what matters to her. Inform family before shifting (LaQshya).', tone: 'start' },
              { title: 'Before incision', text: 'Antacid/H2 blocker or PPI; regional anaesthesia preferred, induced in theatre; left lateral tilt up to 15°; phenylephrine infusion with spinal; urinary catheter; antibiotics before skin incision; surgical safety checklist.', tone: 'action' },
              { title: 'Operation', text: 'Low transverse skin incision; blunt uterine extension; controlled cord traction; oxytocin 5 IU slow IV; single or double layer uterine closure; no peritoneal closure; skin sutures preferred.', tone: 'action' },
              { title: 'After', text: 'Thromboprophylaxis by risk; eat and drink when ready; catheter out once mobile and at least 12 h after last regional top-up; paracetamol + NSAID; discharge after 24 h if well.' },
            ],
          },
        },
      ],
    },
    {
      id: 'technique',
      title: 'Operative Technique',
      icon: 'surgery',
      body: [
        { text: 'Low, transverse, straight skin incision; open layers bluntly, extending sharply if needed. A higher incision may be needed with BMI 40 or more; some cases need a vertical midline incision. Separate knives for skin and deeper layers do not reduce infection.', refs: [{ guidelineId: N, locator: '1.4.28–1.4.29' }] },
        { text: 'With a well-formed lower segment, extend the uterine incision bluntly (less blood loss). Fetal laceration risk is about 2%. Use forceps only if the head is difficult to deliver.', refs: [{ guidelineId: N, locator: '1.4.30–1.4.32' }] },
        { text: 'Placenta by controlled cord traction, not manual removal. Exteriorisation is not recommended routinely. Uterine closure single or double layer depending on clinical circumstances.', refs: [{ guidelineId: N, locator: '1.4.34–1.4.36' }] },
        { text: 'Do not suture visceral or parietal peritoneum. Midline incision: mass closure with slowly absorbable continuous sutures. Close subcutaneous tissue only if more than 2 cm of fat; no routine superficial drains; consider sutures rather than staples for skin (less superficial dehiscence).', refs: [{ guidelineId: N, locator: '1.4.37–1.4.41' }] },
        { text: 'Paired umbilical artery and vein gases after caesarean for suspected fetal compromise.', refs: [{ guidelineId: N, locator: '1.4.42' }] },
      ],
    },
    {
      id: 'infection',
      title: 'Infection & VTE Prevention',
      icon: 'drug',
      body: [
        { text: 'Offer prophylactic antibiotics before skin incision, choosing agents effective against endometritis, urinary and wound infection; do not use co-amoxiclav. Prophylaxis versus none roughly halves wound infection (RR 0.40) and endometritis (RR 0.38).', refs: [{ guidelineId: N, locator: '1.4.43–1.4.45' }, { guidelineId: WI, locator: 'Table 16a' }] },
        { text: 'Vaginal cleansing with povidone-iodine before caesarean reduced endometritis (RR 0.45), especially with ruptured membranes (RR 0.24), in the WHO evidence review.', refs: [{ guidelineId: WI, locator: 'Tables 14a–14c' }] },
        { text: 'Offer thromboprophylaxis, choosing the method by thromboembolic risk (see VTE in pregnancy).', refs: [{ guidelineId: N, locator: '1.4.46' }] },
        { heading: 'Wound', text: 'Consider negative pressure wound therapy if BMI 35 or more. Remove dressings 6–24 hours after birth; advise loose clothing and gentle daily cleaning. LaQshya target: surgical site infection 5% or less in maternity OT, or a 30% fall from baseline.', refs: [{ guidelineId: N, locator: '1.7.2–1.7.4' }, { guidelineId: LQ, locator: 'Annexure C, indicator 10' }] },
      ],
    },
    {
      id: 'postop',
      title: 'After the Operation',
      icon: 'followup',
      body: [
        { text: 'Analgesia: intrathecal diamorphine (up to 300 µg) where used, oral morphine or IV PCA as needed, regular paracetamol plus an NSAID unless contraindicated, laxatives with opioids. Avoid codeine-containing products when breastfeeding.', refs: [{ guidelineId: N, locator: '1.6.11–1.6.27' }] },
        { text: 'Eat and drink normally when recovering well. Remove the catheter once mobile after regional anaesthesia, but not sooner than 12 hours after the last top-up. Discharge after 24 hours if well and afebrile.', refs: [{ guidelineId: N, locator: '1.6.28–1.6.32' }] },
        { text: 'Newborn: someone trained in resuscitation present; early skin-to-skin and breastfeeding support.', refs: [{ guidelineId: N, locator: '1.5.1–1.5.4' }] },
        { text: 'Future births: see Birth after Caesarean (VBAC).', refs: [{ guidelineId: N, locator: '1.8' }] },
      ],
    },
    {
      id: 'request',
      title: 'Caesarean on Request',
      icon: 'counselling',
      body: [
        { text: 'Ask for consent only after evidence-based information; women may decline caesarean. With no medical indication, explore and record her reasons, give balanced information and alternatives; offer perinatal mental health referral for fear of birth. After discussion, support the request and offer it within the unit.', refs: [{ guidelineId: N, locator: '1.2.23–1.2.31' }] },
      ],
    },
    {
      id: 'robson',
      title: 'Robson Classification & CS Audit (India)',
      icon: 'classification',
      body: [
        {
          text: 'The ten groups, built from parity, previous CS, onset of labour, number of fetuses, gestational age and presentation.',
          refs: [{ guidelineId: RB, locator: 'Tables 1–3, pp.11–17' }],
          table: {
            columns: ['Group', 'Women included'],
            rows: [
              ['1', 'Nulliparous, single cephalic, 37 weeks or more, spontaneous labour'],
              ['2', 'Nulliparous, single cephalic, 37 weeks or more, induced (2a) or CS before labour (2b)'],
              ['3', 'Multiparous without previous CS, single cephalic, 37 weeks or more, spontaneous labour'],
              ['4', 'Multiparous without previous CS, single cephalic, 37 weeks or more, induced (4a) or CS before labour (4b)'],
              ['5', 'Multiparous with at least one previous CS, single cephalic, 37 weeks or more (5.1 one CS; 5.2 two or more)'],
              ['6', 'Nulliparous, single breech'],
              ['7', 'Multiparous, single breech, including previous CS'],
              ['8', 'Multiple pregnancy, including previous CS'],
              ['9', 'Single pregnancy, transverse or oblique lie, including previous CS'],
              ['10', 'Single cephalic under 37 weeks, including previous CS'],
            ],
          },
        },
        { text: 'Reading the table: analyse all 10 groups before any one. Group 9 should be under 1% of women, with a CS rate of 100%. Group 5 usually accounts for about half of all caesareans; a CS rate of 50–60% in group 5 is considered appropriate if outcomes are good.', refs: [{ guidelineId: RB, locator: 'pp.36–47' }] },
        { text: 'WHO: rates above 10% at population level are not linked to lower maternal and newborn mortality; the 10–15% figure is for populations, not facilities. Focus on providing caesarean to all who need it rather than a target rate.', refs: [{ guidelineId: WS }] },
        { text: 'India: CS rate 17.2% in NFHS-4 (2015–16), with more caesareans in private than public facilities on HMIS data. MoHFW has circulated the WHO statement and Robson classification, CS audit is implemented in all LaQshya-certified facilities, and CGHS hospitals must display their caesarean ratios.', refs: [{ guidelineId: LS }, { guidelineId: LQ, locator: 'pp.12–13, 30' }] },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. No FOGSI or ICMR clinical guideline on caesarean section was found. NICE NG192 PDF was read to about 88%; the definitions of urgency categories 2 and 3 were not captured. Not covered because no source read gives them: the antibiotic agent and dose (e.g. cefazolin; ACOG PB 199 and WHO 2021 not read), carbetocin and tranexamic acid at caesarean (see the PPH topic), and steroids before planned caesarean at 37–38+6 weeks. NFHS-5 caesarean figures not verified. WHO peripartum infection document read is the evidence base, not the recommendation text.',
};
