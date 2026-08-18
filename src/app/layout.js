import "./globals.css";
import { primaryFont } from "./lib/fonts";
import LanguageContextProvider from "../app/contexts/langContext.jsx";
import PartnersContextProvider from "./contexts/PartnersContext.jsx";
import TeamContextProvider from "./contexts/TeamContext.jsx";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import PDFModal from "./components/PDFModal/PDFModal";
import ImageProtection from "./components/ImageProtection/ImageProtection";
import SocialBar from "./components/SocialBar/SocialBar";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

export const metadata = {
  // Primary Meta Tags
  metadataBase: new URL('https://albatelcpa.com/'),
  title: "الباتل محاسبون ومراجعون قانونيون",
  description:
    "شركة الباتل وشركاؤه - محاسبون ومراجعون قانونيون في الرياض منذ 2006. حلول متكاملة في المحاسبة، التدقيق، الاستشارات الضريبية والمالية والضرائب الدولية، نخدم جميع أنحاء المملكة بسلسلة من ٩  فروع",
  keywords: [
    "الباتل محاسبون ومراجعون قانونيون",
    "محاسبون ومراجعون قانونيون السعودية",
    "مكتب محاسبة ومراجعة الرياض",
    "محاسبون قانونيون الرياض",
    "محاسبون قانونيون جدة",
    "محاسبون قانونيون المدينة المنورة",
    "محاسبون قانونيون الخبر",
    "محاسبون قانونيون حفر الباطن",
    "تدقيق الحسابات",
    "استشارات مالية وضريبية",
    "ضريبة القيمة المضافة السعودية",
    "الزكاة وضريبة الدخل",
    "إعداد القوائم المالية",
    "المراجعة الداخلية والخارجية",
    "دراسات جدوى",
    "محاسب قانوني معتمد SOCPA",
    "CPA السعودية"
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
    phoneNumbers: ["+966550554262"],
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
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NPZHPK8P');`,
          }}
        />
        {/* End Google Tag Manager */}

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
                "description": "شركة الباتل وشركاؤه - محاسبون ومراجعون قانونيون في الرياض منذ 2006. حلول متكاملة في المحاسبة، التدقيق، الاستشارات الضريبية والمالية. معتمدون من SOCPA.",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "SA",
                  "addressLocality": "الرياض",
                  "addressRegion": "منطقة الرياض"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+966550554262",
                  "contactType": "customer service",
                  "availableLanguage": ["Arabic", "English"]
                },
                "sameAs": [
                  "https://www.linkedin.com/company/albatel-cpa/",
                  "https://www.instagram.com/albatel_cpa/",
                  "https://x.com/albatel_cpa",
                  "https://www.facebook.com/profile.php?id=61582443590665",
                  "https://www.youtube.com/@Albatel_CPA",
                  "https://www.tiktok.com/@albatel_cpa"
                ],
                "foundingDate": "2006",
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
        className={`${primaryFont.variable} ${primaryFont.className} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning={true}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NPZHPK8P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      
         <LanguageContextProvider>
         <SocialBar />
         <ImageProtection />
         <PDFModal />
         <PartnersContextProvider>
         <TeamContextProvider>
        
         <NavBar />
         <main className="flex-1 ">
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
