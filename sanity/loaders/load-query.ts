import 'server-only'

import { draftMode } from 'next/headers'

import { client } from '../lib/client'
import { queryStore } from './query-store'

// Configuring a separate client for server-side usage, enabling Stega in non-production environments
const serverClient = client.withConfig({
    stega: {
        enabled: process.env.NODE_ENV !== 'production',
    },
})

// Setting the server client in the query store for consistent server-client data handling
queryStore.setServerClient(serverClient)

// Custom wrapper function for `queryStore.loadQuery` to handle draft mode and keep configuration in one place
export const loadQuery = ((query, params = {}, options = {}) => {
    return queryStore.loadQuery(query, params, {
        cache: 'force-cache',
        perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
        ...options,
    })
}) satisfies typeof queryStore.loadQuery