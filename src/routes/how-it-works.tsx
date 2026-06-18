import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/scorpio/Layout";
import { Sparkles, Users, Wand2, Trophy } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({ meta: [{ title: "How It Works — Scorpio" }] }),
  component: HowPage,
});

const steps = [
  { icon: Users, title: "Describe Your Group", desc: "Tell Scorpio about players, ages, vibe, location and time." },
  { icon: Wand2, title: "AI Crafts the Game", desc: "Scorpio picks or generates the perfect game with safe limits." },
  { icon: Sparkles, title: "Scorpio Hosts", desc: "Prompts, timers, scores and rounds — all run by the AI Game Master." },
  { icon: Trophy, title: "Celebrate & Replay", desc: "Save the night, share results, or spin up a new adventure." },
];

function HowPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">How Scorpio Works</h1>
          <p className="mt-3 text-muted-foreground">From "what should we play?" to first laugh — in under a minute.</p>
        </header>
        <ol className="space-y-5">
          {steps.map((s, i) => (
            <li key={s.title} className="panel-glow p-6 flex gap-5 items-start">
              <div className="size-12 rounded-lg bg-primary/15 border border-primary/40 flex items-center justify-center text-primary-glow shrink-0">
                <s.icon className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Step {i + 1}</div>
                <h2 className="text-xl font-semibold mt-1">{s.title}</h2>
                <p className="mt-1 text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  );
}
