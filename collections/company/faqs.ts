import { COLLECTION_SLUG_FAQ } from '@/constants/slugs';
import { CollectionConfig } from 'payload';

const Faqs: CollectionConfig = {
  slug: COLLECTION_SLUG_FAQ,
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'isFeatured'],
    // Payload doesn't have a direct equivalent to Sanity's icon, but you can use a custom icon component if needed
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

export default Faqs;
