'use client';
import React, {useMemo} from 'react';
import "./style.css";
import Image from "next/image";
import FeaturedPost from "@/app/components/featuredPost/featured";
import {Post} from "@/app/interface/post";
import {useHandlePostClick} from "@/app/helpers";

const BlogClient = ({posts, featuredPost}: { posts: Post[]; featuredPost: Post | null }) => {
    const handlePostClick = useHandlePostClick();
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



    return (
        <div id="post-container">
            <section id="post-wrapper">
                {featuredPost && (
                    <FeaturedPost featuredPost={featuredPost} />
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
                                        width={360} // Maximum width
                                        height={240} // Maximum height
                                        objectFit="cover"
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
