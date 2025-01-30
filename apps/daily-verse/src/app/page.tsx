import React from "react";
import {Logo} from "@breakingmedia/components";
import Link from "next/link";
import DailVerseLogo from '@/app/components/dailyVerseLogo';

export default function Home() {
    const DailVerseSVG = DailVerseLogo();
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-4 sm:px-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div>
                    <Logo width={260} svg={DailVerseSVG} route={'/scripture'}/>
                </div>
                <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2 md:pr-72">
                        At dailyverse.ai, we merge cutting-edge artificial intelligence...
                    </li>
                </ul>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <Link
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="/scripture"
                        target="_self"
                    >
                        See it in action
                    </Link>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}
