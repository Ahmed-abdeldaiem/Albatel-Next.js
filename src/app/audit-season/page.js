import AuditSeason from "./AuditSeason";
import { AUDIT_FAQ } from "./content";
import { getAuditSeason } from "../data/campaigns";

const SITE_URL = "https://www.albatelcpa.com";
const PAGE_URL = `${SITE_URL}/audit-season`;
const FIREBASE_BASE = "https://al-batel-team-data-default-rtdb.firebaseio.com";

// Re-render daily so the season year in titles stays current.
export const revalidate = 86400;

async function getBranches() {
  try {
    const res = await fetch(`${FIREBASE_BASE}/branches.json`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    if (Array.isArray(data)) return data.filter(Boolean);
    if (Array.isArray(data?.branches)) return data.branches.filter(Boolean);
    return [];
  } catch {
    return [];
  }
}

export async function generateMetadata() {
  const { fiscalYear } = getAuditSeason();
  const title = `مراجعة القوائم المالية ${fiscalYear} | من الجرد إلى الإقرار الزكوي والإيداع في قوائم — الباتل`;
  const description = `قوائم ${fiscalYear} تبدأ قبل إقفال السنة لا في يناير: حضور جرد 31 ديسمبر، والإقرار الزكوي خلال 120 يومًا، والإيداع في منصة قوائم خلال 6 أشهر. مراجعة مستقلة للقوائم المالية من الباتل محاسبون ومراجعون قانونيون منذ 2006 عبر 9 فروع في المملكة.`;
  const image = {
    url: `${SITE_URL}/audit-season/og-audit-season.jpg`,
    width: 1200,
    height: 630,
    alt: `مراجعة القوائم المالية ${fiscalYear} — الباتل`,
  };

  return {
    title,
    description,
    keywords: [
      "مراجعة القوائم المالية",
      `مراجعة القوائم المالية ${fiscalYear}`,
      "تعيين مراجع حسابات",
      "مراجع حسابات الرياض",
      "حضور الجرد",
      "جرد 31 ديسمبر",
      "منصة قوائم",
      "آخر موعد للإيداع في قوائم",
      "موعد الإقرار الزكوي",
      "الإقرار الزكوي السنوي",
      "إيداع القوائم المالية",
      "محاسب قانوني",
      "مكتب مراجعة حسابات",
    ],
    alternates: { canonical: "/audit-season" },
    openGraph: {
      title: `قوائم ${fiscalYear} تبدأ اليوم… لا في أبريل`,
      description,
      url: PAGE_URL,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `قوائم ${fiscalYear} تبدأ اليوم… لا في أبريل`,
      description,
      images: [image.url],
    },
  };
}

export default async function AuditSeasonPage() {
  const serverNow = Date.now();
  const season = getAuditSeason(serverNow);
  const branches = await getBranches();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `مراجعة القوائم المالية ${season.fiscalYear}`,
      serviceType: "مراجعة القوائم المالية",
      url: PAGE_URL,
      areaServed: { "@type": "Country", name: "المملكة العربية السعودية" },
      provider: {
        "@type": "AccountingService",
        name: "الباتل محاسبون ومراجعون قانونيون",
        url: SITE_URL,
        telephone: "+966550554262",
        logo: `${SITE_URL}/BatelLogo1.png`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: AUDIT_FAQ.map((f) => ({
        "@type": "Question",
        name: f.q.ar,
        acceptedAnswer: { "@type": "Answer", text: f.a.ar },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "خدماتنا", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "موسم مراجعة القوائم المالية", item: PAGE_URL },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuditSeason serverNow={serverNow} branches={branches} />
    </>
  );
}
