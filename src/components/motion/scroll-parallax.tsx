"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type ScrollParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Negative = lag behind scroll, positive = lead ahead */
  speed?: number;
  /** Fade in/out at section edges */
  fade?: boolean;
};

export function ScrollParallax({
  children,
  className,
  speed = 0.12,
  fade = false,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const travel = Math.abs(speed) * 120;
  const y = useTransform(scrollYProgress, [0, 1], [travel, -travel]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    [0.5, 1, 1, 0.5]
  );

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, opacity: fade ? opacity : 1, willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
