import { useEffect, useState } from 'react';
import { NotebookPen } from 'lucide-react';
import { useVault } from '@/store/VaultContext';
import { useToast } from '@/store/ToastContext';
import type { BookmarkKind } from '@/types/content';
import { relativeTime } from '@/lib/format';

/** Personal note attached to a topic or guideline. Stored in My Vault. */
export function NoteEditor({ kind, targetId }: { kind: BookmarkKind; targetId: string }) {
  const { noteFor, saveNote } = useVault();
  const toast = useToast();
  const existing = noteFor(kind, targetId);
  const [text, setText] = useState(existing?.text ?? '');
  useEffect(() => {
    setText(existing?.text ?? '');
  }, [existing?.text]);

  const dirty = text !== (existing?.text ?? '');
  return (
    <div className="rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
      <label htmlFor={`note-${targetId}`} className="mb-2 flex items-center gap-2 text-sm font-bold text-navy">
        <NotebookPen className="size-4 text-teal" aria-hidden /> My notes
      </label>
      <textarea
        id={`note-${targetId}`}
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a personal note, e.g. local protocol, teaching point or case reference. Avoid patient identifiers."
        className="w-full resize-y rounded-xl bg-canvas p-3 text-sm text-navy placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-teal"
      />
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-navy-400">{existing ? `Saved ${relativeTime(existing.updatedAt)}` : 'Stored on this device'}</span>
        <button
          type="button"
          disabled={!dirty}
          onClick={() => {
            saveNote(kind, targetId, text);
            toast(text.trim() ? 'Note saved to My Vault' : 'Note removed');
          }}
          className="rounded-xl bg-teal px-4 py-2 text-sm font-bold text-white transition enabled:hover:bg-teal-600 disabled:opacity-40"
        >
          Save note
        </button>
      </div>
    </div>
  );
}
