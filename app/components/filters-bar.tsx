"use client";

import { SPORTS, type SportKey, type Gender } from "@/app/lib/sports";
import { VISIBLE_SPORTS } from "@/app/config/VisibleSports";
import { useFilters } from "./filters-provider";

export default function FiltersBar() {
  const { sport, gender, setSport, setGender } = useFilters();

  // Creamos Set de keys para filtrar rápido
  const visibleSet = new Set<readonly SportKey[]>(VISIBLE_SPORTS as any);

  // Filtramos los que deben mostrarse
  const shown = SPORTS.filter((s) =>
    (VISIBLE_SPORTS as SportKey[]).includes(s.key)
  );

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Selector de deporte */}
      <label className="text-xs text-zinc-600 dark:text-zinc-300">
        Deporte
        <select
          className="ml-2 rounded-xl border px-2 py-1 text-sm
                     border-zinc-300 dark:border-zinc-700
                     bg-white dark:bg-zinc-900
                     text-zinc-900 dark:text-zinc-100"
          value={sport}
          onChange={(e) => setSport(e.target.value as SportKey)}
        >
          {shown.map((s) => (
            <option key={s.key} value={s.key}>
              {s.name}
            </option>
          ))}
        </select>
      </label>

      {/* Selector de rama */}
      <label className="text-xs text-zinc-600 dark:text-zinc-300">
        Rama
        <select
          className="ml-2 rounded-xl border px-2 py-1 text-sm
                     border-zinc-300 dark:border-zinc-700
                     bg-white dark:bg-zinc-900
                     text-zinc-900 dark:text-zinc-100"
          value={gender}
          onChange={(e) => setGender(e.target.value as Gender)}
        >
          <option value="varonil">Varonil</option>
          <option value="femenil">Femenil</option>
        </select>
      </label>
    </div>
  );
}
