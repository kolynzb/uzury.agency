import type { CollectionConfig } from 'payload';
import { COLLECTION_SLUG_FEEDBACK_CATEGORY } from '../../constants/slugs';

export const RoadmapCategories: CollectionConfig = {
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      index: true,
      required: true,
    },
    {
      name: 'color',
      type: 'text',
      required: true,
    },
  ],
  slug: COLLECTION_SLUG_FEEDBACK_CATEGORY,
};
