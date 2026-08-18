"use client";

import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "./contexts/langContext";

import Branches from "./components/Branches/Branches";
import Goal from "./components/Goal/Goal";
import MainPagePartners from "./components/MainPagePartners/MainPagePartners";
import Manager from "./components/Manager/Manager";
import Message from "./components/Message/Message";
import ContactUs from "./contact/ContactUs";
import PublicationsTeaser from "./components/PublicationsTeaser/PublicationsTeaser";
import ServiceDesc from "./components/ServiceDesc/ServiceDesc";
import Vision from "./components/Vision/Vision";

/* =========================================================
   Static data outside the component.
   ========================================================= */
const TOTAL_SLIDES = 3;
const AUTOPLAY_MS = 8000;

/* =========================================================
   Main component — unified AR/EN home page.
   ========================================================= */
export default function HomeContent({ branches = [] }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const autoPlayRef = useRef(null);
  const touchStartX = useRef(null);

  /* ---- Slide navigation ---- */
  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i === TOTAL_SLIDES - 1 ? 0 : i + 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? TOTAL_SLIDES - 1 : i - 1));
  }, []);

  /* In RTL, the visual arrow meaning flips — the "next" icon is the start-side arrow. */
  const goVisualStart = isRtl ? goNext : goPrev;
  const goVisualEnd = isRtl ? goPrev : goNext;

  /* ---- Autoplay ---- */
  useEffect(() => {
    autoPlayRef.current = goNext;
  }, [goNext]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
    const refresh = () => AOS.refresh();
    const id = window.requestAnimationFrame(refresh);
    const t = window.setTimeout(refresh, 400);
    return () => {
      window.cancelAnimationFrame(id);
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const interval = setInterval(() => {
      autoPlayRef.current?.();
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [paused]);

  /* ---- Keyboard navigation when carousel is focused ---- */
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      isRtl ? goPrev() : goNext();
    } else if (e.key === "ArrowLeft") {
      isRtl ? goNext() : goPrev();
    }
  };

  /* ---- Touch/swipe on mobile ---- */
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 40;
    if (Math.abs(delta) > threshold) {
      // In RTL, positive delta (swipe right) means going to previous visually.
      if (delta > 0) {
        isRtl ? goNext() : goPrev();
      } else {
        isRtl ? goPrev() : goNext();
      }
    }
    touchStartX.current = null;
  };

  /* ---- Translations ---- */
  const t = {
    cpa: isRtl ? "محاسبون ومراجعون قانونيون" : "Certified Public Accountants",
    slide1: {
      eyebrow: isRtl ? "مرحبًا بكم" : "Welcome",
      titleAr: "شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية",
      titleEn: "Batel Abdullah Al-Batel & Co. Professional Services",
      sub: isRtl
        ? "شريكك المهني الموثوق في المحاسبة والمراجعة والاستشارات المالية والإدارية في المملكة العربية السعودية."
        : "Your trusted professional partner in accounting, audit, and financial & management advisory across the Kingdom of Saudi Arabia.",
      primary: isRtl ? "اطلب استشارتك" : "Request a consultation",
      secondary: isRtl ? "تعرّف علينا" : "About us",
    },
    slide2: {
      eyebrow: isRtl ? "خدماتنا" : "Our Services",
      title: isRtl
        ? "حلول مهنية متكاملة"
        : "Integrated professional solutions",
      sub: isRtl
        ? "نقدّم خدمات مهنية متكاملة تدعم نمو أعمالك وتحقق الامتثال الكامل مع أعلى معايير الجودة."
        : "Integrated professional services that power your growth and ensure full compliance at the highest quality standards.",
      items: isRtl
        ? [
            "مراجعة القوائم المالية",
            "خدمات مالية ومحاسبية وضريبية",
            "خدمات استشارية متخصّصة",
            "حلول شاملة لاحتياجات الشركات",
            "خدمات للأفراد والشركات",
          ]
        : [
            "Financial statement auditing",
            "Financial, accounting, and tax advisory",
            "Specialized consulting services",
            "Comprehensive corporate solutions",
            "Services for individuals and companies",
          ],
      cta: isRtl ? "تعرّف على خدماتنا" : "Explore our services",
    },
    slide3: {
      eyebrow: isRtl ? "فريق العمل" : "Our Team",
      title: isRtl ? "خبرات مهنية موثوقة" : "Certified expertise you can trust",
      sub: isRtl
        ? "فريق من الكوادر المؤهّلة والمرخّصة يجمع بين المعرفة الفنية العميقة والخبرة الميدانية الطويلة."
        : "A team of qualified and licensed professionals blending deep technical knowledge with long field experience.",
      items: isRtl
        ? [
            "مراجعون ومحاسبون قانونيون",
            "خبراء استشارات ضريبية وزكوية",
            "خبراء استشارات إدارية واقتصادية وترجمة",
            "خبراء استشارات قانونية",
          ]
        : [
            "Certified Public Accountants",
            "Zakat and tax consultants",
            "Management, economic, and translation experts",
            "Legal consultants",
          ],
      cta: isRtl ? "تعرّف على فريقنا" : "Meet our team",
    },
    controls: {
      prev: isRtl ? "الشريحة السابقة" : "Previous slide",
      next: isRtl ? "الشريحة التالية" : "Next slide",
      goTo: isRtl ? "انتقل إلى الشريحة" : "Go to slide",
      pause: isRtl ? "إيقاف مؤقت" : "Pause",
      play: isRtl ? "تشغيل" : "Play",
    },
  };

  const slides = [
    {
      bg: "/homeSlide1.jpeg",
      render: () => (
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium ${
              currentIndex === 0
                ? "hero-enter hero-enter-delay-1"
                : "opacity-0 translate-y-3"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t.slide1.eyebrow}
          </span>

          <img
            src="/BatelWhiteLogo.png"
            alt={isRtl ? "شعار الباتل" : "Al-Batel logo"}
            width={329}
            height={373}
            loading="eager"
            decoding="async"
            className={`mt-5 w-44 sm:w-56 md:w-60 ${
              currentIndex === 0
                ? "hero-enter-logo hero-enter-delay-2"
                : "opacity-0 scale-95"
            }`}
          />

          <h1
            className={` text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl max-w-4xl leading-snug drop-shadow-lg ${
              currentIndex === 0
                ? "hero-enter hero-enter-delay-3"
                : "opacity-0 translate-y-4"
            }`}
          >
            {isRtl ? t.slide1.titleAr : t.slide1.titleEn}
          </h1>

          <p
            className={`mt-3 mx-auto max-w-3xl text-white/90 text-sm sm:text-base lg:text-xl leading-relaxed ${
              currentIndex === 0
                ? "hero-enter hero-enter-delay-4"
                : "opacity-0 translate-y-4"
            }`}
          >
            {t.slide1.sub}
          </p>

          <div
            className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 ${
              currentIndex === 0
                ? "hero-enter hero-enter-delay-5"
                : "opacity-0 translate-y-5"
            }`}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.slide1.primary}
              <span
                className={`transition-transform duration-300 ${
                  isRtl
                    ? "group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
                aria-hidden="true"
              >
                {isRtl ? "←" : "→"}
              </span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
            >
              {t.slide1.secondary}
            </Link>
          </div>
        </div>
      ),
    },
    {
      bg: "/homeSlide2.jpg",
      render: () => (
        <div
          className={`relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4 md:items-start md:text-start md:ps-16 lg:ps-28 xl:ps-40`}
        >
          <div
            className={`max-w-3xl w-full transition-all duration-700 ${
              currentIndex === 1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {t.slide2.eyebrow}
            </span>

            <h2 className="mt-5 text-white font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight drop-shadow-lg">
              {t.slide2.title}
            </h2>
            <p className="mt-3 text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              {t.slide2.sub}
            </p>

            <ul className="mt-5 sm:mt-6 grid grid-cols-1 gap-2 sm:gap-3 text-white">
              {t.slide2.items.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-3  justify-start transition-all duration-500 ${
                    currentIndex === 1
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                  style={{
                    transitionDelay:
                      currentIndex === 1 ? `${100 + i * 80}ms` : "0ms",
                  }}
                >
                  <CheckBullet />
                  <span className="text-sm sm:text-base lg:text-lg font-medium drop-shadow">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className={`mt-6 sm:mt-8 flex justify-center md:justify-start transition-all duration-700 ${
                currentIndex === 1
                  ? "opacity-100 translate-y-0 delay-500"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t.slide2.cta}
                <span
                  className={`transition-transform duration-300 ${
                    isRtl
                      ? "group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
                  aria-hidden="true"
                >
                  {isRtl ? "←" : "→"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      bg: "/homeSlide3.jpg",
      render: () => (
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4 md:items-start md:text-start md:ps-16 lg:ps-28 xl:ps-40">
          <div
            className={`max-w-3xl w-full transition-all duration-700 ${
              currentIndex === 2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {t.slide3.eyebrow}
            </span>

            <h2 className="mt-5 text-white font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight drop-shadow-lg">
              {t.slide3.title}
            </h2>
            <p className="mt-3 text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              {t.slide3.sub}
            </p>

            <ul className="mt-5 sm:mt-6 grid grid-cols-1 gap-2 sm:gap-3 text-white">
              {t.slide3.items.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-3  justify-start transition-all duration-500 ${
                    currentIndex === 2
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                  style={{
                    transitionDelay:
                      currentIndex === 2 ? `${100 + i * 80}ms` : "0ms",
                  }}
                >
                  <CheckBullet />
                  <span className="text-sm sm:text-base lg:text-lg font-medium drop-shadow">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div
              className={`mt-6 sm:mt-8 flex justify-center md:justify-start transition-all duration-700 ${
                currentIndex === 2
                  ? "opacity-100 translate-y-0 delay-500"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/ourTeam"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
              >
                {t.slide3.cta}
                <span
                  className={`transition-transform duration-300 ${
                    isRtl
                      ? "group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
                  aria-hidden="true"
                >
                  {isRtl ? "←" : "→"}
                </span>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* ===================================================
          1) HERO CAROUSEL (unified AR/EN)
          =================================================== */}
      <section
        dir={dir}
        role="region"
        aria-roledescription="carousel"
        aria-label={isRtl ? "عرض الصفحة الرئيسية" : "Home page highlights"}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative w-full h-[95vh] md:h-[100vh] overflow-hidden bg-slate-100 outline-none"
      >
      

        {/* Slides */}
        <div className="relative w-full h-full">
          {slides.map((s, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${TOTAL_SLIDES}`}
              aria-hidden={currentIndex !== i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                currentIndex === i
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={s.bg}
                alt=""
                aria-hidden="true"
                width={i === 0 ? 1285 : i === 1 ? 1500 : 756}
                height={i === 0 ? 746 : i === 1 ? 1001 : 313}
                fetchPriority={i === 0 ? "high" : "low"}
                loading={i === 0 ? "eager" : "lazy"}
                decoding={i === 0 ? "sync" : "async"}
                className="absolute inset-0 z-0 h-full w-full object-cover object-center"
              />
              {/* Unified overlay — subtle blue gradient + dotted pattern */}
              <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-indigo-900/70" />
              <div
                className="absolute inset-0 z-10 opacity-20 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 1px, transparent 1px)",
                  backgroundSize: "28px 28px, 34px 34px",
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-950/45 via-transparent to-transparent" />
              {s.render()}
            </div>
          ))}
        </div>

        {/* Controls: previous / next arrows (hidden on mobile — swipe used instead) */}
        <button
          type="button"
          aria-label={t.controls.prev}
          onClick={goVisualStart}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 start-4 lg:start-6 z-30 w-11 h-11 rounded-full items-center justify-center bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-blue-900 shadow transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          type="button"
          aria-label={t.controls.next}
          onClick={goVisualEnd}
          className="hidden md:flex absolute top-1/2 -translate-y-1/2 end-4 lg:end-6 z-30 w-11 h-11 rounded-full items-center justify-center bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-blue-900 shadow transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-current={currentIndex === i}
              aria-label={`${t.controls.goTo} ${i + 1}`}
              className={`group relative h-2 rounded-full transition-all duration-500 ${
                currentIndex === i
                  ? "w-10 bg-white"
                  : "w-3 bg-white/50 hover:bg-white/80"
              }`}
            >
              {currentIndex === i && !paused ? (
                <span
                  key={i + "-progress"}
                  className="absolute inset-0 rounded-full bg-green-400/80 origin-start animate-[slideProgress_8s_linear_forwards]"
                  aria-hidden="true"
                />
              ) : null}
            </button>
          ))}
        </div>

        <style jsx>{`
          @keyframes slideProgress {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
        `}</style>
      </section>

      {/* ===================================================
          2) PAGE SECTIONS
          Order is intentional — partners (trust signal) first,
          then identity (goal/vision/message), stats, branches,
          services, and finally the contact form.
          =================================================== */}
      <MainPagePartners />

      <Goal />
      <Vision />
      <Message />

      <Manager />
      <PublicationsTeaser />
      <Branches />
      <ServiceDesc />

      {/* contact us section */}
      <ContactUs variant="section" branches={branches} />
    </>
  );
}

/* =========================================================
   Helper: check bullet for slides 2 & 3.
   ========================================================= */
function CheckBullet() {
  return (
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-md flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3.5 h-3.5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
}
