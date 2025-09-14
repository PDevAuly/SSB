// src/app/(site)/impressum/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – SSB Soulé Smart Business",
  description: "Pflichtangaben gemäß § 5 TMG für SSB – Soulé Smart Business.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Impressum</h1>

      <div className="mt-6 space-y-8 text-slate-300">
        <section>
          <h2 className="text-lg font-semibold text-slate-100">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">
            <strong>SSB – Soulé Smart Business</strong><br />
            Inhaber: <strong>Ashraf Soulé</strong><br />
            Schulstraße 36<br />
            65552 Limburg, Deutschland
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-100">Kontakt</h3>
          <p className="mt-2">
            Telefon: 01520&nbsp;369&nbsp;1627<br />
            E-Mail:{" "}
            <a className="underline hover:text-slate-200" href="mailto:soulesmartbusiness@gmail.com">
              soulesmartbusiness@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-100">Rechtsform</h3>
          <p className="mt-2">Einzelunternehmen (Kleinunternehmer gemäß § 19 UStG).</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-100">Umsatzsteuer</h3>
          <p className="mt-2">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: <em>nicht vergeben</em>.<br />
            Hinweis: Die <em>Steuernummer</em> wird aus Datenschutz- und Sicherheitsgründen nicht veröffentlicht.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-100">Registereintrag</h3>
          <p className="mt-2">Kein Eintrag im Handelsregister.</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-100">Verantwortlich für den Inhalt</h3>
          <p className="mt-2">
            Ashraf Soulé, Schulstraße 36, 65552 Limburg, Deutschland
            <br />(gemäß § 18 Abs. 2 MStV)
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-100">Haftung für Inhalte & Links</h3>
          <p className="mt-2">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
            Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </section>
      </div>

      {/* CTA: Zur Startseite */}
      <section className="mt-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-white
                     border border-white/15 bg-white/10 hover:bg-white/20 backdrop-blur-sm
                     transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,.35)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" className="-ml-1" aria-hidden>
            <path
              d="M15 18l-6-6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Zur Startseite
        </Link>
      </section>
    </div>
  );
}
