"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@breakingmedia/components";
import { Footer } from "@breakingmedia/components";
import BreakingMediaLogo from "@/app/components/breakingMediaLogo";

export default function HeaderFooterWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const shouldShowHeaderFooter = pathname !== "/";

    const route = "/articles";
    const width = 300;

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => setScreenWidth(window.innerWidth);

        updateWidth(); // Set initial screen width on mount
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth); // Cleanup on unmount
    }, []);

    const breakingMediaSVG = BreakingMediaLogo(
        width > screenWidth * 0.50 ? screenWidth * 0.50 : width,
        'var(--foreground)',
        'var(--color-highlight)');

    const breakingMediaFooterSVG = BreakingMediaLogo(
        width > screenWidth * 0.50 ? screenWidth * 0.50 : width,
        '#fff',
        'var(--color-highlight)');

    return (
        <>
            {shouldShowHeaderFooter && <Header route={route} width={width} svg={breakingMediaSVG} />}
            {children}
            {shouldShowHeaderFooter && <Footer svg={breakingMediaFooterSVG} />}
        </>
    );
}
