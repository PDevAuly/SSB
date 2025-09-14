"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

type Logo = { src: string; alt: string };

// CSS-Custom-Var sauber typisieren (kein any)
type CSSVars = CSSProperties & { ["--t"]?: string };

export default function LogoLoop({
  items,
  speed = 45,
  direction = "left", // "left" = rechts→links, "right" = links→rechts
  className = "",
}: {
  items: Logo[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}) {
  // nahtlose Schleife
  const row = [...items, ...items];
  const dirClass = direction === "right" ? "dir-right" : "";

  // CSS-Var ohne any
  const style: CSSVars = { ["--t"]: `${speed}s` };

  return (
    <div className={`logo-loop ${dirClass} ${className}`} style={style}>
      <div className="logo-track">
        {row.map((l, i) => (
          <div key={`${l.alt}-${i}`} className="logo-item flex items-center">
            <Image
              src={l.src}
              alt={l.alt}
              width={120}
              height={40}
              loading="lazy"
              // Größe/Look: klein, responsiv, dezenter Hover
              className="h-4 md:h-5 w-auto opacity-70 transition-opacity duration-200 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
