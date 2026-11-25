import Services from "./Services";

import { getFirebaseNode, toList } from "@/lib/firebase";

// Firebase errors are thrown, so a failed refresh keeps the last good page.
async function fetchServices() {
  return toList(await getFirebaseNode("service"));
}

// Services rarely change: refresh once a day (ISR).
export const revalidate = 86400;

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
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: "https://www.albatelcpa.com/services",
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

export default async function ServicesPage() {
  const services = await fetchServices();
  // If no data, you could throw notFound() to use 404 page
  // but for now, pass empty array
  return <Services services={services} />;
}


