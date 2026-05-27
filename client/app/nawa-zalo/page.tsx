import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductHero }        from "@/app/_components/ProductHero";
import { ProductScreenshots } from "@/app/_components/ProductScreenshots";
import { ProductFeatures }    from "@/app/_components/ProductFeatures";
import { ProductCta }         from "@/app/_components/ProductCta";

export const metadata: Metadata = {
  title: "Nawa Zalo – Tự động hóa Zalo Marketing toàn diện | NawaSoft",
};

const SCREENSHOTS = [
  { src: "/nawazalo.jpg",  alt: "Nawa Zalo – Tổng quan giao diện" },
  { src: "/nawazalo1.jpg", alt: "Nawa Zalo – Quản lý chiến dịch Zalo" },
];

export default function NawaZaloPage() {
  const product = getProductBySlug("nawa-zalo")!;
  return (
    <>
      <ProductHero product={product} />
      <ProductScreenshots screenshots={SCREENSHOTS} title="Giao diện Nawa Zalo" />
      <ProductFeatures product={product} />
      <ProductCta product={product} />
    </>
  );
}
