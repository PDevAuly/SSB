"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Headline-Parallax (leicht)
  const titleY = useTransform(scrollYProgress, [0, 1], ["-1%", "-5%"]);

  return (
    <section
      ref={ref}
      className={[
        "relative w-full overflow-hidden bg-transparent",
        // 🔵 Watermark-Logo: eigener „Layer“ mit fester Größe in vmin, sauber zentriert
        "before:content-[''] before:absolute before:left-1/2 before:top-[46%] before:-translate-x-1/2 before:-translate-y-1/2",
        "before:h-[98vmin] before:w-[98vmin]",           // Größe des Logos → garantiert voll sichtbar
        "before:bg-no-repeat before:bg-center before:bg-contain",
        "before:[background-image:url('/ssb-logo.png')]",
        "before:opacity-20 before:blur-[1px]",
      ].join(" ")}
    >
      {/* Inhalt */}
      <div className="relative z-10 flex items-center justify-center min-h-[100svh]">
        <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-6 sm:px-10 md:px-14 text-center -translate-y-6 md:-translate-y-8">
          <motion.h1
            style={{ y: titleY }}
            className="text-4xl md:text-7xl font-bold tracking-tight text-slate-100"
          >
            Soulé <span className="text-blue-300/90">Smart</span> Business.
          </motion.h1>

          <p className="mt-4 text-slate-300/90">
            Wir bauen moderne Websites, Web-Apps & Mobile Apps und integrieren KI-Lösungen.
          </p>
        </div>
      </div>
    </section>
  );
}
