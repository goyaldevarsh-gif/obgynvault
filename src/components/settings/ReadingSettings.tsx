import { Type, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { cx } from "@/lib/format";
import {
  loadPrefs,
  savePrefs,
  DEFAULT_PREFS,
  type ReadingPrefs,
} from "@/lib/reading";

type Opt<K extends keyof ReadingPrefs> = {
  value: ReadingPrefs[K];
  label: ReactNode;
  hint?: string;
};

const SIZES: Opt<"size">[] = [
  { value: "sm", label: <span className="text-[13px]">A</span>, hint: "Small" },
  {
    value: "md",
    label: <span className="text-[16px]">A</span>,
    hint: "Default",
  },
  { value: "lg", label: <span className="text-[19px]">A</span>, hint: "Large" },
  {
    value: "xl",
    label: <span className="text-[22px]">A</span>,
    hint: "Extra large",
  },
];
const THEMES: Opt<"theme">[] = [
  {
    value: "light",
    label: <Swatch bg="#ffffff" fg="#102a43" />,
    hint: "Light",
  },
  {
    value: "sepia",
    label: <Swatch bg="#fbf6ea" fg="#3b2e21" />,
    hint: "Sepia",
  },
  { value: "dark", label: <Swatch bg="#16212d" fg="#e7eef6" />, hint: "Dark" },
  {
    value: "system",
    label: (
      <Swatch
        bg="linear-gradient(135deg,#ffffff 50%,#16212d 50%)"
        fg="#486581"
      />
    ),
    hint: "Auto",
  },
];
const FONTS: Opt<"font">[] = [
  {
    value: "sans",
    label: <span style={{ fontFamily: "Inter, sans-serif" }}>Aa</span>,
    hint: "Clean",
  },
  {
    value: "serif",
    label: (
      <span style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>Aa</span>
    ),
    hint: "Book",
  },
  {
    value: "system",
    label: <span style={{ fontFamily: "system-ui, sans-serif" }}>Aa</span>,
    hint: "Phone",
  },
];
const SPACING: Opt<"spacing">[] = [
  { value: "compact", label: <Lines gap={2} />, hint: "Compact" },
  { value: "normal", label: <Lines gap={3.5} />, hint: "Normal" },
  { value: "relaxed", label: <Lines gap={5} />, hint: "Airy" },
];

function Swatch({ bg, fg }: { bg: string; fg: string }) {
  return (
    <span
      className="grid size-8 place-items-center rounded-full text-[13px] font-bold ring-1 ring-black/10"
      style={{ background: bg, color: fg }}
    >
      Aa
    </span>
  );
}
function Lines({ gap }: { gap: number }) {
  return (
    <span className="flex w-6 flex-col" style={{ gap }}>
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-[2px] rounded bg-current" />
      ))}
    </span>
  );
}

function Row<K extends keyof ReadingPrefs>({
  title,
  k,
  opts,
  prefs,
  set,
}: {
  title: string;
  k: K;
  opts: Opt<K>[];
  prefs: ReadingPrefs;
  set: (p: ReadingPrefs) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-navy-400">
        {title}
      </p>
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${opts.length}, minmax(0, 1fr))`,
        }}
      >
        {opts.map((o) => {
          const active = prefs[k] === o.value;
          return (
            <button
              key={String(o.value)}
              type="button"
              aria-pressed={active}
              onClick={() => set({ ...prefs, [k]: o.value })}
              className={cx(
                "flex h-[68px] flex-col items-center justify-center gap-1 rounded-xl font-semibold transition",
                active
                  ? "bg-teal-50 text-teal-700 ring-2 ring-teal"
                  : "bg-canvas text-navy-600 ring-1 ring-navy-100 hover:ring-navy-200",
              )}
            >
              <span className="grid h-8 place-items-center">{o.label}</span>
              <span className="text-[11px]">{o.hint}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** The settings themselves, usable inline (My Vault) or inside the sheet. */
export function ReadingSettingsPanel() {
  const [prefs, setPrefs] = useState<ReadingPrefs>(loadPrefs);
  const set = (p: ReadingPrefs) => {
    setPrefs(p);
    savePrefs(p);
  };
  useEffect(() => {
    if (prefs.theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const on = () => savePrefs(prefs);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [prefs]);
  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-canvas p-3.5 ring-1 ring-navy-100">
        <p className="prose-read">
          Antenatal corticosteroids are offered at 24+0 to 33+6 weeks.
          Betamethasone 12 mg IM, two doses 24 hours apart.
        </p>
        <p className="mt-1 text-[11px] font-medium text-navy-400">Preview</p>
      </div>
      <Row title="Text size" k="size" opts={SIZES} prefs={prefs} set={set} />
      <Row title="Theme" k="theme" opts={THEMES} prefs={prefs} set={set} />
      <Row title="Font" k="font" opts={FONTS} prefs={prefs} set={set} />
      <Row
        title="Line spacing"
        k="spacing"
        opts={SPACING}
        prefs={prefs}
        set={set}
      />
      <button
        type="button"
        onClick={() => set(DEFAULT_PREFS)}
        className="text-xs font-bold text-teal-700"
      >
        Reset to default
      </button>
    </div>
  );
}

/** "Aa" button that opens the reading settings as a bottom sheet. */
export function ReadingSettingsButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Reading settings"
        className={cx(
          "grid size-9 place-items-center rounded-full text-navy hover:bg-surface",
          className,
        )}
      >
        <Type className="size-5" />
      </button>
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 md:items-center"
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Reading settings"
              onClick={(e) => e.stopPropagation()}
              className="pb-safe max-h-[88vh] w-full overflow-y-auto rounded-t-3xl bg-surface p-5 shadow-float md:max-w-md md:rounded-3xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-extrabold text-navy">
                  Reading settings
                </h2>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="grid size-9 place-items-center rounded-full text-navy-500 hover:bg-canvas"
                >
                  <X className="size-5" />
                </button>
              </div>
              <ReadingSettingsPanel />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
