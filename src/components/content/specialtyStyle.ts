import { Baby, Venus, type LucideIcon } from 'lucide-react';
import type { Specialty } from '@/types/content';

export const SPECIALTY: Record<Specialty, { label: string; icon: LucideIcon; tint: string; fg: string }> = {
  obstetrics: { label: 'Obstetrics', icon: Baby, tint: 'bg-teal-50', fg: 'text-teal-700' },
  gynaecology: { label: 'Gynaecology', icon: Venus, tint: 'bg-navy-100/60', fg: 'text-navy-600' },
};
