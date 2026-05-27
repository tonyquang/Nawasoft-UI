import { BorderBeam } from "@/components/ui/border-beam";
import type { CaseStudy } from "./case-studies.data";

function BarChart({
  bars,
  color,
}: {
  bars: { label: string; pct: number }[];
  color: string;
}) {
  return (
    <div className="mb-4 rounded-xl bg-muted/40 p-3 dark:bg-black/20">
      <div className="flex h-20 items-end gap-3">
        {bars.map((b) => (
          <div
            key={b.label}
            className={`flex-1 rounded-t-md ${color}`}
            style={{ height: `${b.pct}%`, opacity: 0.4 + b.pct / 170 }}
          />
        ))}
      </div>
      <div className="mt-1 flex gap-3">
        {bars.map((b) => (
          <span key={b.label} className="flex-1 text-center text-[10px] text-muted-foreground">
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function LineChart({ color }: { color: string }) {
  const points = [
    [0, 34],
    [16, 30],
    [32, 26],
    [48, 21],
    [64, 15],
    [80, 8],
    [100, 3],
  ];
  const lineD = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`)
    .join(" ");
  const fillD = `${lineD} L100,40 L0,40 Z`;

  return (
    <div className="mb-4 rounded-xl bg-muted/40 p-3 dark:bg-black/20">
      <svg
        viewBox="0 0 100 40"
        className="w-full"
        preserveAspectRatio="none"
        style={{ height: 96 }}
      >
        <defs>
          <linearGradient id="csLineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={fillD} fill="url(#csLineFill)" />
        <path
          d={lineD}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="1.5" fill={color} />
        ))}
      </svg>
      <div className="mt-1 flex justify-between text-[9px] text-muted-foreground">
        {["T1", "T2", "T3", "T4", "T5", "T6", "T7"].map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

export function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <div className="glass-card relative flex flex-col overflow-hidden rounded-2xl">
      <div className="relative z-10 flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-center gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br text-base font-black text-white ${cs.logoGradient}`}
          >
            {cs.init}
          </div>
          <div>
            <p className="font-bold text-foreground">{cs.company}</p>
            <p className="text-xs text-muted-foreground">{cs.industry}</p>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4 rounded-xl bg-muted/30 p-4 text-center dark:bg-black/20">
          <div>
            <p className="mb-1 text-xs text-muted-foreground">
              {cs.beforeLabel}
            </p>
            <p className="text-lg font-bold text-muted-foreground">
              {cs.beforeValue}
            </p>
            <p className="text-xs text-muted-foreground">{cs.beforeSub}</p>
          </div>
          <div>
            <p className={`mb-1 text-xs font-medium ${cs.afterHighlight}`}>
              {cs.afterLabel}
            </p>
            <p className="text-lg font-bold text-foreground">{cs.afterValue}</p>
            <p className={`text-xs font-medium ${cs.afterHighlight}`}>
              {cs.afterSub}
            </p>
          </div>
        </div>

        {cs.chart.type === "bar" ? (
          <BarChart bars={cs.chart.bars} color={cs.chart.color} />
        ) : (
          <LineChart color={cs.chart.color} />
        )}

        <div className="mb-4 space-y-2">
          {cs.stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-muted-foreground">{s.label}</span>
              <span
                className={`font-semibold ${
                  s.up ? "text-green-400" : "text-red-400"
                }`}
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <BorderBeam
        duration={6}
        size={300}
        colorFrom={cs.beams[0].colorFrom}
        colorTo={cs.beams[0].colorTo}
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={300}
        borderWidth={1.5}
        reverse
        colorFrom={cs.beams[1].colorFrom}
        colorTo={cs.beams[1].colorTo}
      />
    </div>
  );
}
