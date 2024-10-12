import { Alert } from '@/payload/blocks/alert/config';
import { Content } from '@/payload/blocks/content/config';
import { Quote } from '@/payload/blocks/quote/config';
import { slugField } from '@/payload/fields/slug';
import type { CollectionConfig } from 'payload';
import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import { BlocksFeature } from '@payloadcms/richtext-lexical';
import { MediaBlock } from '@/payload/blocks/media-block/config';
import { Code } from '@/payload/blocks/code/config';
import { Banner } from '@/payload/blocks/banner/config';
import { revalidatePost } from './hooks/revalidate-post';
import { populateAuthors } from './hooks/populate-authors';
import { COLLECTION_SLUG_USER, COLLECTION_SLUG_BLOG_CATEGORY,COLLECTION_SLUG_MEDIA,COLLECTION_SLUG_POST} from '@/constants/slugs';
import { generatePreviewPath } from '@/payload/utils/generate-preview-path';
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields';


export const Posts: CollectionConfig = {
  slug: COLLECTION_SLUG_POST,
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
    group:"Blog",
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          path: `/posts/${typeof data?.slug === 'string' ? data.slug : ''}`,
        });
        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
      },
    },
    preview: (doc) =>
      generatePreviewPath({
        path: `/posts/${typeof doc?.slug === 'string' ? doc.slug : ''}`,
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
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
      required: false,
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: COLLECTION_SLUG_USER,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: COLLECTION_SLUG_BLOG_CATEGORY,
      admin: {
        position: 'sidebar',
      },
    },
    // {
    //   name: 'tags',
    //   type: 'relationship',
    //   relationTo: 'tags',
    //   hasMany: true,
    //   admin: {
    //     position: 'sidebar',
    //   }
    // },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Post Media',
          fields: [
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: COLLECTION_SLUG_MEDIA,
              required: true,
              filterOptions: {
                mimeType: { contains: 'image' },
              },
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({
                      enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'],
                    }),
                    BlocksFeature({
                      blocks: [Banner, Code, MediaBlock, Quote, Content, Alert],
                    }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ];
                },
              }),
              label: false,
              required: true,
            },
          ],
        },
        {
          fields: [
            {
              name: 'relatedPosts',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                };
              },
              hasMany: true,
              relationTo: COLLECTION_SLUG_POST,
            },
            {
              name: COLLECTION_SLUG_BLOG_CATEGORY,
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: COLLECTION_SLUG_BLOG_CATEGORY,
            },
          ],
          label: 'Meta',
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
              relationTo: 'media',
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
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },

    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
    // beforeChange: [populatePublishedDate],
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
