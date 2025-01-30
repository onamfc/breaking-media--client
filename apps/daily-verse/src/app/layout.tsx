import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "../styles/globals.css";
import Script from 'next/script';
import HeaderFooterWrapper from "@/app/components/HeaderFooterWrapper";
import {SpeedInsights} from "@vercel/speed-insights/next"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Daily Verse",
    description: "Daily Verse is a dynamic...",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <title>Daily Verse</title>
            <Script
                src="https://xant.us/widget/xantus-production.js?s=dailyverse"
                type="application/javascript"
                strategy="afterInteractive"
            />
            <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/api/rss"/>
            <link rel="sitemap" type="application/xml" title="Sitemap" href="/api/sitemap"/>
            <link rel="manifest" href="/manifest.json"/>
            <meta name="theme-color" content="#2196f3"/>
            <link rel="icon" href="/dailyverse-192.png"/>
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
