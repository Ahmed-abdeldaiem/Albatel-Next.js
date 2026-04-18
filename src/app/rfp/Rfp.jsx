"use client";

import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "../contexts/langContext";

export default function Rfp() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  const [contactError, setContactError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  /* ---------- Bilingual copy ---------- */
  const t = {
    hero: {
      badge: isRtl ? "خدمة مخصّصة لاحتياجك" : "Tailored to your needs",
      title: isRtl ? "طلب عرض سعر" : "Request for Proposal",
      subtitle: isRtl
        ? "املأ النموذج التالي وسيتواصل معك فريقنا خلال 24 ساعة عمل بعرض مفصّل يناسب احتياجات شركتك."
        : "Fill out the form below and our team will contact you within 24 business hours with a detailed proposal tailored to your company's needs.",
    },
    form: {
      heading: isRtl ? "نموذج طلب عرض سعر" : "RFP Submission Form",
      sub: isRtl
        ? "نرد عادةً خلال 24 ساعة عمل"
        : "We usually reply within 24 business hours",
    },
    sections: {
      company: isRtl ? "معلومات الشركة" : "Company Information",
      contact: isRtl ? "بيانات مسؤول التواصل" : "Contact Person",
      period: isRtl
        ? "الفترة الزمنية للخدمة (اختياري)"
        : "Service Period (Optional)",
      message: isRtl ? "تفاصيل الطلب" : "Request Details",
    },
    fields: {
      company_name: isRtl ? "اسم الشركة" : "Company Name",
      company_namePH: isRtl ? "مثال: شركة التقنية المتقدمة" : "e.g. Acme Corp",
      commercial_registration: isRtl
        ? "رقم السجل التجاري"
        : "Commercial Registration No.",
      commercial_registrationPH: isRtl ? "10 أرقام" : "10 digits",
      tax_registration: isRtl ? "الرقم الضريبي" : "Tax Registration No.",
      tax_registrationPH: isRtl ? "15 رقم (اختياري)" : "15 digits (optional)",
      job: isRtl ? "المسمى الوظيفي" : "Job Title",
      jobPH: isRtl ? "مثال: المدير المالي" : "e.g. CFO",
      phone: isRtl ? "رقم الجوال" : "Mobile Number",
      phonePH: "05xxxxxxxx",
      email: isRtl ? "البريد الإلكتروني" : "Email",
      emailPH: "name@example.com",
      period_from: isRtl ? "من تاريخ" : "From",
      period_to: isRtl ? "إلى تاريخ" : "To",
      message: isRtl ? "الرسالة" : "Message",
      messagePH: isRtl
        ? "اذكر تفاصيل الخدمة المطلوبة ومتطلبات ميزان المراجعة..."
        : "Describe the service required and trial balance details...",
    },
    submit: {
      send: isRtl ? "إرسال الطلب" : "Submit Request",
      sending: isRtl ? "جارٍ الإرسال..." : "Sending...",
    },
    side: {
      heading: isRtl ? "ما الذي يمكنك توقّعه؟" : "What to expect",
      items: isRtl
        ? [
            "ردّ خلال 24 ساعة عمل",
            "استشارة مجانية لتقييم احتياجاتك",
            "عرض سعر مخصّص بلا التزامات",
            "فريق خبراء مرخّصون من SOCPA",
          ]
        : [
            "Response within 24 business hours",
            "Free consultation to assess your needs",
            "Customized proposal with no obligations",
            "SOCPA-certified expert team",
          ],
      directHeading: isRtl ? "تواصل مباشر" : "Direct Contact",
      directSub: isRtl
        ? "تفضّل قناة أخرى؟ نحن جاهزون."
        : "Prefer another channel? We're here.",
      whatsapp: isRtl ? "واتساب" : "WhatsApp",
      call: isRtl ? "اتصال مباشر" : "Call us",
      emailUs: isRtl ? "راسلنا بريدياً" : "Email us",
    },
    success: isRtl ? "تم إرسال طلبك بنجاح!" : "Request sent successfully!",
    error: isRtl
      ? "فشل إرسال الطلب. يرجى المحاولة لاحقاً."
      : "Failed to send request. Please try again later.",
  };

  /* ---------- EmailJS send (preserved) ---------- */
  function formatDate(d) {
    if (!d) return "";
    const date = new Date(d);
    if (Number.isNaN(date.getTime())) return "";
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }

  function sendEmail(formValues) {
    setIsLoading(true);
    setContactError("");

    const serviceID = "service_dgxxhf6";
    const publicKey = "tpDBNi84p2X5xrrVN";
    const templateID = "template_h0od4ff";

    // Format dates for a readable email body while keeping template-compatible keys
    const payload = {
      ...formValues,
      period_from: formatDate(formValues.period_from),
      period_to: formatDate(formValues.period_to),
    };

    emailjs
      .send(serviceID, templateID, payload, publicKey)
      .then(() => {
        toast.success(t.success, {
          duration: 2500,
          position: "top-center",
          style: {
            background: "#20c997",
            color: "#fff",
            fontWeight: "bold",
          },
          icon: "👍",
        });
        setIsLoading(false);
        formik.resetForm();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setContactError(t.error);
        toast.error(t.error, {
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
      company_name: "",
      commercial_registration: "",
      tax_registration: "",
      job: "",
      phone: "",
      email: "",
      period_from: "",
      period_to: "",
      message: "",
    },
    validationSchema: Yup.object({
      company_name: Yup.string()
        .min(3, isRtl ? "الاسم قصير جداً" : "Name must be at least 3 characters")
        .required(isRtl ? "اسم الشركة مطلوب" : "Company name is required"),
      commercial_registration: Yup.string()
        .min(
          10,
          isRtl
            ? "رقم السجل التجاري يجب أن يكون 10 أرقام"
            : "CR must be 10 digits"
        )
        .required(
          isRtl ? "السجل التجاري مطلوب" : "Commercial registration is required"
        ),
      tax_registration: Yup.string().min(
        15,
        isRtl
          ? "الرقم الضريبي يجب أن يكون 15 رقم"
          : "Tax registration must be 15 digits"
      ),
      job: Yup.string()
        .min(
          3,
          isRtl ? "المسمى قصير جداً" : "Job title must be at least 3 characters"
        )
        .required(isRtl ? "المسمى الوظيفي مطلوب" : "Job title is required"),
      phone: Yup.string()
        .matches(
          /^(?:\+966|0)?5\d{8}$/,
          isRtl ? "رقم جوال غير صالح" : "Invalid phone number"
        )
        .required(isRtl ? "رقم الجوال مطلوب" : "Phone is required"),
      email: Yup.string()
        .email(isRtl ? "بريد غير صالح" : "Invalid email address")
        .required(isRtl ? "البريد مطلوب" : "Email is required"),
      message: Yup.string()
        .min(
          10,
          isRtl
            ? "الرسالة يجب ألا تقل عن 10 أحرف"
            : "Message must be at least 10 characters"
        )
        .required(isRtl ? "الرسالة مطلوبة" : "Message is required"),
      period_from: Yup.date()
        .nullable()
        .typeError(isRtl ? "تاريخ غير صالح" : "Invalid date format"),
      period_to: Yup.date()
        .nullable()
        .typeError(isRtl ? "تاريخ غير صالح" : "Invalid date format")
        .test(
          "is-after",
          isRtl
            ? "تاريخ النهاية يجب أن يكون بعد تاريخ البداية"
            : "End date must be after start date",
          function (value) {
            const { period_from } = this.parent;
            return value && period_from
              ? new Date(value) > new Date(period_from)
              : true;
          }
        ),
    }),
    onSubmit: sendEmail,
  });

  const isAnyInputEmpty =
    !formik.values.company_name ||
    !formik.values.commercial_registration ||
    !formik.values.job ||
    !formik.values.phone ||
    !formik.values.email ||
    !formik.values.message;

  return (
    <section className="relative" dir={dir}>
      {/* ============= HERO ============= */}
      <div className="relative bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/rfp2.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-blue-900/70 to-green-800/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24 text-center">
          <span
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t.hero.badge}
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 text-white font-bold text-3xl sm:text-4xl lg:text-6xl 4k:text-7xl drop-shadow-lg"
          >
            {t.hero.title}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 mx-auto max-w-2xl text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            {t.hero.subtitle}
          </p>
        </div>

        {/* Wave divider */}
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

            <form
              onSubmit={formik.handleSubmit}
              className="space-y-8"
              noValidate
            >
              {/* Section 1: Company */}
              <FormSection
                heading={t.sections.company}
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                    aria-hidden
                  >
                    <path
                      strokeLinejoin="round"
                      d="M3 21V7l9-4 9 4v14M9 21V11h6v10"
                    />
                  </svg>
                }
              >
                <Field
                  id="company_name"
                  type="text"
                  label={t.fields.company_name}
                  placeholder={t.fields.company_namePH}
                  formik={formik}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <Field
                    id="commercial_registration"
                    type="text"
                    inputMode="numeric"
                    label={t.fields.commercial_registration}
                    placeholder={t.fields.commercial_registrationPH}
                    formik={formik}
                  />
                  <Field
                    id="tax_registration"
                    type="text"
                    inputMode="numeric"
                    label={t.fields.tax_registration}
                    placeholder={t.fields.tax_registrationPH}
                    formik={formik}
                  />
                </div>
              </FormSection>

              {/* Section 2: Contact Person */}
              <FormSection
                heading={t.sections.contact}
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                    aria-hidden
                  >
                    <path
                      strokeLinejoin="round"
                      d="M20 21a8 8 0 1 0-16 0"
                    />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                }
              >
                <Field
                  id="job"
                  type="text"
                  label={t.fields.job}
                  placeholder={t.fields.jobPH}
                  formik={formik}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <Field
                    id="phone"
                    type="tel"
                    label={t.fields.phone}
                    placeholder={t.fields.phonePH}
                    formik={formik}
                  />
                  <Field
                    id="email"
                    type="email"
                    label={t.fields.email}
                    placeholder={t.fields.emailPH}
                    formik={formik}
                  />
                </div>
              </FormSection>

              {/* Section 3: Period */}
              <FormSection
                heading={t.sections.period}
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                    aria-hidden
                  >
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M8 3v4M16 3v4M3 11h18" strokeLinecap="round" />
                  </svg>
                }
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <DateField
                    id="period_from"
                    label={t.fields.period_from}
                    formik={formik}
                    isRtl={isRtl}
                  />
                  <DateField
                    id="period_to"
                    label={t.fields.period_to}
                    formik={formik}
                    isRtl={isRtl}
                  />
                </div>
              </FormSection>

              {/* Section 4: Message */}
              <FormSection
                heading={t.sections.message}
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-5 h-5"
                    aria-hidden
                  >
                    <path
                      strokeLinejoin="round"
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    />
                  </svg>
                }
              >
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-blue-950 mb-2"
                  >
                    {t.fields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder={t.fields.messagePH}
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
              </FormSection>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!formik.isValid || isAnyInputEmpty || isLoading}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-white font-semibold shadow-lg transition ${
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
                      {t.submit.sending}
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
                      {t.submit.send}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* ---------- SIDE CARD ---------- */}
          <aside
            data-aos="fade-up"
            data-aos-delay="150"
            className="lg:col-span-2 space-y-5"
          >
            {/* What to expect */}
            <div className="bg-white rounded-3xl shadow-xl ring-1 ring-slate-200/70 p-5 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-950 leading-tight">
                  {t.side.heading}
                </h3>
              </div>

              <ul className="mt-5 space-y-3">
                {t.side.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-blue-950 text-sm lg:text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct contact card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-950 text-white rounded-3xl shadow-xl p-5 sm:p-8">
              <div className="absolute -top-10 -end-10 w-40 h-40 rounded-full bg-green-500/20 blur-3xl pointer-events-none" />
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
                    <path
                      strokeLinejoin="round"
                      d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1.2 4.58a1 1 0 0 1-.29 1L7.21 11a16 16 0 0 0 6 6l1.68-1.79a1 1 0 0 1 1-.29l4.58 1.2a1 1 0 0 1 .75 1z"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="text-base sm:text-lg font-bold leading-tight">
                    {t.side.directHeading}
                  </h4>
                  <p className="text-white/70 text-xs sm:text-sm mt-0.5">
                    {t.side.directSub}
                  </p>
                </div>
              </div>

              <div className="relative mt-5 space-y-2.5">
                <a
                  href="https://wa.me/966550554262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-4 py-3 transition"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-500 text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.5 0 .17 5.34.17 11.89c0 2.09.55 4.13 1.6 5.93L0 24l6.33-1.66a11.88 11.88 0 0 0 5.71 1.46h.01c6.54 0 11.87-5.34 11.87-11.89 0-3.17-1.23-6.15-3.4-8.43zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.76.99 1-3.66-.23-.38a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.43-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.8 9.8 0 0 1 2.9 6.99c0 5.45-4.43 9.88-9.88 9.9zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.3 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-white/60 uppercase tracking-wide">
                      {t.side.whatsapp}
                    </p>
                    <p className="text-white font-medium text-sm sm:text-base break-all">
                    966550554262+
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+966550554262"
                  className="flex items-center gap-3 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-4 py-3 transition"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-500 text-white">
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
                        d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1.2 4.58a1 1 0 0 1-.29 1L7.21 11a16 16 0 0 0 6 6l1.68-1.79a1 1 0 0 1 1-.29l4.58 1.2a1 1 0 0 1 .75 1z"
                      />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-white/60 uppercase tracking-wide">
                      {t.side.call}
                    </p>
                    <p className="text-white font-medium text-sm sm:text-base break-all">
                      966550554262+
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:albatelcpa@albatelcpa.com"
                  className="flex items-center gap-3 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-4 py-3 transition"
                >
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-500 text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-semibold text-white/60 uppercase tracking-wide">
                      {t.side.emailUs}
                    </p>
                    <p className="text-white font-medium text-sm sm:text-base break-all">
                    albatelcpa@albatelcpa.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* DatePicker theme overrides */}
      <style jsx global>{`
        .rfp-datepicker-wrapper {
          width: 100%;
        }
        .rfp-datepicker-wrapper .react-datepicker-wrapper,
        .rfp-datepicker-wrapper .react-datepicker__input-container {
          width: 100%;
          display: block;
        }
        .rfp-datepicker {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: #0f172a;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .rfp-datepicker::placeholder {
          color: #94a3b8;
        }
        .rfp-datepicker:focus {
          outline: none;
          border-color: #22c55e;
          box-shadow: 0 0 0 3px rgba(187, 247, 208, 0.6);
        }
        .rfp-datepicker--error {
          border-color: #fca5a5;
        }
        .rfp-datepicker--error:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(254, 202, 202, 0.6);
        }
        .react-datepicker-popper {
          z-index: 50;
        }
      `}</style>
    </section>
  );
}

/* =============================================
   Helper Components
============================================= */

function FormSection({ heading, icon, children }) {
  return (
    <div>
      <div className="flex items-center gap-2.5 mb-4">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 text-white shadow-md">
          {icon}
        </span>
        <h3 className="text-base sm:text-lg font-bold text-blue-950">
          {heading}
        </h3>
      </div>
      <div className="space-y-4 sm:space-y-5">{children}</div>
    </div>
  );
}

function Field({ id, type, label, placeholder, formik, inputMode }) {
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
        inputMode={inputMode}
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

function DateField({ id, label, formik, isRtl }) {
  const hasError = formik.errors[id] && formik.touched[id];
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-blue-950 mb-2"
      >
        {label}
      </label>
      <div className="rfp-datepicker-wrapper">
        <DatePicker
          id={id}
          name={id}
          selected={formik.values[id] || null}
          onChange={(date) => formik.setFieldValue(id, date)}
          onBlur={() => formik.setFieldTouched(id, true)}
          placeholderText={label}
          dateFormat="dd/MM/yyyy"
          showYearDropdown
          showMonthDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={20}
          autoComplete="off"
          className={`rfp-datepicker ${
            hasError ? "rfp-datepicker--error" : ""
          }`}
          popperPlacement={isRtl ? "bottom-end" : "bottom-start"}
        />
      </div>
      {hasError && (
        <p className="mt-1.5 text-xs text-red-700">{formik.errors[id]}</p>
      )}
    </div>
  );
}
