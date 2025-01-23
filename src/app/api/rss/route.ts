import { NextResponse } from 'next/server';
import RSS from 'rss';

export async function GET() {
    // Create an RSS feed instance
    const feed = new RSS({
        title: 'Breaking Media',
        description: 'The latest news and articles from Breaking Media',
        feed_url: 'https://breakingmedia.ai/api/rss',
        site_url: 'https://breakingmedia.ai',
        language: 'en',
    });

    // Fetch your posts from the server
    const posts = await fetch(`https://api.breakingmedia.ai/posts`).then(res => res.json());

    // Add items to the feed
    posts.forEach((post: any) => {
        feed.item({
            title: post.title,
            description: post.excerpt,
            url: `https://breakingmedia.ai/articles/${post.slug}`,
            date: post.created_at,
            categories: [post.category?.name],
            author: post.author?.name,
        });
    });

    // Return the RSS feed as XML
    return new NextResponse(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/rss+xml',
        },
    });
}
