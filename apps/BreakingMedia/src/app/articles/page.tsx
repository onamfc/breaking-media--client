import React from 'react';
import BlogClient from '@/app/articles/blogClient';

interface Post {
    id: number;
    title: string;
    excerpt: string;
    html?: string;
    image?: string;
    slug: string;
    category?: {
        name: string;
    };
    author?: {
        name: string;
    };
}

async function fetchPosts(): Promise<Post[]> {
    try {
        const res = await fetch(`https://api.breakingmedia.ai/posts`, {
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

const BlogPage = async () => {
    const posts = await fetchPosts(); // Fetch data server-side
    const featuredPost = posts.length > 0 ? posts[0] : null;
    const remainingPosts = posts.slice(1);

    return (
        <div>
            {/* Pass fetched data to Client Component */}
            <BlogClient posts={remainingPosts} featuredPost={featuredPost} />
        </div>
    );
};

export default BlogPage;
