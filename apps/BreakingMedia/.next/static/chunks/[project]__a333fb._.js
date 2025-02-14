(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]__a333fb._.js", {

"[project]/packages/shared/components/dist/components/src/logo.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __importStar(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const styled_components_1 = __importDefault(__turbopack_require__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)"));
const navigation_1 = __turbopack_require__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
const LogoContainer = styled_components_1.default.div`
    cursor: pointer;
`;
const Logo = ({ version, width, svg, route })=>{
    const router = (0, navigation_1.useRouter)();
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(()=>{
        const htmlElement = document.documentElement;
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || !savedTheme && prefersDark) {
            htmlElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            htmlElement.classList.add('light');
            setIsDarkMode(false);
        }
    }, []);
    return react_1.default.createElement(LogoContainer, {
        onClick: ()=>router.push(`${route}`),
        style: {
            width: `${width}px`,
            height: 'auto'
        }
    }, react_1.default.createElement("div", {
        dangerouslySetInnerHTML: {
            __html: svg
        }
    }));
};
exports.default = Logo;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/shared/components/dist/components/src/header.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __importDefault(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const styled_components_1 = __importDefault(__turbopack_require__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)"));
const logo_1 = __importDefault(__turbopack_require__("[project]/packages/shared/components/dist/components/src/logo.js [app-client] (ecmascript)"));
const HeaderContainer = styled_components_1.default.header`
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
const Nav = styled_components_1.default.nav`
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
const Header = ({ route, width, svg })=>{
    return react_1.default.createElement(HeaderContainer, null, react_1.default.createElement(logo_1.default, {
        version: "dark",
        width: width,
        svg: svg,
        route: route
    }), react_1.default.createElement(Nav, null));
};
exports.default = Header;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/shared/components/dist/components/src/footer.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __importDefault(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const styled_components_1 = __importDefault(__turbopack_require__("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)"));
const logo_1 = __importDefault(__turbopack_require__("[project]/packages/shared/components/dist/components/src/logo.js [app-client] (ecmascript)"));
const Main = styled_components_1.default.footer`
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
const Footer = ({ svg })=>{
    return react_1.default.createElement(Main, null, react_1.default.createElement("div", {
        className: "flex justify-center flex-col"
    }, react_1.default.createElement(logo_1.default, {
        version: 'light',
        width: 180,
        svg: svg,
        route: '/'
    })));
};
exports.default = Footer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/shared/components/dist/components/src/advertisement.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = this && this.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const react_1 = __importStar(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const axios_1 = __importDefault(__turbopack_require__("[project]/node_modules/axios/dist/browser/axios.cjs [app-client] (ecmascript)"));
const Advertisement = ({ adType, adId })=>{
    const [ad, setAd] = (0, react_1.useState)(null);
    const [imageError, setImageError] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(()=>{
        const fetchAd = ()=>__awaiter(void 0, void 0, void 0, function*() {
                try {
                    const response = yield axios_1.default.get(`https://api.breakingmedia.ai/ads/${adId}`, {
                        headers: {
                            'X-Origin-Domain': 'https://breakingmedia.ai'
                        }
                    });
                    if (response.data) {
                        console.log('Ad data fetched:', response.data);
                        setAd(response.data);
                    } else {
                        console.error('Ad data is empty or invalid');
                    }
                } catch (error) {
                    console.error('Error fetching ad:', error);
                }
            });
        fetchAd();
    }, [
        adId
    ]);
    const trackAdClick = ()=>__awaiter(void 0, void 0, void 0, function*() {
            try {
                yield axios_1.default.post(`https://breakingmedia.ai/ads/click`, {
                    ad_id: adId,
                    ad_slot: (ad === null || ad === void 0 ? void 0 : ad.slot) || 'default'
                });
            } catch (error) {
                console.error('Error tracking ad click:', error);
            }
        });
    const handleClick = ()=>{
        if (ad && ad.click_url) {
            trackAdClick();
            window.open(ad.click_url, '_blank');
        }
    };
    if (!ad) {
        return react_1.default.createElement("div", {
            style: {
                backgroundColor: '#f0f0f0'
            }
        }, react_1.default.createElement("p", {
            style: {
                textAlign: 'center',
                padding: '10px',
                color: '#888'
            }
        }, "Loading ad..."));
    }
    const imageUrl = ad.image_url.startsWith('http') ? ad.image_url : `https://breakingmedia.ai/storage/${ad.image_url}`;
    return react_1.default.createElement("div", {
        style: {
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer'
        },
        onClick: handleClick
    }, react_1.default.createElement("img", {
        src: imageUrl,
        alt: ad.name || 'Advertisement',
        style: {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
            backgroundColor: '#fff'
        },
        onError: ()=>{
            console.error('Image failed to load:', imageUrl);
            setImageError(true);
        }
    }), imageError && react_1.default.createElement("div", {
        style: {
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0'
        }
    }, react_1.default.createElement("p", {
        style: {
            textAlign: 'center',
            padding: '10px',
            color: '#888'
        }
    }, "Failed to load ad image.")));
};
exports.default = Advertisement;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/packages/shared/components/dist/components/src/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Advertisement = exports.Logo = exports.Footer = exports.Header = void 0;
var header_1 = __turbopack_require__("[project]/packages/shared/components/dist/components/src/header.js [app-client] (ecmascript)");
Object.defineProperty(exports, "Header", {
    enumerable: true,
    get: function() {
        return __importDefault(header_1).default;
    }
});
var footer_1 = __turbopack_require__("[project]/packages/shared/components/dist/components/src/footer.js [app-client] (ecmascript)");
Object.defineProperty(exports, "Footer", {
    enumerable: true,
    get: function() {
        return __importDefault(footer_1).default;
    }
});
var logo_1 = __turbopack_require__("[project]/packages/shared/components/dist/components/src/logo.js [app-client] (ecmascript)");
Object.defineProperty(exports, "Logo", {
    enumerable: true,
    get: function() {
        return __importDefault(logo_1).default;
    }
});
var advertisement_1 = __turbopack_require__("[project]/packages/shared/components/dist/components/src/advertisement.js [app-client] (ecmascript)");
Object.defineProperty(exports, "Advertisement", {
    enumerable: true,
    get: function() {
        return __importDefault(advertisement_1).default;
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/BreakingMedia/src/app/components/breakingMediaLogo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const BreakingMediaLogo = (width, fill, highlight)=>{
    const fillColor = fill; // Automatically adapts to the current theme
    const highlightColor = highlight;
    return `
      <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="${width}"
                height="auto"
                version="1.1"
                style={{
                    shapeRendering: 'geometricPrecision',
                    textRendering: 'geometricPrecision',
                    fillRule: 'evenodd',
                    clipRule: 'evenodd'
                }}
                viewBox="0 0 948.19 121.75"
            >
                <path fill="${highlightColor}"
                      d="M584.33,0h344.38c10.71,0,19.48,8.77,19.48,19.48v82.79c0,10.71-8.77,19.48-19.48,19.48h-344.38c-10.71,0-19.48-8.77-19.48-19.48V19.48c0-10.71,8.76-19.48,19.48-19.48h0ZM628.82,77.05l-16.75-39.21c-2.12-5.23-3.92-6.21-8.74-6.21h-9.23c-5.64,0-7.11,2.04-7.11,8.5v46.89c0,1.23.57,1.8,1.8,1.8h8.58c1.23,0,1.8-.57,1.8-1.8v-42.64c0-.57.24-.82.74-.82h.74c.57,0,.82.16,1.06.65l15.93,36.6c2.53,6.13,5.15,8.01,10.46,8.01h4.66c5.31,0,8.01-1.88,10.46-8.01l15.77-36.6c.16-.49.49-.65,1.14-.65h.74c.41,0,.57.25.57.82v42.64c0,1.23.65,1.8,1.8,1.8h8.58c1.23,0,1.88-.57,1.88-1.8v-46.89c0-6.37-1.55-8.5-7.19-8.5h-9.07c-4.9,0-6.62.98-8.66,6.21l-16.66,39.21c-.16.49-.57.74-1.14.74h-.98c-.49,0-.9-.25-1.14-.74h0ZM875.93,37.84l-26.79,49.1c-.57,1.14-.33,1.88.98,1.88h10.7c1.06,0,1.47-.24,1.88-.98l5.31-9.97h39.13l5.39,9.97c.33.74.82.98,1.88.98h10.37c1.31,0,1.55-.74.98-1.88l-27.04-49.1c-2.7-4.98-5.15-6.21-9.39-6.21h-4.82c-3.43,0-5.96,1.23-8.58,6.21h0ZM886.3,43.8l-12.58,23.44h27.61l-12.66-23.44c-.25-.41-.57-.57-.98-.57h-.49c-.41,0-.65.16-.9.57h0ZM829.77,33.43v53.59c0,1.23.57,1.8,1.8,1.8h8.82c1.23,0,1.8-.57,1.8-1.8v-53.59c0-1.23-.57-1.8-1.8-1.8h-8.82c-1.23,0-1.8.57-1.8,1.8h0ZM753.96,34.08v52.28c0,1.63.82,2.45,2.45,2.45h38.15c17.73,0,25-7.11,25-23.04v-11.11c0-15.93-7.27-23.04-25-23.04h-38.15c-1.63,0-2.45.82-2.45,2.45h0ZM766.38,44.21v32.02c0,.74.33,1.06,1.06,1.06h26.79c9.64,0,12.91-2.94,12.91-12.58v-8.99c0-9.64-3.27-12.58-12.91-12.58h-26.79c-.73,0-1.06.33-1.06,1.06h0ZM683.87,53.2v14.05c0,15.6,6.29,21.57,22.87,21.57h35.94c1.14,0,1.8-.57,1.8-1.8v-7.92c0-1.14-.65-1.8-1.8-1.8h-35.86c-8.41,0-10.62-2.37-10.62-10.95v-.98h45.99c1.14,0,1.8-.57,1.8-1.8v-7.27c0-1.23-.65-1.8-1.8-1.8h-45.99v-.41c0-8.58,2.21-10.95,10.62-10.95h35.86c1.14,0,1.8-.65,1.8-1.8v-7.92c0-1.23-.65-1.8-1.8-1.8h-35.94c-16.58,0-22.87,5.96-22.87,21.57Z"/>
                <path fill="${highlightColor}"
                      d="M255.43,47.81l16.35,30.16h0l5.34,9.87c.32.73.81.97,1.86.97h10.28c1.29,0,1.54-.73.97-1.86l-21.9-39.77h-13.24l.34.62Z"/>
                <path fill="${highlightColor}"
                      d="M253.18,43.66h13.21l-2.94-5.34c-2.67-4.94-5.1-6.15-9.31-6.15h-4.77c-.81,0-1.56.07-2.28.24l6.1,11.25Z"/>
                <path fill="${fillColor}"
                      d="M65.35,69.94c0-4.9-1.8-8.41-5.55-10.62,3.35-2.21,5.15-5.64,5.15-10.29v-3.92c0-9.31-4.49-13.48-15.52-13.48H2.45c-1.63,0-2.45.82-2.45,2.45v52.28c0,1.63.82,2.45,2.45,2.45h48.44c10.29,0,14.46-4.9,14.46-14.13v-4.74h0ZM45.91,64.8c5.31,0,7.11,1.23,7.11,4.74v2.7c0,3.59-1.88,5.15-6.05,5.15H13.48c-.73,0-1.06-.33-1.06-1.14v-11.44h33.49ZM45.91,54.91H12.42v-10.7c0-.82.33-1.14,1.06-1.14h33.41c4.17,0,6.05,1.63,6.05,5.06v2.45c0,3.19-1.72,4.33-7.03,4.33Z"/>
                <path fill="${fillColor}"
                      d="M75.07,34.08v52.93c0,1.23.57,1.8,1.8,1.8h8.82c1.23,0,1.8-.57,1.8-1.8v-15.85h25.9l12.99,16.58c.57.74.98,1.06,2.29,1.06h10.95c1.31,0,1.72-1.31,1.06-2.12l-13.64-16.91c8.09-1.63,11.84-7.19,11.84-16.67v-4.74c0-11.27-5.39-16.75-17.56-16.75h-43.79c-1.63,0-2.45.82-2.45,2.45h0ZM87.49,60.38v-16.42c0-.65.33-.9,1.06-.9h30.23c5.47,0,7.6,2.04,7.6,7.02v3.43c0,4.9-2.04,6.86-7.6,6.86h-31.29Z"/>
                <path fill="${fillColor}"
                      d="M146.88,53.2v14.05c0,15.6,6.29,21.57,22.87,21.57h35.94c1.14,0,1.8-.57,1.8-1.8v-7.92c0-1.14-.65-1.8-1.8-1.8h-35.86c-8.41,0-10.62-2.37-10.62-10.95v-.98h45.99c1.14,0,1.8-.57,1.8-1.8v-7.27c0-1.23-.65-1.8-1.8-1.8h-45.99v-.41c0-8.58,2.21-10.95,10.62-10.95h35.86c1.14,0,1.8-.65,1.8-1.8v-7.92c0-1.23-.65-1.8-1.8-1.8h-35.94c-16.58,0-22.87,5.96-22.87,21.57Z"/>
                <path fill="${fillColor}"
                      d="M296.61,33.43v53.59c0,1.23.57,1.8,1.8,1.8h8.82c1.23,0,1.8-.57,1.8-1.8v-21.97h12.42c5.31,0,6.94.57,9.07,3.35l15.11,19.36c.57.82,1.06,1.06,2.37,1.06h10.37c1.39,0,1.71-1.47,1.06-2.12l-16.75-21.24c-2.04-2.61-4-4.49-6.21-5.88,1.55-1.31,3.1-3.1,4.9-5.47l15.85-20.5c.65-.82.24-1.96-.98-1.96h-10.21c-1.39,0-1.8.25-2.37,1.06l-14.21,18.79c-2.12,2.78-3.51,3.27-9.07,3.27h-11.36v-21.32c0-1.23-.57-1.8-1.8-1.8h-8.82c-1.23,0-1.8.57-1.8,1.8Z"/>
                <path fill="${fillColor}"
                      d="M389.74,40.13v46.89c0,1.23.57,1.8,1.8,1.8h8.74c1.14,0,1.8-.57,1.8-1.8v-42.64c0-.57.16-.82.65-.82h.74c.49,0,.73.16,1.06.57l30.14,39.86c2.53,3.59,3.51,4.82,9.39,4.82h7.27c5.15,0,7.35-2.04,7.35-8.5v-46.89c0-1.23-.57-1.8-1.8-1.8h-8.74c-1.23,0-1.8.57-1.8,1.8v42.64c0,.57-.24.82-.65.82h-.73c-.49,0-.82-.16-1.06-.57l-30.06-39.86c-2.61-3.59-3.59-4.82-9.48-4.82h-7.35c-5.15,0-7.27,2.04-7.27,8.5Z"/>
                <rect fill="${fillColor}" x="366.37" y="31.63" width="12.42" height="57.18" rx="1.8" ry="1.8"/>
                <path fill="${fillColor}"
                      d="M468.98,53.2v14.05c0,15.68,6.29,21.57,22.87,21.57h32.92c6.62,0,10.13-3.35,10.13-12.5v-19.44c0-1.63-.82-2.45-2.45-2.45h-34.06c-1.14,0-1.8.65-1.8,1.8v7.19c0,1.23.65,1.8,1.8,1.8h23.93c.65,0,.98.33.98,1.14v6.05c0,3.68-1.23,4.9-4.08,4.9h-26.96c-8.41,0-10.86-2.45-10.86-11.11v-11.76c0-8.66,2.45-11.19,10.86-11.19h40.93c1.14,0,1.8-.57,1.8-1.8v-8.01c0-1.23-.65-1.8-1.8-1.8h-41.33c-16.58,0-22.87,5.88-22.87,21.57Z"/>
                <path fill="${highlightColor}"
                      d="M260.31,67.45h-21.63l10.76-20.05-6.6-12.17c-.66.82-1.32,1.83-1.98,3.09l-26.54,48.63c-.57,1.13-.32,1.86.97,1.86h10.6c1.05,0,1.46-.24,1.86-.97l5.26-9.87h32.99l-5.7-10.52Z"/>
            </svg>
    `;
};
_c = BreakingMediaLogo;
const __TURBOPACK__default__export__ = BreakingMediaLogo;
var _c;
__turbopack_refresh__.register(_c, "BreakingMediaLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/BreakingMedia/src/app/components/HeaderFooterWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>HeaderFooterWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$components$2f$dist$2f$components$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/packages/shared/components/dist/components/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$BreakingMedia$2f$src$2f$app$2f$components$2f$breakingMediaLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/apps/BreakingMedia/src/app/components/breakingMediaLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function HeaderFooterWrapper({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const shouldShowHeaderFooter = pathname !== "/";
    const route = "/articles";
    const width = 300;
    const [screenWidth, setScreenWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderFooterWrapper.useEffect": ()=>{
            const updateWidth = {
                "HeaderFooterWrapper.useEffect.updateWidth": ()=>setScreenWidth(window.innerWidth)
            }["HeaderFooterWrapper.useEffect.updateWidth"];
            updateWidth(); // Set initial screen width on mount
            window.addEventListener("resize", updateWidth);
            return ({
                "HeaderFooterWrapper.useEffect": ()=>window.removeEventListener("resize", updateWidth)
            })["HeaderFooterWrapper.useEffect"]; // Cleanup on unmount
        }
    }["HeaderFooterWrapper.useEffect"], []);
    const breakingMediaSVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$BreakingMedia$2f$src$2f$app$2f$components$2f$breakingMediaLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(width > screenWidth * 0.50 ? screenWidth * 0.50 : width, 'var(--foreground)', 'var(--color-highlight)');
    const breakingMediaFooterSVG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$BreakingMedia$2f$src$2f$app$2f$components$2f$breakingMediaLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(width > screenWidth * 0.50 ? screenWidth * 0.50 : width, '#fff', 'var(--color-highlight)');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            shouldShowHeaderFooter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$components$2f$dist$2f$components$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                route: route,
                width: width,
                svg: breakingMediaSVG
            }, void 0, false, {
                fileName: "[project]/apps/BreakingMedia/src/app/components/HeaderFooterWrapper.tsx",
                lineNumber: 39,
                columnNumber: 40
            }, this),
            children,
            shouldShowHeaderFooter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$components$2f$dist$2f$components$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                svg: breakingMediaFooterSVG
            }, void 0, false, {
                fileName: "[project]/apps/BreakingMedia/src/app/components/HeaderFooterWrapper.tsx",
                lineNumber: 41,
                columnNumber: 40
            }, this)
        ]
    }, void 0, true);
}
_s(HeaderFooterWrapper, "XAf8zMuAk7/m5hPh5zGNEfWE0EU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = HeaderFooterWrapper;
var _c;
__turbopack_refresh__.register(_c, "HeaderFooterWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/apps/BreakingMedia/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=%5Bproject%5D__a333fb._.js.map