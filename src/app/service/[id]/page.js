import axios from 'axios';
import { notFound } from 'next/navigation';
import ServiceDetail from './ServiceDetail';

const BASE_URL = 'https://al-batel-team-data-default-rtdb.firebaseio.com/';


async function getServiceDetail( ) {
  try {
    const response = await axios.get(`${BASE_URL}/serviceDetail.json`);
    const data = response.data;

    if (!data) {
      return [];
    }

    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data.serviceDetail)) {
      return data.serviceDetail;
    }

    return [];
  } catch (error) {
    console.error("Failed to fetch serviceDetail:", error);
    return []; 
  }
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
      languages: {
        "ar-SA": `/service/${service.id}`,
        "en-US": `/service/${service.id}?lang=en`,
      },
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
  const { id } = params; 
  const allServices = await getServiceDetail();

  
  const service = allServices.find((b) => b.id == id);


  if (!service) {
    notFound();
  }


  return <ServiceDetail service={service} />;
}


export async function generateStaticParams() {
  const services = await getServiceDetail();

  return services.map((service) => ({
    id: service.id.toString(),
  }));
}
