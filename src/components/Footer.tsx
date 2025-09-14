"use client";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold">SSB – Soulé Smart Business</div>
          <p className="text-slate-400 mt-2 max-w-sm">
            Mit KI die Zukunft gestalten – Ihr smarter Partner.
          </p>
        </div>
        <div>
          <div className="font-semibold">Leistungen</div>
          <ul className="mt-2 space-y-2 text-slate-400">
            <li>KI-Integrationen & Anwendungen</li>
            <li>Website-Erstellung</li>
            <li>Web-App-Entwicklung</li>
            <li>App-Entwicklung (iOS/Android)</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Kontakt</div>
          <p className="text-slate-400 mt-2">E-Mail & Termin nach Anfrage.</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-6 border-t border-white/10">
        © {new Date().getFullYear()} Soulé Smart Business. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
