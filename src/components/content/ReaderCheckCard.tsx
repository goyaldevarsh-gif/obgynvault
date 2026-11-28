import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Flag, Users } from 'lucide-react';
import { useAuth } from '@/store/AuthContext';
import { useReaderChecks } from '@/store/ReaderChecksContext';
import { useToast } from '@/store/ToastContext';
import { cx } from '@/lib/format';

/**
 * "Help verify": any signed-in doctor compares the topic with its cited guidelines and records
 * whether it matches or reports a problem. Shown under every authored topic.
 */
export function ReaderCheckCard({ slug }: { slug: string }) {
  const auth = useAuth();
  const { summary, submit } = useReaderChecks();
  const toast = useToast();
  const s = summary(slug);
  const [mode, setMode] = useState<'idle' | 'problem'>('idle');
  const [note, setNote] = useState('');
  const [busy, setBusy] = useState(false);

  if (!auth.configured) return null;

  const send = async (verdict: 'matches' | 'problem') => {
    setBusy(true);
    const err = await submit(slug, verdict, verdict === 'problem' ? note : '');
    setBusy(false);
    if (err) toast(err);
    else {
      setMode('idle');
      setNote('');
      toast(verdict === 'matches' ? 'Thanks: your check is recorded.' : 'Thanks: problem sent to the editors.');
    }
  };

  return (
    <section className="space-y-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
          <Users className="size-5" aria-hidden />
        </span>
        <div className="min-w-0 text-sm">
          <p className="font-bold text-navy">Help verify this topic</p>
          <p className="text-navy-500">Compared it with the cited guidelines? Tell colleagues whether it matches.</p>
          <p className="mt-1 text-xs font-semibold text-navy-600">
            Checked by {s.matches} reader{s.matches === 1 ? '' : 's'}
            {s.problems.length > 0 && <span className="text-alert"> · {s.problems.length} problem{s.problems.length === 1 ? '' : 's'} reported</span>}
          </p>
        </div>
      </div>

      {!auth.userId ? (
        <Link to="/vault" className="block rounded-xl bg-canvas px-3 py-2.5 text-center text-sm font-bold text-teal-700 ring-1 ring-navy-100">
          Sign in to add your check
        </Link>
      ) : mode === 'problem' ? (
        <div className="space-y-2">
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            maxLength={600}
            rows={3}
            placeholder="What is wrong, and where in the guideline? (e.g. dose in step 2 differs from NICE 1.11.3)"
            className="w-full rounded-xl bg-canvas p-3 text-sm text-navy ring-1 ring-navy-100 focus:outline-none focus:ring-teal"
          />
          <div className="flex gap-2">
            <button type="button" disabled={busy || !note.trim()} onClick={() => send('problem')} className="flex-1 rounded-xl bg-alert px-3 py-2.5 text-sm font-bold text-white disabled:opacity-50">
              Send problem
            </button>
            <button type="button" onClick={() => setMode('idle')} className="rounded-xl px-3 py-2.5 text-sm font-bold text-navy-500 ring-1 ring-navy-100">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            disabled={busy}
            onClick={() => send('matches')}
            className={cx('flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-bold ring-1', s.mine?.verdict === 'matches' ? 'bg-teal text-white ring-teal' : 'bg-teal-50 text-teal-700 ring-teal/30')}
          >
            <CheckCircle2 className="size-4" aria-hidden /> {s.mine?.verdict === 'matches' ? 'You checked it' : 'Matches source'}
          </button>
          <button
            type="button"
            onClick={() => setMode('problem')}
            className={cx('flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-bold ring-1', s.mine?.verdict === 'problem' ? 'bg-alert text-white ring-alert' : 'bg-alert-50 text-alert ring-alert/30')}
          >
            <Flag className="size-4" aria-hidden /> {s.mine?.verdict === 'problem' ? 'You reported' : 'Found a problem'}
          </button>
        </div>
      )}
      <p className="text-[11px] leading-snug text-navy-400">Reader checks help, but do not replace, the clinical editor’s verification.</p>
    </section>
  );
}
