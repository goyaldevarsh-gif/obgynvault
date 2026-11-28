import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first.
 * Written 2026-11-28 from FOGSI-ICOG GCPR Modern Management of Urinary Incontinence (2024), NICE NG123 (2019) and
 * EAU Non-neurogenic Female LUTS guideline (2026 edition, partly read).
 */
const F = 'fogsi-ui-gcpr-2024';
const N = 'nice-ng123';
const E = 'eau-fluts-2026';

export const urinaryIncontinence: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Classify the incontinence as stress, urgency (overactive bladder) or mixed from the history, a bladder diary (at least 3 days, NICE), urine dipstick and examination; measure post-void residual if voiding dysfunction or recurrent UTI is suspected. Urodynamics is not needed before first surgery for clear stress incontinence. Start with conservative care: supervised pelvic floor muscle training for at least 3 months for stress or mixed incontinence, bladder training for at least 6 weeks for urgency, weight loss if BMI over 30, and caffeine and fluid review. For overactive bladder, add an anticholinergic (extended-release, mindful of anticholinergic burden and avoiding immediate-release oxybutynin in frail older women) or mirabegron, and vaginal oestrogen for genitourinary syndrome of menopause. Refractory urgency: botulinum toxin 100 units or sacral neuromodulation. Stress incontinence surgery: retropubic mid-urethral sling, colposuspension or autologous fascial sling after counselling, with bulking agents for women unfit for surgery.',
  keyPoints: [
    { text: 'Assessment: bladder diary for at least 3 days (FOGSI: 24 hours), urine dipstick for all, post-void residual (bladder scan) if voiding dysfunction or recurrent UTI.', refs: [{ guidelineId: N, locator: '1.3.5–1.3.13' }, { guidelineId: F, locator: 'p.4' }] },
    { text: 'No urodynamics before first surgery when stress incontinence is clear on history and examination; do them for urgency-predominant or unclear type, voiding dysfunction, anterior/apical prolapse or previous surgery.', refs: [{ guidelineId: N, locator: '1.3.15–1.3.16' }] },
    { text: 'Supervised pelvic floor muscle training for at least 3 months (at least 8 contractions, 3 times a day) first line for stress or mixed incontinence. Bladder training for at least 6 weeks for urgency.', refs: [{ guidelineId: N, locator: '1.4.4–1.4.11' }, { guidelineId: E, locator: '4.2.4' }, { guidelineId: F, locator: 'pp.4–5, 11' }] },
    { text: 'OAB drugs: anticholinergic (extended-release preferred) or mirabegron (FOGSI, EAU); NICE starts with the lowest-cost anticholinergic. Avoid immediate-release oxybutynin in frail older women; consider total anticholinergic burden. Review at 4 weeks.', refs: [{ guidelineId: F, locator: 'pp.4–6' }, { guidelineId: E, locator: '4.1.4.b' }, { guidelineId: N, locator: '1.4.26–1.4.38' }] },
    { text: 'Refractory urgency: botulinum toxin A 100 units into the detrusor (risk of self-catheterisation about 5%) or sacral neuromodulation after MDT review.', refs: [{ guidelineId: N, locator: '1.4.48–1.4.52' }, { guidelineId: F, locator: 'pp.6–7' }, { guidelineId: E, locator: '4.1.4.c' }] },
    { text: 'Stress incontinence surgery: mid-urethral sling (counsel that it is a permanent implant), open colposuspension or autologous fascial sling. Bulking agents if surgery is unsuitable (less effective, may need repeat).', refs: [{ guidelineId: F, locator: 'pp.8–10' }, { guidelineId: N, locator: '1.5.3–1.5.11' }] },
    { text: 'Do not offer systemic HRT for incontinence; offer vaginal oestrogen for genitourinary syndrome of menopause.', refs: [{ guidelineId: N, locator: '1.4.36' }, { guidelineId: F, locator: 'pp.4–7' }, { guidelineId: E, locator: '4.1.4.b.4' }] },
  ],
  sections: [
    {
      id: 'stepwise',
      title: 'Step-by-step Management',
      icon: 'management',
      body: [
        {
          text: 'From first visit to specialist treatment.',
          refs: [{ guidelineId: N, locator: '1.3–1.5' }, { guidelineId: F }, { guidelineId: E }],
          flow: {
            caption: 'Urinary incontinence in women',
            steps: [
              { title: 'Assess', text: 'History (stress vs urgency), bladder diary 3 days, urine dipstick, pelvic and prolapse examination, PVR if voiding symptoms or recurrent UTI. Consider referral for bladder or urethral pain, suspected neurological disease, faecal incontinence, voiding difficulty, previous pelvic surgery or radiotherapy.', tone: 'start' },
              { title: 'Type', tone: 'decision', branches: [
                { when: 'Stress', then: 'Supervised PFMT 3 months; weight loss if BMI over 30' },
                { when: 'Urgency / OAB', then: 'Bladder training 6 weeks; caffeine and fluid review; then drug' },
                { when: 'Mixed', then: 'Treat the most bothersome component first' },
              ] },
              { title: 'Still bothersome', tone: 'decision', branches: [
                { when: 'Stress', then: 'Discuss surgery: sling, colposuspension, fascial sling, or bulking agent' },
                { when: 'Urgency', then: 'Anticholinergic or mirabegron; vaginal oestrogen if GSM; review at 4 weeks' },
              ] },
              { title: 'Refractory urgency', text: 'Urodynamics and MDT review; botulinum toxin 100 U or sacral neuromodulation; PTNS in selected cases.', tone: 'action' },
            ],
          },
        },
      ],
    },
    {
      id: 'conservative',
      title: 'Conservative Measures',
      icon: 'lifestyle',
      body: [
        { text: 'Pelvic floor muscle training: supervised and as intensive as possible, at least 3 months, at least 8 contractions 3 times a day. FOGSI: with or without biofeedback; vaginal cones help stress incontinence; electrical stimulation may help urgency but not stress.', refs: [{ guidelineId: N, locator: '1.4.4–1.4.5' }, { guidelineId: E, locator: '4.1.4.a.5, 4.2.4.a.3' }, { guidelineId: F, locator: 'pp.4–5' }] },
        { text: 'Bladder training for at least 6 weeks for urgency or mixed incontinence; prompted voiding for dependent elderly or cognitively impaired women.', refs: [{ guidelineId: N, locator: '1.4.11' }, { guidelineId: F, locator: 'pp.4–5' }] },
        { text: 'Lifestyle: weight loss if BMI over 30 (FOGSI notes only short-term benefit; do not delay treatment); trial of caffeine reduction (helps urgency and frequency); adjust fluid intake if high or low (FOGSI: cutting intake by about 25% helps OAB symptoms); stop smoking; treat constipation.', refs: [{ guidelineId: N, locator: '1.4.1–1.4.3' }, { guidelineId: E, locator: '4.1.4.a.4' }, { guidelineId: F, locator: 'pp.4–5' }] },
      ],
    },
    {
      id: 'drugs',
      title: 'Drugs for Overactive Bladder',
      icon: 'drug',
      body: [
        { text: 'First drug: FOGSI and EAU allow an anticholinergic or mirabegron (the only beta-3 agonist in India); prefer extended-release anticholinergics. NICE: anticholinergic with the lowest acquisition cost; mirabegron as per its technology appraisal. Combine mirabegron with an anticholinergic if needed (EAU: add to solifenacin 5 mg).', refs: [{ guidelineId: F, locator: 'pp.4–6' }, { guidelineId: E, locator: '4.1.4.b.1–2' }, { guidelineId: N, locator: '1.4.30–1.4.32' }] },
        { text: 'Older women: do not offer immediate-release oxybutynin to those at risk of sudden deterioration; assess total anticholinergic burden (cognition). Review 4 weeks after starting; if ineffective, change dose or drug.', refs: [{ guidelineId: N, locator: '1.4.26–1.4.29, 1.4.38' }, { guidelineId: E, locator: '4.1.4.b.3' }] },
        { text: 'NICE: do not offer flavoxate, propantheline or imipramine. FOGSI allows flavoxate short term.', refs: [{ guidelineId: N, locator: '1.4.28' }, { guidelineId: F, locator: 'pp.4–6' }] },
        { text: 'Vaginal oestrogen for postmenopausal women with genitourinary syndrome of menopause; no systemic HRT for incontinence (FOGSI: may worsen stress incontinence).', refs: [{ guidelineId: F, locator: 'pp.4–7' }, { guidelineId: N, locator: '1.4.36' }, { guidelineId: E, locator: '4.1.4.b.4' }] },
        { text: 'Duloxetine for stress incontinence: NICE not first line and not routine second line; FOGSI in selected women avoiding surgery, titrating up and down; EAU: improves symptoms but cure is unlikely.', refs: [{ guidelineId: N, locator: '1.4.35' }, { guidelineId: F, locator: 'p.7' }, { guidelineId: E, locator: '4.2.4.b.2' }] },
      ],
    },
    {
      id: 'refractory',
      title: 'Refractory Overactive Bladder',
      icon: 'injection',
      body: [
        { text: 'Botulinum toxin A: 100 units into the detrusor as the first dose (NICE: up to 200 units if inadequate). Counsel: temporary effect needing repeat injections (every 6–11 months, shortening over time), about 5% need clean intermittent self-catheterisation, UTI risk.', refs: [{ guidelineId: N, locator: '1.4.48–1.4.49' }, { guidelineId: F, locator: 'pp.6–7' }, { guidelineId: E, locator: '4.1.4.c.1' }] },
        { text: 'Sacral neuromodulation after MDT review when drugs fail and botulinum toxin has failed or is declined; adverse events in up to half and reoperation in about a third (FOGSI). PTNS: EAU offers it; NICE only after MDT review when drugs fail and both botulinum toxin and sacral stimulation are declined.', refs: [{ guidelineId: N, locator: '1.4.15, 1.4.52' }, { guidelineId: F, locator: 'pp.6–7' }, { guidelineId: E, locator: '4.1.4.a.5, 4.1.4.c.2' }] },
        { text: 'Augmentation cystoplasty is a last resort; do not use vaginal laser primarily for incontinence.', refs: [{ guidelineId: F, locator: 'pp.6–7' }] },
      ],
    },
    {
      id: 'surgery',
      title: 'Surgery for Stress Incontinence',
      icon: 'surgery',
      body: [
        {
          text: 'Options compared.',
          refs: [{ guidelineId: F, locator: 'pp.8–10' }, { guidelineId: N, locator: '1.5.3–1.5.14' }],
          table: {
            columns: ['Procedure', 'Key points'],
            rows: [
              ['Retropubic mid-urethral sling', 'Permanent implant; type 1 macroporous polypropylene; FOGSI prefers in obesity, ISD, prolapse; risk of bladder perforation'],
              ['Transobturator sling', 'More groin/leg pain; NICE: only in specific circumstances'],
              ['Open colposuspension', 'About 85–90% continent at 1 year; recurrence about 17% by 5 years; good when laparotomy is already planned'],
              ['Autologous fascial sling', 'FOGSI prefers fascia lata (less morbidity than rectus fascia)'],
              ['Bulking agents', 'If surgery unsuitable (elderly, high anaesthetic risk); less effective; repeat injections may be needed'],
            ],
          },
        },
        { text: 'Do not use single-incision mini-slings or the top-down retropubic approach outside trials (NICE). Do not offer anterior colporrhaphy, needle suspension, paravaginal repair, porcine dermis sling or Marshall–Marchetti–Krantz for stress incontinence.', refs: [{ guidelineId: N, locator: '1.5.11, 1.5.14' }] },
        { text: 'Recurrent incontinence after surgery: evaluate for detrusor overactivity, misplaced sling or intrinsic sphincter deficiency. A further colposuspension after two failed operations is ineffective. FOGSI recommends mesh complication registries.', refs: [{ guidelineId: F, locator: 'pp.9–10' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'First-line OAB drug',
      entries: [
        { guidelineId: F, text: 'Anticholinergic or mirabegron.', locator: 'pp.4–6' },
        { guidelineId: N, text: 'Lowest-cost anticholinergic.', locator: '1.4.30' },
      ],
    },
    {
      domain: 'Transobturator tape',
      entries: [
        { guidelineId: F, text: 'Acceptable; retropubic preferred in some groups.', locator: 'pp.8–9' },
        { guidelineId: N, text: 'Only in specific clinical circumstances.', locator: '1.5.10' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. FOGSI GCPR text had OCR errors (fluid reduction read as about 25%). No source read gave OAB drug doses. NICE 1.5.2 procedure list and MHRA mesh wording were not captured. EAU SUI surgery and diagnosis chapters were not reached. Not read: AUA/SUFU 2023–2024 (terms prohibit AI use), ACOG PB 155, NICE TA290 (mirabegron).',
};
