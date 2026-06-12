"use client";

import { useEffect, useState } from "react";
import { motion, type MotionValue } from "framer-motion";
import { HeroCyclingText, HeroStaticText } from "@/components/hero-cycling-text";

const PAIRS = [
  { from: "חלומות", to: "אמנות" },
  { from: "רעיונות", to: "יצירה" },
  { from: "קירות", to: "חוויות" },
  { from: "מרחבים", to: "סיפורים" },
  { from: "חזון", to: "מציאות" },
];

type ParallaxMotion = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
};

type AnimatedHeroHeadlineProps = {
  midParallax?: ParallaxMotion;
  fgParallax?: ParallaxMotion;
};

export function AnimatedHeroHeadline({
  midParallax,
  fgParallax,
}: AnimatedHeroHeadlineProps) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % PAIRS.length), 4200);
    return () => clearInterval(t);
  }, []);

  const pair = PAIRS[idx];

  const rowStyle = (p?: ParallaxMotion) =>
    p
      ? {
          x: p.x,
          y: p.y,
          rotateX: p.rotateX,
          rotateY: p.rotateY,
          transformPerspective: 900,
        }
      : undefined;

  return (
    <h1 className="hero-headline" aria-label={`הופכים ${pair.from} ל${pair.to}`}>
      <motion.span
        className="hero-headline-row hero-headline-row-top"
        style={rowStyle(midParallax)}
      >
        <HeroStaticText text="הופכים" tone="white" size="md" />
        <HeroCyclingText text={pair.from} tone="accent" size="hero" />
      </motion.span>

      <motion.span
        className="hero-headline-row hero-headline-row-bottom"
        style={rowStyle(fgParallax)}
      >
        <HeroStaticText text="ל" tone="accent" size="md" className="hero-prefix" />
        <HeroCyclingText text={pair.to} tone="white" size="hero" />
      </motion.span>
    </h1>
  );
}
