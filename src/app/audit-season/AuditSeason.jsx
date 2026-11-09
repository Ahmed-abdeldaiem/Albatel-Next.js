"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";
import { LanguageContext } from "../contexts/langContext";
import useNow from "../hooks/useNow";
import { getAuditSeason } from "../data/campaigns";
import YouTubeFacade from "../components/YouTubeFacade/YouTubeFacade";
import { AUDIT_FAQ, AUDIT_STAGES, BEFORE_AFTER, CHECKLIST } from "./content";

const WA_NUMBER = "966550554262";
const PHONE_DISPLAY = "0550554262";
const EMAIL = "albatelcpa@albatelcpa.com";
const REEL_ID = "7-K47HVJs9g";
const PHONE_REGEX = /^(?:\+966|0)?5\d{8}$/;

/* =========================================================
   Small presentational helpers
   ========================================================= */
function StageIcon({ kind }) {
  const common = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (kind) {
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "box":
      return (
        <svg {...common}>
          <path d="M21 8l-9-5-9 5 9 5 9-5z" />
          <path d="M3 8v8l9 5 9-5V8M12 13v8" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3M8 11h6M11 8v6" />
        </svg>
      );
    case "report":
      return (
        <svg {...common}>
          <path d="M14 3H6a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V8l-5-5z" />
          <path d="M14 3v5h5M9 13h6M9 17h4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M7 18a5 5 0 01-.6-9.96A6 6 0 0118 9a4 4 0 01-1 7.87" />
          <path d="M12 12v9M9 15l3-3 3 3" />
        </svg>
      );
  }
}

function Check({ className = "text-emerald-400" }) {
  return (
    <svg className={`mt-0.5 h-5 w-5 shrink-0 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

const PHASE_SPAN_DAYS = { early: 184, close: 92, zakat: 120, qawaem: 61 };

function Countdown({ days, total, label, sub }) {
  const pct = Math.min(1, days / total);
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-32 w-32 shrink-0">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120" aria-hidden>
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke="#22c55e"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - pct)}
            style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-extrabold leading-none text-white">{days}</span>
          <span className="mt-1 text-xs font-semibold text-emerald-300">{label}</span>
        </div>
      </div>
      <p className="max-w-[12rem] text-sm leading-relaxed text-white/85">{sub}</p>
    </div>
  );
}

/* =========================================================
   Page
   ========================================================= */
export default function AuditSeason({ serverNow, branches = [] }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";
  // First render uses the server's timestamp (no hydration mismatch), then the live clock.
  const now = useNow() ?? serverNow;
  const season = getAuditSeason(now);
  const { fiscalYear: year, phase, next, milestones } = season;
  const zakat = milestones.find((m) => m.key === "zakat");
  const qawaem = milestones.find((m) => m.key === "qawaem");
  const d = (m) => (isRtl ? m.label.shortAr : m.label.shortEn);

  const [openFaq, setOpenFaq] = useState(0);
  const [status, setStatus] = useState(null); // "ok" | "error" | null

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const waText = isRtl
    ? `السلام عليكم، أرغب في تعيين مراجع حسابات لقوائم ${year}.`
    : `Hello, I'd like to appoint an auditor for the FY${year} financial statements.`;
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waText)}`;

  const t = {
    eyebrow: isRtl ? "حملة مراجعة القوائم المالية" : "Financial statements audit season",
    h1: isRtl ? `مراجعة القوائم المالية ${year}` : `FY${year} Financial Statements Audit`,
    tagline: {
      early: isRtl ? "تبدأ الآن… لا في يناير" : "Starts now… not in January",
      close: isRtl ? "تبدأ اليوم… لا في أبريل" : "Starts today… not in April",
      zakat: isRtl ? "الإقرار الزكوي يقترب… ابدأ اليوم" : "The zakat deadline is near… start today",
      qawaem: isRtl ? "موعد الإيداع يقترب… لا تنتظر الغرامة" : "The filing deadline is near… don't wait for the penalty",
    }[phase],
    sub: isRtl
      ? `يعتقد كثيرون أن موسم المراجعة من يناير إلى يونيو، لكن قوائم ${year} تبدأ قبل إقفال السنة: الجرد في 31 ديسمبر، والإقرار الزكوي حتى ${d(zakat)}، والإيداع في منصة قوائم حتى ${d(qawaem)}. من يعيّن مراجعه مبكرًا يمرّ بالمواعيد الثلاثة دون استعجال أو غرامات.`
      : `Many think the audit season runs January to June — but FY${year} starts before year-end: the stock count on 31 December, the zakat return by ${d(zakat)}, and Qawaem filing by ${d(qawaem)}. Appoint your auditor early and meet all three without rush or penalties.`,
    ctaPrimary: isRtl ? "عيّن مراجعك الآن" : "Appoint your auditor",
    ctaWa: isRtl ? "تواصل عبر واتساب" : "Chat on WhatsApp",
    daysLabel: next.days === 0 ? (isRtl ? "اليوم" : "today") : isRtl ? "يومًا" : "days",
    daysSub: `${isRtl ? "على" : "to"} ${next.title[lang]} (${d(next)})`,
    timelineEyebrow: isRtl ? `مواعيد قوائم ${year}` : `FY${year} deadlines`,
    timelineTitle: isRtl ? "الموسم لا يبدأ في يناير" : "The season doesn't start in January",
    timelineSub: isRtl
      ? "ثلاثة مواعيد نظامية لقوائمك المالية — وكل موعد يعتمد على ما قبله. التأخير في الأول يضغط على الثاني والثالث."
      : "Three statutory deadlines for your statements — each depends on the one before. A late start squeezes the rest.",
    now: isRtl ? "الآن" : "Now",
    nowTitle: isRtl ? "تعيين المراجع والتخطيط" : "Appoint & plan",
    nowBody: isRtl ? "أفضل وقت للتعاقد: قبل الإقفال وقبل زحام يناير." : "The best time to engage: before year-end and the January rush.",
    passed: isRtl ? "انتهى" : "Passed",
    upNext: isRtl ? "الموعد القادم" : "Up next",
    reasonsTitle: isRtl ? "لماذا تتعاقد الآن وليس في يناير؟" : "Why engage now, not in January?",
    reasons: isRtl
      ? [
          "أولوية في جدول المراجعين قبل زحام الموسم",
          "حضور جرد 31 ديسمبر بدل الإجراءات البديلة",
          "ملاحظات مبكرة تُصلَح قبل الإقفال لا في التقرير",
          "إقرار زكوي مبني على قوائم مراجَعة دون استعجال",
          "إيداع في منصة قوائم قبل الموعد ودون غرامات",
        ]
      : [
          "Priority in the auditors' schedule before the rush",
          "Attend the 31 December count instead of alternative procedures",
          "Early findings fixed before year-end, not in the report",
          "A zakat return built on audited statements, without rush",
          "Qawaem filing before the deadline, without penalties",
        ],
    bundleTitle: isRtl ? `خدمات قوائم ${year} مع شريك واحد` : `FY${year} services with one partner`,
    bundle: isRtl
      ? ["مراجعة القوائم المالية", "حضور الجرد والمصادقات", "إعداد الإقرار الزكوي والضريبي", "الإيداع في منصة قوائم"]
      : ["Financial statements audit", "Stock count & confirmations", "Zakat & tax return preparation", "Filing on Qawaem"],
    chips: isRtl
      ? ["مراجعة مستقلة", "التزام بالمعايير الدولية", "جودة في المراجعة", "إيداع في الموعد"]
      : ["Independent audit", "International standards", "Audit quality", "On-time filing"],
    whyTitle: isRtl ? "لماذا يجب أن يحضر مراجعك الجرد؟" : "Why your auditor must attend the count",
    whySub: isRtl
      ? "جرد 31 ديسمبر هو أقوى دليل على رصيد المخزون في قوائمك."
      : "The 31 December count is the strongest evidence of the stock balance in your statements.",
    stagesEyebrow: isRtl ? "رحلة المراجعة" : "The audit journey",
    stagesTitle: isRtl ? "ماذا يحدث فعلًا عند مراجعة قوائمك؟" : "What actually happens in your audit?",
    stagesSub: isRtl
      ? "ست مراحل لا يراها صاحب المنشأة… وشريك واحد من البداية حتى الإيداع."
      : "Six stages most owners never see — and one partner from start to filing.",
    stage: isRtl ? "المرحلة" : "Stage",
    whyMatters: isRtl ? "لماذا يهمك؟" : "Why it matters",
    videoTitle: isRtl ? "ليش تقرير المراجع يتأخر كل سنة؟" : "Why is the audit report late every year?",
    videoSub: isRtl
      ? "دقيقة واحدة تشرح لماذا يبدأ موسم القوائم قبل إقفال السنة، لا بعدها."
      : "One minute on why the audit season starts before year-end, not after.",
    trustTitle: isRtl ? "لماذا الباتل؟" : "Why Al-Batel?",
    stats: [
      { v: "2006", l: isRtl ? "خبرة منذ" : "Since" },
      { v: "9", l: isRtl ? "فروع في المملكة" : "Branches in KSA" },
      { v: "+80", l: isRtl ? "من الكوادر المهنية" : "Professionals" },
      { v: "SOCPA", l: isRtl ? "ترخيص الهيئة السعودية للمراجعين" : "Licensed by SOCPA" },
    ],
    bookEyebrow: isRtl ? "من مؤلفاتنا في المراجعة" : "From our audit publications",
    bookTitle: isRtl ? "مراجعة الرقابة الداخلية والامتثال" : "Internal Control Audit and Compliance",
    bookBody: isRtl
      ? "تعريب فريق الباتل لمرجع Lynford Graham العالمي في التوثيق والاختبار وفق إطار COSO — خبرتنا في الرقابة الداخلية موثّقة في كتاب."
      : "Al-Batel's Arabic translation of Lynford Graham's reference on documentation and testing under COSO — our internal control expertise, documented in a book.",
    bookCta: isRtl ? "تعرّف على الكتاب" : "About the book",
    checklistTitle: isRtl ? "جهّز هذه المستندات قبل أن نبدأ" : "Get these ready before we start",
    checklistSub: isRtl
      ? "دفاتر منظمة ومستندات جاهزة تختصر المراجعة وتقلل الأسئلة."
      : "Organised books and ready documents shorten the audit and cut the questions.",
    faqTitle: isRtl ? "أسئلة شائعة" : "Frequently asked questions",
    formTitle: isRtl ? `ابدأ قوائم ${year} اليوم` : `Start FY${year} today`,
    formSub: isRtl
      ? "اترك بياناتك وسيتواصل معك أحد مراجعينا خلال يوم عمل."
      : "Leave your details and one of our auditors will contact you within a business day.",
    f: {
      name: isRtl ? "الاسم" : "Name",
      company: isRtl ? "اسم المنشأة" : "Company name",
      phone: isRtl ? "رقم الجوال" : "Mobile number",
      email: isRtl ? "البريد الإلكتروني" : "Email",
      branch: isRtl ? "أقرب فرع" : "Nearest branch",
      activity: isRtl ? "نشاط المنشأة (اختياري)" : "Business activity (optional)",
      submit: isRtl ? "أرسل طلب تعيين المراجع" : "Request an auditor",
      sending: isRtl ? "جارٍ الإرسال…" : "Sending…",
      ok: isRtl
        ? "تم استلام طلبك بنجاح، وسنتواصل معك قريبًا."
        : "Request received — we'll be in touch shortly.",
      err: isRtl
        ? "تعذّر الإرسال، حاول مجددًا أو تواصل معنا عبر واتساب."
        : "Couldn't send — please try again or reach us on WhatsApp.",
      required: isRtl ? "مطلوب" : "Required",
      badPhone: isRtl ? "رقم جوال سعودي غير صحيح" : "Invalid Saudi mobile number",
      badEmail: isRtl ? "بريد غير صحيح" : "Invalid email",
      orCall: isRtl ? "أو تواصل مباشرة" : "Or reach us directly",
    },
  };

  const formik = useFormik({
    initialValues: { name: "", company: "", phone: "", email: "", branch: "", activity: "", hp_field: "" },
    validationSchema: Yup.object({
      name: Yup.string().trim().min(3, t.f.required).required(t.f.required),
      company: Yup.string().trim().min(2, t.f.required).required(t.f.required),
      phone: Yup.string().matches(PHONE_REGEX, t.f.badPhone).required(t.f.required),
      email: Yup.string().email(t.f.badEmail).required(t.f.required),
    }),
    onSubmit: async (v, { resetForm }) => {
      setStatus(null);
      const branch = branches.find((b) => String(b.id) === String(v.branch));
      const message = [
        `طلب تعيين مراجع — حملة قوائم ${year}`,
        `المنشأة: ${v.company}`,
        v.activity ? `النشاط: ${v.activity}` : null,
      ]
        .filter(Boolean)
        .join("\n");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: v.name,
            phone: v.phone,
            email: v.email,
            message,
            consultation_type: `مراجعة القوائم المالية — حملة قوائم ${year} / FY${year} audit campaign`,
            branch: branch ? `${branch.name?.ar || ""} / ${branch.name?.en || ""}` : "",
            honeypot: v.hp_field,
          }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.ok) throw new Error(data?.error || String(res.status));
        setStatus("ok");
        resetForm();
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: "audit_season_lead", fiscal_year: year });
        }
      } catch (e) {
        console.error("audit-season form:", e);
        setStatus("error");
      }
    },
  });

  const field = (name) => ({
    id: `as-${name}`,
    name,
    value: formik.values[name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    className:
      "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20",
  });
  const err = (name) =>
    formik.touched[name] && formik.errors[name] ? (
      <p className="mt-1 text-xs text-red-600">{formik.errors[name]}</p>
    ) : null;

  return (
    <div dir={dir} className="bg-white">
      {/* ============= HERO ============= */}
      <section className="relative overflow-hidden bg-blue-950">
        <Image
          src="/audit-season/auditor-office-riyadh.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_center] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-blue-950 via-blue-950/90 to-blue-950/40 rtl:bg-gradient-to-r" />
        <Image
          src="/audit-season/brand-wave.jpg"
          alt=""
          width={1920}
          height={1071}
          sizes="100vw"
          className="pointer-events-none absolute -bottom-10 inset-x-0 h-40 w-full object-cover opacity-60 mix-blend-screen"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-40">
          <div>
            <nav aria-label={isRtl ? "مسار التنقل" : "Breadcrumb"} className="mb-5 text-xs text-white/60">
              <Link href="/" className="hover:text-white">{isRtl ? "الرئيسية" : "Home"}</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-white">{isRtl ? "خدماتنا" : "Services"}</Link>
              <span className="mx-2">/</span>
              <span className="text-white/90">{t.eyebrow}</span>
            </nav>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-bold text-white sm:text-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              {t.eyebrow}
            </span>
            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t.h1}
            </h1>
            <p className="mt-3 text-2xl font-bold text-emerald-400 sm:text-3xl">{t.tagline}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{t.sub}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#audit-form"
                data-cta="audit-season-hero"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 hover:shadow-green-500/60"
              >
                {t.ctaPrimary}
                <span aria-hidden>{isRtl ? "←" : "→"}</span>
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="audit-season-whatsapp"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.4 2.5 1 3 .8 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2z" />
                </svg>
                {t.ctaWa}
              </a>
            </div>

            <ul className="mt-8 grid max-w-xl grid-cols-2 gap-2 text-sm text-white">
              {t.chips.map((c) => (
                <li key={c} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  <Check />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <Countdown
                days={next.days}
                total={PHASE_SPAN_DAYS[phase]}
                label={t.daysLabel}
                sub={t.daysSub}
              />
              <ul className="mt-6 space-y-3 text-sm text-white">
                {milestones.map((m) => (
                  <li
                    key={m.key}
                    className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 ${
                      m.key === next.key ? "bg-emerald-500/20 ring-1 ring-emerald-400/50" : "bg-white/5"
                    } ${m.passed ? "opacity-50" : ""}`}
                  >
                    <span className="flex items-center gap-2">
                      <Check className={m.passed ? "text-white/60" : "text-emerald-400"} />
                      {m.title[lang]}
                    </span>
                    <span className="shrink-0 font-bold">{d(m)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============= DEADLINES TIMELINE + WHY NOW ============= */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
            <span className="text-sm font-bold text-emerald-700">{t.timelineEyebrow}</span>
            <h2 className="mt-2 text-2xl font-bold text-blue-950 sm:text-4xl">{t.timelineTitle}</h2>
            <p className="mt-3 text-slate-600 sm:text-lg">{t.timelineSub}</p>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-4">
            <li className="relative rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 p-6 text-white shadow-xl shadow-emerald-500/20" data-aos="fade-up">
              <span className="text-sm font-bold text-white/80">{t.now}</span>
              <h3 className="mt-2 text-lg font-bold">{t.nowTitle}</h3>
              <p className="mt-2 text-sm text-white/90">{t.nowBody}</p>
            </li>
            {milestones.map((m, i) => {
              const isNext = m.key === next.key;
              return (
                <li
                  key={m.key}
                  data-aos="fade-up"
                  data-aos-delay={(i + 1) * 80}
                  className={`relative rounded-3xl bg-white p-6 shadow-lg shadow-blue-950/5 ring-1 ${
                    isNext ? "ring-2 ring-emerald-500" : "ring-slate-100"
                  } ${m.passed ? "opacity-60" : ""}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-2xl font-extrabold text-blue-900">{d(m)}</span>
                    {(isNext || m.passed) && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                          m.passed ? "bg-slate-200 text-slate-600" : "bg-emerald-100 text-emerald-800"
                        }`}
                      >
                        {m.passed ? t.passed : t.upNext}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 font-bold text-blue-950">{m.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{m.body[lang]}</p>
                </li>
              );
            })}
          </ol>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-blue-950/5 ring-1 ring-slate-100 sm:p-8" data-aos="fade-up">
              <h3 className="text-xl font-bold text-blue-950 sm:text-2xl">{t.reasonsTitle}</h3>
              <ul className="mt-5 space-y-3">
                {t.reasons.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-slate-700">
                    <Check className="text-emerald-600" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-blue-950 to-blue-900 p-6 text-white shadow-xl sm:p-8" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold sm:text-2xl">{t.bundleTitle}</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {t.bundle.map((b) => (
                  <li key={b} className="flex items-start gap-2 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#audit-form"
                data-cta="audit-season-bundle"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 font-bold shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5"
              >
                {t.ctaPrimary}
                <span aria-hidden>{isRtl ? "←" : "→"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============= BEFORE vs AFTER ============= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold text-blue-950 sm:text-4xl">{t.whyTitle}</h2>
            <p className="mt-3 text-slate-600 sm:text-lg">{t.whySub}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="flex items-center gap-2 font-bold text-emerald-800">
                  <Check className="text-emerald-600" />
                  {BEFORE_AFTER.before.title[lang]}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {BEFORE_AFTER.before.points[lang].map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="flex items-center gap-2 font-bold text-amber-800">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-xs text-white">!</span>
                  {BEFORE_AFTER.after.title[lang]}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {BEFORE_AFTER.after.points[lang].map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-blue-950/20 sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/audit-season/inventory-count-warehouse.jpg"
              alt={isRtl ? "مراجع يحضر جرد المخزون في المستودع" : "Auditor attending a warehouse stock count"}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 inset-x-4 rounded-2xl bg-blue-950/85 p-4 text-sm font-semibold text-white backdrop-blur">
              {isRtl ? "جرد 31 ديسمبر هو أقوى دليل على رصيد المخزون في قوائمك." : "The 31 December count is your strongest stock evidence."}
            </div>
          </div>
        </div>
      </section>

      {/* ============= SIX STAGES ============= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 to-blue-900 py-16 text-white sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
            <span className="text-sm font-bold text-emerald-400">{t.stagesEyebrow}</span>
            <h2 className="mt-2 text-2xl font-bold sm:text-4xl">{t.stagesTitle}</h2>
            <p className="mt-3 text-white/75 sm:text-lg">{t.stagesSub}</p>
          </div>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIT_STAGES.map((s, i) => (
              <li
                key={s.icon}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className={`flex flex-col rounded-3xl border p-6 backdrop-blur ${
                  s.highlight ? "border-emerald-400/60 bg-emerald-500/15" : "border-white/10 bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs text-white/60">{t.stage}</span>
                    <span className="block text-4xl font-extrabold text-emerald-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                    <StageIcon kind={s.icon} />
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{s.title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{s.body[lang]}</p>
                <div className="mt-auto pt-5">
                  <div className="rounded-2xl bg-emerald-600/20 p-3 text-sm">
                    <span className="block text-xs font-bold text-emerald-300">{t.whyMatters}</span>
                    {s.why[lang]}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============= VIDEO + TRUST ============= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,20rem)_1fr] lg:items-center lg:px-10">
          <div data-aos="fade-up" className="mx-auto w-full max-w-xs">
            <YouTubeFacade id={REEL_ID} title={t.videoTitle} vertical playLabel={isRtl ? "تشغيل" : "Play"} />
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold text-blue-950 sm:text-4xl">{t.videoTitle}</h2>
            <p className="mt-3 text-slate-600 sm:text-lg">{t.videoSub}</p>

            <h3 className="mt-10 text-xl font-bold text-blue-950">{t.trustTitle}</h3>
            <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {t.stats.map((s) => (
                <div key={s.l} className="rounded-2xl bg-slate-50 p-4 text-center ring-1 ring-slate-100">
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="text-2xl font-extrabold text-blue-900">{s.v}</dd>
                  <dd className="mt-1 text-xs text-slate-600">{s.l}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/publications/internal-audit"
              className="group mt-6 flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-emerald-400 hover:shadow-lg"
            >
              <Image
                src="/Books/internal-audit-cover.jpg"
                alt={t.bookTitle}
                width={72}
                height={100}
                className="h-24 w-auto rounded-md shadow-md"
              />
              <div className="min-w-0">
                <span className="text-xs font-bold text-emerald-700">{t.bookEyebrow}</span>
                <p className="font-bold text-blue-950">{t.bookTitle}</p>
                <p className="mt-1 text-sm text-slate-600">{t.bookBody}</p>
                <span className="mt-2 inline-block text-sm font-bold text-blue-700 group-hover:text-emerald-700">
                  {t.bookCta} {isRtl ? "←" : "→"}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============= CHECKLIST ============= */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-10">
          <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl shadow-xl lg:order-1">
            <Image
              src="/audit-season/financial-statements-desk.jpg"
              alt={isRtl ? "قوائم مالية جاهزة للمراجعة على مكتب" : "Financial statements ready for audit on a desk"}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-blue-950 sm:text-4xl">{t.checklistTitle}</h2>
            <p className="mt-3 text-slate-600 sm:text-lg">{t.checklistSub}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {CHECKLIST[lang].map((item) => (
                <li key={item} className="flex items-start gap-2 rounded-xl bg-white p-3 text-sm text-slate-700 shadow-sm ring-1 ring-slate-100">
                  <Check className="text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============= FAQ ============= */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-blue-950 sm:text-4xl" data-aos="fade-up">
            {t.faqTitle}
          </h2>
          <div className="mt-10 space-y-3">
            {AUDIT_FAQ.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q.ar} className="overflow-hidden rounded-2xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 p-5 text-start font-bold text-blue-950 transition hover:bg-slate-50"
                  >
                    {f.q[lang]}
                    <span className={`text-xl text-emerald-600 transition-transform ${open ? "rotate-45" : ""}`} aria-hidden>+</span>
                  </button>
                  <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <p className="overflow-hidden px-5 text-sm leading-relaxed text-slate-700">
                      <span className="block pb-5">{f.a[lang]}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============= FORM ============= */}
      <section id="audit-form" className="scroll-mt-24 bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:px-10">
          <div className="text-white">
            <h2 className="text-3xl font-extrabold sm:text-4xl">{t.formTitle}</h2>
            <p className="mt-3 text-white/80 sm:text-lg">{t.formSub}</p>
            <p className="mt-8 text-sm font-bold text-emerald-300">{t.f.orCall}</p>
            <ul className="mt-3 space-y-2 text-white/90">
              <li>
                <a href={`tel:+${WA_NUMBER}`} className="hover:text-white" dir="ltr">{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
              </li>
              <li>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-300 hover:text-emerald-200">
                  {t.ctaWa} {isRtl ? "←" : "→"}
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={formik.handleSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="as-name" className="mb-1 block text-sm font-semibold text-slate-700">{t.f.name}</label>
                <input {...field("name")} autoComplete="name" />
                {err("name")}
              </div>
              <div>
                <label htmlFor="as-company" className="mb-1 block text-sm font-semibold text-slate-700">{t.f.company}</label>
                <input {...field("company")} autoComplete="organization" />
                {err("company")}
              </div>
              <div>
                <label htmlFor="as-phone" className="mb-1 block text-sm font-semibold text-slate-700">{t.f.phone}</label>
                <input {...field("phone")} type="tel" inputMode="tel" dir="ltr" placeholder="05XXXXXXXX" autoComplete="tel" />
                {err("phone")}
              </div>
              <div>
                <label htmlFor="as-email" className="mb-1 block text-sm font-semibold text-slate-700">{t.f.email}</label>
                <input {...field("email")} type="email" dir="ltr" autoComplete="email" />
                {err("email")}
              </div>
              {branches.length > 0 && (
                <div>
                  <label htmlFor="as-branch" className="mb-1 block text-sm font-semibold text-slate-700">{t.f.branch}</label>
                  <select {...field("branch")}>
                    <option value="">—</option>
                    {branches.map((b) => (
                      <option key={b.id} value={b.id}>
                        {(b.name?.[lang] || b.name?.ar || "").trim()}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className={branches.length > 0 ? "" : "sm:col-span-2"}>
                <label htmlFor="as-activity" className="mb-1 block text-sm font-semibold text-slate-700">{t.f.activity}</label>
                <input {...field("activity")} />
              </div>
              {/* Honeypot — hidden from humans */}
              <input
                type="text"
                name="hp_field"
                value={formik.values.hp_field}
                onChange={formik.handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting}
              data-cta="audit-season-form"
              className="mt-6 w-full rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/30 transition hover:shadow-green-500/60 disabled:opacity-60"
            >
              {formik.isSubmitting ? t.f.sending : t.f.submit}
            </button>

            {status === "ok" && (
              <p role="status" className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-800">{t.f.ok}</p>
            )}
            {status === "error" && (
              <p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">{t.f.err}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
