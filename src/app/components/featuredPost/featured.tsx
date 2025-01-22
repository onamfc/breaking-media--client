import Image from "next/image";
import React from "react";
import {oswald} from "@/app/font/oswald";
import {Post} from "@/app/interface/post";
import {useHandlePostClick} from "@/app/helpers";
import "./featuredStyles.css";

const FeaturedPost = ({featuredPost}: {featuredPost: Post}) => {
    const handlePostClick = useHandlePostClick();
    return (
        <article id="featured-article">
            <div id="featured-article--content">
                <div style={{flex: 4, marginBottom: '24px'}}>
                    <Image className="article-image"
                           layout="responsive"
                           width={1170} // Maximum width
                           height={571} // Maximum height
                           objectFit="cover"
                           onClick={() => handlePostClick(featuredPost.slug)}
                           src={'https://api.breakingmedia.ai/storage/' + featuredPost.image || 'https://via.placeholder.com/900x600'}
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
    )
}
export default FeaturedPost;
