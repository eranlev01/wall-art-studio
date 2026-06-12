"use client";

import { AnimatePresence, motion } from "framer-motion";
import { heroCharContainer, heroCharVariants } from "@/lib/hero-text-variants";
import { cn } from "@/lib/utils";

type HeroTextTone = "white" | "accent";
type HeroTextSize = "md" | "lg" | "hero";

type HeroCyclingTextProps = {
  text: string;
  tone?: HeroTextTone;
  size?: HeroTextSize;
  className?: string;
};

export function HeroCyclingText({
  text,
  tone = "accent",
  size = "hero",
  className,
}: HeroCyclingTextProps) {
  return (
    <span
      className={cn("hero-text-slot", `hero-tone-${tone}`, `hero-size-${size}`, className)}
      aria-live="polite"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          className="hero-word"
          variants={heroCharContainer}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {text.split("").map((char, i) => (
            <motion.span key={`${text}-${i}`} className="hero-char" variants={heroCharVariants}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

type HeroStaticTextProps = {
  text: string;
  tone?: HeroTextTone;
  size?: HeroTextSize;
  className?: string;
};

export function HeroStaticText({
  text,
  tone = "white",
  size = "md",
  className,
}: HeroStaticTextProps) {
  return (
    <span
      className={cn("hero-text-slot", `hero-tone-${tone}`, `hero-size-${size}`, className)}
    >
      <motion.span
        className="hero-word"
        variants={heroCharContainer}
        initial="hidden"
        animate="show"
      >
        {text.split("").map((char, i) => (
          <motion.span key={i} className="hero-char" variants={heroCharVariants}>
            {char}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}
