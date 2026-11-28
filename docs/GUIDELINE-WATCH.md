# Guideline Watch (weekly)

Runs every Monday 8:47 AM IST as a scheduled task, in a fresh session.

## Policy (owner, 28 Nov 2026)
- Guideline changes go **straight into the topic text on main**. No pull requests, no waiting for approval.
- Every added or changed statement is flagged so readers see it is **not yet verified**:
  `update: { date: 'YYYY-MM-DD', guidelineId: '<source>' }` on the `CitedPoint`. The same guideline must be in `refs`.
- `WATCH.pending[slug]` in `src/data/watch.ts` holds `{ guidelineId, note, detected, changes[] }`. The topic shows an amber
  "Updated … not yet verified" banner and What's new lists it under "Updated, not yet verified".
- Readers can record "Matches source" or "Found a problem" on any topic (Firestore `readerChecks`). Problems appear in Admin.
- The run ends with a Hinglish summary listing each changed line for the owner to verify.

## Clearing a flag after verification
A clinician removes `update` from the checked points and deletes the `WATCH.pending[slug]` entry, then pushes.

## Rules
- Never invent recommendations or doses; cite guidelineId + locator for every point.
- Record unread sources in the topic's `editorNote`.
- Run `npx tsc --noEmit -p .` and `npx vitest run` before pushing (tests enforce the flag rules).
