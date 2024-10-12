import { COLLECTION_SLUG_EVENT } from '@/constants/slugs';
import { slugField } from '@/payload/fields/slug';
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
    ...slugField(),
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
  ],
};

export default Event;
