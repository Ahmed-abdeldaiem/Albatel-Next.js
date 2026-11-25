import { getFirebaseNode, toList } from "@/lib/firebase";
import Partners from "./Partners";


// Partners rarely change: refresh once a day (ISR).
export const revalidate = 86400;

// Generate metadata for SEO
export async function generateMetadata() {
  const titleAr = "شركاء النجاح | الباتل وشركاؤه للاستشارات المهنية";
  const descAr = "نفخر بعرض قائمة شركائنا الذين نعتز بهم. علاقاتنا المتينة هي أساس تقديمنا لخدمات استشارية موثوقة ومبتكرة.";
  const titleEn = "Our Partners | Al-Batel & Co. Professional Services";
  const descEn = "We are proud to present our valued partners. Our strong relationships are the foundation of delivering reliable and innovative consulting services.";

  return {
    title: titleAr, // Default to Arabic
    description: descAr,
    alternates: {
      canonical: "/partners", // Assuming the URL is /partners
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: "https://www.albatelcpa.com/partners",
      type: "website",
      images: [
        {
          url: "https://www.albatelcpa.com/BatelLogo1.png",
          width: 800,
          height: 600,
          alt: "الباتل محاسبون ومراجعون قانونيون logo",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleEn,
      description: descEn,
      images: ["https://www.albatelcpa.com/BatelLogo1.png"],
    },
  };
}

// Firebase errors are thrown, so a failed refresh keeps the last good page.
async function getPartnersServer() {
  return toList(await getFirebaseNode("partners"));
}

export default async function PartnersPage() {
  const partners = await getPartnersServer();
  return <Partners partners={partners} />;
}
