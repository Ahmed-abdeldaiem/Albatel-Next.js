"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "../../contexts/langContext";

/* =========================================================
   ServiceDesc — unified AR/EN, modern two-column section
   with value-pillars grid + CTA.
   ========================================================= */
export default function ServiceDesc() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  const t = {
    eyebrow: isRtl ? "خدماتنا" : "Our Offerings",
    title: isRtl
      ? "حلول متكاملة لدفع أعمالكم نحو النجاح"
      : "Integrated solutions to drive your business to success",
    sub: isRtl
      ? "نجمع بين الخبرة والتميّز لنقدّم حلولًا عمليّة تحوّل التحديات إلى فرص، ورؤاكم إلى واقع ملموس."
      : "Combining expertise and excellence to deliver practical solutions that turn challenges into opportunities — and your vision into reality.",
    cta: isRtl ? "تعرّف على خدماتنا" : "Explore our services",
    ctaHint: isRtl ? "اطّلع على جميع الخدمات" : "Browse all services",
    pillars: isRtl
      ? [
          {
            title: "التميّز التشغيلي",
            desc: "نساعدك على تحسين العمليات واتخاذ قرارات استراتيجية تقود للنمو المستدام.",
          },
          {
            title: "التخطيط المستقبلي",
            desc: "نرسم معكم خارطة طريق واضحة لتحقيق رؤيتكم المستقبلية بكفاءة وجودة.",
          },
          {
            title: "الامتثال والجودة",
            desc: "نضمن التزام عملياتكم بأعلى معايير الجودة والكفاءة التشغيلية والسياسات المتّبعة.",
          },
          {
            title: "تطوير الكوادر",
            desc: "نحدّد فرص النمو ونطوّر قدرات فريقكم لمواكبة تحدّيات السوق وتطوّر المهنة.",
          },
          {
            title: "استثمار في الإنسان",
            desc: "نستثمر في كوادركم البشرية عبر برامج تدريبية متخصّصة ومشاركة مستمرة.",
          },
        ]
      : [
          {
            title: "Operational Excellence",
            desc: "Helping you improve processes and make strategic decisions that drive sustainable growth.",
          },
          {
            title: "Future Roadmap",
            desc: "Building a clear roadmap with you to deliver your future vision efficiently and at quality.",
          },
          {
            title: "Compliance & Quality",
            desc: "Ensuring operations adhere to the highest standards of quality, efficiency, and policy.",
          },
          {
            title: "Talent Development",
            desc: "Spotting growth opportunities and enhancing your team's capabilities to meet market challenges.",
          },
          {
            title: "Investing in People",
            desc: "Investing in your human capital through specialized training programs and continuous engagement.",
          },
        ],
  };

  return (
    <section
      className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
      aria-labelledby="service-desc-title"
    >
      <div
        className="absolute -top-24 -end-24 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -start-24 w-80 h-80 rounded-full bg-green-200/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
            {t.eyebrow}
          </span>
          <h2
            id="service-desc-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
          >
            {t.title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
          <p className="mt-5 mx-auto max-w-3xl text-slate-600 text-sm sm:text-base lg:text-lg">
            {t.sub}
          </p>
        </div>

        {/* Two-column: image + pillar list */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr,1.05fr] gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
              <img
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/mainPageService.png"
                alt={isRtl ? "خدمات الباتل" : "Al-Batel services"}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="hidden sm:block absolute -bottom-6 start-6 bg-white rounded-2xl ring-1 ring-slate-200 shadow-xl px-5 py-4">
              <p className="text-xs text-slate-500 font-medium">
                {isRtl ? "معايير عالمية" : "World-class standards"}
              </p>
              <p className="mt-1 text-blue-950 font-bold text-base sm:text-lg inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                IIA · IFRS · SOCPA
              </p>
            </div>
          </div>

          {/* Pillars list */}
          <ul className="space-y-4">
            {t.pillars.map((p, i) => (
              <li
                key={i}
                className="group relative flex gap-4 p-4 sm:p-5 rounded-2xl ring-1 ring-slate-200 bg-white hover:ring-green-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <PillarIcon index={i} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-blue-950 font-bold text-base sm:text-lg group-hover:text-green-700 transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <span className="text-slate-600 text-sm sm:text-base font-medium">
            {t.ctaHint}
          </span>
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/60 hover:-translate-y-0.5 transition-all duration-300"
          >
            {t.cta}
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
    </section>
  );
}

/* =========================================================
   Pillar icons by index.
   ========================================================= */
function PillarIcon({ index }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    className: "w-6 h-6",
    "aria-hidden": true,
  };
  switch (index) {
    case 0:
      return (
        <svg {...common}>
          <path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <path
            fillRule="evenodd"
            d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case 3:
      return (
        <svg {...common}>
          <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
          <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 0 1-.46.71 47.878 47.878 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.877 47.877 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
        </svg>
      );
  }
}
