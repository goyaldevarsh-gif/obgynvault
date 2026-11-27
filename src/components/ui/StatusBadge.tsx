import type { VerificationStatus } from '@/types/content';
import { cx } from '@/lib/format';

const STYLES: Record<VerificationStatus, { label: string; cls: string }> = {
  sample: { label: 'Sample', cls: 'bg-amber-100 text-amber-700' },
  draft: { label: 'Draft', cls: 'bg-navy-100 text-navy-600' },
  in_review: { label: 'In review', cls: 'bg-navy-100 text-navy-700' },
  verified: { label: 'Verified', cls: 'bg-teal-100 text-teal-700' },
};

export function StatusBadge({ status, className }: { status: VerificationStatus; className?: string }) {
  const s = STYLES[status];
  return <span className={cx('inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide', s.cls, className)}>{s.label}</span>;
}
