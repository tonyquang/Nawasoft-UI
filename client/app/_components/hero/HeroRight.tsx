"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { STAT_CARDS, CHANNELS, AI_TIPS } from "./hero.data";

function BrowserChrome() {
  return (
    <div className="flex items-center justify-between border-b border-border/50 bg-muted/60 px-4 py-3 dark:bg-black/20">
      <div className="flex gap-1.5">
        <div className="h-3 w-3 rounded-full bg-red-500/70" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <div className="h-3 w-3 rounded-full bg-green-500/70" />
      </div>
      <div className="rounded-full bg-muted/50 px-4 py-1 text-xs text-muted-foreground">
        app.nawasoft.vn
      </div>
      <div className="flex items-center gap-1.5 text-xs text-green-400">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
        Live
      </div>
    </div>
  );
}

function StatCards() {
  return (
    <div className="mb-4 grid grid-cols-4 gap-2">
      {STAT_CARDS.map((s) => (
        <div key={s.label} className={`rounded-xl border p-2.5 text-center ${s.bg}`}>
          <p className="mb-0.5 text-[10px] text-muted-foreground">{s.label}</p>
          <p className={`text-sm font-bold ${s.text}`}>{s.value}</p>
          <p className="text-[10px] text-green-400">{s.delta}</p>
        </div>
      ))}
    </div>
  );
}

function LineChart() {
  return (
    <div className="mb-3 rounded-xl bg-muted/50 p-3 dark:bg-black/30">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          Tổng quan hiệu suất · AI phân tích
        </span>
        <span className="rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] text-violet-400">
          30 ngày
        </span>
      </div>
      <svg
        viewBox="0 0 100 40"
        className="w-full"
        preserveAspectRatio="none"
        style={{ height: 76 }}
      >
        <defs>
          <linearGradient id="hFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.49 0.27 293)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.49 0.27 293)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.49 0.27 293)" />
            <stop offset="100%" stopColor="oklch(0.85 0.18 195)" />
          </linearGradient>
        </defs>
        <path
          d="M0,33 C16,28 26,22 42,16 C58,10 68,6 82,4 C92,2.5 97,2 100,1.5 L100,40 L0,40 Z"
          fill="url(#hFill)"
        />
        <path
          d="M0,33 C16,28 26,22 42,16 C58,10 68,6 82,4 C92,2.5 97,2 100,1.5"
          fill="none"
          stroke="url(#hLine)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M0,38 C16,35 26,31 42,27 C58,23 68,18 82,13 C92,9.5 97,7.5 100,6"
          fill="none"
          stroke="oklch(0.85 0.18 195 / 0.45)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
      </svg>
      <div className="mt-1 flex justify-between text-[9px] text-muted-foreground">
        {["T1", "T5", "T10", "T15", "T20", "T25", "T30"].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

function ChannelBreakdown() {
  return (
    <div className="rounded-xl bg-muted/40 p-3 dark:bg-black/20">
      <p className="mb-2 text-[10px] text-muted-foreground">Theo kênh</p>
      <div className="space-y-2">
        {CHANNELS.map((ch) => (
          <div key={ch.name} className="flex items-center gap-2">
            <span className="w-12 text-[10px] text-muted-foreground">
              {ch.name}
            </span>
            <div className="h-1.5 flex-1 rounded-full bg-muted/30">
              <div
                className={`h-1.5 rounded-full ${ch.bar}`}
                style={{ width: `${ch.pct}%` }}
              />
            </div>
            <span className="w-6 text-right text-[10px] text-muted-foreground">
              {ch.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AiTips() {
  return (
    <div className="rounded-xl bg-muted/40 p-3 dark:bg-black/20">
      <p className="mb-2 text-[10px] font-medium text-muted-foreground">
        AI đề xuất hôm nay
      </p>
      <div className="space-y-1.5">
        {AI_TIPS.map((tip) => (
          <div key={tip} className="flex items-center gap-1.5 text-[10px]">
            <span className="text-yellow-400">💡</span>
            <span className="text-muted-foreground">{tip}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="glass-card w-full overflow-hidden rounded-2xl shadow-2xl">
      <BrowserChrome />
      <div className="p-4">
        <StatCards />
        <LineChart />
        <div className="grid grid-cols-2 gap-2">
          <ChannelBreakdown />
          <AiTips />
        </div>
      </div>
    </div>
  );
}

export function HeroRight() {
  return (
    <BlurFade delay={0.35} inView>
      <div className="hero-float relative pb-8 pt-8">
        {/* Floating card — top right */}
        <div
          className="glass-card absolute -top-6 right-4 z-20 hidden rounded-xl px-3 py-2.5 shadow-lg xl:block"
          style={{ animation: "heroFloat 7s ease-in-out 1s infinite" }}
        >
          <div className="mb-0.5 flex items-center gap-1.5 text-xs font-medium">
            <span className="text-green-400">↑</span>
            Doanh thu hôm nay
          </div>
          <div className="text-xl font-black">12.4M</div>
          <div className="text-xs text-green-400">+34% so với hôm qua</div>
        </div>

        {/* Floating card — bottom left */}
        <div className="glass-card absolute -bottom-6 left-4 z-20 hidden rounded-xl px-3 py-2.5 shadow-lg xl:block">
          <div className="flex items-center gap-1.5 text-xs">
            <span>🤖</span>
            <span className="font-medium">AI đã làm</span>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Gửi 847 tin nhắn tự động ✓
          </p>
        </div>

        <Dashboard />
      </div>

      <style jsx>{`
        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .hero-float {
          animation: heroFloat 5s ease-in-out infinite;
        }
      `}</style>
    </BlurFade>
  );
}
