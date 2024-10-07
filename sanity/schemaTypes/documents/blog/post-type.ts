import { ComposeIcon } from "@sanity/icons";
import {defineArrayMember, defineField, defineType} from 'sanity'
import { getExtension, getImageDimensions } from '@sanity/asset-utils'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: ComposeIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "settings", title: "Settings" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Post Title",
      description: "This is the main title of your post. Keep it concise and catchy.",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().warning("A title is required for each post."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "This will be the URL path for the post. Only lowercase letters, numbers, and dashes are allowed.",
      group: "seo",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required().error("You need a URL slug."),
    }),
    defineField({
      name: "author",
      title: "Author",
      description: "Select the author of this post.",
      type: "reference",
      to: { type: "author" },
      group: "settings",
      validation: (Rule) => Rule.required().error("An author must be selected."),
    }),
    defineField({
      name: "excerpt",
      title: "Post Excerpt",
      description: "A short summary of the post (Max 160 characters) used for SEO and previews.",
      type: "text",
      validation: (Rule) => Rule.max(160).warning("Keep the excerpt concise (max 160 characters)."),
      group: "seo",
    }),
    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      description: "Enter keywords relevant to the post for SEO purposes.",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      group: "seo",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      description: "This image will appear in post listings. Aim for a 16:9 ratio.",
      group: ["content"],
      validation: (rule) =>
          rule.custom((image) => {
            if (!image) return true; // Allow empty fields or unprocessed images
            const { aspectRatio } = getImageDimensions(image?.asset?._ref!);
            return aspectRatio === 16 / 9
                ? true
                : "Image should have a 16:9 aspect ratio";
          }),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Image Caption",
          description: "Describe the image content, if relevant.",
        },
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Important for accessibility. Describe the image for visually impaired users.",
          validation: (Rule) =>
              Rule.required().error("Alternative text is required for accessibility."),
        }
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      description: "Organize posts into categories for better navigation.",
      type: "array",
      group: "settings",
      validation: (Rule) => Rule.required().min(1).warning("Assign at least one category."),
      of: [{ type: "reference", to: { type: "blogCategory" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      description: "Set a date and time for when the post should go live.",
      group: "settings",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      description: "Add relevant tags for this post to help with filtering and organization.",
      type: "array",
      of: [{ type: "string" }],
      group: "settings",
      options: {
        layout: "tags", // Makes it easier to enter and visualize tags
      },
    }),
    defineField({
      name: "isFeatured",
      title: "Feature this post?",
      description: "Tick this box if you want the post to be featured.",
      group: "settings",
      type: "boolean",
    }),
    defineField({
      name: "body",
      description: "Write the main content of the post here.",
      title: "Post Content",
      type: "blockContent",
      group: ["content"],

    }),
    defineField({
      name: "isSeries",
      title: "Is this part of a series?",
      description: "Check if this post belongs to a series.",
      group: "settings",

      type: "boolean",
      options: {
        layout: "checkbox",
      },
    }),
    defineField({
      name: "series",
      title: "Series",
      type: "reference",
      to: { type: "series" },
      description: "Select the series this post is part of.",
      group: "settings",
      hidden: ({ parent }) => !parent?.isSeries,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
