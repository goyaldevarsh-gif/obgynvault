import { LOGO_PATHS } from '@/components/brand/logoPaths';
import { getSource } from '@/data';
import type { SourceId, Topic } from '@/types/content';

/** Public address printed on every card. */
export const APP_URL = 'goyaldevarsh-gif.github.io/obgynvault';

const W = 1080;
const H = 1350;
const PAD = 72;
const C = {
  navy: '#102A43',
  navy2: '#1B3A57',
  teal: '#20A69A',
  tealSoft: '#ECF8F6',
  amber: '#E5A34C',
  ink: '#243B53',
  muted: '#627D98',
  line: '#D9E2EC',
  bg: '#F4F7FA',
};

function wrap(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    const t = cur ? `${cur} ${w}` : w;
    if (ctx.measureText(t).width > maxW && cur) {
      lines.push(cur);
      cur = w;
    } else cur = t;
  }
  if (cur) lines.push(cur);
  return lines;
}

function clampLines(ctx: CanvasRenderingContext2D, lines: string[], max: number, maxW: number): string[] {
  if (lines.length <= max) return lines;
  const out = lines.slice(0, max);
  let last = out[max - 1];
  while (ctx.measureText(`${last}…`).width > maxW && last.length > 0) last = last.slice(0, -1);
  out[max - 1] = `${last.trimEnd().replace(/[.,;:]+$/, '')}…`;
  return out;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

function drawLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 64, size / 64);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = C.navy;
  ctx.lineWidth = 4;
  const shield = new Path2D(LOGO_PATHS.shield);
  ctx.fill(shield);
  ctx.stroke(shield);
  ctx.fillStyle = C.teal;
  ctx.fill(new Path2D(LOGO_PATHS.leafLeft));
  ctx.fillStyle = C.amber;
  ctx.fill(new Path2D(LOGO_PATHS.leafRight));
  ctx.lineWidth = 3.2;
  ctx.stroke(new Path2D(LOGO_PATHS.uterus));
  ctx.fillStyle = C.teal;
  ctx.fill(new Path2D(LOGO_PATHS.cross));
  ctx.restore();
}

/** Renders a 1080×1350 summary card (WhatsApp / Instagram portrait) for a topic. */
export async function renderTopicCard(topic: Topic, sourceIds: SourceId[]): Promise<Blob> {
  await Promise.all([
    document.fonts.load('800 64px Manrope'),
    document.fonts.load('700 30px Manrope'),
    document.fonts.load('400 30px Inter'),
    document.fonts.load('600 26px Inter'),
  ]).catch(() => {});

  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const ctx = cv.getContext('2d')!;
  const display = 'Manrope, Inter, system-ui, sans-serif';
  const body = 'Inter, system-ui, sans-serif';

  // Background
  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, W, H);

  // Header band
  const headH = 420;
  const g = ctx.createLinearGradient(0, 0, W, headH);
  g.addColorStop(0, C.navy);
  g.addColorStop(0.65, C.navy2);
  g.addColorStop(1, '#147D74');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, headH);
  ctx.fillStyle = 'rgba(255,255,255,0.05)';
  ctx.beginPath();
  ctx.arc(W - 60, 40, 220, 0, Math.PI * 2);
  ctx.fill();

  // Brand row
  drawLogo(ctx, PAD, 56, 64);
  ctx.font = `800 36px ${display}`;
  ctx.fillStyle = '#FFFFFF';
  ctx.textBaseline = 'middle';
  ctx.fillText('ObGyn', PAD + 84, 90);
  const ob = ctx.measureText('ObGyn').width;
  ctx.fillStyle = C.teal;
  ctx.fillText('Vault', PAD + 84 + ob, 90);

  // Specialty pill
  ctx.font = `700 22px ${body}`;
  const pill = `${topic.specialty === 'obstetrics' ? 'OBSTETRICS' : 'GYNAECOLOGY'} · ${topic.category.toUpperCase()}`;
  const pw = ctx.measureText(pill).width + 36;
  ctx.fillStyle = 'rgba(255,255,255,0.14)';
  roundRect(ctx, PAD, 168, pw, 46, 23);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(pill, PAD + 18, 192);

  // Title + subtitle
  ctx.textBaseline = 'alphabetic';
  ctx.font = `800 68px ${display}`;
  ctx.fillStyle = '#FFFFFF';
  const titleLines = clampLines(ctx, wrap(ctx, topic.title, W - PAD * 2), 2, W - PAD * 2);
  let y = 300;
  for (const l of titleLines) {
    ctx.fillText(l, PAD, y);
    y += 74;
  }
  ctx.font = `500 30px ${body}`;
  ctx.fillStyle = 'rgba(255,255,255,0.78)';
  ctx.fillText(clampLines(ctx, [topic.subtitle], 1, W - PAD * 2)[0], PAD, Math.min(y + 4, headH - 34));

  // Key points card
  const cardX = PAD - 16;
  const cardY = headH + 40;
  const cardW = W - (PAD - 16) * 2;
  const cardBottom = H - 250;
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowColor = 'rgba(16,42,67,0.08)';
  ctx.shadowBlur = 30;
  ctx.shadowOffsetY = 8;
  roundRect(ctx, cardX, cardY, cardW, cardBottom - cardY, 28);
  ctx.fill();
  ctx.shadowColor = 'transparent';

  ctx.font = `800 30px ${display}`;
  ctx.fillStyle = C.navy;
  ctx.fillText('Key points', cardX + 40, cardY + 64);
  ctx.fillStyle = C.teal;
  roundRect(ctx, cardX + 40, cardY + 82, 56, 6, 3);
  ctx.fill();

  ctx.font = `400 29px ${body}`;
  const textX = cardX + 104;
  const textW = cardW - 104 - 40;
  let py = cardY + 140;
  const lineH = 40;
  for (let i = 0; i < topic.keyPoints.length; i++) {
    const lines = wrap(ctx, topic.keyPoints[i].text, textW);
    const room = Math.floor((cardBottom - 30 - py) / lineH);
    if (room < 1) break;
    const shown = clampLines(ctx, lines, Math.min(lines.length, room, 4), textW);
    // number bubble
    ctx.fillStyle = C.tealSoft;
    ctx.beginPath();
    ctx.arc(cardX + 62, py - 10, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#147D74';
    ctx.font = `800 22px ${display}`;
    ctx.textAlign = 'center';
    ctx.fillText(String(i + 1), cardX + 62, py - 2);
    ctx.textAlign = 'left';
    ctx.font = `400 29px ${body}`;
    ctx.fillStyle = C.ink;
    for (const l of shown) {
      ctx.fillText(l, textX, py);
      py += lineH;
    }
    py += 22;
  }

  // Sources row
  let sx = PAD;
  const sy = H - 200;
  ctx.font = `700 22px ${body}`;
  ctx.fillStyle = C.muted;
  ctx.fillText('Sources', sx, sy);
  sx += ctx.measureText('Sources').width + 20;
  ctx.font = `800 20px ${body}`;
  for (const id of sourceIds.slice(0, 6)) {
    const s = getSource(id);
    const label = s.shortName.toUpperCase();
    const bw = ctx.measureText(label).width + 24;
    if (sx + bw > W - PAD) break;
    ctx.fillStyle = `${s.color}22`;
    roundRect(ctx, sx, sy - 28, bw, 38, 10);
    ctx.fill();
    ctx.fillStyle = s.color;
    ctx.fillText(label, sx + 12, sy - 2);
    sx += bw + 10;
  }
  if (topic.status !== 'verified') {
    ctx.font = `600 21px ${body}`;
    ctx.fillStyle = '#A86A1C';
    ctx.fillText('Draft · confirm against the original guideline before clinical use', PAD, sy + 44);
  }

  // Footer
  ctx.fillStyle = C.line;
  ctx.fillRect(PAD, H - 110, W - PAD * 2, 2);
  ctx.font = `700 24px ${display}`;
  ctx.fillStyle = C.navy;
  ctx.fillText(APP_URL, PAD, H - 58);
  ctx.font = `500 21px ${body}`;
  ctx.fillStyle = C.muted;
  ctx.textAlign = 'right';
  ctx.fillText('An OrthoVault product · Dr. Devarsh Goyal', W - PAD, H - 58);
  ctx.textAlign = 'left';

  return new Promise((resolve, reject) => cv.toBlob((b) => (b ? resolve(b) : reject(new Error('render failed'))), 'image/png'));
}
