"use client";

import React, {
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import AOS from "aos";
import "aos/dist/aos.css";

import { LanguageContext } from "../../contexts/langContext";
import { PUBLICATIONS } from "../../data/publications";
import FormAlert from "@/components/FormAlert";

const MAX_QUANTITY = 20;

/* Wrapper needed because useSearchParams must live under Suspense. */
export default function OrderForm() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <OrderFormInner />
    </Suspense>
  );
}

function OrderFormInner() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";
  const lang = isRtl ? "ar" : "en";
  const searchParams = useSearchParams();

  const [alert, setAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const alertRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-in-out" });
  }, []);

  const initialBookSlug = useMemo(() => {
    const fromQuery = searchParams.get("book");
    if (fromQuery && PUBLICATIONS.some((p) => p.slug === fromQuery))
      return fromQuery;
    return PUBLICATIONS[0].slug;
  }, [searchParams]);

  const t = {
    badge: isRtl ? "طلب شراء مباشر" : "Direct Order",
    title: isRtl ? "اطلب نسختك من الباتل" : "Order your copy from Al-Batel",
    subtitle: isRtl
      ? "املأ النموذج بالبيانات التالية، وسيتواصل معك فريقنا خلال 24 ساعة عمل لتأكيد الطلب وبيانات الشحن والدفع."
      : "Fill in the form below and our team will contact you within 24 business hours to confirm your order and share shipping and payment details.",

    labels: {
      book: isRtl ? "الكتاب" : "Book",
      quantity: isRtl ? "الكمية" : "Quantity",
      name: isRtl ? "الاسم الكامل" : "Full Name",
      phone: isRtl ? "رقم الجوال" : "Mobile Number",
      email: isRtl ? "البريد الإلكتروني" : "Email",
      city: isRtl ? "المدينة" : "City",
      address: isRtl ? "العنوان التفصيلي للشحن" : "Detailed Shipping Address",
      orderType: isRtl ? "نوع الطلب" : "Order Type",
      organization: isRtl ? "اسم الجهة / الشركة" : "Organization / Company Name",
      notes: isRtl ? "ملاحظات إضافية" : "Additional Notes",

      namePH: isRtl ? "أدخل اسمك كما يظهر في الوثائق" : "Enter your full name",
      phonePH: "+9665xxxxxxxx",
      emailPH: "name@example.com",
      cityPH: isRtl ? "الرياض / جدة / …" : "Riyadh / Jeddah / …",
      addressPH: isRtl
        ? "الحي، الشارع، رقم المبنى، الرمز البريدي"
        : "District, street, building number, postal code",
      orgPH: isRtl ? "مطلوب للمؤسسات والمكتبات" : "Required for organizations and libraries",
      notesPH: isRtl
        ? "أي تعليمات إضافية تودّ إضافتها..."
        : "Any additional instructions...",
    },

    orderTypes: {
      individual: isRtl ? "فردي" : "Individual",
      organization: isRtl ? "مؤسسة / شركة" : "Organization / Company",
      library: isRtl ? "مكتبة أو جامعة" : "Library or University",
    },

    summary: {
      title: isRtl ? "ملخّص الطلب" : "Order Summary",
      unit: isRtl ? "سعر النسخة" : "Unit Price",
      qty: isRtl ? "الكمية" : "Quantity",
      total: isRtl ? "الإجمالي المتوقَّع" : "Estimated Total",
      note: isRtl
        ? "* السعر النهائي قد يختلف حسب تكلفة الشحن التي سيحدّدها فريقنا بعد التواصل."
        : "* Final price may vary based on shipping, to be confirmed by our team.",
    },

    submit: isRtl ? "إرسال الطلب" : "Submit Order",
    submitting: isRtl ? "جارٍ إرسال الطلب..." : "Submitting order...",

    successTitle: isRtl ? "تم استلام طلبك بنجاح!" : "Your order has been received!",
    successBody: isRtl
      ? "سيتواصل معك فريق الباتل خلال 24 ساعة عمل لتأكيد الطلب، وإرسال تفاصيل الدفع والشحن."
      : "The Al-Batel team will reach out to you within 24 business hours to confirm your order, payment, and shipping details.",
    errorTitle: isRtl ? "تعذّر إرسال الطلب" : "Unable to submit your order",
    errorBody: isRtl
      ? "حدث خطأ غير متوقّع. يرجى المحاولة مرة أخرى بعد قليل، أو التواصل معنا عبر واتساب."
      : "Something went wrong. Please try again shortly, or contact us via WhatsApp.",

    validation: {
      required: isRtl ? "هذا الحقل مطلوب" : "This field is required",
      invalidEmail: isRtl ? "البريد غير صالح" : "Invalid email",
      invalidPhone: isRtl ? "رقم الجوال غير صالح" : "Invalid phone number",
      minName: isRtl ? "الاسم يجب ألا يقل عن 3 أحرف" : "Name must be at least 3 characters",
      minCity: isRtl ? "اسم المدينة قصير جدًا" : "City name is too short",
      orgRequired: isRtl ? "اسم الجهة مطلوب" : "Organization name is required",
      qtyMin: isRtl ? "الحد الأدنى نسخة واحدة" : "Minimum 1 copy",
      qtyMax: isRtl
        ? `الحد الأقصى ${MAX_QUANTITY} نسخة — للطلبات الأكبر تواصل معنا مباشرة`
        : `Maximum ${MAX_QUANTITY} copies — contact us for larger orders`,
    },

    guarantee: {
      title: isRtl ? "لماذا تطلب مباشرة من الباتل؟" : "Why order directly from Al-Batel?",
      items: isRtl
        ? [
            "سعر خاص بخصم يصل إلى 40%",
            "تواصل مباشر مع فريق الشركة",
            "خيارات شحن مرنة داخل المملكة",
            "خدمة خاصة للجامعات والمكتبات",
          ]
        : [
            "Special discounts up to 40%",
            "Direct communication with our team",
            "Flexible shipping options across KSA",
            "Dedicated service for universities & libraries",
          ],
    },
  };

  const validationSchema = Yup.object({
    book_slug: Yup.string().required(t.validation.required),
    quantity: Yup.number()
      .typeError(t.validation.required)
      .integer(t.validation.qtyMin)
      .min(1, t.validation.qtyMin)
      .max(MAX_QUANTITY, t.validation.qtyMax)
      .required(t.validation.required),
    name: Yup.string()
      .trim()
      .min(3, t.validation.minName)
      .required(t.validation.required),
    phone: Yup.string()
      .trim()
      .matches(/^(?:\+?\d{1,4})?[\d\s-]{7,15}$/, t.validation.invalidPhone)
      .required(t.validation.required),
    email: Yup.string()
      .trim()
      .email(t.validation.invalidEmail)
      .required(t.validation.required),
    city: Yup.string()
      .trim()
      .min(2, t.validation.minCity)
      .required(t.validation.required),
    order_type: Yup.string().oneOf([
      "individual",
      "organization",
      "library",
    ]),
    organization: Yup.string().when("order_type", {
      is: (v) => v === "organization" || v === "library",
      then: (schema) => schema.trim().required(t.validation.orgRequired),
      otherwise: (schema) => schema,
    }),
    address: Yup.string(),
    notes: Yup.string(),
    hp_field: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      book_slug: initialBookSlug,
      quantity: 1,
      name: "",
      phone: "",
      email: "",
      city: "",
      address: "",
      order_type: "individual",
      organization: "",
      notes: "",
      hp_field: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: false,
  });

  const selectedBook = useMemo(
    () =>
      PUBLICATIONS.find((p) => p.slug === formik.values.book_slug) ||
      PUBLICATIONS[0],
    [formik.values.book_slug]
  );

  const unitPrice = selectedBook?.price || 0;
  const qtyNum = Math.max(
    1,
    Math.min(MAX_QUANTITY, Number(formik.values.quantity) || 1)
  );
  const estimatedTotal = unitPrice * qtyNum;

  function scrollAlertIntoView() {
    requestAnimationFrame(() => {
      alertRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  async function handleSubmit(values) {
    setIsLoading(true);
    setAlert(null);

    const payload = {
      book_slug: values.book_slug,
      quantity: Number(values.quantity),
      name: values.name,
      phone: values.phone,
      email: values.email,
      city: values.city,
      address: values.address,
      order_type: values.order_type,
      organization: values.organization,
      notes: values.notes,
      honeypot: values.hp_field || "",
    };

    try {
      const res = await fetch("/api/book-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      setAlert({
        type: "success",
        title: t.successTitle,
        message: t.successBody,
      });
      formik.resetForm({
        values: {
          ...formik.initialValues,
          book_slug: values.book_slug,
        },
      });
      scrollAlertIntoView();
    } catch (error) {
      console.error("book-order FAILED:", error);
      setAlert({
        type: "error",
        title: t.errorTitle,
        message: t.errorBody,
      });
      scrollAlertIntoView();
    } finally {
      setIsLoading(false);
    }
  }

  const showOrgField =
    formik.values.order_type === "organization" ||
    formik.values.order_type === "library";

  return (
    <div dir={dir} className="relative overflow-x-clip">
      {/* ============= HERO ============= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900">
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-12 sm:pt-32 sm:pb-16 text-center">
          <nav className="mb-6 text-xs sm:text-sm text-white/70" aria-label="Breadcrumb">
            <Link href="/publications" className="hover:text-white transition">
              {isRtl ? "مؤلفاتنا" : "Our Publications"}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white/90">{isRtl ? "طلب شراء" : "Order"}</span>
          </nav>

          <span
            data-aos="fade-up"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t.badge}
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 text-white font-bold text-2xl sm:text-3xl lg:text-5xl drop-shadow-lg"
          >
            {t.title}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 mx-auto max-w-2xl text-white/90 text-sm sm:text-base leading-relaxed"
          >
            {t.subtitle}
          </p>
        </div>

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
      </section>

      {/* ============= BODY ============= */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* ---------- Form ---------- */}
          <div
            data-aos="fade-up"
            className="lg:col-span-3 bg-white rounded-3xl shadow-xl ring-1 ring-slate-200/70 p-5 sm:p-8 lg:p-10"
          >
            {alert && (
              <div ref={alertRef} className="mb-6">
                <FormAlert
                  type={alert.type}
                  title={alert.title}
                  message={alert.message}
                  isRtl={isRtl}
                  onClose={() => setAlert(null)}
                  autoDismissMs={alert.type === "success" ? 10000 : 0}
                />
              </div>
            )}

            <form onSubmit={formik.handleSubmit} className="relative space-y-5" noValidate>
              {/* Honeypot — W3C visually-hidden pattern (safe on mobile/RTL) */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: "1px",
                  height: "1px",
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  border: 0,
                }}
              >
                <label htmlFor="hp_field">Leave this field empty</label>
                <input
                  id="hp_field"
                  type="text"
                  name="hp_field"
                  tabIndex="-1"
                  autoComplete="new-password"
                  value={formik.values.hp_field}
                  onChange={formik.handleChange}
                />
              </div>

              {/* Book selection — visual radio cards */}
              <div>
                <label className="block text-sm font-bold text-blue-950 mb-2.5">
                  {t.labels.book}
                </label>
                <div
                  role="radiogroup"
                  aria-label={t.labels.book}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                >
                  {PUBLICATIONS.map((p) => {
                    const active = formik.values.book_slug === p.slug;
                    return (
                      <button
                        type="button"
                        key={p.slug}
                        role="radio"
                        aria-checked={active}
                        onClick={() => formik.setFieldValue("book_slug", p.slug)}
                        className={`flex items-center gap-3 rounded-2xl border-2 p-3 text-start transition-all ${
                          active
                            ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 shadow-md"
                            : "border-slate-200 bg-slate-50 hover:border-emerald-300 hover:bg-white"
                        }`}
                      >
                        <img
                          src={p.cover}
                          alt=""
                          className="h-16 w-12 object-cover rounded-md shadow ring-1 ring-slate-200 flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-blue-950 leading-snug line-clamp-2">
                            {p.title[lang]}
                          </p>
                          <p className="mt-0.5 text-xs font-semibold text-emerald-700">
                            {p.price} {p.currency[lang]}
                            {p.originalPrice && (
                              <span className="ms-2 text-slate-400 line-through font-normal">
                                {p.originalPrice}
                              </span>
                            )}
                          </p>
                        </div>
                        <span
                          className={`flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                            active
                              ? "border-emerald-500 bg-emerald-500"
                              : "border-slate-300 bg-white"
                          }`}
                          aria-hidden
                        >
                          {active && (
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity + Order Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-bold text-blue-950 mb-2">
                    {t.labels.quantity}
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-300 bg-white overflow-hidden focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-200">
                    <button
                      type="button"
                      onClick={() =>
                        formik.setFieldValue(
                          "quantity",
                          Math.max(1, Number(formik.values.quantity) - 1)
                        )
                      }
                      className="w-11 h-12 text-xl font-bold text-slate-600 hover:bg-slate-50 transition"
                      aria-label="-"
                    >
                      −
                    </button>
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min={1}
                      max={MAX_QUANTITY}
                      value={formik.values.quantity}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="flex-1 min-w-0 h-12 text-center text-lg font-bold text-blue-950 bg-transparent focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        formik.setFieldValue(
                          "quantity",
                          Math.min(
                            MAX_QUANTITY,
                            Number(formik.values.quantity) + 1
                          )
                        )
                      }
                      className="w-11 h-12 text-xl font-bold text-slate-600 hover:bg-slate-50 transition"
                      aria-label="+"
                    >
                      +
                    </button>
                  </div>
                  {formik.errors.quantity && formik.touched.quantity && (
                    <p className="mt-1.5 text-xs text-red-700">
                      {formik.errors.quantity}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="order_type" className="block text-sm font-bold text-blue-950 mb-2">
                    {t.labels.orderType}
                  </label>
                  <select
                    id="order_type"
                    name="order_type"
                    value={formik.values.order_type}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full h-12 rounded-xl border border-slate-300 bg-white px-3 text-slate-800 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
                  >
                    <option value="individual">{t.orderTypes.individual}</option>
                    <option value="organization">{t.orderTypes.organization}</option>
                    <option value="library">{t.orderTypes.library}</option>
                  </select>
                </div>
              </div>

              {/* Organization (conditional) */}
              {showOrgField && (
                <FormField
                  id="organization"
                  type="text"
                  label={t.labels.organization}
                  placeholder={t.labels.orgPH}
                  formik={formik}
                />
              )}

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  id="name"
                  type="text"
                  label={t.labels.name}
                  placeholder={t.labels.namePH}
                  formik={formik}
                />
                <FormField
                  id="phone"
                  type="tel"
                  label={t.labels.phone}
                  placeholder={t.labels.phonePH}
                  formik={formik}
                />
              </div>

              {/* Email + City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  id="email"
                  type="email"
                  label={t.labels.email}
                  placeholder={t.labels.emailPH}
                  formik={formik}
                />
                <FormField
                  id="city"
                  type="text"
                  label={t.labels.city}
                  placeholder={t.labels.cityPH}
                  formik={formik}
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-bold text-blue-950 mb-2">
                  {t.labels.address}
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={2}
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={t.labels.addressPH}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition resize-none"
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-bold text-blue-950 mb-2">
                  {t.labels.notes}
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formik.values.notes}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={t.labels.notesPH}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-white font-bold shadow-lg transition ${
                  isLoading
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 shadow-emerald-700/30 hover:-translate-y-0.5"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    {t.submitting}
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M7 4V2h10v2h4v2h-2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6H3V4h4zm2 4v10h2V8H9zm4 0v10h2V8h-2z" />
                    </svg>
                    {t.submit}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ---------- Summary Sidebar ---------- */}
          <aside className="lg:col-span-2 space-y-5">
            <div
              data-aos="fade-up"
              data-aos-delay="120"
              className="sticky top-24 bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 rounded-3xl shadow-xl p-6 text-white overflow-hidden"
            >
              <div
                className="absolute -top-10 -end-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl"
                aria-hidden
              />

              <h3 className="relative text-lg font-bold">
                {t.summary.title}
              </h3>

              <div className="relative mt-5 flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-3">
                <img
                  src={selectedBook.cover}
                  alt=""
                  className="h-20 w-16 object-cover rounded-md shadow flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-sm font-bold leading-snug line-clamp-2">
                    {selectedBook.title[lang]}
                  </p>
                  <p className="mt-1 text-xs text-emerald-200/80">
                    {selectedBook.subtitle[lang]}
                  </p>
                </div>
              </div>

              <dl className="relative mt-5 space-y-2.5 text-sm">
                <div className="flex justify-between items-center text-white/80">
                  <dt>{t.summary.unit}</dt>
                  <dd className="font-bold">
                    {selectedBook.price} {selectedBook.currency[lang]}
                  </dd>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <dt>{t.summary.qty}</dt>
                  <dd className="font-bold">× {qtyNum}</dd>
                </div>
                <div className="h-px bg-white/15 my-2" />
                <div className="flex justify-between items-baseline">
                  <dt className="text-base font-bold">{t.summary.total}</dt>
                  <dd className="text-2xl font-black text-emerald-300">
                    {estimatedTotal} <span className="text-sm font-bold">{selectedBook.currency[lang]}</span>
                  </dd>
                </div>
              </dl>

              <p className="relative mt-4 text-[11px] text-white/60 leading-relaxed">
                {t.summary.note}
              </p>
            </div>

            {/* Guarantee card */}
            <div
              data-aos="fade-up"
              data-aos-delay="180"
              className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 p-5 sm:p-6"
            >
              <h4 className="text-sm font-bold text-blue-950">
                {t.guarantee.title}
              </h4>
              <ul className="mt-3 space-y-2.5">
                {t.guarantee.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="mt-0.5 flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   Reusable form field (mirrors the style used in ContactUs).
   ============================================================ */
function FormField({ id, type, label, placeholder, formik }) {
  const hasError = formik.errors[id] && formik.touched[id];
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-blue-950 mb-2">
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
        className={`w-full rounded-xl border bg-white px-4 h-12 text-slate-800 placeholder-slate-400 focus:outline-none transition ${
          hasError
            ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
        }`}
      />
      {hasError && (
        <p className="mt-1.5 text-xs text-red-700">{formik.errors[id]}</p>
      )}
    </div>
  );
}
