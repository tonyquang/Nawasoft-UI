import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductHero }     from "@/app/_components/ProductHero";
import { ProductFeatures } from "@/app/_components/ProductFeatures";
import { ProductCta }      from "@/app/_components/ProductCta";

export const metadata: Metadata = {
  title: "Nawa Deploy – Đưa website lên internet trong vài phút | NawaSoft",
};

export default function NawaDeployPage() {
  const product = getProductBySlug("nawa-deploy")!;
  return (
    <>
      <ProductHero product={product} />
      <ProductFeatures product={product} />
      <ProductCta product={product} />
    </>
  );
}
