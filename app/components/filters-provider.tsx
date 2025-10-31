"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Gender, SportKey } from "@/app/lib/sports";

type Filters = {
  sport: SportKey;
  gender: Gender;
  setSport: (s: SportKey) => void;
  setGender: (g: Gender) => void;
};

const FiltersCtx = createContext<Filters | null>(null);

const DEFAULT_SPORT: SportKey = "fut7";
const DEFAULT_GENDER: Gender = "varonil";

export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const search = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // 1) Arranca con defaults para evitar hydration mismatch
  const [sport, setSport] = useState<SportKey>(DEFAULT_SPORT);
  const [gender, setGender] = useState<Gender>(DEFAULT_GENDER);
  const [mounted, setMounted] = useState(false);

  // 2) Al montar, lee URL y localStorage y actualiza estado
  useEffect(() => {
    let s = DEFAULT_SPORT as SportKey;
    let g = DEFAULT_GENDER as Gender;

    const urlSport = search.get("sport") as SportKey | null;
    const urlGender = search.get("gender") as Gender | null;

    // LocalStorage solo en cliente
    const lsSport = typeof window !== "undefined" ? (localStorage.getItem("sport") as SportKey | null) : null;
    const lsGender = typeof window !== "undefined" ? (localStorage.getItem("gender") as Gender | null) : null;

    s = urlSport ?? lsSport ?? DEFAULT_SPORT;
    g = urlGender ?? lsGender ?? DEFAULT_GENDER;

    setSport(s);
    setGender(g);
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 3) Cuando cambia el estado, sincroniza URL y localStorage (solo tras mount)
  useEffect(() => {
    if (!mounted) return;

    const params = new URLSearchParams(search.toString());
    if (params.get("sport") !== sport) params.set("sport", sport);
    if (params.get("gender") !== gender) params.set("gender", gender);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    if (typeof window !== "undefined") {
      localStorage.setItem("sport", sport);
      localStorage.setItem("gender", gender);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sport, gender, mounted]);

  const value = useMemo<Filters>(() => ({
    sport,
    gender,
    setSport,
    setGender,
  }), [sport, gender]);

  return <FiltersCtx.Provider value={value}>{children}</FiltersCtx.Provider>;
}

export function useFilters() {
  const ctx = useContext(FiltersCtx);
  if (!ctx) throw new Error("useFilters must be used within FiltersProvider");
  return ctx;
}
