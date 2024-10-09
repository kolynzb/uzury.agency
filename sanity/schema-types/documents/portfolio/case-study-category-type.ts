import { defineField, defineType } from "sanity";
import {TagIcon} from "@sanity/icons";

export default defineType({
  name: "caseStudyCategory",
  title: "Case Study Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'The name of the blog category.',
      validation: (Rule) => Rule.required().warning('A category title is required.'),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: 'Short description of the category. Used for SEO and internal reference.',
      validation: (Rule) =>
          Rule.max(200).warning('Keep the description concise (maximum 200 characters).'),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: 'URL-friendly version of the category title.',
      validation: (Rule) => Rule.required().error('A URL slug is required for this category.'),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
  ],
});
