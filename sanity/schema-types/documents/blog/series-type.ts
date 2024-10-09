import { defineField, defineType } from "sanity";
import {TiersIcon} from '@sanity/icons'

export default defineType({
  name: "series",
  title: "Series",
  type: "document",
  icon: TiersIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().warning("The series title is required."),
      description: "The title of the series.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required().warning("The series slug is required."),
      description: "URL-friendly version of the title.",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required().warning("An author reference is required."),
      description: "Author of the series.",
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
      validation: (Rule) => Rule.max(160).warning("Keep meta description under 160 characters."),
      description: "SEO meta description for the series.",
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "blogCategory" } }],
      description: "Categories that this series belongs to.",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      description: "Tags to help organize and find the series.",
      options: {
        layout: "tags", // Makes it easier to enter and visualize tags
      },
      of: [{ type: "string" }],
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required().warning("Alt text is required for accessibility."),
          description: "Alternative text for the image for accessibility.",

        },
      ],
    }),
    defineField({
      name: "about",
      title: "About",
      type: "blockContent",
      description: "Main content for the series.",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      description: "Date and time when the series was published.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
