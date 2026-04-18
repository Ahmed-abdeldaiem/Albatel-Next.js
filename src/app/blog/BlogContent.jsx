"use client";

import { useCallback, useContext, useMemo, useState } from "react";
import Link from "next/link";
import { LanguageContext } from "../contexts/langContext";

/* =========================================================
   Static data outside the component.
   ========================================================= */
const CONTACT = {
  phone: "+966550554262",
  phoneDisplay: "+966 55 055 4262",
  email: "albatelcpa@albatelcpa.com",
};

/* Category -> tailwind tone (left/right gradient) */
const CATEGORY_TONES = {
  // Arabic
  "الضرائب": "from-rose-500 to-pink-700",
  "المحاسبة": "from-blue-500 to-blue-800",
  "المراجعة": "from-emerald-500 to-green-700",
  "الزكاة والضريبة": "from-amber-500 to-orange-700",
  "الاستشارات المالية": "from-indigo-500 to-violet-700",
  // English
  Tax: "from-rose-500 to-pink-700",
  Accounting: "from-blue-500 to-blue-800",
  Audit: "from-emerald-500 to-green-700",
  "Zakat & Tax": "from-amber-500 to-orange-700",
  "Financial Advisory": "from-indigo-500 to-violet-700",
};

const DEFAULT_TONE = "from-slate-500 to-slate-700";

/* =========================================================
   Main component — unified AR/EN.
   ========================================================= */
export default function BlogContent({ posts = [] }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";

  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("ALL");

  /* Unique categories (by AR key, surfacing the localized label). */
  const categories = useMemo(() => {
    const map = new Map();
    posts.forEach((p) => {
      const key = p?.category?.ar || p?.category?.en || "";
      if (!key) return;
      if (!map.has(key)) {
        map.set(key, {
          key,
          ar: p?.category?.ar,
          en: p?.category?.en,
        });
      }
    });
    return Array.from(map.values());
  }, [posts]);

  /* Filtered list */
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return posts.filter((p) => {
      const inCat =
        activeCat === "ALL" ||
        p?.category?.ar === activeCat ||
        p?.category?.en === activeCat;
      if (!inCat) return false;
      if (!q) return true;
      const hay = `${p?.title?.[lang] || ""} ${p?.excerpt?.[lang] || ""}`.toLowerCase();
      return hay.includes(q);
    });
  }, [posts, search, activeCat, lang]);

  /* Featured = most recent post (sorted by datePublished desc) */
  const featured = useMemo(() => {
    const sorted = [...posts].sort((a, b) =>
      (b?.datePublished || "").localeCompare(a?.datePublished || "")
    );
    return sorted[0];
  }, [posts]);

  const rest = useMemo(
    () => filtered.filter((p) => p?.slug !== featured?.slug),
    [filtered, featured]
  );

  const scrollToArticles = useCallback(() => {
    const el = document.getElementById("blog-articles");
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
      blog: isRtl ? "المدونة" : "Blog",
    },
    hero: {
      eyebrow: isRtl ? "المدونة المهنية" : "Professional Insights",
      title: isRtl ? "رؤى ومعرفة مهنية" : "Insights & Expertise",
      sub: isRtl
        ? "محتوى معرفي متخصص يقدّمه خبراء الباتل في المحاسبة والمراجعة والزكاة والضرائب والاستشارات المالية، لمساعدتك على اتخاذ قرارات أفضل وأكثر ثقة."
        : "Specialized content by Al-Batel experts in accounting, audit, zakat, tax, and financial advisory — crafted to support better, more confident decisions.",
      browseBtn: isRtl ? "تصفّح المقالات" : "Browse articles",
      contactBtn: isRtl ? "تواصل معنا" : "Contact us",
    },
    stats: {
      articles: isRtl ? "مقالًا منشورًا" : "Published Articles",
      categories: isRtl ? "تخصّصات مهنية" : "Professional Topics",
      readers: isRtl ? "قارئًا شهريًا" : "Monthly Readers",
      experts: isRtl ? "خبراء مساهمون" : "Expert Contributors",
    },
    filters: {
      label: isRtl ? "التصنيفات" : "Categories",
      all: isRtl ? "كل المقالات" : "All Articles",
      searchPlaceholder: isRtl
        ? "ابحث في المدونة..."
        : "Search the blog...",
      clear: isRtl ? "مسح" : "Clear",
      resultsAll: isRtl
        ? `${posts.length} مقال منشور`
        : `${posts.length} published ${posts.length === 1 ? "article" : "articles"}`,
      resultsFiltered: isRtl
        ? `عرض ${filtered.length} من ${posts.length}`
        : `Showing ${filtered.length} of ${posts.length}`,
      noResults: isRtl
        ? "لا توجد مقالات مطابقة لبحثك. جرّب تصنيفًا أو كلمة مختلفة."
        : "No articles match your search. Try a different category or keyword.",
    },
    featured: {
      eyebrow: isRtl ? "المقال المميّز" : "Featured Article",
      readMore: isRtl ? "اقرأ الآن" : "Read now",
    },
    latest: {
      eyebrow: isRtl ? "أحدث المقالات" : "Latest",
      title: isRtl ? "أحدث المقالات" : "Latest Articles",
      readMore: isRtl ? "اقرأ المقال" : "Read article",
      comingSoon: isRtl ? "قريبًا" : "Coming soon",
    },
    topics: {
      eyebrow: isRtl ? "الموضوعات" : "Topics",
      title: isRtl
        ? "ماذا ستجد في مدونتنا؟"
        : "What You'll Find in Our Blog",
      sub: isRtl
        ? "مقالات عملية تنبثق من خبرة ميدانية طويلة في السوق السعودي."
        : "Practical articles rooted in deep experience across the Saudi market.",
      items: isRtl
        ? [
            "ضريبة القيمة المضافة والفوترة الإلكترونية",
            "الزكاة وضريبة الدخل للمنشآت",
            "إعداد وتحليل التقارير المالية",
            "المراجعة الداخلية وبيئة الرقابة",
            "إدارة التدفقات النقدية والسيولة",
            "الحوكمة والامتثال المؤسسي",
            "رؤية 2030 وأثرها على الأعمال",
            "تطوير الكوادر المحاسبية",
          ]
        : [
            "VAT & e-Invoicing compliance",
            "Corporate zakat & income tax",
            "Financial reporting & analysis",
            "Internal audit & controls",
            "Cash flow & liquidity management",
            "Corporate governance & compliance",
            "Vision 2030 impact on business",
            "Developing accounting talent",
          ],
    },
    cta: {
      eyebrow: isRtl ? "هل لديك استفسار مهني؟" : "Have a professional question?",
      title: isRtl
        ? "اطلب استشارة متخصصة من فريق الباتل"
        : "Get an expert consultation from Al-Batel",
      sub: isRtl
        ? "نقدّم استشارات مهنية موثوقة تستند إلى خبرة ميدانية طويلة وممارسات عالمية في مجالنا."
        : "We deliver trusted professional advice rooted in long field experience and global best practices.",
      contact: isRtl ? "تواصل معنا" : "Contact us",
      services: isRtl ? "خدماتنا" : "Our services",
      call: isRtl ? "اتصل بنا" : "Call us",
      email: isRtl ? "راسلنا" : "Email us",
      visit: isRtl ? "نتشرف بزيارتكم" : "Visit us",
      visitSub: isRtl ? "في جميع فروعنا" : "At any of our branches",
    },
  };

  /* ---- Locale helpers ---- */
  const formatDate = (iso) => {
    if (!iso) return "";
    try {
      return new Intl.DateTimeFormat(isRtl ? "ar-SA" : "en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(iso));
    } catch {
      return iso;
    }
  };

  const toneFor = (post) =>
    CATEGORY_TONES[post?.category?.ar] ||
    CATEGORY_TONES[post?.category?.en] ||
    DEFAULT_TONE;

  return (
    <section
      dir={dir}
      className="relative bg-white"
      aria-labelledby="blog-hero-title"
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-indigo-900/70" />
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
            <Link
              href="/"
              className="hover:text-white transition-colors duration-300"
            >
              {t.breadcrumb.home}
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">
              {t.breadcrumb.blog}
            </span>
          </nav>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t.hero.eyebrow}
          </span>

          <h1
            id="blog-hero-title"
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
              onClick={scrollToArticles}
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
          <StatCell
            value={`${posts.length}+`}
            label={t.stats.articles}
            tone="blue"
          />
          <StatCell
            value={`${categories.length}`}
            label={t.stats.categories}
            tone="green"
          />
          <StatCell value="5K+" label={t.stats.readers} tone="amber" />
          <StatCell value="10+" label={t.stats.experts} tone="blue" />
        </div>
      </div>

      {/* ===================================================
          3) FEATURED ARTICLE
          =================================================== */}
      {featured && (
        <section
          className="pt-14 sm:pt-20 pb-8 sm:pb-10 bg-white"
          aria-labelledby="featured-title"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="mb-6 sm:mb-10">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
                {t.featured.eyebrow}
              </span>
              <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            </div>

            <article
              id={featured.slug}
              className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-xl bg-white"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Visual / category tile */}
                <div
                  className={`relative min-h-[260px] md:min-h-full bg-gradient-to-br ${toneFor(
                    featured
                  )} p-8 sm:p-10 flex flex-col justify-between text-white`}
                >
                  <div
                    className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.45) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.35) 1px, transparent 1px)",
                      backgroundSize: "28px 28px, 34px 34px",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs sm:text-sm font-semibold">
                      <CategoryIcon category={featured.category} />
                      {featured.category?.[lang]}
                    </span>
                    <span className="text-xs sm:text-sm text-white/90">
                      {featured.readingTime?.[lang]}
                    </span>
                  </div>

                  <CategoryGlyph
                    category={featured.category}
                    className="relative z-10 w-28 h-28 sm:w-40 sm:h-40 self-center opacity-90 my-6 md:my-0"
                  />

                  <div className="relative z-10 flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <time dateTime={featured.datePublished}>
                      {formatDate(featured.datePublished)}
                    </time>
                  </div>
                </div>

                {/* Text */}
                <div className="p-6 sm:p-10 flex flex-col justify-center">
                  <h2
                    id="featured-title"
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 leading-snug"
                  >
                    {featured.title?.[lang]}
                  </h2>
                  <p className="mt-4 text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {featured.excerpt?.[lang]}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      href={`/blog#${featured.slug}`}
                      onClick={scrollToArticles}
                      className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {t.featured.readMore}
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
            </article>
          </div>
        </section>
      )}

      {/* ===================================================
          4) FILTERS + ARTICLES GRID
          =================================================== */}
      <section
        id="blog-articles"
        className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50"
        aria-labelledby="articles-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
              {t.latest.eyebrow}
            </span>
            <h2
              id="articles-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.latest.title}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            <p className="mt-4 text-slate-600 text-sm sm:text-base font-medium">
              {search || activeCat !== "ALL"
                ? t.filters.resultsFiltered
                : t.filters.resultsAll}
            </p>
          </div>

          {/* Search + category chips */}
          <div className="mb-8 sm:mb-10 flex flex-col gap-5">
            <form
              role="search"
              onSubmit={(e) => e.preventDefault()}
              className="relative max-w-2xl mx-auto w-full"
            >
              <label htmlFor="blog-search" className="sr-only">
                {t.filters.searchPlaceholder}
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
                  id="blog-search"
                  name="search"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t.filters.searchPlaceholder}
                  className="block w-full ps-12 pe-28 py-4 text-sm sm:text-base text-blue-950 placeholder:text-slate-400 bg-white border border-slate-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                  autoComplete="off"
                />
                {search ? (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute end-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-200 transition-all duration-300"
                  >
                    {t.filters.clear}
                  </button>
                ) : null}
              </div>
            </form>

            <div
              className="flex flex-wrap justify-center gap-2 sm:gap-3"
              role="tablist"
              aria-label={t.filters.label}
            >
              <CategoryChip
                active={activeCat === "ALL"}
                onClick={() => setActiveCat("ALL")}
                label={t.filters.all}
              />
              {categories.map((c) => (
                <CategoryChip
                  key={c.key}
                  active={activeCat === c.key}
                  onClick={() => setActiveCat(c.key)}
                  label={c[lang] || c.ar || c.en}
                />
              ))}
            </div>
          </div>

          {/* Articles grid */}
          {rest.length === 0 && filtered.length === 0 ? (
            <div className="text-center rounded-3xl ring-1 ring-slate-200 bg-slate-50 p-10 sm:p-14 max-w-3xl mx-auto">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center shadow-lg">
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
              </div>
              <p className="mt-5 text-blue-950 text-lg sm:text-xl font-semibold">
                {t.filters.noResults}
              </p>
              <button
                type="button"
                onClick={() => {
                  clearSearch();
                  setActiveCat("ALL");
                }}
                className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold shadow hover:shadow-lg transition-all duration-300"
              >
                {t.filters.all}
              </button>
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {(rest.length ? rest : filtered).map((post) => (
                <li key={post.slug}>
                  <ArticleCard
                    post={post}
                    lang={lang}
                    isRtl={isRtl}
                    toneFor={toneFor}
                    formatDate={formatDate}
                    t={t}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ===================================================
          5) TOPICS STRIP
          =================================================== */}
      <section
        className="py-14 sm:py-20 bg-white"
        aria-labelledby="topics-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
              {t.topics.eyebrow}
            </span>
            <h2
              id="topics-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.topics.title}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base lg:text-lg">
              {t.topics.sub}
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {t.topics.items.map((item, i) => (
              <li
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-green-50 ring-1 ring-slate-200 text-blue-950 text-xs sm:text-sm font-medium hover:ring-green-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================================================
          6) CTA
          =================================================== */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="blog-cta-title"
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
                id="blog-cta-title"
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
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
                >
                  {t.cta.services}
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
    </section>
  );
}

/* =========================================================
   Helper: Article card.
   ========================================================= */
function ArticleCard({ post, lang, isRtl, toneFor, formatDate, t }) {
  return (
    <article
      id={post.slug}
      className="group h-full flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:ring-blue-300 transition-all duration-500"
    >
      {/* Top gradient tile (cover surrogate) */}
      <div
        className={`relative h-36 sm:h-40 bg-gradient-to-br ${toneFor(
          post
        )} overflow-hidden`}
      >
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.45) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "20px 20px, 24px 24px",
          }}
          aria-hidden="true"
        />
        <CategoryGlyph
          category={post.category}
          className="absolute inset-0 m-auto w-16 h-16 text-white/90"
        />
        <span className="absolute top-3 start-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs font-semibold shadow-sm">
          <CategoryIcon category={post.category} />
          {post.category?.[lang]}
        </span>
        <span className="absolute top-3 end-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3.5 h-3.5"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
              clipRule="evenodd"
            />
          </svg>
          {post.readingTime?.[lang]}
        </span>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-blue-950 leading-snug group-hover:text-blue-800 transition-colors duration-300">
          {post.title?.[lang]}
        </h3>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
          {post.excerpt?.[lang]}
        </p>

        <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm text-slate-500">
          <time
            dateTime={post.datePublished}
            className="inline-flex items-center gap-1.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-blue-700"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            {formatDate(post.datePublished)}
          </time>
          <span
            className={`inline-flex items-center gap-1 font-semibold text-blue-700 group-hover:text-green-700 transition-colors duration-300`}
          >
            {t.latest.comingSoon}
          </span>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   Helper: Category chip (filter tab).
   ========================================================= */
function CategoryChip({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      role="tab"
      aria-selected={active}
      className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md"
          : "bg-white text-blue-950 ring-1 ring-slate-200 hover:ring-blue-500 hover:-translate-y-0.5"
      }`}
    >
      {label}
    </button>
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
   Helper: Category SVG glyph + icon.
   ========================================================= */
function CategoryGlyph({ category, className = "" }) {
  const k = category?.en || "";
  // Returns a large decorative svg by category.
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
    className,
  };
  if (k === "Tax")
    return (
      <svg {...common}>
        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
          clipRule="evenodd"
        />
      </svg>
    );
  if (k === "Accounting")
    return (
      <svg {...common}>
        <path
          fillRule="evenodd"
          d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    );
  if (k === "Audit")
    return (
      <svg {...common}>
        <path
          fillRule="evenodd"
          d="M12 1.5a.75.75 0 0 1 .5.191l8.25 7.5a.75.75 0 0 1 .25.559V19.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 19.5V9.75a.75.75 0 0 1 .25-.559l8.25-7.5A.75.75 0 0 1 12 1.5ZM9.75 14.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm3.53-6.53a.75.75 0 1 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06L11.06 10.5h2.69a.75.75 0 0 0 0-1.5H11.06l2.22-2.22Z"
          clipRule="evenodd"
        />
      </svg>
    );
  if (k === "Zakat & Tax")
    return (
      <svg {...common}>
        <path
          fillRule="evenodd"
          d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.04 16.5.5-1.5h6.42l.5 1.5H8.29Zm7.46-12a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-3 2.25a.75.75 0 0 0-1.5 0v3.75a.75.75 0 0 0 1.5 0V9Zm-3 2.25a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z"
          clipRule="evenodd"
        />
      </svg>
    );
  // default / Financial Advisory
  return (
    <svg {...common}>
      <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
      <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
      <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
      <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
    </svg>
  );
}

function CategoryIcon({ category }) {
  return (
    <CategoryGlyph
      category={category}
      className="w-3.5 h-3.5 text-current"
    />
  );
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
