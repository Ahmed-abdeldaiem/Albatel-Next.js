import TeamMember from "./TeamMember";

export const dynamic = "force-dynamic";

const LOGO_OG = {
  url: "https://www.albatelcpa.com/BatelLogo1.png",
  width: 800,
  height: 600,
  alt: "الباتل محاسبون ومراجعون قانونيون logo",
  type: "image/png",
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const titleAr = "عضو الفريق | الباتل وشركاؤه للاستشارات المهنية";
  const titleEn = "Team Member | Al-Batel & Co. Professional Services";
  const descAr = "تعرف على فريق الخبراء في الباتل وشركاؤه للاستشارات المهنية.";
  const descEn = "Meet the expert team at Al-Batel & Co. Professional Services.";
  return {
    title: titleAr,
    description: descAr,
    alternates: { canonical: `/TeamMember/${id || ""}` },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: `https://www.albatelcpa.com/TeamMember/${id || ""}`,
      type: "profile",
      images: [LOGO_OG],
    },
    twitter: {
      card: "summary_large_image",
      title: titleEn,
      description: descEn,
      images: ["https://www.albatelcpa.com/BatelLogo1.png"],
    },
  };
}

export default function TeamMemberPage() {
  return <TeamMember />;
}


