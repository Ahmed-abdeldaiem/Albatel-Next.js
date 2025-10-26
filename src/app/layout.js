import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageContextProvider from "../app/contexts/langContext.jsx";
import PartnersContextProvider from "./contexts/PartnersContext.jsx";
import TeamContextProvider from "./contexts/TeamContext.jsx";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PDFModal from "./components/PDFModal/PDFModal";
import VedioModal from "./components/VedioModal/VedioModal";
import ImageProtection from "./components/ImageProtection/ImageProtection";
import SocialBar from "./components/SocialBar/SocialBar";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Primary Meta Tags
  metadataBase: new URL('https://albatelcpa.com/'),
  title: "الباتل محاسبون ومراجعون قانونيون",
  description:
    "شركة الباتل تقدم خدمات المحاسبة، تدقيق الحسابات، الاستشارات المالية والضريبية، وضريبة القيمة المضافة بأعلى معايير الجودة، لدى الشركة أكثر من خمسين مراجع حسابات مؤهلين علميا وأصحاب خبرة واسعة في جميع الجوانب المالية، واستطاعت الشركة من خلالهم تقديم خدماتها المهنية في مجالات مسك الحسابات وإعداد القوائم المالية والمراجعة الداخلية والخارجية والاستشارات المالية للآلاف العملاء، كما أن الشركة حاصلة على تراخيص لتقديم خدمات مراجعة الحسابات وتدقيقها، والاستشارات المالية، وتقديم خدمات المحاسبة، والاستشارات الإدارية، وإعداد كشوف الذمة المالية للضرائب، والاستشارات المحاسبية ووضع السياسات والإجراءات، والاستشارات في مجال الزكاة وضريبة الدخل، وخدمات ضريبة القيمة المضافة، ويعمل معنا فريق مؤهل منهم العديد حاصلون على زمالة الهيئة السعودية للمراجعين والمحاسبين SOCPA وشهادة معايير المحاسبة الدولية في القطاع العام IPSAS، وشهادة المحاسب القانوني المعتمد CPA، وشهادة المراجع الداخلي المعتمد CIA، ولديهم خبرة مهنية واسعة في مجال الاستشارات المحاسبية والمالية كما نتميز بوجود إدارة متخصصة في أعمال الجودة والالتزام.",
  keywords: [
    "محاسبون ومراجعون الرياض",
    "محاسبون ومراجعون قانونيون",
    "محاسبون ومراجعون",
    "مراجعون قانونيون",
    "مراجعون قانونيون الرياض",
    "محاسبون قانونيون",
    "محاسبون قانونيون الرياض",
    "مكتب محاسبة الرياض",
    "مكتب محاسبة",
    "مكتب تدقيق",
    "مكاتب تدقيق الرياض",
    "مكتب محاسبة ومراجعة",
    "مكتب محاسبة ومراجعة الرياض",
    "استشارات إدارية",
    "استشارات إدارية الرياض",
    "مكتب استشارات إدارية",
    "استشارات محاسبية",
    "مكتب استشارات محاسبية",
    "استشارات محاسبية الرياض",
    "استشارات مالية",
    "استشارات مالية الرياض",
    "مكتب استشارات مالية",
    "استشارات ضريبية",
    "استشارات ضريبية الرياض",
    "مكتب استشارات ضريبية",
    "محاسبون",
    "محاسبون الرياض",
    "مراجعة",
    "ضرائب",
    "مالية",
    "محاسبة",
    "قوائم مالية",
    "تدقيق الحسابات",
    "تدقيق الحسابات الرياض",
    "مكتب تدقيق الحسابات",
    "الزكاة",
    "ضريبة القيمة المضافة",
    "تدقيق",
    "جودة",
    "ادارة مخاطر",
    "دراسات جدوى",
    "محاسب قانوني",
    "محاسب قانوني الرياض",
    "محاسب قانوني معتمد",
    "محاسب قانوني معتمد الرياض",
    "مراجعة خارجية",
    "مكتب مراجعة خارجية",
    "مراجعة داخلية",
    "مكتب مراجعة داخلية",
    "اعداد القوائم المالية",
    "اعداد القوائم المالية الرياض",
    "مكتب اعداد القوائم المالية"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Favicons and Apple Touch Icons
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any" }, // Shortcut icon
      { url: "/favicon/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/favicon.svg",
        color: "#000000"
      }
    ]
  },
  manifest: "/favicon/site.webmanifest",
  // Open Graph (OG) Meta Tags for social media sharing
  openGraph: {
    title: "الباتل محاسبون ومراجعون قانونيون",
    description: "شركة الباتل تقدم خدمات المحاسبة، التدقيق، والاستشارات المالية والضريبية.",
    url: "https://albatelcpa.com/",
    siteName: "الباتل محاسبون ومراجعون قانونيون",
    images: [
      {
        url: "https://albatelcpa.com/BatelLogo1.png",
        width: 800,
        height: 600,
        alt: "الباتل محاسبون ومراجعون قانونيون logo",
        type: "image/png",
      },
    ],
    locale: "ar_SA",
    type: "website",
    countryName: "المملكة العربية السعودية",
    emails: ["info@albatelcpa.com"],
    phoneNumbers: ["+966-11-123-4567"],
    alternateLocale: ["en_US"],
  },
  
  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "الباتل محاسبون ومراجعون قانونيون",
    description: "شركة الباتل تقدم خدمات المحاسبة، التدقيق، والاستشارات المالية والضريبية.",
    images: ["https://albatelcpa.com/BatelLogo1.png"],
    creator: "@albatelcpa",
    site: "@albatelcpa",
  },
  
  // Additional Meta Tags
  alternates: {
    canonical: 'https://albatelcpa.com/',
    languages: {
      'ar-SA': 'https://albatelcpa.com/',
      'en-US': 'https://albatelcpa.com/',
    },
  },
  
  // Verification
  verification: {
    google: "google69a49a7349cb352d",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="google69a49a7349cb352d" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="الباتل محاسبون ومراجعون قانونيون" />
        <meta name="publisher" content="الباتل محاسبون ومراجعون قانونيون" />
        <meta name="copyright" content="© 2025 الباتل محاسبون ومراجعون قانونيون. جميع الحقوق محفوظة." />
        <meta name="language" content="ar" />
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="الرياض" />
        <meta name="geo.position" content="24.7136;46.6753" />
        <meta name="ICBM" content="24.7136, 46.6753" />
        
        {/* Additional Open Graph Tags */}
        <meta property="og:site_name" content="الباتل محاسبون ومراجعون قانونيون" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="article:author" content="الباتل محاسبون ومراجعون قانونيون" />
        <meta property="article:publisher" content="https://albatelcpa.com" />
        
        {/* Twitter Card Additional Tags */}
        <meta name="twitter:site" content="@albatelcpa" />
        <meta name="twitter:creator" content="@albatelcpa" />
        
        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="الباتل محاسبون ومراجعون قانونيون" />
        
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "tw33it4lsm");
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "الباتل محاسبون ومراجعون قانونيون",
                "alternateName": "Al-Batel Accountants and Legal Auditors",
                "url": "https://albatelcpa.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://albatelcpa.com/BatelLogo1.png",
                  "width": 800,
                  "height": 600,
                  "caption": "الباتل محاسبون ومراجعون قانونيون logo"
                },
                "image": "https://albatelcpa.com/BatelLogo1.png",
                "description": "شركة الباتل تقدم خدمات المحاسبة، تدقيق الحسابات، الاستشارات المالية والضريبية، وضريبة القيمة المضافة بأعلى معايير الجودة، لدى الشركة أكثر من خمسين مراجع حسابات مؤهلين علميا وأصحاب خبرة واسعة في جميع الجوانب المالية",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "SA",
                  "addressLocality": "الرياض",
                  "addressRegion": "منطقة الرياض"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+966-11-123-4567",
                  "contactType": "customer service",
                  "availableLanguage": ["Arabic", "English"]
                },
                "sameAs": [
                  "https://albatelcpa.com"
                ],
                "foundingDate": "2010",
                "numberOfEmployees": "50+",
                "areaServed": {
                  "@type": "Country",
                  "name": "المملكة العربية السعودية"
                },
                "serviceType": [
                  "خدمات المحاسبة",
                  "تدقيق الحسابات", 
                  "الاستشارات المالية",
                  "الاستشارات الضريبية",
                  "ضريبة القيمة المضافة",
                  "المراجعة الداخلية",
                  "المراجعة الخارجية",
                  "إعداد القوائم المالية",
                  "الاستشارات الإدارية",
                  "خدمات ضريبة القيمة المضافة"
                ],
                "hasCredential": [
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "زمالة الهيئة السعودية للمراجعين والمحاسبين",
                    "credentialCategory": "SOCPA"
                  },
                  {
                    "@type": "EducationalOccupationalCredential", 
                    "name": "شهادة معايير المحاسبة الدولية في القطاع العام",
                    "credentialCategory": "IPSAS"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "شهادة المحاسب القانوني المعتمد",
                    "credentialCategory": "CPA"
                  },
                  {
                    "@type": "EducationalOccupationalCredential",
                    "name": "شهادة المراجع الداخلي المعتمد",
                    "credentialCategory": "CIA"
                  }
                ],
                "knowsAbout": [
                  "المحاسبة",
                  "تدقيق الحسابات",
                  "الاستشارات المالية",
                  "الاستشارات الضريبية",
                  "ضريبة القيمة المضافة",
                  "الزكاة",
                  "ضريبة الدخل",
                  "القوائم المالية",
                  "المراجعة الداخلية",
                  "المراجعة الخارجية"
                ],
                "makesOffer": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "خدمات المحاسبة",
                      "description": "مسك الحسابات وإعداد القوائم المالية"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "تدقيق الحسابات",
                      "description": "المراجعة الداخلية والخارجية للحسابات"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "الاستشارات المالية",
                      "description": "الاستشارات المحاسبية والمالية المتخصصة"
                    }
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "الباتل محاسبون ومراجعون قانونيون",
                "url": "https://albatelcpa.com",
                "description": "شركة الباتل تقدم خدمات المحاسبة، تدقيق الحسابات، الاستشارات المالية والضريبية",
                "publisher": {
                  "@type": "Organization",
                  "name": "الباتل محاسبون ومراجعون قانونيون",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://albatelcpa.com/BatelLogo1.png"
                  }
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://albatelcpa.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "الرئيسية",
                    "item": "https://albatelcpa.com"
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
      
         <SocialBar />
         <LanguageContextProvider>
         <ImageProtection />
         <PDFModal />
         <VedioModal />
         <PartnersContextProvider>
         <TeamContextProvider>
        
         <NavBar />
         <main className="flex-1 pt-10">
         {children}
         <SpeedInsights />
         </main>
         <Footer />
         </TeamContextProvider>
         </PartnersContextProvider>
         </LanguageContextProvider>
       
      </body>
    </html>
  );
}
