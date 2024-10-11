import { defineField, defineType } from "sanity";
import { LuBriefcase } from "react-icons/lu";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  icon:  LuBriefcase as any,
  groups: [
    { name: "content", title: "Content" },
    { name: "media", title: "Media" },
    { name: "metadata", title: "Metadata & SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().warning("A title is required."),
      description: "The main title of the case study.",
    }),
    defineField({
      name: "seoKeywords",
      title: "SEO Keywords",
      type: "array",
      description: "Enter keywords relevant to the post for SEO purposes.",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      group: "metadata",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "metadata",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required(),
      description: "URL-friendly identifier for the case study (auto-generated from the title).",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      group: "media",
      description: "Main image for the case study. Preferred aspect ratio: 16:9.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for SEO and accessibility.",
          validation: (Rule) => Rule.required().warning("Alt text is required for accessibility."),
        },
      ],
    }),
    // Client relationship
    defineField({
      name: "client",
      title: "Client",
      type: "reference",
      to: { type: "client" }, // Ensure you have a 'client' schema defined
      group: "content",
      description: "Select the client associated with this case study.",
      validation: (Rule) => Rule.required().warning("A client is required for this case study."),
    }),
    // TODO:   Consider making them many
    defineField({
      name: "service",
      title: "Service",
      type: "reference",
      group: "metadata",
      to: { type: "service" },  // Ensure you have a 'service' schema
      description: "Select the service provided to the client.",
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      group: "metadata",
      description: "The industry the client operates in (e.g., Healthcare, Technology, Education).",
    }),
    defineField({
      name: "isFeatured",
      title: "Featured Case Study",
      type: "boolean",
      group: "metadata",
      description: "Mark this case study as featured to highlight it in special sections.",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      description: "Categories to help organize case studies.",
      group: "metadata",
      of: [{ type: "reference", to: { type: "caseStudyCategory" } }],
    }),
    defineField({
      name: "content",
      title: "Detailed Content",
      type: "blockContent",
      group: "content",
      description: "The main body content of the case study.",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      description: "Relevant tags to describe the project.",
      of: [{ type: "string" }],
      options: {
        layout: "tags", // Makes it easier to enter and visualize tags
      },
    }),
    defineField({
      name: "summary",
      title: "Short Summary",
      type: "string",
      group: "content",
      description: "A brief summary of the project (useful for overviews).",
      validation: (Rule) =>
          Rule.max(160).warning("Keep the summary under 160 characters for better SEO."),
    }),
    defineField({
      name: "url",
      title: "Project URL",
      type: "url",
      group: "metadata",
      description: "Link to the live project or more information.",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "The URL of the video to play on hover over the case study card.",
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      type: "text",
      group: "metadata",
      description: "Description for SEO purposes (recommended length: 150-160 characters).",
      validation: (Rule) =>
          Rule.max(160).warning("Keep the meta description under 160 characters for better SEO."),
    }),
  ],

  preview: {
    select: {
      title: "title",
      client:"client.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { title, media, client } = selection;
      return {
        title,
        media,
        subtitle: client ? `Client: ${client}` : 'No client selected',
      };
    },
  },
});
