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
      url: "/contact",
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
      <ContactUs />
    </div>
  );
}

