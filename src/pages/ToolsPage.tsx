import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { TOOL_MODULES } from '@/config/modules';
import { cx } from '@/lib/format';
import { useAuth } from '@/store/AuthContext';

export default function ToolsPage() {
  const { role } = useAuth();
  const isStaff = role === 'admin' || role === 'editor';
  // Only working tools; Admin only for admins/editors.
  const tools = TOOL_MODULES.filter((m) => m.phase === 1 && (m.key !== 'admin' || isStaff));
  return (
    <div>
      <PageHeader title="Clinical Tools" back={false} />
      <div className="space-y-2.5 px-4 md:px-6">
        {tools.map((m) => {
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
              <ChevronRight className="size-5 text-navy-300" aria-hidden />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
