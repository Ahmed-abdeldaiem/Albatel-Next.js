"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "../contexts/langContext";

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
   "Responsibility" values — displayed as a grid.
   Icons are the existing ones in the project's CDN.
   ========================================================= */
const RESPONSIBILITY_ICONS = [
  "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon2.png",
  "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon1.png",
  "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon5.png",
  "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon4.png",
  "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon3.png",
];

/* Helper: trim a long description to a short snippet. */
const truncate = (text, words = 16) => {
  if (!text) return "";
  const normalized = text.replace(/\s+/g, " ").trim();
  const parts = normalized.split(" ");
  if (parts.length <= words) return normalized;
  return `${parts.slice(0, words).join(" ")}…`;
};

/* =========================================================
   Main component
   Receives `services` as a prop from the Server Component
   (see src/app/services/page.js). Single JSX tree for both
   AR/EN using `t` + `dir` from LanguageContext.
   ========================================================= */
export default function Services({ services = [] }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  const scrollToServices = useCallback(() => {
    const section = document.getElementById("services-list");
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  if (!mounted) return null;

  /* ---- All UI strings in one place ---- */
  const t = {
    cpa: isRtl ? "محاسبون ومراجعون قانونيون" : "Certified Public Accountants",
    hero: {
      eyebrow: isRtl ? "خدماتنا المهنية" : "Our Professional Services",
      title: isRtl
        ? "حلول مالية متكاملة بمعايير عالمية"
        : "Integrated Financial Solutions with Global Standards",
      subtitle: isRtl
        ? "نقدّم خدمات استشارية مهنية مخصّصة لتمكين العملاء من اتخاذ قرارات مالية مدروسة، وحلول شاملة للشركات والمؤسسات والأفراد."
        : "We offer tailored professional consulting services that empower clients to make informed financial decisions — comprehensive solutions for companies, institutions and individuals.",
      explore: isRtl ? "تعرّف على خدماتنا" : "Explore Services",
      contact: isRtl ? "تواصل معنا" : "Contact Us",
    },
    intro: {
      eyebrow: isRtl ? "ماذا نقدّم" : "What We Offer",
      title: isRtl
        ? "مجموعة شاملة من الخدمات المالية والمحاسبية"
        : "A comprehensive range of financial & accounting services",
      subtitle: isRtl
        ? "اختر الخدمة الأنسب لاحتياج عملك — كل خدمة مصمّمة لتحقيق نتائج ملموسة."
        : "Pick the service that fits your business needs — each one is designed to deliver measurable outcomes.",
      empty: isRtl
        ? "سيتم تحديث قائمة الخدمات قريباً."
        : "Our services list is being updated.",
      more: isRtl ? "اعرف المزيد" : "Learn more",
    },
    why: {
      eyebrow: isRtl ? "قيمنا ومسؤوليتنا" : "Our Values & Commitment",
      title: isRtl
        ? "نعي حجم المسؤولية ونؤمن بأن العميل هو العنصر الأساسي لنجاحنا"
        : "We understand our responsibility and believe the client is the cornerstone of our success",
      items: isRtl
        ? [
            "نلتزم بأعلى معايير الأخلاقيات المهنية، ونضمن الامتثال للمعايير الدولية للمراجعة والمحاسبة.",
            "نواكب التطوّر في المجال مما يجعلنا على دراية كاملة بالتشريعات القانونية والتطوّرات الجديدة.",
            "نسعى جاهدين لتقديم خدمات تحقّق الأهداف المالية والمهنية لعملائنا.",
            "نلتزم التزامًا كاملاً بسرعة الاستجابة وسريّة المعلومات المقدّمة لنا.",
            "نحرص على تقديم الاستشارة والتوجيه بكل شفافية واحترافية وبقدر كبير من الجودة والتميّز.",
          ]
        : [
            "We adhere to the highest professional ethics and comply with international auditing and accounting standards.",
            "We keep pace with industry developments, staying fully aware of legal regulations and new trends.",
            "We strive to deliver services that achieve our clients' financial and professional goals.",
            "We are fully committed to fast response and strict confidentiality of the information shared with us.",
            "We provide advice and guidance with full transparency, professionalism and a high level of quality and excellence.",
          ],
    },
    cta: {
      eyebrow: isRtl ? "ابدأ الآن" : "Get Started",
      title: isRtl ? "هل تحتاج إلى استشارة مالية؟" : "Do you need financial advice?",
      subtitle: isRtl
        ? "تواصل معنا اليوم واحصل على استشارة متميزة من خبرائنا."
        : "Contact us today and get a distinguished consultation from our experts.",
      contact: isRtl ? "اطلب استشارتك الآن" : "Request a Consultation",
      rfp: isRtl ? "اطلب عرض سعر" : "Request a Proposal",
      call: isRtl ? "اتصل بنا" : "Call us",
      email: isRtl ? "راسلنا" : "Email us",
      visit: isRtl ? "نتشرف بزيارتكم" : "Visit us",
      visitSub: isRtl ? "في جميع فروعنا" : "At any of our branches",
    },
  };

  return (
    <section dir={dir} className="relative bg-white" aria-labelledby="services-hero-title">
      {/* ===================================================
          1) HERO (video background kept)
          =================================================== */}
      <header className="relative w-full overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Riyad.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
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
          <span
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {t.hero.eyebrow}
          </span>

          <h1
            id="services-hero-title"
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

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={scrollToServices}
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.hero.explore}
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
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
            >
              {t.hero.contact}
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
          2) SERVICES GRID
          =================================================== */}
      <section
        id="services-list"
        className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-20 lg:py-24"
        aria-labelledby="services-list-title"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
              {t.intro.eyebrow}
            </span>
            <h2
              id="services-list-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.intro.title}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base lg:text-lg">
              {t.intro.subtitle}
            </p>
          </div>

          {services.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {services.map((service, i) => (
                <ServiceCard
                  key={service?.id ?? i}
                  service={service}
                  index={i}
                  lang={lang}
                  moreLabel={t.intro.more}
                  isRtl={isRtl}
                />
              ))}
            </ul>
          ) : (
            <p className="text-center text-slate-500 py-12">{t.intro.empty}</p>
          )}
        </div>
      </section>

      {/* ===================================================
          3) RESPONSIBILITY / VALUES
          =================================================== */}
      <section
        className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-14 sm:py-20"
        aria-labelledby="why-title"
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
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/service%20resposcibility.png"
                  alt={t.why.title}
                  loading="lazy"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 start-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-blue-950 text-xs font-semibold shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {t.cpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Text + items */}
            <div data-aos="fade-up" data-aos-delay="120">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
                {t.why.eyebrow}
              </span>
              <h2
                id="why-title"
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950 leading-snug"
              >
                {t.why.title}
              </h2>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />

              <ul className="mt-8 space-y-3">
                {t.why.items.map((item, i) => (
                  <li
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 60}
                    className="group flex items-start gap-3 p-4 rounded-xl bg-white ring-1 ring-slate-200 hover:ring-green-500 hover:shadow-md transition-all duration-300"
                  >
                    <span className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={RESPONSIBILITY_ICONS[i]}
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
          4) CTA
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
                {t.cta.subtitle}
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
          5) SEO — Structured Data (ItemList + Breadcrumb)
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
                    name: isRtl ? "الرئيسية" : "Home",
                    item: "https://www.albatelcpa.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: isRtl ? "الخدمات" : "Services",
                    item: "https://www.albatelcpa.com/services",
                  },
                ],
              },
              {
                "@type": "ItemList",
                itemListElement: services.map((s, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: s?.title?.[lang] ?? s?.title?.ar ?? "",
                  url: `https://www.albatelcpa.com/service/${s?.id}`,
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
   Helper: A single service card in the grid.
   ========================================================= */
function ServiceCard({ service, index, lang, moreLabel, isRtl }) {
  const title =
    service?.title?.[lang] ?? service?.title?.ar ?? service?.title?.en ?? "";
  const description =
    service?.description?.[lang] ??
    service?.description?.ar ??
    service?.description?.en ??
    "";
  const image = service?.image;
  const href = `/service/${encodeURIComponent(service?.id)}`;

  return (
    <li
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 80}
      className="group"
    >
      <article className="h-full flex flex-col rounded-3xl bg-white ring-1 ring-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
        {/* Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-slate-100" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-900/20 to-transparent" />
          <span className="absolute top-3 start-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur text-blue-950 text-[11px] font-semibold shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Body */}
        <div className="flex-1 flex flex-col p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-blue-950 group-hover:text-blue-900 transition-colors duration-300">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {truncate(description)}
            </p>
          )}

          <Link
            href={href}
            aria-label={title}
            className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-green-700 hover:text-green-900 transition-colors duration-300"
          >
            {moreLabel}
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
        </div>

        {/* Hover underline */}
        <span className="pointer-events-none block h-0.5 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500" />
      </article>
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
