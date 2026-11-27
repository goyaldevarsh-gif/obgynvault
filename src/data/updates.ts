import type { UpdateItem } from '@/types/content';

/** Sample "what's new" feed for the home carousel. Placeholder copy, not real announcements. */
export const UPDATES: UpdateItem[] = [
  { id: 'u1', label: 'Featured', title: 'Hypertensive disorders of pregnancy', subtitle: 'FOGSI · ACOG · RCOG · NICE in one place', to: '/topics/preeclampsia' },
  { id: 'u2', label: 'Emergency', title: 'Postpartum haemorrhage', subtitle: 'Guideline sources at a glance', to: '/topics/postpartum-haemorrhage' },
  { id: 'u3', label: 'Library', title: 'Gynaecology library', subtitle: 'PCOS, fibroids, AUB, endometriosis and more', to: '/library/gynaecology' },
];
