import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - FOGSI Anti-D key practice points (2022, read)                          -> fogsi-antid-2022
 *  - ICOG–FOGSI GCPR on anti-D (about 2009, read)                           -> icog-antid-gcpr
 *  - ACOG PB 181 (2017, full text read)                                      -> acog-pb-181
 *  - ACOG Clinical Practice Update 2024 (abstract + secondary summary)       -> acog-cpu-rh-2024
 *  - ACOG PB 192 (Level A statements via Guideline Central only)             -> acog-pb-192
 *  - BSH/SHOT anti-D aide memoire (2023, read)                               -> bsh-antid-aide
 *  - BSH red cell antibodies guideline 2025 (page + summary only)            -> bsh-red-cell-2025
 *  - NICE TA156 and HTG420 (DG25), recommendations read                      -> nice-ta156, nice-htg420
 */
const F = 'fogsi-antid-2022';
const I = 'icog-antid-gcpr';
const A = 'acog-pb-181';
const AU = 'acog-cpu-rh-2024';
const AM = 'acog-pb-192';
const B = 'bsh-antid-aide';
const BR = 'bsh-red-cell-2025';
const N = 'nice-ta156';
const NG = 'nice-htg420';

export const rhIsoimmunisation: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'An RhD-negative woman carrying an RhD-positive baby can make anti-D antibodies after fetomaternal haemorrhage. In a later pregnancy these cross the placenta and cause haemolytic disease of the fetus and newborn (HDFN), from mild jaundice to fetal anaemia, hydrops and death. Before anti-D prophylaxis about 16% of RhD-negative women became sensitised after two RhD-positive births; postpartum anti-D cut this to about 2%. Prevention rests on blood group and antibody screening at booking and 28 weeks, anti-D after every sensitising event, routine antenatal anti-D at 28 weeks, and a postnatal dose within 72 hours when the baby is RhD-positive. Dosing differs between India (FOGSI: 750 IU and 1500 IU), the UK (500 IU and above) and the US (300 micrograms). Women who are already sensitised need specialist fetal medicine care with antibody monitoring and MCA Doppler.',
  keyPoints: [
    { text: 'Check blood group, Rh and indirect Coombs test (antibody screen) at the first visit, whatever the husband\'s blood group, and repeat the antibody screen at 28 weeks.', refs: [{ guidelineId: F, locator: 'Screening' }, { guidelineId: I, locator: 'p.6' }, { guidelineId: BR, locator: 'Summary' }] },
    { text: 'FOGSI doses: 150 mcg (750 IU) IM for sensitising events before 20 weeks; 300 mcg (1500 IU) after 20 weeks, at 28 weeks, and after delivery. If 150 mcg is not available, give 300 mcg.', refs: [{ guidelineId: F, locator: 'Sensitising events, RAADP, Postnatal' }] },
    { text: 'Routine antenatal prophylaxis: FOGSI and ACOG give a single 300 mcg (1500 IU) dose at 28 weeks after a negative antibody screen. UK alternatives: 1500 IU at 28–30 weeks, or at least 500 IU at 28 and 34 weeks.', refs: [{ guidelineId: F, locator: 'RAADP' }, { guidelineId: A, locator: 'Level A' }, { guidelineId: B, locator: 'RAADP' }, { guidelineId: N, locator: '1.1' }] },
    { text: 'After delivery, test cord blood; if the baby is RhD-positive give anti-D within 72 hours. If missed, give it as soon as possible: benefit up to 10 days, and some up to 28 days.', refs: [{ guidelineId: F, locator: 'Postnatal' }, { guidelineId: A, locator: 'Level A' }, { guidelineId: B, locator: 'Postnatal' }] },
    { text: 'Give anti-D within 72 hours of every sensitising event: miscarriage, termination, ectopic, molar evacuation, invasive procedures, antepartum bleeding, abdominal trauma, ECV, intrauterine death.', refs: [{ guidelineId: A, locator: 'Box 1' }, { guidelineId: F, locator: 'Sensitising events' }, { guidelineId: B, locator: 'Appendix 1' }] },
    { text: 'Before 12 weeks practice is changing: ACOG (2024) now suggests forgoing routine Rh testing and anti-D after abortion or pregnancy loss before 12 weeks, while FOGSI and the UK still give it after surgical, ectopic and molar events.', refs: [{ guidelineId: AU }, { guidelineId: F, locator: 'Sensitising events' }, { guidelineId: B, locator: '<12 weeks' }] },
    { text: 'Anti-D is only for women who are not already sensitised. Sensitised women (anti-D, anti-c, anti-K) need early referral to fetal medicine; antibody titres are not used to monitor anti-K.', refs: [{ guidelineId: I, locator: 'p.7' }, { guidelineId: AM, locator: 'Level A' }, { guidelineId: BR, locator: 'Summary' }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Background & Burden',
      icon: 'definition',
      body: [
        { text: 'Without prophylaxis, about 16% of RhD-negative women became sensitised after two RhD-positive deliveries; postpartum anti-D reduced this to about 2%.', refs: [{ guidelineId: B, locator: 'BSH 2014 page' }] },
        { text: 'Anti-D, anti-K (Kell) and anti-c are the antibodies most likely to cause significant HDFN.', refs: [{ guidelineId: BR, locator: 'Summary' }] },
        { text: 'Fetomaternal haemorrhage is usually under 4 mL in the first trimester and under 10 mL at delivery.', refs: [{ guidelineId: F, locator: 'FMH' }] },
      ],
    },
    {
      id: 'screening',
      title: 'Screening',
      icon: 'lab',
      body: [
        { text: 'FOGSI: blood group, Rh and indirect Coombs test at the first visit, regardless of the husband\'s Rh type. If negative, repeat the ICT at 28 weeks. After anti-D has been given, a repeat ICT is best avoided, or interpreted with specialist input, because passive anti-D is detected.', refs: [{ guidelineId: F, locator: 'Screening' }] },
        { text: 'BSH: test all women for ABO, D group and clinically significant red cell antibodies at booking and at 28 weeks. Take the 28-week sample before giving routine anti-D, but do not wait for the result.', refs: [{ guidelineId: BR, locator: 'Summary' }, { guidelineId: B, locator: 'Group and screen' }] },
        { text: 'Document the baby\'s blood group and Rh at delivery (cord blood).', refs: [{ guidelineId: F, locator: 'Postnatal' }] },
        { heading: 'Weak D', text: 'ACOG advises giving anti-D to women with a weak D type in appropriate situations, and suggests molecular RHD typing to clarify. The older ICOG GCPR said weak D (Du-positive) women need no anti-D; check your laboratory policy.', refs: [{ guidelineId: A, locator: 'Weak D' }, { guidelineId: I, locator: 'p.6' }] },
      ],
    },
    {
      id: 'sensitising-events',
      title: 'Sensitising Events & Doses',
      icon: 'injection',
      body: [
        {
          text: 'Sensitising events that need anti-D in a non-sensitised RhD-negative woman:',
          refs: [{ guidelineId: A, locator: 'Box 1' }, { guidelineId: B, locator: 'Appendix 1' }, { guidelineId: F, locator: 'Sensitising events' }],
          table: {
            columns: ['Group', 'Events'],
            rows: [
              ['Early pregnancy', 'Miscarriage (threatened with significant bleeding, or complete), medical or surgical termination, ectopic pregnancy, molar evacuation'],
              ['Procedures', 'CVS, amniocentesis, cordocentesis, embryo reduction, other in-utero procedures'],
              ['Bleeding and trauma', 'Antepartum haemorrhage, placenta praevia with bleeding, abruption, abdominal trauma'],
              ['Other', 'External cephalic version, intrauterine death or stillbirth, delivery by any route, intraoperative cell salvage'],
            ],
          },
        },
        {
          text: 'Doses by gestation (1 mcg = 5 IU):',
          refs: [{ guidelineId: F, locator: 'Sensitising events' }, { guidelineId: I, locator: 'p.6, p.8' }, { guidelineId: B, locator: 'Doses' }, { guidelineId: A, locator: 'Early pregnancy' }],
          table: {
            columns: ['Gestation', 'FOGSI 2022', 'UK (BSH/SHOT)', 'ACOG 2017'],
            rows: [
              ['Before 12 weeks', '150 mcg (750 IU)', 'At least 500 IU for surgical evacuation, ectopic, molar or miscarriage', '50–120 mcg (at least 50 mcg); see 2024 update'],
              ['12 to 20 weeks', '150 mcg (750 IU)', '500 IU (250 IU in BSH, but no 250 IU vials)', '300 mcg for miscarriage; 125 or 300 mcg after procedures'],
              ['After 20 weeks', '300 mcg (1500 IU)', 'At least 500 IU plus an FMH test and extra doses as needed', '300 mcg'],
            ],
          },
        },
        { text: 'Give anti-D ideally within 72 hours of the event; some protection remains up to 10 days. FOGSI repeats a dose only if events are at least 3 weeks apart. UK: for ongoing bleeding treated as one event, at least 500 IU every 6 weeks with FMH testing every 2 weeks from 20 weeks.', refs: [{ guidelineId: F, locator: 'Timing' }, { guidelineId: B, locator: 'Ongoing bleeding' }] },
        { text: 'Molar pregnancy: FOGSI says anti-D is not needed for a complete mole but is advised if histology is delayed. ACOG says it is reasonable at uterine evacuation for a suspected mole.', refs: [{ guidelineId: F, locator: 'Sensitising events' }, { guidelineId: A, locator: 'Level C' }] },
        { text: 'Ectopic pregnancy: ACOG recommends anti-D for all RhD-negative women with ectopic pregnancy (2017; the 2024 update was not seen on this point).', refs: [{ guidelineId: A, locator: 'Ectopic' }] },
        { text: 'Route: IM into the deltoid or anterolateral thigh, not the buttock. Use an IV preparation if IM injection is contraindicated (for example thrombocytopenia).', refs: [{ guidelineId: I, locator: 'p.7' }, { guidelineId: F, locator: 'Other points' }] },
      ],
    },
    {
      id: 'early-pregnancy',
      title: 'Early Pregnancy (<12 Weeks): Changing Practice',
      icon: 'injection',
      body: [
        { text: 'ACOG 2024 Clinical Practice Update: for abortion or pregnancy loss before 12+0 weeks, ACOG now suggests forgoing routine Rh testing and anti-D, whether managed medically or surgically; it can still be offered through shared decision-making.', refs: [{ guidelineId: AU }] },
        { text: 'UK practice still gives at least 500 IU before 12 weeks after surgical evacuation, ectopic pregnancy, molar pregnancy or miscarriage, without an FMH test.', refs: [{ guidelineId: B, locator: '<12 weeks' }] },
        { text: 'FOGSI 2022 lists threatened abortion with significant bleeding, miscarriage, medical or surgical termination, ectopic and molar pregnancy as indications for 150 mcg before 20 weeks.', refs: [{ guidelineId: F, locator: 'Sensitising events' }] },
        { text: 'ACOG 2017 made no evidence-based recommendation for threatened miscarriage with a live embryo before 12 weeks.', refs: [{ guidelineId: A, locator: 'Early pregnancy' }] },
      ],
    },
    {
      id: 'raadp',
      title: 'Routine Antenatal Prophylaxis (28 Weeks)',
      icon: 'drug',
      body: [
        {
          text: 'Regimens:',
          refs: [{ guidelineId: F, locator: 'RAADP' }, { guidelineId: A, locator: 'Level A' }, { guidelineId: B, locator: 'RAADP' }, { guidelineId: I, locator: 'p.8 Rec 2' }],
          table: {
            columns: ['Source', 'Regimen'],
            rows: [
              ['FOGSI 2022', '300 mcg (1500 IU) IM at 28 weeks, only if the 28-week ICT is negative; a single dose is as effective as two (Grade B)'],
              ['ACOG 2017', 'Single 300 microgram dose at 28 weeks after an antibody screen'],
              ['UK (BSH/SHOT)', '1500 IU at 28–30 weeks, or at least 500 IU at 28 and again at 34 weeks'],
              ['ICOG GCPR (older)', '100 mcg at 28 and 34 weeks, or a single 300 mcg at 28 weeks'],
            ],
          },
        },
        { text: 'Routine antenatal prophylaxis is given regardless of any anti-D already given for a sensitising event.', refs: [{ guidelineId: B, locator: 'RAADP' }] },
        { text: 'NICE recommends routine antenatal anti-D for RhD-negative women not known to be sensitised, using the lowest-cost preparation.', refs: [{ guidelineId: N, locator: '1.1' }] },
        { heading: 'Fetal RHD genotyping', text: 'Cell-free fetal DNA testing of maternal blood can show an RhD-negative fetus, so anti-D can be avoided. NICE recommends it if it costs £24 or less; UK guidance omits anti-D when the current-pregnancy result is RhD-negative. ACOG (2017) did not recommend it routinely at the then cost (sensitivity above 99% in the first trimester; 2–6% inconclusive).', refs: [{ guidelineId: NG, locator: '1.1' }, { guidelineId: B, locator: 'cffDNA' }, { guidelineId: A, locator: 'cfDNA' }] },
      ],
    },
    {
      id: 'postnatal',
      title: 'Postnatal Anti-D & FMH Testing',
      icon: 'followup',
      body: [
        { text: 'Test cord blood of every baby born to an RhD-negative mother. If the baby is RhD-positive (or unknown, UK), give anti-D within 72 hours: FOGSI and ACOG 300 mcg (1500 IU); UK at least 500 IU plus an FMH test. This applies to vaginal and caesarean birth.', refs: [{ guidelineId: F, locator: 'Postnatal' }, { guidelineId: A, locator: 'Level A' }, { guidelineId: B, locator: 'Postnatal' }, { guidelineId: I, locator: 'p.7' }] },
        { text: 'FOGSI: anti-D may be withheld if delivery is within 3 weeks of routine antenatal prophylaxis and there is no excess FMH. Give anti-D even if a tubal ligation is done.', refs: [{ guidelineId: F, locator: 'Postnatal, Other points' }] },
        { heading: 'Large fetomaternal haemorrhage', text: '300 mcg covers about 30 mL of fetal whole blood (ACOG), or about 15 mL of fetal red cells (ICOG); ICOG adds 10 mcg for each extra 0.5 mL of fetal red cells. Kleihauer or flow cytometry quantifies the bleed; a rosette test screens for more than 2 mL. In India these tests are often unavailable, so FOGSI advises a haematologist\'s input if a large bleed is suspected.', refs: [{ guidelineId: A, locator: 'FMH' }, { guidelineId: I, locator: 'pp.6–7' }, { guidelineId: F, locator: 'FMH' }] },
        { text: 'Extra doses can be given IM at separate sites every 12 hours, or IV. After intraoperative cell salvage, the UK gives at least 1500 IU and tests FMH 30–45 minutes after reinfusion.', refs: [{ guidelineId: A, locator: 'FMH' }, { guidelineId: B, locator: 'Cell salvage' }] },
        { text: 'Record verbal consent; if the woman declines, document the refusal and have it signed.', refs: [{ guidelineId: F, locator: 'Other points' }] },
      ],
    },
    {
      id: 'sensitised',
      title: 'The Sensitised Woman',
      icon: 'fetus',
      body: [
        { text: 'Do not give anti-D to a woman who already has immune anti-D. Distinguish immune from passive anti-D (from recent prophylaxis) with laboratory advice.', refs: [{ guidelineId: I, locator: 'p.7' }, { guidelineId: AM, locator: 'Level A' }, { guidelineId: BR, locator: '6.1.1' }] },
        { text: 'Refer to specialist obstetric or fetal medicine care. BSH 2025: refer immune anti-K at first detection whatever the titre, and offer paternal and fetal genotyping.', refs: [{ guidelineId: F, locator: 'Sensitised women' }, { guidelineId: BR, locator: 'Fig. 1' }] },
        { text: 'ACOG: determine the father\'s red cell antigen status as part of initial management. Antibody titres are not appropriate for monitoring Kell sensitisation, and serial titres are not useful after a previously affected fetus or baby.', refs: [{ guidelineId: AM, locator: 'Level A' }] },
        { text: 'Middle cerebral artery peak systolic velocity Doppler, in a centre with trained staff, is the standard non-invasive test for fetal anaemia.', refs: [{ guidelineId: AM, locator: 'Level A' }] },
        { text: 'Critical titres, MCA cut-offs, intrauterine transfusion criteria and delivery timing could not be verified from the full guideline texts for this draft and are not quoted. Follow your fetal medicine unit\'s protocol.', refs: [{ guidelineId: BR }, { guidelineId: AM }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Dose for events after 20 weeks',
      entries: [
        { guidelineId: F, text: '300 mcg (1500 IU) IM.', locator: 'Sensitising events' },
        { guidelineId: A, text: '300 micrograms.', locator: 'Clinical considerations' },
        { guidelineId: B, text: 'At least 500 IU plus FMH test and top-up.', locator: 'Doses' },
      ],
    },
    {
      domain: 'Loss or abortion before 12 weeks',
      entries: [
        { guidelineId: F, text: 'Give 150 mcg (750 IU).', locator: 'Sensitising events' },
        { guidelineId: AU, text: 'Suggest forgoing routine testing and anti-D (2024).' },
        { guidelineId: B, text: 'At least 500 IU after surgical, ectopic, molar or miscarriage.', locator: '<12 weeks' },
      ],
    },
    {
      domain: 'Routine antenatal prophylaxis',
      entries: [
        { guidelineId: F, text: '300 mcg single dose at 28 weeks.', locator: 'RAADP' },
        { guidelineId: A, text: '300 mcg single dose at 28 weeks.', locator: 'Level A' },
        { guidelineId: B, text: '1500 IU at 28–30 weeks, or ≥500 IU at 28 and 34.', locator: 'RAADP' },
      ],
    },
    {
      domain: 'Fetal RHD genotyping (cffDNA)',
      entries: [
        { guidelineId: A, text: 'Not routine at current cost (2017).', locator: 'cfDNA' },
        { guidelineId: NG, text: 'Recommended if ≤£24 per test.', locator: '1.1' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: FOGSI anti-D key practice points (2022) and the older ICOG–FOGSI GCPR in full; ACOG PB 181 in full (via a third-party copy); the BSH/SHOT anti-D aide memoire (2023); NICE TA156 and HTG420 recommendations. Not read in full: ACOG PB 192 (only Level A statements), the ACOG 2024 update (abstract and secondary summary only; its ectopic and molar advice was not seen), the BSH 2014 anti-D guideline and the BSH 2025 red cell antibody guideline. RCOG GTG 65 was archived in January 2026 and replaced by BSH 2025. Because of this, management of sensitised women (titres, MCA thresholds, IUT, delivery timing) is deliberately not quoted. No MoHFW or ICMR guidance was searched. FOGSI doses (750/1500 IU) are higher than UK doses (500 IU); both are shown.',
};
