"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "../../contexts/langContext";

export default function PublicationsTeaser() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const t = {
    badge: isRtl ? "مؤلفات الباتل" : "Al-Batel Publications",
    title: isRtl
      ? "إسهاماتنا العلمية تعبر الحدود"
      : "Our scientific contributions reach beyond borders",
    sub: isRtl
      ? "كتابان من تأليف وتعريب نخبة من الخبراء المهنيين من الباتل و UHY العالمية — موسوعة اقتصاديات كرة القدم الأولى من نوعها بالعربية، ومرجع مراجعة الرقابة الداخلية والامتثال وفق إطار COSO. متوفّرة في مكتبة جرير، ومتاحة للطلب المباشر."
      : "Two books authored and translated by a team of leading experts from Al-Batel and UHY Global — the first-of-its-kind Arabic encyclopedia on football economics, and a professional reference on internal control audit under COSO. Available at Jarir Bookstore and for direct order.",
    cta: isRtl ? "اكتشف مؤلفاتنا" : "Explore our publications",

    chips: isRtl
      ? ["19 فصلًا علميًا", "جرير", "معرض القاهرة 2026", "إطار COSO الجديد"]
      : ["19 chapters", "Jarir", "Cairo Fair 2026", "New COSO Framework"],
  };

  return (
    <section
      dir={dir}
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative dots */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "28px 28px, 34px 34px",
        }}
        aria-hidden
      />
      {/* Animated gradient blob */}
      <div
        className="absolute -top-20 -start-20 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-20 -end-20 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl animate-pulse"
        style={{ animationDuration: "10s" }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Books image */}
          <div data-aos="fade-up" className="relative flex justify-center order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/40 to-sky-400/40 blur-3xl rounded-full" aria-hidden />
            <img
              src="/Books/Books2.png"
              alt={
                isRtl
                  ? "مؤلفات الباتل — كتابان في الاقتصاد الرياضي والمراجعة الداخلية"
                  : "Al-Batel Publications — Football Economics and Internal Audit"
              }
              className="relative w-full max-w-xl drop-shadow-2xl transition-transform duration-700 hover:scale-105"
            />
            {/* Floating badge */}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="absolute top-4 end-4 lg:top-6 lg:end-10 z-10 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1.5 text-[11px] sm:text-xs font-bold text-white shadow-xl shadow-orange-900/40"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.85 1.417 8.265L12 18.897l-7.416 4.446 1.417-8.265L0 9.228l8.332-1.21z" />
              </svg>
              {isRtl ? "الأعلى مبيعًا" : "Best Seller"}
            </div>
          </div>

          {/* Text */}
          <div data-aos="fade-up" data-aos-delay="150" className="order-1 lg:order-2 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-semibold">
              <svg className="w-3.5 h-3.5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z" />
              </svg>
              {t.badge}
            </span>

            <h2 className="mt-5 text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
              {t.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed max-w-xl">
              {t.sub}
            </p>

            {/* Trust chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {t.chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 text-[11px] sm:text-xs font-medium text-white/90"
                >
                  <svg className="w-3 h-3 text-emerald-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/publications"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 px-6 py-3 text-white font-bold shadow-xl shadow-emerald-900/40 transition-all hover:-translate-y-0.5"
              >
                {t.cta}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isRtl ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"
                  }`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
