type SprayCanIconProps = {
  className?: string;
  spraying?: boolean;
};

/** Minimal spray-can glyph — colors follow site theme via CSS */
export function SprayCanIcon({ className, spraying = false }: SprayCanIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="10"
        y="18"
        width="18"
        height="34"
        rx="2.5"
        fill="#1a1a1a"
        className="spray-can-stroke-acc"
        strokeWidth="1.5"
      />
      <rect x="10" y="28" width="18" height="9" className="spray-can-fill-sec" opacity="0.85" />
      <rect x="10" y="28" width="18" height="2" className="spray-can-fill-acc" opacity="0.6" />
      <path
        d="M10 18 L12.5 11 H25.5 L28 18"
        fill="#222"
        className="spray-can-stroke-acc"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="14" y="6" width="10" height="6" rx="1.5" fill="#333" stroke="#888" strokeWidth="1" />
      <rect x="24" y="7" width="8" height="4" rx="1" className="spray-can-fill-acc" />
      <circle cx="36" cy="9" r="1.5" className="spray-can-fill-sec" />

      <g className={spraying ? "spray-can-mist spray-can-mist-active" : "spray-can-mist"}>
        <path
          d="M36 9 C42 6 46 4 50 2"
          className="spray-can-stroke-acc"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M36 9 C43 9 48 8 52 7"
          className="spray-can-stroke-sec"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.75"
        />
        <path
          d="M36 9 C42 12 47 14 51 16"
          className="spray-can-stroke-acc"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <circle cx="44" cy="6" r="2" className="spray-can-fill-acc" opacity="0.5" />
        <circle cx="48" cy="9" r="1.5" className="spray-can-fill-sec" opacity="0.45" />
        <circle cx="46" cy="13" r="1.8" className="spray-can-fill-acc" opacity="0.35" />
      </g>
    </svg>
  );
}
