import HomeContent from "./HomeContent";

const BASE_URL = "https://al-batel-team-data-default-rtdb.firebaseio.com";

async function getBranches() {
  try {
    const response = await fetch(`${BASE_URL}/branches.json`, {
      next: { revalidate: 300 },
    });
    if (!response.ok) return [];
    const data = await response.json();

    if (!data) return [];
    if (Array.isArray(data)) return data.filter(Boolean);
    if (Array.isArray(data.branches)) return data.branches.filter(Boolean);
    return [];
  } catch (error) {
    console.error("Failed to fetch branches:", error);
    return [];
  }
}

// Revalidate branches every 5 minutes (ISR)
export const revalidate = 300;

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
