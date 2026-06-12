import type { Metadata } from "next";
import "./theme-preview.css";

export const metadata: Metadata = {
  title: "בחירת פלטת צבעים | אורבנסטייל",
  description: "כלי פנימי להשוואת פלטות צבע לאתר",
  robots: { index: false, follow: false },
};

/** Standalone layout — no site nav/footer so themes preview cleanly */
export default function ThemePreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
