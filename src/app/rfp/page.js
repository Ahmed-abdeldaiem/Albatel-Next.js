
import Rfp from "./Rfp";


// Generate metadata for SEO
export async function generateMetadata() {
  const titleAr = "طلب عرض سعر | الباتل وشركاؤه للاستشارات المهنية";
  const descAr = "اطلب عرض سعر احترافي من خبراء الباتل وشركاؤه. تواصل معنا الآن وسيقوم فريقنا بالرد عليك مباشرة";
  const titleEn = "Request for Proposal (RFP) | Al-Batel & Co. Professional Services";
  const descEn = "Request a professional RFP from the experts at Al-Batel & Co. Contact us now and our team will respond directly";

  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/rfp",
      languages: {
        "ar-SA": "/rfp",
        "en-US": "/rfp",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: "https://www.albatelcpa.com/rfp",
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


export default function ContactPage() {
  return (
    <div>
      <Rfp />
    </div>
  );
}

