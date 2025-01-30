'use client';

import React from "react";
import styled from "styled-components";
import Logo from "./logo";

const Main = styled.footer`
    background-color: #000;
    color: #fff;
    padding: 1rem 2rem;
    text-align: center;
    font-family: 'PT Sans', sans-serif;
    display: grid;
    column-gap: 2rem;

    grid-area: 1 /1 auto /-1;
    width: 100%;
    border-bottom: 2px solid var(--color-highlight);

    h1 {
        font-size: 1rem;
        margin-bottom: .5rem;
    }


    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(12, 1fr);
    }

    div {
        max-width: 800px;
        margin: 0 auto;
        font-size: 0.875em;
        line-height: 1.25em;
        @media screen and (min-width: 1024px) {
            grid-column: 4 / -4;
        }

        a {
            color: var(--color-highlight);
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

interface FooterProps {
    svg: string;
}

const Footer: React.FC<any> = ({svg}) => {
    return (
        <Main>
            <div className="flex justify-center flex-col">
                <Logo version={'light'} width={180} svg={svg} route={'/'}/>
            </div>
        </Main>
    )
}

export default Footer;
