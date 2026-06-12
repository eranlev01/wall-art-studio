"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { NavServicesDropdown } from "@/components/nav-services-dropdown";
import { ArtButton } from "@/components/ui/art-button";
import { routes } from "@/lib/routes";

const WaIcon = ({ size = 15 }: { size?: number }) => (
  <svg className="ico-wa" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.554 4.122 1.527 5.853L.057 24l6.304-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.957 0-3.799-.5-5.408-1.38l-.388-.22-4.02 1.054 1.072-3.913-.24-.393C1.893 15.71 1.5 13.903 1.5 12 1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5z" />
  </svg>
);

export type DetailNavContext = {
  section: { label: string; href: string };
  title: string;
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

type SiteNavProps = {
  detailNav?: DetailNavContext;
};

export function SiteNav({ detailNav }: SiteNavProps) {
  const shellRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      shellRef.current?.classList.toggle("nav-scrolled", window.scrollY > 48);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={shellRef}
      className={`nav-shell${detailNav ? " nav-shell-detail" : ""}`}
    >
      <div className="nav-pill">
        <nav className="nav" id="nav">
          <Link href={routes.home} className="nav-logo">
            [STUDIO <em>NAME]</em>
          </Link>
          <ul className="nav-links">
            <NavServicesDropdown />
            <li><Link href={routes.portfolio}>פורטפוליו</Link></li>
            <li><Link href={routes.about}>אודות</Link></li>
            <li><Link href={routes.videos}>וידאו</Link></li>
            <li><Link href={routes.contact}>צור קשר</Link></li>
            <li><Link href={routes.themePreview} className="nav-link-themes">פלטות</Link></li>
          </ul>
          <ArtButton href="https://wa.me/972" variant="g" size="sm">
            <WaIcon /> WhatsApp
          </ArtButton>
        </nav>

        {detailNav && (
          <div className="nav-context wrap">
            <Link href={detailNav.section.href} className="nav-context-section">
              {detailNav.section.label}
            </Link>
            <span className="nav-context-sep" aria-hidden="true">/</span>
            <span className="nav-context-title">{detailNav.title}</span>
            {(detailNav.prev || detailNav.next) && (
              <span className="nav-context-pager">
                {detailNav.prev && (
                  <Link href={detailNav.prev.href} className="nav-context-step" title={detailNav.prev.label}>
                    →
                  </Link>
                )}
                {detailNav.next && (
                  <Link href={detailNav.next.href} className="nav-context-step" title={detailNav.next.label}>
                    ←
                  </Link>
                )}
              </span>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
