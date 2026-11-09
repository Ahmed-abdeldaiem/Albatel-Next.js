"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/langContext";
import useNow from "../../hooks/useNow";
import { getEventsForBook, getVisibleEvents } from "../../data/campaigns";

/**
 * "Visit us at the fair" card. Book pages are statically built, so the
 * date check runs in the browser (useNow) to show/hide on time.
 * Pass `bookSlug` to show only events featuring that book.
 */
export default function UpcomingEventBanner({ bookSlug }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";
  const now = useNow();

  if (!now) return null;
  const events = bookSlug ? getEventsForBook(bookSlug, now) : getVisibleEvents(now);
  if (events.length === 0) return null;

  return (
    <section dir={dir} className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:px-10">
        {events.map((ev) => {
          const rows = [
            {
              label: isRtl ? "الموعد" : "When",
              value: ev.dates ? ev.dates[lang] : ev.when[lang],
            },
            { label: isRtl ? "المكان" : "Where", value: ev.location[lang] },
            ev.booth && { label: isRtl ? "الجناح" : "Booth", value: ev.booth[lang] },
            ev.signing && { label: isRtl ? "حفل التوقيع" : "Book signing", value: ev.signing[lang] },
          ].filter(Boolean);

          return (
            <article
              key={ev.key}
              className="grid overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 text-white shadow-2xl shadow-blue-950/20 md:grid-cols-[1.4fr_1fr]"
            >
              <div className="p-6 sm:p-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-3 py-1 text-xs font-bold">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                  {isRtl ? "زورونا في المعرض" : "Visit us at the fair"}
                </span>
                <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{ev.title[lang]}</h2>
                <p className="mt-3 leading-relaxed text-white/80">{ev.description[lang]}</p>
                <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                  {rows.map((r) => (
                    <div key={r.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <dt className="text-xs font-semibold text-emerald-300">{r.label}</dt>
                      <dd className="mt-1 font-bold">{r.value}</dd>
                    </div>
                  ))}
                </dl>
                {!ev.booth && (
                  <p className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm text-white/90">
                    <svg className="h-4 w-4 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                    {ev.pending[lang]}
                  </p>
                )}
              </div>
              <div className="relative min-h-[16rem]">
                <Image
                  src={ev.image}
                  alt={ev.imageCaption[lang]}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: ev.imagePosition || "center" }}
                />
                <span className="absolute bottom-3 start-3 end-3 rounded-xl bg-blue-950/80 px-3 py-2 text-xs font-semibold backdrop-blur">
                  {ev.imageCaption[lang]}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
