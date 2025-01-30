import React from 'react';

interface Post {
    id: number;
    title: string;
    slug: string;
    category?: {
        name: string;
    };
}

const RelatedPosts: React.FC<{ relatedPosts: Post[] }> = ({relatedPosts}) => {
    return (

        <div className="md:p-4 pt-0">
            <div className="section-divider">
                <div className="section-divider-line"/>
                <span className="section-category-title">Related Passages</span>
            </div>
            <ul className="space-y-4">
                {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                        <li
                            key={relatedPost.id}
                            style={{borderBottom: '1px solid #000', paddingBottom: '12px'}}
                        >
                            <p className="text-sm text-gray-500">
                                {relatedPost.category?.name || 'Uncategorized'}
                            </p>
                            <a
                                href={`/scripture/${relatedPost.slug}`}
                                className="hover:underline block font-bold pb-1.5 text-[14px]"
                            >
                                {relatedPost.title}
                            </a>
                        </li>
                    ))
                ) : (
                    <p className="text-sm text-gray-500">No related passages found.</p>
                )}
            </ul>
        </div>

    );
};

export default RelatedPosts;
