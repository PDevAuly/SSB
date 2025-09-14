// src/app/(site)/datenschutz/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – SSB Soulé Smart Business",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Datenschutzerklärung</h1>

      <div className="mt-6 space-y-8 text-slate-300 leading-relaxed">
        {/* 1. Verantwortlicher */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100">1. Verantwortlicher</h2>
          <p className="mt-2">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
            <strong>SSB – Soulé Smart Business</strong><br />
            Inhaber: <strong>Ashraf Soulé</strong><br />
            Schulstraße 36, 65552 Limburg, Deutschland<br />
            Telefon: 01520&nbsp;369&nbsp;1627<br />
            E-Mail:{" "}
            <a className="underline hover:text-slate-200" href="mailto:soulesmartbusiness@gmail.com">
              soulesmartbusiness@gmail.com
            </a>
          </p>
        </section>

        {/* 2. Hosting (IONOS) & Server-Logs */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100">2. Hosting & Server-Logfiles</h2>
          <p className="mt-2">
            Unsere Website wird bei <strong>IONOS SE</strong> (Elgendorfer Straße 57, 56410 Montabaur, Deutschland)
            gehostet. IONOS erbringt für uns Infrastruktur- und Plattformdienstleistungen. Zur Bereitstellung der
            Website werden durch IONOS automatisch Server-Logfiles verarbeitet (z. B. IP-Adresse, Datum/Uhrzeit des
            Zugriffs, aufgerufene URL, Referrer-URL, User-Agent/Browser, ggf. Fehlercodes). Die Verarbeitung ist
            technisch erforderlich, um Stabilität, Sicherheit und Funktionsfähigkeit des Angebots zu gewährleisten.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
          <p className="mt-2">
            Mit IONOS besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO. Die Verarbeitung erfolgt in
            Rechenzentren innerhalb der Europäischen Union.
          </p>
        </section>

        {/* 3. Kontaktaufnahme */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100">3. Kontaktaufnahme (Formular & E-Mail)</h2>
          <p className="mt-2">
            Bei Kontaktaufnahme über das Formular oder per E-Mail verarbeiten wir die von Ihnen übermittelten Daten
            (z. B. Name, E-Mail-Adresse, Unternehmen, Telefon, Betreff, Budget [optional], Nachricht), um Ihre Anfrage
            zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw.
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
          </p>
          <p className="mt-2">
            Die Daten werden nur so lange gespeichert, wie dies zur Bearbeitung und Dokumentation der Anfrage
            erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Eine Weitergabe an Dritte erfolgt
            ausschließlich, soweit dies zur Abwicklung notwendig ist (z. B. Hosting/E-Mail-Provider) oder rechtliche
            Verpflichtungen bestehen.
          </p>
        </section>

        {/* 4. Cookies & Tracking */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100">4. Cookies & Tracking</h2>
          <p className="mt-2">
            Es werden derzeit keine Analyse- oder Marketing-Cookies eingesetzt. Technisch notwendige Cookies können
            verwendet werden, um die sichere Bereitstellung der Website zu ermöglichen (Rechtsgrundlage:
            Art. 6 Abs. 1 lit. f DSGVO). Bei Einführung optionaler Dienste holen wir – sofern erforderlich – zuvor
            Ihre Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO) und informieren an dieser Stelle.
          </p>
        </section>

        {/* 5. Empfänger / Auftragsverarbeitung */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100">5. Empfänger & Auftragsverarbeitung</h2>
          <p className="mt-2">
            Zur Bereitstellung dieser Website und zur E-Mail-Kommunikation setzen wir Dienstleister (insbesondere
            Hosting- und E-Mail-Provider) ein, die personenbezogene Daten in unserem Auftrag verarbeiten.
            Mit diesen Dienstleistern bestehen Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO.
          </p>
        </section>

        {/* 6. Drittlandtransfer */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100">6. Datenübermittlungen in Drittländer</h2>
          <p className="mt-2">
            Eine Übermittlung personenbezogener Daten in Drittländer findet nur statt, wenn hierfür eine Rechtsgrundlage
            besteht – insbesondere auf Basis eines Angemessenheitsbeschlusses der EU-Kommission oder geeigneter Garantien
            (z. B. EU-Standardvertragsklauseln) nach Art. 46 DSGVO.
          </p>
        </section>

        {/* 7. Speicherdauer */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100">7. Speicherdauer</h2>
          <p className="mt-2">
            Personenbezogene Daten werden nur so lange verarbeitet, wie es für die genannten Zwecke erforderlich ist
            oder gesetzliche Aufbewahrungspflichten bestehen; anschließend erfolgt die Löschung oder Anonymisierung.
          </p>
        </section>

        {/* 8. Ihre Rechte */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100">8. Ihre Rechte</h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
            sowie Widerspruch gegen bestimmte Verarbeitungen (Art. 15–21 DSGVO). Wenn eine Verarbeitung auf Ihrer
            Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO).
            Zudem besteht ein Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO).
          </p>
          <p className="mt-2">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die Kontaktdaten des Verantwortlichen (siehe Abschnitt 1).
          </p>
        </section>

        {/* 9. Pflicht zur Bereitstellung */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100">9. Pflicht zur Bereitstellung von Daten</h2>
          <p className="mt-2">
            Für den Besuch der Website besteht keine Pflicht zur Bereitstellung personenbezogener Daten. Für die Nutzung
            des Kontaktformulars sind bestimmte Angaben erforderlich; ohne diese kann die Anfrage nicht bearbeitet werden.
          </p>
        </section>

        {/* 10. Aktualität */}
        <section>
          <h2 className="text-lg font-semibold text-slate-100">10. Aktualität dieser Erklärung</h2>
          <p className="mt-2">
            Diese Datenschutzerklärung wird bei Bedarf angepasst, insbesondere wenn sich technische Abläufe oder
            gesetzliche Anforderungen ändern.
          </p>
        </section>
      </div>

      {/* CTA: Zur Startseite / Kontakt */}
      <section className="mt-12 flex items-center justify-center gap-3 flex-wrap">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-white
                     border border-white/15 bg-white/10 hover:bg-white/20 backdrop-blur-sm
                     transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,.35)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" className="-ml-1" aria-hidden>
            <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Zur Startseite
        </Link>

        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-white
                     border border-white/10 bg-gradient-to-br from-navy-980 to-navy-900 hover:border-transparent transition-all duration-300"
        >
          Kontakt aufnehmen
        </Link>
      </section>
    </div>
  );
}
