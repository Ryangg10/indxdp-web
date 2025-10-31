export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-8">
      <div className="mx-auto max-w-7xl px-4 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Índex Deportes. Todos los derechos reservados.</p>
        <a className="underline" href="mailto:contacto@tuliga.mx">Contacto</a>
      </div>
    </footer>
  );
}
