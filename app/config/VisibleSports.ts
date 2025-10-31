// app/config/visibleSports.ts
import type { SportKey } from "@/app/lib/sports";

/**
 * Lista de deportes visibles en el selector.
 * Mantén las keys que quieras mostrar. No borra nada del archivo lib/sports.ts.
 */
export const VISIBLE_SPORTS: SportKey[] = [
  "softbol",
  "tochito",
  "futRapido",
  "voleibol", // si no existe la key en lib/sports, agréga la key allí también
];
