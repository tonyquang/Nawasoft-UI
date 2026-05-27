export type Testimonial = {
  pre: string;
  bold: string;
  post: string;
  name: string;
  role: string;
  avatar: string;
  stars: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    pre: "Trước đây team 5 người làm marketing mà vẫn không kịp. Giờ 2 người dùng Nawa Soft là xử lý được tất cả.",
    bold: " Doanh thu tháng này tăng 340%",
    post: " so với cùng kỳ năm ngoái.",
    name: "Nguyễn Minh Thư",
    role: "CEO – Shop Thời Trang Mây Trắng, TP.HCM",
    avatar: "/ava1.jpg",
    stars: 5,
  },
  {
    pre: "Agency chúng tôi quản lý cho 30 khách hàng. Nawa Social giúp tiết kiệm",
    bold: " hơn 120 giờ/tháng",
    post: " nhờ lên lịch và báo cáo tự động. Khách hàng rất hài lòng với dashboard white-label.",
    name: "Phạm Bảo Trân",
    role: "Founder – DigitalWave Agency, Hà Nội",
    avatar: "/ava2.jpg",
    stars: 5,
  },
  {
    pre: "Nawa Ads tự động tắt quảng cáo không hiệu quả và tăng ngân sách cho chiến dịch tốt.",
    bold: " ROAS từ 2.1x lên 5.8x",
    post: " chỉ sau 3 tuần không cần làm gì thêm.",
    name: "Lê Khắc Nam",
    role: "Marketing Manager – Vitacamp Nutrition",
    avatar: "/ava3.jpg",
    stars: 5,
  },
  {
    pre: "AI viết content của Nawa hay đến mức tôi không phân biệt được với nhân viên thật.",
    bold: " Follower Instagram tăng từ 800 lên 22.000",
    post: " trong 4 tháng.",
    name: "Ngô Lan Anh",
    role: "Beauty Influencer & Shop Owner",
    avatar: "/ava4.webp",
    stars: 5,
  },
  {
    pre: "Hộp thư hợp nhất của Nawa Social là game changer. Không còn bỏ lỡ inbox khách hàng nào nữa.",
    bold: " Tỉ lệ chuyển đổi từ chat tăng 48%",
    post: ".",
    name: "Đỗ Duy Thanh",
    role: "Chủ chuỗi cửa hàng F&B – 12 chi nhánh",
    avatar: "/ava5.jpg",
    stars: 5,
  },
  {
    pre: "Nawa CRM giúp tôi biết chính xác khách nào sắp mua lại, khách nào cần chăm sóc thêm.",
    bold: " Doanh thu tái mua tăng 65%",
    post: " chỉ từ việc gửi tin nhắn đúng lúc.",
    name: "Trần Phúc Hưng",
    role: "Founder – NatureSkin Skincare Brand",
    avatar: "/ava6.jpg",
    stars: 5,
  },
];
