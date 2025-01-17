'use client';
import React, {useMemo} from 'react';
import {useRouter} from 'next/navigation';
import "./style.css";
import {Oswald} from 'next/font/google';
import Image from "next/image";

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
    date?: string;
}

const oswald = Oswald({subsets: ['latin'], weight: ['400', '700']});
const BlogClient = ({posts, featuredPost}: { posts: Post[]; featuredPost: Post | null }) => {
    const router = useRouter();
    const groupedPosts = useMemo(() => {
        return posts.reduce((acc: Record<string, Post[]>, post: Post) => {
            const categoryName = post.category?.name || 'Uncategorized';
            if (!acc[categoryName]) {
                acc[categoryName] = [];
            }
            acc[categoryName].push(post);
            return acc;
        }, {});
    }, [posts]);

    const handlePostClick = (slug: string) => {
        // Navigate to the single post page
        router.push(`/blog/${slug}`);
    };

    return (
        <div id="post-container">
            <section id="post-wrapper">
                {featuredPost && (
                    <article id="featured-article">
                        <div style={{display: 'flex', flexDirection: 'row', maxHeight: '400px'}}>
                            <div style={{flex: 4, marginBottom: '24px'}}>
                                <Image className="article-image"
                                     onClick={() => handlePostClick(featuredPost.slug)}
                                     src={'https://api.breakingmedia.ai/storage/blog-images/3.jpg'}
                                     alt={featuredPost.title}/>
                            </div>
                            <div style={{flex: 3}}>
                                <div className="article-content">
                                    <span className="post-category">{featuredPost.category?.name}</span>
                                    <h2 onClick={() => handlePostClick(featuredPost.slug)}
                                        className={oswald.className}>{featuredPost.title}
                                    </h2>
                                    <div className="post-excerpt">{featuredPost.excerpt}</div>
                                    <span className="author">{featuredPost.author?.name}</span>
                                </div>
                            </div>
                        </div>
                    </article>
                )}

                {Object.entries(groupedPosts).map(([category, categoryPosts]) => (
                    <div key={category}>
                        <div className="section-divider">
                            <div className="section-divider-line"/>
                            <span className="section-category-title">{category}</span>
                        </div>
                        <main className="post-section">
                            {categoryPosts.map((post) => (
                                <article className="post" key={post.id}>
                                    <Image
                                        className="article-image"
                                        onClick={() => handlePostClick(post.slug)}
                                        src={
                                            'https://api.breakingmedia.ai/storage/' + post.image || 'https://via.placeholder.com/1920x1080'
                                        }
                                        alt={post.title}
                                    />
                                    <div className="article-content">
                                        <span className="post-category">{post.category?.name}</span>
                                        <h2 onClick={() => handlePostClick(post.slug)}>{post.title}</h2>
                                        <p>{post.excerpt}</p>
                                        <span className="author">{post.author?.name}</span>
                                    </div>
                                </article>
                            ))}
                        </main>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default BlogClient;
