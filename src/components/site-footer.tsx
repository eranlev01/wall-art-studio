import Link from "next/link";
import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from "@/components/icons/social-icons";
import { services } from "@/data/services";
import { routes } from "@/lib/routes";
import { socialLinks } from "@/lib/social-links";

const NAV_LINKS = [
  { href: routes.home, label: "בית" },
  { href: routes.portfolio, label: "פורטפוליו" },
  { href: routes.about, label: "אודות" },
  { href: routes.videos, label: "וידאו" },
  { href: routes.blog, label: "בלוג" },
  { href: routes.contact, label: "צור קשר" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="foot-grid wrap">
        <div className="foot-brand">
          <Link href={routes.home} className="foot-logo">
            [STUDIO <em>NAME]</em>
          </Link>
          <p className="foot-tagline">סטודיו לציורי קיר, גרפיטי ואמנות ציבורית ברחבי ישראל</p>
          <div className="foot-social">
            <a
              href={socialLinks.instagram}
              className="foot-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram — style_itay"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={socialLinks.facebook}
              className="foot-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href={socialLinks.tiktok}
              className="foot-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok — styleitay"
            >
              <TikTokIcon size={18} />
            </a>
            <a
              href={socialLinks.youtube}
              className="foot-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube — Urban Style"
            >
              <YouTubeIcon size={18} />
            </a>
          </div>
        </div>

        <div className="foot-col">
          <h3 className="foot-col-title">ניווט</h3>
          <ul className="foot-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="foot-col">
          <h3 className="foot-col-title">שירותים</h3>
          <ul className="foot-list">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={`/services/${service.id}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="foot-bar wrap">
        <p className="foot-copy">© {year} [שם הסטודיו]. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}
