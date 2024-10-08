import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllTags, getAuthors, getPosts } from "@/sanity/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  return [
    { url: baseUrl, priority: 1, lastModified: new Date() },
    {
      url: `${baseUrl}post`,
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}about`,
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
      url: `${baseUrl}privacy-policy`,
      priority: 0.1,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}search`,
      priority: 0.4,
      lastModified: new Date(),
    },
    ...(await generateBlogPostsSitemapObjects()).map((post) => ({
      url: `${baseUrl}post/${post.slug}`,
      lastModified: new Date(post._updatedAt),
      priority: 0.5,
    })),
    ...(await generateBlogAuthorsSitemapObjects()).map((author) => ({
      url: `${baseUrl}author/${author.slug}`,
      lastModified: new Date(author._updatedAt),
      priority: 0.4,
    })),
    ...(await generateBlogTagsSitemapObjects()).map((tag) => ({
      url: `${baseUrl}tag/${tag}`,
      priority: 0.2,
    })),
  ];
}

const generateBlogPostsSitemapObjects = async () => {
  const postData = await getPosts();
  console.log(postData);
  return postData;
};
const generateBlogAuthorsSitemapObjects = async () => {
  const data = await getAuthors();
  return data;
};
const generateBlogTagsSitemapObjects = async () => {
  const data = await getAllTags();
  return data;
};
// https://roboto.studio/blog/ultimate-sanity-seo-best-practices