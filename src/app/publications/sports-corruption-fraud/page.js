import PublicationDetail from "../PublicationDetail";
import { getPublicationBySlug } from "../../data/publications";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.albatelcpa.com";

export async function generateMetadata() {
  const titleAr =
    "الفساد والاحتيال في الرياضة | مؤلفات الباتل";
  const descAr =
    "إصدار مهني جديد من الباتل يتناول الفساد والاحتيال في القطاع الرياضي — حوكمة الأندية والاتحادات، الاحتيال في عقود اللاعبين والرعاية وحقوق البث، وأُطر الرقابة الداخلية والامتثال. للطلب المباشر من الباتل.";
  const titleEn =
    "Corruption and Fraud in Sports | Al-Batel Publications";
  const descEn =
    "A new professional publication by Al-Batel addressing corruption and fraud in the sports sector — governance of clubs and federations, fraud in player, sponsorship, and broadcasting contracts, and frameworks for internal control and compliance. Available for direct order from Al-Batel.";

  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/publications/sports-corruption-fraud",
      languages: {
        "ar-SA": "/publications/sports-corruption-fraud",
        "en-US": "/publications/sports-corruption-fraud",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: `${SITE_URL}/publications/sports-corruption-fraud`,
      type: "book",
      images: [
        {
          url: `${SITE_URL}/Books/book3.JPG`,
          width: 1200,
          height: 800,
          alt: "Corruption and Fraud in Sports book cover",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleEn,
      description: descEn,
      images: [`${SITE_URL}/Books/book3.JPG`],
    },
  };
}

export default function SportsCorruptionFraudPage() {
  const pub = getPublicationBySlug("sports-corruption-fraud");
  if (!pub) return notFound();

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: pub.title.ar,
    alternateName: pub.title.en,
    author: [
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
      },
      {
        "@type": "Person",
        name: "وليد منير",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "دار فاروس للنشر والتوزيع",
    },
    inLanguage: "ar",
    image: `${SITE_URL}/Books/book3.JPG`,
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
