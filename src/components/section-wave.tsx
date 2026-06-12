import type { CSSProperties } from "react";

type WaveVariant = "roller" | "drip" | "splash" | "tag";

/** Hand-painted bottom edges — irregular, not geometric */
const PAINT_FILLS: Record<WaveVariant, string> = {
  roller:
    "M0,118 L0,78 C62,58 118,96 198,72 C278,48 342,88 428,66 C514,44 588,92 672,70 C756,48 842,86 928,64 C1014,42 1098,90 1184,68 C1270,46 1356,82 1440,74 L1440,118 Z",
  drip:
    "M0,118 L0,82 Q118,104 224,68 Q330,32 446,88 Q562,44 668,76 Q774,108 890,62 Q1006,16 1112,84 Q1218,52 1324,78 Q1380,92 1440,70 L1440,118 Z",
  splash:
    "M0,118 L0,70 C88,92 156,54 244,80 C332,106 404,48 492,74 C580,100 652,42 740,68 C828,94 900,36 988,62 C1076,88 1148,30 1236,56 C1324,82 1396,24 1440,66 L1440,118 Z",
  tag:
    "M0,118 L0,84 C48,72 92,98 148,68 C204,38 268,92 324,62 C380,32 436,88 492,58 C548,28 604,84 660,54 C716,24 772,80 828,50 C884,20 940,76 996,46 C1052,16 1108,72 1164,42 C1220,12 1276,68 1332,38 C1388,8 1414,58 1440,72 L1440,118 Z",
};

/** Offset wash layer — soft spray under the main edge */
const PAINT_WASH: Record<WaveVariant, string> = {
  roller:
    "M0,118 L0,86 C70,68 132,102 210,78 C288,54 356,96 434,72 C512,48 580,90 658,66 C736,42 804,84 882,60 C960,36 1028,78 1106,54 C1184,30 1252,72 1330,48 C1408,24 1440,68 1440,68 L1440,118 Z",
  drip:
    "M0,118 L0,90 Q128,108 240,74 Q352,40 468,92 Q584,44 696,80 Q808,116 924,68 Q1040,20 1152,86 Q1264,52 1376,82 L1440,76 L1440,118 Z",
  splash:
    "M0,118 L0,78 C96,98 168,56 264,76 C360,96 432,54 528,74 C624,94 696,52 792,72 C888,92 960,50 1056,70 C1152,90 1224,48 1320,68 C1416,88 1440,72 1440,72 L1440,118 Z",
  tag:
    "M0,118 L0,88 C52,76 96,102 152,72 C208,42 272,96 328,66 C384,36 440,92 496,62 C552,32 608,88 664,58 C720,28 776,84 832,54 C888,24 944,80 1000,50 C1056,20 1112,76 1168,46 C1224,16 1280,72 1336,42 C1392,12 1418,62 1440,76 L1440,118 Z",
};

type SectionWaveProps = {
  fill?: string;
  variant?: WaveVariant;
  flip?: boolean;
  className?: string;
};

/** Graffiti / paint-stroke divider between sections */
export function SectionWave({
  fill = "var(--bg)",
  variant = "roller",
  flip = false,
  className = "",
}: SectionWaveProps) {
  return (
    <div
      className={`section-paint${flip ? " section-paint-flip" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--wave-fill": fill } as CSSProperties}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 118" preserveAspectRatio="none">
        <path className="section-paint-wash" d={PAINT_WASH[variant]} />
        <path className="section-paint-fill" d={PAINT_FILLS[variant]} />
        <ellipse className="section-paint-drip" cx="312" cy="112" rx="5" ry="11" />
        <ellipse className="section-paint-drip section-paint-drip-sec" cx="684" cy="114" rx="4" ry="9" />
        <ellipse className="section-paint-drip" cx="1044" cy="110" rx="6" ry="13" />
        <circle className="section-paint-splat" cx="428" cy="98" r="9" />
        <circle className="section-paint-splat section-paint-splat-sm" cx="892" cy="94" r="5" />
        <circle className="section-paint-splat section-paint-splat-sec" cx="1188" cy="100" r="7" />
      </svg>
    </div>
  );
}
