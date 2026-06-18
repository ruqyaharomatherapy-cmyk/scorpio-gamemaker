import heroRef from "@/assets/scorpio-hero-ref.png.asset.json";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* dark cosmic base */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_40%,oklch(0.35_0.22_300/0.5),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_15%_70%,oklch(0.3_0.2_295/0.35),transparent_70%)]" />

      {/* glowing scorpion hero artwork from reference, used as background visual only */}
      <img
        src={heroRef.url}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60 mix-blend-screen select-none"
      />

      {/* purple glow halo */}
      <div className="absolute right-[5%] top-[15%] w-[45%] aspect-square opacity-40 blur-3xl bg-[radial-gradient(circle,oklch(0.62_0.28_305/0.7),transparent_60%)]" />

      {/* left edge fade so headline stays readable */}
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-background via-background/70 to-transparent" />
      {/* bottom fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
