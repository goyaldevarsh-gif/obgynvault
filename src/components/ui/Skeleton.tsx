import { cx } from '@/lib/format';

export function Skeleton({ className }: { className?: string }) {
  return <div aria-hidden className={cx('skeleton', className)} />;
}

/** Generic page placeholder: header, a search-sized bar and a few cards. */
export function PageSkeleton() {
  return (
    <div role="status" aria-label="Loading" className="space-y-5 px-4 pt-4 md:px-6 md:pt-8">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <Skeleton className="h-6 w-44" />
      </div>
      <Skeleton className="h-12 w-full rounded-2xl" />
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20 rounded-full" />
        <Skeleton className="h-8 w-24 rounded-full" />
        <Skeleton className="h-8 w-16 rounded-full" />
      </div>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="space-y-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}
    </div>
  );
}
