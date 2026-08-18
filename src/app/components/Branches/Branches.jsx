"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "../../contexts/langContext";

/* =========================================================
   Static branch data — cleaned up (removed stray undefined).
   ========================================================= */
const BRANCHES = [
  {
    id: "Riyadh_Branch",
    name: { ar: "الرياض", en: "Riyadh" },
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b1.jpg",
  },
  {
    id: "Jeddah_Main_Branch",
    name: { ar: "جدة الرئيسي", en: "Jeddah" },
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b2.webp",
  },
  {
    id: "Jeddah_Second_Branch",
    name: { ar: "جدة الثاني", en: "Jeddah 2" },
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b2.webp",
  },
  {
    id: "Madinah_branch",
    name: { ar: "المدينة المنورة", en: "Madinah" },
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b3.jpg",
  },
  {
    id: "Khobar_Branch",
    name: { ar: "الخبر", en: "Khobar" },
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b4.jpg",
  },
  {
    id: "Hafar_Al-Batin_Branch",
    name: { ar: "حفر الباطن", en: "Hafar Al-Batin" },
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b5.jpg",
  },
  {
    id: "Khamis_Mushait_Branch",
    name: { ar: "خميس مشيط", en: "Khamis Mushait" },
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b6.jpg",
  },
  {
    id: "Jizan_Branch",
    name: { ar: "جازان", en: "Jazan" },
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b7.jpg",
  },
  {
    id: "Al-Qassim_Branch",
    name: { ar: "القصيم", en: "Al-Qassim" },
    img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b8.jpg",
  },
];

/* =========================================================
   Branches — unified AR/EN, modern grid of location cards.
   ========================================================= */
export default function Branches() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";

  const t = {
    eyebrow: isRtl ? "في خدمتكم" : "At Your Service",
    title: isRtl ? "فروع الشركة" : "Our Branches",
    sub: isRtl
      ? "نخدمكم في كل أنحاء المملكة، بشبكة فروع متكاملة تصل إليكم أينما كنتم."
      : "Serving you across the Kingdom with a fully-integrated network of branches wherever you are.",
    branchesCount: isRtl ? "فرعًا رئيسيًا" : "Main Branches",
    cities: isRtl ? "مدن" : "Cities",
    kingdom: isRtl ? "تغطية شاملة" : "Nationwide Coverage",
    cta: isRtl ? "عرض تفاصيل الفرع" : "View branch details",
  };

  return (
    <section
      className="relative py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50"
      aria-labelledby="branches-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
            {t.eyebrow}
          </span>
          <h2
            id="branches-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
          >
            {t.title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
          <p className="mt-5 mx-auto max-w-3xl text-slate-600 text-sm sm:text-base lg:text-lg">
            {t.sub}
          </p>
        </div>

        {/* Mini stats strip */}
        <div data-aos="fade-up" data-aos-delay="80" className="mb-10 grid grid-cols-3 gap-3 sm:gap-5 max-w-2xl mx-auto">
          <MiniStat value={`${BRANCHES.length}`} label={t.branchesCount} />
          <MiniStat value="7+" label={t.cities} />
          <MiniStat value="KSA" label={t.kingdom} />
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-center items-center gap-4 sm:gap-5">
          {BRANCHES.map((branch, i) => (
            <li key={branch.id} data-aos="fade-up" data-aos-delay={(i % 3) * 80}>
              <Link
                href={`/branch/${branch.id}`}
                className="group block relative overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-sm bg-white hover:ring-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                aria-label={`${t.title} — ${branch.name[lang]}`}
              >
                {/* Image */}
                <div className="relative h-40 sm:h-44 lg:h-48 overflow-hidden">
                  <img
                    src={branch.img}
                    alt={`${branch.name[lang]} ${
                      isRtl ? "فرع" : "branch"
                    }`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-blue-900/25 to-transparent" />

                  {/* Pin badge */}
                  <span className="absolute top-3 end-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs font-semibold">
                    <PinIcon />
                    {isRtl ? "KSA" : "KSA"}
                  </span>

                  {/* Branch number */}
                  <span className="absolute top-3 start-3 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white text-xs font-bold flex items-center justify-center shadow-lg ring-2 ring-white/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Branch name */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="flex items-center gap-2 text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                      <span className="inline-flex w-7 h-7 rounded-full bg-white/15 backdrop-blur-md items-center justify-center text-green-300">
                        <PinIcon />
                      </span>
                      {branch.name[lang]}
                    </h3>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="flex items-center justify-between px-5 py-3 text-sm">
                  <span className="text-slate-600 font-medium">
                    {t.cta}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-blue-700 font-semibold group-hover:text-green-700 transition-colors duration-300`}
                    aria-hidden="true"
                  >
                    <span
                      className={`transition-transform duration-300 ${
                        isRtl
                          ? "group-hover:-translate-x-1"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      {isRtl ? "←" : "→"}
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function MiniStat({ value, label }) {
  return (
    <div className="text-center rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-3 sm:p-4">
      <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="mt-1 text-[11px] sm:text-sm text-slate-600 font-medium">
        {label}
      </p>
    </div>
  );
}

function PinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
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
