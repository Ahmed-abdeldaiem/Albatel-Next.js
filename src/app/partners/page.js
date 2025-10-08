import axios from "axios";
import Partners from "./Partners";


export const revalidate = 60;

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
      languages: {
        "ar-SA": "/partners",
        "en-US": "/partners",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: "/partners",
      // ... other openGraph properties like images
    },
    twitter: {
      title: titleEn,
      description: descEn,
      // ... other twitter properties like images
    },
  };
}

async function getPartnersServer() {
  try {
    const { data } = await axios.get(
      "https://al-batel-team-data-default-rtdb.firebaseio.com/partners.json"
     );
    if (!data) return [];
    const list = Array.isArray(data) ? data : Object.values(data);
    return (list || []).filter(Boolean);
  } catch {
    return [];
  }
}

export default async function PartnersPage() {
  const partners = await getPartnersServer();
  return <Partners partners={partners} />;
}
