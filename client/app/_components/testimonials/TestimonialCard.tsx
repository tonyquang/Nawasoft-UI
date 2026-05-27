import Image from "next/image";
import type { Testimonial } from "./testimonials.data";

function Stars({ count }: { count: number }) {
  return (
    <div className="mb-3 flex gap-0.5 text-yellow-400">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { pre, bold, post, name, role, avatar, stars } = testimonial;
  return (
    <div className="glass-card flex flex-col rounded-2xl p-6">
      <Stars count={stars} />

      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {pre}
        <strong className="text-foreground">{bold}</strong>
        {post}
      </p>

      <div className="flex items-center gap-3 border-t border-border/40 pt-4">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full object-cover object-top"
        />
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
