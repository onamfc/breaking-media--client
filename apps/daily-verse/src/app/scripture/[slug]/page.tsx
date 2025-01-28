import React from 'react';
import axios from 'axios';
import {Metadata} from 'next';
import '../style.css';
import Image from "next/image";
import {oswald} from "@/app/font/oswald";


// Fetch the single post data based on the slug
async function fetchPost(slug: string) {
    try {
        const response = await axios.get(`https://api.breakingmedia.ai/post/${slug}`);
        return response.data.data;
    } catch (error) {
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
                url: `https://api.breakingmedia.ai/articles/${slug}`,
                type: 'article',
            },
        };
    } catch (error) {
        return {
            title: 'Article Post Not Found',
            description: 'We could not load the content for this article post.',
        };
    }
}

function getInitials(name: string): string {
    // Split the name by spaces, filtering out empty strings
    const nameParts = name.split(' ').filter(part => part.length > 0);

    // Map each part to its first letter and join them
    return nameParts.map(part => part[0].toUpperCase()).join('');

}

// Fetch related posts based on the post ID
async function fetchRelatedPosts(currentSlug: string) {
    try {
        const response = await axios.get(`https://api.breakingmedia.ai/posts/${currentSlug}/related`);
        return response.data;
    } catch (error) {
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
        return (
            <div className="container mx-auto px-4 max-w-[1000px] pb-[80px]">
                <h1 className="text-2xl font-bold text-red-500">Post Not Found</h1>
                <p className="text-gray-600">
                    We couldn't retrieve the requested article post. Please try again later.
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
            : 'https://breakingmedia.ai/breakingMediaLogo.png',
        author: {
            "@type": "Person",
            name: post.author?.name,
            description: post.author?.bio,
        },
        datePublished: post.created_at,
        dateModified: post.updated_at || post.created_at,
        publisher: {
            "@type": "Organization",
            "name": "breakingmedia.ai",
            "logo": {
                "@type": "ImageObject",
                "url": "https://breakingmedia.ai/breakingMediaLogo.png"
            }
        },
        articleSection: post.category?.name,
        description: post.excerpt,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://breakingmedia.ai/articles/${post.slug}`,
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
                        layout="responsive"
                        width={1170} // Maximum width
                        height={571} // Maximum height
                        objectFit="cover" // Ensures image covers container but maintains aspect ratio
                    />
                </div>

                <div className="flex justify-between items-center my-4 text-sm text-gray-500">
                    <div>
                        <span className="font-semibold">{post.author?.name}</span>
                        <span> | </span>
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
                            <div id="post-content" dangerouslySetInnerHTML={{__html: post.content}}/>
                        </div>
                    </div>
                    {/* Sidebar */}
                    <div className="lg:w-1/4">

                    </div>
                </div>

                <div className="flex items-start gap-4 border-t border-gray-200 pt-8">
                    {/* Author Photo */}
                    <div className="w-[120px]">
                        <div
                            className="flex items-center text-2xl w-20 h-20 rounded-full object-cover bg-gray-700 text-white justify-center align-middle"
                        >

                            {
                                post.author?.photo ? (
                                    <Image
                                        src={`https://api.breakingmedia.ai/storage/${post.author?.photo}`}
                                        alt={post.author?.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full"
                                    />
                                ) : getInitials(post.author?.name)
                            }
                        </div>
                    </div>

                    {/* Author Info */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">{post.author?.name}</h3>
                        <p className="text-sm text-gray-600">{post.author?.bio}</p>
                    </div>
                </div>
            </div>
        </>
    );
};


