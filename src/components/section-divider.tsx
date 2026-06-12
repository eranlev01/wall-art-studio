type SectionDividerProps = {
  className?: string;
};

/** Gentle break between same-background sections — no paint wave */
export function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <div
      className={`section-divider${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    >
      <div className="section-divider-band" />
      <div className="section-divider-mark">
        <span className="section-divider-gem">✦</span>
      </div>
    </div>
  );
}
