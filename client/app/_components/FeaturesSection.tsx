"use client";

import { Bot, Zap, Flag } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";

const features = [
  {
    icon: Bot,
    title: "AI-Powered",
    description:
      "Tích hợp các mô hình AI tiên tiến vào từng công cụ, giúp tự động hóa mọi tác vụ lặp lại.",
  },
  {
    icon: Zap,
    title: "Tiết kiệm 80% thời gian",
    description:
      "Tự động hóa toàn bộ quy trình marketing — từ sản xuất content đến chăm sóc khách hàng.",
  },
  {
    icon: Flag,
    title: "Made for Việt Nam",
    description:
      "Được xây dựng và tối ưu cho thị trường, ngôn ngữ và thói quen người dùng Việt Nam.",
  },
];

export function FeaturesSection() {
  return (
    <section className="border-t border-border/30 bg-muted/20 py-24">
      <div className="container mx-auto px-4">
        <BlurFade delay={0} inView>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Tại sao chọn NawaSoft?
            </h2>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <BlurFade key={f.title} delay={0.1 + i * 0.1} inView>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-2xl bg-primary/10 p-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
