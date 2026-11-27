/**
 * Core content model. Mirrors the planned backend schema (docs/PLAN.md §4) so the
 * static sample data in src/data can be swapped for API calls without touching UI code.
 */

export type Specialty = 'obstetrics' | 'gynaecology';

/** Guideline-issuing bodies. Priority order for display: FOGSI, ACOG, RCOG, NICE, then the rest. */
export type SourceId = 'FOGSI' | 'ACOG' | 'RCOG' | 'NICE' | 'WHO' | 'FIGO' | 'MOHFW' | 'ESHRE' | 'ASRM' | 'BSH' | 'SMFM' | 'ISUOG';

export interface GuidelineSource {
  id: SourceId;
  shortName: string;
  fullName: string;
  region: string;
  priority: number; // lower = shown first
  color: string; // badge accent
}

/**
 * Every record carries a verification status. The UI must never present
 * anything other than 'verified' as clinical guidance.
 */
export type VerificationStatus = 'sample' | 'draft' | 'in_review' | 'verified';

export interface Guideline {
  id: string;
  sourceId: SourceId;
  title: string;
  documentType: string; // e.g. "Practice Bulletin", "Green-top Guideline", "NICE guideline"
  reference?: string; // e.g. "No. 222", "NG133"
  year?: number;
  specialty: Specialty;
  topicSlugs: string[];
  summary: string;
  status: VerificationStatus;
  officialUrl?: string;
}

/** Pointer into a guideline: which document and where in it (rec number, section, page). */
export interface Citation {
  guidelineId: string;
  locator?: string; // e.g. "1.5.3", "§6.2", "p. 14"
}

/** One statement shown to the user. Clinical statements must carry at least one citation. */
export interface CitedPoint {
  /** Optional sub-heading shown above this point (starts a new sub-section). */
  heading?: string;
  text: string;
  refs?: Citation[];
  /** Optional table shown under the text (e.g. shock classification, monitoring schedule). */
  table?: { caption?: string; columns: string[]; rows: string[][] };
  /** Render as a bullet in a list rather than a paragraph. */
  bullet?: boolean;
}

export interface TopicSection {
  id: string;
  title: string;
  icon: string; // lucide icon key, resolved in components/content/sectionIcons
  body: CitedPoint[];
}

/** "Where guidelines differ": one clinical question, answered per source in that source's own words. */
export interface GuidelinePosition {
  domain: string;
  entries: Array<{ guidelineId: string; text: string; locator?: string }>;
}

export interface Topic {
  slug: string;
  title: string;
  subtitle: string;
  specialty: Specialty;
  category: string;
  tags: string[];
  overview: string;
  keyPoints: CitedPoint[];
  sections: TopicSection[];
  positions?: GuidelinePosition[];
  /** Plain-language note on what was and wasn't verifiable when the draft was written. */
  editorNote?: string;
  guidelineIds: string[];
  updatedAt: string; // ISO date
  status: VerificationStatus;
  emergency?: boolean;
}

export interface UpdateItem {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  to: string;
}

export type BookmarkKind = 'topic' | 'guideline';

export interface Bookmark {
  kind: BookmarkKind;
  id: string; // topic slug or guideline id
  savedAt: string;
}

export interface Note {
  id: string;
  kind: BookmarkKind;
  targetId: string;
  text: string;
  updatedAt: string;
}

export interface HistoryEntry {
  kind: BookmarkKind;
  id: string;
  viewedAt: string;
}
