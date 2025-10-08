import About from "./about";

// Generate metadata for SEO
export async function generateMetadata() {

  const titleAr = "عن الشركة | الباتل وشركاؤه للاستشارات المهنية";
const descAr = "منذ 2006، نقدم خبراتنا الاستشارية المعتمدة من SOCPA. تعرّف على تاريخنا، هيكلنا التنظيمي، وشبكة فروعنا داخل وخارج المملكة.";
const titleEn = "About Us | Al-Batel & Co. Professional Services";
const descEn = "Since 2006, we have been providing SOCPA-certified consulting expertise. Learn about our history, organizational structure, and network of branches.";


  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/about",
      languages: {
        "ar-SA": "/about",
        "en-US": "/about",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: "/about",
      type: "website",
      images: [
        {
          url: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D9%86%20%D9%86%D8%AD%D9%864.jpeg",
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
      images: ["https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D9%86%20%D9%86%D8%AD%D9%864.jpeg"],
    },
  };
}


export default function AboutPage() {
  return (
    <div>
      <About />
    </div>
  );
}

