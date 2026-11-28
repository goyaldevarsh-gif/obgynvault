import { Bookmark, ChevronRight, CircleHelp, History, NotebookPen, PlayCircle, Trash2 } from 'lucide-react';
import { showGettingStarted } from '@/components/onboarding/GettingStarted';
import { saveName, useName } from '@/lib/profile';
import { Link, useSearchParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { AccountCard } from '@/components/account/AccountCard';
import { GuidelineCard, TopicCard } from '@/components/content';
import { Card, Chip, EmptyState } from '@/components/ui';
import { getGuideline, getTopic } from '@/data';
import { useVault } from '@/store/VaultContext';
import { relativeTime } from '@/lib/format';
import { ReadingSettingsPanel } from '@/components/settings/ReadingSettings';
import type { BookmarkKind } from '@/types/content';

type Tab = 'saved' | 'notes' | 'history' | 'display';

function targetInfo(kind: BookmarkKind, id: string) {
  if (kind === 'topic') {
    const t = getTopic(id);
    return t ? { title: t.title, to: `/topics/${t.slug}`, meta: 'Clinical topic' } : null;
  }
  const g = getGuideline(id);
  return g ? { title: g.title, to: `/guidelines/${g.id}`, meta: 'Guideline' } : null;
}

function ItemCard({ kind, id }: { kind: BookmarkKind; id: string }) {
  if (kind === 'topic') {
    const t = getTopic(id);
    return t ? <TopicCard topic={t} /> : null;
  }
  const g = getGuideline(id);
  return g ? <GuidelineCard guideline={g} /> : null;
}

export default function MyVaultPage() {
  const [params, setParams] = useSearchParams();
  const tab = (params.get('tab') as Tab) || 'saved';
  const setTab = (t: Tab) => setParams(t === 'saved' ? {} : { tab: t }, { replace: true });
  const { bookmarks, notes, history, deleteNote, clearHistory } = useVault();

  return (
    <div>
      <PageHeader title="Saved & Settings" back={false} />
      <p className="-mt-2 mb-3 px-4 text-sm text-navy-500 md:px-6">Your bookmarked topics, your own notes, reading history, text size and sign-in, all in one place.</p>
      <div className="space-y-4 px-4 md:px-6">
        <AccountCard />
        <Link to="/about" className="flex items-center gap-3 rounded-2xl bg-surface p-3 shadow-card ring-1 ring-navy-100/60 transition hover:ring-teal/50">
          <span className="grid size-10 place-items-center rounded-xl bg-teal-50 text-teal-700"><CircleHelp className="size-5" aria-hidden /></span>
          <span className="flex-1">
            <span className="block text-[15px] font-bold text-navy">Help &amp; About</span>
            <span className="block text-xs text-navy-500">How to use the app, FAQ, disclaimer</span>
          </span>
          <ChevronRight className="size-5 text-navy-300" aria-hidden />
        </Link>
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0" role="tablist">
          <Chip role="tab" active={tab === 'saved'} count={bookmarks.length} onClick={() => setTab('saved')}>Saved</Chip>
          <Chip role="tab" active={tab === 'notes'} count={notes.length} onClick={() => setTab('notes')}>Notes</Chip>
          <Chip role="tab" active={tab === 'history'} onClick={() => setTab('history')}>History</Chip>
          <Chip role="tab" active={tab === 'display'} onClick={() => setTab('display')}>Text &amp; theme</Chip>
        </div>

        {tab === 'display' && (
          <section className="rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
            <NameField />
            <ReadingSettingsPanel />
            <button type="button" onClick={showGettingStarted} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-navy-100 py-3 text-sm font-semibold text-navy-600">
              <PlayCircle className="size-4 text-teal" /> Show the welcome tour again
            </button>
          </section>
        )}

        {tab === 'saved' &&
          (bookmarks.length === 0 ? (
            <EmptyState icon={Bookmark} title="Nothing saved yet">
              Tap the bookmark icon on any topic or guideline to keep it here. <Link to="/library" className="font-semibold text-teal-700">Browse the library</Link>
            </EmptyState>
          ) : (
            <div className="space-y-2.5">
              {bookmarks.map((b) => (
                <ItemCard key={`${b.kind}-${b.id}`} kind={b.kind} id={b.id} />
              ))}
            </div>
          ))}

        {tab === 'notes' &&
          (notes.length === 0 ? (
            <EmptyState icon={NotebookPen} title="No notes yet">
              Open a topic or guideline and use “My notes” to add teaching points or local protocol reminders.
            </EmptyState>
          ) : (
            <div className="space-y-2.5">
              {notes.map((n) => {
                const info = targetInfo(n.kind, n.targetId);
                return (
                  <Card key={n.id} className="p-4">
                    <div className="mb-1.5 flex items-start justify-between gap-2">
                      {info ? (
                        <Link to={info.to} className="text-sm font-bold text-navy hover:text-teal-700">
                          {info.title}
                          <span className="block text-xs font-medium text-navy-400">{info.meta} · {relativeTime(n.updatedAt)}</span>
                        </Link>
                      ) : (
                        <span className="text-sm text-navy-400">Item no longer available</span>
                      )}
                      <button type="button" onClick={() => deleteNote(n.id)} aria-label="Delete note" className="rounded-full p-1.5 text-navy-400 hover:bg-alert-50 hover:text-alert">
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <p className="whitespace-pre-wrap text-sm text-navy-600">{n.text}</p>
                  </Card>
                );
              })}
            </div>
          ))}

        {tab === 'history' &&
          (history.length === 0 ? (
            <EmptyState icon={History} title="No history yet">Topics and guidelines you open will appear here.</EmptyState>
          ) : (
            <>
              <div className="flex justify-end">
                <button type="button" onClick={clearHistory} className="text-xs font-semibold text-navy-400 hover:text-navy">Clear history</button>
              </div>
              <Card className="divide-y divide-navy-100">
                {history.map((h) => {
                  const info = targetInfo(h.kind, h.id);
                  return info ? (
                    <Link key={`${h.kind}-${h.id}`} to={info.to} className="flex items-center gap-3 px-4 py-3 hover:bg-canvas">
                      <History className="size-4 shrink-0 text-navy-400" aria-hidden />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-navy">{info.title}</span>
                        <span className="text-xs text-navy-400">{info.meta}</span>
                      </span>
                      <span className="shrink-0 text-xs text-navy-400">{relativeTime(h.viewedAt)}</span>
                    </Link>
                  ) : null;
                })}
              </Card>
            </>
          ))}
        <p className="text-center text-[11px] text-navy-400">Saved on this device. Cloud sync arrives with accounts in Phase 2.</p>
      </div>
    </div>
  );
}

function NameField() {
  const name = useName();
  return (
    <label className="mb-5 block">
      <span className="mb-1.5 block text-sm font-bold text-navy">Your name</span>
      <input
        defaultValue={name}
        onBlur={(e) => saveName(e.target.value)}
        placeholder="Used for your greeting on Home"
        autoComplete="name"
        className="w-full rounded-xl bg-canvas px-3.5 py-3 text-[15px] font-medium text-navy ring-1 ring-navy-100 outline-none placeholder:text-navy-300 focus:ring-2 focus:ring-teal"
      />
    </label>
  );
}
