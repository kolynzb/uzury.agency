import type { Metadata } from 'next'

import type { Post ,Project} from '../../payload-types'

import { mergeOpenGraph } from './merge-og-image'

export const generateMeta = async (args: { doc: Project|Post }): Promise<Metadata> => {
  const { doc } = args || {}

  const ogImage =
    typeof doc?.meta?.image === 'object' &&
    doc.meta.image !== null &&
    'url' in doc.meta.image &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}${doc.meta.image.url}`

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description,
      images: ogImage
        ? [
          {
            url: ogImage,
          },
        ]
        : undefined,
      title: doc?.meta?.title || 'Payload',
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
    }),
    title: doc?.meta?.title || 'Payload',
  }
}
