import PublicationDetail from "../PublicationDetail";
import { getPublicationBySlug } from "../../data/publications";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.albatelcpa.com";

export async function generateMetadata() {
  const titleAr =
    "اقتصاديات كرة القدم — من الملاعب إلى البورصات | مؤلفات الباتل";
  const descAr =
    "موسوعة علمية بحثية في الاستثمار الرياضي وكرة القدم، من تأليف باتل الباتل، محمد عرفة، ووليد منير. متوفرة الآن في مكتبة جرير، وللطلب المباشر من الباتل.";
  const titleEn =
    "Football Economics — From Stadiums to Stock Exchanges | Al-Batel Publications";
  const descEn =
    "A research encyclopedia on sports investment and football, authored by Batel Al-Batel, Mohamed Arafa, and Walid Munir. Available at Jarir Bookstore and directly from Al-Batel.";

  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/publications/football-economics",
      languages: {
        "ar-SA": "/publications/football-economics",
        "en-US": "/publications/football-economics",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: `${SITE_URL}/publications/football-economics`,
      type: "book",
      images: [
        {
          url: `${SITE_URL}/Books/Book1.JPG`,
          width: 1200,
          height: 800,
          alt: "Football Economics book cover",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleEn,
      description: descEn,
      images: [`${SITE_URL}/Books/Book1.JPG`],
    },
  };
}

export default function FootballEconomicsPage() {
  const pub = getPublicationBySlug("football-economics");
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
        affiliation: { "@type": "Organization", name: "UHY" },
      },
      {
        "@type": "Person",
        name: "وليد منير",
        affiliation: { "@type": "Organization", name: "UHY" },
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "دار فاروس للنشر والتوزيع",
    },
    inLanguage: "ar",
    image: `${SITE_URL}/Books/Book1.JPG`,
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
