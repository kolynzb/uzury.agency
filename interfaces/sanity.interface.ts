import { PortableTextBlock } from "sanity";

export interface SanityBaseSchema {
  _id: string;
  _rev: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface Image {
  _type: "image";
  asset: Reference;
}
export interface Reference {
  _ref: string;
  _type: "reference";
}
export interface Slug {
  _type: "slug";
  current: string;
}

export interface IPost extends SanityBaseSchema {
  title: string;
  slug: string;
  excerpt: string;
  body: PortableTextBlock[];
  author: IAuthor;
  mainImage: string;
  categories: IPostCategory[];
  tags: string[];
  keywords: string[];
  isFeatured: boolean;
  publishedAt: string;
}

export interface IAuthor extends SanityBaseSchema {
  name: string;
  slug: string;
  image: string;
  bio: string;
  designation: string;
  socials: { icon: string; url: string }[];
}

export interface IComment extends SanityBaseSchema {
  name: string;
  isApproved: boolean;
  email: string;
  comment: string;
}

export interface IPostCategory extends SanityBaseSchema {
  title: string;
  slug: string;
  image: string;
  description: string;
}

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
