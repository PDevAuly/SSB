"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BlurBlock({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18, filter: "blur(14px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={[
        "group relative overflow-hidden rounded-3xl",
        "glass-card border border-white/10 backdrop-blur-md", // Glass + Border
        className,
      ].join(" ")}
      style={{ willChange: "opacity, transform, filter" }}
    >
      {/* dezentes Glow beim Hover */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(60%_40%_at_50%_0%,rgba(59,130,246,.18),transparent)]" />
      {children}
    </motion.div>
  );
}
