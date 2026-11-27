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

export function CitedParagraph({ point }: { point: CitedPoint }) {
  return (
    <p>
      {point.text}
      <CitationChips refs={point.refs} />
    </p>
  );
}
