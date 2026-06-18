import { ScorpioMark } from "./Logo";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* base radial purples */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_40%,oklch(0.35_0.22_300/0.45),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_15%_70%,oklch(0.3_0.2_295/0.35),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.25_0.18_300/0.4),transparent_60%)]" />

      {/* abstract scorpion-tail glow shape */}
      <div className="absolute right-[-10%] top-[10%] w-[55%] aspect-square opacity-50">
        <ScorpioMark size={900} className="w-full h-full blur-[2px]" />
      </div>
      <div className="absolute right-[5%] top-[20%] w-[40%] aspect-square opacity-25 blur-3xl bg-[radial-gradient(circle,oklch(0.62_0.28_305/0.7),transparent_60%)]" />

      {/* neon arcs */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.55 0.27 295)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.7 0.28 305)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="oklch(0.55 0.27 295)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M-50 600 Q 400 350 800 500 T 1300 300" stroke="url(#arc)" strokeWidth="1.5" fill="none" />
        <path d="M-50 700 Q 500 500 900 620 T 1300 500" stroke="url(#arc)" strokeWidth="1" fill="none" />
      </svg>

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
