import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/scorpio-logo.png.asset.json";
import { AuthModal } from "./AuthModal";

const nav = [
  { to: "/", label: "Home" },
  { to: "/library", label: "Games" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const [auth, setAuth] = useState<null | "signin" | "signup">(null);
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between gap-6">
          <Link to="/" className="shrink-0 flex items-center">
            <img src={logoAsset.url} alt="Scorpio" className="h-10 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors [&.active]:text-primary-glow"
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAuth("signin")}
              className="hidden sm:inline-flex h-10 px-5 rounded-md border border-border/70 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={() => setAuth("signup")}
              className="h-10 px-5 rounded-md bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:shadow-glow-strong transition-shadow"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <AuthModal
        open={auth !== null}
        mode={auth ?? "signin"}
        onClose={() => setAuth(null)}
        onSwitch={(m) => setAuth(m)}
      />
    </>
  );
}
