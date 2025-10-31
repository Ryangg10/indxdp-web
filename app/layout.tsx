import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "./components/theme-provider";
import { FiltersProvider } from "./components/filters-provider";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Suspense } from "react"; // ⬅️ IMPORTANTE

export const metadata: Metadata = {
  title: "Índex Deportes",
  description: "Ligas multi-deporte con calendario, resultados y más.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
        <ThemeProvider>
          {/* ⬇️ Envuelve cualquier uso de useSearchParams/usePathname/useRouter */}
          <Suspense fallback={null}>
            <FiltersProvider>
              <Navbar />
              {children}
              <Footer />
            </FiltersProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
