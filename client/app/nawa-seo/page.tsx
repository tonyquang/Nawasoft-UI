import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductHero }        from "@/app/_components/ProductHero";
import { ProductScreenshots } from "@/app/_components/ProductScreenshots";
import { ProductFeatures }    from "@/app/_components/ProductFeatures";
import { ProductCta }         from "@/app/_components/ProductCta";

export const metadata: Metadata = {
  title: "Nawa SEO – Sản xuất SEO Content với AI cực nhanh | NawaSoft",
};

const SCREENSHOTS = [
  { src: "/nawaseo-trangchur.png", alt: "Nawa SEO – Trang chủ tổng quan" },
  { src: "/nawaseo-seo.png",       alt: "Nawa SEO – Phân tích từ khóa SEO" },
  { src: "/nawaseo-write.png",     alt: "Nawa SEO – AI viết bài tự động" },
  { src: "/nawaseo-img.png",       alt: "Nawa SEO – Tạo hình ảnh với AI" },
  { src: "/nawaseo-wordpress.png", alt: "Nawa SEO – Xuất bản lên WordPress" },
];

export default function NawaSeoPage() {
  const product = getProductBySlug("nawa-seo")!;
  return (
    <>
      <ProductHero product={product} />
      <ProductScreenshots
        screenshots={SCREENSHOTS}
        title="Giao diện Nawa SEO"
      />
      <ProductFeatures product={product} />
      <ProductCta product={product} />
    </>
  );
}
