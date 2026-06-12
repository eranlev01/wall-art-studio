type IconProps = { size?: number; className?: string };

export function InstagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 22v-8h2.7l.4-3.1H13.5V9.1c0-.9.2-1.5 1.5-1.5h1.6V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10.9H7v3.1h2.9V22h3.6z" />
    </svg>
  );
}

export function TikTokIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.6 5.2c.9 1.1 2.1 1.9 3.4 2.2v3.1c-1.2 0-2.3-.3-3.4-.9v6.8c0 3.4-2.8 5.6-5.8 5.6-2.9 0-5.3-2.1-5.3-5.1 0-3 2.4-5.1 5.6-5.1.4 0 .9.1 1.3.2v3.2c-.4-.2-.8-.3-1.2-.3-1.3 0-2.3 1-2.3 2.4 0 1.4 1 2.4 2.3 2.4 1.4 0 2.3-1 2.3-2.7V2h3.1v3.2z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.8 8.001a2.5 2.5 0 0 0-1.76-1.765C18.254 6 12 6 12 6s-6.254 0-8.04.236A2.5 2.5 0 0 0 2.2 8.001 26.4 26.4 0 0 0 2 12a26.4 26.4 0 0 0 .2 3.999 2.5 2.5 0 0 0 1.76 1.765C5.746 18 12 18 12 18s6.254 0 8.04-.236a2.5 2.5 0 0 0 1.76-1.765A26.4 26.4 0 0 0 22 12a26.4 26.4 0 0 0-.2-3.999zM10 15.464V8.536L16 12l-6 3.464z" />
    </svg>
  );
}
