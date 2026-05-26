import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductHero }     from "@/app/_components/ProductHero";
import { ProductFeatures } from "@/app/_components/ProductFeatures";
import { ProductCta }      from "@/app/_components/ProductCta";

export const metadata: Metadata = {
  title: "Nawa SEO – Sản xuất SEO Content với AI cực nhanh | NawaSoft",
};

export default function NawaSeoPage() {
  const product = getProductBySlug("nawa-seo")!;
  return (
    <>
      <ProductHero product={product} />
      <ProductFeatures product={product} />
      <ProductCta product={product} />
    </>
  );
}
