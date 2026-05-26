import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductHero }     from "@/app/_components/ProductHero";
import { ProductFeatures } from "@/app/_components/ProductFeatures";
import { ProductCta }      from "@/app/_components/ProductCta";

export const metadata: Metadata = {
  title: "Nawa Facebook – Tự động hóa Facebook Marketing với AI | NawaSoft",
};

export default function NawaFacebookPage() {
  const product = getProductBySlug("nawa-facebook")!;
  return (
    <>
      <ProductHero product={product} />
      <ProductFeatures product={product} />
      <ProductCta product={product} />
    </>
  );
}
