# ObGynVault

**Clinical Knowledge & Evidence Platform** for Obstetrics and Gynaecology.
One search. Every guideline. Clear clinical answers.

India-first PWA for ObGyn consultants, PG residents, senior residents and fellows, bringing together guidance from FOGSI/ICOG, ACOG, RCOG and NICE first, then WHO, FIGO and other bodies.

> ⚠️ **Phase 1 preview.** All clinical content in this repository is **sample data** for UI demonstration. Guideline titles, numbers, years and text are placeholders and are **not verified clinical guidance**.

## What's in Phase 1

- Home dashboard, functional bottom navigation (mobile) and side rail (desktop)
- Clinical Search across topics and guidelines (URL-synced, recent + trending searches)
- Obstetrics and Gynaecology libraries (category filters)
- Guidelines Library (filter by source in priority order, specialty)
- Clinical Topic page (key points, section accordions, linked guidelines, notes)
- Guideline detail page
- My Vault: bookmarks, notes and history (stored on device)
- Installable PWA with offline app shell
- Placeholder screens for later modules (Compare, AI, Drug Vault, Calculators, Emergency, Research, Admin)

The full plan (architecture, sitemap, navigation, database, screens, components, roadmap) is in [`docs/PLAN.md`](docs/PLAN.md).

## Tech stack

React 18 · TypeScript · Vite 6 · Tailwind CSS v4 · lucide-react · react-router · vite-plugin-pwa. Firebase (optional, free Spark plan) powers sign-in, sync and the clinical review queue.

### Switching on the backend (Phase 2)

1. Create a project at console.firebase.google.com and add a **Web app**.
2. Authentication → Sign-in method: enable **Google** and **Email/Password → Email link**. Add your site's domain (e.g. `<user>.github.io`) under Authorized domains.
3. Firestore Database → Create database, then paste [`firestore.rules`](firestore.rules) into the Rules tab and publish.
4. Copy `apiKey`, `authDomain`, `projectId` and `appId` from the web app config into `.env` as `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_APP_ID` (for GitHub Pages, add repository secrets with the same names). These are public web values, not secrets; the rules protect the data.
5. Sign in from My Vault, then in Firestore → `users` → your document, change `role` to `admin` (or `editor`).
6. Open Tools → Admin to review topics. The latest review sets each topic's status; "verified" removes the draft warning.

The backend sits behind one adapter (`src/lib/backend`), so another provider can be swapped in without touching pages.

Without these keys the app runs fully on-device.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build
```

For hosting under a sub-path (e.g. GitHub Pages at `/obgynvault/`):

```bash
BASE_PATH=/obgynvault/ npm run build
```

## Deployment

`.github/workflows/deploy.yml` builds on every push to `main` and publishes to GitHub Pages. To enable it: make the repository public (or use a paid plan), then in **Settings → Pages** set **Source** to **GitHub Actions**.

## Project structure

```
src/
  components/  brand · layout · ui · content
  config/      module registry (14 modules, phases)
  data/        SAMPLE data (to be replaced by the backend catalogue)
  hooks/ lib/ store/ types/
  pages/       one file per route
docs/PLAN.md   Phase 0 plan
```
