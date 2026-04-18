import axios from "axios";
import HomeContent from "./HomeContent";

const BASE_URL = "https://al-batel-team-data-default-rtdb.firebaseio.com";

async function getBranches() {
  try {
    const response = await axios.get(`${BASE_URL}/branches.json`);
    const data = response.data;

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

  return <HomeContent branches={branches} />;
}
