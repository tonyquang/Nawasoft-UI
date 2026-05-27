"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { TestimonialCard } from "./TestimonialCard";
import { TESTIMONIALS } from "./testimonials.data";

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <BlurFade delay={0} inView>
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-400">
              ❝ Bằng chứng xã hội
            </div>
            <h2 className="mb-3 text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
              Khách hàng thực nói gì về
              <br />
              <AnimatedGradientText>Nawa Soft</AnimatedGradientText>
            </h2>
            <div className="flex items-center justify-center gap-3 text-sm">
              <div className="flex gap-0.5 text-yellow-400">★★★★★</div>
              <span className="font-bold text-foreground">4.9/5</span>
              <span className="text-muted-foreground">
                từ 1.243 đánh giá xác thực
              </span>
            </div>
          </div>
        </BlurFade>

        {/* Cards grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <BlurFade key={t.name} delay={0.05 * i} inView>
              <TestimonialCard testimonial={t} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
