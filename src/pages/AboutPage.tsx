import {
  Activity, AlertTriangle, BadgeCheck, Bookmark, BookOpen, Calculator, CircleHelp, Download, GitCompareArrows, Info,
  Library, ListChecks, MessageSquareWarning, Newspaper, Pill, Search, ShieldCheck, Siren, Type, WifiOff, type LucideIcon,
} from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { PageHeader } from '@/components/layout/PageHeader';
import { AccordionItem, Chip } from '@/components/ui';
import { GUIDELINES, SOURCES } from '@/data';
import { AUTHORED_TOPICS } from '@/data/content';

type Tab = 'help' | 'about' | 'faq' | 'disclaimer';
const TABS: { key: Tab; label: string }[] = [
  { key: 'help', label: 'How to use' },
  { key: 'about', label: 'About' },
  { key: 'faq', label: 'FAQ' },
  { key: 'disclaimer', label: 'Disclaimer' },
];

interface Step { icon: LucideIcon; title: string; text: string; to?: string; link?: string }

const QUICK_START: Step[] = [
  { icon: Search, title: 'Search anything', text: 'Type a condition, drug or guideline (e.g. "PPH", "MgSO4", "NG133"). Results cover topics and guidelines together.', to: '/search', link: 'Open search' },
  { icon: Library, title: 'Read a topic', text: 'Each topic opens with a summary and key points, then management sections first. Background and theory come last.', to: '/library', link: 'Browse library' },
  { icon: Siren, title: 'Emergencies in two taps', text: 'Home → Emergency gives first-response steps for PPH, eclampsia, sepsis, shoulder dystocia, rupture and ectopic.', to: '/tools/emergency', link: 'Open Emergency' },
];

const FEATURES: Step[] = [
  { icon: BookOpen, title: 'Topic pages', text: 'Summary → key points → step-by-step management (often with a flowchart) → drugs → monitoring → follow-up. Tap a small source tag after any line to see exactly which guideline and page it came from.' },
  { icon: GitCompareArrows, title: 'Compare guidelines', text: 'Where FOGSI, NICE, RCOG, ACOG or WHO differ, the topic shows a "Guideline positions" table. "Compare" puts them side by side.', to: '/tools/compare', link: 'Open Compare' },
  { icon: BookOpen, title: 'Guideline library', text: 'Every guideline used, with issuing body, year, a summary and a link to the official document (for reference only; the clinical content is already inside the app).', to: '/guidelines', link: 'Open guidelines' },
  { icon: Activity, title: 'Labour Room', text: 'CTG classification, labour progress, MEWS, IOL and VBAC checklists, and a labour log, built for use at the bedside.', to: '/tools/labour-room', link: 'Open Labour Room' },
  { icon: Calculator, title: 'Calculators', text: 'EDD and gestational age, shock index, Bishop score, RMI and BMI. Each result shows the guideline threshold it uses.', to: '/tools/calculators', link: 'Open calculators' },
  { icon: Pill, title: 'Drug Vault', text: 'For each drug, what each topic and guideline in the app says about it, with links back to the source line.', to: '/tools/drug-vault', link: 'Open Drug Vault' },
  { icon: Newspaper, title: "What's new", text: 'New topics and guideline changes, newest first. Guidelines are checked every Monday and changes are added to topics straight away.', to: '/updates', link: "Open What's new" },
  { icon: Bookmark, title: 'My Profile', text: 'Bookmark topics and guidelines, keep your own notes (e.g. local protocol), and see your reading history. Sign in to sync across devices.', to: '/vault', link: 'Open Profile' },
  { icon: Type, title: 'Text size and theme', text: 'Profile tab → "Text & theme" sets font size, spacing and light or dark mode.', to: '/vault?tab=display', link: 'Change display' },
  { icon: Download, title: 'Install as an app', text: 'Android (Chrome): menu ⋮ → "Add to Home screen" or "Install app". iPhone (Safari): Share → "Add to Home Screen". The app then opens full screen and updates itself.' },
  { icon: WifiOff, title: 'Works offline', text: 'Pages you have opened once stay available without internet, which helps in labour rooms and OTs with poor signal.' },
];

const STATUS: { icon: LucideIcon; title: string; text: string; tone: string }[] = [
  { icon: Info, title: 'Draft', text: 'Written from the listed guidelines, every line cited, but not yet checked by a clinician reviewer.', tone: 'bg-amber-50 text-amber-700' },
  { icon: AlertTriangle, title: 'Updated · not yet verified', text: 'A line changed after a new or revised guideline. Tap it to open that guideline and check.', tone: 'bg-alert-50 text-alert' },
  { icon: BadgeCheck, title: 'Verified', text: 'Checked against the sources by a clinician reviewer.', tone: 'bg-teal-50 text-teal-700' },
];

const FAQ: { q: string; a: string }[] = [
  { q: 'Which guidelines does ObGynVault follow?', a: 'Indian guidance comes first: FOGSI, then MoHFW and ICMR where available. Then NICE, RCOG, ACOG, WHO and FIGO, plus bodies such as SMFM, BSH and ESHRE where they add something. Where they disagree, the topic says so instead of choosing silently.' },
  { q: 'Do I need to open the PDFs?', a: 'No. The management content you need is written inside each topic. The official link on each guideline is only there if you want to read the original.' },
  { q: 'How current is the content?', a: 'Each topic shows its "Last updated" date. Guidelines are checked every Monday; when one changes, the affected lines are updated and flagged "not yet verified" until someone checks them.' },
  { q: 'I found a mistake. What should I do?', a: 'At the end of every topic, use "Help verify this topic": tap "Found a problem" and write what is wrong (sign-in needed). If it matches the source, tap "Matches source". Reports go to the review queue.' },
  { q: 'What does the editor note at the bottom of a topic mean?', a: 'It lists which sources were read, which could not be read (for example paywalled documents), and any known gaps. Nothing is filled in from memory.' },
  { q: 'Are drug doses safe to use directly?', a: 'Doses are quoted exactly as the cited guideline states them. Always confirm against your local formulary, the product label and the patient in front of you.' },
  { q: 'Is my data private?', a: 'Bookmarks, notes and history stay on your device unless you sign in to sync. Notes are visible only to you. Topic checks you submit show as counts, not names.' },
  { q: 'Is there an AI assistant?', a: 'It is planned and will answer only from the sources inside the app, with citations. It is not live yet.' },
];

function StepCard({ s }: { s: Step }) {
  const Icon = s.icon;
  return (
    <div className="flex gap-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700"><Icon className="size-5" aria-hidden /></span>
      <div className="min-w-0">
        <h3 className="font-bold text-navy">{s.title}</h3>
        <p className="mt-0.5 text-sm leading-relaxed text-navy-600">{s.text}</p>
        {s.to && <Link to={s.to} className="mt-1.5 inline-block text-sm font-semibold text-teal-700">{s.link} →</Link>}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [params, setParams] = useSearchParams();
  const tab = (params.get('tab') as Tab) || 'help';
  const setTab = (t: Tab) => setParams(t === 'help' ? {} : { tab: t }, { replace: true });
  const reviewed = Object.keys(AUTHORED_TOPICS).length;

  return (
    <div>
      <PageHeader title="Help & About" />
      <div className="space-y-4 px-4 pb-6 md:px-6">
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0" role="tablist">
          {TABS.map((t) => (
            <Chip key={t.key} role="tab" active={tab === t.key} onClick={() => setTab(t.key)}>{t.label}</Chip>
          ))}
        </div>

        {tab === 'help' && (
          <>
            <section className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wide text-navy-400">Start here</h2>
              {QUICK_START.map((s) => <StepCard key={s.title} s={s} />)}
            </section>
            <section className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wide text-navy-400">What each label means</h2>
              <div className="space-y-2 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
                {STATUS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.title} className="flex items-start gap-3">
                      <span className={`mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${s.tone}`}><Icon className="size-3.5" aria-hidden />{s.title}</span>
                      <p className="text-sm leading-relaxed text-navy-600">{s.text}</p>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wide text-navy-400">Features</h2>
              {FEATURES.map((s) => <StepCard key={s.title} s={s} />)}
            </section>
            <section className="flex gap-3 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber/30">
              <MessageSquareWarning className="size-6 shrink-0 text-amber-700" aria-hidden />
              <p className="text-sm leading-relaxed text-navy-700"><strong className="text-navy">Help keep it accurate.</strong> At the end of every topic, tap "Matches source" or "Found a problem". Every check makes the content safer for the next reader.</p>
            </section>
          </>
        )}

        {tab === 'about' && (
          <>
            <section className="rounded-2xl bg-surface p-5 shadow-card ring-1 ring-navy-100/60">
              <h2 className="font-display text-xl font-bold text-navy">ObGynVault</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-700">
                A guideline-based clinical reference for obstetrics and gynaecology, made for Indian practice: consultants, residents, senior residents and fellows. Every topic is built around management, written from current FOGSI, NICE, RCOG, ACOG, WHO and FIGO guidance, with each line linked to its source.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-canvas p-3"><strong className="block text-xl text-navy">{reviewed}</strong><span className="text-[11px] text-navy-500">topic reviews</span></div>
                <div className="rounded-xl bg-canvas p-3"><strong className="block text-xl text-navy">{GUIDELINES.length}</strong><span className="text-[11px] text-navy-500">guidelines</span></div>
                <div className="rounded-xl bg-canvas p-3"><strong className="block text-xl text-navy">{SOURCES.length}</strong><span className="text-[11px] text-navy-500">source bodies</span></div>
              </div>
            </section>
            <section className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wide text-navy-400">How content is made</h2>
              <div className="space-y-3 rounded-2xl bg-surface p-4 text-sm leading-relaxed text-navy-700 shadow-card ring-1 ring-navy-100/60">
                <p><strong className="text-navy">1. Sources first.</strong> Indian guidance (FOGSI, MoHFW, ICMR) is read first, then NICE, RCOG, ACOG, WHO and FIGO.</p>
                <p><strong className="text-navy">2. Every line cited.</strong> Thresholds and doses are written exactly as the guideline states them, with the page or section.</p>
                <p><strong className="text-navy">3. Gaps stated openly.</strong> If a document could not be read, the editor note says so. Nothing is filled in from memory.</p>
                <p><strong className="text-navy">4. Reviewed and kept current.</strong> Topics move from draft to verified after clinician review. Guidelines are checked weekly and changes are flagged until verified.</p>
              </div>
            </section>
            <section className="flex items-center gap-3 rounded-2xl bg-surface p-4 shadow-card ring-1 ring-navy-100/60">
              <ShieldCheck className="size-6 shrink-0 text-teal" aria-hidden />
              <p className="text-sm text-navy-600">ObGynVault is an <strong className="text-navy">OrthoVault</strong> product. Created by Dr. Devarsh Goyal.</p>
            </section>
          </>
        )}

        {tab === 'faq' && (
          <section className="overflow-hidden rounded-2xl bg-surface shadow-card ring-1 ring-navy-100/60">
            {FAQ.map((f) => (
              <AccordionItem key={f.q} title={f.q} icon={<CircleHelp className="size-5" aria-hidden />}>
                <p>{f.a}</p>
              </AccordionItem>
            ))}
          </section>
        )}

        {tab === 'disclaimer' && (
          <section className="space-y-3 rounded-2xl bg-surface p-5 text-sm leading-relaxed text-navy-700 shadow-card ring-1 ring-navy-100/60">
            <h2 className="flex items-center gap-2 font-bold text-navy"><ListChecks className="size-5 text-amber" aria-hidden /> Medical disclaimer</h2>
            <p>ObGynVault is a reference for qualified healthcare professionals. It summarises published guidelines and does not replace clinical judgement, local protocols or the full guideline text.</p>
            <p>Topics marked <strong>Draft</strong> or <strong>not yet verified</strong> have not completed clinician review. Check doses, thresholds and drug availability against your institution's formulary and the product label before use.</p>
            <p>Guidelines differ between countries and are revised over time. Where sources disagree, the app shows each position; the choice for an individual patient remains with the treating clinician.</p>
            <p>Guideline names and documents belong to their issuing bodies. ObGynVault is not affiliated with or endorsed by FOGSI, NICE, RCOG, ACOG, WHO, FIGO or any other body cited.</p>
            <p>Not for use by patients for self-diagnosis or treatment.</p>
          </section>
        )}
      </div>
    </div>
  );
}
