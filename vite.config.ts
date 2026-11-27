/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { fileURLToPath, URL } from 'node:url';

// BASE_PATH lets the same build run at "/" (custom domain / Vercel) or "/obgynvault/" (GitHub Pages).
const base = process.env.BASE_PATH ?? '/';
// `npm run build:preview` makes one self-contained HTML file (hash routing, no service worker) for sharing a demo.
const singleFile = process.env.SINGLE_FILE === 'true';

export default defineConfig({
  test: { environment: 'node' },
  base: singleFile ? './' : base,
  build: singleFile ? { outDir: 'dist-preview' } : undefined,
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  plugins: [
    react(),
    tailwindcss(),
    singleFile && viteSingleFile(),
    VitePWA({
      disable: singleFile,
      // Registered from src/lib/pwaUpdate.ts, which checks for and applies new versions automatically.
      registerType: 'prompt',
      injectRegister: false,
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'ObGynVault',
        short_name: 'ObGynVault',
        description: 'Clinical knowledge & evidence platform for Obstetrics and Gynaecology. One search. Every guideline.',
        theme_color: '#102A43',
        background_color: '#102A43',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '.',
        scope: '.',
        shortcuts: [
          { name: 'Search', short_name: 'Search', url: './search', icons: [{ src: 'pwa-192.png', sizes: '192x192' }] },
          { name: 'Emergency', short_name: 'Emergency', url: './tools/emergency', icons: [{ src: 'pwa-192.png', sizes: '192x192' }] },
          { name: 'Calculators', short_name: 'Calculators', url: './tools/calculators', icons: [{ src: 'pwa-192.png', sizes: '192x192' }] },
        ],
        icons: [
          { src: 'pwa-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        navigateFallback: 'index.html',
        // Never cache the backend API: auth and review status must be live.
        navigateFallbackDenylist: [/^\/auth/, /^\/rest/],
        globPatterns: ['**/*.{js,css,html,svg,png,webp,woff2}'],
        // iOS launch images are fetched on demand, not precached.
        globIgnores: ['splash/**'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
});
