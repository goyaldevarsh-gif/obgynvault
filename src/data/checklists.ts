import type { Citation } from '@/types/content';

/**
 * Bedside checklists for the Labour room. DRAFT: every item is condensed from the cited
 * text already in the Induction of Labour and VBAC topics; nothing new is added here.
 */
export interface ChecklistItem { text: string; refs: Citation[] }
export interface ChecklistGroup { title: string; items: ChecklistItem[] }
export interface Checklist { id: string; title: string; topicSlug: string; groups: ChecklistGroup[] }

export const CHECKLISTS: Checklist[] = [
  {
    id: 'iol',
    title: 'Before & during induction',
    topicSlug: 'induction-of-labour',
    groups: [
      {
        title: 'Before starting',
        items: [
          { text: 'Valid indication and gestation documented; facility has caesarean capability (MoHFW: FRU or District Hospital).', refs: [{ guidelineId: 'fogsi-iol-gcpr', locator: '§2' }, { guidelineId: 'mohfw-uterotonics-2015', locator: 'p. 6' }] },
          { text: 'No contraindication: placenta or vasa praevia, cord presentation, transverse lie or footling breech, previous classical or inverted-T incision.', refs: [{ guidelineId: 'fogsi-iol-gcpr', locator: '§4.3' }] },
          { text: 'Scans checked for a low-lying placenta.', refs: [{ guidelineId: 'nice-ng207', locator: '1.7.6' }] },
          { text: 'Bishop score recorded (NICE uses 6 or less vs more than 6 to choose the method).', refs: [{ guidelineId: 'nice-ng207', locator: '1.3.4, 1.3.7–1.3.9' }] },
          { text: 'NST / CTG done before starting.', refs: [{ guidelineId: 'fogsi-iol-gcpr', locator: '§7' }, { guidelineId: 'nice-ng207', locator: '1.5.1–1.5.2' }] },
          { text: 'Previous caesarean? No misoprostol or prostaglandins; use balloon or amniotomy + oxytocin (see VBAC checklist).', refs: [{ guidelineId: 'who-iol-2011', locator: 'Rec 10' }, { guidelineId: 'fogsi-iol-gcpr', locator: '§4.2.8' }] },
        ],
      },
      {
        title: 'During induction',
        items: [
          { text: 'Contractions and fetal heart monitored; never leave a woman on uterotonics unattended. Partogram started.', refs: [{ guidelineId: 'mohfw-uterotonics-2015', locator: 'pp. 6–8' }, { guidelineId: 'fogsi-iol-gcpr', locator: '§7' }] },
          { text: 'Tachysystole (more than 5 contractions in 10 min) or abnormal FHR: no further doses, remove pessary, stop oxytocin, tocolytic (MoHFW: terbutaline 250 mcg IV slowly over 5 min).', refs: [{ guidelineId: 'nice-ng207', locator: '1.5.3' }, { guidelineId: 'fogsi-iol-gcpr', locator: '§9.1' }, { guidelineId: 'mohfw-uterotonics-2015', locator: 'p. 8' }] },
          { text: 'Continuous CTG after membrane rupture if the presenting part is unstable.', refs: [{ guidelineId: 'nice-ng207', locator: '1.7.5' }] },
          { text: 'Suspected uterine rupture: immediate category 1 caesarean.', refs: [{ guidelineId: 'nice-ng207', locator: '1.7.7' }] },
        ],
      },
    ],
  },
  {
    id: 'vbac',
    title: 'VBAC (labour after caesarean)',
    topicSlug: 'vbac',
    groups: [
      {
        title: 'Eligibility',
        items: [
          { text: 'Singleton, cephalic, 37+0 weeks or more, one previous lower-segment caesarean.', refs: [{ guidelineId: 'rcog-gtg-45', locator: '6.1' }, { guidelineId: 'fogsi-vbac-gcpr', locator: 'Grade B' }] },
          { text: 'No classical or complex scar, previous rupture, cavity-entering myomectomy, placenta praevia, repaired VVF or CPD.', refs: [{ guidelineId: 'fogsi-vbac-gcpr', locator: 'Grade C' }, { guidelineId: 'rcog-gtg-45', locator: '6.2' }] },
          { text: 'Inter-delivery interval noted (FOGSI/FIGO: 18 months or more ideal).', refs: [{ guidelineId: 'fogsi-vbac-gcpr', locator: 'Grade C' }, { guidelineId: 'figo-vbac-2025', locator: 'Rec 11' }] },
          { text: 'Counselled and consent documented.', refs: [{ guidelineId: 'rcog-gtg-45' }] },
        ],
      },
      {
        title: 'In labour',
        items: [
          { text: 'Delivery suite with immediate caesarean (within 30 min), blood transfusion and neonatal resuscitation.', refs: [{ guidelineId: 'fogsi-vbac-gcpr', locator: 'Grade B' }, { guidelineId: 'rcog-gtg-45', locator: '8.1' }] },
          { text: 'Continuous CTG from onset of regular contractions; one-to-one care.', refs: [{ guidelineId: 'fogsi-vbac-gcpr', locator: 'Grade C' }, { guidelineId: 'figo-vbac-2025', locator: 'Rec 29' }] },
          { text: 'IV access, FBC and group & save (RCOG, FOGSI; NICE NG121: no routine cannula).', refs: [{ guidelineId: 'rcog-gtg-45', locator: '8.1' }, { guidelineId: 'nice-ng121', locator: '1.19.1' }] },
          { text: 'Induction: mechanical methods only; no misoprostol. Oxytocin with caution, not above 20 mU/min.', refs: [{ guidelineId: 'figo-vbac-2025', locator: 'Rec 23–25' }, { guidelineId: 'rcog-gtg-45', locator: '8.2' }] },
          { text: 'Watch for rupture: prolonged deceleration, constant pain, scar tenderness, tachycardia, bleeding, loss of station, rising analgesia need.', refs: [{ guidelineId: 'fogsi-vbac-gcpr', locator: 'GPP' }, { guidelineId: 'rcog-gtg-45', locator: '8.1' }] },
          { text: 'Active management of the third stage; no routine scar exploration.', refs: [{ guidelineId: 'fogsi-vbac-gcpr', locator: 'Grade B' }] },
        ],
      },
    ],
  },
];
