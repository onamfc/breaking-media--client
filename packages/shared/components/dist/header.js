'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const logo_1 = __importDefault(require("./logo"));
const HeaderContainer = styled_components_1.default.header `
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
const Nav = styled_components_1.default.nav `
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
const Header = ({ route, width, svg }) => {
    console.log('svg', svg);
    return (react_1.default.createElement(HeaderContainer, null,
        react_1.default.createElement(logo_1.default, { version: "dark", width: width, svg: svg, logoRoute: route }),
        react_1.default.createElement(Nav, null)));
};
exports.default = Header;
