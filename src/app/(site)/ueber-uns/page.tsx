import type { Metadata } from "next";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { MotionCard } from "@/components/MotionCard"; // <— NEU

export const metadata: Metadata = {
  title: "Über uns – SSB Soulé Smart Business",
  description:
    "Wir verbinden Strategie, Design und Engineering zu digitalen Lösungen, die messbaren Business-Impact liefern.",
};

function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-block rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* HERO */}
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Wer wir sind</h1>
        <p className="mt-4 text-slate-300">
          SSB – <strong>Soulé Smart Business</strong> – ist ein Studio für moderne Software
          und KI-Lösungen. Wir verbinden klare Strategie, präzises Design und sauberes Engineering
          zu Produkten, die <em>spürbare Ergebnisse</em> liefern: schneller, smarter, sicherer.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Badge>Senior-Engineering</Badge>
          <Badge>Time-to-Value</Badge>
          <Badge>DSGVO & Security</Badge>
          <Badge>Skalierbarkeit</Badge>
        </div>
      </header>

      {/* WARUM SSB */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <MotionCard>
          <h2 className="text-xl md:text-2xl font-semibold">Warum SSB?</h2>
          <p className="mt-3 text-slate-300">
            Unsere Arbeit beginnt bei Ihrem Geschäftsmodell: Welche Metriken zählen?
            Wo entstehen Kosten? Wo liegen Chancen? Darauf bauen wir Lösungen, die den Kern treffen –
            von KI-Automatisierung bis zu performanten Interfaces.
          </p>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>• Fokus auf Outcomes statt Output.</li>
            <li>• Schnelle Prototypen, iterativer Rollout.</li>
            <li>• Klare Kommunikation, klare Entscheidungen.</li>
          </ul>
        </MotionCard>

        <MotionCard>
          <h3 className="text-xl md:text-2xl font-semibold">Unser Versprechen</h3>
          <p className="mt-3 text-slate-300">
            Seniorige Qualität ohne Overhead: kurze Wege, verlässliche Timings, transparente Kosten.
            Sie sprechen mit Menschen, die bauen – nicht mit Zwischenstationen.
          </p>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>• Verbindliche Angebote & klare Roadmaps.</li>
            <li>• Sauberer Code, getestete Releases.</li>
            <li>• Sicherheit & Datenschutz by design.</li>
          </ul>
        </MotionCard>
      </section>

      {/* PRINCIPLES */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Unsere Prinzipien</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { t: "Klarheit", d: "Wir reduzieren Komplexität. Verständliche Entscheidungen schlagen Buzzwords." },
            { t: "Verantwortung", d: "Wir denken Betrieb, Sicherheit und Daten früh mit – nicht erst am Ende." },
            { t: "Pragmatismus", d: "So viel Architektur wie nötig, so wenig Ballast wie möglich." },
            { t: "Exzellenz", d: "Saubere Implementierung, messbare Qualität, kontinuierliche Verbesserung." },
          ].map((c) => (
            <MotionCard key={c.t}>
              <div className="text-base font-semibold text-slate-100">{c.t}</div>
              <div className="text-slate-300 mt-1">{c.d}</div>
            </MotionCard>
          ))}
        </div>
      </section>

      {/* WIE WIR ARBEITEN */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Wie wir arbeiten</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            { s: "01", t: "Discovery", d: "Ziele, Stakeholder, Datenquellen, Risiken. Wir priorisieren Impact." },
            { s: "02", t: "Konzept", d: "Informationsarchitektur, Flows, Guardrails. Konzentriert auf Wert." },
            { s: "03", t: "Prototyp", d: "Klickbar, testbar, mit echten Beispielen. Früh Feedback einsammeln." },
            { s: "04", t: "Build", d: "Komponenten, Integrationen, Daten. Iterativ liefern statt Big Bang." },
            { s: "05", t: "Launch", d: "Tracking, Consent, SEO/Performance. Ruhiger Go-Live ohne Drama." },
            { s: "06", t: "Betrieb", d: "Monitoring, Tests, Roadmap. Wir entwickeln weiter – kontrolliert." },
          ].map((step) => (
            <MotionCard key={step.s}>
              <div className="text-sm text-slate-400">{step.s}</div>
              <div className="text-base font-semibold text-slate-100">{step.t}</div>
              <p className="mt-1 text-slate-300">{step.d}</p>
            </MotionCard>
          ))}
        </ol>
      </section>

      {/* CTA */}
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
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-white border border-white/10 bg-gradient-to-br from-navy-980 to-navy-900 hover:border-transparent transition-all duration-300"
          >
            Projekt anfragen
          </Link>
        </div>
      </section>
    </div>
  );
}
