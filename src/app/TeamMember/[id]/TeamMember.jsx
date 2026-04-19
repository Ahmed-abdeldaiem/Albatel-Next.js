"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import { LanguageContext } from "../../contexts/langContext";
import { TeamContext } from "../../contexts/TeamContext";

/* =========================================================
   Static contact data.
   ========================================================= */
const CONTACT = {
  phone: "+966550554262",
  phoneDisplay: "+966 55 055 4262",
  email: "albatelcpa@albatelcpa.com",
};

/* =========================================================
   Main component — single JSX tree for AR/EN.
   ========================================================= */
export default function TeamMember() {
  const { dir } = useContext(LanguageContext);
  const { getPersonById } = useContext(TeamContext);
  const { id } = useParams();

  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";

  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  const fetchEmployee = useCallback(
    async (memberId) => {
      if (!memberId) return;
      setLoading(true);
      setImageLoading(true);
      try {
        const data = await getPersonById(memberId);
        setEmployee(data || null);
      } catch {
        setEmployee(null);
      } finally {
        setLoading(false);
      }
    },
    [getPersonById]
  );

  useEffect(() => {
    fetchEmployee(id);
  }, [id, fetchEmployee]);

  /* ---- Translations ---- */
  const t = {
    cpa: isRtl ? "محاسبون ومراجعون قانونيون" : "Certified Public Accountants",
    breadcrumb: {
      home: isRtl ? "الرئيسية" : "Home",
      team: isRtl ? "فريق العمل" : "Our Team",
      member: isRtl ? "تفاصيل العضو" : "Member Profile",
    },
    back: isRtl ? "العودة إلى الفريق" : "Back to team",
    role: isRtl ? "المنصب" : "Role",
    certsChips: isRtl ? "الشهادات المهنية" : "Professional Credentials",
    certificates: {
      eyebrow: isRtl ? "المؤهلات" : "Qualifications",
      title: isRtl ? "الشهادات والمؤهلات العلمية" : "Certificates & Qualifications",
    },
    experience: {
      eyebrow: isRtl ? "الخلفية المهنية" : "Professional Background",
      title: isRtl ? "الخبرة المهنية" : "Professional Experience",
    },
    careerPath: {
      eyebrow: isRtl ? "المسيرة" : "Career",
      title: isRtl
        ? "المناصب الرئيسية خلال المسيرة المهنية"
        : "Key Positions Held During Career",
    },
    cta: {
      eyebrow: isRtl ? "تواصل" : "Reach Out",
      title: isRtl
        ? "بحاجة إلى استشارة متخصصة؟"
        : "Need a Professional Consultation?",
      sub: isRtl
        ? "تواصل مع فريقنا لنساعدك على تحقيق أهدافك المالية والمهنية."
        : "Get in touch with our team to help you achieve your financial and professional goals.",
      contact: isRtl ? "تواصل معنا الآن" : "Contact us now",
      team: isRtl ? "تعرّف على بقية الفريق" : "Meet the rest of the team",
      call: isRtl ? "اتصل بنا" : "Call us",
      email: isRtl ? "راسلنا" : "Email us",
      visit: isRtl ? "نتشرف بزيارتكم" : "Visit us",
      visitSub: isRtl ? "في جميع فروعنا" : "At any of our branches",
    },
    notFound: {
      title: isRtl ? "الموظف غير موجود" : "Team member not found",
      sub: isRtl
        ? "تحقّق من الرابط أو عُد إلى صفحة الفريق."
        : "Please check the URL or go back to the team page.",
      back: isRtl ? "العودة إلى صفحة الفريق" : "Back to team page",
    },
  };

  /* ---- Loading skeleton ---- */
  if (loading) {
    return (
      <section
        dir={dir}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-6"
      >
        <div className="w-full max-w-5xl animate-pulse">
          <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl">
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-3xl bg-slate-200" />
            <div className="flex-1 space-y-4 w-full">
              <div className="h-4 w-32 bg-slate-200 rounded" />
              <div className="h-10 w-3/4 bg-slate-200 rounded" />
              <div className="h-6 w-1/2 bg-slate-200 rounded" />
              <div className="flex flex-wrap gap-2 pt-2">
                <div className="h-7 w-16 bg-slate-200 rounded-full" />
                <div className="h-7 w-20 bg-slate-200 rounded-full" />
                <div className="h-7 w-14 bg-slate-200 rounded-full" />
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <div className="h-32 bg-white ring-1 ring-slate-200 rounded-3xl" />
            <div className="h-48 bg-white ring-1 ring-slate-200 rounded-3xl" />
          </div>
        </div>
      </section>
    );
  }

  /* ---- Not found state ---- */
  if (!employee || !employee.name) {
    return (
      <section
        dir={dir}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-6"
      >
        <div className="max-w-xl text-center bg-white rounded-3xl p-8 sm:p-12 ring-1 ring-slate-200 shadow-xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-white"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM2.25 20.25a8.25 8.25 0 0 1 16.5 0v.75a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-blue-950">
            {t.notFound.title}
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {t.notFound.sub}
          </p>
          <Link
            href="/ourTeam"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t.notFound.back}
          </Link>
        </div>
      </section>
    );
  }

  /* ---- Helpers ---- */
  const name = employee?.name?.[lang] || "";
  const job = employee?.job?.[lang] || "";
  const certText = employee?.certificates?.[lang] || "";
  const experienceText = employee?.experienceDesc?.[lang] || "";
  const experienceJobs = Array.isArray(employee?.experienceJobs)
    ? employee.experienceJobs
    : [];
  const certChips =
    employee?.cert
      ?.split(/\s+/)
      .map((c) => c.trim())
      .filter(Boolean) || [];

  return (
    <section
      dir={dir}
      className="relative bg-white"
      aria-labelledby="member-name"
    >
      {/* ===================================================
          1) HERO
          =================================================== */}
      <header className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
        <img
          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-green-800/60" />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px, 34px 34px",
          }}
          aria-hidden="true"
        />

    

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-32 pb-16 sm:pt-36 sm:pb-20">
          {/* Breadcrumb */}
          <nav
            aria-label={isRtl ? "فتات التنقل" : "Breadcrumb"}
            className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/75 mb-8"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              {t.breadcrumb.home}
            </Link>
            <span>/</span>
            <Link
              href="/ourTeam"
              className="hover:text-white transition-colors duration-300"
            >
              {t.breadcrumb.team}
            </Link>
            <span>/</span>
            <span className="text-white font-semibold truncate max-w-[180px] sm:max-w-none">
              {name}
            </span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 sm:gap-10 items-center">
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                {/* Decorative glow */}
                <div
                  className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-green-400/30 via-blue-400/30 to-green-400/30 blur-xl"
                  aria-hidden="true"
                />
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-3xl overflow-hidden ring-4 ring-white/30 shadow-2xl bg-slate-100">
                  {imageLoading && (
                    <img
                      className="absolute inset-0 w-full h-full object-contain p-10 bg-slate-100"
                      src="/BatelLogo1.png"
                      alt=""
                      aria-hidden="true"
                    />
                  )}
                  <img
                    className={`w-full h-full object-cover object-top transition-opacity duration-500 ${
                      imageLoading ? "opacity-0" : "opacity-100"
                    }`}
                    src={employee?.image}
                    alt={name}
                    onLoad={() => setImageLoading(false)}
                    onError={() => setImageLoading(false)}
                  />
                  {/* Certified badge corner */}
                  <div className="absolute top-3 end-3">
                    <img
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/Logos%20and%20Certified3/certified.png"
                      alt={isRtl ? "معتمد" : "Certified"}
                      className="w-8 h-8 lg:w-10 lg:h-10 drop-shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Name + job + chips */}
            <div className="text-center md:text-start">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/85 text-xs sm:text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {t.role}
              </span>

              <h1
                id="member-name"
                className="mt-3 text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight drop-shadow-lg"
              >
                {name}
              </h1>

              {job && (
                <p className="mt-3 text-green-200 font-semibold text-lg sm:text-xl lg:text-2xl">
                  {job}
                </p>
              )}

              {/* Certification chips */}
              {certChips.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs sm:text-sm text-white/70 font-medium mb-2 tracking-wider uppercase">
                    {t.certsChips}
                  </p>
                  <ul className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {certChips.map((c, i) => (
                      <li
                        key={i}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Back button */}
              <div className="mt-8 flex justify-center md:justify-start">
                <Link
                  href="/ourTeam"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
                >
                  <span
                    className={`transition-transform duration-300 ${
                      isRtl
                        ? "group-hover:translate-x-1"
                        : "group-hover:-translate-x-1"
                    }`}
                    aria-hidden="true"
                  >
                    {isRtl ? "→" : "←"}
                  </span>
                  {t.back}
                </Link>
              </div>
            </div>
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
          2) CERTIFICATES (Qualifications)
          =================================================== */}
      {certText && (
        <section
          className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white"
          aria-labelledby="certificates-title"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-8 sm:mb-10">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
                {t.certificates.eyebrow}
              </span>
              <h2
                id="certificates-title"
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
              >
                {t.certificates.title}
              </h2>
              <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            </div>

            <article className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl shadow-blue-900/5">
              <span className="absolute top-3 start-3 sm:top-4 sm:start-4 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  aria-hidden="true"
                >
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 0 1-.46.71 47.878 47.878 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.877 47.877 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.661a6.743 6.743 0 0 1-1.286 1.794.75.75 0 1 1-1.06-1.06Z" />
                </svg>
              </span>

              <p className="ps-12 sm:ps-16 text-slate-700 text-base sm:text-lg lg:text-xl leading-loose text-justify whitespace-pre-line">
                {certText}
              </p>
            </article>
          </div>
        </section>
      )}

      {/* ===================================================
          3) EXPERIENCE DESCRIPTION
          =================================================== */}
      {experienceText && (
        <section
          className="py-14 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50"
          aria-labelledby="experience-title"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-8 sm:mb-10">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
                {t.experience.eyebrow}
              </span>
              <h2
                id="experience-title"
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
              >
                {t.experience.title}
              </h2>
              <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            </div>

            <article className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl shadow-blue-900/5">
              <span className="absolute top-3 start-3 sm:top-4 sm:start-4 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                </svg>
              </span>

              <p className="ps-12 sm:ps-16 text-slate-700 text-base sm:text-lg lg:text-xl leading-loose text-justify whitespace-pre-line">
                {experienceText}
              </p>
            </article>
          </div>
        </section>
      )}

      {/* ===================================================
          4) CAREER PATH TIMELINE
          =================================================== */}
      {experienceJobs.length > 0 && (
        <section
          className="py-14 sm:py-20 bg-white"
          aria-labelledby="career-path-title"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
                {t.careerPath.eyebrow}
              </span>
              <h2
                id="career-path-title"
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
              >
                {t.careerPath.title}
              </h2>
              <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            </div>

            <ol className="relative">
              {/* Vertical line — positioned using logical 'start-*' so it sits
                  on the left in LTR and on the right in RTL automatically. */}
              <span
                className="absolute top-2 bottom-2 start-4 sm:start-5 w-0.5 bg-gradient-to-b from-blue-600 via-green-500 to-blue-600 rounded-full"
                aria-hidden="true"
              />
              {experienceJobs.map((exp, i) => (
                <li
                  key={i}
                  className="relative ps-14 sm:ps-16 pb-6 last:pb-0"
                >
                  {/* Dot — same logical positioning so it stays aligned with
                      the line in both directions. */}
                  <span
                    className="absolute top-4 start-0 sm:start-1 w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white text-xs font-bold flex items-center justify-center shadow-lg ring-4 ring-white"
                  >
                    {i + 1}
                  </span>
                  <div className="group p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-200 hover:ring-green-500 hover:shadow-lg transition-all duration-300">
                    <p className="text-slate-800 text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
                      {exp?.[lang]}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ===================================================
          5) CTA
          =================================================== */}
      <section className="relative overflow-hidden" aria-labelledby="cta-title">
        <div className="relative bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg-service1.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/55 to-blue-700/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-blue-950/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white/90 text-xs sm:text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {t.cta.eyebrow}
              </span>

              <h2
                id="cta-title"
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
                  href="/ourTeam"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
                >
                  {t.cta.team}
                </Link>
              </div>
            </div>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                    aria-hidden="true"
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
                    aria-hidden="true"
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
                    aria-hidden="true"
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
          6) SEO — JSON-LD Person + BreadcrumbList
          =================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                name:
                  employee?.name?.en ||
                  employee?.name?.ar ||
                  name ||
                  "Team Member",
                jobTitle: employee?.job?.en || employee?.job?.ar || job,
                image: employee?.image,
                url: id
                  ? `https://www.albatelcpa.com/TeamMember/${id}`
                  : undefined,
                worksFor: {
                  "@type": "Organization",
                  name: "Al-Batel & Co. Professional Services",
                  url: "https://www.albatelcpa.com",
                },
                ...(certChips.length > 0 && {
                  hasCredential: certChips.map((c) => ({
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: c,
                  })),
                }),
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
                    name: t.breadcrumb.team,
                    item: "https://www.albatelcpa.com/ourTeam",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: name || t.breadcrumb.member,
                    item: id
                      ? `https://www.albatelcpa.com/TeamMember/${id}`
                      : undefined,
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
