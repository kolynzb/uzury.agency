import { COLLECTION_SLUG_MEDIA, COLLECTION_SLUG_SERVICE } from "@/constants/slugs";
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
      relationTo: COLLECTION_SLUG_MEDIA,
      label: 'Icon',
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: COLLECTION_SLUG_MEDIA,
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
    }
  ],
};

