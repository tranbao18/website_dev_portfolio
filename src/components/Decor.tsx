// Decorative SVG pieces taken from the reference layout: 4-point sparkles, the scalloped
// "ready to talk" badge, hand-drawn scribbles and the blue spray-paint blob.
import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 0C12.9 7.6 16.4 11.1 24 12C16.4 12.9 12.9 16.4 12 24C11.1 16.4 7.6 12.9 0 12C7.6 11.1 11.1 7.6 12 0Z" />
    </svg>
  );
}

export function Spray({ className = "", shape }: { className?: string; shape?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`spray absolute ${className}`}
      style={shape ? ({ "--spray-shape": shape } as CSSProperties) : undefined}
    />
  );
}

// Scalloped circle outline, computed once so server and client markup match
const BADGE_PATH = (() => {
  const steps = 360;
  const bumps = 24;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const r = 92 + 5 * Math.cos(bumps * t);
    d += `${i ? "L" : "M"}${(100 + r * Math.cos(t)).toFixed(2)} ${(100 + r * Math.sin(t)).toFixed(2)}`;
  }
  return `${d}Z`;
})();

export function WavyBadge({
  href,
  tone = "blue",
  children,
  className = "",
}: {
  href: string;
  tone?: "blue" | "ink";
  children: ReactNode;
  className?: string;
}) {
  const fill = tone === "blue" ? "fill-blue group-hover:fill-blue-deep" : "fill-ink group-hover:fill-blue";
  return (
    <a
      href={href}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group relative inline-flex aspect-square items-center justify-center text-center text-white ${className}`}
    >
      <svg viewBox="0 0 200 200" aria-hidden="true" className="spin-slow absolute inset-0 h-full w-full">
        <path d={BADGE_PATH} className={`${fill} transition-colors duration-300`} />
      </svg>
      <span className="relative flex flex-col items-center gap-2 text-[0.8rem] uppercase leading-snug tracking-wide">
        {children}
        <ArrowUpRight className="h-5 w-5 stroke-[1.25] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

const SCRIBBLES = {
  // Loose orbit that wraps around the portrait
  orbit: {
    viewBox: "0 0 400 260",
    d: "M10 200C60 80 200 40 250 120C290 190 200 250 170 190C140 130 250 60 320 110C380 150 360 240 300 230C250 220 300 120 395 40",
  },
  // Spring-like coil used in the contact section
  coil: {
    viewBox: "0 0 260 120",
    d: "M2 70C30 10 95 10 85 60C77 100 35 95 48 62C62 25 130 20 125 66C120 106 78 100 92 66C106 30 175 30 168 72C163 108 122 104 136 70C150 38 215 40 258 64",
  },
} as const;

export function Scribble({ variant, className = "" }: { variant: keyof typeof SCRIBBLES; className?: string }) {
  const s = SCRIBBLES[variant];
  return (
    <svg viewBox={s.viewBox} fill="none" aria-hidden="true" className={`pointer-events-none ${className}`}>
      <path d={s.d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

// Hand-drawn looping arrow that sits next to section headings
export function LoopArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 50" fill="none" aria-hidden="true" className={className}>
      <path
        d="M2 18C22 8 46 10 48 22C50 34 32 36 34 24C36 12 60 14 70 30L78 42M68 40L78 42L80 32"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
