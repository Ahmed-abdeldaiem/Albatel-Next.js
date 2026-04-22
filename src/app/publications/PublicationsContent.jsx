"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "../contexts/langContext";
import { PUBLICATIONS } from "../data/publications";

export default function PublicationsContent() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const t = {
    badge: isRtl ? "إصداراتنا العلمية" : "Our Scientific Works",
    heroTitle: isRtl
      ? "من خبرة نخبة من المهنيين… إلى مكتبتك"
      : "From a team of leading experts to your shelf",
    heroSub: isRtl
      ? "مؤلفات وموسوعات علمية من تأليف وتعريب نخبة من الخبراء من الباتل و UHY العالمية، تُثري المكتبة العربية في الاقتصاد الرياضي والمراجعة الداخلية والامتثال."
      : "Scientific publications and encyclopedias authored and translated by a team of leading experts from Al-Batel and UHY Global, enriching the Arabic library in sports economics, internal control, and compliance.",
    sectionTitle: isRtl ? "اختر إصدارك" : "Choose your publication",
    sectionSub: isRtl
      ? "اضغط على أي كتاب لعرض تفاصيله الكاملة، المؤلفين، فصوله، ومتطلبات الحصول عليه."
      : "Click any book to see its full details, authors, chapters, and how to get your copy.",
    learnMore: isRtl ? "اعرف أكتر" : "Learn more",
    buyDirect: isRtl ? "اطلب مباشرة" : "Order directly",
    buyJarir: isRtl ? "شراء من جرير" : "Buy from Jarir",
    by: isRtl ? "تأليف" : "by",
    translation: isRtl ? "تعريب" : "translated by",
    save: isRtl ? "وفّر" : "Save",
    authorsList: isRtl
      ? "باتل الباتل، محمد عرفة، ووليد منير"
      : "Batel Al-Batel, Mohamed Arafa, and Walid Munir",
  };

  return (
    <div dir={dir}>
      {/* ============= HERO ============= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900">
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px, 34px 34px",
          }}
          aria-hidden
        />
        {/* Floating book image */}
        <img
          src="/Books/Books2.png"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -bottom-10 end-0 w-[340px] max-w-[45%] opacity-40 drop-shadow-2xl sm:opacity-60 md:w-[460px] md:opacity-80 lg:w-[540px]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-3xl">
            <span
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t.badge}
            </span>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-5 text-white font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight drop-shadow-lg"
            >
              {t.heroTitle}
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-4 max-w-2xl text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              {t.heroSub}
            </p>

            {/* Trust badges row */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {[
                { text: isRtl ? "مكتبة جرير" : "Jarir Bookstore" },
                { text: isRtl ? "معرض القاهرة 2026" : "Cairo Fair 2026" },
                { text: isRtl ? "معرض الرياض" : "Riyadh Fair" },
                { text: isRtl ? "دار فاروس" : "Faros Publishing" },
              ].map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 text-[11px] sm:text-xs font-medium text-white/90"
                >
                  <svg className="w-3 h-3 text-emerald-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  {b.text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* bottom wave */}
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

      {/* ============= BOOK CARDS ============= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-14" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950">
              {t.sectionTitle}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              {t.sectionSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {PUBLICATIONS.map((pub, idx) => {
              const roleLabel = pub.authorRole === "translator" ? t.translation : t.by;
              const save = pub.originalPrice ? pub.originalPrice - pub.price : 0;
              const savePct = pub.originalPrice
                ? Math.round((save / pub.originalPrice) * 100)
                : 0;

              return (
                <article
                  key={pub.slug}
                  data-aos="fade-up"
                  data-aos-delay={idx * 120}
                  className="group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200/80 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Ribbon */}
                  {pub.coverBadge && (
                    <span className="absolute top-5 start-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-3 py-1 text-[11px] font-bold text-white shadow-lg shadow-orange-600/30">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.85 1.417 8.265L12 18.897l-7.416 4.446 1.417-8.265L0 9.228l8.332-1.21z" />
                      </svg>
                      {pub.coverBadge[lang]}
                    </span>
                  )}

                  {/* Cover */}
                  <div className="relative h-[300px] sm:h-[340px] overflow-hidden bg-gradient-to-br from-slate-100 via-white to-slate-100 flex items-center justify-center">
                    <img
                      src={pub.cover}
                      alt={pub.title[lang]}
                      className="h-full w-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Decorative gradient blur */}
                    <div
                      className="absolute inset-x-0 -bottom-10 h-20 bg-gradient-to-t from-white to-transparent"
                      aria-hidden
                    />
                  </div>

                  {/* Body */}
                  <div className="flex-1 flex flex-col p-5 sm:p-7">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-950 leading-snug">
                      {pub.title[lang]}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {pub.subtitle[lang]}
                    </p>

                    <p className="mt-3 text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">{roleLabel}:</span>{" "}
                      {t.authorsList}
                    </p>

                    <p className="mt-4 text-sm text-slate-700 leading-relaxed line-clamp-3">
                      {pub.shortDesc[lang]}
                    </p>

                    {/* Price */}
                    <div className="mt-5 flex items-end gap-3 flex-wrap">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-emerald-700">
                          {pub.price}
                        </span>
                        <span className="text-sm font-semibold text-emerald-700">
                          {pub.currency[lang]}
                        </span>
                      </div>
                      {pub.originalPrice && (
                        <>
                          <span className="text-lg text-slate-400 line-through">
                            {pub.originalPrice}
                          </span>
                          <span className="inline-flex items-center rounded-md bg-rose-100 px-2 py-0.5 text-[11px] font-bold text-rose-700">
                            {t.save} {savePct}%
                          </span>
                        </>
                      )}
                    </div>

                    {/* CTAs */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-2.5 pt-5 border-t border-slate-100">
                      <Link
                        href={`/publications/${pub.slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-950 hover:bg-blue-900 px-4 py-2.5 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-blue-900/30"
                      >
                        {t.learnMore}
                        <svg
                          className={`w-4 h-4 ${isRtl ? "rotate-180" : ""} group-hover:translate-x-0.5 transition-transform`}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                        </svg>
                      </Link>

                      <Link
                        href={`/publications/order?book=${pub.slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-700/25 transition-all"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M7 4V2h10v2h4v2h-2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6H3V4h4zm2 4v10h2V8H9zm4 0v10h2V8h-2z" />
                        </svg>
                        {t.buyDirect}
                      </Link>

                      {pub.purchase?.jarir && (
                        <a
                          href={pub.purchase.jarir.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-orange-500 bg-white hover:bg-orange-50 px-4 py-2 text-sm font-bold text-orange-700 transition-all hover:shadow-md"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                          </svg>
                          {t.buyJarir}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============= CREDIBILITY STRIP ============= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-emerald-900 py-12 sm:py-16">
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <blockquote
            data-aos="fade-up"
            className="text-white/95 text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed max-w-4xl mx-auto italic"
          >
            <span className="block text-5xl text-emerald-300 leading-none mb-3" aria-hidden>
              &ldquo;
            </span>
            {isRtl
              ? "إصداراتنا ليست مجرد كتب — بل امتداد لخبرة ميدانية متراكمة، نضعها بين يدي كل باحث ومهنيّ وصانع قرار."
              : "Our publications are more than books — they are an extension of accumulated field expertise, placed in the hands of every researcher, professional, and decision-maker."}
          </blockquote>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-6 text-emerald-200/90 text-sm font-semibold tracking-wider uppercase"
          >
            —{" "}
            {isRtl
              ? "فريق المؤلفين والمُعرّبين"
              : "The Authors & Translators"}
          </p>
        </div>
      </section>
    </div>
  );
}
