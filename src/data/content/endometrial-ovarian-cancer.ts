import type { Topic } from '@/types/content';

/**
 * DRAFT, pending clinician verification. Management-first, for the general gynaecologist.
 * Written 2026-11-28 from ICMR uterine and ovarian cancer consensus documents (2019), FIGO 2023 endometrial staging,
 * ESGO/ESTRO/ESP endometrial pocket guideline (2025 update) and ESGO-ESMO-ESP ovarian consensus (2024).
 */
const IU = 'icmr-uterine-2019';
const IO = 'icmr-ovarian-2019';
const FE = 'figo-endometrial-2023';
const EE = 'esgo-endometrial-2025';
const EO = 'esgo-esmo-ovarian-2024';

export const endometrialOvarianCancer: Partial<Topic> = {
  status: 'draft',
  updatedAt: '2026-11-28',
  overview:
    'Endometrial cancer: once office sampling shows cancer, a D&C is not needed; get MRI pelvis where available and plan total hysterectomy with BSO and node staging. ESGO 2025 prefers minimally invasive surgery and sentinel node staging for disease presumed confined to the uterus, and asks for molecular classification and MMR testing in every case; ICMR (2019) still uses FIGO 2009, laparotomy and selective lymphadenectomy. Adjuvant treatment follows the risk group. Ovarian cancer: a suspicious adnexal mass (RMI over 250, complex mass, ascites) goes to a gynae-oncologist without FNAC. Treatment is staging or cytoreductive surgery aiming for no visible residual disease, or neoadjuvant chemotherapy when that is unlikely, with carboplatin-paclitaxel for 6 cycles. Test every high-grade non-mucinous cancer for BRCA, since PARP inhibitor maintenance depends on it.',
  keyPoints: [
    { text: 'PMB with endometrium over 4 mm needs evaluation; routine D&C is not required after office sampling shows malignancy.', refs: [{ guidelineId: IU, locator: 'pp.3–4' }] },
    { text: 'Endometrial cancer surgery: total hysterectomy + BSO + lymph node staging; MIS preferred (ESGO), no morcellation (ICMR).', refs: [{ guidelineId: EE, locator: 'Surgery' }, { guidelineId: IU, locator: 'p.7' }] },
    { text: 'Molecular classification (POLEmut, MMRd, NSMP, p53abn) and MMR IHC for all endometrial cancers; MMR IHC also screens for Lynch syndrome.', refs: [{ guidelineId: EE, locator: 'Molecular classification, Lynch' }, { guidelineId: FE }] },
    { text: 'Adjuvant therapy by risk group: low none; intermediate consider vaginal brachytherapy; high-intermediate EBRT; high EBRT with chemotherapy.', refs: [{ guidelineId: EE, locator: 'Risk groups, Adjuvant therapy' }] },
    { text: 'Suspected ovarian cancer: do not do FNAC of a presumed early ovarian mass; refer complex masses or RMI 1 over 250 to a gynae-oncologist.', refs: [{ guidelineId: IO, locator: 'pp.12–14' }] },
    { text: 'Advanced ovarian cancer: primary cytoreduction if complete resection seems achievable; otherwise NACT (after core biopsy) and interval surgery after 3 cycles.', refs: [{ guidelineId: EO, locator: 'Advanced disease' }, { guidelineId: IO, locator: 'pp.22–25' }] },
    { text: 'BRCA testing at diagnosis for high-grade non-mucinous ovarian cancer; refer all epithelial ovarian cancer for genetic risk evaluation.', refs: [{ guidelineId: EO, locator: 'Molecular' }, { guidelineId: IO, locator: 'p.25' }] },
  ],
  sections: [
    {
      id: 'ec-pathway',
      title: 'Endometrial Cancer: Pathway',
      icon: 'management',
      body: [
        {
          text: 'From biopsy to adjuvant treatment (ESGO 2025 with ICMR 2019).',
          refs: [{ guidelineId: EE }, { guidelineId: IU, locator: 'pp.4–16' }],
          flow: {
            caption: 'Biopsy-proven endometrial cancer',
            steps: [
              { title: 'Work-up', text: 'Histology with molecular classification and MMR IHC; MRI pelvis where available; chest X-ray.', tone: 'start' },
              { title: 'Surgery', text: 'Total hysterectomy + BSO + sentinel node (ICG, cervical injection); infracolic omentectomy for serous, carcinosarcoma, undifferentiated.', tone: 'action' },
              { title: 'Risk group (FIGO 2023 + molecular)', tone: 'decision', branches: [
                { when: 'Low', then: 'No adjuvant therapy' },
                { when: 'Intermediate', then: 'Consider vaginal brachytherapy; omission is an option under 60' },
                { when: 'High-intermediate', then: 'EBRT; vaginal brachytherapy an alternative' },
                { when: 'High', then: 'EBRT with concurrent and adjuvant chemotherapy' },
              ] },
              { title: 'Follow-up', text: 'ICMR: 3–4 monthly for 2 years, 6-monthly to 5 years, then yearly. ESGO: personalised.' },
            ],
          },
        },
        { heading: 'Sentinel nodes', text: 'ESGO: SLN for all presumed uterus-confined disease. ICMR: SLN not routine for high-risk histology; pelvic + para-aortic lymphadenectomy for deep invasion with grade 2–3 and for all type II tumours; side-specific dissection if mapping fails.', refs: [{ guidelineId: EE }, { guidelineId: IU, locator: 'pp.9–10' }] },
        { heading: 'Ovarian preservation', text: 'Can be considered under 45 years with FIGO 2023 IA1/IA2 and low molecular risk; not with BRCA or Lynch risk.', refs: [{ guidelineId: EE }] },
        { heading: 'Advanced or recurrent MMRd', text: 'Carboplatin-paclitaxel with an immune checkpoint inhibitor (dostarlimab, durvalumab or pembrolizumab), then maintenance.', refs: [{ guidelineId: EE, locator: 'Advanced disease' }] },
      ],
    },
    {
      id: 'ec-staging',
      title: 'FIGO 2023 Endometrial Staging & Risk Groups',
      icon: 'classification',
      body: [
        {
          text: 'FIGO 2023 stages. Non-aggressive = low-grade (grade 1–2) endometrioid. Aggressive = grade 3 endometrioid, serous, clear cell, undifferentiated, mixed, mesonephric-like, gastrointestinal mucinous, carcinosarcoma. Substantial LVSI = 5 or more vessels.',
          refs: [{ guidelineId: FE, locator: 'Table 1 and footnotes' }],
          table: {
            columns: ['Stage', 'FIGO 2023 definition'],
            rows: [
              ['IA1', 'Non-aggressive type limited to an endometrial polyp or confined to the endometrium'],
              ['IA2', 'Non-aggressive type, less than half of myometrium, no or focal LVSI'],
              ['IA3', 'Low-grade endometrioid limited to uterus and ovary (good-prognosis criteria met)'],
              ['IB', 'Non-aggressive type, half or more of myometrium, no or focal LVSI'],
              ['IC', 'Aggressive type limited to a polyp or confined to the endometrium'],
              ['IIA', 'Cervical stroma invasion, non-aggressive type'],
              ['IIB', 'Substantial LVSI, non-aggressive type'],
              ['IIC', 'Aggressive type with any myometrial involvement'],
              ['IIIA1', 'Ovary or fallopian tube (unless IA3 criteria met)'],
              ['IIIA2', 'Uterine subserosa, or through the serosa'],
              ['IIIB1', 'Vagina and/or parametria'],
              ['IIIB2', 'Pelvic peritoneum'],
              ['IIIC1 (i / ii)', 'Pelvic nodes: micrometastasis / macrometastasis'],
              ['IIIC2 (i / ii)', 'Para-aortic nodes up to renal vessels, with or without pelvic: micro / macro'],
              ['IVA', 'Bladder and/or bowel mucosa'],
              ['IVB', 'Abdominal peritoneal metastasis beyond the pelvis'],
              ['IVC', 'Distant: nodes above renal vessels, lungs, liver, brain or bone'],
            ],
          },
        },
        { heading: 'IA3 vs IIIA1', text: 'Treat as IA3 (no adjuvant treatment) only if all are met: myometrial invasion under 50%, no substantial LVSI, no other metastases, and a unilateral ovarian tumour limited to the ovary without capsule invasion or rupture.', refs: [{ guidelineId: FE, locator: 'Table 1 footnote' }] },
        { heading: 'Nodes', text: 'Macrometastasis over 2 mm; micrometastasis 0.2–2 mm and/or over 200 cells (counts as node-positive); isolated tumour cells are recorded as pN0(i+).', refs: [{ guidelineId: FE, locator: 'Table 1 footnote' }] },
        { heading: 'Molecular modifiers', text: 'Molecular classification (POLEmut, MMRd, NSMP, p53abn) is encouraged for all; it can be done on the biopsy. IAmPOLEmut: POLEmut confined to the corpus or with cervical extension, whatever the LVSI or histology. IICmp53abn: p53abn confined to the corpus with any myometrial invasion, with or without cervical invasion. MMRd and NSMP do not change the stage but are recorded (e.g. Stage ImMMRd). Stages III–IV are not changed (recorded as IIIm or IVm). Prognosis: POLEmut good; MMRd and NSMP intermediate; p53abn poor.', refs: [{ guidelineId: FE, locator: 'Table 2 and footnote' }] },
        {
          text: 'ESGO 2025 risk groups (main examples).',
          refs: [{ guidelineId: EE, locator: 'Definition of risk groups' }],
          table: {
            columns: ['Group', '5-yr recurrence', 'Examples', 'Adjuvant'],
            rows: [
              ['Low', 'under 8%', 'IA POLEmut, MMRd or NSMP low-grade ER+; I–II POLEmut', 'None'],
              ['Intermediate', '8–14%', 'IB MMRd or NSMP low-grade ER+; IIA NSMP low-grade', 'Consider vaginal brachytherapy'],
              ['High-intermediate', '15–24%', 'IIA MMRd; IIB MMRd or NSMP low-grade', 'EBRT (VBT alternative)'],
              ['High', '25% or more', 'I–II p53abn or NSMP high-grade/ER−; III–IVA non-POLE', 'EBRT + chemotherapy'],
            ],
          },
        },
        { text: 'ICMR uses FIGO 2009 with stage and grade; stage IA grade 1–2 is observed (pelvic node positivity under 3%). Vault HDR brachytherapy 7 Gy × 3, 4–6 weeks after surgery and not beyond 12 weeks; EBRT 45–50 Gy.', refs: [{ guidelineId: IU, locator: 'pp.6, 10, 16' }] },
      ],
    },
    {
      id: 'ec-fertility-lynch',
      title: 'Fertility-sparing & Lynch Syndrome',
      icon: 'fertility',
      body: [
        { heading: 'Fertility-sparing (ICMR)', text: 'Young women with stage IA grade 1 disease without myometrial or cervical involvement: MPA 400–600 mg/day or megestrol 160–320 mg/day, with or without GnRH analogue or LNG-IUS. Endometrial biopsy ± hysteroscopy every 3 months; stop if disease persists beyond 6–12 months; hysterectomy after childbearing.', refs: [{ guidelineId: IU, locator: 'p.17' }] },
        { heading: 'Lynch syndrome', text: 'If MLH1 (or MLH1 + PMS2) is lost, test MLH1 promoter methylation. Carriers: surveillance from about 30 (ESGO) or annual sampling from 35 (ICMR); colonoscopy every 1–2 years; hysterectomy + BSO preferably before 40 for MLH1/MSH2/MSH6 and around menopause for PMS2.', refs: [{ guidelineId: EE, locator: 'Lynch' }, { guidelineId: IU, locator: 'pp.18–19' }] },
      ],
    },
    {
      id: 'ov-pathway',
      title: 'Ovarian Cancer: Pathway',
      icon: 'surgery',
      body: [
        {
          text: 'Suspected epithelial ovarian cancer.',
          refs: [{ guidelineId: IO, locator: 'pp.11–27' }, { guidelineId: EO }],
          flow: {
            caption: 'Adnexal mass suspicious for cancer',
            steps: [
              { title: 'Assess', text: 'Symptoms, family history; TVS/TAS (IOTA ADNEX where no expert scan); CA-125 (plus AFP, β-hCG under 35); CT chest-abdomen-pelvis. No FNAC.', tone: 'start' },
              { title: 'Refer', text: 'Complex mass, RMI 1 over 250, suspected advanced disease or uncertainty: gynae-oncology centre.', tone: 'action' },
              { title: 'Complete resection achievable?', tone: 'decision', branches: [
                { when: 'Early, confined', then: 'Staging laparotomy: washings, peritoneal biopsies, omentectomy, nodes' },
                { when: 'Advanced, resectable', then: 'Primary cytoreduction to no visible residual disease' },
                { when: 'Unlikely or unfit', then: 'Core biopsy, NACT, interval surgery after 3 cycles, at least 3 more cycles' },
              ] },
              { title: 'Chemotherapy and maintenance', text: 'Carboplatin AUC 5–6 + paclitaxel 175 mg/m² 3-weekly × 6; bevacizumab up to 15 months; PARP inhibitor if BRCA-mutated or HRD-positive and platinum-responsive.' },
            ],
          },
        },
        { heading: 'Early stage', text: 'IA/IB grade 1: observe; grade 2: observe or treat; grade 3 or IC: 3–6 cycles; stage II: 6 cycles. Fertility-sparing USO with full staging for stage IA low-risk disease.', refs: [{ guidelineId: IO, locator: 'pp.16–20' }, { guidelineId: EO }] },
        { heading: 'Surgery details', text: 'Complete cytoreduction means no visible or palpable disease; optimal means residual 1 cm or less. Laparoscopic staging is not shown equivalent. No systematic lymphadenectomy in advanced disease with complete resection and normal nodes. CA-125:CEA under 25: do gastroscopy and colonoscopy.', refs: [{ guidelineId: IO, locator: 'pp.16, 22–24' }, { guidelineId: EO }] },
        { heading: 'PARP inhibitors', text: 'High-grade serous or endometrioid, BRCA-mutated or HRD-positive, responding to platinum: olaparib (± bevacizumab) or rucaparib for 2 years, niraparib for 3 years.', refs: [{ guidelineId: EO }] },
      ],
    },
    {
      id: 'ov-prevention',
      title: 'Prevention & Hereditary Risk',
      icon: 'prevention',
      body: [
        { text: 'BRCA1 lifetime ovarian cancer risk 26–54%, BRCA2 10–23%. ICMR cites ACOG for risk-reducing surgery by 40 years; premenopausal BSO also halves breast cancer risk. Examine RRSO specimens with SEE-FIM.', refs: [{ guidelineId: IO, locator: 'pp.2–3' }, { guidelineId: EO }] },
        { text: 'Opportunistic salpingectomy (fimbria to cornu) can be offered at abdominal gynaecological surgery or sterilisation; risk reduction of 42–65% is reported but benefit is not yet proven.', refs: [{ guidelineId: IO, locator: 'pp.2–3' }] },
      ],
    },
  ],
  positions: [
    {
      domain: 'Endometrial cancer surgical access',
      entries: [
        { guidelineId: EE, text: 'Minimally invasive surgery preferred.' },
        { guidelineId: IU, text: 'Staging laparotomy is standard; no morcellation.', locator: 'p.7' },
      ],
    },
    {
      domain: 'Endometrial node staging',
      entries: [
        { guidelineId: EE, text: 'Sentinel node for all presumed uterus-confined disease.' },
        { guidelineId: IU, text: 'Selective systematic lymphadenectomy; SLN not routine in high-risk histology.', locator: 'pp.9–10' },
      ],
    },
    {
      domain: 'Lynch screening',
      entries: [
        { guidelineId: EE, text: 'MMR IHC for every endometrial cancer.' },
        { guidelineId: IU, text: 'Genetic evaluation if under 50 or family history.', locator: 'p.5' },
      ],
    },
  ],
  editorNote:
    'Read on 28 Nov 2026. FIGO 2023 Table 1 and Table 2 were re-read from the J Gynecol Oncol PMC copy (PMC10482588) via a summarising tool; the isolated tumour cell size in the node footnote looked inconsistent and needs checking. ICMR page numbers need checking against the PDFs. Not read: National Cancer Grid, FOGSI, NICE NG241, BGCS ovarian 2024, FIGO 2021 ovarian chapter, ESGO/ESHRE/ESGE 2023 fertility-sparing guideline, ICMR uterine sarcoma section. No ovarian follow-up schedule and no BRCA1 vs BRCA2 RRSO ages were found in the sources read. Chemotherapy and targeted drugs are for oncology teams; this summary is for orientation and referral.',
};
