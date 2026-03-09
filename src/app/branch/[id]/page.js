import axios from 'axios';
import { notFound } from 'next/navigation';
import BranchDetails from './BranchDetails';

const BASE_URL = 'https://al-batel-team-data-default-rtdb.firebaseio.com/';


async function getBranches( ) {
  try {
    const response = await axios.get(`${BASE_URL}/branches.json`);
    const data = response.data;

    if (!data) {
      return [];
    }

    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data.branches)) {
      return data.branches;
    }

    return [];
  } catch (error) {
    console.error("Failed to fetch branches:", error);
    return []; 
  }
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
    return { title: "الفرع غير موجود | الباتل" };
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
  const { id } = params; 
  const allBranches = await getBranches();

  
  const branch = allBranches.find((b) => b.id == id);


  if (!branch) {
    notFound();
  }


  return <BranchDetails branch={branch} />;
}


//  (Static Site Generation - SSG).
export async function generateStaticParams() {
  const branches = await getBranches();

  return branches.map((branch) => ({
    id: branch.id.toString(),
  }));
}
