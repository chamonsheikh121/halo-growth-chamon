import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  { to: "/services/leadership-advisory", label: "Leadership Advisory", desc: "Coaching for executives at inflection points." },
  { to: "/services/executive-search", label: "Executive Search", desc: "Senior leadership identification & placement." },
  { to: "/services/organizational-strategy", label: "Organizational Strategy", desc: "Aligning strategy, structure & talent." },
  { to: "/services/leadership-assessment", label: "Leadership Assessment", desc: "Predictive insight into executive performance." },
];

const nav = [
  { to: "/about", label: "About" },
  { to: "/approach", label: "Our Approach" },
  { to: "/services", label: "What We Do", mega: true },
  { to: "/team", label: "Team" },
  { to: "/stories", label: "Client Stories" },
  { to: "/insights", label: "Research & Insights" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobile(false); setOpen(false); }, [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <div className="container-elite flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) =>
            item.mega ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <Link
                  to={item.to}
                  className="link-underline inline-flex items-center gap-1 text-[13px] font-medium tracking-wide text-white/80 hover:text-white"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </Link>
                <div
                  className={`absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-5 transition-all duration-300 ${
                    open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
                  }`}
                >
                  <div className="glass-strong rounded-2xl p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="group flex flex-col gap-1 rounded-xl border border-transparent p-4 transition-all hover:border-white/10 hover:bg-white/[0.03]"
                        >
                          <span className="text-sm font-medium text-white">{s.label}</span>
                          <span className="text-xs leading-relaxed text-muted-foreground">{s.desc}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="hairline my-5" />
                    <Link to="/services" className="text-electric inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em]">
                      All capabilities <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="link-underline text-[13px] font-medium tracking-wide text-white/80 hover:text-white"
                activeProps={{ className: "link-underline text-[13px] font-medium tracking-wide text-white" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-electric text-[12px]">
            Schedule a Conversation
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="lg:hidden rounded-full border border-white/15 p-2 text-white"
          onClick={() => setMobile((m) => !m)}
        >
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobile && (
        <div className="lg:hidden glass-strong border-t border-white/5">
          <div className="container-elite flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-electric mt-4 justify-center text-[12px]">
              Schedule a Conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
