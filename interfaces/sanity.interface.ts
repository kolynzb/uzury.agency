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
  caption:string;
  alt:string;
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

import {SanityDocument} from "@sanity/types";
// import {SanityDocument,Slug} from "@sanity/types";

export interface ICaseStudy extends SanityDocument {
  _type: "caseStudy";
  mainImage?: Image;
  slug: Slug;
title: string;
seoKeywords: string;
industry: string;
description: string;
isFeatured: boolean;
client: IClient;
service: IService;
body: PortableTextBlock[];
categories:ICaseStudyCategory[];
tags: string[];
summary:string;
url:string;
}

export interface IClient extends  SanityDocument {
  _type: "client";
  name: string;
}

export interface IService extends  SanityDocument {
  _type: "service";
}

export interface ICaseStudyCategory extends  SanityDocument {
  title: string;
  slug: string;
  image: string;
  description: string;
}