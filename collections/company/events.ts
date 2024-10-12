import { COLLECTION_SLUG_EVENT } from '@/constants/slugs';
import { CollectionConfig } from 'payload';

const Event: CollectionConfig = {
  slug: COLLECTION_SLUG_EVENT,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'location'],
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
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Date',
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Event Image',
    },
    {
      name: 'url',
      type: 'text',
      label: 'Registration URL',
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

export default Event;
