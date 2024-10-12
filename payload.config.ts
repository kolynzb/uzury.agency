// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import {
  FixedToolbarFeature,
  HeadingFeature,
  LinkFeature,
  lexicalEditor,
  ItalicFeature,
  UnderlineFeature,
  BoldFeature,
} from '@payloadcms/richtext-lexical';
import { Users } from './collections/users'
import { Pages } from './collections/page'
import { Media } from './collections/media'
import {seoPlugin} from "@payloadcms/plugin-seo";
import {GenerateTitle, GenerateURL } from "@payloadcms/plugin-seo/types";
import { Page,Post } from './payload-types';
import { Posts } from './collections/blog/posts';
import { PostCategories } from './collections/blog/categories';
// import { resendAdapter } from "@payloadcms/email-resend";
import {COLLECTION_SLUG_BLOG_CATEGORY, COLLECTION_SLUG_PAGE, COLLECTION_SLUG_POST} from "@/constants/slugs";
import {nestedDocsPlugin} from "@payloadcms/plugin-nested-docs";
import {payloadCloudPlugin} from "@payloadcms/plugin-cloud";
import {redirectsPlugin} from "@payloadcms/plugin-redirects";
import {revalidateRedirects} from "@/payload/hooks/revalidate-redirect";
import {searchPlugin} from "@payloadcms/plugin-search";
import Logo from "@/components/cms-logo"
import {CaseStudies} from "@/collections/portfolio/case-studies";
import {CaseStudyCategories} from "@/collections/portfolio/categories";
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const generateTitle: GenerateTitle<Post | Page> = ({ doc }) => {
  return doc?.title
      ? `${doc.title} | Payload Website Template`
      : 'Payload Website Template';
};

const generateURL: GenerateURL<Post | Page> = ({ doc }) => {
  return doc?.slug
      ? `${process.env.NEXT_PUBLIC_SERVER_URL!}/${doc.slug}`
      : process.env.NEXT_PUBLIC_SERVER_URL!;
};

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      icons: [
        {
          rel: 'apple-touch-icon',
          url: '/favicon/apple-touch-icon.png',
        },
        {
          rel: 'mask-icon',
          url: '/favicon/safari-pinned-tab.svg',
        },
        {
          rel: 'icon',
          url: '/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          url: '/favicon/favicon-16x16.png',
        },
      ],
      // ogImage: "",
      titleSuffix: '| Funzana',
    },
    components: {
    // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
    // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
    beforeLogin: ['./payload/components/before-login'],
    graphics: {
      Logo : "./components/cms-logo",
      Icon:  "./components/cms-logo",
    },
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  collections: [
      Pages,Users, Media,
    // Blog
    Posts,PostCategories,
  //     Case Study
    CaseStudies,
    CaseStudyCategories
  ],
  editor: lexicalEditor({
    features: () => {
      return [
        UnderlineFeature(),
        BoldFeature(),
        ItalicFeature(),
        LinkFeature({
          enabledCollections: [COLLECTION_SLUG_PAGE, COLLECTION_SLUG_POST],
          fields: ({ defaultFields }) => {
            const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
              if ('name' in field && field.name === 'url') return false;
              return true;
            });

            return [
              ...defaultFieldsWithoutUrl,
              {
                name: 'url',
                type: 'text',
                admin: {
                  condition: ({ linkType }) => linkType !== 'internal',
                },
                label: ({ t }) => t('fields:enterURL'),
                required: true,
              },
            ];
          },
        }),
      ];
    },
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  // email: resendAdapter({
  //   apiKey: process.env.RESEND_API_KEY || '',
  //   defaultFromAddress: 'info@qraftacademy.com',
  //   defaultFromName: 'Qraft',
  // }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    nestedDocsPlugin({
      collections: [COLLECTION_SLUG_BLOG_CATEGORY],
    }),
    redirectsPlugin({
      collections: [COLLECTION_SLUG_POST, COLLECTION_SLUG_PAGE],
      overrides: {
        // @ts-expect-error
        fields: ({ defaultFields }) => {
          return defaultFields.map((field) => {
            if ('name' in field && field.name === 'from') {
              return {
                ...field,
                admin: {
                  description:
                      'You will need to rebuild the website when changing this field.',
                },
              };
            }
            return field;
          });
        },
        hooks: {
          afterChange: [revalidateRedirects],
        },
      },
    }),
    searchPlugin({
      collections: [COLLECTION_SLUG_PAGE, COLLECTION_SLUG_POST],
      defaultPriorities: {
        pages: 10,
        posts: 20,
      },
    }),
    seoPlugin({
      generateTitle,
      generateURL,
    }),
  ],
})
