"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "../contexts/langContext";

/* =========================================================
   Static contact info (kept outside the component so React
   doesn't re-allocate it on every render).
   ========================================================= */
const CONTACT = {
  phone: "+966550554262",
  email: "albatelcpa@albatelcpa.com",
};

/* =========================================================
   Main Component
   Receives `partners` as a prop from the Server Component
   (see src/app/partners/page.js). Works in both AR/EN
   using a single JSX tree driven by the `t` translation
   object + the `dir` value from LanguageContext.
   ========================================================= */
export default function Partners({ partners: initialPartners = [] }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  const [partners, setPartners] = useState(
    Array.isArray(initialPartners) ? initialPartners : []
  );

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    setPartners(Array.isArray(initialPartners) ? initialPartners : []);
  }, [initialPartners]);

  /* -----------------------------------------------------
     All texts in one place for easy maintenance.
     ----------------------------------------------------- */
  const t = {
    hero: {
      badge: isRtl ? "شركاؤنا الكرام" : "Our Valued Partners",
      cpa: isRtl ? "محاسبون ومراجعون قانونيون" : "Certified Public Accountants",
      title: isRtl
        ? "عملاؤنا هم جوهر نجاحنا"
        : "Our Clients Are the Core of Our Success",
      subtitle: isRtl
        ? "شراكة مبنية على الثقة والخبرة، نحو قرارات مالية أكثر دقة ونجاح مستدام."
        : "A partnership built on trust and experience — toward more accurate financial decisions and sustainable success.",
    },
    stats: {
      partners: isRtl ? "شريك نفخر بهم" : "Trusted Partners",
      years: isRtl ? "سنوات من الخبرة" : "Years of Experience",
      sectors: isRtl ? "قطاعات نخدمها" : "Sectors Served",
    },
    grid: {
      eyebrow: isRtl ? "شركاء النجاح" : "Success Partners",
      heading: isRtl
        ? "نخدم مجموعة كبيرة من الهيئات والمؤسسات"
        : "We serve a wide range of organizations and institutions",
      sub: isRtl
        ? "في القطاعين العام والخاص عبر مختلف الصناعات داخل المملكة."
        : "Across the public and private sectors, covering diverse industries across the Kingdom.",
      empty: isRtl
        ? "سنقوم بتحديث قائمة الشركاء قريباً."
        : "Our partners list is being updated.",
      defaultAlt: isRtl ? "شعار شريك" : "Partner logo",
    },
    sectors: {
      heading: isRtl ? "قطاعات نعمل بها" : "Sectors We Work In",
      sub: isRtl
        ? "خبرة عميقة عبر قطاعات متنوعة تضمن تقديم استشارات مهنية مُخصّصة."
        : "Deep expertise across diverse sectors ensures tailored professional consulting.",
      list: isRtl
        ? [
            "القطاع الحكومي",
            "الشركات المساهمة",
            "الصناعة والإنتاج",
            "التجزئة والتجارة",
            "التعليم",
            "الرعاية الصحية",
            "العقارات والبناء",
            "المقاولات",
            "الاتصالات والتقنية",
            "المنظمات غير الربحية",
            "الخدمات المالية",
            "النقل واللوجستيات",
          ]
        : [
            "Government",
            "Public Companies",
            "Manufacturing",
            "Retail & Trade",
            "Education",
            "Healthcare",
            "Real Estate",
            "Contracting",
            "Telecom & Tech",
            "Non-profits",
            "Financial Services",
            "Logistics",
          ],
    },
    cta: {
      eyebrow: isRtl ? "انضم إلينا" : "Join Us",
      heading: isRtl ? "انضم إلى عائلة شركائنا" : "Join Our Partners Family",
      sub: isRtl
        ? "تواصل معنا اليوم واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك المالية."
        : "Contact us today and discover how we can help you achieve your financial goals.",
      contact: isRtl ? "تواصل معنا الآن" : "Contact us now",
      rfp: isRtl ? "اطلب عرض سعر" : "Request a Proposal",
      call: isRtl ? "اتصل بنا" : "Call us",
      email: isRtl ? "راسلنا" : "Email us",
      visit: isRtl ? "نتشرف بزيارتكم" : "Visit us",
      visitSub: isRtl ? "في جميع فروعنا" : "At any of our branches",
    },
    sr: {
      hero: isRtl ? "قسم البانر الرئيسي" : "Hero banner",
      stats: isRtl ? "إحصائيات سريعة" : "Quick stats",
      partners: isRtl ? "قائمة الشركاء" : "Partners list",
      sectors: isRtl ? "القطاعات التي نخدمها" : "Sectors we serve",
      join: isRtl ? "انضم إلينا" : "Join us",
    },
  };

  const partnersCount = partners.length;

  return (
    <section dir={dir} className="relative bg-white" aria-label={t.sr.hero}>
      {/* ===================================================
          1) HERO
          =================================================== */}
      <header
        className="relative w-full  overflow-hidden"
        aria-labelledby="partners-hero-title"
      >
        {/* background image */}
        <img
          src="/homeSlide3.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/75 to-green-700/55" />
        {/* subtle pattern */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px, 34px 34px",
          }}
        />

        {/* CPA top badge */}
        <div
          data-aos="fade-down"
          className="absolute  md:top-32 start-4 md:start-10 z-20"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {t.hero.cpa}
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

        {/* hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-24 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-32 text-center">
          <span
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t.hero.badge}
          </span>

          <h1
            id="partners-hero-title"
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 text-white font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight drop-shadow-lg"
          >
            {t.hero.title}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-5 mx-auto max-w-3xl text-white/90 text-sm sm:text-base lg:text-xl leading-relaxed"
          >
            {t.hero.subtitle}
          </p>
        </div>

        {/* wave divider */}
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
          2) STATS STRIP (floats over the hero bottom)
          =================================================== */}
      <div
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 -mt-10 sm:-mt-12"
        aria-label={t.sr.stats}
      >
        <div
          data-aos="fade-up"
          className="grid grid-cols-3 gap-2 sm:gap-5 bg-white rounded-2xl shadow-xl ring-1 ring-slate-200 p-4 sm:p-7"
        >
          <StatCell
            value={`${Math.max(partnersCount, 1)}+`}
            label={t.stats.partners}
            tone="blue"
          />
          <StatCell value="20+" label={t.stats.years} tone="green" />
          <StatCell
            value={`${t.sectors.list.length}+`}
            label={t.stats.sectors}
            tone="amber"
          />
        </div>
      </div>

      {/* ===================================================
          3) PARTNERS GRID
          =================================================== */}
      <section
        className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-20 lg:py-24"
        aria-labelledby="partners-grid-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
              {t.grid.eyebrow}
            </span>
            <h2
              id="partners-grid-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.grid.heading}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base lg:text-lg">
              {t.grid.sub}
            </p>
          </div>

          {partnersCount > 0 ? (
            <ul
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5"
              aria-label={t.sr.partners}
            >
              {partners.map((partner, i) => (
                <PartnerCard
                  key={partner?.id ?? i}
                  partner={partner}
                  index={i}
                  fallbackAlt={t.grid.defaultAlt}
                />
              ))}
            </ul>
          ) : (
            <p className="text-center text-slate-500 py-12">{t.grid.empty}</p>
          )}
        </div>
      </section>

      {/* ===================================================
          4) SECTORS (extra SEO content — keyword-rich tags)
          =================================================== */}
      <section
        className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-14 sm:py-20"
        aria-labelledby="sectors-title"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div data-aos="fade-up" className="text-center mb-8 sm:mb-10">
            <h2
              id="sectors-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.sectors.heading}
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base lg:text-lg">
              {t.sectors.sub}
            </p>
          </div>

          <ul
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
            aria-label={t.sr.sectors}
          >
            {t.sectors.list.map((sector, i) => (
              <li key={i}>
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200 text-blue-950 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md hover:border-green-500 hover:-translate-y-0.5 transition-all duration-300">
                  {sector}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===================================================
          5) JOIN CTA
          =================================================== */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="join-title"
      >
        <div className="relative bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/join.png')] bg-cover bg-center">
          {/* Blue tint overlay — keeps the image visible while tinting it blue so white text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/55 to-blue-700/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-blue-950/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
            <div data-aos="fade-up" className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white/90 text-xs sm:text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {t.cta.eyebrow}
              </span>

              <h2
                id="join-title"
                className="mt-5 text-2xl sm:text-3xl lg:text-5xl font-bold text-white drop-shadow-lg"
              >
                {t.cta.heading}
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
                  href="/rfp"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
                >
                  {t.cta.rfp}
                </Link>
              </div>
            </div>

            {/* Contact methods */}
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
              aria-label={t.sr.join}
            >
              <ContactMethod
                label={t.cta.call}
                value={CONTACT.phone}
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
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
                tone="green"
              />
              <ContactMethod
                label={t.cta.email}
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
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
                tone="blue"
              />
              <ContactMethod
                label={t.cta.visit}
                value={t.cta.visitSub}
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
                tone="amber"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          6) SEO — Structured Data
          =================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: isRtl
              ? "الباتل وشركاؤه للاستشارات المهنية"
              : "Al-Batel & Co. Professional Services",
            url: "https://www.albatelcpa.com/partners",
            telephone: CONTACT.phone,
            email: CONTACT.email,
            areaServed: "SA",
            makesOffer: t.sectors.list.map((s) => ({
              "@type": "Offer",
              category: s,
            })),
          }),
        }}
      />
    </section>
  );
}

/* =========================================================
   Helper: Statistic cell used in the strip above the grid.
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
   Helper: A single Partner logo card.
   Defensive against different field names (`image`, `logo`,
   `img`, `url`) and resolves an appropriate alt text.
   ========================================================= */
function PartnerCard({ partner, index, fallbackAlt }) {
  const src =
    partner?.image || partner?.logo || partner?.img || partner?.url || "";

  const alt =
    (typeof partner?.name === "string" && partner.name) ||
    partner?.name?.en ||
    partner?.name?.ar ||
    partner?.title ||
    `${fallbackAlt} ${index + 1}`;

  const href = partner?.website || partner?.link || null;

  const inner = (
    <figure className="relative h-full w-full rounded-2xl bg-white ring-1 ring-slate-200 overflow-hidden transition-all duration-500 hover:ring-green-400 hover:shadow-xl hover:shadow-green-100 hover:-translate-y-1">
      <div className="flex items-center justify-center h-24 sm:h-32 md:h-36 lg:h-40 p-4">
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full rounded-xl bg-slate-100" />
        )}
      </div>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </figure>
  );

  return (
    <li
      data-aos="fade-up"
      data-aos-delay={(index % 6) * 60}
      className="group"
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={alt}
          className="block h-full"
        >
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

/* =========================================================
   Helper: Contact method card (Call / Email / Visit).
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
