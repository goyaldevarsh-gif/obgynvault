import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Download, Image as ImageIcon, Link2, Loader2, Printer, Share2, X } from 'lucide-react';
import { renderTopicCard } from '@/lib/shareCard';
import { useToast } from '@/store/ToastContext';
import type { SourceId, Topic } from '@/types/content';

/** Share button for a topic: a branded summary image (great for WhatsApp) or just the link. */
export function TopicShareButton({ topic, sourceIds }: { topic: Topic; sourceIds: SourceId[] }) {
  const [open, setOpen] = useState(false);
  const [blob, setBlob] = useState<Blob | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const toast = useToast();

  useEffect(() => {
    if (!open) return;
    let alive = true;
    setBlob(null);
    renderTopicCard(topic, sourceIds)
      .then((b) => {
        if (!alive) return;
        setBlob(b);
        setUrl(URL.createObjectURL(b));
      })
      .catch(() => toast('Could not create the image'));
    return () => {
      alive = false;
    };
  }, [open, topic, sourceIds, toast]);

  useEffect(() => () => void (url && URL.revokeObjectURL(url)), [url]);

  const fileName = `ObGynVault-${topic.slug}.png`;
  const link = window.location.href;

  const shareImage = async () => {
    if (!blob) return;
    const file = new File([blob], fileName, { type: 'image/png' });
    try {
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: topic.title, text: `${topic.title}: ObGynVault` });
        return;
      }
    } catch {
      return; // cancelled
    }
    const a = document.createElement('a');
    a.href = url!;
    a.download = fileName;
    a.click();
    toast('Image saved');
  };

  const printCard = () => {
    if (!url) return;
    const w = window.open('', '_blank');
    if (!w) return;
    w.document.write(`<!doctype html><title>${topic.title}</title><style>@page{margin:10mm}body{margin:0}img{width:100%;height:auto}</style><img src="${url}" onload="setTimeout(()=>print(),200)">`);
    w.document.close();
  };

  const shareLink = async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: topic.title, url: link });
        return;
      }
      await navigator.clipboard.writeText(link);
      toast('Link copied');
    } catch {
      /* cancelled */
    }
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-label="Share" className="grid size-9 place-items-center rounded-full text-navy hover:bg-surface">
        <Share2 className="size-5" />
      </button>
      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 md:items-center" onClick={() => setOpen(false)}>
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Share topic"
              onClick={(e) => e.stopPropagation()}
              className="pb-safe max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-surface p-5 shadow-float md:max-w-md md:rounded-3xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-extrabold text-navy">Share</h2>
                <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="grid size-9 place-items-center rounded-full text-navy-500 hover:bg-canvas">
                  <X className="size-5" />
                </button>
              </div>
              <div className="mx-auto mb-4 grid max-h-[46vh] min-h-40 w-full max-w-[300px] place-items-center overflow-y-auto rounded-2xl bg-canvas ring-1 ring-navy-100">
                {url ? <img src={url} alt={`${topic.title} bedside card`} className="h-auto w-full" /> : <Loader2 className="size-6 animate-spin text-teal" />}
              </div>
              <div className="grid gap-2.5">
                <button type="button" disabled={!blob} onClick={shareImage} className="flex items-center justify-center gap-2 rounded-2xl bg-ink py-3.5 text-[15px] font-bold text-white disabled:opacity-50 dark:bg-teal-600 dark:text-ink">
                  {'canShare' in navigator ? <ImageIcon className="size-5" /> : <Download className="size-5" />} Share bedside card
                </button>
                <button type="button" disabled={!blob} onClick={printCard} className="flex items-center justify-center gap-2 rounded-2xl py-3 text-[15px] font-semibold text-navy ring-1 ring-navy-100 disabled:opacity-50">
                  <Printer className="size-5" /> Print
                </button>
                <button type="button" onClick={shareLink} className="flex items-center justify-center gap-2 rounded-2xl py-3 text-[15px] font-semibold text-navy ring-1 ring-navy-100">
                  <Link2 className="size-5" /> Share link
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
