import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
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
};

export default nextConfig;
