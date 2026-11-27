import { useEffect, useState, type ReactNode } from 'react';
import { Activity, AlertTriangle, ClipboardList, Copy, HeartPulse, Plus, Timer, Trash2 } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { CitationChips } from '@/components/content';
import { SampleNotice } from '@/components/ui';
import { cx } from '@/lib/format';
import {
  classifyCtg, CTG_FEATURES, LCG_DILATATION_LIMIT, lcgFirstStageAlert, lcgSecondStageAlert, MEWS_PARAMS, MEWS_PULSE_POSTNATAL_48H,
  lcgEntryAlerts, mewsLevel, mewsParamScore, niceSuspectedDelay, timeAtCurrentDilatation, type CtgCategory, type Grade, type LogEntry, type MewsLevel,
} from '@/lib/labour';

/** Labour room toolkit: CTG classifier, labour progress checks and maternal early warning score. Draft, cited. */
type Tab = 'ctg' | 'progress' | 'mews' | 'log';
const TABS: { key: Tab; label: string; icon: typeof Activity }[] = [
  { key: 'ctg', label: 'CTG', icon: Activity },
  { key: 'progress', label: 'Progress', icon: Timer },
  { key: 'mews', label: 'MEWS', icon: HeartPulse },
  { key: 'log', label: 'Log', icon: ClipboardList },
];

export default function LabourRoomPage() {
  const [tab, setTab] = useState<Tab>('ctg');
  return (
    <div>
      <PageHeader title="Labour room" />
      <div className="space-y-4 px-4 md:px-6">
        <SampleNotice compact status="draft" />
        <div className="grid grid-cols-4 gap-1 rounded-2xl bg-surface p-1 ring-1 ring-navy-100/60">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={cx('flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[12px] font-bold transition', tab === t.key ? 'bg-teal text-white' : 'text-navy-600')}
            >
              <t.icon className="size-4" aria-hidden /> {t.label}
            </button>
          ))}
        </div>
        {tab === 'ctg' && <CtgTool />}
        {tab === 'progress' && <ProgressTool />}
        {tab === 'mews' && <MewsTool />}
        {tab === 'log' && <LogTool />}
        <p className="pb-2 text-xs leading-relaxed text-navy-400">
          Decision aids for trained staff. They support, and never replace, clinical judgement, the whole clinical picture and your unit protocol.
        </p>
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

const DOT: Record<Grade, string> = { white: 'bg-navy-100 ring-navy-200', amber: 'bg-amber ring-amber', red: 'bg-alert ring-alert' };

function Choice({ label, grade, active, onClick }: { label: string; grade?: Grade; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cx(
        'flex w-full items-start gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition',
        active ? 'bg-teal-50 text-navy ring-2 ring-teal' : 'bg-bg text-navy-600 ring-1 ring-navy-100',
      )}
    >
      {grade && <span className={cx('mt-1 size-2.5 shrink-0 rounded-full ring-1', DOT[grade])} aria-hidden />}
      <span>{label}</span>
    </button>
  );
}

// ---------------- CTG ----------------
const CTG_RESULT: Record<CtgCategory, { title: string; tone: string; action: string; locator: string }> = {
  normal: {
    title: 'Normal',
    tone: 'bg-teal-50 text-teal-700 ring-teal/30',
    action: 'Continue CTG (if indicated) and usual care. Review at least hourly.',
    locator: 'Rec 1.4.32, 1.5.4',
  },
  suspicious: {
    title: 'Suspicious',
    tone: 'bg-amber-50 text-amber-700 ring-amber/30',
    action:
      'Full risk assessment including maternal observations, and conservative measures as indicated. If there is also slow progress, sepsis or meconium: urgent review by an obstetrician or senior midwife; consider scalp stimulation or expediting birth.',
    locator: 'Rec 1.5.5–1.5.6',
  },
  pathological: {
    title: 'Pathological',
    tone: 'bg-alert-50 text-alert ring-alert/30',
    action:
      'Urgent review by an obstetrician and a senior midwife. Exclude acute events (cord prolapse, abruption, uterine rupture) and start conservative measures. If still pathological, consider expediting birth, with a very low threshold if risk factors are evolving.',
    locator: 'Rec 1.5.7–1.5.8',
  },
};

function CtgTool() {
  const [sel, setSel] = useState<Record<string, string>>({});
  const r = classifyCtg(sel);
  const res = CTG_RESULT[r.category];
  return (
    <>
      <Panel title="CTG classification (NICE NG229)">
        <p className="text-xs text-navy-500">Pick one finding for each of the 4 features. Colour dot = NICE grade.</p>
        {CTG_FEATURES.map((f) => (
          <div key={f.key} className="space-y-1.5">
            <p className="text-xs font-bold uppercase tracking-wide text-navy-400">{f.label}</p>
            {f.options.map((o) => (
              <Choice key={o.key} label={o.label} grade={o.grade} active={sel[f.key] === o.key} onClick={() => setSel({ ...sel, [f.key]: o.key })} />
            ))}
          </div>
        ))}
        {r.acuteBradycardia && (
          <div className="flex gap-2.5 rounded-xl bg-alert p-3 text-sm font-semibold text-white">
            <AlertTriangle className="size-5 shrink-0" aria-hidden />
            <span>
              Acute bradycardia / prolonged deceleration: urgent obstetric review, prepare for urgent birth with neonatal support, and expedite the birth if it persists for 9 minutes (sooner with significant risk
              factors). If the FHR recovers before 9 minutes, reassess.
            </span>
          </div>
        )}
        {r.complete ? (
          <div className={cx('rounded-xl p-3 ring-1', res.tone)}>
            <p className="text-lg font-extrabold">{res.title}</p>
            <p className="text-xs font-semibold opacity-80">
              {r.red} red · {r.amber} amber
            </p>
            <p className="mt-1.5 text-sm font-medium text-navy-700">{res.action}</p>
            <CitationChips refs={[{ guidelineId: 'nice-ng229', locator: res.locator }]} />
          </div>
        ) : (
          <p className="rounded-xl bg-bg px-3 py-2.5 text-sm text-navy-500">Select all 4 features to see the category.</p>
        )}
        <button type="button" onClick={() => setSel({})} className="text-sm font-semibold text-teal-700">
          Reset
        </button>
      </Panel>

      <Panel title="Conservative measures">
        <ul className="list-disc space-y-1 pl-5 text-sm text-navy-700">
          <li>Change maternal position; avoid lying supine.</li>
          <li>IV fluids only if the woman is hypotensive or has signs of sepsis.</li>
          <li>Reduce or stop oxytocin; consider a tocolytic for excessive contractions.</li>
          <li>Do not offer maternal facial oxygen or amnioinfusion.</li>
          <li>Absent variability is a very concerning feature: review the whole picture with a low threshold for expedited birth.</li>
        </ul>
        <CitationChips refs={[{ guidelineId: 'nice-ng229', locator: 'Rec 1.4.17, 1.5.11–1.5.13' }]} />
      </Panel>

      <Panel title="How FIGO and ACOG differ">
        <div className="-mx-1 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-[13px]">
            <thead className="text-xs uppercase tracking-wide text-navy-400">
              <tr>
                <th className="p-1.5"> </th>
                <th className="p-1.5">NICE NG229</th>
                <th className="p-1.5">FIGO 2015</th>
                <th className="p-1.5">ACOG 2025</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100 text-navy-700">
              {[
                ['Categories', 'Normal / suspicious / pathological', 'Normal / suspicious / pathological', 'Category I / II / III'],
                ['Normal variability', '5–25 bpm', '5–25 bpm', 'Moderate 6–25 bpm'],
                ['Late decelerations', 'Red at any duration', 'Pathological if repetitive >30 min (20 min with reduced variability)', 'Category II; III if recurrent with absent variability'],
                ['Prolonged deceleration', '≥3 min = red; expedite by 9 min', '>3 min; >5 min = pathological', '≥2 to <10 min; Category II'],
                ['Tachysystole', '≥5 in 10 min (amber)', '>5 in 10 min over 2 periods or 30-min average', '>5 in 10 min averaged over 30 min'],
              ].map((row) => (
                <tr key={row[0]}>
                  <th className="p-1.5 font-bold text-navy">{row[0]}</th>
                  {row.slice(1).map((c, i) => (
                    <td key={i} className="p-1.5">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-navy-500">FIGO cut-offs were read from text with garbled symbols; confirm against the printed paper.</p>
        <CitationChips
          refs={[
            { guidelineId: 'nice-ng229', locator: 'Rec 1.4' },
            { guidelineId: 'figo-ctg-2015', locator: 'Table 1, 4.1' },
            { guidelineId: 'acog-cpg-10', locator: 'Table 1, Box 1' },
          ]}
        />
      </Panel>

      <Panel title="Intermittent auscultation (low risk)">
        <ul className="list-disc space-y-1 pl-5 text-sm text-navy-700">
          <li>Established first stage: listen for at least 1 minute immediately after a contraction, at least every 15 minutes. Maternal pulse hourly.</li>
          <li>Second stage: at least every 5 minutes, palpating the maternal pulse at the same time.</li>
          <li>Baseline rise of 20 bpm or more, or a deceleration heard: auscultate more often and review; advise CTG if concerns continue.</li>
        </ul>
        <CitationChips refs={[{ guidelineId: 'nice-ng229', locator: 'Rec 1.2.9–1.2.12' }]} />
      </Panel>
    </>
  );
}

// ---------------- Labour progress ----------------
const inputCls = 'h-11 w-full rounded-xl bg-bg px-3 text-[15px] font-semibold text-navy ring-1 ring-navy-100 outline-none focus:ring-teal';

function Verdict({ alert, yes, no }: { alert: boolean; yes: string; no: string }) {
  return <p className={cx('rounded-xl px-3 py-2.5 text-sm font-bold', alert ? 'bg-alert-50 text-alert' : 'bg-teal-50 text-teal-700')}>{alert ? yes : no}</p>;
}

function ProgressTool() {
  const [cm, setCm] = useState(5);
  const [hrs, setHrs] = useState('');
  const [parity, setParity] = useState<'nulliparous' | 'multiparous'>('nulliparous');
  const [h2, setH2] = useState('');
  const [gain, setGain] = useState('');
  const first = hrs === '' ? null : lcgFirstStageAlert(cm, Number(hrs));
  const second = h2 === '' ? null : lcgSecondStageAlert(parity, Number(h2));
  return (
    <>
      <Panel title="Active first stage (WHO Labour Care Guide)">
        <p className="text-xs text-navy-500">Active first stage starts at 5 cm. Alert if the time spent at one dilatation reaches the limit.</p>
        <div className="grid grid-cols-5 gap-1.5">
          {Object.keys(LCG_DILATATION_LIMIT).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setCm(Number(k))}
              className={cx('rounded-xl py-2.5 text-sm font-extrabold', cm === Number(k) ? 'bg-teal text-white' : 'bg-bg text-navy-600 ring-1 ring-navy-100')}
            >
              {k} cm
            </button>
          ))}
        </div>
        <label className="block">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-navy-400">Hours at {cm} cm</span>
          <input type="number" inputMode="decimal" min={0} step={0.5} value={hrs} onChange={(e) => setHrs(e.target.value)} className={inputCls} />
        </label>
        {first && <Verdict alert={first.alert} yes={`Alert: ${hrs} h at ${cm} cm (limit ${first.limit} h). Reassess and record a plan.`} no={`Within limit (${first.limit} h at ${cm} cm).`} />}
        <p className="text-xs text-navy-500">Limits: 5 cm ≥6 h · 6 cm ≥5 h · 7 cm ≥3 h · 8 cm ≥2.5 h · 9 cm ≥2 h. Cervix assessed every 4 h unless otherwise indicated.</p>
        <CitationChips refs={[{ guidelineId: 'who-lcg-2020', locator: 'Section 5' }]} />
      </Panel>

      <Panel title="Suspected delay (NICE NG235)">
        <label className="block">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-navy-400">Dilatation gained in the last 4 h (cm)</span>
          <input type="number" inputMode="decimal" min={0} step={0.5} value={gain} onChange={(e) => setGain(e.target.value)} className={inputCls} />
        </label>
        {gain !== '' && (
          <Verdict
            alert={niceSuspectedDelay(Number(gain))}
            yes="Suspected delay (less than 2 cm in 4 h). Repeat the vaginal examination 2 hours later; delay is confirmed if progress is less than 1 cm."
            no="Not suspected delay by this criterion. In second and subsequent labours, also consider any slowing in progress."
          />
        )}
        <p className="text-xs text-navy-500">NICE defines the established first stage from 4 cm; WHO uses 5 cm.</p>
        <CitationChips refs={[{ guidelineId: 'nice-ng235', locator: 'Rec 1.8.1, 1.8.42, 1.8.45' }]} />
      </Panel>

      <Panel title="Second stage">
        <div className="grid grid-cols-2 gap-1.5">
          {(['nulliparous', 'multiparous'] as const).map((p) => (
            <button key={p} type="button" onClick={() => setParity(p)} className={cx('rounded-xl py-2.5 text-sm font-bold capitalize', parity === p ? 'bg-teal text-white' : 'bg-bg text-navy-600 ring-1 ring-navy-100')}>
              {p}
            </button>
          ))}
        </div>
        <label className="block">
          <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-navy-400">Hours since full dilatation, not yet born</span>
          <input type="number" inputMode="decimal" min={0} step={0.25} value={h2} onChange={(e) => setH2(e.target.value)} className={inputCls} />
        </label>
        {second && <Verdict alert={second.alert} yes={`WHO LCG alert (limit ${second.limit} h). Senior review.`} no={`Within the WHO LCG limit of ${second.limit} h.`} />}
        <div className="rounded-xl bg-bg p-3 text-sm text-navy-700">
          <p className="font-bold text-navy">NICE active pushing</p>
          {parity === 'nulliparous' ? (
            <p>Birth expected within 3 h of the active second stage. Reassess after 1 h of pushing; refer for senior review if birth is not imminent after 2 h. With an epidural, a passive stage of up to 2 h may come first.</p>
          ) : (
            <p>Birth expected within 2 h. Reassess after 30 min of pushing; refer for senior review if birth is not imminent after 1 h. With an epidural, a passive stage of up to 1 h may come first.</p>
          )}
        </div>
        <CitationChips
          refs={[
            { guidelineId: 'who-lcg-2020', locator: 'Section 5' },
            { guidelineId: 'nice-ng235', locator: 'Rec 1.9.25–1.9.28' },
          ]}
        />
      </Panel>

      <Panel title="Third stage">
        <p className="text-sm text-navy-700">Prolonged if not complete within 30 minutes with active management, or 60 minutes with physiological management.</p>
        <CitationChips refs={[{ guidelineId: 'nice-ng235', locator: 'Rec 1.10.20' }]} />
      </Panel>

      <Panel title="WHO Labour Care Guide: alert values">
        <dl className="divide-y divide-navy-100 text-sm">
          {[
            ['Baseline FHR', '<110 or ≥160 bpm; late decelerations'],
            ['Amniotic fluid', 'Thick meconium (M+++) or blood'],
            ['Caput / moulding', '+++'],
            ['Maternal pulse', '<60 or ≥120 /min'],
            ['Systolic / diastolic BP', 'SBP <80 or ≥140; DBP ≥90 mmHg'],
            ['Temperature', '<35.0 or ≥37.5 °C'],
            ['Urine', 'Protein ++ or acetone ++'],
            ['Contractions', '≤2 or >5 per 10 min; lasting <20 or >60 s'],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-3 py-2">
              <dt className="font-semibold text-navy">{k}</dt>
              <dd className="text-right text-navy-600">{v}</dd>
            </div>
          ))}
        </dl>
        <CitationChips refs={[{ guidelineId: 'who-lcg-2020', locator: 'Sections 3–5' }]} />
      </Panel>
    </>
  );
}

// ---------------- MEWS ----------------
const LEVEL: Record<MewsLevel, { title: string; tone: string; obs: string }> = {
  low: { title: 'Low', tone: 'bg-teal-50 text-teal-700', obs: 'Continue the current observation frequency (a score of 1 prompts contact with the midwife).' },
  'low-medium': { title: 'Low-medium', tone: 'bg-amber-50 text-amber-700', obs: 'Review by the midwife in charge and a doctor; reassess observations within 30 minutes.' },
  medium: { title: 'Medium', tone: 'bg-alert-50 text-alert', obs: 'Urgent senior medical review; reassess observations within 15 minutes.' },
  high: { title: 'High', tone: 'bg-alert text-white', obs: 'Immediate senior review including consultant and anaesthetic team; continuous observations.' },
};

function MewsTool() {
  const [v, setV] = useState<Record<string, string>>({});
  const [post48, setPost48] = useState(false);
  const [concern, setConcern] = useState(false);
  const scores = MEWS_PARAMS.map((p) => {
    const raw = v[p.key];
    if (raw === undefined || raw === '' || Number.isNaN(Number(raw))) return null;
    const bands = p.key === 'hr' && post48 ? MEWS_PULSE_POSTNATAL_48H : p.bands;
    return mewsParamScore(bands, Number(raw));
  });
  const complete = scores.every((s) => s !== null);
  const total = scores.reduce<number>((a, s) => a + (s ?? 0), 0);
  const lvl = LEVEL[mewsLevel(total, concern)];
  return (
    <Panel title="Maternity early warning score (NHS England MEWS)">
      <p className="text-xs text-navy-500">Each vital sign scores 0, 1 or 2. A score is needed for every sign at each entry.</p>
      <div className="grid grid-cols-2 gap-3">
        {MEWS_PARAMS.map((p, i) => (
          <label key={p.key} className="block">
            <span className="mb-1 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-navy-400">
              <span>
                {p.label} <span className="normal-case">({p.unit})</span>
              </span>
              {scores[i] !== null && <span className={cx('rounded px-1.5 text-[11px]', scores[i] === 0 ? 'bg-teal-50 text-teal-700' : scores[i] === 1 ? 'bg-amber-50 text-amber-700' : 'bg-alert-50 text-alert')}>+{scores[i]}</span>}
            </span>
            <input type="number" inputMode="decimal" step={p.key === 'temp' ? 0.1 : 1} value={v[p.key] ?? ''} onChange={(e) => setV({ ...v, [p.key]: e.target.value })} className={inputCls} />
          </label>
        ))}
      </div>
      <label className="flex items-center gap-2.5 text-sm font-medium text-navy-700">
        <input type="checkbox" checked={post48} onChange={(e) => setPost48(e.target.checked)} className="size-5 accent-teal" /> More than 48 hours after birth (postnatal pulse bands)
      </label>
      <label className="flex items-start gap-2.5 text-sm font-medium text-navy-700">
        <input type="checkbox" checked={concern} onChange={(e) => setConcern(e.target.checked)} className="mt-0.5 size-5 shrink-0 accent-teal" />
        Additional concern: staff or woman/family worried, new oxygen or other therapy, more pain or analgesia, significant bleeding, reduced urine output, or altered consciousness
      </label>
      {complete ? (
        <div className={cx('rounded-xl p-3', lvl.tone)}>
          <p className="flex items-baseline justify-between">
            <span className="text-lg font-extrabold">{lvl.title} concern</span>
            <span className="text-2xl font-extrabold">{total}</span>
          </p>
          <p className="mt-1 text-sm font-medium">{lvl.obs}</p>
        </div>
      ) : (
        <p className="rounded-xl bg-bg px-3 py-2.5 text-sm text-navy-500">Enter all 6 vital signs to see the total.</p>
      )}
      <p className="flex gap-2 rounded-xl bg-amber-50 p-3 text-xs font-medium text-amber-800">
        <AlertTriangle className="size-4 shrink-0" aria-hidden />
        Temperature bands differ between the BMJ Medicine paper (used here) and the printed chart, and the exact responder at each level should be checked against the chart your unit uses. The 2007 CEMACH MEOWS
        and any Indian early warning tool could not be verified, so they are not included.
      </p>
      <CitationChips refs={[{ guidelineId: 'nhs-mews-2024', locator: 'Table 2–3; chart escalation levels' }]} />
    </Panel>
  );
}

// ---------------- Labour log ----------------
const LOG_KEY = 'obgynvault.labour-log.v1';
interface LogState {
  label: string;
  entries: LogEntry[];
}
function loadLog(): LogState {
  try {
    return JSON.parse(localStorage.getItem(LOG_KEY) || '') as LogState;
  } catch {
    return { label: '', entries: [] };
  }
}
const FIELDS: { key: keyof Omit<LogEntry, 't' | 'note'>; label: string; step?: number }[] = [
  { key: 'cm', label: 'Cervix (cm)', step: 1 },
  { key: 'fhr', label: 'FHR (bpm)' },
  { key: 'ctx', label: 'Contr. /10 min' },
  { key: 'pulse', label: 'Pulse' },
  { key: 'sbp', label: 'Systolic' },
  { key: 'dbp', label: 'Diastolic' },
  { key: 'temp', label: 'Temp (°C)', step: 0.1 },
];
const clock = (t: number) => new Date(t).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

function LogTool() {
  const [st, setSt] = useState<LogState>(loadLog);
  const [draft, setDraft] = useState<Record<string, string>>({});
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    try {
      localStorage.setItem(LOG_KEY, JSON.stringify(st));
    } catch {
      /* private mode */
    }
  }, [st]);
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(id);
  }, []);

  const add = () => {
    const e: LogEntry = { t: Date.now() };
    for (const f of FIELDS) if (draft[f.key] !== undefined && draft[f.key] !== '' && !Number.isNaN(Number(draft[f.key]))) e[f.key] = Number(draft[f.key]);
    if (draft.note?.trim()) e.note = draft.note.trim();
    if (Object.keys(e).length === 1) return;
    setSt({ ...st, entries: [...st.entries, e] });
    setDraft({});
    setNow(Date.now());
  };
  const dil = timeAtCurrentDilatation(st.entries, now);
  const text = () =>
    [`Labour log${st.label ? ` · ${st.label}` : ''}`, ...st.entries.map((e) => `${clock(e.t)}  ${FIELDS.filter((f) => e[f.key] !== undefined).map((f) => `${f.label} ${e[f.key]}`).join(', ')}${e.note ? `; ${e.note}` : ''}`)].join('\n');
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text());
    } catch {
      /* ignore */
    }
  };
  const clear = () => {
    if (window.confirm('Start a new labour log? The current entries will be deleted from this device.')) setSt({ label: '', entries: [] });
  };

  return (
    <>
      <Panel title="Labour log">
        <p className="text-xs text-navy-500">Quick time-stamped entries, flagged against WHO Labour Care Guide alert values. Saved only on this device. Do not enter names; use a bed number.</p>
        <input value={st.label} onChange={(e) => setSt({ ...st, label: e.target.value })} placeholder="Bed / label (e.g. Bed 4)" className={inputCls} />
        <div className="grid grid-cols-3 gap-2">
          {FIELDS.map((f) => (
            <label key={f.key} className="block">
              <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-navy-400">{f.label}</span>
              <input type="number" inputMode="decimal" step={f.step ?? 1} value={draft[f.key] ?? ''} onChange={(e) => setDraft({ ...draft, [f.key]: e.target.value })} className={inputCls} />
            </label>
          ))}
        </div>
        <input value={draft.note ?? ''} onChange={(e) => setDraft({ ...draft, note: e.target.value })} placeholder="Note (liquor, oxytocin, plan…)" className={inputCls} />
        <button type="button" onClick={add} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-ink py-3 text-[15px] font-bold text-white dark:bg-teal-600 dark:text-ink">
          <Plus className="size-5" aria-hidden /> Add entry now
        </button>
        {dil && dil.limit !== undefined && (
          <Verdict
            alert={dil.alert}
            yes={`${dil.hours.toFixed(1)} h at ${dil.cm} cm: LCG alert (limit ${dil.limit} h). Reassess and record a plan.`}
            no={`${dil.hours.toFixed(1)} h at ${dil.cm} cm (LCG limit ${dil.limit} h).`}
          />
        )}
        <CitationChips refs={[{ guidelineId: 'who-lcg-2020', locator: 'Sections 3–5' }]} />
      </Panel>

      {st.entries.length > 0 && (
        <Panel title={`Entries (${st.entries.length})`}>
          <ol className="space-y-2">
            {[...st.entries].reverse().map((e) => {
              const alerts = lcgEntryAlerts(e);
              return (
                <li key={e.t} className={cx('rounded-xl p-3 text-sm ring-1', alerts.length ? 'bg-alert-50 ring-alert/30' : 'bg-bg ring-navy-100')}>
                  <p className="flex items-center justify-between font-bold text-navy">
                    <span>{clock(e.t)}</span>
                    {alerts.length > 0 && <span className="text-xs font-bold text-alert">Alert: {alerts.join(', ')}</span>}
                  </p>
                  <p className="mt-0.5 text-navy-600">
                    {FIELDS.filter((f) => e[f.key] !== undefined)
                      .map((f) => `${f.label} ${e[f.key]}`)
                      .join(' · ')}
                  </p>
                  {e.note && <p className="mt-0.5 text-navy-500">{e.note}</p>}
                </li>
              );
            })}
          </ol>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" onClick={copy} className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-navy ring-1 ring-navy-100">
              <Copy className="size-4" aria-hidden /> Copy as text
            </button>
            <button type="button" onClick={clear} className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-alert ring-1 ring-alert/30">
              <Trash2 className="size-4" aria-hidden /> New labour
            </button>
          </div>
        </Panel>
      )}
    </>
  );
}
