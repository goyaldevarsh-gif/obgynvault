import type { UpdateItem } from '@/types/content';

/** Home carousel. Points to topics; draft status is shown on the topic page itself. */
export const UPDATES: UpdateItem[] = [
  { id: 'u1', label: 'New · FOGSI 2026', title: 'Preeclampsia', subtitle: 'FOGSI · NICE · ACOG compared, with citations', to: '/topics/preeclampsia' },
  { id: 'u2', label: 'WHO 2025 · FOGSI 2025', title: 'Postpartum haemorrhage', subtitle: 'MOTIVE bundle, shock index, escalation', to: '/topics/postpartum-haemorrhage' },
  { id: 'u3', label: 'FOGSI 2024 · NICE · ACOG', title: 'Gestational diabetes', subtitle: 'DIPSI vs two-step, targets, insulin, delivery', to: '/topics/gestational-diabetes' },
  { id: 'u4', label: 'FOGSI · NICE · ACOG', title: 'Ectopic pregnancy', subtitle: 'hCG, methotrexate, surgery, special sites', to: '/topics/ectopic-pregnancy' },
];
