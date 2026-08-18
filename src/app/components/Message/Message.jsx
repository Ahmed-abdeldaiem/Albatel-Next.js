"use client";

import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/langContext";

/* =========================================================
   Message — unified AR/EN, quote-style design, amber accent.
   ========================================================= */
export default function Message() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  const t = {
    eyebrow: isRtl ? "رسالتنا إليكم" : "Our Message",
    title: isRtl ? "رسالة الشركة" : "Company Message",
    highlight: isRtl ? "رسالتنا" : "Our Message",
    body: isRtl
      ? "انطلاقًا من الشعور الراسخ بالمسؤولية تجاه وطننا ودعمًا لروّاد الأعمال، نؤمن بقدرتنا على تقديم استشارات مهنية داعمة ومتخصّصة بكل شفافيّة وموثوقيّة."
      : "Driven by a deep sense of responsibility toward our nation and in support of entrepreneurs, we believe in our ability to deliver dedicated, specialized professional advice with complete transparency and reliability.",
    tagline: isRtl
      ? "لنكن شريكًا اقتصاديًّا فعّالًا لوطن طموح."
      : "Let us be an effective economic partner for an ambitious nation.",
    values: isRtl
      ? [
          { label: "الشفافية", en: "Transparency" },
          { label: "المسؤولية", en: "Responsibility" },
          { label: "الاحترافية", en: "Professionalism" },
          { label: "الشراكة", en: "Partnership" },
        ]
      : [
          { label: "Transparency" },
          { label: "Responsibility" },
          { label: "Professionalism" },
          { label: "Partnership" },
        ],
  };

  return (
    <section
      className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-amber-50/40 to-white overflow-hidden"
      aria-labelledby="message-title"
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-24 -start-24 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -end-24 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-700">
            {t.eyebrow}
          </span>
          <h2
            id="message-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
          >
            {t.title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 via-blue-500 to-amber-500" />
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-xl bg-gradient-to-br from-white via-amber-50/40 to-white">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr,1.1fr]">
            {/* Image column */}
            <div data-aos="fade-up" data-aos-delay="80" className="relative min-h-[260px] md:min-h-full overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/message-1.jpg"
                alt={isRtl ? "رسالة الشركة" : "Company message"}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/30 to-transparent" />
              <span className="absolute bottom-5 start-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {isRtl ? "شريك للطموح" : "Partner in ambition"}
              </span>
            </div>

            {/* Text column */}
            <div data-aos="fade-up" data-aos-delay="120" className="relative p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs sm:text-sm font-semibold ring-1 ring-amber-200">
                <QuoteIcon />
                {t.highlight}
              </span>

              {/* Quote block */}
              <figure className="mt-6 relative">
                <span
                  className="absolute -top-4 -start-2 text-6xl font-serif text-amber-300 select-none leading-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="ps-6 text-slate-800 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                  {t.body}
                </blockquote>
                <figcaption className="mt-5 ps-6 text-amber-700 text-lg sm:text-xl font-bold">
                  {t.tagline}
                </figcaption>
              </figure>

              {/* Values pills */}
              <ul className="mt-7 flex flex-wrap gap-2 sm:gap-3">
                {t.values.map((v, i) => (
                  <li
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={100 + i * 60}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white ring-1 ring-slate-200 text-blue-950 text-xs sm:text-sm font-semibold shadow-sm hover:ring-amber-500 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-blue-600" />
                    {v.label}
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

function QuoteIcon() {
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
        d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
