import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllResearchTags, getResearchPostsMeta } from "@/services/research.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  return [
    { url: baseUrl, priority: 1, lastModified: new Date() },
    {
      url: `${baseUrl}research`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}team`,
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}work`,
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}services`,
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}contact`,
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}privacy`,
      priority: 0.1,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}terms`,
      priority: 0.1,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}faq`,
      priority: 0.1,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}about`,
      priority: 0.4,
      lastModified: new Date(),
    },
    ...(await generateResearchPostsSitemapObjects()).map((post) => ({
      url: `${baseUrl}research/${post.id}`,
      lastModified: new Date(post.date),
      priority: 0.5,
    })),
    // ...(await generateBlogAuthorsSitemapObjects()).map((author) => ({
    //   url: `${baseUrl}author/${author.slug}`,
    //   lastModified: new Date(author._updatedAt),
    //   priority: 0.4,
    // })),
    ...(await generateResearchTagsSitemapObjects()).map((tag) => ({
      url: `${baseUrl}research/tag/${tag}`,
      priority: 0.2,
    })),
  ];
}

const generateResearchPostsSitemapObjects = async () => {
  const postData = (await getResearchPostsMeta())!;
  return postData;
};
// const generateBlogAuthorsSitemapObjects = async () => {
//   const data = await getAuthors();
//   return data;
// };
const generateResearchTagsSitemapObjects = async () => {
  const data = (await getAllResearchTags())!;
  return data;
};
