import RSS from 'rss';
import { siteConfig } from '@config/site';
import { getPosts } from '@lib/sanity.api';

export default async function generateRssFeed() {
    const { url, logo } = siteConfig
    const feedOptions = {
        title: 'Atuhaire Collins Blog posts | RSS Feed',
        description: 'Welcome to Atuhaire Collins Benda\'s blog posts!',
        site_url: url,
        favicon: `${url}favicon.ico`,
        feed_url: `${url}rss.xml`,
        image_url: logo.light,
        pubDate: new Date(),
        language: "en",
        copyright: `© All rights reserved ${new Date().getFullYear()}, Kolynzb`,
    };

    const allPosts = await getPosts();
    const feed = new RSS(feedOptions);
    allPosts.map((post) => {
        feed.item({
            title: post.title,
            description: post.excerpt,
            guid: post._id,
            url: `${url}post/${post.slug}`,
            date: new Date(post._updatedAt),
            author: post.author.name,
            categories: post.categories.map(category => category.title) || [],
            enclosure: {
                url: post.mainImage,
            },
        });
    });

    return feed
}