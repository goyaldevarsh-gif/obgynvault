import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from NACO EVTHS 2024 (operational chapters), NACO HIV care 2021 (glossary, EID), MoHFW syphilis
 * screening guideline 2014, NVHCP hepatitis B technical guideline 2019 and flyer, WHO HBV 2024 executive summary,
 * BHIVA 2025 and CDC STI 2021 (syphilis in pregnancy).
 */
const EV = 'naco-evths-2024';
const NA = 'naco-art-2021';
const SY = 'mohfw-syphilis-2014';
const HB = 'nvhcp-hbv-2019';
const HF = 'nvhcp-flyer';
const WH = 'who-hbv-2024';
const BH = 'bhiva-pregnancy-2025';
const CD = 'cdc-syphilis-pregnancy-2021';
const TM = 'naco-evths-training-2024';

export const hivHbvSyphilisPregnancy: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'India aims to eliminate vertical transmission of HIV, syphilis and hepatitis B. Screen every pregnant woman for HIV and syphilis in the first trimester (dual rapid test at the first ANC visit) and for HBsAg, and rescreen women at risk in the third trimester or in labour. HIV: start lifelong ART at once (test and treat), check viral load at 32–36 weeks, deliver at a CEmONC facility and give the baby ARV prophylaxis within an hour of birth, with early infant diagnosis at 6 weeks. Syphilis: give benzathine penicillin 2.4 million IU IM as soon as she screens reactive (one dose for early syphilis, three weekly doses for late or unknown duration), treat the partner and follow up titres; there is no proven alternative to penicillin. Hepatitis B: give the baby the birth-dose vaccine within 24 hours plus HBIG, consider tenofovir from the second trimester for high viral load or HBeAg positive mothers (WHO), and support breastfeeding; HBV alone is not an indication for caesarean.',
  keyPoints: [
    { text: 'Screen all pregnant women for HIV and syphilis in the first trimester, preferably at the first ANC visit, using the dual HIV/syphilis rapid test. Rescreen women at risk in the third trimester and in labour.', refs: [{ guidelineId: EV, locator: '§2.2, p.30–31, 46' }, { guidelineId: SY, locator: 'p.8' }] },
    { text: 'HIV: start ART rapidly in every pregnant woman with HIV; viral load at 32–36 weeks; infant ARV prophylaxis within an hour of birth; early infant diagnosis (DNA PCR) at 6 weeks.', refs: [{ guidelineId: EV, locator: 'pp.20, 45–48' }, { guidelineId: NA, locator: '§1.2.3' }] },
    { text: 'Syphilis: benzathine penicillin 2.4 million IU IM — single dose for early syphilis; once weekly for 3 weeks for late or unknown duration. Give the first dose as soon as she screens reactive; treat the partner.', refs: [{ guidelineId: SY, locator: 'pp.8–10' }, { guidelineId: EV, locator: 'p.48' }] },
    { text: 'No proven alternative to penicillin in pregnancy: CDC advises desensitisation; Indian 2014 guidance allows erythromycin only after severe allergy such as anaphylaxis, and the partner gets the same regimen.', refs: [{ guidelineId: CD }, { guidelineId: SY, locator: 'p.10' }] },
    { text: 'Hepatitis B: birth-dose vaccine within 24 hours (never omit if late) and HBIG 100 IU (0.5 mL) IM in the other thigh within 12–24 hours.', refs: [{ guidelineId: HB, locator: 'pp.24–27' }, { guidelineId: HF }] },
    { text: 'WHO 2024: tenofovir from the second trimester for HBsAg-positive women with HBV DNA 200,000 IU/mL or more or HBeAg positive; where tests are unavailable, it may be offered to all HBsAg-positive women.', refs: [{ guidelineId: WH }] },
    { text: 'Hepatitis B: breastfeeding is allowed, and HBV is not a reason for caesarean or termination.', refs: [{ guidelineId: HB, locator: 'pp.24–25' }] },
  ],
  sections: [
    {
      id: 'screening',
      title: 'Screening Pathway (Triple Elimination)',
      icon: 'screening',
      body: [
        {
          text: 'First ANC visit to birth.',
          refs: [{ guidelineId: EV, locator: '§2.2, pp.30–31, 45–48' }, { guidelineId: SY, locator: 'Flowchart 2, pp.8–13' }, { guidelineId: HF }],
          flow: {
            caption: 'HIV, syphilis and hepatitis B in pregnancy',
            steps: [
              { title: 'First ANC visit', text: 'Dual HIV/syphilis rapid test; HBsAg.', tone: 'start' },
              { title: 'Result', tone: 'decision', branches: [
                { when: 'HIV reactive', then: 'Confirm; start ART at once; link to ART centre; VL at 32–36 weeks' },
                { when: 'Syphilis reactive', then: 'First BPG 2.4 MU IM now; RPR titre (qualitative and quantitative); test and treat partner' },
                { when: 'HBsAg positive', then: 'High-risk pregnancy; refer to CEmONC centre with vaccine and HBIG; assess for tenofovir' },
                { when: 'All negative', then: 'Rescreen in third trimester or labour if at risk' },
              ] },
              { title: 'Birth (CEmONC)', text: 'HIV: infant ARV within 1 hour. HBV: vaccine + HBIG in the labour room. Syphilis: RPR for the baby of every reactive mother.', tone: 'action' },
              { title: 'Follow-up', text: 'HIV: DNA PCR at 6 weeks. Syphilis: titres after treatment and after delivery; infant review at 14 weeks and 6 months. HBV: infant test after 1 year.' },
            ],
          },
        },
        { text: 'MTCT risk: HIV without ARVs 30–45% with breastfeeding (20–25% without), falling to about 2% and 1% with ART; early untreated syphilis transmits in up to 80%.', refs: [{ guidelineId: EV, locator: 'Tables 1.2.2–1.2.3, p.22' }] },
        { text: 'Indian guidance differs on HBsAg screening: the NVHCP flyer screens all women at the first ANC visit; the 2019 technical guideline screens where institutional deliveries are under 80%, and women arriving in labour.', refs: [{ guidelineId: HF }, { guidelineId: HB, locator: 'pp.15, 28' }] },
      ],
    },
    {
      id: 'hiv',
      title: 'HIV',
      icon: 'drug',
      body: [
        { heading: 'Antiretroviral therapy', text: 'Start ART rapidly in all pregnant women (test and treat). NACO: TLD, one tablet once daily (tenofovir 300 mg + lamivudine 300 mg + dolutegravir 50 mg); dolutegravir-based ART for all newly diagnosed pregnant women at any gestation. BHIVA: dolutegravir with emtricitabine/tenofovir DF, by 24 weeks at the latest (first trimester if VL over 100,000 or CD4 under 200).', refs: [{ guidelineId: EV, locator: '§1.1, p.20' }, { guidelineId: TM, locator: 'ART initiation slides' }, { guidelineId: BH, locator: '§8.3–8.4' }] },
        { heading: 'Viral load', text: 'NACO: an additional viral load at 32–36 weeks for every pregnant woman with HIV (on top of routine VL tests), to decide the baby\'s risk. BHIVA: every 2 months, at 36 weeks and at delivery (target under 50 copies/mL).', refs: [{ guidelineId: EV, locator: 'pp.47–48' }, { guidelineId: TM, locator: 'VL at 32–36 weeks' }, { guidelineId: BH, locator: '§8.5' }] },
        { heading: 'Mode of birth (BHIVA)', text: 'NACO: normal vaginal delivery unless there is an obstetric indication for caesarean; stigma-free birth at a CEmONC facility. BHIVA: VL under 50 planned vaginal birth; 50–399 consider caesarean; 400 or more caesarean; IV zidovudine in labour if VL over 1000 or untreated with unknown VL.', refs: [{ guidelineId: TM, locator: 'Interventions during childbirth' }, { guidelineId: EV, locator: 'pp.45, 47' }, { guidelineId: BH, locator: '§10.9–10.11' }] },
        { heading: 'Baby', text: 'NACO: ARV prophylaxis immediately, preferably within an hour of birth. Weight-based doses: follow the ART centre (NACO dose tables not read).', refs: [{ guidelineId: EV, locator: 'p.48' }, { guidelineId: TM, locator: 'Duration of ARV prophylaxis' }], table: { columns: ['Infant risk (NACO)', 'Prophylaxis'], rows: [['Low risk: mother\'s VL under 1000 copies/mL any time after 32 weeks', 'Single drug (syrup zidovudine or nevirapine) for 6 weeks, whatever the feeding'], ['High risk: mother\'s VL over 1000, no VL report after 32 weeks, not on ART, diagnosed in labour or after birth', 'Dual nevirapine + zidovudine; 12 weeks if breastfed, 6 weeks with exclusive replacement feeding']] } },
        { heading: 'Early infant diagnosis', text: 'NACO uses TNA PCR (total nucleic acid) at 6 weeks or the earliest opportunity; from 6 months, antibody screen first. Follow up at 6 weeks, 6, 12 and 18 months; 6-monthly while breastfeeding. Final diagnosis at 18 months or 3 months after breastfeeding stops, whichever is later. BHIVA (UK) uses 2 weeks of zidovudine for low-risk infants.', refs: [{ guidelineId: NA, locator: 'Glossary, pp.9–10' }, { guidelineId: TM, locator: 'Key activities under EID' }, { guidelineId: BH, locator: '§11.1' }] },
        { heading: 'Feeding', text: 'NACO: exclusive breastfeeding for the first 6 months; avoid mixed feeding (raises transmission); breastfeeding encouraged for at least 12 months and may continue to 24 months or more, with the mother on ART. BHIVA (UK) recommends formula, or exclusive breastfeeding with suppressed VL, stopping by about 6 months.', refs: [{ guidelineId: EV, locator: 'p.47' }, { guidelineId: TM, locator: 'Counselling messages for infant feeding' }, { guidelineId: BH, locator: '§12' }] },
      ],
    },
    {
      id: 'syphilis',
      title: 'Syphilis',
      icon: 'injection',
      body: [
        {
          text: 'Treatment in pregnancy (MoHFW 2014).',
          refs: [{ guidelineId: SY, locator: 'pp.9–10' }],
          table: {
            columns: ['Stage', 'Benzathine penicillin', 'Severe penicillin allergy only'],
            rows: [
              ['Early (primary/secondary, under 2 years; RPR about under 1:8)', '2.4 million IU IM once', 'Erythromycin 500 mg four times daily for 15 days'],
              ['Late (over 2 years or unknown; RPR about over 1:8)', '2.4 million IU IM weekly for 3 weeks', 'Erythromycin 500 mg four times daily for 30 days'],
            ],
          },
        },
        { text: 'NACO EVTHS 2024: give one dose as soon as she screens reactive and ensure complete treatment (three doses). CDC: for late or unknown duration, doses 7 days apart; a gap over 9 days means restarting the course.', refs: [{ guidelineId: EV, locator: 'p.48' }, { guidelineId: CD }] },
        { text: 'Allergy: rule out allergy and keep anaphylaxis drugs ready. CDC: desensitise and treat with penicillin; do not use erythromycin or azithromycin; avoid doxycycline and tetracycline in the 2nd and 3rd trimesters. Erythromycin estolate is contraindicated.', refs: [{ guidelineId: SY, locator: 'pp.9–10' }, { guidelineId: CD }] },
        { text: 'Jarisch-Herxheimer reaction in the second half of pregnancy can cause preterm labour or fetal distress: advise her to seek care for fever, contractions or reduced movements, but do not delay treatment.', refs: [{ guidelineId: CD }] },
        { heading: 'Follow-up', text: 'India: repeat titres at least 12 weeks after treatment (also at 32 weeks and labour), and at 6 and 24 months; RPR for every baby of a reactive mother; infant review at 14 weeks and 6 months. CDC: if treated by 24 weeks, repeat no earlier than 8 weeks and at delivery; a sustained fourfold rise means reinfection or failure; treatment within 30 days of delivery is likely inadequate.', refs: [{ guidelineId: EV, locator: 'pp.48–49' }, { guidelineId: SY, locator: 'pp.9, 11' }, { guidelineId: CD }] },
        { heading: 'Baby', text: 'Confirmed congenital syphilis (infant titre fourfold above the mother’s): 10 days of aqueous penicillin G 50,000 units/kg IV every 12 hours for 7 days then every 8 hours, or procaine penicillin 50,000 units/kg IM daily. Prophylaxis for eligible well babies: benzathine penicillin 50,000 units/kg IM once.', refs: [{ guidelineId: SY, locator: 'pp.14–16' }] },
      ],
    },
    {
      id: 'hbv',
      title: 'Hepatitis B',
      icon: 'prevention',
      body: [
        { text: 'Evaluate every HBsAg-positive pregnant woman for treatment. Tenofovir is preferred in women who may become pregnant; entecavir is not recommended in pregnancy.', refs: [{ guidelineId: HB, locator: 'pp.23–24' }] },
        { text: 'WHO 2024: tenofovir from the second trimester if HBV DNA is 200,000 IU/mL or more or HBeAg positive; where testing is not available, it can be offered to all HBsAg-positive women. Continue until at least delivery or completion of the infant vaccine series, longer if she needs treatment herself. Indian technical guidance gives no pregnancy threshold.', refs: [{ guidelineId: WH }, { guidelineId: HB }] },
        { heading: 'Baby', text: 'Hepatitis B vaccine birth dose as soon as possible, ideally within 24 hours (still give if late). HBIG 0.5 mL (100 IU) IM within 12–24 hours in the other thigh: the NVHCP flyer gives it to all babies of HBsAg-positive mothers; the 2019 technical guideline to babies of HBeAg-positive and/or high viral load mothers. Test the infant only after 1 year.', refs: [{ guidelineId: HB, locator: 'pp.24–27' }, { guidelineId: HF }] },
        { text: 'Breastfeeding is allowed unless the nipple or surrounding skin is injured or diseased. HBV alone is not an indication for caesarean or termination. Vaccinating an already infected mother has no benefit.', refs: [{ guidelineId: HB, locator: 'pp.24–25' }, { guidelineId: BH, locator: '§9.1.7' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'HBIG for the newborn',
      entries: [
        { guidelineId: HF, text: 'All babies of HBsAg-positive mothers.' },
        { guidelineId: HB, text: 'If mother HBeAg positive and/or high viral load.', locator: 'p.25' },
      ],
    },
    {
      domain: 'Syphilis with penicillin allergy',
      entries: [
        { guidelineId: SY, text: 'Erythromycin if severe allergy; treat partner the same.', locator: 'p.10' },
        { guidelineId: CD, text: 'Desensitise; no erythromycin or azithromycin.' },
      ],
    },
    {
      domain: 'HIV infant feeding',
      entries: [
        { guidelineId: EV, text: 'Counsel on feeding options; breastfeeding supported.', locator: 'p.47' },
        { guidelineId: BH, text: 'Formula preferred; breastfeed only with suppressed VL.', locator: '§12' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. NACO maternal regimen (TLD), infant prophylaxis drugs and durations, risk categories, feeding, mode of delivery and EID were added from the NACO EVTHS 2024 training module (slides), not the guideline tables. Still not read: infant nevirapine/zidovudine doses by weight (EVTHS Annexure 7, NACO 2021 Tables 2.5.4–2.5.8) and NACO maternal action when VL is 1000 or more. Use the ART centre protocol for these. NACO EVTHS 2024 clinical chapters 6–8 not read. WHO 2024 HBV guidance was read as its executive summary; the HBIG and breastfeeding chapter was not read. The Indian 2014 syphilis guideline and the NACO 2024 statement differ on the number of doses for early syphilis. No FOGSI guideline was found.',
};
