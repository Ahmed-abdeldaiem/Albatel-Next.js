import { notFound } from "next/navigation";
import TeamMember from "./TeamMember";

const BASE_URL = "https://al-batel-team-data-default-rtdb.firebaseio.com";

export const revalidate = 3600;

const LOGO_OG = {
  url: "https://www.albatelcpa.com/BatelLogo1.png",
  width: 800,
  height: 600,
  alt: "الباتل محاسبون ومراجعون قانونيون logo",
  type: "image/png",
};

async function getPerson(id) {
  try {
    const res = await fetch(`${BASE_URL}/team.json`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const team = await res.json();
    if (!Array.isArray(team)) return null;
    return team.find((p) => p && String(p.id) === String(id)) || null;
  } catch (error) {
    console.error("Failed to fetch team:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const person = await getPerson(id);

  if (!person) {
    return {
      title: "عضو الفريق غير موجود | الباتل",
      robots: { index: false, follow: false },
    };
  }

  const nameAr = person.name?.ar || "عضو الفريق";
  const nameEn = person.name?.en || nameAr;
  const jobAr = person.job?.ar || "";
  const jobEn = person.job?.en || jobAr;
  const titleAr = `${nameAr}${jobAr ? ` - ${jobAr}` : ""} | الباتل محاسبون ومراجعون قانونيون`;
  const titleEn = `${nameEn}${jobEn ? ` - ${jobEn}` : ""} | Al-Batel CPA`;
  const descAr = `تعرف على ${nameAr}${jobAr ? `، ${jobAr}` : ""} في الباتل محاسبون ومراجعون قانونيون.`;
  const descEn = `Meet ${nameEn}${jobEn ? `, ${jobEn}` : ""} at Al-Batel CPA.`;
  const image = person.image ? { url: person.image, alt: nameAr } : LOGO_OG;

  return {
    title: titleAr,
    description: descAr,
    alternates: { canonical: `/TeamMember/${person.id}` },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: `https://www.albatelcpa.com/TeamMember/${person.id}`,
      type: "profile",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: titleEn,
      description: descEn,
      images: [image.url],
    },
  };
}

export default async function TeamMemberPage({ params }) {
  const { id } = await params;
  const person = await getPerson(id);

  if (!person) {
    notFound();
  }

  return <TeamMember />;
}
