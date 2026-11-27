import { LOGO_PATHS as P } from './logoPaths';
import { cx } from '@/lib/format';

export function LogoMark({ className = 'size-9', inverted = false }: { className?: string; inverted?: boolean }) {
  const line = inverted ? '#FFFFFF' : '#102A43';
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="ObGynVault">
      <path d={P.shield} fill={inverted ? 'none' : '#FFFFFF'} stroke={line} strokeWidth={4} strokeLinejoin="round" />
      <path d={P.leafLeft} fill="#20A69A" />
      <path d={P.leafRight} fill="#E5A34C" />
      <path d={P.uterus} fill="none" stroke={line} strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" />
      <path d={P.cross} fill="#20A69A" />
    </svg>
  );
}

export function Wordmark({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cx('font-extrabold tracking-tight', inverted ? 'text-white' : 'text-navy', className)}>
      ObGyn<span className="text-teal">Vault</span>
    </span>
  );
}

export function Logo({ inverted = false, size = 'md' }: { inverted?: boolean; size?: 'sm' | 'md' | 'lg' }) {
  const mark = { sm: 'size-7', md: 'size-9', lg: 'size-14' }[size];
  const text = { sm: 'text-lg', md: 'text-xl', lg: 'text-3xl' }[size];
  return (
    <span className="inline-flex items-center gap-2">
      <LogoMark className={mark} inverted={inverted} />
      <Wordmark className={text} inverted={inverted} />
    </span>
  );
}
