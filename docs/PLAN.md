# ObGynVault: Phase 0 Plan

India-first clinical knowledge and guideline reference PWA for Obstetricians & Gynaecologists, PG residents, senior residents and fellows.

**Tagline:** One search. Every guideline. Clear clinical answers.
**Source priority:** FOGSI/ICOG, ACOG, RCOG, NICE first; then WHO, FIGO, MoHFW/NHM, ESHRE, ASRM, SMFM, ISUOG and others.

Contents:
1. Project architecture
2. App sitemap
3. Navigation workflow
4. Database plan (Supabase)
5. Screen-by-screen design plan
6. Reusable component structure
7. Phase roadmap
8. Clinical content safety rules

---

## 1. Project architecture

### Stack

| Layer | Choice | Notes |
|---|---|---|
| UI | React 18 + TypeScript (strict) | Function components, hooks |
| Build | Vite 6 | Route-level code splitting |
| Styling | Tailwind CSS v4 | Brand tokens in `src/styles/index.css` (`@theme`) |
| Icons | lucide-react | One icon family across the app |
| Routing | react-router-dom v6 (data router) | `BASE_PATH` env supports GitHub Pages sub-path |
| PWA | vite-plugin-pwa (Workbox) | Precache app shell, auto-update, installable |
| State | React context (`VaultContext`, `ToastContext`) | No global store library needed yet |
| Backend (Phase 2) | Supabase: Postgres, Auth, Storage, Edge Functions | RLS on every table |
| Hosting | GitHub → GitHub Pages or Vercel | CI builds on every push to `main` |

### Folder layout

```
src/
  App.tsx                 Router + providers
  main.tsx                Entry
  styles/index.css        Tailwind + brand tokens
  types/content.ts        Domain model (mirrors DB schema)
  config/modules.ts       The 14 modules, routes, icons, phase
  data/                   SAMPLE data (replaced by Supabase in Phase 3)
    sources.ts            Guideline bodies + priority
    guidelines.ts         Guideline catalogue
    topics.ts             Clinical topics + sections
    updates.ts            Home carousel
  lib/                    Pure helpers (search, format, storage)
  hooks/                  Reusable hooks (useShare)
  store/                  Context providers (vault, toast)
  components/
    brand/                Logo, wordmark
    layout/               AppShell, BottomNav, SideNav, PageHeader
    ui/                   Design-system primitives
    content/              Domain components (TopicCard, GuidelineCard…)
  pages/                  One file per route
docs/PLAN.md              This document
```

### Architectural rules

- **Data access goes through one layer.** Pages import from `@/data` and `@/lib/search` today. In Phase 3 these become a `services/` layer calling Supabase with the same return types, so pages do not change.
- **Types mirror the database.** `src/types/content.ts` is the contract between UI and backend.
- **Every content record carries `status`** (`sample | draft | in_review | verified`). The UI shows a badge and a notice for anything not verified.
- **Offline-first reading.** The service worker precaches the shell; in Phase 5 bookmarked topics are cached for offline ward use.
- **No patient data.** Notes are personal study notes. The UI tells users not to enter identifiers.

---

## 2. App sitemap

```
/                               Home Dashboard
/search?q=                      Clinical Search (topics, guidelines; drugs & algorithms later)
/library                        Library hub
  /library/obstetrics           Obstetrics Library (by category)
  /library/gynaecology          Gynaecology Library (by category)
/guidelines?source=             Guidelines Library (filter by body, specialty)
  /guidelines/:id               Guideline detail
/topics/:slug                   Clinical Topic page (Overview | Guidelines | My notes)
/vault?tab=saved|notes|history  My Vault
/tools                          Tools hub
  /tools/compare                Guideline Comparison            Phase 3
  /tools/ai-assistant           AI Clinical Assistant           Phase 4
  /tools/drug-vault             Drug Vault                      Phase 4
  /tools/calculators            Clinical Calculators            Phase 4
  /tools/emergency              Emergency Algorithms            Phase 4
  /tools/research               Research & Evidence             Phase 4
  /tools/admin                  Admin Dashboard                 Phase 2
--- planned, not yet routed ---
/topics/:slug/compare           Topic-scoped comparison table
/drugs/:slug                    Drug monograph
/calculators/:slug              Individual calculator
/algorithms/:slug               Emergency algorithm (flowchart)
/research/:id                   Evidence item
/auth/sign-in, /auth/callback   Supabase auth
/profile, /settings             Account, specialty, training level
/admin/*                        Content, sources, review queue, users, analytics
```

Module → route mapping (all 14):

| # | Module | Route | Phase |
|---|---|---|---|
| 1 | Home Dashboard | `/` | 1 ✅ |
| 2 | Clinical Search | `/search` | 1 ✅ |
| 3 | Obstetrics Library | `/library/obstetrics` | 1 ✅ |
| 4 | Gynaecology Library | `/library/gynaecology` | 1 ✅ |
| 5 | Guidelines Library | `/guidelines` | 1 ✅ |
| 6 | Clinical Topic Pages | `/topics/:slug` | 1 ✅ |
| 7 | Guideline Comparison | `/tools/compare` → `/topics/:slug/compare` | 3 |
| 8 | AI Clinical Assistant | `/tools/ai-assistant` | 4 |
| 9 | Drug Vault | `/tools/drug-vault` → `/drugs/:slug` | 4 |
| 10 | Clinical Calculators | `/tools/calculators` | 4 |
| 11 | Emergency Algorithms | `/tools/emergency` | 4 |
| 12 | Research & Evidence | `/tools/research` | 4 |
| 13 | My Vault | `/vault` | 1 ✅ (local), 2 (sync) |
| 14 | Admin Dashboard | `/admin` | 2 |

---

## 3. Navigation workflow

### Primary navigation

- **Mobile (< 768px):** fixed bottom nav, 5 tabs: Home · Search · Library · Tools · My Vault. Library stays highlighted on `/library`, `/topics/*` and `/guidelines/*`.
- **Tablet/desktop (≥ 768px):** left side rail with the same 5 destinations; content column max 768px.
- **Secondary screens** use a sticky `PageHeader` with back, title and actions (share, bookmark).

### Core clinical workflow (from the brand board)

```
Search ("Preeclampsia")
  → Explore: Topic page (Key points, sections)
    → Guidelines tab: FOGSI / ACOG / RCOG / NICE documents (priority order)
      → Compare (Phase 3): side-by-side key recommendations + "What's different?"
        → Apply: key recommendations (verified content only)
          → Save: bookmark + personal note → My Vault
```

### Entry points into a topic

Home search bar · Home carousel · Popular topics / Continue reading · Library category lists · Search results · Guideline detail → Related topics · My Vault (Saved, Notes, History).

### State & URL rules

- Search query lives in the URL (`/search?q=`) so results are shareable and survive back navigation.
- Guidelines filter by source lives in the URL (`/guidelines?source=RCOG`), used by the home "Priority sources" tiles.
- My Vault tab lives in the URL (`/vault?tab=notes`).
- Scroll resets to top on every route change.

---

## 4. Database plan (Supabase / Postgres)

### Entity overview

```
sources ─┬─< guidelines ─┬─< guideline_versions
         │               └─< recommendations >─┬─ topics
         │                                     └─ (comparison rows)
topics ──┬─< topic_sections
         ├─< topic_guidelines >── guidelines
         └─< topic_tags
profiles ┬─< bookmarks
         ├─< notes
         ├─< view_history
         └─< search_log
content_reviews (polymorphic: topic | guideline | recommendation | drug | algorithm)
drugs, calculators, algorithms, evidence_items (Phase 4)
```

### Tables

**profiles** (1:1 with `auth.users`)
`id uuid pk = auth.uid()`, `full_name`, `role text check in ('user','editor','reviewer','admin') default 'user'`, `training_level text` (consultant, PG resident, senior resident, fellow), `specialty_interest text[]`, `institution`, `city`, `state`, `nmc_reg_no text null` (optional, for verified badge), `created_at`, `updated_at`.

**sources**
`id text pk` (FOGSI, ACOG, …), `short_name`, `full_name`, `region`, `priority smallint`, `website_url`, `logo_path` (Storage), `is_active bool`.

**guidelines**
`id uuid pk`, `slug text unique`, `source_id fk sources`, `title`, `document_type` (Practice Bulletin, Green-top, NICE guideline, GCPR, Committee Opinion…), `reference` (No. 222, NG133), `specialty text check in ('obstetrics','gynaecology','both')`, `year smallint`, `summary`, `official_url`, `pdf_path` (Storage, only where licence allows), `status verification_status`, `superseded_by uuid null fk guidelines`, `search_vector tsvector generated`, `created_by`, `created_at`, `updated_at`.

**guideline_versions**
`id`, `guideline_id fk`, `version_label`, `published_on date`, `last_reviewed_on date`, `change_summary`, `official_url`. Lets the app show "updated 2024" and keep history.

**topics**
`id uuid pk`, `slug unique`, `title`, `subtitle`, `specialty`, `category`, `overview`, `is_emergency bool`, `status`, `search_vector tsvector generated`, `published_at`, `updated_at`.

**topic_sections**
`id`, `topic_id fk`, `section_key` (definition, risk-factors, diagnosis, management, complications, follow-up, …), `title`, `body_md text`, `sort_order`, `status`.

**topic_tags** — `topic_id`, `tag` (synonyms/abbreviations: PE, HDP, PPH, GDM). Feeds search.

**topic_guidelines** — `topic_id`, `guideline_id`, `relevance smallint`. Many-to-many.

**recommendations** (the heart of Comparison and "Key points")
`id`, `guideline_id fk`, `topic_id fk`, `domain` (diagnosis, timing_of_delivery, antihypertensive, magnesium_sulphate, …), `statement text` (verbatim or close paraphrase), `strength` (as graded by the source), `evidence_level` (as graded by the source), `section_ref` (page/section in source), `status`, `reviewed_by`, `reviewed_at`.
Comparison view = `recommendations` pivoted by `domain × source` for one topic.

**content_reviews** — `id`, `entity_type`, `entity_id`, `reviewer_id`, `decision` (approve, request_changes), `comments`, `created_at`. Nothing reaches `verified` without a row here.

**bookmarks** — `user_id`, `kind` (topic, guideline, drug, algorithm), `target_id`, `created_at`; pk `(user_id, kind, target_id)`.

**notes** — `id`, `user_id`, `kind`, `target_id`, `body text`, `updated_at`.

**view_history** — `user_id`, `kind`, `target_id`, `viewed_at`. Keep last 100 per user.

**search_log** — `id`, `user_id null`, `query`, `result_count`, `created_at`. Drives "Trending" and content gap analysis.

**updates** — home carousel/news: `id`, `label`, `title`, `subtitle`, `link`, `starts_at`, `ends_at`.

Phase 4 tables (shape only): `drugs` (name, class, pregnancy/lactation notes, sources; no dosing until reviewed), `calculators` (key, name, inputs schema, formula ref, source), `algorithms` (key, title, steps jsonb, source), `evidence_items` (title, type, journal, year, doi, summary).

### Search

- `tsvector` columns on topics, guidelines, recommendations, weighted (title A, tags B, summary C).
- `pg_trgm` index on titles for typo tolerance ("preclampsia").
- One RPC `search_all(q text, kinds text[])` returning `{kind, id, title, subtitle, score}`, matching the `SearchResult` type already used by the UI.

### Security (RLS)

- Public read: `sources`, and `topics/guidelines/topic_sections/recommendations` **where status = 'verified'**.
- Editors/reviewers: read all statuses; editors insert/update drafts; only reviewers can set `verified`.
- User data (`bookmarks`, `notes`, `view_history`): `user_id = auth.uid()` for all operations.
- Admin: full access via `role = 'admin'` check in a `is_admin()` SQL function.

### Auth

Supabase Auth with email OTP / magic link and Google. Optional NMC registration field for a "verified clinician" badge later.

---

## 5. Screen-by-screen design plan

Design language: premium medical SaaS. Navy `#102A43` text and hero surfaces, Teal `#20A69A` actions and active states, Amber `#E5A34C` highlights/bookmarks/sample badges, Background `#F4F7FA`, White cards with soft shadow and 16–24px radius. Manrope 400–800. Lucide icons at 20–24px. Touch targets ≥ 44px.

| Screen | Purpose | Layout (mobile) | Key states |
|---|---|---|---|
| **Home** ✅ | Orient and jump in | Logo + bell; greeting; search bar (opens Search); featured carousel (navy→teal gradient); 2×3 module grid (Obstetrics, Gynaecology, Guidelines, AI, Drugs, Calculators with "Soon"); Emergency quick access; Priority sources (FOGSI/ACOG/RCOG/NICE); Continue reading (history) or Popular topics; sample notice | First visit shows Popular; returning shows Continue reading |
| **Clinical Search** ✅ | One search across everything | Search field auto-focused; filter chips All/Topics/Guidelines (+counts), Drugs/Algorithms disabled; Top results (first topic highlighted in amber) | Empty: recent + trending; no results: empty state with clear |
| **Library hub** ✅ | Browse by specialty | Obstetrics card, Gynaecology card, Guidelines Library (navy) | — |
| **Obstetrics / Gynaecology Library** ✅ | Browse topics | Filter field; category chips; grouped topic lists | No match message |
| **Guidelines Library** ✅ | Browse documents | Filter field; source chips (priority order); specialty segmented control; count; guideline cards sorted by source priority then year | Source info line when filtered |
| **Guideline detail** ✅ | Document metadata | Source + status badges; title; meta card (issuer, type, year); scope; official link button (disabled until verified); related topics; notes | — |
| **Clinical Topic** ✅ | Core reading page | Header (share, bookmark); tabs Overview/Guidelines/My notes; breadcrumb + status; title/subtitle; source badges; Key points (teal panel); overview; accordion sections (Definition, Risk factors, Diagnosis, Management, Complications, Follow-up); Compare teaser | Bookmark toast "Saved to My Vault" |
| **My Vault** ✅ | Personal library | Tabs Saved (n) / Notes (n) / History; cards reuse TopicCard/GuidelineCard | Empty states for each tab |
| **Tools hub** ✅ | Later modules | List with phase badges | — |
| **Coming soon** ✅ | Placeholder per tool | Big icon, phase pill, description | — |
| Guideline Comparison | Side-by-side | Source tabs (FOGSI/ACOG/RCOG/NICE); table rows = domains, columns = selected sources; amber "What's different?" card | Only verified recommendations shown |
| AI Assistant | Source-grounded Q&A | Chat; every answer lists cited guidelines; disclaimer | Refuses without sources |
| Drug Vault | Drug reference | Search; drug card: class, pregnancy/lactation, source links | Dosing only after review |
| Calculators | EDD/GA, Bishop, BMI, etc. | Grid → calculator form → result with source | — |
| Emergency Algorithms | PPH, eclampsia, sepsis | Large-type step flow, timer, red accent | Works offline |
| Research | Evidence feed | Filter by topic/type; cards with DOI | — |
| Admin | Content ops | Sidebar: Topics, Guidelines, Recommendations, Sources, Review queue, Users, Search analytics | Role-gated |

---

## 6. Reusable component structure

```
components/
  brand/
    Logo, LogoMark, Wordmark        SVG mark from logoPaths.ts (also favicon + PWA icons)
  layout/
    AppShell                        SideNav + <Outlet/> + BottomNav, scroll reset
    BottomNav                       5-tab mobile nav (navItems.ts)
    SideNav                         Desktop rail (same navItems.ts)
    PageHeader                      Sticky back/title/actions
  ui/                               Design-system primitives, no domain knowledge
    Card                            White rounded surface
    Chip                            Filter/tab chip with active + count
    SearchField                     Search input with clear
    SectionHeader                   Title + "View all"
    AccordionItem                   Expandable section (a11y: aria-expanded/controls)
    StatusBadge                     sample/draft/in_review/verified
    SampleNotice                    Mandatory unverified-content banner
    EmptyState                      Icon + title + body
  content/                          Domain components
    TopicCard                       Topic row with specialty/emergency icon + bookmark
    GuidelineCard                   Guideline row with source + status + bookmark
    SourceBadge                     Coloured body badge (FOGSI, ACOG…)
    BookmarkButton                  Toggle + toast, uses VaultContext
    NoteEditor                      Personal note for any item
    ModuleTile                      Home grid tile with "Soon" flag
    sectionIcons, specialtyStyle    Icon/colour maps
store/
  VaultContext                      bookmarks, notes, history, recent searches (localStorage → Supabase)
  ToastContext                      Single toast ("Saved to My Vault")
hooks/
  useShare                          Web Share API with copy-link fallback
lib/
  search                            Scored client search (→ Supabase RPC)
  format                            Dates, greeting, cx()
  storage                           Safe localStorage
```

Planned for later phases: `ComparisonTable`, `RecommendationRow` (source + strength + evidence level), `CitationList`, `ChatMessage`, `CalculatorForm`, `AlgorithmStep`, `DrugCard`, `AdminTable`, `ReviewPanel`.

---

## 7. Phase roadmap

| Phase | Scope | Status |
|---|---|---|
| 0 | Architecture, sitemap, navigation, DB plan, screens, components | ✅ this document |
| 1 | Branding + frontend: Home, Search, Libraries, Guidelines, Topic page, My Vault (local), PWA shell | ✅ |
| 2 | Supabase: auth, profiles, roles, RLS, bookmarks/notes sync, Admin review queue | ✅ code + SQL (needs project keys) |
| 3 | Knowledge engine: real catalogue (verified), recommendations table, full-text search RPC, Guideline Comparison | ◐ Compare + full-text search live; 8 draft topic reviews |
| 4 | Clinical tools: Calculators, Emergency Algorithms, Drug Vault, Research feed, AI Assistant (source-grounded, cited) | ◐ Calculators + Emergency live; Drug Vault waits for pharmacology review; AI needs an API key |
| 5 | PWA hardening: offline topics, push for guideline updates, analytics, testing, custom domain | |

---

## 8. Clinical content safety rules

1. No recommendation, threshold, dose or timing is shown unless its record is `verified` and cites guideline, year and section.
2. Sample/draft content always shows `StatusBadge` and `SampleNotice`.
3. Comparison shows each body's own wording; ObGynVault does not merge or "average" guidance.
4. AI Assistant answers only from verified records and lists its sources; otherwise it says it cannot answer.
5. Drug dosing is added only after pharmacology review.
6. Every page links to the original source document.
7. Notes must not contain patient identifiers (stated in the UI).
