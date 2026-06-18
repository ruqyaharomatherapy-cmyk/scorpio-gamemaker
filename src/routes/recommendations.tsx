import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/scorpio/Layout";
import { Sparkles, ArrowRight, Star, Smile, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/recommendations")({
  head: () => ({ meta: [{ title: "Recommendations — Scorpio" }] }),
  component: RecPage,
});

const recs = [
  {
    badge: "Best Match",
    icon: Star,
    name: "The Impostor Among Us",
    bestFor: "Cousins & teens",
    time: "30–45 min",
    players: "8",
    difficulty: "Easy",
    energy: "High",
    why: "Matches your funny, family-safe vibe and group size perfectly.",
  },
  {
    badge: "Funny Option",
    icon: Smile,
    name: "Roast Battle (Clean)",
    bestFor: "Friendly groups",
    time: "20–30 min",
    players: "4–10",
    difficulty: "Easy",
    energy: "Medium",
    why: "Light teasing with safe limits — guaranteed laughs.",
  },
  {
    badge: "Creative Option",
    icon: Lightbulb,
    name: "One Word Story",
    bestFor: "Imaginative players",
    time: "15–25 min",
    players: "4–12",
    difficulty: "Easy",
    energy: "Low",
    why: "Builds a wild collaborative story one word at a time.",
  },
];

function RecPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary-glow text-sm">
            <Sparkles className="size-4" /> Scorpio picked these for you
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Your Game Recommendations</h1>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {recs.map((r) => (
            <article key={r.name} className="panel-glow p-6 flex flex-col">
              <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-xs text-primary-glow">
                <r.icon className="size-3.5" /> {r.badge}
              </div>
              <h2 className="mt-4 text-xl font-semibold">{r.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{r.why}</p>
              <dl className="mt-5 grid grid-cols-2 gap-y-2 text-xs">
                <Meta label="Best for" value={r.bestFor} />
                <Meta label="Time" value={r.time} />
                <Meta label="Players" value={r.players} />
                <Meta label="Difficulty" value={r.difficulty} />
                <Meta label="Energy" value={r.energy} />
              </dl>
              <Link to="/host" className="mt-6 inline-flex items-center justify-center gap-2 h-11 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow">
                Start <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
