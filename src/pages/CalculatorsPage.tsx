import { Activity, Baby, CalendarDays, Gauge, Scale } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { CitationChips } from '@/components/content';
import { cx } from '@/lib/format';

/**
 * Phase 4 calculators. Only standard arithmetic or scores; any interpretation shown is taken
 * from a cited ObGynVault topic. No drug-dose calculators.
 */
type CalcKey = 'dates' | 'scan' | 'shock' | 'bishop' | 'bmi';

const CALCS: { key: CalcKey; label: string; icon: typeof Baby }[] = [
  { key: 'dates', label: 'EDD from LMP', icon: CalendarDays },
  { key: 'scan', label: 'GA from scan', icon: Baby },
  { key: 'shock', label: 'Shock index', icon: Activity },
  { key: 'bishop', label: 'Bishop score', icon: Gauge },
  { key: 'bmi', label: 'BMI', icon: Scale },
];

const DAY = 86_400_000;
const today = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};
const parse = (s: string) => (s ? new Date(s + 'T00:00:00') : null);
const fmt = (d: Date) => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
const ga = (days: number) => `${Math.floor(days / 7)} weeks ${days % 7} days`;

export default function CalculatorsPage() {
  const [calc, setCalc] = useState<CalcKey>('dates');
  return (
    <div>
      <PageHeader title="Calculators" />
      <div className="space-y-4 px-4 md:px-6">
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:px-0">
          {CALCS.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setCalc(c.key)}
                className={cx(
                  'flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-semibold transition',
                  calc === c.key ? 'bg-teal text-white' : 'bg-surface text-navy-600 ring-1 ring-navy-100',
                )}
              >
                <Icon className="size-4" aria-hidden /> {c.label}
              </button>
            );
          })}
        </div>
        {calc === 'dates' && <DatesCalc />}
        {calc === 'scan' && <ScanCalc />}
        {calc === 'shock' && <ShockCalc />}
        {calc === 'bishop' && <BishopCalc />}
        {calc === 'bmi' && <BmiCalc />}
        <p className="text-xs leading-relaxed text-navy-400">Calculators support, and do not replace, clinical judgement. Check every result before acting on it.</p>
      </div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
      <h2 className="text-[15px] font-extrabold text-navy">{title}</h2>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-navy-400">{label}</span>
      {children}
    </label>
  );
}

const inputCls = 'h-11 w-full rounded-xl bg-bg px-3 text-[15px] font-semibold text-navy ring-1 ring-navy-100 outline-none focus:ring-teal';

function Result({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <dl className="divide-y divide-teal/15 overflow-hidden rounded-xl bg-teal-50 ring-1 ring-teal/20">
      {rows.map(([k, v]) => (
        <div key={k} className="flex items-baseline justify-between gap-3 px-3 py-2.5">
          <dt className="text-sm text-navy-600">{k}</dt>
          <dd className="text-right text-[15px] font-extrabold text-navy">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function DatesCalc() {
  const [lmp, setLmp] = useState('');
  const [cycle, setCycle] = useState('28');
  const d = parse(lmp);
  const adj = Math.max(-7, Math.min(14, (Number(cycle) || 28) - 28));
  const edd = d ? new Date(d.getTime() + (280 + adj) * DAY) : null;
  const days = d ? Math.round((today().getTime() - d.getTime()) / DAY) - adj : 0;
  return (
    <Panel title="Due date from last menstrual period">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="First day of LMP">
          <input type="date" value={lmp} onChange={(e) => setLmp(e.target.value)} className={inputCls} />
        </Field>
        <Field label="Usual cycle length (days)">
          <input type="number" inputMode="numeric" min={21} max={42} value={cycle} onChange={(e) => setCycle(e.target.value)} className={inputCls} />
        </Field>
      </div>
      {edd && (
        <Result
          rows={[
            ['Expected date of delivery', fmt(edd)],
            ['Gestational age today', days >= 0 && days < 315 ? ga(days) : '—'],
            ['37 weeks (term) on', fmt(new Date(edd.getTime() - 21 * DAY))],
          ]}
        />
      )}
      <p className="text-xs text-navy-500">Naegele&apos;s rule: LMP + 280 days, adjusted by (cycle length − 28) days. An early dating scan, when available, is more accurate.</p>
    </Panel>
  );
}

function ScanCalc() {
  const [date, setDate] = useState('');
  const [w, setW] = useState('');
  const [dd, setDd] = useState('0');
  const d = parse(date);
  const gaDays = Number(w) * 7 + Number(dd || 0);
  const valid = d && w !== '' && gaDays > 0 && gaDays < 300;
  const now = valid ? Math.round((today().getTime() - d!.getTime()) / DAY) + gaDays : 0;
  const edd = valid ? new Date(d!.getTime() + (280 - gaDays) * DAY) : null;
  return (
    <Panel title="Gestational age from a dating scan">
      <Field label="Date of scan">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="GA on scan: weeks">
          <input type="number" inputMode="numeric" min={4} max={42} value={w} onChange={(e) => setW(e.target.value)} className={inputCls} />
        </Field>
        <Field label="+ days">
          <input type="number" inputMode="numeric" min={0} max={6} value={dd} onChange={(e) => setDd(e.target.value)} className={inputCls} />
        </Field>
      </div>
      {edd && <Result rows={[['Gestational age today', now >= 0 && now < 315 ? ga(now) : '—'], ['Expected date of delivery', fmt(edd)]]} />}
    </Panel>
  );
}

function ShockCalc() {
  const [hr, setHr] = useState('');
  const [sbp, setSbp] = useState('');
  const si = Number(hr) > 0 && Number(sbp) > 0 ? Number(hr) / Number(sbp) : null;
  const band =
    si === null ? null : si >= 1.7 ? ['High risk of adverse outcome', 'bg-alert-50 text-alert'] : si >= 1.4 ? ['Needs urgent aggressive treatment', 'bg-alert-50 text-alert'] : si >= 0.9 ? ['Risk of needing transfusion', 'bg-amber-50 text-amber-700'] : ['Within the normal range in pregnancy (0.7–0.9)', 'bg-teal-50 text-teal-700'];
  return (
    <Panel title="Obstetric shock index">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Heart rate (/min)">
          <input type="number" inputMode="numeric" value={hr} onChange={(e) => setHr(e.target.value)} className={inputCls} />
        </Field>
        <Field label="Systolic BP (mmHg)">
          <input type="number" inputMode="numeric" value={sbp} onChange={(e) => setSbp(e.target.value)} className={inputCls} />
        </Field>
      </div>
      {si !== null && band && (
        <>
          <Result rows={[['Shock index (HR ÷ SBP)', si.toFixed(2)]]} />
          <p className={cx('rounded-xl px-3 py-2 text-sm font-bold', band[1])}>{band[0]}</p>
        </>
      )}
      <p className="text-xs text-navy-500">
        Thresholds from the FOGSI PPH protocol, as summarised in the Postpartum Haemorrhage review. A heart rate over 100/min is the earliest warning sign.
        <CitationChips refs={[{ guidelineId: 'fogsi-pph', locator: 'Shock classification' }]} />
      </p>
    </Panel>
  );
}

const BISHOP: { key: string; label: string; options: string[] }[] = [
  { key: 'dil', label: 'Cervical dilatation (cm)', options: ['Closed', '1–2', '3–4', '≥5'] },
  { key: 'eff', label: 'Effacement (%)', options: ['0–30', '40–50', '60–70', '≥80'] },
  { key: 'stn', label: 'Station', options: ['−3', '−2', '−1 / 0', '+1 / +2'] },
  { key: 'con', label: 'Consistency', options: ['Firm', 'Medium', 'Soft'] },
  { key: 'pos', label: 'Position', options: ['Posterior', 'Mid', 'Anterior'] },
];

function BishopCalc() {
  const [v, setV] = useState<Record<string, number>>({});
  const total = Object.values(v).reduce((a, b) => a + b, 0);
  const done = Object.keys(v).length === BISHOP.length;
  return (
    <Panel title="Bishop score">
      {BISHOP.map((row) => (
        <div key={row.key}>
          <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-navy-400">{row.label}</p>
          <div className="grid grid-cols-4 gap-1.5">
            {row.options.map((o, i) => (
              <button
                key={o}
                type="button"
                onClick={() => setV((s) => ({ ...s, [row.key]: i }))}
                className={cx('rounded-lg px-1 py-2 text-xs font-bold', v[row.key] === i ? 'bg-teal text-white' : 'bg-bg text-navy-600 ring-1 ring-navy-100')}
              >
                {o}
                <span className="block text-[10px] font-semibold opacity-70">{i}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
      <Result rows={[['Total score', done ? `${total} / 13` : `${total} (incomplete)`]]} />
      <p className="text-xs text-navy-500">Standard Bishop score (0–13). Interpret against your unit&apos;s induction-of-labour protocol.</p>
    </Panel>
  );
}

function BmiCalc() {
  const [wt, setWt] = useState('');
  const [ht, setHt] = useState('');
  const m = Number(ht) / 100;
  const bmi = Number(wt) > 0 && m > 0.5 ? Number(wt) / (m * m) : null;
  return (
    <Panel title="Body mass index">
      <div className="grid grid-cols-2 gap-3">
        <Field label="Weight (kg)">
          <input type="number" inputMode="decimal" value={wt} onChange={(e) => setWt(e.target.value)} className={inputCls} />
        </Field>
        <Field label="Height (cm)">
          <input type="number" inputMode="decimal" value={ht} onChange={(e) => setHt(e.target.value)} className={inputCls} />
        </Field>
      </div>
      {bmi !== null && <Result rows={[['BMI', `${bmi.toFixed(1)} kg/m²`]]} />}
      <p className="text-xs text-navy-500">
        Thresholds used in ObGynVault reviews: FOGSI PCOS lists BMI &gt;23 kg/m² as a risk factor in Indian adults and uses ≥25 kg/m² for metformin.
        <CitationChips refs={[{ guidelineId: 'fogsi-pcos', locator: 'Table 3, 7.2' }]} />
      </p>
    </Panel>
  );
}
