import { Baby, Venus, type LucideIcon } from 'lucide-react';
import type { Specialty } from '@/types/content';

export const SPECIALTY: Record<Specialty, { label: string; icon: LucideIcon; tint: string; fg: string }> = {
  obstetrics: { label: 'Obstetrics', icon: Baby, tint: 'bg-amber-50', fg: 'text-amber' },
  gynaecology: { label: 'Gynaecology', icon: Venus, tint: 'bg-pink-50', fg: 'text-pink-600' },
};
