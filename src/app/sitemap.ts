import { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog-posts";

export const dynamic = "force-static";

const BASE_URL = "https://rickvianen.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE_URL}/over-rick-vianen`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/programma`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE_URL}/prijs`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/intake`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/intake/booking`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/challenge`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE_URL}/veelgestelde-vragen`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE_URL}/wachtlijst`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...blogPages];
}
