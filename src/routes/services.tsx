import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import {
  ArrowUpRight,
  Telescope,
  BarChart3,
  Network,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Layers,
  Target,
  Crown,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What We Do â€” HALO Growth Partners" },
      {
        name: "description",
        content:
          "Eight integrated capabilities â€” engaged together or sequenced as the moment requires.",
      },
      { property: "og:title", content: "Services â€” HALO Growth Partners" },
      {
        property: "og:description",
        content: "Leadership advisory, executive search, organizational strategy, and assessment.",
      },
    ],
  }),
  component: Services,
});

const featured = [
  {
    icon: Crown,
    title: "Leadership Advisory",
    desc: "Senior counsel for CEOs, executive teams, and boards navigating the most consequential moments of their tenure.",
    to: "/services/leadership-advisory",
  },
  {
    icon: Telescope,
    title: "Executive Search",
    desc: "Confidential identification, calibration, and placement of board, C-suite, and senior leaders.",
    to: "/services/executive-search",
  },
  {
    icon: Network,
    title: "Organizational Strategy",
    desc: "Aligning structure, decision rights, and operating model to strategic intent.",
    to: "/services/organizational-strategy",
  },
  {
    icon: BarChart3,
    title: "Leadership Assessment",
    desc: "Predictive insight into capability, fit, and trajectory at the most consequential roles.",
    to: "/services/leadership-assessment",
  },
];

const supporting = [
  {
    icon: GraduationCap,
    title: "Leadership Development",
    desc: "Bespoke programs that move executives from capable to indispensable.",
  },
  {
    icon: Briefcase,
    title: "Talent Advisory",
    desc: "Workforce architecture, capability mapping, and critical-role strategy.",
  },
  {
    icon: Lightbulb,
    title: "Executive Coaching",
    desc: "1:1 partnership with senior operators navigating ambiguity and scale.",
  },
  {
    icon: Layers,
    title: "Succession Planning",
    desc: "Architected pipelines and readiness systems for board and C-suite continuity.",
  },
  {
    icon: Target,
    title: "Growth Alignment",
    desc: "Bringing strategy, leadership, talent, and execution into a single integrated motion.",
  },
];

function Services() {
  const location = useLocation();
  const isRootServices = location.pathname === "/services";

  if (!isRootServices) {
    return <Outlet />;
  }

  return <ServicesLayout />;
}

function ServicesLayout() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={<>Eight capabilities. One integrated growth practice.</>}
        lede="Engaged together â€” or sequenced as the moment requires â€” to move organizations from strategic intent to measurable executive performance."
      />

      {/* Featured */}
      <section className="py-24">
        <div className="container-elite">
          <Reveal>
            <div className="eyebrow">Core Practices</div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featured.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <Link to={s.to} className="card-elite group block h-full p-10">
                  <div className="flex items-start justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-electric">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-electric" />
                  </div>
                  <h3 className="font-display mt-8 text-3xl font-light tracking-tight text-white md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[oklch(0.06_0.012_250)] py-24">
        <div className="container-elite">
          <Reveal>
            <div className="eyebrow">Supporting Capabilities</div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {supporting.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <article className="card-elite h-full p-8">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-electric">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display mt-6 text-xl font-light tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{s.desc}</p>
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
