import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from RCOG GTG 20b (2017, third-party copy), NICE NG201, ACOG PB 221 (summary only),
 * a Scottish NHS guideline adapted from RCOG GTG 20a (2020) and a JOGI editorial (2005).
 */
const R = 'rcog-gtg-20b';
const N = 'nice-ng201';
const AC = 'acog-pb-221';
const S = 'nhs-scot-breech-ecv-2020';
const J = 'jogi-parikh-2005';

export const breechEcv: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Breech falls from about 20% at 28 weeks to 3–4% at term. Check presentation by palpation from 36+0 weeks and confirm suspected breech by ultrasound. Offer external cephalic version (ECV) to women without contraindications, from 36+0 weeks in nulliparous and 37+0 in multiparous women, where caesarean is available; tocolysis improves success (about 50% overall) and Rh-negative women need anti-D. If ECV fails or is declined, discuss planned caesarean (perinatal mortality about 0.5/1000 after 39 weeks) against planned vaginal breech birth (about 2.0/1000, with about 40% needing emergency caesarean), which needs careful selection and an experienced attendant.',
  keyPoints: [
    { text: 'Palpate for presentation at every visit from 36+0 weeks; scan if breech is suspected. For confirmed uncomplicated breech, discuss ECV, vaginal breech birth and planned caesarean.', refs: [{ guidelineId: N, locator: '1.2.36–1.2.38' }, { guidelineId: AC }] },
    { text: 'Offer ECV from 36+0 weeks (nulliparous) or 37+0 weeks (multiparous). Success about 50% (about 60% multiparous, 40% nulliparous). Emergency caesarean within 24 hours about 0.5%.', refs: [{ guidelineId: S, locator: 'p.2' }] },
    { text: 'Tocolysis improves ECV success; ACOG adds that neuraxial analgesia with tocolysis is reasonable. Do ECV only where caesarean is readily available, with fetal testing before and after.', refs: [{ guidelineId: AC }, { guidelineId: S, locator: 'p.2' }] },
    { text: 'Give anti-D to Rh-negative women after ECV, whether it succeeds or fails.', refs: [{ guidelineId: S, locator: 'pp.3, 5' }] },
    { text: 'Planned caesarean after 39+0 weeks: perinatal mortality about 0.5/1000, vs about 2.0/1000 with planned vaginal breech birth and 1.0/1000 with planned cephalic birth.', refs: [{ guidelineId: R, locator: '§4.1' }] },
    { text: 'Vaginal breech birth is higher risk with hyperextended neck, estimated weight over 3.8 kg or below the 10th centile, footling breech or fetal compromise; not recommended without experienced staff.', refs: [{ guidelineId: R, locator: '§5' }] },
    { text: 'Routine caesarean is not recommended for spontaneous preterm breech labour or for a breech second twin.', refs: [{ guidelineId: R, locator: '§7–8' }] },
  ],
  sections: [
    {
      id: 'stepwise',
      title: 'Step-by-step Management',
      icon: 'management',
      body: [
        {
          text: 'Pathway for a singleton breech at term.',
          refs: [{ guidelineId: N, locator: '1.2.36–1.2.38' }, { guidelineId: S }, { guidelineId: R }, { guidelineId: AC }],
          flow: {
            caption: 'Breech at term',
            steps: [
              { title: 'From 36+0 weeks', text: 'Palpate at every visit; ultrasound if breech suspected (NICE).', tone: 'start' },
              { title: 'Any contraindication to ECV?', tone: 'decision', branches: [
                { when: 'No', then: 'Offer ECV: 36+0 wk nulliparous, 37+0 wk multiparous' },
                { when: 'Yes, or declined', then: 'Counsel on planned caesarean vs vaginal breech birth' },
              ] },
              { title: 'ECV', text: 'CTG before and after; tocolysis; caesarean facilities on site; anti-D if Rh negative.', tone: 'action' },
              { title: 'Result', tone: 'decision', branches: [
                { when: 'Cephalic', then: 'Routine care; few revert' },
                { when: 'Still breech', then: 'Planned caesarean after 39+0 weeks, or selected vaginal breech birth with experienced attendant' },
              ] },
            ],
          },
        },
      ],
    },
    {
      id: 'ecv',
      title: 'External Cephalic Version',
      icon: 'fetus',
      body: [
        { heading: 'Timing and success', text: 'Offer from 36+0 weeks in nulliparous and 37+0 weeks in multiparous women. Success about 50% (about 60% multiparous, 40% nulliparous). After a failed attempt at 36+0 weeks or later, few breech babies turn spontaneously.', refs: [{ guidelineId: S, locator: 'p.2' }] },
        {
          heading: 'Contraindications',
          text: 'Listed in a Scottish NHS guideline adapted from RCOG GTG 20a.',
          refs: [{ guidelineId: S, locator: 'p.3' }],
          table: {
            columns: ['Absolute', 'Relative'],
            rows: [
              ['Another indication for caesarean', 'Rhesus isoimmunisation'],
              ['Major placenta praevia', 'Minor antepartum haemorrhage'],
              ['Uterine anomaly', 'Ruptured membranes'],
              ['Significant antepartum haemorrhage', 'Oligohydramnios'],
              ['Multiple pregnancy (except after first twin delivered)', 'IUGR; pre-eclampsia'],
            ],
          },
        },
        { heading: 'Previous caesarean', text: 'ECV after one caesarean appears to carry no greater risk than with an unscarred uterus (NHS, from RCOG 20a). An older JOGI editorial lists previous caesarean as a contraindication.', refs: [{ guidelineId: S, locator: 'p.2' }, { guidelineId: J, locator: 'p.407' }] },
        { heading: 'Procedure', text: 'CTG before and repeat CTG after (ACOG: nonstress test or BPP before and after; JOGI: monitor 30 minutes after). Tocolysis improves success; one NHS protocol uses terbutaline 0.5 mg subcutaneously unless contraindicated. Anti-D for Rh-negative women whether ECV succeeds or not.', refs: [{ guidelineId: S, locator: 'pp.2, 5' }, { guidelineId: AC }, { guidelineId: J, locator: 'p.408' }] },
        { heading: 'Risks', text: 'Emergency caesarean within 24 hours about 1 in 200. After successful ECV, labour has slightly higher caesarean and instrumental birth rates than spontaneous cephalic labour.', refs: [{ guidelineId: S, locator: 'p.2' }] },
        { heading: 'Moxibustion', text: 'Moxibustion at BL67 reduced the need for ECV in a Cochrane review (RR 0.47) as cited in a JOGI editorial; no guideline read recommends it.', refs: [{ guidelineId: J, locator: 'p.409' }] },
      ],
    },
    {
      id: 'mode',
      title: 'Planned Caesarean vs Vaginal Breech Birth',
      icon: 'counselling',
      body: [
        { text: 'Perinatal mortality about 0.5/1000 with caesarean after 39+0 weeks, about 2.0/1000 with planned vaginal breech birth and about 1.0/1000 with planned cephalic birth. Vaginal breech birth increases low Apgar scores and short-term neonatal complications; no increase in long-term morbidity has been shown.', refs: [{ guidelineId: R, locator: '§4.1' }] },
        { text: 'About 40% of planned vaginal breech births end in emergency caesarean (range 29–45%). Planned caesarean modestly increases short-term maternal morbidity (RR 1.29) and affects future pregnancies (scar rupture about 0.5% in VBAC; invasive placenta 0.31% after one caesarean rising to 2.33% after four).', refs: [{ guidelineId: R, locator: '§4.2–4.3' }] },
        { heading: 'Higher-risk features for vaginal breech birth', text: 'Hyperextended fetal neck on ultrasound; estimated fetal weight over 3.8 kg or below the 10th centile; footling presentation; antenatal fetal compromise; another indication for caesarean. The role of pelvimetry is unclear. Do not recommend vaginal breech birth if experienced staff cannot be provided.', refs: [{ guidelineId: R, locator: '§5' }] },
      ],
    },
    {
      id: 'labour',
      title: 'Conduct of Vaginal Breech Birth',
      icon: 'delivery',
      body: [
        { heading: 'First stage', text: 'Induction is not usually recommended. Oxytocin augmentation only for infrequent contractions (fewer than 4 in 10 minutes) with an epidural. Consider caesarean for slow progress. Continuous EFM may improve outcomes; if declined, intermittent auscultation. No fetal blood sampling from the buttocks.', refs: [{ guidelineId: R, locator: '§6' }] },
        {
          text: 'Second stage and delivery.',
          refs: [{ guidelineId: R, locator: '§6.6–6.8' }],
          flow: {
            caption: 'Second stage of vaginal breech birth (RCOG)',
            steps: [
              { title: 'Passive second stage', text: 'Allow descent. If the breech is not visible within 2 hours, caesarean is normally recommended.' },
              { title: 'Hands off the breech', text: 'Semirecumbent or all-fours. No traction; hold by the pelvic girdle only; never hyperextend the neck. Episiotomy only if needed.', tone: 'action' },
              { title: 'Arms', text: 'Flex across the chest; Løvset’s manoeuvre for nuchal arms.', tone: 'action' },
              { title: 'Head', text: 'Mauriceau-Smellie-Veit or forceps, with suprapubic pressure for flexion. Burns-Marshall not advised.', tone: 'action' },
              { title: 'Intervene to expedite if', text: 'Poor fetal condition, more than 5 minutes from buttocks to head, or more than 3 minutes from umbilicus to head.', tone: 'urgent' },
            ],
          },
        },
        { heading: 'Head entrapment (mainly preterm)', text: 'Lateral cervical incisions at 2, 6 and 10 o’clock; at caesarean, extend the uterine incision.', refs: [{ guidelineId: R, locator: '§6.8' }] },
      ],
    },
    {
      id: 'special',
      title: 'Preterm Breech & Twins',
      icon: 'complications',
      body: [
        { text: 'Routine caesarean is not recommended for spontaneous preterm breech labour; individualise. It is not routinely recommended at 22 to 25+6 weeks. Planned caesarean is recommended when delivery is planned for maternal or fetal compromise.', refs: [{ guidelineId: R, locator: '§7' }] },
        { text: 'Routine caesarean for a breech second twin is not recommended, at term or preterm (Grade B).', refs: [{ guidelineId: R, locator: '§8' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Analgesia for ECV',
      entries: [
        { guidelineId: AC, text: 'Neuraxial with tocolysis is reasonable (Level B).' },
        { guidelineId: J, text: 'Anaesthesia generally best avoided.', locator: 'pp.407–408' },
      ],
    },
    {
      domain: 'ECV after previous caesarean',
      entries: [
        { guidelineId: S, text: 'After one caesarean, no greater risk.', locator: 'p.2' },
        { guidelineId: J, text: 'Listed as a contraindication.', locator: 'p.407' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. RCOG GTG 20a (ECV, 2017) could not be read; ECV timing, success, contraindications and risk figures come from a Scottish NHS guideline (2020) that states it is adapted from 20a. RCOG GTG 20b was read from a third-party copy of the 2017 PDF; the wording on a breech first twin was not confirmed and is left out. ACOG PB 221 was read only as a recommendation summary (no terbutaline dose, success rate or contraindication list); ACOG CO 745, NICE NG192, RANZCOG and SOGC not read. No FOGSI guideline on breech or ECV was found; the JOGI 2005 item is an editorial, not a guideline. Anti-D dose after ECV is not stated in the sources read: see the Rh isoimmunisation topic.',
};
