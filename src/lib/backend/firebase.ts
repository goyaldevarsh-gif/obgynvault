import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, serverTimestamp, setDoc, Timestamp } from 'firebase/firestore';
import type { Backend, ReaderCheck, Role, ReviewRecord } from './types';

const EMAIL_KEY = 'obgynvault.signin-email';

/**
 * Firestore layout (rules in firestore.rules):
 *   users/{uid}         { email, name, role }   role is reader on creation; an admin changes it in the console
 *   vaults/{uid}        { data, updatedAt }     owner only
 *   topicReviews/{id}   { topicSlug, status, comment, reviewerId, reviewerName, createdAt }   public read, editors write
 *   readerChecks/{slug}__{uid}  { topicSlug, uid, verdict, note, readerName, createdAt }   public read, each reader writes own
 */
export function createFirebaseBackend(config: { apiKey: string; authDomain: string; projectId: string; appId: string }): Backend {
  const app = initializeApp(config);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const msg = (e: unknown) => (e instanceof Error ? e.message.replace(/^Firebase: /, '') : 'Something went wrong.');

  // Complete an email-link sign-in when the user opens the link.
  if (isSignInWithEmailLink(auth, window.location.href)) {
    const email = localStorage.getItem(EMAIL_KEY) ?? window.prompt('Confirm your email to finish signing in');
    if (email) {
      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          localStorage.removeItem(EMAIL_KEY);
          window.history.replaceState(null, '', window.location.pathname + window.location.hash);
        })
        .catch(() => undefined);
    }
  }

  return {
    onUser(cb) {
      return onAuthStateChanged(auth, (u) => cb(u ? { id: u.uid, email: u.email, name: u.displayName } : null));
    },
    async sendEmailLink(email) {
      try {
        await sendSignInLinkToEmail(auth, email, { url: window.location.origin + window.location.pathname, handleCodeInApp: true });
        localStorage.setItem(EMAIL_KEY, email);
        return null;
      } catch (e) {
        return msg(e);
      }
    },
    async signInWithGoogle() {
      try {
        await signInWithPopup(auth, new GoogleAuthProvider());
        return null;
      } catch (e) {
        return msg(e);
      }
    },
    async signOut() {
      await signOut(auth);
    },
    async getRole(u) {
      const ref = doc(db, 'users', u.id);
      const snap = await getDoc(ref);
      if (snap.exists()) return (snap.data().role as Role) ?? 'reader';
      await setDoc(ref, { email: u.email, name: u.name, role: 'reader' }).catch(() => undefined);
      return 'reader';
    },
    async loadVault(uid) {
      const snap = await getDoc(doc(db, 'vaults', uid));
      return snap.exists() ? (snap.data().data ?? null) : null;
    },
    async saveVault(uid, data) {
      try {
        // JSON round-trip drops undefined fields, which Firestore rejects.
        await setDoc(doc(db, 'vaults', uid), { data: JSON.parse(JSON.stringify(data)), updatedAt: serverTimestamp() });
        return null;
      } catch (e) {
        return msg(e);
      }
    },
    async listReviews() {
      const snap = await getDocs(collection(db, 'topicReviews'));
      return snap.docs
        .map((d): ReviewRecord => {
          const x = d.data();
          const at = x.createdAt instanceof Timestamp ? x.createdAt.toDate().toISOString() : new Date().toISOString();
          return { topic_slug: x.topicSlug, status: x.status, comment: x.comment ?? null, reviewer_name: x.reviewerName ?? null, created_at: at };
        })
        .sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
    },
    async listReaderChecks() {
      const snap = await getDocs(collection(db, 'readerChecks'));
      return snap.docs.map((d): ReaderCheck => {
        const x = d.data();
        const at = x.createdAt instanceof Timestamp ? x.createdAt.toDate().toISOString() : new Date().toISOString();
        return { topic_slug: x.topicSlug, user_id: x.uid, verdict: x.verdict, note: x.note ?? null, reader_name: x.readerName ?? null, created_at: at };
      });
    },
    async setReaderCheck(c) {
      try {
        await setDoc(doc(db, 'readerChecks', `${c.slug}__${c.uid}`), {
          topicSlug: c.slug,
          uid: c.uid,
          verdict: c.verdict,
          note: c.note,
          readerName: c.name,
          createdAt: serverTimestamp(),
        });
        return null;
      } catch (e) {
        return msg(e);
      }
    },
    async addReview(r) {
      try {
        await addDoc(collection(db, 'topicReviews'), {
          topicSlug: r.slug,
          status: r.status,
          comment: r.comment,
          reviewerId: r.reviewerId,
          reviewerName: r.reviewerName,
          createdAt: serverTimestamp(),
        });
        return null;
      } catch (e) {
        return msg(e);
      }
    },
  };
}
