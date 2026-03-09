import About from "./About";


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
      url: "https://www.albatelcpa.com/about",
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


export default function AboutPage() {
  return (
    <div>
      <About />
    </div>
  );
}

