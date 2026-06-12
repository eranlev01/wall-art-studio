import Link from "next/link";
import { ArtButton } from "@/components/ui/art-button";
import { notFound } from "next/navigation";
import { DetailPageHero } from "@/components/detail-page-hero";
import { SiteChrome } from "@/components/site-chrome";
import { getProjectBySlug } from "@/data/projects";
import { getAdjacentServices } from "@/data/service-nav";
import { getServiceById, services } from "@/data/services";
import { routes } from "@/lib/routes";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return { title: "שירות לא נמצא" };
  return {
    title: `${service.title} | אורבנסטייל`,
    description: service.desc,
  };
}

export default async function ServicePage({ params }: Props) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) notFound();

  const { prev, next } = getAdjacentServices(id);

  const relatedProjects = service.projects
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean);

  return (
    <SiteChrome
      detailNav={{
        section: { label: "שירותים", href: routes.solutions },
        title: service.title,
        prev: prev
          ? { href: `/services/${prev.id}`, label: prev.title }
          : undefined,
        next: next
          ? { href: `/services/${next.id}`, label: next.title }
          : undefined,
      }}
    >
      <DetailPageHero
        category={service.category}
        image={service.img}
        imageAlt={service.title}
        scatterTitle={service.scatterTitle}
      />

      <section className="detail-body">
        <div className="wrap">
          <div className="detail-intro">
            <p>{service.intro[0]}</p>
            <p>{service.intro[1]}</p>
          </div>

          <div className="detail-tagline">
            <span className="detail-tagline-num">{service.num}</span>
            <p>{service.tagline}</p>
          </div>

          <div className="detail-benefits">
            <h2 className="detail-h2">למה זה עובד</h2>
            <ul>
              {service.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="detail-audience">
            <h2 className="detail-h2">מתאים ל</h2>
            <div className="detail-pills">
              {service.audience.map((a) => (
                <span key={a} className="detail-pill">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {relatedProjects.length > 0 && (
            <div className="detail-related">
              <h2 className="detail-h2">פרויקטים קשורים</h2>
              <div className="detail-related-grid">
                {relatedProjects.map((p) =>
                  p ? (
                    <Link
                      key={p.slug}
                      href={`/portfolio/${p.slug}`}
                      className="detail-related-card"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.src} alt={p.label} loading="lazy" />
                      <div className="detail-related-info">
                        <span className="detail-related-cat">{p.category}</span>
                        <span className="detail-related-title">{p.label}</span>
                      </div>
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          )}

          <div className="detail-cta-row">
            <ArtButton href={routes.solutions} variant="ghost">
              ← כל השירותים
            </ArtButton>
            <ArtButton href={routes.contact} variant="y">
              בואו נדבר ←
            </ArtButton>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
