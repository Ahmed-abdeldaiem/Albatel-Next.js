import PublicationDetail from "../PublicationDetail";
import { getPublicationBySlug } from "../../data/publications";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.albatelcpa.com";

export async function generateMetadata() {
  const titleAr =
    "مراجعة الرقابة الداخلية والامتثال — إطار COSO الجديد | مؤلفات الباتل";
  const descAr =
    "تعريب علمي لكتاب Lynford Graham في مراجعة الرقابة الداخلية والامتثال وفق إطار COSO الجديد. مرجع مهني للمدقّقين والمحاسبين — متوفّر للطلب من الباتل.";
  const titleEn =
    "Internal Control Audit and Compliance — COSO Framework | Al-Batel Publications";
  const descEn =
    "A professional translation of Lynford Graham's book on internal control audit and compliance under the new COSO framework. Available directly from Al-Batel.";

  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/publications/internal-audit",
      languages: {
        "ar-SA": "/publications/internal-audit",
        "en-US": "/publications/internal-audit",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: `${SITE_URL}/publications/internal-audit`,
      type: "book",
      images: [
        {
          url: `${SITE_URL}/Books/Book2.jfif`,
          width: 1200,
          height: 800,
          alt: "Internal Control Audit book cover",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleEn,
      description: descEn,
      images: [`${SITE_URL}/Books/Book2.jfif`],
    },
  };
}

export default function InternalAuditPage() {
  const pub = getPublicationBySlug("internal-audit");
  if (!pub) return notFound();

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: pub.title.ar,
    alternateName: pub.title.en,
    translator: [
      {
        "@type": "Person",
        name: "باتل الباتل",
        affiliation: {
          "@type": "Organization",
          name: "الباتل وشركاؤه للاستشارات المهنية",
        },
      },
      {
        "@type": "Person",
        name: "محمد عرفة",
        affiliation: { "@type": "Organization", name: "UHY" },
      },
      {
        "@type": "Person",
        name: "وليد منير",
        affiliation: { "@type": "Organization", name: "UHY" },
      },
    ],
    author: { "@type": "Person", name: "Lynford Graham" },
    publisher: {
      "@type": "Organization",
      name: "دار فاروس للنشر والتوزيع",
    },
    inLanguage: "ar",
    image: `${SITE_URL}/Books/Book2.jfif`,
    offers: {
      "@type": "Offer",
      price: pub.price,
      priceCurrency: "SAR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <PublicationDetail pub={pub} />
    </>
  );
}
