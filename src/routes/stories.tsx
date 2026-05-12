import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Client Stories — HALO Growth Partners" },
      { name: "description", content: "Quiet work. Consequential outcomes. Selected client engagements from HALO Growth Partners." },
      { property: "og:title", content: "Client Stories" },
      { property: "og:description", content: "Selected, anonymized engagements across PE, healthcare, industrial, and growth-stage companies." },
    ],
  }),
  component: Stories,
});

const stories = [
  { tag: "Private Equity Portfolio", title: "Resetting the top team before the next hold period",
    challenge: "An $800M PE-backed industrial company entered a critical 18-month value-creation window with a misaligned executive team and a CEO succession on the horizon.",
    transformation: "Integrated assessment of the ELT, structural redesign of three leadership functions, and a confidential CFO search aligned to the value-creation thesis.",
    outcome: "Repositioned three leadership roles, installed a new CFO, and operationalized a board-ready succession architecture.",
    impact: "Exit multiple expanded by 1.7x against the original underwriting model." },
  { tag: "Healthcare Services", title: "From founder-led to institutional-grade",
    challenge: "A founder-led specialty platform needed to graduate to a professional operating model without losing the cultural edge that built it.",
    transformation: "Operating-cadence redesign, division-president searches, and culture stewardship through the operating-model transition.",
    outcome: "Designed a new operating cadence, recruited two division presidents, and stood up an executive team responsible for $1.2B in projected revenue.",
    impact: "Founder retained as Chair; institutional team in place 14 months ahead of plan." },
  { tag: "Industrial Manufacturing", title: "Aligning strategy, structure, and the next CEO",
    challenge: "A 70-year-old industrial leader faced generational transition and a strategy that no longer matched its market.",
    transformation: "Joint strategy and succession reset with the board, paired with a 24-month internal CEO development arc.",
    outcome: "Led an integrated strategy, structure, and succession reset culminating in a successful internal CEO transition.",
    impact: "100% internal succession with zero senior-leadership attrition through the transition." },
  { tag: "Growth-Stage Technology", title: "Building the executive layer for the next $200M",
    challenge: "A profitable growth-stage technology company hit the ceiling of founder-led execution with capital ready to deploy.",
    transformation: "Top-team assessment, operating-model design, and three executive searches sequenced to the growth roadmap.",
    outcome: "Installed a Chief Revenue Officer, COO, and Chief People Officer; redesigned the executive operating cadence.",
    impact: "Doubled annualized revenue in 22 months; founder reported 'first true executive team in 8 years.'" },
];

function Stories() {
  return (
    <>
      <PageHero
        eyebrow="Client Stories"
        title={<>Quiet work. Consequential outcomes.</>}
        lede="Selected and anonymized engagements across private equity, healthcare, industrial, and growth-stage companies."
      />
      <section className="py-24">
        <div className="container-elite space-y-8">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card-elite group grid gap-10 p-10 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-electric">{s.tag}</div>
                  <h3 className="font-display mt-4 text-3xl font-light leading-tight tracking-tight text-white md:text-4xl">{s.title}</h3>
                </div>
                <div className="md:col-span-8 grid gap-6 md:grid-cols-3">
                  {[
                    { l: "Challenge", v: s.challenge },
                    { l: "Transformation", v: s.transformation },
                    { l: "Outcome", v: s.outcome },
                  ].map((b) => (
                    <div key={b.l}>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/55">{b.l}</div>
                      <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{b.v}</p>
                    </div>
                  ))}
                  <div className="md:col-span-3 mt-2 flex items-start gap-4 rounded-xl border border-electric/20 bg-electric/[0.04] p-5">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-electric">Leadership Impact</div>
                    <p className="text-[14px] leading-relaxed text-white/85">{s.impact}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
