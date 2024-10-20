import { COLLECTION_SLUG_MEDIA } from "@/constants/slugs";
import type { Block } from "payload";

export const Gallery: Block = {
  slug: "iframe-embed",
  imageURL: "http://localhost:3000/media/quote.png",
  imageAltText: "Iframe block",  labels: {
    singular: 'Slide',
    plural: 'Slides',
  },
  fields: [
    {
      name: "title",
      type: "text",
      admin: {
        description:
          "This is the title of your gallery. (Make it easy for you to remember).",
      },
    },
    {
      name: "display",
      type: "radio",
      options: [
        { label: "Normal Grid", value: "grid" },
        { label: "Block", value: "block" },
        { label: "Bento", value: "bento" },
        { label: "Slider", value: "slider" },
      ],
      admin: {
        description:
          "Indicates the way you want to display the images in the gallery",
      },
    },
    {
      name: "images",
      type: "array",
      admin: {
        description: "Add multiple images to create a gallery.",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: COLLECTION_SLUG_MEDIA,
          required: true,
          filterOptions: {
            mimeType: { contains: "image" },
          },
        },
      ],
    },
  ],
};
