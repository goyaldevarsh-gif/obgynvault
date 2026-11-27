import { FlaskConical } from 'lucide-react';
import { cx } from '@/lib/format';

/** Mandatory banner on any screen that shows unverified (sample) clinical content. */
export function SampleNotice({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div role="note" className={cx('flex items-start gap-2.5 rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber/40', compact ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-[13px]', className)}>
      <FlaskConical className={cx('shrink-0', compact ? 'mt-px size-3.5' : 'mt-0.5 size-4')} aria-hidden />
      <p className="leading-snug">
        <strong className="font-bold">Sample content for demonstration.</strong>{' '}
        {compact ? 'Not verified clinical guidance.' : 'Guideline titles, years and text are placeholders and are not verified clinical guidance. Always refer to the original guideline.'}
      </p>
    </div>
  );
}
