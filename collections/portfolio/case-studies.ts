
import { slugField } from '@/payload/fields/slug';
import { populatePublishedAt } from '@/payload/hooks/populate-published-at';
import type { CollectionConfig } from 'payload';
import { COLLECTION_SLUG_CASE_STUDY,COLLECTION_SLUG_CASE_STUDY_CATEGORY ,COLLECTION_SLUG_CLIENT,COLLECTION_SLUG_MEDIA, COLLECTION_SLUG_SERVICE} from '@/constants/slugs';
import {generatePreviewPath} from "@/payload/utils/generate-preview-path";

export const CaseStudies: CollectionConfig = {
  slug: COLLECTION_SLUG_CASE_STUDY,
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
    group:"Portfolio",
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          path: `/portfolio/${typeof data?.slug === 'string' ? data.slug : ''}`,
        });
        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
      },
    },
    preview: (doc) =>
        generatePreviewPath({
          path: `/portfolio/${typeof doc?.slug === 'string' ? doc.slug : ''}`,
        }),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'client',
      type: 'relationship',
      relationTo: COLLECTION_SLUG_CLIENT,
      required: true,
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: COLLECTION_SLUG_SERVICE,
    },
    {
      name: 'industry',
      type: 'text',
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Featured Case Study',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: {
        position: 'sidebar',
      },
      minLength: 40,
      maxLength: 160,
    },
    {
      name: COLLECTION_SLUG_CASE_STUDY_CATEGORY,
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: COLLECTION_SLUG_CASE_STUDY_CATEGORY,
      type: 'relationship',
    },
    {
      name: 'featuredImage',
      relationTo: COLLECTION_SLUG_MEDIA,
      required: true,
      type: 'upload',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
      admin: {
        description: 'Main image for the case study. Preferred aspect ratio: 16:9.',
      },
    },
    {
      name: 'publishedAt',
      admin: {
        position: 'sidebar',
      },
      type: 'date',
    },
      ...slugField(),
  ],
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: true,
  },
};
