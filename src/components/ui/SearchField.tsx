import { Search, X } from 'lucide-react';
import { forwardRef, type InputHTMLAttributes } from 'react';
import { cx } from '@/lib/format';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (v: string) => void;
  onClear?: () => void;
}

export const SearchField = forwardRef<HTMLInputElement, Props>(function SearchField({ value, onChange, onClear, className, ...rest }, ref) {
  return (
    <label className={cx('flex items-center gap-2.5 rounded-2xl bg-surface px-4 py-3 shadow-card ring-1 ring-navy-100 focus-within:ring-2 focus-within:ring-teal', className)}>
      <Search className="size-5 shrink-0 text-navy-400" aria-hidden />
      <input
        ref={ref}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-w-0 flex-1 bg-transparent text-[15px] font-medium text-navy placeholder:text-navy-400 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        {...rest}
      />
      {value && (
        <button type="button" onClick={onClear ?? (() => onChange(''))} aria-label="Clear search" className="rounded-full bg-navy-100 p-0.5 text-navy-500 hover:bg-navy-200">
          <X className="size-3.5" />
        </button>
      )}
    </label>
  );
});
