import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CTABand } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/insights/$slug")({
  component: InsightDetail,
});

const articles = [
  {
    slug: "executive-capability-index",
    tag: "Leadership",
    title:
      "The Executive Capability Index â€” what separates the top decile of leadership teams in 2025",
    excerpt:
      "A two-year study of 312 executive teams across PE-backed and public companies â€” and what their highest performers do differently when growth gets harder.",
    read: "9 min",
    date: "Mar 2025",
    image:
      "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/1735689600000-Z8K9M5X2Q4P1N7R9/executive+capability.jpg?format=750w",
    content:
      "The Executive Capability Index represents our most comprehensive research to date. Over two years, we studied 312 executive teams across private equity-backed and public companies to identify what truly separates the top-performing leadership teams from the rest.\n\nKey findings show that the highest-performing teams share five core competencies: strategic clarity, decisive execution, adaptive learning, stakeholder alignment, and succession readiness. When growth slows or market conditions tighten, these teams maintain their performance while others falter.\n\nThis research challenges conventional wisdom about executive talent. Most organizations focus on individual executive capability. The data shows that team capability â€” how well executives work together, make decisions, and learn â€” is the far stronger predictor of organizational performance.\n\nWe've also identified specific practices that high-performing teams use that others don't: structured decision protocols, quarterly capability reviews, and explicit succession planning tied to strategy.\n\nThe full report includes benchmark data, assessment tools, and case studies from companies across sectors and stages.",
  },
  {
    slug: "operating-cadence",
    tag: "Transformation",
    title: "Why Operating Cadence Beats Operating Model",
    excerpt:
      "The companies winning during market compression aren't those with perfect org charts â€” they're the ones with precise decision rhythms.",
    read: "7 min",
    date: "Feb 2025",
    image:
      "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/1735689600000-A1B2C3D4E5F6G7H8/operating+cadence.jpg?format=750w",
    content:
      "Operating model design has dominated leadership conversation for a decade. But our research suggests organizations are optimizing the wrong variable.\n\nThe companies delivering consistent performance through market volatility aren't those with the most elegant org structures. They're the ones with disciplined operating cadences â€” precise rhythms for how decisions get made, information flows, and teams interact.\n\nWhat distinguishes high-performing cadences?\n\nFirst, they're explicitly designed rather than evolved. Decision rights are clear. Escalation paths are documented. Meeting rhythms align with business cycles, not convenience.\n\nSecond, they're tight. Decision windows are compressed. The best organizations we studied make weekly decisions that most make monthly. This creates competitive advantage when markets move fast.\n\nThird, they're instrumented. These organizations measure decision velocity, quality, and alignment. They know which decisions are bottlenecks. They know where alignment breaks down.\n\nWhen you combine clear operating cadence with flexible org structures, you get resilience. The structure adapts; the cadence holds steady.",
  },
  {
    slug: "team-underwriting",
    tag: "Private Equity",
    title: "Underwriting the Team, Not Just the Thesis",
    excerpt:
      "Why PE firms win or lose in compression years comes down to a single variable: how well they underwrote the team on day one.",
    read: "11 min",
    date: "Feb 2025",
    image:
      "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/1735689600000-K1L2M3N4O5P6Q7R8/team+underwriting.jpg?format=750w",
    content:
      "Private equity returns are increasingly constrained by macro factors outside investor control: multiple compression, rate cycles, competitive dynamics. The variable that firms can control â€” and that differentiates winners â€” is team performance.\n\nYet most PE firms allocate their diligence resources inequitably. They spend 80% of time on financial and operational theses, 15% on market analysis, and 5% on people and team capability.\n\nOur research covering 47 PE exits over eight years suggests this allocation is backwards. In 68% of underperforming portfolios, the root cause was team-related (capability, retention, or culture), not thesis-related.\n\nWhat separates firms that win at team underwriting?\n\nFirst, they invest deeply in understanding the existing team. Not just credentials â€” capability. Not just org chart â€” decision patterns and conflicts.\n\nSecond, they have a hypothesis about what needs to change. They identify the specific roles, capabilities, or behaviors that will make the difference over the hold period.\n\nThird, they execute deliberately on team transformation. This means being clear about who stays, who goes, and who needs to evolve their role.\n\nFirms that do this outperform significantly. Their portfolios show higher revenue growth, better exit multiples, and faster capital deployment.",
  },
  {
    slug: "succession-risk",
    tag: "Talent",
    title: "The Quiet Risk in Your Succession Plan",
    excerpt: "Most succession plans fail silently. Here's why â€” and what actually works.",
    read: "6 min",
    date: "Jan 2025",
    image:
      "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/1735689600000-T1U2V3W4X5Y6Z7A8/succession+risk.jpg?format=750w",
    content:
      "Succession planning is a board staple. Yet most succession plans fail to deliver. Successors struggle in role. Retained talent leaves. Performance dips during transition.\n\nWhy? Because most organizations optimize for the wrong variable: having a name on paper.\n\nEffective succession planning is really about readiness. It's about whether the internal candidate (or external hire) has the capability to perform in the specific role, in the specific moment, with the specific team they inherit.\n\nOur research across 84 CEO and top 5 team transitions shows the failure points:\n\nReadiness mismatch: The internal candidate was successful in one role but hasn't developed the capabilities needed for the next. This isn't failure â€” it's normal career progression. Boards should plan for it.\n\nTiming misalignment: The transition happens when momentum is changing (market shift, strategic pivot, key departure). The new leader faces a harder problem than the predecessor.\n\nStakeholder discord: The board, investors, and management team have different assumptions about what success looks like. The new leader inherits conflicting mandates.\n\nWhat actually works: Explicit capability frameworks. Clear success metrics. Deliberate development plans. And honest conversations about fit.\n\nWhen boards do this, transitions are smoother, retention is better, and performance is maintained.",
  },
  {
    slug: "strategy-structure",
    tag: "Strategy",
    title: "When Strategy and Structure Stop Speaking",
    excerpt:
      "The disconnect between what you've decided to do and how you're organized to do it costs more than you think.",
    read: "8 min",
    date: "Jan 2025",
    image:
      "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/1735689600000-B8C9D0E1F2G3H4I5/strategy+structure.jpg?format=750w",
    content:
      "Strategy and structure should be in lockstep. Yet in most organizations we work with, there's a persistent gap between strategic direction and organizational design.\n\nThis gap manifests as: unclear decision rights, misaligned incentives, duplicate effort in some areas and gaps in others, and slow execution.\n\nThe root cause is usually process. Strategy gets made in one room, at one moment in time. Organization design happens separately, with different stakeholders, at a different cadence.\n\nWhere they align, execution accelerates dramatically. We've measured 30-40% improvement in time-to-decision and 25-35% improvement in implementation quality when strategy and structure are explicitly aligned.\n\nHow to close the gap:\n\nMake strategy explicit. Don't just have numbers â€” articulate what capabilities, behaviors, and interactions the strategy demands.\n\nDesign structure in service of strategy, not in service of incumbent relationships or historical precedent.\n\nDefine decision rights first, then build org shape around those rights.\n\nInstrument the alignment. Regular check-ins on whether structure is enabling strategic execution.\n\nThe organizations that do this best treat structure as a strategic lever, not an administrative formality.",
  },
  {
    slug: "ceo-first-200-days",
    tag: "Leadership",
    title: "The First 200 Days: A New CEO's Calibration Window",
    excerpt:
      "What determines whether a new CEO thrives or stalls? The answer is hidden in their first 200 days.",
    read: "10 min",
    date: "Dec 2024",
    image:
      "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/1735689600000-C5D6E7F8G9H0I1J2/ceo+first+200.jpg?format=750w",
    content:
      "The first 200 days of a CEO tenure are often described as a \"honeymoon.\" We think that metaphor is backwards. They're actually a calibration window â€” a period when the new leader is learning whether their approach works, and the organization is learning whether they can lead.\n\nOur research on 156 CEO transitions shows that outcomes 3-5 years in are highly predictable from what happens in the first 200 days.\n\nThe CEOs who thrive do five specific things:\n\nThey listen before acting. They spend the first 60 days genuinely understanding what's working, what's broken, and what people actually believe about the future.\n\nThey make one clear strategic choice. Not ten priorities â€” one. And they communicate it relentlessly.\n\nThey establish operating cadence early. They set decision rhythms, meeting structures, and communication patterns that will run the company.\n\nThey address talent immediately. They make visible moves on retaining key players, transitioning people who won't fit the future, and bringing in specific capabilities they need.\n\nThey build external relationships. They engage with customers, investors, industry partners. They signal that the company is open for business under new leadership.\n\nThe CEOs who struggle do the opposite. They try to change everything at once. They make changes before they understand. They isolate themselves in execution.\n\nThe window closes around day 200. By then, the template is set. New leaders can course-correct later, but the foundation is laid.",
  },
  {
    slug: "decision-rights",
    tag: "Transformation",
    title: "Decision Rights as a Growth Lever",
    excerpt:
      "Your fastest-growing competitors aren't necessarily smarter â€” they just decide faster.",
    read: "7 min",
    date: "Nov 2024",
    image:
      "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/1735689600000-D7E8F9G0H1I2J3K4/decision+rights.jpg?format=750w",
    content:
      "Decision velocity is a competitive advantage. Yet most organizations don't actively manage it.\n\nWe've measured decision cycles at companies across stages and sectors. The difference between fast and slow companies often isn't intelligence or rigor â€” it's how they structure who decides what, when.\n\nFast companies have explicit decision rights. They've documented: what decisions exist, who makes them, what information is needed, and what the timeline is.\n\nSlow companies have implicit decision rights. Anyone with enough seniority can veto. Process is inconsistent. The same decision made three different ways at different points in time.\n\nHow decision rights become a growth lever:\n\nThey enable delegation. When decision rights are clear, leaders can push decisions down without losing control.\n\nThey reduce politics. When everyone knows who decides, there's less lobbying and rework.\n\nThey accelerate learning. Fast decision cycles mean fast feedback cycles. The company learns what works more quickly.\n\nThey enable culture. Employees know they can make calls in their domain. They take ownership.\n\nHow to implement:\n\nStart with critical decisions. Map the 20 decisions that most impact your business.\n\nAssign decision rights. Who actually decides? Who advises? What's the appeal process?\n\nDefine information needs. What data must you have before deciding?\n\nSet cadences. When do these decisions need to be made?\n\nInstrument and adjust. Track decision quality and speed. Refine the process.",
  },
  {
    slug: "diligence-compressed-hold",
    tag: "Private Equity",
    title: "Management Diligence in the Compressed Hold Era",
    excerpt: "PE hold periods are shrinking. Management diligence practices need to evolve.",
    read: "9 min",
    date: "Oct 2024",
    image:
      "https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/1735689600000-E8F9G0H1I2J3K4L5/diligence+hold.jpg?format=750w",
    content:
      "Private equity hold periods are compressing. Fewer 7-10 year holds. More 4-6 year exits. More secondary sales. This changes the calculus for management diligence.\n\nWhen hold periods were longer, PE firms could afford to be more forgiving on management. They had time to upgrade the team, develop capabilities, and build culture.\n\nWith compressed holds, the team you have on day one matters more. You need specific capabilities in place immediately. You need aligned incentives driving value creation from the start.\n\nThis means management diligence needs to be deeper, faster, and more specific:\n\nDeeper: Not just assessing current performance, but specific capability for the value creation plan.\n\nFaster: Compressed timelines mean you need to synthesize insights quickly. You need decision frameworks, not lengthy reports.\n\nMore specific: Generic assessments of \"leadership quality\" aren't useful. You need to know: Can this team execute the 100-day plan? Can they manage through margin compression? Can they scale? Can they work with a different investor?\n\nFirms that have evolved their management diligence practices are outperforming. They're bringing in specific expertise (Founders operate differently than hired presidents; PE-experienced CFOs matter more in compressed holds). They're building specific scenarios and testing the team's responses.\n\nThe winners are those treating management diligence as strategic (what team do we need?) rather than compliance (who's been vetted?).",
  },
];

function InsightDetail() {
  const { slug } = Route.useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <PageHero
          eyebrow="Not Found"
          title="Article not found"
          lede="The article you're looking for doesn't exist."
        />
      </div>
    );
  }

  return (
    <>
      <div className="relative min-h-screen pt-24">
        {/* Hero Image */}
        <div className="absolute inset-0 top-0">
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.07_0.012_250)]" />
        </div>

        {/* Content */}
        <div className="container-elite relative z-10 py-20">
          <Link
            to="/insights"
            className="mb-12 inline-flex items-center gap-2 text-sm text-electric hover:text-electric/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Research
          </Link>

          <Reveal>
            <div className="max-w-3xl">
              <div className="text-[12px] uppercase tracking-[0.28em] text-electric">
                {article.tag}
              </div>
              <h1 className="font-display mt-6 text-5xl font-light leading-tight tracking-tight text-white md:text-6xl">
                {article.title}
              </h1>
              <div className="mt-8 flex items-center gap-8 text-[13px] uppercase tracking-[0.24em] text-muted-foreground">
                <span>{article.date}</span>
                <span>Â·</span>
                <span>{article.read} read</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Article Content */}
      <section className="relative z-20 bg-[oklch(0.07_0.012_250)] py-20">
        <div className="container-elite">
          <Reveal>
            <div className="prose prose-invert mx-auto max-w-3xl space-y-6">
              {article.content.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-20">
        <div className="container-elite">
          <Reveal>
            <div className="glass-strong rounded-2xl p-12 text-center">
              <h2 className="font-display text-3xl font-light tracking-tight text-white">
                Ready to explore this further?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Let's discuss how these insights apply to your organization.
              </p>
              <Link to="/contact" className="btn-electric mt-8 inline-block text-sm">
                Schedule a Conversation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
