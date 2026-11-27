import { ChevronDown } from 'lucide-react';
import { useId, useState, type ReactNode } from 'react';
import { cx } from '@/lib/format';

interface Props {
  title: string;
  icon?: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
  id?: string;
  /** Controlled mode: pass open + onToggle. */
  open?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({ title, icon, defaultOpen = false, children, id, open: openProp, onToggle }: Props) {
  const [openState, setOpenState] = useState(defaultOpen);
  const open = openProp ?? openState;
  const setOpen = (fn: (o: boolean) => boolean) => (onToggle ? onToggle() : setOpenState(fn));
  const panelId = useId();
  return (
    <div id={id} className="scroll-mt-28 border-b border-navy-100 last:border-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-3 px-4 py-4 text-left"
      >
        {icon && <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">{icon}</span>}
        <span className="flex-1 font-display text-[16px] font-bold leading-snug text-navy">{title}</span>
        <ChevronDown className={cx('size-5 text-navy-400 transition-transform', open && 'rotate-180')} aria-hidden />
      </button>
      {open && (
        <div id={panelId} className="space-y-4 border-t border-navy-100/70 px-4 pb-5 pt-4 text-[15px] leading-relaxed text-navy-700 md:pl-16">
          {children}
        </div>
      )}
    </div>
  );
}
