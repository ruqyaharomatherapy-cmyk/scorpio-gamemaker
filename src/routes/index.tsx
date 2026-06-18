import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Layout } from "@/components/scorpio/Layout";
import { HeroBackground } from "@/components/scorpio/HeroBackground";
import { Sparkles, Users, Clock, Shield, ArrowRight, Sliders, Smile, MapPin, Zap, Timer, Lightbulb } from "lucide-react";
import catParty from "@/assets/cat-party.jpg";
import catMystery from "@/assets/cat-mystery.jpg";
import catFamily from "@/assets/cat-family.jpg";
import catTreasure from "@/assets/cat-treasure.jpg";
import ideaImpostor from "@/assets/idea-impostor.jpg";
import ideaManor from "@/assets/idea-manor.jpg";
import ideaRelic from "@/assets/idea-relic.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const categories = [
  { title: "Party Games", desc: "Laugh, connect, and compete in fun group challenges.", img: catParty },
  { title: "Mystery Games", desc: "Solve cases, uncover clues, and crack the story.", img: catMystery },
  { title: "Family Games", desc: "All-ages fun that everyone can enjoy together.", img: catFamily },
  { title: "Treasure Hunts", desc: "Embark on epic quests and find what's been lost.", img: catTreasure },
];

const ideas = [
  { title: "The Impostor Among Us", cat: "Party Game", desc: "Find the impostor before they sabotage the mission.", tags: ["8 Players", "30–45 min", "Ages 10+"], img: ideaImpostor },
  { title: "Whispers in the Manor", cat: "Mystery", desc: "Uncover secrets and solve the mystery hidden in the manor.", tags: ["6–10 Players", "60–90 min", "Ages 12+"], img: ideaManor },
  { title: "The Lost Relic Hunt", cat: "Treasure Hunt", desc: "Follow the clues, solve the puzzles, and recover the lost relic.", tags: ["4–8 Players", "45–75 min", "Ages 10+"], img: ideaRelic },
];

const features = [
  { icon: Lightbulb, title: "AI-Powered Creativity", desc: "Unique games tailored to you." },
  { icon: Timer, title: "Save Time", desc: "Setup in minutes, not hours." },
  { icon: Sparkles, title: "Endless Replayability", desc: "New adventures every time." },
  { icon: Users, title: "Made for Any Group", desc: "Friends, family, or coworkers." },
];

function HomePage() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <HeroBackground />



        <div className="mx-auto max-w-7xl px-6 pt-12 pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          {/* LEFT */}
          <div className="relative">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Meet Scorpio.
              <br />
              Your <span className="text-gradient-primary">AI Game Master.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Scorpio creates unforgettable games tailored to your group, vibe, and setting — powered by AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/setup" className="group inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow-strong hover:scale-[1.02] transition-transform">
                Start Game Night <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/library" className="inline-flex items-center gap-2 h-12 px-6 rounded-lg border border-primary/50 text-foreground font-semibold hover:bg-primary/10 transition-colors">
                Explore Games <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <Chip icon={Sparkles}>AI-Powered</Chip>
              <Chip icon={Users}>Tailored to Your Group</Chip>
              <Chip icon={Clock}>Minutes to Play</Chip>
              <Chip icon={Shield}>Safe & Inclusive</Chip>
            </div>

          </div>


          {/* RIGHT PANELS */}
          <div className="space-y-6 lg:pt-4">
            <div className="panel-glow p-6">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="size-5 text-primary-glow" />
                <h3 className="text-lg font-semibold">Describe Your Game Night</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Let AI craft the perfect game for your group.</p>
              <div className="relative">
                <textarea
                  maxLength={300}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="We are 8 cousins, ages 10–18, funny but family-safe..."
                  className="w-full h-28 resize-none rounded-lg bg-input/40 border border-border/60 p-3 text-sm focus:outline-none focus:border-primary placeholder:text-muted-foreground/70"
                />
                <span className="absolute bottom-2 right-3 text-xs text-muted-foreground">{prompt.length}/300</span>
              </div>
              <button
                onClick={() => navigate({ to: "/recommendations", search: { prompt } as never })}
                className="mt-4 w-full h-11 rounded-lg bg-gradient-primary text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-strong transition-shadow"
              >
                <Sparkles className="size-4" /> Generate Game
              </button>
            </div>

            <div className="panel-glow p-6">
              <div className="flex items-center gap-2 mb-5">
                <Sliders className="size-5 text-primary-glow" />
                <h3 className="text-lg font-semibold">Or Set Up Manually</h3>
              </div>
              <div className="space-y-3">
                <FormRow icon={Users} label="Players" value="8" />
                <FormRow icon={Users} label="Ages" value="10 – 18" />
                <FormRow icon={Smile} label="Vibe" value="Funny, Family-Safe" />
                <FormRow icon={MapPin} label="Location" value="Indoor" />
              </div>
              <Link to="/recommendations" className="mt-5 w-full h-11 rounded-lg border border-primary/60 text-primary-glow font-semibold hover:bg-primary/10 transition-colors inline-flex items-center justify-center">
                Set Up Game
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Game Adventures</h2>
          <p className="mt-3 text-muted-foreground">Pick a game style and let the adventure begin.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <Link to="/library" key={c.title} className="group panel-glow overflow-hidden hover:shadow-glow-strong transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 flex justify-end">
                  <span className="size-9 rounded-full border border-primary/60 text-primary-glow inline-flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* IDEAS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Game Ideas to Get You Started</h2>
          <p className="mt-3 text-muted-foreground">Try these AI-crafted game ideas and start playing in minutes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ideas.map((g) => (
            <article key={g.title} className="group panel-glow overflow-hidden flex flex-col hover:shadow-glow-strong transition-all">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={g.img} alt={g.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 text-xs uppercase tracking-wider bg-background/70 text-primary-glow px-2 py-1 rounded-md border border-primary/40">
                  {g.cat}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground flex-1">{g.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border/60 text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex justify-end">
                  <Link to="/host" className="size-9 rounded-full border border-primary/60 text-primary-glow inline-flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="panel-glow p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <span className="size-10 rounded-lg bg-primary/15 border border-primary/30 inline-flex items-center justify-center text-primary-glow shrink-0">
                <f.icon className="size-5" />
              </span>
              <div>
                <h4 className="text-sm font-semibold">{f.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

function Chip({ icon: Icon, children }: { icon: typeof Zap; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <Icon className="size-4 text-primary-glow" />
      {children}
    </span>
  );
}

function FormRow({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] items-center gap-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Icon className="size-4 text-primary-glow" />
        {label}
      </div>
      <div className="h-10 px-3 rounded-md bg-input/40 border border-border/60 flex items-center justify-between text-sm">
        <span>{value}</span>
        <ArrowRight className="size-4 rotate-90 text-muted-foreground" />
      </div>
    </div>
  );
}
