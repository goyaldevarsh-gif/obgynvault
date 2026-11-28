import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification.
 * Written 2026-11-27 from:
 *  - RCOG GTG 42 (2nd edn, 2012), read in full from a third-party mirror -> rcog-gtg-42
 *  - AAFP 2020 review citing ACOG (read in full)                         -> acog-sd-aafp
 *  - ACOG PB 178 (2017), abstract only                                   -> acog-pb-178
 *  - NICE NG235 Intrapartum care, read to rec 1.9.4                      -> nice-ng235
 *  No FOGSI, ICOG or MoHFW protocol text on shoulder dystocia was found.
 */
const R = 'rcog-gtg-42';
const A = 'acog-sd-aafp';
const AP = 'acog-pb-178';
const N = 'nice-ng235';

export const shoulderDystocia: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-27',
  overview:
    'Shoulder dystocia is a delivery that needs additional obstetric manoeuvres after the head has delivered and gentle traction has failed. It complicates roughly 0.6–0.7% of vaginal births and is largely unpredictable: risk factors such as macrosomia and diabetes have poor predictive value, and about half of affected babies weigh under 4 kg. Management is a team drill. Recognise it, call for help and say "shoulder dystocia" out loud, and start timing. McRoberts position with suprapubic pressure is first line. If that fails, deliver the posterior arm or use internal rotation; all-fours is an alternative. Third-line measures are rarely needed. Never use fundal pressure, and avoid downward, lateral or jerky traction. Document every step and have the baby examined by a neonatal clinician.',
  keyPoints: [
    { text: 'Call for help immediately and state clearly "this is shoulder dystocia". Announce delivery of the head so someone starts timing and calls out the elapsed time.', refs: [{ guidelineId: R, locator: '6.3' }, { guidelineId: A, locator: 'SORT B' }] },
    { text: 'First line: McRoberts position (thighs hyperflexed onto the abdomen) plus suprapubic pressure from the side of the fetal back. AAFP reports McRoberts alone succeeds in up to 42%; RCOG cites success as high as 90%.', refs: [{ guidelineId: R, locator: '6.3.1' }, { guidelineId: A }] },
    { text: 'Do not use fundal pressure. Avoid downward, lateral or rapid traction on the head; use only gentle axial traction.', refs: [{ guidelineId: R, locator: '6.2–6.3' }, { guidelineId: A }] },
    { text: 'Second line: deliver the posterior arm or use internal rotation (Rubin II, Woods screw, reverse Woods), depending on training. All-fours (Gaskin) is an alternative.', refs: [{ guidelineId: R, locator: '6.3.2' }, { guidelineId: A, locator: 'SORT C' }] },
    { text: 'Episiotomy is not always needed; use it only to make room for internal manoeuvres.', refs: [{ guidelineId: R, locator: '6.3' }, { guidelineId: A }] },
    { text: 'Third line (cleidotomy, symphysiotomy, Zavanelli) is rarely needed.', refs: [{ guidelineId: R, locator: '6.3.3' }, { guidelineId: A }] },
    { text: 'Afterwards: neonatal clinician examines the baby, check the mother for PPH and perineal tears, document times and manoeuvres, and debrief the family.', refs: [{ guidelineId: R, locator: '6.4, 7.2' }, { guidelineId: A, locator: 'SORT C' }] },
    { text: 'All maternity staff should do shoulder dystocia drill training at least once a year.', refs: [{ guidelineId: R, locator: '7.1' }, { guidelineId: A, locator: 'SORT B' }] },
  ],
  sections: [
    {
      id: 'definition',
      title: 'Definition & Incidence',
      icon: 'definition',
      body: [
        { text: 'A vaginal cephalic delivery that requires additional obstetric manoeuvres to deliver the body after the head has delivered and gentle traction has failed. A head-to-body interval over 60 seconds has been proposed as an objective definition.', refs: [{ guidelineId: R, locator: '1' }, { guidelineId: A }] },
        { text: 'Incidence: 0.58–0.70% of vaginal deliveries (RCOG); 0.3–3% in the US literature (AAFP).', refs: [{ guidelineId: R, locator: '1' }, { guidelineId: A }] },
        { text: 'ACOG calls it an unpredictable and unpreventable obstetric emergency.', refs: [{ guidelineId: AP, locator: 'Abstract' }] },
        { text: 'No FOGSI, ICOG or MoHFW protocol on shoulder dystocia was found for this review. The steps below come from RCOG and ACOG.', refs: [{ guidelineId: R }] },
      ],
    },
    {
      id: 'risk',
      title: 'Risk Factors & Prediction',
      icon: 'risk',
      body: [
        { text: 'Strongest associations: fetal macrosomia (OR 16.1), previous shoulder dystocia (OR 8.25) and maternal diabetes (OR 1.8). Babies of diabetic mothers have a 2–4-fold higher risk at the same weight.', refs: [{ guidelineId: A }, { guidelineId: R, locator: '4.1' }] },
        { text: 'Prediction is poor. Conventional risk factors predicted only 16% of cases with infant morbidity, 48% of cases occur in babies under 4000 g, and most babies of 4500 g or more do not get shoulder dystocia. Ultrasound weight estimates at term have an error of at least 10%.', refs: [{ guidelineId: R, locator: '4.1, Table 1' }, { guidelineId: A }] },
        { text: 'RCOG does not recommend prediction models.', refs: [{ guidelineId: R, locator: '4.1' }] },
      ],
    },
    {
      id: 'prevention',
      title: 'Prevention & Previous Shoulder Dystocia',
      icon: 'prevention',
      body: [
        { heading: 'Induction', text: 'Induction of labour does not prevent shoulder dystocia in non-diabetic women with a suspected big baby (RCOG); ACOG does not recommend induction for this purpose. It may reduce rates in gestational diabetes.', refs: [{ guidelineId: R, locator: '5.1.1' }, { guidelineId: A }] },
        { heading: 'Elective caesarean', text: 'RCOG: consider for diabetic women with an estimated fetal weight over 4.5 kg. ACOG (as cited by AAFP): consider at an estimated weight of 5000 g without diabetes or 4500 g with diabetes.', refs: [{ guidelineId: R, locator: '5.1.2' }, { guidelineId: A }] },
        { text: 'About 443 caesareans are needed to prevent one permanent brachial plexus injury in diabetic women with EFW over 4.5 kg, versus 3695 in non-diabetic women.', refs: [{ guidelineId: R, locator: '5.1.2' }] },
        { heading: 'Previous shoulder dystocia', text: 'Recurrence is 1–25%. Either caesarean or vaginal birth can be appropriate after discussion. NICE lists previous shoulder dystocia as a reason to plan birth in an obstetric unit.', refs: [{ guidelineId: R, locator: '5.2' }, { guidelineId: N, locator: 'Table 7, 1.3.9' }] },
      ],
    },
    {
      id: 'recognition',
      title: 'Recognition',
      icon: 'diagnosis',
      body: [
        { text: 'Signs: difficulty delivering the face and chin, the head retracting against the perineum ("turtle sign"), failure of restitution and failure of the shoulders to descend.', refs: [{ guidelineId: R, locator: '6.2' }] },
        { text: 'Use only routine axial traction (in line with the fetal spine) to judge whether the shoulders will deliver. Prophylactic McRoberts before the head delivers is not recommended.', refs: [{ guidelineId: R, locator: '6.2' }] },
      ],
    },
    {
      id: 'management',
      title: 'Step-by-Step Management',
      icon: 'emergency',
      body: [
        {
          text: 'Shoulder dystocia drill (RCOG GTG 42 algorithm; ACOG order the same in principle).',
          refs: [{ guidelineId: R, locator: '6.3' }, { guidelineId: A }],
          flow: {
            caption: 'Shoulder dystocia',
            steps: [
              { title: 'Recognise and call for help', text: 'Turtle sign, no restitution. Call senior obstetrician, neonatal team, anaesthetist; say "shoulder dystocia"; start timing. No fundal pressure, no downward traction.', tone: 'urgent' },
              { title: 'McRoberts + suprapubic pressure', text: 'Flat, thighs hyperflexed onto abdomen; pressure from the side of the fetal back; routine axial traction.' },
              { title: 'Episiotomy only if needed', text: 'If a whole hand cannot enter the vagina for internal manoeuvres.' },
              { title: 'Internal manoeuvres', tone: 'decision', branches: [
                { when: 'Posterior arm', then: 'Flex elbow, sweep forearm across chest, deliver hand' },
                { when: 'Internal rotation', then: 'Rubin II, Woods screw or reverse Woods' },
              ] },
              { title: 'All-fours', text: 'Hands and knees, gentle traction on the posterior (now uppermost) shoulder, then repeat internal manoeuvres.' },
              { title: 'Third line (rare)', text: 'Cleidotomy, symphysiotomy or Zavanelli then caesarean.', tone: 'urgent' },
            ],
          },
        },
        { text: 'Success rates: McRoberts alone up to 42%; posterior arm with the combined approach delivered 95% within four minutes; all-fours 83% in one case series.', refs: [{ guidelineId: A }, { guidelineId: R, locator: '6.3.2' }] },
        { text: 'Posterior arm delivery carries a humeral fracture risk of 2–12%. One study linked rotational methods to fewer brachial plexus injuries and fractures. Choice between them depends on the clinician\'s training.', refs: [{ guidelineId: R, locator: '6.3.2' }] },
        { text: 'Symphysiotomy carries a high rate of serious maternal morbidity and poor neonatal outcome.', refs: [{ guidelineId: R, locator: '6.3.3' }] },
        { heading: 'Time', text: 'No fixed time limit is set. The risk of hypoxic-ischaemic injury is very low up to 5 minutes, but in the CESDI report 47% of babies who died did so within 5 minutes of the head delivering. Work calmly and quickly.', refs: [{ guidelineId: R, locator: '6.3' }] },
      ],
    },
    {
      id: 'avoid',
      title: 'What Not to Do',
      icon: 'complications',
      body: [
        { text: 'No fundal pressure: it is linked to neonatal injury and uterine rupture.', refs: [{ guidelineId: R, locator: '6.3' }, { guidelineId: A }] },
        { text: 'No downward, lateral or rapid traction on the fetal head; these are more likely to avulse nerve roots. RCOG advises avoiding downward traction in all births.', refs: [{ guidelineId: R, locator: '6.2' }, { guidelineId: A }] },
        { text: 'Do not use scissors for deliberate clavicle fracture (AAFP).', refs: [{ guidelineId: A }] },
      ],
    },
    {
      id: 'complications',
      title: 'Complications & Aftercare',
      icon: 'complications',
      body: [
        { heading: 'Baby', text: 'Brachial plexus injury in 2.3–16% of shoulder dystocia deliveries (RCOG; up to 20% transient, AAFP); under 10% are permanent. Some brachial plexus injuries occur without shoulder dystocia, even after caesarean. Also humeral and clavicle fractures and hypoxic injury.', refs: [{ guidelineId: R, locator: '1' }, { guidelineId: A }] },
        { text: 'The baby should be examined for injury by a neonatal clinician.', refs: [{ guidelineId: R, locator: '6.4' }] },
        { heading: 'Mother', text: 'Postpartum haemorrhage in about 11% and third- or fourth-degree tears in 3.8%. Examine the perineum and vagina carefully.', refs: [{ guidelineId: R, locator: '1' }] },
      ],
    },
    {
      id: 'documentation',
      title: 'Documentation & Training',
      icon: 'documentation',
      body: [
        {
          text: 'Record:',
          refs: [{ guidelineId: R, locator: '7.2' }, { guidelineId: A, locator: 'SORT C' }],
          table: {
            columns: ['Item'],
            rows: [
              ['Time of delivery of the head and of the body (head-to-body interval)'],
              ['Which shoulder was anterior and the position of the head at delivery'],
              ['Every manoeuvre, its timing and order'],
              ['Staff present and the time each arrived'],
              ['Perineal and vaginal examination, estimated blood loss'],
              ['Apgar scores, cord blood gases, neonatal assessment'],
            ],
          },
        },
        { text: 'Train all maternity staff at least yearly with team drills. In one UK unit neonatal injury fell from 9.3% to 2.3% after training; in a trial, staff managing a simulated case within 5 minutes rose from 43% to 83%. RCOG advises teaching its algorithm rather than mnemonics or eponyms.', refs: [{ guidelineId: R, locator: '7.1' }, { guidelineId: A, locator: 'SORT B' }] },
        { text: 'Clear announcement, calling for help and timing cut brachial plexus injury at discharge from 7.6% to 1.3% in one report.', refs: [{ guidelineId: A }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Elective caesarean for suspected macrosomia',
      entries: [
        { guidelineId: R, text: 'Consider in diabetes with EFW >4.5 kg; no separate non-diabetic threshold.', locator: '5.1.2' },
        { guidelineId: A, text: 'Consider at EFW 5000 g (no diabetes) or 4500 g (diabetes).' },
      ],
    },
    {
      domain: 'Second-line manoeuvre',
      entries: [
        { guidelineId: R, text: 'Posterior arm or internal rotation by training; all-fours an option.', locator: '6.3.2' },
        { guidelineId: A, text: 'Posterior arm after McRoberts + suprapubic; then rotations, all-fours.', locator: 'SORT C' },
      ],
    },
  ],
  editorNote:
    'Sources read on 27 Nov 2026: RCOG GTG 42 (2nd edition, 2012) in full from a third-party mirror, not rcog.org.uk; whether a newer edition exists was not confirmed. ACOG Practice Bulletin 178 (2017) is paywalled, so only its abstract was read and ACOG positions come from the 2020 AAFP review; its reaffirmation was not confirmed. NICE NG235 was read only up to recommendation 1.9.4. No FOGSI, ICOG or MoHFW shoulder dystocia protocol was found; the MoHFW Labour Room Guidelines were partly read with no relevant content, and Dakshata/LaQshya documents were not opened. The how-to wording for each manoeuvre and the list of who to call are standard technique descriptions, not quoted from the sources. Check all figures against the original documents.',
};
