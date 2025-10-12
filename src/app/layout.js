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
  robots: "index, follow",
  // Favicons and Apple Touch Icons
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.ico" }, // Shortcut icon
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
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
        url: "/BatelLogo1.png",
        width: 800,
        height: 600,
        alt: "الباتل محاسبون ومراجعون قانونيون logo",
      },
    ],
    locale: "ar_AR",
    alternates: {
      canonical: 'https://albatelcpa.com/',
      languages: {
        'en-US': 'https://albatelcpa.com/',
        'ar-AR': 'https://albatelcpa.com/',
      },
    },
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased min-h-screen flex flex-col`}
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
