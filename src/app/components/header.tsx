'use client';

import React from "react";
import styled from "styled-components";
import Logo from "@/app/components/logo";


const HeaderContainer = styled.header`
    background-color: var(--background); /* Dynamically adjusts for dark mode */
    color: var(--foreground); /* Dynamically adjusts for dark mode */
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--foreground); /* Adapts to dark mode */
    max-width: 1200px;
    margin: 0 auto;
    transition: background-color 0.3s, color 0.3s; /* Smooth transition */
`;

const Nav = styled.nav`
    margin-left: 2rem;
    width: 100%;
    text-transform: uppercase;

    a {
        color: var(--foreground); /* Dynamically adjusts for dark mode */
        text-decoration: none;
        margin: 0 1rem;
        font-size: 0.8em;

        &:hover {
            text-decoration: underline;
        }
    }
`;


const Header: React.FC = () => {
    return (
        <>
            <HeaderContainer>
               <Logo version={'dark'} width={260}/>
                <Nav>

                </Nav>
            </HeaderContainer>
        </>
    );
}

export default Header;
