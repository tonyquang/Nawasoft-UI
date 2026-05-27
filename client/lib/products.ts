import React from "react";
import { Rocket } from "lucide-react";
import { FaWordpress, FaFacebook } from "react-icons/fa";
import { ZaloIcon } from "@/lib/icons";

export interface ProductFeatureGroup {
  groupTitle: string;
  features: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "violet" | "cyan" | "blue" | "indigo";
  link?: string;
  badge?: string;
  problems: string[];
  featureGroups: ProductFeatureGroup[];
}

export const products: Product[] = [
  {
    id: "nawa-deploy",
    slug: "nawa-deploy",
    name: "Nawa Deploy",
    tagline: "Đưa website lên internet trong vài phút",
    description:
      "Rút ngắn thời gian đưa website lên internet. Giúp chỉnh sửa và vận hành website đơn giản hơn. Hỗ trợ website sẵn sàng thu khách hàng và thanh toán nhanh hơn.",
    icon: Rocket,
    color: "violet",
    link: "https://websiteviet.site/admin/",
    badge: "New",
    problems: [
      "Rút ngắn thời gian đưa website lên internet",
      "Giúp chỉnh sửa và vận hành website đơn giản hơn",
      "Hỗ trợ website sẵn sàng thu khách hàng và thanh toán nhanh hơn",
    ],
    featureGroups: [
      {
        groupTitle: "Đưa Website Lên Internet Nhanh Chóng",
        features: [
          "Đăng tải website lên internet chỉ với file có sẵn",
          "Không cần thao tác phức tạp hay quy trình nhiều bước",
          "Phù hợp cho landing page, website AI, sales page",
        ],
      },
      {
        groupTitle: "Chỉnh Sửa Thông Tin Hiển Thị & SEO",
        features: [
          "Dễ dàng chỉnh sửa các thông tin cơ bản giúp website hiển thị tốt hơn trên Google",
          "Cập nhật nội dung cần thiết ngay sau khi website hoạt động",
        ],
      },
      {
        groupTitle: "Quản Lý Nội Dung Linh Hoạt",
        features: [
          "Chỉnh sửa trực tiếp — thay đổi từng phần nội dung theo nhu cầu",
          "Chỉnh sửa theo dữ liệu liên kết — cập nhật nhiều nội dung cùng lúc",
        ],
      },
      {
        groupTitle: "Hỗ Trợ Thu Dữ Liệu & Thanh Toán",
        features: [
          "Kết nối form với Google Sheet để nhận thông tin khách hàng tự động",
          "Tích hợp thanh toán SePay để xây dựng quy trình thanh toán nhanh",
        ],
      },
    ],
  },
  {
    id: "nawa-seo",
    slug: "nawa-seo",
    name: "Nawa SEO",
    tagline: "Sản xuất SEO Content với AI cực nhanh",
    description:
      "Giảm thời gian sản xuất content SEO. Hỗ trợ từ outline, viết bài, tạo hình đến xuất bản. Linh hoạt theo chiến lược nội dung và thương hiệu.",
    icon: FaWordpress,
    color: "cyan",
    link: "https://seo.nawasoft.vn/",
    badge: "AI",
    problems: [
      "Giảm thời gian sản xuất content SEO",
      "Hỗ trợ từ outline, viết bài, tạo hình đến xuất bản",
      "Linh hoạt theo chiến lược nội dung và thương hiệu",
    ],
    featureGroups: [
      {
        groupTitle: "Tạo & Xây dựng SEO Content",
        features: [
          "Tạo content chuẩn SEO với thông tin đầu vào đơn giản từ keyword",
          "AI hỗ trợ xây dựng outline tự động",
          "Cho phép tự nhập outline riêng theo chiến lược nội dung",
        ],
      },
      {
        groupTitle: "Sản xuất Hình ảnh cho Bài viết",
        features: [
          "AI Generate — AI tự tạo hình ảnh phù hợp với nội dung bài viết",
          "Search Web — tìm kiếm và sử dụng hình ảnh từ web",
        ],
      },
      {
        groupTitle: "Kết nối & Xuất bản Nội dung",
        features: [
          "Kết nối trực tiếp với WordPress",
          "Publish bài viết lên website trong cùng một quy trình",
          "Giảm thao tác copy-paste và quản lý nội dung thủ công",
        ],
      },
    ],
  },
  {
    id: "nawa-facebook",
    slug: "nawa-facebook",
    name: "Nawa Facebook",
    tagline: "Tự động hóa Facebook Marketing với AI",
    description:
      "Tự động hóa hoạt động đăng bài và tương tác. Hỗ trợ tìm đúng cộng đồng hoặc nhóm mục tiêu. Giúp mở rộng độ phủ nội dung và tiết kiệm thời gian vận hành.",
    icon: FaFacebook,
    color: "blue",
    badge: "Hot",
    problems: [
      "Tự động hóa hoạt động đăng bài và tương tác",
      "Hỗ trợ tìm đúng cộng đồng hoặc nhóm mục tiêu",
      "Giúp mở rộng độ phủ nội dung và tiết kiệm thời gian vận hành",
    ],
    featureGroups: [
      {
        groupTitle: "Auto Gửi Tin Nhắn & Kết Bạn",
        features: [
          "Gửi tin nhắn hàng loạt kèm hình ảnh hoặc video theo danh sách số điện thoại",
          "Tự động gửi lời mời kết bạn với tỷ lệ duyệt cao",
        ],
      },
      {
        groupTitle: "Công Nghệ Groq AI Chống Spam",
        features: [
          "AI tự động viết lại (Spin) nội dung tin nhắn cho từng người nhận",
          "Giúp đa dạng hóa nội dung và hạn chế bị bộ lọc spam nhận diện",
        ],
      },
      {
        groupTitle: "Quản Lý Nhóm & Thành Viên",
        features: [
          "Quét toàn bộ thành viên trong nhóm",
          "Tự động tạo nhóm mới và kéo thành viên",
          "Gửi tin nhắn hàng loạt tới các nhóm đã tham gia",
        ],
      },
    ],
  },
  {
    id: "nawa-zalo",
    slug: "nawa-zalo",
    name: "Nawa Zalo",
    tagline: "Tự động hóa Zalo Marketing toàn diện",
    description:
      "Tự động hóa quy trình tiếp cận và chăm sóc khách hàng. Giảm thao tác lặp lại trong nhắn tin, kết bạn và quản lý nhóm.",
    icon: ZaloIcon,
    color: "indigo",
    badge: "Hot",
    problems: [
      "Tự động hóa quy trình tiếp cận và chăm sóc khách hàng",
      "Giảm thao tác lặp lại trong nhắn tin, kết bạn và quản lý nhóm",
      "Hỗ trợ xử lý lượng khách lớn hơn trong cùng khoảng thời gian",
    ],
    featureGroups: [
      {
        groupTitle: "Auto Post Hàng Loạt",
        features: [
          "Tự động đăng bài lên nhiều group và tường cá nhân với tốc độ cao",
          "Hỗ trợ đăng kèm nhiều hình ảnh và video",
        ],
      },
      {
        groupTitle: "Công Nghệ Groq AI Chống Spam",
        features: [
          "Tích hợp AI hỗ trợ viết lại (Spin Content) nội dung bài viết",
          "Giúp nội dung đa dạng và hạn chế trùng lặp khi triển khai số lượng lớn",
        ],
      },
      {
        groupTitle: "Auto Join / Leave Group & Quét Khách Hàng",
        features: [
          "Tìm kiếm nhóm theo từ khóa và số lượng thành viên",
          "Tự động tham gia các nhóm mục tiêu",
          "Hỗ trợ rời khỏi các nhóm chờ duyệt quá lâu",
        ],
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const productColorMap: Record<
  Product["color"],
  {
    text: string;
    bg: string;
    border: string;
    glow: string;
    hoverText: string;
    hoverBg: string;
    glowColor: string;
    beamFrom: string;
    beamTo: string;
  }
> = {
  violet: {
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    glow: "shadow-violet-500/20",
    hoverText: "group-hover:text-violet-400",
    hoverBg: "group-hover:bg-violet-500/15",
    glowColor: "oklch(0.49 0.27 293 / 0.12)",
    beamFrom: "#8b5cf6",
    beamTo: "#a855f7",
  },
  cyan: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/20",
    hoverText: "group-hover:text-cyan-400",
    hoverBg: "group-hover:bg-cyan-500/15",
    glowColor: "oklch(0.85 0.18 195 / 0.12)",
    beamFrom: "#22d3ee",
    beamTo: "#14b8a6",
  },
  blue: {
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/20",
    hoverText: "group-hover:text-blue-400",
    hoverBg: "group-hover:bg-blue-500/15",
    glowColor: "oklch(0.55 0.22 220 / 0.12)",
    beamFrom: "#60a5fa",
    beamTo: "#2563eb",
  },
  indigo: {
    text: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    glow: "shadow-indigo-500/20",
    hoverText: "group-hover:text-indigo-400",
    hoverBg: "group-hover:bg-indigo-500/15",
    glowColor: "oklch(0.52 0.24 264 / 0.12)",
    beamFrom: "#818cf8",
    beamTo: "#4f46e5",
  },
};
