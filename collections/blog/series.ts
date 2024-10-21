import type { CollectionConfig } from "payload";
import {
  COLLECTION_SLUG_BLOG_CATEGORY,
  COLLECTION_SLUG_BLOG_SERIE,
  COLLECTION_SLUG_MEDIA,
} from "@/constants/slugs";
import { slugField } from "@/payload/fields/slug";

export const BlogSeries: CollectionConfig = {
  access: {
    delete: () => false,
    read: () => true,
  },
  typescript: {
    interface: "BlogSerie",
  },
  admin: {
    useAsTitle: "title",
    group: "Blog",
  },
  fields: [
    {
      name: "title",
      type: "text",
      admin: {
        description: "The title of the series.",
      },
      required: true,
    },
    {
      name: "categories",
      type: "relationship",
      relationTo: COLLECTION_SLUG_BLOG_CATEGORY,
      admin: {
        position: "sidebar",
        description: "Categories that this series belongs to.",
      },
      hasMany: true,
    },
    {
      name: "tags",
      type: "array",
      admin: {
        description: "Tags to help organize and find the series.",
      },
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "featuredImage",
      type: "upload",
      admin: {
        description:
          "This image will appear in post listings. Aim for a 16:9 ratio.",
      },
      relationTo: COLLECTION_SLUG_MEDIA,
      required: true,
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    ...slugField(),
  ],
  slug: COLLECTION_SLUG_BLOG_SERIE,
};
