import AvailableJobs from "./AvailableJobs";
import axios from "axios";

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
        languages: {
          "ar-SA": "/careers",
          "en-US": "/careers",
        },
      },
      openGraph: {
        title: titleEn,
        description: descEn,
        // ... other openGraph properties
      },
      twitter: {
        title: titleEn,
        description: descEn,
        // ... other twitter properties
      },
    };
  }
  

export const revalidate = 60;

async function getJobsServer() {
  try {
    const { data } = await axios.get(
      "https://al-batel-team-data-default-rtdb.firebaseio.com/jobs.json",
      { withCredentials: false }
    );
    if (!data) return [];
    const list = Array.isArray(data) ? data : Object.values(data);
    return (list || []).filter(Boolean);
  } catch {
    return [];
  }
}

export default async function AvailableJobsPage() {
  const jobs = await getJobsServer();
  return <AvailableJobs jobs={jobs} />;
}


