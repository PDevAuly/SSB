import type { Metadata } from "next";
import Link from "next/link";
import { MotionCard } from "@/components/MotionCard"; // schon erstellt
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – SSB Soulé Smart Business",
  description:
    "Nehmen Sie Kontakt auf – wir melden uns schnell und konkret mit dem nächsten Schritt.",
};

export default function Page() {
  return (
    <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Kontakt</h1>
        <p className="mt-4 text-slate-300">
          Erzählen Sie uns kurz von Ihrem Vorhaben – wir antworten in der Regel
          <strong> innerhalb von 24 Stunden</strong> mit konkreten nächsten Schritten.
        </p>
      </header>

      {/* GRID */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Formular */}
        <MotionCard className="p-0">
          <ContactForm />
        </MotionCard>

        {/* Kontakt-Infos / Vorteile */}
        <div className="grid gap-4">
          <MotionCard>
            <h3 className="text-lg font-semibold">Schnelle Einschätzung</h3>
            <p className="mt-2 text-slate-300">
              Wir schauen auf Impact, Risiken und Machbarkeit – und geben Ihnen
              eine klare, realistische Einschätzung.
            </p>
          </MotionCard>

          <MotionCard>
            <h3 className="text-lg font-semibold">Direktkontakt</h3>
            <p className="mt-2 text-slate-300">
              Lieber direkt? Schreiben Sie uns eine E-Mail oder rufen Sie an.
            </p>
            <div className="mt-3 space-y-1">
              <a href="mailto:hello@soule-smart.business" className="text-slate-200 hover:underline">
                soulesmartbusiness@gmail.com
              </a>
              <div className="text-slate-300">+49&nbsp;1520&nbsp;3691627</div>
            </div>
          </MotionCard>

          <MotionCard>
            <h3 className="text-lg font-semibold">Adresse</h3>
            <p className="mt-2 text-slate-300">
              SSB – Soulé Smart Business<br />
              Schulstrasse 36, 65552 Limburg
            </p>
          </MotionCard>
        </div>
      </section>

      {/* CTA: Zur Startseite */}
      <section className="mt-14 text-center">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-white border border-white/15 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,.35)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" className="-ml-1" aria-hidden>
              <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Zur Startseite
          </Link>

          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-white border border-white/10 bg-gradient-to-br from-navy-980 to-navy-900 hover:border-transparent transition-all duration-300"
          >
            Leistungen ansehen
          </Link>
        </div>
      </section>
    </div>
  );
}
