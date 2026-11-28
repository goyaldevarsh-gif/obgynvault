import { ArrowUp, BookOpen, Loader2, Sparkles, TriangleAlert } from 'lucide-react';
import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { getBackend } from '@/lib/backend';
import { AI_SYSTEM, buildAiContext } from '@/lib/aiContext';
import { useAuth } from '@/store/AuthContext';
import type { Topic } from '@/types/content';

interface Turn {
  q: string;
  answer?: string;
  error?: string;
  topics: Topic[];
}

const EXAMPLES = ['First-line drug for severe hypertension in pregnancy?', 'When to give antenatal steroids?', 'Carbetocin vs oxytocin for PPH prevention'];

/** AI Assistant: Gemini answers only from the app's own topic text, with sources. */
export default function AiAssistantPage() {
  const auth = useAuth();
  const [ready, setReady] = useState<boolean | null>(null);
  const [q, setQ] = useState('');
  const [busy, setBusy] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);

  useEffect(() => {
    getBackend().then((b) => setReady(!!b?.aiReady));
  }, []);

  const ask = async (e?: FormEvent, text = q) => {
    e?.preventDefault();
    const question = text.trim();
    if (!question || busy) return;
    setBusy(true);
    setQ('');
    const { topics, context } = buildAiContext(question);
    setTurns((t) => [{ q: question, topics }, ...t]);
    const b = await getBackend();
    const res = topics.length
      ? await b!.askAI(question, AI_SYSTEM(context))
      : { text: 'ObGynVault does not cover this yet. Try other words, or search the library.' };
    setTurns((t) => [{ q: question, topics, ...('text' in res ? { answer: res.text } : { error: res.error }) }, ...t.slice(1)]);
    setBusy(false);
  };

  return (
    <div>
      <PageHeader title="AI Assistant" />
      <div className="space-y-4 px-4 pb-8 md:px-6">
        <p className="flex items-start gap-2 rounded-2xl bg-amber-50 p-3 text-xs font-medium leading-relaxed text-amber-800 ring-1 ring-amber/30">
          <TriangleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
          Answers come only from ObGynVault topics (drafts, not yet verified), with their sources. Always check the original guideline before acting.
        </p>

        {!auth.configured || !auth.userId ? (
          <Gate text="Sign in to use the AI Assistant." to="/vault" link="Sign in" />
        ) : ready === false ? (
          <Gate text="The AI Assistant is being set up and will switch on shortly." />
        ) : (
          <>
            <form onSubmit={ask} className="flex items-end gap-2 rounded-2xl bg-surface p-2 shadow-card ring-1 ring-navy-100/60 focus-within:ring-2 focus-within:ring-teal">
              <textarea
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) ask(e as unknown as FormEvent);
                }}
                rows={2}
                maxLength={500}
                placeholder="Ask a clinical question…"
                className="min-h-12 flex-1 resize-none bg-transparent px-2 py-1.5 text-[15px] text-navy outline-none placeholder:text-navy-300"
              />
              <button type="submit" disabled={busy || !q.trim()} aria-label="Ask" className="grid size-10 place-items-center rounded-xl bg-teal text-white disabled:opacity-40">
                {busy ? <Loader2 className="size-5 animate-spin" /> : <ArrowUp className="size-5" />}
              </button>
            </form>
            {!turns.length && (
              <div className="flex flex-wrap gap-2">
                {EXAMPLES.map((x) => (
                  <button key={x} type="button" onClick={() => ask(undefined, x)} className="rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-navy-600 ring-1 ring-navy-100">
                    {x}
                  </button>
                ))}
              </div>
            )}
            {turns.map((t, k) => (
              <article key={turns.length - k} className="space-y-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
                <h2 className="text-[15px] font-bold text-navy">{t.q}</h2>
                {t.answer ? (
                  <Answer text={t.answer} />
                ) : t.error ? (
                  <p className="text-sm text-alert">Could not get an answer: {t.error}</p>
                ) : (
                  <p className="flex items-center gap-2 text-sm text-navy-500"><Loader2 className="size-4 animate-spin" /> Reading the topics…</p>
                )}
                {t.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 border-t border-navy-100 pt-3">
                    <span className="text-xs font-semibold text-navy-400">From:</span>
                    {t.topics.map((tp) => (
                      <Link key={tp.slug} to={`/topics/${tp.slug}`} className="flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-700">
                        <BookOpen className="size-3.5" /> {tp.title}
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function Gate({ text, to, link }: { text: string; to?: string; link?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-surface p-6 text-center shadow-card ring-1 ring-navy-100/60">
      <Sparkles className="size-8 text-teal" aria-hidden />
      <p className="text-sm font-medium text-navy-600">{text}</p>
      {to && <Link to={to} className="rounded-xl bg-teal px-4 py-2 text-sm font-bold text-white">{link}</Link>}
    </div>
  );
}

/** Renders the model's plain text: bullets, bold and line breaks only. */
function Answer({ text }: { text: string }) {
  return (
    <div className="space-y-1.5 text-[15px] leading-relaxed text-navy-700">
      {text.split('\n').filter((l) => l.trim()).map((line, i) => {
        const bullet = /^\s*[-*•]\s+/.test(line);
        const clean = line.replace(/^\s*[-*•]\s+/, '').replace(/^#+\s*/, '');
        const parts = clean.split(/(\*\*[^*]+\*\*)/g).map((p, j) => (p.startsWith('**') ? <strong key={j}>{p.slice(2, -2)}</strong> : p));
        return bullet ? (
          <p key={i} className="flex gap-2"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal" />{<span>{parts}</span>}</p>
        ) : (
          <p key={i}>{parts}</p>
        );
      })}
    </div>
  );
}
