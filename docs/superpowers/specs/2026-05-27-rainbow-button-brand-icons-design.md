# Design Spec: RainbowButton + Brand Icons + FloatingContactButton

**Date:** 2026-05-27  
**Status:** Approved

---

## Summary

Add MagicUI RainbowButton to the CtaSection primary CTA and each ProductCard, swap product card icons for real brand icons (WordPress, Facebook, Zalo), and add a floating contact button fixed to the bottom-right of every page.

---

## Scope

| Change | Files affected |
|--------|---------------|
| Install `@magicui/rainbow-button` | `components/ui/rainbow-button.tsx` (generated) |
| Install `react-icons` | `package.json` |
| Zalo SVG icon component | `lib/icons.tsx` (new) |
| Product icon type + assignments | `lib/products.ts` |
| RainbowButton in CtaSection | `app/_components/CtaSection.tsx` |
| RainbowButton + "Liên hệ" button in ProductCard | `components/shared/ProductCard.tsx` |
| FloatingContactButton component | `components/shared/FloatingContactButton.tsx` (new) |
| Mount FloatingContactButton | `app/layout.tsx` |

---

## 1. Dependencies

```bash
npx shadcn@latest add @magicui/rainbow-button
npm install react-icons
```

- `@magicui/rainbow-button` generates `components/ui/rainbow-button.tsx` via shadcn CLI.
- `react-icons` provides `FaWordpress` and `FaFacebook` from the `fa` set.

---

## 2. Zalo Icon

**File:** `lib/icons.tsx` (new)

A minimal functional component that renders the Zalo SVG logo and accepts a `className` prop for size/color styling. Used in `lib/products.ts` the same way as react-icons components.

```tsx
export function ZaloIcon({ className }: { className?: string }) {
  // SVG path for Zalo logo
}
```

---

## 3. Product Icon Type & Assignments

**File:** `lib/products.ts`

**Type change:**
```ts
// Before
icon: LucideIcon;

// After
icon: React.ComponentType<{ className?: string }>;
```

This is a non-breaking change — Lucide icons, react-icons, and custom SVG components all satisfy `React.ComponentType<{ className?: string }>`.

**Icon assignments:**
| Product | Icon | Source |
|---------|------|--------|
| Nawa Deploy | `Rocket` | lucide-react (unchanged) |
| Nawa SEO | `FaWordpress` | react-icons/fa |
| Nawa Facebook | `FaFacebook` | react-icons/fa |
| Nawa Zalo | `ZaloIcon` | lib/icons.tsx |

`ProductCard.tsx` requires no changes **for icon rendering** — `<Icon className={...} />` already works with the new type. However, the file is modified in Section 5 to add the "Liên hệ" button.

---

## 4. RainbowButton in CtaSection

**File:** `app/_components/CtaSection.tsx`

Replace the primary gradient button ("Dùng thử miễn phí") with `<RainbowButton>`. The secondary outline button ("Xem sản phẩm") is unchanged to preserve visual hierarchy.

```tsx
// Before
<Button asChild size="lg" className="rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-8 text-white hover:opacity-90">
  <Link href="/contact">Dùng thử miễn phí</Link>
</Button>

// After
<RainbowButton asChild>
  <Link href="/contact">Dùng thử miễn phí</Link>
</RainbowButton>
```

---

## 5. "Liên hệ" Button in ProductCard

**File:** `components/shared/ProductCard.tsx`

The bottom CTA row currently shows a text link "Khám phá {product.name} →". Update to a flex row with the text link on the left and a small RainbowButton on the right.

```tsx
<div className="flex items-center justify-between gap-2">
  {/* Existing text link — unchanged */}
  <div className="flex items-center gap-1.5 text-sm font-semibold ...">
    Khám phá {product.name}
    <ArrowRight ... />
  </div>

  {/* New contact button */}
  {/* Note: verify RainbowButton supports size + asChild after install.
      If not, wrap with a plain <button> styled to match or use className override. */}
  <RainbowButton size="sm" asChild onClick={(e) => e.stopPropagation()}>
    <Link href={`/contact?product=${product.slug}`}>Liên hệ</Link>
  </RainbowButton>
</div>
```

`e.stopPropagation()` prevents the inner button click from bubbling to the outer `<Link>` wrapper that navigates to the product detail page.

---

## 6. FloatingContactButton

**File:** `components/shared/FloatingContactButton.tsx` (new)

A `"use client"` component fixed to `bottom-6 right-6`, `z-50`. Uses `RainbowButton` with a `MessageCircle` icon and "Liên hệ" label. Links to `/contact`.

```tsx
"use client"

// Fixed bottom-right floating button
// <RainbowButton> wrapping <Link href="/contact">
// Icon: MessageCircle (lucide-react) + text "Liên hệ"
// Classes: fixed bottom-6 right-6 z-50 rounded-full shadow-lg
```

**File:** `app/layout.tsx`

Mount `<FloatingContactButton />` inside `<body>` after `{children}`, so it appears on every page.

---

## Out of Scope

- Hero section buttons — unchanged
- ProductCta (product detail pages) — unchanged
- Any other gradient buttons — unchanged
- Modal/popup contact flow — not needed (direct link to /contact)
