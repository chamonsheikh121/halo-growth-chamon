import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Crown, Layers, Telescope, Sparkles, BarChart3, Network, Target, Users2, Briefcase, Workflow, GraduationCap, Lightbulb } from "lucide-react";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/PageHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HALO Growth Partners — Integrated Growth. Grounded in Strategy." },
      { name: "description", content: "Executive consulting partnering with leadership teams, investors, and organizations navigating growth, transformation, and critical inflection points." },
      { property: "og:title", content: "HALO Growth Partners" },
      { property: "og:description", content: "Integrated growth, grounded in strategy, driven by leadership." },
    ],
  }),
  component: Home,
});

const trustLogos = [
  "Vanguard Capital", "Northbridge", "Meridian", "Atelier Group", "Helios Equity", "Ironwood",
  "Sycamore", "Ardent Partners", "Lumen Health", "Vector Industrial",
];

const gaps = [
  { n: "01", t: "Leadership Misalignment", d: "Strategy fractures at the top before it ever reaches the org. Teams optimize locally, decisions stall, and momentum quietly erodes." },
  { n: "02", t: "Execution Friction", d: "Operating models lag strategic intent. Decision rights, cadence, and accountability haven't caught up to where the business is going." },
  { n: "03", t: "Talent Risk at the Top", d: "Critical roles are unprepared, unfilled, or misfit. Succession is reactive, and bench strength is measured in hope, not data." },
  { n: "04", t: "Scaling Without a Spine", d: "Complexity outpaces clarity. Structure, culture, and governance haven't matured with the business — and growth begins to compound risk." },
];

const pillars = [
  { key: "Strategy", icon: Compass, line: "Clarity of where to play and how to win.", body: "We pressure-test strategic theses, sharpen value-creation plans, and align the executive team around the few moves that matter most." },
  { key: "Leadership", icon: Crown, line: "The team you have, made into the team you need.", body: "Senior leadership coaching, team effectiveness, and assessment — engineered around the demands of the next chapter." },
  { key: "Talent", icon: Users2, line: "Right leaders. Right roles. Right time.", body: "Executive search, succession architecture, and bench strength built for inflection — not maintenance." },
  { key: "Execution", icon: Workflow, line: "Operating cadence that compounds.", body: "Decision rights, governance, and rhythm that turn intent into measurable, repeatable outcomes." },
];

const services = [
  { icon: Telescope, title: "Executive Search", body: "Confidential identification and placement of board, C-suite, and senior leaders.", to: "/services/executive-search" },
  { icon: BarChart3, title: "Leadership Assessment", body: "Predictive insight into capability, fit, and trajectory at the most consequential roles.", to: "/services/leadership-assessment" },
  { icon: Network, title: "Organizational Strategy", body: "Aligning structure, decision rights, and operating model to strategic intent.", to: "/services/organizational-strategy" },
  { icon: GraduationCap, title: "Leadership Development", body: "Bespoke programs that move executives from capable to indispensable." },
  { icon: Briefcase, title: "Talent Advisory", body: "Workforce architecture, capability mapping, and critical-role strategy." },
  { icon: Lightbulb, title: "Executive Coaching", body: "1:1 partnership with senior operators navigating ambiguity and scale." },
  { icon: Layers, title: "Succession Planning", body: "Architected pipelines and readiness systems for board and C-suite continuity." },
  { icon: Target, title: "Growth Alignment", body: "Bringing strategy, leadership, talent, and execution into a single integrated motion.", to: "/services/leadership-advisory" },
];

const stories = [
  { tag: "Private Equity Portfolio", title: "Resetting the Top Team Before the Next Hold Period",
    challenge: "An $800M PE-backed industrial company entered a critical 18-month value-creation window with a misaligned executive team and a CEO succession on the horizon.",
    impact: "Repositioned three leadership roles, installed a new CFO, and operationalized a board-ready succession architecture — exit multiple expanded by 1.7x.",
    metric: "1.7x", metricLabel: "exit multiple expansion" },
  { tag: "Healthcare Services", title: "From Founder-Led to Institutional-Grade",
    challenge: "A founder-led specialty platform needed to graduate to a professional operating model without losing the cultural edge that built it.",
    impact: "Designed a new operating cadence, recruited two division presidents, and stood up an executive team responsible for $1.2B in projected revenue.",
    metric: "$1.2B", metricLabel: "in revenue scope built" },
  { tag: "Industrial Manufacturing", title: "Aligning Strategy, Structure, and the Next CEO",
    challenge: "A 70-year-old industrial leader faced generational transition and a strategy that no longer matched its market.",
    impact: "Led an integrated strategy, structure, and succession reset with the board — culminating in a successful internal CEO transition.",
    metric: "100%", metricLabel: "internal succession" },
];

const insights = [
  { tag: "Leadership", title: "The New Calculus of Executive Capability", read: "9 min read" },
  { tag: "Transformation", title: "Why Operating Cadence Beats Operating Model", read: "7 min read" },
  { tag: "Private Equity", title: "Underwriting the Team, Not Just the Thesis", read: "11 min read" },
  { tag: "Talent", title: "The Quiet Risk in Your Succession Plan", read: "6 min read" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[100vh] overflow-hidden">
        <HeroBackdrop />
        <div className="container-elite relative grid min-h-[100vh] grid-cols-1 items-center gap-16 pb-20 pt-28 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <div className="eyebrow">A Growth & Leadership Advisory</div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="font-display mt-7 text-5xl font-light leading-[1.02] tracking-[-0.02em] text-gradient md:text-7xl lg:text-[80px]">
                Integrated Growth.<br />
                <span className="italic font-light text-white/95">Grounded in Strategy.</span><br />
                <span className="text-electric not-italic">Driven by Leadership.</span>
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                HALO Growth Partners partners with executive teams, investors, and organizations navigating growth,
                transformation, and critical inflection points.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-electric">
                  Schedule a Conversation <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/approach" className="btn-ghost">Explore Our Approach</Link>
              </div>
            </Reveal>
            <Reveal delay={540}>
              <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-white/5 pt-8">
                {[
                  { v: "200+", l: "Senior placements" },
                  { v: "94%", l: "5-yr executive retention" },
                  { v: "37", l: "PE & growth platforms served" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-3xl font-light text-gradient md:text-4xl">{s.v}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right cinematic framework visualization */}
          <div className="md:col-span-5">
            <Reveal delay={300}>
              <div className="relative mx-auto aspect-square w-full max-w-[520px]">
                <div className="absolute inset-6 rounded-full border border-white/8" />
                <div className="absolute inset-16 rounded-full border border-white/10" />
                <div className="absolute inset-28 rounded-full border border-white/12" />
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: "inset 0 0 120px oklch(0.65 0.2 240 / 0.25)" }} />
                <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
                  {pillars.map((p, i) => {
                    const angle = (i / pillars.length) * Math.PI * 2 - Math.PI / 2;
                    const x = 50 + Math.cos(angle) * 38;
                    const y = 50 + Math.sin(angle) * 38;
                    return (
                      <div key={p.key} className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${x}%`, top: `${y}%` }}>
                        <div className="glass rounded-xl px-3 py-2 text-xs font-medium tracking-wide text-white/90 animate-[spin_60s_linear_infinite_reverse]"
                          style={{ animationDuration: "60s" }}>
                          {p.key}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">HALO BlueSky™</div>
                  <div className="font-display mt-2 text-2xl font-light text-gradient">Growth Model</div>
                  <Sparkles className="mx-auto mt-3 h-4 w-4 text-electric" />
                </div>
                {/* connecting beams */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-30">
                  {pillars.map((_, i) => {
                    const a = (i / pillars.length) * Math.PI * 2 - Math.PI / 2;
                    return (
                      <line key={i} x1="50" y1="50" x2={50 + Math.cos(a) * 38} y2={50 + Math.sin(a) * 38}
                        stroke="oklch(0.72 0.18 245)" strokeWidth="0.2" />
                    );
                  })}
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/40">
          Scroll to explore
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-white/5 bg-[oklch(0.06_0.012_250)] py-16">
        <div className="container-elite">
          <Reveal>
            <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground md:text-base">
              Trusted by growth-focused leadership teams navigating complexity, transformation, and scale.
            </p>
          </Reveal>
          <div className="relative mt-10 overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)" }}>
            <div className="flex w-max items-center gap-16 animate-scroll-x">
              {[...trustLogos, ...trustLogos].map((l, i) => (
                <div key={i} className="font-display text-xl font-light tracking-[0.18em] text-white/40 hover:text-white/80 transition-colors whitespace-nowrap">
                  {l.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTION GAP */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-[oklch(0.55_0.18_255)]/10 blur-[140px]" />
        <div className="container-elite relative">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
              <Reveal>
                <div className="eyebrow">The Execution Gap</div>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-6xl">
                  Strategy fails where alignment breaks.
                </h2>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                  Most strategies don't fail in the deck. They fail in the space between the executive team's intent and the
                  organization's ability to execute. Our work lives in that space.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <Link to="/approach" className="mt-8 inline-flex items-center gap-2 text-sm text-white">
                  <span className="link-underline">See how we close it</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <div className="md:col-span-7 space-y-4">
              {gaps.map((g, i) => (
                <Reveal key={g.n} delay={i * 120}>
                  <article className="card-elite group p-8">
                    <div className="flex items-start gap-6">
                      <div className="font-display text-3xl font-light text-electric">{g.n}</div>
                      <div className="flex-1">
                        <h3 className="font-display text-2xl font-light tracking-tight text-white">{g.t}</h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{g.d}</p>
                      </div>
                      <ArrowUpRight className="mt-1 h-5 w-5 translate-y-0 text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric" />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HALO BLUESKY FRAMEWORK */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[oklch(0.06_0.012_250)] py-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.55_0.18_255)]/15 blur-[180px]" />
        <div className="container-elite relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="eyebrow justify-center">The HALO BlueSky™ Growth Model</div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-6xl">
                A proprietary system for integrated executive growth.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Four interlocking pillars. One operating system for value creation. Built for leadership teams who can no longer
                afford to treat strategy, talent, and execution as separate workstreams.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.key} delay={i * 120}>
                <article className="card-elite group relative h-full overflow-hidden p-8">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[oklch(0.65_0.20_240)]/0 blur-3xl transition-all duration-700 group-hover:bg-[oklch(0.65_0.20_240)]/40" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-electric transition-all group-hover:border-electric/40 group-hover:shadow-[0_0_30px_-5px_oklch(0.72_0.18_245/0.6)]">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Pillar 0{i + 1}</div>
                    <h3 className="font-display mt-2 text-3xl font-light text-white">{p.key}</h3>
                    <p className="mt-3 text-sm font-medium leading-snug text-white/85">{p.line}</p>
                    <div className="hairline my-5" />
                    <p className="text-[14px] leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-32">
        <div className="container-elite">
          <div className="grid gap-16 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal><div className="eyebrow">What We Do</div></Reveal>
              <Reveal delay={120}>
                <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-6xl">
                  Eight integrated capabilities.<br />One growth practice.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={200}>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Engaged together — or sequenced as the moment requires — to move organizations from strategic intent to
                  measurable executive performance.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link
                  to={s.to ?? "/services"}
                  className="card-elite group flex h-full flex-col p-7"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-electric">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-6 text-xl font-light tracking-tight text-white">{s.title}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted-foreground">{s.body}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.2em] text-electric">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT STORIES */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[oklch(0.06_0.012_250)] py-32">
        <div className="container-elite">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal><div className="eyebrow">Client Stories</div></Reveal>
              <Reveal delay={120}>
                <h2 className="font-display mt-6 max-w-2xl text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-6xl">
                  Quiet work. Consequential outcomes.
                </h2>
              </Reveal>
            </div>
            <Link to="/stories" className="btn-ghost">All client stories <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
                <article className="card-elite group flex h-full flex-col p-8">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-electric">{s.tag}</div>
                  <h3 className="font-display mt-4 text-2xl font-light leading-tight tracking-tight text-white">{s.title}</h3>
                  <div className="hairline my-6" />
                  <div className="space-y-5 text-[14px] leading-relaxed text-muted-foreground">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/55">The Challenge</div>
                      <p className="mt-2">{s.challenge}</p>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/55">The Outcome</div>
                      <p className="mt-2">{s.impact}</p>
                    </div>
                  </div>
                  <div className="mt-8 flex items-end justify-between border-t border-white/5 pt-6">
                    <div>
                      <div className="font-display text-3xl font-light text-electric">{s.metric}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{s.metricLabel}</div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* THOUGHT LEADERSHIP */}
      <section className="relative py-32">
        <div className="container-elite">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal><div className="eyebrow">Research & Insights</div></Reveal>
              <Reveal delay={120}>
                <h2 className="font-display mt-6 max-w-2xl text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-6xl">
                  Field-tested perspective on leadership and growth.
                </h2>
              </Reveal>
            </div>
            <Link to="/insights" className="btn-ghost">All research <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Link to="/insights" className="card-elite group block h-full overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
                  <div className="absolute inset-0 grid-pattern opacity-40" />
                  <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-[oklch(0.65_0.20_240)]/30 blur-[100px]" />
                  <div className="absolute left-8 top-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/80">
                    Featured Research
                  </div>
                  <div className="absolute right-8 top-8 text-[11px] uppercase tracking-[0.24em] text-white/50">2025 Index</div>
                </div>
                <div className="p-10">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-electric">Leadership Capability</div>
                  <h3 className="font-display mt-4 text-3xl font-light leading-tight tracking-tight text-white md:text-4xl">
                    The Executive Capability Index — what separates the top decile of leadership teams in 2025.
                  </h3>
                  <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                    A two-year study of 312 executive teams across PE-backed and public companies — and what their highest
                    performers do differently when growth gets harder.
                  </p>
                  <div className="mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.24em] text-white">
                    <span className="link-underline">Read the report</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
            <div className="lg:col-span-5 space-y-5">
              {insights.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <Link to="/insights" className="card-elite group flex items-start gap-5 p-6">
                    <div className="font-display text-2xl font-light text-electric">0{i + 1}</div>
                    <div className="flex-1">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">{p.tag} · {p.read}</div>
                      <h4 className="font-display mt-2 text-xl font-light leading-snug tracking-tight text-white">{p.title}</h4>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-electric" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
