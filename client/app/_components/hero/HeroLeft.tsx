"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { AVATARS } from "./hero.data";

export function HeroLeft() {
  return (
    <div className="flex flex-col items-start lg:pl-10">
      <BlurFade delay={0} inView>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
          Nền Tảng AI Marketing #1 Việt Nam 2025
        </div>
      </BlurFade>

      <BlurFade delay={0.1} inView>
        <h1 className="mb-5 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          Tự Động Hóa
          <br />
          <AnimatedGradientText>Marketing</AnimatedGradientText>
          <br />
          với Sức Mạnh AI
        </h1>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <p className="mb-8 max-w-lg text-xl leading-relaxed text-muted-foreground">
          Nawa Soft cung cấp hệ sinh thái{" "}
          <strong className="text-foreground">4 công cụ AI</strong> giúp doanh
          nghiệp Việt tăng doanh thu, tiết kiệm thời gian và vượt trội đối thủ
          trên mọi nền tảng số.
        </p>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <RainbowButton asChild size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              🚀 Dùng thử miễn phí 14 ngày
            </Link>
          </RainbowButton>
          <Link
            href="#products"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-500/40 px-6 py-3 text-base font-medium text-foreground transition-all hover:border-violet-500 hover:bg-violet-500/10"
          >
            ▶ Xem tất cả sản phẩm
          </Link>
        </div>
      </BlurFade>

      <BlurFade delay={0.4} inView>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex -space-x-2">
            {AVATARS.map((a) => (
              <div
                key={a.init}
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-linear-to-br text-xs font-bold text-white ${a.cls}`}
              >
                {a.init}
              </div>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            <strong className="text-foreground">500+</strong> doanh nghiệp đang
            dùng
          </span>
          <div className="flex gap-0.5 text-yellow-400">★★★★★</div>
          <span className="text-sm text-muted-foreground">
            <strong className="text-foreground">4.9/5</strong> đánh giá
          </span>
        </div>
      </BlurFade>
    </div>
  );
}
