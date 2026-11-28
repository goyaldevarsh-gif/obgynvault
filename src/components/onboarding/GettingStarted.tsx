import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, BookmarkCheck, CheckCircle2, ChevronLeft, FileCheck2, Quote, Search, ShieldAlert, Siren, Type } from 'lucide-react';
import { LogoMark } from '@/components/brand/Logo';
import { getSource, PRIORITY_SOURCES, TOPICS } from '@/data';
import { cx } from '@/lib/format';
import { loadName, saveName } from '@/lib/profile';
import welcomeArt from '@/assets/onboarding/welcome.webp';
import sourcesArt from '@/assets/onboarding/sources.webp';
import searchArt from '@/assets/onboarding/search.webp';
import verifyArt from '@/assets/onboarding/verify.webp';

const KEY = 'obgynvault.onboarded.v1';
export const SHOW_ONBOARDING_EVENT = 'obgynvault:show-onboarding';

function readDone(): boolean {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

/** Re-open the tour from anywhere (e.g. settings). */
export function showGettingStarted() {
  window.dispatchEvent(new Event(SHOW_ONBOARDING_EVENT));
}

/** Illustration for a slide; the code-drawn art shows until the image loads (or if it fails). */
function Art({ src, children }: { src: string; children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-[min(280px,34dvh)] place-items-center">
      {!loaded && children}
      <img src={src} alt="" className={cx('absolute inset-0 size-full rounded-[2rem] object-cover shadow-card', !loaded && 'hidden')} onLoad={() => setLoaded(true)} />
    </div>
  );
}

function Blob({ children, tone = 'teal' }: { children: ReactNode; tone?: 'teal' | 'amber' | 'navy' }) {
  const bg = { teal: 'from-teal-50 to-teal-100', amber: 'from-amber-50 to-amber-100', navy: 'from-navy-100/60 to-navy-100' }[tone];
  return <div className={cx('relative grid size-full place-items-center rounded-[2rem] bg-gradient-to-br', bg)}>{children}</div>;
}

function Floating({ className, children }: { className: string; children: ReactNode }) {
  return <div className={cx('absolute flex items-center gap-1.5 rounded-xl bg-surface px-2.5 py-1.5 text-xs font-bold text-navy shadow-card ring-1 ring-navy-100/60', className)}>{children}</div>;
}

const SLIDES = [
  {
    title: 'Your OBG guideline companion',
    body: 'Deep, well-organised topic reviews for obstetrics and gynaecology. Summary first, then the details when you need them.',
    art: (
      <Art src={welcomeArt}>
        <Blob>
          <LogoMark className="size-32 drop-shadow-sm" />
          <Floating className="left-3 top-6"><FileCheck2 className="size-4 text-teal" /> {TOPICS.length} topics</Floating>
          <Floating className="bottom-8 right-3"><Siren className="size-4 text-alert" /> Emergency</Floating>
        </Blob>
      </Art>
    ),
  },
  {
    title: 'Every line is cited',
    body: 'Each statement links to FOGSI, ACOG, RCOG, NICE or WHO. Where guidelines disagree, you see them side by side.',
    art: (
      <Art src={sourcesArt}>
        <Blob tone="navy">
          <div className="w-[78%] space-y-2.5 rounded-2xl bg-surface p-4 shadow-card">
            <Quote className="size-5 text-teal" />
            <div className="h-2.5 w-full rounded bg-navy-100" />
            <div className="h-2.5 w-4/5 rounded bg-navy-100" />
            <div className="flex flex-wrap gap-1.5 pt-1">
              {PRIORITY_SOURCES.map((id) => {
                const s = getSource(id);
                return (
                  <span key={id} className="rounded-md px-1.5 py-0.5 text-[10px] font-extrabold text-white" style={{ backgroundColor: s.color }}>
                    {s.shortName}
                  </span>
                );
              })}
            </div>
          </div>
        </Blob>
      </Art>
    ),
  },
  {
    title: 'Find fast, save what matters',
    body: 'Search across every review, bookmark topics, keep notes, and set the text size and theme that suit you.',
    art: (
      <Art src={searchArt}>
        <Blob tone="amber">
          <div className="flex w-[78%] items-center gap-2 rounded-2xl bg-surface px-4 py-3 shadow-card">
            <Search className="size-5 text-teal" />
            <span className="text-sm font-semibold text-navy-400">Search PPH…</span>
          </div>
          <Floating className="left-4 top-8"><BookmarkCheck className="size-4 text-teal" /> Saved</Floating>
          <Floating className="bottom-10 right-4"><Type className="size-4 text-amber-700" /> Text size</Floating>
        </Blob>
      </Art>
    ),
  },
  {
    title: 'Draft content: check before use',
    body: 'Reviews are drafts until a clinician verifies them. Always confirm doses and decisions against the original guideline and your local protocol.',
    art: (
      <Art src={verifyArt}>
        <Blob tone="amber">
          <div className="grid size-28 place-items-center rounded-full bg-surface shadow-card">
            <ShieldAlert className="size-14 text-amber-700" />
          </div>
        </Blob>
      </Art>
    ),
  },
];

export function GettingStarted() {
  const [open, setOpen] = useState(() => !readDone());
  const [i, setI] = useState(0);
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState(loadName);
  const startX = useRef<number | null>(null);
  const last = i === SLIDES.length - 1;

  useEffect(() => {
    const show = () => {
      setI(0);
      setAgreed(false);
      setOpen(true);
    };
    window.addEventListener(SHOW_ONBOARDING_EVENT, show);
    return () => window.removeEventListener(SHOW_ONBOARDING_EVENT, show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const finish = () => {
    saveName(name);
    try {
      localStorage.setItem(KEY, '1');
    } catch {
      /* private mode: the tour simply shows again next time */
    }
    setOpen(false);
  };
  const next = () => (last ? agreed && finish() : setI(i + 1));
  const back = () => i > 0 && setI(i - 1);
  const slide = SLIDES[i];

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Getting started with ObGynVault"
      className="fixed inset-0 z-[60] flex flex-col bg-canvas"
      onPointerDown={(e) => (startX.current = e.clientX)}
      onPointerUp={(e) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        startX.current = null;
        if (dx < -50 && !last) setI(i + 1);
        if (dx > 50) back();
      }}
    >
      <div className="mx-auto flex min-h-0 w-full max-w-md flex-1 flex-col px-6 pb-safe pt-[max(env(safe-area-inset-top),1rem)]">
        <div className="flex h-12 shrink-0 items-center justify-between">
          {i > 0 ? (
            <button type="button" onClick={back} className="-ml-2 flex items-center gap-1 rounded-full px-2 py-1.5 text-sm font-semibold text-navy-500" aria-label="Previous">
              <ChevronLeft className="size-4" /> Back
            </button>
          ) : (
            <span />
          )}
          {!last && (
            <button type="button" onClick={() => setI(SLIDES.length - 1)} className="rounded-full px-3 py-1.5 text-sm font-semibold text-navy-500">
              Skip
            </button>
          )}
        </div>

        <div key={i} className="-mx-6 flex min-h-0 flex-1 flex-col justify-center gap-5 overflow-y-auto px-6 py-2 sm:gap-8 [@media(max-height:700px)]:justify-start motion-safe:animate-[onb-in_.35s_ease-out]">
          {slide.art}
          <div className="text-center">
            <h2 className="font-display text-[26px] font-extrabold leading-tight tracking-tight text-navy">{slide.title}</h2>
            <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-navy-500">{slide.body}</p>
          </div>
          {i === 0 && (
            <label className="mx-auto block w-full max-w-sm">
              <span className="mb-1.5 block text-center text-xs font-semibold uppercase tracking-wide text-navy-400">What should we call you?</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                onPointerDown={(e) => e.stopPropagation()}
                placeholder="Your name (optional)"
                autoComplete="name"
                className="w-full rounded-2xl bg-surface px-4 py-3.5 text-center text-[15px] font-semibold text-navy shadow-card ring-1 ring-navy-100/60 outline-none placeholder:font-medium placeholder:text-navy-300 focus:ring-2 focus:ring-teal"
              />
            </label>
          )}
          {last && (
            <label className="mx-auto flex max-w-sm cursor-pointer items-start gap-3 rounded-2xl bg-surface p-4 text-left text-sm font-medium text-navy-700 shadow-card ring-1 ring-navy-100/60">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 size-5 shrink-0 accent-teal" />
              I understand this is a reference aid, not a substitute for clinical judgement.
            </label>
          )}
        </div>

        <div className="shrink-0 space-y-4 pb-5 pt-3">
          <div className="flex justify-center gap-2" aria-hidden>
            {SLIDES.map((_, k) => (
              <span key={k} className={cx('h-2 rounded-full transition-all', k === i ? 'w-6 bg-teal' : 'w-2 bg-navy-200')} />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            disabled={last && !agreed}
            className="flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-ink py-3.5 text-base font-bold text-white shadow-float transition disabled:opacity-40 dark:bg-teal-600 dark:text-ink"
          >
            {last ? (
              <>
                <CheckCircle2 className="size-5" /> Get started
              </>
            ) : (
              <>
                Next <ArrowRight className="size-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
