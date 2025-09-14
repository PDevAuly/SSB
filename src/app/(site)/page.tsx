"use client";

import Topbar from "@/components/Topbar";
import ParallaxHero from "@/components/ParallaxHero";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SloganBar from "@/components/SloganBar";
import Link from "next/link";

/** Inline-BlurReveal Komponente */
function BlurReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, filter: "blur(0px)" } : undefined}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Inline-Reveal (keine externen Importe nötig) */
function Reveal({
  children,
  y = 24,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  y?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Inline-Marquee (sanfter, endloser Claim) */
function Marquee({ text }: { text: string }) {
  const row = Array.from({ length: 7 }).map((_, i) => (
    <span key={i} className="mx-6 opacity-80">{text}</span>
  ));
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="whitespace-nowrap text-[28px] md:text-[40px] font-semibold tracking-tight text-slate-200/80"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        <span className="inline-flex items-center">{row}</span>
        <span className="inline-flex items-center">{row}</span>
      </motion.div>
    </div>
  );
}

/** Inline-SectionNav (rechts fixiert, 01/02/… und Scroll-Spy) */
function SectionNav({
  items,
}: {
  items: { id: string; label: string; num: string }[];
}) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]?.target?.id) setActive(vis[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.15, 0.3, 0.6] }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <aside className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <ul className="space-y-2">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <li key={it.id}>
              <button
                onClick={() => scrollTo(it.id)}
                className={[
                  "group flex items-center gap-3 rounded-xl border px-3 py-2 transition",
                  "bg-white/[0.03] border-white/10 hover:bg-white/[0.06]",
                  isActive ? "text-white" : "text-slate-300",
                ].join(" ")}
              >
                <span
                  className={[
                    "text-[11px] tracking-widest tabular-nums",
                    isActive ? "text-blue-300" : "text-slate-400",
                  ].join(" ")}
                >
                  {it.num}
                </span>
                <span className="text-xs">{it.label}
                </span>
                <span
                  className={[
                    "ml-auto h-1.5 w-1.5 rounded-full transition",
                    isActive ? "bg-blue-400" : "bg-white/30 group-hover:bg-white/60",
                  ].join(" ")}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default function HomePage() {
  const sections = [
    { id: "home",     label: "Start",       num: "01" },
    { id: "services", label: "Leistungen",  num: "02" },
    { id: "about",    label: "Über uns",    num: "03" },
    { id: "contact",  label: "Kontakt",     num: "04" },
  ];

  return (
    <>
      <Topbar />
      <SloganBar />

      {/* Nummern-Navigation wie bei Ampersand (rechts fixiert) */}
      <SectionNav items={sections} />

      <main className="py-10">
        {/* 01 HOME — großer Hero + Marquee */}
        <section id="home" className="scroll-mt-24">
          <ParallaxHero />
          <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8 mt-8">
            <Marquee text="Sie wollen Ihr Business smarter, schneller und profitabler machen – starten wir heute!" />
          </div>
        </section>

        {/* 02 SERVICES — UNSERE LEISTUNGEN (4 Karten, größer) */}
        <section id="services" className="scroll-mt-24 mt-12">
          <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-semibold transition-colors hover:text-blue-300/90">
                Unsere Leistungen
              </h2>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
              {[
                { t: "KI-Integrationen & Anwendungen", d: "Supportbots, Automatisierung, Analysen" },
                { t: "Website-Erstellung", d: "SEO-stark, schnell, konvertierend" },
                { t: "Web-App-Entwicklung", d: "Dashboards, Tools, SaaS" },
                { t: "App-Entwicklung", d: "iOS & Android (React Native/Expo)" }, // ← NEU (4. Leistung)
              ].map((c, i) => (
                <Reveal key={c.t} delay={0.05 * i}>
                  <Link href="/leistungen" className="group block">
                    <div
                      className={[
                        "relative overflow-hidden rounded-3xl",
                        "border border-white/10 bg-white/[0.045]",
                        "p-6 md:p-8 xl:p-10 min-h-[170px] md:min-h-[190px]", // ← größer
                        "flex flex-col justify-between",
                        "transition-all duration-300 hover:-translate-y-1 hover:border-transparent",
                        "platinum-hover",
                      ].join(" ")}
                    >
                      <div>
                        <div className="text-lg md:text-xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-black">
                          {c.t}
                        </div>
                        <div className="mt-1 text-slate-300 transition-colors duration-300 group-hover:text-slate-900">
                          {c.d}
                        </div>
                      </div>

                      <span className="mt-4 inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-300 group-hover:text-black">
                        Mehr erfahren
                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M5 12h14M13 5l7 7-7 7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      {/* Fokus-Ring für Tastatur */}
                      <span className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-blue-500/0 group-focus-visible:ring-2 group-focus-visible:ring-blue-400/60" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 03 ABOUT — Neuer Über uns Abschnitt mit BlurReveal */}
        <section id="about" className="scroll-mt-24">
          <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8 mt-12">
            <BlurReveal delay={0.05}>
              <Link
                href="/ueber-uns"
                aria-label="Mehr über uns"
                className={[
                  "group relative block overflow-hidden rounded-3xl",
                  "border border-white/10 bg-white/[0.04] p-6 md:p-8",
                  "transition-all duration-300 ease-out",
                  "hover:border-transparent hover:-translate-y-0.5",
                  "platinum-hover", // derselbe silberne Hover wie bei Leistungen
                ].join(" ")}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-100 transition-colors duration-300 group-hover:text-black">
                      Über uns
                    </h2>
                    <p className="mt-2 text-slate-300 transition-colors duration-300 group-hover:text-slate-900">
                      Wer wir sind, wie wir arbeiten und warum Unternehmen mit SSB messbare Ergebnisse erzielen.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2
                                 text-sm text-slate-200 transition-all duration-300 group-hover:bg-white group-hover:text-black"
                    >
                      Mehr erfahren
                      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Fokus-Ring für Tastatur */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-blue-500/0 group-focus-visible:ring-2 group-focus-visible:ring-blue-400/60" />
              </Link>
            </BlurReveal>
          </div>
        </section>

        {/* 04 CONTACT — klare CTA-Box */}
        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8 mt-16">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-navy-980 to-navy-900 p-8 text-center">
              <Reveal y={16}>
                <h2 className="text-2xl font-semibold">Projekt starten</h2>
                <p className="text-slate-300 mt-2">Erstgespräch – kostenlos & unverbindlich.</p>
                <a
                  href="/kontakt"
                  className="inline-flex mt-5 rounded-2xl bg-blue-700 hover:bg-blue-600 px-5 py-2 text-white shadow-lg shadow-blue-900/40 transition-colors"
                >
                  Angebot anfragen
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}