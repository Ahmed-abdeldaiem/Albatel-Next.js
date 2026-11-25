import { notFound } from "next/navigation";
import TeamMember from "./TeamMember";
import { getFirebaseNode, toList, requireList } from "@/lib/firebase";

// Prebuilt at deploy time and refreshed once a day. A member added later is
// still found on first visit (dynamicParams defaults to true), and a Vercel
// Redeploy refreshes every profile immediately.
export const revalidate = 86400;

export async function generateStaticParams() {
  // requireList fails the build if team.json is unexpectedly empty, so a bad
  // upload can never replace the live profiles with 404s.
  const team = requireList(await getFirebaseNode("team"), "team");
  return team
    .filter((p) => p.id != null && String(p.id).trim() !== "")
    .map((p) => ({ id: String(p.id) }));
}

const LOGO_OG = {
  url: "https://www.albatelcpa.com/BatelLogo1.png",
  width: 800,
  height: 600,
  alt: "الباتل محاسبون ومراجعون قانونيون logo",
  type: "image/png",
};

// Returns null only when the member really is not in team.json. Network or
// Firebase errors are thrown (see getFirebaseNode), so they never turn a real
// profile into a cached 404.
async function getPerson(id) {
  const team = toList(await getFirebaseNode("team"));
  return team.find((p) => String(p.id) === String(id)) || null;
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
