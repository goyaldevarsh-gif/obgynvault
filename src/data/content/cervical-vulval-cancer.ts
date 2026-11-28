import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first, for the general gynaecologist.
 * Written 2026-11-28 from ICMR Consensus Document for Management of Cancer Cervix (2016), FIGO Cancer Report 2021
 * cervix chapter, FIGO 2021 vulval staging and ESGO vulvar cancer guideline 2023.
 */
const I = 'icmr-cervix-2016';
const F = 'figo-cervix-2021';
const V = 'esgo-vulva-2023';
const VS = 'figo-vulva-staging-2021';

export const cervicalVulvalCancer: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Any suspicious cervical lesion needs a biopsy (cone for suspected microinvasion). Stage cervical cancer with FIGO 2018, which now allows imaging and pathology and adds node stage IIIC; ICMR (2016) still uses FIGO 2009. Early disease (IA–IB2, IIA1) is treated by cone or simple hysterectomy for IA1 and radical hysterectomy with pelvic node dissection, or radiotherapy, for larger tumours, preferably by open surgery after the LACC trial. Locally advanced disease (IB3–IVA) is treated with concurrent chemoradiation: weekly cisplatin 40 mg/m² with pelvic radiotherapy and brachytherapy, completed within 8 weeks. Vulval cancer needs a punch or incision biopsy (not excision), care in a specialised centre, wide excision with clear margins, and groin node assessment (sentinel node for unifocal tumours under 4 cm with clinically negative groins).',
  keyPoints: [
    { text: 'FIGO 2018 cervical staging: IA1 invasion 3 mm or less; IA2 over 3 to 5 mm; IB1 2 cm or less; IB2 over 2 to 4 cm; IB3 over 4 cm; IIIC pelvic (C1) or para-aortic (C2) nodes regardless of size. LVSI does not change stage.', refs: [{ guidelineId: F, locator: 'Table 1' }] },
    { text: 'Work-up: biopsy (cone for microinvasion), examination, blood counts, biochemistry, chest X-ray; MRI pelvis for local extent and PET-CT/CT for nodes where available.', refs: [{ guidelineId: I, locator: 'p.12' }, { guidelineId: F, locator: 'Diagnosis, Imaging' }] },
    { text: 'IA1: cone with clear margins (fertility) or extrafascial hysterectomy; consider nodes if LVSI. IA2–IB2/IIA1: radical hysterectomy + pelvic lymphadenectomy or radiotherapy (similar cure).', refs: [{ guidelineId: F, locator: 'Management by stage' }, { guidelineId: I, locator: 'pp.17–19' }] },
    { text: 'IB3–IVA: concurrent chemoradiation, cisplatin 40 mg/m² weekly for 5–6 cycles with pelvic EBRT 45–50 Gy and brachytherapy (point A 80–90 Gy), completed within 8 weeks.', refs: [{ guidelineId: F }, { guidelineId: I, locator: 'pp.20–22, 42' }] },
    { text: 'LACC trial: minimally invasive radical hysterectomy had worse disease-free and overall survival than open surgery; use caution with MIS.', refs: [{ guidelineId: F, locator: 'MIS vs open' }] },
    { text: 'Vulval cancer: punch or incision biopsy (avoid excision biopsy for diagnosis); refer all to a specialised centre with a gynae-oncology MDT.', refs: [{ guidelineId: V }] },
    { text: 'Vulval groin nodes: no groin treatment if invasion 1 mm or less; sentinel node for unifocal tumours under 4 cm without suspicious nodes; lymphadenectomy if SLN not found or macrometastasis over 2 mm.', refs: [{ guidelineId: V }] },
  ],
  sections: [
    {
      id: 'cx-stepwise',
      title: 'Cervical Cancer: Treatment by Stage',
      icon: 'management',
      body: [
        {
          text: 'Primary treatment (FIGO 2021 update, ICMR 2016).',
          refs: [{ guidelineId: F, locator: 'Management by stage' }, { guidelineId: I, locator: 'pp.17–24' }],
          flow: {
            caption: 'Invasive cervical cancer',
            steps: [
              { title: 'Biopsy and staging', text: 'Punch biopsy (cone if microinvasion suspected); examination; MRI pelvis; CT or PET-CT for nodes; chest X-ray.', tone: 'start' },
              { title: 'FIGO 2018 stage', tone: 'decision', branches: [
                { when: 'IA1', then: 'Cone with clear margins, or extrafascial hysterectomy; nodes if LVSI' },
                { when: 'IA2', then: 'Radical (type B) hysterectomy + pelvic nodes; simple hysterectomy/trachelectomy if low risk' },
                { when: 'IB1, IB2, IIA1', then: 'Radical (type C) hysterectomy + pelvic nodes, or radiotherapy' },
                { when: 'IB3, IIA2 to IVA', then: 'Concurrent chemoradiation with brachytherapy' },
                { when: 'IVB', then: 'Platinum chemotherapy (± bevacizumab); palliative RT' },
              ] },
              { title: 'After radical hysterectomy', text: 'High risk (nodes, parametrium, margin): chemoradiation. Intermediate (2 of: over 4 cm, deep stromal invasion, LVSI): pelvic RT 45–50 Gy.', tone: 'action' },
              { title: 'Follow-up', text: 'Every 3–4 months for 2–3 years, 6-monthly to 5 years, then yearly; no routine imaging.' },
            ],
          },
        },
        { text: 'Primary surgery is not encouraged for IB3/IIA2 because about 80% then need adjuvant treatment (FIGO); ICMR (FIGO 2009 IB2/IIA2) allows chemoradiation or radical hysterectomy. Neoadjuvant chemotherapy is not recommended outside research or where radiotherapy is unavailable.', refs: [{ guidelineId: F }, { guidelineId: I, locator: 'pp.20, 31' }] },
        { text: 'Inadvertent simple hysterectomy for invasive cancer: treat as high risk (adjuvant chemoradiation).', refs: [{ guidelineId: I, locator: 'p.21' }] },
      ],
    },
    {
      id: 'cx-staging',
      title: 'FIGO 2018 Cervical Cancer Staging',
      icon: 'classification',
      body: [
        {
          text: 'Staging table.',
          refs: [{ guidelineId: F, locator: 'Table 1' }],
          table: {
            columns: ['Stage', 'Definition'],
            rows: [
              ['IA1 / IA2', 'Microscopic; stromal invasion 3 mm or less / over 3 to 5 mm'],
              ['IB1 / IB2 / IB3', 'Confined to cervix, invasion over 5 mm; 2 cm or less / over 2 to 4 cm / over 4 cm'],
              ['IIA1 / IIA2', 'Upper two-thirds of vagina, no parametrium; 4 cm or less / over 4 cm'],
              ['IIB', 'Parametrium, not to pelvic wall'],
              ['IIIA / IIIB', 'Lower third of vagina / pelvic wall or hydronephrosis'],
              ['IIIC1 / IIIC2', 'Pelvic / para-aortic nodes (r = imaging, p = pathology)'],
              ['IVA / IVB', 'Bladder or rectal mucosa / distant'],
            ],
          },
        },
        { text: 'If in doubt, assign the lower stage; do not re-stage at recurrence. Bullous oedema alone is not stage IV.', refs: [{ guidelineId: F, locator: 'Staging' }] },
      ],
    },
    {
      id: 'cx-special',
      title: 'Fertility-sparing, Pregnancy & Surgery Notes',
      icon: 'fertility',
      body: [
        { heading: 'Fertility-sparing', text: 'Radical trachelectomy for IA2–IB1 (ICMR: tumour 2 cm or less, negative nodes), with nodes assessed first. Higher miscarriage and preterm birth rates afterwards. Follow-up cytology every 3 months for 2 years, then 6-monthly for 3 years.', refs: [{ guidelineId: F, locator: 'Fertility-sparing, Follow-up' }, { guidelineId: I, locator: 'pp.18, 40' }] },
        { heading: 'In pregnancy', text: 'Before 16–20 weeks, treat without delay. After 20 weeks, delay is acceptable for IA2–IB2 (neoadjuvant chemotherapy possible). Deliver by classical caesarean with radical hysterectomy at a tertiary centre, no later than 34 weeks. ICMR: IA1 can be observed with colposcopy every 3 months.', refs: [{ guidelineId: F, locator: 'Pregnancy' }, { guidelineId: I, locator: 'pp.26–27' }] },
        { heading: 'Sentinel nodes', text: 'Still regarded as experimental in the FIGO update; possible role in IA–IB2 using dual tracer or ICG. SENTICOL-2: less lymphatic morbidity (31.4% vs 51.5%) with similar recurrence-free survival.', refs: [{ guidelineId: F, locator: 'SLN' }] },
        { heading: 'Radiotherapy', text: 'Brachytherapy is essential; HDR 5.5–8 Gy per fraction for 3–5 fractions (FIGO) or 6–7.5 Gy for 3–5 fractions (ICMR). Exenteration and interstitial brachytherapy only at experienced centres.', refs: [{ guidelineId: F }, { guidelineId: I, locator: 'pp.25, 42–46' }] },
      ],
    },
    {
      id: 'vulva',
      title: 'Vulval Cancer',
      icon: 'surgery',
      body: [
        {
          text: 'FIGO 2021 vulval staging.',
          refs: [{ guidelineId: VS, locator: 'Table 3' }],
          table: {
            columns: ['Stage', 'Definition'],
            rows: [
              ['IA', '2 cm or less and stromal invasion 1 mm or less'],
              ['IB', 'Over 2 cm or invasion over 1 mm'],
              ['II', 'Lower third of urethra, vagina or anus; nodes negative'],
              ['IIIA', 'Upper urethra/vagina, bladder or rectal mucosa, or nodes 5 mm or less'],
              ['IIIB / IIIC', 'Nodes over 5 mm / nodes with extracapsular spread'],
              ['IVA / IVB', 'Fixed to bone or fixed/ulcerated nodes / distant'],
            ],
          },
        },
        { heading: 'Diagnosis and imaging', text: 'Punch or incision biopsy; biopsy and map each lesion separately. pT1a needs no further imaging; groin ultrasound before SLN; MRI for T2 or more, otherwise CT or PET-CT. ESGO currently prefers TNM 8 over FIGO 2021.', refs: [{ guidelineId: V }] },
        { heading: 'Excision', text: 'Aim for tumour-free margins; a pathological margin over 2–3 mm seems sufficient (evidence for the old 8 mm rule is very low). Re-excise if invasive disease reaches the margin.', refs: [{ guidelineId: V }] },
        { heading: 'Groin nodes', text: 'Treat the groin for tumours beyond T1a. Assess both groins if the medial border is under 1 cm from the midline. SLN for unifocal tumours under 4 cm without suspicious nodes, using technetium with blue dye or ICG. No SLN found: inguinofemoral lymphadenectomy. SLN macrometastasis over 2 mm: lymphadenectomy; micrometastasis 2 mm or less: radiotherapy can replace it.', refs: [{ guidelineId: V }] },
        { heading: 'Adjuvant and primary RT', text: 'Adjuvant RT for more than one positive node or extracapsular spread (consider concurrent chemotherapy), ideally completed within 104 days of surgery. Primary chemoradiation when unresectable or when exenteration would otherwise be needed; assess response at 12 weeks.', refs: [{ guidelineId: V }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Cervical cancer over 4 cm (IB3/IIA2)',
      entries: [
        { guidelineId: F, text: 'Chemoradiation preferred; surgery discouraged.' },
        { guidelineId: I, text: 'Chemoradiation or radical hysterectomy.', locator: 'p.20' },
      ],
    },
    {
      domain: 'Vulval excision margin',
      entries: [
        { guidelineId: V, text: 'Over 2–3 mm pathological margin seems sufficient.' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. ICMR cervix consensus (2016) uses FIGO 2009 and reviews literature to 2012; FIGO 2021 update used for current staging. ESGO-ESTRO-ESP 2023 cervical guideline, National Cancer Grid guidelines, FOGSI and NCCN not read. FIGO 2021 vulva chapter and ESGO vulva follow-up not read. Treatment of invasive cancer belongs in a gynae-oncology centre; this summary is for orientation and referral.',
};
