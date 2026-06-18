import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/scorpio/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Scorpio" }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-16 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">About Scorpio</h1>
        <p className="text-lg text-muted-foreground">
          Scorpio is an AI Game Master built for the question every group asks: <em className="text-foreground">"what should we play?"</em>
        </p>
        <p className="text-muted-foreground">
          From party games and family nights to mystery rounds and treasure hunts, Scorpio tailors every game to your group's age, vibe, location, time and safety limits — and hosts the night for you.
        </p>
        <div className="panel-glow p-6">
          <h2 className="text-xl font-semibold mb-2">Our mission</h2>
          <p className="text-muted-foreground">Make unforgettable group moments effortless — for friends, families, classrooms and road trips alike.</p>
        </div>
      </div>
    </Layout>
  );
}
