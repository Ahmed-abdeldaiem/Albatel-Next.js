"use client";

import { useContext } from "react";
import { LanguageContext } from "../contexts/langContext";

export default function BlogContent({ posts }) {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  const copy = isRtl
    ? {
        badge: "AL-BATEL BLOG",
        title: "المدونة المهنية",
        subtitle:
          "محتوى معرفي متخصص يقدمه خبراؤنا في المحاسبة والمراجعة والضرائب والاستشارات لدعم قراراتك بثقة.",
        latest: "أحدث المقالات",
        comingSoon: "قريبًا",
      }
    : {
        badge: "AL-BATEL BLOG",
        title: "Professional Blog",
        subtitle:
          "Expert insights in accounting, audit, tax, and advisory services to support better business decisions.",
        latest: "Latest Articles",
        comingSoon: "Coming Soon",
      };

  return (
    <div className="min-h-screen bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-cover bg-center bg-no-repeat pt-36">
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-6 text-center md:px-8">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-l from-blue-900/80 via-blue-800/70 to-cyan-700/60" />
        <div className="rounded-3xl border border-white/25 bg-blue-600 px-6 py-10 backdrop-blur-sm md:px-10">
          <p className="mb-2 text-sm font-semibold tracking-wide text-blue-100">
            {copy.badge}
          </p>
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-blue-50 md:text-xl">
            {copy.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-blue-950 md:text-3xl">
            {copy.latest}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              id={post.slug}
              key={post.slug}
              className={`group rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-md shadow-blue-900/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                isRtl ? "text-right" : "text-left"
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-900">
                  {isRtl ? post.category.ar : post.category.en}
                </span>
                <span className="text-xs text-slate-500">
                  {isRtl ? post.readingTime.ar : post.readingTime.en}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold leading-8 text-slate-900 transition-colors duration-300 group-hover:text-blue-800">
                {isRtl ? post.title.ar : post.title.en}
              </h3>
              <p className="mb-4 text-sm leading-7 text-slate-700">
                {isRtl ? post.excerpt.ar : post.excerpt.en}
              </p>

              <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-xs text-slate-500">
                <time dateTime={post.datePublished}>{post.datePublished}</time>
                <span>{copy.comingSoon}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

