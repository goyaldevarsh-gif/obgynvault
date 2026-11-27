import type { Guideline } from '@/types/content';

/**
 * SAMPLE CATALOGUE ENTRIES.
 * Titles, numbers and years are placeholders for UI demonstration only. Every entry is
 * status 'sample' and must be checked against the issuing body's official publication
 * (and replaced by the Supabase-backed catalogue) before any clinical use.
 * Summaries deliberately describe scope only; they contain no recommendations.
 */
export const GUIDELINES: Guideline[] = [
  // Obstetrics
  { id: 'fogsi-hdp', sourceId: 'FOGSI', title: 'Hypertensive Disorders in Pregnancy (GCPR)', documentType: 'Good Clinical Practice Recommendation', specialty: 'obstetrics', topicSlugs: ['preeclampsia'], summary: 'Sample entry. Scope: diagnosis, classification and management of hypertensive disorders in pregnancy in the Indian setting.', status: 'sample' },
  { id: 'acog-pb-222', sourceId: 'ACOG', title: 'Gestational Hypertension and Preeclampsia', documentType: 'Practice Bulletin', reference: 'No. 222', year: 2020, specialty: 'obstetrics', topicSlugs: ['preeclampsia'], summary: 'Sample entry. Scope: gestational hypertension and preeclampsia.', status: 'sample' },
  { id: 'nice-ng133', sourceId: 'NICE', title: 'Hypertension in Pregnancy: Diagnosis and Management', documentType: 'NICE guideline', reference: 'NG133', year: 2019, specialty: 'obstetrics', topicSlugs: ['preeclampsia'], summary: 'Sample entry. Scope: hypertensive disorders during pregnancy, birth and the postnatal period.', status: 'sample' },
  { id: 'who-pe-e', sourceId: 'WHO', title: 'Prevention and Treatment of Pre-eclampsia and Eclampsia', documentType: 'WHO recommendations', year: 2011, specialty: 'obstetrics', topicSlugs: ['preeclampsia'], summary: 'Sample entry. Scope: global recommendations on pre-eclampsia and eclampsia.', status: 'sample' },
  { id: 'fogsi-pph', sourceId: 'FOGSI', title: 'Postpartum Haemorrhage (GCPR)', documentType: 'Good Clinical Practice Recommendation', specialty: 'obstetrics', topicSlugs: ['postpartum-haemorrhage'], summary: 'Sample entry. Scope: prevention and management of PPH.', status: 'sample' },
  { id: 'rcog-gtg-52', sourceId: 'RCOG', title: 'Prevention and Management of Postpartum Haemorrhage', documentType: 'Green-top Guideline', reference: 'No. 52', year: 2016, specialty: 'obstetrics', topicSlugs: ['postpartum-haemorrhage'], summary: 'Sample entry. Scope: prevention and management of PPH.', status: 'sample' },
  { id: 'acog-pb-183', sourceId: 'ACOG', title: 'Postpartum Hemorrhage', documentType: 'Practice Bulletin', reference: 'No. 183', year: 2017, specialty: 'obstetrics', topicSlugs: ['postpartum-haemorrhage'], summary: 'Sample entry. Scope: postpartum hemorrhage.', status: 'sample' },
  { id: 'acog-pb-190', sourceId: 'ACOG', title: 'Gestational Diabetes Mellitus', documentType: 'Practice Bulletin', reference: 'No. 190', year: 2018, specialty: 'obstetrics', topicSlugs: ['gestational-diabetes'], summary: 'Sample entry. Scope: screening, diagnosis and management of GDM.', status: 'sample' },
  { id: 'nice-ng3', sourceId: 'NICE', title: 'Diabetes in Pregnancy: Management from Preconception to the Postnatal Period', documentType: 'NICE guideline', reference: 'NG3', year: 2015, specialty: 'obstetrics', topicSlugs: ['gestational-diabetes'], summary: 'Sample entry. Scope: pre-existing and gestational diabetes in pregnancy.', status: 'sample' },
  { id: 'mohfw-gdm', sourceId: 'MOHFW', title: 'Diagnosis & Management of Gestational Diabetes Mellitus (National Guidelines)', documentType: 'Technical and operational guidelines', specialty: 'obstetrics', topicSlugs: ['gestational-diabetes'], summary: 'Sample entry. Scope: national programme guidance on GDM.', status: 'sample' },
  { id: 'nice-ng201', sourceId: 'NICE', title: 'Antenatal Care', documentType: 'NICE guideline', reference: 'NG201', year: 2021, specialty: 'obstetrics', topicSlugs: ['antenatal-care'], summary: 'Sample entry. Scope: routine antenatal care.', status: 'sample' },
  { id: 'rcog-gtg-37a', sourceId: 'RCOG', title: 'Reducing the Risk of Venous Thromboembolism during Pregnancy and the Puerperium', documentType: 'Green-top Guideline', reference: 'No. 37a', year: 2015, specialty: 'obstetrics', topicSlugs: ['vte-in-pregnancy'], summary: 'Sample entry. Scope: VTE risk assessment and thromboprophylaxis.', status: 'sample' },
  { id: 'rcog-gtg-42', sourceId: 'RCOG', title: 'Shoulder Dystocia', documentType: 'Green-top Guideline', reference: 'No. 42', specialty: 'obstetrics', topicSlugs: ['shoulder-dystocia'], summary: 'Sample entry. Scope: shoulder dystocia.', status: 'sample' },
  { id: 'figo-pas', sourceId: 'FIGO', title: 'Placenta Accreta Spectrum Disorders', documentType: 'Consensus guidelines', year: 2018, specialty: 'obstetrics', topicSlugs: ['placenta-accreta-spectrum'], summary: 'Sample entry. Scope: diagnosis and management of PAS.', status: 'sample' },
  // Gynaecology
  { id: 'rcog-gtg-21', sourceId: 'RCOG', title: 'Diagnosis and Management of Ectopic Pregnancy', documentType: 'Green-top Guideline', reference: 'No. 21', year: 2016, specialty: 'gynaecology', topicSlugs: ['ectopic-pregnancy'], summary: 'Sample entry. Scope: ectopic pregnancy.', status: 'sample' },
  { id: 'nice-ng126', sourceId: 'NICE', title: 'Ectopic Pregnancy and Miscarriage: Diagnosis and Initial Management', documentType: 'NICE guideline', reference: 'NG126', year: 2019, specialty: 'gynaecology', topicSlugs: ['ectopic-pregnancy'], summary: 'Sample entry. Scope: early pregnancy loss and ectopic pregnancy.', status: 'sample' },
  { id: 'acog-pb-193', sourceId: 'ACOG', title: 'Tubal Ectopic Pregnancy', documentType: 'Practice Bulletin', reference: 'No. 193', year: 2018, specialty: 'gynaecology', topicSlugs: ['ectopic-pregnancy'], summary: 'Sample entry. Scope: tubal ectopic pregnancy.', status: 'sample' },
  { id: 'eshre-pcos', sourceId: 'ESHRE', title: 'International Evidence-based Guideline for the Assessment and Management of PCOS', documentType: 'International guideline', year: 2023, specialty: 'gynaecology', topicSlugs: ['pcos'], summary: 'Sample entry. Scope: PCOS assessment and management.', status: 'sample' },
  { id: 'fogsi-pcos', sourceId: 'FOGSI', title: 'Polycystic Ovary Syndrome (GCPR)', documentType: 'Good Clinical Practice Recommendation', specialty: 'gynaecology', topicSlugs: ['pcos'], summary: 'Sample entry. Scope: PCOS in Indian women.', status: 'sample' },
  { id: 'acog-pb-228', sourceId: 'ACOG', title: 'Management of Symptomatic Uterine Leiomyomas', documentType: 'Practice Bulletin', reference: 'No. 228', year: 2021, specialty: 'gynaecology', topicSlugs: ['uterine-fibroids'], summary: 'Sample entry. Scope: symptomatic fibroids.', status: 'sample' },
  { id: 'nice-ng88', sourceId: 'NICE', title: 'Heavy Menstrual Bleeding: Assessment and Management', documentType: 'NICE guideline', reference: 'NG88', year: 2018, specialty: 'gynaecology', topicSlugs: ['abnormal-uterine-bleeding', 'uterine-fibroids'], summary: 'Sample entry. Scope: heavy menstrual bleeding.', status: 'sample' },
  { id: 'who-cxca', sourceId: 'WHO', title: 'Screening and Treatment of Cervical Pre-cancer Lesions', documentType: 'WHO guideline', year: 2021, specialty: 'gynaecology', topicSlugs: ['cervical-screening'], summary: 'Sample entry. Scope: cervical cancer prevention.', status: 'sample' },
  { id: 'nice-ng23', sourceId: 'NICE', title: 'Menopause: Diagnosis and Management', documentType: 'NICE guideline', reference: 'NG23', year: 2015, specialty: 'gynaecology', topicSlugs: ['menopause'], summary: 'Sample entry. Scope: menopause.', status: 'sample' },
  { id: 'eshre-endo', sourceId: 'ESHRE', title: 'Endometriosis', documentType: 'ESHRE guideline', year: 2022, specialty: 'gynaecology', topicSlugs: ['endometriosis'], summary: 'Sample entry. Scope: endometriosis.', status: 'sample' },
];

const byId = new Map(GUIDELINES.map((g) => [g.id, g]));
export const getGuideline = (id: string) => byId.get(id);
