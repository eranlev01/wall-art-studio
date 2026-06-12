"use client";

import { SprayCanIcon } from "@/components/cursor-spray-can-icon";
import { TextAnimate } from "@/components/ui/text-animate";

export function HeroPillBadge() {
  return (
    <div className="hero-pill">
      <svg
        className="hero-pill-frame"
        viewBox="0 0 340 52"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Brush-stroke fill wash */}
        <path
          className="hero-pill-fill"
          d="M14 10 C48 4 292 5 318 12 C326 18 324 36 312 40 C220 46 90 44 18 38 C8 32 6 18 14 10 Z"
        />
        {/* Hand-drawn outer stroke */}
        <path
          className="hero-pill-stroke"
          d="M12 9 C46 3 294 4 320 11 C329 17 327 37 314 41 C218 47 88 45 16 39 C6 33 4 17 12 9"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Sketchy second pass */}
        <path
          className="hero-pill-stroke hero-pill-stroke-sketch"
          d="M10 11 C44 6 296 7 322 14 C328 20 326 34 316 38 C210 42 92 40 20 36 C12 30 10 16 10 11"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Paint drips */}
        <path
          className="hero-pill-drip"
          d="M28 41 Q26 46 24 50 M302 39 Q304 44 306 48"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle className="hero-pill-splat" cx="32" cy="48" r="2.2" />
        <circle className="hero-pill-splat hero-pill-splat-sec" cx="308" cy="47" r="1.6" />
      </svg>

      <div className="hero-pill-content">
        <span className="hero-pill-icon" aria-hidden="true">
          <SprayCanIcon className="hero-pill-spray" spraying />
        </span>
        <TextAnimate
          as="span"
          by="word"
          animation="blurInUp"
          startOnView={false}
          once
          delay={0.7}
          duration={0.4}
          className="hero-pill-text"
        >
          סטודיו ציורי קיר & גרפיטי — ישראל
        </TextAnimate>
      </div>
    </div>
  );
}
