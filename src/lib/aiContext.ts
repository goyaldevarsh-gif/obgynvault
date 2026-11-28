import { getGuideline, getSource } from '@/data';
import type { CitedPoint, Topic } from '@/types/content';
import { search } from './search';

/** Picks the app topics most relevant to a question and turns them into plain-text context for the model. */
export function buildAiContext(question: string, max = 3): { topics: Topic[]; context: string } {
  const topics = search(question)
    .filter((r): r is Extract<typeof r, { kind: 'topic' }> => r.kind === 'topic' && r.item.status !== 'sample')
    .slice(0, max)
    .map((r) => r.item);

  const refs = (p: CitedPoint) =>
    (p.refs ?? [])
      .map((r) => {
        const g = getGuideline(r.guidelineId);
        return g ? `${getSource(g.sourceId).shortName} ${g.reference ?? ''} ${g.year}`.replace(/\s+/g, ' ').trim() : r.guidelineId;
      })
      .join('; ');
  const point = (p: CitedPoint) => {
    const lines = [`- ${p.heading ? p.heading + ': ' : ''}${p.text} [${refs(p)}]`];
    if (p.table) lines.push(`  Table: ${p.table.columns.join(' | ')}`, ...p.table.rows.map((r) => `  ${r.join(' | ')}`));
    if (p.flow) p.flow.steps.forEach((s) => lines.push(`  Step: ${s.title}${s.text ? ': ' + s.text : ''}${s.branches ? ' ' + s.branches.map((b) => `(${b.when} -> ${b.then})`).join(' ') : ''}`));
    return lines.join('\n');
  };

  const context = topics
    .map((t) =>
      [
        `### TOPIC: ${t.title} (status: ${t.status})`,
        t.overview ?? '',
        'Key points:',
        ...t.keyPoints.map(point),
        ...t.sections.flatMap((s) => [`Section: ${s.title}`, ...s.body.map(point)]),
      ].join('\n'),
    )
    .join('\n\n')
    .slice(0, 60000);
  return { topics, context };
}

export const AI_SYSTEM = (context: string) => `You are the ObGynVault assistant for obstetricians and gynaecologists in India.
Answer ONLY from the ObGynVault topic text below. Do not use outside knowledge.
- If the answer is not in the text, say: "ObGynVault does not cover this yet." and stop.
- Never invent doses, thresholds or recommendations. Copy numbers exactly as written.
- After each statement, give the source in square brackets exactly as shown in the text, e.g. [FOGSI 2024].
- Where guidelines disagree, show each view with its source.
- Be brief and practical: short bullet points, management first.
- All content is a draft awaiting clinician verification; end with one line: "Draft content: check against the original guideline and local protocol."

ObGynVault topic text:
${context || '(no matching topics)'}`;
