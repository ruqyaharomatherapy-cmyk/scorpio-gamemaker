import { Link } from "@tanstack/react-router";
import { ScorpioLogo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/40 bg-background/60">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2 space-y-4">
          <ScorpioLogo size={28} />
          <p className="text-sm text-muted-foreground max-w-xs">
            Your AI Game Master for unforgettable moments.
          </p>
          <form className="flex gap-2 max-w-sm pt-2">
            <input
              type="email"
              placeholder="Stay in the loop"
              className="flex-1 h-10 px-3 rounded-md bg-input/60 border border-border/60 text-sm focus:outline-none focus:border-primary"
            />
            <button className="h-10 px-4 rounded-md bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow">
              Join
            </button>
          </form>
        </div>

        <FooterCol title="Product" links={[
          { to: "/library", label: "Games" },
          { to: "/how-it-works", label: "How It Works" },
          { to: "/pricing", label: "Pricing" },
        ]} />
        <FooterCol title="Support" links={[
          { to: "/about", label: "Help Center" },
          { to: "/about", label: "Safety & Moderation" },
          { to: "/about", label: "Contact Us" },
        ]} />
        <FooterCol title="Company" links={[
          { to: "/about", label: "About Scorpio" },
          { to: "/about", label: "Blog" },
        ]} />
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Scorpio. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((l, i) => (
          <li key={i}>
            <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary-glow transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
