import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach — HALO Growth Partners" },
      {
        name: "description",
        content:
          "How HALO integrates strategy, leadership, talent, and execution into a single growth motion.",
      },
      { property: "og:title", content: "Our Approach" },
      {
        property: "og:description",
        content: "An integrated method for executive growth and organizational transformation.",
      },
    ],
  }),
  component: Approach,
});

const phases = [
  {
    n: "01",
    t: "Diagnose",
    d: "We start at the top. Listening sessions with the CEO, board, and executive team. Calibrated assessment. Strategic thesis review. We map the actual gap — not the assumed one.",
  },
  {
    n: "02",
    t: "Architect",
    d: "We design the integrated path: organizational structure, leadership moves, talent pipeline, and operating cadence — sequenced for the value-creation window.",
  },
  {
    n: "03",
    t: "Mobilize",
    d: "We execute alongside the team. Search, coaching, team effectiveness, governance design — delivered by senior practitioners, not generalists.",
  },
  {
    n: "04",
    t: "Compound",
    d: "We stay close through the first 12 months of impact. Re-calibration, succession architecture, and quarterly leadership reviews keep the gain compounding.",
  },
];

function Approach() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title={<>One integrated motion. Four interlocking pillars.</>}
        lede="The HALO BlueSky™ Growth Model is how we close the gap between strategic intent and executive performance — engineered for the moments when getting it right matters most."
      />

      {/* Method timeline */}
      <section className="relative py-28">
        <div className="container-elite">
          <div className="max-w-3xl">
            <Reveal>
              <div className="eyebrow">The Method</div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-6xl">
                A four-phase rhythm that compounds.
              </h2>
            </Reveal>
          </div>
          <div className="relative mt-16">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2" />
            <div className="space-y-12">
              {phases.map((p, i) => (
                <Reveal key={p.n} delay={i * 120}>
                  <div
                    className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}
                  >
                    <div className={i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}>
                      <div className="font-display text-5xl font-light text-electric md:text-7xl">
                        {p.n}
                      </div>
                      <h3 className="font-display mt-3 text-3xl font-light tracking-tight text-white md:text-4xl">
                        {p.t}
                      </h3>
                    </div>
                    <div className={i % 2 === 0 ? "md:pl-16" : "md:text-right md:pr-16"}>
                      <p className="text-[15px] leading-relaxed text-muted-foreground md:text-lg">
                        {p.d}
                      </p>
                    </div>
                    <div className="absolute left-[19px] top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-electric shadow-[0_0_20px_oklch(0.72_0.18_245)] md:left-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-white/5 bg-[oklch(0.06_0.012_250)] py-28">
        <div className="container-elite">
          <div className="max-w-3xl">
            <Reveal>
              <div className="eyebrow">Principles</div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-5xl">
                What our partnerships have in common.
              </h2>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Senior-led, always.",
                d: "Every engagement is led by a HALO partner — start to finish.",
              },
              {
                t: "Integrated by default.",
                d: "Strategy, leadership, talent, and execution operate as one system.",
              },
              {
                t: "Calibrated to the window.",
                d: "We work to the value-creation horizon, not to a deck of deliverables.",
              },
              {
                t: "Confidential by design.",
                d: "Our most consequential work never appears in a case study.",
              },
              {
                t: "Candor as a service.",
                d: "What you need to hear, said with the precision the moment requires.",
              },
              {
                t: "Outcomes over optics.",
                d: "We measure ourselves by the next chapter, not the close of engagement.",
              },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 80}>
                <article className="card-elite h-full p-7">
                  <h3 className="font-display text-xl font-light tracking-tight text-white">
                    {p.t}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{p.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
