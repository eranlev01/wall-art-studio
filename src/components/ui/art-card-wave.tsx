/** Curved divider between colored header and card body (testimonial-style) */
export function ArtCardWave({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`art-card-wave ${className}`.trim()}
      viewBox="0 0 400 32"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 32 L0 14 Q100 0 200 12 Q300 26 400 8 L400 32 Z"
        fill="currentColor"
      />
    </svg>
  );
}
