import BlogContent from "./BlogContent";

const SITE_URL = "https://www.albatelcpa.com";
const BLOG_URL = `${SITE_URL}/blog`;

const BLOG_POSTS = [
  {
    slug: "vat-compliance-saudi-arabia",
    title: {
      ar: "الالتزام بضريبة القيمة المضافة في السعودية: أهم النقاط العملية للشركات",
      en: "VAT Compliance in Saudi Arabia: Practical Points for Companies",
    },
    excerpt: {
      ar: "دليل مبسط حول التسجيل، الفوترة الإلكترونية، والإقرارات الدورية لتقليل المخاطر الضريبية وتحسين الامتثال.",
      en: "A practical guide for registration, e-invoicing, and periodic returns to reduce tax risk and improve compliance.",
    },
    category: { ar: "الضرائب", en: "Tax" },
    datePublished: "2026-01-15",
    dateModified: "2026-01-15",
    readingTime: { ar: "6 دقائق", en: "6 min" },
  },
  {
    slug: "financial-reporting-best-practices",
    title: {
      ar: "أفضل ممارسات إعداد التقارير المالية للإدارة واتخاذ القرار",
      en: "Best Practices for Financial Reporting and Better Decision-Making",
    },
    excerpt: {
      ar: "كيف تبني تقارير مالية واضحة ودقيقة تساعد الإدارة على قراءة الأداء وتحسين الربحية والتدفقات النقدية.",
      en: "How to build clear and accurate financial reports that improve performance visibility, profitability, and cash flow.",
    },
    category: { ar: "المحاسبة", en: "Accounting" },
    datePublished: "2026-02-10",
    dateModified: "2026-02-10",
    readingTime: { ar: "5 دقائق", en: "5 min" },
  },
  {
    slug: "internal-audit-readiness",
    title: {
      ar: "جاهزية المراجعة الداخلية: خطوات عملية قبل موسم التدقيق",
      en: "Internal Audit Readiness: Practical Steps Before Audit Season",
    },
    excerpt: {
      ar: "قائمة تحقق عملية تساعد الشركات على رفع الجاهزية وتقليل الملاحظات وتحسين جودة بيئة الرقابة الداخلية.",
      en: "A practical checklist to increase readiness, reduce observations, and strengthen internal control quality.",
    },
    category: { ar: "المراجعة", en: "Audit" },
    datePublished: "2026-03-05",
    dateModified: "2026-03-05",
    readingTime: { ar: "7 دقائق", en: "7 min" },
  },
  {
    slug: "zakat-income-tax-planning",
    title: {
      ar: "التخطيط للزكاة وضريبة الدخل: كيف تقلل المخاطر وتضمن الالتزام",
      en: "Zakat and Income Tax Planning: How to Reduce Risk and Ensure Compliance",
    },
    excerpt: {
      ar: "إطار عملي لمواءمة البيانات المالية مع متطلبات الزكاة وضريبة الدخل، وتحسين الجاهزية قبل الفحص.",
      en: "A practical framework to align financial records with zakat and income tax requirements and improve audit readiness.",
    },
    category: { ar: "الزكاة والضريبة", en: "Zakat & Tax" },
    datePublished: "2026-03-22",
    dateModified: "2026-03-22",
    readingTime: { ar: "6 دقائق", en: "6 min" },
  },
  {
    slug: "cash-flow-management-for-smes",
    title: {
      ar: "إدارة التدفقات النقدية للمنشآت الصغيرة والمتوسطة: خطوات تحافظ على الاستقرار",
      en: "Cash Flow Management for SMEs: Steps to Maintain Financial Stability",
    },
    excerpt: {
      ar: "ممارسات تطبيقية لتحسين دورة النقد، إدارة الالتزامات، ورفع كفاءة السيولة في بيئة الأعمال المتغيرة.",
      en: "Actionable practices to optimize cash cycles, manage liabilities, and strengthen liquidity in changing markets.",
    },
    category: { ar: "الاستشارات المالية", en: "Financial Advisory" },
    datePublished: "2026-04-02",
    dateModified: "2026-04-02",
    readingTime: { ar: "5 دقائق", en: "5 min" },
  },
];

export const revalidate = 3600;

export async function generateMetadata() {
  const titleAr = "المدونة | الباتل وشركاؤه للاستشارات المهنية";
  const descAr =
    "مقالات مهنية من خبراء الباتل في المحاسبة، المراجعة، الزكاة والضرائب، والاستشارات المالية لدعم نمو أعمالك.";
  const titleEn = "Blog | Al-Batel & Co. Professional Insights";
  const descEn =
    "Professional insights from Al-Batel experts in accounting, audit, tax, and financial advisory for business growth.";

  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/blog",
      languages: {
        "ar-SA": "/blog",
        "en-US": "/blog",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: BLOG_URL,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/BatelLogo1.png`,
          width: 800,
          height: 600,
          alt: "Al-Batel & Co logo",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titleEn,
      description: descEn,
      images: [`${SITE_URL}/BatelLogo1.png`],
    },
  };
}

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "مدونة الباتل",
    alternateName: "Al-Batel Blog",
    url: BLOG_URL,
    inLanguage: ["ar-SA", "en-US"],
    publisher: {
      "@type": "Organization",
      name: "الباتل محاسبون ومراجعون قانونيون",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/BatelLogo1.png`,
      },
    },
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title.ar,
      alternativeHeadline: post.title.en,
      description: post.excerpt.ar,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      mainEntityOfPage: `${BLOG_URL}#${post.slug}`,
      author: {
        "@type": "Organization",
        name: "الباتل وشركاؤه",
      },
      publisher: {
        "@type": "Organization",
        name: "الباتل محاسبون ومراجعون قانونيون",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/BatelLogo1.png`,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogContent posts={BLOG_POSTS} />
    </>
  );
}

