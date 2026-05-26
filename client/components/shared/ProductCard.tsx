import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { type Product, productColorMap } from "@/lib/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon;
  const colors = productColorMap[product.color];

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border/50 bg-card p-6",
        "overflow-hidden transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
        `hover:${colors.glow} hover:border-opacity-60`
      )}
    >
      {/* BorderBeam always rendered, more visible on hover */}
      <div className="opacity-40 transition-opacity duration-300 group-hover:opacity-100">
        <BorderBeam size={150} duration={12} />
      </div>

      {/* Icon + Badge row */}
      <div className="mb-4 flex items-start justify-between">
        <div className={cn("rounded-xl p-2.5", colors.bg)}>
          <Icon className={cn("h-6 w-6", colors.text)} />
        </div>
        {product.badge && (
          <Badge variant="secondary" className="text-xs">
            {product.badge}
          </Badge>
        )}
      </div>

      {/* Name + tagline */}
      <h3 className="mb-1 text-lg font-bold">{product.name}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{product.tagline}</p>

      {/* Problems list */}
      <ul className="mb-6 flex-1 space-y-2">
        {product.problems.map((problem) => (
          <li key={problem} className="flex items-start gap-2 text-sm">
            <CheckCircle2
              className={cn("mt-0.5 h-4 w-4 shrink-0", colors.text)}
            />
            <span className="text-muted-foreground">{problem}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button asChild variant="outline" className="w-full rounded-xl">
        <Link href={`/${product.slug}`}>Xem chi tiết →</Link>
      </Button>
    </div>
  );
}
