import "server-only";

import { createClient, type QueryOptions, type QueryParams } from "next-sanity";

import {apiVersion, basePath, dataset, projectId, revalidateSecret} from '../env'
import { token } from "./token";
import { draftMode } from "next/headers";
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // Set to false if statically generating pages, using ISR or tag-based revalidation
  useCdn:  true,
  // perspective: "published",
  stega: {
    enabled: process.env.NEXT_PUBLIC_VERCEL_ENV === "preview",
    studioUrl: basePath,
  },
})

export async function sanityFetch<QueryResponse>({
                                                     query,
                                                     params = {},
                                                     revalidate = 60,
                                                     tags = [],
                                                 }: {
    query: string;
    params?: QueryParams;
    revalidate?: number | false;
    tags?: string[];
}) {
    const isDraftMode = draftMode().isEnabled;
    if (isDraftMode && !token) {
        throw new Error("Missing environment variable SANITY_API_READ_TOKEN");
    }

    let dynamicRevalidate = revalidate;
    if (isDraftMode) {
        // Do not cache in Draft Mode
        dynamicRevalidate = 0;
    } else if (tags.length) {
        // Cache indefinitely if tags supplied, purge with revalidateTag()
        dynamicRevalidate = false;
    }

    return client.fetch<QueryResponse>(query, params, {
        ...(isDraftMode &&
            ({
                token: token,
                perspective: "previewDrafts",
                stega: true,
            } satisfies QueryOptions)),
        next: {
            revalidate: dynamicRevalidate,
            tags,
        },
    });
}