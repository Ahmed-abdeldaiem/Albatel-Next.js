"use client";

import React, { useEffect } from "react";

export default function FormAlert({
  type = "success",
  title,
  message,
  onClose,
  autoDismissMs = 0,
  isRtl = false,
}) {
  useEffect(() => {
    if (!autoDismissMs || !onClose) return;
    const id = setTimeout(onClose, autoDismissMs);
    return () => clearTimeout(id);
  }, [autoDismissMs, onClose]);

  const palette = {
    success: {
      ring: "ring-green-200",
      bgFrom: "from-emerald-50",
      bgTo: "to-green-50",
      border: "border-emerald-200",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      title: "text-emerald-900",
      body: "text-emerald-800/90",
      accent: "bg-emerald-500",
    },
    error: {
      ring: "ring-red-200",
      bgFrom: "from-red-50",
      bgTo: "to-rose-50",
      border: "border-red-200",
      iconBg: "bg-gradient-to-br from-red-500 to-rose-600",
      title: "text-red-900",
      body: "text-red-800/90",
      accent: "bg-red-500",
    },
  };

  const c = palette[type] || palette.success;

  return (
    <div
      role={type === "error" ? "alert" : "status"}
      aria-live={type === "error" ? "assertive" : "polite"}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.bgFrom} ${c.bgTo} border ${c.border} ring-1 ${c.ring} shadow-lg animate-[alertSlideIn_.35s_ease-out]`}
    >
      <span className={`absolute ${isRtl ? "right-0" : "left-0"} top-0 bottom-0 w-1.5 ${c.accent}`} />

      <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 ps-5 sm:ps-6">
        <span
          className={`flex-shrink-0 inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full ${c.iconBg} text-white shadow-md`}
        >
          {type === "success" ? (
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          )}
        </span>

        <div className="flex-1 min-w-0 pt-0.5">
          <h4 className={`text-base sm:text-lg font-bold ${c.title} leading-snug`}>
            {title}
          </h4>
          {message && (
            <p className={`mt-1 text-sm leading-relaxed ${c.body}`}>
              {message}
            </p>
          )}
        </div>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label={isRtl ? "إغلاق" : "Close"}
            className={`flex-shrink-0 -mt-0.5 -m-1 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-white/60 transition`}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes alertSlideIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
