"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function HeaderFooterWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const shouldShowHeaderFooter = pathname !== "/";

    return (
        <>
            {shouldShowHeaderFooter && <Header />}
            {children}
            {shouldShowHeaderFooter && <Footer />}
        </>
    );
}
