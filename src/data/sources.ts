import type { GuidelineSource, SourceId } from '@/types/content';

/** Priority order agreed for ObGynVault: FOGSI, ACOG, RCOG, NICE first, then WHO, FIGO and others. */
export const SOURCES: GuidelineSource[] = [
  { id: 'FOGSI', shortName: 'FOGSI / ICOG', fullName: 'Federation of Obstetric & Gynaecological Societies of India', region: 'India', priority: 1, color: '#D97706' },
  { id: 'ACOG', shortName: 'ACOG', fullName: 'American College of Obstetricians and Gynecologists', region: 'USA', priority: 2, color: '#1D4ED8' },
  { id: 'RCOG', shortName: 'RCOG', fullName: 'Royal College of Obstetricians and Gynaecologists', region: 'UK', priority: 3, color: '#BE123C' },
  { id: 'NICE', shortName: 'NICE', fullName: 'National Institute for Health and Care Excellence', region: 'UK', priority: 4, color: '#7C3AED' },
  { id: 'WHO', shortName: 'WHO', fullName: 'World Health Organization', region: 'Global', priority: 5, color: '#0284C7' },
  { id: 'FIGO', shortName: 'FIGO', fullName: 'International Federation of Gynecology and Obstetrics', region: 'Global', priority: 6, color: '#059669' },
  { id: 'MOHFW', shortName: 'MoHFW / NHM', fullName: 'Ministry of Health & Family Welfare, Government of India', region: 'India', priority: 7, color: '#4D7C0F' },
  { id: 'ESHRE', shortName: 'ESHRE', fullName: 'European Society of Human Reproduction and Embryology', region: 'Europe', priority: 8, color: '#DB2777' },
  { id: 'ASRM', shortName: 'ASRM', fullName: 'American Society for Reproductive Medicine', region: 'USA', priority: 9, color: '#4338CA' },
  { id: 'SMFM', shortName: 'SMFM', fullName: 'Society for Maternal-Fetal Medicine', region: 'USA', priority: 11, color: '#0F766E' },
  { id: 'ISUOG', shortName: 'ISUOG', fullName: 'International Society of Ultrasound in Obstetrics and Gynecology', region: 'Global', priority: 12, color: '#C026D3' },
  { id: 'BSH', shortName: 'BSH', fullName: 'British Society for Haematology', region: 'UK', priority: 10, color: '#B91C1C' },
  { id: 'ICMR', shortName: 'ICMR', fullName: 'Indian Council of Medical Research (Standard Treatment Workflows)', region: 'India', priority: 13, color: '#9A3412' },
  { id: 'AAFP', shortName: 'AAFP', fullName: 'American Academy of Family Physicians (American Family Physician)', region: 'USA', priority: 14, color: '#475569' },
  { id: 'NHS', shortName: 'NHS', fullName: 'NHS England / UK Health Security Agency screening programmes', region: 'UK', priority: 15, color: '#005EB8' },
  { id: 'USPSTF', shortName: 'USPSTF', fullName: 'US Preventive Services Task Force', region: 'USA', priority: 16, color: '#1E3A8A' },
  { id: 'ASCCP', shortName: 'ASCCP', fullName: 'American Society for Colposcopy and Cervical Pathology', region: 'USA', priority: 17, color: '#0891B2' },
  { id: 'IMS', shortName: 'IMS (India)', fullName: 'Indian Menopause Society', region: 'India', priority: 18, color: '#A21CAF' },
  { id: 'NAMS', shortName: 'Menopause Society', fullName: 'The Menopause Society (formerly NAMS)', region: 'USA', priority: 19, color: '#9D174D' },
  { id: 'CDC', shortName: 'CDC', fullName: 'US Centers for Disease Control and Prevention', region: 'USA', priority: 21, color: '#0E7490' },
  { id: 'RANZCOG', shortName: 'RANZCOG', fullName: 'Royal Australian and New Zealand College of Obstetricians and Gynaecologists', region: 'Australia/NZ', priority: 22, color: '#3730A3' },
  { id: 'ATA', shortName: 'ATA', fullName: 'American Thyroid Association', region: 'USA', priority: 23, color: '#6D28D9' },
  { id: 'EOTTD', shortName: 'EOTTD', fullName: 'European Organisation for Treatment of Trophoblastic Diseases', region: 'Europe', priority: 24, color: '#115E59' },
  { id: 'ESC', shortName: 'ESC', fullName: 'European Society of Cardiology', region: 'Europe', priority: 25, color: '#991B1B' },
  { id: 'BMS', shortName: 'BMS', fullName: 'British Menopause Society', region: 'UK', priority: 26, color: '#BE185D' },
  { id: 'HSE', shortName: 'HSE Ireland', fullName: 'Health Service Executive (Ireland) national clinical guidelines', region: 'Ireland', priority: 27, color: '#047857' },
  { id: 'ENDO', shortName: 'Endocrine Society', fullName: 'Endocrine Society', region: 'USA', priority: 28, color: '#1E40AF' },
  { id: 'EAU', shortName: 'EAU', fullName: 'European Association of Urology', region: 'Europe', priority: 29, color: '#0369A1' },
  { id: 'ESGO', shortName: 'ESGO', fullName: 'European Society of Gynaecological Oncology', region: 'Europe', priority: 30, color: '#7E22CE' },
  { id: 'IMSI', shortName: 'Intl Menopause Soc', fullName: 'International Menopause Society and partner societies', region: 'Global', priority: 20, color: '#86198F' },
];

const byId = new Map(SOURCES.map((s) => [s.id, s]));

export function getSource(id: SourceId): GuidelineSource {
  const s = byId.get(id);
  if (!s) throw new Error(`Unknown source ${id}`);
  return s;
}

export const PRIORITY_SOURCES: SourceId[] = ['FOGSI', 'ACOG', 'RCOG', 'NICE'];
