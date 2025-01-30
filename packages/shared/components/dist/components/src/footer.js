'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const logo_1 = __importDefault(require("./logo"));
const Main = styled_components_1.default.footer `
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
const Footer = ({ svg }) => {
    return (react_1.default.createElement(Main, null,
        react_1.default.createElement("div", { className: "flex justify-center flex-col" },
            react_1.default.createElement(logo_1.default, { version: 'light', width: 180, svg: svg, route: '/' }))));
};
exports.default = Footer;
