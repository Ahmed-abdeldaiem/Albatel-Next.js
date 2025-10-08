

import TeamPage2 from "./TeamPage2";

export const revalidate = 60;

async function getTeamMembersServer() {
  const res = await fetch(
    "https://al-batel-team-data-default-rtdb.firebaseio.com/TeamMember.json",
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return [];
  const data = await res.json();
  if (!data) return [];
  const list = Array.isArray(data) ? data : Object.values(data);
  return (list || []).filter(Boolean);
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
      languages: {
        "ar-SA": "/ourTeam",
        "en-US": "/ourTeam",
      },
    },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: "/ourTeam",
      type: "website",
      images: [
        {
          url: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/logo.jpg",
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
      images: ["https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/logo.jpg"],
    },
  };
}


export default async function ContactPage() {
  const employees = await getTeamMembersServer();
  return (
    <div>
      <TeamPage2 employees={employees} />
    </div>
  );
}

