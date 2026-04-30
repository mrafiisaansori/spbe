"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-slate-700 backdrop-blur transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-emerald-500/40 dark:hover:text-emerald-200"
      aria-label="Toggle theme"
    >
      {isDark ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
