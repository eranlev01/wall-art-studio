"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { ScrollParallax } from "@/components/motion/scroll-parallax";
import { highlightServices } from "@/data/services";
import { easeLuxury } from "@/lib/motion-presets";

export function SprayServiceCards() {
  return (
    <section className="spray-services" id="solutions">
      <div className="wrap">
        <ScrollParallax speed={0.06}>
          <Reveal>
            <div className="spray-head">
              <span className="tag">מה אנחנו עושים</span>
              <h2 className="spray-mega">פתרונות<br />ציור קיר</h2>
              <p className="spray-intro">
                שלושה תחומי מומחיות — כל פרויקט מתחיל ברעיון ומסתיים ביצירה שנשארת על הקיר לשנים.
              </p>
            </div>
          </Reveal>
        </ScrollParallax>

        <Stagger className="spray-grid" stagger={0.14}>
          {highlightServices.map((item, index) => (
            <StaggerItem key={item.id}>
              <ScrollParallax speed={index === 1 ? 0.14 : index === 0 ? 0.08 : 0.11}>
              <motion.article
                className="spray-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.45, ease: easeLuxury }}
              >
                <Link href={`/services/${item.id}`} className="spray-card-link">
                  <div
                    className="spray-frame"
                    style={
                      {
                        "--spray-accent":
                          index % 2 === 0 ? "var(--acc)" : "var(--sec)",
                      } as React.CSSProperties
                    }
                  >
                    <span className="spray-num">{item.num}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt={item.title} loading="lazy" />
                    <div className="spray-splash" aria-hidden="true" />
                  </div>
                  <div className="spray-body">
                    <h3 className="spray-title">{item.title}</h3>
                    <p className="spray-desc">{item.desc}</p>
                    <span className="spray-link">גלו עוד ←</span>
                  </div>
                </Link>
                <svg
                  className="spray-drip"
                  viewBox="0 0 120 28"
                  aria-hidden="true"
                  style={
                    {
                      "--spray-accent":
                        index % 2 === 0 ? "var(--acc)" : "var(--sec)",
                    } as React.CSSProperties
                  }
                >
                  <path
                    d="M0 0 H120 V6 Q95 6 88 14 Q82 22 72 14 Q62 4 52 14 Q42 24 32 14 Q22 4 12 14 Q6 20 0 14 Z"
                    opacity="0.85"
                  />
                </svg>
              </motion.article>
              </ScrollParallax>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
