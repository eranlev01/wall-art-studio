import type { Metadata } from "next";
import { Amatic_SC, Rubik, Heebo } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor";
import { SiteThemeProvider } from "@/components/site-theme-provider";
import { THEME_INIT_SCRIPT } from "@/lib/theme-storage";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  weight: ["400", "700", "900"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
});

const graffiti = Amatic_SC({
  variable: "--font-graffiti",
  subsets: ["hebrew", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "אורבנסטייל | ציורי קיר וגרפיטי",
  description: "סטודיו לציורי קיר, גרפיטי ואמנות ציבורית ברחבי ישראל",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} ${heebo.variable} ${graffiti.variable}`}
      data-theme="spray-cyan"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body suppressHydrationWarning>
        <SiteThemeProvider />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
