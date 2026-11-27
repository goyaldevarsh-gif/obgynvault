import { readJSON, writeJSON } from './storage';

/** Reader preferences. Applied as data attributes on <html>, so every page follows them. */
export type ReadTheme = 'light' | 'sepia' | 'dark' | 'system';
export type ReadFont = 'sans' | 'serif' | 'system';
export type ReadSize = 'sm' | 'md' | 'lg' | 'xl';
export type ReadSpacing = 'compact' | 'normal' | 'relaxed';

export interface ReadingPrefs {
  theme: ReadTheme;
  font: ReadFont;
  size: ReadSize;
  spacing: ReadSpacing;
}

export const DEFAULT_PREFS: ReadingPrefs = { theme: 'light', font: 'sans', size: 'md', spacing: 'normal' };
const KEY = 'obgynvault.reading.v1';

export function loadPrefs(): ReadingPrefs {
  return { ...DEFAULT_PREFS, ...readJSON<Partial<ReadingPrefs>>(KEY, {}) };
}

export function applyPrefs(p: ReadingPrefs) {
  const el = document.documentElement;
  const dark = p.theme === 'dark' || (p.theme === 'system' && window.matchMedia?.('(prefers-color-scheme: dark)').matches);
  el.dataset.theme = dark ? 'dark' : p.theme === 'sepia' ? 'sepia' : 'light';
  el.dataset.readFont = p.font;
  el.dataset.readSize = p.size;
  el.dataset.readSpacing = p.spacing;
}

export function savePrefs(p: ReadingPrefs) {
  writeJSON(KEY, p);
  applyPrefs(p);
}
