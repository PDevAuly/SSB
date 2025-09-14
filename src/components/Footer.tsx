import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8 py-8
                      flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <span className="text-slate-300">SSB Soulé Smart Business</span>
          <span className="hidden md:inline">•</span>
          <span>© {year}</span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href="/leistungen" className="hover:text-slate-200 transition-colors">Leistungen</Link>
          <Link href="/ueber-uns"  className="hover:text-slate-200 transition-colors">Über uns</Link>
          <Link href="/kontakt"    className="hover:text-slate-200 transition-colors">Kontakt</Link>
          <Link href="/impressum"  className="hover:text-slate-200 transition-colors">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-slate-200 transition-colors">Datenschutz</Link>
        </nav>
      </div>
    </footer>
  );
}
