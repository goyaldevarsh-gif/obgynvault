import { FlaskConical, ShieldAlert } from 'lucide-react';
import type { VerificationStatus } from '@/types/content';
import { cx } from '@/lib/format';

/** Mandatory banner on any screen that shows content which is not 'verified'. */
export function SampleNotice({ compact = false, className, status = 'sample' }: { compact?: boolean; className?: string; status?: VerificationStatus }) {
  if (status === 'verified') return null;
  const draft = status === 'draft' || status === 'in_review';
  const Icon = draft ? ShieldAlert : FlaskConical;
  return (
    <div role="note" className={cx('flex items-start gap-2.5 rounded-xl bg-amber-50 text-amber-700 ring-1 ring-amber/40', compact ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-[13px]', className)}>
      <Icon className={cx('shrink-0', compact ? 'mt-px size-3.5' : 'mt-0.5 size-4')} aria-hidden />
      {draft ? (
        <p className="leading-snug">
          <strong className="font-bold">Draft, pending clinician verification.</strong>{' '}
          Written from the cited guidelines but not yet checked by a clinical reviewer. Confirm against the original document before clinical use.
        </p>
      ) : (
        <p className="leading-snug">
          <strong className="font-bold">Sample content for demonstration.</strong>{' '}
          {compact ? 'Not verified clinical guidance.' : 'Guideline titles, years and text are placeholders and are not verified clinical guidance. Always refer to the original guideline.'}
        </p>
      )}
    </div>
  );
}
