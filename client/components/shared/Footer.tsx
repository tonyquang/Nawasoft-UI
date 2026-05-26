import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { products } from "@/lib/products";

const companyLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-violet-600 to-cyan-400 text-sm font-extrabold text-white">
                N
              </div>
              <span>
                Nawa<strong>Soft</strong>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Hệ sinh thái AI Marketing toàn diện cho doanh nghiệp Việt Nam.
            </p>
          </div>

          {/* Col 2: Products */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Sản phẩm</h3>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/${p.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Công ty</h3>
            <ul className="space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Liên hệ</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📍 431 Tô Hiến Thành, P. Diên Hồng, Q.10, TP.HCM</li>
              <li>
                <a
                  href="tel:0847755599"
                  className="transition-colors hover:text-foreground"
                >
                  📞 0847 755 599
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@2dd.asia"
                  className="transition-colors hover:text-foreground"
                >
                  ✉️ info@2dd.asia
                </a>
              </li>
              <li>⏰ T2–T7: 8:00–22:00</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 opacity-30" />

        <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} NawaSoft. All rights reserved.</span>
          <span>Made with ❤️ in Vietnam</span>
        </div>
      </div>
    </footer>
  );
}
