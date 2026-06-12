import { ArtButton } from "@/components/ui/art-button";
import { notFound } from "next/navigation";
import { DetailPageHero } from "@/components/detail-page-hero";
import { SiteChrome } from "@/components/site-chrome";
import { getAdjacentProjects } from "@/data/project-nav";
import { getProjectBySlug, projects } from "@/data/projects";
import { routes } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "פרויקט לא נמצא" };
  return {
    title: `${project.label} | אורבנסטייל`,
    description: project.desc,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <SiteChrome
      detailNav={{
        section: { label: "פורטפוליו", href: routes.portfolio },
        title: project.label,
        prev: prev
          ? { href: `/portfolio/${prev.slug}`, label: prev.label }
          : undefined,
        next: next
          ? { href: `/portfolio/${next.slug}`, label: next.label }
          : undefined,
      }}
    >
      <DetailPageHero
        category={project.category}
        image={project.src}
        imageAlt={project.label}
        scatterTitle={project.scatterTitle}
      />

      <section className="detail-body">
        <div className="wrap">
          <div className="detail-intro">
            <p>{project.desc}</p>
            <p>{project.challenge}</p>
          </div>

          <div className="detail-meta-grid">
            <div className="detail-meta-card">
              <span className="detail-meta-label">לקוח</span>
              <span className="detail-meta-val">{project.client}</span>
            </div>
            <div className="detail-meta-card">
              <span className="detail-meta-label">מיקום</span>
              <span className="detail-meta-val">{project.location}</span>
            </div>
            <div className="detail-meta-card">
              <span className="detail-meta-label">קטגוריה</span>
              <span className="detail-meta-val">{project.category}</span>
            </div>
          </div>

          <div className="detail-showcase">
            <div className="detail-showcase-bg" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="detail-showcase-img"
              src={project.src}
              alt={project.label}
            />
          </div>

          <div className="detail-result">
            <h2 className="detail-h2">התוצאה</h2>
            <p>{project.result}</p>
          </div>

          <div className="detail-cta-row">
            <ArtButton href={routes.portfolio} variant="ghost">
              ← חזרה לפורטפוליו
            </ArtButton>
            <ArtButton href={routes.contact} variant="y">
              רוצים פרויקט דומה? ←
            </ArtButton>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
