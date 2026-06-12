"use client";

import { motion, useReducedMotion } from "framer-motion";
import { routes } from "@/lib/routes";

const RING_PHRASE = "דברו איתנו • ";
/** Reversed so Hebrew reads correctly around the ring in RTL */
const ORBIT_CHARS = Array.from(RING_PHRASE.repeat(6)).reverse();

export function FloatingContactBadge() {
  const reducedMotion = useReducedMotion();
  const step = 360 / ORBIT_CHARS.length;

  return (
    <motion.a
      href={routes.contact}
      className="float-badge"
      aria-label="דברו איתנו — צור קשר"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className={`float-orbit-rotator${reducedMotion ? " float-orbit-rotator-paused" : ""}`}
        aria-hidden="true"
      >
        {ORBIT_CHARS.map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="float-orbit-char"
            style={{ transform: `rotate(${i * step}deg)` }}
          >
            <span className="float-orbit-char-label">{char}</span>
          </span>
        ))}
      </div>

      <div className="float-badge-core">
        <span className="float-badge-glyph" aria-hidden="true">
          ✉
        </span>
      </div>
    </motion.a>
  );
}
