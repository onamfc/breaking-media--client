"use client";

import {usePathname} from "next/navigation";
import {Header} from "@breakingmedia/components";
import {Footer} from "@breakingmedia/components";
import DailVerseLogo from "@/app/components/dailyVerseLogo";

export default function HeaderFooterWrapper({children}: { children: React.ReactNode }) {
    const pathname = usePathname();
    const shouldShowHeaderFooter = pathname !== "/";

    const route = "/scriptures";
    const width = 260;
    const DailVerseSVG = DailVerseLogo(); // Call the BreakingMediaLogo function to get the SVG string

    return (
        <>
            {shouldShowHeaderFooter && <Header route={route} width={width} svg={DailVerseSVG}/>}
            {children}
            {shouldShowHeaderFooter && <Footer/>}
        </>
    );
}
