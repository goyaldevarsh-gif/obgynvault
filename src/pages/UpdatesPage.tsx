import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpenCheck, ChevronRight, RefreshCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { FEED, getTopic, WATCH } from '@/data';
import { formatDate } from '@/lib/format';
import { markFeedSeen } from '@/lib/feed';

const KIND = {
  guideline: { icon: BookOpenCheck, label: 'Guideline change', tint: 'bg-amber-50 text-amber-700' },
  topic: { icon: Sparkles, label: 'New in the library', tint: 'bg-teal-50 text-teal-700' },
  app: { icon: RefreshCcw, label: 'App update', tint: 'bg-navy-100/60 text-navy-600' },
} as const;

export default function UpdatesPage() {
  useEffect(() => markFeedSeen(), []);
  const pending = Object.entries(WATCH.pending);

  return (
    <div>
      <PageHeader title="What's new" />
      <div className="space-y-4 px-4 md:px-6">
        <div className="flex items-start gap-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
            <ShieldCheck className="size-5" aria-hidden />
          </span>
          <div className="text-sm">
            <p className="font-bold text-navy">Guideline Watch</p>
            <p className="mt-0.5 text-navy-500">
              Every cited guideline is checked weekly against FOGSI, NICE, RCOG, ACOG, WHO and FIGO. Last checked{' '}
              <strong className="font-semibold text-navy-700">{formatDate(WATCH.lastChecked)}</strong>.
            </p>
          </div>
        </div>

        {pending.length > 0 && (
          <section>
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-amber-700">Review pending</h2>
            <div className="space-y-2">
              {pending.map(([slug, p]) => (
                <Link key={slug} to={`/topics/${slug}`} className="flex items-center gap-3 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber/30">
                  <span className="flex-1 text-sm">
                    <span className="block font-bold text-navy">{getTopic(slug)?.title ?? slug}</span>
                    <span className="block text-navy-600">{p.note}</span>
                  </span>
                  <ChevronRight className="size-5 text-amber-700" aria-hidden />
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-2">
          {FEED.map((f) => {
            const k = KIND[f.kind];
            const body = (
              <>
                <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${k.tint}`}>
                  <k.icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-wide text-navy-400">
                    {k.label} · {formatDate(f.date)}
                  </span>
                  <span className="block font-bold text-navy">{f.title}</span>
                  <span className="block text-sm text-navy-500">{f.body}</span>
                </span>
              </>
            );
            return f.to ? (
              <Link key={f.id} to={f.to} className="flex items-start gap-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60 hover:ring-teal/50">
                {body}
              </Link>
            ) : (
              <div key={f.id} className="flex items-start gap-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
                {body}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
