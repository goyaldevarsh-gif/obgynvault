import { ChevronDown } from 'lucide-react';
import { useId, useState, type ReactNode } from 'react';
import { cx } from '@/lib/format';

interface Props {
  title: string;
  icon?: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
  id?: string;
}

export function AccordionItem({ title, icon, defaultOpen = false, children, id }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  return (
    <div id={id} className="scroll-mt-28 border-b border-navy-100 last:border-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
      >
        {icon && <span className="text-navy-500">{icon}</span>}
        <span className="flex-1 text-[15px] font-semibold text-navy">{title}</span>
        <ChevronDown className={cx('size-5 text-navy-400 transition-transform', open && 'rotate-180')} aria-hidden />
      </button>
      {open && (
        <div id={panelId} className="space-y-2 px-4 pb-4 pl-12 text-sm leading-relaxed text-navy-600">
          {children}
        </div>
      )}
    </div>
  );
}
