"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "../../contexts/langContext";

/* =========================================================
   BranchDetails — unified AR/EN, modern design.
   Receives the firebase branch object:
     { id, name: {ar,en}, location_map: {ar,en},
       email, phone, postal, google_map, img? }
   ========================================================= */
export default function BranchDetails({ branch }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";

  const name = branch?.name?.[lang] || branch?.name?.en || "";
  const address = branch?.location_map?.[lang] || branch?.location_map?.en || "";
  const phone = branch?.phone || "";
  const email = branch?.email || "";
  const postal = branch?.postal || "";
  const mapSrc = branch?.google_map || "";
  const branchImg = branch?.img || branch?.image || null;

  /* Build WhatsApp URL.
     - Strip everything except digits.
     - If it looks like a local KSA number starting with 0, replace the leading 0 with 966.
     - Otherwise use as-is (already international). */
  const waNumber = (() => {
    const digits = String(phone || "").replace(/\D/g, "");
    if (!digits) return "";
    if (digits.startsWith("966")) return digits;
    if (digits.startsWith("0")) return `966${digits.slice(1)}`;
    return digits;
  })();
  const waHref = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent(
        isRtl
          ? "السلام عليكم، أرغب في الاستفسار عن خدمات الباتل."
          : "Hello, I'd like to inquire about Al-Batel services."
      )}`
    : "#";
  const mailHref = email ? `mailto:${email}` : "#";

  /* Smooth scroll to the map section. */
  const scrollToMap = (e) => {
    if (e) e.preventDefault();
    if (typeof document === "undefined") return;
    const el = document.getElementById("branch-map");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const t = {
    cpa: isRtl ? "محاسبون ومراجعون قانونيون" : "Certified Public Accountants",
    home: isRtl ? "الرئيسية" : "Home",
    branches: isRtl ? "الفروع" : "Branches",
    eyebrow: isRtl ? "فروع الباتل" : "Al-Batel Branches",
    titlePrefix: isRtl ? "فرع" : "Branch of",
    subTitle: isRtl
      ? "خدمات مهنية متكاملة تصل إليكم في موقعكم."
      : "Integrated professional services right where you are.",
    sectionContactTitle: isRtl ? "بيانات التواصل" : "Contact Information",
    sectionContactSub: isRtl
      ? "يسعدنا تواصلكم معنا عبر القنوات التالية خلال أوقات العمل الرسمية."
      : "We'd be glad to hear from you through the following channels during business hours.",

    labels: {
      address: isRtl ? "العنوان" : "Address",
      phone: isRtl ? "رقم الهاتف" : "Phone",
      email: isRtl ? "البريد الإلكتروني" : "Email",
      postal: isRtl ? "الرمز البريدي" : "Postal Code",
    },
    actions: {
      whatsapp: isRtl ? "تواصل عبر واتساب" : "Chat on WhatsApp",
      sendMail: isRtl ? "أرسل بريدًا" : "Send email",
      openMap: isRtl ? "عرض الموقع" : "View on map",
      copy: isRtl ? "نسخ" : "Copy",
    },

    mapTitle: isRtl ? "الموقع على الخريطة" : "Find Us on the Map",
    mapSub: isRtl
      ? "خريطة تفاعلية تساعدكم على الوصول إلى الفرع بسهولة."
      : "Interactive map to help you reach the branch easily.",

    hoursTitle: isRtl ? "ساعات العمل" : "Working Hours",
    hoursSub: isRtl
      ? "نستقبلكم طوال أيام الأسبوع باستثناء الجمعة والسبت."
      : "We welcome you throughout the week except Fridays and Saturdays.",
    hoursWeekday: isRtl
      ? "الأحد – الخميس"
      : "Sunday – Thursday",
    hoursWeekdayTime: isRtl
      ? "9:00 صباحًا – 5:00 مساءً"
      : "9:00 AM – 5:00 PM",
    hoursWeekend: isRtl ? "الجمعة والسبت" : "Friday & Saturday",
    hoursWeekendTime: isRtl ? "مغلق" : "Closed",

    ctaTitle: isRtl
      ? "هل تحتاج لاستشارة مهنية؟"
      : "Need a professional consultation?",
    ctaSub: isRtl
      ? "فريقنا في هذا الفرع جاهز لخدمتكم ومساعدتكم في تحقيق أهدافكم."
      : "Our team at this branch is ready to serve and help you achieve your goals.",
    ctaPrimary: isRtl ? "تواصل معنا" : "Contact us",
    ctaSecondary: isRtl ? "طلب عرض سعر" : "Request a quote",
  };

  /* ---- JSON-LD (LocalBusiness + Breadcrumb) ---- */
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t.home,
            item: "https://www.albatelcpa.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t.branches,
            item: "https://www.albatelcpa.com/about",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: name,
            item: `https://www.albatelcpa.com/branch/${branch?.id || ""}`,
          },
        ],
      },
      {
        "@type": "AccountingService",
        name: `${t.titlePrefix} ${name} — Al-Batel CPA`,
        url: `https://www.albatelcpa.com/branch/${branch?.id || ""}`,
        telephone: phone || undefined,
        email: email || undefined,
        address: {
          "@type": "PostalAddress",
          streetAddress: address || undefined,
          postalCode: postal || undefined,
          addressCountry: "SA",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
            opens: "09:00",
            closes: "17:00",
          },
        ],
      },
    ],
  };

  return (
    <main dir={dir} className="relative bg-white">
      {/* ===================================================
          1) HERO
          =================================================== */}
      <section
        className="relative w-full overflow-hidden min-h-[60vh] md:min-h-[85vh] flex items-center"
        aria-labelledby="branch-hero-title"
      >
        {/* Background */}
        <div className="absolute inset-0">
          {branchImg ? (
            <img
              src={branchImg}
              alt={name}
              loading="eager"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-blue-900/75 to-indigo-900/75" />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "28px 28px, 34px 34px",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />

        {/* CPA badge */}
        {/* <div className="absolute top-20 sm:top-24 md:top-28 start-4 md:start-10 z-20">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            {t.cpa}
          </span>
        </div> */}

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-28">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5 text-white/80 text-xs sm:text-sm">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  {t.branches}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-semibold" aria-current="page">
                {name}
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-medium">
            <PinIcon />
            {t.eyebrow}
          </span>

          <h1
            id="branch-hero-title"
            className="mt-5 text-white font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight drop-shadow-lg"
          >
            {t.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>

          {address ? (
            <p className="mt-4 text-white/90 text-sm sm:text-base lg:text-lg max-w-3xl inline-flex items-start gap-2">
              <span className="mt-0.5 text-green-300">
                <PinIcon />
              </span>
              <span>{address}</span>
            </p>
          ) : null}

          <p className="mt-3 text-white/80 text-sm sm:text-base lg:text-lg max-w-3xl">
            {t.subTitle}
          </p>

          {/* Quick action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            {waNumber ? (
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
              >
                <WhatsAppIcon />
                {t.actions.whatsapp}
              </a>
            ) : null}
            {email ? (
              <a
                href={mailHref}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
              >
                <MailIcon />
                {t.actions.sendMail}
              </a>
            ) : null}
          </div>
        </div>

        {/* Wave divider */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-12 sm:h-16 text-white"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          />
        </svg>
      </section>

      {/* ===================================================
          2) CONTACT INFO CARDS
          =================================================== */}
      <section
        className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white"
        aria-labelledby="branch-contact-title"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
              {isRtl ? "تواصل مباشر" : "Direct Contact"}
            </span>
            <h2
              id="branch-contact-title"
              className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
            >
              {t.sectionContactTitle}
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
            <p className="mt-5 mx-auto max-w-3xl text-slate-600 text-sm sm:text-base lg:text-lg">
              {t.sectionContactSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {address ? (
              <InfoCard
                tone="blue"
                icon={<PinIcon />}
                label={t.labels.address}
                value={address}
                actionLabel={mapSrc ? t.actions.openMap : null}
                actionHref="#branch-map"
                onActionClick={mapSrc ? scrollToMap : null}
                isRtl={isRtl}
              />
            ) : null}

            {phone ? (
              <InfoCard
                tone="green"
                icon={<WhatsAppIcon />}
                label={t.labels.phone}
                value={phone}
                dir="ltr"
                actionLabel={waNumber ? t.actions.whatsapp : null}
                actionHref={waHref}
                external={Boolean(waNumber)}
                isRtl={isRtl}
              />
            ) : null}

            {email ? (
              <InfoCard
                tone="amber"
                icon={<MailIcon />}
                label={t.labels.email}
                value={email}
                dir="ltr"
                actionLabel={t.actions.sendMail}
                actionHref={mailHref}
                isRtl={isRtl}
              />
            ) : null}

            {postal ? (
              <InfoCard
                tone="indigo"
                icon={<BoxIcon />}
                label={t.labels.postal}
                value={postal}
                dir="ltr"
                isRtl={isRtl}
              />
            ) : null}
          </div>
        </div>
      </section>

      {/* ===================================================
          3) WORKING HOURS
          =================================================== */}
      <section
        className="relative py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50"
        aria-labelledby="branch-hours-title"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-xl bg-white">
            <div className="grid grid-cols-1 md:grid-cols-[0.9fr,1.1fr]">
              {/* Header */}
              <div className="relative p-6 sm:p-10 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
                <div
                  className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="inline-flex w-12 h-12 rounded-2xl bg-white/15 border border-white/25 items-center justify-center text-white shadow-md">
                    <ClockIcon />
                  </span>
                  <h2
                    id="branch-hours-title"
                    className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold"
                  >
                    {t.hoursTitle}
                  </h2>
                  <p className="mt-2 text-white/85 text-sm sm:text-base">
                    {t.hoursSub}
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <ul className="p-6 sm:p-10 space-y-3">
                <li className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-green-50 to-white ring-1 ring-green-200">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                    <span className="text-blue-950 font-semibold text-sm sm:text-base">
                      {t.hoursWeekday}
                    </span>
                  </div>
                  <span className="text-green-700 font-bold text-sm sm:text-base text-end">
                    {t.hoursWeekdayTime}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-200">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-400 flex-shrink-0" />
                    <span className="text-blue-950 font-semibold text-sm sm:text-base">
                      {t.hoursWeekend}
                    </span>
                  </div>
                  <span className="text-slate-500 font-bold text-sm sm:text-base text-end">
                    {t.hoursWeekendTime}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          4) MAP
          =================================================== */}
      {mapSrc ? (
        <section
          id="branch-map"
          className="relative py-12 sm:py-16 bg-white scroll-mt-24"
          aria-labelledby="branch-map-title"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center mb-8 sm:mb-10">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-700">
                {isRtl ? "دلّنا" : "Find Us"}
              </span>
              <h2
                id="branch-map-title"
                className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
              >
                {t.mapTitle}
              </h2>
              <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
              <p className="mt-4 mx-auto max-w-3xl text-slate-600 text-sm sm:text-base lg:text-lg">
                {t.mapSub}
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden ring-1 ring-slate-200 shadow-xl bg-white">
              <iframe
                title={`${name} — ${t.mapTitle}`}
                src={mapSrc}
                className="w-full h-[380px] sm:h-[460px] lg:h-[540px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      ) : null}

      {/* ===================================================
          5) CTA
          =================================================== */}
      <section
        className="relative py-14 sm:py-20 overflow-hidden"
        aria-labelledby="branch-cta-title"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900" />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "28px 28px, 34px 34px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-24 -start-24 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -end-24 w-96 h-96 rounded-full bg-indigo-400/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2
            id="branch-cta-title"
            className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl drop-shadow-lg"
          >
            {t.ctaTitle}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-white/85 text-sm sm:text-base lg:text-lg">
            {t.ctaSub}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.ctaPrimary}
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
              href="/rfp"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white hover:text-blue-950 transition-all duration-300"
            >
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================
          6) JSON-LD
          =================================================== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </main>
  );
}

/* =========================================================
   InfoCard — reusable contact card.
   ========================================================= */
function InfoCard({
  icon,
  label,
  value,
  tone = "blue",
  dir: valueDir,
  actionLabel,
  actionHref,
  onActionClick,
  external = false,
  isRtl,
}) {
  const tones = {
    blue: {
      iconBg: "from-blue-500 to-blue-700",
      ring: "hover:ring-blue-500",
      text: "text-blue-700",
      tag: "bg-blue-50 text-blue-700 ring-blue-200",
    },
    green: {
      iconBg: "from-green-500 to-green-700",
      ring: "hover:ring-green-500",
      text: "text-green-700",
      tag: "bg-green-50 text-green-700 ring-green-200",
    },
    amber: {
      iconBg: "from-amber-500 to-orange-600",
      ring: "hover:ring-amber-500",
      text: "text-amber-700",
      tag: "bg-amber-50 text-amber-700 ring-amber-200",
    },
    indigo: {
      iconBg: "from-indigo-500 to-indigo-700",
      ring: "hover:ring-indigo-500",
      text: "text-indigo-700",
      tag: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    },
  };
  const tt = tones[tone] || tones.blue;

  return (
    <div
      className={`group relative p-5 sm:p-6 rounded-3xl bg-white ring-1 ring-slate-200 shadow-sm ${tt.ring} hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col`}
    >
      <span
        className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${tt.iconBg} text-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </span>
      <span
        className={`mt-4 inline-flex self-start text-[11px] sm:text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ring-1 ${tt.tag}`}
      >
        {label}
      </span>
      <p
        dir={valueDir || undefined}
        className="mt-2 text-blue-950 font-semibold text-sm sm:text-base break-words leading-relaxed"
      >
        {value}
      </p>

      {actionLabel && actionHref && actionHref !== "#" ? (
        <a
          href={actionHref}
          onClick={onActionClick || undefined}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold ${tt.text} hover:underline`}
        >
          {actionLabel}
          <span
            className={`transition-transform duration-300 ${
              isRtl ? "group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"
            }`}
            aria-hidden="true"
          >
            {isRtl ? "←" : "→"}
          </span>
        </a>
      ) : null}
    </div>
  );
}

/* =========================================================
   Inline icons.
   ========================================================= */
function PinIcon() {
  return (
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
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.2-.298.3-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
    </svg>
  );
}

function MailIcon() {
  return (
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
  );
}

function BoxIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Z"
        clipRule="evenodd"
      />
      <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
    </svg>
  );
}

function ClockIcon() {
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
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.75 5.25a.75.75 0 0 0-1.5 0v5.25c0 .2.08.39.22.53l3 3a.75.75 0 0 0 1.06-1.06l-2.78-2.78V7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
