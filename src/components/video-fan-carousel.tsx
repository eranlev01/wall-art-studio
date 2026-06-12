"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { easeLuxury } from "@/lib/motion-presets";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path
      d="M15 6l-6 6 6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path
      d="M9 6l6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Video = { id: string; title: string };

type VideoFanCarouselProps = {
  videos: Video[];
  onPlay: (id: string) => void;
};

function wrapIndex(i: number, len: number) {
  return ((i % len) + len) % len;
}

function relativeOffset(index: number, active: number, len: number) {
  let offset = index - active;
  if (offset > len / 2) offset -= len;
  if (offset < -len / 2) offset += len;
  return offset;
}

function VideoThumb({ id }: { id: string }) {
  const [src, setSrc] = useState(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      loading="lazy"
      onError={() => {
        if (!src.includes("hqdefault")) {
          setSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`);
        }
      }}
    />
  );
}

export function VideoFanCarousel({ videos, onPlay }: VideoFanCarouselProps) {
  const [active, setActive] = useState(0);
  const len = videos.length;

  const go = useCallback(
    (dir: 1 | -1) => setActive((i) => wrapIndex(i + dir, len)),
    [len],
  );

  return (
    <div className="vid-fan">
      <button
        type="button"
        className="vid-fan-arrow vid-fan-arrow-prev"
        dir="ltr"
        onClick={() => go(-1)}
        aria-label="סרטון קודם"
      >
        <ChevronLeft />
      </button>

      <div className="vid-fan-stage">
        {videos.map((v, index) => {
          const offset = relativeOffset(index, active, len);
          if (Math.abs(offset) > 2) return null;

          const isCenter = offset === 0;
          const abs = Math.abs(offset);

          return (
            <motion.button
              key={v.id}
              type="button"
              className={`vid-fan-card${isCenter ? " vid-fan-card-center" : ""}`}
              onClick={() => (isCenter ? onPlay(v.id) : setActive(index))}
              aria-label={v.title}
              aria-current={isCenter ? "true" : undefined}
              animate={{
                x: offset * 112,
                z: isCenter ? 90 : 24 - abs * 14,
                rotateY: offset * -16,
                scale: isCenter ? 1 : 0.78 - abs * 0.07,
                opacity: isCenter ? 1 : 0.42 - abs * 0.1,
              }}
              style={{ transformStyle: "preserve-3d", zIndex: 10 - abs }}
              transition={{ duration: 0.52, ease: easeLuxury }}
            >
              <div className="vid-fan-thumb">
                <VideoThumb id={v.id} />
                {isCenter && (
                  <div className="vid-play">
                    <PlayIcon />
                  </div>
                )}
              </div>
              {isCenter && <div className="vid-fan-title">{v.title}</div>}
            </motion.button>
          );
        })}
      </div>

      <button
        type="button"
        className="vid-fan-arrow vid-fan-arrow-next"
        dir="ltr"
        onClick={() => go(1)}
        aria-label="סרטון הבא"
      >
        <ChevronRight />
      </button>

      <div className="vid-fan-dots" role="tablist" aria-label="בחירת סרטון">
        {videos.map((v, i) => (
          <button
            key={v.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`vid-fan-dot${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={v.title}
          />
        ))}
      </div>
    </div>
  );
}
