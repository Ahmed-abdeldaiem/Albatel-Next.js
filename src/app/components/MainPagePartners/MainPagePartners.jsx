"use client";

import React, {
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LanguageContext } from "../../contexts/langContext";
import { PartnersContext } from "../../contexts/PartnersContext";
import AOS from "aos";

/* =========================================================
   MainPagePartners — unified AR/EN, modern marquee grid.
   ========================================================= */
export default function MainPagePartners() {
  const { dir } = useContext(LanguageContext);
  const { getPartners } = useContext(PartnersContext);
  const isRtl = dir === "rtl";

  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(6);

  /* ---- Responsive slide count ---- */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 480) setSlidesToShow(2);
      else if (w < 768) setSlidesToShow(3);
      else if (w < 1024) setSlidesToShow(4);
      else if (w < 1440) setSlidesToShow(5);
      else setSlidesToShow(6);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* ---- Fetch ---- */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await getPartners();
        if (!cancelled) setPartners(Array.isArray(data) ? data : []);
      } catch {
        if (!cancelled) setPartners([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [getPartners]);

  useEffect(() => {
    if (loading) return undefined;
    const t = window.setTimeout(() => AOS.refresh(), 50);
    return () => window.clearTimeout(t);
  }, [loading]);

  /* ---- Split rows for counter-direction marquee ---- */
  const firstRow = useMemo(
    () => partners.filter((_, i) => i % 2 === 0),
    [partners]
  );
  const secondRow = useMemo(
    () => partners.filter((_, i) => i % 2 === 1),
    [partners]
  );

  /* ---- Slider settings ---- */
  const commonSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
  };

  const topRowSettings = { ...commonSettings, rtl: false };
  const bottomRowSettings = { ...commonSettings, rtl: true };

  /* ---- Translations ---- */
  const t = {
    eyebrow: isRtl ? "ثقة عملائنا" : "Trusted By",
    title: isRtl ? "شركاء النجاح" : "Partners of Success",
    sub: isRtl
      ? "نفخر بشراكاتنا المثمرة وعملائنا الذين منحونا ثقتهم، فنجاحهم هو أعظم إنجازاتنا."
      : "We are proud of our successful partnerships and the clients who trust us — their success is our greatest achievement.",
    empty: isRtl
      ? "سيتمّ تحميل شركائنا قريبًا..."
      : "Our partners will load shortly...",
    viewAll: isRtl ? "شاهد جميع الشركاء" : "View all partners",
  };

  return (
    <section
      className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
      aria-labelledby="partners-title"
    >
      <div
        className="absolute -top-24 -start-24 w-80 h-80 rounded-full bg-blue-200/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -end-24 w-80 h-80 rounded-full bg-green-200/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-700">
            {t.eyebrow}
          </span>
          <h2
            id="partners-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-950"
          >
            {t.title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600" />
          <p className="mt-5 mx-auto max-w-3xl text-slate-600 text-sm sm:text-base lg:text-lg">
            {t.sub}
          </p>
        </div>

        {/* Marquee container */}
        <div data-aos="fade-up" data-aos-delay="120" className="relative rounded-3xl bg-white ring-1 ring-slate-200 shadow-xl p-4 sm:p-6 lg:p-8 overflow-hidden">
          {/* Edge fades */}
          <div
            className="pointer-events-none absolute inset-y-0 start-0 w-16 sm:w-24 z-10 bg-gradient-to-e from-white to-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0))",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 end-0 w-16 sm:w-24 z-10"
            style={{
              backgroundImage:
                "linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0))",
            }}
            aria-hidden="true"
          />

          {loading ? (
            <LoadingRows />
          ) : partners.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-slate-600 text-sm sm:text-base">{t.empty}</p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {firstRow.length > 0 && (
                <Slider
                  {...topRowSettings}
                  className="partners-slider w-full max-w-full overflow-hidden"
                >
                  {firstRow.map((p, i) => (
                    <PartnerSlide key={`top-${i}`} partner={p} />
                  ))}
                </Slider>
              )}

              {secondRow.length > 0 && (
                <Slider
                  {...bottomRowSettings}
                  className="partners-slider w-full max-w-full overflow-hidden"
                >
                  {secondRow.map((p, i) => (
                    <PartnerSlide key={`bottom-${i}`} partner={p} />
                  ))}
                </Slider>
              )}
            </div>
          )}
        </div>

        {/* CTA */}
        {!loading && partners.length > 0 ? (
          <div data-aos="fade-up" data-aos-delay="200" className="mt-8 sm:mt-10 flex justify-center">
            <Link
              href="/partners"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-white text-blue-700 ring-1 ring-slate-200 text-sm sm:text-base font-semibold shadow-sm hover:ring-blue-500 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              {t.viewAll}
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
        ) : null}
      </div>
    </section>
  );
}

/* =========================================================
   Helper: Partner slide card.
   ========================================================= */
function PartnerSlide({ partner }) {
  return (
    <div className="px-2 sm:px-3">
      <div className="group relative h-[90px] sm:h-[110px] flex items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200/70 hover:ring-blue-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-500">
        <img
          src={partner?.image}
          alt={partner?.name || "Partner"}
          loading="lazy"
          className="max-h-[70%] max-w-[80%] object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
      </div>
    </div>
  );
}

/* =========================================================
   Helper: Loading skeleton rows.
   ========================================================= */
function LoadingRows() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {[0, 1].map((row) => (
        <div
          key={row}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-[90px] sm:h-[110px] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 ring-1 ring-slate-200 animate-pulse"
            />
          ))}
        </div>
      ))}
    </div>
  );
}
