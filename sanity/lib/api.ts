import {client, sanityFetch} from "@/sanity/lib/client";
import { IAuthor, IPost, IPostCategory } from "@/interfaces/sanity.interface";
import {
  getAllPostsQuery,
  getAllTagsQuery,
  getAuthorBlogsQuery,
  getAuthorBySlugQuery,
  getAuthorsQuery,
  getBlogPostsInCategoryQuery,
  getCategoriesQuery,
  getFeaturedPostsQuery,
  getPostBySlugQuery,
  getPostCommentsQuery,
  getPostsUnderTagQuery,
  searchPostsQuery,
  getPostMetadataQuery, CASE_STUDIES_QUERY
} from "./queries";
import {CASE_STUDIES_QUERYResult} from "@/sanity.types";

/*
 * ------POSTS------
 */

export const getPosts = async (): Promise<IPost[]> => {
  const response = await client.fetch(getAllPostsQuery);

  return response;
};

export const getPost = async (slug: string): Promise<IPost> => {
  const response = await client.fetch(getPostBySlugQuery, {
    slug,
  });

  return response;
};
export const getPostMetadata = async (slug: string): Promise<IPost> => {
  const response = await client.fetch(getPostMetadataQuery, {
    slug,
  });

  return response;
};

export const getFeaturedPosts = async (): Promise<IPost[]> => {
  const response = await client.fetch(getFeaturedPostsQuery);

  return response;
};

export const getBlogsUnderTag = async (postTag: string): Promise<IPost[]> => {
  const response = await client.fetch(getPostsUnderTagQuery, {
    postTag,
  });

  return response;
};

export const searchBlogPosts = async (searchTerm: string): Promise<IPost[]> => {
  const response = client.fetch(searchPostsQuery, {
    searchTerm,
  });

  return response;
};

/*
 * ------POST AUTHOR------
 */

export const getAuthor = async (slug: string): Promise<IAuthor> => {
  const response = await client.fetch(getAuthorBySlugQuery, { slug });

  return response;
};

export const getAuthors = async (): Promise<IAuthor[]> => {
  const response = await client.fetch(getAuthorsQuery);

  return response;
};

export const getAuthorBlogs = async (authorSlug: string): Promise<IPost[]> => {
  const response = await client.fetch(getAuthorBlogsQuery, {
    slug: authorSlug,
  });

  return response;
};

// Create an algorithm to help determine that time it would take to read a blog

// export const postComment = async (data) => {
//   client.create({...data,ref()},)

// };

/*
 * ------POST COMMENTS------
 */

export const getPostComments = async (postSlug: string) => {
  const response = client.fetch(getPostCommentsQuery, {
    slug: postSlug,
  });
  return response;
};

/*
 * ------POST CATEGORIES------
 */

export const getCategories = async (): Promise<IPostCategory[]> => {
  const response = await client.fetch(getCategoriesQuery);

  return response;
};

export const getBlogPostsInCategory = async (
  categorySlug: string
): Promise<IPost[]> => {
  const response = await client.fetch(getBlogPostsInCategoryQuery, {
    slug: categorySlug,
  });

  return response;
};

/*
 * ------POST Tag------
 */

export const getAllTags = async (): Promise<string[]> => {
  const response = await client.fetch(getAllTagsQuery);

  return response;
};

/*
 * ------CASE STUDY Tag------
 */

export const getCaseStudies = async () => {
  const response = await sanityFetch<CASE_STUDIES_QUERYResult>({
    query: CASE_STUDIES_QUERY,
  });
  return reponses
}