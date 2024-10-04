import generateRssFeed from "@utils/rss-generator";

export async function GET() {
    const feed = await generateRssFeed();
    const cacheMaxAgeUntilStaleSeconds = 60 * 60; // 1 minute
    const cacheMaxAgeStaleDataReturnSeconds = 60 * 60 * 60; // 60 minutes
    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/atom+xml; charset=utf-8',
            "Cache-Control":
                `public, s-maxage=${cacheMaxAgeUntilStaleSeconds}, stale-while-revalidate=${cacheMaxAgeStaleDataReturnSeconds}`
        },
    });
}   