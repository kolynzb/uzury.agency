import { COLLECTION_SLUG_FAQ } from '@/constants/slugs';
import { CollectionConfig } from 'payload';

const Faqs: CollectionConfig = {
  slug: COLLECTION_SLUG_FAQ,
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'isFeatured'],
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'Question',
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      label: 'Answer',
    },
    {
      name: 'category',
      type: 'text',
      label: 'Category',
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Featured FAQ',
    }
  ],
};

export default Faqs;
