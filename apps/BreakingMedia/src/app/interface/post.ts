export interface Post {
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
