import { useEffect, useState } from 'react';
import { FEED } from '@/data';

const KEY = 'obgynvault.feed-seen.v1';
const EVENT = 'obgynvault:feed-seen';

function seenIds(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

export function markFeedSeen() {
  try {
    localStorage.setItem(KEY, JSON.stringify(FEED.map((f) => f.id)));
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(EVENT));
}

/** Number of feed items this reader has not opened yet. */
export function useUnreadCount(): number {
  const calc = () => {
    const seen = new Set(seenIds());
    return FEED.filter((f) => !seen.has(f.id)).length;
  };
  const [n, setN] = useState(calc);
  useEffect(() => {
    const on = () => setN(calc());
    window.addEventListener(EVENT, on);
    return () => window.removeEventListener(EVENT, on);
  }, []);
  return n;
}
