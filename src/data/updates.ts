import type { UpdateItem } from '@/types/content';

/** Home carousel. Points to topics; draft status is shown on the topic page itself. */
export const UPDATES: UpdateItem[] = [
  { id: 'u1', label: 'New · FOGSI 2026', title: 'Preeclampsia', subtitle: 'FOGSI · NICE · ACOG compared, with citations', to: '/topics/preeclampsia' },
  { id: 'u2', label: 'WHO 2025 · FOGSI 2025', title: 'Postpartum haemorrhage', subtitle: 'MOTIVE bundle, shock index, escalation', to: '/topics/postpartum-haemorrhage' },
  { id: 'u3', label: 'Library', title: 'Gynaecology library', subtitle: 'PCOS, fibroids, AUB, endometriosis and more', to: '/library/gynaecology' },
];
