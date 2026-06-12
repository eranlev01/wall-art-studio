"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { fadeUpLive, slideInEnd, slideInStart } from "@/lib/motion-presets";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  once?: boolean;
  amount?: number;
  /** Alternate slide direction for visual rhythm */
  from?: "up" | "start" | "end";
}

export function Reveal({
  children,
  className,
  delay = 0,
  variants,
  once = true,
  amount = 0.18,
  from = "up",
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  const resolvedVariants =
    variants ??
    (from === "start" ? slideInStart : from === "end" ? slideInEnd : fadeUpLive);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={resolvedVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export function Stagger({
  children,
  className,
  stagger = 0.1,
}: StaggerProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUpLive}>
      {children}
    </motion.div>
  );
}
