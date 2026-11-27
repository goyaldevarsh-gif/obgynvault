// Single source of truth for the ObGynVault mark (shield + cross + uterus + leaves).
// Drawn on a 64x64 grid so it stays crisp from 16px favicons to 512px app icons.
export const LOGO_PATHS = {
  shield: 'M32 4 L55 15 V33 C55 46 45 55 32 60 C19 55 9 46 9 33 V15 Z',
  cross: 'M29.5 9.5h5v4.5h4.5v5h-4.5v4.5h-5v-4.5h-4.5v-5h4.5z',
  uterus:
    'M23 31 C23 26 41 26 41 31 C41 36 36 39 34.5 42.5 V47 M29.5 47 V42.5 C28 39 23 36 23 31 M23 30 C19 26.5 14.5 28 15.5 32.5 M41 30 C45 26.5 49.5 28 48.5 32.5',
  leafLeft: 'M32 57 C21 53 13.5 45 12.5 37 C22 39 29.5 46 32 57 Z',
  leafRight: 'M32 57 C43 53 50.5 45 51.5 37 C42 39 34.5 46 32 57 Z',
} as const;
