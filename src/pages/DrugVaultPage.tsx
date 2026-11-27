import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Pill, Search } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { CitedParagraph } from '@/components/content';
import { SampleNotice, StatusBadge } from '@/components/ui';
import { DRUGS, drugMentions, getDrug, type DrugDef, type DrugMention } from '@/data';
import NotFoundPage from './NotFoundPage';

const GROUPS: DrugDef['group'][] = ['Uterotonics', 'Antihypertensives', 'Labour & preterm', 'Haematology', 'Hormonal', 'Other'];

/** Drug Vault index: every drug that the cited topic reviews talk about. */
export function DrugVaultIndex() {
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return s ? DRUGS.filter((d) => d.name.toLowerCase().includes(s) || d.terms.some((t) => t.toLowerCase().includes(s))) : DRUGS;
  }, [q]);
  return (
    <div>
      <PageHeader title="Drug Vault" />
      <div className="space-y-4 px-4 md:px-6">
        <p className="text-sm text-navy-500">
          What the cited guidelines say about each drug, gathered from the topic reviews. Every line keeps its source. Doses are quoted from the guidelines; always check your unit protocol and the product label.
        </p>
        <SampleNotice compact status="draft" />
        <label className="flex items-center gap-2 rounded-2xl bg-surface px-4 py-3 shadow-card ring-1 ring-navy-100/60">
          <Search className="size-5 text-teal" aria-hidden />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search a drug…" className="w-full bg-transparent text-[15px] font-semibold text-navy outline-none placeholder:font-medium placeholder:text-navy-300" />
        </label>
        {GROUPS.map((g) => {
          const items = list.filter((d) => d.group === g);
          if (!items.length) return null;
          return (
            <section key={g}>
              <h2 className="mb-2 text-xs font-bold uppercase tracking-wide text-navy-400">{g}</h2>
              <div className="divide-y divide-navy-100 overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60">
                {items.map((d) => {
                  const m = drugMentions(d);
                  const topics = new Set(m.map((x) => x.topic.slug)).size;
                  return (
                    <Link key={d.slug} to={`/tools/drug-vault/${d.slug}`} className="flex items-center gap-3 px-4 py-3 hover:bg-canvas">
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-700">
                        <Pill className="size-4" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-bold text-navy">{d.name}</span>
                        <span className="block text-xs text-navy-400">
                          {m.length} cited statements · {topics} topic{topics === 1 ? '' : 's'}
                        </span>
                      </span>
                      <ChevronRight className="size-5 text-navy-300" aria-hidden />
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
        {!list.length && <p className="py-8 text-center text-sm text-navy-400">No drug matches “{q}”.</p>}
      </div>
    </div>
  );
}

/** One drug: cited statements grouped by topic, key points first. */
export function DrugDetail() {
  const { slug = '' } = useParams();
  const d = getDrug(slug);
  if (!d) return <NotFoundPage />;
  const byTopic = new Map<string, DrugMention[]>();
  for (const m of drugMentions(d)) byTopic.set(m.topic.slug, [...(byTopic.get(m.topic.slug) ?? []), m]);
  return (
    <div>
      <PageHeader title={d.name} />
      <div className="space-y-4 px-4 md:px-6">
        <SampleNotice compact status="draft" />
        <p className="text-sm text-navy-500">Statements below are copied from the topic reviews with their guideline citations. Open the topic for full context.</p>
        {[...byTopic.values()].map((ms) => {
          const t = ms[0].topic;
          let last = '';
          return (
            <section key={t.slug} className="space-y-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
              <Link to={`/topics/${t.slug}`} className="flex items-center justify-between gap-2">
                <span>
                  <span className="block font-display text-[17px] font-extrabold text-navy">{t.title}</span>
                  <span className="mt-0.5 inline-block">
                    <StatusBadge status={t.status} />
                  </span>
                </span>
                <ChevronRight className="size-5 text-teal" aria-hidden />
              </Link>
              {ms.map((m, i) => {
                const label = m.heading ? `${m.section} · ${m.heading}` : m.section;
                const show = label !== last;
                last = label;
                return (
                  <div key={i}>
                    {show && <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-teal-700">{label}</p>}
                    <CitedParagraph point={{ ...m.point, heading: undefined }} />
                  </div>
                );
              })}
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default function DrugVaultPage() {
  const { slug } = useParams();
  return slug ? <DrugDetail /> : <DrugVaultIndex />;
}
