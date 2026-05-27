"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function FloatingContactButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <RainbowButton asChild className="rounded-full shadow-2xl gap-2">
        <Link href="/contact">
          <MessageCircle className="h-4 w-4" />
          Liên hệ
        </Link>
      </RainbowButton>
    </div>
  );
}
