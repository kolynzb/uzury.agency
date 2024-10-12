import { COLLECTION_SLUG_CAREER } from '@/constants/slugs';
import { slugField } from '@/payload/fields/slug';
import { CollectionConfig } from 'payload';

const CareerCollection: CollectionConfig = {
  slug: COLLECTION_SLUG_CAREER,
  admin: {
    useAsTitle: 'position',
  },
  fields: [
    {
      name: 'position',
      type: 'text',
      label: 'Position',
      required: true,
    },
   ...slugField(),
    {
      name: 'department',
      type: 'text',
      label: 'Department',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Job Description',
    },
    {
      name: 'requirements',
      type: 'array',
      label: 'Requirements',
      fields: [
        {
          name: 'requirement',
          type: 'text',
        },
      ],
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location',
    },
    {
      name: 'applicationUrl',
      type: 'text',
      label: 'Application URL',
    },
  ],
};

export default CareerCollection;
