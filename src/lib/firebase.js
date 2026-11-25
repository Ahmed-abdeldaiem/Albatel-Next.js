import { cache } from "react";
import axios from "axios";

const FIREBASE_BASE = "https://al-batel-team-data-default-rtdb.firebaseio.com";

/**
 * Reads one Firebase node (e.g. "team" -> /team.json) for server rendering.
 *
 * - Wrapped in React `cache`, so generateMetadata and the page share one
 *   request per render instead of downloading the same JSON twice.
 * - Uses axios on purpose: it is not stored in Next's Data Cache, so every
 *   build / ISR regeneration reads live Firebase data. Page freshness is then
 *   controlled only by each page's `revalidate`, and a Vercel "Redeploy"
 *   always picks up the latest data.
 * - Throws on network/HTTP errors instead of returning an empty list. During
 *   a build this fails the deploy (the current site stays live); during an ISR
 *   regeneration Next keeps serving the last good page. Either way a Firebase
 *   hiccup can never publish an empty page or a false 404.
 */
export const getFirebaseNode = cache(async (node) => {
  const { data } = await axios.get(`${FIREBASE_BASE}/${node}.json`, {
    timeout: 20000,
  });
  return data;
});

/**
 * Normalizes a Firebase node into a plain array, whatever shape it was saved in:
 *   [ ... ]                 -> bare array (current shape of every node)
 *   { "team": [ ... ] }     -> wrapped array (shape of the local JSON files)
 *   { "-Nabc": {...}, ... } -> keyed object (Firebase push IDs)
 *   null                    -> empty node (e.g. no open jobs)
 */
export function toList(data) {
  if (!data) return [];
  if (Array.isArray(data)) return data.filter(Boolean);
  if (typeof data !== "object") return [];

  const values = Object.values(data);
  if (values.length === 1 && Array.isArray(values[0])) {
    return values[0].filter(Boolean);
  }
  return values.filter(
    (v) => v && typeof v === "object" && !Array.isArray(v)
  );
}

/** Same as toList, but refuses an empty result. Used where an empty list can only mean bad data. */
export function requireList(data, node) {
  const list = toList(data);
  if (list.length === 0) {
    throw new Error(
      `Firebase node "${node}" returned no items — refusing to render empty pages.`
    );
  }
  return list;
}
