"use client";

import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/langContext";

/* =========================================================
   Vision — unified AR/EN, blue theme, text-first layout.
   ========================================================= */
export default function Vision() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  const t = {
    eyebrow: isRtl ? "تطلّعاتنا" : "Our Outlook",
    title: isRtl ? "رؤية الشركة" : "Company Vision",
    highlight: isRtl ? "رؤيتنا" : "Our Vision",
    items: isRtl
      ? [
          "الاستمرار في كوننا شركة رائدة في تقديم خدمات المحاسبة والمراجعة والاستشارات المالية والإدارية ونموذجًا متميّزًا للمهنية.",
          "أن نسعى جاهدين بخبراتنا ومعرفتنا العميقة في مجالنا لخدمة العميل بأفضل صورة ممكنة.",
          "الالتزام بجعل أخلاقيات المهنة أساسًا لنا في جميع جوانب عملنا من خلال تقديم خدماتنا بكل أمانة وشفافية وصدق.",
        ]
      : [
          "Remaining a leading firm in accounting, audit, financial, and advisory services, and a distinguished model of professionalism.",
          "Striving with our deep experience and knowledge to serve each client at the highest possible standard.",
          "Committing to professional ethics as a foundation across every aspect of our work — delivering services with full honesty, transparency, and integrity.",
        ],
  };

  return (
    <section
      className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-blue-50/40 to-white"
      aria-labelledby="vision-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-700">
            {t.eyebrow}
          </span>
          <h2
            id="vision-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
          >
            {t.title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500" />
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-xl bg-white">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr]">
            {/* Text column (first on all layouts — reversed mood vs Goal) */}
            <div data-aos="fade-up" data-aos-delay="120" className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center order-2 md:order-1">
              <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold ring-1 ring-blue-200">
                <EyeIcon />
                {t.highlight}
              </span>

              <ul className="mt-6 space-y-4">
                {t.items.map((item, i) => (
                  <li
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 60}
                    className="group relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-white ring-1 ring-slate-200 hover:ring-blue-500 hover:shadow-md transition-all duration-300"
                  >
                    <span
                      className="absolute top-4 start-0 -translate-x-1/2 rtl:translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white text-xs font-bold flex items-center justify-center shadow-lg ring-4 ring-white"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <p className="ps-6 sm:ps-8 text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual column — Vision 2030 emphasis */}
            <div data-aos="fade-up" data-aos-delay="80" className="relative min-h-[260px] md:min-h-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden order-1 md:order-2 flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "28px 28px, 34px 34px",
                }}
                aria-hidden="true"
              />
              <div className="absolute -top-24 -end-24 w-72 h-72 rounded-full bg-blue-400/25 blur-3xl" />
              <div className="absolute -bottom-24 -start-24 w-72 h-72 rounded-full bg-indigo-400/25 blur-3xl" />

              <div className="relative z-10 w-full p-8 sm:p-10 flex flex-col items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/NationalDay95/2030.png"
                  alt={isRtl ? "رؤية المملكة 2030" : "Saudi Vision 2030"}
                  loading="lazy"
                  className="w-40 sm:w-56 lg:w-64 transition-transform duration-700 hover:scale-105 drop-shadow-2xl"
                />
                <span className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {isRtl
                    ? "شركاء في رؤية المستقبل"
                    : "Partners in the future vision"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EyeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path
        fillRule="evenodd"
        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
