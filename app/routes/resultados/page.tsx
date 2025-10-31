import Image from "next/image";

export default function Page() {
  const title = "Resultados";
  const src   = "/resultados.png";

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 text-zinc-900 dark:text-zinc-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-6">
        Marcadores finales y resúmenes de la jornada.
      </p>
      <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
        <Image src={src} alt={title} width={1600} height={1000} className="w-full h-auto" />
      </div>
    </main>
  );
}
