import type { CollectionConfig } from 'payload';

// import { Archive } from '../../blocks/archive/config';
import { CallToAction } from '@/payload/blocks/cta/config';
import { Content } from '@/payload/blocks/content/config';
// import { FormBlock } from '../blocks/form/config';
import { MediaBlock } from '@/payload/blocks/media-block/config';
// import { hero } from '../../fields/hero/';
import { slugField } from '@/payload/fields/slug';
import { populatePublishedAt } from '@/payload/hooks/populate-published-at';
import { generatePreviewPath } from '@/payload/utils/generate-preview-path';
import { revalidatePage } from './hooks/revalidate-page';

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields';

import { COLLECTION_SLUG_PAGE, COLLECTION_SLUG_MEDIA} from '@/constants/slugs';


export const Pages: CollectionConfig = {
  slug: COLLECTION_SLUG_PAGE,
  // access: {
  //   create: authenticated,
  //   delete: authenticated,
  //   read: authenticatedOrPublished,
  //   update: authenticated,
  // },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          path: `/${typeof data?.slug === 'string' ? data.slug : ''}`,
        });
        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
      },
    },
    preview: (doc) =>
      generatePreviewPath({
        path: `/${typeof doc?.slug === 'string' ? doc.slug : ''}`,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        // {
        //   fields: [hero],
        //   label: 'Hero',
        // },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CallToAction, Content, MediaBlock,
                //  Archive, FormBlock
                ],
              required: true,
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: COLLECTION_SLUG_MEDIA,
            }),
            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
};
