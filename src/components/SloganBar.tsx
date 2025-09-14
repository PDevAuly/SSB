"use client";

export default function SloganBar() {
  return (
    <div className="w-full">
      <div className="mx-auto w-[min(1600px,calc(100vw-2rem))] px-4 sm:px-6 lg:px-8">
        {/* größer + kräftiger; Hover wirkt auf die gesamte Zeile dank 'slogan-group' */}
        <p className="slogan-group py-4 text-center text-xl md:text-2xl lg:text-3xl font-semibold text-slate-200 leading-snug">
          Mit <span className="slogan-link slogan-underline">KI</span> die Zukunft gestalten – Ihr{" "}
          <span className="slogan-link slogan-underline">smarter Partner</span>.
        </p>
      </div>
    </div>
  );
}
