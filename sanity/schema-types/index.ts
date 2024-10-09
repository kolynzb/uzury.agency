import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./block-content-type";
import { categoryType } from "./documents/blog/category-type";
import { postType } from "./documents/blog/post-type";
import { authorType } from "./documents/blog/author-type";
import seriesType from "./documents/blog/series-type";
import youtube from "./objects/youtube";
import quote from "./objects/quote";
import _break from "./objects/break";
import seo from "./objects/seo";
import codeSandbox from "./objects/iframe-embed";
import caseStudyType from "@/sanity/schema-types/documents/portfolio/case-study-type";
import caseStudyCategoryType from "@/sanity/schema-types/documents/portfolio/case-study-category-type";
import testimonialType from "@/sanity/schema-types/documents/portfolio/testimonial-type";
import clientType from "@/sanity/schema-types/documents/portfolio/client-type";
import faqType from "@/sanity/schema-types/documents/company/faq-type";
import accoladeType from "@/sanity/schema-types/documents/company/accolade-type";
import careerType from "@/sanity/schema-types/documents/company/career-type";
import serviceType from "@/sanity/schema-types/documents/company/service-type";
import teamType from "@/sanity/schema-types/documents/company/team-type";
import partnerType from "@/sanity/schema-types/documents/company/partner-type";
import eventType from "@/sanity/schema-types/documents/company/event-type";
import settingsType from "@/sanity/schema-types/documents/settings-type";
import socialFields from "@/sanity/schema-types/objects/social-fields";
import gallery from "@/sanity/schema-types/objects/gallery";

const blogSchemas = [categoryType, postType, authorType, seriesType];
const portfolioSchemas = [
  caseStudyType,
  caseStudyCategoryType,
  testimonialType,
  clientType,
];
const companySchemas = [
  accoladeType,
  careerType,
  eventType,
  faqType,
  partnerType,
  serviceType,
  teamType,
];

const objects = [
  youtube,
  quote,
  seo,
  _break,
  codeSandbox,
  socialFields,
  gallery,
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...blogSchemas,
    ...portfolioSchemas,
    ...companySchemas,
    ...objects,
    settingsType,
    blockContentType,
  ],
};
