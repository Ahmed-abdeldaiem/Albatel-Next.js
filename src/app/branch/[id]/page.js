import { notFound } from 'next/navigation';
import BranchDetails from './BranchDetails';

import { getFirebaseNode, toList, requireList } from '@/lib/firebase';

// Prebuilt at deploy time, refreshed once a day from Firebase.
export const revalidate = 86400;

// Firebase errors are thrown (not swallowed), so a failed fetch keeps the last
// good page instead of caching a 404.
async function getBranches() {
  return toList(await getFirebaseNode('branches'));
}


const LOGO_OG = {
  url: "https://www.albatelcpa.com/BatelLogo1.png",
  width: 800,
  height: 600,
  alt: "الباتل محاسبون ومراجعون قانونيون logo",
  type: "image/png",
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const branches = await getBranches();
  const branch = branches.find((b) => b.id == id);
  if (!branch) {
    return {
      title: "الفرع غير موجود | الباتل",
      description: "الفرع الذي تبحث عنه غير متاح حالياً.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  const titleAr = branch.name?.ar || branch.name || "فرع الباتل";
  const titleEn = branch.name?.en || branch.name || titleAr;
  const descAr = branch.description?.ar || branch.address?.ar || "فرع الباتل وشركاؤه للاستشارات المهنية";
  const descEn = branch.description?.en || branch.address?.en || descAr;
  return {
    title: titleAr,
    description: descAr,
    alternates: { canonical: `/branch/${branch.id}` },
    openGraph: {
      title: titleEn,
      description: descEn,
      url: `https://www.albatelcpa.com/branch/${branch.id}`,
      type: "website",
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


export default async function BranchPage({ params }) {
  const { id } = await params;
  const allBranches = await getBranches();

  
  const branch = allBranches.find((b) => b.id == id);


  if (!branch) {
    notFound();
  }


  return <BranchDetails branch={branch} />;
}


//  (Static Site Generation - SSG).
export async function generateStaticParams() {
  // Fails the build if the node is unexpectedly empty, so the live pages stay up.
  const branches = requireList(await getFirebaseNode('branches'), 'branches');

  return branches.map((branch) => ({
    id: branch.id.toString(),
  }));
}
