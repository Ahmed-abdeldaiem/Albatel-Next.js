"use client";

import { useState } from "react";

/**
 * Lightweight YouTube embed: shows the thumbnail and only loads the real
 * player (≈1MB of JS) after the visitor clicks play.
 */
export default function YouTubeFacade({
  id,
  title,
  vertical = false,
  className = "",
  playLabel = "تشغيل الفيديو",
}) {
  const [playing, setPlaying] = useState(false);
  const aspect = vertical ? "aspect-[9/16]" : "aspect-video";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-blue-950 shadow-xl shadow-blue-950/20 ${aspect} ${className}`}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${playLabel}: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/10 to-transparent" />
          <span className="absolute left-1/2 top-1/2 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl shadow-black/40 transition-transform duration-300 group-hover:scale-110">
            <svg className="h-7 w-7 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-0 inset-x-0 p-3 text-start text-sm font-semibold leading-snug text-white sm:p-4">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
