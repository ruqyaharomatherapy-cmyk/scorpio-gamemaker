import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/scorpio/Layout";
import { Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/setup")({
  head: () => ({ meta: [{ title: "Game Setup — Scorpio" }, { name: "description", content: "Tell Scorpio about your group and get a tailored game in seconds." }] }),
  component: SetupPage,
});

const safetyLimits = [
  "Family-safe only",
  "No embarrassing dares",
  "No physical dares",
  "No romance",
  "No mean questions",
  "No adult content",
];

function SetupPage() {
  const [checked, setChecked] = useState<string[]>(["Family-safe only"]);
  const toggle = (l: string) =>
    setChecked((c) => (c.includes(l) ? c.filter((x) => x !== l) : [...c, l]));

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Set Up Your Game</h1>
          <p className="mt-3 text-muted-foreground">Describe it to Scorpio or fill in the details — your call.</p>
        </header>

        <section className="panel-glow p-6">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="size-5 text-primary-glow" />
            <h2 className="text-lg font-semibold">Ask Scorpio</h2>
          </div>
          <textarea
            className="w-full h-32 rounded-lg bg-input/40 border border-border/60 p-3 text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground/70"
            placeholder="Tell Scorpio your group, ages, location, vibe, and what kind of game you want."
          />
          <button className="mt-4 h-11 px-6 rounded-lg bg-gradient-primary text-primary-foreground font-semibold inline-flex items-center gap-2 shadow-glow">
            <Sparkles className="size-4" /> Generate Game
          </button>
        </section>

        <section className="panel-glow p-6 space-y-5">
          <h2 className="text-lg font-semibold">Or Set Up Manually</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Number of players" placeholder="e.g. 8" />
            <Field label="Player names" placeholder="Comma separated (optional)" />
            <Field label="Age range" placeholder="10 – 18" />
            <Select label="Group type" options={["Friends", "Family", "Cousins", "Coworkers", "Classroom"]} />
            <Select label="Location" options={["Indoor", "Outdoor", "Car / Road Trip", "Classroom"]} />
            <Select label="Time available" options={["15 min", "30 min", "45 min", "60–90 min", "2+ hours"]} />
            <Select label="Vibe" options={["Funny, Family-Safe", "Chill", "Competitive", "Spooky", "Romantic"]} />
            <Select label="Equipment" options={["None", "Minimal", "Pen & Paper", "Phones OK"]} />
            <Select label="Game type preference" options={["Surprise me", "Party", "Mystery", "Treasure Hunt", "Word", "Dares"]} />
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Safety Limits</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
              {safetyLimits.map((l) => (
                <label key={l} className={`flex items-center gap-2 px-3 py-2 rounded-md border cursor-pointer text-sm transition-colors ${checked.includes(l) ? "border-primary bg-primary/10 text-foreground" : "border-border/60 text-muted-foreground hover:border-primary/40"}`}>
                  <input type="checkbox" checked={checked.includes(l)} onChange={() => toggle(l)} className="accent-primary" />
                  {l}
                </label>
              ))}
            </div>
          </div>

          <Link to="/recommendations" className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow">
            Get Recommendations <ArrowRight className="size-4" />
          </Link>
        </section>
      </div>
    </Layout>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-sm text-muted-foreground">{label}</span>
      <input className="mt-1 w-full h-11 rounded-md bg-input/40 border border-border/60 px-3 text-sm focus:outline-none focus:border-primary" placeholder={placeholder} />
    </label>
  );
}

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-sm text-muted-foreground">{label}</span>
      <select className="mt-1 w-full h-11 rounded-md bg-input/40 border border-border/60 px-3 text-sm focus:outline-none focus:border-primary">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
