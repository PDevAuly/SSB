"use client";

import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-navy-990/90 to-navy-990/35 backdrop-blur">
      <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8">
        {/* höhere Topbar, damit das größere Logo sauber Platz hat */}
        <div className="h-20 md:h-24 grid grid-cols-3 items-center">
          <div />

          {/* zentriertes, größeres Logo */}
          <div className="justify-self-center">
            <Link href="/" aria-label="Startseite" className="block">
              <Image
                src="/ssb-logo.png"
                alt="SSB Logo"
                width={128}
                height={128}
                priority
                className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-contain select-none"
              />
            </Link>
          </div>

          {/* CTA rechts */}
          <div className="justify-self-end">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-2xl bg-blue-700 hover:bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-900/40"
            >
              Angebot anfragen
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
