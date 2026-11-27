import type { GuidelineSource, SourceId } from '@/types/content';

/** Priority order agreed for ObGynVault: FOGSI, ACOG, RCOG, NICE first, then WHO, FIGO and others. */
export const SOURCES: GuidelineSource[] = [
  { id: 'FOGSI', shortName: 'FOGSI / ICOG', fullName: 'Federation of Obstetric & Gynaecological Societies of India', region: 'India', priority: 1, color: '#E5A34C' },
  { id: 'ACOG', shortName: 'ACOG', fullName: 'American College of Obstetricians and Gynecologists', region: 'USA', priority: 2, color: '#1F4E8C' },
  { id: 'RCOG', shortName: 'RCOG', fullName: 'Royal College of Obstetricians and Gynaecologists', region: 'UK', priority: 3, color: '#0E5A7A' },
  { id: 'NICE', shortName: 'NICE', fullName: 'National Institute for Health and Care Excellence', region: 'UK', priority: 4, color: '#5B2C83' },
  { id: 'WHO', shortName: 'WHO', fullName: 'World Health Organization', region: 'Global', priority: 5, color: '#0093D5' },
  { id: 'FIGO', shortName: 'FIGO', fullName: 'International Federation of Gynecology and Obstetrics', region: 'Global', priority: 6, color: '#20A69A' },
  { id: 'MOHFW', shortName: 'MoHFW / NHM', fullName: 'Ministry of Health & Family Welfare, Government of India', region: 'India', priority: 7, color: '#C2410C' },
  { id: 'ESHRE', shortName: 'ESHRE', fullName: 'European Society of Human Reproduction and Embryology', region: 'Europe', priority: 8, color: '#2563EB' },
  { id: 'ASRM', shortName: 'ASRM', fullName: 'American Society for Reproductive Medicine', region: 'USA', priority: 9, color: '#7C3AED' },
];

const byId = new Map(SOURCES.map((s) => [s.id, s]));

export function getSource(id: SourceId): GuidelineSource {
  const s = byId.get(id);
  if (!s) throw new Error(`Unknown source ${id}`);
  return s;
}

export const PRIORITY_SOURCES: SourceId[] = ['FOGSI', 'ACOG', 'RCOG', 'NICE'];
