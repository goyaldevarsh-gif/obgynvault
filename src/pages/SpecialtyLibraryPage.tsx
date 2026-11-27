import { useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { SPECIALTY, TopicCard } from '@/components/content';
import { Chip, SampleNotice, SearchField } from '@/components/ui';
import { topicsBySpecialty } from '@/data';
import type { Specialty } from '@/types/content';

export default function SpecialtyLibraryPage() {
  const { specialty } = useParams();
  const [category, setCategory] = useState<string>('All');
  const [filter, setFilter] = useState('');

  const valid = specialty === 'obstetrics' || specialty === 'gynaecology';
  const topics = useMemo(() => (valid ? topicsBySpecialty(specialty as Specialty) : []), [specialty, valid]);
  const categories = useMemo(() => ['All', ...Array.from(new Set(topics.map((t) => t.category)))], [topics]);

  if (!valid) return <Navigate to="/library" replace />;
  const sp = SPECIALTY[specialty as Specialty];

  const f = filter.trim().toLowerCase();
  const visible = topics.filter(
    (t) => (category === 'All' || t.category === category) && (!f || t.title.toLowerCase().includes(f) || t.tags.some((x) => x.toLowerCase().includes(f))),
  );
  const grouped = visible.reduce<Record<string, typeof visible>>((acc, t) => {
    (acc[t.category] ??= []).push(t);
    return acc;
  }, {});

  return (
    <div>
      <PageHeader title={`${sp.label} Library`} />
      <div className="space-y-4 px-4 md:px-6">
        <SearchField value={filter} onChange={setFilter} placeholder={`Filter ${sp.label.toLowerCase()} topics`} aria-label={`Filter ${sp.label} topics`} />
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:px-0">
          {categories.map((c) => (
            <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
              {c}
            </Chip>
          ))}
        </div>
        {Object.entries(grouped).map(([cat, list]) => (
          <section key={cat}>
            <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-navy-400">{cat}</h2>
            <div className="space-y-2.5">
              {list.map((t) => (
                <TopicCard key={t.slug} topic={t} />
              ))}
            </div>
          </section>
        ))}
        {visible.length === 0 && <p className="py-8 text-center text-sm text-navy-500">No topics match this filter.</p>}
        <SampleNotice compact />
      </div>
    </div>
  );
}
