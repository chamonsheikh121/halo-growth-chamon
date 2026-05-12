import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/ServiceTemplate";

export const Route = createFileRoute("/services/leadership-advisory")({
  head: () => ({
    meta: [
      { title: "Leadership Advisory — HALO Growth Partners" },
      { name: "description", content: "Senior counsel for CEOs, executive teams, and boards navigating consequential moments." },
      { property: "og:title", content: "Leadership Advisory" },
      { property: "og:description", content: "Trusted advisory for the leaders who can no longer afford to be wrong." },
    ],
  }),
  component: () => (
    <ServiceTemplate
      eyebrow="Leadership Advisory"
      title={<>Counsel for the few decisions that define the next chapter.</>}
      lede="A senior-partner relationship for CEOs, executive teams, and boards facing the kind of moments that don't come twice."
      whoFor={[
        "Newly appointed CEOs in their first 12–24 months.",
        "Executive teams entering a value-creation window with a PE or board mandate.",
        "Boards navigating CEO transition, succession, or governance reset.",
        "Founder-led businesses moving to an institutional operating model.",
      ]}
      whatWeDeliver={[
        { t: "Executive Team Alignment", d: "Diagnose, recalibrate, and reset the operating cadence of the senior team around the strategy ahead." },
        { t: "CEO Counsel", d: "A confidential thinking partner for the moments that don't make it into the board deck." },
        { t: "Board Effectiveness", d: "Composition, governance rhythm, and the operating relationship between board and management." },
        { t: "Succession Architecture", d: "Readiness systems for the C-suite — designed long before the seat is empty." },
        { t: "Inflection-Point Counsel", d: "Senior advisory through transitions, integrations, and strategy resets." },
        { t: "Quarterly Leadership Review", d: "An ongoing, calibrated point of view on team performance and bench strength." },
      ]}
      outcomes={[
        "An executive team aligned on the few moves that matter — and accountable to them.",
        "A CEO operating with sharper conviction, less noise, and more leverage.",
        "A board engaged at the level of value creation, not management.",
        "A succession picture built on data, not hope.",
      ]}
    />
  ),
});
