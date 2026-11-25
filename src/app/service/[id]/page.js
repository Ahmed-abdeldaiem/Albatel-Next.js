import { notFound } from 'next/navigation';
import ServiceDetail from './ServiceDetail';

import { getFirebaseNode, toList, requireList } from '@/lib/firebase';

// Prebuilt at deploy time, refreshed once a day from Firebase.
export const revalidate = 86400;

// Firebase errors are thrown (not swallowed), so a failed fetch keeps the last
// good page instead of caching a 404.
async function getServiceDetail() {
  return toList(await getFirebaseNode('serviceDetail'));
}


export async function generateMetadata({ params }) {
  const { id } = await params;
  const services = await getServiceDetail();
  const service = services.find((item) => item.id === id);

  if (!service) {
    return {
      title: "الخدمة غير موجودة | الباتل محاسبون ومراجعون قانونيون",
      description: "الخدمة التي تبحث عنها غير متاحة حالياً.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const seo = service.seo || {};
  const titleAr =
    seo.title?.ar || service.title?.ar || "خدماتنا | الباتل محاسبون ومراجعون قانونيون";
  const titleEn = seo.title?.en || service.title?.en || titleAr;
  const descriptionAr =
    seo.description?.ar || service.subtitle?.ar || service.overview?.intro?.ar || "";
  const descriptionEn =
    seo.description?.en || service.subtitle?.en || service.overview?.intro?.en || descriptionAr;
  const keywords = seo.keywords || [];
  const logoUrl = "https://www.albatelcpa.com/BatelLogo1.png";

  return {
    title: titleAr,
    description: descriptionAr,
    keywords,
    alternates: {
      canonical: `/service/${service.id}`,
    },
    openGraph: {
      title: titleEn,
      description: descriptionEn,
      url: `https://www.albatelcpa.com/service/${service.id}`,
      type: "article",
      images: [
        {
          url: logoUrl,
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
      description: descriptionEn,
      images: [logoUrl],
    },
  };
}


export default async function ServiceDetailPage({ params }) {
  const { id } = await params;
  const allServices = await getServiceDetail();

  
  const service = allServices.find((b) => b.id == id);


  if (!service) {
    notFound();
  }


  return <ServiceDetail service={service} />;
}


export async function generateStaticParams() {
  // Fails the build if the node is unexpectedly empty, so the live pages stay up.
  const services = requireList(await getFirebaseNode('serviceDetail'), 'serviceDetail');

  return services.map((service) => ({
    id: service.id.toString(),
  }));
}
