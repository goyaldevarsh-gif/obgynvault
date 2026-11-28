import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from MoHFW Standard Treatment Guidelines (Obstetrics & Gynaecology, cardiac disease pp.28–38),
 * ESC 2018 pregnancy guideline (sections 1–3 read), ACOG PB 212 (2019) and a news summary of ESC 2025.
 * ESC 2025 full text could not be read.
 */
const M = 'mohfw-stg-obg';
const E = 'esc-2018-pregnancy';
const E25 = 'esc-2025-pregnancy';
const A = 'acog-pb-212';

export const heartDiseasePregnancy: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Assess every woman with heart disease before or early in pregnancy with a cardiologist and classify risk with the modified WHO (mWHO) classification; ESC 2025 now uses "mWHO 2.0" and mandates a Pregnancy Heart Team for class II–III and above. Pregnancy is contraindicated in mWHO IV (e.g. severe mitral stenosis, pulmonary hypertension). In India, rheumatic mitral stenosis is the common lesion: beta-blockers and balloon mitral valvotomy are safe in pregnancy, and intervention is recommended before pregnancy when the valve area is under 1.0 cm². Women with mechanical valves need a planned anticoagulation schedule (switching to heparin around delivery). Vaginal birth is preferred for most, with epidural analgesia, a shortened second stage, slow oxytocin infusion and no ergometrine; caesarean is mainly for obstetric reasons, aortic disease, severe heart failure or labour on warfarin. The early postpartum period is a common time for decompensation.',
  keyPoints: [
    { text: 'Use mWHO risk class to decide where to manage: I–II local hospital, II–III referral hospital, III–IV expert pregnancy-heart centre. Pregnancy is contraindicated in mWHO IV; discuss termination if it occurs.', refs: [{ guidelineId: E, locator: 'Table 3' }, { guidelineId: A, locator: 'e326–e327' }] },
    { text: 'ESC 2025: "mWHO 2.0" with CARPREG II data; Pregnancy Heart Team mandatory for mWHO 2.0 class II–III and above. DOACs not recommended; ACE inhibitors, ARBs, ARNI and SGLT2 inhibitors contraindicated.', refs: [{ guidelineId: E25 }] },
    { text: 'Mitral stenosis: intervene before pregnancy if valve area under 1.0 cm². Beta-blockers and balloon mitral valvotomy are safe in pregnancy; treat pulmonary oedema with oxygen and diuretics, with cardiology input.', refs: [{ guidelineId: E, locator: 'Fig.1, §3.3.1' }, { guidelineId: M, locator: 'p.35' }] },
    { text: 'Mechanical valves: manage in a centre with a pregnancy heart team. Low-dose VKA (warfarin under 5 mg/day) may continue in the 2nd–3rd trimesters until 36 weeks (ESC); LMWH needs weekly anti-Xa monitoring. Switch to heparin before delivery.', refs: [{ guidelineId: E, locator: 'Fig.1, §3.3.3' }, { guidelineId: M, locator: 'pp.35–36' }] },
    { text: 'Vaginal birth for most. Caesarean for obstetric reasons, labour on oral anticoagulants, aggressive aortic disease, intractable heart failure or severe pulmonary hypertension.', refs: [{ guidelineId: E, locator: '§3.8.3' }, { guidelineId: M }] },
    { text: 'Labour: epidural (titrated carefully), lateral position, shorten second stage with forceps or vacuum, slow oxytocin infusion (no rapid bolus), avoid ergometrine.', refs: [{ guidelineId: E, locator: '§3.8.7–3.8.10' }, { guidelineId: A, locator: 'Table 7' }, { guidelineId: M, locator: 'pp.33, 36' }] },
    { text: 'Postpartum: monitor 24–48 hours (decompensation is common early); review within 7–14 days; prefer IUD or progestogen-only contraception in high-risk women.', refs: [{ guidelineId: E }, { guidelineId: A, locator: 'e340–e341' }, { guidelineId: M, locator: 'p.33' }] },
  ],
  sections: [
    {
      id: 'risk',
      title: 'Risk Assessment & Where to Deliver',
      icon: 'classification',
      body: [
        {
          text: 'Modified WHO classification: care setting and visits (ESC 2018).',
          refs: [{ guidelineId: E, locator: 'Table 3' }],
          table: {
            columns: ['mWHO class', 'Care setting', 'Minimum visits'],
            rows: [
              ['I', 'Local hospital', 'Once or twice'],
              ['II', 'Local hospital', 'Once per trimester'],
              ['II–III', 'Referral hospital', 'Bimonthly'],
              ['III', 'Expert centre; expert counselling required', 'Monthly or bimonthly'],
              ['IV', 'Expert centre; pregnancy contraindicated', 'Monthly'],
            ],
          },
        },
        { text: 'Examples: moderate mitral stenosis is mWHO III; severe mitral stenosis is mWHO IV. Predictors of maternal events include previous cardiac event, NYHA III–IV, left heart obstruction, mechanical valve, EF under 40% and NT-proBNP over 128 pg/mL at 20 weeks.', refs: [{ guidelineId: E, locator: 'Tables 3–4' }] },
        { text: 'MoHFW risk groups by maternal mortality: Group 1 (0–1%) includes MS NYHA I–II and bioprosthetic valves; Group 2 (5–15%) includes MS NYHA III–IV, aortic stenosis, MS with AF and artificial valves; Group 3 (25–50%) includes pulmonary hypertension, coarctation with valve involvement and Marfan with aortic involvement.', refs: [{ guidelineId: M, locator: 'pp.31–32' }] },
        { text: 'Counsel termination for pulmonary hypertension, severe left-sided obstruction, aortic dilatation over 4 cm or severe systemic ventricular dysfunction (MoHFW). ACOG: avoid pregnancy with EF under 30% or NYHA III–IV in dilated cardiomyopathy.', refs: [{ guidelineId: M }, { guidelineId: A, locator: 'e333' }] },
      ],
    },
    {
      id: 'esc-2025',
      title: 'ESC 2025: What Changed',
      icon: 'management',
      body: [
        { heading: 'Pregnancy Heart Team', text: 'Women at mWHO 2.0 class II–III or higher should be managed by a Pregnancy Heart Team from before pregnancy to after birth (Class I, new). mWHO I–II: local hospital; II–III: shared care; III: care led by the team; IV: expert centre, with counselling that includes shared decision-making about termination.', refs: [{ guidelineId: E25, locator: 'Table 4; Table 6' }] },
        { heading: 'Anticoagulation with mechanical valves', text: 'A written anticoagulation plan is required (Class I), including whether to continue a VKA or switch to therapeutic LMWH in the first trimester. Continuing the VKA until 36 weeks can be considered at higher thrombosis risk (IIa); LMWH with anti-Xa monitoring may be considered if a high VKA dose is needed (IIb).', refs: [{ guidelineId: E25, locator: 'Tables 4–5' }] },
        { heading: 'Delivery', text: 'Vaginal birth is advised for most women. In cardiomyopathy, plan vaginal birth (Class I) unless there are obstetric indications, severe heart failure (EF under 30% and/or NYHA III–IV), uncontrolled arrhythmia, severe outflow obstruction (50 mmHg or more) or labour on a VKA. Without other indications, keep induction before 39 weeks for obstetric reasons.', refs: [{ guidelineId: E25, locator: '§4.5.1, §4.5.3; Table 4' }] },
        { heading: 'Labour', text: 'A mechanical balloon may be preferable for ripening when a fall in vascular resistance would be harmful; avoid intramyometrial dinoprostone. In mWHO III–IV, oxytocin is first line for the third stage; misoprostol and carboprost are second line. Endocarditis prophylaxis at delivery may be considered in high-risk women (IIb; was Class III in 2018).', refs: [{ guidelineId: E25, locator: '§4.5.2; Table 5' }] },
        { heading: 'Drugs', text: 'Not recommended in pregnancy (Class III, new): ACE inhibitors, ARBs, ARNI, MRA, ivabradine and SGLT2 inhibitors. Continue beta-blockers in Marfan or heritable aortic disease through pregnancy and after birth (Class I).', refs: [{ guidelineId: E25, locator: 'Tables 4–5' }] },
        { heading: 'Other new points', text: 'BP target under 140/90 mmHg (Class I). Peripartum cardiomyopathy: consider genetic testing and continue heart failure treatment for at least 12 months after full recovery (IIa). Wait at least 1 year after heart transplant. Manual left uterine displacement from 20 weeks during cardiac arrest (Class I).', refs: [{ guidelineId: E25, locator: 'Table 4' }] },
      ],
    },
    {
      id: 'stepwise',
      title: 'Step-by-step Management',
      icon: 'management',
      body: [
        {
          text: 'Pathway from booking to the postnatal period.',
          refs: [{ guidelineId: E }, { guidelineId: E25 }, { guidelineId: A }, { guidelineId: M }],
          flow: {
            caption: 'Heart disease in pregnancy',
            steps: [
              { title: 'Before or early in pregnancy', text: 'Cardiology review, echo, mWHO class. Stop contraindicated drugs (ACE inhibitors, ARBs, ARNI, SGLT2 inhibitors; DOACs not recommended).', tone: 'start' },
              { title: 'mWHO class', tone: 'decision', branches: [
                { when: 'I–II', then: 'Local hospital; visits once per trimester or less' },
                { when: 'II–III to III', then: 'Referral or expert centre; Pregnancy Heart Team' },
                { when: 'IV', then: 'Pregnancy contraindicated: discuss termination; expert centre if continuing' },
              ] },
              { title: 'Antenatal', text: 'Watch for heart failure and arrhythmia; plan anticoagulation for mechanical valves; plan birth with cardiology and anaesthesia.', tone: 'action' },
              { title: 'Birth', text: 'Vaginal for most; epidural, lateral position, assisted second stage, slow oxytocin, no ergometrine.', tone: 'action' },
              { title: 'Postpartum', text: 'Monitor 24–48 h; early decompensation is common. Review in 7–14 days; contraception.', tone: 'urgent' },
            ],
          },
        },
      ],
    },
    {
      id: 'valves',
      title: 'Mitral Stenosis & Mechanical Valves',
      icon: 'drug',
      body: [
        { heading: 'Mitral stenosis', text: 'Intervention is recommended before pregnancy if valve area is under 1.0 cm² (ESC, IC). Beta-blockers and balloon mitral valvotomy are safe in pregnancy; treat pulmonary oedema with oxygen and diuretics. Empirical diuretics or beta-blockers without cardiology input are hazardous.', refs: [{ guidelineId: E, locator: 'Fig.1' }, { guidelineId: M, locator: 'p.35' }] },
        { heading: 'Mechanical valves: ESC 2018', text: 'VKA in the 2nd and 3rd trimesters until 36 weeks if a low dose suffices (warfarin under 5 mg/day, phenprocoumon under 3 mg/day, acenocoumarol under 2 mg/day). LMWH: weight-based therapeutic dose with weekly anti-Xa (or aPTT) monitoring and dose adjustment within 36 hours. High-risk women: change LMWH to UFH at least 36 hours before birth; stop UFH 4–6 hours before birth or regional anaesthesia (normal aPTT needed). Low-risk: induction or caesarean 24 hours after the last LMWH. Restart UFH at 6 hours (high risk) or prophylactic LMWH at 6 hours then therapeutic 12 hours later.', refs: [{ guidelineId: E, locator: 'Fig.1, §3.8.4' }] },
        { heading: 'Mechanical valves: MoHFW', text: 'Replace warfarin with heparin at 6–12 weeks and again at 35–36 weeks; stop heparin 4–6 hours before delivery; restart IV heparin 6 hours after vaginal birth or 24 hours after caesarean; start warfarin the night after delivery if no bleeding, continuing heparin until INR is 2 or more. Caesarean if warfarin was taken within 2 weeks of delivery. Reverse warfarin with vitamin K or FFP and heparin with protamine.', refs: [{ guidelineId: M, locator: 'pp.35–36' }] },
        { text: 'ACOG adds daily low-dose (81 mg) aspirin in pregnancy for women with mechanical valves.', refs: [{ guidelineId: A, locator: 'e333' }] },
      ],
    },
    {
      id: 'labour',
      title: 'Timing, Mode & Labour Care',
      icon: 'delivery',
      body: [
        { text: 'Timing: ESC 2018 considers induction at 40 weeks in all women with heart disease; ACOG plans vaginal birth at 39 weeks for stable disease; MoHFW prefers awaiting spontaneous labour.', refs: [{ guidelineId: E, locator: '§3.8.1' }, { guidelineId: A, locator: 'e339' }, { guidelineId: M }] },
        { text: 'Caesarean: obstetric indications, labour on oral anticoagulants, aggressive aortic disease (MoHFW: aortic root over 4 cm), acute intractable heart failure, severe pulmonary hypertension including Eisenmenger, severe symptomatic aortic stenosis, recent MI.', refs: [{ guidelineId: E, locator: '§3.8.3' }, { guidelineId: M }, { guidelineId: E25 }] },
        { heading: 'Analgesia and position', text: 'Offer epidural (ACOG), titrated carefully because hypotension occurs in about 10% (ESC); MoHFW: by a senior cardiac anaesthetist. Lateral decubitus position; avoid supine.', refs: [{ guidelineId: A, locator: 'e339' }, { guidelineId: E, locator: '§3.8.7–3.8.8' }, { guidelineId: M, locator: 'p.33' }] },
        { heading: 'Second stage', text: 'Shorten with outlet forceps or vacuum (MoHFW).', refs: [{ guidelineId: M }] },
        { heading: 'Third stage', text: 'Oxytocin as a slow infusion: 2 U over 10 minutes after birth, then 12 mU/min for 4 hours (ESC); avoid a rapid IV bolus (ACOG). Avoid ergometrine/methylergometrine (vasoconstriction, hypertension, heart failure) and prostaglandin F analogues.', refs: [{ guidelineId: E, locator: '§3.8.10' }, { guidelineId: A, locator: 'Table 7' }, { guidelineId: M, locator: 'p.36' }] },
        { heading: 'Endocarditis prophylaxis', text: 'Sources differ: ESC 2018 does not recommend it for vaginal or caesarean birth; ACOG considers it reasonable for high-risk patients; MoHFW gives ampicillin 2 g or ceftriaxone 1 g IV 30–60 minutes before (vancomycin 1 g if enterococcus is a concern; clindamycin 600 mg IV if penicillin allergic).', refs: [{ guidelineId: E, locator: '§3.9.1' }, { guidelineId: A, locator: 'e339' }, { guidelineId: M, locator: 'p.33' }] },
      ],
    },
    {
      id: 'ppcm',
      title: 'Peripartum Cardiomyopathy',
      icon: 'emergency',
      body: [
        { text: 'MoHFW criteria: heart failure in the last month of pregnancy or within 5 months after delivery, EF under 45% (LVEDD over 2.7 cm/m²). Treatment: diuretics, beta-blockers, vasodilators and digoxin with cardiology.', refs: [{ guidelineId: M, locator: 'pp.36–37' }] },
        { text: 'Bromocriptine: ESC 2018 says it may be considered to stop lactation and help LV recovery (IIb); ACOG calls it investigational and does not discourage breastfeeding. A PPCM-specific dose was not found in the text read.', refs: [{ guidelineId: E }, { guidelineId: A, locator: 'e335' }] },
      ],
    },
    {
      id: 'postpartum',
      title: 'Postpartum & Contraception',
      icon: 'followup',
      body: [
        { text: 'Monitor haemodynamics for at least 24–48 hours in at-risk women. Review within 7–14 days and do a full cardiovascular review at 3 months for high-risk women.', refs: [{ guidelineId: E }, { guidelineId: A, locator: 'e340–e341' }] },
        { text: 'Contraception: avoid ethinylestradiol methods where thrombosis risk is high; progestogen-only methods and the levonorgestrel IUS are among the safest; IUDs are the recommended non-permanent option for high-risk conditions; copper IUD is the most effective emergency method.', refs: [{ guidelineId: E, locator: '§3.10.1' }, { guidelineId: A, locator: 'e341' }] },
        { text: 'ESC 2025 stresses contraception counselling for all women with heart disease and follow-up of long-term cardiovascular risk after adverse pregnancy outcomes.', refs: [{ guidelineId: E25 }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Endocarditis prophylaxis at birth',
      entries: [
        { guidelineId: E, text: 'Not recommended.', locator: '§3.9.1' },
        { guidelineId: A, text: 'Reasonable for high-risk patients.', locator: 'e339' },
        { guidelineId: M, text: 'Ampicillin or ceftriaxone IV before birth.', locator: 'p.33' },
      ],
    },
    {
      domain: 'Timing of birth',
      entries: [
        { guidelineId: E, text: 'Consider induction at 40 weeks.', locator: '§3.8.1' },
        { guidelineId: A, text: 'Vaginal birth at 39 weeks if stable.', locator: 'e339' },
        { guidelineId: M, text: 'Await spontaneous labour.' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. ESC 2025 (Eur Heart J 2025;46:4462–4568) was read in part (front matter, what\'s-new Tables 3–5, Table 6 and sections 4.5.1–4.5.3); its sections on valves (12.5), mitral stenosis, PPCM drugs (bromocriptine), pulmonary hypertension, labour analgesia, follow-up frequency and the drug table were not reached, so those numbers here are still from ESC 2018 and need checking. mWHO 2.0 class for EF under 30% differed between two readings and is not shown. mWHO event rates are omitted. The MoHFW STG is undated (probably 2012–2016). No FOGSI guideline on heart disease in pregnancy was found. Not read: RCOG Good Practice Paper 13, ICMR STW, CARPREG II scoring.',
};
