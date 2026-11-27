import type { Specialty, Topic, TopicSection } from '@/types/content';
import { GUIDELINES } from './guidelines';

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
      `Sample placeholder. This section will summarise ${s.title.toLowerCase()} for ${title}, written from the linked source guidelines.`,
      'Each statement will cite its guideline, year and section, and will only be published after clinical editorial review.',
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
  { slug: 'antenatal-care', title: 'Routine Antenatal Care', subtitle: 'Schedule, screening and counselling', specialty: 'obstetrics', category: 'Antenatal', tags: ['ANC', 'booking', 'screening'], updatedAt: '2026-08-20' },
  { slug: 'preterm-labour', title: 'Preterm Labour', subtitle: 'Threatened and established preterm labour', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['PTL', 'PPROM', 'tocolysis'], updatedAt: '2026-08-02' },
  { slug: 'placenta-accreta-spectrum', title: 'Placenta Accreta Spectrum', subtitle: 'Abnormally invasive placenta', specialty: 'obstetrics', category: 'Placental disorders', tags: ['PAS', 'accreta', 'increta', 'percreta'], updatedAt: '2026-07-18' },
  { slug: 'vte-in-pregnancy', title: 'VTE in Pregnancy', subtitle: 'Risk assessment and thromboprophylaxis', specialty: 'obstetrics', category: 'Medical disorders', tags: ['DVT', 'PE', 'thrombosis', 'LMWH'], updatedAt: '2026-07-01' },
  { slug: 'shoulder-dystocia', title: 'Shoulder Dystocia', subtitle: 'Obstetric emergency', specialty: 'obstetrics', category: 'Labour & delivery', tags: ['dystocia', 'HELPERR'], emergency: true, updatedAt: '2026-06-22' },
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

/** Richer sample for the flagship topic page. Still framing text only: no thresholds, doses or timings. */
const PREECLAMPSIA_OVERRIDE: Partial<Topic> = {
  overview:
    'Sample overview. Preeclampsia is a multisystem hypertensive disorder of pregnancy. This page will bring together the FOGSI, ACOG, RCOG/NICE and WHO positions on its diagnosis, severity assessment, timing of delivery and seizure prophylaxis, with each statement cited to its source.',
  keyPoints: [
    'Hypertensive disorder of pregnancy, usually presenting in the second half of pregnancy',
    'Diagnostic criteria will be shown side by side as each guideline defines them',
    'A major contributor to maternal and perinatal morbidity worldwide, including India',
    'Management content will be published only after editorial review against source',
  ],
};

export const TOPICS: Topic[] = SEEDS.map((seed) => {
  const guidelineIds = GUIDELINES.filter((g) => g.topicSlugs.includes(seed.slug)).map((g) => g.id);
  const base: Topic = {
    ...seed,
    overview: `Sample overview. This page will summarise current guidance on ${seed.title.toLowerCase()} from FOGSI, ACOG, RCOG, NICE and other bodies, with every statement linked to its source.`,
    keyPoints: [
      `Structured summary of ${seed.title} across priority guidelines`,
      'Source-cited key recommendations (pending editorial review)',
      'Links to the original guideline documents',
    ],
    sections: placeholderSections(seed.title),
    guidelineIds,
    status: 'sample',
  };
  return seed.slug === 'preeclampsia' ? { ...base, ...PREECLAMPSIA_OVERRIDE } : base;
});

const bySlug = new Map(TOPICS.map((t) => [t.slug, t]));
export const getTopic = (slug: string) => bySlug.get(slug);
export const topicsBySpecialty = (s: Specialty) => TOPICS.filter((t) => t.specialty === s);
