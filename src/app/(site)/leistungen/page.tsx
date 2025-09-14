import type { Metadata } from "next";
import Link from "next/link";
import BlurBlock from "@/components/BlurBlock";
import LogoLoop from "@/components/LogoLoop";




export const metadata: Metadata = {
  title: "Leistungen – SSB",
  description:
    "KI-Integrationen & Anwendungen, Website-Erstellung, Web-App- und App-Entwicklung. Transparente Abläufe, moderner Tech-Stack, messbare Vorteile.",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  );
}

function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 mt-12 md:mt-16">
      <BlurBlock className="p-6 md:p-8" delay={0.05}>
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        {intro ? <p className="mt-3 text-slate-300">{intro}</p> : null}
        <div className="mt-6">{children}</div>
      </BlurBlock>
    </section>
  );
}

export default function Page() {
  return (
    <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      {/* Kopf */}
      <header className="max-w-3xl">
        <h1 className="heading-hover inline-block text-4xl md:text-6xl font-semibold leading-tight">
  <span className="heading-shine heading-underline">Unsere Leistungen</span>
</h1>
        <p className="mt-3 text-slate-300">
          Von der Idee bis zum Go-Live: Wir planen, entwickeln und betreiben Lösungen, die
          Ihr Geschäft **smarter, schneller und sicherer** machen. Klarer Prozess, moderner
          Tech-Stack – und messbare Ergebnisse.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge>DSGVO & Security</Badge>
          <Badge>Time-to-Value</Badge>
          <Badge>Skalierbarkeit</Badge>
          <Badge>Wartbarkeit</Badge>
          <Badge>Transparente Kosten</Badge>
        </div>
      </header>

      <div className="mt-5">
  <Link
    href="/"
    aria-label="Zur Startseite"
    className={[
      "inline-flex items-center gap-2 rounded-2xl px-5 py-2.5",
      "text-base md:text-lg font-medium",
      "text-white",
      "border border-white/20 bg-white/10 hover:bg-white/25",
      "backdrop-blur-sm transition-all duration-300",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
    ].join(" ")}
  >
    <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    Zur Startseite
  </Link>
</div>



      {/* Sprung-Navigation */}
      <nav className="mt-6 text-sm text-slate-400">
        <ul className="flex flex-wrap gap-4">
          <li><a href="#ki" className="hover:text-slate-200">KI-Integrationen</a></li>
          <li><a href="#websites" className="hover:text-slate-200">Website-Erstellung</a></li>
          <li><a href="#webapps" className="hover:text-slate-200">Web-Apps</a></li>
          <li><a href="#apps" className="hover:text-slate-200">Mobile Apps</a></li>
          <li><a href="#x-topics" className="hover:text-slate-200">Qualität & Betrieb</a></li>
        </ul>
      </nav>
      {/* KI-Integrationen */}
      <Section
        id="ki"
        title="KI-Integrationen & Anwendungen"
        intro="Von Support-Bots über Automatisierung bis hin zu Retrieval-QA und Prozessunterstützung – wir integrieren KI zielgerichtet in Ihre Workflows."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Ablauf</h3>
            <ol className="mt-3 space-y-2 text-slate-300">
              <li><strong>1. Use-Cases & Daten</strong> – Ziele, Datenquellen, Risiken.</li>
              <li><strong>2. Prototyp</strong> – klickbarer Proof of Concept mit echten Beispielen.</li>
              <li><strong>3. Architektur</strong> – Prompting/Agents, Vektorsuche, Schnittstellen.</li>
              <li><strong>4. Umsetzung</strong> – Integrationen (CRM, Ticket, E-Mail, Slack, Teams …).</li>
              <li><strong>5. Evaluation</strong> – Guardrails, Halluzinations-Checks, Tuning.</li>
              <li><strong>6. Go-Live & Monitoring</strong> – Nutzung, Qualität, Kosten im Blick.</li>
            </ol>
            <h3 className="mt-6 font-semibold">Vorteile</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>**Schnellere Abläufe** (First-Response, Lead-Qualifizierung, Recherche).</li>
              <li>**Weniger manuelle Arbeit** dank Automatisierung & Workflows.</li>
              <li>**Bessere Antworten** durch firmeneigene Daten (RAG/Retrieval).</li>
              <li>**Transparente Kosten**: Usage-Kontrolle & Budget-Caps.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Technologien</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>OpenAI / Azure OpenAI</Badge>
              <Badge>LangChain</Badge>
              <Badge>LlamaIndex</Badge>
              <Badge>Vektorsuche (Pinecone/Weaviate)</Badge>
              <Badge>PostgreSQL / Redis</Badge>
              <Badge>Next.js API Routes</Badge>
              <Badge>Webhook/CRM-Integrationen</Badge>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-slate-300">
                Ergebnis: Ein nutzerfreundliches Interface (Chat/Assistenz, Formular, Dashboard),
                das genau Ihre Prozesse bedient – sicher, messbar und erweiterbar.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Website-Erstellung */}
      <Section
        id="websites"
        title="Website-Erstellung"
        intro="Schnell, modern, suchmaschinenfreundlich. Wir liefern klare Informationsarchitektur, starke Performance und ein Design, das konvertiert."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Ablauf</h3>
            <ol className="mt-3 space-y-2 text-slate-300">
              <li><strong>1. Strategie & IA</strong> – Ziele, Zielgruppen, Seitenstruktur.</li>
              <li><strong>2. UX/UI & Inhalte</strong> – Wireframes, Design, Copy-Guidelines.</li>
              <li><strong>3. Entwicklung</strong> – Komponenten, Animationen, CMS-Anbindung.</li>
              <li><strong>4. SEO & Performance</strong> – Core Web Vitals, Metadaten, Sitemaps.</li>
              <li><strong>5. Launch</strong> – Tracking, Consent, Redirects.</li>
              <li><strong>6. Betrieb</strong> – Updates, A/B-Tests, Weiterentwicklung.</li>
            </ol>
            <h3 className="mt-6 font-semibold">Vorteile</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>**Sichtbarkeit & Conversion** durch SEO-Basics & klare CTAs.</li>
              <li>**Top-Performance** (LCP/TTFB) für bessere Rankings & UX.</li>
              <li>**Einfache Pflege** via Headless CMS (optional).</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Technologien</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>Next.js (App Router)</Badge>
              <Badge>React / TypeScript</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Framer Motion</Badge>
              <Badge>Vercel</Badge>
              <Badge>Headless CMS (Sanity/Contentful)</Badge>
              <Badge>Analytics (GA4/Umami)</Badge>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-slate-300">
                Ein auf Conversion optimierter Web-Auftritt, der schnell lädt, gut aussieht und
                sich intuitiv erweitern lässt.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Web-Apps */}
      <Section
        id="webapps"
        title="Web-App-Entwicklung"
        intro="Interne Tools, Dashboards oder SaaS – wir bauen robuste Web-Applikationen mit sauberer Architektur und sicherem Auth."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Ablauf</h3>
            <ol className="mt-3 space-y-2 text-slate-300">
              <li><strong>1. Scope & Rollen</strong> – Use-Cases, Rechte/Rollen, KPIs.</li>
              <li><strong>2. Domain-Modell</strong> – Datenmodell & Schnittstellen.</li>
              <li><strong>3. UI/Flows</strong> – Prototyp, States, Edge-Cases.</li>
              <li><strong>4. Build</strong> – API, DB, Auth, Billing, Files.</li>
              <li><strong>5. Tests</strong> – Unit/E2E, Accessibility, Load.</li>
              <li><strong>6. Rollout</strong> – Staging, Migrations, Onboarding.</li>
            </ol>
            <h3 className="mt-6 font-semibold">Vorteile</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>**Skalierbar & wartbar** dank sauberer Architektur.</li>
              <li>**Schneller Release-Zyklus** durch CI/CD und modularen Code.</li>
              <li>**Klarer ROI** via KPIs, Audits & Nutzungsmetriken.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Technologien</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>Next.js / React</Badge>
              <Badge>Node.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Prisma</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>MongoDB</Badge>
              <Badge>Auth (NextAuth/Auth.js)</Badge>
              <Badge>Stripe</Badge>
              <Badge>Upload (S3/Cloud)</Badge>
              <Badge>Playwright / Jest</Badge>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-slate-300">
                Von MVP bis Enterprise-Feature: Wir liefern sauber strukturierte Apps, die
                mit Ihrem Geschäft mitwachsen.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mobile Apps */}
      <Section
        id="apps"
        title="App-Entwicklung (iOS/Android)"
        intro="Cross-platform mit React Native/Expo – schneller Marktstart, ein Code-Base, native Performance."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-semibold">Ablauf</h3>
            <ol className="mt-3 space-y-2 text-slate-300">
              <li><strong>1. Produkt & Stores</strong> – Use-Cases, Monetarisierung, Guidelines.</li>
              <li><strong>2. Prototyp</strong> – Navigation, Offline-Fähigkeit, Push.</li>
              <li><strong>3. Entwicklung</strong> – API-Anbindung, State, Sicherheit.</li>
              <li><strong>4. Tests</strong> – Geräte, Performance, Crash-Free-Rate.</li>
              <li><strong>5. Release</strong> – App Store/Play Deploy, Review.</li>
              <li><strong>6. Betrieb</strong> – Updates, Crashlytics, Feedback-Loop.</li>
            </ol>
            <h3 className="mt-6 font-semibold">Vorteile</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>**Ein Code-Base** für iOS & Android → geringere Kosten.</li>
              <li>**Schneller Launch** mit Expo & Over-the-Air Updates.</li>
              <li>**Nahtlose Integration** mit bestehender Infrastruktur.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Technologien</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>React Native</Badge>
              <Badge>Expo</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Native Modules</Badge>
              <Badge>Push (FCM/APNs)</Badge>
              <Badge>App Store / Play</Badge>
              <Badge>Crashlytics / Sentry</Badge>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-sm text-slate-300">
                Mobile Features, die echte Nutzung erzeugen – mit Telemetrie & Feedback-Kanälen
                für Ihre Roadmap.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Quer-Themen */}
      <Section
        id="x-topics"
        title="Qualität, Sicherheit & Betrieb"
        intro="Querschnittsthemen, die jedes Projekt besser machen – von Security über Tests bis Monitoring."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Sicherheit & DSGVO</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>AuthN/Z, Secrets-Handling, Least-Privilege.</li>
              <li>Input-Validierung, Rate-Limiting, Audit-Logs.</li>
              <li>Auftragsverarbeitung, Datensparsamkeit.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Qualität</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>Unit/E2E-Tests (Jest/Playwright), Linting, Previews.</li>
              <li>Accessibility, i18n, Performance-Budgets.</li>
              <li>Code-Reviews, Definition of Done.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Betrieb</h3>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li>CI/CD (Vercel/GitHub), Zero-Downtime-Deploys.</li>
              <li>Monitoring & Alerts (Sentry, Logs, RUM).</li>
              <li>Skalierung (Edge, Caching, DB-Migrations).</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Technologien – Logo Loop */}
<section className="mt-16">
  <h2 className="text-xl md:text-2xl font-semibold mb-4">Technologien, die wir einsetzen</h2>

  <LogoLoop
    speed={40} // gern 30–60 testen
    items={[
      { src: "/tech-logos/nextjs.svg", alt: "Next.js" },
      { src: "/tech-logos/react.svg", alt: "React" },
      { src: "/tech-logos/typescript.svg", alt: "TypeScript" },
      { src: "/tech-logos/tailwind.svg", alt: "Tailwind CSS" },
      { src: "/tech-logos/nodejs.svg", alt: "Node.js" },
      { src: "/tech-logos/postgres.svg", alt: "PostgreSQL" },
      { src: "/tech-logos/redis.svg", alt: "Redis" },
      { src: "/tech-logos/aws-s3.svg", alt: "AWS S3" },
      { src: "/tech-logos/vercel.svg", alt: "Vercel" },
      { src: "/tech-logos/playwright.svg", alt: "Playwright" },
      { src: "/tech-logos/jest.svg", alt: "Jest" },
      { src: "/tech-logos/github.svg", alt: "GitHub" },
      { src: "/tech-logos/javascript.svg", alt: "JavaScript" },
    ]}
  />
</section>


      {/* CTA */}
      <div className="mt-12">
        <Link
          href="/kontakt"
          className={[
            "group block rounded-3xl border border-white/10 bg-gradient-to-br from-navy-980 to-navy-900 p-6 text-center",
            "hover:border-transparent platinum-hover transition-all duration-300",
          ].join(" ")}
        >
          <div className="text-lg md:text-xl font-semibold text-white">Projekt starten</div>
          <div className="mt-1 text-slate-300">Erstgespräch – kostenlos & unverbindlich</div>
        </Link>
      </div>
    </div>
  );
}
