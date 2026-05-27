"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { CaseStudyCard } from "./CaseStudyCard";
import { CASE_STUDIES } from "./case-studies.data";

export function CaseStudiesSection() {
  return (
    <section className="border-t border-border/30 bg-muted/20 py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <BlurFade delay={0} inView>
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-400">
              💼 Case Study thực tế
            </div>
            <h2 className="mb-3 text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
              Câu chuyện thành công
              <br />
              <AnimatedGradientText>từ khách hàng thực</AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground">
              Những con số không biết nói dối
            </p>
          </div>
        </BlurFade>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((cs, i) => (
            <BlurFade key={cs.company} delay={0.1 * i} inView>
              <CaseStudyCard cs={cs} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
