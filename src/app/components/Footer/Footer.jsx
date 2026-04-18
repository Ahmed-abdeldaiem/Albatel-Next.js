"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "../../contexts/langContext";

/* =========================================================
   Static data — kept outside the component so it isn't
   re-allocated on every render.
   ========================================================= */
const CONTACT = {
  phone: "+966550554262",
  phoneDisplay: "+966 55 055 4262",
  email: "albatelcpa@albatelcpa.com",
  whatsapp: "https://wa.me/966550554262",
};

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/albatel-cpa/posts/?feedView=all",
    src: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%209.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/albatel_cpa/",
    src: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%205.png",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/albatel_cpa",
    src: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%202.png",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61582443590665",
    src: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%204.png",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Albatel_CPA",
    src: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%207.png",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@albatel_cpa?_t=ZS-90UGIjq7hMf&_r=1",
    src: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%203.png",
  },
];

/* =========================================================
   Main Footer
   Single JSX tree driven by `t` + `dir` from LanguageContext.
   ========================================================= */
export default function Footer() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const t = {
    brand: {
      name: isRtl
        ? "الباتل محاسبون ومراجعون قانونيون"
        : "Al-Batel Certified Public Accountants",
      about: isRtl
        ? "شريككم الموثوق في الاستشارات المالية والمراجعة القانونية، نقدّم خدمات مهنية بمعايير عالمية داخل المملكة العربية السعودية."
        : "Your trusted partner for financial consulting and audit services, delivering world-class professional solutions across the Kingdom of Saudi Arabia.",
      cta: isRtl ? "اطلب عرض سعر" : "Request a Proposal",
    },
    links: {
      heading: isRtl ? "روابط مهمة" : "Quick Links",
      items: isRtl
        ? [
            { href: "/about", label: "من نحن" },
            { href: "/services", label: "خدماتنا" },
            { href: "/ourTeam", label: "فريقنا" },
            { href: "/partners", label: "شركاؤنا" },
            { href: "/blog", label: "المدونة" },
            { href: "/careers", label: "الوظائف" },
          ]
        : [
            { href: "/about", label: "About Us" },
            { href: "/services", label: "Services" },
            { href: "/ourTeam", label: "Our Team" },
            { href: "/partners", label: "Partners" },
            { href: "/blog", label: "Blog" },
            { href: "/careers", label: "Careers" },
          ],
    },
    services: {
      heading: isRtl ? "أبرز خدماتنا" : "Top Services",
      items: isRtl
        ? [
            { href: "/service/Financial_Consulting_service", label: "استشارة مالية" },
            { href: "/service/Audit_Financial_Statements_service", label: "مراجعة قوائم مالية" },
            { href: "/service/Tax_Services", label: "خدمات ضريبية" },
            { href: "/service/Accounting_Services", label: "خدمات محاسبة" },
            { href: "/service/Internal_Audit_service", label: "تدقيق داخلي" },
            { href: "/service/Transfer_Pricing_Documentation_service", label: "ملفات توثيق السعر المحايد" },
          ]
        : [
            { href: "/service/Financial_Consulting_service", label: "Financial Consulting" },
            { href: "/service/Audit_Financial_Statements_service", label: "Financial Statements Review" },
            { href: "/service/Tax_Services", label: "Tax Services" },
            { href: "/service/Accounting_Services", label: "Accounting Services" },
            { href: "/service/Internal_Audit_service", label: "Internal Audit" },
            { href: "/service/Transfer_Pricing_Documentation_service", label: "Transfer Pricing Documentation" },
          ],
    },
    contact: {
      heading: isRtl ? "تواصل معنا" : "Get in Touch",
      email: isRtl ? "البريد الإلكتروني" : "Email us",
      whatsapp: isRtl ? "واتساب" : "WhatsApp",
      contactUs: isRtl ? "تواصل معنا" : "Contact us",
    },
    socialHeading: isRtl ? "تابعنا على" : "Follow us on",
    rights: isRtl
      ? `© ${new Date().getFullYear()} جميع الحقوق محفوظة — الباتل`
      : `© ${new Date().getFullYear()} All Rights Reserved — Al-Batel`,
    developedBy: isRtl ? "تطوير" : "Developed by",
    developerName: "Ahmed Abdeldaiem",
  };

  return (
    <footer
      dir={dir}
      className="relative text-white bg-[url('/footer.jpg')] bg-no-repeat bg-center bg-cover"
      aria-label={isRtl ? "تذييل الموقع" : "Site footer"}
    >
      {/* Blue tint overlays — keep the background image visible while ensuring text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-blue-950/90" />
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px, 34px 34px",
        }}
      />

      {/* Decorative gradient strip on top */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-green-400 to-blue-500" />

      <div className="relative z-10 max-w-7xl 4k:max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 pb-6">
        {/* =======================================================
            MAIN GRID: Brand / Quick Links / Services / Contact
            ======================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* ---- Brand column ---- */}
          <div data-aos="fade-up" className="sm:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                <img
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/logo-1.png"
                  className="h-7 w-auto"
                  alt="Al-Batel Logo"
                />
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-semibold text-white group-hover:text-green-300 transition-colors duration-300">
                {t.brand.name}
              </span>
            </Link>

            <p className="mt-5 text-sm sm:text-base text-blue-100/85 leading-relaxed max-w-md">
              {t.brand.about}
            </p>

            <Link
              href="/rfp"
              className="group mt-6 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-sm shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.brand.cta}
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

          {/* ---- Quick Links ---- */}
          <div data-aos="fade-up" data-aos-delay="80" className="lg:col-span-2">
            <ColumnHeading>{t.links.heading}</ColumnHeading>
            <ul className="mt-4 space-y-2.5">
              {t.links.items.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-blue-100/85 hover:text-white transition-colors duration-300"
                  >
                    <span
                      className={`inline-block w-1.5 h-1.5 rounded-full bg-green-400/70 transition-all duration-300 group-hover:bg-green-300 group-hover:scale-125`}
                    />
                    <span className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Top Services ---- */}
          <div data-aos="fade-up" data-aos-delay="160" className="lg:col-span-3">
            <ColumnHeading>{t.services.heading}</ColumnHeading>
            <ul className="mt-4 space-y-2.5">
              {t.services.items.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm text-blue-100/85 hover:text-white transition-colors duration-300"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-300/70 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-125" />
                    <span className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform duration-300">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- Contact ---- */}
          <div data-aos="fade-up" data-aos-delay="240" className="lg:col-span-3">
            <ColumnHeading>{t.contact.heading}</ColumnHeading>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-start gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                >
                  <span className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[11px] uppercase tracking-wider text-blue-200/70">
                      {t.contact.email}
                    </span>
                    <span
                      className="block text-sm text-white font-medium break-all"
                      dir="ltr"
                    >
                      {CONTACT.email}
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                >
                  <span className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.272.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[11px] uppercase tracking-wider text-blue-200/70">
                      {t.contact.whatsapp}
                    </span>
                    <span
                      className="block text-sm text-white font-medium"
                      dir="ltr"
                    >
                      {CONTACT.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 p-3 rounded-xl border border-white/25 text-sm font-semibold text-white hover:bg-white hover:text-blue-950 transition-all duration-300"
                >
                  {t.contact.contactUs}
                  <span
                    className={`transition-transform duration-300 ${
                      isRtl
                        ? "group-hover:-translate-x-0.5"
                        : "group-hover:translate-x-0.5"
                    }`}
                  >
                    {isRtl ? "←" : "→"}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* =======================================================
            SOCIAL STRIP
            ======================================================= */}
        <div
          data-aos="fade-up"
          className="mt-12 flex flex-col sm:flex-row items-center sm:justify-between gap-4 pt-6 border-t border-white/15"
        >
          <span className="text-sm text-blue-100/80 font-medium">
            {t.socialHeading}
          </span>
          <ul className="flex items-center gap-2 sm:gap-3">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white hover:border-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  <img
                    src={s.src}
                    alt={s.name}
                    className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* =======================================================
            BOTTOM BAR: Copyright + Developer credits
            ======================================================= */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <span className="text-xs sm:text-sm text-blue-100/70">
            {t.rights}
          </span>

          <span className="text-xs sm:text-sm text-blue-100/70 inline-flex items-center gap-2">
            {t.developedBy}
            <span className="text-white font-semibold">{t.developerName}</span>
            <Link
              href="/TeamMember/42"
              target="_blank"
              aria-label="Albatel Logo"
              className="inline-flex items-center"
            >
              <img
                src="/BatelLogo1.png"
                className="w-6 h-6 hover:rotate-180 transition-transform duration-700"
                alt="Albatel Logo"
              />
            </Link>
           
            <a
              href="https://www.linkedin.com/in/ahmed-abdeldaiem-a26079227/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Developer LinkedIn"
              className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-blue-500 transition-colors duration-300"
            >
              <i className="fa-brands fa-linkedin-in text-[11px]" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=ahmadabdeldaiem18@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Developer Email"
              className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-red-500 transition-colors duration-300"
            >
              <i className="fa-brands fa-google text-[11px]" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   Helper: Column heading — consistent style for all columns.
   ========================================================= */
function ColumnHeading({ children }) {
  return (
    <div className="inline-flex flex-col">
      <h3 className="text-base sm:text-lg font-bold text-white">{children}</h3>
      <span className="mt-2 block h-0.5 w-10 rounded-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400" />
    </div>
  );
}
