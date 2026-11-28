/**
 * Backend adapter. The app talks only to this interface, so the provider (Firebase today)
 * can be swapped without touching pages or stores. With no config the app runs fully on-device.
 */
export type Role = 'reader' | 'editor' | 'admin';
export type ReviewStatus = 'draft' | 'in_review' | 'changes_requested' | 'verified';

export interface BackendUser {
  id: string;
  email: string | null;
  name: string | null;
}

export interface ReviewRecord {
  topic_slug: string;
  status: ReviewStatus;
  comment: string | null;
  reviewer_name: string | null;
  created_at: string;
}

/** A reader's own check of a topic against its cited guidelines (one per reader per topic; latest wins). */
export type CheckVerdict = 'matches' | 'problem';
export interface ReaderCheck {
  topic_slug: string;
  user_id: string;
  verdict: CheckVerdict;
  note: string | null;
  reader_name: string | null;
  created_at: string;
}

export interface Backend {
  /** Calls back with the signed-in user (or null) now and on every change. Returns an unsubscribe. */
  onUser(cb: (u: BackendUser | null) => void): () => void;
  /** Sends a passwordless sign-in link. Returns an error message or null. */
  sendEmailLink(email: string): Promise<string | null>;
  signInWithGoogle(): Promise<string | null>;
  signOut(): Promise<void>;
  /** Reads the user's role, creating a reader profile on first sign-in. */
  getRole(u: BackendUser): Promise<Role>;
  loadVault(uid: string): Promise<unknown | null>;
  saveVault(uid: string, data: unknown): Promise<string | null>;
  listReviews(): Promise<ReviewRecord[]>;
  listReaderChecks(): Promise<ReaderCheck[]>;
  setReaderCheck(c: { slug: string; uid: string; verdict: CheckVerdict; note: string | null; name: string | null }): Promise<string | null>;
  /** True when App Check (reCAPTCHA Enterprise) is configured, which Firebase AI Logic requires. */
  aiReady: boolean;
  /** Asks Gemini (Firebase AI Logic) with a system instruction. Returns the answer text or an error. */
  askAI(question: string, system: string): Promise<{ text: string } | { error: string }>;
  addReview(r: { slug: string; status: ReviewStatus; comment: string | null; reviewerId: string; reviewerName: string | null }): Promise<string | null>;
}
