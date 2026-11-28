import type { Specialty, Topic, TopicSection } from '@/types/content';
import { GUIDELINES } from './guidelines';
import { AUTHORED_TOPICS } from './content';

/**
 * SAMPLE TOPICS.
 * Page structure is real; clinical text is placeholder. Key points and section bodies
 * describe what each section WILL contain once written from the linked guidelines and
 * signed off by a clinical editor. Nothing here is a clinical recommendation.
 */

const SECTION_TEMPLATE: Array<Pick<TopicSection, 'id' | 'title' | 'icon'>> = [
  { id: 'definition', title: 'Definition & Epidemiology', icon: 'definition' },
  { id: 'risk-factors', title: 'Risk Factors', icon: 'risk' },
  { id: 'diagnosis', title: 'Diagnosis', icon: 'diagnosis' },
  { id: 'management', title: 'Management', icon: 'management' },
  { id: 'complications', title: 'Complications', icon: 'complications' },
  { id: 'follow-up', title: 'Follow-up', icon: 'followup' },
];

function placeholderSections(title: string): TopicSection[] {
  return SECTION_TEMPLATE.map((s) => ({
    ...s,
    body: [
      { text: `Sample placeholder. This section will summarise ${s.title.toLowerCase()} for ${title}, written from the linked source guidelines.` },
      { text: 'Each statement will cite its guideline, year and section, and will only be published after clinical editorial review.' },
    ],
  }));
}

interface TopicSeed {
  slug: string;
  title: string;
  subtitle: string;
  specialty: Specialty;
  category: string;
  tags: string[];
  emergency?: boolean;
  updatedAt: string;
}

const SEEDS: TopicSeed[] = [
  // Obstetrics
  { slug: 'preeclampsia', title: 'Preeclampsia', subtitle: 'Hypertensive disorder of pregnancy', specialty: 'obstetrics', category: 'Hypertensive disorders', tags: ['PE', 'HDP', 'eclampsia', 'hypertension', 'HELLP'], updatedAt: '2026-10-14' },
  { slug: 'postpartum-haemorrhage', title: 'Postpartum Haemorrhage', subtitle: 'Obstetric emergency', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['PPH', 'atonic', 'bleeding'], emergency: true, updatedAt: '2026-09-30' },
  { slug: 'gestational-diabetes', title: 'Gestational Diabetes Mellitus', subtitle: 'Hyperglycaemia first recognised in pregnancy', specialty: 'obstetrics', category: 'Medical disorders', tags: ['GDM', 'DIPSI', 'OGTT', 'diabetes'], updatedAt: '2026-09-12' },
  { slug: 'anaemia-in-pregnancy', title: 'Anaemia in Pregnancy', subtitle: 'Iron deficiency: screening, oral and IV iron, transfusion', specialty: 'obstetrics', category: 'Medical disorders', tags: ['anemia', 'IDA', 'iron', 'IFA', 'FCM', 'iron sucrose', 'haemoglobin', 'Anemia Mukt Bharat'], updatedAt: '2026-11-27' },
  { slug: 'antenatal-care', title: 'Routine Antenatal Care', subtitle: 'Schedule, screening and counselling', specialty: 'obstetrics', category: 'Antenatal', tags: ['ANC', 'booking', 'screening'], updatedAt: '2026-08-20' },
  { slug: 'preterm-labour', title: 'Preterm Labour', subtitle: 'Threatened and established preterm labour', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['PTL', 'PPROM', 'tocolysis'], updatedAt: '2026-08-02' },
  { slug: 'placenta-accreta-spectrum', title: 'Placenta Accreta Spectrum', subtitle: 'Abnormally invasive placenta', specialty: 'obstetrics', category: 'Placental disorders', tags: ['PAS', 'accreta', 'increta', 'percreta'], updatedAt: '2026-07-18' },
  { slug: 'vte-in-pregnancy', title: 'VTE in Pregnancy', subtitle: 'Risk assessment and thromboprophylaxis', specialty: 'obstetrics', category: 'Medical disorders', tags: ['DVT', 'PE', 'thrombosis', 'LMWH'], updatedAt: '2026-07-01' },
  { slug: 'induction-of-labour', title: 'Induction of Labour', subtitle: 'Timing, cervical ripening and oxytocin', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['IOL', 'misoprostol', 'Foley', 'Bishop', 'dinoprostone', 'post-dates'], updatedAt: '2026-11-28' },
  { slug: 'prom-pprom', title: 'PROM & PPROM', subtitle: 'Prelabour rupture of membranes, term and preterm', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['PROM', 'PPROM', 'erythromycin', 'latency', 'chorioamnionitis', 'leaking'], updatedAt: '2026-11-28' },
  { slug: 'vbac', title: 'Birth after Caesarean (VBAC)', subtitle: 'TOLAC, uterine rupture and repeat caesarean', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['VBAC', 'TOLAC', 'previous LSCS', 'scar', 'uterine rupture', 'ERCS'], updatedAt: '2026-11-28' },
  { slug: 'intrapartum-fever-sepsis', title: 'Intrapartum Fever & Maternal Sepsis', subtitle: 'Chorioamnionitis, sepsis first hour, endometritis', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['fever', 'chorioamnionitis', 'sepsis', 'intra-amniotic infection', 'endometritis', 'puerperal'], emergency: true, updatedAt: '2026-11-28' },
  { slug: 'postpartum-contraception', title: 'Postpartum Contraception', subtitle: 'PPIUCD, Antara, Chhaya and timing after birth or abortion', specialty: 'obstetrics', category: 'Postnatal', tags: ['PPIUCD', 'DMPA', 'Antara', 'Chhaya', 'centchroman', 'LAM', 'sterilisation', 'family planning'], updatedAt: '2026-11-28' },
  { slug: 'hyperemesis-gravidarum', title: 'Hyperemesis Gravidarum', subtitle: 'Nausea and vomiting of pregnancy: stepwise management', specialty: 'obstetrics', category: 'Early pregnancy', tags: ['hyperemesis', 'NVP', 'vomiting', 'PUQE', 'ondansetron', 'doxylamine', 'thiamine'], updatedAt: '2026-11-28' },
  { slug: 'endometrial-hyperplasia', title: 'Endometrial Hyperplasia', subtitle: 'Without atypia vs atypical: LNG-IUS, surveillance, hysterectomy', specialty: 'gynaecology', category: 'Benign gynaecology', tags: ['endometrial hyperplasia', 'atypical hyperplasia', 'LNG-IUS', 'progestogen', 'tamoxifen', 'endometrial biopsy'], updatedAt: '2026-11-28' },
  { slug: 'pid-vaginal-discharge', title: 'PID & Vaginal Discharge', subtitle: 'Syndromic kits, PID regimens, BV, candida, trichomonas', specialty: 'gynaecology', category: 'Benign gynaecology', tags: ['PID', 'pelvic inflammatory disease', 'vaginal discharge', 'BV', 'candidiasis', 'trichomonas', 'NACO kit', 'RTI', 'STI'], updatedAt: '2026-11-28' },
  { slug: 'ovarian-cyst-adnexal-mass', title: 'Ovarian Cyst & Adnexal Mass', subtitle: 'TVS, RMI and IOTA, follow-up by size, when to operate', specialty: 'gynaecology', category: 'Benign gynaecology', tags: ['ovarian cyst', 'adnexal mass', 'RMI', 'IOTA', 'CA-125', 'dermoid', 'torsion', 'endometrioma'], updatedAt: '2026-11-28' },
  { slug: 'miscarriage-rpl', title: 'Miscarriage & Recurrent Pregnancy Loss', subtitle: 'Expectant, medical, surgical; progesterone; RPL work-up and APS', specialty: 'obstetrics', category: 'Early pregnancy', tags: ['miscarriage', 'missed abortion', 'incomplete abortion', 'MVA', 'mifepristone', 'misoprostol', 'recurrent miscarriage', 'RPL', 'APS', 'progesterone', 'threatened miscarriage'], updatedAt: '2026-11-28' },
  { slug: 'mtp-india', title: 'Medical Termination of Pregnancy (India)', subtitle: 'MTP Act 2021 limits, medical abortion, MVA, post-abortion contraception', specialty: 'gynaecology', category: 'Reproductive medicine', tags: ['MTP', 'abortion', 'MTP Act', 'medical abortion', 'mifepristone', 'misoprostol', 'MVA', 'CAC', 'Medical Board', 'post-abortion contraception'], updatedAt: '2026-11-28' },
  { slug: 'pelvic-organ-prolapse', title: 'Pelvic Organ Prolapse', subtitle: 'POP-Q, PFMT, pessary, surgery by compartment, mesh rules', specialty: 'gynaecology', category: 'Benign gynaecology', tags: ['prolapse', 'POP-Q', 'pessary', 'PFMT', 'vault prolapse', 'sacrospinous', 'sacrocolpopexy', 'Manchester repair', 'colpocleisis', 'mesh'], updatedAt: '2026-11-28' },
  { slug: 'antepartum-haemorrhage', title: 'Antepartum Haemorrhage', subtitle: 'First response, placenta praevia, abruption, vasa praevia', specialty: 'obstetrics', category: 'Placental disorders', tags: ['APH', 'antepartum haemorrhage', 'placenta praevia', 'abruption', 'vasa praevia', 'low-lying placenta'], updatedAt: '2026-11-28' },
  { slug: 'cholestasis-of-pregnancy', title: 'Intrahepatic Cholestasis of Pregnancy', subtitle: 'Bile acid bands, timing of birth, UDCA', specialty: 'obstetrics', category: 'Medical disorders', tags: ['ICP', 'obstetric cholestasis', 'bile acids', 'pruritus', 'itching', 'UDCA', 'ursodeoxycholic acid'], updatedAt: '2026-11-28' },
  { slug: 'thyroid-in-pregnancy', title: 'Thyroid Disease in Pregnancy', subtitle: 'Hypothyroidism, TPO antibodies, Graves’, postpartum thyroiditis', specialty: 'obstetrics', category: 'Medical disorders', tags: ['thyroid', 'hypothyroidism', 'subclinical hypothyroidism', 'TSH', 'TPO', 'levothyroxine', 'thyroxine', 'hyperthyroidism', 'Graves', 'PTU', 'methimazole', 'carbimazole', 'postpartum thyroiditis'], updatedAt: '2026-11-28' },
  { slug: 'breech-ecv', title: 'Breech Presentation & ECV', subtitle: 'External cephalic version, mode of birth, vaginal breech', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['breech', 'ECV', 'external cephalic version', 'vaginal breech', 'Lovset', 'Mauriceau', 'malpresentation'], updatedAt: '2026-11-28' },
  { slug: 'stillbirth-iufd', title: 'Stillbirth & Intrauterine Fetal Death', subtitle: 'Diagnosis, induction regimens, investigations, bereavement', specialty: 'obstetrics', category: 'Fetal medicine', tags: ['IUFD', 'IUD', 'stillbirth', 'fetal death', 'missed abortion', 'mifepristone', 'misoprostol', 'cabergoline', 'post-mortem'], updatedAt: '2026-11-28' },
  { slug: 'gestational-trophoblastic-disease', title: 'Molar Pregnancy & GTD', subtitle: 'Evacuation, hCG follow-up, GTN scoring and chemotherapy', specialty: 'obstetrics', category: 'Early pregnancy', tags: ['molar pregnancy', 'mole', 'hydatidiform mole', 'GTD', 'GTN', 'choriocarcinoma', 'hCG follow-up', 'FIGO score', 'methotrexate', 'EMA-CO', 'actinomycin'], updatedAt: '2026-11-28' },
  { slug: 'perineal-tears-oasis', title: 'Perineal Tears & OASIS', subtitle: 'Prevention, episiotomy, repair, aftercare, next birth', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['perineal tear', 'OASIS', 'OASI', 'third degree tear', 'fourth degree tear', 'episiotomy', 'anal sphincter', 'perineal repair'], updatedAt: '2026-11-28' },
  { slug: 'caesarean-section', title: 'Caesarean Section', subtitle: 'Urgency categories, technique, perioperative care, Robson audit', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['caesarean', 'cesarean', 'LSCS', 'C-section', 'Robson', 'decision to delivery', 'category 1', 'CS audit', 'LaQshya', 'maternal request'], updatedAt: '2026-11-28' },
  { slug: 'heart-disease-pregnancy', title: 'Heart Disease in Pregnancy', subtitle: 'mWHO risk, mitral stenosis, mechanical valves, labour care, PPCM', specialty: 'obstetrics', category: 'Medical disorders', tags: ['cardiac disease', 'heart disease', 'RHD', 'rheumatic', 'mitral stenosis', 'mechanical valve', 'warfarin', 'mWHO', 'peripartum cardiomyopathy', 'PPCM', 'endocarditis prophylaxis'], updatedAt: '2026-11-28' },
  { slug: 'hiv-hbv-syphilis-pregnancy', title: 'HIV, Hepatitis B & Syphilis in Pregnancy', subtitle: 'Triple elimination: screening, treatment, newborn prophylaxis', specialty: 'obstetrics', category: 'Medical disorders', tags: ['HIV', 'PPTCT', 'EVTHS', 'EMTCT', 'hepatitis B', 'HBsAg', 'HBIG', 'tenofovir', 'syphilis', 'VDRL', 'RPR', 'benzathine penicillin', 'congenital syphilis', 'NACO'], updatedAt: '2026-11-28' },
  { slug: 'postmenopausal-bleeding', title: 'Postmenopausal Bleeding', subtitle: 'Fast-track work-up, endometrial thickness, HRT bleeding', specialty: 'gynaecology', category: 'Gynae oncology', tags: ['PMB', 'postmenopausal bleeding', 'endometrial thickness', 'TVS', 'Pipelle', 'hysteroscopy', 'endometrial cancer', 'tamoxifen', 'HRT bleeding'], updatedAt: '2026-11-28' },
  { slug: 'contraception-ec', title: 'Contraception & Emergency Contraception', subtitle: 'National programme methods, starting rules, missed pills, EC', specialty: 'gynaecology', category: 'Reproductive medicine', tags: ['contraception', 'family planning', 'COC', 'OCP', 'Mala-N', 'Chhaya', 'centchroman', 'ormeloxifene', 'Antara', 'DMPA', 'IUCD', 'Cu-T', 'emergency contraception', 'ECP', 'i-pill', 'ulipristal', 'levonorgestrel', 'missed pill'], updatedAt: '2026-11-28' },
  { slug: 'amenorrhoea-poi', title: 'Amenorrhoea & Premature Ovarian Insufficiency', subtitle: 'Stepwise work-up, hypothalamic amenorrhoea, prolactin, POI care', specialty: 'gynaecology', category: 'Reproductive endocrinology', tags: ['amenorrhoea', 'amenorrhea', 'primary amenorrhoea', 'secondary amenorrhoea', 'POI', 'POF', 'premature ovarian failure', 'hypothalamic amenorrhoea', 'hyperprolactinaemia', 'prolactin', 'FSH', 'karyotype'], updatedAt: '2026-11-28' },
  { slug: 'urinary-incontinence', title: 'Urinary Incontinence', subtitle: 'Stress, urgency and mixed: PFMT, OAB drugs, botox, slings', specialty: 'gynaecology', category: 'Benign gynaecology', tags: ['urinary incontinence', 'SUI', 'stress incontinence', 'urge incontinence', 'OAB', 'overactive bladder', 'PFMT', 'Kegel', 'mirabegron', 'solifenacin', 'oxybutynin', 'botox', 'TVT', 'TOT', 'mid-urethral sling', 'colposuspension', 'urogynaecology'], updatedAt: '2026-11-28' },
  { slug: 'cervical-vulval-cancer', title: 'Cervical & Vulval Cancer', subtitle: 'FIGO staging, treatment by stage, chemoradiation, groin nodes', specialty: 'gynaecology', category: 'Gynae oncology', tags: ['cervical cancer', 'carcinoma cervix', 'Ca cervix', 'FIGO staging', 'radical hysterectomy', 'Wertheim', 'chemoradiation', 'brachytherapy', 'trachelectomy', 'vulval cancer', 'vulvar cancer', 'sentinel node', 'LACC'], updatedAt: '2026-11-28' },
  { slug: 'shoulder-dystocia', title: 'Shoulder Dystocia', subtitle: 'Obstetric emergency', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['dystocia', 'HELPERR'], emergency: true, updatedAt: '2026-06-22' },
  { slug: 'twin-pregnancy', title: 'Twin Pregnancy', subtitle: 'Chorionicity, surveillance, timing and mode of birth', specialty: 'obstetrics', category: 'Fetal medicine', tags: ['twins', 'DCDA', 'MCDA', 'MCMA', 'TTTS', 'chorionicity', 'multiple'], updatedAt: '2026-11-28' },
  { slug: 'fetal-growth-restriction', title: 'Fetal Growth Restriction', subtitle: 'Small-for-gestational-age fetus', specialty: 'obstetrics', category: 'Fetal medicine', tags: ['FGR', 'IUGR', 'SGA', 'Doppler'], updatedAt: '2026-06-10' },
  { slug: 'rh-isoimmunisation', title: 'Rh Isoimmunisation', subtitle: 'Red cell alloimmunisation in pregnancy', specialty: 'obstetrics', category: 'Fetal medicine', tags: ['Rh', 'anti-D', 'alloimmunisation'], updatedAt: '2026-05-28' },
  // Gynaecology
  { slug: 'ectopic-pregnancy', title: 'Ectopic Pregnancy', subtitle: 'Pregnancy outside the uterine cavity', specialty: 'gynaecology', category: 'Early pregnancy', tags: ['tubal', 'PUL', 'beta-hCG'], emergency: true, updatedAt: '2026-10-05' },
  { slug: 'pcos', title: 'Polycystic Ovary Syndrome', subtitle: 'Endocrine and metabolic disorder', specialty: 'gynaecology', category: 'Reproductive endocrinology', tags: ['PCOS', 'Rotterdam', 'anovulation'], updatedAt: '2026-09-25' },
  { slug: 'uterine-fibroids', title: 'Uterine Fibroids', subtitle: 'Leiomyomas', specialty: 'gynaecology', category: 'Benign gynaecology', tags: ['fibroid', 'leiomyoma', 'myomectomy'], updatedAt: '2026-09-08' },
  { slug: 'abnormal-uterine-bleeding', title: 'Abnormal Uterine Bleeding', subtitle: 'PALM-COEIN classification', specialty: 'gynaecology', category: 'Benign gynaecology', tags: ['AUB', 'HMB', 'PALM-COEIN', 'menorrhagia'], updatedAt: '2026-08-27' },
  { slug: 'endometriosis', title: 'Endometriosis', subtitle: 'Chronic inflammatory condition', specialty: 'gynaecology', category: 'Benign gynaecology', tags: ['endometrioma', 'dysmenorrhoea', 'pelvic pain'], updatedAt: '2026-08-11' },
  { slug: 'cervical-screening', title: 'Cervical Cancer Screening', subtitle: 'HPV testing, VIA and cytology', specialty: 'gynaecology', category: 'Gynae oncology', tags: ['HPV', 'VIA', 'Pap', 'colposcopy'], updatedAt: '2026-07-29' },
  { slug: 'menopause', title: 'Menopause', subtitle: 'Diagnosis and symptom management', specialty: 'gynaecology', category: 'Reproductive endocrinology', tags: ['MHT', 'HRT', 'vasomotor'], updatedAt: '2026-07-07' },
  { slug: 'infertility-evaluation', title: 'Infertility Evaluation', subtitle: 'Initial assessment of the couple', specialty: 'gynaecology', category: 'Reproductive medicine', tags: ['subfertility', 'AMH', 'HSG', 'semen analysis'], updatedAt: '2026-06-15' },
];

export const TOPICS: Topic[] = SEEDS.map((seed) => {
  const guidelineIds = GUIDELINES.filter((g) => g.topicSlugs.includes(seed.slug)).map((g) => g.id);
  const base: Topic = {
    ...seed,
    overview: `Sample overview. This page will summarise current guidance on ${seed.title.toLowerCase()} from FOGSI, ACOG, RCOG, NICE and other bodies, with every statement linked to its source.`,
    keyPoints: [
      { text: `Structured summary of ${seed.title} across priority guidelines` },
      { text: 'Source-cited key recommendations (pending editorial review)' },
      { text: 'Links to the original guideline documents' },
    ],
    sections: placeholderSections(seed.title),
    guidelineIds,
    status: 'sample',
  };
  const authored = AUTHORED_TOPICS[seed.slug];
  return authored ? { ...base, ...authored, guidelineIds: authored.guidelineIds ?? guidelineIds } : base;
});

const bySlug = new Map(TOPICS.map((t) => [t.slug, t]));
export const getTopic = (slug: string) => bySlug.get(slug);
export const topicsBySpecialty = (s: Specialty) => TOPICS.filter((t) => t.specialty === s);
