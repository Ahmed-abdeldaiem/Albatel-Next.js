

import Vedio from "./Video";


// Generate metadata for SEO
export async function generateMetadata() {

  const titleAr = "شاهد الفيديو التعريفي | الباتل وشركاؤه للاستشارات المهنية";
const descAr = "تعرّف على شركة الباتل وشركاؤه وخدماتنا الاستشارية المتكاملة من خلال هذا الفيديو التعريفي. اكتشف كيف يمكننا مساعدتك على تحقيق أهدافك.";
const titleEn = "Our Introductory Video | Al-Batel & Co. Professional Services";
const descEn = "Learn about Al-Batel & Co. and our integrated consulting services through this introductory video. Discover how we can help you achieve your goals.";

  
  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/profileVedio",
      languages: {
        "ar-SA": "/profileVedio",
        "en-US": "/profileVedio",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: "/profileVedio",
      type: "website",
      images: [
        {
          url: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/logo.jpg",
          width: 1200,
          height: 630,
          alt: "ALBatel & Co Professional Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleEn,
      description: descEn,
      images: ["https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/logo.jpg"],
    },
  };
}


export default function ContactPage() {
  return (
    <div>
      <Vedio />
    </div>
  );
}

