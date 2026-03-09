import ContactUs from "./ContactUs";


// Generate metadata for SEO
export async function generateMetadata() {

  const titleAr = "تواصل معنا | الباتل وشركاؤه للاستشارات المهنية";
const descAr = "هل لديك استفسار؟ تواصل مع فريق خبراء الباتل وشركاؤه. نحن هنا لمساعدتك في جميع احتياجاتك المالية والاستشارية.";
const titleEn = "Contact Us | Al-Batel & Co. Professional Services";
const descEn = "Have a question? Get in touch with the expert team at Al-Batel & Co. We're here to assist with all your financial and consulting needs.";


  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/contact",
      languages: {
        "ar-SA": "/contact",
        "en-US": "/contact",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: "https://www.albatelcpa.com/contact",
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
      <ContactUs />
    </div>
  );
}

