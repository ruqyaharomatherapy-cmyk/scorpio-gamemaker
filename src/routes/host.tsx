import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/scorpio/Layout";
import { useState, useEffect } from "react";
import { Timer, Users, Settings, BookOpen, ArrowLeft, SkipForward, ArrowRight, X, Eye, EyeOff, Send, Vote } from "lucide-react";

export const Route = createFileRoute("/host")({
  head: () => ({ meta: [{ title: "Game Host — Scorpio" }] }),
  component: HostPage,
});

const players = ["Alex", "Sam", "Maya", "Jordan", "Riley", "Quinn", "Casey", "Drew"];

function HostPage() {
  const [seconds, setSeconds] = useState(45);
  const [running, setRunning] = useState(true);
  const [round, setRound] = useState(3);
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    if (!running || seconds <= 0) return;
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [running, seconds]);

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Top bar */}
        <div className="panel-glow p-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Now Playing</div>
            <div className="text-lg font-semibold">The Impostor Among Us</div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Stat label="Round" value={`${round} / 5`} />
            <Stat label="Mode" value="Discussion" />
            <Stat label="Players" value={`${players.length}`} />
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/40">
              <Timer className="size-4 text-primary-glow" />
              <span className="font-mono text-lg font-semibold tabular-nums">{String(Math.floor(seconds / 60)).padStart(2, "0")}:{String(seconds % 60).padStart(2, "0")}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-[1fr_320px] gap-6">
          {/* Main card */}
          <div className="space-y-6">
            <div className="panel-glow p-8 md:p-12 min-h-[360px] flex flex-col justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,oklch(0.4_0.2_300/0.25),transparent_70%)]" />
              <div className="text-sm text-primary-glow uppercase tracking-[0.2em] mb-3">Scorpio says</div>
              <p className="text-2xl md:text-3xl font-display font-semibold leading-snug">
                Everyone discuss who you think the impostor is. You have 45 seconds before the vote.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <RoleBtn onClick={() => setShowRole(true)} active={showRole} icon={Eye}>Show Role</RoleBtn>
                <RoleBtn onClick={() => setShowRole(false)} active={!showRole} icon={EyeOff}>Hide Role</RoleBtn>
                <RoleBtn icon={Send}>Pass Phone</RoleBtn>
                <RoleBtn icon={Vote}>Start Vote</RoleBtn>
              </div>
              {showRole && (
                <div className="mt-6 inline-block mx-auto px-6 py-3 rounded-lg bg-primary/15 border border-primary/40 text-primary-glow font-semibold">
                  Your role: <span className="text-foreground">CREWMATE</span>
                </div>
              )}
            </div>

            {/* Action row */}
            <div className="panel p-4 flex flex-wrap justify-between gap-3">
              <ActionBtn icon={ArrowLeft}>Back</ActionBtn>
              <ActionBtn icon={BookOpen}>Rules</ActionBtn>
              <ActionBtn icon={SkipForward}>Skip</ActionBtn>
              <button onClick={() => { setRound((r) => r + 1); setSeconds(45); setRunning(true); }} className="h-11 px-6 rounded-lg bg-gradient-primary text-primary-foreground font-semibold inline-flex items-center gap-2 shadow-glow">
                Next <ArrowRight className="size-4" />
              </button>
              <button onClick={() => setRunning(false)} className="h-11 px-5 rounded-lg border border-destructive/60 text-destructive font-semibold inline-flex items-center gap-2">
                <X className="size-4" /> End Game
              </button>
            </div>

            {/* Timer/score quick controls */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="panel p-5">
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Timer</h3>
                <div className="flex gap-2">
                  <MiniBtn onClick={() => { setRunning(true); setSeconds(45); }}>Start</MiniBtn>
                  <MiniBtn onClick={() => setRunning(false)}>Pause</MiniBtn>
                  <MiniBtn onClick={() => setSeconds(0)}>Done</MiniBtn>
                  <MiniBtn onClick={() => setSeconds(0)}>Failed</MiniBtn>
                </div>
              </div>
              <div className="panel p-5">
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Scoring</h3>
                <div className="flex gap-2">
                  <MiniBtn>Team A +1</MiniBtn>
                  <MiniBtn>Team B +1</MiniBtn>
                  <MiniBtn>Next Round</MiniBtn>
                </div>
              </div>
            </div>
          </div>

          {/* Side panel */}
          <aside className="space-y-4">
            <div className="panel p-5">
              <div className="flex items-center gap-2 mb-3"><Users className="size-4 text-primary-glow" /><h3 className="font-semibold">Players</h3></div>
              <ul className="space-y-1.5 text-sm">
                {players.map((p, i) => (
                  <li key={p} className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-surface">
                    <span>{p}</span>
                    <span className="text-xs text-primary-glow font-mono">{(i + 1) * 2}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel p-5">
              <div className="flex items-center gap-2 mb-3"><BookOpen className="size-4 text-primary-glow" /><h3 className="font-semibold">Rules</h3></div>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>One impostor is secretly chosen.</li>
                <li>Discuss as a group each round.</li>
                <li>Vote out the suspected impostor.</li>
                <li>Crewmates win if they vote correctly.</li>
              </ol>
            </div>
            <div className="panel p-5">
              <div className="flex items-center gap-2 mb-3"><Settings className="size-4 text-primary-glow" /><h3 className="font-semibold">Settings</h3></div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>Difficulty</span><span className="text-foreground">Easy</span></div>
                <div className="flex justify-between"><span>Safety</span><span className="text-foreground">Family-Safe</span></div>
                <div className="flex justify-between"><span>Timer</span><span className="text-foreground">45s</span></div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function ActionBtn({ icon: Icon, children }: { icon: typeof ArrowLeft; children: React.ReactNode }) {
  return (
    <button className="h-11 px-5 rounded-lg border border-border/70 text-foreground font-medium inline-flex items-center gap-2 hover:bg-surface transition-colors">
      <Icon className="size-4" /> {children}
    </button>
  );
}

function RoleBtn({ icon: Icon, children, onClick, active }: { icon: typeof Eye; children: React.ReactNode; onClick?: () => void; active?: boolean }) {
  return (
    <button onClick={onClick} className={`h-10 px-4 rounded-lg border text-sm font-medium inline-flex items-center gap-2 transition-colors ${active ? "border-primary bg-primary/15 text-primary-glow" : "border-border/70 hover:border-primary/50"}`}>
      <Icon className="size-4" /> {children}
    </button>
  );
}

function MiniBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex-1 h-10 px-3 rounded-md border border-border/70 text-sm hover:border-primary/50 hover:bg-primary/10 transition-colors">
      {children}
    </button>
  );
}
