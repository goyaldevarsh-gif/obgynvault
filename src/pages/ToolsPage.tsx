import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { TOOL_MODULES } from '@/config/modules';
import { cx } from '@/lib/format';

export default function ToolsPage() {
  return (
    <div>
      <PageHeader title="Clinical Tools" back={false} />
      <div className="space-y-2.5 px-4 md:px-6">
        <p className="pb-1 text-sm text-navy-500">These modules are planned for later phases. Each one opens a preview of what it will do.</p>
        {TOOL_MODULES.map((m) => {
          const Icon = m.icon;
          return (
            <Link key={m.key} to={m.to} className="flex items-center gap-3 rounded-2xl bg-surface p-3 shadow-card ring-1 ring-navy-100/60 transition hover:ring-teal/50">
              <span className={cx('grid size-11 place-items-center rounded-xl', m.tint)}>
                <Icon className={cx('size-5', m.fg)} aria-hidden />
              </span>
              <span className="flex-1">
                <span className="block text-[15px] font-bold text-navy">{m.label}</span>
                <span className="block text-xs text-navy-500">{m.description}</span>
              </span>
              <span className="rounded-full bg-navy-100 px-2 py-0.5 text-[10px] font-bold uppercase text-navy-500">Phase {m.phase}</span>
              <ChevronRight className="size-5 text-navy-300" aria-hidden />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
