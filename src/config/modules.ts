import {
  Baby, BookOpen, BrainCircuit, Calculator, FlaskConical, GitCompareArrows, Home, Library, Bookmark,
  Pill, Search, ShieldCheck, Siren, Venus, Wrench, type LucideIcon,
} from 'lucide-react';

/** The 14 product modules, with the phase in which each one ships. Drives Tools, nav and "coming soon" screens. */
export interface ModuleDef {
  key: string;
  label: string;
  description: string;
  to: string;
  icon: LucideIcon;
  tint: string;
  fg: string;
  phase: number; // 1 = live in this build
}

export const MODULES: ModuleDef[] = [
  { key: 'home', label: 'Home', description: 'Dashboard', to: '/', icon: Home, tint: 'bg-teal-50', fg: 'text-teal', phase: 1 },
  { key: 'search', label: 'Clinical Search', description: 'One search across topics and guidelines', to: '/search', icon: Search, tint: 'bg-teal-50', fg: 'text-teal', phase: 1 },
  { key: 'obstetrics', label: 'Obstetrics', description: 'Obstetrics library', to: '/library/obstetrics', icon: Baby, tint: 'bg-amber-50', fg: 'text-amber', phase: 1 },
  { key: 'gynaecology', label: 'Gynaecology', description: 'Gynaecology library', to: '/library/gynaecology', icon: Venus, tint: 'bg-pink-50 dark:bg-pink-950/50', fg: 'text-pink-600', phase: 1 },
  { key: 'guidelines', label: 'Guidelines', description: 'FOGSI, ACOG, RCOG, NICE, WHO, FIGO', to: '/guidelines', icon: BookOpen, tint: 'bg-teal-50', fg: 'text-teal-700', phase: 1 },
  { key: 'topics', label: 'Clinical Topics', description: 'Structured topic pages', to: '/library', icon: Library, tint: 'bg-navy-100/60', fg: 'text-navy-600', phase: 1 },
  { key: 'compare', label: 'Compare', description: 'Side-by-side guideline comparison', to: '/tools/compare', icon: GitCompareArrows, tint: 'bg-teal-50', fg: 'text-teal-700', phase: 1 },
  { key: 'ai', label: 'AI Assistant', description: 'Source-grounded clinical Q&A', to: '/tools/ai-assistant', icon: BrainCircuit, tint: 'bg-violet-50 dark:bg-violet-950/50', fg: 'text-violet-600', phase: 4 },
  { key: 'drugs', label: 'Drug Vault', description: 'Drugs in pregnancy and lactation', to: '/tools/drug-vault', icon: Pill, tint: 'bg-amber-50', fg: 'text-amber', phase: 4 },
  { key: 'calculators', label: 'Calculators', description: 'EDD, GA, shock index, Bishop score, BMI', to: '/tools/calculators', icon: Calculator, tint: 'bg-teal-50', fg: 'text-teal', phase: 1 },
  { key: 'emergency', label: 'Emergency', description: 'PPH, eclampsia, ectopic, acute bleeding', to: '/tools/emergency', icon: Siren, tint: 'bg-alert-50', fg: 'text-alert', phase: 1 },
  { key: 'research', label: 'Research', description: 'Trials, reviews and evidence', to: '/tools/research', icon: FlaskConical, tint: 'bg-navy-100/60', fg: 'text-navy-600', phase: 4 },
  { key: 'vault', label: 'My Vault', description: 'Bookmarks, notes and history', to: '/vault', icon: Bookmark, tint: 'bg-amber-50', fg: 'text-amber', phase: 1 },
  { key: 'admin', label: 'Admin', description: 'Content management and review', to: '/tools/admin', icon: ShieldCheck, tint: 'bg-navy-100/60', fg: 'text-navy-600', phase: 1 },
];

export const getModule = (key: string) => MODULES.find((m) => m.key === key);
export const TOOL_MODULES = ['compare', 'ai', 'drugs', 'calculators', 'emergency', 'research', 'admin'].map((k) => getModule(k)!);
export const ToolsIcon = Wrench;
