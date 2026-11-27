import { ArrowRight, GitCompareArrows } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { SourceBadge } from '@/components/content';
import { Chip, SampleNotice } from '@/components/ui';
import { getGuideline, getSource, TOPICS } from '@/data';
import type { SourceId } from '@/types/content';

/**
 * Guideline Comparison (Phase 3). Shows each body's own wording for the same clinical question,
 * built from the `positions` on authored topics. It never merges or averages guidance.
 */
export default function ComparePage() {
  const [params, setParams] = useSearchParams();
  const comparable = useMemo(() => TOPICS.filter((t) => t.positions?.length), []);
  const topic = comparable.find((t) => t.slug === params.get('topic')) ?? comparable[0];

  const sources = useMemo(() => {
    const ids = new Set<SourceId>();
    topic?.positions?.forEach((p) => p.entries.forEach((e) => ids.add(getGuideline(e.guidelineId)!.sourceId)));
    return [...ids].sort((a, b) => getSource(a).priority - getSource(b).priority);
  }, [topic]);

  useEffect(() => {
    document.querySelector('[data-active-topic="true"]')?.scrollIntoView({ block: 'nearest', inline: 'center' });
  }, [topic?.slug]);

  const hidden = new Set((params.get('hide') ?? '').split(',').filter(Boolean));
  const shown = sources.filter((s) => !hidden.has(s));

  const update = (next: Record<string, string | null>) => {
    const p = new URLSearchParams(params);
    Object.entries(next).forEach(([k, v]) => (v ? p.set(k, v) : p.delete(k)));
    setParams(p, { replace: true });
  };
  const toggleSource = (id: SourceId) => {
    const h = new Set(hidden);
    if (h.has(id)) h.delete(id);
    else if (shown.length > 1) h.add(id);
    update({ hide: [...h].join(',') || null });
  };

  if (!topic) {
    return (
      <div>
        <PageHeader title="Compare" />
        <p className="px-4 py-10 text-center text-sm text-navy-500">No topics have comparison data yet.</p>
      </div>
    );
  }

  return (
    <div>
      <PageHeader title="Compare guidelines" />
      <div className="space-y-4 px-4 md:px-6">
        <section>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-navy-400">Topic</h2>
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:px-0">
            {comparable.map((t) => (
              <Chip key={t.slug} data-active-topic={t.slug === topic.slug} active={t.slug === topic.slug} onClick={() => update({ topic: t.slug, hide: null })}>
                {t.title}
              </Chip>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-navy-400">Show sources</h2>
          <div className="flex flex-wrap gap-2">
            {sources.map((s) => (
              <Chip key={s} active={!hidden.has(s)} onClick={() => toggleSource(s)}>
                {getSource(s).shortName}
              </Chip>
            ))}
          </div>
        </section>

        <SampleNotice compact status={topic.status} />

        {/* Phone: one card per question, sources stacked. Tablet and up: a true side-by-side grid. */}
        <div className="space-y-3 md:hidden">
          {topic.positions!.map((p) => {
            const entries = p.entries.filter((e) => shown.includes(getGuideline(e.guidelineId)!.sourceId));
            if (!entries.length) return null;
            return (
              <article key={p.domain} className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60">
                <h3 className="border-b border-navy-100 bg-teal-50/60 px-4 py-2.5 text-[15px] font-extrabold text-navy">{p.domain}</h3>
                <ul className="divide-y divide-navy-100">
                  {entries
                    .sort((a, b) => getSource(getGuideline(a.guidelineId)!.sourceId).priority - getSource(getGuideline(b.guidelineId)!.sourceId).priority)
                    .map((e) => {
                      const g = getGuideline(e.guidelineId)!;
                      return (
                        <li key={e.guidelineId} className="px-4 py-3">
                          <Link to={`/guidelines/${g.id}`} className="mb-1 inline-flex items-center gap-2">
                            <SourceBadge id={g.sourceId} />
                            <span className="text-[11px] font-semibold text-navy-400">{g.reference ?? g.year}{e.locator ? ` · ${e.locator}` : ''}</span>
                          </Link>
                          <p className="text-sm leading-snug text-navy-700">{e.text}</p>
                        </li>
                      );
                    })}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="hidden overflow-x-auto rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60 md:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-navy text-white">
                <th className="w-44 px-4 py-3 text-xs font-bold uppercase tracking-wide">Question</th>
                {shown.map((s) => (
                  <th key={s} className="px-4 py-3 text-xs font-bold uppercase tracking-wide">{getSource(s).shortName}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {topic.positions!.map((p) => (
                <tr key={p.domain} className="border-t border-navy-100 align-top">
                  <th className="bg-teal-50/50 px-4 py-3 text-[13px] font-extrabold text-navy">{p.domain}</th>
                  {shown.map((s) => {
                    const items = p.entries.filter((e) => getGuideline(e.guidelineId)!.sourceId === s);
                    return (
                      <td key={s} className="px-4 py-3 leading-snug text-navy-700">
                        {items.length ? (
                          items.map((e) => (
                            <p key={e.guidelineId} className="mb-1 last:mb-0">
                              {e.text}
                              {e.locator && <span className="ml-1 text-[11px] font-semibold text-navy-400">({e.locator})</span>}
                            </p>
                          ))
                        ) : (
                          <span className="text-xs text-navy-300">Not addressed</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link to={`/topics/${topic.slug}`} className="flex items-center gap-3 rounded-2xl bg-teal-50 p-4 ring-1 ring-teal/20">
          <GitCompareArrows className="size-6 shrink-0 text-teal-700" aria-hidden />
          <span className="flex-1 text-sm">
            <strong className="block font-bold text-navy">Read the full {topic.title} review</strong>
            <span className="text-navy-500">Every statement with its source and section.</span>
          </span>
          <ArrowRight className="size-5 text-teal-700" aria-hidden />
        </Link>

        <p className="text-xs leading-relaxed text-navy-400">
          Each cell is that body&apos;s own position, in short. ObGynVault does not merge or average guidance. &quot;Not addressed&quot; means the source did not cover this question in the parts that were read.
        </p>
      </div>
    </div>
  );
}
