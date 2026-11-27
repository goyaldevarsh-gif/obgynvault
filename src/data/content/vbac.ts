import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from:
 *  - FOGSI–ICOG GCPR Birth after Caesarean Section (~2024) -> fogsi-vbac-gcpr
 *  - RCOG GTG 45 (2nd edn, 2015)                          -> rcog-gtg-45
 *  - NICE NG192 Caesarean birth (2021/2024); NG121 (2019)  -> nice-ng192, nice-ng121
 *  - FIGO good practice recommendations on VBAC (2025)     -> figo-vbac-2025
 *  - AAFP 2015 guideline summary (ACOG PB 205 not read)    -> aafp-vbac-2015
 *  - WHO 2011 induction recommendations                    -> who-iol-2011
 */
const F = 'fogsi-vbac-gcpr';
const R = 'rcog-gtg-45';
const N = 'nice-ng192';
const N121 = 'nice-ng121';
const FG = 'figo-vbac-2025';
const AF = 'aafp-vbac-2015';
const W = 'who-iol-2011';

export const vbac: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Most women with one previous lower-segment caesarean, a singleton cephalic pregnancy at term and no contraindication can be offered a planned vaginal birth after caesarean (VBAC). Success is about 72–75%, rising to 85–90% after a previous vaginal birth; the main risk is uterine rupture, about 1 in 200 (0.5%). Labour must be in a unit with continuous electronic fetal monitoring, immediate caesarean capability and on-site blood. Spontaneous labour is safest; induction or augmentation raises rupture risk 2–3-fold, misoprostol must not be used, mechanical ripening is preferred, and oxytocin is used cautiously. An abnormal CTG, usually a prolonged deceleration, is the most consistent sign of rupture. If a repeat caesarean is chosen, plan it after 39+0 weeks.',
  keyPoints: [
    { text: 'Offer planned VBAC to women with one previous lower-segment caesarean and a singleton cephalic pregnancy at term, after counselling and shared decision-making (use a VBAC checklist).', refs: [{ guidelineId: F, locator: 'TOLAC, Patient selection (Grade B)' }, { guidelineId: R, locator: '6.1, 7.1' }, { guidelineId: FG, locator: 'Rec 5' }] },
    { text: 'Contraindicated: previous classical or inverted-T/J scar, previous uterine rupture, myomectomy entering the cavity, placenta praevia and other contraindications to vaginal birth.', refs: [{ guidelineId: F, locator: 'TOLAC (Grade C)' }, { guidelineId: R, locator: '6.2' }, { guidelineId: FG, locator: 'Rec 9' }] },
    { text: 'Counsel: success 72–75% (85–90% after a previous vaginal birth); uterine rupture about 0.5% (1 in 200); worst outcomes occur when TOLAC ends in emergency caesarean. Agree the plan by 36 weeks.', refs: [{ guidelineId: R, locator: '7.2–7.4' }, { guidelineId: F, locator: 'Counselling (Grade B–C)' }] },
    { text: 'Labour setting: continuous electronic fetal monitoring from regular contractions, immediate caesarean (within 30 minutes), blood bank and neonatal resuscitation on site; senior obstetrician, anaesthetist and paediatrician available.', refs: [{ guidelineId: F, locator: 'Setting (Grade B–C)' }, { guidelineId: R, locator: '8.1' }, { guidelineId: N, locator: '1.8.3' }, { guidelineId: FG, locator: 'Rec 28–29' }] },
    { text: 'Induction or augmentation raises rupture risk 2–3-fold. Use mechanical methods (Foley, amniotomy) for ripening; do not use misoprostol; keep oxytocin below 20 mU/min (higher doses raise rupture risk 4-fold or more).', refs: [{ guidelineId: F, locator: 'Induction of labour (Grade C)' }, { guidelineId: R, locator: '8.2' }, { guidelineId: W, locator: 'Rec 10' }, { guidelineId: FG, locator: 'Rec 23–25' }] },
    { text: 'Suspect rupture with an abnormal CTG (most often a prolonged deceleration), pain persisting between contractions, scar tenderness, maternal tachycardia or shock, bleeding, haematuria, loss of station or contractions stopping.', refs: [{ guidelineId: F, locator: 'Signs of rupture (GPP)' }, { guidelineId: R, locator: '8.1' }, { guidelineId: FG, locator: '§7.2, Rec 29' }] },
    { text: 'Planned repeat caesarean after one LSCS: after 39+0 weeks. FOGSI gives earlier timings for other scars (multiple low transverse 38 weeks, classical 36–37 weeks, previous rupture 34–35 weeks).', refs: [{ guidelineId: N, locator: '1.4.1' }, { guidelineId: R, locator: '9.1' }, { guidelineId: F, locator: 'ERCS (Level A)' }] },
    { text: 'Two previous caesareans: RCOG allows VBAC after senior counselling; FOGSI only in active or advanced labour and recommends repeat caesarean in low-resource settings; FIGO generally does not recommend it. Three or more: FIGO recommends planned repeat caesarean.', refs: [{ guidelineId: R, locator: '6.3' }, { guidelineId: F, locator: 'TOLAC p5; ERCS p9 (GPP)' }, { guidelineId: FG, locator: 'Rec 6–7' }] },
  ],
  sections: [
    {
      id: 'selection',
      title: 'Who Can Have VBAC',
      icon: 'risk',
      body: [
        { heading: 'Suitable', text: 'Singleton, cephalic, at term (37+0 weeks or more), one previous lower-segment caesarean, no contraindication to vaginal birth.', refs: [{ guidelineId: R, locator: '6.1' }, { guidelineId: F, locator: 'Grade B' }, { guidelineId: FG, locator: 'Rec 5' }] },
        { heading: 'Contraindicated', text: 'Previous classical scar or uterine rupture (recurrent rupture risk 5% or more); complex scars (inverted-T/J); myomectomy entering the cavity; placenta praevia; repaired VVF; cephalopelvic disproportion. RCOG: caution with low vertical incisions or significant extension.', refs: [{ guidelineId: F, locator: 'Grade C' }, { guidelineId: R, locator: '6.2' }, { guidelineId: FG, locator: 'Rec 9' }, { guidelineId: AF }] },
        { heading: 'Inter-delivery interval', text: 'FOGSI and FIGO: an interval of at least 18 months is ideal; under 18 months triples rupture risk (FOGSI). RCOG: under 12 months is a risk factor to weigh but not a contraindication.', refs: [{ guidelineId: F, locator: 'Grade C' }, { guidelineId: FG, locator: 'Rec 11' }, { guidelineId: R, locator: '6.4' }] },
        { heading: 'Big baby', text: 'FIGO: 4000 g or more lowers success; offer planned repeat caesarean when the estimated fetal weight is over 4500 g.', refs: [{ guidelineId: FG, locator: 'Rec 2–3' }] },
        { text: 'Routine measurement of lower-segment scar thickness is not recommended.', refs: [{ guidelineId: FG, locator: 'Rec 13' }, { guidelineId: F }] },
      ],
    },
    {
      id: 'counselling',
      title: 'Counselling',
      icon: 'diagnosis',
      body: [
        { text: 'Success of planned VBAC 72–75%; previous vaginal birth (especially VBAC) is the best predictor, at 85–90%. FIGO quotes 60–80%.', refs: [{ guidelineId: R, locator: '7.3–7.4' }, { guidelineId: F }, { guidelineId: FG }] },
        { text: 'Less likely to succeed: no previous vaginal birth, previous caesarean for dystocia, induction, obesity, older age, hypertension, diabetes, baby 4 kg or more. More likely: previous vaginal birth, previous caesarean for breech or fetal distress, spontaneous labour, favourable Bishop score.', refs: [{ guidelineId: F, locator: 'Counselling' }] },
        { text: 'Uterine rupture: about 0.5% (20–50 per 10,000) with VBAC vs about 2 per 10,000 with repeat caesarean. RCOG Table 1: spontaneous labour 0.15–0.4%, induced 0.54–1.4%, augmented 0.9–1.91%.', refs: [{ guidelineId: R, locator: '7.2, Table 1' }, { guidelineId: F, locator: 'Grade B' }] },
        { text: 'Maternal death is lower with VBAC (about 4 vs 13 per 100,000), but delivery-related perinatal death is higher (about 4 vs 1 per 10,000). Repeat caesareans raise future praevia and accreta risk.', refs: [{ guidelineId: R, locator: '7' }, { guidelineId: N121, locator: '1.19.2' }] },
        { text: 'NICE: for women with up to 4 caesareans, fever, bladder and surgical injury risks do not differ by planned mode of birth, but uterine rupture is higher with planned vaginal birth.', refs: [{ guidelineId: N, locator: '1.8.2' }] },
        { text: 'Use a VBAC checklist and give written information; agree the final decision by 36+0 weeks and plan for labour starting before a booked caesarean.', refs: [{ guidelineId: F, locator: 'Grade B, GPP' }, { guidelineId: R, locator: '7.1' }] },
      ],
    },
    {
      id: 'labour',
      title: 'Managing VBAC Labour',
      icon: 'management',
      body: [
        { heading: 'Where', text: 'A suitably staffed delivery suite with immediate caesarean (within 30 minutes), on-site blood transfusion and advanced neonatal resuscitation.', refs: [{ guidelineId: F, locator: 'Grade B' }, { guidelineId: R, locator: '8.1' }, { guidelineId: N, locator: '1.8.3' }, { guidelineId: FG, locator: 'Rec 28' }] },
        { heading: 'Monitoring', text: 'Continuous electronic fetal monitoring from the onset of regular contractions for the whole labour; one-to-one care (FIGO).', refs: [{ guidelineId: F, locator: 'Grade C' }, { guidelineId: R, locator: '8.1' }, { guidelineId: FG, locator: 'Rec 29' }] },
        { heading: 'IV access and bloods', text: 'RCOG and FOGSI: IV access with full blood count and group and save. NICE NG121 differs: do not routinely insert a cannula.', refs: [{ guidelineId: R, locator: '8.1' }, { guidelineId: F }, { guidelineId: N121, locator: '1.19.1' }] },
        { heading: 'Analgesia', text: 'Epidural is not contraindicated. FOGSI: a rising need for analgesia should raise suspicion of rupture.', refs: [{ guidelineId: R, locator: '8.1' }, { guidelineId: F }, { guidelineId: N121, locator: '1.19.7–1.19.8' }] },
        { heading: 'Timing', text: 'It is safe to wait until 40 weeks for spontaneous labour (FOGSI). FIGO: if induction is needed, between 39 and 41 weeks.', refs: [{ guidelineId: F, locator: 'Grade B' }, { guidelineId: FG, locator: 'Rec 22' }] },
        { heading: 'Amniotomy', text: 'NICE NG121: do not routinely offer amniotomy in labour after a previous caesarean.', refs: [{ guidelineId: N121, locator: '1.19.9' }] },
        { heading: 'After birth', text: 'Active management of the third stage. Routine exploration of the scar is not recommended.', refs: [{ guidelineId: F, locator: 'Grade B' }] },
      ],
    },
    {
      id: 'induction',
      title: 'Induction & Augmentation',
      icon: 'drug',
      body: [
        { text: 'Induction raises rupture risk 2–3-fold and caesarean about 1.5-fold compared with spontaneous labour; it also lowers VBAC success.', refs: [{ guidelineId: R, locator: '8.2' }, { guidelineId: F, locator: 'Grade C' }, { guidelineId: FG, locator: 'Rec 21' }] },
        { heading: 'Ripening', text: 'Mechanical methods (transcervical Foley, amniotomy) are safer and recommended. Misoprostol must not be used (WHO, FOGSI, FIGO, AAFP). Prostaglandins in general raise rupture risk (0.87% vs 0.29%); FOGSI says evidence on dinoprostone is unclear.', refs: [{ guidelineId: F, locator: 'Induction of labour' }, { guidelineId: FG, locator: 'Rec 23–24' }, { guidelineId: W, locator: 'Rec 10' }, { guidelineId: R, locator: '8.2' }, { guidelineId: AF }] },
        { heading: 'Oxytocin', text: 'Not contraindicated for induction or augmentation (FIGO), but it increases rupture risk (NICE). Avoid doses above 20 mU/min, which raise rupture risk 4-fold or more. Monitor closely with immediate caesarean available.', refs: [{ guidelineId: FG, locator: 'Rec 25' }, { guidelineId: N121, locator: '1.19.5' }, { guidelineId: R, locator: '8.2' }, { guidelineId: F }, { guidelineId: N, locator: '1.8.4' }] },
      ],
    },
    {
      id: 'rupture',
      title: 'Uterine Rupture: Recognise & Act',
      icon: 'emergency',
      body: [
        { text: 'An abnormal CTG, usually a prolonged deceleration, is the most consistent finding (75–80% of cases).', refs: [{ guidelineId: F }, { guidelineId: R, locator: '8.1' }, { guidelineId: FG, locator: 'Rec 29' }] },
        { text: 'Other signs: severe abdominal pain persisting between contractions, acute scar tenderness, maternal tachycardia, hypotension or shock, vaginal bleeding, haematuria, cessation of contractions, loss of station. The classic triad appears in under 10%; dehiscence may be silent in up to 48%.', refs: [{ guidelineId: F, locator: 'GPP' }, { guidelineId: R, locator: '8.1' }, { guidelineId: FG, locator: '§7.2' }] },
        { text: 'Suspected rupture is an emergency: immediate category 1 caesarean (NICE NG207), with senior obstetric, anaesthetic and neonatal teams.', refs: [{ guidelineId: 'nice-ng207', locator: '1.7.7' }, { guidelineId: F }] },
      ],
    },
    {
      id: 'ercs',
      title: 'Planned Repeat Caesarean',
      icon: 'delivery',
      body: [
        { text: 'Do not routinely plan caesarean before 39 weeks (neonatal respiratory morbidity). Waiting from 38 to 39 weeks lowers transient tachypnoea from about 6% to 1%.', refs: [{ guidelineId: N, locator: '1.4.1' }, { guidelineId: R, locator: '9.1' }] },
        {
          text: 'FOGSI timing by previous uterine surgery:',
          refs: [{ guidelineId: F, locator: 'ERCS (Level A)' }],
          table: {
            columns: ['Previous surgery', 'Planned caesarean'],
            rows: [
              ['One LSCS', '39+0 weeks'],
              ['Multiple low transverse', '38+0 to 38+6 weeks'],
              ['Low vertical', '37+0 to 37+6 weeks'],
              ['Classical', '36+0 to 37+0 weeks'],
              ['Previous rupture', '34+0 to 35+0 weeks'],
            ],
          },
        },
        { text: 'Indications for repeat caesarean (FOGSI): previous rupture, classical caesarean, inverted-T/J scar. FOGSI recommends repeat caesarean after two or more caesareans in low-resource settings; FIGO after three or more.', refs: [{ guidelineId: F, locator: 'ERCS' }, { guidelineId: FG, locator: 'Rec 7' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'VBAC after two caesareans',
      entries: [
        { guidelineId: F, text: 'Only in active/advanced labour after counselling; ERCS in low-resource settings.', locator: 'p5, p9' },
        { guidelineId: R, text: 'May be offered after senior counselling (success 71%, rupture 1.36%).', locator: '6.3' },
        { guidelineId: FG, text: 'Generally not recommended; only in some high-resource facilities.', locator: 'Rec 6' },
        { guidelineId: AF, text: 'Practical and safe for most women with one or two caesareans.' },
      ],
    },
    {
      domain: 'Cervical ripening after caesarean',
      entries: [
        { guidelineId: F, text: 'Mechanical safer; misoprostol contraindicated; dinoprostone evidence unclear.' },
        { guidelineId: R, text: 'Mechanical lower risk; prostaglandins raise rupture risk.', locator: '8.2' },
        { guidelineId: FG, text: 'Foley or amniotomy recommended; no misoprostol.', locator: 'Rec 23–24' },
        { guidelineId: W, text: 'Misoprostol not recommended; balloon may be preferred.', locator: 'Rec 10' },
      ],
    },
    {
      domain: 'IV cannula in labour',
      entries: [
        { guidelineId: R, text: 'IV access, FBC, group and save.', locator: '8.1' },
        { guidelineId: F, text: 'IV access, FBC, group and cross-match.' },
        { guidelineId: N121, text: 'Do not routinely insert a cannula.', locator: '1.19.1' },
      ],
    },
  ],
  editorNote:
    'Sources read on 28 Nov 2026 through a summarising fetch tool; check quotes against the originals. FOGSI–ICOG GCPR "Birth after Caesarean Section" has no printed date (file stamped April 2024); page numbers are approximate and its VBAC score and checklist annexures were not extracted. RCOG GTG 45 (2015) was read in full but evidence grades could not be matched to statements; RCOG says an update is in development. NICE NG192 was read from the PDF; recs 1.8.4–1.8.5 were partly paraphrased and Appendix A was not seen. The current status of NICE NG121 was not confirmed. ACOG Practice Bulletin 205 (2019) could not be accessed; ACOG-related content comes from a 2015 AAFP summary. FIGO 2025 recommendations are ungraded. No MoHFW or ICOG VBAC guidance was found.',
};
