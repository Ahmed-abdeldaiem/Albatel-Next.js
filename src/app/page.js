import HomeContent from "./HomeContent";

import { getFirebaseNode, toList } from "@/lib/firebase";

// Firebase errors are thrown, so a failed refresh keeps the last good page.
async function getBranches() {
  return toList(await getFirebaseNode("branches"));
}

export const metadata = {
  alternates: { canonical: "/" },
};

// Branches rarely change: refresh once a day (ISR).
export const revalidate = 86400;

export default async function Home() {
  const branches = await getBranches();

  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/homeSlide1.jpeg"
        fetchPriority="high"
      />
      <HomeContent branches={branches} />
    </>
  );
}
