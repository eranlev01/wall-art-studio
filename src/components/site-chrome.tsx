import { SiteFooter } from "@/components/site-footer";
import { FloatingContactBadge } from "@/components/floating-contact-badge";
import { SiteNav, type DetailNavContext } from "@/components/site-nav";
import { ScrollProgress } from "@/components/ui/scroll-progress";

type SiteChromeProps = {
  children: React.ReactNode;
  detailNav?: DetailNavContext;
};

export function SiteChrome({ children, detailNav }: SiteChromeProps) {
  return (
    <>
      <ScrollProgress />
      <FloatingContactBadge />
      <SiteNav detailNav={detailNav} />
      {children}
      <SiteFooter />
    </>
  );
}
