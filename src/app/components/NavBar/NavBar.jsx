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
  },
};

function MobileNavDrawer({
  open,
  onClose,
  dir,
  t,
  getLinkClass,
  currentLanguage,
  switchLanguage,
  leftToRight,
  rightToLeft,
}) {
  const isRtl = dir === "rtl";
  const [branchesOpen, setBranchesOpen] = useState(false);

  useEffect(() => {
    if (!open) setBranchesOpen(false);
  }, [open]);

  const drawerLinkClass = (href) =>
    `${getLinkClass(href).replace("p-2 ", "").replace("text-gray-700", "text-slate-900")} block w-full rounded-lg px-3 py-2 text-start text-[15px] font-medium transition-colors hover:bg-slate-300/70`;

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
              ["/services", t.services],
              ["/ourTeam", t.team],
              ["/partners", t.partners],
              ["/blog", t.blog],
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
  const getLinkClass = (href) => {
    const isActive =
      pathname === href || (href !== "/" && pathname.startsWith(href));
    return `p-2 linkStyle text-sm md:text-base  ${isActive ? "text-blue-700 " : "text-gray-700"}`;
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
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, openDropdownLanguage]);

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
                  className="flex min-w-0 max-w-full items-center text-gray-950"
                  href="/"
                >
                  <img
                    src="/BatelLogo1.png"
                    className="h-10 w-auto shrink-0 px-0.5 sm:h-11"
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
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-emerald-400/90 bg-white shadow-md shadow-emerald-900/10 transition hover:scale-105 hover:border-emerald-500 hover:shadow-lg"
                >
                  <img
                    src={WA_ICON}
                    alt="WhatsApp"
                    className="h-6 w-6 object-contain"
                  />
                </a>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsOpen((o) => !o)}
                  className="menu-toggle-button inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300/90 bg-white text-gray-700 shadow-sm transition hover:border-blue-300 hover:text-blue-800"
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                >
                  <span className="sr-only">Toggle menu</span>
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="hidden h-full w-full items-center justify-center gap-4 lg:flex lg:gap-6">
              <div className="flex w-full items-center gap-2 lg:gap-16 lg:text-xl">
                <Link
                  className="flex items-center text-gray-950 lg:me-5"
                  href="/"
                >
                  <img
                    src="/BatelLogo1.png"
                    className="inline-block w-20 px-3"
                    alt="Albatel Logo"
                  />
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-green-950 mx-1 text-shadow-blue text-xl font-bold xl:text-2xl">
                      الباتل
                    </span>
                    <span className="text-blue-950 text-shadow-blue text-sm text-nowrap">
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
                    <li>
                      <Link
                        className={getLinkClass("/services") + " text-nowrap"}
                        href="/services"
                      >
                        {t.services}
                      </Link>
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
                    <li>
                      <Link
                        className={getLinkClass("/blog") + " text-nowrap"}
                        href="/blog"
                      >
                        {t.blog}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="relative flex shrink-0 items-center gap-2 lg:me-0">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown("language")}
                    className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-white/45 bg-white/12 px-3 py-1 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-inset ring-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
                    id="languageDropdownButton"
                  >
                    <img
                      src={
                        currentLanguage === "en"
                          ? "https://raw.githubusercontent.com/Ahmed-abdeldaiem/My-Special-Icons/refs/heads/main/en.png"
                          : "https://raw.githubusercontent.com/Ahmed-abdeldaiem/My-Special-Icons/refs/heads/main/ar.jpg"
                      }
                      className="h-4 w-4 rounded-full"
                      alt={currentLanguage === "en" ? "English" : "Arabic"}
                    />
                    {currentLanguage === "en" ? "En (US)" : "Ar"}
                    <svg
                      className={`h-3 w-3 transition-transform duration-300 ${openDropdownLanguage === "language" ? "rotate-180" : ""}`}
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
                    className={`absolute end-0 top-11 z-50 w-44 overflow-hidden rounded-xl border border-sky-100/35 bg-blue-900/80 shadow-lg shadow-blue-950/45 backdrop-blur-md transition-all duration-300 ${
                      openDropdownLanguage === "language"
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0"
                    }`}
                    id="languageDropdownMenu"
                  >
                    <ul className="py-1">
                      <li>
                        <button
                          type="button"
                          onClick={() => {
                            switchLanguage("en");
                            leftToRight();
                          }}
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm font-medium text-slate-100 transition-colors duration-200 hover:bg-sky-500/20 hover:text-white"
                        >
                          <img
                            src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/My-Special-Icons/refs/heads/main/en.png"
                            className="h-4 w-4 rounded-full"
                            alt="English"
                          />
                          En (US)
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => {
                            switchLanguage("ar");
                            rightToLeft();
                          }}
                          className="flex w-full items-center gap-2 px-3 py-2 text-sm font-medium text-slate-100 transition-colors duration-200 hover:bg-sky-500/20 hover:text-white"
                        >
                          <img
                            src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/My-Special-Icons/refs/heads/main/ar.jpg"
                            className="h-4 w-4 rounded-full"
                            alt="Arabic"
                          />
                          Ar
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
        getLinkClass={getLinkClass}
        currentLanguage={currentLanguage}
        switchLanguage={switchLanguage}
        leftToRight={leftToRight}
        rightToLeft={rightToLeft}
      />

      <button
        type="button"
        onClick={scrollToTop}
        aria-label={dir === "rtl" ? "العودة للأعلى" : "Back to top"}
        className={`fixed bottom-5 right-5 z-[90] hidden lg:inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/45 bg-gradient-to-b from-sky-500 to-blue-700 text-white shadow-lg shadow-blue-900/35 ring-1 ring-inset ring-white/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:from-sky-400 hover:to-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200 ${
          isScrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
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
