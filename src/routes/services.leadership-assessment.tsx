import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/services/leadership-assessment")({
  head: () => ({
    meta: [
      { title: "Leadership Assessment — HALO Growth Partners" },
      {
        name: "description",
        content:
          "Predictive insight into capability, fit, and trajectory at the most consequential roles.",
      },
      { property: "og:title", content: "Leadership Assessment" },
      {
        property: "og:description",
        content: "Calibrated executive assessment, designed by senior practitioners.",
      },
    ],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="Leadership Assessment"
      title={<>Predictive insight at the seats where intuition isn't enough.</>}
      lede="Calibrated executive assessment for selection, succession, and team effectiveness — designed by senior practitioners and grounded in over two decades of decision-quality data."
      whoFor={[
        "Boards and CEOs evaluating internal succession candidates.",
        "PE firms underwriting management teams pre-deal and post-close.",
        "Executive teams calibrating fit, capability, and bench strength.",
        "Newly appointed CEOs making top-team decisions in their first year.",
      ]}
      whatWeDeliver={[
        {
          t: "Individual Executive Assessment",
          d: "Behavioral, cognitive, and contextual data on fit, capability, and trajectory.",
        },
        {
          t: "Top Team Calibration",
          d: "A clear-eyed view of the executive team — together, not just individually.",
        },
        {
          t: "Succession Readiness",
          d: "Bench mapping with development paths, not just rankings.",
        },
        {
          t: "Pre-Deal Management Diligence",
          d: "Independent assessment of the team an investor is underwriting.",
        },
        { t: "Post-Close Calibration", d: "First-100-day clarity on the team you actually have." },
        {
          t: "Development Architecture",
          d: "Targeted growth plans built from the assessment data — not generic frameworks.",
        },
      ]}
      outcomes={[
        "Selection and succession decisions grounded in data, not impressions.",
        "A precise picture of executive capability — and where to invest.",
        "Board and sponsor alignment on the team's actual readiness.",
        "Development plans that move executives where the strategy needs them.",
      ]}
    />
  ),
});
