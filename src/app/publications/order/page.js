import OrderForm from "./OrderForm";

const SITE_URL = "https://www.albatelcpa.com";

export async function generateMetadata() {
  const titleAr = "طلب شراء كتاب | مؤلفات الباتل";
  const descAr =
    "اطلب نسختك من إصدارات الباتل — موسوعة اقتصاديات كرة القدم، ومرجع مراجعة الرقابة الداخلية والامتثال. يتواصل فريقنا معك خلال 24 ساعة لتأكيد الطلب.";
  const titleEn = "Order a Book | Al-Batel Publications";
  const descEn =
    "Order your copy of Al-Batel publications — the Football Economics encyclopedia and the Internal Control Audit reference. Our team will contact you within 24 hours to confirm.";

  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/publications/order",
      languages: {
        "ar-SA": "/publications/order",
        "en-US": "/publications/order",
      },
    },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: `${SITE_URL}/publications/order`,
      type: "website",
    },
  };
}

export default function OrderPage() {
  return <OrderForm />;
}
