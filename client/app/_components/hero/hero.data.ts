export const STAT_CARDS = [
  {
    label: "Doanh thu",
    value: "285M",
    delta: "+28.5%",
    bg: "bg-violet-500/10 border-violet-500/20",
    text: "text-violet-400",
  },
  {
    label: "Khách hàng",
    value: "3.2K",
    delta: "+15.3%",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    text: "text-cyan-400",
  },
  {
    label: "Chuyển đổi",
    value: "8.7%",
    delta: "+3.2%",
    bg: "bg-pink-500/10 border-pink-500/20",
    text: "text-pink-400",
  },
  {
    label: "ROAS",
    value: "5.8x",
    delta: "+1.2x",
    bg: "bg-orange-500/10 border-orange-500/20",
    text: "text-orange-400",
  },
] as const;

export const CHANNELS = [
  { name: "Facebook", pct: 35, bar: "bg-violet-500" },
  { name: "TikTok", pct: 28, bar: "bg-pink-500" },
  { name: "Zalo", pct: 22, bar: "bg-cyan-500" },
  { name: "Google", pct: 15, bar: "bg-orange-400" },
];

export const AI_TIPS = [
  "Đăng FB lúc 20:00",
  "Tăng ngân sách TikTok",
  "Reply 12 inbox chưa đọc",
  "Dừng Ad #47 ROAS thấp",
];

export const AVATARS = [
  { init: "MT", cls: "from-violet-500 to-pink-500" },
  { init: "PH", cls: "from-cyan-500 to-blue-500" },
  { init: "LA", cls: "from-green-500 to-teal-500" },
  { init: "+", cls: "from-orange-500 to-red-500" },
];
