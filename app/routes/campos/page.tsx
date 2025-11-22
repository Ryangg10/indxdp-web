const FIELDS = [
  { name: "Deportiva Sur 1", mapsUrl: "https://www.google.com/maps?q=Deportiva+Sur+1+Chihuahua" },
  { name: "Deportiva Sur 2", mapsUrl: "https://www.google.com/maps?q=Deportiva+Sur+2+Chihuahua" },
  { name: "Polideportivo",   mapsUrl: "https://www.google.com/maps?q=Polideportivo+Chihuahua" },
  { name: "Neno Salcedo",    mapsUrl: "https://www.google.com/maps?q=Neno+Salcedo+Chihuahua" },
];

export default function CamposPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-zinc-900 dark:text-zinc-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Campos, Canchas y Gimnasios de juego</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-6">
        Ubicaciones con enlace directo a Google Maps.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FIELDS.map(f => (
          <div key={f.name} className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-semibold">{f.name}</h4>
              <a className="rounded-2xl border px-3 py-1.5 text-sm border-zinc-300 dark:border-zinc-700"
                 href={f.mapsUrl} target="_blank" rel="noreferrer">
                Abrir mapa
              </a>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Ver en Google Maps</p>
          </div>
        ))}
      </div>
    </main>
  );
}
