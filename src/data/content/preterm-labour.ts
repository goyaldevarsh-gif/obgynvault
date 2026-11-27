import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI / TOG Conclave "Pre-term Labour: Practice algorithms" (May 2025; full text read, tables garbled) -> fogsi-ptl-algorithms
 *  - FOGSI FOCUS "Prevention of Pre-Term Labour" (chapters 1 to 4.2 read; 4.3 onward not extractable)   -> fogsi-focus-ptl
 *  - NICE NG25 recommendations (read)                                                                   -> nice-ng25
 *  - ACOG positions via AAFP 2017 review (PB 171 full text not readable; abstract only)                 -> acog-ptl-aafp
 *  - RCOG GTG 74, antenatal steroids (landing page only; Wiley-blocked)                                    -> rcog-gtg-74
 */
const F = 'fogsi-ptl-algorithms';
const FF = 'fogsi-focus-ptl';
const N = 'nice-ng25';
const A = 'acog-ptl-aafp';
const R = 'rcog-gtg-74';

export const pretermLabour: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Preterm birth is birth before 37 completed weeks. India carries more than a fifth of the world burden, about 3 million preterm births a year, and prematurity is a leading cause of neonatal death. Prevention targets women with a previous spontaneous preterm birth or a short cervix, using vaginal progesterone or cerclage. When a woman presents in preterm labour, the steps that improve outcome for the baby are antenatal corticosteroids, magnesium sulphate for neuroprotection at early gestations, and birth in a unit with neonatal intensive care. Tocolysis only buys time (about 48 hours) to give these and to transfer in utero.',
  keyPoints: [
    { text: 'Previous spontaneous preterm birth or a cervix ≤25 mm on transvaginal scan at 16–24 weeks identifies women for prevention. Offer vaginal progesterone or cerclage after counselling.', refs: [{ guidelineId: N, locator: 'Prophylactic progesterone and cerclage' }, { guidelineId: F, locator: 'p.5–6' }, { guidelineId: A, locator: 'Prevention' }] },
    { text: 'NICE: vaginal progesterone 200 mg, started between 16+0 and 24+0 weeks and continued to at least 34 weeks. Progesterone does not help in multiple pregnancy or PPROM.', refs: [{ guidelineId: N, locator: 'Prophylactic progesterone' }, { guidelineId: F, locator: 'p.5, p.12' }] },
    { text: 'Antenatal corticosteroids are the single most useful step once preterm labour is suspected. NICE offers them at 24+0 to 33+6 weeks (discuss from 22+0, consider at 34+0 to 35+6). Betamethasone 12 mg IM, two doses 24 hours apart.', refs: [{ guidelineId: N, locator: 'Maternal corticosteroids' }, { guidelineId: A, locator: 'SORT; Corticosteroids' }, { guidelineId: F, locator: 'p.12' }] },
    { text: 'Magnesium sulphate for fetal neuroprotection: NICE offers it at 24+0 to 29+6 weeks and considers it to 33+6; FOGSI offers it to 31+6. 4 g IV over 15 minutes, then 1 g/hour until birth or for 24 hours.', refs: [{ guidelineId: N, locator: 'Magnesium sulfate for neuroprotection' }, { guidelineId: F, locator: 'p.11' }] },
    { text: 'Tocolysis delays birth by about 48 hours, enough for steroids, magnesium and in-utero transfer. NICE first line is nifedipine; do not use betamimetics. Avoid tocolysis with chorioamnionitis, fetal compromise, abruption or maternal instability.', refs: [{ guidelineId: N, locator: 'Tocolysis' }, { guidelineId: A, locator: 'Table 3, Table 4' }, { guidelineId: F, locator: 'p.6' }] },
    { text: 'PPROM: erythromycin 250 mg four times a day for 10 days or until established labour, whichever is sooner. Do not use co-amoxiclav (necrotising enterocolitis).', refs: [{ guidelineId: N, locator: 'Antenatal prophylactic antibiotics (P-PROM)' }, { guidelineId: F, locator: 'Table 4' }] },
    { text: 'At birth: neonatologist present, continuous monitoring, no fetal scalp electrode or fetal blood sampling below 34 weeks, and wait at least 60 seconds before clamping the cord if mother and baby are stable.', refs: [{ guidelineId: N, locator: 'Fetal monitoring; Timing of cord clamping' }, { guidelineId: F, locator: 'p.13' }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Definitions & Burden',
      icon: 'definition',
      body: [
        { text: 'Preterm birth is a live birth before 37 completed weeks (259 days from the first day of the last period). A pregnancy of 36+6 weeks is 36 completed weeks.', refs: [{ guidelineId: F, locator: 'p.3' }, { guidelineId: FF, locator: 'Ch. 1' }] },
        {
          text: 'FOGSI categories and clinical stages:',
          refs: [{ guidelineId: F, locator: 'p.3' }],
          table: {
            columns: ['Term', 'Definition (FOGSI algorithms 2025)'],
            rows: [
              ['Extremely preterm', 'Below 28 weeks'],
              ['Very preterm', '28 to 32 weeks'],
              ['Moderate preterm', '32 to 34 weeks'],
              ['Late preterm', '34 to 37 weeks'],
              ['Preterm labour', 'Regular contractions after 20 and before 37 weeks, 4 or more in 20 minutes, with dilatation ≥2 cm and/or effacement ≥80%'],
              ['Threatened (suspected)', 'Contractions without cervical change'],
              ['Diagnosed', 'Contractions with cervical change (dilatation over 2 cm)'],
              ['Established', 'Progressive dilatation from 4 cm with regular contractions'],
              ['PPROM', 'Spontaneous rupture of membranes before 37 weeks'],
            ],
          },
        },
        { text: 'Burden: about 15 million preterm births a year worldwide (11% of births). India had an estimated 3.02 million in 2020, over 20% of the global total. Preterm birth contributes about 40–75% of neonatal deaths.', refs: [{ guidelineId: F, locator: 'p.2' }] },
        { text: 'Roughly 40–50% of preterm births are idiopathic (spontaneous labour), about 30% follow PPROM and 15–20% are medically indicated. Births before 33 weeks carry most of the morbidity.', refs: [{ guidelineId: FF, locator: 'Ch. 1' }] },
        { text: 'Recurrence risk is about 15% after one previous preterm birth and 41% after two.', refs: [{ guidelineId: F, locator: 'Preface' }] },
      ],
    },
    {
      id: 'risk-factors',
      title: 'Risk Factors',
      icon: 'risk',
      body: [
        { heading: 'Modifiable', text: 'Smoking and illicit drugs; anaemia; asymptomatic bacteriuria and UTI; gingival disease; strenuous work; lower genital tract infection (bacterial vaginosis, gonorrhoea, chlamydia, GBS, Ureaplasma, Trichomonas).', refs: [{ guidelineId: F, locator: 'Table 1' }] },
        { heading: 'Non-modifiable', text: 'Previous preterm birth (one of the strongest factors); age under 18 or over 40; low pre-pregnancy weight and poor nutrition; low socioeconomic status; cervical surgery or injury; uterine anomaly; overdistension (twins, polyhydramnios); vaginal bleeding; ART pregnancy.', refs: [{ guidelineId: F, locator: 'Table 1' }, { guidelineId: FF, locator: 'Ch. 2.3, 3.1' }] },
        { text: 'Cone excision depth matters: FOGSI refers women with a previous LLETZ deeper than 10 mm for cervical length scanning. Midtrimester amniocentesis and rescue cerclage also add risk.', refs: [{ guidelineId: F, locator: 'p.6' }, { guidelineId: FF, locator: 'Ch. 2.7' }] },
        { text: 'Medical conditions associated with preterm birth include chronic hypertension and pre-eclampsia, pregestational and gestational diabetes, SLE, renal and cardiac disease, hyperthyroidism and asthma.', refs: [{ guidelineId: FF, locator: 'Ch. 2.4' }] },
        { text: 'Bacterial vaginosis roughly doubles the risk of spontaneous preterm birth, but treating it does not reduce preterm delivery.', refs: [{ guidelineId: FF, locator: 'Ch. 3.3; twin chapter' }] },
      ],
    },
    {
      id: 'screening',
      title: 'Prediction: Cervical Length & Fibronectin',
      icon: 'diagnosis',
      body: [
        { text: 'Measure cervical length transvaginally. Transabdominal scanning should not be used; transperineal is an option only if transvaginal is unacceptable or unavailable.', refs: [{ guidelineId: F, locator: 'p.6' }, { guidelineId: FF, locator: 'Ch. 3.2' }, { guidelineId: A, locator: 'Cervical length' }] },
        { text: 'Refer singletons for scanning between 16 and 24 weeks if they had a mid-trimester loss or preterm birth from 16 to 34 weeks, previous PPROM, or a LLETZ deeper than 10 mm. The usual cut-off for a short cervix is 25 mm.', refs: [{ guidelineId: F, locator: 'p.6' }, { guidelineId: N, locator: 'Prophylactic progesterone and cerclage' }] },
        { text: 'Universal screening of low-risk women is unsettled. The FOGSI 2025 algorithms suggest it; the FOGSI FOCUS book says routine transvaginal cervical length is not recommended at low risk; AAFP calls it controversial.', refs: [{ guidelineId: F, locator: 'p.6' }, { guidelineId: FF, locator: 'Ch. 3.2' }, { guidelineId: A, locator: 'Cervical length' }] },
        { text: 'Serial scans in high-risk women: the FOGSI flow chart says every 2 weeks from 16 to 24 weeks; the algorithm page says every 14 days from 12 to 24 weeks, and weekly if under 30 mm. Follow one schedule locally.', refs: [{ guidelineId: F, locator: 'p.5, p.14' }] },
        { text: 'Fetal fibronectin: positive above 50 ng/mL. A negative result has a negative predictive value of about 99% for birth within 7 days. Take the swab before any digital examination.', refs: [{ guidelineId: FF, locator: 'Ch. 2.7, 3.3' }, { guidelineId: N, locator: 'Diagnosing preterm labour' }] },
        { text: 'Twins: FOGSI FOCUS measures cervical length at 20–23 weeks and repeats it 3–5 weeks later. Funnelling is internal-os dilatation over 5 mm lasting at least 3 minutes.', refs: [{ guidelineId: FF, locator: 'Twin chapter' }] },
      ],
    },
    {
      id: 'prevention',
      title: 'Prevention: Progesterone & Cerclage',
      icon: 'drug',
      body: [
        {
          text: 'NICE decision rules, for women with a singleton pregnancy:',
          refs: [{ guidelineId: N, locator: 'Prophylactic progesterone and cerclage' }],
          table: {
            columns: ['History', 'Scan at 16+0 to 24+0', 'NICE offers'],
            rows: [
              ['Previous spontaneous preterm birth (to 34+0) or loss (from 16+0)', 'Cervix ≤25 mm', 'Choice of vaginal progesterone or cerclage'],
              ['Previous spontaneous preterm birth or loss', 'Not scanned, or cervix >25 mm', 'Consider vaginal progesterone'],
              ['No relevant history', 'Cervix ≤25 mm', 'Consider vaginal progesterone'],
            ],
          },
        },
        { heading: 'Progesterone dose', text: 'NICE: vaginal progesterone 200 mg, started between 16+0 and 24+0 weeks, continued to at least 34 weeks. FOGSI FOCUS: 100–200 mg vaginally each night from diagnosis of a short cervix to 36 weeks. The FOGSI 2025 algorithms recommend natural vaginal progesterone but give no dose.', refs: [{ guidelineId: N, locator: 'Prophylactic progesterone' }, { guidelineId: FF, locator: 'Ch. 4.1, Table 2' }, { guidelineId: F, locator: 'p.12' }] },
        { text: 'Weekly 17-hydroxyprogesterone caproate 250 mg IM (from 16–20 to 36 weeks) appears in the FOGSI FOCUS table and the 2017 AAFP review. See the editor note: its US approval was later withdrawn, so check current practice before using it.', refs: [{ guidelineId: FF, locator: 'Table 2' }, { guidelineId: A, locator: 'Progesterone' }] },
        { text: 'Progesterone does not reduce preterm birth in twins or triplets, or after PPROM.', refs: [{ guidelineId: F, locator: 'p.5, p.12' }, { guidelineId: FF, locator: 'Table 2' }, { guidelineId: A, locator: 'Progesterone' }] },
        { heading: 'Cerclage', text: 'Best evidence: previous spontaneous preterm birth with a cervix of 25 mm or less, where it reduces preterm birth and perinatal death. No evidence for cerclage after preterm labour without a short cervix. Cerclage is not recommended in multiple pregnancy (twin risk ratio about 2.2).', refs: [{ guidelineId: FF, locator: 'Ch. 4.1' }, { guidelineId: F, locator: 'p.5' }, { guidelineId: A, locator: 'Cerclage' }] },
        { heading: 'Rescue (emergency) cerclage', text: 'NICE: consider it from 16+0 to 27+6 weeks. The FOGSI documents disagree: the 2025 algorithms say there is no evidence for emergency cerclage, while FOGSI FOCUS says it should be considered.', refs: [{ guidelineId: N, locator: '"Rescue" cervical cerclage' }, { guidelineId: F, locator: 'p.5' }, { guidelineId: FF, locator: 'Ch. 3.2' }] },
        { text: 'No trial compares cerclage with progesterone directly, and there is no evidence that using both is better than either.', refs: [{ guidelineId: A, locator: 'Cerclage' }] },
        { heading: 'Other measures', text: 'No proven benefit: bed rest, pelvic rest, screening and treating asymptomatic genital infection, empirical antibiotics. May help: stopping smoking, treating symptomatic infection, preventing multiple pregnancy in ART. Low-dose aspirin lowers preterm birth only in women at high risk of pre-eclampsia.', refs: [{ guidelineId: F, locator: 'Table 3' }, { guidelineId: FF, locator: 'Ch. 4.1' }] },
      ],
    },
    {
      id: 'diagnosis',
      title: 'Diagnosing Preterm Labour',
      icon: 'lab',
      body: [
        { text: 'Assess with speculum and digital examination, and screen for asymptomatic bacteriuria (midstream culture over 100,000 CFU/mL), sexually transmitted infection and bacterial vaginosis.', refs: [{ guidelineId: F, locator: 'Table 2' }] },
        { text: 'NICE: at 29+6 weeks or less with suspected preterm labour and intact membranes, treat as diagnosed preterm labour without further tests.', refs: [{ guidelineId: N, locator: 'Diagnosing preterm labour' }] },
        {
          text: 'NICE: at 30+0 weeks or more, use one test to decide (do not combine them):',
          refs: [{ guidelineId: N, locator: 'Diagnosing preterm labour' }],
          table: {
            columns: ['Test', 'Result', 'Meaning'],
            rows: [
              ['Transvaginal cervical length (first choice)', '>15 mm', 'Preterm labour unlikely; consider other causes'],
              ['Transvaginal cervical length', '≤15 mm', 'Treat as diagnosed preterm labour'],
              ['Fetal fibronectin (if scan not available or acceptable)', '≤50 ng/mL', 'Preterm labour unlikely'],
              ['Fetal fibronectin', '>50 ng/mL', 'Treat as diagnosed preterm labour'],
            ],
          },
        },
        { text: 'A transvaginal cervical length of at least 30 mm, measured correctly, makes delivery within 14 days unlikely.', refs: [{ guidelineId: A, locator: 'Diagnosis' }] },
        { text: 'NICE advises against using nitrazine to diagnose PPROM. The FOGSI 2025 algorithms still list a litmus or nitrazine test.', refs: [{ guidelineId: N, locator: 'Diagnosing P-PROM' }, { guidelineId: F, locator: 'p.7' }] },
      ],
    },
    {
      id: 'tocolysis',
      title: 'Tocolysis',
      icon: 'drug',
      body: [
        { text: 'Tocolysis gains about 48 hours (sometimes up to 7 days). It does not on its own reduce perinatal death or morbidity. Its purpose is to complete steroids, give magnesium and transfer the mother to a unit with a NICU.', refs: [{ guidelineId: A, locator: 'SORT; Tocolytics' }, { guidelineId: FF, locator: 'Ch. 4.2' }, { guidelineId: F, locator: 'p.6' }] },
        { text: 'NICE: in suspected or diagnosed preterm labour, consider nifedipine at 24+0 to 25+6 weeks and offer it at 26+0 to 33+6. If nifedipine is contraindicated, offer an oxytocin receptor antagonist (atosiban). Do not offer betamimetics.', refs: [{ guidelineId: N, locator: 'Tocolysis' }] },
        {
          text: 'Regimens as printed in the sources (not reviewed by a pharmacologist; check the product label and your unit protocol):',
          refs: [{ guidelineId: A, locator: 'Table 3' }, { guidelineId: FF, locator: 'Ch. 4.2 table' }, { guidelineId: F, locator: 'p.8–10' }],
          table: {
            columns: ['Agent', 'Regimen in source', 'Key cautions'],
            rows: [
              ['Nifedipine (AAFP/ACOG)', '30 mg oral load, then 10–20 mg every 4–6 h; max 180 mg/day', 'Hypotension, flushing; avoid in preload-dependent cardiac lesions'],
              ['Nifedipine (FOGSI FOCUS)', '20 mg oral, 20 mg after 30 min, then 20 mg every 3–8 h for 48–72 h; max 160 mg/day', 'Hypotension, tachycardia, headache'],
              ['Atosiban (FOGSI 2025)', '6.5 mg IV bolus over 1 min, then infusion 24 mL/h for 3 h, then 8 mL/h; total ≤48 h', 'Preparation text garbled in source; use the label'],
              ['Indomethacin (AAFP/ACOG)', '50–100 mg oral or rectal load, then 25–50 mg every 4–6 h; ≤48 h', 'Ductal constriction, oligohydramnios; FOGSI FOCUS limits it to below 32 weeks'],
              ['Isoxsuprine (FOGSI 2025)', 'IV 40 mg in 500 mL, from 0.04 mg/min, titrated; then oral', 'Betamimetic; NICE advises against betamimetics'],
            ],
          },
        },
        { text: 'Do not combine nifedipine with magnesium sulphate without close monitoring: FOGSI warns of neuromuscular blockade and respiratory arrest. Avoid giving more than one tocolytic at a time.', refs: [{ guidelineId: F, locator: 'p.11' }, { guidelineId: FF, locator: 'Ch. 4.2' }] },
        {
          text: 'Contraindications to tocolysis:',
          refs: [{ guidelineId: A, locator: 'Table 4' }],
          table: {
            columns: ['Contraindication'],
            rows: [
              ['Intrauterine fetal death or lethal anomaly'],
              ['Non-reassuring fetal status'],
              ['Severe pre-eclampsia or eclampsia'],
              ['Maternal bleeding with haemodynamic instability'],
              ['Chorioamnionitis'],
              ['PPROM (may be considered briefly for steroids or transfer if no infection)'],
              ['Contraindication to the specific drug'],
            ],
          },
        },
        { heading: 'India: licensing and maintenance', text: 'The FOGSI 2025 algorithms state that nifedipine, indomethacin and nitric oxide donors are off-label for preterm labour in India, and list isoxsuprine and atosiban as approved. They also advise maintenance isoxsuprine to 37 weeks. FOGSI FOCUS, NICE and AAFP do not recommend maintenance tocolysis. Note that the 2025 algorithms are distributed by a drug company and describe themselves as expert opinion, not guidelines.', refs: [{ guidelineId: F, locator: 'p.8, p.11, p.16; cover' }, { guidelineId: FF, locator: 'Ch. 4.2' }, { guidelineId: A, locator: 'Tocolytics' }] },
      ],
    },
    {
      id: 'steroids',
      title: 'Antenatal Corticosteroids',
      icon: 'injection',
      body: [
        {
          text: 'Gestational windows:',
          refs: [{ guidelineId: N, locator: 'Maternal corticosteroids' }, { guidelineId: F, locator: 'p.12' }, { guidelineId: A, locator: 'Corticosteroids' }],
          table: {
            columns: ['Weeks', 'NICE', 'FOGSI 2025', 'AAFP / ACOG'],
            rows: [
              ['22+0 to 23+6', 'Discuss (NICE from 22+0)', 'Discuss at 23+0 to 23+6', 'May consider from 23 weeks'],
              ['24+0 to 25+6', 'Offer', 'Consider', 'Recommended'],
              ['26+0 to 33+6', 'Offer', 'Offer', 'Recommended'],
              ['34+0 to 35+6', 'Consider', 'Not addressed', 'Not addressed (to 34 weeks)'],
            ],
          },
        },
        { text: 'Regimens: betamethasone 12 mg IM, two doses 24 hours apart, or dexamethasone 6 mg IM, four doses 12 hours apart.', refs: [{ guidelineId: A, locator: 'Corticosteroids' }, { guidelineId: F, locator: 'p.12' }] },
        { text: 'Repeat course (NICE): consider one more course only if under 34+0 weeks, more than 7 days since the first course, and birth is very likely within 48 hours. No more than two courses in total. FOGSI: not routine; weigh the interval, gestation and likelihood of birth within 7 days.', refs: [{ guidelineId: N, locator: 'Maternal corticosteroids' }, { guidelineId: F, locator: 'p.12' }] },
        { text: 'RCOG Green-top Guideline 74 (2022) covers antenatal corticosteroids, but its recommendations could not be accessed for this draft.', refs: [{ guidelineId: R }] },
        { text: 'Steroids apply whether membranes are intact or ruptured.', refs: [{ guidelineId: A, locator: 'Corticosteroids' }, { guidelineId: F, locator: 'p.12' }] },
      ],
    },
    {
      id: 'magnesium',
      title: 'Magnesium Sulphate for Neuroprotection',
      icon: 'injection',
      body: [
        { text: 'Magnesium sulphate before early preterm birth reduces cerebral palsy (Cochrane risk ratio 0.69).', refs: [{ guidelineId: A, locator: 'Magnesium sulfate' }] },
        { text: 'NICE: discuss at 23+0 to 23+6; offer at 24+0 to 29+6 weeks; consider at 30+0 to 33+6. FOGSI 2025: offer at 24+0 to 31+6 weeks to women in established preterm labour or with planned preterm birth within 24 hours.', refs: [{ guidelineId: N, locator: 'Magnesium sulfate for neuroprotection' }, { guidelineId: F, locator: 'p.11' }] },
        { heading: 'Dose', text: 'NICE: 4 g IV over 15 minutes, then 1 g/hour until birth or for 24 hours, whichever is sooner. FOGSI: 4 g (8 mL of 50%) diluted to 20 mL over 5–10 minutes, then 1 g/hour by syringe driver until delivery; if birth is imminent, give the loading dose only.', refs: [{ guidelineId: N, locator: 'Magnesium sulfate for neuroprotection' }, { guidelineId: F, locator: 'p.11' }] },
        { text: 'Monitor for clinical signs of magnesium toxicity at least every 4 hours. Reduce the dose in renal impairment.', refs: [{ guidelineId: N, locator: 'Magnesium sulfate for neuroprotection' }] },
        { text: 'Magnesium is no longer used as a tocolytic (FOGSI 2025). The AAFP table still lists a tocolytic regimen; do not confuse the two.', refs: [{ guidelineId: F, locator: 'p.11' }, { guidelineId: A, locator: 'Table 3' }] },
      ],
    },
    {
      id: 'pprom',
      title: 'Preterm Prelabour Rupture of Membranes',
      icon: 'complications',
      body: [
        { text: 'Antibiotics: erythromycin 250 mg orally four times a day for up to 10 days, or until established labour if sooner. If erythromycin is not tolerated, use an oral penicillin. Do not use co-amoxiclav.', refs: [{ guidelineId: N, locator: 'Antenatal prophylactic antibiotics' }, { guidelineId: F, locator: 'Table 4 (1+, A)' }] },
        { text: 'Offer expectant management to women with PPROM and no contraindication. Early birth may be preferable beyond 34+0 weeks in women known to carry GBS.', refs: [{ guidelineId: F, locator: 'Table 5' }] },
        { text: 'Give corticosteroids and, at early gestations, magnesium sulphate as above. Avoid tocolysis unless briefly for steroids or transfer with no sign of infection.', refs: [{ guidelineId: F, locator: 'p.12' }, { guidelineId: A, locator: 'Table 4' }] },
        { text: 'If infection develops during expectant management, give steroids, magnesium and antibiotics and plan birth.', refs: [{ guidelineId: F, locator: 'p.14' }] },
      ],
    },
    {
      id: 'delivery',
      title: 'Birth: Mode, Monitoring & Cord Clamping',
      icon: 'delivery',
      body: [
        { text: 'Discuss benefits and risks of caesarean and vaginal birth. Consider caesarean for breech presentation at 26+0 to 36+6 weeks. For cephalic presentation there is no good evidence that caesarean protects the preterm baby.', refs: [{ guidelineId: N, locator: 'Mode of birth' }, { guidelineId: F, locator: 'p.13' }, { guidelineId: FF, locator: 'Ch. 2.7' }] },
        { text: 'Do not use a fetal scalp electrode or fetal blood sampling below 34+0 weeks.', refs: [{ guidelineId: N, locator: 'Fetal monitoring' }] },
        { text: 'Aim for an atraumatic birth: avoid ventouse, use forceps if needed, have a neonatologist present, and transfer to NICU early after stabilisation.', refs: [{ guidelineId: F, locator: 'p.13' }] },
        { text: 'If mother and baby are stable, wait at least 60 seconds before clamping the cord, with the baby at or below the level of the placenta.', refs: [{ guidelineId: N, locator: 'Timing of cord clamping' }, { guidelineId: F, locator: 'p.13' }] },
        { text: 'Plan in-utero transfer to a centre with neonatal intensive care where possible; tocolysis is used to make this possible.', refs: [{ guidelineId: F, locator: 'p.6' }, { guidelineId: FF, locator: 'Ch. 4.2' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Antenatal steroids: upper limit',
      entries: [
        { guidelineId: F, text: 'Offer to 33+6 weeks.', locator: 'p.12' },
        { guidelineId: N, text: 'Offer to 33+6; consider at 34+0 to 35+6.', locator: 'Maternal corticosteroids' },
        { guidelineId: A, text: 'Recommended 24 to 34 weeks.', locator: 'SORT' },
      ],
    },
    {
      domain: 'MgSO4 neuroprotection window',
      entries: [
        { guidelineId: F, text: 'Offer 24+0 to 31+6 weeks.', locator: 'p.11' },
        { guidelineId: N, text: 'Offer 24+0 to 29+6; consider 30+0 to 33+6.', locator: 'Magnesium sulfate' },
        { guidelineId: A, text: 'Below 32 weeks (no dose given).', locator: 'SORT' },
      ],
    },
    {
      domain: 'First-line tocolytic',
      entries: [
        { guidelineId: F, text: 'Isoxsuprine or atosiban (approved in India); nifedipine off-label.', locator: 'p.8–11' },
        { guidelineId: N, text: 'Nifedipine; atosiban if contraindicated; no betamimetics.', locator: 'Tocolysis' },
        { guidelineId: A, text: 'Nifedipine or indomethacin (calcium channel blockers and prostaglandin inhibitors).', locator: 'Table 3' },
      ],
    },
    {
      domain: 'Maintenance tocolysis',
      entries: [
        { guidelineId: F, text: 'Oral isoxsuprine to 37 weeks.', locator: 'p.8' },
        { guidelineId: A, text: 'Not recommended.', locator: 'Tocolytics' },
      ],
    },
    {
      domain: 'Short cervix, no prior preterm birth',
      entries: [
        { guidelineId: F, text: 'Natural vaginal progesterone if ≤25 mm before 24 weeks.', locator: 'p.12' },
        { guidelineId: N, text: 'Consider vaginal progesterone if ≤25 mm at 16+0 to 24+0.', locator: 'Prophylactic progesterone' },
        { guidelineId: A, text: 'Vaginal progesterone if ≤20 mm before 24 weeks.', locator: 'Progesterone' },
      ],
    },
    {
      domain: 'PPROM antibiotic',
      entries: [
        { guidelineId: F, text: 'Erythromycin for 10 days or until labour; no co-amoxiclav.', locator: 'Table 4' },
        { guidelineId: N, text: 'Erythromycin 250 mg QDS up to 10 days; penicillin if not tolerated; no co-amoxiclav.', locator: 'P-PROM' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI/TOG Conclave preterm labour algorithms (May 2025) in full, though its tables were garbled in extraction; FOGSI FOCUS "Prevention of Pre-Term Labour" chapters 1 to 4.2 (later chapters on atosiban, antibiotics, steroids, PPROM and delivery could not be extracted); NICE NG25 recommendations. ACOG positions come from the 2017 AAFP review because Practice Bulletin 171 could not be accessed (abstract only). RCOG GTG 74 on antenatal corticosteroids (Wiley) could not be accessed, and the RCOG PPROM guideline was not read. The two FOGSI documents disagree on maintenance tocolysis, nifedipine, fFN cut-off, routine cervical scanning, emergency cerclage and magnesium cut-offs; both views are shown. Not from these sources: the US FDA withdrew approval of 17-hydroxyprogesterone caproate (Makena) in 2023, so its place should be checked by the reviewer. All doses are quoted from the source for clinician and pharmacology review.',
};
