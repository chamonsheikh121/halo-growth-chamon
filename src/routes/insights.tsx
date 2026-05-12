import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Research & Insights — HALO Growth Partners" },
      {
        name: "description",
        content:
          "Field-tested perspective on leadership, talent, organizational strategy, and execution.",
      },
      { property: "og:title", content: "Research & Insights" },
      {
        property: "og:description",
        content: "Original research and editorial from HALO Growth Partners.",
      },
    ],
  }),
  component: Insights,
});

const categories = ["All", "Leadership", "Strategy", "Talent", "Transformation", "Private Equity"];

const articles = [
  {
    slug: "executive-capability-index",
    tag: "Leadership",
    title: "The New Calculus of Executive Capability",
    excerpt: "What separates the top decile of leadership teams in 2025",
    read: "9 min",
    date: "Mar 2025",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop&q=80",
  },
  {
    slug: "operating-cadence",
    tag: "Transformation",
    title: "Why Operating Cadence Beats Operating Model",
    excerpt: "The companies winning during market compression aren't those with perfect org charts",
    read: "7 min",
    date: "Feb 2025",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&h=600&fit=crop&q=80",
  },
  {
    slug: "team-underwriting",
    tag: "Private Equity",
    title: "Underwriting the Team, Not Just the Thesis",
    excerpt: "How PE firms win or lose in compression years comes down to team underwriting",
    read: "11 min",
    date: "Feb 2025",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop&q=85",
  },
  {
    slug: "succession-risk",
    tag: "Talent",
    title: "The Quiet Risk in Your Succession Plan",
    excerpt: "Most succession plans fail silently. Here's why — and what actually works.",
    read: "6 min",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop&q=85",
  },
  {
    slug: "strategy-structure",
    tag: "Strategy",
    title: "When Strategy and Structure Stop Speaking",
    excerpt:
      "The disconnect between what you've decided to do and how you're organized to do it costs more than you think",
    read: "8 min",
    date: "Jan 2025",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop&q=80",
  },
  {
    slug: "first-200-days",
    tag: "Leadership",
    title: "The First 200 Days: A New CEO's Calibration Window",
    excerpt: "How new CEOs can establish leadership during their critical first period",
    read: "10 min",
    date: "Dec 2024",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&h=600&fit=crop&q=80",
  },
  {
    slug: "decision-rights-growth",
    tag: "Transformation",
    title: "Decision Rights as a Growth Lever",
    excerpt: "Clarity on decision-making authority accelerates execution and alignment",
    read: "7 min",
    date: "Nov 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&h=600&fit=crop&q=80",
  },
  {
    slug: "management-diligence",
    tag: "Private Equity",
    title: "Management Diligence in the Compressed Hold Era",
    excerpt: "PE firms must rethink how they evaluate and manage their portfolio companies",
    read: "9 min",
    date: "Oct 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=700&fit=crop&q=85",
  },
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

      {/* Featured Research Section - Single Large Featured Item */}
      <section className="py-20">
        <div className="container-elite">
          <Reveal>
            <div className="mb-12">
              <h2 className="font-display text-3xl font-light tracking-tight text-white md:text-4xl">
                Featured Research
              </h2>
            </div>
          </Reveal>

          {/* Featured Article - Image Left, Text Right */}
          <Reveal>
            {articles[0] && (
              <Link
                to={`/insights/${articles[0].slug}`}
                className="group relative grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-8 transition-all duration-300 hover:border-electric/50 hover:bg-gradient-to-br hover:from-white/8 hover:to-white/4 md:grid-cols-2 lg:p-12"
              >
                {/* Image Left */}
                <div className="relative aspect-square overflow-hidden rounded-xl bg-linear-to-br from-slate-900 to-slate-800 md:aspect-auto">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay for image */}
                  <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-20" />

                  {/* Featured Badge on Image */}
                  <div className="absolute right-4 top-4">
                    <span className="inline-flex items-center rounded-full border border-electric/60 bg-electric/20 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-electric shadow-lg shadow-electric/30 backdrop-blur-sm">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Text Right */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-4 inline-flex items-center rounded-full border border-electric/50 bg-electric/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-electric">
                      {articles[0].tag}
                    </div>
                    <h3 className="font-display text-4xl font-light leading-tight tracking-tight text-white transition-colors group-hover:text-electric md:text-5xl">
                      {articles[0].title}
                    </h3>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                      {articles[0].excerpt}
                    </p>
                  </div>

                  {/* Metadata Footer */}
                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
                      <span>{articles[0].date}</span>
                      <span className="text-white/20">·</span>
                      <span>{articles[0].read}</span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric/10 transition-all duration-300 group-hover:bg-electric/20 group-hover:shadow-lg group-hover:shadow-electric/30">
                      <ArrowUpRight className="h-5 w-5 text-electric transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Premium glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 shadow-[inset_0_0_30px_-8px_oklch(0.72_0.18_245/0.3)] transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            )}
          </Reveal>
        </div>
      </section>

      {/* All Articles Section - Cards with Image & Floating Text */}
      <section className="border-y border-white/5 bg-[oklch(0.06_0.012_250)] py-20">
        <div className="container-elite">
          <Reveal>
            <h2 className="font-display mb-8 text-3xl font-light tracking-tight text-white md:text-4xl">
              All Research
            </h2>
          </Reveal>

          {/* Filter */}
          <div className="mb-12 flex flex-wrap items-center gap-2">
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

          {/* Articles Grid - Image Background with Floating Text */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(1).map((a, i) => (
              <Reveal key={a.slug} delay={i * 60}>
                <Link
                  to={`/insights/${a.slug}`}
                  className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:border-electric/50"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark overlay with stronger gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-85" />
                  </div>

                  {/* Floating Content with Dark Background */}
                  <div className="relative z-10 space-y-3 rounded-lg bg-gradient-to-t from-black/95 via-black/85 to-black/70 p-6 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300">
                    <div className="mb-2 inline-flex items-center rounded-full border border-electric/60 bg-electric/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-electric shadow-[0_4px_15px_-2px_rgba(0,157,247,0.25)] backdrop-blur-sm">
                      {a.tag}
                    </div>
                    <h3 className="font-display text-lg font-light leading-snug tracking-tight text-white transition-colors group-hover:text-electric">
                      {a.title}
                    </h3>
                    <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] uppercase tracking-[0.2em] text-white/80">
                      <span>
                        {a.date} · {a.read}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric" />
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 shadow-[inset_0_0_25px_-5px_oklch(0.72_0.18_245/0.3)] transition-opacity duration-300 group-hover:opacity-100" />
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
