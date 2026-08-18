"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageContext } from "../../contexts/langContext";
import { BRANCHES } from "../../data/branches";
import useScrolledPast from "../../hooks/useScrolledPast";

const WA_URL = "https://wa.me/966550554262";
const WA_ICON =
  "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%2010.png";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/company/albatel-cpa/posts/?feedView=all",
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%209.png",
    title: "LinkedIn",
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/albatel_cpa/",
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%205.png",
    title: "Instagram",
    alt: "Instagram",
  },
  {
    href: "https://x.com/albatel_cpa",
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%202.png",
    title: "Twitter/X",
    alt: "Twitter/X",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61582443590665",
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%204.png",
    title: "Facebook",
    alt: "Facebook",
  },
  {
    href: "https://www.youtube.com/@Albatel_CPA",
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%207.png",
    title: "YouTube",
    alt: "YouTube",
  },
  {
    href: "https://www.tiktok.com/@albatel_cpa?_t=ZS-90UGIjq7hMf&_r=1",
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%203.png",
    title: "TikTok",
    alt: "TikTok",
  },
];

const COPY = {
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    team: "فريق العمل",
    partners: "شركاء النجاح",
    blog: "المدونة",
    careers: "وظائف متاحة",
    contact: "تواصل معنا",
    rfp: "طلب عرض سعر",
    menu: "القائمة",
    close: "إغلاق",
    branches: "فروعنا",
    follow: "تابعنا",
    lang: "اللغة",
    publications: "مؤلفاتنا",
    publicationsAll: "إصداراتنا",
    publicationsAllDesc: "إصدارات علمية من تأليف وتعريب نخبة من الخبراء",
    blogDesc: "مقالات مهنية من خبراء الباتل",
    bookFootball: "اقتصاديات كرة القدم",
    bookAudit: "مراجعة الرقابة الداخلية",
    bookSportsCorruption: "الفساد والاحتيال في الرياضة",
    bookFootballDesc: "موسوعة في الاستثمار الرياضي",
    bookAuditDesc: "تعريب عن إطار COSO الجديد",
    bookSportsCorruptionDesc: "حوكمة الرياضة ومكافحة الاحتيال",
    servicesAll: "جميع الخدمات",
    servicesAllDesc: "اطّلع على مجموعة خدماتنا المهنية المتكاملة",
  },
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    team: "Our Team",
    partners: "Partners",
    blog: "Blog",
    careers: "Careers",
    contact: "Contact Us",
    rfp: "Request a quote",
    menu: "Menu",
    close: "Close",
    branches: "Branches",
    follow: "Follow us",
    lang: "Language",
    publications: "Our Publications",
    publicationsAll: "All Publications",
    publicationsAllDesc: "Scientific works by a team of leading experts",
    blogDesc: "Professional insights from Al-Batel experts",
    bookFootball: "Football Economics",
    bookAudit: "Internal Control Audit",
    bookSportsCorruption: "Corruption and Fraud in Sports",
    bookFootballDesc: "An encyclopedia on sports investment",
    bookAuditDesc: "Translated under the new COSO framework",
    bookSportsCorruptionDesc: "Sports governance and fraud prevention",
    servicesAll: "All Services",
    servicesAllDesc: "Browse our full range of professional services",
  },
};

const SERVICES = [
  {
    id: "Financial_Consulting_service",
    ar: "الإستشارات المالية",
    en: "Financial Consulting",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v2m9-9a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    id: "Audit_Financial_Statements_service",
    ar: "مراجعة القوائم المالية",
    en: "Audit of Financial Statements",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    id: "Transfer_Pricing_Documentation_service",
    ar: "ملفات توثيق السعر المحايد",
    en: "Transfer Pricing Documentation",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    id: "Internal_Audit_service",
    ar: "التدقيق الداخلي",
    en: "Internal Audit",
    icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  },
  {
    id: "Cost_Management_service",
    ar: "إدارة التكاليف",
    en: "Cost Management",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    id: "Planning_and_Analysis_service",
    ar: "التخطيط المالي والتحليل",
    en: "Financial Planning & Analysis",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    id: "Tax_Services",
    ar: "خدمات ضريبية",
    en: "Tax Services",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    id: "Accounting_Services",
    ar: "خدمات المحاسبة",
    en: "Accounting Services",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    id: "Training_Services",
    ar: "تدريب وتطوير القدرات",
    en: "Training & Capacity Development",
    icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
  },
  {
    id: "Special_Issues_Reports_Services",
    ar: "مراجعة القضايا والتقارير الخاصة",
    en: "Special Issues & Reports Review",
    icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  },
  {
    id: "Arbitration_Dispute_Resolution_Services",
    ar: "التحكيم وتسوية المنازعات",
    en: "Arbitration & Dispute Resolution",
    icon: "M3 6l9-4 9 4v2H3V6zm2 4h2v8H5v-8zm6 0h2v8h-2v-8zm6 0h2v8h-2v-8zM2 20h20v2H2v-2z",
  }
  ,
  {
    id: "Estate_Liquidation_Services",
    ar: "تصفية التركات",
    en: "Estate Liquidation",
    icon: "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3",
  },
  {
    id: "actuarial_Services",
    ar: "خدمات اكتوارية",
    en: "Actuarial Services",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
  },
];

function MobileNavDrawer({
  open,
  onClose,
  dir,
  t,
  isActivePath,
  currentLanguage,
  switchLanguage,
  leftToRight,
  rightToLeft,
}) {
  const isRtl = dir === "rtl";
  const [branchesOpen, setBranchesOpen] = useState(false);
  const [pubsOpen, setPubsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setBranchesOpen(false);
      setPubsOpen(false);
      setServicesOpen(false);
    }
  }, [open]);

  const drawerLinkClass = (href) => {
    const active = isActivePath(href);
    const base =
      "group relative block w-full rounded-lg px-3 py-2 text-start text-[15px] font-bold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 motion-reduce:transition-none";
    return active
      ? `${base} bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-md shadow-blue-900/20`
      : `${base} text-slate-900 hover:bg-slate-300/70 hover:text-blue-800 hover:translate-x-0.5 rtl:hover:-translate-x-0.5`;
  };

  return (
    <div
      className={`lg:hidden fixed inset-0 z-[100] ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={`mobile-drawer-backdrop absolute inset-0 border-0 bg-slate-950/60 backdrop-blur-[2px] transition-opacity duration-300 motion-reduce:transition-none ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label={t.close}
        tabIndex={open ? 0 : -1}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t.menu}
        id="mobile-menu"
        className={`absolute top-0 flex h-full w-[min(100vw,20rem)] max-w-[85vw] flex-col border-slate-400/35 bg-gradient-to-b from-slate-300/98 via-slate-200/98 to-slate-300/98 shadow-2xl shadow-blue-950/25 transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isRtl
            ? "right-0 border-s border-slate-400/50"
            : "left-0 border-e border-slate-400/50"
        } ${open ? "translate-x-0" : isRtl ? "translate-x-full" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between gap-2 border-b border-slate-400/60 bg-slate-300/90 px-3 py-2.5">
          <Link
            href="/"
            onClick={onClose}
            className="flex min-w-0 flex-1 items-center gap-2"
          >
            <img
              src="/BatelLogo1.png"
              alt="AlBatel & Co"
              className="h-9 w-auto shrink-0 object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-500/40 bg-slate-100 text-slate-800 shadow-sm transition hover:bg-white hover:text-slate-950"
            aria-label={t.close}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="border-b border-slate-400/50 bg-slate-200/80 px-3 py-2.5">
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-700">
            {t.lang}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                switchLanguage("ar");
                rightToLeft();
              }}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-2 py-1.5 text-sm font-semibold transition ${
                currentLanguage === "ar"
                  ? "border-blue-700 bg-blue-600 text-white shadow-sm"
                  : "border-slate-500/35 bg-slate-100 text-slate-900 hover:bg-slate-50"
              }`}
            >
              <img
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/My-Special-Icons/refs/heads/main/ar.jpg"
                className="h-4 w-4 rounded-full"
                alt=""
              />
              Ar
            </button>
            <button
              type="button"
              onClick={() => {
                switchLanguage("en");
                leftToRight();
              }}
              className={`flex flex-1 items-center justify-center gap-2 rounded-lg border px-2 py-1.5 text-sm font-semibold transition ${
                currentLanguage === "en"
                  ? "border-blue-700 bg-blue-600 text-white shadow-sm"
                  : "border-slate-500/35 bg-slate-100 text-slate-900 hover:bg-slate-50"
              }`}
            >
              <img
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/My-Special-Icons/refs/heads/main/en.png"
                className="h-4 w-4 rounded-full"
                alt=""
              />
              En
            </button>
          </div>
        </div>

        <nav
          aria-label="Mobile"
          className="flex-1 overflow-y-auto overscroll-contain bg-slate-200/70 px-2.5 py-2.5"
        >
          <ul className="space-y-0.5">
            {[
              ["/", t.home],
              ["/about", t.about],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className={drawerLinkClass(href)}
                  onClick={onClose}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="pt-1.5">
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-start text-[15px] font-bold transition-all ${
                  isActivePath("/services")
                    ? "bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-md shadow-blue-900/20"
                    : "text-slate-900 hover:bg-slate-300/70 hover:text-blue-800"
                }`}
                aria-expanded={servicesOpen}
                id="mobile-services-toggle"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {t.services}
                </span>
                <svg
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  servicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-90"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <ul className="mt-1 ms-2 space-y-0.5 border-s-2 border-sky-500/30 ps-3">
                    <li>
                      <Link
                        href="/services"
                        className={drawerLinkClass("/services")}
                        onClick={onClose}
                      >
                        {t.servicesAll}
                      </Link>
                    </li>
                    {SERVICES.map((svc) => {
                      const href = `/service/${encodeURIComponent(svc.id)}`;
                      return (
                        <li key={svc.id}>
                          <Link
                            href={href}
                            className={`${drawerLinkClass(href)} text-sm`}
                            onClick={onClose}
                          >
                            {isRtl ? svc.ar : svc.en}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>

            {[
              ["/ourTeam", t.team],
              ["/partners", t.partners],
              ["/careers", t.careers],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className={drawerLinkClass(href)}
                  onClick={onClose}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li className="pt-1.5">
              <button
                type="button"
                onClick={() => setPubsOpen((v) => !v)}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-start text-[15px] font-bold transition-all ${
                  isActivePath("/publications") || isActivePath("/blog")
                    ? "bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-md shadow-blue-900/20"
                    : "text-slate-900 hover:bg-slate-300/70 hover:text-blue-800"
                }`}
                aria-expanded={pubsOpen}
                id="mobile-pubs-toggle"
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z"
                    />
                  </svg>
                  {t.publications}
                </span>
                <svg
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${pubsOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  pubsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-90"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <ul className="mt-1 ms-2 space-y-0.5 border-s-2 border-sky-500/30 ps-3">
                    <li>
                      <Link
                        href="/publications"
                        className={drawerLinkClass("/publications")}
                        onClick={onClose}
                      >
                        {t.publicationsAll}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/publications/football-economics"
                        className={`${drawerLinkClass("/publications/football-economics")} text-sm`}
                        onClick={onClose}
                      >
                        {t.bookFootball}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/publications/internal-audit"
                        className={`${drawerLinkClass("/publications/internal-audit")} text-sm`}
                        onClick={onClose}
                      >
                        {t.bookAudit}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/publications/sports-corruption-fraud"
                        className={`${drawerLinkClass("/publications/sports-corruption-fraud")} text-sm`}
                        onClick={onClose}
                      >
                        {t.bookSportsCorruption}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className={drawerLinkClass("/blog")}
                        onClick={onClose}
                      >
                        {t.blog}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          <div className="mt-4 grid gap-2">
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-900/20 transition hover:from-sky-500 hover:to-blue-600"
            >
              {t.contact}
            </Link>
            <Link
              href="/rfp"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-xl border-2 border-blue-700/80 bg-white px-4 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
            >
              {t.rfp}
            </Link>
          </div>

          <div className="mt-4 border-t border-slate-400/40 pt-3">
            <button
              type="button"
              onClick={() => setBranchesOpen((v) => !v)}
              className="flex w-full items-center justify-between gap-2 rounded-lg border border-slate-500/35 bg-slate-100 px-3 py-2 text-start text-sm font-bold text-slate-900 shadow-sm transition hover:bg-white"
              aria-expanded={branchesOpen}
              id="mobile-branches-toggle"
            >
              <span>{t.branches}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-slate-700 transition-transform duration-200 ${branchesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out motion-reduce:transition-none ${
                branchesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-90"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <ul
                  className="mt-1.5 max-h-48 space-y-0.5 overflow-y-auto rounded-lg border border-slate-500/25 bg-slate-100/90 p-1"
                  role="list"
                  aria-labelledby="mobile-branches-toggle"
                >
                  {BRANCHES.map((branch) => (
                    <li key={branch.id}>
                      <Link
                        href={`/branch/${branch.id}`}
                        onClick={onClose}
                        className="block rounded-md px-2.5 py-1.5 text-sm font-medium text-slate-900 transition hover:bg-sky-600/15 hover:text-blue-900"
                      >
                        {isRtl ? branch.name.ar : branch.name.en}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div className="border-t border-slate-400/50 bg-slate-300/85 px-2.5 py-2">
          <p className="mb-1.5 text-center text-[10px] font-bold uppercase tracking-wide text-slate-800">
            {t.follow}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-500/30 bg-slate-100 shadow-sm transition hover:bg-white hover:shadow"
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
              >
                <img
                  src={s.img}
                  alt={s.alt}
                  className="h-3.5 w-3.5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default function NavBar() {
  const [openDropdownLanguage, setOpenDropdownLanguage] = useState(null);
  const [pubsDropdownOpen, setPubsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ar");
  const isScrolled = useScrolledPast(80);
  const [isOpen, setIsOpen] = useState(false);

  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const t = dir === "rtl" ? COPY.ar : COPY.en;

  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const pathname = usePathname();
  const isActivePath = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  const getLinkClass = (href) => {
    const active = isActivePath(href);
    return `linkStyle px-2 py-2 text-sm md:text-base ${active ? "is-active" : ""}`;
  };

  const toggleDropdown = (dropdownName) => {
    if (openDropdownLanguage === dropdownName) {
      setOpenDropdownLanguage(null);
    } else {
      setOpenDropdownLanguage(dropdownName);
    }
  };

  const switchLanguage = (language) => {
    setCurrentLanguage(language);
    setOpenDropdownLanguage(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest("#mobile-menu") &&
        !event.target.closest(".menu-toggle-button")
      ) {
        setIsOpen(false);
      }

      if (
        openDropdownLanguage &&
        !event.target.closest("#languageDropdownButton") &&
        !event.target.closest("#languageDropdownMenu")
      ) {
        setOpenDropdownLanguage(null);
      }

      if (
        pubsDropdownOpen &&
        !event.target.closest("#pubsDropdownButton") &&
        !event.target.closest("#pubsDropdownMenu")
      ) {
        setPubsDropdownOpen(false);
      }

      if (
        servicesDropdownOpen &&
        !event.target.closest("#servicesDropdownButton") &&
        !event.target.closest("#servicesDropdownMenu")
      ) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, openDropdownLanguage, pubsDropdownOpen, servicesDropdownOpen]);

  const headerTop = isScrolled ? "top-0" : "top-0 lg:top-12";

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <header
          className={`fixed ${headerTop} z-40 mx-auto w-full bg-gray-100 bg-opacity-80 shadow-lg shadow-gray-500 backdrop-blur-lg transition-all duration-500 lg:w-[97%] lg:rounded-full lg:bg-white lg:bg-opacity-70`}
        >
          <div className="relative mx-auto h-16 w-full max-w-[100vw] px-3 sm:px-5 lg:px-10">
            <div className="grid h-full w-full grid-cols-[1fr_auto_1fr] items-center gap-1 lg:hidden">
              <div className="flex min-w-0 justify-start">
                <Link
                  className="group flex min-w-0 max-w-full items-center rounded-lg text-gray-950 transition-transform duration-300 ease-out active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 motion-reduce:transition-none"
                  href="/"
                  aria-label={dir === "rtl" ? "الباتل - الصفحة الرئيسية" : "AlBatel - Home"}
                >
                  <img
                    src="/BatelLogo1.png"
                    className="h-10 w-auto shrink-0 px-0.5 sm:h-11 transition-transform duration-500 ease-out group-active:rotate-[-6deg] motion-reduce:transition-none"
                    alt="Albatel Logo"
                  />
                  <div className="flex min-w-0 flex-col items-start justify-center ps-0.5">
                    <span className="text-green-950 truncate text-shadow-blue text-base font-bold sm:text-lg">
                      الباتل
                    </span>
                    <span className="text-blue-950 truncate text-shadow-blue text-[10px] font-medium sm:text-xs sm:text-nowrap">
                      AlBatel & Co
                    </span>
                  </div>
                </Link>
              </div>

              <div className="flex justify-center">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                  className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-emerald-400/90 bg-white shadow-md shadow-emerald-900/10 transition-all duration-200 ease-out hover:scale-110 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 motion-reduce:transition-none motion-reduce:hover:scale-100"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-emerald-400/0 transition-colors duration-300 group-hover:bg-emerald-400/10" aria-hidden />
                  <span className="pointer-events-none absolute -inset-1 rounded-full border-2 border-emerald-400/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping motion-reduce:group-hover:animate-none" aria-hidden />
                  <img
                    src={WA_ICON}
                    alt=""
                    className="relative h-6 w-6 object-contain transition-transform duration-200 group-hover:rotate-[12deg] motion-reduce:transition-none motion-reduce:group-hover:rotate-0"
                  />
                </a>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsOpen((o) => !o)}
                  className={`menu-toggle-button group inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-white shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                    isOpen
                      ? "border-blue-300 text-blue-800 bg-blue-50"
                      : "border-slate-300/90 text-gray-700 hover:border-blue-300 hover:text-blue-800"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                  aria-label={isOpen ? t.close : t.menu}
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform duration-300 ease-out ${isOpen ? "rotate-90 scale-110" : "group-hover:scale-110"} motion-reduce:transition-none`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <div className="hidden h-full w-full items-center justify-center gap-4 lg:flex lg:gap-6">
              <div className="flex w-full items-center gap-2 lg:gap-16 lg:text-xl">
                <Link
                  className="group flex items-center text-gray-950 lg:me-5 rounded-full transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 motion-reduce:transition-none motion-reduce:hover:scale-100"
                  href="/"
                  aria-label={dir === "rtl" ? "الباتل - الصفحة الرئيسية" : "AlBatel - Home"}
                >
                  <img
                    src="/BatelLogo1.png"
                    className="inline-block w-20 px-3 transition-transform duration-500 ease-out group-hover:rotate-[-6deg] motion-reduce:transition-none motion-reduce:group-hover:rotate-0"
                    alt="Albatel Logo"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-green-950 mx-1 text-shadow-blue text-xl font-bold xl:text-2xl transition-colors duration-200 group-hover:text-blue-900">
                      الباتل
                    </span>
                    <span className="text-blue-950 text-shadow-blue text-sm text-nowrap transition-colors duration-200 group-hover:text-sky-700">
                      AlBatel & Co
                    </span>
                  </div>
                </Link>

                <nav aria-label="Global" className="min-w-0">
                  <ul className="flex flex-wrap items-center gap-4 font-semibold lg:gap-4 xl:gap-9">
                    <li>
                      <Link className={getLinkClass("/")} href="/">
                        {t.home}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={getLinkClass("/about") + " text-nowrap"}
                        href="/about"
                      >
                        {t.about}
                      </Link>
                    </li>
                    <li className="relative">
                      <button
                        type="button"
                        id="servicesDropdownButton"
                        onClick={() => {
                          setServicesDropdownOpen((v) => !v);
                          setPubsDropdownOpen(false);
                        }}
                        onMouseEnter={() => {
                          setServicesDropdownOpen(true);
                          setPubsDropdownOpen(false);
                        }}
                        aria-haspopup="menu"
                        aria-expanded={servicesDropdownOpen}
                        className={`linkStyle inline-flex items-center gap-1.5 px-2 py-2 text-sm md:text-base text-nowrap ${
                          isActivePath("/services") || pathname?.startsWith("/service/")
                            ? "is-active"
                            : ""
                        }`}
                      >
                        {t.services}
                        <svg
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      <div
                        id="servicesDropdownMenu"
                        role="menu"
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                        className={`absolute start-0 top-[calc(100%+6px)] z-50 w-[560px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-white/60 bg-white/95 shadow-2xl shadow-blue-950/20 backdrop-blur-xl transition-all duration-200 ease-out ${
                          servicesDropdownOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3 bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 px-4 py-3.5">
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-white">
                              {t.services}
                            </p>
                            <p className="mt-0.5 text-[11px] text-sky-100/80">
                              {t.servicesAllDesc}
                            </p>
                          </div>
                          <Link
                            href="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white ring-1 ring-inset ring-white/25 backdrop-blur-sm transition hover:bg-white/25"
                          >
                            {t.servicesAll}
                            <svg className="h-3 w-3 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                              <path fillRule="evenodd" d="M7.05 4.55a.75.75 0 011.06 0l4.9 4.9a.75.75 0 010 1.06l-4.9 4.9a.75.75 0 11-1.06-1.06L11.43 10 7.05 5.61a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                          </Link>
                        </div>

                        <ul className="grid grid-cols-2 gap-1 p-2">
                          {SERVICES.map((svc, i) => {
                            const label = dir === "rtl" ? svc.ar : svc.en;
                            return (
                              <li key={svc.id}>
                                <Link
                                  href={`/service/${encodeURIComponent(svc.id)}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="group flex items-start gap-2.5 rounded-xl px-2.5 py-2 transition-colors hover:bg-slate-100"
                                >
                                  <span className="relative mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-sm">
                                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                      <path d={svc.icon} />
                                    </svg>
                                    <span className="absolute -top-1 -end-1 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-emerald-500 px-1 text-[9px] font-bold text-white ring-2 ring-white">
                                      {String(i + 1).padStart(2, "0")}
                                    </span>
                                  </span>
                                  <span className="min-w-0 flex-1">
                                    <span className="block text-[13px] font-bold leading-tight text-blue-950 group-hover:text-sky-700">
                                      {label}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link
                        className={getLinkClass("/ourTeam") + " text-nowrap"}
                        href="/ourTeam"
                      >
                        {t.team}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={getLinkClass("/partners") + " text-nowrap"}
                        href="/partners"
                      >
                        {t.partners}
                      </Link>
                    </li>
                    <li className="relative">
                      <button
                        type="button"
                        id="pubsDropdownButton"
                        onClick={() => {
                          setPubsDropdownOpen((v) => !v);
                          setServicesDropdownOpen(false);
                        }}
                        onMouseEnter={() => {
                          setPubsDropdownOpen(true);
                          setServicesDropdownOpen(false);
                        }}
                        aria-haspopup="menu"
                        aria-expanded={pubsDropdownOpen}
                        className={`linkStyle inline-flex items-center gap-1.5 px-2 py-2 text-sm md:text-base text-nowrap ${
                          isActivePath("/publications") || isActivePath("/blog")
                            ? "is-active"
                            : ""
                        }`}
                      >
                        {t.publications}
                        <svg
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${pubsDropdownOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      <div
                        id="pubsDropdownMenu"
                        role="menu"
                        onMouseLeave={() => setPubsDropdownOpen(false)}
                        className={`absolute start-0 top-[calc(100%+6px)] z-50 w-[320px] overflow-hidden rounded-2xl border border-white/60 bg-white/95 shadow-2xl shadow-blue-950/20 backdrop-blur-xl transition-all duration-200 ease-out ${
                          pubsDropdownOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 px-4 py-3.5">
                          <p className="text-sm font-bold text-white">
                            {t.publications}
                          </p>
                        </div>

                        <ul className="p-2">
                          <li>
                            <Link
                              href="/publications"
                              onClick={() => setPubsDropdownOpen(false)}
                              className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-100"
                            >
                              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-sm">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15z" />
                                </svg>
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-bold text-blue-950 group-hover:text-sky-700">
                                  {t.publicationsAll}
                                </span>
                                <span className="mt-0.5 block text-xs text-slate-500">
                                  {t.publicationsAllDesc}
                                </span>
                              </span>
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/publications/football-economics"
                              onClick={() => setPubsDropdownOpen(false)}
                              className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-100"
                            >
                              <img
                                src="/Books/Book1.JPG"
                                alt=""
                                className="mt-0.5 h-10 w-8 shrink-0 rounded-md object-cover shadow ring-1 ring-slate-200"
                              />
                              <span className="min-w-0">
                                <span className="block text-sm font-bold text-blue-950 group-hover:text-sky-700">
                                  {t.bookFootball}
                                </span>
                                <span className="mt-0.5 block text-xs text-slate-500">
                                  {t.bookFootballDesc}
                                </span>
                              </span>
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/publications/internal-audit"
                              onClick={() => setPubsDropdownOpen(false)}
                              className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-100"
                            >
                              <img
                                src="/Books/Book2.jfif"
                                alt=""
                                className="mt-0.5 h-10 w-8 shrink-0 rounded-md object-cover shadow ring-1 ring-slate-200"
                              />
                              <span className="min-w-0">
                                <span className="block text-sm font-bold text-blue-950 group-hover:text-sky-700">
                                  {t.bookAudit}
                                </span>
                                <span className="mt-0.5 block text-xs text-slate-500">
                                  {t.bookAuditDesc}
                                </span>
                              </span>
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/publications/sports-corruption-fraud"
                              onClick={() => setPubsDropdownOpen(false)}
                              className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-100"
                            >
                              <img
                                src="/Books/book3.JPG"
                                alt=""
                                className="mt-0.5 h-10 w-8 shrink-0 rounded-md object-cover shadow ring-1 ring-slate-200"
                              />
                              <span className="min-w-0">
                                <span className="block text-sm font-bold text-blue-950 group-hover:text-sky-700">
                                  {t.bookSportsCorruption}
                                </span>
                                <span className="mt-0.5 block text-xs text-slate-500">
                                  {t.bookSportsCorruptionDesc}
                                </span>
                              </span>
                            </Link>
                          </li>

                          <li className="my-1 border-t border-slate-200" />

                          <li>
                            <Link
                              href="/blog"
                              onClick={() => setPubsDropdownOpen(false)}
                              className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-100"
                            >
                              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-700 text-white shadow-sm">
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 9h6M7 13h10M7 17h10" />
                                </svg>
                              </span>
                              <span className="min-w-0">
                                <span className="block text-sm font-bold text-blue-950 group-hover:text-sky-700">
                                  {t.blog}
                                </span>
                                <span className="mt-0.5 block text-xs text-slate-500">
                                  {t.blogDesc}
                                </span>
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="relative flex shrink-0 items-center gap-2 lg:me-0">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("language")}
                    className="group inline-flex h-9 items-center gap-1.5 rounded-xl border border-white/45 bg-white/12 px-3 py-1 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-inset ring-white/20 backdrop-blur-sm transition-colors duration-200 ease-out hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    id="languageDropdownButton"
                    aria-haspopup="menu"
                    aria-expanded={openDropdownLanguage === "language"}
                  >
                    <img
                      src={
                        currentLanguage === "en"
                          ? "https://raw.githubusercontent.com/Ahmed-abdeldaiem/My-Special-Icons/refs/heads/main/en.png"
                          : "https://raw.githubusercontent.com/Ahmed-abdeldaiem/My-Special-Icons/refs/heads/main/ar.jpg"
                      }
                      className="h-4 w-4 rounded-full ring-1 ring-white/40"
                      alt={currentLanguage === "en" ? "English" : "Arabic"}
                    />
                    {currentLanguage === "en" ? "En (US)" : "Ar"}
                    <svg
                      className={`h-3 w-3 transition-transform duration-300 ease-out ${openDropdownLanguage === "language" ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div
                    className={`absolute end-0 top-11 z-50 w-44 overflow-hidden rounded-xl border border-sky-100/35 bg-blue-900/85 shadow-xl shadow-blue-950/45 backdrop-blur-md transition-all duration-200 ease-out ${
                      openDropdownLanguage === "language"
                        ? "visible translate-y-0 scale-100 opacity-100"
                        : "invisible -translate-y-1 scale-95 opacity-0"
                    }`}
                    id="languageDropdownMenu"
                    role="menu"
                    aria-label={t.lang}
                  >
                    <ul className="py-1">
                      <li>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            switchLanguage("en");
                            leftToRight();
                          }}
                          className={`group/item flex w-full items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-150 ease-out hover:bg-sky-500/25 hover:text-white hover:ps-4 focus-visible:outline-none focus-visible:bg-sky-500/30 focus-visible:text-white motion-reduce:transition-none ${currentLanguage === "en" ? "bg-sky-500/15 text-white" : "text-slate-100"}`}
                        >
                          <img
                            src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/My-Special-Icons/refs/heads/main/en.png"
                            className="h-4 w-4 rounded-full ring-1 ring-white/30 transition-transform duration-200 group-hover/item:scale-110 motion-reduce:transition-none"
                            alt="English"
                          />
                          En (US)
                          {currentLanguage === "en" && (
                            <span className="ms-auto h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_6px_rgba(125,211,252,0.8)]" aria-hidden />
                          )}
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            switchLanguage("ar");
                            rightToLeft();
                          }}
                          className={`group/item flex w-full items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-150 ease-out hover:bg-sky-500/25 hover:text-white hover:ps-4 focus-visible:outline-none focus-visible:bg-sky-500/30 focus-visible:text-white motion-reduce:transition-none ${currentLanguage === "ar" ? "bg-sky-500/15 text-white" : "text-slate-100"}`}
                        >
                          <img
                            src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/My-Special-Icons/refs/heads/main/ar.jpg"
                            className="h-4 w-4 rounded-full ring-1 ring-white/30 transition-transform duration-200 group-hover/item:scale-110 motion-reduce:transition-none"
                            alt="Arabic"
                          />
                          Ar
                          {currentLanguage === "ar" && (
                            <span className="ms-auto h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_6px_rgba(125,211,252,0.8)]" aria-hidden />
                          )}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <MobileNavDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        dir={dir}
        t={t}
        isActivePath={isActivePath}
        currentLanguage={currentLanguage}
        switchLanguage={switchLanguage}
        leftToRight={leftToRight}
        rightToLeft={rightToLeft}
      />

      <button
        type="button"
        onClick={scrollToTop}
        aria-label={dir === "rtl" ? "العودة للأعلى" : "Back to top"}
        className={`group fixed bottom-5 right-5 z-[90] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/45 bg-gradient-to-b from-sky-500 to-blue-700 text-white shadow-lg shadow-blue-900/35 ring-1 ring-inset ring-white/30 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-700/40 hover:from-sky-400 hover:to-blue-600 active:translate-y-0 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
          isScrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-white/0 transition-colors duration-300 group-hover:bg-white/10" aria-hidden />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-6 w-6 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:scale-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
}
