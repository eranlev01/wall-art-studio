"use client";

import { motion, useScroll, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>;
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn("scroll-progress", className)}
      style={{ scaleX: scrollYProgress }}
      {...props}
    />
  );
}
