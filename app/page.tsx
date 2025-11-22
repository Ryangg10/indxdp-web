import Link from "next/link";
import {
  CalendarClock,
  Activity,
  BarChart3,
  ClipboardList,
  SquareGanttChart,
  IdCard,
  Shirt,
  MapPin,
} from "lucide-react";

function Card({
  title,
  desc,
  href,
  Icon,
}: {
  title: string;
  desc: string;
  href: string;
  Icon: any;
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:shadow-lg transition">
      <div className="flex items-center gap-3 mb-2">
        <div className="size-10 rounded-2xl grid place-items-center bg-zinc-100 dark:bg-zinc-800">
          <Icon className="size-5 text-zinc-900 dark:text-zinc-100" />
        </div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
      </div>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">{desc}</p>
      <Link
        className="inline-block rounded-2xl border px-4 py-2 text-sm
                   border-zinc-300 dark:border-zinc-700
                   bg-white dark:bg-zinc-900
                   text-zinc-900 dark:text-zinc-100"
        href={href}
      >
        Abrir
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 pt-10 pb-12 text-zinc-900 dark:text-zinc-100">
      {/* Hero principal */}
      <section className="grid md:grid-cols-2 gap-8 items-center mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Bienvenido a la plataforma multi-deporte
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Fútbol 7, rápido, soccer, básquetbol, softbol y tochito. Ramas
            varonil y femenil. Calendarios, resultados, estadísticas y más.
          </p>
        </div>
        <div
          className="aspect-[16/10] rounded-3xl border border-zinc-200 dark:border-zinc-800 p-2
                     bg-gradient-to-br from-violet-200/40 to-yellow-200/40
                     dark:from-violet-500/10 dark:to-yellow-500/10"
        />
      </section>

      {/* Tarjetas de módulos */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card
          title="Rol semanal"
          desc="Calendario de juegos por semana"
          href="/routes/rol-semanal"
          Icon={CalendarClock}
        />
        <Card
          title="Resultados"
          desc="Marcadores y resúmenes"
          href="/routes/resultados"
          Icon={Activity}
        />
        <Card
          title="Estadísticas"
          desc="Tablas y líderes"
          href="/routes/estadisticas"
          Icon={BarChart3}
        />
        <Card
          title="Cédulas arbitrales"
          desc="Registro y descarga"
          href="/routes/cedulas"
          Icon={ClipboardList}
        />
        <Card
          title="Rol de temporada"
          desc="Todas las jornadas"
          href="/routes/rol-temporada"
          Icon={SquareGanttChart}
        />
        <Card
          title="Credenciales"
          desc="Generación con QR"
          href="/routes/credenciales"
          Icon={IdCard}
        />
        <Card
          title="Campos de juego"
          desc="Ubicaciones en Google Maps"
          href="/routes/campos"
          Icon={MapPin}
        />
      </section>

    </main>
  );
}
