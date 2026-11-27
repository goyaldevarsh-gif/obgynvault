import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Bookmark, BookmarkKind, HistoryEntry, Note } from '@/types/content';
import { readJSON, writeJSON } from '@/lib/storage';

/**
 * My Vault state (bookmarks, notes, history, recent searches).
 * Phase 1: persisted to localStorage. Phase 2: same interface, synced to Supabase tables
 * `bookmarks`, `notes`, `view_history` (docs/PLAN.md §4) with localStorage as offline cache.
 */
interface VaultState {
  bookmarks: Bookmark[];
  notes: Note[];
  history: HistoryEntry[];
  recentSearches: string[];
}

interface VaultApi extends VaultState {
  isBookmarked: (kind: BookmarkKind, id: string) => boolean;
  toggleBookmark: (kind: BookmarkKind, id: string) => boolean; // returns new state
  removeBookmark: (kind: BookmarkKind, id: string) => void;
  saveNote: (kind: BookmarkKind, targetId: string, text: string) => void;
  deleteNote: (noteId: string) => void;
  noteFor: (kind: BookmarkKind, targetId: string) => Note | undefined;
  recordView: (kind: BookmarkKind, id: string) => void;
  clearHistory: () => void;
  addRecentSearch: (q: string) => void;
  clearRecentSearches: () => void;
}

const KEY = 'obgynvault.vault.v1';
const EMPTY: VaultState = { bookmarks: [], notes: [], history: [], recentSearches: [] };

const VaultCtx = createContext<VaultApi | null>(null);

export function VaultProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<VaultState>(() => ({ ...EMPTY, ...readJSON<Partial<VaultState>>(KEY, {}) }));

  useEffect(() => writeJSON(KEY, state), [state]);

  const isBookmarked = useCallback(
    (kind: BookmarkKind, id: string) => state.bookmarks.some((b) => b.kind === kind && b.id === id),
    [state.bookmarks],
  );

  const toggleBookmark = useCallback(
    (kind: BookmarkKind, id: string) => {
      const exists = state.bookmarks.some((b) => b.kind === kind && b.id === id);
      setState((s) => ({
        ...s,
        bookmarks: exists
          ? s.bookmarks.filter((b) => !(b.kind === kind && b.id === id))
          : [{ kind, id, savedAt: new Date().toISOString() }, ...s.bookmarks],
      }));
      return !exists;
    },
    [state.bookmarks],
  );

  const removeBookmark = useCallback((kind: BookmarkKind, id: string) => {
    setState((s) => ({ ...s, bookmarks: s.bookmarks.filter((b) => !(b.kind === kind && b.id === id)) }));
  }, []);

  const saveNote = useCallback((kind: BookmarkKind, targetId: string, text: string) => {
    setState((s) => {
      const now = new Date().toISOString();
      const existing = s.notes.find((n) => n.kind === kind && n.targetId === targetId);
      if (!text.trim()) return { ...s, notes: s.notes.filter((n) => n !== existing) };
      if (existing) {
        return { ...s, notes: [{ ...existing, text, updatedAt: now }, ...s.notes.filter((n) => n !== existing)] };
      }
      const id = `${kind}:${targetId}:${Date.now()}`;
      return { ...s, notes: [{ id, kind, targetId, text, updatedAt: now }, ...s.notes] };
    });
  }, []);

  const deleteNote = useCallback((noteId: string) => {
    setState((s) => ({ ...s, notes: s.notes.filter((n) => n.id !== noteId) }));
  }, []);

  const noteFor = useCallback(
    (kind: BookmarkKind, targetId: string) => state.notes.find((n) => n.kind === kind && n.targetId === targetId),
    [state.notes],
  );

  const recordView = useCallback((kind: BookmarkKind, id: string) => {
    setState((s) => ({
      ...s,
      history: [{ kind, id, viewedAt: new Date().toISOString() }, ...s.history.filter((h) => !(h.kind === kind && h.id === id))].slice(0, 30),
    }));
  }, []);

  const clearHistory = useCallback(() => setState((s) => ({ ...s, history: [] })), []);

  const addRecentSearch = useCallback((q: string) => {
    const term = q.trim();
    if (!term) return;
    setState((s) => ({
      ...s,
      recentSearches: [term, ...s.recentSearches.filter((r) => r.toLowerCase() !== term.toLowerCase())].slice(0, 8),
    }));
  }, []);

  const clearRecentSearches = useCallback(() => setState((s) => ({ ...s, recentSearches: [] })), []);

  const api = useMemo<VaultApi>(
    () => ({ ...state, isBookmarked, toggleBookmark, removeBookmark, saveNote, deleteNote, noteFor, recordView, clearHistory, addRecentSearch, clearRecentSearches }),
    [state, isBookmarked, toggleBookmark, removeBookmark, saveNote, deleteNote, noteFor, recordView, clearHistory, addRecentSearch, clearRecentSearches],
  );

  return <VaultCtx.Provider value={api}>{children}</VaultCtx.Provider>;
}

export function useVault(): VaultApi {
  const ctx = useContext(VaultCtx);
  if (!ctx) throw new Error('useVault must be used inside <VaultProvider>');
  return ctx;
}
