import { NextResponse } from "next/server";

// Spam URLs left over from the old domain owner. We answer them with
// 410 Gone (instead of redirecting) so Google drops them from its index fast.
const SPAM_QUERY_KEYS = ["a"];
const SPAM_EXTENSIONS = /\.(php|asp|aspx|jsp|cgi|pl)$/i;
const SPAM_PATHS =
  /^\/(admin|wp-admin|wp-content|wp-includes|phpmyadmin|cpanel|config|backup|temp|tmp)(\/|$)/i;
const ALWAYS_ALLOWED = ["/sitemap.xml", "/robots.txt"];

function gone() {
  return new NextResponse("410 Gone", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  if (ALWAYS_ALLOWED.includes(pathname)) return NextResponse.next();

  if (SPAM_QUERY_KEYS.some((key) => searchParams.has(key))) return gone();
  if (SPAM_EXTENSIONS.test(pathname)) return gone();
  if (SPAM_PATHS.test(pathname)) return gone();

  return NextResponse.next();
}

export const config = {
  // Skip Next.js internals and static assets
  matcher: ["/((?!_next/static|_next/image|favicon).*)"],
};
