import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-white/20" />
        <span className="absolute inset-1 rounded-full bg-gradient-to-br from-[oklch(0.85_0.14_240)] to-[oklch(0.55_0.18_255)] opacity-90 blur-[2px]" />
        <span className="absolute inset-[6px] rounded-full bg-background" />
        <span className="relative font-display text-[13px] font-medium tracking-tight text-white">H</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-medium tracking-wide text-white">HALO</span>
        <span className="mt-0.5 text-[9px] uppercase tracking-[0.32em] text-muted-foreground">Growth Partners</span>
      </span>
    </Link>
  );
}
