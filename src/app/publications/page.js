import PublicationsContent from "./PublicationsContent";

const SITE_URL = "https://www.albatelcpa.com";

export async function generateMetadata() {
  const titleAr = "مؤلفاتنا | الباتل وشركاؤه للاستشارات المهنية";
  const descAr =
    "إصدارات علمية من تأليف وتعريب نخبة من كبار الخبراء المهنيين — باتل الباتل (الباتل وشركاؤه)، بمشاركة فردية من محمد عرفة ووليد منير. موسوعة اقتصاديات كرة القدم، ومرجع مراجعة الرقابة الداخلية والامتثال وفق إطار COSO، وإصدار الفساد والاحتيال في الرياضة.";
  const titleEn = "Our Publications | Al-Batel & Co.";
  const descEn =
    "Scientific publications authored and translated by a team of senior professional experts — Batel Al-Batel (Al-Batel & Co.), with individual contributions from Mohamed Arafa and Walid Munir. The Football Economics encyclopedia, the Internal Control Audit reference under the COSO framework, and Corruption and Fraud in Sports.";

  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/publications",
      languages: {
        "ar-SA": "/publications",
        "en-US": "/publications",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: `${SITE_URL}/publications`,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/Books/Books2.png`,
          width: 1200,
          height: 630,
          alt: "Al-Batel Publications",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleEn,
      description: descEn,
      images: [`${SITE_URL}/Books/Books2.png`],
    },
  };
}

export default function PublicationsPage() {
  return <PublicationsContent />;
}
