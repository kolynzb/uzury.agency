import type { CollectionConfig } from 'payload';
import { COLLECTION_SLUG_BLOG_CATEGORY } from '@/constants/slugs';

export const PostCategories: CollectionConfig = {
  access: {
    delete: () => false,
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group:"Blog",
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
  slug: COLLECTION_SLUG_BLOG_CATEGORY,
};
