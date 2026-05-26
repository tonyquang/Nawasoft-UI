"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
}

export function BlurFade({
  children,
  className,
  duration = 0.4,
  delay = 0,
  yOffset = 8,
  inView = false,
}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: "-40px" });
  const isVisible = !inView || inViewResult;

  return (
    <motion.div
      ref={ref}
      initial={{ y: yOffset, opacity: 0, filter: "blur(6px)" }}
      animate={
        isVisible
          ? { y: 0, opacity: 1, filter: "blur(0px)" }
          : { y: yOffset, opacity: 0, filter: "blur(6px)" }
      }
      transition={{ delay, duration, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
