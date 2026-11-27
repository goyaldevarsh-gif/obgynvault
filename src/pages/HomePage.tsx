import { Activity, ArrowRight, Newspaper, ChevronRight, Siren } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '@/components/brand/Logo';
import { ModuleTile, TopicCard } from '@/components/content';
import { SampleNotice, SearchField, SectionHeader } from '@/components/ui';
import { getModule } from '@/config/modules';
import { getGuideline, getTopic, PRIORITY_SOURCES, getSource, TOPICS, UPDATES } from '@/data';
import { greeting } from '@/lib/format';
import { salutation, useName } from '@/lib/profile';
import { useUnreadCount } from '@/lib/feed';
import { useVault } from '@/store/VaultContext';
import { GuidelineCard } from '@/components/content';

const HOME_TILES = ['obstetrics', 'gynaecology', 'guidelines', 'drugs', 'calculators', 'vault'];

export default function HomePage() {
  const navigate = useNavigate();
  const { history } = useVault();
  const name = useName();
  const unread = useUnreadCount();
  const recent = history.slice(0, 3);
  const popular = ['preeclampsia', 'postpartum-haemorrhage', 'gestational-diabetes', 'ectopic-pregnancy'].map((s) => getTopic(s)!);

  return (
    <div className="space-y-6 px-4 pt-4 md:px-6 md:pt-8">
      {/* Top bar */}
      <div className="flex items-center justify-between md:hidden">
        <Logo />
        <Link to="/updates" aria-label={unread ? `What's new, ${unread} unread` : "What's new"} className="relative grid size-10 place-items-center rounded-full bg-surface shadow-card ring-1 ring-navy-100/60">
          <Newspaper className="size-5 text-navy" />
          {unread > 0 && (
            <span className="absolute -right-0.5 -top-0.5 grid min-w-[18px] place-items-center rounded-full bg-amber px-1 text-[10px] font-bold leading-[18px] text-white ring-2 ring-canvas">
              {unread}
            </span>
          )}
        </Link>
      </div>

      {/* Greeting + search */}
      <section>
        <h1 className="text-2xl font-extrabold tracking-tight text-navy md:text-3xl">{greeting()}, {salutation(name)}</h1>
        <p className="mt-0.5 text-sm font-medium text-navy-500">Your clinical knowledge partner</p>
        <button type="button" onClick={() => navigate('/search', { state: { focus: true } })} className="mt-4 block w-full text-left" aria-label="Open clinical search">
          <SearchField value="" onChange={() => {}} placeholder="Search guidelines, topics, drugs…" readOnly tabIndex={-1} className="pointer-events-none" />
        </button>
      </section>

      {/* Featured carousel */}
      <section aria-label="Featured" className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 md:-mx-6 md:scroll-px-6 md:px-6">
        {UPDATES.map((u) => (
          <Link
            key={u.id}
            to={u.to}
            className="relative flex min-h-32 w-[84%] shrink-0 snap-start flex-col justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-ink via-ink-800 to-teal-700 p-4 text-white shadow-card sm:w-[60%]"
          >
            <span aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-white/5" />
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide">
              {u.label}
            </span>
            <span>
              <span className="block font-display text-lg font-extrabold leading-tight">{u.title}</span>
              <span className="mt-1 flex items-center justify-between gap-2 text-[12.5px] font-medium text-white/75">
                <span className="line-clamp-1">{u.subtitle}</span> <ArrowRight className="size-4 shrink-0" />
              </span>
            </span>
          </Link>
        ))}
      </section>

      {/* Modules */}
      <section aria-label="Modules" className="grid grid-cols-3 gap-2.5">
        {HOME_TILES.map((k) => {
          const m = getModule(k)!;
          return <ModuleTile key={k} to={m.to} label={m.label} icon={m.icon} tint={m.tint} fg={m.fg} soon={m.phase > 1} />;
        })}
      </section>

      {/* Emergency quick access */}
      <section>
        <SectionHeader title="Quick access" to="/tools" />
        <Link to="/tools/emergency" className="flex items-center gap-3 rounded-2xl bg-alert-50 p-4 ring-1 ring-alert/20 transition hover:ring-alert/40">
          <span className="grid size-11 place-items-center rounded-xl bg-white text-alert">
            <Siren className="size-6" aria-hidden />
          </span>
          <span className="flex-1">
            <span className="block text-[15px] font-bold text-alert">Emergency protocols</span>
            <span className="block text-xs font-medium text-navy-500">PPH · Eclampsia · Preterm · Shoulder dystocia · Ectopic</span>
          </span>
          <ChevronRight className="size-5 text-alert/60" aria-hidden />
        </Link>
        <Link to="/tools/labour-room" className="mt-2.5 flex items-center gap-3 rounded-2xl bg-teal-50 p-4 ring-1 ring-teal/20 transition hover:ring-teal/40">
          <span className="grid size-11 place-items-center rounded-xl bg-white text-teal-700">
            <Activity className="size-6" aria-hidden />
          </span>
          <span className="flex-1">
            <span className="block text-[15px] font-bold text-teal-700">Labour room</span>
            <span className="block text-xs font-medium text-navy-500">CTG · Labour progress · MEWS</span>
          </span>
          <ChevronRight className="size-5 text-teal/60" aria-hidden />
        </Link>
      </section>

      {/* Priority sources */}
      <section>
        <SectionHeader title="Priority guideline sources" to="/guidelines" />
        <div className="grid grid-cols-4 gap-2">
          {PRIORITY_SOURCES.map((id) => {
            const s = getSource(id);
            return (
              <Link key={id} to={`/guidelines?source=${id}`} className="flex flex-col items-center gap-1 rounded-2xl bg-surface px-1 py-3 text-center shadow-card ring-1 ring-navy-100/60 hover:ring-teal/50">
                <span className="text-[15px] font-extrabold" style={{ color: s.color }}>
                  {s.shortName.split(' ')[0]}
                </span>
                <span className="text-[10px] font-semibold text-navy-400">{s.region}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recently viewed / popular */}
      <section>
        {recent.length > 0 ? (
          <>
            <SectionHeader title="Continue reading" to="/vault?tab=history" />
            <div className="space-y-2.5">
              {recent.map((h) => {
                if (h.kind === 'topic') {
                  const t = getTopic(h.id);
                  return t ? <TopicCard key={`t-${h.id}`} topic={t} /> : null;
                }
                const g = getGuideline(h.id);
                return g ? <GuidelineCard key={`g-${h.id}`} guideline={g} /> : null;
              })}
            </div>
          </>
        ) : (
          <>
            <SectionHeader title="Popular topics" to="/library" />
            <div className="space-y-2.5">
              {popular.map((t) => (
                <TopicCard key={t.slug} topic={t} />
              ))}
            </div>
          </>
        )}
      </section>

      <SampleNotice compact status="draft" />
      <p className="pb-2 text-center text-[11px] text-navy-400">{TOPICS.filter((t) => t.status !== 'sample').length} draft reviews · {TOPICS.length} topics in the library</p>
    </div>
  );
}
