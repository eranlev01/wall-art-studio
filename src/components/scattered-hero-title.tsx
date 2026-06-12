"use client";

import { AnimatePresence, motion, type MotionStyle } from "framer-motion";
import { TextAnimate } from "@/components/ui/text-animate";
import { heroWavyVariants } from "@/lib/hero-text-variants";
import type { ScatterWord } from "@/data/services";
import { cn } from "@/lib/utils";

type ScatteredHeroTitleProps = {
  words: ScatterWord[];
  className?: string;
  layer?: "front" | "back" | "all";
  /** Parallax motion values applied per depth group */
  parallaxStyle?: MotionStyle;
};

function ScatterWordBlock({
  word,
  index,
}: {
  word: ScatterWord;
  index: number;
}) {
  const isCycling = Boolean(word.animateKey);
  const motionKey = word.animateKey ?? word.text;

  const positionStyle: React.CSSProperties = {
    top: word.top,
    bottom: word.bottom,
    insetInlineStart: word.insetInlineStart,
    insetInlineEnd: word.insetInlineEnd,
  };

  const wordClass = cn(
    "scatter-word",
    word.tone && `scatter-tone-${word.tone}`,
    word.size && `scatter-size-${word.size}`,
    word.depth && `scatter-depth-${word.depth}`
  );

  if (isCycling) {
    const baseRotate = word.rotate ?? 0;
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={motionKey}
          className={wordClass}
          style={positionStyle}
          initial={{
            opacity: 0,
            y: 36,
            scale: 0.72,
            rotate: baseRotate + 8,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: baseRotate,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -28,
            scale: 0.78,
            rotate: baseRotate - 6,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <TextAnimate
            by="character"
            variants={heroWavyVariants}
            startOnView={false}
            once={false}
            delay={word.delay ?? 0.12}
            duration={0.5}
            as="span"
            className="scatter-text"
          >
            {word.text}
          </TextAnimate>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div
      className={wordClass}
      style={{
        ...positionStyle,
        transform: `rotate(${word.rotate ?? 0}deg)`,
      }}
    >
      <TextAnimate
        by="character"
        variants={heroWavyVariants}
        startOnView={false}
        once
        delay={word.delay ?? 0.08 + index * 0.1}
        duration={0.55}
        as="span"
        className="scatter-text"
      >
        {word.text}
      </TextAnimate>
    </div>
  );
}

export function ScatteredHeroTitle({
  words,
  className,
  layer = "all",
  parallaxStyle,
}: ScatteredHeroTitleProps) {
  const visible =
    layer === "all"
      ? words
      : words.filter((w) => (w.layer ?? "front") === layer);

  if (visible.length === 0) return null;

  return (
    <motion.div
      className={cn(
        "scatter-stage",
        layer === "back" && "scatter-stage-back",
        layer === "front" && "scatter-stage-front",
        className
      )}
      style={parallaxStyle}
      aria-label={visible.map((w) => w.text).join(" ")}
    >
      {visible.map((word, i) => (
        <ScatterWordBlock key={`slot-${i}-${word.animateKey ?? word.text}`} word={word} index={i} />
      ))}
    </motion.div>
  );
}
