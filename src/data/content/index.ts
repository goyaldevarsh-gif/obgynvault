import type { Topic } from '@/types/content';
import { preeclampsia } from './preeclampsia';
import { postpartumHaemorrhage } from './postpartum-haemorrhage';
import { gestationalDiabetes } from './gestational-diabetes';
import { ectopicPregnancy } from './ectopic-pregnancy';
import { pcos } from './pcos';
import { uterineFibroids } from './uterine-fibroids';
import { abnormalUterineBleeding } from './abnormal-uterine-bleeding';
import { endometriosis } from './endometriosis';

/**
 * Topics with real, source-cited text. Each is status 'draft' until a clinician
 * checks every statement against the cited document and marks it 'verified'.
 */
export const AUTHORED_TOPICS: Record<string, Partial<Topic>> = {
  preeclampsia,
  'postpartum-haemorrhage': postpartumHaemorrhage,
  'gestational-diabetes': gestationalDiabetes,
  'ectopic-pregnancy': ectopicPregnancy,
  pcos,
  'uterine-fibroids': uterineFibroids,
  'abnormal-uterine-bleeding': abnormalUterineBleeding,
  endometriosis,
};
