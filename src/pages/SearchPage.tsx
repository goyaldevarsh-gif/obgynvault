import { ChevronRight, Clock, Pill, SearchX, TrendingUp, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { GuidelineCard, TopicCard } from '@/components/content';
import { Chip, EmptyState, SampleNotice, SearchField } from '@/components/ui';
import { matchSnippet, search, TRENDING_SEARCHES } from '@/lib/search';
import { useVault } from '@/store/VaultContext';
import { DRUGS } from '@/data';

type Filter = 'all' | 'topic' | 'guideline';

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const urlQuery = params.get('q') ?? '';
  const [query, setQuery] = useState(urlQuery);
  const [filter, setFilter] = useState<Filter>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const { recentSearches, addRecentSearch, clearRecentSearches } = useVault();

  useEffect(() => {
    if ((location.state as { focus?: boolean } | null)?.focus || !urlQuery) inputRef.current?.focus();
  }, []);

  // Keep URL in sync (shareable/back-button friendly), debounced.
  useEffect(() => {
    const t = window.setTimeout(() => {
      const q = query.trim();
      setParams(q ? { q } : {}, { replace: true });
      if (q.length >= 3) addRecentSearch(q);
    }, 600);
    return () => window.clearTimeout(t);
  }, [query, setParams, addRecentSearch]);

  const results = useMemo(() => search(query), [query]);
  const counts = useMemo(
    () => ({ all: results.length, topic: results.filter((r) => r.kind === 'topic').length, guideline: results.filter((r) => r.kind === 'guideline').length }),
    [results],
  );
  const visible = filter === 'all' ? results : results.filter((r) => r.kind === filter);
  const drugHits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 3 || filter === 'guideline') return [];
    return DRUGS.filter((d) => d.name.toLowerCase().includes(q) || d.terms.some((t) => t.toLowerCase().includes(q) || (t.length >= 4 && q.includes(t.toLowerCase())))).slice(0, 2);
  }, [query, filter]);

  const runSearch = (q: string) => {
    setQuery(q);
    setFilter('all');
    addRecentSearch(q);
  };

  return (
    <div>
      <PageHeader title="Clinical Search" />
      <div className="space-y-4 px-4 md:px-6">
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            addRecentSearch(query);
            inputRef.current?.blur();
          }}
        >
          <SearchField ref={inputRef} value={query} onChange={setQuery} placeholder="Condition, guideline, source…" aria-label="Search ObGynVault" enterKeyHint="search" />
        </form>

        {!query.trim() ? (
          <div className="space-y-6 pt-2">
            {recentSearches.length > 0 && (
              <section>
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-sm font-bold text-navy">Recent searches</h2>
                  <button type="button" onClick={clearRecentSearches} className="text-xs font-semibold text-navy-400 hover:text-navy">
                    Clear
                  </button>
                </div>
                <ul className="divide-y divide-navy-100 rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60">
                  {recentSearches.map((r) => (
                    <li key={r}>
                      <button type="button" onClick={() => runSearch(r)} className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-navy hover:bg-canvas">
                        <Clock className="size-4 text-navy-400" aria-hidden /> {r}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            <section>
              <h2 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-navy">
                <TrendingUp className="size-4 text-teal" aria-hidden /> Trending
              </h2>
              <div className="flex flex-wrap gap-2">
                {TRENDING_SEARCHES.map((t) => (
                  <Chip key={t} onClick={() => runSearch(t)}>
                    {t}
                  </Chip>
                ))}
              </div>
            </section>
            <p className="text-xs text-navy-400">Tip: search by condition (“preeclampsia”), abbreviation (“PPH”, “GDM”), source (“RCOG”) or reference (“NG133”).</p>
          </div>
        ) : (
          <>
            <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0">
              <Chip active={filter === 'all'} count={counts.all} onClick={() => setFilter('all')}>All</Chip>
              <Chip active={filter === 'topic'} count={counts.topic} onClick={() => setFilter('topic')}>Topics</Chip>
              <Chip active={filter === 'guideline'} count={counts.guideline} onClick={() => setFilter('guideline')}>Guidelines</Chip>
            </div>

            {visible.length === 0 ? (
              <EmptyState icon={SearchX} title={`No results for “${query.trim()}”`}>
                Try a broader term or an abbreviation. The sample library has {`${counts.all === 0 ? 'no' : counts.all}`} matches.
                <button type="button" onClick={() => setQuery('')} className="mt-3 inline-flex items-center gap-1 font-semibold text-teal-700">
                  <X className="size-4" /> Clear search
                </button>
              </EmptyState>
            ) : (
              <section aria-label="Results" className="space-y-2.5">
                {drugHits.map((d) => (
                  <Link key={d.slug} to={`/tools/drug-vault/${d.slug}`} className="flex items-center gap-3 rounded-2xl bg-amber-50 p-3 ring-1 ring-amber/30">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-amber-700"><Pill className="size-5" aria-hidden /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-bold text-navy">{d.name}</span>
                      <span className="block text-xs text-navy-500">Drug Vault: every cited dose and use, all topics</span>
                    </span>
                    <ChevronRight className="size-5 text-navy-300" aria-hidden />
                  </Link>
                ))}
                {visible.some((r) => r.kind === 'topic') && <h2 className="text-sm font-bold text-navy">Topics</h2>}
                {visible.map((r, i) =>
                  r.kind === 'topic' ? (
                    <TopicCard key={`t-${r.item.slug}`} topic={r.item} highlight={i === 0} snippet={matchSnippet(r.item, query)} />
                  ) : null,
                )}
                {visible.some((r) => r.kind === 'guideline') && <h2 className="pt-2 text-sm font-bold text-navy">Guidelines</h2>}
                {visible.map((r) => (r.kind === 'guideline' ? <GuidelineCard key={`g-${r.item.id}`} guideline={r.item} /> : null))}
              </section>
            )}
            <SampleNotice compact status="draft" />
          </>
        )}
      </div>
    </div>
  );
}
