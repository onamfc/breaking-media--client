'use client';
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useRouter} from "next/navigation";

const LogoContainer = styled.div`
    cursor: pointer;
`;

interface LogoProps {
    version?: 'dark' | 'light';
    width: number;
    svg: string; // Accepts SVG as a string
    logoRoute: string;
}

const Logo: React.FC<LogoProps> = ({version, width, svg, logoRoute}) => {
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const htmlElement = document.documentElement;

        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            htmlElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            htmlElement.classList.add('light');
            setIsDarkMode(false);
        }
    }, []);

    return (
        <LogoContainer onClick={() => router.push(`${logoRoute}`)} style={{
            width: `${width}px`,
            height: 'auto',
        }}>
            <div dangerouslySetInnerHTML={{__html: svg}} // Inline SVG rendering
            />
        </LogoContainer>
    );
};

export default Logo;
