import { Scale } from 'lucide-react';
import { getGuideline, getSource } from '@/data';
import type { GuidelinePosition } from '@/types/content';
import { SourceBadge } from './SourceBadge';
import { Link } from 'react-router-dom';

/** Same clinical question, each source in its own words. Never merges or averages guidance. */
export function PositionsTable({ positions }: { positions: GuidelinePosition[] }) {
  return (
    <section className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60">
      <h3 className="flex items-center gap-2 border-b border-navy-100 px-4 py-3 text-[15px] font-extrabold text-navy">
        <Scale className="size-5 text-teal" aria-hidden /> Where guidelines differ
      </h3>
      <div className="divide-y divide-navy-100">
        {positions.map((p) => (
          <div key={p.domain} className="px-4 py-3">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-navy-400">{p.domain}</h4>
            <ul className="space-y-2.5">
              {[...p.entries]
                .sort((a, b) => getSource(getGuideline(a.guidelineId)!.sourceId).priority - getSource(getGuideline(b.guidelineId)!.sourceId).priority)
                .map((e) => {
                  const g = getGuideline(e.guidelineId)!;
                  return (
                    <li key={e.guidelineId} className="grid grid-cols-[84px_1fr] gap-2 text-sm">
                      <Link to={`/guidelines/${g.id}`} className="pt-0.5">
                        <SourceBadge id={g.sourceId} />
                      </Link>
                      <span className="leading-snug text-navy-700">
                        {e.text}
                        {e.locator && <span className="ml-1 text-[11px] font-semibold text-navy-400">({e.locator})</span>}
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
