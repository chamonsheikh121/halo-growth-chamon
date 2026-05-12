import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/services/organizational-strategy")({
  head: () => ({
    meta: [
      { title: "Organizational Strategy — HALO Growth Partners" },
      { name: "description", content: "Aligning structure, decision rights, and operating model to strategic intent." },
      { property: "og:title", content: "Organizational Strategy" },
      { property: "og:description", content: "Where strategy meets the way the company actually works." },
    ],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="Organizational Strategy"
      title={<>Where strategy meets the way the company actually works.</>}
      lede="Operating model, structure, and decision architecture — designed for the strategy ahead, not the one that built the business."
      whoFor={[
        "Companies whose structure has not caught up with their strategy.",
        "Newly integrated platforms post-merger or post-acquisition.",
        "Founder-led businesses moving toward an institutional operating cadence.",
        "Executive teams resetting decision rights and accountability.",
      ]}
      whatWeDeliver={[
        { t: "Operating Model Design", d: "How the company is structured to execute the next phase — without recreating the old org chart." },
        { t: "Decision Rights & Cadence", d: "Who decides, who informs, and how the executive rhythm runs." },
        { t: "Spans & Layers", d: "A leadership architecture that scales without flattening accountability." },
        { t: "Top Team Effectiveness", d: "Recalibrating the senior team around the operating model they need to lead." },
        { t: "Governance Design", d: "Board, ELT, and operating-committee design that compounds rather than complicates." },
        { t: "Change Stewardship", d: "Senior partnership through the transitions the design will require." },
      ]}
      outcomes={[
        "An operating model purpose-built for the next chapter.",
        "Clear decision rights, with measurable accountability.",
        "A senior team running a cadence that compounds.",
        "A governance architecture that supports — not slows — the strategy.",
      ]}
    />
  ),
});
