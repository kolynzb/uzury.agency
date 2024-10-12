//https://github.dev/masonyekta/payload-feedback-board

import type { CollectionConfig } from 'payload';
import {
  COLLECTION_SLUG_FEEDBACK,
  COLLECTION_SLUG_FEEDBACK_CATEGORY,
} from '../../constants/slugs';

export const Task: CollectionConfig = {
  slug: COLLECTION_SLUG_FEEDBACK,
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidatePath('/');
      },
    ],
    afterDelete: [
      async () => {
        revalidatePath('/');
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      index: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: COLLECTION_SLUG_FEEDBACK_CATEGORY,
      hasMany: false,
      index: true,
      required: true,
    },
  ],
};
