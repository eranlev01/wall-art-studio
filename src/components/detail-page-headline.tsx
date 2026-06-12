"use client";

import { HeroStaticText } from "@/components/hero-cycling-text";
import type { ScatterWord } from "@/data/services";
import { cn } from "@/lib/utils";

function mapTone(tone?: ScatterWord["tone"]): "white" | "accent" {
  if (tone === "accent") return "accent";
  return "white";
}

function mapSize(size?: ScatterWord["size"]): "md" | "lg" | "hero" {
  if (size === "hero" || size === "xl") return "hero";
  if (size === "lg" || size === "md") return "lg";
  return "md";
}

function chunkRows(words: ScatterWord[]): ScatterWord[][] {
  if (words.length === 2) return words.map((w) => [w]);
  if (words.length <= 4) return [words.slice(0, 2), words.slice(2)].filter((r) => r.length > 0);
  const rows: ScatterWord[][] = [];
  for (let i = 0; i < words.length; i += 2) {
    rows.push(words.slice(i, i + 2));
  }
  return rows;
}

type DetailPageHeadlineProps = {
  words: ScatterWord[];
  className?: string;
};

/** Centered headline rows — same spacing logic as homepage hero */
export function DetailPageHeadline({ words, className }: DetailPageHeadlineProps) {
  const rows = chunkRows(words);

  return (
    <h1
      className={cn("hero-headline detail-headline", className)}
      aria-label={words.map((w) => w.text).join(" ")}
    >
      {rows.map((row, ri) => (
        <span
          key={ri}
          className={cn(
            "hero-headline-row",
            ri === 0 ? "hero-headline-row-top" : "hero-headline-row-bottom"
          )}
        >
          {row.map((word, wi) => (
            <HeroStaticText
              key={`${word.text}-${wi}`}
              text={word.text}
              tone={mapTone(word.tone)}
              size={mapSize(word.size)}
            />
          ))}
        </span>
      ))}
    </h1>
  );
}
