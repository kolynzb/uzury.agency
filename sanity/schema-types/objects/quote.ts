import { QuotePreview } from "../../components/quote-preview";
import { defineField, defineType } from "sanity";
import { TbBlockquote } from "react-icons/tb";

export default defineType({
  name: "quote",
  title: "Quote",
  icon: TbBlockquote,
  type: "object",
  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Text",
      description: "Enter the Quote Text",
    }),
    defineField({
      name: "author",
      type: "string",
      title: "Author",
      description: "Enter the Author of the quote",
    }),
    defineField({
      name: "url",
      type: "url",
      title: "URL",
      description: "Source on the web",
    }),
  ],
  preview: {
    select: {
      text: "text",
      url: "url",
      author: "author",
    },
  },
  components: {
    preview: QuotePreview as any,
  },
});

// https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
