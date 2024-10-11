import { groq } from "next-sanity";
import { defineQuery } from "next-sanity";

/*
 * ------GROQ FIELDS------
 */
const categoryFields = groq`
    ...,
    "image": image.asset->url,
    "slug": slug.current
`;

const authorFields = groq`
    ...,
    "image": image.asset->url,
    "slug": slug.current
`;
const postFields = groq`
 ...,
  body,
 "slug": slug.current,
  categories[] ->{
    ${categoryFields}
  },
  author ->{
    ${authorFields}
  },
  "mainImage": mainImage.asset->url,
`;

const serviceFields = groq`  

`;
const clientFields = groq`  

`;
const caseStudyFields = groq`
 ...,
  body,
 "slug": slug.current,
  categories[] ->{
    ${categoryFields}
  },
  service ->{
    ${serviceFields}
  },
  client ->{
    ${serviceFields}
  },
`;

/*
 * ------POSTS------
 */

export const getAllPostsQuery = groq`
*[_type == "post"]{
  ${postFields}
}`;
export const getPostMetadataQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
   excerpt,
   "slug": slug.current,
   tags,
   title,
   seo,
   _updatedAt,
   _createdAt,
  author ->{
      name
    },
  "mainImage": mainImage.asset->url,
}`;

export const getFeaturedPostsQuery = groq`
*[_type == "post" && isFeatured == true]{
  ${postFields}
}| order(_createdAt desc)`;

export const getPostBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
  'comments':*[
     _type=="comment" &&
     post._ref==^._id &&
    approved == true],
}
`;

export const getPostsUnderTagQuery = groq`
*[_type == "post" && $postTag in tags]{
  ${postFields}
}
`;

export const searchPostsQuery = groq`
*[_type=='post' && title match $searchTerm || description match  $searchTerm || categories match  $searchTerm  ]{
  ${postFields}
}
`;

/*
 * ------POST COMMENTS------
 */

export const getPostCommentsQuery = groq`
*[_type == "comment" && post->slug.current == $slug]
`;

/*
 * ------POST CATEGORIES------
 */

export const getCategoriesQuery = groq`
*[_type == "postCategory"]{
   ${categoryFields}
 }`;

export const getBlogPostsInCategoryQuery = groq`
*[_type == "post" && references(*[_type == "postCategory" && slug.current == $slug]._id)]{
  ${postFields}
}| order(_createdAt desc)`;

/*
 * ------POST AUTHOR------
 */

export const getAuthorBySlugQuery = groq`
*[_type == "author" && slug.current == $slug][0]{
   ${authorFields}
}`;

export const getAuthorsQuery = groq`
*[_type == "author"]{
      ${authorFields}
   }
`;

export const getAuthorBlogsQuery = groq`
*[_type == "post" && author->slug.current == $slug]{
      ${postFields}
   }
`;

/*
 * ------TAG ------
 */

export const getAllTagsQuery = groq`*[_type == "post"].tags[] | order(_id asc)`;
/*
 * ------SETTINGS ------
 */

export const settingsQuery = groq`*[_type == "settings"][0]`;

export const indexQuery = groq`
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

/*
 * ------CASE STUDIES ------
 */

export const CASE_STUDIES_QUERY =
    defineQuery(`*[_type == "caseStudy" && defined(slug.current)]{
    ${caseStudyFields}
}`);

export const CASE_STUDY_QUERY =
    defineQuery(`*[_type == "caseStudy" && slug.current == $slug][0]{
    ${caseStudyFields}
}`);


