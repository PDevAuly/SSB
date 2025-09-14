"use client";

import { motion } from "framer-motion";
import { useState, type PropsWithChildren } from "react";

export function MotionCard({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className={[
        "group relative rounded-2xl border border-white/10 bg-white/[0.04] p-5",
        "backdrop-blur-sm transition-colors",
        className,
      ].join(" ")}
      whileHover={{
        y: -6,
        rotateX: 2,
        rotateY: -2,
        backgroundColor: "rgba(255,255,255,0.08)",
        borderColor: "rgba(255,255,255,0.22)",
        boxShadow:
          "0 18px 45px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.35)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.6 }}
    >
      {/* zarter Sheen, der beim Hover wandert */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        animate={{ x: hover ? "30%" : "-30%", opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          background:
            "linear-gradient(115deg, transparent 10%, rgba(255,255,255,.12) 30%, transparent 60%)",
          mixBlendMode: "soft-light",
        }}
      />
      {children}
    </motion.div>
  );
}
