import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-28 from:
 *  - FOGSI–ICOG GCPR Induction of Labour (2018)           -> fogsi-iol-gcpr
 *  - MoHFW Guidance Note on Use of Uterotonics (2015)     -> mohfw-uterotonics-2015
 *  - NICE NG207 Inducing labour (2021, updated May 2026)  -> nice-ng207
 *  - WHO 2011 IOL recommendations; WHO 2022 timing, outpatient, mechanical -> who-iol-2011, who-iol-2022, who-iol-outpatient-2022, who-iol-mechanical-2022
 *  - ACOG CPG No. 9 Cervical ripening (2025); ACOG ARRIVE advisory (2018); AAFP 2024 late-term review -> acog-cpg-9, acog-arrive-2018, aafp-postterm-2024
 *  - FIGO misoprostol dosing chart (2023)                 -> figo-miso-2023
 */
const F = 'fogsi-iol-gcpr';
const M = 'mohfw-uterotonics-2015';
const N = 'nice-ng207';
const W11 = 'who-iol-2011';
const W22 = 'who-iol-2022';
const WO = 'who-iol-outpatient-2022';
const WM = 'who-iol-mechanical-2022';
const A9 = 'acog-cpg-9';
const AR = 'acog-arrive-2018';
const AF = 'aafp-postterm-2024';
const FG = 'figo-miso-2023';

export const inductionOfLabour: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Induction of labour (IOL) should be done only for a clear indication, after accurate dating, in a facility that can do a caesarean section and monitor the fetus. Indian guidance (MoHFW 2015, WHO) recommends induction for uncomplicated pregnancies once 41 weeks is reached with certainty, and not routinely before that; FOGSI 2018 and ACOG accept elective induction from 39 weeks in low-risk women where the setting is safe. Assess the cervix with the Bishop score. With an unfavourable cervix, ripen with prostaglandins (dinoprostone, or low-dose misoprostol) or a balloon catheter; with a favourable cervix, use amniotomy followed by oxytocin. Misoprostol is not approved by DCGI for induction (used off label) and is not used in women with a previous caesarean, where a balloon catheter followed by amniotomy and oxytocin is preferred. Watch continuously for tachysystole and fetal heart rate changes, and stop the uterotonic if they occur.',
  keyPoints: [
    { text: 'Uncomplicated pregnancy: induce once 41 weeks is reached with certainty (WHO, MoHFW). Routine induction before 41 weeks is not recommended by WHO; FOGSI and ACOG accept elective induction after 39 weeks in low-risk women.', refs: [{ guidelineId: W22, locator: 'Rec 1–2' }, { guidelineId: M, locator: 'p. 6' }, { guidelineId: F, locator: '§4.1' }, { guidelineId: AR }] },
    { text: 'Term PROM: induction is recommended (WHO, FOGSI). NICE offers a choice of induction or waiting up to about 24 hours, and immediate induction if GBS-positive.', refs: [{ guidelineId: W11, locator: 'Rec 5' }, { guidelineId: F, locator: '§4.2.1' }, { guidelineId: N, locator: '1.2.13–1.2.16' }] },
    { text: 'Do not induce for GDM alone before 41 weeks or for suspected macrosomia alone (WHO, MoHFW).', refs: [{ guidelineId: W11, locator: 'Rec 3–4' }, { guidelineId: M, locator: 'p. 6' }] },
    { text: 'Bishop score ≤6 (unfavourable): ripen the cervix with vaginal dinoprostone, low-dose misoprostol or a balloon catheter. Bishop >6: amniotomy plus IV oxytocin.', refs: [{ guidelineId: N, locator: '1.3.7–1.3.9' }, { guidelineId: F, locator: '§3, §6.1' }] },
    { text: 'Misoprostol (WHO, MoHFW): oral 25 mcg 2-hourly, or vaginal 25 mcg 6-hourly. It is not DCGI-approved for induction in India (off label).', refs: [{ guidelineId: W11, locator: 'Rec 8–9' }, { guidelineId: M, locator: 'p. 7' }, { guidelineId: F, locator: '§5.1.3' }] },
    { text: 'Previous caesarean: do not use misoprostol or prostaglandins. Use a balloon catheter for an unfavourable cervix, and amniotomy plus oxytocin when favourable.', refs: [{ guidelineId: W11, locator: 'Rec 10' }, { guidelineId: F, locator: '§4.2.8' }, { guidelineId: M, locator: 'p. 7, 9' }, { guidelineId: A9 }] },
    { text: 'Amniotomy alone is not recommended for induction.', refs: [{ guidelineId: W11, locator: 'Rec 7' }, { guidelineId: F, locator: '§6.2' }, { guidelineId: M, locator: 'p. 8' }] },
    { text: 'Hyperstimulation: stop oxytocin or remove the dinoprostone insert, give a tocolytic (betamimetic such as terbutaline), assess the fetus, and expedite birth if the FHR stays abnormal.', refs: [{ guidelineId: F, locator: '§9.1' }, { guidelineId: W11, locator: 'Rec 16' }, { guidelineId: N, locator: '1.7.1' }, { guidelineId: M, locator: 'p. 8' }] },
    { text: 'Induce only where caesarean section and continuous monitoring are available. MoHFW: outpatient induction should never be performed; WHO 2022 does not recommend it routinely.', refs: [{ guidelineId: M, locator: 'p. 6' }, { guidelineId: F, locator: '§2' }, { guidelineId: WO }] },
  ],
  sections: [
    {
      id: 'indications',
      title: 'Indications & Timing',
      icon: 'definition',
      body: [
        { heading: 'Uncomplicated pregnancy', text: 'WHO 2022: induction is recommended for women known with certainty to have reached 41 weeks (≥41+0); routine induction before 41 weeks is not recommended. Dating by one ultrasound before 24 weeks is advised.', refs: [{ guidelineId: W22, locator: 'Rec 1–2, remarks' }] },
        { text: 'MoHFW (2015): induction can be performed only when 41 weeks is known with certainty; induction at term is not recommended in normal pregnancies.', refs: [{ guidelineId: M, locator: 'p. 6' }] },
        { text: 'FOGSI GCPR §4.1: induction for a low-risk pregnancy only after 39 weeks. (Its background chapter separately advises induction at or beyond 41 weeks; the document is internally inconsistent.)', refs: [{ guidelineId: F, locator: '§4.1; pp. 34–35' }] },
        { text: 'NICE: give women every opportunity to go into spontaneous labour; explain that risks rise from 41+0 weeks and induction from then may reduce them. Offer extra fetal monitoring from 42 weeks if induction is declined.', refs: [{ guidelineId: N, locator: '1.2.1–1.2.7' }] },
        { text: 'ACOG (ARRIVE advisory): elective induction may be offered to low-risk nulliparous women at 39 weeks, depending on her values and the setting; non-medically indicated birth before 39+0 weeks is not appropriate. AAFP: consider induction from 41 weeks; recommended at 42 weeks.', refs: [{ guidelineId: AR }, { guidelineId: AF, locator: 'SORT' }] },
        { heading: 'Specific indications (FOGSI)', text: 'Term PROM (>37 weeks); preeclampsia at 37 weeks or earlier; GDM: not before 39 weeks if diet-controlled, 38 weeks if on insulin or oral agents; uncomplicated twins at 37 weeks; cholestasis at 37–38 weeks.', refs: [{ guidelineId: F, locator: '§4.2.1–4.2.6' }] },
        { text: 'MoHFW lists PROM at term, IUFD, FGR with fetal jeopardy, chorioamnionitis, eclampsia or severe preeclampsia, and abruption; GDM alone and suspected macrosomia are not indications.', refs: [{ guidelineId: M, locator: 'p. 6' }] },
        { heading: 'PPROM', text: 'NICE: do not induce before 34+0 weeks without another obstetric indication; at 34+0–37+0 weeks, share the decision between expectant management and induction; induce or deliver immediately if GBS-positive.', refs: [{ guidelineId: N, locator: '1.2.10–1.2.12' }] },
        { heading: 'Other situations', text: 'NICE: breech induction is not generally recommended unless birth must be expedited; do not induce with FGR and confirmed fetal compromise; do not routinely induce for a history of precipitate labour.', refs: [{ guidelineId: N, locator: '1.2.21–1.2.26' }] },
      ],
    },
    {
      id: 'contraindications',
      title: 'Contraindications',
      icon: 'risk',
      body: [
        { text: 'FOGSI: placenta or vasa praevia, cord presentation, transverse lie or footling breech, and a previous classical or inverted-T uterine incision.', refs: [{ guidelineId: F, locator: '§4.3' }] },
        { text: 'NICE: check scans for a low-lying placenta before a membrane sweep or induction.', refs: [{ guidelineId: N, locator: '1.7.6' }] },
      ],
    },
    {
      id: 'assessment',
      title: 'Before Induction',
      icon: 'diagnosis',
      body: [
        { text: 'Assess the cervix by vaginal examination and record the Bishop score. NICE uses ≤6 vs >6 to choose the method; ACOG notes thresholds of 3 to 8 have been used.', refs: [{ guidelineId: N, locator: '1.3.4, 1.3.7–1.3.9' }, { guidelineId: A9 }] },
        { text: 'FOGSI recommends a non-stress test before induction; NICE recommends CTG to confirm the absence of significant contractions, and CTG facilities wherever induction starts.', refs: [{ guidelineId: F, locator: '§7' }, { guidelineId: N, locator: '1.5.1–1.5.2' }] },
        { text: 'Induce only in a facility with caesarean capability (FOGSI; MoHFW: First Referral Unit or District Hospital).', refs: [{ guidelineId: F, locator: '§2' }, { guidelineId: M, locator: 'p. 6, Annexure II' }] },
      ],
    },
    {
      id: 'methods',
      title: 'Methods',
      icon: 'management',
      body: [
        { heading: 'Membrane sweep', text: 'Recommended to reduce formal induction (WHO). NICE: offer after 39+0 weeks with consent, and repeat if labour does not start. It only improves the chance of spontaneous labour (FOGSI).', refs: [{ guidelineId: W11, locator: 'Rec 15' }, { guidelineId: N, locator: '1.3.2–1.3.3' }, { guidelineId: F, locator: '§5.4' }] },
        { heading: 'Dinoprostone', text: 'FOGSI: gel 0.5 mg, repeat after 6 h, not more than 3 doses in 24 h; 10 mg pessary removed at 24 h, with oxytocin from 30 minutes after removal. ACOG: gel 0.5 mg every 6 h, maximum 3 doses; 10 mg insert for up to 12 h.', refs: [{ guidelineId: F, locator: '§5.1.1–5.1.2' }, { guidelineId: A9, locator: 'Box 1' }] },
        { heading: 'Misoprostol', text: 'WHO and MoHFW: oral 25 mcg every 2 hours, or low-dose vaginal 25 mcg every 6 hours. MoHFW: if no response after two 25 mcg doses, increase to 50 mcg 6-hourly; never more than 50 mcg at a time and not more than four doses (200 mcg total).', refs: [{ guidelineId: W11, locator: 'Rec 8–9' }, { guidelineId: M, locator: 'p. 7' }] },
        { text: 'Other regimens differ: ACOG gives oral 50–100 mcg every 4 h or 20–25 mcg every 2 h, and vaginal 25 mcg every 3–6 h; the FIGO 2023 chart gives vaginal 25–50 mcg every 4 h. Sublingual or buccal use is not recommended for viable pregnancies. Follow your unit protocol.', refs: [{ guidelineId: A9, locator: 'Box 1' }, { guidelineId: FG }] },
        { text: 'Misoprostol is not DCGI-approved for induction in India and is used off label.', refs: [{ guidelineId: F, locator: '§5.1.3' }] },
        { heading: 'Balloon catheter', text: 'Recommended by WHO (alone or with oxytocin), and useful when prostaglandins are contraindicated or to avoid hyperstimulation. FOGSI: leave until it falls out or for 24 h; avoid with placenta praevia or ruptured membranes. Mechanical methods cause less hyperstimulation than drugs (NICE).', refs: [{ guidelineId: WM, locator: 'Rec 1–2' }, { guidelineId: F, locator: '§5.2' }, { guidelineId: N, locator: '1.3.5, 1.3.8' }] },
        { heading: 'Amniotomy and oxytocin', text: 'Amniotomy alone is not recommended. With a favourable cervix (Bishop >6), offer amniotomy plus IV oxytocin; FOGSI starts oxytocin immediately or within 2 hours of amniotomy. WHO: if prostaglandins are unavailable, IV oxytocin alone may be used; NICE does not support oxytocin alone.', refs: [{ guidelineId: W11, locator: 'Rec 7' }, { guidelineId: N, locator: '1.3.9–1.3.10, 1.4.1' }, { guidelineId: F, locator: '§6.2' }] },
        { heading: 'Oxytocin regimens', text: 'FOGSI: low dose 1–2 mU/min, increased by 1–2 mU every 30 min; high dose 4–6 mU/min with 4–6 mU/min increments every 15–30 min; upper limit 40 mU/min. MoHFW: 2.5 IU in 500 mL at 10 drops/min, increased by 10 drops every 30 min (see the note for the full drip schedule).', refs: [{ guidelineId: F, locator: '§6.1' }, { guidelineId: M, locator: 'pp. 7–8' }] },
        { heading: 'Not recommended', text: 'NICE does not support castor oil, sexual intercourse or herbal supplements for induction.', refs: [{ guidelineId: N, locator: '1.4.2' }] },
      ],
    },
    {
      id: 'previous-cs',
      title: 'Previous Caesarean',
      icon: 'delivery',
      body: [
        { text: 'Misoprostol is not recommended (WHO, MoHFW) and is contraindicated with a uterine scar (ACOG). FOGSI contraindicates prostaglandins with a scarred uterus; NICE notes the marketing authorisations of dinoprostone and misoprostol contraindicate them with a scar.', refs: [{ guidelineId: W11, locator: 'Rec 10' }, { guidelineId: M, locator: 'p. 7' }, { guidelineId: A9 }, { guidelineId: F, locator: '§4.2.8' }, { guidelineId: N, locator: '1.2.17' }] },
        { text: 'Favourable cervix: amniotomy then oxytocin. Unfavourable cervix: transcervical balloon catheter (FOGSI, MoHFW, ACOG). NICE: if birth must be expedited, offer a choice of induction or planned caesarean, discussing the infection risk of mechanical methods.', refs: [{ guidelineId: F, locator: '§4.2.8' }, { guidelineId: M, locator: 'p. 9' }, { guidelineId: A9 }, { guidelineId: N, locator: '1.2.17–1.2.18' }] },
        { text: 'FIGO 2023: misoprostol is not recommended at ≥28 weeks with a prior caesarean.', refs: [{ guidelineId: FG }] },
      ],
    },
    {
      id: 'monitoring',
      title: 'Monitoring',
      icon: 'monitoring',
      body: [
        { text: 'Monitor contractions and the fetal heart rate continually during induction; women receiving uterotonics must never be left unattended (MoHFW). Track progress on a partogram (FOGSI).', refs: [{ guidelineId: M, locator: 'pp. 6–8' }, { guidelineId: F, locator: '§7' }] },
        { text: 'If the FHR is abnormal or contractions are excessive, give no further doses and remove any vaginal pessary or delivery system if possible.', refs: [{ guidelineId: N, locator: '1.5.3' }] },
        { text: 'Continuous CTG after membrane rupture if the presenting part is unstable.', refs: [{ guidelineId: N, locator: '1.7.5' }] },
      ],
    },
    {
      id: 'complications',
      title: 'Hyperstimulation & Failed Induction',
      icon: 'complications',
      body: [
        { heading: 'Tachysystole', text: 'More than 5 contractions in 10 minutes averaged over 30 minutes (FOGSI, ACOG). NICE (May 2026 PDF): 5 or more contractions per 10 minutes for at least 20 minutes; hypertonicity is a contraction lasting at least 2 minutes.', refs: [{ guidelineId: F, locator: 'Appendix A' }, { guidelineId: A9 }, { guidelineId: N, locator: 'Terms used' }] },
        { heading: 'Management', text: 'Stop oxytocin or remove the dinoprostone pessary; give a tocolytic (a betamimetic is preferred; WHO recommends betamimetics); expedite delivery if the FHR remains abnormal. MoHFW names terbutaline 250 mcg IV slowly over 5 minutes.', refs: [{ guidelineId: F, locator: '§9.1' }, { guidelineId: W11, locator: 'Rec 16' }, { guidelineId: M, locator: 'p. 8' }, { guidelineId: N, locator: '1.7.1' }] },
        { heading: 'Uterine rupture', text: 'If suspected, carry out an immediate category 1 caesarean birth.', refs: [{ guidelineId: N, locator: '1.7.7' }] },
        { heading: 'Failed induction', text: 'FOGSI: failure to achieve regular contractions (every 3 minutes) after one cycle of ripening. NICE: labour not starting after one cycle of treatment; options include rest and reassessment, expectant management, a further attempt, or caesarean. ACOG/ARRIVE: allow oxytocin for at least 12–18 hours after membrane rupture before calling it failed.', refs: [{ guidelineId: F, locator: 'Appendix A' }, { guidelineId: N, locator: '1.7.4' }, { guidelineId: AR }] },
      ],
    },
    {
      id: 'outpatient',
      title: 'Outpatient Induction',
      icon: 'management',
      body: [
        { text: 'India: MoHFW says outpatient induction should never be performed, and FOGSI requires admission to a facility with caesarean capability.', refs: [{ guidelineId: M, locator: 'p. 6' }, { guidelineId: F, locator: '§2, Appendix C' }] },
        { text: 'WHO 2022: routine outpatient induction is not recommended; it may be considered in a well-organised programme for women who live near the facility with good transport. NICE and ACOG consider outpatient ripening (dinoprostone or mechanical) for low-risk women with safety procedures in place.', refs: [{ guidelineId: WO }, { guidelineId: N, locator: '1.6.1–1.6.4' }, { guidelineId: A9 }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Routine induction, uncomplicated pregnancy',
      entries: [
        { guidelineId: F, text: 'Only after 39 weeks (§4.1); background text says ≥41 weeks.', locator: '§4.1' },
        { guidelineId: M, text: 'Only when 41 weeks is reached with certainty.', locator: 'p. 6' },
        { guidelineId: N, text: 'Discuss from 41+0 weeks; extra monitoring from 42 weeks if declined.', locator: '1.2.3–1.2.7' },
        { guidelineId: W22, text: 'Recommended at ≥41 weeks; not routinely before.', locator: 'Rec 1–2' },
        { guidelineId: AR, text: 'May offer elective induction to low-risk nulliparas at 39 weeks.' },
      ],
    },
    {
      domain: 'Oral misoprostol regimen',
      entries: [
        { guidelineId: W11, text: '25 mcg every 2 hours.', locator: 'Rec 8' },
        { guidelineId: M, text: '25 mcg every 2 hours.', locator: 'p. 7' },
        { guidelineId: N, text: 'Low-dose 25 mcg tablets; follow manufacturer guidance.', locator: '1.3.7' },
        { guidelineId: A9, text: '50–100 mcg every 4 h or 20–25 mcg every 2 h.', locator: 'Box 1' },
      ],
    },
    {
      domain: 'Outpatient induction',
      entries: [
        { guidelineId: M, text: 'Never.', locator: 'p. 6' },
        { guidelineId: WO, text: 'Not routinely; only within a well-organised programme.' },
        { guidelineId: N, text: 'Consider with dinoprostone or mechanical methods if no complications.', locator: '1.6.1' },
        { guidelineId: A9, text: 'Outpatient ripening is safe and effective (conditional).' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27–28 Nov 2026 through a fetch tool that summarises pages, so exact wording must be checked. FOGSI–ICOG GCPR (2018) read except its last ~5%; it is internally inconsistent on timing (39 vs 41 weeks), the Bishop favourable cut-off and dinoprostone interval, and its misoprostol appendix gives no doses. The FOGSI EEBR 2025 "Induction of Labor" book could not be read. MoHFW 2015 drip schedule beyond the first step (60 drops, 5 IU and 10 IU concentrations) is summarised, not quoted. WHO 2011 recommendation numbers came from a summary and need checking against the printed table; WHO 2022 documents were read from mirror copies. NICE NG207 tachysystole wording differs between the web page ("more than 5") and the May 2026 PDF ("5 or more"). ACOG CPG No. 9 read from a hosted copy; ACOG Practice Bulletin 146 and Committee Opinion 828 only via the AAFP review; whether the 2018 ARRIVE advisory is still current was not confirmed. The FIGO 2023 chart was read as raw text with lost column alignment; its oral dose wording was unclear and is not used. No RCOG induction guideline was found. Doses are quoted from the guidelines for reference only; confirm against the original and your unit protocol.',
};
