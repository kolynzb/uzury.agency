// ./src/sanity/presentation/resolve.ts

import {
    defineDocuments,
    defineLocations,
    PresentationPluginOptions,
} from "sanity/presentation";
import {resolveHref} from "@/sanity/lib/utils";

const mainDocuments = defineDocuments([
    {
        route: '/portfolio/:slug',
        filter: `_type == "caseStudy" && slug.current == $slug`,
    },
    {
        route: '/blog/:slug',
        filter: `_type == "post" && slug.current == $slug`,
    },
])

// https://www.sanity.io/guides/sanity-presentation-with-nextjs#f0347f024c8c
export const resolve: PresentationPluginOptions["resolve"] = {
    // mainDocuments,
    locations: {
        settings: defineLocations({
            message: 'This document is used on all pages',
            tone: 'caution',
        }),
        post: defineLocations({
            select: {
                title: "title",
                slug: "slug.current",
            },
            resolve: (doc) => ({
                locations: [
                    {
                        title: doc?.title || "Untitled",
                        href: `/blog/${doc?.slug}`,
                    },
                    { title: "Blog", href: `/blog/` },
                ],
            }),
        }),
        caseStudy: defineLocations({
            select: {
                title: "title",
                slug: "slug.current",
            },
            resolve: (doc) => ({
                locations: [
                    {
                        title: doc?.title || "Untitled",
                        href:  resolveHref('caseStudies', doc?.slug)!,
                    },
                    { title: "Portfolio", href: `/portfolio/` },
                ],
            }),
        }),
    },
};