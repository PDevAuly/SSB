"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

export default function ParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // sanfter Parallax nur für die Headline
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  // Hover-Spot im Logo-Bereich
  const haloRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // MotionValues explizit typisieren -> kein "any"
  const mx = useMotionValue<number>(0);
  const my = useMotionValue<number>(0);
  const x = useSpring(mx, { stiffness: 300, damping: 40, mass: 0.4 });
  const y = useSpring(my, { stiffness: 300, damping: 40, mass: 0.4 });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = haloRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section
      ref={ref}
      className={[
        "relative isolate w-full overflow-hidden bg-transparent",
        "before:content-[''] before:absolute before:left-1/2 before:top-[46%] before:-translate-x-1/2 before:-translate-y-1/2",
        "before:h-[64vmin] before:w-[64vmin] before:bg-no-repeat before:bg-center before:bg-contain",
        "before:[background-image:url('/ssb-logo.png')] before:opacity-25 before:blur-[0.5px] before:z-0",
      ].join(" ")}
    >
      {/* Sensor-Fläche über dem Content */}
      <div
        ref={haloRef}
        className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 h-[64vmin] w-[64vmin] z-30 touch-none"
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        onPointerMove={onPointerMove}
      />

      {/* der weiche Licht-Spot, folgt der Maus */}
      <motion.div className="absolute z-40 pointer-events-none left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          style={{ left: x, top: y }}
          animate={{ opacity: hovered ? 0.35 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none w-[22vmin] h-[22vmin]"
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.12) 55%, transparent 70%)",
              mixBlendMode: "screen",
              filter: "blur(30px)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Inhalt */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center">
        <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-6 sm:px-10 md:px-14 text-center -translate-y-6 md:-translate-y-8">
          <motion.h1
            style={{ y: titleY }}
            className="text-4xl md:text-7xl font-bold tracking-tight text-slate-100"
          >
            Soulé <span className="text-blue-300/90">Smart</span> Business.
          </motion.h1>
          <p className="mt-4 text-slate-300/90">
            Wir bauen moderne Websites, Web-Apps & Mobile Apps und integrieren
            KI-Lösungen.
          </p>
        </div>
      </div>
    </section>
  );
}
