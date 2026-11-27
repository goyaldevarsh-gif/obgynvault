import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export function EmptyState({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col items-center px-6 py-12 text-center">
      <div className="mb-4 grid size-14 place-items-center rounded-2xl bg-teal-50 text-teal">
        <Icon className="size-7" aria-hidden />
      </div>
      <h3 className="text-base font-bold text-navy">{title}</h3>
      {children && <div className="mt-1.5 max-w-xs text-sm text-navy-500">{children}</div>}
    </div>
  );
}
