import { ComposeIcon } from "@sanity/icons";
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: ComposeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Used for SEO and in the browser tab.",
      type: "string",
      group: ["content"],

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
      "The unique identifying part of a web address at the end of the URL. Only lowercase and no special characters except -.",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      description: "Image used in article grids. Preferred aspect ratio 16/9.",
      group: ["content"],
      options: {
        hotspot: true,
        // captionField: "caption",
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "blogCategory" } }],
    }),
    // defineField({
    //   name: "seo",
    //   title: "SEO",
    //   type: "seo",
    //   // initialValue: (params, context) => {
    //   //   console.log("Params", params);
    //   //   console.log("Context", context);
    //   //   return {
    //   //     title: "",
    //   //     // description: document.excerpt,
    //   //     // openGraphImage: document.mainImage,
    //   //   };
    //   // },
    // }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isFeatured",
      title: "isFeatured",
      type: "boolean",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      group: ["content"],

    }),
    defineField({
      name: "isSeries",
      title: "Is Series",
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
