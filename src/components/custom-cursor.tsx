"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { SprayCanIcon } from "@/components/cursor-spray-can-icon";

type SprayBurst = { id: number; x: number; y: number };

const PARTICLES = [
  { dx: 18, dy: -10, color: "var(--acc)", size: 4, delay: 0 },
  { dx: 26, dy: -4, color: "var(--sec)", size: 3, delay: 0.02 },
  { dx: 22, dy: 4, color: "var(--acc)", size: 3.5, delay: 0.04 },
  { dx: 30, dy: 2, color: "var(--acc)", size: 2.5, delay: 0.06 },
  { dx: 16, dy: -6, color: "var(--sec)", size: 2, delay: 0.03 },
  { dx: 24, dy: 8, color: "var(--acc)", size: 2, delay: 0.05 },
  { dx: 32, dy: -8, color: "var(--sec)", size: 2.5, delay: 0.07 },
];

export function CustomCursor() {
  const pathname = usePathname();
  const disabled = pathname.startsWith("/theme-preview");

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [spraying, setSpraying] = useState(false);
  const [bursts, setBursts] = useState<SprayBurst[]>([]);
  const sprayTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const burstId = useRef(0);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const canX = useSpring(rawX, { stiffness: 380, damping: 30, mass: 0.4 });
  const canY = useSpring(rawY, { stiffness: 380, damping: 30, mass: 0.4 });

  const removeBurst = useCallback((id: number) => {
    setBursts((prev) => prev.filter((b) => b.id !== id));
  }, []);

  const triggerSpray = useCallback((x: number, y: number) => {
    setSpraying(true);
    burstId.current += 1;
    const id = burstId.current;
    setBursts((prev) => [...prev.slice(-4), { id, x, y }]);
    setTimeout(() => removeBurst(id), 480);

    if (sprayTimeout.current) clearTimeout(sprayTimeout.current);
    sprayTimeout.current = setTimeout(() => setSpraying(false), 420);
  }, [removeBurst]);

  useEffect(() => {
    if (disabled) {
      document.documentElement.classList.remove("custom-cursor-active");
      setVisible(false);
      return;
    }

    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) return;

    document.documentElement.classList.add("custom-cursor-active");
    setVisible(true);

    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, [role='button'], input, textarea, select, label"));
    };

    const onDown = (e: PointerEvent) => {
      triggerSpray(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      if (sprayTimeout.current) clearTimeout(sprayTimeout.current);
    };
  }, [disabled, rawX, rawY, triggerSpray]);

  if (disabled || !visible) return null;

  return (
    <div className="custom-cursor-root" aria-hidden="true">
      {/* Particle bursts at nozzle on each click */}
      <AnimatePresence>
        {bursts.map((burst) => (
          <motion.div
            key={burst.id}
            className="cursor-burst"
            style={{ left: burst.x, top: burst.y }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {PARTICLES.map((p, i) => (
              <motion.span
                key={i}
                className="cursor-particle"
                style={{
                  background: p.color,
                  width: p.size,
                  height: p.size,
                }}
                initial={{ x: 0, y: 0, opacity: 0.95, scale: 0.4 }}
                animate={{
                  x: p.dx,
                  y: p.dy,
                  opacity: 0,
                  scale: 1.2,
                }}
                transition={{
                  duration: 0.38,
                  delay: p.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}
            <motion.span
              className="cursor-spray-cloud"
              initial={{ scale: 0.2, opacity: 0.7 }}
              animate={{ scale: 1.6, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Spray can — nozzle tip follows pointer */}
      <motion.div
        className={`cursor-can${hovering ? " cursor-can-hover" : ""}${spraying ? " cursor-can-spray" : ""}`}
        style={{
          x: canX,
          y: canY,
          rotate: spraying ? -8 : hovering ? -14 : -18,
        }}
      >
        <SprayCanIcon spraying={spraying} />
      </motion.div>
    </div>
  );
}
