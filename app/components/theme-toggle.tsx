"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Espera a que el componente se monte en el cliente
  useEffect(() => setMounted(true), []);

  // Mientras no está montado, renderiza un placeholder estable (mismo HTML SSR/CSR)
  if (!mounted) {
    return (
      <button
        className="rounded-2xl border px-3 py-1.5 text-sm
                   border-zinc-300 dark:border-zinc-700
                   bg-white dark:bg-zinc-900
                   text-zinc-900 dark:text-zinc-100"
        // no onClick real todavía, para no confundir
        aria-label="Cambiar tema"
      >
        <span className="inline-flex items-center gap-2">
          <Moon className="h-4 w-4" />
          <span>Tema</span>
        </span>
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      className="rounded-2xl border px-3 py-1.5 text-sm
                 border-zinc-300 dark:border-zinc-700
                 bg-white dark:bg-zinc-900
                 text-zinc-900 dark:text-zinc-100"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Cambiar tema"
      suppressHydrationWarning
    >
      <span className="inline-flex items-center gap-2" suppressHydrationWarning>
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        <span>{isDark ? "Claro" : "Oscuro"}</span>
      </span>
    </button>
  );
}
