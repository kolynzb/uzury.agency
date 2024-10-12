import type { CollectionConfig } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import path from 'path'
import { COLLECTION_SLUG_MEDIA } from '@/constants/slugs';
import {fileURLToPath} from "url";


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Media: CollectionConfig = {
  access: {
    create: () => false,
    delete: () => false,
    read: () => true,
    update: () => false,
  },
  admin: {
    description: 'Creating, updating, and deleting media is disabled for this demo.',
  },
  fields: [
    {
      name: 'alt',
      required: true,
      type: 'text',
    },
    {
      name: 'caption',
 
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
    },
  ],
  slug: COLLECTION_SLUG_MEDIA,
  upload: {
    staticDir: path.resolve(dirname, '../media'),
  },
}
