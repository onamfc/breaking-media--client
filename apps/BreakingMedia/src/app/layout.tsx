import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "../styles/globals.css";
import Script from 'next/script';
import HeaderFooterWrapper from "@/app/components/HeaderFooterWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Breaking Media",
    description: "Breaking Media is a dynamic editorial platform that delivers engaging articles on diverse topics. The site utilizes cutting-edge AI technology to generate and manage content, offering readers a seamless browsing experience. Breaking Media prioritizes inclusivity and diverse storytelling, alongside other progressive themes. With real-time API-driven content updates, the platform ensures fresh and relevant articles tailored to the interests of its audience.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Breaking Media</title>
            <Script
                src="https://xant.us/widget/xantus-production.js?s=breakingmedia"
                type="application/javascript"
                strategy="afterInteractive"
            />
            <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/api/rss" />
            <link rel="sitemap" type="application/xml" title="Sitemap" href="/api/sitemap" />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <SpeedInsights/>
        <HeaderFooterWrapper>{children}</HeaderFooterWrapper>
        </body>
        </html>
    );
}
