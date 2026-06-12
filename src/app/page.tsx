"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArtButton } from "@/components/ui/art-button";
import { AnimatedTestimonials } from "@/components/animated-testimonials";
import { FloatingContactBadge } from "@/components/floating-contact-badge";
import { HeroSection } from "@/components/hero-section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ScrollParallax } from "@/components/motion/scroll-parallax";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { BrandMarquee } from "@/components/brand-marquee";
import { VideoFanCarousel } from "@/components/video-fan-carousel";
import { SectionDivider } from "@/components/section-divider";
import { SectionWave } from "@/components/section-wave";
import { SprayServiceCards } from "@/components/spray-service-cards";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { easeLuxury } from "@/lib/motion-presets";
import { routes } from "@/lib/routes";

const WaIcon = ({ size = 16 }: { size?: number }) => (
  <svg className="ico-wa" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.554 4.122 1.527 5.853L.057 24l6.304-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.957 0-3.799-.5-5.408-1.38l-.388-.22-4.02 1.054 1.072-3.913-.24-.393C1.893 15.71 1.5 13.903 1.5 12 1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5z" />
  </svg>
);

const SERVICES = services;

const PORTFOLIO = projects;

const VIDEOS = [
  { id: "girKN0BjoGk", title: "ציורי קיר" },
  { id: "UteA-4gonv8", title: "עבודה בשטח" },
  { id: "JAi4gjxkvAk", title: "סטודיו בפעולה" },
  { id: "jfov5YUYq_I", title: "פרויקט גרפיטי" },
  { id: "ykOourtmsfM", title: "פרויקט חינוכי" },
  { id: "JrzaiqkUx0Y", title: "אמנות ציבורית" },
  { id: "OkMkJpFECuw", title: "גרפיטי לייב" },
  { id: "MgVIQBnCqdg", title: "מאחורי הקלעים" },
];

const CLIENTS = [
  "ארומה ישראל", "KFC ישראל", "אלטשולר שחם", "עיריית תל אביב",
  "ישרוטל", "גוגל ישראל", "חוף אורנים", "בית ספר הילל",
];

const TESTIMONIALS = [
  { q: "בשדרות העם הצרפתי עיטר ארון תקשורת והצליח לשלב אותו בנוף הסובב. יפיפה.", init: "ג.ג", name: "גלית גולוב", role: "גוגל" },
  { q: "יצא לי לעבוד מספר אירועים בהם הביא את יצירותיו בלייב. מוכשר ברמות, מקצועי, ומפיח נשמה באומנות. ממליצה בכל ליבי.", init: "ת.ב", name: "תכלת בן חיים", role: "גוגל" },
  { q: "הזמנו לגרפיטי קיר בחנות. שירות אדיב ומקצועי עם המון סבלנות ועבודה מהלב. קיבלנו בדיוק כמו שחלמנו. פשוט הגשמת לנו חלום!", init: "א.נ", name: "אסתי.נ", role: "גוגל" },
  { q: "עבדתי בציור קירות בפרויקט עיצוב חצר בית ספר. קשוב לבקשות ועמד בלוחות זמנים צפופים. תוצאה משמחת לב ומוצלחת מאד!", init: "J", name: "Julie Levy-Peled", role: "גוגל" },
  { q: "פניתי לאמן הגרפיטי, ביקשתי פרחים — כי זה מה שרוח'לה אוהבת. הגיע בליל גשם וברקים, וזה מה שחיכה לאמא בבוקר. אמא שמחה מאוד.", init: "S", name: "Silvia Moyal", role: "גוגל" },
];

const BLOG_POSTS = [
  { tag: "טרנדים", date: "ינואר 2025", title: "אשליות אופטיות ועידן האינסטגרם: ציורי קיר חווייתיים שמושכים קהלים", excerpt: "בשנת 2025 הקירות כבר לא רק מדברים — הם מתעתעים.", bg: "linear-gradient(135deg,#1d1d1d 0%,#232323 50%,#1a1a1a 100%)" },
  { tag: "אמנות ציבורית", date: "פברואר 2025", title: "אמנות רחוב כמשאב תיירותי וכלכלי", excerpt: "כיצד ציורי קיר הפכו למשאב כלכלי משמעותי בערים רבות.", bg: "linear-gradient(135deg,#1a1d1d 0%,#202424 50%,#181b1b 100%)" },
  { tag: "גרפיטי", date: "מרץ 2025", title: "טרנדים ומגמות בציורי קיר לשנת 2025", excerpt: "שנת 2025 עומדת בסימן התפתחות חדה בעולם אמנות הרחוב.", bg: "linear-gradient(135deg,#1d1a1a 0%,#252020 50%,#1a1818 100%)" },
];

export default function Home() {
  const [modalVid, setModalVid] = useState<string | null>(null);
  const [formState, setFormState] = useState<"idle" | "sent">("idle");
  const [testIdx, setTestIdx] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShowTop(y > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const aoEls = document.querySelectorAll<HTMLElement>(".ao");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    aoEls.forEach((el) => {
      if (el.closest(".hero")) el.classList.add("in");
      else obs.observe(el);
    });

    const statsEl = document.querySelector(".stats");
    let counted = false;
    const countObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !counted) {
        counted = true;
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          const target = parseInt(el.dataset.count!);
          const step = target / (1800 / 16);
          let cur = 0;
          const t = setInterval(() => {
            cur = Math.min(cur + step, target);
            el.textContent = Math.floor(cur) + "+";
            if (cur >= target) clearInterval(t);
          }, 16);
        });
      }
    }, { threshold: 0.4 });
    if (statsEl) countObs.observe(statsEl);

    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalVid(null); };
    document.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
      countObs.disconnect();
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    const t = setInterval(() => setTestIdx((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, [testIdx]);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sent");
    setTimeout(() => { setFormState("idle"); (e.target as HTMLFormElement).reset(); }, 3500);
  }

  return (
    <>
      <ScrollProgress />
      <FloatingContactBadge />

      {/* NAV */}
      <SiteNav />

      {/* HERO */}
      <HeroSection />

      <BrandMarquee />

      {/* PORTFOLIO — visual proof early */}
      <section className="portfolio" id="portfolio">
        {/* Left orange drip */}
        <ScrollParallax speed={-0.1} className="deco-paint deco-portfolio" aria-hidden="true">
          <svg viewBox="0 0 55 340" width="55" height="340" className="deco-fill-sec" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L55 0 L55 215 Q28 272 0 215 Z" opacity=".08"/>
            <ellipse cx="19" cy="282" rx="14" ry="28" opacity=".065"/>
            <ellipse cx="42" cy="324" rx="10" ry="19" opacity=".05"/>
          </svg>
        </ScrollParallax>
        <div className="wrap">
          <Reveal>
            <div className="port-head">
              <span className="tag">פורטפוליו</span>
              <h2 className="sh">העבודות שלנו</h2>
            </div>
          </Reveal>
          <Stagger className="port-grid port-bento" stagger={0.08}>
            {PORTFOLIO.map((p, i) => (
              <StaggerItem key={p.slug} className={`port-cell port-cell-${i + 1}`}>
                <Link href={`/portfolio/${p.slug}`} className="port-link">
                  <motion.div
                    className="port-item"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.35, ease: easeLuxury }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.src} alt={p.label} loading="lazy" />
                    <div className="port-ov">
                      <div className="port-label">{p.label}{p.sub ? <> | <span>{p.sub}</span></> : null}</div>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.2}>
            <div className="port-cta">
              <ArtButton href={routes.contact} variant="ghost">
                לכל הפרויקטים ←
              </ArtButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionWave variant="tag" fill="var(--bg)" />

      <SprayServiceCards />

      <SectionWave variant="drip" fill="var(--bg2)" flip />

      {/* ABOUT — trust before deep dive */}
      <section className="about" id="about">
        <ScrollParallax speed={0.08} className="deco-paint deco-about" aria-hidden="true">
          <svg viewBox="0 0 180 170" width="180" height="170" className="deco-fill-sec" xmlns="http://www.w3.org/2000/svg">
            <path d="M180 0 L180 170 L94 170 Q50 126 76 72 Q104 20 180 0 Z" opacity=".07"/>
          </svg>
        </ScrollParallax>
        <div className="wrap">
          <div className="about-grid">
            <ScrollParallax speed={-0.12}>
              <Reveal className="about-img" from="end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://www.urbanstyle.co.il/wp-content/uploads/2020/08/%D7%A4%D7%99%D7%99%D7%9F-3-%D7%A1%D7%98%D7%95%D7%93%D7%99%D7%95.png" alt="הצוות שלנו" loading="lazy" />
            </Reveal>
            </ScrollParallax>
            <div className="about-text">
              <Reveal from="start"><span className="tag">אודות</span></Reveal>
              <Reveal delay={0.08}><h2 className="sh">הסיפור שלנו</h2></Reveal>
              <Reveal delay={0.16}>
                <p className="about-copy">
                  הסטודיו הוא סטודיו ייחודי לציורי קיר, גרפיטי ואמנות ציבורית. מאז הקמתנו, אנחנו הופכים קירות אפורים לחוויות ויזואליות שמספרות סיפור — לעסקים, בתי ספר, מוסדות ציבור ומרחבים עירוניים ברחבי ישראל.<br /><br />
                  כל פרויקט נבנה מאפס: מהפגישה הראשונה ועד המכחול האחרון, אנחנו מביאים קונספט מותאם, ביצוע מושלם ותוצאה שנשארת לנצח.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="stats">
                  <div><div className="stat-n" data-count="15">15+</div><div className="stat-l">שנות ניסיון</div></div>
                  <div><div className="stat-n" data-count="200">200+</div><div className="stat-l">פרויקטים</div></div>
                  <div><div className="stat-n" data-count="50">50+</div><div className="stat-l">לקוחות מרוצים</div></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SectionWave variant="splash" fill="var(--bg)" />

      {/* SERVICES — detailed editorial */}
      <section className="services" id="services">
        <Reveal>
          <div className="svc-header">
            <span className="tag">שירותינו</span>
            <h2 className="sh">כל מה שאנחנו מציעים</h2>
          </div>
        </Reveal>
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.05} from={i % 2 === 0 ? "start" : "end"}>
            <div className={`svc-ed-row ${i % 2 === 0 ? "odd img-left" : "even img-right"}`}>
              <div className="svc-ed-text">
                <div className="svc-ed-bg-num">{s.num}</div>
                <div className="svc-ed-num">{s.num}</div>
                <h3 className="svc-ed-title">{s.title}</h3>
                <p className="svc-ed-desc">{s.desc}</p>
                <Link href={`/services/${s.id}`} className="svc-ed-cta">למידע נוסף ←</Link>
              </div>
              <div className="svc-ed-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} loading="lazy" />
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <SectionWave variant="roller" fill="var(--bg2)" />

      {/* VIDEOS */}
      <section className="videos" id="videos">
        <div className="wrap">
          <Reveal>
            <div className="vid-head">
              <span className="tag">בסטודיו</span>
              <h2 className="sh">הסטודיו בפעולה</h2>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <VideoFanCarousel videos={VIDEOS} onPlay={setModalVid} />
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* VIDEO MODAL */}
      <div className={`vmodal${modalVid ? " open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) setModalVid(null); }}>
        <div className="vmodal-in">
          <button className="vmodal-x" onClick={() => setModalVid(null)}>✕</button>
          {modalVid && <iframe src={`https://www.youtube.com/embed/${modalVid}?autoplay=1&rel=0`} allow="autoplay; fullscreen" allowFullScreen />}
        </div>
      </div>


      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <ScrollParallax speed={-0.08} className="deco-paint deco-testimonials" aria-hidden="true">
          <svg viewBox="0 0 55 400" width="55" height="100%" preserveAspectRatio="none" className="deco-fill-acc" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L0 400 L55 400 L55 268 Q55 208 22 186 Q0 166 0 86 Z" opacity=".07"/>
            <ellipse cx="38" cy="346" rx="14" ry="24" opacity=".056"/>
          </svg>
        </ScrollParallax>
        <div className="wrap">
          <Reveal><span className="tag">המלצות</span></Reveal>
          <Reveal delay={0.08}><h2 className="sh">מה הלקוחות אומרים</h2></Reveal>
          <Reveal delay={0.16}>
            <AnimatedTestimonials
              items={TESTIMONIALS}
              index={testIdx}
              onSelect={setTestIdx}
            />
          </Reveal>
        </div>
      </section>

      <SectionWave variant="drip" fill="var(--bg)" />

      {/* RETURNING CLIENTS */}
      <section className="ret-clients" id="clients">
        <div className="wrap">
          <Reveal>
            <div className="ret-head">
              <h2>לקוחות שחוזרים שוב ושוב</h2>
              <p>כי התוצאות מדברות בעד עצמן</p>
            </div>
          </Reveal>
          <Stagger className="ret-grid" stagger={0.06}>
            {CLIENTS.map((name) => (
              <StaggerItem key={name}>
                <motion.div className="ret-box" whileHover={{ y: -4 }}>
                  <div className="ret-logo-ph"></div>
                  <div className="ret-name">{name}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <SectionWave variant="splash" fill="var(--bg)" flip />

      {/* COLLABORATION BANNER */}
      <section className="collab" id="collab">
        <ScrollParallax speed={0.1} className="collab-drip">
          <svg viewBox="0 0 70 420" width="70" height="100%" preserveAspectRatio="none" className="deco-fill-acc" xmlns="http://www.w3.org/2000/svg">
            <path d="M70 0 L70 420 L0 420 L0 240 Q0 180 35 160 Q70 140 70 80 Z" opacity=".12"/>
            <ellipse cx="22" cy="360" rx="14" ry="26" opacity=".18"/>
            <ellipse cx="50" cy="390" rx="9" ry="18" opacity=".14"/>
          </svg>
        </ScrollParallax>
        <Reveal>
          <div className="collab-inner banner-accent">
            <div className="collab-tag">שיתופי פעולה</div>
            <h2 className="collab-h2">רוצים לעבוד יחד?<br />אנחנו מחפשים קולאבים</h2>
            <p className="collab-body">אמנים, מותגים, ערים וארגונים — בואו נצור משהו גדול ביחד. פתוחים לפרויקטים מעניינים ואמנים שרוצים להצטרף לסטודיו.</p>
            <div className="collab-btns">
              <ArtButton href={routes.contact} variant="y">
                שלחו הצעה
              </ArtButton>
              <ArtButton href={routes.contact} variant="ghost">
                הצטרפו כאמן
              </ArtButton>
            </div>
          </div>
        </Reveal>
      </section>

      <SectionWave variant="roller" fill="var(--bg)" />

      {/* BLOG */}
      <section className="blog" id="blog">
        <ScrollParallax speed={-0.06} className="deco-paint deco-blog" aria-hidden="true">
          <svg viewBox="0 0 220 130" width="220" height="130" className="deco-fill-sec" xmlns="http://www.w3.org/2000/svg">
            <path d="M220 130 L0 130 L0 58 Q84 2 150 44 Q200 74 220 4 Z" opacity=".07"/>
            <ellipse cx="54" cy="112" rx="28" ry="16" opacity=".054"/>
          </svg>
        </ScrollParallax>
        <div className="wrap">
          <Reveal>
            <div className="blog-head">
              <span className="tag">מהבלוג</span>
              <h2 className="sh" style={{ marginTop: "4px" }}>
                <span className="blog-title-wrap">
                  מהבלוג שלנו
                  <svg className="blog-squiggle" viewBox="0 0 220 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="deco-stroke-acc" d="M2 7 Q28 1 55 7 Q82 13 110 7 Q138 1 165 7 Q192 13 218 7" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  </svg>
                </span>
              </h2>
            </div>
          </Reveal>
          <Stagger className="blog-grid" stagger={0.1}>
            {BLOG_POSTS.map((post, i) => (
              <StaggerItem key={i}>
                <motion.article className="blog-card" whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: easeLuxury }}>
                  <div className="blog-img">
                    <div className="blog-img-fill" style={{ background: post.bg }}></div>
                    <div className="blog-img-grad"></div>
                    <span className="blog-tag-pill">{post.tag}</span>
                  </div>
                  <div className="blog-body">
                    <div className="blog-date">{post.date}</div>
                    <div className="blog-card-title">{post.title}</div>
                    <div className="blog-excerpt">{post.excerpt}</div>
                    <a href="#" className="blog-link">לקריאה נוספת →</a>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.15}>
            <div className="blog-cta">
              <ArtButton href="#" variant="ghost">
                לכל הכתבות ←
              </ArtButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionWave variant="drip" fill="var(--bg2)" />

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="contact-grid">
            <Reveal>
              <div>
                <span className="tag">צור קשר</span>
                <h2 className="sh" style={{ marginBottom: "16px" }}>נשמח לשמוע ממכם</h2>
                <p className="contact-sub">השאירו פרטים ונחזור אליכם תוך 24 שעות, או פשוט כתבו לנו ישירות בוואטסאפ — אנחנו זמינים לכל שאלה.</p>
                <div className="wa-wrap">
                  <ArtButton href="https://wa.me/972" variant="g" size="lg" className="btn-block">
                    <WaIcon size={24} /> שלחו לנו הודעה בוואטסאפ
                  </ArtButton>
                  <div className="wa-note">זמינים ראשון–שישי, 9:00–18:00</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <form className="cform" onSubmit={handleFormSubmit}>
                <div>
                  <label className="flabel" htmlFor="fname">שם מלא</label>
                  <input className="finput" id="fname" type="text" placeholder="ישראל ישראלי" required />
                </div>
                <div>
                  <label className="flabel" htmlFor="fphone">טלפון</label>
                  <input className="finput" id="fphone" type="tel" placeholder="050-000-0000" required />
                </div>
                <div>
                  <label className="flabel" htmlFor="fmsg">הודעה</label>
                  <textarea className="ftarea" id="fmsg" placeholder="ספרו לנו על הפרויקט שלכם..." required />
                </div>
                <ArtButton
                  type="submit"
                  variant={formState === "sent" ? "g" : "o"}
                  className="fsub"
                  disabled={formState === "sent"}
                >
                  {formState === "sent" ? "✓ נשלח בהצלחה!" : "שלח הודעה →"}
                </ArtButton>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <motion.button
        type="button"
        className={`top-btn${showTop ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="חזרה למעלה"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        TOP
      </motion.button>

      <SiteFooter />
    </>
  );
}
