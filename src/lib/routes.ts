/** Hash links must include `/` so they work from any route (not only homepage). */
export const routes = {
  home: "/",
  contact: "/#contact",
  portfolio: "/#portfolio",
  about: "/#about",
  videos: "/#videos",
  solutions: "/#solutions",
  services: "/#services",
  blog: "/#blog",
  themePreview: "/theme-preview",
} as const;
