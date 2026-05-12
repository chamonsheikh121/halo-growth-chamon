import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Research & Insights — HALO Growth Partners" },
      { name: "description", content: "Field-tested perspective on leadership, talent, organizational strategy, and execution." },
      { property: "og:title", content: "Research & Insights" },
      { property: "og:description", content: "Original research and editorial from HALO Growth Partners." },
    ],
  }),
  component: Insights,
});

const categories = ["All", "Leadership", "Strategy", "Talent", "Transformation", "Private Equity"];

const articles = [
  { tag: "Leadership", title: "The New Calculus of Executive Capability", read: "9 min", date: "Mar 2025" },
  { tag: "Transformation", title: "Why Operating Cadence Beats Operating Model", read: "7 min", date: "Feb 2025" },
  { tag: "Private Equity", title: "Underwriting the Team, Not Just the Thesis", read: "11 min", date: "Feb 2025" },
  { tag: "Talent", title: "The Quiet Risk in Your Succession Plan", read: "6 min", date: "Jan 2025" },
  { tag: "Strategy", title: "When Strategy and Structure Stop Speaking", read: "8 min", date: "Jan 2025" },
  { tag: "Leadership", title: "The First 200 Days: A New CEO's Calibration Window", read: "10 min", date: "Dec 2024" },
  { tag: "Transformation", title: "Decision Rights as a Growth Lever", read: "7 min", date: "Nov 2024" },
  { tag: "Private Equity", title: "Management Diligence in the Compressed Hold Era", read: "9 min", date: "Oct 2024" },
];

function Insights() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter((a) => a.tag === active);
  return (
    <>
      <PageHero
        eyebrow="Research & Insights"
        title={<>Field-tested perspective on leadership and growth.</>}
        lede="Original research and editorial from HALO partners — written for the executives, boards, and investors making the most consequential calls of their tenure."
      />

      {/* Featured */}
      <section className="py-20">
        <div className="container-elite">
          <Reveal>
            <Link to="/insights" className="card-elite group block overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-12">
                <div className="relative aspect-[4/3] lg:col-span-7 lg:aspect-auto">
                  <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
                  <div className="absolute inset-0 grid-pattern opacity-40" />
                  <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-[oklch(0.65_0.20_240)]/30 blur-[100px]" />
                  <div className="absolute left-8 top-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/80">Featured Research</div>
                </div>
                <div className="p-10 lg:col-span-5">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-electric">Leadership Capability</div>
                  <h2 className="font-display mt-4 text-3xl font-light leading-tight tracking-tight text-white md:text-4xl">
                    The Executive Capability Index — what separates the top decile of leadership teams in 2025.
                  </h2>
                  <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                    A two-year study of 312 executive teams across PE-backed and public companies — and what their highest performers do differently when growth gets harder.
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.24em] text-white">
                    <span className="link-underline">Read the report</span> <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Filter */}
      <section className="border-y border-white/5 bg-[oklch(0.06_0.012_250)] py-20">
        <div className="container-elite">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-[12px] uppercase tracking-[0.2em] transition-all ${
                  active === c
                    ? "border-electric/50 bg-electric/10 text-white shadow-[0_0_20px_-5px_oklch(0.72_0.18_245/0.5)]"
                    : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <Link to="/insights" className="card-elite group flex h-full flex-col p-7">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-electric">{a.tag}</div>
                  <h3 className="font-display mt-4 flex-1 text-2xl font-light leading-tight tracking-tight text-white">{a.title}</h3>
                  <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    <span>{a.date} · {a.read}</span>
                    <ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
