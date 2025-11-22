"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useFilters } from "@/app/components/filters-provider";

/**
 * Busca primero .jpg y, si falla, intenta .png.
 * Si ambos faltan, usa fallback /rol-semanal.png
 */
function useRolImagePath(sport: string, gender: string) {
  const base = `/rol/rol-semanal-${sport}-${gender}`;
  const candidates = [`${base}.jpg`, `${base}.png`];
  return { candidates, fallback: "/rol-semanal.png" };
}

export default function Page() {
  const { sport, gender } = useFilters();
  const { candidates, fallback } = useRolImagePath(sport, gender);

  const [src, setSrc] = useState(candidates[0]);

  // cuando un src falla, probamos el siguiente; si se acaban, usamos el fallback
  const handleError = () => {
    const idx = candidates.indexOf(src);
    if (idx === -1 || idx === candidates.length - 1) {
      setSrc(fallback);
    } else {
      setSrc(candidates[idx + 1]);
    }
  };

  const title = useMemo(
    () => `Rol semanal — ${sport} / ${gender}`,
    [sport, gender]
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 text-zinc-900 dark:text-zinc-100">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        {/* Botón descargar */}
        <a
          href={src}
          download
          className="rounded-2xl border px-3 py-1.5 text-sm
                     border-zinc-300 dark:border-zinc-700
                     bg-white dark:bg-zinc-900
                     text-zinc-900 dark:text-zinc-100"
        >
          Descargar
        </a>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-6">
        Cambia deporte y rama en el encabezado para ver el rol correspondiente.
      </p>

      <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800
                      bg-white dark:bg-zinc-900 overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1600}
          height={900}
          className="w-full h-auto"
          onError={handleError}
          priority
        />
      </div>
    </main>
  );
}
