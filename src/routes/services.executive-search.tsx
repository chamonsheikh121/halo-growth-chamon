import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/services/executive-search")({
  head: () => ({
    meta: [
      { title: "Executive Search — HALO Growth Partners" },
      { name: "description", content: "Confidential identification, calibration, and placement of senior executives." },
      { property: "og:title", content: "Executive Search" },
      { property: "og:description", content: "Search engineered for inflection points — not maintenance hires." },
    ],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="Executive Search"
      title={<>Search built for the seats where being right is non-negotiable.</>}
      lede="Confidential identification and placement of board, C-suite, and senior leaders — calibrated against assessment data, the strategic mandate, and the team they're joining."
      whoFor={[
        "PE-backed companies hiring for the value-creation window.",
        "Public and private companies replacing or upgrading C-suite roles.",
        "Boards conducting CEO and CFO succession.",
        "Founder-led businesses adding their first institutional operating leaders.",
      ]}
      whatWeDeliver={[
        { t: "Strategic Role Calibration", d: "We design the role to the strategy — not the org chart of the past." },
        { t: "Targeted Market Mapping", d: "Quiet, comprehensive identification of the few candidates who can actually do the job." },
        { t: "Calibrated Assessment", d: "Behavioral, cognitive, and contextual data — not just references and résumés." },
        { t: "Board & Sponsor Alignment", d: "We bring the board, CEO, and sponsor into one shared standard for the seat." },
        { t: "Confidential Engagement", d: "Discreet outreach that protects the candidate, the company, and the search." },
        { t: "Onboarding & Integration", d: "First-90 and first-180 day support so the placement compounds, not stalls." },
      ]}
      outcomes={[
        "The right leader, with assessment data behind the decision.",
        "Board, CEO, and sponsor unified on what the role actually requires.",
        "A confidential search process that protects market relationships.",
        "Placements that produce measurable impact in the first 12 months.",
      ]}
    />
  ),
});
