const BASE_URL = "https://albatelcpa.com";
const FIREBASE_BASE = "https://al-batel-team-data-default-rtdb.firebaseio.com";

async function getServiceDetail() {
  try {
    const res = await fetch(`${FIREBASE_BASE}/serviceDetail.json`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.serviceDetail)) return data.serviceDetail;
    return [];
  } catch {
    return [];
  }
}

async function getBranches() {
  try {
    const res = await fetch(`${FIREBASE_BASE}/branches.json`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    if (!data) return [];
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.branches)) return data.branches;
    return [];
  } catch {
    return [];
  }
}

function langAlternates(path) {
  const url = `${BASE_URL}${path}`;
  return {
    languages: {
      "ar-SA": url,
      "en-US": url,
    },
  };
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
      alternates: langAlternates("/"),
    },
    {
      url: BASE_URL + "/about",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: langAlternates("/about"),
    },
    {
      url: BASE_URL + "/services",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: langAlternates("/services"),
    },
    {
      url: BASE_URL + "/ourTeam",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: langAlternates("/ourTeam"),
    },
    {
      url: BASE_URL + "/partners",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: langAlternates("/partners"),
    },
    {
      url: BASE_URL + "/contact",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: langAlternates("/contact"),
    },
    {
      url: BASE_URL + "/rfp",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: langAlternates("/rfp"),
    },
    {
      url: BASE_URL + "/careers",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: langAlternates("/careers"),
    },
    {
      url: BASE_URL + "/profileVedio",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: langAlternates("/profileVedio"),
    },
    {
      url: BASE_URL + "/publications",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: langAlternates("/publications"),
    },
    {
      url: BASE_URL + "/publications/football-economics",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: langAlternates("/publications/football-economics"),
      images: [BASE_URL + "/Books/Book1.JPG"],
    },
    {
      url: BASE_URL + "/publications/internal-audit",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: langAlternates("/publications/internal-audit"),
      images: [BASE_URL + "/Books/Book2.jfif"],
    },
    {
      url: BASE_URL + "/blog",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: langAlternates("/blog"),
    },
  ];

  const [services, branches] = await Promise.all([
    getServiceDetail(),
    getBranches(),
  ]);

  const serviceUrls = (services || []).map((s) => ({
    url: `${BASE_URL}/service/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    alternates: langAlternates(`/service/${s.id}`),
  }));

  const branchUrls = (branches || []).map((b) => ({
    url: `${BASE_URL}/branch/${b.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
    alternates: langAlternates(`/branch/${b.id}`),
  }));

  return [...staticPages, ...serviceUrls, ...branchUrls];
}
