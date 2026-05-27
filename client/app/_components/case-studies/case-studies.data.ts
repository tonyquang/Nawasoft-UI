export type Stat = {
  label: string;
  value: string;
  up: boolean;
};

export type BarData = {
  label: string;
  pct: number;
};

export type CaseStudy = {
  logoGradient: string;
  beams: [{ colorFrom: string; colorTo: string }, { colorFrom: string; colorTo: string }];
  init: string;
  company: string;
  industry: string;
  beforeLabel: string;
  beforeValue: string;
  beforeSub: string;
  afterLabel: string;
  afterValue: string;
  afterSub: string;
  afterHighlight: string;
  chart: { type: "bar"; color: string; bars: BarData[] } | { type: "line"; color: string };
  stats: Stat[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    logoGradient: "from-violet-600 to-violet-800",
    beams: [{ colorFrom: "#8b5cf6", colorTo: "#22d3ee" }, { colorFrom: "#22d3ee", colorTo: "#8b5cf6" }],
    init: "MW",
    company: "Mây Trắng Fashion",
    industry: "Thời trang – TP.HCM | Dùng: Nawa Social + Ads",
    beforeLabel: "Trước",
    beforeValue: "82M/tháng",
    beforeSub: "doanh thu",
    afterLabel: "Sau 90 ngày",
    afterValue: "358M/tháng",
    afterSub: "↑ 340% tăng trưởng",
    afterHighlight: "text-green-400",
    chart: {
      type: "bar",
      color: "bg-violet-500",
      bars: [
        { label: "T1", pct: 23 },
        { label: "T2", pct: 52 },
        { label: "T3", pct: 100 },
      ],
    },
    stats: [
      { label: "Tương tác", value: "↑ 285%", up: true },
      { label: "Thời gian tiết kiệm", value: "72 giờ/tháng", up: true },
      { label: "Chi phí quảng cáo", value: "↓ 38%", up: false },
    ],
  },
  {
    logoGradient: "from-cyan-600 to-blue-700",
    beams: [{ colorFrom: "#22d3ee", colorTo: "#3b82f6" }, { colorFrom: "#3b82f6", colorTo: "#22d3ee" }],
    init: "DW",
    company: "DigitalWave Agency",
    industry: "Marketing Agency – Hà Nội | Dùng: Combo Agency",
    beforeLabel: "Trước",
    beforeValue: "8 khách",
    beforeSub: "quản lý được",
    afterLabel: "Sau 60 ngày",
    afterValue: "34 khách",
    afterSub: "↑ 325% năng lực",
    afterHighlight: "text-green-400",
    chart: {
      type: "bar",
      color: "bg-cyan-500",
      bars: [
        { label: "Trước", pct: 24 },
        { label: "Tháng 1", pct: 53 },
        { label: "Tháng 2", pct: 100 },
      ],
    },
    stats: [
      { label: "Nhân sự cần thêm", value: "Không thuê thêm", up: true },
      { label: "Giờ làm tiết kiệm", value: "120 giờ/tháng", up: true },
      { label: "Doanh thu agency", value: "↑ 220%", up: true },
    ],
  },
  {
    logoGradient: "from-orange-500 to-red-600",
    beams: [{ colorFrom: "#f97316", colorTo: "#ec4899" }, { colorFrom: "#ec4899", colorTo: "#f97316" }],
    init: "VC",
    company: "Vitacamp Nutrition",
    industry: "Thực phẩm – Cần Thơ | Dùng: Nawa Ads + CRM",
    beforeLabel: "ROAS Trước",
    beforeValue: "2.1x",
    beforeSub: "lợi nhuận thấp",
    afterLabel: "ROAS Sau 3 tuần",
    afterValue: "5.8x",
    afterSub: "↑ 176% cải thiện",
    afterHighlight: "text-green-400",
    chart: { type: "line", color: "oklch(0.75 0.18 55)" },
    stats: [
      { label: "Chi phí/đơn hàng", value: "↓ 52%", up: false },
      { label: "Tỉ lệ tái mua", value: "↑ 65%", up: true },
      { label: "Doanh thu online", value: "↑ 189%", up: true },
    ],
  },
];
