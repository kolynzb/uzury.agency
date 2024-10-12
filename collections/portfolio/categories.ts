import type { CollectionConfig } from 'payload';
import { COLLECTION_SLUG_CASE_STUDY_CATEGORY } from '@/constants/slugs';


export const CaseStudyCategories: CollectionConfig = {
  access: {
    delete: () => false,
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group:"Portfolio",
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
  slug: COLLECTION_SLUG_CASE_STUDY_CATEGORY,
};
