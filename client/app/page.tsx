import { HeroSection }          from "./_components/HeroSection";
import { ProductsSection }      from "./_components/ProductsSection";
import { FeaturesSection }      from "./_components/FeaturesSection";
import { StatsSection }         from "./_components/StatsSection";
import { TestimonialsSection }  from "./_components/testimonials/TestimonialsSection";
import { CaseStudiesSection }   from "./_components/case-studies/CaseStudiesSection";
import { MarqueeSection }       from "./_components/MarqueeSection";
import { CtaSection }           from "./_components/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <MarqueeSection />
      <CtaSection />
    </>
  );
}
