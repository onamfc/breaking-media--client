"use client";

import {usePathname} from "next/navigation";
import {Header} from "@breakingmedia/components";
import {Footer} from "@breakingmedia/components";
import BreakingMediaLogo from "@/app/components/breakingMediaLogo";

export default function HeaderFooterWrapper({children}: { children: React.ReactNode }) {
    const pathname = usePathname();
    const shouldShowHeaderFooter = pathname !== "/";

    const route = "/articles";
    const width = 300;
    const screenWidth = window.innerWidth;
    const breakingMediaSVG = BreakingMediaLogo(width > screenWidth*.50 ? screenWidth*.50 : width ); // Call the BreakingMediaLogo function to get the SVG string

    return (
        <>
            {shouldShowHeaderFooter && <Header route={route} width={width} svg={breakingMediaSVG}/>}
            {children}
            {shouldShowHeaderFooter && <Footer svg={breakingMediaSVG}/>}
        </>
    );
}
