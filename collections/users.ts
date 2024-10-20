import type { CollectionConfig } from 'payload';
import { COLLECTION_SLUG_MEDIA, COLLECTION_SLUG_USER } from '../constants/slugs';

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
    {
      name: 'avatar',
      type: 'upload',
      relationTo: COLLECTION_SLUG_MEDIA,
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: "designation",
      type: "text",
   admin : { description: "Career or profession of the author (e.g., Writer, Designer).",
   } }
  ],
};
