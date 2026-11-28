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
import { endometrialHyperplasia } from './endometrial-hyperplasia';
import { pidVaginalDischarge } from './pid-vaginal-discharge';
import { ovarianCystAdnexalMass } from './ovarian-cyst-adnexal-mass';
import { miscarriageRpl } from './miscarriage-rpl';
import { mtpIndia } from './mtp-india';
import { pelvicOrganProlapse } from './pelvic-organ-prolapse';
import { antepartumHaemorrhage } from './antepartum-haemorrhage';
import { cholestasisOfPregnancy } from './cholestasis-of-pregnancy';
import { thyroidInPregnancy } from './thyroid-in-pregnancy';
import { breechEcv } from './breech-ecv';
import { stillbirthIufd } from './stillbirth-iufd';
import { gestationalTrophoblasticDisease } from './gestational-trophoblastic-disease';

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
  'endometrial-hyperplasia': endometrialHyperplasia,
  'pid-vaginal-discharge': pidVaginalDischarge,
  'ovarian-cyst-adnexal-mass': ovarianCystAdnexalMass,
  'miscarriage-rpl': miscarriageRpl,
  'mtp-india': mtpIndia,
  'pelvic-organ-prolapse': pelvicOrganProlapse,
  'antepartum-haemorrhage': antepartumHaemorrhage,
  'cholestasis-of-pregnancy': cholestasisOfPregnancy,
  'thyroid-in-pregnancy': thyroidInPregnancy,
  'breech-ecv': breechEcv,
  'stillbirth-iufd': stillbirthIufd,
  'gestational-trophoblastic-disease': gestationalTrophoblasticDisease,
};
