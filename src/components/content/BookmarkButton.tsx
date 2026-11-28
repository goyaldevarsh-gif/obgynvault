import { Bookmark } from 'lucide-react';
import type { MouseEvent } from 'react';
import { useVault } from '@/store/VaultContext';
import { useToast } from '@/store/ToastContext';
import type { BookmarkKind } from '@/types/content';
import { cx } from '@/lib/format';

export function BookmarkButton({ kind, id, className, label }: { kind: BookmarkKind; id: string; className?: string; label?: string }) {
  const { isBookmarked, toggleBookmark } = useVault();
  const toast = useToast();
  const saved = isBookmarked(kind, id);

  const onClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const now = toggleBookmark(kind, id);
    toast(now ? 'Saved. Find it in Profile → Saved' : 'Removed from saved');
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${label ?? 'item'} from saved` : `Save ${label ?? 'item'}`}
      className={cx('grid size-9 shrink-0 place-items-center rounded-full transition hover:bg-amber-50', className)}
    >
      <Bookmark className={cx('size-5', saved ? 'fill-amber text-amber' : 'text-navy-400')} />
    </button>
  );
}
