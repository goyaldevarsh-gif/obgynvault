import type { HTMLAttributes } from 'react';
import { cx } from '@/lib/format';

export function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60', className)} {...rest} />;
}
