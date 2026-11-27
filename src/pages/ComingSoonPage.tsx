import { Link, useParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { MODULES } from '@/config/modules';
import { cx } from '@/lib/format';
import NotFoundPage from './NotFoundPage';

export default function ComingSoonPage() {
  const { module = '' } = useParams();
  const m = MODULES.find((x) => x.to === `/tools/${module}`);
  if (!m) return <NotFoundPage />;
  const Icon = m.icon;
  return (
    <div>
      <PageHeader title={m.label} />
      <div className="flex flex-col items-center px-6 py-12 text-center">
        <span className={cx('mb-5 grid size-20 place-items-center rounded-3xl', m.tint)}>
          <Icon className={cx('size-10', m.fg)} aria-hidden />
        </span>
        <span className="mb-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-700">Planned · Phase {m.phase}</span>
        <h2 className="text-2xl font-extrabold text-navy">{m.label}</h2>
        <p className="mt-2 max-w-sm text-sm text-navy-500">{m.description}. This module is part of the ObGynVault roadmap and is not built yet.</p>
        <Link to="/" className="mt-6 rounded-xl bg-teal px-5 py-2.5 text-sm font-bold text-white hover:bg-teal-600">Back to home</Link>
      </div>
    </div>
  );
}
