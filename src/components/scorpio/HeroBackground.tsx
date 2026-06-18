export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* dark cosmic base */}
      <div className="absolute inset-0 bg-background" />

      {/* layered purple nebula gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_40%,oklch(0.4_0.25_300/0.55),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_15%_70%,oklch(0.32_0.22_295/0.4),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_25%,oklch(0.7_0.3_310/0.35),transparent_70%)]" />

      {/* central glowing orb behind scorpion */}
      <div className="absolute right-[8%] top-[18%] w-[42%] aspect-square rounded-full opacity-70 blur-3xl bg-[radial-gradient(circle,oklch(0.65_0.3_305/0.85),transparent_65%)]" />
      <div className="absolute right-[14%] top-[28%] w-[28%] aspect-square rounded-full opacity-80 blur-2xl bg-[radial-gradient(circle,oklch(0.8_0.25_315/0.7),transparent_60%)]" />

      {/* scorpion silhouette built from SVG, glowing */}
      <svg
        viewBox="0 0 600 600"
        aria-hidden
        className="absolute right-[4%] top-[10%] w-[55%] max-w-[640px] opacity-90 drop-shadow-[0_0_60px_rgba(192,132,252,0.65)]"
      >
        <defs>
          <linearGradient id="heroScorpGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbcfe8" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#c084fc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.85" />
          </linearGradient>
          <filter id="heroScorpGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g
          stroke="url(#heroScorpGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#heroScorpGlow)"
        >
          {/* claws */}
          <path d="M120 280 Q60 250 50 200 Q70 220 140 240" />
          <path d="M140 240 Q100 220 110 180" />
          <path d="M480 280 Q540 250 550 200 Q530 220 460 240" />
          <path d="M460 240 Q500 220 490 180" />
          {/* body segments */}
          <path d="M150 300 Q300 360 450 300" />
          <ellipse cx="210" cy="320" rx="22" ry="16" fill="url(#heroScorpGrad)" opacity="0.7" stroke="none" />
          <ellipse cx="260" cy="335" rx="26" ry="18" fill="url(#heroScorpGrad)" opacity="0.8" stroke="none" />
          <ellipse cx="310" cy="342" rx="30" ry="20" fill="url(#heroScorpGrad)" opacity="0.9" stroke="none" />
          <ellipse cx="360" cy="335" rx="26" ry="18" fill="url(#heroScorpGrad)" opacity="0.8" stroke="none" />
          <ellipse cx="410" cy="320" rx="22" ry="16" fill="url(#heroScorpGrad)" opacity="0.7" stroke="none" />
          {/* tail curling up */}
          <path d="M450 300 Q540 280 530 180 Q510 100 420 110 Q380 115 380 80" />
          {/* stinger */}
          <path d="M380 80 L360 55" strokeWidth="7" />
          <circle cx="358" cy="52" r="8" fill="url(#heroScorpGrad)" stroke="none" />
        </g>
      </svg>

      {/* sparkle dots */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 22% 28%, white, transparent), radial-gradient(1px 1px at 72% 58%, white, transparent), radial-gradient(1.5px 1.5px at 42% 78%, white, transparent), radial-gradient(1px 1px at 87% 18%, white, transparent), radial-gradient(1px 1px at 12% 72%, white, transparent)",
          backgroundSize: "500px 500px",
        }}
      />

      {/* left edge fade so headline stays readable */}
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-background via-background/70 to-transparent" />
      {/* bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
