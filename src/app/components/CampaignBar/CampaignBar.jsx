"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useMemo, useState } from "react";
import { LanguageContext } from "../../contexts/langContext";
import useNow from "../../hooks/useNow";
import {
  AUDIT_SEASON_PATH,
  getAuditSeason,
  getSeasonMessage,
  getVisibleEvents,
} from "../../data/campaigns";

const DISMISS_KEY = "albatel-campaign-dismissed";
const ROTATE_MS = 7000;

function readDismissed() {
  try {
    return JSON.parse(sessionStorage.getItem(DISMISS_KEY) || "[]");
  } catch {
    return [];
  }
}

function writeDismissed(keys) {
  try {
    sessionStorage.setItem(DISMISS_KEY, JSON.stringify(keys));
  } catch {
    /* storage unavailable — dismissal just won't persist */
  }
}

/**
 * Small floating announcement (bottom-center, between the floating buttons
 * on the left and the back-to-top button on the right). Messages are
 * date-driven from data/campaigns.js; several active messages rotate.
 */
export default function CampaignBar() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";
  const pathname = usePathname();
  const now = useNow();

  const [dismissed, setDismissed] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => setDismissed(readDismissed()), []);

  const messages = useMemo(() => {
    if (!now) return [];
    const list = [];

    const season = getAuditSeason(now);
    if (season.active && pathname !== AUDIT_SEASON_PATH) {
      const m = getSeasonMessage(season, isRtl);
      list.push({
        key: `audit-${season.fiscalYear}-${season.phase}`,
        badge: m.badge,
        text: m.text,
        short: m.short,
        cta: m.cta,
        href: AUDIT_SEASON_PATH,
        tone: "green",
      });
    }

    for (const ev of getVisibleEvents(now)) {
      if (pathname === ev.href) continue;
      list.push({
        key: ev.key,
        badge: isRtl ? "فعالية" : "Event",
        text: `${ev.title[lang]} — ${ev.dates ? ev.dates[lang] : ev.when[lang]}`,
        short: ev.dates ? ev.dates[lang] : ev.when[lang],
        cta: isRtl ? "التفاصيل" : "Details",
        href: ev.href,
        tone: "blue",
      });
    }

    return list.filter((m) => !dismissed.includes(m.key));
  }, [now, pathname, dismissed, isRtl, lang]);

  useEffect(() => {
    if (messages.length < 2) return undefined;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % messages.length),
      ROTATE_MS
    );
    return () => clearInterval(id);
  }, [messages.length]);

  if (messages.length === 0) return null;
  const msg = messages[index % messages.length];

  const dismiss = () => {
    const next = [...dismissed, ...messages.map((m) => m.key)];
    setDismissed(next);
    writeDismissed(next);
  };

  const badgeTone =
    msg.tone === "green" ? "bg-emerald-500 text-white" : "bg-sky-500 text-white";

  return (
    <div
      dir={dir}
      role="region"
      aria-label={isRtl ? "إعلان" : "Announcement"}
      className="fixed bottom-4 left-[4.25rem] right-[4.5rem] z-[60] mx-auto max-w-2xl sm:bottom-5"
    >
      <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-gradient-to-r from-blue-950/95 via-blue-900/95 to-emerald-900/95 p-2 ps-3 text-white shadow-2xl shadow-blue-950/40 backdrop-blur-md sm:gap-3 sm:rounded-full">
        <span
          className={`hidden shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold sm:inline-flex ${badgeTone}`}
        >
          {msg.badge}
        </span>
        <p
          key={msg.key}
          className="min-w-0 flex-1 text-[11px] font-medium leading-snug sm:text-sm animate-[fadeIn_.4s_ease-out]"
        >
          <span className="sm:hidden">
            <span className="block font-bold text-emerald-300">{msg.badge}</span>
            {msg.short}
          </span>
          <span className="hidden sm:inline">{msg.text}</span>
        </p>
        <Link
          href={msg.href}
          data-cta="campaign-bar"
          data-campaign={msg.key}
          className="shrink-0 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-3 py-1.5 text-[11px] font-bold shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 sm:px-4 sm:text-sm"
        >
          {msg.cta}
        </Link>
        <button
          type="button"
          onClick={dismiss}
          aria-label={isRtl ? "إغلاق الإعلان" : "Close announcement"}
          className="shrink-0 rounded-full p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
