"use client";

import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { LanguageContext } from "../contexts/langContext";

/* =========================================================
   Static contact data.
   ========================================================= */
const CONTACT = {
  phone: "+966550554262",
  phoneDisplay: "+966 55 055 4262",
  email: "albatelcpa@albatelcpa.com",
};

/* =========================================================
   Main component — single JSX for AR/EN using t/dir.
   ========================================================= */
export default function AvailableJobs({ jobs: initialJobs = [] }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";

  const [search, setSearch] = useState("");

  /* Filter jobs by name in the active language */
  const filteredJobs = useMemo(() => {
    const base = Array.isArray(initialJobs) ? initialJobs : [];
    const q = search.trim().toLowerCase();
    if (!q) return base;
    return base.filter((j) =>
      j?.name?.[lang]?.toLowerCase?.().includes(q)
    );
  }, [initialJobs, search, lang]);

  const total = Array.isArray(initialJobs) ? initialJobs.length : 0;
  const shown = filteredJobs.length;

  const scrollToJobs = useCallback(() => {
    const el = document.getElementById("jobs-list");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const clearSearch = useCallback(() => setSearch(""), []);

  /* ---- Translations ---- */
  const t = {
    cpa: isRtl ? "محاسبون ومراجعون قانونيون" : "Certified Public Accountants",
    breadcrumb: {
      home: isRtl ? "الرئيسية" : "Home",
      careers: isRtl ? "الوظائف" : "Careers",
    },
    hero: {
      eyebrow: isRtl ? "انضم إلينا" : "Join Us",
      title: isRtl ? "الوظائف المتاحة" : "Career Opportunities",
      sub: isRtl
        ? "انضم إلى فريق الباتل لاستكمال رحلة النمو المهني في بيئة عمل داعمة ومحفّزة تُقدِّر الكفاءات وتستثمر في المستقبل."
        : "Join Al-Batel and advance your professional journey in a supportive environment that values expertise and invests in the future.",
      browseBtn: isRtl ? "تصفّح الوظائف" : "Browse jobs",
      contactBtn: isRtl ? "تواصل معنا" : "Contact us",
    },
    stats: {
      founded: isRtl ? "منذ" : "Since",
      staff: isRtl ? "كادر مؤهّل" : "Qualified Staff",
      platinum: isRtl ? "نطاق بلاتيني" : "Platinum Band",
      branches: isRtl ? "فرعًا" : "Branches",
    },
    why: {
      eyebrow: isRtl ? "لماذا الباتل؟" : "Why Al-Batel?",
      title: isRtl
        ? "ما يجعل بيئة العمل لدينا مميّزة"
        : "What Makes Our Workplace Special",
      sub: isRtl
        ? "نوفّر مقوّمات النمو المهني للكوادر الطموحة ونساهم في بناء كفاءات المستقبل."
        : "We provide the foundations for professional growth for ambitious talent and help shape future leaders.",
      items: isRtl
        ? [
            {
              title: "تطوير مستمر",
              desc: "برامج تدريبية مهنية وشهادات معتمدة لرفع الكفاءة الفنية للموظفين.",
            },
            {
              title: "مسار مهني واضح",
              desc: "خطط تطوّر وظيفي مدروسة تعكس الجدارة وتفتح أبواب الترقّي.",
            },
            {
              title: "بيئة عمل صحّية",
              desc: "ثقافة مؤسسية داعمة، توازن بين العمل والحياة، وفِرَق عالية الكفاءة.",
            },
            {
              title: "حوافز مجزية",
              desc: "مزايا تنافسية تقدّر العطاء وتدعم الاستقرار المهني للموظفين.",
            },
          ]
        : [
            {
              title: "Continuous Development",
              desc: "Professional training and certified programs to grow technical expertise.",
            },
            {
              title: "Clear Career Path",
              desc: "Well-defined career-progression plans that reward merit and open doors.",
            },
            {
              title: "Healthy Workplace",
              desc: "A supportive corporate culture, work-life balance, and high-caliber teams.",
            },
            {
              title: "Rewarding Benefits",
              desc: "Competitive compensation that values contribution and career stability.",
            },
          ],
    },
    search: {
      placeholder: isRtl ? "محاسب، مراجع، ..." : "Accountant, Auditor, ...",
      btn: isRtl ? "بحث" : "Search",
      clear: isRtl ? "مسح" : "Clear",
      label: isRtl ? "بحث عن وظيفة" : "Search jobs",
      resultsAll: isRtl
        ? `${total} ${total === 1 ? "وظيفة متاحة" : "وظيفة متاحة"}`
        : `${total} open ${total === 1 ? "position" : "positions"}`,
      resultsFiltered: isRtl
        ? `عرض ${shown} من ${total}`
        : `Showing ${shown} of ${total}`,
      noResults: isRtl
        ? "لا توجد نتائج مطابقة لبحثك. جرّب كلمة مختلفة."
        : "No jobs match your search. Try a different keyword.",
      empty: isRtl
        ? "ترقّبوا الوظائف المتاحة قريبًا..."
        : "Stay tuned for new openings soon!",
    },
    card: {
      newBadge: isRtl ? "جديد" : "New",
      location: isRtl ? "الموقع" : "Location",
      deadline: isRtl ? "آخر موعد للتقديم" : "Deadline",
      posted: isRtl ? "تاريخ النشر" : "Posted",
      details: isRtl ? "تقديم الطلب" : "Apply Now",
    },
    cta: {
      eyebrow: isRtl ? "لم تجد الوظيفة المناسبة؟" : "Didn't find the right role?",
      title: isRtl
        ? "أرسل سيرتك الذاتية ونتواصل معك"
        : "Send us your CV and we'll reach out",
      sub: isRtl
        ? "نرحّب بالكوادر المؤهّلة والطموحة. راسلنا وسنحتفظ بسيرتك للمراجعة عند توفّر الوظائف المناسبة."
        : "We welcome qualified and ambitious talent. Reach out and we'll keep your profile on file for suitable openings.",
      contact: isRtl ? "تواصل معنا الآن" : "Contact us",
      team: isRtl ? "تعرّف على فريقنا" : "Meet our team",
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
      aria-labelledby="careers-hero-title"
    >
      {/* ===================================================
          1) HERO
          =================================================== */}
      <header className="relative w-full overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center">
        <img
          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/join.png"
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

        {/* CPA badge */}
        <div className="absolute top-0 sm:top-24 md:top-32 start-4 md:start-10 z-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {t.cpa}
          </span>
        </div>

        {/* Vision 2030 */}
        <img
          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
          className="hidden md:block w-[130px] lg:w-[150px] absolute bottom-6 end-6 bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-2.5 z-20"
          alt={isRtl ? "رؤية المملكة 2030" : "Saudi Vision 2030"}
          loading="lazy"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-28 lg:py-32 text-center w-full">
          {/* Breadcrumb */}
          <nav
            aria-label={isRtl ? "فتات التنقل" : "Breadcrumb"}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/75 mb-4"
          >
            <Link href="/" className="hover:text-white transition-colors duration-300">
              {t.breadcrumb.home}
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">
              {t.breadcrumb.careers}
            </span>
          </nav>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t.hero.eyebrow}
          </span>

          <h1
            id="careers-hero-title"
            className="mt-5 text-white font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight drop-shadow-lg"
          >
            {t.hero.title}
          </h1>

          <p className="mt-5 mx-auto max-w-3xl text-white/90 text-sm sm:text-base lg:text-xl leading-relaxed">
            {t.hero.sub}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={scrollToJobs}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.hero.browseBtn}
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

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
            >
              {t.hero.contactBtn}
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
          2) STATS STRIP
          =================================================== */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 -mt-10 sm:-mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-5 bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-4 sm:p-7">
          <StatCell value="2006" label={t.stats.founded} tone="blue" />
          <StatCell value="80+" label={t.stats.staff} tone="green" />
          <StatCell value="56%" label={t.stats.platinum} tone="amber" />
          <StatCell value="9" label={t.stats.branches} tone="blue" />
        </div>
      </div>

      {/* ===================================================
          3) WHY JOIN US
          =================================================== */}
      <section
        className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50"
        aria-labelledby="why-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
              {t.why.eyebrow}
            </span>
            <h2
              id="why-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.why.title}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base lg:text-lg">
              {t.why.sub}
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {t.why.items.map((item, i) => (
              <li
                key={i}
                className="group p-6 rounded-3xl bg-white ring-1 ring-slate-200 hover:ring-green-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <span className="inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
                  <WhyIcon index={i} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-blue-950 group-hover:text-green-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================================================
          4) JOBS LIST (search + cards)
          =================================================== */}
      <section
        id="jobs-list"
        className="py-14 sm:py-20 bg-white"
        aria-labelledby="jobs-title"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              id="jobs-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {isRtl ? "الوظائف الشاغرة" : "Open Positions"}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            <p className="mt-4 text-slate-600 text-sm sm:text-base font-medium">
              {total === 0
                ? ""
                : search
                ? t.search.resultsFiltered
                : t.search.resultsAll}
            </p>
          </div>

          {/* Search */}
          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="relative max-w-2xl mx-auto mb-10"
          >
            <label htmlFor="job-search" className="sr-only">
              {t.search.label}
            </label>
            <div className="relative group">
              <span className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none text-slate-400 group-focus-within:text-blue-700 transition-colors duration-300">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </span>
              <input
                id="job-search"
                name="search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.search.placeholder}
                className="block w-full ps-12 pe-28 py-4 text-sm sm:text-base text-blue-950 placeholder:text-slate-400 bg-white border border-slate-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                autoComplete="off"
              />
              {search ? (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute end-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-200 transition-all duration-300"
                >
                  {t.search.clear}
                </button>
              ) : (
                <button
                  type="submit"
                  className="absolute end-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {t.search.btn}
                </button>
              )}
            </div>
          </form>

          {/* Jobs */}
          {total === 0 ? (
            <EmptyState
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-white"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Z"
                    clipRule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                </svg>
              }
              title={t.search.empty}
            />
          ) : shown === 0 ? (
            <EmptyState
              variant="muted"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-white"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              title={t.search.noResults}
              action={
                <button
                  type="button"
                  onClick={clearSearch}
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold shadow hover:shadow-lg transition-all duration-300"
                >
                  {t.search.clear}
                </button>
              }
            />
          ) : (
            <ul className="space-y-4 sm:space-y-5">
              {filteredJobs.map((job, i) => (
                <li key={job?.id || i}>
                  <JobCard job={job} t={t} isRtl={isRtl} lang={lang} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ===================================================
          5) CTA
          =================================================== */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="careers-cta-title"
      >
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
                id="careers-cta-title"
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
          6) SEO — JSON-LD (BreadcrumbList + JobPosting per job)
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
                    name: t.breadcrumb.careers,
                    item: "https://www.albatelcpa.com/careers",
                  },
                ],
              },
              ...(Array.isArray(initialJobs) ? initialJobs : [])
                .filter(Boolean)
                .map((j) => ({
                  "@type": "JobPosting",
                  title: j?.name?.en || j?.name?.ar || "",
                  description: j?.name?.en || j?.name?.ar || "",
                  datePosted: j?.fromDate || undefined,
                  validThrough: j?.endDate || undefined,
                  employmentType: "FULL_TIME",
                  directApply: true,
                  url: j?.link || "https://www.albatelcpa.com/careers",
                  hiringOrganization: {
                    "@type": "Organization",
                    name: "Al-Batel & Co. Professional Services",
                    sameAs: "https://www.albatelcpa.com",
                    logo: "https://www.albatelcpa.com/BatelLogo1.png",
                  },
                  jobLocation: {
                    "@type": "Place",
                    address: {
                      "@type": "PostalAddress",
                      addressLocality:
                        j?.location?.en || j?.location?.ar || "Riyadh",
                      addressCountry: "SA",
                    },
                  },
                })),
            ],
          }),
        }}
      />
    </section>
  );
}

/* =========================================================
   Helper: Job card.
   ========================================================= */
function JobCard({ job, t, isRtl, lang }) {
  return (
    <article className="relative group overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:ring-blue-300 hover:-translate-y-0.5 transition-all duration-500">
      {/* Accent strip */}
      <span
        className="absolute inset-y-0 start-0 w-1.5 bg-gradient-to-b from-blue-600 via-green-500 to-blue-600"
        aria-hidden="true"
      />

      {/* New ribbon */}
      <span
        className={`absolute top-4 ${
          isRtl ? "-start-10" : "-end-10"
        } bg-gradient-to-r from-green-500 to-green-600 text-white text-[10px] sm:text-xs font-bold py-1 px-10 shadow-md ${
          isRtl ? "rotate-45" : "rotate-45"
        } select-none`}
      >
        {t.card.newBadge}
      </span>

      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] gap-4 sm:gap-6 items-center p-5 sm:p-6 ps-6 sm:ps-8">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
            <img
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%84%D9%88%D8%AC%D9%88%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%85%D9%84.jpeg"
              alt={isRtl ? "شعار الشركة" : "Company logo"}
              loading="lazy"
              className="w-full h-full object-contain p-1"
            />
          </div>
        </div>

        {/* Title + meta */}
        <div className="min-w-0 text-center md:text-start">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-950 truncate group-hover:text-blue-800 transition-colors duration-300">
            {job?.name?.[lang]}
          </h3>

          <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-slate-600">
            {job?.location?.[lang] && (
              <span className="inline-flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-blue-700"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium text-blue-950">
                  {t.card.location}:
                </span>
                <span>{job.location[lang]}</span>
              </span>
            )}

            {job?.endDate && (
              <span className="inline-flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-amber-600"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.75 5.25a.75.75 0 0 0-1.5 0v5.69l-3.22-3.22a.75.75 0 1 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-1.06-1.06l-3.22 3.22V7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium text-blue-950">
                  {t.card.deadline}:
                </span>
                <span dir="ltr">{job.endDate}</span>
              </span>
            )}

            {job?.fromDate && (
              <span className="inline-flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-green-600"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium text-blue-950">
                  {t.card.posted}:
                </span>
                <span dir="ltr">{job.fromDate}</span>
              </span>
            )}
          </div>
        </div>

        {/* Apply button */}
        <div className="flex justify-center md:justify-end">
          <a
            href={job?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            {t.card.details}
            <span
              className={`transition-transform duration-300 ${
                isRtl
                  ? "group-hover/btn:-translate-x-1"
                  : "group-hover/btn:translate-x-1"
              }`}
              aria-hidden="true"
            >
              {isRtl ? "←" : "→"}
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   Helper: Empty / no-result state block.
   ========================================================= */
function EmptyState({ icon, title, action, variant = "primary" }) {
  const toneWrap =
    variant === "muted"
      ? "bg-slate-50 ring-slate-200"
      : "bg-gradient-to-br from-blue-50 via-white to-green-50 ring-slate-200";
  const toneBubble =
    variant === "muted"
      ? "from-slate-500 to-slate-700"
      : "from-blue-600 to-blue-800";
  return (
    <div
      className={`text-center rounded-3xl ring-1 ${toneWrap} p-10 sm:p-14`}
    >
      <div
        className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${toneBubble} flex items-center justify-center shadow-lg`}
      >
        {icon}
      </div>
      <p className="mt-5 text-blue-950 text-lg sm:text-xl font-semibold">
        {title}
      </p>
      {action}
    </div>
  );
}

/* =========================================================
   Helper: Stat cell.
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
   Helper: Why icons (inline SVG).
   ========================================================= */
function WhyIcon({ index }) {
  switch (index) {
    case 0:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
          <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 0 1-.46.71 47.878 47.878 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.877 47.877 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
        </svg>
      );
    case 1:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 2:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
        </svg>
      );
    case 3:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5Z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
}

/* =========================================================
   Helper: Contact method card for CTA.
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
