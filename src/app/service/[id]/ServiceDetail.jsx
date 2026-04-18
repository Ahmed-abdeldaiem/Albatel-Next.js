"use client";

import React, { useCallback, useContext, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "../../contexts/langContext";

/* =========================================================
   Static contact info — kept outside the component so React
   doesn't re-allocate it on every render.
   ========================================================= */
const CONTACT = {
  phone: "+966550554262",
  phoneDisplay: "+966 55 055 4262",
  email: "albatelcpa@albatelcpa.com",
  whatsapp: "https://wa.me/966550554262",
};

/* =========================================================
   Main component
   ---------------------------------------------------------
   Receives a single `service` object (server-fetched in
   ./page.js). Renders a single JSX tree for AR/EN using:
     - `dir` from LanguageContext
     - helper `L(obj)` that picks the current language value
       from an object like { ar: "...", en: "..." }.
   ========================================================= */
export default function ServiceDetail({ service }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";

  /* Pick the localized value from { ar, en } objects, with
     graceful fallbacks. Returns "" if nothing is available. */
  const L = (val) => {
    if (val == null) return "";
    if (typeof val === "string") return val;
    if (typeof val === "object") return val[lang] ?? val.ar ?? val.en ?? "";
    return "";
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [service?.id]);

  const scrollToDetails = useCallback(() => {
    document
      .getElementById("service-details")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  /* ---- Derived, localized data (computed once per render) ---- */
  const title = L(service?.title);
  const subtitle = L(service?.subtitle);
  const intro = L(service?.overview?.intro);
  const heroImage = service?.heroImage;
  const infoCards = service?.infoCards || [];
  const keyHighlights = service?.overview?.keyHighlights || [];
  const servicesList = service?.servicesList || [];
  const steps = service?.steps || [];
  const valuePoints = service?.valueProposition?.points || [];
  const valueTitle = L(service?.valueProposition?.title);
  const ctaHeadline = L(service?.cta?.headline);
  const ctaDescription = L(service?.cta?.description);

  /* ---- UI strings ---- */
  const t = {
    cpa: isRtl ? "محاسبون ومراجعون قانونيون" : "Certified Public Accountants",
    breadcrumb: {
      home: isRtl ? "الرئيسية" : "Home",
      services: isRtl ? "الخدمات" : "Services",
    },
    detailsBtn: isRtl ? "تفاصيل الخدمة" : "Service Details",
    rfp: isRtl ? "اطلب عرض سعر" : "Request Proposal",
    overviewEyebrow: isRtl ? "نظرة عامة" : "Overview",
    aboutHeading: isRtl ? "عن الخدمة" : "About the Service",
    highlights: isRtl
      ? "أبرز محاور العمل والتطوير"
      : "Key Areas of Work & Development",
    consulting: isRtl ? "الخدمات الاستشارية" : "Consulting Services",
    steps: isRtl ? "أبرز مراحل العمل" : "Key Stages of Work",
    whyUsEyebrow: isRtl ? "لماذا تختارنا" : "Why Choose Us",
    whyUsFallback: isRtl ? "لماذا الباتل" : "Why Al-Batel",
    cta: {
      eyebrow: isRtl ? "ابدأ الآن" : "Get Started",
      contact: isRtl ? "اطلب استشارتك الآن" : "Request a Consultation",
      fallback: isRtl
        ? "تواصل معنا اليوم لنساعدك في تحقيق أهدافك."
        : "Contact us today and let us help you achieve your goals.",
      call: isRtl ? "اتصل بنا" : "Call us",
      email: isRtl ? "راسلنا" : "Email us",
      visit: isRtl ? "نتشرف بزيارتكم" : "Visit us",
      visitSub: isRtl ? "في جميع فروعنا" : "At any of our branches",
    },
  };

  return (
    <section
      dir={dir}
      className="relative bg-white"
      aria-labelledby="service-title"
    >
      {/* ===================================================
          1) HERO
          =================================================== */}
      <header className="relative w-full overflow-hidden">
        <img
          src={
            heroImage ||
            "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/about.png"
          }
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/75 to-green-800/55" />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px, 34px 34px",
          }}
        />

        {/* CPA top badge */}
        <div
          data-aos="fade-down"
          className="absolute top-20 sm:top-24 md:top-32 start-4 md:start-10 z-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {t.cpa}
          </span>
        </div>

        {/* Vision 2030 badge */}
        <img
          data-aos="fade-up"
          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
          className="hidden md:block w-[130px] lg:w-[150px] absolute bottom-6 end-6 bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-2.5 z-20"
          alt={isRtl ? "رؤية المملكة 2030" : "Saudi Vision 2030"}
          loading="lazy"
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-32 pb-24 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32 text-center">
          {/* Visible breadcrumb (SEO-friendly, keeps context) */}
          <nav
            aria-label={isRtl ? "فتات التنقل" : "Breadcrumb"}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/75 mb-4"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              {t.breadcrumb.home}
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="hover:text-white transition-colors duration-300"
            >
              {t.breadcrumb.services}
            </Link>
            <span>/</span>
            <span className="text-white font-semibold truncate max-w-[220px] sm:max-w-xs">
              {title}
            </span>
          </nav>

          <h1
            id="service-title"
            data-aos="fade-up"
            className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight drop-shadow-lg"
          >
            {title}
          </h1>

          {subtitle && (
            <p
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-5 mx-auto max-w-3xl text-white/90 text-sm sm:text-base lg:text-xl leading-relaxed"
            >
              {subtitle}
            </p>
          )}

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={scrollToDetails}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.detailsBtn}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 animate-bounce"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <Link
              href="/rfp"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
            >
              {t.rfp}
            </Link>
          </div>
        </div>

        {/* Wave divider */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            d="M0,48 C240,90 480,90 720,60 C960,30 1200,30 1440,60 L1440,90 L0,90 Z"
          />
        </svg>
      </header>

      {/* ===================================================
          2) OVERVIEW (About the Service + Info Cards)
          =================================================== */}
      <section
        id="service-details"
        className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-20 lg:py-24"
        aria-labelledby="overview-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text column */}
            <div data-aos="fade-up" className={isRtl ? "lg:order-2" : ""}>
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
                {t.overviewEyebrow}
              </span>
              <h2
                id="overview-title"
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
              >
                {t.aboutHeading}
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />

              {intro && (
                <p className="mt-6 text-slate-700 text-base sm:text-lg leading-loose text-justify">
                  {intro}
                </p>
              )}

              {infoCards.length > 0 && (
                <ul className="mt-8 space-y-3">
                  {infoCards.map((card, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white ring-1 ring-slate-200 hover:ring-green-500 hover:shadow-md transition-all duration-300"
                    >
                      <span className="shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center shadow-md">
                        <CheckIcon className="w-4 h-4" />
                      </span>
                      <div className="min-w-0">
                        {L(card?.title) && (
                          <h3 className="text-sm sm:text-base font-semibold text-blue-950">
                            {L(card.title)}
                          </h3>
                        )}
                        {L(card?.value) && (
                          <p className="mt-0.5 text-sm text-slate-600 leading-relaxed">
                            {L(card.value)}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Image column */}
            {heroImage && (
              <div
                data-aos="fade-up"
                data-aos-delay="120"
                className={isRtl ? "lg:order-1" : ""}
              >
                <div className="relative rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-2xl">
                  <img
                    src={heroImage}
                    alt={title}
                    loading="lazy"
                    className="w-full h-[280px] sm:h-[380px] lg:h-[440px] object-cover"
                  />
                  <div className="absolute bottom-4 start-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-blue-950 text-xs font-semibold shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      {t.cpa}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===================================================
          3) KEY HIGHLIGHTS (numbered cards)
          =================================================== */}
      {keyHighlights.length > 0 && (
        <section
          className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-14 sm:py-20"
          aria-labelledby="highlights-title"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
              <h2
                id="highlights-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
              >
                {t.highlights}
              </h2>
              <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {keyHighlights.map((item, i) => (
                <article
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={(i % 3) * 80}
                  className="group relative p-6 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white font-bold text-lg shadow-md">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-blue-950">
                    {L(item?.title)}
                  </h3>
                  {L(item?.description) && (
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {L(item.description)}
                    </p>
                  )}
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================
          4) CONSULTING SERVICES LIST
          =================================================== */}
      {servicesList.length > 0 && (
        <section
          className="bg-white py-14 sm:py-20"
          aria-labelledby="consulting-title"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
              <h2
                id="consulting-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
              >
                {t.consulting}
              </h2>
              <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {servicesList.map((item, i) => (
                <article
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={(i % 2) * 80}
                  className="group flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-200 hover:ring-green-500 hover:shadow-lg transition-all duration-300"
                >
                  <span className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <CheckIcon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-blue-950">
                      {L(item?.title)}
                    </h3>
                    {L(item?.description) && (
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        {L(item.description)}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================================================
          5) STEPS (vertical timeline)
          =================================================== */}
      {steps.length > 0 && (
        <section
          className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-14 sm:py-20"
          aria-labelledby="steps-title"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
            <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
              <h2
                id="steps-title"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
              >
                {t.steps}
              </h2>
              <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            </div>

            <ol className="relative">
              {/* vertical line */}
              <span
                aria-hidden="true"
                className={`absolute top-2 bottom-2 ${
                  isRtl ? "right-5" : "left-5"
                } w-px bg-gradient-to-b from-blue-300 via-green-300 to-blue-300`}
              />

              {steps.map((step, i) => (
                <li
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                  className={`relative flex gap-4 sm:gap-6 ${
                    isRtl ? "pr-14" : "pl-14"
                  } pb-6 last:pb-0`}
                >
                  <span
                    className={`absolute top-0 ${
                      isRtl ? "right-0" : "left-0"
                    } w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center font-bold shadow-lg ring-4 ring-white`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 p-5 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-base sm:text-lg font-bold text-blue-950">
                      {L(step?.title)}
                    </h3>
                    {L(step?.content) && (
                      <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {L(step.content)}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ===================================================
          6) VALUE PROPOSITION (Why Choose Us)
          =================================================== */}
      {valuePoints.length > 0 && (
        <section
          className="bg-white py-14 sm:py-20"
          aria-labelledby="value-title"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
                {t.whyUsEyebrow}
              </span>
              <h2
                id="value-title"
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
              >
                {valueTitle || t.whyUsFallback}
              </h2>
              <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {valuePoints.map((pt, i) => (
                <li
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={(i % 3) * 60}
                  className="group flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-white ring-1 ring-slate-200 hover:ring-green-500 hover:shadow-md transition-all duration-300"
                >
                  <span className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-300">
                    <CheckIcon className="w-4 h-4" />
                  </span>
                  <p className="text-blue-950 font-semibold text-sm sm:text-base leading-relaxed">
                    {L(pt)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===================================================
          7) CTA (Get in touch)
          =================================================== */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="cta-title"
      >
        <div className="relative bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg-service1.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/55 to-blue-700/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-blue-950/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
            <div data-aos="fade-up" className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white/90 text-xs sm:text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {t.cta.eyebrow}
              </span>

              <h2
                id="cta-title"
                className="mt-5 text-2xl sm:text-3xl lg:text-5xl font-bold text-white drop-shadow-lg"
              >
                {ctaHeadline || t.cta.contact}
              </h2>

              <p className="mt-4 mx-auto max-w-2xl text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed">
                {ctaDescription || t.cta.fallback}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {t.cta.contact}
                  <span
                    className={`transition-transform duration-300 ${
                      isRtl
                        ? "group-hover:-translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  >
                    {isRtl ? "←" : "→"}
                  </span>
                </Link>

                <Link
                  href="/rfp"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
                >
                  {t.rfp}
                </Link>
              </div>
            </div>

            {/* Contact methods */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <ContactMethod
                label={t.cta.call}
                value={CONTACT.phoneDisplay}
                href={`tel:${CONTACT.phone}`}
                tone="green"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.272.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                }
              />
              <ContactMethod
                label={t.cta.email}
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
                tone="blue"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                }
              />
              <ContactMethod
                label={t.cta.visit}
                value={t.cta.visitSub}
                tone="amber"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          8) SEO — Structured Data (Service + Breadcrumb)
          =================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: title,
                description: intro || subtitle || "",
                serviceType: title,
                areaServed: "SA",
                url: `https://www.albatelcpa.com/service/${service?.id}`,
                provider: {
                  "@type": "AccountingService",
                  name: isRtl
                    ? "الباتل وشركاؤه للاستشارات المهنية"
                    : "Al-Batel & Co. Professional Services",
                  url: "https://www.albatelcpa.com",
                  telephone: CONTACT.phone,
                  email: CONTACT.email,
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: t.breadcrumb.home,
                    item: "https://www.albatelcpa.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: t.breadcrumb.services,
                    item: "https://www.albatelcpa.com/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: title,
                    item: `https://www.albatelcpa.com/service/${service?.id}`,
                  },
                ],
              },
            ],
          }),
        }}
      />
    </section>
  );
}

/* =========================================================
   Helper: CheckIcon — used in multiple sections.
   ========================================================= */
function CheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* =========================================================
   Helper: ContactMethod card for the CTA section.
   ========================================================= */
function ContactMethod({ icon, label, value, href, tone = "blue" }) {
  const tones = {
    blue: "from-blue-500 to-blue-700",
    green: "from-green-500 to-green-700",
    amber: "from-amber-500 to-amber-700",
  };

  const body = (
    <div className="group h-full flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-300">
      <span
        className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${tones[tone]} shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </span>
      <p className="text-white/80 text-xs sm:text-sm font-medium mt-1">
        {label}
      </p>
      <p
        className="text-white font-semibold text-sm sm:text-base tracking-wide break-all"
        dir="ltr"
      >
        {value}
      </p>
    </div>
  );

  return href ? (
    <a href={href} className="block h-full">
      {body}
    </a>
  ) : (
    <div className="h-full">{body}</div>
  );
}
