import { HeroLeft } from "./hero/HeroLeft";
import { HeroRight } from "./hero/HeroRight";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden grid-bg">
      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.49 0.27 293 / 0.22) 0%, transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.85 0.18 195 / 0.1) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 pb-16 pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </section>
  );
}
