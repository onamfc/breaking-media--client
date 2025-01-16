import React from "react";
import Logo from "@/app/components/logo";
import Link from "next/link";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-4 sm:px-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div>
                    <Logo version={'dark'} width={340}/>
                </div>
                <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2 md:pr-72">
                        At BREAKING Media, we merge cutting-edge artificial intelligence with compelling storytelling to redefine how the world consumes content. Our AI-driven platform doesn’t just report stories—it evolves with them, delivering personalized, impactful narratives that inform, inspire, and ignite action.
                        Ready to experience the future of media?
                    </li>
                </ul>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <Link
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                        href="/blog"
                        target="_self"
                    >
                        See it in action
                    </Link>
                    <Link
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="/about"
                        target="_self"
                    >
                        How it works
                    </Link>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <Link
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="/donate"
                    target="_self"
                >
                    Donate
                </Link>
            </footer>
        </div>
    );
}
