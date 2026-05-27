"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto grid h-16 grid-cols-3 items-center px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="NawaSoft" className="h-8 w-auto" />
          <span>
            Nawa<strong>Soft</strong>
          </span>
        </Link>

        <div className="hidden justify-center md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    Trang chủ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Sản phẩm
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-120 grid-cols-2 gap-2 p-4">
                    {products.map((p) => {
                      const Icon = p.icon;
                      return (
                        <li key={p.slug}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/${p.slug}`}
                              className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
                            >
                              <div className="mt-0.5 rounded-md bg-primary/10 p-1.5">
                                <Icon className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold group-hover:text-primary">
                                    {p.name}
                                  </span>
                                  {p.badge && (
                                    <Badge
                                      variant="secondary"
                                      className="h-4 px-1.5 text-[10px]"
                                    >
                                      {p.badge}
                                    </Badge>
                                  )}
                                </div>
                                <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                                  {p.tagline}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    Liên hệ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center justify-end gap-2 md:flex">
          <ModeToggle />
        </div>

        <div className="flex items-center justify-end md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 pt-8">
              <div className="flex flex-col gap-1">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-accent"
                  >
                    Trang chủ
                  </Link>
                </SheetClose>

                <div className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Sản phẩm
                </div>
                {products.map((p) => {
                  const Icon = p.icon;
                  return (
                    <SheetClose asChild key={p.slug}>
                      <Link
                        href={`/${p.slug}`}
                        className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm hover:bg-accent"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        <span>{p.name}</span>
                        {p.badge && (
                          <Badge
                            variant="secondary"
                            className="ml-auto h-4 px-1.5 text-[10px]"
                          >
                            {p.badge}
                          </Badge>
                        )}
                      </Link>
                    </SheetClose>
                  );
                })}

                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="rounded-lg px-4 py-3 text-sm font-medium hover:bg-accent"
                  >
                    Liên hệ
                  </Link>
                </SheetClose>

                <div className="mt-4 flex items-center justify-between px-4">
                  <span className="text-sm text-muted-foreground">
                    Giao diện
                  </span>
                  <ModeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
