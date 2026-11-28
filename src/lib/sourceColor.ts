import type { CSSProperties } from 'react';

function mix(hex: string, target: number, amount: number): string {
  const n = parseInt(hex.slice(1), 16);
  const ch = (shift: number) => Math.round(((n >> shift) & 255) * (1 - amount) + target * amount);
  return `rgb(${ch(16)}, ${ch(8)}, ${ch(0)})`;
}

/** CSS variables for a guideline body's colour; pair with SOURCE_TINT. */
export function tintStyle(hex: string): CSSProperties {
  return {
    '--src': hex,
    '--src-bg': `${hex}14`,
    '--src-ring': `${hex}38`,
    '--src-ink': mix(hex, 0, 0.3),
    '--src-ink-dark': mix(hex, 255, 0.45),
    '--src-bg-dark': `${hex}2E`,
  } as CSSProperties;
}

/** Pale tinted chip in the source's colour; readable in light and dark themes. */
export const SOURCE_TINT =
  'bg-[var(--src-bg)] text-[color:var(--src-ink)] ring-1 ring-inset ring-[color:var(--src-ring)] dark:bg-[var(--src-bg-dark)] dark:text-[color:var(--src-ink-dark)]';
