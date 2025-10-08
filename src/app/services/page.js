import Services from "./Services";

async function fetchServices() {
  const res = await fetch("https://al-batel-team-data-default-rtdb.firebaseio.com/service.json", {
    // Revalidate periodically to keep data fresh
    next: { revalidate: 300 },
    // Accept errors gracefully
    cache: "force-cache",
  });
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data || null;
}

export const revalidate = 300;

export async function generateMetadata() {

  const titleAr = "خدماتنا | الباتل وشركاؤه للاستشارات المهنية";
const descAr = "نقدم حلولاً متكاملة في الاستشارات المالية، التدقيق، المحاسبة، والخدمات الضريبية. اكتشف كيف يمكن لخبرائنا دعم نجاح أعمالك.";
const titleEn = "Our Services | Al-Batel & Co. Professional Services";
const descEn = "We provide integrated solutions in financial consulting, auditing, accounting, and tax services. Discover how our experts can support your business success.";

  
  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/services",
      languages: {
        "ar-SA": "/services",
        "en-US": "/services",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: "/services",
      type: "website",
    },
  };
}

export default async function ServicesPage() {
  const services = await fetchServices();
  // If no data, you could throw notFound() to use 404 page
  // but for now, pass empty array
  return <Services services={Array.isArray(services) ? services : []} />;
}


