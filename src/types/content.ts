/**
 * Core content model. Mirrors the planned Supabase schema (docs/PLAN.md §4) so the
 * static sample data in src/data can be swapped for API calls without touching UI code.
 */

export type Specialty = 'obstetrics' | 'gynaecology';

/** Guideline-issuing bodies. Priority order for display: FOGSI, ACOG, RCOG, NICE, then the rest. */
export type SourceId = 'FOGSI' | 'ACOG' | 'RCOG' | 'NICE' | 'WHO' | 'FIGO' | 'MOHFW' | 'ESHRE' | 'ASRM';

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
}

export interface TopicSection {
  id: string;
  title: string;
  icon: string; // lucide icon key, resolved in components/content/sectionIcons
  body: string[];
}

export interface Topic {
  slug: string;
  title: string;
  subtitle: string;
  specialty: Specialty;
  category: string;
  tags: string[];
  overview: string;
  keyPoints: string[];
  sections: TopicSection[];
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
