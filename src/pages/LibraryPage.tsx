import { BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { SPECIALTY } from '@/components/content';
import { GUIDELINES, SOURCES, topicsBySpecialty } from '@/data';
import { SampleNotice } from '@/components/ui';
import type { Specialty } from '@/types/content';
import { cx } from '@/lib/format';

export default function LibraryPage() {
  const specialties: Specialty[] = ['obstetrics', 'gynaecology'];
  return (
    <div>
      <PageHeader title="Library" back={false} />
      <div className="space-y-3 px-4 md:px-6">
        {specialties.map((s) => {
          const sp = SPECIALTY[s];
          const topics = topicsBySpecialty(s);
          const Icon = sp.icon;
          return (
            <Link key={s} to={`/library/${s}`} className="flex items-center gap-4 rounded-3xl bg-surface p-5 shadow-card ring-1 ring-navy-100/60 transition hover:ring-teal/50">
              <span className={cx('grid size-14 place-items-center rounded-2xl', sp.tint)}>
                <Icon className={cx('size-7', sp.fg)} aria-hidden />
              </span>
              <span className="flex-1">
                <span className="block text-lg font-extrabold text-navy">{sp.label}</span>
                <span className="block text-sm text-navy-500">
                  {topics.length} topics · {new Set(topics.map((t) => t.category)).size} categories
                </span>
              </span>
              <ChevronRight className="size-5 text-navy-300" aria-hidden />
            </Link>
          );
        })}
        <Link to="/guidelines" className="flex items-center gap-4 rounded-3xl bg-navy p-5 text-white shadow-float transition hover:bg-navy-800">
          <span className="grid size-14 place-items-center rounded-2xl bg-white/10">
            <BookOpen className="size-7 text-teal" aria-hidden />
          </span>
          <span className="flex-1">
            <span className="block text-lg font-extrabold">Guidelines Library</span>
            <span className="block text-sm text-white/70">
              {GUIDELINES.length} documents · {SOURCES.length} organisations
            </span>
          </span>
          <ChevronRight className="size-5 text-white/50" aria-hidden />
        </Link>
        <SampleNotice compact className="mt-4" />
      </div>
    </div>
  );
}
