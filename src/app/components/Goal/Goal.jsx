"use client";

import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/langContext";

/* =========================================================
   Goal — unified AR/EN, modern two-column card.
   ========================================================= */
export default function Goal() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  const t = {
    eyebrow: isRtl ? "التزامنا" : "Our Commitment",
    title: isRtl ? "هدف الشركة" : "Company Goal",
    highlight: isRtl ? "هدفنا" : "Our Goal",
    lead: isRtl
      ? "نتيجة لما يشهده قطاع الأعمال من ازدهار ملحوظ بفضل رؤية 2030،"
      : "Driven by the remarkable prosperity of the business sector under Vision 2030,",
    lead2: isRtl
      ? "نسعى ونطمح أن نكون الخيار الأوّل لعملائنا من خلال:"
      : "we aspire to be our clients' first choice through:",
    items: isRtl
      ? [
          "إمداد العميل باحتياجاته المهنية كافّة.",
          "تحرّي الدقّة والاحترافية في كل ما نقدّمه.",
          "الامتثال الكامل لكل مستجدّات ومتطلبات المهنة.",
        ]
      : [
          "Providing clients with every professional need.",
          "Upholding precision and professionalism across our work.",
          "Full compliance with all professional requirements and updates.",
        ],
  };

  return (
    <section
      className="relative py-8 sm:py-10 bg-gradient-to-b from-white via-slate-50 to-white"
      aria-labelledby="goal-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
            {t.eyebrow}
          </span>
          <h2
            id="goal-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
          >
            {t.title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-green-500 via-blue-500 to-green-500" />
        </div>

        {/* Card */}
        <div data-aos="fade-up" data-aos-delay="120" className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-xl bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image column */}
            <div className="relative min-h-[280px] sm:min-h-[360px] md:min-h-full bg-gradient-to-br from-green-700 via-green-800 to-blue-900 overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/NationalDay95/King.png"
                alt={
                  isRtl
                    ? "صاحب السمو الملكي الأمير محمد بن سلمان"
                    : "HRH Crown Prince Mohammed bin Salman"
                }
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-900/20 to-transparent" />
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
                aria-hidden="true"
              />
              {/* Floating badge */}
              <span className="absolute bottom-5 start-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-300" />
                {isRtl ? "رؤية 2030" : "Vision 2030"}
              </span>
            </div>

            {/* Text column */}
            <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs sm:text-sm font-semibold ring-1 ring-green-200">
                <TargetIcon />
                {t.highlight}
              </span>

              <p className="mt-5 text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                {t.lead}{" "}
                <span className="font-semibold text-blue-950">{t.lead2}</span>
              </p>

              <ul className="mt-6 space-y-3">
                {t.items.map((item, i) => (
                  <li
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 60}
                    className="group flex items-start gap-3 p-3 sm:p-4 rounded-2xl ring-1 ring-slate-200 bg-gradient-to-br from-white to-slate-50 hover:ring-green-500 hover:shadow-md transition-all duration-300"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed font-medium">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TargetIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-3.5 h-3.5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25a9.75 9.75 0 1 0 0 19.5 9.75 9.75 0 0 0 0-19.5Zm0 3.75a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
