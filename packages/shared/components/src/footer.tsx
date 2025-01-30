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
    border-bottom: 2px solid #dc1010;

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
            color: #0af;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

const Footer: React.FC = () => {
    return (
        <Main>
            <div className="flex justify-center flex-col">
                <Logo version={'light'} width={180} svg={''} logoRoute={'/'}/>
                <p style={{fontSize: '.750rem', letterSpacing: '.0625em', marginTop: '12px'}}>
                    This website showcases the capabilities of artificial intelligence by generating all
                    editorial content on this website for entertainment purposes. Curious to learn more? <a
                    href="#">More to come&hellip;</a>
                </p>
            </div>
        </Main>
    )
}

export default Footer;
