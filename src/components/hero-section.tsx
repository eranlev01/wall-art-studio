"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { AnimatedHeroHeadline } from "@/components/animated-hero-headline";
import { TextAnimate } from "@/components/ui/text-animate";
import { ArtButton } from "@/components/ui/art-button";
import { useMobileLayout } from "@/hooks/use-mobile-layout";
import { usePointerParallax } from "@/hooks/use-pointer-parallax";
import { easeLuxury } from "@/lib/motion-presets";
import { routes } from "@/lib/routes";

const WaIcon = ({ size = 16 }: { size?: number }) => (
  <svg className="ico-wa" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.554 4.122 1.527 5.853L.057 24l6.304-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.957 0-3.799-.5-5.408-1.38l-.388-.22-4.02 1.054 1.072-3.913-.24-.393C1.893 15.71 1.5 13.903 1.5 12 1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5z" />
  </svg>
);

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const mobile = useMobileLayout();
  const motionOff = reduceMotion || mobile;

  const {
    bgX,
    bgY,
    midX,
    midY,
    midRotateX,
    midRotateY,
    fgX,
    fgY,
    fgRotateX,
    fgRotateY,
    smoothX,
    smoothY,
  } = usePointerParallax(heroRef);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgScrollY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const bgScrollScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.24]);
  const bgPointerScale = useTransform(smoothY, [-0.5, 0.5], [1.04, 1.08]);
  const bgScale = useTransform(
    [bgScrollScale, bgPointerScale],
    ([scroll, pointer]) => (scroll as number) * (pointer as number)
  );
  const bgYCombined = useTransform(
    [bgY, bgScrollY],
    ([pointer, scroll]) => (pointer as number) + (scroll as number)
  );

  const sunX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const sunPointerY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);
  const sunScrollY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const sunY = useTransform(
    [sunPointerY, sunScrollY],
    ([pointer, scroll]) => (pointer as number) + (scroll as number)
  );

  const gradDarken = useTransform(scrollYProgress, [0, 0.85], [0, 0.55]);
  const contentY = useTransform(scrollYProgress, [0, 0.9], [0, -110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.85], [1, 0.92]);
  const decoY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const grainOpacity = useTransform(scrollYProgress, [0, 1], [0.03, 0.06]);

  return (
    <section className="hero hero-cinematic hero-parallax-root" id="hero" ref={heroRef}>
      <motion.div
        className="hero-bg-scroll-layer"
        style={motionOff ? undefined : { y: bgScrollY, scale: bgScrollScale }}
      >
        <motion.div
          className="hero-bg hero-bg-parallax"
          style={motionOff ? undefined : { x: bgX, y: bgYCombined, scale: bgScale }}
        />
      </motion.div>

      <div className="hero-grad" />
      <motion.div
        className="hero-grad-scroll"
        aria-hidden="true"
        style={motionOff ? undefined : { opacity: gradDarken }}
      />

      <motion.div
        className="hero-grain"
        style={motionOff ? undefined : { opacity: grainOpacity }}
      />

      <motion.div
        className="hero-sun"
        aria-hidden="true"
        style={motionOff ? undefined : { x: sunX, y: sunY }}
      />

      <motion.div
        className="deco-paint deco-hero"
        aria-hidden="true"
        style={motionOff ? undefined : { y: decoY }}
      >
        <svg viewBox="0 0 320 250" width="320" height="250" className="deco-fill-acc" xmlns="http://www.w3.org/2000/svg">
          <path d="M320 250 L0 250 L0 162 Q82 78 164 118 Q238 152 320 48 Z" opacity=".065"/>
          <ellipse cx="62" cy="228" rx="38" ry="20" opacity=".052"/>
          <ellipse cx="258" cy="240" rx="24" ry="13" opacity=".045"/>
        </svg>
      </motion.div>

      <motion.div
        className="hero-inner wrap"
        style={
          motionOff
            ? undefined
            : { y: contentY, opacity: contentOpacity, scale: contentScale }
        }
      >
        <AnimatedHeroHeadline
          midParallax={{
            x: midX,
            y: midY,
            rotateX: midRotateX,
            rotateY: midRotateY,
          }}
          fgParallax={{
            x: fgX,
            y: fgY,
            rotateX: fgRotateX,
            rotateY: fgRotateY,
          }}
        />
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeLuxury, delay: 0.45 }}
        >
          <div className="hero-pill">
            <span className="hero-dot" />
            <TextAnimate
              as="span"
              by="word"
              animation="blurInUp"
              startOnView={false}
              once
              delay={0.7}
              duration={0.4}
              className="hero-pill-text"
            >
              סטודיו ציורי קיר & גרפיטי — ישראל
            </TextAnimate>
          </div>
          <TextAnimate
            as="p"
            by="word"
            animation="blurInUp"
            startOnView={false}
            once
            delay={0.85}
            duration={0.6}
            className="hero-sub"
          >
            מהגרפיטי ועד האמנות הציבורית — יוצרים חוויות ויזואליות שנשארות לנצח על כל קיר.
          </TextAnimate>
          <div className="hero-btns">
            <ArtButton variant="y" href={routes.portfolio}>
              תיק העבודות שלנו ←
            </ArtButton>
            <ArtButton variant="ghost" href="https://wa.me/972">
              <WaIcon size={16} /> WhatsApp
            </ArtButton>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        style={motionOff ? undefined : { opacity: scrollHintOpacity }}
      >
        <div className="hero-scroll-line" />
        <span>גלול</span>
      </motion.div>
    </section>
  );
}
