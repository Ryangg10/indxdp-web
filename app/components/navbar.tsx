import Link from "next/link";
import { Users } from "lucide-react";

import ThemeToggle from "./theme-toggle";
import FiltersBar from "./filters-bar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur
      supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60
      border-b border-zinc-200/60 dark:border-zinc-800">
      {/* Barra superior */}
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-gradient-to-tr from-violet-500 to-yellow-400 grid place-items-center shadow">
            <Users className="size-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
              Índex Deportes
            </h1>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              Ligas y torneos – Chihuahua
            </p>
          </div>
        </Link>

        <ThemeToggle />
      </div>

      {/* Barra de filtros (deporte / rama) */}
      <div className="mx-auto max-w-7xl px-4 pb-3">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800
                        bg-white dark:bg-zinc-900 px-3 py-2">
          <FiltersBar />
        </div>
      </div>
    </header>
  );
}
