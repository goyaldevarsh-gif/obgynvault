import { CheckCircle2, ClipboardCheck, MessageSquareWarning, ShieldCheck } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AccountCard } from '@/components/account/AccountCard';
import { PageHeader } from '@/components/layout/PageHeader';
import { Chip, StatusBadge } from '@/components/ui';
import { TOPICS } from '@/data';
import { relativeTime } from '@/lib/format';
import { useAuth } from '@/store/AuthContext';
import { useReviews, type ReviewRecord, type ReviewStatus } from '@/store/ReviewContext';

const ACTIONS: { status: ReviewStatus; label: string; cls: string }[] = [
  { status: 'verified', label: 'Mark verified', cls: 'bg-teal text-white' },
  { status: 'changes_requested', label: 'Needs changes', cls: 'bg-amber-50 text-amber-700 ring-1 ring-amber/40' },
  { status: 'in_review', label: 'In review', cls: 'bg-surface text-navy-600 ring-1 ring-navy-100' },
];

const STATUS_LABEL: Record<ReviewStatus, string> = { draft: 'Draft', in_review: 'In review', changes_requested: 'Needs changes', verified: 'Verified' };

/** Phase 2 admin: clinical review queue. Editors record a decision per topic; the latest one sets its status. */
export default function AdminPage() {
  const auth = useAuth();
  const { latest } = useReviews();
  const [filter, setFilter] = useState<'all' | 'pending' | 'verified'>('pending');
  const authored = useMemo(() => TOPICS.filter((t) => t.status !== 'sample'), []);
  const rows = authored.filter((t) => {
    const s = latest.get(t.slug)?.status;
    if (filter === 'verified') return s === 'verified';
    if (filter === 'pending') return s !== 'verified';
    return true;
  });

  return (
    <div>
      <PageHeader title="Admin · Review queue" />
      <div className="space-y-4 px-4 md:px-6">
        {!auth.configured ? (
          <SetupCard />
        ) : !auth.userId ? (
          <>
            <p className="text-sm text-navy-600">Sign in to review content.</p>
            <AccountCard />
          </>
        ) : !auth.isEditor ? (
          <>
            <AccountCard />
            <p className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-700 ring-1 ring-amber/40">
              Your account is a reader account. An admin can make you an editor in Supabase (profiles table, role = editor).
            </p>
          </>
        ) : (
          <>
            <AccountCard />
            <div className="flex gap-2">
              <Chip active={filter === 'pending'} onClick={() => setFilter('pending')}>Pending</Chip>
              <Chip active={filter === 'verified'} onClick={() => setFilter('verified')}>Verified</Chip>
              <Chip active={filter === 'all'} onClick={() => setFilter('all')}>All</Chip>
            </div>
            <div className="space-y-3">
              {rows.map((t) => (
                <ReviewRow key={t.slug} slug={t.slug} title={t.title} />
              ))}
              {!rows.length && <p className="py-6 text-center text-sm text-navy-500">Nothing here.</p>}
            </div>
          </>
        )}
        <p className="text-xs leading-relaxed text-navy-400">
          Marking a topic verified removes the draft warning for every reader. Only do this after checking each statement, dose and threshold against the cited source.
        </p>
      </div>
    </div>
  );
}

function ReviewRow({ slug, title }: { slug: string; title: string }) {
  const { latest, submit, history } = useReviews();
  const current = latest.get(slug);
  const [comment, setComment] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [log, setLog] = useState<ReviewRecord[] | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) history(slug).then(setLog);
  }, [open, slug, history, current?.created_at]);

  const act = async (status: ReviewStatus) => {
    setBusy(true);
    setError(null);
    const err = await submit(slug, status, comment);
    setBusy(false);
    if (err) setError(err);
    else setComment('');
  };

  return (
    <article className="rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-50">
          {current?.status === 'verified' ? <CheckCircle2 className="size-5 text-teal-700" /> : current?.status === 'changes_requested' ? <MessageSquareWarning className="size-5 text-amber-700" /> : <ClipboardCheck className="size-5 text-navy-500" />}
        </span>
        <div className="min-w-0 flex-1">
          <Link to={`/topics/${slug}`} className="text-[15px] font-bold text-navy hover:text-teal-700">{title}</Link>
          <p className="text-xs text-navy-500">
            {current ? `${STATUS_LABEL[current.status]} · ${current.reviewer_name ?? 'reviewer'} · ${relativeTime(current.created_at)}` : 'Draft · not reviewed yet'}
          </p>
          {current?.comment && <p className="mt-1 text-xs italic text-navy-600">“{current.comment}”</p>}
        </div>
        <StatusBadge status={current?.status === 'verified' ? 'verified' : current?.status === 'in_review' || current?.status === 'changes_requested' ? 'in_review' : 'draft'} />
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={2}
        placeholder="Comment (what you checked, or what needs fixing)"
        className="mt-3 w-full rounded-xl bg-bg p-2.5 text-sm text-navy ring-1 ring-navy-100 outline-none focus:ring-teal"
      />
      <div className="mt-2 flex flex-wrap gap-2">
        {ACTIONS.map((a) => (
          <button key={a.status} type="button" disabled={busy} onClick={() => act(a.status)} className={`rounded-full px-3.5 py-1.5 text-xs font-bold disabled:opacity-60 ${a.cls}`}>
            {a.label}
          </button>
        ))}
        <button type="button" onClick={() => setOpen((o) => !o)} className="ml-auto text-xs font-bold text-teal-700">
          {open ? 'Hide history' : 'History'}
        </button>
      </div>
      {error && <p className="mt-2 text-xs font-semibold text-alert">{error}</p>}
      {open && (
        <ul className="mt-3 space-y-1.5 border-t border-navy-100 pt-3 text-xs text-navy-600">
          {(log ?? []).map((r, i) => (
            <li key={i}>
              <strong>{STATUS_LABEL[r.status]}</strong> · {r.reviewer_name ?? 'reviewer'} · {relativeTime(r.created_at)}
              {r.comment ? ` · “${r.comment}”` : ''}
            </li>
          ))}
          {log && !log.length && <li>No reviews yet.</li>}
        </ul>
      )}
    </article>
  );
}

function SetupCard() {
  return (
    <section className="space-y-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
      <h2 className="flex items-center gap-2 text-[15px] font-extrabold text-navy">
        <ShieldCheck className="size-5 text-teal" aria-hidden /> Backend not connected yet
      </h2>
      <p className="text-sm text-navy-600">The review queue, sign-in and sync need a free Supabase project. Setup takes about 5 minutes:</p>
      <ol className="list-decimal space-y-1.5 pl-5 text-sm text-navy-600">
        <li>Create a project at supabase.com.</li>
        <li>Open the SQL editor and run <code className="rounded bg-bg px-1">supabase/migrations/0001_init.sql</code> from the repository.</li>
        <li>Copy the Project URL and the anon public key (Settings → API) into <code className="rounded bg-bg px-1">VITE_SUPABASE_URL</code> and <code className="rounded bg-bg px-1">VITE_SUPABASE_ANON_KEY</code>.</li>
        <li>Sign in once, then make yourself admin with the SQL line at the end of the migration file.</li>
      </ol>
    </section>
  );
}
