import { COLLECTION_SLUG_SERVICE } from "@/constants/slugs";
import { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: COLLECTION_SLUG_SERVICE,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'Slug',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: 'Icon',
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Main Image',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        {
          name: 'feature',
          type: 'text',
        },
      ],
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      label: 'SEO Description',
      validate: (value) => {
        if (value && value.length > 160) {
          return 'SEO Description must be 160 characters or less';
        }
        return true;
      },
    },
  ],
};

