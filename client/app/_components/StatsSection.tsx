"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";

const stats = [
  { value: 500, suffix: "+", label: "Khách hàng" },
  { value: 4, suffix: "", label: "Sản phẩm AI" },
  { value: 80, suffix: "%", label: "Tiết kiệm thời gian" },
  { value: 24, suffix: "/7", label: "Hỗ trợ" },
];

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={0.1 + i * 0.08} inView>
              <div className="text-center">
                <div className="flex items-baseline justify-center gap-0.5">
                  <NumberTicker
                    value={stat.value}
                    className="text-4xl font-extrabold text-primary"
                  />
                  <span className="text-3xl font-extrabold text-primary">
                    {stat.suffix}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
