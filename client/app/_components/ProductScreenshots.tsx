"use client";

import { useState } from "react";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Lens } from "@/components/ui/lens";
import { cn } from "@/lib/utils";

export type Screenshot = { src: string; alt: string };

export function ProductScreenshots({
  screenshots,
  title = "Giao diện thực tế",
}: {
  screenshots: Screenshot[];
  title?: string;
}) {
  const [active, setActive] = useState(0);
  const current = screenshots[active];

  return (
    <section className="border-t border-border/30 bg-muted/20 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <BlurFade delay={0} inView>
          <div className="mb-8 text-center">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Xem thực tế
            </p>
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        </BlurFade>

        {/* Main preview with Lens zoom */}
        <BlurFade delay={0.1} inView>
          <div className="mb-4 overflow-hidden rounded-2xl border border-border/40 bg-muted/30 shadow-xl">
            <Lens zoomFactor={1.8} lensSize={200} isStatic={false} ariaLabel="Zoom ảnh">
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                width={1400}
                height={900}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </Lens>
          </div>
        </BlurFade>

        {/* Caption */}
        <BlurFade delay={0.15} inView>
          <p className="mb-4 text-center text-sm text-muted-foreground">
            {current.alt}
          </p>
        </BlurFade>

        {/* Thumbnail strip */}
        <BlurFade delay={0.2} inView>
          <div className="flex justify-center gap-2.5 overflow-x-auto pb-1">
            {screenshots.map((s, i) => (
              <button
                key={s.src}
                onClick={() => setActive(i)}
                className={cn(
                  "group relative shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200",
                  active === i
                    ? "border-violet-500 shadow-md shadow-violet-500/30 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80 hover:border-border"
                )}
                style={{ width: 140 }}
                aria-label={s.alt}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={280}
                  height={175}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                {/* Active dot indicator */}
                {active === i && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-4 -translate-x-1/2 rounded-full bg-violet-500" />
                )}
              </button>
            ))}
          </div>
        </BlurFade>

        {/* Dot pagination for mobile */}
        <div className="mt-4 flex justify-center gap-1.5 sm:hidden">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-200",
                active === i ? "w-5 bg-violet-500" : "w-1.5 bg-muted-foreground/40"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
