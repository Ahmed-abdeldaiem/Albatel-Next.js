/**
 * Date-driven campaigns & events.
 *
 * Everything here switches on/off by date in the visitor's browser, so the
 * site never needs a redeploy just because a season started or ended.
 * To announce new details (e.g. book-fair dates or booth), edit this file only.
 */

const DAY_MS = 24 * 60 * 60 * 1000;
const RIYADH_OFFSET_MS = 3 * 60 * 60 * 1000; // UTC+3, no DST

/** Midnight (Riyadh time) of a calendar date, as a timestamp. */
function riyadhDate(year, monthIndex, day) {
  return Date.UTC(year, monthIndex, day) - RIYADH_OFFSET_MS;
}

/* =========================================================
   Audit season ("قوائم <year>") — runs all year round.
   Statements of year Y go through three statutory milestones:
     1) 31 Dec Y          stock count & year-end close
     2) 31 Dec Y + 120d   zakat / income-tax return (ZATCA) → 30 Apr (29 in leap years)
     3) 30 Jun Y+1        filing on Qawaem (Companies Law, 6 months after year-end)
   From 1 Jul the campaign rolls over to the next year ("plan early").
   Phases: "early" (Jul–Sep), "close" (Oct–31 Dec), "zakat", "qawaem".
   ========================================================= */
export const AUDIT_SEASON_PATH = "/audit-season";

const AR_MONTHS = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
const EN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function formatDay(ts) {
  const d = new Date(ts + RIYADH_OFFSET_MS);
  const day = d.getUTCDate();
  const m = d.getUTCMonth();
  return {
    ar: `${day} ${AR_MONTHS[m]} ${d.getUTCFullYear()}`,
    en: `${day} ${EN_MONTHS[m]} ${d.getUTCFullYear()}`,
    shortAr: `${day} ${AR_MONTHS[m]}`,
    shortEn: `${day} ${EN_MONTHS[m]}`,
  };
}

export const SEASON_MILESTONES = {
  close: {
    title: { ar: "الجرد وإقفال السنة المالية", en: "Stock count & year-end close" },
    body: {
      ar: "المراجع الذي يحضر الجرد يجب أن يُعيَّن قبله.",
      en: "The auditor who attends the count must be appointed before it.",
    },
  },
  zakat: {
    title: { ar: "آخر موعد للإقرار الزكوي", en: "Zakat return deadline" },
    body: {
      ar: "خلال 120 يومًا من نهاية السنة المالية، عبر بوابة هيئة الزكاة والضريبة والجمارك.",
      en: "Within 120 days of year-end, via the ZATCA portal.",
    },
  },
  qawaem: {
    title: { ar: "آخر موعد للإيداع في منصة قوائم", en: "Qawaem filing deadline" },
    body: {
      ar: "خلال 6 أشهر من نهاية السنة المالية وفق نظام الشركات.",
      en: "Within 6 months of year-end under the Companies Law.",
    },
  },
};

export function getAuditSeason(now = Date.now()) {
  const local = new Date(now + RIYADH_OFFSET_MS);
  const month = local.getUTCMonth(); // 0 = Jan
  const fiscalYear = month >= 6 ? local.getUTCFullYear() : local.getUTCFullYear() - 1;

  const closeTs = riyadhDate(fiscalYear, 11, 31);
  const dates = {
    close: closeTs,
    zakat: closeTs + 120 * DAY_MS,
    qawaem: riyadhDate(fiscalYear + 1, 5, 30),
  };

  const milestones = Object.keys(dates).map((key) => {
    const date = dates[key];
    return {
      key,
      date,
      label: formatDay(date),
      days: Math.max(0, Math.ceil((date - now) / DAY_MS)),
      passed: now >= date + DAY_MS, // the deadline day itself still counts
      ...SEASON_MILESTONES[key],
    };
  });

  const next = milestones.find((m) => !m.passed) || milestones[milestones.length - 1];
  const phase = next.key === "close" && month >= 6 && month <= 8 ? "early" : next.key;

  return {
    fiscalYear,
    phase,
    next,
    milestones,
    daysToStockCount: milestones[0].days,
    beforeClose: next.key === "close",
    active: true,
  };
}

/** "باقي 52 يومًا" / "اليوم" / "غدًا" */
function daysLeft(days, isRtl) {
  if (days === 0) return isRtl ? "اليوم" : "today";
  if (days === 1) return isRtl ? "غدًا" : "tomorrow";
  return isRtl ? `باقي ${days} يومًا` : `${days} days left`;
}

/**
 * Campaign copy for the current phase — shared by the floating bar, the
 * home slide and the home events card so the message is consistent.
 */
export function getSeasonMessage(season, isRtl) {
  const { fiscalYear: y, phase, next } = season;
  const when = daysLeft(next.days, isRtl);
  const date = isRtl ? next.label.shortAr : next.label.shortEn;

  const byPhase = {
    early: {
      text: isRtl
        ? `خطّط لقوائم ${y} من الآن — المراجعة الناجحة تبدأ قبل إقفال السنة لا بعده`
        : `Plan FY${y} now — a smooth audit starts before year-end, not after`,
      short: isRtl ? `خطّط لقوائم ${y} من الآن` : `Plan FY${y} now`,
      headline: isRtl ? `قوائم ${y} تبدأ الآن… لا في يناير` : `FY${y} starts now… not in January`,
    },
    close: {
      text: isRtl
        ? `${when} على جرد ${date} — عيّن مراجعك قبله`
        : `${when} to the ${date} stock count — appoint your auditor first`,
      short: isRtl ? `${when} على جرد ${date}` : `${when} to the ${date} count`,
      headline: isRtl ? `قوائم ${y} تبدأ اليوم… لا في أبريل` : `FY${y} starts today… not in April`,
    },
    zakat: {
      text: isRtl
        ? `${when} على آخر موعد للإقرار الزكوي (${date}) — ابدأ مراجعة قوائمك الآن`
        : `${when} to the zakat return deadline (${date}) — start your audit now`,
      short: isRtl ? `${when} على الإقرار الزكوي (${date})` : `${when} to zakat deadline`,
      headline: isRtl ? `قوائم ${y}: الإقرار الزكوي يقترب` : `FY${y}: the zakat deadline is near`,
    },
    qawaem: {
      text: isRtl
        ? `${when} على آخر موعد للإيداع في منصة قوائم (${date}) — تجنّب غرامات التأخير`
        : `${when} to the Qawaem filing deadline (${date}) — avoid late penalties`,
      short: isRtl ? `${when} على الإيداع في قوائم (${date})` : `${when} to Qawaem deadline`,
      headline: isRtl ? `قوائم ${y}: موعد الإيداع يقترب` : `FY${y}: the filing deadline is near`,
    },
  };

  return {
    badge: isRtl ? `قوائم ${y}` : `FY${y} audit`,
    cta: isRtl ? "عيّن مراجعك" : "Appoint now",
    ...byPhase[phase],
  };
}

/* =========================================================
   Events shown on the home page, publications and book pages.
   `visibleFrom` / `visibleUntil` are ISO dates (Riyadh time).
   Leave `dates`, `booth` or `signing` as null until they are announced.
   ========================================================= */
export const UPCOMING_EVENTS = [
  {
    key: "riyadh-book-fair-2026",
    type: "book-fair",
    visibleFrom: "2026-11-01",
    visibleUntil: "2027-01-01",
    title: {
      ar: "معرض الرياض الدولي للكتاب 2026",
      en: "Riyadh International Book Fair 2026",
    },
    when: { ar: "ديسمبر 2026", en: "December 2026" },
    dates: null, // e.g. { ar: "11 – 20 ديسمبر 2026", en: "11 – 20 December 2026" }
    booth: null, // e.g. { ar: "دار فاروس — جناح 9M", en: "Faros House — Booth 9M" }
    signing: null, // e.g. { ar: "الجمعة 18 ديسمبر، 7 مساءً", en: "Friday 18 Dec, 7 PM" }
    location: {
      ar: "الرياض، المملكة العربية السعودية",
      en: "Riyadh, Saudi Arabia",
    },
    pending: {
      ar: "تفاصيل الجناح ومواعيد حفل التوقيع تُعلن قريبًا",
      en: "Booth details and signing times will be announced soon",
    },
    description: {
      ar: "نشارك بإصداراتنا الثلاثة في معرض الرياض الدولي للكتاب، مع لقاء المؤلفين وحفل توقيع.",
      en: "We take part with all three of our publications, with an author meet-up and book signing.",
    },
    books: ["football-economics", "internal-audit", "sports-corruption-fraud"],
    href: "/publications",
    image: "/Books/riyadh-2025-signing.jpg",
    imageCaption: {
      ar: "من حفل توقيع إصداراتنا في معرض الرياض 2025",
      en: "From our book signing at the Riyadh fair 2025",
    },
  },
];

export function isEventVisible(event, now = Date.now()) {
  const [fy, fm, fd] = event.visibleFrom.split("-").map(Number);
  const [uy, um, ud] = event.visibleUntil.split("-").map(Number);
  return now >= riyadhDate(fy, fm - 1, fd) && now < riyadhDate(uy, um - 1, ud);
}

export function getVisibleEvents(now = Date.now()) {
  return UPCOMING_EVENTS.filter((e) => isEventVisible(e, now));
}

export function getEventsForBook(slug, now = Date.now()) {
  return getVisibleEvents(now).filter((e) => e.books?.includes(slug));
}
