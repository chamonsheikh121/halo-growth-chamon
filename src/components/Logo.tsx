import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <img
        src="https://images.squarespace-cdn.com/content/v1/682643f42b2ae50c0a5c7b61/24508f9c-dccc-4f50-b293-20126cbd24db/HALO+RING+Transparent.png?format=750w"
        alt="HALO Logo"
        className="h-8 w-8 object-contain"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[17px] font-medium tracking-wide text-white">HALO</span>
        <span className="mt-0.5 text-[9px] uppercase tracking-[0.32em] text-muted-foreground">
          Growth Partners
        </span>
      </span>
    </Link>
  );
}
