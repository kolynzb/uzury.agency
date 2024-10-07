import { defineType, defineField } from "sanity";
import IframeEmbedPreview from "@/sanity/components/iframe-embed-preview";
import { PiFrameCorners } from "react-icons/pi";

export default defineType({
  name: 'iframeEmbed',
  type: "object",
  title: 'Embed (Iframe)',
  icon: PiFrameCorners,
  fields: [
    defineField({
      name: 'url',
      title: 'Embed URL',
      type: 'url',
      description: 'Enter the URL of the iframe (e.g., Behance, CodeSandbox, etc.)',
    }),
    defineField({
      name: 'title',
      title: 'Embed Title',
      type: 'string',
      description: 'Short description or title for the embed',
    }),

  ],
  components: {
    preview: IframeEmbedPreview as any
  },
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
     // Use the custom preview component
    prepare({ title, url }) {
      return {
        title: title || 'Embedded Content',
        url: url,
      };
    },
  },
});
