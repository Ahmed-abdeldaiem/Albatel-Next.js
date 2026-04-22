const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 10;

const store = new Map();

export function getClientIp(request) {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

export function checkRateLimit(key) {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || now - entry.firstRequestAt > WINDOW_MS) {
    store.set(key, { count: 1, firstRequestAt: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (entry.count >= MAX_REQUESTS) {
    const retryAfterMs = WINDOW_MS - (now - entry.firstRequestAt);
    return { allowed: false, retryAfterMs };
  }

  entry.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - entry.count };
}
