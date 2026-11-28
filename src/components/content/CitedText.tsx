import { Link } from 'react-router-dom';
import { getGuideline, getSource } from '@/data';
import { ArrowDown, RefreshCcw } from 'lucide-react';
import { formatDate } from '@/lib/format';
import type { Citation, CitedPoint, FlowChart } from '@/types/content';

function citeLabel(c: Citation) {
  const g = getGuideline(c.guidelineId);
  if (!g) return c.guidelineId;
  const src = getSource(g.sourceId).shortName.split(' ')[0];
  const ref = g.reference ?? (g.year ? String(g.year) : '');
  return `${src}${ref ? ` ${ref}` : ''}${c.locator ? ` · ${c.locator}` : ''}`;
}

/** Quiet source line under a statement: readable but visually secondary to the clinical text. */
export function CitationChips({ refs, inline = false }: { refs?: Citation[]; inline?: boolean }) {
  if (!refs?.length) return null;
  return (
    <span className={inline ? 'ml-1 inline-flex flex-wrap gap-1 align-middle' : 'mt-1.5 flex flex-wrap gap-1.5'}>
      {refs.map((c) => (
        <Link
          key={`${c.guidelineId}-${c.locator ?? ''}`}
          to={`/guidelines/${c.guidelineId}`}
          className="rounded-md px-1.5 py-0.5 text-[11px] font-medium leading-4 text-navy-400 ring-1 ring-navy-100 transition hover:bg-teal-50 hover:text-teal-700 hover:ring-teal/30"
        >
          {citeLabel(c)}
        </Link>
      ))}
    </span>
  );
}

function PointTable({ table }: { table: NonNullable<CitedPoint['table']> }) {
  const rest = table.columns.slice(1);
  return (
    <>
      {/* Phone: each row becomes a small card, so nothing needs sideways scrolling. */}
      <div className="space-y-2 md:hidden">
        {table.caption && <p className="text-xs font-bold uppercase tracking-wide text-navy-400">{table.caption}</p>}
        {table.rows.map((r, i) => (
          <div key={i} className="rounded-xl bg-canvas px-3.5 py-3 ring-1 ring-navy-100/80">
            <p className="prose-read-sm font-semibold text-navy">{r[0]}</p>
            {rest.length > 0 && (
              <dl className="mt-1.5 space-y-1">
                {rest.map((col, j) => (
                  <div key={col} className="prose-read-sm">
                    {rest.length > 1 && <dt className="text-[11px] font-bold uppercase tracking-wide text-teal-700">{col}</dt>}
                    <dd className="text-navy-700">{r[j + 1]}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        ))}
      </div>
      {/* Tablet and desktop: a clean table. */}
      <div className="hidden overflow-x-auto rounded-xl ring-1 ring-navy-100 md:block">
        <table className="prose-read-sm w-full border-collapse text-left">
          {table.caption && <caption className="bg-canvas px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wide text-navy-500">{table.caption}</caption>}
          <thead className="bg-teal-50">
            <tr>
              {table.columns.map((c) => (
                <th key={c} scope="col" className="px-3.5 py-2.5 text-[12px] font-bold uppercase tracking-wide text-teal-700">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((r, i) => (
              <tr key={i} className="border-t border-navy-100 bg-surface">
                {r.map((cell, j) => (
                  <td key={j} className={`px-3.5 py-2.5 align-top leading-relaxed ${j === 0 ? 'font-semibold text-navy' : 'text-navy-700'}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

const TONE: Record<string, string> = {
  start: 'bg-ink text-white ring-ink dark:bg-teal-100 dark:ring-teal/30',
  action: 'bg-surface text-navy ring-navy-100',
  decision: 'bg-amber-50 text-navy ring-amber/40',
  urgent: 'bg-alert-50 text-navy ring-alert/40',
};

/** Vertical stepwise algorithm: one card per step, arrows between, optional yes/no style branches. */
export function FlowDiagram({ flow }: { flow: FlowChart }) {
  return (
    <figure className="rounded-2xl bg-canvas p-3 ring-1 ring-navy-100/80">
      {flow.caption && <figcaption className="mb-2 px-1 text-[11px] font-bold uppercase tracking-wide text-teal-700">{flow.caption}</figcaption>}
      <ol className="flex flex-col items-stretch">
        {flow.steps.map((st, i) => {
          const tone = st.tone ?? (i === 0 ? 'start' : 'action');
          return (
            <li key={i} className="flex flex-col items-stretch">
              {i > 0 && <ArrowDown className="mx-auto my-1 size-4 text-navy-300" aria-hidden />}
              <div className={`rounded-xl px-3.5 py-2.5 ring-1 ${TONE[tone]}`}>
                <p className="prose-read-sm font-bold">{st.title}</p>
                {st.text && <p className={`prose-read-sm mt-0.5 ${tone === 'start' ? 'text-white/85' : 'text-navy-700'}`}>{st.text}</p>}
                {st.branches && (
                  <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                    {st.branches.map((b) => (
                      <li key={b.when} className="rounded-lg bg-surface/80 px-2.5 py-1.5 ring-1 ring-navy-100">
                        <span className="block text-[11px] font-bold uppercase tracking-wide text-teal-700">{b.when}</span>
                        <span className="prose-read-sm text-navy-700">{b.then}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

/** Amber marker on a statement the weekly Guideline Watch changed and no clinician has checked yet. */
export function UnverifiedUpdate({ update }: { update: NonNullable<CitedPoint['update']> }) {
  return (
    <Link
      to={`/guidelines/${update.guidelineId}`}
      className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-1.5 py-0.5 text-[11px] font-bold leading-4 text-amber-700 ring-1 ring-amber/40"
    >
      <RefreshCcw className="size-3" aria-hidden />
      Updated {formatDate(update.date)} · not yet verified · check source
    </Link>
  );
}

export function CitedParagraph({ point }: { point: CitedPoint }) {
  return (
    <div className="space-y-2">
      {point.update && <UnverifiedUpdate update={point.update} />}
      {point.heading && (
        <h4 className="flex items-center gap-2 pt-2 font-display text-[15px] font-bold text-navy">
          <span className="h-4 w-1 rounded-full bg-teal" aria-hidden />
          {point.heading}
        </h4>
      )}
      {point.text && (
        <div className="relative pl-4 before:absolute before:left-0 before:top-[0.72em] before:size-1.5 before:rounded-full before:bg-teal/70">
          <p className="prose-read">{point.text}</p>
          {!point.table && !point.flow && <CitationChips refs={point.refs} />}
        </div>
      )}
      {point.table && (
        <>
          <PointTable table={point.table} />
          <CitationChips refs={point.refs} />
        </>
      )}
      {point.flow && (
        <>
          <FlowDiagram flow={point.flow} />
          {!point.table && <CitationChips refs={point.refs} />}
        </>
      )}
      {point.figure && (
        <figure className="overflow-hidden rounded-2xl bg-white ring-1 ring-navy-100">
          <img src={`${import.meta.env.BASE_URL}figures/${point.figure.src}`} alt={point.figure.alt} loading="lazy" className="w-full" />
          {point.figure.caption && <figcaption className="px-3 py-2 text-[12.5px] text-navy-600">{point.figure.caption}</figcaption>}
        </figure>
      )}
      {!point.text && !point.table && !point.flow && <CitationChips refs={point.refs} />}
    </div>
  );
}
