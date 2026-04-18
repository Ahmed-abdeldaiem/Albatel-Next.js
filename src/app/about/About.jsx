"use client";

import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "../contexts/langContext";
import Certificates from "../components/Certificates/Certificates";

/* =========================================================
   Static data — kept outside the component so React doesn't
   re-allocate it on every render.
   ========================================================= */
const CONTACT = {
  phone: "+966550554262",
  phoneDisplay: "+966 55 055 4262",
  email: "albatelcpa@albatelcpa.com",
  whatsapp: "https://wa.me/966550554262",
  profilePdf:
    "https://drive.google.com/file/d/1BBEoYERTflhKtBvB-y8LPT2DX7KvD2SE/view?usp=sharing",
  mainBranchMap:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.871481582673!2d46.77138042674242!3d24.6969443008465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07ef0e77e823%3A0x42db3ce2638cbcb5!2salbatel%20%26%20co.%20professional%20services!5e0!3m2!1sen!2seg!4v1727558304978!5m2!1sen!2seg",
};

const KSA_BRANCHES = [
  { id: "Riyadh_Branch", ar: "الرياض", en: "Riyadh" },
  { id: "Jeddah_Main_Branch", ar: "جدة الأول", en: "Jeddah 1" },
  { id: "Jeddah_Second_Branch", ar: "جدة الثاني", en: "Jeddah 2" },
  { id: "Madinah_branch", ar: "المدينة المنوّرة", en: "Madinah" },
  { id: "Khobar_Branch", ar: "الخبر", en: "Khobar" },
  { id: "Hafar_Al-Batin_Branch", ar: "حفر الباطن", en: "Hafar Al-Batin" },
  { id: "Khamis_Mushait_Branch", ar: "خميس مشيط", en: "Khamis Mushait" },
  { id: "Jizan_Branch", ar: "جازان", en: "Jazan" },
  { id: "Al-Qassim_Branch", ar: "القصيم", en: "Al-Qassim" },
];

const INTERNATIONAL_BRANCHES = [
  {
    ar: "مملكة البحرين",
    en: "Bahrain",
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/%D9%85%D9%85%D9%84%D9%83%D8%A9%20%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D9%86.png",
  },
  {
    ar: "جمهورية مصر العربية",
    en: "Egypt",
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/New%20folder/egypt.png",
  },
  {
    ar: "دولة قطر",
    en: "Qatar",
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/New%20folder/q1.png",
  },
  {
    ar: "سلطنة عمان",
    en: "Oman",
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/%D8%B3%D9%84%D8%B7%D9%86%D8%A9%20%D8%B9%D9%85%D8%A7%D9%86.png",
  },
];

/* =========================================================
   Main component
   Single JSX tree for AR/EN using `t` + `dir`.
   ========================================================= */
export default function About() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const scrollToContent = useCallback(() => {
    const section = document.getElementById("about-content");
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  /* Video player state (custom poster overlay that disappears on first play) */
  const videoRef = useRef(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const handlePlayVideo = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    setVideoStarted(true);
    const p = el.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        /* autoplay blocked — native controls will still work */
      });
    }
  }, []);

  /* ---- All UI strings in one place ---- */
  const t = {
    cpa: isRtl ? "محاسبون ومراجعون قانونيون" : "Certified Public Accountants",
    breadcrumb: {
      home: isRtl ? "الرئيسية" : "Home",
      about: isRtl ? "عن الشركة" : "About Us",
    },
    hero: {
      eyebrow: isRtl ? "عن الشركة" : "About the Company",
      title: isRtl
        ? "شركة باتل عبدالله الباتل وشركاؤه"
        : "Batel Abdullah Al-Batel & Partners",
      subtitle: isRtl
        ? "للاستشارات المهنية"
        : "For Professional Consulting",
      description1: isRtl
        ? "رحلة من الثقة والتميّز في الخدمات المالية والمحاسبية منذ عام 2006م."
        : "A journey of trust and excellence in financial and accounting services since 2006.",
      description2: isRtl
        ? "نخدم عملاءنا بأعلى معايير الجودة والمهنية."
        : "Serving our clients with the highest standards of quality and professionalism.",
      exploreBtn: isRtl ? "تعرّف علينا" : "Know More",
      profileBtn: isRtl ? "الملف التعريفي" : "Company Profile",
    },
    stats: {
      founded: isRtl ? "سنة التأسيس" : "Founded",
      staff: isRtl ? "كادر مؤهل" : "Qualified Staff",
      ksa: isRtl ? "فروع داخل المملكة" : "Branches in KSA",
      intl: isRtl ? "دول خارج المملكة" : "International Offices",
    },
    history: {
      eyebrow: isRtl ? "بدايتنا" : "Our Beginning",
      title: isRtl ? "تاريخ الشركة" : "Our History",
      p1: isRtl
        ? "تأسست شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية بموجب ترخيص الهيئة السعودية للمراجعين والمحاسبين بمزاولة مهنة المحاسبة والمراجعة منذ 1427/11/08هـ الموافق 2006/11/29م."
        : "Batel Abdullah Al-Batel & Partners Professional Consulting was established under the license of the Saudi Organization for Certified Public Accountants (SOCPA) to practice accounting and auditing since 08/11/1427 AH — 29/11/2006 AD.",
      p2: isRtl
        ? "الشركة حاصلة على تراخيص لتقديم خدمات مراجعة الحسابات وتدقيقها، والاستشارات المالية، وخدمات المحاسبة والاستشارات الإدارية، وإعداد كشوف الذمة المالية للضرائب، والاستشارات في مجال الزكاة وضريبة الدخل، وخدمات ضريبة القيمة المضافة."
        : "Licensed to provide auditing, financial consulting, accounting services, management consulting, tax return preparation, zakat and income tax consulting, and value-added tax services.",
      hqPoint: isRtl
        ? "الرياض هي نقطة البداية والفرع الرئيسي للشركة."
        : "Riyadh is the starting point and the main branch of the company.",
      expansionPoint: isRtl
        ? "توسعنا لنخدم عملاءنا من خلال شبكة فروع تغطي المملكة ودول الخليج."
        : "We have expanded to serve our clients through a branch network covering KSA and Gulf countries.",
    },
    video: {
      eyebrow: isRtl ? "شاهد قصتنا" : "Watch Our Story",
      title: isRtl
        ? "رحلتنا باختصار"
        : "Our Journey in Brief",
      sub: isRtl
        ? "تعرّف على شركة الباتل عبر فيديو قصير يستعرض رؤيتنا، خبراتنا، وكيف ننمو بثقة عملائنا منذ عام 2006."
        : "Get to know Al-Batel through a short video showcasing our vision, expertise, and how we grow with our clients' trust since 2006.",
      playLabel: isRtl ? "تشغيل الفيديو التعريفي" : "Play introduction video",
    },
    mainBranch: {
      eyebrow: isRtl ? "موقعنا الرئيسي" : "Head Office",
      title: isRtl ? "الفرع الرئيسي — الرياض" : "Main Branch — Riyadh",
      address: isRtl
        ? "الرياض — حي الربوة، الطريق الدائري الشرقي، 7162 مبنى السمو، ص.ب 28565، الرمز البريدي 11447"
        : "Riyadh — Ar Rabwah Dist., Eastern Ring Rd, Building 7162 (Al Sumow), P.O. Box 28565, Postal Code 11447",
    },
    ksaBranches: {
      eyebrow: isRtl ? "حضور محلي" : "Local Presence",
      title: isRtl
        ? "فروعنا داخل المملكة العربية السعودية"
        : "Our Branches Inside Saudi Arabia",
      sub: isRtl
        ? "حضور قوي يغطي أبرز المدن السعودية لخدمة عملائنا أينما كانوا."
        : "A strong presence covering major Saudi cities to serve our clients wherever they are.",
    },
    intlBranches: {
      eyebrow: isRtl ? "حضور إقليمي" : "Regional Presence",
      title: isRtl
        ? "فروعنا خارج المملكة العربية السعودية"
        : "Our Branches Outside Saudi Arabia",
      sub: isRtl
        ? "نخدم عملاءنا عبر عدد من الدول العربية بشبكة متكاملة."
        : "Serving our clients across several Arab countries through an integrated network.",
    },
    team: {
      eyebrow: isRtl ? "فريقنا" : "Our People",
      title: isRtl
        ? "أكثر من ثمانين كادر مؤهّل علميًا"
        : "More than eighty professionally qualified staff members",
      items: isRtl
        ? [
            "أصحاب خبرة واسعة في جميع الجوانب المالية والإدارية والقانونية.",
            "فريق كامل من الموظفات للعمل في الأقسام النسائية أو المواقع التي تتطلب ذلك.",
            "نحرص على جذب أفضل الكفاءات السعودية وتوفير بيئة عمل محفزة تُسهم في تحقيق رؤية المملكة 2030.",
            "نحقّق نسب سعودة تضع الشركة في النطاق البلاتيني (معدل التوطين 56% ومستوى النطاقات أخضر مرتفع).",
          ]
        : [
            "Possess extensive experience in all financial, administrative and legal aspects.",
            "A full team of female employees for women's departments or locations that require it.",
            "Committed to attracting the best Saudi talent and providing a stimulating work environment supporting Vision 2030.",
            "Achieving Saudization rates placing the company in the Platinum band (56% localization, high green).",
        ],
    },
    teamIcons: [
      "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon2.png",
      "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/woman%20Icon.png",
      "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/saudiLogo.png",
      "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon3.png",
    ],
    certificates: {
      eyebrow: isRtl ? "اعتمادات دولية" : "Global Accreditations",
      title: isRtl
        ? "معتمدون من أفضل الجهات المهنية"
        : "Certified by leading professional organizations",
      sub: isRtl
        ? "يحمل فريقنا شهادات مهنية معتمدة من أرقى المؤسسات المحاسبية والمالية عالميًا."
        : "Our team holds professional certifications from the most prestigious accounting and financial institutions worldwide.",
    },
    cta: {
      eyebrow: isRtl ? "ابدأ الآن" : "Get Started",
      title: isRtl ? "انضم إلى عائلة عملائنا" : "Join Our Clients Family",
      sub: isRtl
        ? "تواصل معنا اليوم واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك المالية."
        : "Contact us today and discover how we can help you achieve your financial goals.",
      contact: isRtl ? "تواصل معنا الآن" : "Contact us now",
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
      aria-labelledby="about-hero-title"
    >
      {/* ===================================================
          1) HERO
          =================================================== */}
      <header className="relative w-full overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
        <img
          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/about.png"
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

        {/* Vision 2030 */}
        <img
          data-aos="fade-up"
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
            <span className="text-white font-semibold">{t.breadcrumb.about}</span>
          </nav>

          <span
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t.hero.eyebrow}
          </span>

          <h1
            id="about-hero-title"
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 text-white font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight drop-shadow-lg"
          >
            {t.hero.title}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-2 text-white/90 font-semibold text-lg sm:text-2xl lg:text-3xl"
          >
            {t.hero.subtitle}
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-5 mx-auto max-w-3xl text-white/90 text-sm sm:text-base lg:text-xl leading-relaxed"
          >
            {t.hero.description1}
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-2 mx-auto max-w-3xl text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            {t.hero.description2}
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={scrollToContent}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.hero.exploreBtn}
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
              href={CONTACT.profilePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                  clipRule="evenodd"
                />
                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
              </svg>
              {t.hero.profileBtn}
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
          2) STATS STRIP (floats over hero bottom)
          =================================================== */}
      <div
        id="about-content"
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 -mt-10 sm:-mt-12"
      >
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-5 bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-4 sm:p-7"
        >
          <StatCell value="2006" label={t.stats.founded} tone="blue" />
          <StatCell value="80+" label={t.stats.staff} tone="green" />
          <StatCell
            value={`${KSA_BRANCHES.length}`}
            label={t.stats.ksa}
            tone="amber"
          />
          <StatCell
            value={`${INTERNATIONAL_BRANCHES.length}`}
            label={t.stats.intl}
            tone="blue"
          />
        </div>
      </div>

      {/* ===================================================
          3) COMPANY HISTORY
          =================================================== */}
      <section
        className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-20 lg:py-24"
        aria-labelledby="history-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text */}
            <div data-aos="fade-up" className={isRtl ? "lg:order-2" : ""}>
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
                {t.history.eyebrow}
              </span>
              <h2
                id="history-title"
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
              >
                {t.history.title}
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />

              <p className="mt-6 text-slate-700 text-base sm:text-lg leading-loose text-justify">
                {t.history.p1}
              </p>
              <p className="mt-4 text-slate-700 text-base sm:text-lg leading-loose text-justify">
                {t.history.p2}
              </p>

              <ul className="mt-6 space-y-3">
                <InfoRow
                  icon="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/locationIcon.png"
                  text={t.history.hqPoint}
                />
                <InfoRow
                  icon="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/world%20icon.png"
                  text={t.history.expansionPoint}
                />
              </ul>
            </div>

            {/* Image */}
            <div
              data-aos="fade-up"
              data-aos-delay="120"
              className={isRtl ? "lg:order-1" : ""}
            >
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-2xl">
                <img
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/logo.jpg"
                  alt={t.history.title}
                  loading="lazy"
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 start-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-blue-950 text-xs font-semibold shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {isRtl ? "منذ 2006" : "Since 2006"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          3.5) INTRO VIDEO
          =================================================== */}
      <section
        className="relative py-14 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900"
        aria-labelledby="video-title"
      >
        {/* Decorative glow blobs */}
        <div
          className="pointer-events-none absolute -top-24 -start-24 w-80 h-80 rounded-full bg-green-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -end-24 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl"
          aria-hidden="true"
        />
        {/* Subtle dotted pattern */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px, 34px 34px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div data-aos="fade-up" className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {t.video.eyebrow}
            </span>
            <h2
              id="video-title"
              className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg"
            >
              {t.video.title}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-green-400 via-blue-300 to-green-400" />
            <p className="mt-5 mx-auto max-w-2xl text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
              {t.video.sub}
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="120"
            className="relative group rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-2xl shadow-black/40"
          >
            {/* Gradient border glow */}
            <div
              className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-r from-green-500/30 via-blue-500/30 to-green-500/30 opacity-60 blur-xl group-hover:opacity-80 transition-opacity duration-500"
              aria-hidden="true"
            />

            <div className="relative rounded-3xl overflow-hidden bg-black">
              <video
                ref={videoRef}
                src="/video.mp4"
                poster="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/about.png"
                preload="metadata"
                playsInline
                controls={videoStarted}
                className="block w-full aspect-video object-cover bg-black"
                aria-label={t.video.playLabel}
              />

              {/* Custom play overlay (hides after first play) */}
              {!videoStarted && (
                <button
                  type="button"
                  onClick={handlePlayVideo}
                  aria-label={t.video.playLabel}
                  className="absolute inset-0 flex items-center justify-center group/play focus:outline-none"
                >
                  {/* dark gradient overlay for legibility over the poster */}
                  <span className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/30 to-transparent transition-opacity duration-500 group-hover/play:opacity-80" />

                  {/* play button */}
                  <span className="relative flex items-center justify-center">
                    {/* pulse rings */}
                    <span className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/20 animate-ping" />
                    <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/30" />
                    {/* main button */}
                    <span className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-2xl shadow-green-500/50 flex items-center justify-center transition-transform duration-300 group-hover/play:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`w-8 h-8 sm:w-9 sm:h-9 text-white ${
                          isRtl ? "-scale-x-100" : ""
                        } translate-x-0.5`}
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </span>

                  {/* Caption at the bottom */}
                  <span className="absolute bottom-4 sm:bottom-6 inset-x-0 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium">
                      {t.video.playLabel}
                    </span>
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          4) MAIN BRANCH (Riyadh) + map
          =================================================== */}
      <section
        className="bg-white py-14 sm:py-20"
        aria-labelledby="main-branch-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div data-aos="fade-up" className="text-center mb-8 sm:mb-10">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
              {t.mainBranch.eyebrow}
            </span>
            <h2
              id="main-branch-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.mainBranch.title}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />

            <div className="mt-6 inline-flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-white ring-1 ring-slate-200 max-w-3xl text-start">
              <span className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shadow-md">
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
              </span>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {t.mainBranch.address}
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="120"
            className="rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-xl"
          >
            <iframe
              src={CONTACT.mainBranchMap}
              title={t.mainBranch.title}
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ===================================================
          5) KSA BRANCHES GRID
          =================================================== */}
      <section
        className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-14 sm:py-20"
        aria-labelledby="ksa-branches-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
              {t.ksaBranches.eyebrow}
            </span>
            <h2
              id="ksa-branches-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.ksaBranches.title}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base lg:text-lg">
              {t.ksaBranches.sub}
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {KSA_BRANCHES.map((branch, i) => (
              <li key={branch.id} data-aos="fade-up" data-aos-delay={(i % 5) * 60}>
                <Link
                  href={`/branch/${branch.id}`}
                  className="group block h-full p-5 rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:ring-green-500 hover:-translate-y-1 transition-all duration-500 text-center"
                >
                  <span className="inline-flex w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <h3 className="mt-4 text-base sm:text-lg font-bold text-blue-950 group-hover:text-green-700 transition-colors duration-300">
                    {branch[lang]}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-slate-500 group-hover:text-green-600 transition-colors duration-300">
                    {isRtl ? "تفاصيل الفرع" : "Branch details"}
                    <span
                      className={`transition-transform duration-300 ${
                        isRtl
                          ? "group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      {isRtl ? "←" : "→"}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================================================
          6) INTERNATIONAL BRANCHES
          =================================================== */}
      <section
        className="bg-white py-14 sm:py-20"
        aria-labelledby="intl-branches-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
              {t.intlBranches.eyebrow}
            </span>
            <h2
              id="intl-branches-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.intlBranches.title}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base lg:text-lg">
              {t.intlBranches.sub}
            </p>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {INTERNATIONAL_BRANCHES.map((country, i) => (
              <li key={i} data-aos="fade-up" data-aos-delay={(i % 4) * 80}>
                <article className="group h-full flex flex-col items-center text-center p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-200 hover:ring-green-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                    <img
                      src={country.img}
                      alt={country[lang]}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mt-4 text-lg sm:text-xl font-bold text-blue-950 group-hover:text-green-700 transition-colors duration-300">
                    {country[lang]}
                  </h3>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================================================
          7) TEAM / SAUDIZATION
          =================================================== */}
      <section
        className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-14 sm:py-20"
        aria-labelledby="team-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div
              data-aos="fade-up"
              className={`hidden lg:block ${isRtl ? "lg:order-2" : ""}`}
            >
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-2xl">
                <img
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/team.png"
                  alt={t.team.title}
                  loading="lazy"
                  className="w-full h-[440px] object-cover"
                />
              </div>
            </div>

            {/* Text + items */}
            <div data-aos="fade-up" data-aos-delay="120">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
                {t.team.eyebrow}
              </span>
              <h2
                id="team-title"
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 leading-snug"
              >
                {t.team.title}
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />

              <ul className="mt-8 space-y-3">
                {t.team.items.map((item, i) => (
                  <li
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 60}
                    className="group flex items-start gap-3 p-4 rounded-xl bg-white ring-1 ring-slate-200 hover:ring-green-500 hover:shadow-md transition-all duration-300"
                  >
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={t.teamIcons[i]}
                        alt=""
                        aria-hidden="true"
                        className="w-6 h-6 object-contain brightness-0 invert"
                        loading="lazy"
                      />
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          8) CERTIFICATES (keeps existing component)
          =================================================== */}
      <section
        className="bg-white py-14 sm:py-20"
        aria-labelledby="certificates-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div data-aos="fade-up" className="text-center mb-10">
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
            <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base lg:text-lg">
              {t.certificates.sub}
            </p>
          </div>

          <Certificates />
        </div>
      </section>

      {/* ===================================================
          9) CTA
          =================================================== */}
      <section className="relative overflow-hidden" aria-labelledby="cta-title">
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
          10) SEO — Structured Data (Organization + Breadcrumb)
          =================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "AccountingService",
                name: isRtl
                  ? "الباتل وشركاؤه للاستشارات المهنية"
                  : "Al-Batel & Co. Professional Services",
                foundingDate: "2006-11-29",
                url: "https://www.albatelcpa.com/about",
                logo: "https://www.albatelcpa.com/BatelLogo1.png",
                telephone: CONTACT.phone,
                email: CONTACT.email,
                areaServed: ["SA", "BH", "EG", "QA", "OM"],
                numberOfEmployees: { "@type": "QuantitativeValue", value: 80 },
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "Ar Rabwah Dist., Eastern Ring Rd, Building 7162",
                  addressLocality: "Riyadh",
                  postalCode: "11447",
                  addressCountry: "SA",
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
                    name: t.breadcrumb.about,
                    item: "https://www.albatelcpa.com/about",
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
   Helper: Statistic cell (floats above the grid).
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
   Helper: Info row used in the history section.
   ========================================================= */
function InfoRow({ icon, text }) {
  return (
    <li className="flex items-start gap-3 p-3 rounded-xl bg-white ring-1 ring-slate-200">
      <span className="shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-md">
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="w-5 h-5 object-contain brightness-0 invert"
          loading="lazy"
        />
      </span>
      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
        {text}
      </p>
    </li>
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
