import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { GuidelineCard } from '@/components/content';
import { Chip, SampleNotice, SearchField } from '@/components/ui';
import { GUIDELINES, SOURCES, getSource } from '@/data';
import type { SourceId, Specialty } from '@/types/content';

type SpecFilter = 'all' | Specialty;

export default function GuidelinesLibraryPage() {
  const [params, setParams] = useSearchParams();
  const source = (params.get('source') as SourceId | null) ?? null;
  const [spec, setSpec] = useState<SpecFilter>('all');
  const [q, setQ] = useState('');

  const setSource = (id: SourceId | null) => setParams(id ? { source: id } : {}, { replace: true });

  const list = useMemo(() => {
    const f = q.trim().toLowerCase();
    return GUIDELINES.filter(
      (g) =>
        (!source || g.sourceId === source) &&
        (spec === 'all' || g.specialty === spec) &&
        (!f || g.title.toLowerCase().includes(f) || (g.reference ?? '').toLowerCase().includes(f)),
    ).sort((a, b) => getSource(a.sourceId).priority - getSource(b.sourceId).priority || (b.year ?? 0) - (a.year ?? 0));
  }, [source, spec, q]);

  const sourcesWithDocs = SOURCES.filter((s) => GUIDELINES.some((g) => g.sourceId === s.id));

  return (
    <div>
      <PageHeader title="Guidelines Library" />
      <div className="space-y-4 px-4 md:px-6">
        <SearchField value={q} onChange={setQ} placeholder="Filter by title or reference (e.g. NG133)" aria-label="Filter guidelines" />
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:px-0">
          <Chip active={!source} onClick={() => setSource(null)}>All sources</Chip>
          {sourcesWithDocs.map((s) => (
            <Chip key={s.id} active={source === s.id} onClick={() => setSource(s.id)}>
              {s.shortName}
            </Chip>
          ))}
        </div>
        <div className="flex gap-2">
          {(['all', 'obstetrics', 'gynaecology'] as SpecFilter[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSpec(s)}
              aria-pressed={spec === s}
              className={`rounded-lg px-3 py-1 text-xs font-bold capitalize ${spec === s ? 'bg-navy text-white' : 'text-navy-500 hover:bg-surface'}`}
            >
              {s === 'all' ? 'All' : s}
            </button>
          ))}
        </div>
        {source && (
          <p className="text-xs text-navy-500">
            <strong className="text-navy">{getSource(source).fullName}</strong> · {getSource(source).region}
          </p>
        )}
        <p className="text-xs font-semibold text-navy-400">{list.length} documents</p>
        <div className="space-y-2.5">
          {list.map((g) => (
            <GuidelineCard key={g.id} guideline={g} />
          ))}
        </div>
        <SampleNotice />
      </div>
    </div>
  );
}
