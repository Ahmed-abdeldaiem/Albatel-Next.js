import AvailableJobs from "./AvailableJobs";
import { getFirebaseNode, toList } from "@/lib/firebase";

// Generate metadata for SEO
export async function generateMetadata() {
    const titleAr = "انضم إلى فريقنا | وظائف شاغرة في الباتل وشركاؤه";
    const descAr = "هل تبحث عن فرصة للنمو في بيئة عمل احترافية؟ اكتشف الوظائف الشاغرة في الباتل وشركاؤه وكن جزءاً من قصة نجاحنا.";
    const titleEn = "Join Our Team | Careers at Al-Batel & Co.";
    const descEn = "Looking for an opportunity to grow in a professional environment? Explore career openings at Al-Batel & Co. and become part of our success story.";
  
    return {
      title: titleAr, // Default to Arabic
      description: descAr,
      alternates: {
        canonical: "/careers", // Using "/careers" is more standard than "/AvailableJobs"
      },
      openGraph: {
        title: titleEn,
        description: descEn,
        url: "https://www.albatelcpa.com/careers",
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
  

// Job posts are time-sensitive: refresh hourly (ISR).
export const revalidate = 3600;

// Empty node (null) means no open jobs. Firebase errors are thrown, so a
// failed refresh keeps the last good page.
async function getJobsServer() {
  return toList(await getFirebaseNode("jobs"));
}

export default async function AvailableJobsPage() {
  const jobs = await getJobsServer();
  return <AvailableJobs jobs={jobs} />;
}


