

import TeamPage2 from "./TeamPage2";

import { getFirebaseNode, toList } from "@/lib/firebase";

// Team list rarely changes: refresh once a day (ISR).
export const revalidate = 86400;

// Firebase errors are thrown, so a failed refresh keeps the last good page.
async function getTeamMembersServer() {
  return toList(await getFirebaseNode("TeamMember"));
}


// Generate metadata for SEO
export async function generateMetadata() {

const titleAr = "فريق الخبراء | الباتل وشركاؤه للاستشارات المهنية";
const descAr = "تعرف على فريقنا من المحاسبين والمستشارين المعتمدين. خبراتنا المتنوعة وشهاداتنا المهنية هي ضمانك للحصول على خدمة استثنائية.";
const titleEn = "Our Expert Team | Al-Batel & Co. Professional Services";
const descEn = "Meet our team of certified accountants and consultants. Our diverse expertise and professional certifications are your guarantee of exceptional service.";

  return {
    title: titleAr,
    description: descAr,
    alternates: {
      canonical: "/ourTeam",
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: "https://www.albatelcpa.com/ourTeam",
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


export default async function ContactPage() {
  const employees = await getTeamMembersServer();
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/team.png"
        fetchPriority="high"
      />
      <div>
        <TeamPage2 employees={employees} />
      </div>
    </>
  );
}

