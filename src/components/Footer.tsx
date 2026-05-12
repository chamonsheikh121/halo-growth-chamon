import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const cols = [
  {
    title: "Firm",
    links: [
      { to: "/about", label: "About" },
      { to: "/approach", label: "Our Approach" },
      { to: "/team", label: "Team" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { to: "/services/leadership-advisory", label: "Leadership Advisory" },
      { to: "/services/executive-search", label: "Executive Search" },
      { to: "/services/organizational-strategy", label: "Organizational Strategy" },
      { to: "/services/leadership-assessment", label: "Leadership Assessment" },
    ],
  },
  {
    title: "Insight",
    links: [
      { to: "/insights", label: "Research & Insights" },
      { to: "/stories", label: "Client Stories" },
      { to: "/services", label: "All Services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[oklch(0.07_0.012_250)]">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[oklch(0.55_0.18_255)]/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[oklch(0.65_0.20_240)]/10 blur-[120px]" />

      <div className="container-elite relative">
        <div className="grid gap-16 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Integrated growth, grounded in strategy, driven by leadership. HALO partners with executive teams navigating
              transformation and inflection points.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-white">
              <span className="link-underline">Begin a confidential conversation</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.28em] text-white/50">{c.title}</div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-[13px] text-white/75 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 flex md:flex-col gap-3">
            <a aria-label="LinkedIn" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-white/30 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
            <a aria-label="Email" href="mailto:hello@halogrowth.com" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-white/30 hover:text-white">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="hairline" />

        <div className="flex flex-col items-start justify-between gap-3 py-8 md:flex-row md:items-center">
          <div className="text-[12px] text-white/50">© {new Date().getFullYear()} HALO Growth Partners. All rights reserved.</div>
          <div className="flex items-center gap-6 text-[12px] text-white/50">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <span className="hidden sm:inline">Chicago · New York · London</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
