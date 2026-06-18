import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/scorpio/Layout";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — Scorpio" }, { name: "description", content: "Free Quick Play or unlock unlimited Premium games." }] }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Free",
    price: "0",
    period: "Forever",
    desc: "Quick Play essentials to get a game going in seconds.",
    features: ["Quick Play access", "Limited built-in games", "Basic Scorpio recommendations", "Preview premium games"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Premium",
    price: "2,500",
    period: "/ lifetime",
    desc: "Everything Scorpio can do — full library, AI-crafted games, no ads.",
    features: [
      "All games unlocked",
      "Unlimited rounds",
      "Custom AI-crafted games",
      "Treasure hunt builder",
      "Printable game cards",
      "Save game nights",
      "Ad-free experience",
    ],
    cta: "Go Premium",
    highlight: true,
  },
  {
    name: "Premium Packs",
    price: "Add-ons",
    period: "Bundled themes",
    desc: "Special packs for big moments — weddings, classrooms, family reunions.",
    features: ["Wedding pack", "Family reunion pack", "Classroom pack", "Holiday & seasonal packs", "Birthday party pack"],
    cta: "Explore Packs",
    highlight: false,
  },
];

function PricingPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <header className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-primary-glow text-sm">
            <Sparkles className="size-4" /> Simple pricing
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Pick your Scorpio plan</h1>
          <p className="mt-4 text-muted-foreground">Start free. Upgrade once for lifetime access to every game and custom AI-crafted nights.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <article key={t.name} className={`panel-glow p-7 flex flex-col ${t.highlight ? "ring-2 ring-primary shadow-glow-strong relative" : ""}`}>
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold shadow-glow">
                  Most Popular
                </span>
              )}
              <h2 className="text-xl font-semibold">{t.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold">{t.price === "Add-ons" ? t.price : `₹${t.price}`}</span>
                <span className="text-sm text-muted-foreground">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="size-4 text-primary-glow mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/setup"
                className={`mt-8 inline-flex items-center justify-center h-11 rounded-lg font-semibold transition-all ${
                  t.highlight
                    ? "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-glow-strong"
                    : "border border-primary/60 text-primary-glow hover:bg-primary/10"
                }`}
              >
                {t.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
