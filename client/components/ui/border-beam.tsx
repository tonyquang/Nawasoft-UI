"use client";

import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  borderWidth?: number;
  delay?: number;
  reverse?: boolean;
}

export function BorderBeam({
  className,
  size = 150,
  duration = 12,
  colorFrom = "oklch(0.49 0.27 293)",
  colorTo = "oklch(0.85 0.18 195)",
  borderWidth = 1.5,
  delay = 0,
  reverse = false,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--duration": `${duration}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--border-width": `${borderWidth}px`,
          "--delay": `-${delay}s`,
          animation: `border-beam var(--duration) linear infinite var(--delay)`,
          animationDirection: reverse ? "reverse" : "normal",
          border: "var(--border-width) solid transparent",
          background:
            "linear-gradient(var(--card), var(--card)) padding-box, " +
            "conic-gradient(from var(--border-angle, 0deg), transparent 0%, var(--color-from) 10%, var(--color-to) 20%, transparent 30%) border-box",
        } as CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        className,
      )}
    />
  );
}
