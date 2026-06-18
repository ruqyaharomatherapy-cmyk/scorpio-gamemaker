import { X } from "lucide-react";
import { ScorpioMark } from "./Logo";

type Props = {
  open: boolean;
  mode: "signin" | "signup";
  onClose: () => void;
  onSwitch: (mode: "signin" | "signup") => void;
};

export function AuthModal({ open, mode, onClose, onSwitch }: Props) {
  if (!open) return null;
  const isSignup = mode === "signup";
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative panel-glow w-full max-w-md p-8">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-md hover:bg-primary/10 text-muted-foreground"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
        <div className="flex flex-col items-center text-center mb-6">
          <ScorpioMark size={48} />
          <h2 className="mt-3 text-2xl font-bold">
            {isSignup ? "Create your account" : "Welcome back"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {isSignup ? "Join Scorpio and start playing." : "Sign in to continue your adventures."}
          </p>
        </div>
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          {isSignup && (
            <input
              type="text"
              placeholder="Name"
              className="w-full h-11 px-3 rounded-md bg-input/60 border border-border/60 text-sm focus:outline-none focus:border-primary"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full h-11 px-3 rounded-md bg-input/60 border border-border/60 text-sm focus:outline-none focus:border-primary"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-11 px-3 rounded-md bg-input/60 border border-border/60 text-sm focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="w-full h-11 rounded-md bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-strong transition-shadow"
          >
            {isSignup ? "Create Account" : "Sign In"}
          </button>
        </form>
        <p className="text-center text-sm text-muted-foreground mt-5">
          {isSignup ? "Already have an account?" : "New to Scorpio?"}{" "}
          <button
            className="text-primary-glow hover:underline"
            onClick={() => onSwitch(isSignup ? "signin" : "signup")}
          >
            {isSignup ? "Sign in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
}
