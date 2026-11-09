"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/langContext";
import {
  AUDIT_SEASON_PATH,
  getAuditSeason,
  getVisibleEvents,
} from "../../data/campaigns";

/**
 * "Our events" on the home page — the audit season and any upcoming event.
 * Cards appear and disappear by date (see data/campaigns.js). The home page
 * is re-rendered every few minutes (ISR), so deciding at render time keeps
 * the cards in the HTML for search engines without layout shift.
 */
export default function EventsSection() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";

  const season = getAuditSeason();
  const events = getVisibleEvents();

  const cards = [];

  if (season.active) {
    const { next } = season;
    cards.push({
      key: "audit-season",
      image: "/audit-season/inventory-count-warehouse.jpg",
      imageAlt: isRtl ? "حضور جرد المخزون" : "Stock count attendance",
      badge: isRtl ? "موسم المراجعة" : "Audit season",
      title: isRtl
        ? `حملة مراجعة القوائم المالية ${season.fiscalYear}`
        : `FY${season.fiscalYear} financial statements audit`,
      when: `${next.title[lang]}: ${isRtl ? next.label.ar : next.label.en}`,
      body: isRtl
        ? `الجرد في 31 ديسمبر، والإقرار الزكوي خلال 120 يومًا، والإيداع في قوائم خلال 6 أشهر. ابدأ مع مراجعك من الآن ولا تنتظر يناير.`
        : `Stock count on 31 December, zakat return within 120 days, Qawaem filing within 6 months. Start with your auditor now — don't wait for January.`,
      cta: isRtl ? "عيّن مراجعك" : "Appoint your auditor",
      href: AUDIT_SEASON_PATH,
      tone: "emerald",
    });
  }

  for (const ev of events) {
    cards.push({
      key: ev.key,
      image: ev.image,
      imagePosition: ev.imagePosition,
      imageAlt: ev.imageCaption[lang],
      badge: isRtl ? "قريبًا" : "Coming soon",
      title: ev.title[lang],
      when: ev.dates ? ev.dates[lang] : ev.when[lang],
      body: ev.booth ? `${ev.description[lang]} ${ev.booth[lang]}` : ev.description[lang],
      note: ev.booth ? null : ev.pending[lang],
      cta: isRtl ? "إصداراتنا في المعرض" : "Our books at the fair",
      href: ev.href,
      tone: "sky",
    });
  }

  if (cards.length === 0) return null;

  return (
    <section dir={dir} className="bg-slate-50 py-14 sm:py-20" aria-labelledby="events-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <span className="text-sm font-bold text-emerald-700">
            {isRtl ? "المستجدات" : "What's on"}
          </span>
          <h2 id="events-title" className="mt-2 text-2xl font-bold text-blue-950 sm:text-4xl">
            {isRtl ? "فعالياتنا" : "Our Events"}
          </h2>
        </div>

        <div className={`mt-10 grid gap-6 ${cards.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-2xl"}`}>
          {cards.map((c) => (
            <article
              key={c.key}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-blue-950/5 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-blue-950">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: c.imagePosition || "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent" />
                <span
                  className={`absolute top-4 start-4 rounded-full px-3 py-1 text-xs font-bold text-white ${
                    c.tone === "emerald" ? "bg-emerald-500" : "bg-sky-500"
                  }`}
                >
                  {c.badge}
                </span>
                <span className="absolute bottom-4 start-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                  {c.when}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-blue-950">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
                {c.note && (
                  <p className="mt-3 rounded-xl bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-800">
                    {c.note}
                  </p>
                )}
                <Link
                  href={c.href}
                  data-cta={`home-event-${c.key}`}
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-900 to-emerald-700 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:shadow-lg"
                >
                  {c.cta}
                  <span aria-hidden>{isRtl ? "←" : "→"}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
