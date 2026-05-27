import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductHero }        from "@/app/_components/ProductHero";
import { ProductScreenshots } from "@/app/_components/ProductScreenshots";
import { ProductFeatures }    from "@/app/_components/ProductFeatures";
import { ProductCta }         from "@/app/_components/ProductCta";

export const metadata: Metadata = {
  title: "Nawa Facebook – Tự động hóa Facebook Marketing với AI | NawaSoft",
};

const SCREENSHOTS = [
  { src: "/nawafacebook.jpg",  alt: "Nawa Facebook – Tổng quan giao diện" },
  { src: "/nawafacebook1.jpg", alt: "Nawa Facebook – Quản lý chiến dịch" },
  { src: "/nawafacebook2.jpg", alt: "Nawa Facebook – Phân tích & báo cáo" },
];

export default function NawaFacebookPage() {
  const product = getProductBySlug("nawa-facebook")!;
  return (
    <>
      <ProductHero product={product} />
      <ProductScreenshots screenshots={SCREENSHOTS} title="Giao diện Nawa Facebook" />
      <ProductFeatures product={product} />
      <ProductCta product={product} />
    </>
  );
}
