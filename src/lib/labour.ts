/**
 * Labour room decision aids. Pure functions so they can be unit tested.
 * Every threshold here is taken from a cited guideline (see the Labour Room page); nothing is invented.
 * DRAFT: pending clinician verification against the original documents.
 */

export type Grade = 'white' | 'amber' | 'red';

// ---------- CTG: NICE NG229 (updated Nov 2025), recs 1.4.12–1.4.32 ----------
export interface CtgOption {
  key: string;
  label: string;
  grade: Grade;
}
export interface CtgFeature {
  key: 'contractions' | 'baseline' | 'variability' | 'decelerations';
  label: string;
  locator: string;
  options: CtgOption[];
}

export const CTG_FEATURES: CtgFeature[] = [
  {
    key: 'contractions',
    label: 'Contractions',
    locator: 'Rec 1.4.12',
    options: [
      { key: 'lt5', label: 'Fewer than 5 in 10 min', grade: 'white' },
      { key: 'ge5', label: '5 or more in 10 min, or hypertonus', grade: 'amber' },
    ],
  },
  {
    key: 'baseline',
    label: 'Baseline FHR',
    locator: 'Rec 1.4.15',
    options: [
      { key: 'normal', label: 'Stable 110–160 bpm', grade: 'white' },
      { key: '100-109', label: '100–109 bpm', grade: 'amber' },
      { key: 'rise20', label: 'Rise of 20 bpm or more since start of labour / last hourly review', grade: 'amber' },
      { key: 'unclear', label: 'Unable to determine baseline', grade: 'amber' },
      { key: 'lt100', label: 'Below 100 bpm', grade: 'red' },
      { key: 'gt160', label: 'Above 160 bpm', grade: 'red' },
    ],
  },
  {
    key: 'variability',
    label: 'Variability',
    locator: 'Rec 1.4.18',
    options: [
      { key: 'normal', label: '5–25 bpm', grade: 'white' },
      { key: 'low30', label: 'Under 5 bpm for 30–50 min', grade: 'amber' },
      { key: 'high10', label: 'Over 25 bpm for up to 10 min', grade: 'amber' },
      { key: 'low50', label: 'Under 5 bpm for more than 50 min', grade: 'red' },
      { key: 'highgt10', label: 'Over 25 bpm for more than 10 min', grade: 'red' },
      { key: 'sinus', label: 'Sinusoidal', grade: 'red' },
    ],
  },
  {
    key: 'decelerations',
    label: 'Decelerations',
    locator: 'Rec 1.4.24',
    options: [
      { key: 'none', label: 'None, early, or variable without concerning features', grade: 'white' },
      { key: 'repvar-lt30', label: 'Repetitive variable with concerning features, under 30 min', grade: 'amber' },
      { key: 'nonrep-gt30', label: 'Non-repetitive variable with concerning features, over 30 min', grade: 'amber' },
      { key: 'repvar-gt30', label: 'Repetitive variable with concerning features, over 30 min', grade: 'red' },
      { key: 'late', label: 'Late decelerations (any duration)', grade: 'red' },
      { key: 'prolonged', label: 'Acute bradycardia, or a single prolonged deceleration of 3 min or more', grade: 'red' },
    ],
  },
];

export type CtgCategory = 'normal' | 'suspicious' | 'pathological';

/** NICE NG229 rec 1.4.32: normal = all white; suspicious = 1 amber; pathological = 1 red or ≥2 amber. */
export function classifyCtg(sel: Partial<Record<CtgFeature['key'], string>>) {
  const grades = CTG_FEATURES.map((f) => f.options.find((o) => o.key === sel[f.key])?.grade);
  const complete = grades.every(Boolean);
  const amber = grades.filter((g) => g === 'amber').length;
  const red = grades.filter((g) => g === 'red').length;
  const category: CtgCategory = red >= 1 || amber >= 2 ? 'pathological' : amber === 1 ? 'suspicious' : 'normal';
  return { complete, amber, red, category, acuteBradycardia: sel.decelerations === 'prolonged' };
}

// ---------- Labour progress: WHO Labour Care Guide (2020), Section 5 ----------
/** Hours at a given cervical dilatation (active first stage) at or above which the LCG flags an alert. */
export const LCG_DILATATION_LIMIT: Record<number, number> = { 5: 6, 6: 5, 7: 3, 8: 2.5, 9: 2 };
/** Second stage: alert if not yet born at ≥3 h (nulliparous) or ≥2 h (multiparous). */
export const LCG_SECOND_STAGE_LIMIT = { nulliparous: 3, multiparous: 2 } as const;

export function lcgFirstStageAlert(dilatationCm: number, hoursAtDilatation: number) {
  const limit = LCG_DILATATION_LIMIT[dilatationCm];
  if (limit === undefined || !(hoursAtDilatation >= 0)) return null;
  return { limit, alert: hoursAtDilatation >= limit };
}

export function lcgSecondStageAlert(parity: keyof typeof LCG_SECOND_STAGE_LIMIT, hours: number) {
  if (!(hours >= 0)) return null;
  const limit = LCG_SECOND_STAGE_LIMIT[parity];
  return { limit, alert: hours >= limit };
}

/** NICE NG235 rec 1.8.42: suspect delay if dilatation is less than 2 cm in 4 hours. */
export function niceSuspectedDelay(cmGainedIn4h: number) {
  return cmGainedIn4h < 2;
}

// ---------- NHS England National MEWS (2023/24), Gerry et al. BMJ Med 2024, Table 2 (antenatal) ----------
export interface MewsParam {
  key: string;
  label: string;
  unit: string;
  /** [upper bound inclusive, score] pairs, checked in order; last band covers everything above. */
  bands: [number, number][];
  flag?: string;
}

const band = (...b: [number, number][]) => b;

export const MEWS_PARAMS: MewsParam[] = [
  { key: 'rr', label: 'Resp. rate', unit: '/min', bands: band([6, 2], [8, 1], [21, 0], [24, 1], [Infinity, 2]) },
  { key: 'spo2', label: 'SpO₂', unit: '%', bands: band([92, 2], [94, 1], [Infinity, 0]) },
  { key: 'hr', label: 'Pulse', unit: 'bpm', bands: band([62, 2], [70, 1], [112, 0], [121, 1], [Infinity, 2]) },
  { key: 'sbp', label: 'Systolic', unit: 'mmHg', bands: band([93, 2], [100, 1], [135, 0], [144, 1], [Infinity, 2]) },
  { key: 'dbp', label: 'Diastolic', unit: 'mmHg', bands: band([56, 2], [61, 1], [88, 0], [96, 1], [Infinity, 2]) },
  {
    key: 'temp',
    label: 'Temp',
    unit: '°C',
    bands: band([34.8, 2], [35.5, 1], [37.2, 0], [37.5, 1], [Infinity, 2]),
    flag: 'Bands from the BMJ Medicine paper (Table 2). The published chart may differ; check the chart in use.',
  },
];

/** Pulse bands for women more than 48 hours after birth (chart row; paper Table 3). */
export const MEWS_PULSE_POSTNATAL_48H: [number, number][] = band([50, 2], [57, 1], [98, 0], [107, 1], [Infinity, 2]);

export function mewsParamScore(bands: [number, number][], v: number): number {
  for (const [upper, s] of bands) if (v <= upper) return s;
  return bands[bands.length - 1][1];
}

export type MewsLevel = 'low' | 'low-medium' | 'medium' | 'high';

/** Chart escalation levels: 0–1 low, 2–4 low-medium, 5–7 medium, 8+ high. Any additional concern = at least low-medium, and one level higher if the score is above 2. */
export function mewsLevel(total: number, concern: boolean): MewsLevel {
  const order: MewsLevel[] = ['low', 'low-medium', 'medium', 'high'];
  let i = total >= 8 ? 3 : total >= 5 ? 2 : total >= 2 ? 1 : 0;
  if (concern) i = total > 2 ? Math.min(3, i + 1) : Math.max(i, 1);
  return order[i];
}

// ---------- Labour log: WHO LCG alert values (Sections 3–5) ----------
export interface LogEntry {
  t: number; // epoch ms
  cm?: number;
  fhr?: number;
  ctx?: number; // contractions per 10 min
  pulse?: number;
  sbp?: number;
  dbp?: number;
  temp?: number;
  note?: string;
}

/** Alert labels for one entry, using the WHO Labour Care Guide alert values. */
export function lcgEntryAlerts(e: LogEntry): string[] {
  const a: string[] = [];
  if (e.fhr !== undefined && (e.fhr < 110 || e.fhr >= 160)) a.push('FHR');
  if (e.ctx !== undefined && (e.ctx <= 2 || e.ctx > 5)) a.push('Contractions');
  if (e.pulse !== undefined && (e.pulse < 60 || e.pulse >= 120)) a.push('Pulse');
  if (e.sbp !== undefined && (e.sbp < 80 || e.sbp >= 140)) a.push('Systolic BP');
  if (e.dbp !== undefined && e.dbp >= 90) a.push('Diastolic BP');
  if (e.temp !== undefined && (e.temp < 35 || e.temp >= 37.5)) a.push('Temperature');
  return a;
}

/** Hours since the cervix was first recorded at its current dilatation (active phase only), with the LCG limit. */
export function timeAtCurrentDilatation(entries: LogEntry[], now: number) {
  const withCm = entries.filter((e) => e.cm !== undefined).sort((x, y) => x.t - y.t);
  if (!withCm.length) return null;
  const cur = withCm[withCm.length - 1].cm!;
  let since = withCm[withCm.length - 1].t;
  for (let i = withCm.length - 1; i >= 0 && withCm[i].cm === cur; i--) since = withCm[i].t;
  const hours = (now - since) / 3_600_000;
  const limit = LCG_DILATATION_LIMIT[cur];
  return { cm: cur, hours, limit, alert: limit !== undefined && hours >= limit };
}
