import type { CollectionConfig } from 'payload';
import { COLLECTION_SLUG_USER } from '../constants/slugs';

export const Users: CollectionConfig = {
  slug: COLLECTION_SLUG_USER,
  admin: {
    defaultColumns: ['name', 'email'],
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
