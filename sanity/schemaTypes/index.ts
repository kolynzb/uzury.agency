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
import codeSandbox from "./objects/code-sandbox";
import caseStudyType from "@/sanity/schemaTypes/documents/portfolio/case-study-type";
import caseStudyCategoryType from "@/sanity/schemaTypes/documents/portfolio/case-study-category-type";
import testimonialType from "@/sanity/schemaTypes/documents/portfolio/testimonial-type";
import clientType from "@/sanity/schemaTypes/documents/portfolio/client-type";
import faqType from "@/sanity/schemaTypes/documents/company/faq-type";
import accoladeType from "@/sanity/schemaTypes/documents/company/accolade-type";
import careerType from "@/sanity/schemaTypes/documents/company/career-type";
import serviceType from "@/sanity/schemaTypes/documents/company/service-type";
import teamType from "@/sanity/schemaTypes/documents/company/team-type";
import partnerType from "@/sanity/schemaTypes/documents/company/partner-type";
import eventType from "@/sanity/schemaTypes/documents/company/event-type";
import settingsType from "@/sanity/schemaTypes/documents/settings-type";
import socialFields from "@/sanity/schemaTypes/objects/social-fields";
import gallery from "@/sanity/schemaTypes/objects/gallery";

const blogSchemas = [categoryType, postType, authorType, seriesType];
const portfolioSchemas = [caseStudyType,caseStudyCategoryType,testimonialType,clientType];
const companySchemas = [accoladeType,careerType,eventType,faqType,partnerType,serviceType,teamType];

const objects = [youtube, quote, seo, _break, codeSandbox,socialFields,gallery];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...blogSchemas,...portfolioSchemas,...companySchemas, ...objects,settingsType, blockContentType],
};
