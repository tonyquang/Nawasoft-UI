import type { Metadata } from "next";
import { getProductBySlug } from "@/lib/products";
import { ProductHero }        from "@/app/_components/ProductHero";
import { ProductScreenshots } from "@/app/_components/ProductScreenshots";
import { ProductFeatures }    from "@/app/_components/ProductFeatures";
import { ProductCta }         from "@/app/_components/ProductCta";

export const metadata: Metadata = {
  title: "Nawa Deploy – Đưa website lên internet trong vài phút | NawaSoft",
};

const SCREENSHOTS = [
  { src: "/ez-deploy-trang%20ch%E1%BB%A7.png", alt: "Nawa Deploy – Trang chủ tổng quan" },
  { src: "/ezdeploy-cn1.png",                  alt: "Nawa Deploy – Quản lý website" },
  { src: "/ezdeploy-cn1-2.png",                alt: "Nawa Deploy – Chỉnh sửa nội dung" },
  { src: "/ezdeploy-cn2.png",                  alt: "Nawa Deploy – Kết nối Google Sheet" },
  { src: "/ezdeploy-cn3.png",                  alt: "Nawa Deploy – Tích hợp thanh toán" },
  { src: "/ezdeploy-cn4.png",                  alt: "Nawa Deploy – Cài đặt SEO" },
];

export default function NawaDeployPage() {
  const product = getProductBySlug("nawa-deploy")!;
  return (
    <>
      <ProductHero product={product} />
      <ProductScreenshots
        screenshots={SCREENSHOTS}
        title="Giao diện Nawa Deploy"
      />
      <ProductFeatures product={product} />
      <ProductCta product={product} />
    </>
  );
}
