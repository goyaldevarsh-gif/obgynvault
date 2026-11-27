import {
  Activity, AlertTriangle, Baby, BarChart3, BookText, CalendarCheck, ClipboardList, Droplets, FlaskConical,
  HeartPulse, Pill, ShieldAlert, Siren, Stethoscope, Syringe, type LucideIcon,
} from 'lucide-react';

export const SECTION_ICONS: Record<string, LucideIcon> = {
  definition: BookText,
  epidemiology: BarChart3,
  risk: ShieldAlert,
  diagnosis: Stethoscope,
  lab: FlaskConical,
  management: ClipboardList,
  drug: Pill,
  injection: Syringe,
  emergency: Siren,
  fluids: Droplets,
  monitoring: Activity,
  fetus: Baby,
  delivery: HeartPulse,
  complications: AlertTriangle,
  followup: CalendarCheck,
};
