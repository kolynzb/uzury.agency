import { COLLECTION_SLUG_ACCOLADE } from '@/constants/slugs';
import { CollectionConfig } from 'payload';

const Accolades: CollectionConfig = {
  slug: COLLECTION_SLUG_ACCOLADE,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Date',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Images',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
    },
  ],
};

export default Accolades;
