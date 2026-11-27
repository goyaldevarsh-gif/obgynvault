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

export function CitationChips({ refs }: { refs?: Citation[] }) {
  if (!refs?.length) return null;
  return (
    <span className="ml-1 inline-flex flex-wrap gap-1 align-middle">
      {refs.map((c) => (
        <Link
          key={`${c.guidelineId}-${c.locator ?? ''}`}
          to={`/guidelines/${c.guidelineId}`}
          className="rounded bg-navy-100/70 px-1.5 py-px text-[10px] font-bold text-navy-600 hover:bg-teal-100 hover:text-teal-700"
        >
          {citeLabel(c)}
        </Link>
      ))}
    </span>
  );
}

function PointTable({ table }: { table: NonNullable<CitedPoint['table']> }) {
  return (
    <div className="my-2 overflow-x-auto rounded-xl ring-1 ring-navy-100">
      <table className="w-full min-w-[480px] border-collapse text-left text-xs">
        {table.caption && <caption className="bg-canvas px-3 py-2 text-left text-[11px] font-bold uppercase tracking-wide text-navy-500">{table.caption}</caption>}
        <thead className="bg-navy text-white">
          <tr>
            {table.columns.map((c) => (
              <th key={c} scope="col" className="px-3 py-2 font-bold">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((r, i) => (
            <tr key={i} className="border-t border-navy-100 odd:bg-surface even:bg-canvas/60">
              {r.map((cell, j) => (
                <td key={j} className={`px-3 py-2 align-top leading-snug ${j === 0 ? 'font-semibold text-navy' : 'text-navy-600'}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CitedParagraph({ point }: { point: CitedPoint }) {
  return (
    <>
      {point.heading && <h4 className="pt-2 text-[13px] font-extrabold uppercase tracking-wide text-teal-700">{point.heading}</h4>}
      {point.text &&
        (point.bullet ? (
          <p className="relative pl-4 before:absolute before:left-0 before:top-[0.6em] before:size-1.5 before:rounded-full before:bg-teal">
            {point.text}
            <CitationChips refs={point.refs} />
          </p>
        ) : (
          <p>
            {point.text}
            <CitationChips refs={point.refs} />
          </p>
        ))}
      {point.table && <PointTable table={point.table} />}
      {!point.text && !point.table && <CitationChips refs={point.refs} />}
    </>
  );
}
