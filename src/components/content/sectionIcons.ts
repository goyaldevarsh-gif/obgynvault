import { AlertTriangle, BookText, CalendarCheck, ClipboardList, Stethoscope, ShieldAlert, type LucideIcon } from 'lucide-react';

export const SECTION_ICONS: Record<string, LucideIcon> = {
  definition: BookText,
  risk: ShieldAlert,
  diagnosis: Stethoscope,
  management: ClipboardList,
  complications: AlertTriangle,
  followup: CalendarCheck,
};
