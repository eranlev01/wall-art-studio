import type { Variants } from "framer-motion";

/** Stagger container — enter forward, exit reverse */
export const heroCharContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.028, delayChildren: 0.02 },
  },
  exit: {
    opacity: 1,
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

/** Mature per-letter motion — subtle blur/slide, no wild rotation */
export const heroCharVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(5px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.36,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(4px)",
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/** Legacy wavy variants — kept for detail pages / TextAnimate */
export const heroWavyVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(5px)",
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.028,
      duration: 0.36,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -8,
    filter: "blur(4px)",
    transition: {
      delay: i * 0.018,
      duration: 0.28,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};
