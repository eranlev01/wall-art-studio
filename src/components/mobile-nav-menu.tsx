"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YouTubeIcon,
} from "@/components/icons/social-icons";
import { ArtButton } from "@/components/ui/art-button";
import { services } from "@/data/services";
import { routes } from "@/lib/routes";
import { socialLinks } from "@/lib/social-links";

const PRIMARY_LINKS = [
  { href: routes.portfolio, label: "פורטפוליו" },
  { href: routes.about, label: "אודות" },
  { href: routes.videos, label: "וידאו" },
  { href: routes.contact, label: "צור קשר" },
  { href: routes.themePreview, label: "פלטות", className: "mobile-nav-link-themes" },
] as const;

const SOCIAL = [
  { href: socialLinks.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: socialLinks.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: socialLinks.tiktok, label: "TikTok", Icon: TikTokIcon },
  { href: socialLinks.youtube, label: "YouTube", Icon: YouTubeIcon },
] as const;

type MobileNavMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavMenu({ open, onClose }: MobileNavMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) setServicesOpen(false);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            className="mobile-nav-backdrop"
            aria-label="סגירת תפריט"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          <motion.aside
            id="mobile-nav-panel"
            className="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="תפריט ניווט"
            initial={{ y: "-102%", opacity: 0.6 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-102%", opacity: 0.6 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-nav-panel-inner">
              <header className="mobile-nav-head">
                <Link href={routes.home} className="mobile-nav-logo" onClick={onClose}>
                  [STUDIO <em>NAME]</em>
                  <span className="mobile-nav-tagline">ציורי קיר & גרפיטי</span>
                </Link>
                <button
                  type="button"
                  className="mobile-nav-close"
                  aria-label="סגירת תפריט"
                  onClick={onClose}
                >
                  <span aria-hidden="true">✕</span>
                </button>
              </header>

              <nav className="mobile-nav-body">
                <section className="mobile-nav-group">
                  <button
                    type="button"
                    className={`mobile-nav-group-toggle${servicesOpen ? " open" : ""}`}
                    aria-expanded={servicesOpen}
                    aria-controls="mobile-nav-services-list"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    <span className="mobile-nav-group-title">שירותים</span>
                    <span className="mobile-nav-chevron" aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {servicesOpen && (
                      <motion.ul
                        id="mobile-nav-services-list"
                        className="mobile-nav-subs"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {services.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={`/services/${service.id}`}
                              className="mobile-nav-sub-link"
                              onClick={onClose}
                            >
                              <span className="mobile-nav-sub-num">{service.num}</span>
                              <span className="mobile-nav-sub-text">{service.title}</span>
                              <span className="mobile-nav-sub-bar" aria-hidden="true" />
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href={routes.solutions}
                            className="mobile-nav-sub-link mobile-nav-sub-link-all"
                            onClick={onClose}
                          >
                            <span className="mobile-nav-sub-text">כל השירותים</span>
                            <span className="mobile-nav-sub-bar" aria-hidden="true" />
                          </Link>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </section>

                <ul className="mobile-nav-primary">
                  {PRIMARY_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`mobile-nav-primary-link${"className" in link && link.className ? ` ${link.className}` : ""}`}
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <footer className="mobile-nav-foot">
                <div className="mobile-nav-social">
                  {SOCIAL.map(({ href, label, Icon }) => (
                    <a
                      key={href}
                      href={href}
                      className="mobile-nav-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
                <ArtButton href="https://wa.me/972" variant="g" size="sm" onClick={onClose}>
                  WhatsApp
                </ArtButton>
              </footer>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
