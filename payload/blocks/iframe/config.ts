import type { Block } from "payload";

export const IframeEmbed: Block = {
  slug: "iframe-embed",
  imageURL: "http://localhost:3000/media/quote.png",
  imageAltText: "Iframe block",
  fields: [
    {
      name: "url",
      type: "text",
      admin: {
        description:
          "Enter the URL of the iframe (e.g., Behance, CodeSandbox, etc.)",
      },
    },
    {
      name: "title",
      type: "text",
      admin: {
        description: "Short description or title for the embed",
      },
    },
  ],
};
