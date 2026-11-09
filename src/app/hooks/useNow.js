"use client";

import { useEffect, useState } from "react";

/**
 * Current timestamp on the client, `null` during SSR / first render.
 * Pages are statically built, so anything date-driven (countdowns, seasonal
 * banners) must be decided in the browser to stay correct between deploys —
 * and render nothing until then to avoid hydration mismatches.
 */
export default function useNow(refreshMs = 60 * 60 * 1000) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), refreshMs);
    return () => clearInterval(id);
  }, [refreshMs]);

  return now;
}
