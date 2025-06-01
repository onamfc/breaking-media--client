import React from 'react';
import axios from 'axios';
import {Metadata} from 'next';
import '../style.css';
import Image from "next/image";
import {oswald} from "@/app/font/oswald";
import ReactMarkdown from 'react-markdown';
import RelatedPosts from '@/app/components/relatedPosts';

// Fetch the single post data based on the slug
async function fetchPost(slug: string) {
    try {
        const response = await axios.get(`https://api.breakingmedia.ai/post/${slug}`,
            {
                headers: {
                    'X-Origin-Domain': 'https://dailyverse.ai',
                },
            });
        return response.data.data;
    } catch (error) {
        error = null;
        console.log(error)
        throw new Error('Failed to fetch post data');
    }
}

// Dynamic metadata for the page
export async function generateMetadata(props: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const params = await props.params
    // Safely use `params.slug` in the async context
    const {slug} = params

    try {
        const post = await fetchPost(slug);

        return {
            title: post.title,
            description: post.excerpt,
            openGraph: {
                title: post.title,
                description: post.excerpt,
                images: post.image
                    ? `https://api.breakingmedia.ai/storage/${post.image}`
                    : 'https://via.placeholder.com/1920x1080',
                url: `https://dailyverse.ai/scripture/${slug}`,
                type: 'article',
            },
        };
    } catch (error) {
        error = null;
        console.log(error)
        return {
            title: 'Scripture Post Not Found',
            description: 'We could not load the content for this scripture.',
        };
    }
}


// Fetch related posts based on the post ID
async function fetchRelatedPosts(currentSlug: string) {
    try {
        const response = await axios.get(`https://api.breakingmedia.ai/posts/${currentSlug}/related`,
            {
                headers: {
                    'X-Origin-Domain': 'https://dailyverse.ai',
                },
            });
        return response.data;
    } catch (error) {
        error = null;
        console.log(error)
        return [];
    }
}

export default async function SinglePostPage(props: { params: Promise<{ slug: string }> }) {
    const {slug} = await props.params
    let post;
    let relatedPosts = [];

    try {
        post = await fetchPost(slug);
        relatedPosts = await fetchRelatedPosts(slug);
    } catch (error) {
        error = null;
        console.log(error)
        return (
            <div className="container mx-auto px-4 max-w-[1000px] pb-[80px]">
                <h1 className="text-2xl font-bold text-red-500">Scripture Not Found</h1>
                <p className="text-gray-600">
                    We could not retrieve the requested scripture post. Please try again later.
                </p>
            </div>
        );
    }

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: post.title,
        image: post.image
            ? `https://api.breakingmedia.ai/storage/${post.image}`
            : 'https://dailyverse.ai/dailyVerse.png',
        datePublished: post.created_at,
        dateModified: post.updated_at || post.created_at,
        publisher: {
            "@type": "Organization",
            "name": "dailyverse.ai",
            "logo": {
                "@type": "ImageObject",
                "url": "https://dailyverse.ai/dailyVerse.png"
            }
        },
        articleSection: post.category?.name,
        description: post.excerpt,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://dailyverse.ai/scripture/${post.slug}`,
        },
    };

    return (
        <>
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            <div className="container mx-auto px-4 max-w-[1170px] pb-[80px] pt-2.5">
                <div
                    className="relative mx-auto"
                    style={{
                        maxWidth: "1170px",
                        maxHeight: "571px",
                        width: "100%",
                        height: "auto",
                        overflow: "hidden",
                    }}
                >
                    <Image
                        src={
                            post.image
                                ? `https://api.breakingmedia.ai/storage/${post.image}`
                                : 'https://via.placeholder.com/1920x1080'
                        }
                        alt={post.title}
                        width={1170} // Maximum width
                        height={571} // Maximum height
                        objectFit="cover" // Ensures image covers container but maintains aspect ratio
                    />
                </div>

                <div className="flex justify-between items-center my-4 text-sm text-gray-500">
                    <div>
                        <span>{post.category?.name}</span>
                        <span> | </span>
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 mt-4 mb-8">
                    <div className="lg:w-3/4">
                        <h1 className={`${oswald.className} text-gray-800`}>{post.title}</h1>
                        <p className="mt-2 text-gray-600">{post.excerpt}</p>
                        <div className="prose prose-lg tracking-normal text-[18px]">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div className="lg:w-1/4">
                        <RelatedPosts relatedPosts={relatedPosts}/>
                    </div>
                </div>

            </div>
        </>
    );
};


