"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { ProductCard } from "@/components/shared/ProductCard";
import { products } from "@/lib/products";

export function ProductsSection() {
  return (
    <section id="products" className="container mx-auto px-4 py-24">
      <BlurFade delay={0} inView>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            4 Công Cụ AI Toàn Diện
          </h2>
          <p className="mt-3 text-muted-foreground">
            Mỗi công cụ giải quyết một bài toán marketing cụ thể
          </p>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {products.map((product, i) => (
          <BlurFade key={product.id} delay={0.1 + i * 0.08} inView>
            <ProductCard product={product} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
