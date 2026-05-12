import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Check } from "lucide-react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  whoFor: string[];
  whatWeDeliver: { t: string; d: string }[];
  outcomes: string[];
}

export function ServiceTemplate({ eyebrow, title, lede, whoFor, whatWeDeliver, outcomes }: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lede={lede}>
        <Reveal delay={420}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-electric">
              Discuss this engagement <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost">
              All capabilities
            </Link>
          </div>
        </Reveal>
      </PageHero>

      <section className="py-24">
        <div className="container-elite grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="eyebrow">Who It's For</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-3xl font-light leading-tight tracking-tight text-gradient md:text-4xl">
                Calibrated for senior leaders at consequential moments.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4">
              {whoFor.map((w, i) => (
                <Reveal key={w} delay={i * 80}>
                  <li className="flex items-start gap-4 border-b border-white/5 pb-4 text-[15px] leading-relaxed text-white/85">
                    <span className="mt-2 h-px w-6 flex-shrink-0 bg-electric" />
                    {w}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[oklch(0.06_0.012_250)] py-24">
        <div className="container-elite">
          <div className="max-w-3xl">
            <Reveal>
              <div className="eyebrow">What We Deliver</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-5xl">
                A senior-led engagement, end to end.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whatWeDeliver.map((d, i) => (
              <Reveal key={d.t} delay={i * 80}>
                <article className="card-elite h-full p-8">
                  <div className="font-display text-3xl font-light text-electric">0{i + 1}</div>
                  <h3 className="font-display mt-4 text-xl font-light tracking-tight text-white">
                    {d.t}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{d.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-elite">
          <div className="max-w-3xl">
            <Reveal>
              <div className="eyebrow">Outcomes</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] tracking-tight text-gradient md:text-5xl">
                What clients walk away with.
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-5">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-electric/40 text-electric">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-white/85">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
