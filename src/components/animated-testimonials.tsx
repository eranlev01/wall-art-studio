"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArtCardWave } from "@/components/ui/art-card-wave";
import { easeLuxury } from "@/lib/motion-presets";

export type Testimonial = {
  q: string;
  init: string;
  name: string;
  role: string;
};

export function AnimatedTestimonials({
  items,
  index,
  onSelect,
}: {
  items: Testimonial[];
  index: number;
  onSelect: (i: number) => void;
}) {
  const t = items[index];

  return (
    <div className="test-wrap">
      <div className="test-track">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="art-card art-card-quote"
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
            transition={{ duration: 0.55, ease: easeLuxury }}
          >
            <div className="art-card-wave-top">
              <span className="art-card-quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p className="test-body">{t.q}</p>
              <ArtCardWave />
            </div>
            <div className="art-card-body art-card-body-center">
              <div className="test-author">
                <div className="test-av">{t.init}</div>
                <div className="test-name">{t.name}</div>
                <div className="test-role">{t.role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="test-dots">
        {items.map((_, i) => (
          <motion.button
            key={i}
            type="button"
            className={`test-dot-btn${i === index ? " active" : ""}`}
            onClick={() => onSelect(i)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`המלצה ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
