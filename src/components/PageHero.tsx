import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute -left-32 top-32 h-[420px] w-[420px] rounded-full bg-[oklch(0.55_0.18_255)]/20 blur-[140px]" />
      <div className="container-elite relative pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="font-display mt-6 max-w-4xl text-5xl font-light leading-[1.05] tracking-tight text-gradient md:text-7xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {lede}
          </p>
        )}
        {children}
      </div>
      <div className="hairline" />
    </section>
  );
}

export function CTABand({
  eyebrow = "Begin a Conversation",
  title = "Let's discuss the inflection point ahead.",
  body = "Confidential consultations with our senior partners. We respond within one business day.",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-24">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute -bottom-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[oklch(0.65_0.20_240)]/20 blur-[160px]" />
      <div className="container-elite relative grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="font-display mt-5 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
        </div>
        <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
          <Link to="/contact" className="btn-electric">
            Schedule a Conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/approach" className="btn-ghost">
            Explore Our Approach
          </Link>
        </div>
      </div>
    </section>
  );
}
