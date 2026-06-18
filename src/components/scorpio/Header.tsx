import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AuthModal } from "./AuthModal";

const nav = [
  { to: "/", label: "Home" },
  { to: "/library", label: "Games" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
] as const;

function ScorpioLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/40 bg-black/70 shadow-[0_0_28px_rgba(168,85,247,0.45)]">
        <div className="absolute inset-0 rounded-xl bg-purple-500/20 blur-md" />

        <svg
          viewBox="0 0 64 64"
          className="relative h-8 w-8 drop-shadow-[0_0_14px_rgba(216,180,254,0.95)]"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="scorpioGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f5d0fe" />
              <stop offset="45%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          {/* body */}
          <path
            d="M18 30c5 7 23 7 28 0"
            stroke="url(#scorpioGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M23 37c5 4 13 4 18 0"
            stroke="url(#scorpioGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* claws */}
          <path
            d="M16 25 8 18M16 25 8 32"
            stroke="url(#scorpioGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M48 25 56 18M48 25 56 32"
            stroke="url(#scorpioGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* tail */}
          <path
            d="M42 28c9-3 13-10 9-17-3-5-10-5-13 0"
            stroke="url(#scorpioGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M38 11 34 5"
            stroke="url(#scorpioGradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* glow point */}
          <circle cx="32" cy="38" r="3" fill="#f5d0fe" />
        </svg>
      </div>

      <div className="leading-none">
        <div className="font-display text-xl font-black tracking-[0.28em] text-white drop-shadow-[0_0_16px_rgba(168,85,247,0.8)]">
          SCORPIO
        </div>
        <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-purple-300/80">
          AI Game Master
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [auth, setAuth] = useState<null | "signin" | "signup">(null);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-purple-500/20 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
          <Link to="/" className="shrink-0">
            <ScorpioLogo />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-sm font-medium text-white/65 transition-colors hover:text-white [&.active]:text-purple-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAuth("signin")}
              className="hidden h-10 rounded-md border border-purple-400/30 bg-white/5 px-5 text-sm font-medium text-white transition-colors hover:bg-purple-500/10 sm:inline-flex sm:items-center"
            >
              Sign In
            </button>

            <button
              onClick={() => setAuth("signup")}
              className="h-10 rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-500 px-5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(168,85,247,0.55)] transition-shadow hover:shadow-[0_0_35px_rgba(168,85,247,0.85)]"
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
        onSwitch={(mode) => setAuth(mode)}
      />
    </>
  );
}
