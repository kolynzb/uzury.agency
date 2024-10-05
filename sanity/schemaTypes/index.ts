import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./documents/blog/categoryType";
import { postType } from "./documents/blog/postType";
import { authorType } from "./documents/blog/authorType";
import seriesType from "./documents/blog/seriesType";
import youtube from "./objects/youtube";
import quote from "./objects/quote";
import _break from "./objects/break";
import seo from "./objects/seo";
import codeSandbox from "./objects/code-sandbox";
import caseStudyType from "@/sanity/schemaTypes/documents/portfolio/case-study-type";
import caseStudyCategoryType from "@/sanity/schemaTypes/documents/portfolio/case-study-category-type";

const blogSchemas = [categoryType, postType, authorType, seriesType];
const caseStudySchemas = [caseStudyType,caseStudyCategoryType];

const objects = [youtube, quote, seo, _break, codeSandbox];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...blogSchemas,...caseStudySchemas, ...objects, blockContentType],
};
