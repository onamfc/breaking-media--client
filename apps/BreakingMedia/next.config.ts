import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.breakingmedia.ai",
                pathname: "/storage/blog-images/**",
            },
            {
                protocol: "https",
                hostname: "api.breakingmedia.ai",
                pathname: "/storage/headshot/**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/articles',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
