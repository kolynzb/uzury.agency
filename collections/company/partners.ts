import { COLLECTION_SLUG_MEDIA, COLLECTION_SLUG_PARTNER } from '@/constants/slugs';
import { CollectionConfig } from 'payload';

const Partners: CollectionConfig = {
  slug: COLLECTION_SLUG_PARTNER,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'url'],
    // Payload doesn't have a direct equivalent to Sanity's icon, but you can use a custom icon in the admin UI if needed
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
      admin: {
        description: 'The name of the partner organization or company.',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        description: 'URL-friendly version of the name.',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: COLLECTION_SLUG_MEDIA,
      required: true,
      admin: {
        description: 'Logo of the partner company.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Brief description of the partner and their relationship with your company.',
      },
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        description: 'The official website URL of the partner company.',
      },
    },
  ],
};

export default Partners;
