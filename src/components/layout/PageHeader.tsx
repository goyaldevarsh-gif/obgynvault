import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

/** Sticky screen header: back arrow, title and right-aligned actions (share, bookmark). */
export function PageHeader({ title, back = true, actions }: { title: string; back?: boolean; actions?: ReactNode }) {
  const navigate = useNavigate();
  const goBack = () => (window.history.length > 1 ? navigate(-1) : navigate('/'));
  return (
    <header className="sticky top-0 z-30 flex items-center gap-2 bg-canvas/90 px-3 py-3 backdrop-blur md:px-6">
      {back && (
        <button type="button" onClick={goBack} aria-label="Go back" className="grid size-9 place-items-center rounded-full text-navy hover:bg-surface">
          <ArrowLeft className="size-5" />
        </button>
      )}
      <h1 className="min-w-0 flex-1 truncate text-lg font-bold text-navy">{title}</h1>
      {actions && <div className="flex items-center gap-1">{actions}</div>}
    </header>
  );
}
