"use client";

import React, { useContext, useEffect, useMemo, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "../contexts/langContext";

// Static consultation types (no API needed — these are fixed service names)
const CONSULTATION_TYPES = [
  { id: "financial-consultation", ar: "استشارة مالية", en: "Financial Consultation" },
  { id: "financial-statements-review", ar: "مراجعة قوائم مالية", en: "Financial Statements Review" },
  { id: "transfer-pricing", ar: "ملفات توثيق السعر المحايد", en: "Transfer Pricing Documentation" },
  { id: "internal-audit", ar: "تدقيق داخلي", en: "Internal Audit" },
  { id: "cost-management", ar: "إدارة تكاليف", en: "Cost Management" },
  { id: "financial-planning", ar: "تخطيط مالي وتحليل", en: "Financial Planning & Analysis" },
  { id: "tax-services", ar: "خدمات ضريبية", en: "Tax Services" },
  { id: "accounting-services", ar: "خدمات محاسبة", en: "Accounting Services" },
  { id: "training-development", ar: "تدريب وتطوير قدرات", en: "Training & Capacity Development" },
  { id: "special-cases-reports", ar: "مراجعة قضايا وتقارير خاصة", en: "Special Cases & Reports Review" },
  { id: "estate-liquidation", ar: "تصفية تركات", en: "Estate Liquidation" },
  { id: "actuarial-services", ar: "خدمات اكتوارية", en: "Actuarial Services" },
  { id: "job-application", ar: "طلب توظيف", en: "Job Application" },
  { id: "cooperative-training", ar: "طلب تدريب تعاوني", en: "Cooperative Training Request" },
  { id: "other", ar: "استشارة أخرى", en: "Other Inquiry" },
];

export default function ContactUs({
  branches = [],
  variant = "page",
}) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  const [contactError, setContactError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [selectedBranchId, setSelectedBranchId] = useState(
    branches?.[0]?.id ?? null
  );

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  // Keep selected branch in sync if branches list updates (e.g. after ISR revalidation)
  useEffect(() => {
    if (branches.length === 0) return;
    const exists = branches.some((b) => b.id === selectedBranchId);
    if (!exists) setSelectedBranchId(branches[0]?.id ?? null);
  }, [branches, selectedBranchId]);

  const selectedBranch = useMemo(
    () => branches.find((b) => b.id === selectedBranchId) || branches[0],
    [branches, selectedBranchId]
  );

  // Static list — no memoization needed, stable reference
  const consultationTypes = CONSULTATION_TYPES;

  const isSection = variant === "section";

  const t = {
    hero: {
      badge: isRtl ? "دعنا نبدأ محادثة" : "Let’s start a conversation",
      title: isRtl ? "تواصل معنا" : "Contact Us",
      subtitle: isRtl
        ? "فريق الخبراء في الباتل جاهز للإجابة على استفساراتك وتقديم الاستشارة المناسبة لاحتياجات عملك."
        : "Al-Batel’s expert team is ready to answer your questions and provide tailored advisory for your business needs.",
    },
    form: {
      heading: isRtl ? "أرسل لنا رسالة" : "Send us a message",
      sub: isRtl
        ? "نرد عادةً خلال 24 ساعة عمل"
        : "We usually reply within 24 business hours",
      name: isRtl ? "الاسم الكامل" : "Full Name",
      namePH: isRtl ? "أدخل اسمك" : "Enter your name",
      phone: isRtl ? "رقم الجوال" : "Mobile Number",
      phonePH: "05xxxxxxxx",
      email: isRtl ? "البريد الإلكتروني" : "Email",
      emailPH: "name@example.com",
      consult: isRtl ? "نوع الاستشارة" : "Consultation Type",
      message: isRtl ? "الرسالة" : "Your Message",
      messagePH: isRtl
        ? "اكتب استفسارك هنا..."
        : "Write your inquiry here...",
      send: isRtl ? "إرسال الرسالة" : "Send Message",
      sending: isRtl ? "جارٍ الإرسال..." : "Sending...",
      required: isRtl ? "هذا الحقل مطلوب" : "This field is required",
    },
    branches: {
      heading: isRtl ? "فروعنا" : "Our Branches",
      sub: isRtl
        ? "اختر الفرع الأقرب إليك لعرض تفاصيل التواصل والموقع"
        : "Pick the branch closest to you to view contact details and map",
      address: isRtl ? "العنوان" : "Address",
      phone: isRtl ? "الهاتف" : "Phone",
      email: isRtl ? "البريد" : "Email",
      postal: isRtl ? "الرمز البريدي" : "Postal Code",
      empty: isRtl
        ? "لا توجد فروع متاحة حالياً."
        : "No branches available at the moment.",
    },
    hours: {
      title: isRtl ? "ساعات العمل" : "Working Hours",
      open: isRtl
        ? "الأحد - الخميس: 9:00 ص - 5:00 م"
        : "Sunday - Thursday: 9:00 AM - 5:00 PM",
      closed: isRtl ? "الجمعة والسبت: مغلق" : "Friday & Saturday: Closed",
    },
  };

  function sendEmail(formValues) {
    setIsLoading(true);
    setContactError("");

    const serviceID = "service_dgxxhf6";
    const publicKey = "tpDBNi84p2X5xrrVN";
    const templateID = "template_7on1yag";

    const selectedType = consultationTypes.find(
      (c) => c.id === formValues.consultationTypeId
    );

    const payload = {
      name: formValues.name,
      phone: formValues.phone,
      email: formValues.email,
      message: formValues.message,
      consultation_type: selectedType
        ? `${selectedType.ar} / ${selectedType.en}`
        : "",
      branch: selectedBranch
        ? `${selectedBranch?.name?.ar || ""} / ${
            selectedBranch?.name?.en || ""
          }`.trim()
        : "",
    };

    emailjs
      .send(serviceID, templateID, payload, publicKey)
      .then(() => {
        toast.success(
          isRtl ? "تم إرسال رسالتك بنجاح!" : "Message sent successfully!",
          {
            duration: 2500,
            position: "top-center",
            style: {
              background: "#20c997",
              color: "#fff",
              fontWeight: "bold",
            },
            icon: "👍",
          }
        );
        setIsLoading(false);
        formik.resetForm();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        const msg = isRtl
          ? "فشل إرسال الرسالة. يرجى المحاولة لاحقاً."
          : "Failed to send message. Please try again later.";
        setContactError(msg);
        toast.error(msg, {
          duration: 2500,
          position: "top-center",
          style: {
            background: "#ff004f",
            color: "#fff",
            fontWeight: "bold",
          },
          icon: "❌",
        });
        setIsLoading(false);
      });
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      consultationTypeId: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, isRtl ? "الاسم قصير جداً" : "Name must be at least 3 characters")
        .required(isRtl ? "الاسم مطلوب" : "Name is required"),
      email: Yup.string()
        .email(isRtl ? "بريد غير صالح" : "Invalid email address")
        .required(isRtl ? "البريد مطلوب" : "Email is required"),
      phone: Yup.string()
        .matches(
          /^(?:\+966|0)?5\d{8}$/,
          isRtl ? "رقم جوال غير صالح" : "Invalid phone number"
        )
        .required(isRtl ? "رقم الجوال مطلوب" : "Phone is required"),
      consultationTypeId: Yup.string().required(
        isRtl ? "اختر نوع الاستشارة" : "Select consultation type"
      ),
      message: Yup.string()
        .min(
          10,
          isRtl
            ? "الرسالة يجب ألا تقل عن 10 أحرف"
            : "Message must be at least 10 characters"
        )
        .required(isRtl ? "الرسالة مطلوبة" : "Message is required"),
    }),
    onSubmit: sendEmail,
  });

  const isAnyInputEmpty =
    !formik.values.name ||
    !formik.values.phone ||
    !formik.values.email ||
    !formik.values.consultationTypeId ||
    !formik.values.message;

  const Heading = isSection ? "h2" : "h1";

  return (
    <section
      className="relative overflow-hidden"
      dir={dir}
      id={isSection ? "contact" : undefined}
    >
      {/* ============= HERO / HEADER ============= */}
      {isSection ? (
        // Compact header for home-page embedding
        <div
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0b1a3d 0%, #0f2860 35%, #0e3f55 70%, #0b4a3a 100%)",
          }}
        >
          {/* soft decorative blobs */}
          <div className="pointer-events-none absolute -top-16 -start-16 h-56 w-56 rounded-full blur-3xl" style={{ backgroundColor: "rgba(56,189,248,0.20)" }} />
          <div className="pointer-events-none absolute -bottom-20 -end-10 h-64 w-64 rounded-full blur-3xl" style={{ backgroundColor: "rgba(52,211,153,0.18)" }} />
          {/* subtle grid/noise overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 text-center">
            <span
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium"
              style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t.hero.badge}
            </span>
            <Heading
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-4 font-bold text-2xl sm:text-3xl lg:text-5xl 4k:text-6xl"
              style={{
                color: "#ffffff",
                textShadow: "0 2px 12px rgba(0,0,0,0.35)",
              }}
            >
              {t.hero.title}
            </Heading>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-3 mx-auto max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              {t.hero.subtitle}
            </p>
          </div>

          {/* bottom wave divider */}
          <svg
            className="absolute bottom-0 left-0 w-full h-8 sm:h-12 text-slate-50"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M0,40 C240,90 480,0 720,30 C960,60 1200,80 1440,40 L1440,80 L0,80 Z"
            />
          </svg>
        </div>
      ) : (
        // Full immersive hero for /contact page
        <div className="relative bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/contact%20us2.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-blue-900/70 to-green-800/60" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 text-center">
            <span
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t.hero.badge}
            </span>
            <Heading
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-5 text-white font-bold text-3xl sm:text-4xl lg:text-6xl 4k:text-7xl drop-shadow-lg"
            >
              {t.hero.title}
            </Heading>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-4 mx-auto max-w-2xl text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed"
            >
              {t.hero.subtitle}
            </p>
          </div>

          {/* bottom wave divider */}
          <svg
            className="absolute bottom-0 left-0 w-full h-10 sm:h-14 text-slate-50"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M0,40 C240,90 480,0 720,30 C960,60 1200,80 1440,40 L1440,80 L0,80 Z"
            />
          </svg>
        </div>
      )}

      {/* ============= BODY ============= */}
      <div className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* ---------- FORM CARD ---------- */}
          <div
            data-aos="fade-up"
            className="lg:col-span-3 bg-white rounded-3xl shadow-xl ring-1 ring-slate-200/70 p-5 sm:p-8 lg:p-10"
          >
            <div className="mb-6 lg:mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-950">
                {t.form.heading}
              </h2>
              <p className="mt-2 text-slate-500 text-sm lg:text-base">
                {t.form.sub}
              </p>
            </div>

            {contactError && (
              <div
                role="alert"
                className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
              >
                {contactError}
              </div>
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-5" noValidate>
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <Field
                  id="name"
                  type="text"
                  label={t.form.name}
                  placeholder={t.form.namePH}
                  formik={formik}
                />
                <Field
                  id="phone"
                  type="tel"
                  label={t.form.phone}
                  placeholder={t.form.phonePH}
                  formik={formik}
                />
              </div>

              {/* Email */}
              <Field
                id="email"
                type="email"
                label={t.form.email}
                placeholder={t.form.emailPH}
                formik={formik}
              />

              {/* Consultation type (Chips) */}
              <div>
                <label className="block text-sm font-semibold text-blue-950 mb-2">
                  {t.form.consult}
                </label>
                <div
                  role="radiogroup"
                  aria-label={t.form.consult}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-2.5"
                >
                  {consultationTypes.map((c) => {
                    const active = formik.values.consultationTypeId === c.id;
                    const label = isRtl ? c.ar || c.en : c.en || c.ar;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() =>
                          formik.setFieldValue("consultationTypeId", c.id)
                        }
                        onBlur={() =>
                          formik.setFieldTouched("consultationTypeId", true)
                        }
                        className={`text-xs sm:text-sm font-medium px-3 py-2.5 rounded-xl border transition-all text-center leading-snug min-h-[44px] flex items-center justify-center ${
                          active
                            ? "bg-gradient-to-br from-green-600 to-emerald-600 text-white border-transparent shadow-md shadow-green-600/25"
                            : "bg-slate-50 text-blue-950 border-slate-200 hover:border-green-500 hover:bg-white"
                        }`}
                      >
                        <span className="line-clamp-2">{label}</span>
                      </button>
                    );
                  })}
                </div>
                {formik.errors.consultationTypeId &&
                  formik.touched.consultationTypeId && (
                    <p className="mt-1.5 text-xs text-red-700">
                      {formik.errors.consultationTypeId}
                    </p>
                  )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-blue-950 mb-2"
                >
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={t.form.messagePH}
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none transition resize-none ${
                    formik.errors.message && formik.touched.message
                      ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
                  }`}
                />
                {formik.errors.message && formik.touched.message && (
                  <p className="mt-1.5 text-xs text-red-700">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!formik.isValid || isAnyInputEmpty || isLoading}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-7 sm:px-8 py-3 text-white font-semibold shadow-lg transition ${
                  formik.isValid && !isAnyInputEmpty && !isLoading
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-green-600/30 hover:-translate-y-0.5"
                    : "bg-slate-400 cursor-not-allowed"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    {t.form.sending}
                  </>
                ) : (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      className={`w-5 h-5 ${isRtl ? "rotate-180" : ""}`}
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                    </svg>
                    {t.form.send}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ---------- BRANCHES CARD ---------- */}
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="lg:col-span-2 space-y-5"
          >
            <div className="bg-white rounded-3xl shadow-xl ring-1 ring-slate-200/70 p-5 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-md">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      strokeLinejoin="round"
                      d="M12 22s-8-7.5-8-13a8 8 0 1 1 16 0c0 5.5-8 13-8 13z"
                    />
                    <circle cx="12" cy="9" r="3" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-950 leading-tight">
                    {t.branches.heading}
                  </h3>
                  <p className="mt-0.5 text-slate-500 text-xs sm:text-sm">
                    {t.branches.sub}
                  </p>
                </div>
              </div>

              {/* Branch pills */}
              {branches.length > 0 ? (
                <>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {branches.map((b) => {
                      const active = selectedBranchId === b.id;
                      return (
                        <button
                          type="button"
                          key={b.id}
                          onClick={() => setSelectedBranchId(b.id)}
                          className={`text-xs sm:text-sm font-medium px-3.5 py-2 rounded-full border transition-all ${
                            active
                              ? "bg-gradient-to-r from-blue-700 to-blue-900 text-white border-transparent shadow-md shadow-blue-900/25"
                              : "bg-slate-50 text-blue-950 border-slate-200 hover:bg-white hover:border-blue-500"
                          }`}
                        >
                          {isRtl ? b?.name?.ar : b?.name?.en}
                        </button>
                      );
                    })}
                  </div>

                  {/* Selected branch details */}
                  {selectedBranch && (
                    <div
                      key={selectedBranch.id}
                      className="mt-6 space-y-2.5 animate-[fadeIn_0.35s_ease]"
                    >
                      <InfoRow
                        icon="pin"
                        label={t.branches.address}
                        value={
                          isRtl
                            ? selectedBranch?.location_map?.ar
                            : selectedBranch?.location_map?.en
                        }
                      />
                      <InfoRow
                        icon="phone"
                        label={t.branches.phone}
                        value={selectedBranch?.phone}
                        href={
                          selectedBranch?.phone
                            ? `tel:${String(selectedBranch.phone).replace(
                                /\s/g,
                                ""
                              )}`
                            : null
                        }
                      />
                      <InfoRow
                        icon="mail"
                        label={t.branches.email}
                        value={selectedBranch?.email}
                        href={
                          selectedBranch?.email
                            ? `mailto:${selectedBranch.email}`
                            : null
                        }
                      />
                      <InfoRow
                        icon="post"
                        label={t.branches.postal}
                        value={selectedBranch?.postal}
                      />

                      {selectedBranch?.google_map && (
                        <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm">
                          <iframe
                            key={selectedBranch.id}
                            src={selectedBranch.google_map}
                            width="100%"
                            height={240}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={
                              isRtl
                                ? selectedBranch?.name?.ar
                                : selectedBranch?.name?.en
                            }
                          />
                        </div>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <p className="mt-5 text-sm text-slate-500">{t.branches.empty}</p>
              )}
            </div>

            {/* Working hours card */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-3xl shadow-xl p-5 sm:p-8 relative overflow-hidden">
              <div className="absolute -top-8 -end-8 w-32 h-32 rounded-full bg-green-500/20 blur-2xl pointer-events-none" />
              <div className="relative flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 ring-1 ring-white/20">
                  <svg
                    className="w-5 h-5 text-green-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" strokeLinecap="round" />
                  </svg>
                </span>
                <h4 className="text-base sm:text-lg font-bold">
                  {t.hours.title}
                </h4>
              </div>
              <p className="relative mt-3 text-white/90 text-sm">
                {t.hours.open}
              </p>
              <p className="relative mt-1 text-white/70 text-sm">
                {t.hours.closed}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------- Helper Components ---------------- */

function Field({ id, type, label, placeholder, formik }) {
  const hasError = formik.errors[id] && formik.touched[id];
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-blue-950 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={formik.values[id]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none transition ${
          hasError
            ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-slate-300 focus:border-green-500 focus:ring-2 focus:ring-green-200"
        }`}
      />
      {hasError && (
        <p className="mt-1.5 text-xs text-red-700">{formik.errors[id]}</p>
      )}
    </div>
  );
}

function InfoRow({ icon, label, value, href }) {
  if (!value) return null;

  const iconMap = {
    pin: (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path
          strokeLinejoin="round"
          d="M12 22s-8-7.5-8-13a8 8 0 1 1 16 0c0 5.5-8 13-8 13z"
        />
        <circle cx="12" cy="9" r="3" />
      </svg>
    ),
    phone: (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path
          strokeLinejoin="round"
          d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1.2 4.58a1 1 0 0 1-.29 1L7.21 11a16 16 0 0 0 6 6l1.68-1.79a1 1 0 0 1 1-.29l4.58 1.2a1 1 0 0 1 .75 1z"
        />
      </svg>
    ),
    mail: (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    post: (
      <svg
        viewBox="0 0 24 24"
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
      </svg>
    ),
  };

  const content = (
    <div className="flex items-start gap-3">
      <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700">
        {iconMap[icon]}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
          {label}
        </p>
        <p className="text-blue-950 font-medium text-sm lg:text-base break-words leading-relaxed">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      className="block hover:bg-slate-50 rounded-xl p-2 -m-2 transition"
    >
      {content}
    </a>
  ) : (
    <div className="p-2 -m-2">{content}</div>
  );
}

