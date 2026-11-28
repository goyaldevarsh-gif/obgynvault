import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from FOGSI-ICOG GCPR Prevention and Management of Perineal Tear (2024), RCOG GTG 29 (2015,
 * mirror copy), NICE NG235 (1.9, 1.12), WHO intrapartum care 2018, NHS Lanarkshire OASIS guideline (2024) and the
 * OASI Care Bundle evaluation (BJOG 2020).
 */
const F = 'fogsi-perineal-2024';
const R = 'rcog-gtg-29';
const N = 'nice-ng235';
const W = 'who-intrapartum-2018';
const L = 'nhs-lanark-oasis-2024';
const B = 'oasi-care-bundle-2020';

export const perinealTearsOasis: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Every vaginal birth carries a risk of perineal injury, so examine the perineum systematically, including a rectal examination, after all vaginal births. Prevent severe tears with warm compresses and manual perineal protection in the second stage, and avoid routine episiotomy; when episiotomy is needed (operative birth, fetal compromise, high risk of severe tear) cut mediolaterally at about 60° at crowning. Repair first- and second-degree tears promptly with continuous non-locked absorbable synthetic sutures. Third- and fourth-degree tears (OASIS) should be repaired in theatre under regional or general anaesthesia by a trained clinician: mucosa with 3-0 polyglactin, internal sphincter separately without overlap, external sphincter end-to-end or overlapping. Afterwards give broad-spectrum antibiotics and laxatives, refer to physiotherapy, and review at 6–12 weeks; counsel about the next birth according to symptoms and anal sphincter tests.',
  keyPoints: [
    { text: 'Classification: 1st skin (FOGSI: and vaginal mucosa); 2nd perineal muscles; 3a under 50% of EAS; 3b over 50% of EAS; 3c EAS and IAS; 4th sphincter complex and anorectal mucosa. If in doubt, grade higher.', refs: [{ guidelineId: R, locator: '§4.1' }, { guidelineId: N, locator: '1.12.3' }, { guidelineId: F, locator: 'p.4, Table 1' }] },
    { text: 'Prevention: warm compress to the perineum in the second stage (RCOG grade A), consider perineal massage, manual perineal protection at crowning; no routine episiotomy.', refs: [{ guidelineId: R, locator: '§5.2' }, { guidelineId: N, locator: '1.9.13–1.9.16' }, { guidelineId: W, locator: 'Recs 38–39' }, { guidelineId: F, locator: 'pp.4–5' }] },
    { text: 'Episiotomy when indicated: mediolateral, 60° from the midline at crowning (NICE: 45–60° to the vertical), with effective analgesia first.', refs: [{ guidelineId: R, locator: '§5.2' }, { guidelineId: N, locator: '1.9.21–1.9.23' }, { guidelineId: B, locator: 'p.3' }] },
    { text: 'Examine every woman after vaginal birth, including a rectal examination, to detect sphincter injury.', refs: [{ guidelineId: R, locator: '§6.1' }, { guidelineId: N, locator: '1.12.5–1.12.7' }, { guidelineId: F, locator: 'p.6' }] },
    { text: 'OASIS repair in theatre under regional or general anaesthesia by a trained clinician; IAS repaired separately without overlap; full-thickness EAS end-to-end or overlapping (equivalent outcomes).', refs: [{ guidelineId: R, locator: '§7' }, { guidelineId: F, locator: 'pp.6–7' }] },
    { text: 'After OASIS repair: broad-spectrum antibiotics, laxatives (no bulking agents routinely), physiotherapy, and review at 6–12 weeks, ideally in a perineal clinic.', refs: [{ guidelineId: R, locator: '§10.1' }, { guidelineId: F, locator: 'pp.6, 8' }] },
    { text: 'Next birth: counsel and document. Offer elective caesarean to women with symptoms or abnormal endoanal ultrasound or manometry; others can aim for vaginal birth.', refs: [{ guidelineId: R, locator: '§12.1' }, { guidelineId: F, locator: 'p.8' }, { guidelineId: L }] },
  ],
  sections: [
    {
      id: 'stepwise',
      title: 'Step-by-step After Every Vaginal Birth',
      icon: 'management',
      body: [
        {
          text: 'Assessment and repair pathway.',
          refs: [{ guidelineId: N, locator: '1.12' }, { guidelineId: R }, { guidelineId: F, locator: 'pp.5–8' }],
          flow: {
            caption: 'Perineal assessment and repair',
            steps: [
              { title: 'Explain and consent', text: 'Systematic examination with good light and analgesia, including PV and rectal examination. Do not disturb bonding unless bleeding is urgent.', tone: 'start' },
              { title: 'Degree of tear', tone: 'decision', branches: [
                { when: '1st degree', then: 'Suture unless skin edges are well opposed (FOGSI: may leave if not bleeding and anatomy intact)' },
                { when: '2nd degree', then: 'Repair in the room: continuous non-locked absorbable suture to vagina and muscle; subcuticular skin if needed' },
                { when: '3rd or 4th degree', then: 'Theatre, regional or general anaesthesia, trained clinician' },
              ] },
              { title: 'OASIS repair', text: 'Mucosa → IAS (separately, no overlap) → EAS (end-to-end or overlap) → perineal muscles → vagina → skin. Rectal examination after repair. Document.', tone: 'action' },
              { title: 'After OASIS', text: 'Antibiotics, laxatives, analgesia, physiotherapy, debrief; review at 6–12 weeks.' },
            ],
          },
        },
      ],
    },
    {
      id: 'prevention',
      title: 'Prevention & Episiotomy',
      icon: 'prevention',
      body: [
        { text: 'Warm compresses in the second stage reduce OASIS (RCOG grade A); NICE: apply a warm wet compress and continue until birth. Consider perineal massage with a water-soluble lubricant. FOGSI also suggests antenatal perineal massage in the third trimester.', refs: [{ guidelineId: R, locator: '§5.2' }, { guidelineId: N, locator: '1.9.13–1.9.14' }, { guidelineId: F, locator: 'pp.4–5' }] },
        { text: 'Manual perineal protection at crowning can be protective (RCOG) and reduces severity (FOGSI). WHO recommends massage, warm compresses and hands-on guarding according to the woman’s preference.', refs: [{ guidelineId: R, locator: '§5.2' }, { guidelineId: F, locator: 'p.5' }, { guidelineId: W, locator: 'Rec 38' }] },
        { heading: 'Episiotomy indications', text: 'Not routine in spontaneous birth. Indications: operative vaginal birth, suspected fetal compromise, high risk of severe tear, soft-tissue dystocia, female genital mutilation (FOGSI). OASI bundle: always with forceps; with vacuum in first births; may be omitted in multiparae.', refs: [{ guidelineId: N, locator: '1.9.16, 1.9.22' }, { guidelineId: W, locator: 'Rec 39' }, { guidelineId: F, locator: 'pp.4–5 (Level A–B)' }, { guidelineId: B, locator: 'p.3' }] },
        { heading: 'Technique', text: 'Mediolateral from the fourchette, usually to the right: 60° from the midline when the perineum is distended (RCOG, OASI bundle); NICE 45–60° to the vertical. Give effective analgesia first except in an emergency.', refs: [{ guidelineId: R, locator: '§5.2' }, { guidelineId: N, locator: '1.9.21, 1.9.23' }, { guidelineId: B, locator: 'p.3' }] },
        { heading: 'OASI Care Bundle', text: 'Antenatal information at 32–36 weeks; manual perineal protection at all singleton vaginal births unless declined; mediolateral episiotomy at 60° when indicated; systematic examination including PR after every vaginal birth. In a UK multicentre study OASI fell from 3.3% to 3.0% (aOR 0.80) with no change in caesarean rate.', refs: [{ guidelineId: B, locator: 'pp.1–4' }] },
      ],
    },
    {
      id: 'minor-repair',
      title: 'First- & Second-degree Repair',
      icon: 'surgery',
      body: [
        { text: 'Repair as soon as possible to reduce infection and blood loss. Analgesia: up to 20 mL of 1% lidocaine, or epidural top-up or spinal.', refs: [{ guidelineId: N, locator: '1.12.13–1.12.14' }] },
        { text: 'Use continuous non-locked absorbable synthetic sutures for the vaginal wall and muscle (FOGSI: polyglactin, continuous for all layers). Leave well-opposed skin unsutured; otherwise continuous subcuticular.', refs: [{ guidelineId: N, locator: '1.12.17–1.12.21' }, { guidelineId: F, locator: 'pp.5–6' }] },
        { text: 'Offer rectal NSAIDs after repair unless contraindicated.', refs: [{ guidelineId: N, locator: '1.12.22' }] },
      ],
    },
    {
      id: 'oasis-repair',
      title: 'OASIS Repair',
      icon: 'surgery',
      body: [
        {
          text: 'Layer-by-layer repair.',
          refs: [{ guidelineId: R, locator: '§7' }, { guidelineId: F, locator: 'p.7' }, { guidelineId: L }],
          table: {
            columns: ['Layer', 'Technique', 'Suture'],
            rows: [
              ['Anorectal mucosa', 'Continuous or interrupted', 'RCOG 3-0 polyglactin; FOGSI 2-0 or 3-0 polyglactin'],
              ['Internal anal sphincter', 'Separately, interrupted or mattress, no overlap', 'NHS Lanarkshire: 3-0 PDS or equivalent'],
              ['External anal sphincter', 'Full thickness: end-to-end or overlap. Partial (3a, some 3b): end-to-end', '3-0 PDS or 2-0 polyglactin (equivalent)'],
              ['Perineal muscles, vagina, skin', 'Knots buried under superficial perineal muscles; vagina continuous', 'FOGSI: 2-0 polyglactin'],
            ],
          },
        },
        { text: 'Avoid figure-of-eight sutures. Perform a rectal examination after repair. Document the structures involved, technique and sutures. FOGSI allows repair in the delivery room in certain circumstances after discussion with a senior obstetrician.', refs: [{ guidelineId: R, locator: '§7, 13.1' }, { guidelineId: F, locator: 'pp.6–8' }] },
      ],
    },
    {
      id: 'aftercare',
      title: 'Care After OASIS',
      icon: 'drug',
      body: [
        { heading: 'Antibiotics', text: 'Broad-spectrum antibiotics (FOGSI grade A; drug not named). NHS Lanarkshire: co-amoxiclav 1.2 g IV once, then 375 mg orally 8-hourly for 7 days; if penicillin allergic, clindamycin 600 mg IV once, then 150 mg 6-hourly for 7 days.', refs: [{ guidelineId: R, locator: '§10.1' }, { guidelineId: F, locator: 'p.8' }, { guidelineId: L }] },
        { heading: 'Laxatives', text: 'Reduce wound dehiscence; no routine bulking agents with them. FOGSI: start after 48 hours. NHS Lanarkshire: 2 weeks of lactulose 10 mL twice daily or ispaghula 1 sachet twice daily.', refs: [{ guidelineId: R, locator: '§10.1' }, { guidelineId: F, locator: 'pp.6, 8' }, { guidelineId: L }] },
        { heading: 'Other care', text: 'Analgesics and anti-inflammatories. Catheter out at 24 hours or once mobile (NHS Lanarkshire). Physiotherapy may help (RCOG); review before discharge (NHS Lanarkshire). FOGSI also advises sitz baths and a wound check at 7–10 days.', refs: [{ guidelineId: F, locator: 'pp.6, 8' }, { guidelineId: R, locator: '§10.1' }, { guidelineId: L }] },
        { heading: 'Follow-up', text: 'Review at 6–12 weeks, ideally in a perineal clinic with endoanal ultrasound and manometry; refer to a urogynaecologist or colorectal surgeon if incontinence or pain persists. 60–80% are asymptomatic at 12 months after EAS repair.', refs: [{ guidelineId: R, locator: '§10.1, 11.1' }, { guidelineId: F, locator: 'p.8' }] },
      ],
    },
    {
      id: 'next-birth',
      title: 'Next Birth',
      icon: 'counselling',
      body: [
        { text: 'Counsel about mode of birth and document it. Women with symptoms or abnormal endoanal ultrasound or manometry should be counselled about elective caesarean. Episiotomy only if clinically indicated (NICE: not routinely after previous severe trauma).', refs: [{ guidelineId: R, locator: '§12.1' }, { guidelineId: F, locator: 'p.8' }, { guidelineId: N, locator: '1.9.18' }] },
        { text: 'Recurrence about 6–8%, so asymptomatic women can aim for vaginal birth (NHS Lanarkshire). NICE: risk of repeat severe trauma is not higher than in a first birth. RCOG gives no numeric manometry or ultrasound cut-off in its recommendations.', refs: [{ guidelineId: L }, { guidelineId: N, locator: '1.9.17' }, { guidelineId: R, locator: '§12.1' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Episiotomy angle',
      entries: [
        { guidelineId: R, text: '60° from midline, perineum distended.', locator: '§5.2' },
        { guidelineId: N, text: '45–60° to the vertical axis.', locator: '1.9.21' },
      ],
    },
    {
      domain: 'Where to repair OASIS',
      entries: [
        { guidelineId: R, text: 'Operating theatre.', locator: '§7' },
        { guidelineId: F, text: 'Theatre; delivery room in some cases with senior agreement.', locator: 'p.6' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. RCOG GTG 29 (2015) was read from a mirror copy; grades could not be matched to every recommendation. The OASI Care Bundle content comes from its BJOG 2020 evaluation, not the bundle manual. Antibiotic drug and laxative regimen come only from NHS Lanarkshire. FOGSI second-degree definition not captured. Not read: ACOG PB 198, MoHFW SBA/LaQshya/Dakshata.',
};
