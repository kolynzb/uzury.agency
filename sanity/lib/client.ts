import { createClient } from 'next-sanity'

import {apiVersion, basePath, dataset, projectId, revalidateSecret} from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Set to false if statically generating pages, using ISR or tag-based revalidation
  useCdn: revalidateSecret ? false : true,
  perspective: "published",
  stega: {
    studioUrl: basePath,
  },
})
