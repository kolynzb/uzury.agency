import type { CollectionConfig } from 'payload';
import { COLLECTION_SLUG_FEEDBACK } from '../constants/slugs';


export const Feedback: CollectionConfig = {
  slug: COLLECTION_SLUG_FEEDBACK,
  admin: {
    defaultColumns: ['name'],
    useAsTitle: 'name',
  },
  auth: true,
  timestamps: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'website',
      type: 'text',
    },
  ],
};
