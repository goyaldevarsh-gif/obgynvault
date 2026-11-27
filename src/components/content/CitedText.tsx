import { Link } from 'react-router-dom';
import { getGuideline, getSource } from '@/data';
import type { Citation, CitedPoint } from '@/types/content';

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

export function CitedParagraph({ point }: { point: CitedPoint }) {
  return (
    <div className="space-y-2">
      {point.heading && (
        <h4 className="flex items-center gap-2 pt-2 font-display text-[15px] font-bold text-navy">
          <span className="h-4 w-1 rounded-full bg-teal" aria-hidden />
          {point.heading}
        </h4>
      )}
      {point.text && (
        <div className="relative pl-4 before:absolute before:left-0 before:top-[0.72em] before:size-1.5 before:rounded-full before:bg-teal/70">
          <p className="prose-read">{point.text}</p>
          {!point.table && <CitationChips refs={point.refs} />}
        </div>
      )}
      {point.table && (
        <>
          <PointTable table={point.table} />
          <CitationChips refs={point.refs} />
        </>
      )}
      {!point.text && !point.table && <CitationChips refs={point.refs} />}
    </div>
  );
}
