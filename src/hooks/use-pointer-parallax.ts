"use client";

import { useEffect, type RefObject } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

type ParallaxOptions = {
  /** Multiplier for background layer */
  bg?: number;
  /** Multiplier for mid-depth text */
  mid?: number;
  /** Multiplier for foreground text */
  fg?: number;
};

const COARSE_POINTER = "(hover: none) and (pointer: coarse)";
const MOBILE_WIDTH = "(max-width: 900px)";

export function usePointerParallax(
  ref: RefObject<HTMLElement | null>,
  options: ParallaxOptions = {}
) {
  const { bg = 1, mid = 0.55, fg = 0.85 } = options;

  const normX = useMotionValue(0);
  const normY = useMotionValue(0);

  const springConfig = { stiffness: 70, damping: 22, mass: 0.6 };
  const smoothX = useSpring(normX, springConfig);
  const smoothY = useSpring(normY, springConfig);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const coarse = window.matchMedia(COARSE_POINTER);
    const narrow = window.matchMedia(MOBILE_WIDTH);
    if (coarse.matches || narrow.matches) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      normX.set((e.clientX - rect.left) / rect.width - 0.5);
      normY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const onLeave = () => {
      normX.set(0);
      normY.set(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ref, normX, normY]);

  const bgX = useTransform(smoothX, (v) => v * 48 * bg);
  const bgY = useTransform(smoothY, (v) => v * 32 * bg);
  const midX = useTransform(smoothX, (v) => v * -28 * mid);
  const midY = useTransform(smoothY, (v) => v * -20 * mid);
  const midRotateY = useTransform(smoothX, (v) => v * 8);
  const midRotateX = useTransform(smoothY, (v) => v * -6);
  const fgX = useTransform(smoothX, (v) => v * 36 * fg);
  const fgY = useTransform(smoothY, (v) => v * 24 * fg);
  const fgRotateY = useTransform(smoothX, (v) => v * -10);
  const fgRotateX = useTransform(smoothY, (v) => v * 7);

  return {
    bgX,
    bgY,
    midX,
    midY,
    midRotateX,
    midRotateY,
    fgX,
    fgY,
    fgRotateX,
    fgRotateY,
    smoothX,
    smoothY,
  };
}
