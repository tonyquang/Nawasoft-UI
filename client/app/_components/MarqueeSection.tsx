import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const tags = [
  "Landing Page", "SEO Content", "Facebook Auto", "Zalo Marketing",
  "Google Sheet", "WordPress", "SePay Payment", "AI Content",
  "Auto Post", "Lead Form", "Spin Content", "Groq AI",
  "Website Deploy", "Auto Kết Bạn", "Group Management",
];

function Tag({ text }: { text: string }) {
  return (
    <div
      className={cn(
        "mx-2 flex items-center rounded-full border border-border/60 bg-card px-4 py-1.5",
        "text-sm text-muted-foreground shadow-sm"
      )}
    >
      {text}
    </div>
  );
}

export function MarqueeSection() {
  const half = Math.ceil(tags.length / 2);
  const row1 = tags.slice(0, half);
  const row2 = tags.slice(half);

  return (
    <section className="py-16 overflow-hidden border-t border-border/30">
      <div className="mb-8 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Giải pháp cho mọi kênh marketing
        </p>
      </div>
      <div className="space-y-4">
        <Marquee pauseOnHover repeat={4}>
          {row1.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover repeat={4}>
          {row2.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
