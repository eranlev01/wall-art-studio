"use client";

import { DetailPageHeadline } from "@/components/detail-page-headline";
import type { ScatterWord } from "@/data/services";

type DetailPageHeroProps = {
  category: string;
  image: string;
  imageAlt: string;
  scatterTitle: ScatterWord[];
};

export function DetailPageHero({
  category,
  image,
  imageAlt,
  scatterTitle,
}: DetailPageHeroProps) {
  return (
    <section className="detail-hero">
      <div
        className="detail-hero-bg"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden="true"
      />
      <div className="detail-hero-grad" aria-hidden="true" />
      <div className="detail-hero-inner wrap">
        <span className="detail-cat">{category}</span>
        <DetailPageHeadline words={scatterTitle} />
      </div>
      <svg
        className="detail-curve"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,80 C360,120 720,40 1080,70 C1260,85 1380,95 1440,88 L1440,120 L0,120 Z"
          fill="#0D0D0D"
        />
      </svg>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="sr-only" src={image} alt={imageAlt} />
    </section>
  );
}
