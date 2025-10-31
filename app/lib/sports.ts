export type SportKey =
  | "fut7"
  | "futRapido"
  | "futSoccer"
  | "basket"
  | "softbol"
  | "tochito";

export const SPORTS: { key: SportKey; name: string }[] = [
  { key: "fut7",       name: "Fútbol 7" },
  { key: "futRapido",  name: "Fútbol Rápido" },
  { key: "futSoccer",  name: "Fútbol Soccer" },
  { key: "basket",     name: "Básquetbol" },
  { key: "softbol",    name: "Softbol" },
  { key: "tochito",    name: "Tochito" },
];

export type Gender = "varonil" | "femenil";
