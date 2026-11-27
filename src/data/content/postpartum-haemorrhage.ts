import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI–FIGO PPH Management Protocol 2025 (full PDF read)          -> fogsi-pph
 *  - WHO/FIGO/ICM consolidated PPH guideline 2025 (WHO news release)  -> who-pph-2025
 *  - MoHFW Guidance Note on PPH, Dec 2015 (pp.1–9 read verbatim)      -> mohfw-pph
 *  - RCOG GTG 52 (summary page only; full text inaccessible)          -> rcog-gtg-52
 *  - ACOG PB 183 (published summary paragraph only)                   -> acog-pb-183
 */
const F = 'fogsi-pph';
const W = 'who-pph-2025';
const M = 'mohfw-pph';
const R = 'rcog-gtg-52';
const A = 'acog-pb-183';

export const postpartumHaemorrhage: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Postpartum haemorrhage is the leading cause of maternal death worldwide. Recent guidance has moved from visual estimates to measured blood loss and from step-by-step escalation to an immediate first-response bundle. The 2025 WHO/FIGO/ICM guideline asks clinicians to act from 300 mL when vital signs are abnormal, and the 2025 FOGSI–FIGO protocol applies this with calibrated drapes, the obstetric shock index and a single medical, mechanical and surgical pathway.',
  keyPoints: [
    { text: 'Measure, do not guess: calibrated drapes with trigger points at 300 mL and 500 mL', refs: [{ guidelineId: W }, { guidelineId: F, locator: 'Blood loss measurement' }] },
    { text: 'Act at 300 mL if vital signs are abnormal; ≥500 mL remains the traditional threshold', refs: [{ guidelineId: W }, { guidelineId: R }] },
    { text: 'MOTIVE bundle at diagnosis: Massage, Oxytocics, Tranexamic acid, IV fluids, Vaginal/genital tract examination, Escalation', refs: [{ guidelineId: W }] },
    { text: 'Oxytocin is the uterotonic of choice for prevention (AMTSL); heat-stable carbetocin is an alternative', refs: [{ guidelineId: M, locator: 'p.3' }, { guidelineId: W }] },
    { text: 'Escalate early: tamponade, NASG or compression as temporising measures, then surgery', refs: [{ guidelineId: F, locator: 'Mechanical & surgical' }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Definition & Classification',
      icon: 'definition',
      body: [
        { text: 'RCOG: primary PPH is loss of 500 mL or more from the genital tract within 24 hours of birth. Minor 500–1000 mL; major >1000 mL, subdivided into moderate (1000–2000 mL) and severe (>2000 mL).', refs: [{ guidelineId: R, locator: 'Summary' }] },
        { text: 'WHO/FIGO/ICM 2025: in addition to the traditional ≥500 mL, act when blood loss reaches 300 mL with any abnormal vital signs.', refs: [{ guidelineId: W }] },
        { text: 'FOGSI 2025: ≥500 mL after vaginal birth, >1000 mL after caesarean, or any blood loss with potential to cause haemodynamic instability.', refs: [{ guidelineId: F, locator: 'Definition' }] },
        { text: 'ACOG: cumulative blood loss ≥1000 mL, or blood loss with signs or symptoms of hypovolaemia, within 24 hours of birth.', refs: [{ guidelineId: A, locator: 'Summary' }] },
        { text: 'MoHFW: ≥500 mL within 24 hours after birth; massive or severe PPH ≥1000 mL.', refs: [{ guidelineId: M, locator: 'p.1' }] },
      ],
    },
    {
      id: 'risk-factors',
      title: 'Causes & Risk Factors',
      icon: 'risk',
      body: [
        { text: 'FOGSI organises risk factors and causes by the Four Ts: Tone, Trauma, Tissue and Thrombin.', refs: [{ guidelineId: F, locator: 'Risk factor table' }] },
        { text: 'ACOG notes the US PPH rate rose 26% between 1994 and 2006, mainly from increased uterine atony.', refs: [{ guidelineId: A, locator: 'Summary' }] },
        { text: 'WHO 2025 recommends treating anaemia in pregnancy with iron and folate, using IV iron when rapid correction is needed.', refs: [{ guidelineId: W }] },
      ],
    },
    {
      id: 'diagnosis',
      title: 'Recognition & Blood Loss Measurement',
      icon: 'diagnosis',
      body: [
        { text: 'Visual estimates are unreliable; MoHFW notes that blood loss after delivery is seldom measured in practice.', refs: [{ guidelineId: M, locator: 'p.2' }] },
        { text: 'Use calibrated drapes that collect and quantify blood loss, and monitor closely after birth.', refs: [{ guidelineId: W }] },
        { text: 'FOGSI: calibrated drapes or trays with trigger lines at 300 mL and 500 mL; otherwise weigh soaked items, subtract dry weight, and take 1 g as 1 mL.', refs: [{ guidelineId: F, locator: 'Blood loss measurement' }] },
        { text: 'Obstetric shock index (HR ÷ SBP): normal in pregnancy 0.7–0.9; ≥0.9 predicts need for transfusion; ≥1.4 needs urgent aggressive treatment; ≥1.7 is high risk.', refs: [{ guidelineId: F, locator: 'Shock classification' }] },
        { text: 'Bedside clotting test: no clot in 5–10 minutes suggests coagulation failure; over 10 minutes indicates hypofibrinogenaemia.', refs: [{ guidelineId: F, locator: 'Point-of-care test' }] },
      ],
    },
    {
      id: 'management',
      title: 'Prevention & Management',
      icon: 'management',
      body: [
        { text: 'Prevention: active management of the third stage with oxytocin is strongly recommended and reduces PPH by more than 60%. If oxytocin is unavailable, give oral misoprostol.', refs: [{ guidelineId: M, locator: 'p.3' }] },
        { text: 'WHO 2025: use a quality-assured uterotonic in the third stage, preferably oxytocin or heat-stable carbetocin; misoprostol as a last resort when IV options and cold chain are not available.', refs: [{ guidelineId: W }] },
        { text: 'Home births (India): ASHAs may distribute misoprostol 600 µg (one tablet orally) in advance for women likely to deliver at home. Controlled cord traction is not recommended without a skilled birth attendant.', refs: [{ guidelineId: M, locator: 'p.3, p.8–9' }] },
        { text: 'At diagnosis, start the MOTIVE bundle together: uterine massage, oxytocics, tranexamic acid, IV fluids, vaginal and genital tract examination, and escalation if bleeding continues.', refs: [{ guidelineId: W }] },
        { text: 'FOGSI medical management (doses as stated in source): tranexamic acid 1 g in 100 mL saline over 10 min; oxytocin 15 IU IV then 10–20 IU/h and/or misoprostol 800 µg; methylergometrine 0.2 mg IM/IV; carboprost 250 µg IM every 15 min, up to 8 doses.', refs: [{ guidelineId: F, locator: 'Medical management' }] },
        { text: 'Resuscitation (FOGSI): crystalloids, O-negative red cells as required; targets platelets >50 G/L, fibrinogen >1 g/L, MAP ≥50 mmHg, pH >7.2, Hb >85 g/L.', refs: [{ guidelineId: F, locator: 'Fluids & resuscitation' }] },
      ],
    },
    {
      id: 'complications',
      title: 'Escalation & Complications',
      icon: 'complications',
      body: [
        { text: 'Mechanical: uterine tamponade (balloon or suction device); temporising with NASG, manual aortic compression or bimanual compression. Also manual removal of placenta, curettage and genital tract repair as indicated.', refs: [{ guidelineId: F, locator: 'Mechanical & surgical' }] },
        { text: 'Surgical escalation if bleeding persists: uterine artery embolisation if stable, compression sutures, uterine or internal iliac artery ligation, and emergency hysterectomy.', refs: [{ guidelineId: F, locator: 'Mechanical & surgical' }] },
        { text: 'Complications include ARDS, shock, DIC, acute renal failure, loss of fertility and pituitary necrosis (Sheehan syndrome).', refs: [{ guidelineId: A, locator: 'Summary' }] },
      ],
    },
    {
      id: 'follow-up',
      title: 'After PPH',
      icon: 'followup',
      body: [
        { text: 'Correct anaemia after PPH with iron and folate; IV iron when rapid correction is needed.', refs: [{ guidelineId: W }] },
        { text: 'Secondary PPH (24 hours to 12 weeks) is not yet covered: the RCOG full text could not be accessed for this draft.', refs: [{ guidelineId: R }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Diagnostic threshold',
      entries: [
        { guidelineId: F, text: '≥500 mL vaginal, >1000 mL caesarean, or any loss threatening haemodynamic stability.' },
        { guidelineId: A, text: '≥1000 mL cumulative, or any loss with hypovolaemia, within 24 h.' },
        { guidelineId: R, text: '≥500 mL within 24 h; minor 500–1000, major >1000 mL.' },
        { guidelineId: W, text: '≥500 mL, and act at 300 mL with abnormal vital signs.' },
        { guidelineId: M, text: '≥500 mL within 24 h; severe ≥1000 mL.', locator: 'p.1' },
      ],
    },
    {
      domain: 'Prophylactic uterotonic',
      entries: [
        { guidelineId: W, text: 'Oxytocin or heat-stable carbetocin; misoprostol only as last resort.' },
        { guidelineId: M, text: 'Oxytocin first choice; oral misoprostol if oxytocin unavailable.', locator: 'p.3' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI–FIGO PPH Management Protocol (2025) in full; WHO/FIGO/ICM 2025 PPH guideline through the WHO news release (full guideline not yet read); MoHFW Guidance Note (2015) pages 1–9. RCOG GTG 52 full text (Wiley) and ACOG PB 183 recommendations were not accessible, so only their definitions are cited. RCOG says GTG 52 is being split into 52a (prevention) and 52b (management). Doses are quoted from the source for review only.',
};
