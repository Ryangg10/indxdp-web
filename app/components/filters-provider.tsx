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

  // lee de URL o localStorage
  const initialSport = (search.get("sport") as SportKey) || (typeof window !== "undefined" && (localStorage.getItem("sport") as SportKey)) || DEFAULT_SPORT;
  const initialGender = (search.get("gender") as Gender) || (typeof window !== "undefined" && (localStorage.getItem("gender") as Gender)) || DEFAULT_GENDER;

  const [sport, setSportState] = useState<SportKey>(initialSport);
  const [gender, setGenderState] = useState<Gender>(initialGender);

  // sincroniza a URL y localStorage
  useEffect(() => {
    const params = new URLSearchParams(search.toString());
    params.set("sport", sport);
    params.set("gender", gender);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    if (typeof window !== "undefined") {
      localStorage.setItem("sport", sport);
      localStorage.setItem("gender", gender);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sport, gender]);

  const value = useMemo<Filters>(() => ({
    sport,
    gender,
    setSport: setSportState,
    setGender: setGenderState,
  }), [sport, gender]);

  return <FiltersCtx.Provider value={value}>{children}</FiltersCtx.Provider>;
}

export function useFilters() {
  const ctx = useContext(FiltersCtx);
  if (!ctx) throw new Error("useFilters must be used within FiltersProvider");
  return ctx;
}
