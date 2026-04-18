"use client";

import { useEffect, useState } from "react";

/**
 * Returns `true` once the window has been scrolled past the given
 * percentage of the viewport height. Shared between SocialBar and NavBar
 * so they stay perfectly in sync and only one scroll listener is attached.
 *
 * Uses `requestAnimationFrame` to throttle updates to ~60fps and
 * `{ passive: true }` so the scroll event never blocks the main thread.
 */
export default function useScrolledPast(thresholdPercent = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    let ticking = false;

    const compute = () => {
      const vh = window.innerHeight || 1;
      const pct = (window.scrollY / vh) * 100;
      setScrolled((prev) => {
        const next = pct >= thresholdPercent;
        return prev === next ? prev : next;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(compute);
    };

    compute();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [thresholdPercent]);

  return scrolled;
}
