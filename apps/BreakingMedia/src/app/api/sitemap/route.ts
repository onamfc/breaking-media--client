import { NextResponse } from 'next/server';
import {Post} from "@/app/interface/post";

async function fetchSitemap(): Promise<Post[]> {
    try {
        const res = await fetch(`https://api.breakingmedia.ai/sitemap`, {
            cache: 'no-store', // Prevent caching for real-time data
            headers: {
                'X-Origin-Domain': 'https://breakingmedia.ai',
            },
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch posts: ${res.statusText}`);
        }
        return await res.json();
    } catch (error) {
        return [];
    }
}

export async function GET() {
    const baseUrl = 'https://breakingmedia.ai';

    // Define static pages
    const staticPages = ['', 'about', 'donate', 'articles'];

    // Fetch dynamic articles from your API
    const posts = await fetchSitemap();

    // Generate XML for static pages
    const staticSitemap = staticPages
        .map((page) => `
        <url>
            <loc>${baseUrl}/${page}</loc>
            <changefreq>daily</changefreq>
            <priority>1.0</priority>
        </url>
    `)
        .join('');

    // Generate XML for dynamic articles
    const articlesSitemap = posts
        .map((post: any) => `
        <url>
            <loc>${baseUrl}/articles/${post.slug}</loc>
            <lastmod>${new Date(post.updated_at || post.created_at).toISOString()}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.8</priority>
        </url>
    `)
        .join('');

    // Add RSS feed to the sitemap
    const rssSitemap = `
        <url>
            <loc>${baseUrl}/api/rss</loc>
            <changefreq>hourly</changefreq>
            <priority>0.9</priority>
        </url>
    `;

    // Combine static pages, articles, and RSS feed into the final sitemap
    const sitemap = `
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticSitemap}
            ${articlesSitemap}
            ${rssSitemap}
        </urlset>
    `;

    // Return the sitemap as XML
    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 's-maxage=86400, stale-while-revalidate=3600',
        },
    });
}
