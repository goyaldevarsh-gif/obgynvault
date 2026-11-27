import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SectionHeader({ title, to, action = 'View all' }: { title: string; to?: string; action?: string }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <h2 className="text-[15px] font-bold text-navy">{title}</h2>
      {to && (
        <Link to={to} className="inline-flex items-center text-[13px] font-semibold text-teal-700 hover:text-teal">
          {action}
          <ChevronRight className="size-4" />
        </Link>
      )}
    </div>
  );
}
