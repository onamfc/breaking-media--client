import {NextResponse} from 'next/server';
import RSS from 'rss';

export async function GET() {
    // Create an RSS feed instance
    const feed = new RSS({
        title: 'Daily Versse',
        description: 'A better way to comprehend scripture.',
        feed_url: 'https://dailyverse.ai/api/rss',
        site_url: 'https://dailyverse.ai',
        language: 'en',
    });

    // Fetch your posts from the server
    const posts = await fetch(`https://api.breakingmedia.ai/posts`).then(res => res.json());

    // Add items to the feed
    posts.forEach((post: any) => {
        feed.item({
            title: post.title,
            description: post.excerpt,
            url: `https://dailyverse.ai/scripture/${post.slug}`,
            date: post.created_at,
            categories: [post.category?.name]
        });
    });

    // Return the RSS feed as XML
    return new NextResponse(feed.xml({indent: true}), {
        headers: {
            'Content-Type': 'application/rss+xml',
        },
    });
}
