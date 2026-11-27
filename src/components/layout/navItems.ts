import { Bookmark, Home, Library, Search, Wrench } from 'lucide-react';

/** Bottom navigation (mobile) and primary side nav (desktop). Order matches the brand mockup. */
export const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/search', label: 'Search', icon: Search, end: false },
  { to: '/library', label: 'Library', icon: Library, end: false, match: ['/library', '/topics', '/guidelines'] },
  { to: '/tools', label: 'Tools', icon: Wrench, end: false },
  { to: '/vault', label: 'My Vault', icon: Bookmark, end: false },
] as const;

export function isNavActive(pathname: string, item: (typeof NAV_ITEMS)[number]): boolean {
  if (item.end) return pathname === item.to;
  const prefixes = 'match' in item ? item.match : [item.to];
  return prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}
