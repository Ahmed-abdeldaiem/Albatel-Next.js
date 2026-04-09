"use client";
import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/langContext";

export default function PDFModal() {
  const context = useContext(LanguageContext);
  const dir =
    context?.dir ||
    (typeof document !== "undefined"
      ? document.documentElement.getAttribute("dir") || "rtl"
      : "rtl");

  const actions = [
    {
      href: "https://wa.me/966550554262",
      label: dir === "rtl" ? "تواصل واتساب" : "WhatsApp",
      bg: "bg-emerald-700/90",
      external: true,
      content: (
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600">
          <img
            src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%2010.png"
            alt="WhatsApp"
            className="h-6 w-6"
          />
        </span>
      ),
    },
    {
      href: "mailto:albatelcpa@albatelcpa.com",
      label: dir === "rtl" ? "راسلنا عبر البريد" : "Send us an email",
      bg: "bg-cyan-700/90",
      external: false,
      content: (
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-700 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 10H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2z"
            />
          </svg>
        </span>
      ),
    },
    {
      href: "https://drive.google.com/file/d/1BBEoYERTflhKtBvB-y8LPT2DX7KvD2SE/view?usp=sharing",
      label: dir === "rtl" ? "الملف التعريفي" : "Profile PDF",
      bg: "bg-blue-900/90",
      external: true,
      content: <img src="/pdf.webp" alt="PDF Icon" className="h-11 w-11 rounded-full" />,
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-center gap-3">
      {actions.map((action) => (
        <div key={action.href} className="group relative">
          <a
            className="relative flex h-11 w-11 items-center justify-center rounded-full shadow-lg shadow-blue-950/25 transition-transform duration-300 hover:-translate-y-0.5"
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            aria-label={action.label}
            title={action.label}
          >
            <span className={`absolute inline-flex h-full w-full rounded-full ${action.bg} animate-ping opacity-40`} />
            <span className={`absolute inline-flex h-full w-full rounded-full ${action.bg} animate-pulse opacity-70`} />
            <span className="relative inline-flex rounded-full ring-1 ring-white/30">{action.content}</span>
          </a>

          <div className="pointer-events-none absolute left-full top-1/2 ms-2 -translate-y-1/2 rounded-lg bg-gray-900 px-3 py-1 text-xs text-white opacity-0 shadow-md transition-opacity duration-300 whitespace-nowrap group-hover:opacity-100">
            {action.label}
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-y-4 border-e-4 border-y-transparent border-e-gray-900" />
          </div>
        </div>
      ))}
    </div>
  );
}
