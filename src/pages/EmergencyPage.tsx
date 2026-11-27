import { ChevronRight, Siren } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { CitationChips } from '@/components/content';
import { getTopic } from '@/data';
import type { CitedPoint } from '@/types/content';

/**
 * Phase 4 emergency quick access. Each card shows the cited summary points for the emergency and
 * opens the exact section of the topic review in one tap. Nothing here is written separately from the reviews.
 */
const EMERGENCIES: { title: string; slug: string; keyPointIdx: number[]; sections: string[] }[] = [
  { title: 'Postpartum haemorrhage', slug: 'postpartum-haemorrhage', keyPointIdx: [2, 4, 5, 6], sections: ['recognition', 'first-response', 'mechanical-surgical', 'blood-products'] },
  { title: 'Eclampsia & severe hypertension', slug: 'preeclampsia', keyPointIdx: [3, 4], sections: ['antihypertensives', 'magnesium-eclampsia', 'hellp'] },
  { title: 'Ruptured / suspected ectopic', slug: 'ectopic-pregnancy', keyPointIdx: [0, 5], sections: ['presentation', 'diagnosis', 'surgery'] },
  { title: 'Acute heavy uterine bleeding', slug: 'abnormal-uterine-bleeding', keyPointIdx: [4], sections: ['acute', 'adolescents'] },
];

export default function EmergencyPage() {
  return (
    <div>
      <PageHeader title="Emergency" />
      <div className="space-y-3 px-4 md:px-6">
        <p className="text-sm text-navy-500">Key points first, then one tap to the full section with doses and tables.</p>
        {EMERGENCIES.map((e) => {
          const t = getTopic(e.slug);
          if (!t) return null;
          const points = e.keyPointIdx.map((i) => t.keyPoints[i]).filter(Boolean) as CitedPoint[];
          return (
            <article key={e.slug} className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60">
              <h2 className="flex items-center gap-2 bg-alert-50 px-4 py-3 text-[15px] font-extrabold text-alert">
                <Siren className="size-5" aria-hidden /> {e.title}
              </h2>
              <ul className="space-y-2 px-4 py-3">
                {points.map((p) => (
                  <li key={p.text} className="text-sm leading-snug text-navy-700">
                    {p.text}
                    <CitationChips refs={p.refs} />
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 border-t border-navy-100 px-4 py-3">
                {e.sections.map((id) => {
                  const s = t.sections.find((x) => x.id === id);
                  return s ? (
                    <Link key={id} to={`/topics/${t.slug}#${id}`} className="flex items-center gap-1 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700 ring-1 ring-teal/20">
                      {s.title} <ChevronRight className="size-3.5" aria-hidden />
                    </Link>
                  ) : null;
                })}
              </div>
            </article>
          );
        })}
        <p className="text-xs leading-relaxed text-navy-400">Draft content pending clinician verification. Follow your unit protocol and the original guideline.</p>
      </div>
    </div>
  );
}
