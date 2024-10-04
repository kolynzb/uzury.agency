import { defineField, defineType } from "sanity";
import { TbSeo } from "react-icons/tb";

export default defineType({
  name: "seo",
  title: "SEO",
  icon: TbSeo,
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Meta Title",
      type: "string",
      description: "The title shown in search engines. Max 60-70 characters.",
      validation: (Rule) => Rule.max(70).required(),
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      description:
        "The description shown in search engines. Max 160 characters.",
      validation: (Rule) => Rule.min(70).max(160).required(),
    }),
    defineField({
      name: "keywords",
      title: "Meta Keywords",
      type: "string",
      description:
        'Comma-separated list of keywords for SEO. Example: "technology, coding, web development"',
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      description:
        "Canonical URL for this blog post. Only one canonical URL should be specified.",
    }),
    defineField({
      name: "openGraphImage",
      title: "OpenGraph Image",
      type: "image",
      description: "Image used for sharing on social media platforms.",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
    },
  },
});

// https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
