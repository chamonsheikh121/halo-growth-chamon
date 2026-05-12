import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { X, Linkedin } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — HALO Growth Partners" },
      { name: "description", content: "Senior partners who lead the work, with the depth and discretion the room requires." },
      { property: "og:title", content: "The HALO Team" },
      { property: "og:description", content: "Meet the senior partners behind HALO Growth Partners." },
    ],
  }),
  component: Team,
});

const team = [
  {
    name: "Lisa Tintner",
    title: "Chief Executive Officer & Founder",
    desc: "Strategic Partner | Integrated Growth Execution | Organizational & Leadership Performance",
    image: "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/deb21bba-721c-4c13-98ac-787439d0626d/meet+team+1.png?format=1000w",
    bio: "Lisa founded HALO Growth Partners on the conviction that leadership is the most consequential — and most under-leveraged — source of value in modern organizations. She partners with CEOs, boards, and investors at the inflection points where strategy, leadership, and execution must converge.",
  },
  {
    name: "Teresa Trevino",
    title: "Senior Client Partner",
    desc: "Client Delivery & Execution | Executive Search | Business Development | Culture & Engagement",
    image: "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/6133ba6a-a5e8-454a-b4c3-2300c92a13ac/2.+Teresa+Trevino%2C+Client+Services+%26+Operations+Partner+++%282%29.png?format=1000w",
    bio: "Teresa leads client delivery across HALO's executive search and growth advisory engagements. She brings a relentless operating discipline to every search and a deep instinct for cultural fit at the most senior levels of the organization.",
  },
  {
    name: "Ann Piepkorn",
    title: "Senior Client Partner",
    desc: "Leadership Development | Succession Planning | Executive Coach | Team Cohesion",
    image: "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/fdeaa39c-8716-47f9-ad4a-b0d53292f723/Ann+Piepkorn%2C+Senior+Client+Partner2.png?format=1000w",
    bio: "Ann partners with executive teams on leadership development, succession planning, and team cohesion. Her coaching practice is built around senior leaders navigating scale, transition, and the leadership demands of the next chapter.",
  },
  {
    name: "Christina Sherrod, PhD",
    title: "Senior Client Partner",
    desc: "Executive Assessment | Succession Planning | Leadership Development | Private Equity",
    image: "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/e2a85712-4278-4c0f-b35b-c9977eeb62f6/Christina+Sherrod+PhD%2C+Leadership+%26+Assessment+Partner+v2.png?format=1000w",
    bio: "Christina leads HALO's leadership and assessment practice. A PhD in organizational psychology, she brings rigor and clarity to executive selection, succession, and the assessment work that underwrites the most consequential decisions our clients make.",
  },
];

function Team() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <PageHero
        eyebrow="The HALO Team"
        title={<>Senior partners. The depth the room requires.</>}
        lede="HALO is a senior-led practice. The partner you meet is the partner who delivers the work."
      />

      <section className="py-24">
        <div className="container-elite grid gap-8 md:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="card-elite group relative block w-full overflow-hidden p-0 text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[oklch(0.07_0.012_250)] via-[oklch(0.07_0.012_250)]/70 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-electric">{m.title}</div>
                    <h3 className="font-display mt-3 text-3xl font-light tracking-tight text-white md:text-4xl">{m.name}</h3>
                    <p className="mt-3 max-w-md text-[13px] leading-relaxed text-white/70">{m.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/80">
                      <span className="link-underline">Read full bio</span>
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {open !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
          <button aria-label="Close" onClick={() => setOpen(null)} className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          <div className="glass-strong relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl shadow-[var(--shadow-elite)]">
            <button onClick={() => setOpen(null)} className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/40 p-2 text-white">
              <X className="h-4 w-4" />
            </button>
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-[4/5] md:aspect-auto">
                <img src={team[open].image} alt={team[open].name} className="absolute inset-0 h-full w-full object-cover object-top" />
              </div>
              <div className="p-8 md:p-10">
                <div className="text-[10px] uppercase tracking-[0.28em] text-electric">{team[open].title}</div>
                <h2 className="font-display mt-3 text-3xl font-light tracking-tight text-gradient md:text-4xl">{team[open].name}</h2>
                <p className="mt-3 text-[13px] leading-relaxed text-white/70">{team[open].desc}</p>
                <div className="hairline my-6" />
                <p className="text-[15px] leading-relaxed text-muted-foreground">{team[open].bio}</p>
                <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm text-white">
                  <Linkedin className="h-4 w-4" /> <span className="link-underline">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <CTABand />
    </>
  );
}
