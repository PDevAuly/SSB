import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSB – Soulé Smart Business",
  description: "Websites, Web-Apps, Apps & KI-Integrationen – Smart. Schnell. Sicher.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-navy-990 text-slate-100 selection:bg-blue-600/40 selection:text-white">
        {/* Hintergrund-Flares */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full blur-3xl"
               style={{ background: "radial-gradient(closest-side, #0c1a33, transparent 70%)" }} />
          <div className="absolute -bottom-24 -right-16 h-[28rem] w-[28rem] rounded-full blur-3xl"
               style={{ background: "radial-gradient(closest-side, #081225, transparent 70%)" }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.035),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,.025),transparent_30%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,.02),transparent_30%)]" />
          <div className="absolute inset-0 bg-black/15" />
        </div>
        {children}
      </body>
    </html>
  );
}
