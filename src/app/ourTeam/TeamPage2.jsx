"use client";

import React, { useCallback, useContext, useEffect } from "react";
import Link from "next/link";

import { LanguageContext } from "../contexts/langContext";

/* =========================================================
   Static contact data (kept out of render for perf).
   ========================================================= */
const CONTACT = {
  phone: "+966550554262",
  phoneDisplay: "+966 55 055 4262",
  email: "albatelcpa@albatelcpa.com",
};

/* Core values displayed as decorative hexagons / pills */
const VALUE_WORDS = [
  { ar: "تعاون", en: "Cooperation" },
  { ar: "خبرة", en: "Experience" },
  { ar: "كفاءة", en: "Efficiency" },
  { ar: "إبداع", en: "Creativity" },
  { ar: "ابتكار", en: "Innovation" },
  { ar: "جودة", en: "Quality" },
  { ar: "نزاهة", en: "Integrity" },
  { ar: "إنتاجية", en: "Productivity" },
  { ar: "احترافية", en: "Professionalism" },
];

/* =========================================================
   Decorative hexagon used in the hero section.
   Kept as a local component to avoid extra dependencies.
   ========================================================= */
function HexagonBox({ children, className, style }) {
  const stroke = style?.stroke || "#fff";
  const strokeWidth = style?.strokeWidth || 2;
  const fill = style?.fill || "rgba(255,255,255,0.12)";
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ display: "inline-block" }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
    >
      <polygon
        points="50,2 95,25 95,75 50,98 5,75 5,25"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      {children}
    </svg>
  );
}

/* =========================================================
   Main component
   ========================================================= */
export default function TeamPage2({ employees: initialEmployees = [] }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";
  const employees = initialEmployees || [];

  /* Lightweight intersection observer to progressively reveal sections */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const animatedElements = document.querySelectorAll("[data-aos]");
    animatedElements.forEach((el) => {
      el.classList.add("aos-init");
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTeam = useCallback(() => {
    const section = document.getElementById("team");
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  /* ---- All UI strings in one place ---- */
  const t = {
    cpa: isRtl ? "محاسبون ومراجعون قانونيون" : "Certified Public Accountants",
    breadcrumb: {
      home: isRtl ? "الرئيسية" : "Home",
      team: isRtl ? "فريق العمل" : "Our Team",
    },
    hero: {
      eyebrow: isRtl ? "فريقنا" : "Our Team",
      title: isRtl ? "فريق عمل شركة الباتل" : "Al-Batel Professional Team",
      line1: {
        a: isRtl ? "فريق واحد" : "One Team",
        b: isRtl ? "رؤية مشتركة" : "One Vision",
        c: isRtl ? "نجاح بلا حدود" : "Boundless Success",
      },
      line2: {
        a: isRtl ? "من الفكرة إلى النجاح" : "From Vision to Victory",
        b: isRtl ? "فريقنا في خدمتك" : "Our team at your service",
      },
      scrollBtn: isRtl ? "تعرّف على فريق العمل" : "Meet our team",
    },
    values: {
      eyebrow: isRtl ? "قيمنا" : "Our Values",
      title: isRtl ? "ما الذي يميّز فريقنا" : "What Sets Our Team Apart",
      sub: isRtl
        ? "مبادئ نعمل بها كل يوم لنقدّم أعلى معايير الجودة والمهنية لعملائنا."
        : "Principles we live by every day to deliver the highest standards of quality and professionalism.",
    },
    stats: {
      staff: isRtl ? "كادر مؤهّل" : "Qualified Staff",
      years: isRtl ? "سنوات خبرة" : "Years of Experience",
      saudization: isRtl ? "نطاق بلاتيني" : "Platinum Band",
      certifications: isRtl ? "شهادات مهنية" : "Certifications",
    },
    team: {
      eyebrow: isRtl ? "تعرّف علينا" : "Get to Know Us",
      title: isRtl ? "أعضاء فريقنا" : "Our Team Members",
      sub: isRtl
        ? "خبرات متنوّعة وشهادات معتمدة من أفضل الجهات المهنية عالميًا."
        : "Diverse expertise and accreditations from the world's leading professional bodies.",
      viewDetails: isRtl ? "عرض التفاصيل" : "View Details",
      empty: isRtl
        ? "لا توجد بيانات أعضاء فريق متاحة حاليًا."
        : "No team members are available at this time.",
    },
    cta: {
      eyebrow: isRtl ? "انضم إلينا" : "Join Us",
      title: isRtl ? "انضم إلى فريق عملنا" : "Join Our Team",
      sub: isRtl
        ? "تواصل معنا اليوم واكتشف الوظائف المتاحة لتحقيق أهدافك المهنية."
        : "Contact us today and explore the opportunities that will help you achieve your career goals.",
      contact: isRtl ? "تواصل معنا الآن" : "Contact us now",
      jobs: isRtl ? "اكتشف الوظائف المتاحة" : "Discover open jobs",
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
      aria-labelledby="team-hero-title"
    >
      {/* ===================================================
          1) HERO
          =================================================== */}
      <header className="relative w-full overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
        <img
          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/team.png"
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
          aria-hidden="true"
        />

        {/* CPA badge */}
        <div
          data-aos="fade-down"
          className="absolute top-0 sm:top-24 md:top-32 start-4 md:start-10 z-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {t.cpa}
          </span>
        </div>

        {/* Certified badge (bottom corner) */}
        <div
          data-aos="fade-up"
          className="hidden md:block absolute bottom-6 end-6 z-20 w-28 lg:w-32"
        >
          <img
            src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/Logos%20and%20Certified2/111-removebg-preview.png"
            alt={isRtl ? "شعار الاعتماد" : "Certification logo"}
            loading="lazy"
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-28 lg:py-32 text-center w-full">
          {/* Breadcrumb */}
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
            <span className="text-white font-semibold">
              {t.breadcrumb.team}
            </span>
          </nav>

          <span
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t.hero.eyebrow}
          </span>

          <h1
            id="team-hero-title"
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 text-white font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight drop-shadow-lg"
          >
            {t.hero.title}
          </h1>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-white/90 text-lg sm:text-xl lg:text-2xl font-semibold"
          >
            <span>{t.hero.line1.a}</span>
            <span className="text-green-300 opacity-80">·</span>
            <span>{t.hero.line1.b}</span>
            <span className="text-green-300 opacity-80">·</span>
            <span>{t.hero.line1.c}</span>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-white/75 text-sm sm:text-base lg:text-lg"
          >
            <span>{t.hero.line2.a}</span>
            <span className="text-green-300 opacity-80">·</span>
            <span>{t.hero.line2.b}</span>
          </div>

   

          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={scrollToTeam}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.hero.scrollBtn}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 animate-bounce"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
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
          2) STATS STRIP
          =================================================== */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 -mt-10 sm:-mt-12">
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-5 bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-4 sm:p-7"
        >
          <StatCell value="80+" label={t.stats.staff} tone="blue" />
          <StatCell value="20+" label={t.stats.years} tone="green" />
          <StatCell value="60%" label={t.stats.saudization} tone="amber" />
          <StatCell value="20+" label={t.stats.certifications} tone="blue" />
        </div>
      </div>

      {/* ===================================================
          3) VALUES STRIP (mobile-friendly pills)
          =================================================== */}
      <section
        className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-20"
        aria-labelledby="values-title"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div data-aos="fade-up">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
              {t.values.eyebrow}
            </span>
            <h2
              id="values-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.values.title}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base lg:text-lg">
              {t.values.sub}
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {VALUE_WORDS.map((w, i) => (
              <li
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 6) * 40}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 shadow-sm hover:ring-green-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-green-500 group-hover:scale-150 transition-transform duration-300" />
                <span className="text-sm sm:text-base font-semibold text-blue-950 group-hover:text-green-700 transition-colors duration-300">
                  {w[lang]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================================================
          4) TEAM MEMBERS GRID
          =================================================== */}
      <section
        id="team"
        className="relative py-14 sm:py-20 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50"
        aria-labelledby="team-grid-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
              {t.team.eyebrow}
            </span>
            <h2
              id="team-grid-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.team.title}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base lg:text-lg">
              {t.team.sub}
            </p>
          </div>

          {employees.length === 0 ? (
            <p className="text-center text-slate-500 text-base sm:text-lg py-10">
              {t.team.empty}
            </p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
              {employees.map((member, index) => (
                <li
                  key={member?.id || index}
                  data-aos="fade-up"
                  data-aos-delay={(index % 4) * 70}
                  className="relative group"
                >
                  <Link
                    href={`/TeamMember/${member?.id}`}
                    className="relative block h-full overflow-hidden rounded-3xl border border-white/70 bg-white/95 shadow-lg shadow-blue-900/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/20"
                  >
                    {/* Certified badge */}
                    <img
                      className="absolute end-3 top-3 z-20 h-7 w-7 md:h-9 md:w-9 drop-shadow-md"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/Logos%20and%20Certified3/certified.png"
                      alt={isRtl ? "معتمد" : "Certified"}
                      loading="lazy"
                    />

                    <div className="relative flex h-[240px] items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-100">
                      <img
                        src={member?.image}
                        alt={member?.name?.[lang] || "Team Member"}
                        loading="lazy"
                        className="h-full w-full object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/25 via-transparent to-transparent" />
                    </div>

                    <div className="flex flex-col items-center justify-center px-4 pt-4 text-center">
                      <h3 className="border-b-2 border-transparent pb-2 text-lg font-extrabold tracking-tight text-blue-900 transition-all duration-500 group-hover:border-blue-500 md:text-xl">
                        {member?.name?.[lang]}
                      </h3>
                    </div>

                    {/* Certifications chips */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 px-3 pb-3 pt-2 text-xs">
                      {member?.cert
                        ?.split(/\s+/)
                        .filter((c) => c.trim() !== "")
                        .map((cert, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium text-slate-700 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50/70"
                          >
                            {cert}
                          </span>
                        ))}
                    </div>

                    <div
                      className={`flex ${
                        isRtl ? "justify-start" : "justify-end"
                      } px-4 pb-4`}
                    >
                      <span className="inline-flex items-center gap-1 border-b border-slate-300 pb-0.5 text-sm font-medium text-slate-600 transition-all duration-500 group-hover:border-blue-600 group-hover:text-blue-800">
                        {t.team.viewDetails}
                        <span
                          className={`text-xs transition-transform duration-500 ${
                            isRtl
                              ? "group-hover:-translate-x-1"
                              : "group-hover:translate-x-1"
                          }`}
                          aria-hidden="true"
                        >
                          {isRtl ? "←" : "→"}
                        </span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ===================================================
          5) CTA — Join Our Team
          =================================================== */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="join-cta-title"
      >
        <div className="relative bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/join.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/55 to-blue-700/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-blue-950/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
            <div data-aos="fade-up" className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white/90 text-xs sm:text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {t.cta.eyebrow}
              </span>

              <h2
                id="join-cta-title"
                className="mt-5 text-2xl sm:text-3xl lg:text-5xl font-bold text-white drop-shadow-lg"
              >
                {t.cta.title}
              </h2>

              <p className="mt-4 mx-auto max-w-2xl text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed">
                {t.cta.sub}
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
                    aria-hidden="true"
                  >
                    {isRtl ? "←" : "→"}
                  </span>
                </Link>

                <Link
                  href="/careers"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
                >
                  {t.cta.jobs}
                </Link>
              </div>
            </div>

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
          6) SEO — JSON-LD (BreadcrumbList + ItemList of Person)
          =================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
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
                    name: t.breadcrumb.team,
                    item: "https://www.albatelcpa.com/ourTeam",
                  },
                ],
              },
              {
                "@type": "ItemList",
                itemListElement: employees.map((m, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  item: {
                    "@type": "Person",
                    name: m?.name?.en || m?.name?.ar || "",
                    image: m?.image,
                    url: m?.id
                      ? `https://www.albatelcpa.com/TeamMember/${m.id}`
                      : undefined,
                    worksFor: {
                      "@type": "Organization",
                      name: "Al-Batel & Co. Professional Services",
                    },
                  },
                })),
              },
            ],
          }),
        }}
      />
    </section>
  );
}

/* =========================================================
   Helper: Statistic cell (same pattern used across the site).
   ========================================================= */
function StatCell({ value, label, tone = "blue" }) {
  const tones = {
    blue: "from-blue-600 to-blue-800",
    green: "from-green-500 to-green-700",
    amber: "from-amber-500 to-amber-700",
  };
  return (
    <div className="text-center">
      <p
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-br ${tones[tone]} bg-clip-text text-transparent`}
      >
        {value}
      </p>
      <p className="mt-1 text-[11px] sm:text-sm font-medium text-slate-600">
        {label}
      </p>
    </div>
  );
}

/* =========================================================
   Helper: Contact method card for the CTA section.
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
