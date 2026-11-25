const BASE_URL = "https://www.albatelcpa.com";
import { getFirebaseNode, toList } from "@/lib/firebase";

// Regenerate the sitemap once a day (it only changes when pages are added).
export const revalidate = 86400;

// Firebase errors are thrown, so a failed refresh keeps the last good sitemap
// instead of publishing one with missing URLs.
async function getServiceDetail() {
  return toList(await getFirebaseNode("serviceDetail"));
}

async function getTeam() {
  return toList(await getFirebaseNode("team"));
}

async function getBranches() {
  return toList(await getFirebaseNode("branches"));
}


export default async function sitemap() {
  const now = new Date();
  const staticPages = [
    {
      url: BASE_URL + "/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [BASE_URL + "/BatelLogo1.png"],
    },
    {
      url: BASE_URL + "/audit-season",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
      images: [BASE_URL + "/audit-season/og-audit-season.jpg"],
    },
    {
      url: BASE_URL + "/about",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: BASE_URL + "/services",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: BASE_URL + "/ourTeam",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: BASE_URL + "/partners",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: BASE_URL + "/contact",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: BASE_URL + "/rfp",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: BASE_URL + "/careers",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: BASE_URL + "/profileVedio",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: BASE_URL + "/publications",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: BASE_URL + "/publications/football-economics",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      images: [BASE_URL + "/Books/Book1-og.jpg"],
    },
    {
      url: BASE_URL + "/publications/internal-audit",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [BASE_URL + "/Books/Book2.jfif"],
    },
    {
      url: BASE_URL + "/publications/sports-corruption-fraud",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [BASE_URL + "/Books/book3.JPG"],
    },
    {
      url: BASE_URL + "/blog",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const [services, branches, team] = await Promise.all([
    getServiceDetail(),
    getBranches(),
    getTeam(),
  ]);

  const serviceUrls = (services || []).map((s) => ({
    url: `${BASE_URL}/service/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const branchUrls = (branches || []).map((b) => ({
    url: `${BASE_URL}/branch/${b.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const teamUrls = team.map((p) => ({
    url: `${BASE_URL}/TeamMember/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticPages, ...serviceUrls, ...branchUrls, ...teamUrls];
}
