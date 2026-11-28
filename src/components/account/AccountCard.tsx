import { Cloud, CloudOff, LogOut, Mail, RefreshCw, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, type FormEvent } from 'react';
import { useAuth } from '@/store/AuthContext';
import { useVault } from '@/store/VaultContext';

/** Sign-in and sync status. Hidden entirely when the backend is not configured. */
export function AccountCard() {
  const auth = useAuth();
  const { sync, syncError } = useVault();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  if (!auth.configured) return null;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const err = await auth.signIn(email.trim());
    setBusy(false);
    if (err) setError(err);
    else setSent(true);
  };

  const google = async () => {
    setError(null);
    const err = await auth.signInWithGoogle();
    if (err) setError(err);
  };

  if (auth.userId) {
    const label = { local: 'Saved on this device', syncing: 'Syncing…', synced: 'Synced to your account', error: 'Sync failed, will retry' }[sync];
    const Icon = sync === 'error' ? CloudOff : sync === 'syncing' ? RefreshCw : Cloud;
    return (
      <section className="flex items-center gap-3 rounded-2xl bg-surface p-3 shadow-card ring-1 ring-navy-100/60">
        <span className="grid size-10 place-items-center rounded-xl bg-teal-50">
          <Icon className={`size-5 text-teal-700 ${sync === 'syncing' ? 'animate-spin' : ''}`} aria-hidden />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-bold text-navy">{auth.name ?? auth.email}</span>
          <span className="block text-xs text-navy-500">
            {label}
            {auth.role && auth.role !== 'reader' ? ` · ${auth.role}` : ''}
            {sync === 'error' && syncError ? <span className="mt-0.5 block break-words text-[11px] text-amber-700">{syncError}</span> : null}
          </span>
        </span>
        {auth.role === 'admin' || auth.role === 'editor' ? (
          <Link to="/tools/admin" className="flex items-center gap-1 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-700 ring-1 ring-teal-100 hover:bg-teal-100">
            <ShieldCheck className="size-3.5" aria-hidden /> Admin
          </Link>
        ) : null}
        <button type="button" onClick={() => auth.signOut()} className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold text-navy-600 ring-1 ring-navy-100 hover:bg-navy-50">
          <LogOut className="size-3.5" aria-hidden /> Sign out
        </button>
      </section>
    );
  }

  return (
    <section className="rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
      <h2 className="text-[15px] font-extrabold text-navy">Sync across devices</h2>
      <p className="mb-3 text-xs text-navy-500">Sign in with your email to keep bookmarks and notes on phone and laptop. No password needed.</p>
      {sent ? (
        <p className="rounded-xl bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-700">Check your inbox for the sign-in link.</p>
      ) : (
        <form onSubmit={submit} className="flex gap-2">
          <label className="flex flex-1 items-center gap-2 rounded-xl bg-bg px-3 ring-1 ring-navy-100 focus-within:ring-teal">
            <Mail className="size-4 text-navy-400" aria-hidden />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@hospital.in"
              className="h-10 w-full bg-transparent text-sm text-navy outline-none placeholder:text-navy-300"
              aria-label="Email address"
            />
          </label>
          <button type="submit" disabled={busy} className="rounded-xl bg-teal px-4 text-sm font-bold text-white disabled:opacity-60">
            {busy ? 'Sending…' : 'Send link'}
          </button>
        </form>
      )}
      <button type="button" onClick={google} className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-surface text-sm font-bold text-navy ring-1 ring-navy-100 hover:bg-navy-50">
        <span className="text-base font-extrabold text-teal-700" aria-hidden>G</span> Continue with Google
      </button>
      {error && <p className="mt-2 text-xs font-semibold text-alert">{error}</p>}
    </section>
  );
}
