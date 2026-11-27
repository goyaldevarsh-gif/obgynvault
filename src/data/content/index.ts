import type { Topic } from '@/types/content';
import { preeclampsia } from './preeclampsia';
import { postpartumHaemorrhage } from './postpartum-haemorrhage';
import { gestationalDiabetes } from './gestational-diabetes';
import { ectopicPregnancy } from './ectopic-pregnancy';
import { pcos } from './pcos';
import { uterineFibroids } from './uterine-fibroids';
import { abnormalUterineBleeding } from './abnormal-uterine-bleeding';
import { endometriosis } from './endometriosis';
import { pretermLabour } from './preterm-labour';
import { anaemiaInPregnancy } from './anaemia-in-pregnancy';
import { vteInPregnancy } from './vte-in-pregnancy';
import { fetalGrowthRestriction } from './fetal-growth-restriction';
import { rhIsoimmunisation } from './rh-isoimmunisation';
import { placentaAccretaSpectrum } from './placenta-accreta-spectrum';
import { shoulderDystocia } from './shoulder-dystocia';
import { antenatalCare } from './antenatal-care';
import { cervicalScreening } from './cervical-screening';
import { infertilityEvaluation } from './infertility-evaluation';
import { menopause } from './menopause';
import { inductionOfLabour } from './induction-of-labour';
import { promPprom } from './prom-pprom';
import { vbac } from './vbac';
import { twinPregnancy } from './twin-pregnancy';
import { intrapartumFeverSepsis } from './intrapartum-fever-sepsis';
import { postpartumContraception } from './postpartum-contraception';
import { hyperemesisGravidarum } from './hyperemesis-gravidarum';

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
  'preterm-labour': pretermLabour,
  'anaemia-in-pregnancy': anaemiaInPregnancy,
  'vte-in-pregnancy': vteInPregnancy,
  'fetal-growth-restriction': fetalGrowthRestriction,
  'rh-isoimmunisation': rhIsoimmunisation,
  'placenta-accreta-spectrum': placentaAccretaSpectrum,
  'shoulder-dystocia': shoulderDystocia,
  'antenatal-care': antenatalCare,
  'cervical-screening': cervicalScreening,
  'infertility-evaluation': infertilityEvaluation,
  menopause,
  'induction-of-labour': inductionOfLabour,
  'prom-pprom': promPprom,
  vbac,
  'twin-pregnancy': twinPregnancy,
  'intrapartum-fever-sepsis': intrapartumFeverSepsis,
  'postpartum-contraception': postpartumContraception,
  'hyperemesis-gravidarum': hyperemesisGravidarum,
};
