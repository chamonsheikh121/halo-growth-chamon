import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Heart, Compass, Mountain, Sparkles, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — HALO Growth Partners" },
      { name: "description", content: "Who we are, why HALO exists, and the convictions that shape our work with executive teams and investors." },
      { property: "og:title", content: "About HALO Growth Partners" },
      { property: "og:description", content: "Purpose-driven growth for leadership teams navigating the next chapter." },
    ],
  }),
  component: About,
});

const beliefs = [
  { icon: Compass, t: "Strategy is a leadership act.", d: "Plans don't lead. People do. We work where conviction, capability, and clarity meet." },
  { icon: Mountain, t: "Inflection points reward courage.", d: "The hardest moments in a company's life are also the most generative — if leadership is ready to meet them." },
  { icon: Heart, t: "Trust is the operating system.", d: "Confidentiality, candor, and consequence — the three currencies we trade in with every client we serve." },
  { icon: Sparkles, t: "Excellence is quiet.", d: "Our most important work rarely has our name on it. We're paid to be useful, not visible." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About HALO"
        title={<>A growth & leadership advisory built for the moments that matter most.</>}
        lede="HALO Growth Partners exists for executive teams, boards, and investors at the inflection points where strategy, leadership, and execution must converge — or risk."
      />

      {/* Who we are */}
      <section className="relative py-28">
        <div className="container-elite grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><div className="eyebrow">Who We Are</div></Reveal>
            <Reveal delay={120}>
              <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-5xl">
                Senior partners. <em className="font-light italic">No layers.</em> No scripts.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-6 text-[16px] leading-relaxed text-muted-foreground md:text-lg">
            <Reveal delay={120}><p>
              HALO is a senior-led practice. The partner you meet is the partner who delivers the work — supported by a small,
              hand-picked team of operators, assessors, and search professionals who have lived inside the businesses we serve.
            </p></Reveal>
            <Reveal delay={220}><p>
              We don't run playbooks. We build the right approach for the company in front of us — privately, candidly, and
              with the kind of accountability our clients can only get from people who have sat in their seat.
            </p></Reveal>
            <Reveal delay={320}><p>
              Our work integrates strategy, leadership, talent, and execution into a single motion. It's how we close the
              gap between intent and outcome — and why our clients return for the most consequential decisions of their tenure.
            </p></Reveal>
          </div>
        </div>
      </section>

      {/* Why HALO */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[oklch(0.06_0.012_250)] py-28">
        <div className="absolute -right-20 top-1/4 h-[420px] w-[420px] rounded-full bg-[oklch(0.55_0.18_255)]/15 blur-[140px]" />
        <div className="container-elite relative">
          <div className="max-w-3xl">
            <Reveal><div className="eyebrow">Why HALO</div></Reveal>
            <Reveal delay={120}>
              <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-6xl">
                Built for the leaders who don't have time to be wrong.
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Integrated by design", d: "Most firms sell a single capability. We sell the alignment of four — strategy, leadership, talent, and execution — because that is where value is actually created." },
              { n: "02", t: "Calibrated for the top", d: "Our work is anchored at the C-suite, the board, and the investor. We bring the data, the frameworks, and the candor those rooms require." },
              { n: "03", t: "Discreet and consequential", d: "Confidentiality isn't a clause. It's how we operate. The work is quiet. The outcomes are not." },
            ].map((c, i) => (
              <Reveal key={c.n} delay={i * 120}>
                <article className="card-elite h-full p-8">
                  <div className="font-display text-3xl font-light text-electric">{c.n}</div>
                  <h3 className="font-display mt-4 text-2xl font-light tracking-tight text-white">{c.t}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{c.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Beliefs */}
      <section className="py-28">
        <div className="container-elite">
          <div className="max-w-3xl">
            <Reveal><div className="eyebrow">Mission & Beliefs</div></Reveal>
            <Reveal delay={120}>
              <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-6xl">
                Convictions that shape every engagement.
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {beliefs.map((b, i) => (
              <Reveal key={b.t} delay={i * 100}>
                <article className="card-elite group h-full p-8">
                  <div className="flex items-start gap-5">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-electric">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-light tracking-tight text-white">{b.t}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{b.d}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Heart behind HALO */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[oklch(0.06_0.012_250)] py-28">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container-elite relative grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal><div className="eyebrow">The Heart Behind HALO</div></Reveal>
            <Reveal delay={120}>
              <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-5xl">
                Purpose <em className="italic">isn't a tagline.</em> It's our methodology.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 space-y-6 text-[16px] leading-relaxed text-muted-foreground md:text-lg">
            <Reveal delay={120}><p>
              HALO was founded on a simple conviction: leadership is the most under-leveraged source of value in modern
              organizations — and the most consequential. When it's right, strategy compounds. When it's misaligned,
              everything quietly slows.
            </p></Reveal>
            <Reveal delay={220}><p>
              We built this firm to serve the executives doing the hard, often invisible work of resetting their teams,
              their organizations, and their own leadership for what's next. Resilience over noise. Clarity over complexity.
              Outcomes over optics.
            </p></Reveal>
            <Reveal delay={320}>
              <Link to="/team" className="inline-flex items-center gap-2 text-sm text-white">
                <span className="link-underline">Meet the team</span> <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
