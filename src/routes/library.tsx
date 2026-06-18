import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/scorpio/Layout";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/library")({
  head: () => ({ meta: [{ title: "Game Library — Scorpio" }, { name: "description", content: "Browse Scorpio's full collection of party, mystery, family, word, and treasure hunt games." }] }),
  component: LibraryPage,
});

const categories: { name: string; games: string[] }[] = [
  { name: "Party & Social", games: ["Truth or Dare", "Would You Rather", "Put a Finger Down", "Who's Most Likely To", "Never Have I Ever (Family-Safe)", "Roast Battle (Clean)", "Compliment Battle", "Rapid Fire Questions"] },
  { name: "Mystery & Detective", games: ["Spy", "Imposter", "Mafia-style Simple", "Find the Liar", "Detective Round", "Secret Identity", "Murder Mystery (Family-Safe)", "Who Took the Cake?"] },
  { name: "Word Games", games: ["Password", "Taboo-style Clues", "Guess the Word", "Riddle Race", "Category Clash", "Word Chain", "Forbidden Word", "20 Questions"] },
  { name: "Family Games", games: ["Family Trivia", "Memory Round", "Who Knows Me Best?", "Family Awards", "Chore Roulette", "Parents vs Kids", "Siblings Challenge", "Cousin Olympics"] },
  { name: "Treasure Hunts", games: ["Indoor Treasure Hunt", "Birthday Treasure Hunt", "Clue Hunt", "Secret Code Hunt", "Room-to-Room Mission", "Final Surprise Reveal"] },
  { name: "Dares & Challenges", games: ["Funny Dares", "Acting Dares", "Drawing Challenges", "Speed Challenges", "No-Equipment Challenges", "Team Challenges", "Silent Challenge", "Try Not to Laugh"] },
  { name: "Road Trip Games", games: ["20 Questions", "Word Chain", "I Spy", "License Plate Game", "Story Builder", "Memory Game"] },
  { name: "Classroom Games", games: ["Icebreakers", "Team Quiz", "Quick Learning Round", "Group Challenge", "Silent Telephone"] },
  { name: "Custom AI-Crafted", games: ["Generate your own game from your group, vibe & rules."] },
];

function LibraryPage() {
  const [q, setQ] = useState("");
  const filter = (g: string) => g.toLowerCase().includes(q.toLowerCase());

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">Game Library</h1>
          <p className="mt-3 text-muted-foreground">Every game Scorpio can host — pick one or describe a vibe.</p>
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search games..."
              className="w-full h-12 pl-10 pr-4 rounded-lg bg-input/40 border border-border/60 text-sm focus:outline-none focus:border-primary"
            />
          </div>
        </header>

        <div className="space-y-10">
          {categories.map((cat) => {
            const filtered = cat.games.filter(filter);
            if (filtered.length === 0) return null;
            return (
              <section key={cat.name}>
                <div className="flex items-baseline justify-between mb-4">
                  <h2 className="text-xl font-semibold">{cat.name}</h2>
                  <span className="text-xs text-muted-foreground">{filtered.length} games</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {filtered.map((g) => (
                    <Link key={g} to="/host" className="group panel p-4 hover:border-primary/60 hover:shadow-glow transition-all flex items-center justify-between gap-3">
                      <span className="text-sm font-medium">{g}</span>
                      <ArrowRight className="size-4 text-primary-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
