"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "../contexts/langContext";
import { getAuthorsForPublication } from "../data/publications";

/* ============================================================
   Icon glyphs used in the "structure of the book" cards.
   ============================================================ */
function StructureIcon({ kind, className = "w-6 h-6" }) {
  const map = {
    management: (
      <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
    ),
    economy: (
      <path d="M3 17l6-6 4 4 8-8v6h2V3h-8v2h6l-8 8-4-4-8 8z" />
    ),
    accounting: (
      <path d="M9 2h6v2h4v18H5V4h4zm2 2v2h2V4h-2zm-4 4v12h10V8H7zm2 2h6v2H9zm0 4h6v2H9zm0 4h4v2H9z" />
    ),
    analysis: (
      <path d="M5 9h4v12H5zm6-6h4v18h-4zm6 10h4v8h-4z" />
    ),
    data: (
      <path d="M4 3h16v4H4zm0 6h16v4H4zm0 6h16v4H4zm2-10v0m0 6v0m0 6v0" />
    ),
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      {map[kind] || map.data}
    </svg>
  );
}

/* ============================================================
   Lightbox — simple overlay to preview a gallery image.
   ============================================================ */
function Lightbox({ src, onClose, isRtl }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-[fadeIn_.2s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={isRtl ? "إغلاق" : "Close"}
        className="absolute top-5 end-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/30 border border-white/40 text-white transition"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
      <img
        src={src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-[88vh] rounded-xl shadow-2xl"
      />
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ============================================================
   Main detail component.
   ============================================================ */
export default function PublicationDetail({ pub }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";

  const [activeEventKey, setActiveEventKey] = useState(
    pub?.events?.[0]?.key || null
  );
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const authors = useMemo(() => getAuthorsForPublication(pub), [pub]);

  const activeEvent = useMemo(
    () => pub?.events?.find((e) => e.key === activeEventKey) || null,
    [pub, activeEventKey]
  );

  const save = pub?.originalPrice ? pub.originalPrice - pub.price : 0;
  const savePct = pub?.originalPrice
    ? Math.round((save / pub.originalPrice) * 100)
    : 0;

  const isTranslator = pub?.authorRole === "translator";

  const t = {
    back: isRtl ? "مؤلفاتنا" : "Our Publications",
    by: isRtl ? "تأليف" : "Authored by",
    translation: isRtl ? "تعريب" : "Translated by",
    publisher: isRtl ? "الناشر" : "Publisher",
    buyDirect: isRtl ? "اطلب مباشرة من الباتل" : "Order directly from Al-Batel",
    buyJarir: isRtl ? "اشترِ من مكتبة جرير" : "Buy from Jarir Bookstore",
    save: isRtl ? "وفّر" : "Save",
    save30d: isRtl ? "عرض محدود" : "Limited offer",
 
    aboutTitle: isRtl ? "عن الكتاب" : "About the Book",
    structureTitle: isRtl ? "بنية الموسوعة" : "The Encyclopedia Structure",
    structureSub: isRtl
      ? "تتوزّع فصول الموسوعة على خمسة محاور علمية متكاملة."
      : "The encyclopedia is organized into five integrated scientific tracks.",
    authorsTitle: isRtl ? "المؤلفون" : "Authors",
    authorsTitleT: isRtl ? "فريق التعريب" : "Translation Team",
    authorsSub: isRtl
      ? "نخبة من كبار الخبراء المهنيين، بخبرة تجمع بين العمق الأكاديمي والممارسة الميدانية."
      : "A team of senior professional experts, combining academic depth with field practice.",
    credentialsTitle: isRtl ? "أبرز المؤهّلات والخبرات" : "Key Credentials",
    profileBtn: isRtl ? "الصفحة الشخصية" : "View Profile",
    audienceTitle: isRtl ? "لمن هذا الكتاب؟" : "Who is this book for?",
    eventsTitle: isRtl ? "الكتاب في المعارض والمحافل" : "The Book in Exhibitions & Events",
    eventsSub: isRtl
      ? "لقطات من حفلات التوقيع والندوات العلمية التي احتضنت الموسوعة."
      : "Moments from the signing ceremonies and scientific seminars that hosted the encyclopedia.",
    jarirTitle: isRtl
      ? "أول إصدار لنا يتصدّر المشهد في جرير"
      : "Our first publication on Jarir's stage",
    acclaimTitle: isRtl ? "الصدى الدولي" : "International Acclaim",
    finalCta: isRtl ? "جاهز لاقتناء نسختك؟" : "Ready to get your copy?",
    finalCtaSub: isRtl
      ? " إطلب مباشر من الباتل"
      : "Order directly from Al-Batel",
    partnerTitle: isRtl
      ? "بالتعاون مع دار فاروس للنشر والتوزيع"
      : "In partnership with Faros Publishing House",
  };

  if (!pub) return null;

  return (
    <div dir={dir}>
      {/* ============= HERO ============= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900">
        {/* Decorative — event photo behind (only if event exists) */}
        {pub.events?.[0]?.images?.[0] && (
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('${pub.events[0].images[0]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(6px)",
            }}
            aria-hidden
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-950/85 to-emerald-950/80" aria-hidden />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px, 34px 34px",
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
          {/* Breadcrumb */}
          <nav className="mb-6 text-xs sm:text-sm text-white/70" aria-label="Breadcrumb">
            <Link href="/publications" className="hover:text-white transition">
              {t.back}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white/90">{pub.title[lang]}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Cover */}
            <div data-aos="fade-up" className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-emerald-400/30 to-sky-400/30 blur-3xl rounded-full" aria-hidden />
                <img
                  src={pub.cover}
                  alt={pub.title[lang]}
                  className="relative max-h-[500px] w-auto drop-shadow-2xl rounded-lg transition-transform duration-700 hover:-rotate-2 hover:scale-105"
                />
              </div>
            </div>

            {/* Text */}
            <div data-aos="fade-up" data-aos-delay="150" className="order-1 lg:order-2">
              {pub.coverBadge && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1 text-[11px] font-bold text-white shadow-lg shadow-orange-600/30">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.85 1.417 8.265L12 18.897l-7.416 4.446 1.417-8.265L0 9.228l8.332-1.21z" />
                  </svg>
                  {pub.coverBadge[lang]}
                </span>
              )}

              <h1 className="mt-4 text-white font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight drop-shadow-lg">
                {pub.title[lang]}
              </h1>
              <p className="mt-3 text-emerald-200/95 text-base sm:text-lg leading-relaxed">
                {pub.subtitle[lang]}
              </p>

              {pub.originalAuthor && (
                <p className="mt-3 text-white/70 text-sm">
                  {pub.originalAuthor[lang]}
                </p>
              )}

              <p className="mt-2 text-white/80 text-sm">
                <span className="font-semibold">
                  {isTranslator ? t.translation : t.by}:
                </span>{" "}
                {authors.map((a) => a.name[lang]).join(isRtl ? " — " : " — ")}
              </p>

<div className="flex flex-col  gap-4">
                {/* Sponsor / Patronage badge */}
                {pub.sponsor && (
                <div className="mt-4 inline-flex items-start gap-2 rounded-xl bg-emerald-500/15 backdrop-blur-md border border-emerald-300/30 px-3.5 py-2 text-emerald-100 text-xs sm:text-sm font-medium leading-snug max-w-xl">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  <span>{pub.sponsor[lang]}</span>
                </div>
              )}

              {/* Price block */}
              <div className="mt-6 w-1/2  md:w-1/4 inline-flex flex-wrap items-end gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-emerald-300">
                    {pub.price}
                  </span>
                  <span className="text-base font-bold text-emerald-200">
                    {pub.currency[lang]}
                  </span>
                </div>
                {pub.originalPrice && (
                  <>
                    <span className="text-xl text-white/50 line-through">
                      {pub.originalPrice} {pub.currency[lang]}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-rose-500 px-2 py-1 text-[11px] font-bold text-white shadow-lg">
                      {t.save} {savePct}%
                    </span>
                  </>
                )}
              </div>
</div>
              {/* CTAs with distinct identities */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {/* Direct order — Al-Batel identity (green-navy) */}
                <Link
                  href={`/publications/order?book=${pub.slug}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 px-6 py-3.5 text-white font-bold shadow-xl shadow-emerald-900/40 transition-all hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                  {t.buyDirect}
                </Link>

                {/* Jarir — Jarir identity (orange) */}
                {pub.purchase?.jarir && (
                  <a
                    href={pub.purchase.jarir.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] px-6 py-3.5 text-white font-bold shadow-xl shadow-orange-900/40 transition-all hover:-translate-y-0.5"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14l-5-5h3V8h4v4h3l-5 5z" />
                    </svg>
                    {t.buyJarir}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full h-10 sm:h-14 text-slate-50"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="currentColor"
            d="M0,40 C240,90 480,0 720,30 C960,60 1200,80 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </section>

      {/* ============= ABOUT ============= */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-8" data-aos="fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {isRtl ? "عن الإصدار" : "About the edition"}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950">
              {t.aboutTitle}
            </h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="prose prose-slate max-w-none text-center text-slate-700 text-base sm:text-lg leading-relaxed"
          >
            <p>{pub.longDesc[lang]}</p>
          </div>

          {/* Highlights */}
          {pub.highlights && pub.highlights.length > 0 && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3" data-aos="fade-up" data-aos-delay="200">
              {pub.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4"
                >
                  <span className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-700 text-white shadow">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                  <p className="text-sm sm:text-base text-slate-700 font-medium leading-snug pt-1">
                    {h[lang]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============= STRUCTURE ============= */}
      {pub.structure && pub.structure.length > 0 && (
        <section className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-10" data-aos="fade-up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950">
                {t.structureTitle}
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
                {t.structureSub}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {pub.structure.map((s, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                    <StructureIcon kind={s.icon} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-blue-950 leading-snug">
                    {s.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{s.count[lang]}</p>
                  <div className={`mt-4 h-1 w-10 rounded-full bg-gradient-to-r ${s.color} group-hover:w-full transition-all duration-500`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============= AUTHORS ============= */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950">
              {isTranslator ? t.authorsTitleT : t.authorsTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              {t.authorsSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {authors.map((a, i) => {
              const isAlBatel = a.id === "batel";
              const affiliationBadgeClass = isAlBatel
                ? "bg-gradient-to-r from-blue-900 to-emerald-800 text-white"
                : "bg-gradient-to-r from-slate-800 to-slate-900 text-white";
              const haloClass = isAlBatel
                ? "from-emerald-400 to-sky-400"
                : "from-amber-400 to-rose-400";

              return (
                <div
                  key={a.id}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                  className="group relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-white to-slate-50 ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  {/* --- Header: photo + name + role (centered) --- */}
                  <div className="p-6 pb-5 text-center border-b border-slate-100">
                    <div className="relative mx-auto w-28 h-28">
                      <div
                        className={`absolute -inset-2 rounded-full bg-gradient-to-br ${haloClass} opacity-0 group-hover:opacity-100 blur transition`}
                        aria-hidden
                      />
                      <img
                        src={a.img}
                        alt={a.name[lang]}
                        className="relative w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-lg"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-blue-950 leading-tight">
                      {a.name[lang]}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-emerald-700 leading-snug px-2">
                      {a.role[lang]}
                    </p>

                    {/* Affiliation badge */}
                    {a.affiliation && (
                      <span
                        className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] sm:text-xs font-bold tracking-wide shadow-sm ${affiliationBadgeClass}`}
                      >
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M12 2L1 7l11 5 9-4.09V17h2V7zM5 13.18v4L12 21l7-3.82v-4L12 17z" />
                        </svg>
                        {a.affiliation[lang]}
                      </span>
                    )}
                  </div>

                  {/* --- Body: bio + credentials --- */}
                  <div className="flex-1 p-6 pt-5 text-start">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {a.bio[lang]}
                    </p>

                    {a.credentials && a.credentials[lang]?.length > 0 && (
                      <div className="mt-5 pt-5 border-t border-dashed border-slate-200">
                        <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-3">
                          <svg
                            className="w-3.5 h-3.5 text-emerald-600"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                          </svg>
                          {t.credentialsTitle}
                        </p>
                        <ul className="space-y-1.5">
                          {a.credentials[lang].map((c, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-700 leading-snug"
                            >
                              <span className="mt-1 flex-shrink-0 inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============= AUDIENCE ============= */}
      {pub.audience && (
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 py-14 sm:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-10" data-aos="fade-up">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                {t.audienceTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pub.audience[lang].map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 70}
                  className="flex items-start gap-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 hover:bg-white/15 transition"
                >
                  <span className="flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/90 text-white shadow">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </span>
                  <p className="text-sm sm:text-base text-white/95 font-medium pt-0.5">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============= JARIR SHOWCASE ============= */}
      {pub.jarirShowcase && pub.purchase?.jarir && (
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-14 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-up" className="order-2 md:order-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-3 py-1 text-xs font-bold text-orange-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {isRtl ? "متوفّر الآن" : "Available Now"}
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 leading-snug">
                  {pub.jarirShowcase.title[lang]}
                </h2>
                <p className="mt-4 text-slate-700 text-base leading-relaxed">
                  {pub.jarirShowcase.description[lang]}
                </p>
                <a
                  href={pub.purchase.jarir.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] px-6 py-3 text-white font-bold shadow-lg shadow-orange-900/30 transition-all hover:-translate-y-0.5"
                >
                  {t.buyJarir}
                  <svg
                    className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                  </svg>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="150" className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-300/40 to-amber-300/40 blur-2xl rounded-full" aria-hidden />
                  <img
                    src={pub.jarirShowcase.image}
                    alt="Jarir Bookstore"
                    className="relative w-full h-auto rounded-2xl shadow-2xl ring-1 ring-slate-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============= EVENTS GALLERY ============= */}
      {pub.events && pub.events.length > 0 && activeEvent && (
        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-10" data-aos="fade-up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950">
                {t.eventsTitle}
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
                {t.eventsSub}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8" data-aos="fade-up" data-aos-delay="100">
              {pub.events.map((ev) => {
                const active = ev.key === activeEventKey;
                return (
                  <button
                    key={ev.key}
                    type="button"
                    onClick={() => setActiveEventKey(ev.key)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                      active
                        ? "bg-gradient-to-r from-blue-950 to-emerald-800 text-white shadow-lg shadow-blue-900/30"
                        : "bg-white text-blue-950 ring-1 ring-slate-200 hover:ring-emerald-400 hover:text-emerald-700"
                    }`}
                  >
                    {ev.title[lang]}
                  </button>
                );
              })}
            </div>

            {/* Active event details + gallery */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <p className="text-sm font-semibold text-emerald-700">
                  {activeEvent.date[lang]}
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-blue-950">
                  {activeEvent.title[lang]}
                </h3>
                <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {activeEvent.description[lang]}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                {activeEvent.images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setLightboxSrc(img)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                    aria-label={`${activeEvent.title[lang]} — ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                    <span className="absolute bottom-3 end-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-blue-950 shadow-lg opacity-0 group-hover:opacity-100 transition">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15zM10.5 7.5v6m-3-3h6" />
                      </svg>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============= ACCLAIM / QUOTE ============= */}
      {pub.testimonialQuote && (
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-emerald-900 py-14 sm:py-20">
          <div
            className="absolute inset-0 opacity-10 mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <span
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold"
            >
              <svg className="w-3.5 h-3.5 text-emerald-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
              </svg>
              {t.acclaimTitle}
            </span>
            <blockquote
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-6 text-white text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed italic"
            >
              <span className="block text-5xl text-emerald-300 leading-none mb-3" aria-hidden>
                &ldquo;
              </span>
              {pub.testimonialQuote[lang]}
            </blockquote>
          </div>
        </section>
      )}

      {/* ============= FINAL CTA ============= */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div data-aos="fade-up" className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950">
              {t.finalCta}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              {t.finalCtaSub}
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              href={`/publications/order?book=${pub.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 px-6 py-3.5 text-white font-bold shadow-xl shadow-emerald-700/30 transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              {t.buyDirect}
            </Link>

            {pub.purchase?.jarir && (
              <a
                href={pub.purchase.jarir.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF6B00] hover:bg-[#E55F00] px-6 py-3.5 text-white font-bold shadow-xl shadow-orange-900/30 transition-all hover:-translate-y-0.5"
              >
                {t.buyJarir}
              </a>
            )}
          </div>

          {pub.publisher && (
            <p className="mt-10 text-xs text-slate-500">
              {t.partnerTitle}
            </p>
          )}

          {pub.sponsor && (
            <p className="mt-2 text-xs font-semibold text-emerald-700">
              {pub.sponsor[lang]}
            </p>
          )}
        </div>
      </section>

      <Lightbox
        src={lightboxSrc}
        onClose={() => setLightboxSrc(null)}
        isRtl={isRtl}
      />
    </div>
  );
}
