import { useEffect, useState } from 'react';

/** The reader's display name, kept on this device only. */
const KEY = 'obgynvault.profile.v1';
const EVENT = 'obgynvault:profile';

export function loadName(): string {
  try {
    return (JSON.parse(localStorage.getItem(KEY) || '{}').name as string) || '';
  } catch {
    return '';
  }
}

export function saveName(name: string) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ name: name.trim().slice(0, 40) }));
  } catch {
    /* storage unavailable */
  }
  window.dispatchEvent(new Event(EVENT));
}

/** "Dr. Priya" style salutation; falls back to "Doctor". */
export function salutation(name: string): string {
  const n = name.trim().replace(/^dr\.?\s*/i, '');
  return n ? `Dr. ${n.split(/\s+/)[0]}` : 'Doctor';
}

export function useName(): string {
  const [name, setName] = useState(loadName);
  useEffect(() => {
    const on = () => setName(loadName());
    window.addEventListener(EVENT, on);
    return () => window.removeEventListener(EVENT, on);
  }, []);
  return name;
}
