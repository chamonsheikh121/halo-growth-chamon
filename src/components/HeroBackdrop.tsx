export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 grid-pattern opacity-60" />
      {/* glows */}
      <div className="absolute -left-32 top-32 h-[520px] w-[520px] rounded-full bg-[oklch(0.55_0.18_255)]/25 blur-[140px] animate-glow-pulse" />
      <div
        className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[oklch(0.65_0.20_240)]/15 blur-[160px] animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />
      {/* particles */}
      <Particles />
      {/* scan line shimmer */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.85 0.14 240 / 0.5), transparent)",
        }}
      />
    </div>
  );
}

function Particles() {
  const seeds = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0">
      {seeds.map((_, i) => {
        const left = (i * 137) % 100;
        const top = (i * 89) % 100;
        const size = (i % 3) + 1;
        const delay = (i * 0.4) % 8;
        const dur = 6 + (i % 6);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/70 animate-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              opacity: 0.18 + (i % 3) * 0.12,
              boxShadow: "0 0 8px rgba(255,255,255,0.5)",
              animationDelay: `${delay}s`,
              animationDuration: `${dur}s`,
            }}
          />
        );
      })}
    </div>
  );
}
