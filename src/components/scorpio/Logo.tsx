type Props = { className?: string; size?: number };

export function ScorpioMark({ className = "", size = 28 }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="scorpGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.28 305)" />
          <stop offset="100%" stopColor="oklch(0.55 0.27 295)" />
        </linearGradient>
        <filter id="scorpGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        stroke="url(#scorpGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#scorpGlow)"
      >
        {/* claws */}
        <path d="M10 24 L18 28 L14 34" />
        <path d="M54 24 L46 28 L50 34" />
        {/* body segments */}
        <path d="M18 32 Q32 38 46 32" />
        <circle cx="24" cy="34" r="2" fill="url(#scorpGrad)" stroke="none" />
        <circle cx="32" cy="36" r="2.4" fill="url(#scorpGrad)" stroke="none" />
        <circle cx="40" cy="34" r="2" fill="url(#scorpGrad)" stroke="none" />
        {/* tail curling up */}
        <path d="M46 32 Q56 30 54 18 Q53 12 46 12" />
        {/* stinger */}
        <path d="M46 12 L42 8" />
        <circle cx="42" cy="8" r="1.6" fill="url(#scorpGrad)" stroke="none" />
      </g>
    </svg>
  );
}

export function ScorpioLogo({ size = 28 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2">
      <ScorpioMark size={size} />
      <span
        className="font-display font-bold tracking-[0.25em] text-foreground"
        style={{ fontSize: size * 0.6 }}
      >
        SCORPIO
      </span>
    </span>
  );
}
