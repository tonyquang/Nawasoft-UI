import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductHero }     from "@/app/_components/ProductHero";
import { ProductFeatures } from "@/app/_components/ProductFeatures";
import { ProductCta }      from "@/app/_components/ProductCta";

export const metadata: Metadata = {
  title: "Nawa Zalo – Tự động hóa Zalo Marketing toàn diện | NawaSoft",
};

export default function NawaZaloPage() {
  const product = getProductBySlug("nawa-zalo")!;
  return (
    <>
      <ProductHero product={product} />
      <ProductFeatures product={product} />
      <ProductCta product={product} />
    </>
  );
}
