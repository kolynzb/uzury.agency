import type { CollectionConfig } from 'payload';
import { COLLECTION_SLUG_BLOG_CATEGORY, COLLECTION_SLUG_CLIENT } from '@/constants/slugs';
import { slugField } from '@/payload/fields/slug';

export const Testimonials: CollectionConfig = {
    access: {
        delete: () => false,
        read: () => true,
    },
    admin: {
        useAsTitle: 'name',
        group:"Portfolio",
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            admin: {
              description: 'The name of the person providing the testimonial',
            },
          },
          {
            name: 'role',
            type: 'text',
            admin: {
              description: 'The role or position of the person providing the testimonial',
            },
          },
          {
            name: 'testimonial',
            type: 'textarea',
            admin: {
              description: 'The testimonial content',
            },
          },
          {
            name: 'client',
            type: 'relationship',
            relationTo: COLLECTION_SLUG_CLIENT,
            admin: {
              description: 'The name of the organization or company',
            },
          },
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            admin: {
              description: 'Image of the person providing the testimonial',
            },
          },
          ...slugField(),
    ],
    slug: COLLECTION_SLUG_BLOG_CATEGORY,
};
