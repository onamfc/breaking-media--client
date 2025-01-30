(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/08b5e_a2feea._.js", {

"[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function() {
        return setAttributesFromProps;
    }
});
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
const ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    for (const [p, value] of Object.entries(props)){
        if (!props.hasOwnProperty(p)) continue;
        if (ignoreProps.includes(p)) continue;
        // we don't render undefined props to the DOM
        if (value === undefined) {
            continue;
        }
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
            // Correctly assign boolean script attributes
            // https://github.com/vercel/next.js/pull/20748
            ;
            el[attr] = !!value;
        } else {
            el.setAttribute(attr, String(value));
        }
        // Remove falsy non-zero boolean attributes so they are correctly interpreted
        // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
        if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
            // Call setAttribute before, as we need to set and unset the attribute to override force async:
            // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
            el.setAttribute(attr, '');
            el.removeAttribute(attr);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-attributes-from-props.js.map
}}),
"[project]/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map
}}),
"[project]/node_modules/next/dist/client/script.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_require__("[project]/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _setattributesfromprops = __turbopack_require__("[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-client] (ecmascript)");
const _requestidlecallback = __turbopack_require__("[project]/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if (typeof window !== 'undefined') {
        let head = document.head;
        stylesheets.forEach((stylesheet)=>{
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = stylesheet;
            head.appendChild(link);
        });
    }
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    const { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript(props);
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ]) + ")"
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ]) + ")"
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter)
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, !1), type;
            case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                    return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {}
        }
        return "";
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
        if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
            var children = config.children;
            if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
                for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren], type);
                Object.freeze && Object.freeze(children);
            } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else validateChildKeys(children, type);
        } else {
            children = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
            console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
        }
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node)) for(var i = 0; i < node.length; i++){
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
            }
            else if (isValidElement(node)) node._store && (node._store.validated = 1);
            else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for(; !(node = i.next()).done;)isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = !0;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
                var stack = describeUnknownElementTypeFrameInDEV(element.type);
                prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
                return stack;
            };
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
    }
    function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
    }
    var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>memoize)
});
function memoize(fn) {
    var cache = Object.create(null);
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
;
}}),
"[project]/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>isPropValid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js [app-client] (ecmascript)");
;
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var isPropValid = /* #__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$emotion$2d$memoize$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
;
}}),
"[project]/node_modules/shallowequal/index.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
//
module.exports = function shallowEqual(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (ret !== void 0) {
        return !!ret;
    }
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++){
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        var valueA = objA[key];
        var valueB = objB[key];
        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (ret === false || ret === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
};
}}),
"[project]/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>unitlessKeys)
});
var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
};
;
}}),
"[project]/node_modules/styled-components/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ __turbopack_esm__({
    "__addDisposableResource": (()=>__addDisposableResource),
    "__assign": (()=>__assign),
    "__asyncDelegator": (()=>__asyncDelegator),
    "__asyncGenerator": (()=>__asyncGenerator),
    "__asyncValues": (()=>__asyncValues),
    "__await": (()=>__await),
    "__awaiter": (()=>__awaiter),
    "__classPrivateFieldGet": (()=>__classPrivateFieldGet),
    "__classPrivateFieldIn": (()=>__classPrivateFieldIn),
    "__classPrivateFieldSet": (()=>__classPrivateFieldSet),
    "__createBinding": (()=>__createBinding),
    "__decorate": (()=>__decorate),
    "__disposeResources": (()=>__disposeResources),
    "__esDecorate": (()=>__esDecorate),
    "__exportStar": (()=>__exportStar),
    "__extends": (()=>__extends),
    "__generator": (()=>__generator),
    "__importDefault": (()=>__importDefault),
    "__importStar": (()=>__importStar),
    "__makeTemplateObject": (()=>__makeTemplateObject),
    "__metadata": (()=>__metadata),
    "__param": (()=>__param),
    "__propKey": (()=>__propKey),
    "__read": (()=>__read),
    "__rest": (()=>__rest),
    "__runInitializers": (()=>__runInitializers),
    "__setFunctionName": (()=>__setFunctionName),
    "__spread": (()=>__spread),
    "__spreadArray": (()=>__spreadArray),
    "__spreadArrays": (()=>__spreadArrays),
    "__values": (()=>__values),
    "default": (()=>__TURBOPACK__default__export__)
});
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
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
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    "TURBOPACK unreachable";
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
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
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    "TURBOPACK unreachable";
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    "TURBOPACK unreachable";
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    "TURBOPACK unreachable";
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources
};
}}),
"[project]/node_modules/stylis/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
}}),
"[project]/node_modules/stylis/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/stylis/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/stylis/src/Enum.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CHARSET": (()=>CHARSET),
    "COMMENT": (()=>COMMENT),
    "COUNTER_STYLE": (()=>COUNTER_STYLE),
    "DECLARATION": (()=>DECLARATION),
    "DOCUMENT": (()=>DOCUMENT),
    "FONT_FACE": (()=>FONT_FACE),
    "FONT_FEATURE_VALUES": (()=>FONT_FEATURE_VALUES),
    "IMPORT": (()=>IMPORT),
    "KEYFRAMES": (()=>KEYFRAMES),
    "LAYER": (()=>LAYER),
    "MEDIA": (()=>MEDIA),
    "MOZ": (()=>MOZ),
    "MS": (()=>MS),
    "NAMESPACE": (()=>NAMESPACE),
    "PAGE": (()=>PAGE),
    "RULESET": (()=>RULESET),
    "SCOPE": (()=>SCOPE),
    "SUPPORTS": (()=>SUPPORTS),
    "VIEWPORT": (()=>VIEWPORT),
    "WEBKIT": (()=>WEBKIT)
});
var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
var SCOPE = '@scope';
}}),
"[project]/node_modules/stylis/src/Utility.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @param {number}
 * @return {number}
 */ __turbopack_esm__({
    "abs": (()=>abs),
    "append": (()=>append),
    "assign": (()=>assign),
    "charat": (()=>charat),
    "combine": (()=>combine),
    "filter": (()=>filter),
    "from": (()=>from),
    "hash": (()=>hash),
    "indexof": (()=>indexof),
    "match": (()=>match),
    "replace": (()=>replace),
    "sizeof": (()=>sizeof),
    "strlen": (()=>strlen),
    "substr": (()=>substr),
    "trim": (()=>trim)
});
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length) {
    return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
    return value.trim();
}
function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
}
function indexof(value, search, position) {
    return value.indexOf(search, position);
}
function charat(value, index) {
    return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
    return value.slice(begin, end);
}
function strlen(value) {
    return value.length;
}
function sizeof(value) {
    return value.length;
}
function append(value, array) {
    return array.push(value), value;
}
function combine(array, callback) {
    return array.map(callback).join('');
}
function filter(array, pattern) {
    return array.filter(function(value) {
        return !match(value, pattern);
    });
}
}}),
"[project]/node_modules/stylis/src/Tokenizer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "alloc": (()=>alloc),
    "caret": (()=>caret),
    "char": (()=>char),
    "character": (()=>character),
    "characters": (()=>characters),
    "column": (()=>column),
    "commenter": (()=>commenter),
    "copy": (()=>copy),
    "dealloc": (()=>dealloc),
    "delimit": (()=>delimit),
    "delimiter": (()=>delimiter),
    "escaping": (()=>escaping),
    "identifier": (()=>identifier),
    "length": (()=>length),
    "lift": (()=>lift),
    "line": (()=>line),
    "next": (()=>next),
    "node": (()=>node),
    "peek": (()=>peek),
    "position": (()=>position),
    "prev": (()=>prev),
    "slice": (()=>slice),
    "token": (()=>token),
    "tokenize": (()=>tokenize),
    "tokenizer": (()=>tokenizer),
    "whitespace": (()=>whitespace)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js [app-client] (ecmascript)");
;
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
function node(value, root, parent, type, props, children, length, siblings) {
    return {
        value: value,
        root: root,
        parent: parent,
        type: type,
        props: props,
        children: children,
        line: line,
        column: column,
        length: length,
        return: '',
        siblings: siblings
    };
}
function copy(root, props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assign"])(node('', null, null, '', null, null, 0, root.siblings), root, {
        length: -root.length
    }, props);
}
function lift(root) {
    while(root.root)root = copy(root.root, {
        children: [
            root
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(root, root.siblings);
}
function char() {
    return character;
}
function prev() {
    character = position > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
}
function next() {
    character = position < length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
}
function peek() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(characters, position);
}
function caret() {
    return position;
}
function slice(begin, end) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(characters, begin, end);
}
function token(type) {
    switch(type){
        // \0 \t \n \r \s whitespace token
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        // ! + , / > @ ~ isolate token
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        // ; { } breakpoint token
        case 59:
        case 123:
        case 125:
            return 4;
        // : accompanied token
        case 58:
            return 3;
        // " ' ( [ opening delimit token
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        // ) ] closing delimit token
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function alloc(value) {
    return line = column = 1, length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters = value), position = 0, [];
}
function dealloc(value) {
    return characters = '', value;
}
function delimit(type) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function tokenize(value) {
    return dealloc(tokenizer(alloc(value)));
}
function whitespace(type) {
    while(character = peek())if (character < 33) next();
    else break;
    return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
function tokenizer(children) {
    while(next())switch(token(character)){
        case 0:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(identifier(position - 1), children);
            break;
        case 2:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(delimit(character), children);
            break;
        default:
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])(character), children);
    }
    return children;
}
function escaping(index, count) {
    while(--count && next())// not 0-9 A-F a-f
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
    while(next())switch(character){
        // ] ) " '
        case type:
            return position;
        // " '
        case 34:
        case 39:
            if (type !== 34 && type !== 39) delimiter(character);
            break;
        // (
        case 40:
            if (type === 41) delimiter(type);
            break;
        // \
        case 92:
            next();
            break;
    }
    return position;
}
function commenter(type, index) {
    while(next())// //
    if (type + character === 47 + 10) break;
    else if (type + character === 42 + 42 && peek() === 47) break;
    return '/*' + slice(index, position - 1) + '*' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])(type === 47 ? type : next());
}
function identifier(index) {
    while(!token(peek()))next();
    return slice(index, position);
}
}}),
"[project]/node_modules/stylis/src/Parser.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "comment": (()=>comment),
    "compile": (()=>compile),
    "declaration": (()=>declaration),
    "parse": (()=>parse),
    "ruleset": (()=>ruleset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Tokenizer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Enum.js [app-client] (ecmascript)");
;
;
;
function compile(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dealloc"])(parse('', null, null, null, [
        ''
    ], value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alloc"])(value), 0, [
        0
    ], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while(scanning)switch(previous = character, character = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])()){
        // (
        case 40:
            if (previous != 108 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(characters, length - 1) == 58) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexof"])(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delimit"])(character), '&', '&\f'), '&\f', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abs"])(index ? points[index - 1] : 0)) != -1) ampersand = -1;
                break;
            }
        // " ' [
        case 34:
        case 39:
        case 91:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delimit"])(character);
            break;
        // \t \n \r \s
        case 9:
        case 10:
        case 13:
        case 32:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitespace"])(previous);
            break;
        // \
        case 92:
            characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escaping"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caret"])() - 1, 7);
            continue;
        // /
        case 47:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peek"])()){
                case 42:
                case 47:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(comment((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commenter"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caret"])()), root, parent, declarations), declarations);
                    break;
                default:
                    characters += '/';
            }
            break;
        // {
        case 123 * variable:
            points[index++] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters) * ampersand;
        // } ; \0
        case 125 * variable:
        case 59:
        case 0:
            switch(character){
                // \0 }
                case 0:
                case 125:
                    scanning = 0;
                // ;
                case 59 + offset:
                    if (ampersand == -1) characters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(characters, /\f/g, '');
                    if (property > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters) - length) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
                    break;
                // @ ;
                case 59:
                    characters += ';';
                // { rule/at-rule
                default:
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);
                    if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
                    else switch(atrule === 99 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(characters, 3) === 110 ? 100 : atrule){
                        // d l m s
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            parse(value, reference, reference, rule && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"])(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
                            break;
                        default:
                            parse(characters, reference, reference, reference, [
                                ''
                            ], children, 0, points, children);
                    }
            }
            index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
            break;
        // :
        case 58:
            length = 1 + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters), property = previous;
        default:
            if (variable < 1) {
                if (character == 123) --variable;
                else if (character == 125 && variable++ == 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prev"])() == 125) continue;
            }
            switch(characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])(character), character * variable){
                // &
                case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                // ,
                case 44:
                    points[index++] = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters) - 1) * ampersand, ampersand = 1;
                    break;
                // @
                case 64:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peek"])() === 45) characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delimit"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"])());
                    atrule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peek"])(), offset = length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(type = characters += (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identifier"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caret"])())), character++;
                    break;
                // -
                case 45:
                    if (previous === 45 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(characters) == 2) variable = 0;
            }
    }
    return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [
        ''
    ];
    var size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeof"])(rule);
    for(var i = 0, j = 0, k = 0; i < index; ++i)for(var x = 0, y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, post + 1, post = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abs"])(j = points[i])), z = value; x < size; ++x)if (z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(j > 0 ? rule[x] + ' ' + y : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(y, /&\f/g, rule[x]))) props[k++] = z;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, offset === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RULESET"] : type, props, children, length, siblings);
}
function comment(value, root, parent, siblings) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMENT"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["char"])()), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, 2, -2), 0, siblings);
}
function declaration(value, root, parent, length, siblings) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["node"])(value, root, parent, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECLARATION"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, 0, length), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, length + 1, -1), length, siblings);
}
}}),
"[project]/node_modules/stylis/src/Prefixer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "prefix": (()=>prefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Enum.js [app-client] (ecmascript)");
;
;
function prefix(value, length, children) {
    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash"])(value, length)){
        // color-adjust
        case 5103:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'print-' + value + value;
        // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // tab-size
        case 4789:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOZ"] + value + value;
        // appearance, user-select, transform, hyphens, text-size-adjust
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOZ"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // writing-mode
        case 5936:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 11)){
                // vertical-l(r)
                case 114:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
                // vertical-r(l)
                case 108:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
                // horizontal(-)tb
                case 45:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
            }
        // flex, flex-direction, scroll-snap-type, writing-mode
        case 6828:
        case 4268:
        case 2903:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + value + value;
        // order
        case 6165:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-' + value + value;
        // align-items
        case 5187:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(\w+).+(:[^]+)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-$1$2' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-$1$2') + value;
        // align-self
        case 5443:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-item-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') + (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/) ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /flex-|-self/g, '') : '') + value;
        // align-content
        case 4675:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-line-pack' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /align-content|flex-|-self/g, '') + value;
        // flex-shrink
        case 5548:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'shrink', 'negative') + value;
        // flex-basis
        case 5292:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'basis', 'preferred-size') + value;
        // flex-grow
        case 6060:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, '-grow', '') + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'grow', 'positive') + value;
        // transition
        case 4554:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /([^-])(transform)/g, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2') + value;
        // cursor
        case 6187:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(zoom-|grab)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), /(image-set)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1'), value, '') + value;
        // background, background-image
        case 5495:
        case 3959:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(image-set\([^]*)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1' + '$`$1');
        // justify-content
        case 4968:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(flex-)?(.*)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'box-pack:$3' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + value + value;
        // justify-self
        case 4200:
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(value, /flex-|baseline/)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-column-align' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, length) + value;
            break;
        // grid-template-(columns|rows)
        case 2592:
        case 3360:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'template-', '') + value;
        // grid-(row|column)-start
        case 4384:
        case 3616:
            if (children && children.some(function(element, index) {
                return length = index, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-end/);
            })) {
                return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexof"])(value + (children = children[length].value), 'span', 0) ? value : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'grid-row-span:' + (~(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexof"])(children, 'span', 0) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) : +(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(children, /\d+/) - +(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(value, /\d+/)) + ';';
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, '-start', '') + value;
        // grid-(row|column)-end
        case 4896:
        case 4128:
            return children && children.some(function(element) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(element.props, /grid-\w+-start/);
            }) ? value : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, '-end', '-span'), 'span ', '') + value;
        // (margin|padding)-inline-(start|end)
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+)-inline(.+)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$1$2') + value;
        // (min|max)?(width|height|inline-size|block-size)
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            // stretch, max-content, min-content, fill-available
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(value) - 1 - length > 6) switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 1)){
                // (m)ax-content, (m)in-content
                case 109:
                    // -
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 4) !== 45) break;
                // (f)ill-available, (f)it-content
                case 102:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)(.+)-([^]+)/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2-$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOZ"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
                // (s)tretch
                case 115:
                    return ~(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexof"])(value, 'stretch', 0) ? prefix((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'stretch', 'fill-available'), length, children) + value : value;
            }
            break;
        // grid-(column|row)
        case 5152:
        case 5920:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_, a, b, c, d, e, f) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + a + ':' + b + f + (c ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + a + '-span:' + (d ? e : +e - +b) + f : '') + value;
            });
        // position: sticky
        case 4949:
            // stick(y)?
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, length + 6) === 121) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"]) + value;
            break;
        // display: (flex|inline-flex|grid|inline-grid)
        case 6444:
            switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 18 : 11)){
                // (inline-)?fle(x)
                case 120:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + '$2$3' + '$1' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + '$2box$3') + value;
                // (inline-)?gri(d)
                case 100:
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, ':', ':' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"]) + value;
            }
            break;
        // scroll-margin, scroll-margin-(top|right|bottom|left)
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, 'scroll-', 'scroll-snap-') + value;
    }
    return value;
}
}}),
"[project]/node_modules/stylis/src/Serializer.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "serialize": (()=>serialize),
    "stringify": (()=>stringify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Enum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js [app-client] (ecmascript)");
;
;
function serialize(children, callback) {
    var output = '';
    for(var i = 0; i < children.length; i++)output += callback(children[i], i, children, callback) || '';
    return output;
}
function stringify(element, index, children, callback) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYER"]:
            if (element.children.length) break;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMPORT"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECLARATION"]:
            return element.return = element.return || element.value;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMENT"]:
            return '';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
            return element.return = element.value + '{' + serialize(element.children, callback) + '}';
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RULESET"]:
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(element.value = element.props.join(','))) return '';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}
}}),
"[project]/node_modules/stylis/src/Middleware.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "middleware": (()=>middleware),
    "namespace": (()=>namespace),
    "prefixer": (()=>prefixer),
    "rulesheet": (()=>rulesheet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Enum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Prefixer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Tokenizer.js [app-client] (ecmascript)");
;
;
;
;
;
function middleware(collection) {
    var length = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeof"])(collection);
    return function(element, index, children, callback) {
        var output = '';
        for(var i = 0; i < length; i++)output += collection[i](element, index, children, callback) || '';
        return output;
    };
}
function rulesheet(callback) {
    return function(element) {
        if (!element.root) {
            if (element = element.return) callback(element);
        }
    };
}
function prefixer(element, index, children, callback) {
    if (element.length > -1) {
        if (!element.return) switch(element.type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECLARATION"]:
                element.return = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefix"])(element.value, element.length, children);
                return;
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]:
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"])([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(element.value, '@', '@' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"])
                    })
                ], callback);
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RULESET"]:
                if (element.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combine"])(children = element.props, function(value) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"])(value, callback = /(::plac\w+|:read-\w+)/)){
                        // :read-(only|write)
                        case ':read-only':
                        case ':read-write':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(read-\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    value
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assign"])(element, {
                                props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(children, callback)
                            });
                            break;
                        // :placeholder
                        case '::placeholder':
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"] + 'input-$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, ':' + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOZ"] + '$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"])(value, /:(plac\w+)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"] + 'input-$1')
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"])(element, {
                                props: [
                                    value
                                ]
                            }));
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assign"])(element, {
                                props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"])(children, callback)
                            });
                            break;
                    }
                    return '';
                });
        }
    }
}
function namespace(element) {
    switch(element.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RULESET"]:
            element.props = element.props.map(function(value) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combine"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenize"])(value), function(value, index, children) {
                    switch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"])(value, 0)){
                        // \f
                        case 12:
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(value, 1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"])(value));
                        // \0 ( + > ~
                        case 0:
                        case 40:
                        case 43:
                        case 62:
                        case 126:
                            return value;
                        // :
                        case 58:
                            if (children[++index] === 'global') children[index] = '', children[++index] = '\f' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"])(children[index], index = 1, -1);
                        // \s
                        case 32:
                            return index === 1 ? '' : value;
                        default:
                            switch(index){
                                case 0:
                                    element = value;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeof"])(children) > 1 ? '' : value;
                                case index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeof"])(children) - 1:
                                case 2:
                                    return index === 2 ? value + element + element : value + element;
                                default:
                                    return value;
                            }
                    }
                });
            });
    }
}
}}),
"[project]/node_modules/stylis/index.js [app-client] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CHARSET": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHARSET"]),
    "COMMENT": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMMENT"]),
    "COUNTER_STYLE": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COUNTER_STYLE"]),
    "DECLARATION": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DECLARATION"]),
    "DOCUMENT": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOCUMENT"]),
    "FONT_FACE": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONT_FACE"]),
    "FONT_FEATURE_VALUES": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONT_FEATURE_VALUES"]),
    "IMPORT": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMPORT"]),
    "KEYFRAMES": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KEYFRAMES"]),
    "LAYER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAYER"]),
    "MEDIA": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEDIA"]),
    "MOZ": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOZ"]),
    "MS": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MS"]),
    "NAMESPACE": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAMESPACE"]),
    "PAGE": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAGE"]),
    "RULESET": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RULESET"]),
    "SCOPE": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SCOPE"]),
    "SUPPORTS": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTS"]),
    "VIEWPORT": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIEWPORT"]),
    "WEBKIT": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WEBKIT"]),
    "abs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abs"]),
    "alloc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["alloc"]),
    "append": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["append"]),
    "assign": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assign"]),
    "caret": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["caret"]),
    "char": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["char"]),
    "character": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["character"]),
    "characters": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["characters"]),
    "charat": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["charat"]),
    "column": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["column"]),
    "combine": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combine"]),
    "comment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["comment"]),
    "commenter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commenter"]),
    "compile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compile"]),
    "copy": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copy"]),
    "dealloc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dealloc"]),
    "declaration": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["declaration"]),
    "delimit": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delimit"]),
    "delimiter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["delimiter"]),
    "escaping": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escaping"]),
    "filter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filter"]),
    "from": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"]),
    "hash": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash"]),
    "identifier": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["identifier"]),
    "indexof": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["indexof"]),
    "length": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["length"]),
    "lift": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lift"]),
    "line": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["line"]),
    "match": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"]),
    "middleware": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["middleware"]),
    "namespace": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["namespace"]),
    "next": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["next"]),
    "node": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["node"]),
    "parse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"]),
    "peek": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["peek"]),
    "position": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["position"]),
    "prefix": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefix"]),
    "prefixer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefixer"]),
    "prev": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prev"]),
    "replace": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replace"]),
    "ruleset": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ruleset"]),
    "rulesheet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rulesheet"]),
    "serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serialize"]),
    "sizeof": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sizeof"]),
    "slice": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"]),
    "stringify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"]),
    "strlen": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strlen"]),
    "substr": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["substr"]),
    "token": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["token"]),
    "tokenize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenize"]),
    "tokenizer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenizer"]),
    "trim": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"]),
    "whitespace": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["whitespace"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Enum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Enum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Utility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Parser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Parser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Prefixer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Prefixer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Tokenizer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Tokenizer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Serializer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Serializer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$src$2f$Middleware$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/src/Middleware.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/stylis/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/stylis/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CHARSET": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["CHARSET"]),
    "COMMENT": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["COMMENT"]),
    "COUNTER_STYLE": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["COUNTER_STYLE"]),
    "DECLARATION": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["DECLARATION"]),
    "DOCUMENT": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["DOCUMENT"]),
    "FONT_FACE": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FONT_FACE"]),
    "FONT_FEATURE_VALUES": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["FONT_FEATURE_VALUES"]),
    "IMPORT": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["IMPORT"]),
    "KEYFRAMES": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["KEYFRAMES"]),
    "LAYER": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LAYER"]),
    "MEDIA": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MEDIA"]),
    "MOZ": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MOZ"]),
    "MS": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MS"]),
    "NAMESPACE": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["NAMESPACE"]),
    "PAGE": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["PAGE"]),
    "RULESET": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["RULESET"]),
    "SCOPE": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SCOPE"]),
    "SUPPORTS": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["SUPPORTS"]),
    "VIEWPORT": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["VIEWPORT"]),
    "WEBKIT": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["WEBKIT"]),
    "abs": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["abs"]),
    "alloc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["alloc"]),
    "append": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["append"]),
    "assign": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["assign"]),
    "caret": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["caret"]),
    "char": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["char"]),
    "character": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["character"]),
    "characters": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["characters"]),
    "charat": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["charat"]),
    "column": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["column"]),
    "combine": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["combine"]),
    "comment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["comment"]),
    "commenter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["commenter"]),
    "compile": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["compile"]),
    "copy": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["copy"]),
    "dealloc": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dealloc"]),
    "declaration": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["declaration"]),
    "delimit": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["delimit"]),
    "delimiter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["delimiter"]),
    "escaping": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["escaping"]),
    "filter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["filter"]),
    "from": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["from"]),
    "hash": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["hash"]),
    "identifier": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["identifier"]),
    "indexof": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["indexof"]),
    "length": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["length"]),
    "lift": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["lift"]),
    "line": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["line"]),
    "match": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["match"]),
    "middleware": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["middleware"]),
    "namespace": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["namespace"]),
    "next": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["next"]),
    "node": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["node"]),
    "parse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["parse"]),
    "peek": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["peek"]),
    "position": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["position"]),
    "prefix": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["prefix"]),
    "prefixer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["prefixer"]),
    "prev": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["prev"]),
    "replace": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["replace"]),
    "ruleset": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ruleset"]),
    "rulesheet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["rulesheet"]),
    "serialize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["serialize"]),
    "sizeof": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["sizeof"]),
    "slice": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["slice"]),
    "stringify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["stringify"]),
    "strlen": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["strlen"]),
    "substr": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["substr"]),
    "token": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["token"]),
    "tokenize": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tokenize"]),
    "tokenizer": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tokenizer"]),
    "trim": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["trim"]),
    "whitespace": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__["whitespace"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/stylis/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/stylis/index.js [app-client] (ecmascript) <exports>");
}}),
"[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ServerStyleSheet": (()=>vt),
    "StyleSheetConsumer": (()=>Be),
    "StyleSheetContext": (()=>$e),
    "StyleSheetManager": (()=>Ye),
    "ThemeConsumer": (()=>tt),
    "ThemeContext": (()=>et),
    "ThemeProvider": (()=>ot),
    "__PRIVATE__": (()=>gt),
    "createGlobalStyle": (()=>ft),
    "css": (()=>lt),
    "default": (()=>dt),
    "isStyledComponent": (()=>se),
    "keyframes": (()=>mt),
    "styled": (()=>dt),
    "useTheme": (()=>nt),
    "version": (()=>v),
    "withTheme": (()=>yt)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$shallowequal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/shallowequal/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/styled-components/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/stylis/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
var f = "undefined" != typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && void 0 !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_SC_ATTR || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SC_ATTR) || "data-styled", m = "active", y = "data-styled-version", v = "6.1.14", g = "/*!sc*/\n", S = "undefined" != typeof window && "HTMLElement" in window, w = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && void 0 !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && void 0 !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_SC_DISABLE_SPEEDY && "" !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_SC_DISABLE_SPEEDY && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && void 0 !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env && void 0 !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SC_DISABLE_SPEEDY && "" !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SC_DISABLE_SPEEDY ? "false" !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SC_DISABLE_SPEEDY && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SC_DISABLE_SPEEDY : "production" !== ("TURBOPACK compile-time value", "development")), b = {}, E = /invalid hook call/i, N = new Set, P = function(t, n) {
    if ("TURBOPACK compile-time truthy", 1) {
        var o = n ? ' with the id of "'.concat(n, '"') : "", s = "The component ".concat(t).concat(o, " has been created dynamically.\n") + "You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.", i = console.error;
        try {
            var a = !0;
            console.error = function(t) {
                for(var n = [], o = 1; o < arguments.length; o++)n[o - 1] = arguments[o];
                E.test(t) ? (a = !1, N.delete(s)) : i.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
                    t
                ], n, !1));
            }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(), a && !N.has(s) && (console.warn(s), N.add(s));
        } catch (e) {
            E.test(e.message) && N.delete(s);
        } finally{
            console.error = i;
        }
    }
}, _ = Object.freeze([]), C = Object.freeze({});
function I(e, t, n) {
    return void 0 === n && (n = C), e.theme !== n.theme && e.theme || t || n.theme;
}
var A = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
]), O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, D = /(^-|-$)/g;
function R(e) {
    return e.replace(O, "-").replace(D, "");
}
var T = /(a)(d)/gi, k = 52, j = function(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function x(e) {
    var t, n = "";
    for(t = Math.abs(e); t > k; t = t / k | 0)n = j(t % k) + n;
    return (j(t % k) + n).replace(T, "$1-$2");
}
var V, F = 5381, M = function(e, t) {
    for(var n = t.length; n;)e = 33 * e ^ t.charCodeAt(--n);
    return e;
}, z = function(e) {
    return M(F, e);
};
function $(e) {
    return x(z(e) >>> 0);
}
function B(e) {
    return "production" !== ("TURBOPACK compile-time value", "development") && "string" == typeof e && e || e.displayName || e.name || "Component";
}
function L(e) {
    return "string" == typeof e && ("production" === ("TURBOPACK compile-time value", "development") || e.charAt(0) === e.charAt(0).toLowerCase());
}
var G = "function" == typeof Symbol && Symbol.for, Y = G ? Symbol.for("react.memo") : 60115, W = G ? Symbol.for("react.forward_ref") : 60112, q = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
}, H = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
}, U = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
}, J = ((V = {})[W] = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
}, V[Y] = U, V);
function X(e) {
    return ("type" in (t = e) && t.type.$$typeof) === Y ? U : "$$typeof" in e ? J[e.$$typeof] : q;
    "TURBOPACK unreachable";
    var t;
}
var Z = Object.defineProperty, K = Object.getOwnPropertyNames, Q = Object.getOwnPropertySymbols, ee = Object.getOwnPropertyDescriptor, te = Object.getPrototypeOf, ne = Object.prototype;
function oe(e, t, n) {
    if ("string" != typeof t) {
        if (ne) {
            var o = te(t);
            o && o !== ne && oe(e, o, n);
        }
        var r = K(t);
        Q && (r = r.concat(Q(t)));
        for(var s = X(e), i = X(t), a = 0; a < r.length; ++a){
            var c = r[a];
            if (!(c in H || n && n[c] || i && c in i || s && c in s)) {
                var l = ee(t, c);
                try {
                    Z(e, c, l);
                } catch (e) {}
            }
        }
    }
    return e;
}
function re(e) {
    return "function" == typeof e;
}
function se(e) {
    return "object" == typeof e && "styledComponentId" in e;
}
function ie(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ae(e, t) {
    if (0 === e.length) return "";
    for(var n = e[0], o = 1; o < e.length; o++)n += t ? t + e[o] : e[o];
    return n;
}
function ce(e) {
    return null !== e && "object" == typeof e && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function le(e, t, n) {
    if (void 0 === n && (n = !1), !n && !ce(e) && !Array.isArray(e)) return t;
    if (Array.isArray(t)) for(var o = 0; o < t.length; o++)e[o] = le(e[o], t[o]);
    else if (ce(t)) for(var o in t)e[o] = le(e[o], t[o]);
    return e;
}
function ue(e, t) {
    Object.defineProperty(e, "toString", {
        value: t
    });
}
var pe = ("TURBOPACK compile-time truthy", 1) ? {
    1: "Cannot create styled-component for component: %s.\n\n",
    2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
    3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
    4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
    5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
    6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
    7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
    8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
    9: "Missing document `<head>`\n\n",
    10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
    11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
    12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
    13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
    14: 'ThemeProvider: "theme" prop is required.\n\n',
    15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
    16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
    17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
    18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"
} : ("TURBOPACK unreachable", undefined);
function de() {
    for(var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t];
    for(var n = e[0], o = [], r = 1, s = e.length; r < s; r += 1)o.push(e[r]);
    return o.forEach(function(e) {
        n = n.replace(/%[a-z]/, e);
    }), n;
}
function he(t) {
    for(var n = [], o = 1; o < arguments.length; o++)n[o - 1] = arguments[o];
    return ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : new Error(de.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
        pe[t]
    ], n, !1)).trim());
}
var fe = function() {
    function e(e) {
        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    return e.prototype.indexOfGroup = function(e) {
        for(var t = 0, n = 0; n < e; n++)t += this.groupSizes[n];
        return t;
    }, e.prototype.insertRules = function(e, t) {
        if (e >= this.groupSizes.length) {
            for(var n = this.groupSizes, o = n.length, r = o; e >= r;)if ((r <<= 1) < 0) throw he(16, "".concat(e));
            this.groupSizes = new Uint32Array(r), this.groupSizes.set(n), this.length = r;
            for(var s = o; s < r; s++)this.groupSizes[s] = 0;
        }
        for(var i = this.indexOfGroup(e + 1), a = (s = 0, t.length); s < a; s++)this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++);
    }, e.prototype.clearGroup = function(e) {
        if (e < this.length) {
            var t = this.groupSizes[e], n = this.indexOfGroup(e), o = n + t;
            this.groupSizes[e] = 0;
            for(var r = n; r < o; r++)this.tag.deleteRule(n);
        }
    }, e.prototype.getGroup = function(e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e]) return t;
        for(var n = this.groupSizes[e], o = this.indexOfGroup(e), r = o + n, s = o; s < r; s++)t += "".concat(this.tag.getRule(s)).concat(g);
        return t;
    }, e;
}(), me = 1 << 30, ye = new Map, ve = new Map, ge = 1, Se = function(e) {
    if (ye.has(e)) return ye.get(e);
    for(; ve.has(ge);)ge++;
    var t = ge++;
    if ("production" !== ("TURBOPACK compile-time value", "development") && ((0 | t) < 0 || t > me)) throw he(16, "".concat(t));
    return ye.set(e, t), ve.set(t, e), t;
}, we = function(e, t) {
    ge = t + 1, ye.set(e, t), ve.set(t, e);
}, be = "style[".concat(f, "][").concat(y, '="').concat(v, '"]'), Ee = new RegExp("^".concat(f, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ne = function(e, t, n) {
    for(var o, r = n.split(","), s = 0, i = r.length; s < i; s++)(o = r[s]) && e.registerName(t, o);
}, Pe = function(e, t) {
    for(var n, o = (null !== (n = t.textContent) && void 0 !== n ? n : "").split(g), r = [], s = 0, i = o.length; s < i; s++){
        var a = o[s].trim();
        if (a) {
            var c = a.match(Ee);
            if (c) {
                var l = 0 | parseInt(c[1], 10), u = c[2];
                0 !== l && (we(u, l), Ne(e, u, c[3]), e.getTag().insertRules(l, r)), r.length = 0;
            } else r.push(a);
        }
    }
}, _e = function(e) {
    for(var t = document.querySelectorAll(be), n = 0, o = t.length; n < o; n++){
        var r = t[n];
        r && r.getAttribute(f) !== m && (Pe(e, r), r.parentNode && r.parentNode.removeChild(r));
    }
};
function Ce() {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}
var Ie = function(e) {
    var t = document.head, n = e || t, o = document.createElement("style"), r = function(e) {
        var t = Array.from(e.querySelectorAll("style[".concat(f, "]")));
        return t[t.length - 1];
    }(n), s = void 0 !== r ? r.nextSibling : null;
    o.setAttribute(f, m), o.setAttribute(y, v);
    var i = Ce();
    return i && o.setAttribute("nonce", i), n.insertBefore(o, s), o;
}, Ae = function() {
    function e(e) {
        this.element = Ie(e), this.element.appendChild(document.createTextNode("")), this.sheet = function(e) {
            if (e.sheet) return e.sheet;
            for(var t = document.styleSheets, n = 0, o = t.length; n < o; n++){
                var r = t[n];
                if (r.ownerNode === e) return r;
            }
            throw he(17);
        }(this.element), this.length = 0;
    }
    return e.prototype.insertRule = function(e, t) {
        try {
            return this.sheet.insertRule(t, e), this.length++, !0;
        } catch (e) {
            return !1;
        }
    }, e.prototype.deleteRule = function(e) {
        this.sheet.deleteRule(e), this.length--;
    }, e.prototype.getRule = function(e) {
        var t = this.sheet.cssRules[e];
        return t && t.cssText ? t.cssText : "";
    }, e;
}(), Oe = function() {
    function e(e) {
        this.element = Ie(e), this.nodes = this.element.childNodes, this.length = 0;
    }
    return e.prototype.insertRule = function(e, t) {
        if (e <= this.length && e >= 0) {
            var n = document.createTextNode(t);
            return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0;
        }
        return !1;
    }, e.prototype.deleteRule = function(e) {
        this.element.removeChild(this.nodes[e]), this.length--;
    }, e.prototype.getRule = function(e) {
        return e < this.length ? this.nodes[e].textContent : "";
    }, e;
}(), De = function() {
    function e(e) {
        this.rules = [], this.length = 0;
    }
    return e.prototype.insertRule = function(e, t) {
        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, e.prototype.deleteRule = function(e) {
        this.rules.splice(e, 1), this.length--;
    }, e.prototype.getRule = function(e) {
        return e < this.length ? this.rules[e] : "";
    }, e;
}(), Re = S, Te = {
    isServer: !S,
    useCSSOMInjection: !w
}, ke = function() {
    function e(e, n, o) {
        void 0 === e && (e = C), void 0 === n && (n = {});
        var r = this;
        this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, Te), e), this.gs = n, this.names = new Map(o), this.server = !!e.isServer, !this.server && S && Re && (Re = !1, _e(this)), ue(this, function() {
            return function(e) {
                for(var t = e.getTag(), n = t.length, o = "", r = function(n) {
                    var r = function(e) {
                        return ve.get(e);
                    }(n);
                    if (void 0 === r) return "continue";
                    var s = e.names.get(r), i = t.getGroup(n);
                    if (void 0 === s || !s.size || 0 === i.length) return "continue";
                    var a = "".concat(f, ".g").concat(n, '[id="').concat(r, '"]'), c = "";
                    void 0 !== s && s.forEach(function(e) {
                        e.length > 0 && (c += "".concat(e, ","));
                    }), o += "".concat(i).concat(a, '{content:"').concat(c, '"}').concat(g);
                }, s = 0; s < n; s++)r(s);
                return o;
            }(r);
        });
    }
    return e.registerId = function(e) {
        return Se(e);
    }, e.prototype.rehydrate = function() {
        !this.server && S && _e(this);
    }, e.prototype.reconstructWithOptions = function(n, o) {
        return void 0 === o && (o = !0), new e((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, this.options), n), this.gs, o && this.names || void 0);
    }, e.prototype.allocateGSInstance = function(e) {
        return this.gs[e] = (this.gs[e] || 0) + 1;
    }, e.prototype.getTag = function() {
        return this.tag || (this.tag = (e = function(e) {
            var t = e.useCSSOMInjection, n = e.target;
            return e.isServer ? new De(n) : t ? new Ae(n) : new Oe(n);
        }(this.options), new fe(e)));
        "TURBOPACK unreachable";
        var e;
    }, e.prototype.hasNameForId = function(e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
    }, e.prototype.registerName = function(e, t) {
        if (Se(e), this.names.has(e)) this.names.get(e).add(t);
        else {
            var n = new Set;
            n.add(t), this.names.set(e, n);
        }
    }, e.prototype.insertRules = function(e, t, n) {
        this.registerName(e, t), this.getTag().insertRules(Se(e), n);
    }, e.prototype.clearNames = function(e) {
        this.names.has(e) && this.names.get(e).clear();
    }, e.prototype.clearRules = function(e) {
        this.getTag().clearGroup(Se(e)), this.clearNames(e);
    }, e.prototype.clearTag = function() {
        this.tag = void 0;
    }, e;
}(), je = /&/g, xe = /^\s*\/\/.*$/gm;
function Ve(e, t) {
    return e.map(function(e) {
        return "rule" === e.type && (e.value = "".concat(t, " ").concat(e.value), e.value = e.value.replaceAll(",", ",".concat(t, " ")), e.props = e.props.map(function(e) {
            return "".concat(t, " ").concat(e);
        })), Array.isArray(e.children) && "@keyframes" !== e.type && (e.children = Ve(e.children, t)), e;
    });
}
function Fe(e) {
    var t, n, o, r = void 0 === e ? C : e, s = r.options, i = void 0 === s ? C : s, a = r.plugins, c = void 0 === a ? _ : a, l = function(e, o, r) {
        return r.startsWith(n) && r.endsWith(n) && r.replaceAll(n, "").length > 0 ? ".".concat(t) : e;
    }, u = c.slice();
    u.push(function(e) {
        e.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.RULESET && e.value.includes("&") && (e.props[0] = e.props[0].replace(je, n).replace(o, l));
    }), i.prefix && u.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.prefixer), u.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.stringify);
    var p = function(e, r, s, a) {
        void 0 === r && (r = ""), void 0 === s && (s = ""), void 0 === a && (a = "&"), t = a, n = r, o = new RegExp("\\".concat(n, "\\b"), "g");
        var c = e.replace(xe, ""), l = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.compile(s || r ? "".concat(s, " ").concat(r, " { ").concat(c, " }") : c);
        i.namespace && (l = Ve(l, i.namespace));
        var p = [];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.serialize(l, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.middleware(u.concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stylis$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.rulesheet(function(e) {
            return p.push(e);
        })))), p;
    };
    return p.hash = c.length ? c.reduce(function(e, t) {
        return t.name || he(15), M(e, t.name);
    }, F).toString() : "", p;
}
var Me = new ke, ze = Fe(), $e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    shouldForwardProp: void 0,
    styleSheet: Me,
    stylis: ze
}), Be = $e.Consumer, Le = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(void 0);
function Ge() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($e);
}
function Ye(e) {
    var t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(e.stylisPlugins), n = t[0], r = t[1], c = Ge().styleSheet, l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        var t = c;
        return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
            target: e.target
        }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
            useCSSOMInjection: !1
        })), t;
    }, [
        e.disableCSSOMInjection,
        e.sheet,
        e.target,
        c
    ]), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return Fe({
            options: {
                namespace: e.namespace,
                prefix: e.enableVendorPrefixes
            },
            plugins: n
        });
    }, [
        e.enableVendorPrefixes,
        e.namespace,
        n
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$shallowequal$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(n, e.stylisPlugins) || r(e.stylisPlugins);
    }, [
        e.stylisPlugins
    ]);
    var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return {
            shouldForwardProp: e.shouldForwardProp,
            styleSheet: l,
            stylis: u
        };
    }, [
        e.shouldForwardProp,
        l,
        u
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement($e.Provider, {
        value: d
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Le.Provider, {
        value: u
    }, e.children));
}
var We = function() {
    function e(e, t) {
        var n = this;
        this.inject = function(e, t) {
            void 0 === t && (t = ze);
            var o = n.name + t.hash;
            e.hasNameForId(n.id, o) || e.insertRules(n.id, o, t(n.rules, o, "@keyframes"));
        }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = t, ue(this, function() {
            throw he(12, String(n.name));
        });
    }
    return e.prototype.getName = function(e) {
        return void 0 === e && (e = ze), this.name + e.hash;
    }, e;
}(), qe = function(e) {
    return e >= "A" && e <= "Z";
};
function He(e) {
    for(var t = "", n = 0; n < e.length; n++){
        var o = e[n];
        if (1 === n && "-" === o && "-" === e[0]) return e;
        qe(o) ? t += "-" + o.toLowerCase() : t += o;
    }
    return t.startsWith("ms-") ? "-" + t : t;
}
var Ue = function(e) {
    return null == e || !1 === e || "" === e;
}, Je = function(t) {
    var n, o, r = [];
    for(var s in t){
        var i = t[s];
        t.hasOwnProperty(s) && !Ue(i) && (Array.isArray(i) && i.isCss || re(i) ? r.push("".concat(He(s), ":"), i, ";") : ce(i) ? r.push.apply(r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
            "".concat(s, " {")
        ], Je(i), !1), [
            "}"
        ], !1)) : r.push("".concat(He(s), ": ").concat((n = s, null == (o = i) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || n in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$unitless$2f$dist$2f$emotion$2d$unitless$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] || n.startsWith("--") ? String(o).trim() : "".concat(o, "px")), ";")));
    }
    return r;
};
function Xe(e, t, n, o) {
    if (Ue(e)) return [];
    if (se(e)) return [
        ".".concat(e.styledComponentId)
    ];
    if (re(e)) {
        if (!re(s = e) || s.prototype && s.prototype.isReactComponent || !t) return [
            e
        ];
        var r = e(t);
        return "production" === ("TURBOPACK compile-time value", "development") || "object" != typeof r || Array.isArray(r) || r instanceof We || ce(r) || null === r || console.error("".concat(B(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), Xe(r, t, n, o);
    }
    var s;
    return e instanceof We ? n ? (e.inject(n, o), [
        e.getName(o)
    ]) : [
        e
    ] : ce(e) ? Je(e) : Array.isArray(e) ? Array.prototype.concat.apply(_, e.map(function(e) {
        return Xe(e, t, n, o);
    })) : [
        e.toString()
    ];
}
function Ze(e) {
    for(var t = 0; t < e.length; t += 1){
        var n = e[t];
        if (re(n) && !se(n)) return !1;
    }
    return !0;
}
var Ke = z(v), Qe = function() {
    function e(e, t, n) {
        this.rules = e, this.staticRulesId = "", this.isStatic = "production" === ("TURBOPACK compile-time value", "development") && (void 0 === n || n.isStatic) && Ze(e), this.componentId = t, this.baseHash = M(Ke, t), this.baseStyle = n, ke.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function(e, t, n) {
        var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, t, n) : "";
        if (this.isStatic && !n.hash) if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) o = ie(o, this.staticRulesId);
        else {
            var r = ae(Xe(this.rules, e, t, n)), s = x(M(this.baseHash, r) >>> 0);
            if (!t.hasNameForId(this.componentId, s)) {
                var i = n(r, ".".concat(s), void 0, this.componentId);
                t.insertRules(this.componentId, s, i);
            }
            o = ie(o, s), this.staticRulesId = s;
        }
        else {
            for(var a = M(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++){
                var u = this.rules[l];
                if ("string" == typeof u) c += u, "production" !== ("TURBOPACK compile-time value", "development") && (a = M(a, u));
                else if (u) {
                    var p = ae(Xe(u, e, t, n));
                    a = M(a, p + l), c += p;
                }
            }
            if (c) {
                var d = x(a >>> 0);
                t.hasNameForId(this.componentId, d) || t.insertRules(this.componentId, d, n(c, ".".concat(d), void 0, this.componentId)), o = ie(o, d);
            }
        }
        return o;
    }, e;
}(), et = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(void 0), tt = et.Consumer;
function nt() {
    var e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(et);
    if (!e) throw he(18);
    return e;
}
function ot(e) {
    var n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(et), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return function(e, n) {
            if (!e) throw he(14);
            if (re(e)) {
                var o = e(n);
                if ("production" !== ("TURBOPACK compile-time value", "development") && (null === o || Array.isArray(o) || "object" != typeof o)) throw he(7);
                return o;
            }
            if (Array.isArray(e) || "object" != typeof e) throw he(8);
            return n ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, n), e) : e;
        }(e.theme, n);
    }, [
        e.theme,
        n
    ]);
    return e.children ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(et.Provider, {
        value: r
    }, e.children) : null;
}
var rt = {}, st = new Set;
function it(e, r, s) {
    var i = se(e), a = e, c = !L(e), p = r.attrs, d = void 0 === p ? _ : p, h = r.componentId, f = void 0 === h ? function(e, t) {
        var n = "string" != typeof e ? "sc" : R(e);
        rt[n] = (rt[n] || 0) + 1;
        var o = "".concat(n, "-").concat($(v + n + rt[n]));
        return t ? "".concat(t, "-").concat(o) : o;
    }(r.displayName, r.parentComponentId) : h, m = r.displayName, y = void 0 === m ? function(e) {
        return L(e) ? "styled.".concat(e) : "Styled(".concat(B(e), ")");
    }(e) : m, g = r.displayName && r.componentId ? "".concat(R(r.displayName), "-").concat(r.componentId) : r.componentId || f, S = i && a.attrs ? a.attrs.concat(d).filter(Boolean) : d, w = r.shouldForwardProp;
    if (i && a.shouldForwardProp) {
        var b = a.shouldForwardProp;
        if (r.shouldForwardProp) {
            var E = r.shouldForwardProp;
            w = function(e, t) {
                return b(e, t) && E(e, t);
            };
        } else w = b;
    }
    var N = new Qe(s, g, i ? a.componentStyle : void 0);
    function O(e, r) {
        return function(e, r, s) {
            var i = e.attrs, a = e.componentStyle, c = e.defaultProps, p = e.foldedComponentIds, d = e.styledComponentId, h = e.target, f = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(et), m = Ge(), y = e.shouldForwardProp || m.shouldForwardProp;
            "production" !== ("TURBOPACK compile-time value", "development") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(d);
            var v = I(r, f, c) || C, g = function(e, n, o) {
                for(var r, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, n), {
                    className: void 0,
                    theme: o
                }), i = 0; i < e.length; i += 1){
                    var a = re(r = e[i]) ? r(s) : r;
                    for(var c in a)s[c] = "className" === c ? ie(s[c], a[c]) : "style" === c ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, s[c]), a[c]) : a[c];
                }
                return n.className && (s.className = ie(s.className, n.className)), s;
            }(i, r, v), S = g.as || h, w = {};
            for(var b in g)void 0 === g[b] || "$" === b[0] || "as" === b || "theme" === b && g.theme === v || ("forwardedAs" === b ? w.as = g.forwardedAs : y && !y(b, S) || (w[b] = g[b], y || "development" !== ("TURBOPACK compile-time value", "development") || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$is$2d$prop$2d$valid$2f$dist$2f$emotion$2d$is$2d$prop$2d$valid$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(b) || st.has(b) || !A.has(S) || (st.add(b), console.warn('styled-components: it looks like an unknown prop "'.concat(b, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
            var E = function(e, t) {
                var n = Ge(), o = e.generateAndInjectStyles(t, n.styleSheet, n.stylis);
                return "production" !== ("TURBOPACK compile-time value", "development") && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(o), o;
            }(a, g);
            "production" !== ("TURBOPACK compile-time value", "development") && e.warnTooManyClasses && e.warnTooManyClasses(E);
            var N = ie(p, d);
            return E && (N += " " + E), g.className && (N += " " + g.className), w[L(S) && !A.has(S) ? "class" : "className"] = N, s && (w.ref = s), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(S, w);
        }(D, e, r);
    }
    O.displayName = y;
    var D = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(O);
    return D.attrs = S, D.componentStyle = N, D.displayName = y, D.shouldForwardProp = w, D.foldedComponentIds = i ? ie(a.foldedComponentIds, a.styledComponentId) : "", D.styledComponentId = g, D.target = i ? a.target : e, Object.defineProperty(D, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps;
        },
        set: function(e) {
            this._foldedDefaultProps = i ? function(e) {
                for(var t = [], n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
                for(var o = 0, r = t; o < r.length; o++)le(e, r[o], !0);
                return e;
            }({}, a.defaultProps, e) : e;
        }
    }), "production" !== ("TURBOPACK compile-time value", "development") && (P(y, g), D.warnTooManyClasses = function(e, t) {
        var n = {}, o = !1;
        return function(r) {
            if (!o && (n[r] = !0, Object.keys(n).length >= 200)) {
                var s = t ? ' with the id of "'.concat(t, '"') : "";
                console.warn("Over ".concat(200, " classes were generated for component ").concat(e).concat(s, ".\n") + "Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), o = !0, n = {};
            }
        };
    }(y, g)), ue(D, function() {
        return ".".concat(D.styledComponentId);
    }), c && oe(D, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0
    }), D;
}
function at(e, t) {
    for(var n = [
        e[0]
    ], o = 0, r = t.length; o < r; o += 1)n.push(t[o], e[o + 1]);
    return n;
}
var ct = function(e) {
    return Object.assign(e, {
        isCss: !0
    });
};
function lt(t) {
    for(var n = [], o = 1; o < arguments.length; o++)n[o - 1] = arguments[o];
    if (re(t) || ce(t)) return ct(Xe(at(_, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
        t
    ], n, !0))));
    var r = t;
    return 0 === n.length && 1 === r.length && "string" == typeof r[0] ? Xe(r) : ct(Xe(at(r, n)));
}
function ut(n, o, r) {
    if (void 0 === r && (r = C), !o) throw he(1, o);
    var s = function(t) {
        for(var s = [], i = 1; i < arguments.length; i++)s[i - 1] = arguments[i];
        return n(o, r, lt.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
            t
        ], s, !1)));
    };
    return s.attrs = function(e) {
        return ut(n, o, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, r), {
            attrs: Array.prototype.concat(r.attrs, e).filter(Boolean)
        }));
    }, s.withConfig = function(e) {
        return ut(n, o, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, r), e));
    }, s;
}
var pt = function(e) {
    return ut(it, e);
}, dt = pt;
A.forEach(function(e) {
    dt[e] = pt(e);
});
var ht = function() {
    function e(e, t) {
        this.rules = e, this.componentId = t, this.isStatic = Ze(e), ke.registerId(this.componentId + 1);
    }
    return e.prototype.createStyles = function(e, t, n, o) {
        var r = o(ae(Xe(this.rules, t, n, o)), ""), s = this.componentId + e;
        n.insertRules(s, s, r);
    }, e.prototype.removeStyles = function(e, t) {
        t.clearRules(this.componentId + e);
    }, e.prototype.renderStyles = function(e, t, n, o) {
        e > 2 && ke.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, o);
    }, e;
}();
function ft(n) {
    for(var r = [], s = 1; s < arguments.length; s++)r[s - 1] = arguments[s];
    var i = lt.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
        n
    ], r, !1)), a = "sc-global-".concat($(JSON.stringify(i))), c = new ht(i, a);
    "production" !== ("TURBOPACK compile-time value", "development") && P(a);
    var l = function(e) {
        var t = Ge(), n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(et), r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(t.styleSheet.allocateGSInstance(a)).current;
        return "production" !== ("TURBOPACK compile-time value", "development") && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.count(e.children) && console.warn("The global style component ".concat(a, " was given child JSX. createGlobalStyle does not render children.")), "production" !== ("TURBOPACK compile-time value", "development") && i.some(function(e) {
            return "string" == typeof e && -1 !== e.indexOf("@import");
        }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), t.styleSheet.server && u(r, e, t.styleSheet, n, t.stylis), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useLayoutEffect({
            "ft.l.useLayoutEffect": function() {
                if (!t.styleSheet.server) return u(r, e, t.styleSheet, n, t.stylis), ({
                    "ft.l.useLayoutEffect": function() {
                        return c.removeStyles(r, t.styleSheet);
                    }
                })["ft.l.useLayoutEffect"];
            }
        }["ft.l.useLayoutEffect"], [
            r,
            e,
            t.styleSheet,
            n,
            t.stylis
        ]), null;
    };
    function u(e, n, o, r, s) {
        if (c.isStatic) c.renderStyles(e, b, o, s);
        else {
            var i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, n), {
                theme: I(n, r, l.defaultProps)
            });
            c.renderStyles(e, i, o, s);
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(l);
}
function mt(t) {
    for(var n = [], o = 1; o < arguments.length; o++)n[o - 1] = arguments[o];
    "production" !== ("TURBOPACK compile-time value", "development") && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
    var r = ae(lt.apply(void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArray"])([
        t
    ], n, !1))), s = $(r);
    return new We(s, r);
}
function yt(e) {
    var n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(function(n, r) {
        var s = I(n, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(et), e.defaultProps);
        return "production" !== ("TURBOPACK compile-time value", "development") && void 0 === s && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat(B(e), '"')), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, n, {
            theme: s,
            ref: r
        }));
    });
    return n.displayName = "WithTheme(".concat(B(e), ")"), oe(n, e);
}
var vt = function() {
    function e() {
        var e = this;
        this._emitSheetCSS = function() {
            var t = e.instance.toString();
            if (!t) return "";
            var n = Ce(), o = ae([
                n && 'nonce="'.concat(n, '"'),
                "".concat(f, '="true"'),
                "".concat(y, '="').concat(v, '"')
            ].filter(Boolean), " ");
            return "<style ".concat(o, ">").concat(t, "</style>");
        }, this.getStyleTags = function() {
            if (e.sealed) throw he(2);
            return e._emitSheetCSS();
        }, this.getStyleElement = function() {
            var n;
            if (e.sealed) throw he(2);
            var r = e.instance.toString();
            if (!r) return [];
            var s = ((n = {})[f] = "", n[y] = v, n.dangerouslySetInnerHTML = {
                __html: r
            }, n), i = Ce();
            return i && (s.nonce = i), [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("style", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, s, {
                    key: "sc-0-0"
                }))
            ];
        }, this.seal = function() {
            e.sealed = !0;
        }, this.instance = new ke({
            isServer: !0
        }), this.sealed = !1;
    }
    return e.prototype.collectStyles = function(e) {
        if (this.sealed) throw he(2);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Ye, {
            sheet: this.instance
        }, e);
    }, e.prototype.interleaveWithNodeStream = function(e) {
        throw he(3);
    }, e;
}(), gt = {
    StyleSheet: ke,
    mainSheet: Me
};
"production" !== ("TURBOPACK compile-time value", "development") && "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
var St = "__sc-".concat(f, "__");
"production" !== ("TURBOPACK compile-time value", "development") && "test" !== ("TURBOPACK compile-time value", "development") && "undefined" != typeof window && (window[St] || (window[St] = 0), 1 === window[St] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window[St] += 1);
;
 //# sourceMappingURL=styled-components.browser.esm.js.map
}}),
"[project]/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-legacy.browser.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*


 JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)

 Copyright (c) 2011 Gary Court
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function styleReplacer(match, prefix, s, suffix) {
        return "" + prefix + ("s" === s ? "\\73 " : "\\53 ") + suffix;
    }
    function scriptReplacer(match, prefix, s, suffix) {
        return "" + prefix + ("s" === s ? "\\u0073" : "\\u0053") + suffix;
    }
    function objectName(object) {
        return Object.prototype.toString.call(object).replace(/^\[object (.*)\]$/, function(m, p0) {
            return p0;
        });
    }
    function describeKeyForErrorMessage(key) {
        var encodedKey = JSON.stringify(key);
        return '"' + key + '"' === encodedKey ? key : encodedKey;
    }
    function describeValueForErrorMessage(value) {
        switch(typeof value){
            case "string":
                return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
            case "object":
                if (isArrayImpl(value)) return "[...]";
                if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
                value = objectName(value);
                return "Object" === value ? "{...}" : value;
            case "function":
                return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
            default:
                return String(value);
        }
    }
    function describeElementType(type) {
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeElementType(type.render);
            case REACT_MEMO_TYPE:
                return describeElementType(type.type);
            case REACT_LAZY_TYPE:
                var payload = type._payload;
                type = type._init;
                try {
                    return describeElementType(type(payload));
                } catch (x) {}
        }
        return "";
    }
    function describeObjectForErrorMessage(objectOrArray, expandedName) {
        var objKind = objectName(objectOrArray);
        if ("Object" !== objKind && "Array" !== objKind) return objKind;
        var start = -1, length = 0;
        if (isArrayImpl(objectOrArray)) if (jsxChildrenParents.has(objectOrArray)) {
            var type = jsxChildrenParents.get(objectOrArray);
            objKind = "<" + describeElementType(type) + ">";
            for(var i = 0; i < objectOrArray.length; i++){
                var value = objectOrArray[i];
                value = "string" === typeof value ? value : "object" === typeof value && null !== value ? "{" + describeObjectForErrorMessage(value) + "}" : "{" + describeValueForErrorMessage(value) + "}";
                "" + i === expandedName ? (start = objKind.length, length = value.length, objKind += value) : objKind = 15 > value.length && 40 > objKind.length + value.length ? objKind + value : objKind + "{...}";
            }
            objKind += "</" + describeElementType(type) + ">";
        } else {
            objKind = "[";
            for(type = 0; type < objectOrArray.length; type++)0 < type && (objKind += ", "), i = objectOrArray[type], i = "object" === typeof i && null !== i ? describeObjectForErrorMessage(i) : describeValueForErrorMessage(i), "" + type === expandedName ? (start = objKind.length, length = i.length, objKind += i) : objKind = 10 > i.length && 40 > objKind.length + i.length ? objKind + i : objKind + "...";
            objKind += "]";
        }
        else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) objKind = "<" + describeElementType(objectOrArray.type) + "/>";
        else {
            if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
            if (jsxPropsParents.has(objectOrArray)) {
                objKind = jsxPropsParents.get(objectOrArray);
                objKind = "<" + (describeElementType(objKind) || "...");
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++){
                    objKind += " ";
                    value = type[i];
                    objKind += describeKeyForErrorMessage(value) + "=";
                    var _value2 = objectOrArray[value];
                    var _substr2 = value === expandedName && "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2);
                    "string" !== typeof _value2 && (_substr2 = "{" + _substr2 + "}");
                    value === expandedName ? (start = objKind.length, length = _substr2.length, objKind += _substr2) : objKind = 10 > _substr2.length && 40 > objKind.length + _substr2.length ? objKind + _substr2 : objKind + "...";
                }
                objKind += ">";
            } else {
                objKind = "{";
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++)0 < i && (objKind += ", "), value = type[i], objKind += describeKeyForErrorMessage(value) + ": ", _value2 = objectOrArray[value], _value2 = "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2), value === expandedName ? (start = objKind.length, length = _value2.length, objKind += _value2) : objKind = 10 > _value2.length && 40 > objKind.length + _value2.length ? objKind + _value2 : objKind + "...";
                objKind += "}";
            }
        }
        return void 0 === expandedName ? objKind : -1 < start && 0 < length ? (objectOrArray = " ".repeat(start) + "^".repeat(length), "\n  " + objKind + "\n  " + objectOrArray) : "\n  " + objKind;
    }
    function murmurhash3_32_gc(key, seed) {
        var remainder = key.length & 3;
        var bytes = key.length - remainder;
        var h1 = seed;
        for(seed = 0; seed < bytes;){
            var k1 = key.charCodeAt(seed) & 255 | (key.charCodeAt(++seed) & 255) << 8 | (key.charCodeAt(++seed) & 255) << 16 | (key.charCodeAt(++seed) & 255) << 24;
            ++seed;
            k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295;
            k1 = k1 << 15 | k1 >>> 17;
            k1 = 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
            h1 ^= k1;
            h1 = h1 << 13 | h1 >>> 19;
            h1 = 5 * (h1 & 65535) + ((5 * (h1 >>> 16) & 65535) << 16) & 4294967295;
            h1 = (h1 & 65535) + 27492 + (((h1 >>> 16) + 58964 & 65535) << 16);
        }
        k1 = 0;
        switch(remainder){
            case 3:
                k1 ^= (key.charCodeAt(seed + 2) & 255) << 16;
            case 2:
                k1 ^= (key.charCodeAt(seed + 1) & 255) << 8;
            case 1:
                k1 ^= key.charCodeAt(seed) & 255, k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295, k1 = k1 << 15 | k1 >>> 17, h1 ^= 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
        }
        h1 ^= key.length;
        h1 ^= h1 >>> 16;
        h1 = 2246822507 * (h1 & 65535) + ((2246822507 * (h1 >>> 16) & 65535) << 16) & 4294967295;
        h1 ^= h1 >>> 13;
        h1 = 3266489909 * (h1 & 65535) + ((3266489909 * (h1 >>> 16) & 65535) << 16) & 4294967295;
        return (h1 ^ h1 >>> 16) >>> 0;
    }
    function typeName(value) {
        return "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
    }
    function willCoercionThrow(value) {
        try {
            return testStringCoercion(value), !1;
        } catch (e) {
            return !0;
        }
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkAttributeStringCoercion(value, attributeName) {
        if (willCoercionThrow(value)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", attributeName, typeName(value)), testStringCoercion(value);
    }
    function checkCSSPropertyStringCoercion(value, propName) {
        if (willCoercionThrow(value)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", propName, typeName(value)), testStringCoercion(value);
    }
    function checkHtmlStringCoercion(value) {
        if (willCoercionThrow(value)) return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", typeName(value)), testStringCoercion(value);
    }
    function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return !0;
        if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) return validatedAttributeNameCache[attributeName] = !0;
        illegalAttributeNameCache[attributeName] = !0;
        console.error("Invalid attribute name: `%s`", attributeName);
        return !1;
    }
    function checkControlledValueProps(tagName, props) {
        hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || null == props.value || ("select" === tagName ? console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.") : console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."));
        props.onChange || props.readOnly || props.disabled || null == props.checked || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function validateProperty$1(tagName, name) {
        if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) return !0;
        if (rARIACamel$1.test(name)) {
            tagName = "aria-" + name.slice(4).toLowerCase();
            tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
            if (null == tagName) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name), warnedProperties$1[name] = !0;
            if (name !== tagName) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = !0;
        }
        if (rARIA$1.test(name)) {
            tagName = name.toLowerCase();
            tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
            if (null == tagName) return warnedProperties$1[name] = !0, !1;
            name !== tagName && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = !0);
        }
        return !0;
    }
    function validateProperties$2(type, props) {
        var invalidProps = [], key;
        for(key in props)validateProperty$1(type, key) || invalidProps.push(key);
        props = invalidProps.map(function(prop) {
            return "`" + prop + "`";
        }).join(", ");
        1 === invalidProps.length ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type) : 1 < invalidProps.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type);
    }
    function validateProperty(tagName, name, value, eventRegistry) {
        if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) return !0;
        var lowerCasedName = name.toLowerCase();
        if ("onfocusin" === lowerCasedName || "onfocusout" === lowerCasedName) return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), warnedProperties[name] = !0;
        if ("function" === typeof value && ("form" === tagName && "action" === name || "input" === tagName && "formAction" === name || "button" === tagName && "formAction" === name)) return !0;
        if (null != eventRegistry) {
            tagName = eventRegistry.possibleRegistrationNames;
            if (eventRegistry.registrationNameDependencies.hasOwnProperty(name)) return !0;
            eventRegistry = tagName.hasOwnProperty(lowerCasedName) ? tagName[lowerCasedName] : null;
            if (null != eventRegistry) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", name, eventRegistry), warnedProperties[name] = !0;
            if (EVENT_NAME_REGEX.test(name)) return console.error("Unknown event handler property `%s`. It will be ignored.", name), warnedProperties[name] = !0;
        } else if (EVENT_NAME_REGEX.test(name)) return INVALID_EVENT_NAME_REGEX.test(name) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name), warnedProperties[name] = !0;
        if (rARIA.test(name) || rARIACamel.test(name)) return !0;
        if ("innerhtml" === lowerCasedName) return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), warnedProperties[name] = !0;
        if ("aria" === lowerCasedName) return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), warnedProperties[name] = !0;
        if ("is" === lowerCasedName && null !== value && void 0 !== value && "string" !== typeof value) return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value), warnedProperties[name] = !0;
        if ("number" === typeof value && isNaN(value)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name), warnedProperties[name] = !0;
        if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            if (lowerCasedName = possibleStandardNames[lowerCasedName], lowerCasedName !== name) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", name, lowerCasedName), warnedProperties[name] = !0;
        } else if (name !== lowerCasedName) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName), warnedProperties[name] = !0;
        switch(name){
            case "dangerouslySetInnerHTML":
            case "children":
            case "style":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                return !0;
            case "innerText":
            case "textContent":
                return !0;
        }
        switch(typeof value){
            case "boolean":
                switch(name){
                    case "autoFocus":
                    case "checked":
                    case "multiple":
                    case "muted":
                    case "selected":
                    case "contentEditable":
                    case "spellCheck":
                    case "draggable":
                    case "value":
                    case "autoReverse":
                    case "externalResourcesRequired":
                    case "focusable":
                    case "preserveAlpha":
                    case "allowFullScreen":
                    case "async":
                    case "autoPlay":
                    case "controls":
                    case "default":
                    case "defer":
                    case "disabled":
                    case "disablePictureInPicture":
                    case "disableRemotePlayback":
                    case "formNoValidate":
                    case "hidden":
                    case "loop":
                    case "noModule":
                    case "noValidate":
                    case "open":
                    case "playsInline":
                    case "readOnly":
                    case "required":
                    case "reversed":
                    case "scoped":
                    case "seamless":
                    case "itemScope":
                    case "capture":
                    case "download":
                    case "inert":
                        return !0;
                    default:
                        lowerCasedName = name.toLowerCase().slice(0, 5);
                        if ("data-" === lowerCasedName || "aria-" === lowerCasedName) return !0;
                        value ? console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name) : console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
                        return warnedProperties[name] = !0;
                }
            case "function":
            case "symbol":
                return warnedProperties[name] = !0, !1;
            case "string":
                if ("false" === value || "true" === value) {
                    switch(name){
                        case "checked":
                        case "selected":
                        case "multiple":
                        case "muted":
                        case "allowFullScreen":
                        case "async":
                        case "autoPlay":
                        case "controls":
                        case "default":
                        case "defer":
                        case "disabled":
                        case "disablePictureInPicture":
                        case "disableRemotePlayback":
                        case "formNoValidate":
                        case "hidden":
                        case "loop":
                        case "noModule":
                        case "noValidate":
                        case "open":
                        case "playsInline":
                        case "readOnly":
                        case "required":
                        case "reversed":
                        case "scoped":
                        case "seamless":
                        case "itemScope":
                        case "inert":
                            break;
                        default:
                            return !0;
                    }
                    console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, "false" === value ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
                    warnedProperties[name] = !0;
                }
        }
        return !0;
    }
    function warnUnknownProperties(type, props, eventRegistry) {
        var unknownProps = [], key;
        for(key in props)validateProperty(type, key, props[key], eventRegistry) || unknownProps.push(key);
        props = unknownProps.map(function(prop) {
            return "`" + prop + "`";
        }).join(", ");
        1 === unknownProps.length ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type) : 1 < unknownProps.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type);
    }
    function camelize(string) {
        return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
        });
    }
    function escapeTextForBrowser(text) {
        if ("boolean" === typeof text || "number" === typeof text || "bigint" === typeof text) return "" + text;
        checkHtmlStringCoercion(text);
        text = "" + text;
        var match = matchHtmlRegExp.exec(text);
        if (match) {
            var html = "", index, lastIndex = 0;
            for(index = match.index; index < text.length; index++){
                switch(text.charCodeAt(index)){
                    case 34:
                        match = "&quot;";
                        break;
                    case 38:
                        match = "&amp;";
                        break;
                    case 39:
                        match = "&#x27;";
                        break;
                    case 60:
                        match = "&lt;";
                        break;
                    case 62:
                        match = "&gt;";
                        break;
                    default:
                        continue;
                }
                lastIndex !== index && (html += text.slice(lastIndex, index));
                lastIndex = index + 1;
                html += match;
            }
            text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
        }
        return text;
    }
    function sanitizeURL(url) {
        return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    function escapeEntireInlineScriptContent(scriptText) {
        checkHtmlStringCoercion(scriptText);
        return ("" + scriptText).replace(scriptRegex, scriptReplacer);
    }
    function createResumableState(identifierPrefix, externalRuntimeConfig, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
        return {
            idPrefix: void 0 === identifierPrefix ? "" : identifierPrefix,
            nextFormID: 0,
            streamingFormat: 0,
            bootstrapScriptContent: bootstrapScriptContent,
            bootstrapScripts: bootstrapScripts,
            bootstrapModules: bootstrapModules,
            instructions: NothingSent,
            hasBody: !1,
            hasHtml: !1,
            unknownResources: {},
            dnsResources: {},
            connectResources: {
                default: {},
                anonymous: {},
                credentials: {}
            },
            imageResources: {},
            styleResources: {},
            scriptResources: {},
            moduleUnknownResources: {},
            moduleScriptResources: {}
        };
    }
    function createFormatContext(insertionMode, selectedValue, tagScope) {
        return {
            insertionMode: insertionMode,
            selectedValue: selectedValue,
            tagScope: tagScope
        };
    }
    function getChildFormatContext(parentContext, type, props) {
        switch(type){
            case "noscript":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope | 1);
            case "select":
                return createFormatContext(HTML_MODE, null != props.value ? props.value : props.defaultValue, parentContext.tagScope);
            case "svg":
                return createFormatContext(SVG_MODE, null, parentContext.tagScope);
            case "picture":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope | 2);
            case "math":
                return createFormatContext(MATHML_MODE, null, parentContext.tagScope);
            case "foreignObject":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope);
            case "table":
                return createFormatContext(HTML_TABLE_MODE, null, parentContext.tagScope);
            case "thead":
            case "tbody":
            case "tfoot":
                return createFormatContext(HTML_TABLE_BODY_MODE, null, parentContext.tagScope);
            case "colgroup":
                return createFormatContext(HTML_COLGROUP_MODE, null, parentContext.tagScope);
            case "tr":
                return createFormatContext(HTML_TABLE_ROW_MODE, null, parentContext.tagScope);
        }
        return parentContext.insertionMode >= HTML_TABLE_MODE ? createFormatContext(HTML_MODE, null, parentContext.tagScope) : parentContext.insertionMode === ROOT_HTML_MODE ? "html" === type ? createFormatContext(HTML_HTML_MODE, null, parentContext.tagScope) : createFormatContext(HTML_MODE, null, parentContext.tagScope) : parentContext.insertionMode === HTML_HTML_MODE ? createFormatContext(HTML_MODE, null, parentContext.tagScope) : parentContext;
    }
    function pushStyleAttribute(target, style) {
        if ("object" !== typeof style) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        var isFirst = !0, styleName;
        for(styleName in style)if (hasOwnProperty.call(style, styleName)) {
            var styleValue = style[styleName];
            if (null != styleValue && "boolean" !== typeof styleValue && "" !== styleValue) {
                if (0 === styleName.indexOf("--")) {
                    var nameChunk = escapeTextForBrowser(styleName);
                    checkCSSPropertyStringCoercion(styleValue, styleName);
                    styleValue = escapeTextForBrowser(("" + styleValue).trim());
                } else {
                    nameChunk = styleName;
                    var value = styleValue;
                    if (-1 < nameChunk.indexOf("-")) {
                        var name = nameChunk;
                        warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, console.error("Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern$1, "ms-"))));
                    } else if (badVendoredStyleNamePattern.test(nameChunk)) name = nameChunk, warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1)));
                    else if (badStyleValueWithSemicolonPattern.test(value)) {
                        name = nameChunk;
                        var value$jscomp$0 = value;
                        warnedStyleValues.hasOwnProperty(value$jscomp$0) && warnedStyleValues[value$jscomp$0] || (warnedStyleValues[value$jscomp$0] = !0, console.error('Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.', name, value$jscomp$0.replace(badStyleValueWithSemicolonPattern, "")));
                    }
                    "number" === typeof value && (isNaN(value) ? warnedForNaNValue || (warnedForNaNValue = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", nameChunk)) : isFinite(value) || warnedForInfinityValue || (warnedForInfinityValue = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", nameChunk)));
                    nameChunk = styleName;
                    value = styleNameCache.get(nameChunk);
                    void 0 !== value ? nameChunk = value : (value = escapeTextForBrowser(nameChunk.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-")), styleNameCache.set(nameChunk, value), nameChunk = value);
                    "number" === typeof styleValue ? styleValue = 0 === styleValue || unitlessNumbers.has(styleName) ? "" + styleValue : styleValue + "px" : (checkCSSPropertyStringCoercion(styleValue, styleName), styleValue = escapeTextForBrowser(("" + styleValue).trim()));
                }
                isFirst ? (isFirst = !1, target.push(styleAttributeStart, nameChunk, styleAssign, styleValue)) : target.push(styleSeparator, nameChunk, styleAssign, styleValue);
            }
        }
        isFirst || target.push(attributeEnd);
    }
    function pushBooleanAttribute(target, name, value) {
        value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, name, attributeEmptyString);
    }
    function pushStringAttribute(target, name, value) {
        "function" !== typeof value && "symbol" !== typeof value && "boolean" !== typeof value && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
    }
    function pushAdditionalFormField(value, key) {
        this.push('<input type="hidden"');
        validateAdditionalFormField(value);
        pushStringAttribute(this, "name", key);
        pushStringAttribute(this, "value", value);
        this.push(endOfStartTagSelfClosing);
    }
    function validateAdditionalFormField(value) {
        if ("string" !== typeof value) throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
    }
    function getCustomFormFields(resumableState, formAction) {
        if ("function" === typeof formAction.$$FORM_ACTION) {
            var id = resumableState.nextFormID++;
            resumableState = resumableState.idPrefix + id;
            try {
                var customFields = formAction.$$FORM_ACTION(resumableState);
                if (customFields) {
                    var formData = customFields.data;
                    null != formData && formData.forEach(validateAdditionalFormField);
                }
                return customFields;
            } catch (x) {
                if ("object" === typeof x && null !== x && "function" === typeof x.then) throw x;
                console.error("Failed to serialize an action for progressive enhancement:\n%s", x);
            }
        }
        return null;
    }
    function pushFormActionAttribute(target, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name) {
        var formData = null;
        if ("function" === typeof formAction) {
            null === name || didWarnFormActionName || (didWarnFormActionName = !0, console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'));
            null === formEncType && null === formMethod || didWarnFormActionMethod || (didWarnFormActionMethod = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."));
            null === formTarget || didWarnFormActionTarget || (didWarnFormActionTarget = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
            var customFields = getCustomFormFields(resumableState, formAction);
            null !== customFields ? (name = customFields.name, formAction = customFields.action || "", formEncType = customFields.encType, formMethod = customFields.method, formTarget = customFields.target, formData = customFields.data) : (target.push(attributeSeparator, "formAction", attributeAssign, actionJavaScriptURL, attributeEnd), formTarget = formMethod = formEncType = formAction = name = null, injectFormReplayingRuntime(resumableState, renderState));
        }
        null != name && pushAttribute(target, "name", name);
        null != formAction && pushAttribute(target, "formAction", formAction);
        null != formEncType && pushAttribute(target, "formEncType", formEncType);
        null != formMethod && pushAttribute(target, "formMethod", formMethod);
        null != formTarget && pushAttribute(target, "formTarget", formTarget);
        return formData;
    }
    function pushAttribute(target, name, value) {
        switch(name){
            case "className":
                pushStringAttribute(target, "class", value);
                break;
            case "tabIndex":
                pushStringAttribute(target, "tabindex", value);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                pushStringAttribute(target, name, value);
                break;
            case "style":
                pushStyleAttribute(target, value);
                break;
            case "src":
            case "href":
                if ("" === value) {
                    "src" === name ? console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name) : console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name);
                    break;
                }
            case "action":
            case "formAction":
                if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
                checkAttributeStringCoercion(value, name);
                value = sanitizeURL("" + value);
                target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "ref":
                break;
            case "autoFocus":
            case "multiple":
            case "muted":
                pushBooleanAttribute(target, name.toLowerCase(), value);
                break;
            case "xlinkHref":
                if ("function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
                checkAttributeStringCoercion(value, name);
                value = sanitizeURL("" + value);
                target.push(attributeSeparator, "xlink:href", attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "inert":
                "" !== value || didWarnForNewBooleanPropsWithEmptyValue[name] || (didWarnForNewBooleanPropsWithEmptyValue[name] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", name));
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, name, attributeEmptyString);
                break;
            case "capture":
            case "download":
                !0 === value ? target.push(attributeSeparator, name, attributeEmptyString) : !1 !== value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "rowSpan":
            case "start":
                "function" === typeof value || "symbol" === typeof value || isNaN(value) || target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "xlinkActuate":
                pushStringAttribute(target, "xlink:actuate", value);
                break;
            case "xlinkArcrole":
                pushStringAttribute(target, "xlink:arcrole", value);
                break;
            case "xlinkRole":
                pushStringAttribute(target, "xlink:role", value);
                break;
            case "xlinkShow":
                pushStringAttribute(target, "xlink:show", value);
                break;
            case "xlinkTitle":
                pushStringAttribute(target, "xlink:title", value);
                break;
            case "xlinkType":
                pushStringAttribute(target, "xlink:type", value);
                break;
            case "xmlBase":
                pushStringAttribute(target, "xml:base", value);
                break;
            case "xmlLang":
                pushStringAttribute(target, "xml:lang", value);
                break;
            case "xmlSpace":
                pushStringAttribute(target, "xml:space", value);
                break;
            default:
                if (!(2 < name.length) || "o" !== name[0] && "O" !== name[0] || "n" !== name[1] && "N" !== name[1]) {
                    if (name = aliases.get(name) || name, isAttributeNameSafe(name)) {
                        switch(typeof value){
                            case "function":
                            case "symbol":
                                return;
                            case "boolean":
                                var prefix = name.toLowerCase().slice(0, 5);
                                if ("data-" !== prefix && "aria-" !== prefix) return;
                        }
                        target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                    }
                }
        }
    }
    function pushInnerHTML(target, innerHTML, children) {
        if (null != innerHTML) {
            if (null != children) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof innerHTML || !("__html" in innerHTML)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
            innerHTML = innerHTML.__html;
            null !== innerHTML && void 0 !== innerHTML && (checkHtmlStringCoercion(innerHTML), target.push("" + innerHTML));
        }
    }
    function checkSelectProp(props, propName) {
        var value = props[propName];
        null != value && (value = isArrayImpl(value), props.multiple && !value ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName) : !props.multiple && value && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName));
    }
    function flattenOptionChildren(children) {
        var content = "";
        React.Children.forEach(children, function(child) {
            null != child && (content += child, didWarnInvalidOptionChildren || "string" === typeof child || "number" === typeof child || "bigint" === typeof child || (didWarnInvalidOptionChildren = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
        });
        return content;
    }
    function injectFormReplayingRuntime(resumableState, renderState) {
        (resumableState.instructions & 16) === NothingSent && (resumableState.instructions |= 16, renderState.bootstrapChunks.unshift(renderState.startInlineScript, formReplayingRuntimeScript, "\x3c/script>"));
    }
    function pushLinkImpl(target, props) {
        target.push(startChunkForTag("link"));
        for(var propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
    }
    function escapeStyleTextContent(styleText) {
        checkHtmlStringCoercion(styleText);
        return ("" + styleText).replace(styleRegex, styleReplacer);
    }
    function pushSelfClosing(target, props, tag) {
        target.push(startChunkForTag(tag));
        for(var propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
    }
    function pushTitleImpl(target, props) {
        target.push(startChunkForTag("title"));
        var children = null, innerHTML = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    children = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        props = Array.isArray(children) ? 2 > children.length ? children[0] : null : children;
        "function" !== typeof props && "symbol" !== typeof props && null !== props && void 0 !== props && target.push(escapeTextForBrowser("" + props));
        pushInnerHTML(target, innerHTML, children);
        target.push(endChunkForTag("title"));
        return null;
    }
    function pushScriptImpl(target, props) {
        target.push(startChunkForTag("script"));
        var children = null, innerHTML = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    children = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        null != children && "string" !== typeof children && (props = "number" === typeof children ? "a number for children" : Array.isArray(children) ? "an array for children" : "something unexpected for children", console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", props));
        pushInnerHTML(target, innerHTML, children);
        "string" === typeof children && target.push(escapeEntireInlineScriptContent(children));
        target.push(endChunkForTag("script"));
        return null;
    }
    function pushStartGenericElement(target, props, tag) {
        target.push(startChunkForTag(tag));
        var innerHTML = tag = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    tag = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, tag);
        return "string" === typeof tag ? (target.push(escapeTextForBrowser(tag)), null) : tag;
    }
    function startChunkForTag(tag) {
        var tagStartChunk = validatedTagCache.get(tag);
        if (void 0 === tagStartChunk) {
            if (!VALID_TAG_REGEX.test(tag)) throw Error("Invalid tag: " + tag);
            tagStartChunk = "<" + tag;
            validatedTagCache.set(tag, tagStartChunk);
        }
        return tagStartChunk;
    }
    function pushStartInstance(target$jscomp$0, type, props, resumableState, renderState, hoistableState, formatContext, textEmbedded, isFallback) {
        validateProperties$2(type, props);
        "input" !== type && "textarea" !== type && "select" !== type || null == props || null !== props.value || didWarnValueNull || (didWarnValueNull = !0, "select" === type && props.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type));
        b: if (-1 === type.indexOf("-")) var JSCompiler_inline_result = !1;
        else switch(type){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                JSCompiler_inline_result = !1;
                break b;
            default:
                JSCompiler_inline_result = !0;
        }
        JSCompiler_inline_result || "string" === typeof props.is || warnUnknownProperties(type, props, null);
        !props.suppressContentEditableWarning && props.contentEditable && null != props.children && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
        formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE && -1 === type.indexOf("-") && type.toLowerCase() !== type && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
        switch(type){
            case "div":
            case "span":
            case "svg":
            case "path":
                break;
            case "a":
                target$jscomp$0.push(startChunkForTag("a"));
                var children = null, innerHTML = null, propKey;
                for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (null != propValue) switch(propKey){
                        case "children":
                            children = propValue;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML = propValue;
                            break;
                        case "href":
                            "" === propValue ? pushStringAttribute(target$jscomp$0, "href", "") : pushAttribute(target$jscomp$0, propKey, propValue);
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey, propValue);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML, children);
                if ("string" === typeof children) {
                    target$jscomp$0.push(escapeTextForBrowser(children));
                    var JSCompiler_inline_result$jscomp$0 = null;
                } else JSCompiler_inline_result$jscomp$0 = children;
                return JSCompiler_inline_result$jscomp$0;
            case "g":
            case "p":
            case "li":
                break;
            case "select":
                checkControlledValueProps("select", props);
                checkSelectProp(props, "value");
                checkSelectProp(props, "defaultValue");
                void 0 === props.value || void 0 === props.defaultValue || didWarnDefaultSelectValue || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultSelectValue = !0);
                target$jscomp$0.push(startChunkForTag("select"));
                var children$jscomp$0 = null, innerHTML$jscomp$0 = null, propKey$jscomp$0;
                for(propKey$jscomp$0 in props)if (hasOwnProperty.call(props, propKey$jscomp$0)) {
                    var propValue$jscomp$0 = props[propKey$jscomp$0];
                    if (null != propValue$jscomp$0) switch(propKey$jscomp$0){
                        case "children":
                            children$jscomp$0 = propValue$jscomp$0;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$0 = propValue$jscomp$0;
                            break;
                        case "defaultValue":
                        case "value":
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$0, propValue$jscomp$0);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
                return children$jscomp$0;
            case "option":
                var selectedValue = formatContext.selectedValue;
                target$jscomp$0.push(startChunkForTag("option"));
                var children$jscomp$1 = null, value = null, selected = null, innerHTML$jscomp$1 = null, propKey$jscomp$1;
                for(propKey$jscomp$1 in props)if (hasOwnProperty.call(props, propKey$jscomp$1)) {
                    var propValue$jscomp$1 = props[propKey$jscomp$1];
                    if (null != propValue$jscomp$1) switch(propKey$jscomp$1){
                        case "children":
                            children$jscomp$1 = propValue$jscomp$1;
                            break;
                        case "selected":
                            selected = propValue$jscomp$1;
                            didWarnSelectedSetOnOption || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), didWarnSelectedSetOnOption = !0);
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$1 = propValue$jscomp$1;
                            break;
                        case "value":
                            value = propValue$jscomp$1;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$1, propValue$jscomp$1);
                    }
                }
                if (null != selectedValue) {
                    if (null !== value) {
                        checkAttributeStringCoercion(value, "value");
                        var stringValue = "" + value;
                    } else null === innerHTML$jscomp$1 || didWarnInvalidOptionInnerHTML || (didWarnInvalidOptionInnerHTML = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), stringValue = flattenOptionChildren(children$jscomp$1);
                    if (isArrayImpl(selectedValue)) for(var i = 0; i < selectedValue.length; i++){
                        if (checkAttributeStringCoercion(selectedValue[i], "value"), "" + selectedValue[i] === stringValue) {
                            target$jscomp$0.push(' selected=""');
                            break;
                        }
                    }
                    else checkAttributeStringCoercion(selectedValue, "select.value"), "" + selectedValue === stringValue && target$jscomp$0.push(' selected=""');
                } else selected && target$jscomp$0.push(' selected=""');
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
                return children$jscomp$1;
            case "textarea":
                checkControlledValueProps("textarea", props);
                void 0 === props.value || void 0 === props.defaultValue || didWarnDefaultTextareaValue || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultTextareaValue = !0);
                target$jscomp$0.push(startChunkForTag("textarea"));
                var value$jscomp$0 = null, defaultValue = null, children$jscomp$2 = null, propKey$jscomp$2;
                for(propKey$jscomp$2 in props)if (hasOwnProperty.call(props, propKey$jscomp$2)) {
                    var propValue$jscomp$2 = props[propKey$jscomp$2];
                    if (null != propValue$jscomp$2) switch(propKey$jscomp$2){
                        case "children":
                            children$jscomp$2 = propValue$jscomp$2;
                            break;
                        case "value":
                            value$jscomp$0 = propValue$jscomp$2;
                            break;
                        case "defaultValue":
                            defaultValue = propValue$jscomp$2;
                            break;
                        case "dangerouslySetInnerHTML":
                            throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$2, propValue$jscomp$2);
                    }
                }
                null === value$jscomp$0 && null !== defaultValue && (value$jscomp$0 = defaultValue);
                target$jscomp$0.push(endOfStartTag);
                if (null != children$jscomp$2) {
                    console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
                    if (null != value$jscomp$0) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                    if (isArrayImpl(children$jscomp$2)) {
                        if (1 < children$jscomp$2.length) throw Error("<textarea> can only have at most one child.");
                        checkHtmlStringCoercion(children$jscomp$2[0]);
                        value$jscomp$0 = "" + children$jscomp$2[0];
                    }
                    checkHtmlStringCoercion(children$jscomp$2);
                    value$jscomp$0 = "" + children$jscomp$2;
                }
                "string" === typeof value$jscomp$0 && "\n" === value$jscomp$0[0] && target$jscomp$0.push(leadingNewline);
                null !== value$jscomp$0 && (checkAttributeStringCoercion(value$jscomp$0, "value"), target$jscomp$0.push(escapeTextForBrowser("" + value$jscomp$0)));
                return null;
            case "input":
                checkControlledValueProps("input", props);
                target$jscomp$0.push(startChunkForTag("input"));
                var name = null, formAction = null, formEncType = null, formMethod = null, formTarget = null, value$jscomp$1 = null, defaultValue$jscomp$0 = null, checked = null, defaultChecked = null, propKey$jscomp$3;
                for(propKey$jscomp$3 in props)if (hasOwnProperty.call(props, propKey$jscomp$3)) {
                    var propValue$jscomp$3 = props[propKey$jscomp$3];
                    if (null != propValue$jscomp$3) switch(propKey$jscomp$3){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                        case "name":
                            name = propValue$jscomp$3;
                            break;
                        case "formAction":
                            formAction = propValue$jscomp$3;
                            break;
                        case "formEncType":
                            formEncType = propValue$jscomp$3;
                            break;
                        case "formMethod":
                            formMethod = propValue$jscomp$3;
                            break;
                        case "formTarget":
                            formTarget = propValue$jscomp$3;
                            break;
                        case "defaultChecked":
                            defaultChecked = propValue$jscomp$3;
                            break;
                        case "defaultValue":
                            defaultValue$jscomp$0 = propValue$jscomp$3;
                            break;
                        case "checked":
                            checked = propValue$jscomp$3;
                            break;
                        case "value":
                            value$jscomp$1 = propValue$jscomp$3;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$3, propValue$jscomp$3);
                    }
                }
                null === formAction || "image" === props.type || "submit" === props.type || didWarnFormActionType || (didWarnFormActionType = !0, console.error('An input can only specify a formAction along with type="submit" or type="image".'));
                var formData = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name);
                null === checked || null === defaultChecked || didWarnDefaultChecked || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultChecked = !0);
                null === value$jscomp$1 || null === defaultValue$jscomp$0 || didWarnDefaultInputValue || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultInputValue = !0);
                null !== checked ? pushBooleanAttribute(target$jscomp$0, "checked", checked) : null !== defaultChecked && pushBooleanAttribute(target$jscomp$0, "checked", defaultChecked);
                null !== value$jscomp$1 ? pushAttribute(target$jscomp$0, "value", value$jscomp$1) : null !== defaultValue$jscomp$0 && pushAttribute(target$jscomp$0, "value", defaultValue$jscomp$0);
                target$jscomp$0.push(endOfStartTagSelfClosing);
                null != formData && formData.forEach(pushAdditionalFormField, target$jscomp$0);
                return null;
            case "button":
                target$jscomp$0.push(startChunkForTag("button"));
                var children$jscomp$3 = null, innerHTML$jscomp$2 = null, name$jscomp$0 = null, formAction$jscomp$0 = null, formEncType$jscomp$0 = null, formMethod$jscomp$0 = null, formTarget$jscomp$0 = null, propKey$jscomp$4;
                for(propKey$jscomp$4 in props)if (hasOwnProperty.call(props, propKey$jscomp$4)) {
                    var propValue$jscomp$4 = props[propKey$jscomp$4];
                    if (null != propValue$jscomp$4) switch(propKey$jscomp$4){
                        case "children":
                            children$jscomp$3 = propValue$jscomp$4;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$2 = propValue$jscomp$4;
                            break;
                        case "name":
                            name$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formAction":
                            formAction$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formEncType":
                            formEncType$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formMethod":
                            formMethod$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formTarget":
                            formTarget$jscomp$0 = propValue$jscomp$4;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$4, propValue$jscomp$4);
                    }
                }
                null === formAction$jscomp$0 || null == props.type || "submit" === props.type || didWarnFormActionType || (didWarnFormActionType = !0, console.error('A button can only specify a formAction along with type="submit" or no type.'));
                var formData$jscomp$0 = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction$jscomp$0, formEncType$jscomp$0, formMethod$jscomp$0, formTarget$jscomp$0, name$jscomp$0);
                target$jscomp$0.push(endOfStartTag);
                null != formData$jscomp$0 && formData$jscomp$0.forEach(pushAdditionalFormField, target$jscomp$0);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
                if ("string" === typeof children$jscomp$3) {
                    target$jscomp$0.push(escapeTextForBrowser(children$jscomp$3));
                    var JSCompiler_inline_result$jscomp$1 = null;
                } else JSCompiler_inline_result$jscomp$1 = children$jscomp$3;
                return JSCompiler_inline_result$jscomp$1;
            case "form":
                target$jscomp$0.push(startChunkForTag("form"));
                var children$jscomp$4 = null, innerHTML$jscomp$3 = null, formAction$jscomp$1 = null, formEncType$jscomp$1 = null, formMethod$jscomp$1 = null, formTarget$jscomp$1 = null, propKey$jscomp$5;
                for(propKey$jscomp$5 in props)if (hasOwnProperty.call(props, propKey$jscomp$5)) {
                    var propValue$jscomp$5 = props[propKey$jscomp$5];
                    if (null != propValue$jscomp$5) switch(propKey$jscomp$5){
                        case "children":
                            children$jscomp$4 = propValue$jscomp$5;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$3 = propValue$jscomp$5;
                            break;
                        case "action":
                            formAction$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "encType":
                            formEncType$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "method":
                            formMethod$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "target":
                            formTarget$jscomp$1 = propValue$jscomp$5;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$5, propValue$jscomp$5);
                    }
                }
                var formData$jscomp$1 = null, formActionName = null;
                if ("function" === typeof formAction$jscomp$1) {
                    null === formEncType$jscomp$1 && null === formMethod$jscomp$1 || didWarnFormActionMethod || (didWarnFormActionMethod = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."));
                    null === formTarget$jscomp$1 || didWarnFormActionTarget || (didWarnFormActionTarget = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
                    var customFields = getCustomFormFields(resumableState, formAction$jscomp$1);
                    null !== customFields ? (formAction$jscomp$1 = customFields.action || "", formEncType$jscomp$1 = customFields.encType, formMethod$jscomp$1 = customFields.method, formTarget$jscomp$1 = customFields.target, formData$jscomp$1 = customFields.data, formActionName = customFields.name) : (target$jscomp$0.push(attributeSeparator, "action", attributeAssign, actionJavaScriptURL, attributeEnd), formTarget$jscomp$1 = formMethod$jscomp$1 = formEncType$jscomp$1 = formAction$jscomp$1 = null, injectFormReplayingRuntime(resumableState, renderState));
                }
                null != formAction$jscomp$1 && pushAttribute(target$jscomp$0, "action", formAction$jscomp$1);
                null != formEncType$jscomp$1 && pushAttribute(target$jscomp$0, "encType", formEncType$jscomp$1);
                null != formMethod$jscomp$1 && pushAttribute(target$jscomp$0, "method", formMethod$jscomp$1);
                null != formTarget$jscomp$1 && pushAttribute(target$jscomp$0, "target", formTarget$jscomp$1);
                target$jscomp$0.push(endOfStartTag);
                null !== formActionName && (target$jscomp$0.push('<input type="hidden"'), pushStringAttribute(target$jscomp$0, "name", formActionName), target$jscomp$0.push(endOfStartTagSelfClosing), null != formData$jscomp$1 && formData$jscomp$1.forEach(pushAdditionalFormField, target$jscomp$0));
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
                if ("string" === typeof children$jscomp$4) {
                    target$jscomp$0.push(escapeTextForBrowser(children$jscomp$4));
                    var JSCompiler_inline_result$jscomp$2 = null;
                } else JSCompiler_inline_result$jscomp$2 = children$jscomp$4;
                return JSCompiler_inline_result$jscomp$2;
            case "menuitem":
                target$jscomp$0.push(startChunkForTag("menuitem"));
                for(var propKey$jscomp$6 in props)if (hasOwnProperty.call(props, propKey$jscomp$6)) {
                    var propValue$jscomp$6 = props[propKey$jscomp$6];
                    if (null != propValue$jscomp$6) switch(propKey$jscomp$6){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$6, propValue$jscomp$6);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                return null;
            case "object":
                target$jscomp$0.push(startChunkForTag("object"));
                var children$jscomp$5 = null, innerHTML$jscomp$4 = null, propKey$jscomp$7;
                for(propKey$jscomp$7 in props)if (hasOwnProperty.call(props, propKey$jscomp$7)) {
                    var propValue$jscomp$7 = props[propKey$jscomp$7];
                    if (null != propValue$jscomp$7) switch(propKey$jscomp$7){
                        case "children":
                            children$jscomp$5 = propValue$jscomp$7;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$4 = propValue$jscomp$7;
                            break;
                        case "data":
                            checkAttributeStringCoercion(propValue$jscomp$7, "data");
                            var sanitizedValue = sanitizeURL("" + propValue$jscomp$7);
                            if ("" === sanitizedValue) {
                                console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', propKey$jscomp$7, propKey$jscomp$7);
                                break;
                            }
                            target$jscomp$0.push(attributeSeparator, "data", attributeAssign, escapeTextForBrowser(sanitizedValue), attributeEnd);
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$7, propValue$jscomp$7);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
                if ("string" === typeof children$jscomp$5) {
                    target$jscomp$0.push(escapeTextForBrowser(children$jscomp$5));
                    var JSCompiler_inline_result$jscomp$3 = null;
                } else JSCompiler_inline_result$jscomp$3 = children$jscomp$5;
                return JSCompiler_inline_result$jscomp$3;
            case "title":
                var insertionMode = formatContext.insertionMode, noscriptTagInScope = !!(formatContext.tagScope & 1);
                if (hasOwnProperty.call(props, "children")) {
                    var children$jscomp$6 = props.children, child = Array.isArray(children$jscomp$6) ? 2 > children$jscomp$6.length ? children$jscomp$6[0] : null : children$jscomp$6;
                    Array.isArray(children$jscomp$6) && 1 < children$jscomp$6.length ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be commong to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", children$jscomp$6.length) : "function" === typeof child || "symbol" === typeof child ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", "function" === typeof child ? "a Function" : "a Sybmol") : child && child.toString === ({}).toString && (null != child.$$typeof ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."));
                }
                if (insertionMode === SVG_MODE || noscriptTagInScope || null != props.itemProp) var JSCompiler_inline_result$jscomp$4 = pushTitleImpl(target$jscomp$0, props);
                else isFallback ? JSCompiler_inline_result$jscomp$4 = null : (pushTitleImpl(renderState.hoistableChunks, props), JSCompiler_inline_result$jscomp$4 = void 0);
                return JSCompiler_inline_result$jscomp$4;
            case "link":
                var rel = props.rel, href = props.href, precedence = props.precedence;
                if (formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp || "string" !== typeof rel || "string" !== typeof href || "" === href) {
                    "stylesheet" === rel && "string" === typeof props.precedence && ("string" === typeof href && href || console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.', null === href ? "`null`" : void 0 === href ? "`undefined`" : "" === href ? "an empty string" : 'something with type "' + typeof href + '"'));
                    pushLinkImpl(target$jscomp$0, props);
                    var JSCompiler_inline_result$jscomp$5 = null;
                } else if ("stylesheet" === props.rel) if ("string" !== typeof precedence || null != props.disabled || props.onLoad || props.onError) {
                    if ("string" === typeof precedence) {
                        if (null != props.disabled) console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.');
                        else if (props.onLoad || props.onError) {
                            var propDescription = props.onLoad && props.onError ? "`onLoad` and `onError` props" : props.onLoad ? "`onLoad` prop" : "`onError` prop";
                            console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.', propDescription, propDescription);
                        }
                    }
                    JSCompiler_inline_result$jscomp$5 = pushLinkImpl(target$jscomp$0, props);
                } else {
                    var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
                    if (resourceState !== EXISTS) {
                        resumableState.styleResources[href] = EXISTS;
                        styleQueue || (styleQueue = {
                            precedence: escapeTextForBrowser(precedence),
                            rules: [],
                            hrefs: [],
                            sheets: new Map()
                        }, renderState.styles.set(precedence, styleQueue));
                        var resource = {
                            state: PENDING$1,
                            props: assign({}, props, {
                                "data-precedence": props.precedence,
                                precedence: null
                            })
                        };
                        if (resourceState) {
                            2 === resourceState.length && adoptPreloadCredentials(resource.props, resourceState);
                            var preloadResource = renderState.preloads.stylesheets.get(href);
                            preloadResource && 0 < preloadResource.length ? preloadResource.length = 0 : resource.state = PRELOADED;
                        }
                        styleQueue.sheets.set(href, resource);
                        hoistableState && hoistableState.stylesheets.add(resource);
                    } else if (styleQueue) {
                        var _resource = styleQueue.sheets.get(href);
                        _resource && hoistableState && hoistableState.stylesheets.add(_resource);
                    }
                    textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e");
                    JSCompiler_inline_result$jscomp$5 = null;
                }
                else props.onLoad || props.onError ? JSCompiler_inline_result$jscomp$5 = pushLinkImpl(target$jscomp$0, props) : (textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e"), JSCompiler_inline_result$jscomp$5 = isFallback ? null : pushLinkImpl(renderState.hoistableChunks, props));
                return JSCompiler_inline_result$jscomp$5;
            case "script":
                var asyncProp = props.async;
                if ("string" !== typeof props.src || !props.src || !asyncProp || "function" === typeof asyncProp || "symbol" === typeof asyncProp || props.onLoad || props.onError || formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp) var JSCompiler_inline_result$jscomp$6 = pushScriptImpl(target$jscomp$0, props);
                else {
                    var key = props.src;
                    if ("module" === props.type) {
                        var resources = resumableState.moduleScriptResources;
                        var preloads = renderState.preloads.moduleScripts;
                    } else resources = resumableState.scriptResources, preloads = renderState.preloads.scripts;
                    var resourceState$jscomp$0 = resources.hasOwnProperty(key) ? resources[key] : void 0;
                    if (resourceState$jscomp$0 !== EXISTS) {
                        resources[key] = EXISTS;
                        var scriptProps = props;
                        if (resourceState$jscomp$0) {
                            2 === resourceState$jscomp$0.length && (scriptProps = assign({}, props), adoptPreloadCredentials(scriptProps, resourceState$jscomp$0));
                            var preloadResource$jscomp$0 = preloads.get(key);
                            preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
                        }
                        var resource$jscomp$0 = [];
                        renderState.scripts.add(resource$jscomp$0);
                        pushScriptImpl(resource$jscomp$0, scriptProps);
                    }
                    textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e");
                    JSCompiler_inline_result$jscomp$6 = null;
                }
                return JSCompiler_inline_result$jscomp$6;
            case "style":
                var insertionMode$jscomp$0 = formatContext.insertionMode, noscriptTagInScope$jscomp$0 = !!(formatContext.tagScope & 1);
                if (hasOwnProperty.call(props, "children")) {
                    var children$jscomp$7 = props.children, child$jscomp$0 = Array.isArray(children$jscomp$7) ? 2 > children$jscomp$7.length ? children$jscomp$7[0] : null : children$jscomp$7;
                    ("function" === typeof child$jscomp$0 || "symbol" === typeof child$jscomp$0 || Array.isArray(child$jscomp$0)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", "function" === typeof child$jscomp$0 ? "a Function" : "symbol" === typeof child$jscomp$0 ? "a Sybmol" : "an Array");
                }
                var precedence$jscomp$0 = props.precedence, href$jscomp$0 = props.href;
                if (insertionMode$jscomp$0 === SVG_MODE || noscriptTagInScope$jscomp$0 || null != props.itemProp || "string" !== typeof precedence$jscomp$0 || "string" !== typeof href$jscomp$0 || "" === href$jscomp$0) {
                    target$jscomp$0.push(startChunkForTag("style"));
                    var children$jscomp$8 = null, innerHTML$jscomp$5 = null, propKey$jscomp$8;
                    for(propKey$jscomp$8 in props)if (hasOwnProperty.call(props, propKey$jscomp$8)) {
                        var propValue$jscomp$8 = props[propKey$jscomp$8];
                        if (null != propValue$jscomp$8) switch(propKey$jscomp$8){
                            case "children":
                                children$jscomp$8 = propValue$jscomp$8;
                                break;
                            case "dangerouslySetInnerHTML":
                                innerHTML$jscomp$5 = propValue$jscomp$8;
                                break;
                            default:
                                pushAttribute(target$jscomp$0, propKey$jscomp$8, propValue$jscomp$8);
                        }
                    }
                    target$jscomp$0.push(endOfStartTag);
                    var child$jscomp$1 = Array.isArray(children$jscomp$8) ? 2 > children$jscomp$8.length ? children$jscomp$8[0] : null : children$jscomp$8;
                    "function" !== typeof child$jscomp$1 && "symbol" !== typeof child$jscomp$1 && null !== child$jscomp$1 && void 0 !== child$jscomp$1 && target$jscomp$0.push(escapeStyleTextContent(child$jscomp$1));
                    pushInnerHTML(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$8);
                    target$jscomp$0.push(endChunkForTag("style"));
                    var JSCompiler_inline_result$jscomp$7 = null;
                } else {
                    href$jscomp$0.includes(" ") && console.error('React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".', href$jscomp$0);
                    var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0), resourceState$jscomp$1 = resumableState.styleResources.hasOwnProperty(href$jscomp$0) ? resumableState.styleResources[href$jscomp$0] : void 0;
                    if (resourceState$jscomp$1 !== EXISTS) {
                        resumableState.styleResources[href$jscomp$0] = EXISTS;
                        resourceState$jscomp$1 && console.error('React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.', href$jscomp$0);
                        styleQueue$jscomp$0 ? styleQueue$jscomp$0.hrefs.push(escapeTextForBrowser(href$jscomp$0)) : (styleQueue$jscomp$0 = {
                            precedence: escapeTextForBrowser(precedence$jscomp$0),
                            rules: [],
                            hrefs: [
                                escapeTextForBrowser(href$jscomp$0)
                            ],
                            sheets: new Map()
                        }, renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
                        var target = styleQueue$jscomp$0.rules, children$jscomp$9 = null, innerHTML$jscomp$6 = null, propKey$jscomp$9;
                        for(propKey$jscomp$9 in props)if (hasOwnProperty.call(props, propKey$jscomp$9)) {
                            var propValue$jscomp$9 = props[propKey$jscomp$9];
                            if (null != propValue$jscomp$9) switch(propKey$jscomp$9){
                                case "children":
                                    children$jscomp$9 = propValue$jscomp$9;
                                    break;
                                case "dangerouslySetInnerHTML":
                                    innerHTML$jscomp$6 = propValue$jscomp$9;
                            }
                        }
                        var child$jscomp$2 = Array.isArray(children$jscomp$9) ? 2 > children$jscomp$9.length ? children$jscomp$9[0] : null : children$jscomp$9;
                        "function" !== typeof child$jscomp$2 && "symbol" !== typeof child$jscomp$2 && null !== child$jscomp$2 && void 0 !== child$jscomp$2 && target.push(escapeStyleTextContent(child$jscomp$2));
                        pushInnerHTML(target, innerHTML$jscomp$6, children$jscomp$9);
                    }
                    styleQueue$jscomp$0 && hoistableState && hoistableState.styles.add(styleQueue$jscomp$0);
                    textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e");
                    JSCompiler_inline_result$jscomp$7 = void 0;
                }
                return JSCompiler_inline_result$jscomp$7;
            case "meta":
                if (formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp) var JSCompiler_inline_result$jscomp$8 = pushSelfClosing(target$jscomp$0, props, "meta");
                else textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e"), JSCompiler_inline_result$jscomp$8 = isFallback ? null : "string" === typeof props.charSet ? pushSelfClosing(renderState.charsetChunks, props, "meta") : "viewport" === props.name ? pushSelfClosing(renderState.viewportChunks, props, "meta") : pushSelfClosing(renderState.hoistableChunks, props, "meta");
                return JSCompiler_inline_result$jscomp$8;
            case "listing":
            case "pre":
                target$jscomp$0.push(startChunkForTag(type));
                var children$jscomp$10 = null, innerHTML$jscomp$7 = null, propKey$jscomp$10;
                for(propKey$jscomp$10 in props)if (hasOwnProperty.call(props, propKey$jscomp$10)) {
                    var propValue$jscomp$10 = props[propKey$jscomp$10];
                    if (null != propValue$jscomp$10) switch(propKey$jscomp$10){
                        case "children":
                            children$jscomp$10 = propValue$jscomp$10;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$7 = propValue$jscomp$10;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$10, propValue$jscomp$10);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                if (null != innerHTML$jscomp$7) {
                    if (null != children$jscomp$10) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
                    if ("object" !== typeof innerHTML$jscomp$7 || !("__html" in innerHTML$jscomp$7)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
                    var html = innerHTML$jscomp$7.__html;
                    null !== html && void 0 !== html && ("string" === typeof html && 0 < html.length && "\n" === html[0] ? target$jscomp$0.push(leadingNewline, html) : (checkHtmlStringCoercion(html), target$jscomp$0.push("" + html)));
                }
                "string" === typeof children$jscomp$10 && "\n" === children$jscomp$10[0] && target$jscomp$0.push(leadingNewline);
                return children$jscomp$10;
            case "img":
                var src = props.src, srcSet = props.srcSet;
                if (!("lazy" === props.loading || !src && !srcSet || "string" !== typeof src && null != src || "string" !== typeof srcSet && null != srcSet) && "low" !== props.fetchPriority && !1 === !!(formatContext.tagScope & 3) && ("string" !== typeof src || ":" !== src[4] || "d" !== src[0] && "D" !== src[0] || "a" !== src[1] && "A" !== src[1] || "t" !== src[2] && "T" !== src[2] || "a" !== src[3] && "A" !== src[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
                    var sizes = "string" === typeof props.sizes ? props.sizes : void 0, key$jscomp$0 = srcSet ? srcSet + "\n" + (sizes || "") : src, promotablePreloads = renderState.preloads.images, resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
                    if (resource$jscomp$1) {
                        if ("high" === props.fetchPriority || 10 > renderState.highImagePreloads.size) promotablePreloads.delete(key$jscomp$0), renderState.highImagePreloads.add(resource$jscomp$1);
                    } else if (!resumableState.imageResources.hasOwnProperty(key$jscomp$0)) {
                        resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS;
                        var input = props.crossOrigin;
                        var crossOrigin = "string" === typeof input ? "use-credentials" === input ? input : "" : void 0;
                        var headers = renderState.headers, header;
                        headers && 0 < headers.remainingCapacity && ("high" === props.fetchPriority || 500 > headers.highImagePreloads.length) && (header = getPreloadAsHeader(src, "image", {
                            imageSrcSet: props.srcSet,
                            imageSizes: props.sizes,
                            crossOrigin: crossOrigin,
                            integrity: props.integrity,
                            nonce: props.nonce,
                            type: props.type,
                            fetchPriority: props.fetchPriority,
                            referrerPolicy: props.refererPolicy
                        }), 0 <= (headers.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS, headers.highImagePreloads && (headers.highImagePreloads += ", "), headers.highImagePreloads += header) : (resource$jscomp$1 = [], pushLinkImpl(resource$jscomp$1, {
                            rel: "preload",
                            as: "image",
                            href: srcSet ? void 0 : src,
                            imageSrcSet: srcSet,
                            imageSizes: sizes,
                            crossOrigin: crossOrigin,
                            integrity: props.integrity,
                            type: props.type,
                            fetchPriority: props.fetchPriority,
                            referrerPolicy: props.referrerPolicy
                        }), "high" === props.fetchPriority || 10 > renderState.highImagePreloads.size ? renderState.highImagePreloads.add(resource$jscomp$1) : (renderState.bulkPreloads.add(resource$jscomp$1), promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
                    }
                }
                return pushSelfClosing(target$jscomp$0, props, "img");
            case "base":
            case "area":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "param":
            case "source":
            case "track":
            case "wbr":
                return pushSelfClosing(target$jscomp$0, props, type);
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                break;
            case "head":
                if (formatContext.insertionMode < HTML_MODE && null === renderState.headChunks) {
                    renderState.headChunks = [];
                    var JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(renderState.headChunks, props, "head");
                } else JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(target$jscomp$0, props, "head");
                return JSCompiler_inline_result$jscomp$9;
            case "html":
                if (formatContext.insertionMode === ROOT_HTML_MODE && null === renderState.htmlChunks) {
                    renderState.htmlChunks = [
                        doctypeChunk
                    ];
                    var JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(renderState.htmlChunks, props, "html");
                } else JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(target$jscomp$0, props, "html");
                return JSCompiler_inline_result$jscomp$10;
            default:
                if (-1 !== type.indexOf("-")) {
                    target$jscomp$0.push(startChunkForTag(type));
                    var children$jscomp$11 = null, innerHTML$jscomp$8 = null, propKey$jscomp$11;
                    for(propKey$jscomp$11 in props)if (hasOwnProperty.call(props, propKey$jscomp$11)) {
                        var propValue$jscomp$11 = props[propKey$jscomp$11];
                        if (null != propValue$jscomp$11) {
                            var attributeName = propKey$jscomp$11;
                            switch(propKey$jscomp$11){
                                case "children":
                                    children$jscomp$11 = propValue$jscomp$11;
                                    break;
                                case "dangerouslySetInnerHTML":
                                    innerHTML$jscomp$8 = propValue$jscomp$11;
                                    break;
                                case "style":
                                    pushStyleAttribute(target$jscomp$0, propValue$jscomp$11);
                                    break;
                                case "suppressContentEditableWarning":
                                case "suppressHydrationWarning":
                                case "ref":
                                    break;
                                case "className":
                                    attributeName = "class";
                                default:
                                    if (isAttributeNameSafe(propKey$jscomp$11) && "function" !== typeof propValue$jscomp$11 && "symbol" !== typeof propValue$jscomp$11 && !1 !== propValue$jscomp$11) {
                                        if (!0 === propValue$jscomp$11) propValue$jscomp$11 = "";
                                        else if ("object" === typeof propValue$jscomp$11) continue;
                                        target$jscomp$0.push(attributeSeparator, attributeName, attributeAssign, escapeTextForBrowser(propValue$jscomp$11), attributeEnd);
                                    }
                            }
                        }
                    }
                    target$jscomp$0.push(endOfStartTag);
                    pushInnerHTML(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$11);
                    return children$jscomp$11;
                }
        }
        return pushStartGenericElement(target$jscomp$0, props, type);
    }
    function endChunkForTag(tag) {
        var chunk = endTagCache.get(tag);
        void 0 === chunk && (chunk = "</" + tag + ">", endTagCache.set(tag, chunk));
        return chunk;
    }
    function writeBootstrap(destination, renderState) {
        renderState = renderState.bootstrapChunks;
        for(var i = 0; i < renderState.length - 1; i++)destination.push(renderState[i]);
        return i < renderState.length ? (i = renderState[i], renderState.length = 0, destination.push(i)) : !0;
    }
    function writeStartPendingSuspenseBoundary(destination, renderState, id) {
        destination.push(startPendingSuspenseBoundary1);
        if (null === id) throw Error("An ID must have been assigned before we can complete the boundary.");
        destination.push(renderState.boundaryPrefix);
        renderState = id.toString(16);
        destination.push(renderState);
        return destination.push(startPendingSuspenseBoundary2);
    }
    function writeStartSegment(destination, renderState, formatContext, id) {
        switch(formatContext.insertionMode){
            case ROOT_HTML_MODE:
            case HTML_HTML_MODE:
            case HTML_MODE:
                return destination.push(startSegmentHTML), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentHTML2);
            case SVG_MODE:
                return destination.push(startSegmentSVG), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentSVG2);
            case MATHML_MODE:
                return destination.push(startSegmentMathML), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentMathML2);
            case HTML_TABLE_MODE:
                return destination.push(startSegmentTable), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentTable2);
            case HTML_TABLE_BODY_MODE:
                return destination.push(startSegmentTableBody), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentTableBody2);
            case HTML_TABLE_ROW_MODE:
                return destination.push(startSegmentTableRow), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentTableRow2);
            case HTML_COLGROUP_MODE:
                return destination.push(startSegmentColGroup), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentColGroup2);
            default:
                throw Error("Unknown insertion mode. This is a bug in React.");
        }
    }
    function writeEndSegment(destination, formatContext) {
        switch(formatContext.insertionMode){
            case ROOT_HTML_MODE:
            case HTML_HTML_MODE:
            case HTML_MODE:
                return destination.push(endSegmentHTML);
            case SVG_MODE:
                return destination.push(endSegmentSVG);
            case MATHML_MODE:
                return destination.push(endSegmentMathML);
            case HTML_TABLE_MODE:
                return destination.push(endSegmentTable);
            case HTML_TABLE_BODY_MODE:
                return destination.push(endSegmentTableBody);
            case HTML_TABLE_ROW_MODE:
                return destination.push(endSegmentTableRow);
            case HTML_COLGROUP_MODE:
                return destination.push(endSegmentColGroup);
            default:
                throw Error("Unknown insertion mode. This is a bug in React.");
        }
    }
    function escapeJSStringsForInstructionScripts(input) {
        return JSON.stringify(input).replace(regexForJSStringsInInstructionScripts, function(match) {
            switch(match){
                case "<":
                    return "\\u003c";
                case "\u2028":
                    return "\\u2028";
                case "\u2029":
                    return "\\u2029";
                default:
                    throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
        });
    }
    function escapeJSObjectForInstructionScripts(input) {
        return JSON.stringify(input).replace(regexForJSStringsInScripts, function(match) {
            switch(match){
                case "&":
                    return "\\u0026";
                case ">":
                    return "\\u003e";
                case "<":
                    return "\\u003c";
                case "\u2028":
                    return "\\u2028";
                case "\u2029":
                    return "\\u2029";
                default:
                    throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
        });
    }
    function flushStyleTagsLateForBoundary(styleQueue) {
        var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
        0 < rules.length && 0 === hrefs.length && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
        var i = 0;
        if (hrefs.length) {
            this.push(lateStyleTagResourceOpen1);
            this.push(styleQueue.precedence);
            for(this.push(lateStyleTagResourceOpen2); i < hrefs.length - 1; i++)this.push(hrefs[i]), this.push(spaceSeparator);
            this.push(hrefs[i]);
            this.push(lateStyleTagResourceOpen3);
            for(i = 0; i < rules.length; i++)this.push(rules[i]);
            destinationHasCapacity = this.push(lateStyleTagTemplateClose);
            currentlyRenderingBoundaryHasStylesToHoist = !0;
            rules.length = 0;
            hrefs.length = 0;
        }
    }
    function hasStylesToHoist(stylesheet) {
        return stylesheet.state !== PREAMBLE ? currentlyRenderingBoundaryHasStylesToHoist = !0 : !1;
    }
    function writeHoistablesForBoundary(destination, hoistableState, renderState) {
        currentlyRenderingBoundaryHasStylesToHoist = !1;
        destinationHasCapacity = !0;
        hoistableState.styles.forEach(flushStyleTagsLateForBoundary, destination);
        hoistableState.stylesheets.forEach(hasStylesToHoist);
        currentlyRenderingBoundaryHasStylesToHoist && (renderState.stylesToHoist = !0);
        return destinationHasCapacity;
    }
    function flushResource(resource) {
        for(var i = 0; i < resource.length; i++)this.push(resource[i]);
        resource.length = 0;
    }
    function flushStyleInPreamble(stylesheet) {
        pushLinkImpl(stylesheetFlushingQueue, stylesheet.props);
        for(var i = 0; i < stylesheetFlushingQueue.length; i++)this.push(stylesheetFlushingQueue[i]);
        stylesheetFlushingQueue.length = 0;
        stylesheet.state = PREAMBLE;
    }
    function flushStylesInPreamble(styleQueue) {
        var hasStylesheets = 0 < styleQueue.sheets.size;
        styleQueue.sheets.forEach(flushStyleInPreamble, this);
        styleQueue.sheets.clear();
        var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
        if (!hasStylesheets || hrefs.length) {
            this.push(styleTagResourceOpen1);
            this.push(styleQueue.precedence);
            styleQueue = 0;
            if (hrefs.length) {
                for(this.push(styleTagResourceOpen2); styleQueue < hrefs.length - 1; styleQueue++)this.push(hrefs[styleQueue]), this.push(spaceSeparator);
                this.push(hrefs[styleQueue]);
            }
            this.push(styleTagResourceOpen3);
            for(styleQueue = 0; styleQueue < rules.length; styleQueue++)this.push(rules[styleQueue]);
            this.push(styleTagResourceClose);
            rules.length = 0;
            hrefs.length = 0;
        }
    }
    function preloadLateStyle(stylesheet) {
        if (stylesheet.state === PENDING$1) {
            stylesheet.state = PRELOADED;
            var props = stylesheet.props;
            pushLinkImpl(stylesheetFlushingQueue, {
                rel: "preload",
                as: "style",
                href: stylesheet.props.href,
                crossOrigin: props.crossOrigin,
                fetchPriority: props.fetchPriority,
                integrity: props.integrity,
                media: props.media,
                hrefLang: props.hrefLang,
                referrerPolicy: props.referrerPolicy
            });
            for(stylesheet = 0; stylesheet < stylesheetFlushingQueue.length; stylesheet++)this.push(stylesheetFlushingQueue[stylesheet]);
            stylesheetFlushingQueue.length = 0;
        }
    }
    function preloadLateStyles(styleQueue) {
        styleQueue.sheets.forEach(preloadLateStyle, this);
        styleQueue.sheets.clear();
    }
    function writeStyleResourceDependenciesInJS(destination, hoistableState) {
        destination.push(arrayFirstOpenBracket);
        var nextArrayOpenBrackChunk = arrayFirstOpenBracket;
        hoistableState.stylesheets.forEach(function(resource) {
            if (resource.state !== PREAMBLE) if (resource.state === LATE) destination.push(nextArrayOpenBrackChunk), resource = resource.props.href, checkAttributeStringCoercion(resource, "href"), resource = escapeJSObjectForInstructionScripts("" + resource), destination.push(resource), destination.push(arrayCloseBracket), nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
            else {
                destination.push(nextArrayOpenBrackChunk);
                var precedence = resource.props["data-precedence"], props = resource.props, coercedHref = sanitizeURL("" + resource.props.href);
                coercedHref = escapeJSObjectForInstructionScripts(coercedHref);
                destination.push(coercedHref);
                checkAttributeStringCoercion(precedence, "precedence");
                precedence = "" + precedence;
                destination.push(arrayInterstitial);
                precedence = escapeJSObjectForInstructionScripts(precedence);
                destination.push(precedence);
                for(var propKey in props)if (hasOwnProperty.call(props, propKey) && (precedence = props[propKey], null != precedence)) switch(propKey){
                    case "href":
                    case "rel":
                    case "precedence":
                    case "data-precedence":
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                    default:
                        writeStyleResourceAttributeInJS(destination, propKey, precedence);
                }
                destination.push(arrayCloseBracket);
                nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
                resource.state = LATE;
            }
        });
        destination.push(arrayCloseBracket);
    }
    function writeStyleResourceAttributeInJS(destination, name, value) {
        var attributeName = name.toLowerCase();
        switch(typeof value){
            case "function":
            case "symbol":
                return;
        }
        switch(name){
            case "innerHTML":
            case "dangerouslySetInnerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "style":
            case "ref":
                return;
            case "className":
                attributeName = "class";
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
                break;
            case "hidden":
                if (!1 === value) return;
                name = "";
                break;
            case "src":
            case "href":
                value = sanitizeURL(value);
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
                break;
            default:
                if (2 < name.length && ("o" === name[0] || "O" === name[0]) && ("n" === name[1] || "N" === name[1]) || !isAttributeNameSafe(name)) return;
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
        }
        destination.push(arrayInterstitial);
        attributeName = escapeJSObjectForInstructionScripts(attributeName);
        destination.push(attributeName);
        destination.push(arrayInterstitial);
        attributeName = escapeJSObjectForInstructionScripts(name);
        destination.push(attributeName);
    }
    function createHoistableState() {
        return {
            styles: new Set(),
            stylesheets: new Set()
        };
    }
    function preloadBootstrapScriptOrModule(resumableState, renderState, href, props) {
        (resumableState.scriptResources.hasOwnProperty(href) || resumableState.moduleScriptResources.hasOwnProperty(href)) && console.error('Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue', href);
        resumableState.scriptResources[href] = EXISTS;
        resumableState.moduleScriptResources[href] = EXISTS;
        resumableState = [];
        pushLinkImpl(resumableState, props);
        renderState.bootstrapScripts.add(resumableState);
    }
    function adoptPreloadCredentials(target, preloadState) {
        null == target.crossOrigin && (target.crossOrigin = preloadState[0]);
        null == target.integrity && (target.integrity = preloadState[1]);
    }
    function getPreloadAsHeader(href, as, params) {
        href = escapeHrefForLinkHeaderURLContext(href);
        as = escapeStringForLinkHeaderQuotedParamValueContext(as, "as");
        as = "<" + href + '>; rel=preload; as="' + as + '"';
        for(var paramName in params)hasOwnProperty.call(params, paramName) && (href = params[paramName], "string" === typeof href && (as += "; " + paramName.toLowerCase() + '="' + escapeStringForLinkHeaderQuotedParamValueContext(href, paramName) + '"'));
        return as;
    }
    function escapeHrefForLinkHeaderURLContext(hrefInput) {
        checkAttributeStringCoercion(hrefInput, "href");
        return ("" + hrefInput).replace(regexForHrefInLinkHeaderURLContext, escapeHrefForLinkHeaderURLContextReplacer);
    }
    function escapeHrefForLinkHeaderURLContextReplacer(match) {
        switch(match){
            case "<":
                return "%3C";
            case ">":
                return "%3E";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    }
    function escapeStringForLinkHeaderQuotedParamValueContext(value, name) {
        willCoercionThrow(value) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", name, typeName(value)), testStringCoercion(value));
        return ("" + value).replace(regexForLinkHeaderQuotedParamValueContext, escapeStringForLinkHeaderQuotedParamValueContextReplacer);
    }
    function escapeStringForLinkHeaderQuotedParamValueContextReplacer(match) {
        switch(match){
            case '"':
                return "%22";
            case "'":
                return "%27";
            case ";":
                return "%3B";
            case ",":
                return "%2C";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    }
    function hoistStyleQueueDependency(styleQueue) {
        this.styles.add(styleQueue);
    }
    function hoistStylesheetDependency(stylesheet) {
        this.stylesheets.add(stylesheet);
    }
    function createRenderState(resumableState, generateStaticMarkup) {
        var idPrefix = resumableState.idPrefix, bootstrapChunks = [], bootstrapScriptContent = resumableState.bootstrapScriptContent, bootstrapScripts = resumableState.bootstrapScripts, bootstrapModules = resumableState.bootstrapModules;
        void 0 !== bootstrapScriptContent && bootstrapChunks.push("<script>", escapeEntireInlineScriptContent(bootstrapScriptContent), "\x3c/script>");
        idPrefix = {
            placeholderPrefix: idPrefix + "P:",
            segmentPrefix: idPrefix + "S:",
            boundaryPrefix: idPrefix + "B:",
            startInlineScript: "<script>",
            htmlChunks: null,
            headChunks: null,
            externalRuntimeScript: null,
            bootstrapChunks: bootstrapChunks,
            importMapChunks: [],
            onHeaders: void 0,
            headers: null,
            resets: {
                font: {},
                dns: {},
                connect: {
                    default: {},
                    anonymous: {},
                    credentials: {}
                },
                image: {},
                style: {}
            },
            charsetChunks: [],
            viewportChunks: [],
            hoistableChunks: [],
            preconnects: new Set(),
            fontPreloads: new Set(),
            highImagePreloads: new Set(),
            styles: new Map(),
            bootstrapScripts: new Set(),
            scripts: new Set(),
            bulkPreloads: new Set(),
            preloads: {
                images: new Map(),
                stylesheets: new Map(),
                scripts: new Map(),
                moduleScripts: new Map()
            },
            nonce: void 0,
            hoistableState: null,
            stylesToHoist: !1
        };
        if (void 0 !== bootstrapScripts) for(bootstrapScriptContent = 0; bootstrapScriptContent < bootstrapScripts.length; bootstrapScriptContent++){
            var scriptConfig = bootstrapScripts[bootstrapScriptContent], src, crossOrigin = void 0, integrity = void 0, props = {
                rel: "preload",
                as: "script",
                fetchPriority: "low",
                nonce: void 0
            };
            "string" === typeof scriptConfig ? props.href = src = scriptConfig : (props.href = src = scriptConfig.src, props.integrity = integrity = "string" === typeof scriptConfig.integrity ? scriptConfig.integrity : void 0, props.crossOrigin = crossOrigin = "string" === typeof scriptConfig || null == scriptConfig.crossOrigin ? void 0 : "use-credentials" === scriptConfig.crossOrigin ? "use-credentials" : "");
            preloadBootstrapScriptOrModule(resumableState, idPrefix, src, props);
            bootstrapChunks.push('<script src="', escapeTextForBrowser(src));
            "string" === typeof integrity && bootstrapChunks.push('" integrity="', escapeTextForBrowser(integrity));
            "string" === typeof crossOrigin && bootstrapChunks.push('" crossorigin="', escapeTextForBrowser(crossOrigin));
            bootstrapChunks.push('" async="">\x3c/script>');
        }
        if (void 0 !== bootstrapModules) for(bootstrapScripts = 0; bootstrapScripts < bootstrapModules.length; bootstrapScripts++)bootstrapScriptContent = bootstrapModules[bootstrapScripts], crossOrigin = src = void 0, integrity = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: void 0
        }, "string" === typeof bootstrapScriptContent ? integrity.href = scriptConfig = bootstrapScriptContent : (integrity.href = scriptConfig = bootstrapScriptContent.src, integrity.integrity = crossOrigin = "string" === typeof bootstrapScriptContent.integrity ? bootstrapScriptContent.integrity : void 0, integrity.crossOrigin = src = "string" === typeof bootstrapScriptContent || null == bootstrapScriptContent.crossOrigin ? void 0 : "use-credentials" === bootstrapScriptContent.crossOrigin ? "use-credentials" : ""), preloadBootstrapScriptOrModule(resumableState, idPrefix, scriptConfig, integrity), bootstrapChunks.push('<script type="module" src="', escapeTextForBrowser(scriptConfig)), "string" === typeof crossOrigin && bootstrapChunks.push('" integrity="', escapeTextForBrowser(crossOrigin)), "string" === typeof src && bootstrapChunks.push('" crossorigin="', escapeTextForBrowser(src)), bootstrapChunks.push('" async="">\x3c/script>');
        return {
            placeholderPrefix: idPrefix.placeholderPrefix,
            segmentPrefix: idPrefix.segmentPrefix,
            boundaryPrefix: idPrefix.boundaryPrefix,
            startInlineScript: idPrefix.startInlineScript,
            htmlChunks: idPrefix.htmlChunks,
            headChunks: idPrefix.headChunks,
            externalRuntimeScript: idPrefix.externalRuntimeScript,
            bootstrapChunks: idPrefix.bootstrapChunks,
            importMapChunks: idPrefix.importMapChunks,
            onHeaders: idPrefix.onHeaders,
            headers: idPrefix.headers,
            resets: idPrefix.resets,
            charsetChunks: idPrefix.charsetChunks,
            viewportChunks: idPrefix.viewportChunks,
            hoistableChunks: idPrefix.hoistableChunks,
            preconnects: idPrefix.preconnects,
            fontPreloads: idPrefix.fontPreloads,
            highImagePreloads: idPrefix.highImagePreloads,
            styles: idPrefix.styles,
            bootstrapScripts: idPrefix.bootstrapScripts,
            scripts: idPrefix.scripts,
            bulkPreloads: idPrefix.bulkPreloads,
            preloads: idPrefix.preloads,
            stylesToHoist: idPrefix.stylesToHoist,
            generateStaticMarkup: generateStaticMarkup
        };
    }
    function pushTextInstance(target, text, renderState, textEmbedded) {
        if (renderState.generateStaticMarkup) return target.push(escapeTextForBrowser(text)), !1;
        "" === text ? target = textEmbedded : (textEmbedded && target.push("\x3c!-- --\x3e"), target.push(escapeTextForBrowser(text)), target = !0);
        return target;
    }
    function pushSegmentFinale(target, renderState, lastPushedText, textEmbedded) {
        renderState.generateStaticMarkup || lastPushedText && textEmbedded && target.push("\x3c!-- --\x3e");
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function popToNearestCommonAncestor(prev, next) {
        if (prev !== next) {
            prev.context._currentValue2 = prev.parentValue;
            prev = prev.parent;
            var parentNext = next.parent;
            if (null === prev) {
                if (null !== parentNext) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            } else {
                if (null === parentNext) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
                popToNearestCommonAncestor(prev, parentNext);
            }
            next.context._currentValue2 = next.value;
        }
    }
    function popAllPrevious(prev) {
        prev.context._currentValue2 = prev.parentValue;
        prev = prev.parent;
        null !== prev && popAllPrevious(prev);
    }
    function pushAllNext(next) {
        var parentNext = next.parent;
        null !== parentNext && pushAllNext(parentNext);
        next.context._currentValue2 = next.value;
    }
    function popPreviousToCommonLevel(prev, next) {
        prev.context._currentValue2 = prev.parentValue;
        prev = prev.parent;
        if (null === prev) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        prev.depth === next.depth ? popToNearestCommonAncestor(prev, next) : popPreviousToCommonLevel(prev, next);
    }
    function popNextToCommonLevel(prev, next) {
        var parentNext = next.parent;
        if (null === parentNext) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        prev.depth === parentNext.depth ? popToNearestCommonAncestor(prev, parentNext) : popNextToCommonLevel(prev, parentNext);
        next.context._currentValue2 = next.value;
    }
    function switchContext(newSnapshot) {
        var prev = currentActiveSnapshot;
        prev !== newSnapshot && (null === prev ? pushAllNext(newSnapshot) : null === newSnapshot ? popAllPrevious(prev) : prev.depth === newSnapshot.depth ? popToNearestCommonAncestor(prev, newSnapshot) : prev.depth > newSnapshot.depth ? popPreviousToCommonLevel(prev, newSnapshot) : popNextToCommonLevel(prev, newSnapshot), currentActiveSnapshot = newSnapshot);
    }
    function warnOnInvalidCallback(callback) {
        if (null !== callback && "function" !== typeof callback) {
            var key = String(callback);
            didWarnOnInvalidCallback.has(key) || (didWarnOnInvalidCallback.add(key), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", callback));
        }
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && getComponentNameFromType(publicInstance) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnAboutNoopUpdateForComponent[warningKey] || (console.error("Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, publicInstance), didWarnAboutNoopUpdateForComponent[warningKey] = !0);
    }
    function pushTreeContext(baseContext, totalChildren, index) {
        var baseIdWithLeadingBit = baseContext.id;
        baseContext = baseContext.overflow;
        var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
        baseIdWithLeadingBit &= ~(1 << baseLength);
        index += 1;
        var length = 32 - clz32(totalChildren) + baseLength;
        if (30 < length) {
            var numberOfOverflowBits = baseLength - baseLength % 5;
            length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
            baseIdWithLeadingBit >>= numberOfOverflowBits;
            baseLength -= numberOfOverflowBits;
            return {
                id: 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit,
                overflow: length + baseContext
            };
        }
        return {
            id: 1 << length | index << baseLength | baseIdWithLeadingBit,
            overflow: baseContext
        };
    }
    function clz32Fallback(x) {
        x >>>= 0;
        return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
    }
    function noop$2() {}
    function trackUsedThenable(thenableState, thenable, index) {
        index = thenableState[index];
        void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop$2, noop$2), thenable = index);
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                "string" === typeof thenable.status ? thenable.then(noop$2, noop$2) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
                    if ("pending" === thenable.status) {
                        var fulfilledThenable = thenable;
                        fulfilledThenable.status = "fulfilled";
                        fulfilledThenable.value = fulfilledValue;
                    }
                }, function(error) {
                    if ("pending" === thenable.status) {
                        var rejectedThenable = thenable;
                        rejectedThenable.status = "rejected";
                        rejectedThenable.reason = error;
                    }
                }));
                switch(thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
                suspendedThenable = thenable;
                throw SuspenseException;
        }
    }
    function getSuspendedThenable() {
        if (null === suspendedThenable) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
        var thenable = suspendedThenable;
        suspendedThenable = null;
        return thenable;
    }
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function resolveCurrentlyRenderingComponent() {
        if (null === currentlyRenderingComponent) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        isInHookUserCodeInDev && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks");
        return currentlyRenderingComponent;
    }
    function createHook() {
        if (0 < numberOfReRenders) throw Error("Rendered more hooks than during the previous render");
        return {
            memoizedState: null,
            queue: null,
            next: null
        };
    }
    function createWorkInProgressHook() {
        null === workInProgressHook ? null === firstWorkInProgressHook ? (isReRender = !1, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = !0, workInProgressHook = firstWorkInProgressHook) : null === workInProgressHook.next ? (isReRender = !1, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = !0, workInProgressHook = workInProgressHook.next);
        return workInProgressHook;
    }
    function getThenableStateAfterSuspending() {
        var state = thenableState;
        thenableState = null;
        return state;
    }
    function resetHooksState() {
        isInHookUserCodeInDev = !1;
        currentlyRenderingKeyPath = currentlyRenderingRequest = currentlyRenderingTask = currentlyRenderingComponent = null;
        didScheduleRenderPhaseUpdate = !1;
        firstWorkInProgressHook = null;
        numberOfReRenders = 0;
        workInProgressHook = renderPhaseUpdates = null;
    }
    function readContext(context) {
        isInHookUserCodeInDev && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        return context._currentValue2;
    }
    function basicStateReducer(state, action) {
        return "function" === typeof action ? action(state) : action;
    }
    function useReducer(reducer, initialArg, init) {
        reducer !== basicStateReducer && (currentHookNameInDev = "useReducer");
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        if (isReRender) {
            init = workInProgressHook.queue;
            initialArg = init.dispatch;
            if (null !== renderPhaseUpdates) {
                var firstRenderPhaseUpdate = renderPhaseUpdates.get(init);
                if (void 0 !== firstRenderPhaseUpdate) {
                    renderPhaseUpdates.delete(init);
                    init = workInProgressHook.memoizedState;
                    do {
                        var action = firstRenderPhaseUpdate.action;
                        isInHookUserCodeInDev = !0;
                        init = reducer(init, action);
                        isInHookUserCodeInDev = !1;
                        firstRenderPhaseUpdate = firstRenderPhaseUpdate.next;
                    }while (null !== firstRenderPhaseUpdate)
                    workInProgressHook.memoizedState = init;
                    return [
                        init,
                        initialArg
                    ];
                }
            }
            return [
                workInProgressHook.memoizedState,
                initialArg
            ];
        }
        isInHookUserCodeInDev = !0;
        reducer = reducer === basicStateReducer ? "function" === typeof initialArg ? initialArg() : initialArg : void 0 !== init ? init(initialArg) : initialArg;
        isInHookUserCodeInDev = !1;
        workInProgressHook.memoizedState = reducer;
        reducer = workInProgressHook.queue = {
            last: null,
            dispatch: null
        };
        reducer = reducer.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, reducer);
        return [
            workInProgressHook.memoizedState,
            reducer
        ];
    }
    function useMemo(nextCreate, deps) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        if (null !== workInProgressHook) {
            var prevState = workInProgressHook.memoizedState;
            if (null !== prevState && null !== deps) {
                a: {
                    var JSCompiler_inline_result = prevState[1];
                    if (null === JSCompiler_inline_result) console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev), JSCompiler_inline_result = !1;
                    else {
                        deps.length !== JSCompiler_inline_result.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + deps.join(", ") + "]", "[" + JSCompiler_inline_result.join(", ") + "]");
                        for(var i = 0; i < JSCompiler_inline_result.length && i < deps.length; i++)if (!objectIs(deps[i], JSCompiler_inline_result[i])) {
                            JSCompiler_inline_result = !1;
                            break a;
                        }
                        JSCompiler_inline_result = !0;
                    }
                }
                if (JSCompiler_inline_result) return prevState[0];
            }
        }
        isInHookUserCodeInDev = !0;
        nextCreate = nextCreate();
        isInHookUserCodeInDev = !1;
        workInProgressHook.memoizedState = [
            nextCreate,
            deps
        ];
        return nextCreate;
    }
    function dispatchAction(componentIdentity, queue, action) {
        if (25 <= numberOfReRenders) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        if (componentIdentity === currentlyRenderingComponent) if (didScheduleRenderPhaseUpdate = !0, componentIdentity = {
            action: action,
            next: null
        }, null === renderPhaseUpdates && (renderPhaseUpdates = new Map()), action = renderPhaseUpdates.get(queue), void 0 === action) renderPhaseUpdates.set(queue, componentIdentity);
        else {
            for(queue = action; null !== queue.next;)queue = queue.next;
            queue.next = componentIdentity;
        }
    }
    function unsupportedStartTransition() {
        throw Error("startTransition cannot be called during server rendering.");
    }
    function unsupportedSetOptimisticState() {
        throw Error("Cannot update optimistic state while rendering.");
    }
    function useActionState(action, initialState, permalink) {
        resolveCurrentlyRenderingComponent();
        var actionStateHookIndex = actionStateCounter++, request = currentlyRenderingRequest;
        if ("function" === typeof action.$$FORM_ACTION) {
            var nextPostbackStateKey = null, componentKeyPath = currentlyRenderingKeyPath;
            request = request.formState;
            var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
            if (null !== request && "function" === typeof isSignatureEqual) {
                var postbackKey = request[1];
                isSignatureEqual.call(action, request[2], request[3]) && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
                    componentKeyPath,
                    null,
                    actionStateHookIndex
                ]), 0), postbackKey === nextPostbackStateKey && (actionStateMatchingIndex = actionStateHookIndex, initialState = request[0]));
            }
            var boundAction = action.bind(null, initialState);
            action = function(payload) {
                boundAction(payload);
            };
            "function" === typeof boundAction.$$FORM_ACTION && (action.$$FORM_ACTION = function(prefix) {
                prefix = boundAction.$$FORM_ACTION(prefix);
                void 0 !== permalink && (checkAttributeStringCoercion(permalink, "target"), permalink += "", prefix.action = permalink);
                var formData = prefix.data;
                formData && (null === nextPostbackStateKey && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
                    componentKeyPath,
                    null,
                    actionStateHookIndex
                ]), 0)), formData.append("$ACTION_KEY", nextPostbackStateKey));
                return prefix;
            });
            return [
                initialState,
                action,
                !1
            ];
        }
        var _boundAction = action.bind(null, initialState);
        return [
            initialState,
            function(payload) {
                _boundAction(payload);
            },
            !1
        ];
    }
    function unwrapThenable(thenable) {
        var index = thenableIndexCounter;
        thenableIndexCounter += 1;
        null === thenableState && (thenableState = []);
        return trackUsedThenable(thenableState, thenable, index);
    }
    function unsupportedRefresh() {
        throw Error("Cache cannot be refreshed during server rendering.");
    }
    function noop$1() {}
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter)
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeComponentStackByType(type) {
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        if ("function" === typeof type) return type.prototype && type.prototype.isReactComponent ? (type = describeNativeComponentFrame(type, !0), type) : describeNativeComponentFrame(type, !1);
        if ("object" === typeof type && null !== type) {
            switch(type.$$typeof){
                case REACT_FORWARD_REF_TYPE:
                    return describeNativeComponentFrame(type.render, !1);
                case REACT_MEMO_TYPE:
                    return describeNativeComponentFrame(type.type, !1);
                case REACT_LAZY_TYPE:
                    var lazyComponent = type, payload = lazyComponent._payload;
                    lazyComponent = lazyComponent._init;
                    try {
                        type = lazyComponent(payload);
                    } catch (x) {
                        return describeBuiltInComponentFrame("Lazy");
                    }
                    return describeComponentStackByType(type);
            }
            if ("string" === typeof type.name) return payload = type.env, describeBuiltInComponentFrame(type.name + (payload ? " [" + payload + "]" : ""));
        }
        switch(type){
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
        }
        return "";
    }
    function getStackByComponentStackNode(componentStack) {
        try {
            var info = "";
            do info += describeComponentStackByType(componentStack.type), componentStack = componentStack.parent;
            while (componentStack)
            return info;
        } catch (x) {
            return "\nError generating stack: " + x.message + "\n" + x.stack;
        }
    }
    function defaultErrorHandler(error) {
        if ("object" === typeof error && null !== error && "string" === typeof error.environmentName) {
            var JSCompiler_inline_result = error.environmentName;
            error = [
                error
            ].slice(0);
            "string" === typeof error[0] ? error.splice(0, 1, "[%s] " + error[0], " " + JSCompiler_inline_result + " ") : error.splice(0, 0, "[%s] ", " " + JSCompiler_inline_result + " ");
            error.unshift(console);
            JSCompiler_inline_result = bind.apply(console.error, error);
            JSCompiler_inline_result();
        } else console.error(error);
        return null;
    }
    function noop() {}
    function RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
        var abortSet = new Set();
        this.destination = null;
        this.flushScheduled = !1;
        this.resumableState = resumableState;
        this.renderState = renderState;
        this.rootFormatContext = rootFormatContext;
        this.progressiveChunkSize = void 0 === progressiveChunkSize ? 12800 : progressiveChunkSize;
        this.status = 10;
        this.fatalError = null;
        this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
        this.completedRootSegment = null;
        this.abortableTasks = abortSet;
        this.pingedTasks = [];
        this.clientRenderedBoundaries = [];
        this.completedBoundaries = [];
        this.partialBoundaries = [];
        this.trackedPostpones = null;
        this.onError = void 0 === onError ? defaultErrorHandler : onError;
        this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
        this.onAllReady = void 0 === onAllReady ? noop : onAllReady;
        this.onShellReady = void 0 === onShellReady ? noop : onShellReady;
        this.onShellError = void 0 === onShellError ? noop : onShellError;
        this.onFatalError = void 0 === onFatalError ? noop : onFatalError;
        this.formState = void 0 === formState ? null : formState;
        this.didWarnForKey = null;
    }
    function createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
        resumableState = new RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState);
        renderState = createPendingSegment(resumableState, 0, null, rootFormatContext, !1, !1);
        renderState.parentFlushed = !0;
        children = createRenderTask(resumableState, null, children, -1, null, renderState, null, resumableState.abortableTasks, null, rootFormatContext, null, emptyTreeContext, null, !1);
        pushComponentStack(children);
        resumableState.pingedTasks.push(children);
        return resumableState;
    }
    function pingTask(request, task) {
        request.pingedTasks.push(task);
        1 === request.pingedTasks.length && (request.flushScheduled = null !== request.destination, performWork(request));
    }
    function createSuspenseBoundary(request, fallbackAbortableTasks) {
        return {
            status: PENDING,
            rootSegmentID: -1,
            parentFlushed: !1,
            pendingTasks: 0,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks: fallbackAbortableTasks,
            errorDigest: null,
            contentState: createHoistableState(),
            fallbackState: createHoistableState(),
            trackedContentKeyPath: null,
            trackedFallbackNode: null,
            errorMessage: null,
            errorStack: null,
            errorComponentStack: null
        };
    }
    function createRenderTask(request, thenableState, node, childIndex, blockedBoundary, blockedSegment, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback) {
        request.allPendingTasks++;
        null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
        var task = {
            replay: null,
            node: node,
            childIndex: childIndex,
            ping: function() {
                return pingTask(request, task);
            },
            blockedBoundary: blockedBoundary,
            blockedSegment: blockedSegment,
            hoistableState: hoistableState,
            abortSet: abortSet,
            keyPath: keyPath,
            formatContext: formatContext,
            context: context,
            treeContext: treeContext,
            componentStack: componentStack,
            thenableState: thenableState,
            isFallback: isFallback
        };
        abortSet.add(task);
        return task;
    }
    function createReplayTask(request, thenableState, replay, node, childIndex, blockedBoundary, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback) {
        request.allPendingTasks++;
        null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
        replay.pendingTasks++;
        var task = {
            replay: replay,
            node: node,
            childIndex: childIndex,
            ping: function() {
                return pingTask(request, task);
            },
            blockedBoundary: blockedBoundary,
            blockedSegment: null,
            hoistableState: hoistableState,
            abortSet: abortSet,
            keyPath: keyPath,
            formatContext: formatContext,
            context: context,
            treeContext: treeContext,
            componentStack: componentStack,
            thenableState: thenableState,
            isFallback: isFallback
        };
        abortSet.add(task);
        return task;
    }
    function createPendingSegment(request, index, boundary, parentFormatContext, lastPushedText, textEmbedded) {
        return {
            status: PENDING,
            id: -1,
            index: index,
            parentFlushed: !1,
            chunks: [],
            children: [],
            parentFormatContext: parentFormatContext,
            boundary: boundary,
            lastPushedText: lastPushedText,
            textEmbedded: textEmbedded
        };
    }
    function getCurrentStackInDEV() {
        return null === currentTaskInDEV || null === currentTaskInDEV.componentStack ? "" : getStackByComponentStackNode(currentTaskInDEV.componentStack);
    }
    function pushServerComponentStack(task, debugInfo) {
        if (null != debugInfo) for(var i = 0; i < debugInfo.length; i++){
            var componentInfo = debugInfo[i];
            "string" === typeof componentInfo.name && (task.componentStack = {
                parent: task.componentStack,
                type: componentInfo,
                owner: componentInfo.owner,
                stack: null
            });
        }
    }
    function pushComponentStack(task) {
        var node = task.node;
        if ("object" === typeof node && null !== node) switch(node.$$typeof){
            case REACT_ELEMENT_TYPE:
                var type = node.type, owner = node._owner;
                pushServerComponentStack(task, node._debugInfo);
                task.componentStack = {
                    parent: task.componentStack,
                    type: type,
                    owner: owner,
                    stack: null
                };
                break;
            case REACT_LAZY_TYPE:
                pushServerComponentStack(task, node._debugInfo);
                break;
            default:
                "function" === typeof node.then && pushServerComponentStack(task, node._debugInfo);
        }
    }
    function getThrownInfo(node) {
        var errorInfo = {};
        node && Object.defineProperty(errorInfo, "componentStack", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var stack = getStackByComponentStackNode(node);
                Object.defineProperty(errorInfo, "componentStack", {
                    value: stack
                });
                return stack;
            }
        });
        return errorInfo;
    }
    function encodeErrorForBoundary(boundary, digest, error, thrownInfo, wasAborted) {
        boundary.errorDigest = digest;
        error instanceof Error ? (digest = String(error.message), error = String(error.stack)) : (digest = "object" === typeof error && null !== error ? describeObjectForErrorMessage(error) : String(error), error = null);
        wasAborted = wasAborted ? "Switched to client rendering because the server rendering aborted due to:\n\n" : "Switched to client rendering because the server rendering errored:\n\n";
        boundary.errorMessage = wasAborted + digest;
        boundary.errorStack = null !== error ? wasAborted + error : null;
        boundary.errorComponentStack = thrownInfo.componentStack;
    }
    function logRecoverableError(request, error, errorInfo) {
        request = request.onError;
        error = request(error, errorInfo);
        if (null != error && "string" !== typeof error) console.error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead', typeof error);
        else return error;
    }
    function fatalError(request, error) {
        var onShellError = request.onShellError, onFatalError = request.onFatalError;
        onShellError(error);
        onFatalError(error);
        null !== request.destination ? (request.status = CLOSED, request.destination.destroy(error)) : (request.status = 13, request.fatalError = error);
    }
    function renderWithHooks(request, task, keyPath, Component, props, secondArg) {
        var prevThenableState = task.thenableState;
        task.thenableState = null;
        currentlyRenderingComponent = {};
        currentlyRenderingTask = task;
        currentlyRenderingRequest = request;
        currentlyRenderingKeyPath = keyPath;
        isInHookUserCodeInDev = !1;
        actionStateCounter = localIdCounter = 0;
        actionStateMatchingIndex = -1;
        thenableIndexCounter = 0;
        thenableState = prevThenableState;
        for(request = callComponentInDEV(Component, props, secondArg); didScheduleRenderPhaseUpdate;)didScheduleRenderPhaseUpdate = !1, actionStateCounter = localIdCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, numberOfReRenders += 1, workInProgressHook = null, request = Component(props, secondArg);
        resetHooksState();
        return request;
    }
    function finishFunctionComponent(request, task, keyPath, children, hasId, actionStateCount, actionStateMatchingIndex) {
        var didEmitActionStateMarkers = !1;
        if (0 !== actionStateCount && null !== request.formState) {
            var segment = task.blockedSegment;
            if (null !== segment) {
                didEmitActionStateMarkers = !0;
                segment = segment.chunks;
                for(var i = 0; i < actionStateCount; i++)i === actionStateMatchingIndex ? segment.push("\x3c!--F!--\x3e") : segment.push("\x3c!--F--\x3e");
            }
        }
        actionStateCount = task.keyPath;
        task.keyPath = keyPath;
        hasId ? (keyPath = task.treeContext, task.treeContext = pushTreeContext(keyPath, 1, 0), renderNode(request, task, children, -1), task.treeContext = keyPath) : didEmitActionStateMarkers ? renderNode(request, task, children, -1) : renderNodeDestructive(request, task, children, -1);
        task.keyPath = actionStateCount;
    }
    function renderElement(request, task, keyPath, type, props, ref) {
        if ("function" === typeof type) if (type.prototype && type.prototype.isReactComponent) {
            var newProps = props;
            if ("ref" in props) {
                newProps = {};
                for(var propName in props)"ref" !== propName && (newProps[propName] = props[propName]);
            }
            var defaultProps = type.defaultProps;
            if (defaultProps) {
                newProps === props && (newProps = assign({}, newProps, props));
                for(var _propName in defaultProps)void 0 === newProps[_propName] && (newProps[_propName] = defaultProps[_propName]);
            }
            var resolvedProps = newProps;
            var context = emptyContextObject, contextType = type.contextType;
            if ("contextType" in type && null !== contextType && (void 0 === contextType || contextType.$$typeof !== REACT_CONTEXT_TYPE) && !didWarnAboutInvalidateContextType.has(type)) {
                didWarnAboutInvalidateContextType.add(type);
                var addendum = void 0 === contextType ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : "object" !== typeof contextType ? " However, it is set to a " + typeof contextType + "." : contextType.$$typeof === REACT_CONSUMER_TYPE ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(type) || "Component", addendum);
            }
            "object" === typeof contextType && null !== contextType && (context = contextType._currentValue2);
            var instance = new type(resolvedProps, context);
            if ("function" === typeof type.getDerivedStateFromProps && (null === instance.state || void 0 === instance.state)) {
                var componentName = getComponentNameFromType(type) || "Component";
                didWarnAboutUninitializedState.has(componentName) || (didWarnAboutUninitializedState.add(componentName), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, null === instance.state ? "null" : "undefined", componentName));
            }
            if ("function" === typeof type.getDerivedStateFromProps || "function" === typeof instance.getSnapshotBeforeUpdate) {
                var foundWillMountName = null, foundWillReceivePropsName = null, foundWillUpdateName = null;
                "function" === typeof instance.componentWillMount && !0 !== instance.componentWillMount.__suppressDeprecationWarning ? foundWillMountName = "componentWillMount" : "function" === typeof instance.UNSAFE_componentWillMount && (foundWillMountName = "UNSAFE_componentWillMount");
                "function" === typeof instance.componentWillReceiveProps && !0 !== instance.componentWillReceiveProps.__suppressDeprecationWarning ? foundWillReceivePropsName = "componentWillReceiveProps" : "function" === typeof instance.UNSAFE_componentWillReceiveProps && (foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps");
                "function" === typeof instance.componentWillUpdate && !0 !== instance.componentWillUpdate.__suppressDeprecationWarning ? foundWillUpdateName = "componentWillUpdate" : "function" === typeof instance.UNSAFE_componentWillUpdate && (foundWillUpdateName = "UNSAFE_componentWillUpdate");
                if (null !== foundWillMountName || null !== foundWillReceivePropsName || null !== foundWillUpdateName) {
                    var _componentName = getComponentNameFromType(type) || "Component", newApiName = "function" === typeof type.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                    didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName) || (didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", _componentName, newApiName, null !== foundWillMountName ? "\n  " + foundWillMountName : "", null !== foundWillReceivePropsName ? "\n  " + foundWillReceivePropsName : "", null !== foundWillUpdateName ? "\n  " + foundWillUpdateName : ""));
                }
            }
            var name = getComponentNameFromType(type) || "Component";
            instance.render || (type.prototype && "function" === typeof type.prototype.render ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", name) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", name));
            !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
            instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
            instance.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
            type.childContextTypes && !didWarnAboutChildContextTypes.has(type) && (didWarnAboutChildContextTypes.add(type), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", name));
            type.contextTypes && !didWarnAboutContextTypes$1.has(type) && (didWarnAboutContextTypes$1.add(type), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", name));
            "function" === typeof instance.componentShouldUpdate && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
            type.prototype && type.prototype.isPureReactComponent && "undefined" !== typeof instance.shouldComponentUpdate && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(type) || "A pure component");
            "function" === typeof instance.componentDidUnmount && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
            "function" === typeof instance.componentDidReceiveProps && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
            "function" === typeof instance.componentWillRecieveProps && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
            "function" === typeof instance.UNSAFE_componentWillRecieveProps && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
            var hasMutatedProps = instance.props !== resolvedProps;
            void 0 !== instance.props && hasMutatedProps && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name);
            instance.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
            "function" !== typeof instance.getSnapshotBeforeUpdate || "function" === typeof instance.componentDidUpdate || didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(type) || (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(type), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(type)));
            "function" === typeof instance.getDerivedStateFromProps && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            "function" === typeof instance.getDerivedStateFromError && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            "function" === typeof type.getSnapshotBeforeUpdate && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
            var state = instance.state;
            state && ("object" !== typeof state || isArrayImpl(state)) && console.error("%s.state: must be set to an object or null", name);
            "function" === typeof instance.getChildContext && "object" !== typeof type.childContextTypes && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
            var initialState = void 0 !== instance.state ? instance.state : null;
            instance.updater = classComponentUpdater;
            instance.props = resolvedProps;
            instance.state = initialState;
            var internalInstance = {
                queue: [],
                replace: !1
            };
            instance._reactInternals = internalInstance;
            var contextType$jscomp$0 = type.contextType;
            instance.context = "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 ? contextType$jscomp$0._currentValue2 : emptyContextObject;
            if (instance.state === resolvedProps) {
                var componentName$jscomp$0 = getComponentNameFromType(type) || "Component";
                didWarnAboutDirectlyAssigningPropsToState.has(componentName$jscomp$0) || (didWarnAboutDirectlyAssigningPropsToState.add(componentName$jscomp$0), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName$jscomp$0));
            }
            var getDerivedStateFromProps = type.getDerivedStateFromProps;
            if ("function" === typeof getDerivedStateFromProps) {
                var partialState = getDerivedStateFromProps(resolvedProps, initialState);
                if (void 0 === partialState) {
                    var componentName$jscomp$1 = getComponentNameFromType(type) || "Component";
                    didWarnAboutUndefinedDerivedState.has(componentName$jscomp$1) || (didWarnAboutUndefinedDerivedState.add(componentName$jscomp$1), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName$jscomp$1));
                }
                var JSCompiler_inline_result = null === partialState || void 0 === partialState ? initialState : assign({}, initialState, partialState);
                instance.state = JSCompiler_inline_result;
            }
            if ("function" !== typeof type.getDerivedStateFromProps && "function" !== typeof instance.getSnapshotBeforeUpdate && ("function" === typeof instance.UNSAFE_componentWillMount || "function" === typeof instance.componentWillMount)) {
                var oldState = instance.state;
                if ("function" === typeof instance.componentWillMount) {
                    if (!0 !== instance.componentWillMount.__suppressDeprecationWarning) {
                        var componentName$jscomp$2 = getComponentNameFromType(type) || "Unknown";
                        didWarnAboutDeprecatedWillMount[componentName$jscomp$2] || (console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", componentName$jscomp$2), didWarnAboutDeprecatedWillMount[componentName$jscomp$2] = !0);
                    }
                    instance.componentWillMount();
                }
                "function" === typeof instance.UNSAFE_componentWillMount && instance.UNSAFE_componentWillMount();
                oldState !== instance.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component"), classComponentUpdater.enqueueReplaceState(instance, instance.state, null));
                if (null !== internalInstance.queue && 0 < internalInstance.queue.length) {
                    var oldQueue = internalInstance.queue, oldReplace = internalInstance.replace;
                    internalInstance.queue = null;
                    internalInstance.replace = !1;
                    if (oldReplace && 1 === oldQueue.length) instance.state = oldQueue[0];
                    else {
                        for(var nextState = oldReplace ? oldQueue[0] : instance.state, dontMutate = !0, i = oldReplace ? 1 : 0; i < oldQueue.length; i++){
                            var partial = oldQueue[i], partialState$jscomp$0 = "function" === typeof partial ? partial.call(instance, nextState, resolvedProps, void 0) : partial;
                            null != partialState$jscomp$0 && (dontMutate ? (dontMutate = !1, nextState = assign({}, nextState, partialState$jscomp$0)) : assign(nextState, partialState$jscomp$0));
                        }
                        instance.state = nextState;
                    }
                } else internalInstance.queue = null;
            }
            var nextChildren = callRenderInDEV(instance);
            if (12 === request.status) throw null;
            instance.props !== resolvedProps && (didWarnAboutReassigningProps || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(type) || "a component"), didWarnAboutReassigningProps = !0);
            var prevKeyPath = task.keyPath;
            task.keyPath = keyPath;
            renderNodeDestructive(request, task, nextChildren, -1);
            task.keyPath = prevKeyPath;
        } else {
            if (type.prototype && "function" === typeof type.prototype.render) {
                var componentName$jscomp$3 = getComponentNameFromType(type) || "Unknown";
                didWarnAboutBadClass[componentName$jscomp$3] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName$jscomp$3, componentName$jscomp$3), didWarnAboutBadClass[componentName$jscomp$3] = !0);
            }
            var value = renderWithHooks(request, task, keyPath, type, props, void 0);
            if (12 === request.status) throw null;
            var hasId = 0 !== localIdCounter, actionStateCount = actionStateCounter, actionStateMatchingIndex$jscomp$0 = actionStateMatchingIndex;
            if (type.contextTypes) {
                var _componentName$jscomp$0 = getComponentNameFromType(type) || "Unknown";
                didWarnAboutContextTypes[_componentName$jscomp$0] || (didWarnAboutContextTypes[_componentName$jscomp$0] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", _componentName$jscomp$0));
            }
            type && type.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", type.displayName || type.name || "Component");
            if ("function" === typeof type.getDerivedStateFromProps) {
                var _componentName2 = getComponentNameFromType(type) || "Unknown";
                didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] || (console.error("%s: Function components do not support getDerivedStateFromProps.", _componentName2), didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] = !0);
            }
            if ("object" === typeof type.contextType && null !== type.contextType) {
                var _componentName3 = getComponentNameFromType(type) || "Unknown";
                didWarnAboutContextTypeOnFunctionComponent[_componentName3] || (console.error("%s: Function components do not support contextType.", _componentName3), didWarnAboutContextTypeOnFunctionComponent[_componentName3] = !0);
            }
            finishFunctionComponent(request, task, keyPath, value, hasId, actionStateCount, actionStateMatchingIndex$jscomp$0);
        }
        else if ("string" === typeof type) {
            var segment = task.blockedSegment;
            if (null === segment) {
                var children = props.children, prevContext = task.formatContext, prevKeyPath$jscomp$0 = task.keyPath;
                task.formatContext = getChildFormatContext(prevContext, type, props);
                task.keyPath = keyPath;
                renderNode(request, task, children, -1);
                task.formatContext = prevContext;
                task.keyPath = prevKeyPath$jscomp$0;
            } else {
                var _children = pushStartInstance(segment.chunks, type, props, request.resumableState, request.renderState, task.hoistableState, task.formatContext, segment.lastPushedText, task.isFallback);
                segment.lastPushedText = !1;
                var _prevContext = task.formatContext, _prevKeyPath2 = task.keyPath;
                task.formatContext = getChildFormatContext(_prevContext, type, props);
                task.keyPath = keyPath;
                renderNode(request, task, _children, -1);
                task.formatContext = _prevContext;
                task.keyPath = _prevKeyPath2;
                a: {
                    var target = segment.chunks, resumableState = request.resumableState;
                    switch(type){
                        case "title":
                        case "style":
                        case "script":
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "embed":
                        case "hr":
                        case "img":
                        case "input":
                        case "keygen":
                        case "link":
                        case "meta":
                        case "param":
                        case "source":
                        case "track":
                        case "wbr":
                            break a;
                        case "body":
                            if (_prevContext.insertionMode <= HTML_HTML_MODE) {
                                resumableState.hasBody = !0;
                                break a;
                            }
                            break;
                        case "html":
                            if (_prevContext.insertionMode === ROOT_HTML_MODE) {
                                resumableState.hasHtml = !0;
                                break a;
                            }
                    }
                    target.push(endChunkForTag(type));
                }
                segment.lastPushedText = !1;
            }
        } else {
            switch(type){
                case REACT_LEGACY_HIDDEN_TYPE:
                case REACT_DEBUG_TRACING_MODE_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_FRAGMENT_TYPE:
                    var prevKeyPath$jscomp$1 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, props.children, -1);
                    task.keyPath = prevKeyPath$jscomp$1;
                    return;
                case REACT_OFFSCREEN_TYPE:
                    if ("hidden" !== props.mode) {
                        var prevKeyPath$jscomp$2 = task.keyPath;
                        task.keyPath = keyPath;
                        renderNodeDestructive(request, task, props.children, -1);
                        task.keyPath = prevKeyPath$jscomp$2;
                    }
                    return;
                case REACT_SUSPENSE_LIST_TYPE:
                    var _prevKeyPath3 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, props.children, -1);
                    task.keyPath = _prevKeyPath3;
                    return;
                case REACT_SCOPE_TYPE:
                    throw Error("ReactDOMServer does not yet support scope components.");
                case REACT_SUSPENSE_TYPE:
                    a: if (null !== task.replay) {
                        var _prevKeyPath = task.keyPath;
                        task.keyPath = keyPath;
                        var _content = props.children;
                        try {
                            renderNode(request, task, _content, -1);
                        } finally{
                            task.keyPath = _prevKeyPath;
                        }
                    } else {
                        var prevKeyPath$jscomp$3 = task.keyPath, parentBoundary = task.blockedBoundary, parentHoistableState = task.hoistableState, parentSegment = task.blockedSegment, fallback = props.fallback, content = props.children, fallbackAbortSet = new Set(), newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
                        null !== request.trackedPostpones && (newBoundary.trackedContentKeyPath = keyPath);
                        var boundarySegment = createPendingSegment(request, parentSegment.chunks.length, newBoundary, task.formatContext, !1, !1);
                        parentSegment.children.push(boundarySegment);
                        parentSegment.lastPushedText = !1;
                        var contentRootSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
                        contentRootSegment.parentFlushed = !0;
                        if (null !== request.trackedPostpones) {
                            var fallbackKeyPath = [
                                keyPath[0],
                                "Suspense Fallback",
                                keyPath[2]
                            ], fallbackReplayNode = [
                                fallbackKeyPath[1],
                                fallbackKeyPath[2],
                                [],
                                null
                            ];
                            request.trackedPostpones.workingMap.set(fallbackKeyPath, fallbackReplayNode);
                            newBoundary.trackedFallbackNode = fallbackReplayNode;
                            task.blockedSegment = boundarySegment;
                            task.keyPath = fallbackKeyPath;
                            boundarySegment.status = 6;
                            try {
                                renderNode(request, task, fallback, -1), pushSegmentFinale(boundarySegment.chunks, request.renderState, boundarySegment.lastPushedText, boundarySegment.textEmbedded), boundarySegment.status = COMPLETED;
                            } catch (thrownValue) {
                                throw boundarySegment.status = 12 === request.status ? 3 : 4, thrownValue;
                            } finally{
                                task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$3;
                            }
                            var suspendedPrimaryTask = createRenderTask(request, null, content, -1, newBoundary, contentRootSegment, newBoundary.contentState, task.abortSet, keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
                            pushComponentStack(suspendedPrimaryTask);
                            request.pingedTasks.push(suspendedPrimaryTask);
                        } else {
                            task.blockedBoundary = newBoundary;
                            task.hoistableState = newBoundary.contentState;
                            task.blockedSegment = contentRootSegment;
                            task.keyPath = keyPath;
                            contentRootSegment.status = 6;
                            try {
                                if (renderNode(request, task, content, -1), pushSegmentFinale(contentRootSegment.chunks, request.renderState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded), contentRootSegment.status = COMPLETED, queueCompletedSegment(newBoundary, contentRootSegment), 0 === newBoundary.pendingTasks && newBoundary.status === PENDING) {
                                    newBoundary.status = COMPLETED;
                                    break a;
                                }
                            } catch (thrownValue$2) {
                                newBoundary.status = CLIENT_RENDERED;
                                if (12 === request.status) {
                                    contentRootSegment.status = 3;
                                    var error = request.fatalError;
                                } else contentRootSegment.status = 4, error = thrownValue$2;
                                var thrownInfo = getThrownInfo(task.componentStack);
                                var errorDigest = logRecoverableError(request, error, thrownInfo);
                                encodeErrorForBoundary(newBoundary, errorDigest, error, thrownInfo, !1);
                                untrackBoundary(request, newBoundary);
                            } finally{
                                task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$3;
                            }
                            var suspendedFallbackTask = createRenderTask(request, null, fallback, -1, parentBoundary, boundarySegment, newBoundary.fallbackState, fallbackAbortSet, [
                                keyPath[0],
                                "Suspense Fallback",
                                keyPath[2]
                            ], task.formatContext, task.context, task.treeContext, task.componentStack, !0);
                            pushComponentStack(suspendedFallbackTask);
                            request.pingedTasks.push(suspendedFallbackTask);
                        }
                    }
                    return;
            }
            if ("object" === typeof type && null !== type) switch(type.$$typeof){
                case REACT_FORWARD_REF_TYPE:
                    if ("ref" in props) {
                        var propsWithoutRef = {};
                        for(var key in props)"ref" !== key && (propsWithoutRef[key] = props[key]);
                    } else propsWithoutRef = props;
                    var children$jscomp$0 = renderWithHooks(request, task, keyPath, type.render, propsWithoutRef, ref);
                    finishFunctionComponent(request, task, keyPath, children$jscomp$0, 0 !== localIdCounter, actionStateCounter, actionStateMatchingIndex);
                    return;
                case REACT_MEMO_TYPE:
                    renderElement(request, task, keyPath, type.type, props, ref);
                    return;
                case REACT_PROVIDER_TYPE:
                case REACT_CONTEXT_TYPE:
                    var value$jscomp$0 = props.value, children$jscomp$1 = props.children;
                    var prevSnapshot = task.context;
                    var prevKeyPath$jscomp$4 = task.keyPath;
                    var prevValue = type._currentValue2;
                    type._currentValue2 = value$jscomp$0;
                    void 0 !== type._currentRenderer2 && null !== type._currentRenderer2 && type._currentRenderer2 !== rendererSigil && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
                    type._currentRenderer2 = rendererSigil;
                    var prevNode = currentActiveSnapshot, newNode = {
                        parent: prevNode,
                        depth: null === prevNode ? 0 : prevNode.depth + 1,
                        context: type,
                        parentValue: prevValue,
                        value: value$jscomp$0
                    };
                    currentActiveSnapshot = newNode;
                    task.context = newNode;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, children$jscomp$1, -1);
                    var prevSnapshot$jscomp$0 = currentActiveSnapshot;
                    if (null === prevSnapshot$jscomp$0) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
                    prevSnapshot$jscomp$0.context !== type && console.error("The parent context is not the expected context. This is probably a bug in React.");
                    prevSnapshot$jscomp$0.context._currentValue2 = prevSnapshot$jscomp$0.parentValue;
                    void 0 !== type._currentRenderer2 && null !== type._currentRenderer2 && type._currentRenderer2 !== rendererSigil && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
                    type._currentRenderer2 = rendererSigil;
                    var JSCompiler_inline_result$jscomp$0 = currentActiveSnapshot = prevSnapshot$jscomp$0.parent;
                    task.context = JSCompiler_inline_result$jscomp$0;
                    task.keyPath = prevKeyPath$jscomp$4;
                    prevSnapshot !== task.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
                    return;
                case REACT_CONSUMER_TYPE:
                    var context$jscomp$0 = type._context, render = props.children;
                    "function" !== typeof render && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
                    var newChildren = render(context$jscomp$0._currentValue2), prevKeyPath$jscomp$5 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, newChildren, -1);
                    task.keyPath = prevKeyPath$jscomp$5;
                    return;
                case REACT_LAZY_TYPE:
                    var Component = callLazyInitInDEV(type);
                    if (12 === request.status) throw null;
                    renderElement(request, task, keyPath, Component, props, ref);
                    return;
            }
            var info = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == type ? type : typeof type) + "." + info));
        }
    }
    function resumeNode(request, task, segmentId, node, childIndex) {
        var prevReplay = task.replay, blockedBoundary = task.blockedBoundary, resumedSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
        resumedSegment.id = segmentId;
        resumedSegment.parentFlushed = !0;
        try {
            task.replay = null, task.blockedSegment = resumedSegment, renderNode(request, task, node, childIndex), resumedSegment.status = COMPLETED, null === blockedBoundary ? request.completedRootSegment = resumedSegment : (queueCompletedSegment(blockedBoundary, resumedSegment), blockedBoundary.parentFlushed && request.partialBoundaries.push(blockedBoundary));
        } finally{
            task.replay = prevReplay, task.blockedSegment = null;
        }
    }
    function renderNodeDestructive(request, task, node, childIndex) {
        null !== task.replay && "number" === typeof task.replay.slots ? resumeNode(request, task, task.replay.slots, node, childIndex) : (task.node = node, task.childIndex = childIndex, node = task.componentStack, pushComponentStack(task), retryNode(request, task), task.componentStack = node);
    }
    function retryNode(request, task) {
        var node = task.node, childIndex = task.childIndex;
        if (null !== node) {
            if ("object" === typeof node) {
                switch(node.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = node.type, key = node.key, props = node.props;
                        node = props.ref;
                        var ref = void 0 !== node ? node : null, name = getComponentNameFromType(type), keyOrIndex = null == key ? -1 === childIndex ? 0 : childIndex : key, keyPath = [
                            task.keyPath,
                            name,
                            keyOrIndex
                        ];
                        if (null !== task.replay) {
                            var replay = task.replay;
                            childIndex = replay.nodes;
                            for(node = 0; node < childIndex.length; node++)if (key = childIndex[node], keyOrIndex === key[1]) {
                                if (4 === key.length) {
                                    if (null !== name && name !== key[0]) throw Error("Expected the resume to render <" + key[0] + "> in this slot but instead it rendered <" + name + ">. The tree doesn't match so React will fallback to client rendering.");
                                    var childNodes = key[2];
                                    key = key[3];
                                    name = task.node;
                                    task.replay = {
                                        nodes: childNodes,
                                        slots: key,
                                        pendingTasks: 1
                                    };
                                    try {
                                        renderElement(request, task, keyPath, type, props, ref);
                                        if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                                        task.replay.pendingTasks--;
                                    } catch (x) {
                                        if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then)) throw task.node === name && (task.replay = replay), x;
                                        task.replay.pendingTasks--;
                                        props = getThrownInfo(task.componentStack);
                                        erroredReplay(request, task.blockedBoundary, x, props, childNodes, key);
                                    }
                                    task.replay = replay;
                                } else {
                                    if (type !== REACT_SUSPENSE_TYPE) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (getComponentNameFromType(type) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
                                    a: {
                                        type = void 0;
                                        ref = key[5];
                                        replay = key[2];
                                        name = key[3];
                                        keyOrIndex = null === key[4] ? [] : key[4][2];
                                        key = null === key[4] ? null : key[4][3];
                                        var prevKeyPath = task.keyPath, previousReplaySet = task.replay, parentBoundary = task.blockedBoundary, parentHoistableState = task.hoistableState, content = props.children;
                                        props = props.fallback;
                                        var fallbackAbortSet = new Set(), resumedBoundary = createSuspenseBoundary(request, fallbackAbortSet);
                                        resumedBoundary.parentFlushed = !0;
                                        resumedBoundary.rootSegmentID = ref;
                                        task.blockedBoundary = resumedBoundary;
                                        task.hoistableState = resumedBoundary.contentState;
                                        task.keyPath = keyPath;
                                        task.replay = {
                                            nodes: replay,
                                            slots: name,
                                            pendingTasks: 1
                                        };
                                        try {
                                            renderNode(request, task, content, -1);
                                            if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                                            task.replay.pendingTasks--;
                                            if (0 === resumedBoundary.pendingTasks && resumedBoundary.status === PENDING) {
                                                resumedBoundary.status = COMPLETED;
                                                request.completedBoundaries.push(resumedBoundary);
                                                break a;
                                            }
                                        } catch (error) {
                                            resumedBoundary.status = CLIENT_RENDERED, childNodes = getThrownInfo(task.componentStack), type = logRecoverableError(request, error, childNodes), encodeErrorForBoundary(resumedBoundary, type, error, childNodes, !1), task.replay.pendingTasks--, request.clientRenderedBoundaries.push(resumedBoundary);
                                        } finally{
                                            task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.replay = previousReplaySet, task.keyPath = prevKeyPath;
                                        }
                                        childNodes = createReplayTask(request, null, {
                                            nodes: keyOrIndex,
                                            slots: key,
                                            pendingTasks: 0
                                        }, props, -1, parentBoundary, resumedBoundary.fallbackState, fallbackAbortSet, [
                                            keyPath[0],
                                            "Suspense Fallback",
                                            keyPath[2]
                                        ], task.formatContext, task.context, task.treeContext, task.componentStack, !0);
                                        pushComponentStack(childNodes);
                                        request.pingedTasks.push(childNodes);
                                    }
                                }
                                childIndex.splice(node, 1);
                                break;
                            }
                        } else renderElement(request, task, keyPath, type, props, ref);
                        return;
                    case REACT_PORTAL_TYPE:
                        throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
                    case REACT_LAZY_TYPE:
                        node = callLazyInitInDEV(node);
                        if (12 === request.status) throw null;
                        renderNodeDestructive(request, task, node, childIndex);
                        return;
                }
                if (isArrayImpl(node)) {
                    renderChildrenArray(request, task, node, childIndex);
                    return;
                }
                null === node || "object" !== typeof node ? props = null : (childNodes = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], props = "function" === typeof childNodes ? childNodes : null);
                if (props && (childNodes = props.call(node))) {
                    if (childNodes === node) {
                        if (-1 !== childIndex || null === task.componentStack || "function" !== typeof task.componentStack.type || "[object GeneratorFunction]" !== Object.prototype.toString.call(task.componentStack.type) || "[object Generator]" !== Object.prototype.toString.call(childNodes)) didWarnAboutGenerators || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), didWarnAboutGenerators = !0;
                    } else node.entries !== props || didWarnAboutMaps || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0);
                    node = childNodes.next();
                    if (!node.done) {
                        props = [];
                        do props.push(node.value), node = childNodes.next();
                        while (!node.done)
                        renderChildrenArray(request, task, props, childIndex);
                    }
                    return;
                }
                if ("function" === typeof node.then) return task.thenableState = null, renderNodeDestructive(request, task, unwrapThenable(node), childIndex);
                if (node.$$typeof === REACT_CONTEXT_TYPE) return renderNodeDestructive(request, task, node._currentValue2, childIndex);
                childIndex = Object.prototype.toString.call(node);
                throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === childIndex ? "object with keys {" + Object.keys(node).join(", ") + "}" : childIndex) + "). If you meant to render a collection of children, use an array instead.");
            }
            "string" === typeof node ? (childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(childIndex.chunks, node, request.renderState, childIndex.lastPushedText))) : "number" === typeof node || "bigint" === typeof node ? (childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(childIndex.chunks, "" + node, request.renderState, childIndex.lastPushedText))) : ("function" === typeof node && (childIndex = node.displayName || node.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", childIndex, childIndex)), "symbol" === typeof node && console.error("Symbols are not valid as a React child.\n  %s", String(node)));
        }
    }
    function renderChildrenArray(request$jscomp$0, task, children, childIndex) {
        var prevKeyPath = task.keyPath, previousComponentStack = task.componentStack;
        pushServerComponentStack(task, task.node._debugInfo);
        if (-1 !== childIndex && (task.keyPath = [
            task.keyPath,
            "Fragment",
            childIndex
        ], null !== task.replay)) {
            for(var replay = task.replay, replayNodes = replay.nodes, j = 0; j < replayNodes.length; j++){
                var node = replayNodes[j];
                if (node[1] === childIndex) {
                    childIndex = node[2];
                    node = node[3];
                    task.replay = {
                        nodes: childIndex,
                        slots: node,
                        pendingTasks: 1
                    };
                    try {
                        renderChildrenArray(request$jscomp$0, task, children, -1);
                        if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                        task.replay.pendingTasks--;
                    } catch (x) {
                        if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then)) throw x;
                        task.replay.pendingTasks--;
                        children = getThrownInfo(task.componentStack);
                        erroredReplay(request$jscomp$0, task.blockedBoundary, x, children, childIndex, node);
                    }
                    task.replay = replay;
                    replayNodes.splice(j, 1);
                    break;
                }
            }
            task.keyPath = prevKeyPath;
            task.componentStack = previousComponentStack;
            return;
        }
        replay = task.treeContext;
        replayNodes = children.length;
        if (null !== task.replay && (j = task.replay.slots, null !== j && "object" === typeof j)) {
            for(childIndex = 0; childIndex < replayNodes; childIndex++){
                node = children[childIndex];
                task.treeContext = pushTreeContext(replay, replayNodes, childIndex);
                var resumeSegmentID = j[childIndex];
                "number" === typeof resumeSegmentID ? (resumeNode(request$jscomp$0, task, resumeSegmentID, node, childIndex), delete j[childIndex]) : renderNode(request$jscomp$0, task, node, childIndex);
            }
            task.treeContext = replay;
            task.keyPath = prevKeyPath;
            task.componentStack = previousComponentStack;
            return;
        }
        for(j = 0; j < replayNodes; j++){
            childIndex = children[j];
            var request = request$jscomp$0;
            node = task;
            resumeSegmentID = childIndex;
            if (null !== resumeSegmentID && "object" === typeof resumeSegmentID && (resumeSegmentID.$$typeof === REACT_ELEMENT_TYPE || resumeSegmentID.$$typeof === REACT_PORTAL_TYPE) && resumeSegmentID._store && (!resumeSegmentID._store.validated && null == resumeSegmentID.key || 2 === resumeSegmentID._store.validated)) {
                if ("object" !== typeof resumeSegmentID._store) throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
                resumeSegmentID._store.validated = 1;
                var didWarnForKey = request.didWarnForKey;
                null == didWarnForKey && (didWarnForKey = request.didWarnForKey = new WeakSet());
                request = node.componentStack;
                if (null !== request && !didWarnForKey.has(request)) {
                    didWarnForKey.add(request);
                    var componentName = getComponentNameFromType(resumeSegmentID.type);
                    didWarnForKey = resumeSegmentID._owner;
                    var parentOwner = request.owner;
                    request = "";
                    if (parentOwner && "undefined" !== typeof parentOwner.type) {
                        var name = getComponentNameFromType(parentOwner.type);
                        name && (request = "\n\nCheck the render method of `" + name + "`.");
                    }
                    request || componentName && (request = "\n\nCheck the top-level render call using <" + componentName + ">.");
                    componentName = "";
                    null != didWarnForKey && parentOwner !== didWarnForKey && (parentOwner = null, "undefined" !== typeof didWarnForKey.type ? parentOwner = getComponentNameFromType(didWarnForKey.type) : "string" === typeof didWarnForKey.name && (parentOwner = didWarnForKey.name), parentOwner && (componentName = " It was passed a child from " + parentOwner + "."));
                    didWarnForKey = node.componentStack;
                    node.componentStack = {
                        parent: node.componentStack,
                        type: resumeSegmentID.type,
                        owner: resumeSegmentID._owner,
                        stack: null
                    };
                    console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', request, componentName);
                    node.componentStack = didWarnForKey;
                }
            }
            task.treeContext = pushTreeContext(replay, replayNodes, j);
            renderNode(request$jscomp$0, task, childIndex, j);
        }
        task.treeContext = replay;
        task.keyPath = prevKeyPath;
        task.componentStack = previousComponentStack;
    }
    function untrackBoundary(request, boundary) {
        request = request.trackedPostpones;
        null !== request && (boundary = boundary.trackedContentKeyPath, null !== boundary && (boundary = request.workingMap.get(boundary), void 0 !== boundary && (boundary.length = 4, boundary[2] = [], boundary[3] = null)));
    }
    function spawnNewSuspendedReplayTask(request, task, thenableState) {
        return createReplayTask(request, thenableState, task.replay, task.node, task.childIndex, task.blockedBoundary, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
    }
    function spawnNewSuspendedRenderTask(request, task, thenableState) {
        var segment = task.blockedSegment, newSegment = createPendingSegment(request, segment.chunks.length, null, task.formatContext, segment.lastPushedText, !0);
        segment.children.push(newSegment);
        segment.lastPushedText = !1;
        return createRenderTask(request, thenableState, task.node, task.childIndex, task.blockedBoundary, newSegment, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
    }
    function renderNode(request, task, node, childIndex) {
        var previousFormatContext = task.formatContext, previousContext = task.context, previousKeyPath = task.keyPath, previousTreeContext = task.treeContext, previousComponentStack = task.componentStack, segment = task.blockedSegment;
        if (null === segment) try {
            return renderNodeDestructive(request, task, node, childIndex);
        } catch (thrownValue) {
            if (resetHooksState(), node = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, "object" === typeof node && null !== node) {
                if ("function" === typeof node.then) {
                    childIndex = getThenableStateAfterSuspending();
                    request = spawnNewSuspendedReplayTask(request, task, childIndex).ping;
                    node.then(request, request);
                    task.formatContext = previousFormatContext;
                    task.context = previousContext;
                    task.keyPath = previousKeyPath;
                    task.treeContext = previousTreeContext;
                    task.componentStack = previousComponentStack;
                    switchContext(previousContext);
                    return;
                }
                if ("Maximum call stack size exceeded" === node.message) {
                    node = getThenableStateAfterSuspending();
                    node = spawnNewSuspendedReplayTask(request, task, node);
                    request.pingedTasks.push(node);
                    task.formatContext = previousFormatContext;
                    task.context = previousContext;
                    task.keyPath = previousKeyPath;
                    task.treeContext = previousTreeContext;
                    task.componentStack = previousComponentStack;
                    switchContext(previousContext);
                    return;
                }
            }
        }
        else {
            var childrenLength = segment.children.length, chunkLength = segment.chunks.length;
            try {
                return renderNodeDestructive(request, task, node, childIndex);
            } catch (thrownValue$3) {
                if (resetHooksState(), segment.children.length = childrenLength, segment.chunks.length = chunkLength, node = thrownValue$3 === SuspenseException ? getSuspendedThenable() : thrownValue$3, "object" === typeof node && null !== node) {
                    if ("function" === typeof node.then) {
                        childIndex = getThenableStateAfterSuspending();
                        request = spawnNewSuspendedRenderTask(request, task, childIndex).ping;
                        node.then(request, request);
                        task.formatContext = previousFormatContext;
                        task.context = previousContext;
                        task.keyPath = previousKeyPath;
                        task.treeContext = previousTreeContext;
                        task.componentStack = previousComponentStack;
                        switchContext(previousContext);
                        return;
                    }
                    if ("Maximum call stack size exceeded" === node.message) {
                        node = getThenableStateAfterSuspending();
                        node = spawnNewSuspendedRenderTask(request, task, node);
                        request.pingedTasks.push(node);
                        task.formatContext = previousFormatContext;
                        task.context = previousContext;
                        task.keyPath = previousKeyPath;
                        task.treeContext = previousTreeContext;
                        task.componentStack = previousComponentStack;
                        switchContext(previousContext);
                        return;
                    }
                }
            }
        }
        task.formatContext = previousFormatContext;
        task.context = previousContext;
        task.keyPath = previousKeyPath;
        task.treeContext = previousTreeContext;
        switchContext(previousContext);
        throw node;
    }
    function erroredReplay(request, boundary, error, errorInfo, replayNodes, resumeSlots) {
        var errorDigest = logRecoverableError(request, error, errorInfo);
        abortRemainingReplayNodes(request, boundary, replayNodes, resumeSlots, error, errorDigest, errorInfo, !1);
    }
    function abortTaskSoft(task) {
        var boundary = task.blockedBoundary;
        task = task.blockedSegment;
        null !== task && (task.status = 3, finishedTask(this, boundary, task));
    }
    function abortRemainingReplayNodes(request$jscomp$0, boundary, nodes, slots, error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted) {
        for(var i = 0; i < nodes.length; i++){
            var node = nodes[i];
            if (4 === node.length) abortRemainingReplayNodes(request$jscomp$0, boundary, node[2], node[3], error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted);
            else {
                var request = request$jscomp$0;
                node = node[5];
                var error = error$jscomp$0, errorDigest = errorDigest$jscomp$0, errorInfo = errorInfo$jscomp$0, wasAborted = aborted, resumedBoundary = createSuspenseBoundary(request, new Set());
                resumedBoundary.parentFlushed = !0;
                resumedBoundary.rootSegmentID = node;
                resumedBoundary.status = CLIENT_RENDERED;
                encodeErrorForBoundary(resumedBoundary, errorDigest, error, errorInfo, wasAborted);
                resumedBoundary.parentFlushed && request.clientRenderedBoundaries.push(resumedBoundary);
            }
        }
        nodes.length = 0;
        if (null !== slots) {
            if (null === boundary) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
            boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, errorDigest$jscomp$0, error$jscomp$0, errorInfo$jscomp$0, aborted), boundary.parentFlushed && request$jscomp$0.clientRenderedBoundaries.push(boundary));
            if ("object" === typeof slots) for(var index in slots)delete slots[index];
        }
    }
    function abortTask(task, request, error) {
        var boundary = task.blockedBoundary, segment = task.blockedSegment;
        if (null !== segment) {
            if (6 === segment.status) return;
            segment.status = 3;
        }
        segment = getThrownInfo(task.componentStack);
        if (null === boundary) {
            if (13 !== request.status && request.status !== CLOSED) {
                boundary = task.replay;
                if (null === boundary) {
                    logRecoverableError(request, error, segment);
                    fatalError(request, error);
                    return;
                }
                boundary.pendingTasks--;
                0 === boundary.pendingTasks && 0 < boundary.nodes.length && (task = logRecoverableError(request, error, segment), abortRemainingReplayNodes(request, null, boundary.nodes, boundary.slots, error, task, segment, !0));
                request.pendingRootTasks--;
                0 === request.pendingRootTasks && completeShell(request);
            }
        } else boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, task = logRecoverableError(request, error, segment), boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, task, error, segment, !0), untrackBoundary(request, boundary), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary)), boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
            return abortTask(fallbackTask, request, error);
        }), boundary.fallbackAbortableTasks.clear();
        request.allPendingTasks--;
        0 === request.allPendingTasks && completeAll(request);
    }
    function safelyEmitEarlyPreloads(request, shellComplete) {
        try {
            var renderState = request.renderState, onHeaders = renderState.onHeaders;
            if (onHeaders) {
                var headers = renderState.headers;
                if (headers) {
                    renderState.headers = null;
                    var linkHeader = headers.preconnects;
                    headers.fontPreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.fontPreloads);
                    headers.highImagePreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.highImagePreloads);
                    if (!shellComplete) {
                        var queueIter = renderState.styles.values(), queueStep = queueIter.next();
                        b: for(; 0 < headers.remainingCapacity && !queueStep.done; queueStep = queueIter.next())for(var sheetIter = queueStep.value.sheets.values(), sheetStep = sheetIter.next(); 0 < headers.remainingCapacity && !sheetStep.done; sheetStep = sheetIter.next()){
                            var sheet = sheetStep.value, props = sheet.props, key = props.href, props$jscomp$0 = sheet.props;
                            var header = getPreloadAsHeader(props$jscomp$0.href, "style", {
                                crossOrigin: props$jscomp$0.crossOrigin,
                                integrity: props$jscomp$0.integrity,
                                nonce: props$jscomp$0.nonce,
                                type: props$jscomp$0.type,
                                fetchPriority: props$jscomp$0.fetchPriority,
                                referrerPolicy: props$jscomp$0.referrerPolicy,
                                media: props$jscomp$0.media
                            });
                            if (0 <= (headers.remainingCapacity -= header.length + 2)) renderState.resets.style[key] = PRELOAD_NO_CREDS, linkHeader && (linkHeader += ", "), linkHeader += header, renderState.resets.style[key] = "string" === typeof props.crossOrigin || "string" === typeof props.integrity ? [
                                props.crossOrigin,
                                props.integrity
                            ] : PRELOAD_NO_CREDS;
                            else break b;
                        }
                    }
                    linkHeader ? onHeaders({
                        Link: linkHeader
                    }) : onHeaders({});
                }
            }
        } catch (error) {
            logRecoverableError(request, error, {});
        }
    }
    function completeShell(request) {
        null === request.trackedPostpones && safelyEmitEarlyPreloads(request, !0);
        request.onShellError = noop;
        request = request.onShellReady;
        request();
    }
    function completeAll(request) {
        safelyEmitEarlyPreloads(request, null === request.trackedPostpones ? !0 : null === request.completedRootSegment || request.completedRootSegment.status !== POSTPONED);
        request = request.onAllReady;
        request();
    }
    function queueCompletedSegment(boundary, segment) {
        if (0 === segment.chunks.length && 1 === segment.children.length && null === segment.children[0].boundary && -1 === segment.children[0].id) {
            var childSegment = segment.children[0];
            childSegment.id = segment.id;
            childSegment.parentFlushed = !0;
            childSegment.status === COMPLETED && queueCompletedSegment(boundary, childSegment);
        } else boundary.completedSegments.push(segment);
    }
    function finishedTask(request, boundary, segment) {
        if (null === boundary) {
            if (null !== segment && segment.parentFlushed) {
                if (null !== request.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
                request.completedRootSegment = segment;
            }
            request.pendingRootTasks--;
            0 === request.pendingRootTasks && completeShell(request);
        } else boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (0 === boundary.pendingTasks ? (boundary.status === PENDING && (boundary.status = COMPLETED), null !== segment && segment.parentFlushed && segment.status === COMPLETED && queueCompletedSegment(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), boundary.status === COMPLETED && (boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request), boundary.fallbackAbortableTasks.clear())) : null !== segment && segment.parentFlushed && segment.status === COMPLETED && (queueCompletedSegment(boundary, segment), 1 === boundary.completedSegments.length && boundary.parentFlushed && request.partialBoundaries.push(boundary)));
        request.allPendingTasks--;
        0 === request.allPendingTasks && completeAll(request);
    }
    function performWork(request$jscomp$1) {
        if (request$jscomp$1.status !== CLOSED && 13 !== request$jscomp$1.status) {
            var prevContext = currentActiveSnapshot, prevDispatcher = ReactSharedInternals.H;
            ReactSharedInternals.H = HooksDispatcher;
            var prevAsyncDispatcher = ReactSharedInternals.A;
            ReactSharedInternals.A = DefaultAsyncDispatcher;
            var prevRequest = currentRequest;
            currentRequest = request$jscomp$1;
            var prevGetCurrentStackImpl = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = getCurrentStackInDEV;
            var prevResumableState = currentResumableState;
            currentResumableState = request$jscomp$1.resumableState;
            try {
                var pingedTasks = request$jscomp$1.pingedTasks, i;
                for(i = 0; i < pingedTasks.length; i++){
                    var request = request$jscomp$1, task = pingedTasks[i], segment = task.blockedSegment;
                    if (null === segment) {
                        var prevTaskInDEV = void 0, request$jscomp$0 = request;
                        request = task;
                        if (0 !== request.replay.pendingTasks) {
                            switchContext(request.context);
                            prevTaskInDEV = currentTaskInDEV;
                            currentTaskInDEV = request;
                            try {
                                "number" === typeof request.replay.slots ? resumeNode(request$jscomp$0, request, request.replay.slots, request.node, request.childIndex) : retryNode(request$jscomp$0, request);
                                if (1 === request.replay.pendingTasks && 0 < request.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                                request.replay.pendingTasks--;
                                request.abortSet.delete(request);
                                finishedTask(request$jscomp$0, request.blockedBoundary, null);
                            } catch (thrownValue) {
                                resetHooksState();
                                var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                                if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                                    var ping = request.ping;
                                    x.then(ping, ping);
                                    request.thenableState = getThenableStateAfterSuspending();
                                } else {
                                    request.replay.pendingTasks--;
                                    request.abortSet.delete(request);
                                    var errorInfo = getThrownInfo(request.componentStack);
                                    erroredReplay(request$jscomp$0, request.blockedBoundary, 12 === request$jscomp$0.status ? request$jscomp$0.fatalError : x, errorInfo, request.replay.nodes, request.replay.slots);
                                    request$jscomp$0.pendingRootTasks--;
                                    0 === request$jscomp$0.pendingRootTasks && completeShell(request$jscomp$0);
                                    request$jscomp$0.allPendingTasks--;
                                    0 === request$jscomp$0.allPendingTasks && completeAll(request$jscomp$0);
                                }
                            } finally{
                                currentTaskInDEV = prevTaskInDEV;
                            }
                        }
                    } else {
                        request$jscomp$0 = prevTaskInDEV = void 0;
                        var task$jscomp$0 = task, segment$jscomp$0 = segment;
                        if (segment$jscomp$0.status === PENDING) {
                            segment$jscomp$0.status = 6;
                            switchContext(task$jscomp$0.context);
                            request$jscomp$0 = currentTaskInDEV;
                            currentTaskInDEV = task$jscomp$0;
                            var childrenLength = segment$jscomp$0.children.length, chunkLength = segment$jscomp$0.chunks.length;
                            try {
                                retryNode(request, task$jscomp$0), pushSegmentFinale(segment$jscomp$0.chunks, request.renderState, segment$jscomp$0.lastPushedText, segment$jscomp$0.textEmbedded), task$jscomp$0.abortSet.delete(task$jscomp$0), segment$jscomp$0.status = COMPLETED, finishedTask(request, task$jscomp$0.blockedBoundary, segment$jscomp$0);
                            } catch (thrownValue) {
                                resetHooksState();
                                segment$jscomp$0.children.length = childrenLength;
                                segment$jscomp$0.chunks.length = chunkLength;
                                var x$jscomp$0 = thrownValue === SuspenseException ? getSuspendedThenable() : 12 === request.status ? request.fatalError : thrownValue;
                                if ("object" === typeof x$jscomp$0 && null !== x$jscomp$0 && "function" === typeof x$jscomp$0.then) {
                                    segment$jscomp$0.status = PENDING;
                                    task$jscomp$0.thenableState = getThenableStateAfterSuspending();
                                    var ping$jscomp$0 = task$jscomp$0.ping;
                                    x$jscomp$0.then(ping$jscomp$0, ping$jscomp$0);
                                } else {
                                    var errorInfo$jscomp$0 = getThrownInfo(task$jscomp$0.componentStack);
                                    task$jscomp$0.abortSet.delete(task$jscomp$0);
                                    segment$jscomp$0.status = 4;
                                    var boundary = task$jscomp$0.blockedBoundary;
                                    prevTaskInDEV = logRecoverableError(request, x$jscomp$0, errorInfo$jscomp$0);
                                    null === boundary ? fatalError(request, x$jscomp$0) : (boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, prevTaskInDEV, x$jscomp$0, errorInfo$jscomp$0, !1), untrackBoundary(request, boundary), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary)));
                                    request.allPendingTasks--;
                                    0 === request.allPendingTasks && completeAll(request);
                                }
                            } finally{
                                currentTaskInDEV = request$jscomp$0;
                            }
                        }
                    }
                }
                pingedTasks.splice(0, i);
                null !== request$jscomp$1.destination && flushCompletedQueues(request$jscomp$1, request$jscomp$1.destination);
            } catch (error) {
                logRecoverableError(request$jscomp$1, error, {}), fatalError(request$jscomp$1, error);
            } finally{
                currentResumableState = prevResumableState, ReactSharedInternals.H = prevDispatcher, ReactSharedInternals.A = prevAsyncDispatcher, ReactSharedInternals.getCurrentStack = prevGetCurrentStackImpl, prevDispatcher === HooksDispatcher && switchContext(prevContext), currentRequest = prevRequest;
            }
        }
    }
    function flushSubtree(request, destination, segment, hoistableState) {
        segment.parentFlushed = !0;
        switch(segment.status){
            case PENDING:
                segment.id = request.nextSegmentId++;
            case POSTPONED:
                return hoistableState = segment.id, segment.lastPushedText = !1, segment.textEmbedded = !1, request = request.renderState, destination.push(placeholder1), destination.push(request.placeholderPrefix), request = hoistableState.toString(16), destination.push(request), destination.push(placeholder2);
            case COMPLETED:
                segment.status = FLUSHED;
                var r = !0, chunks = segment.chunks, chunkIdx = 0;
                segment = segment.children;
                for(var childIdx = 0; childIdx < segment.length; childIdx++){
                    for(r = segment[childIdx]; chunkIdx < r.index; chunkIdx++)destination.push(chunks[chunkIdx]);
                    r = flushSegment(request, destination, r, hoistableState);
                }
                for(; chunkIdx < chunks.length - 1; chunkIdx++)destination.push(chunks[chunkIdx]);
                chunkIdx < chunks.length && (r = destination.push(chunks[chunkIdx]));
                return r;
            default:
                throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
        }
    }
    function flushSegment(request, destination, segment, hoistableState) {
        var boundary = segment.boundary;
        if (null === boundary) return flushSubtree(request, destination, segment, hoistableState);
        boundary.parentFlushed = !0;
        if (boundary.status === CLIENT_RENDERED) {
            if (!request.renderState.generateStaticMarkup) {
                var errorDigest = boundary.errorDigest, errorMessage = boundary.errorMessage, errorStack = boundary.errorStack;
                boundary = boundary.errorComponentStack;
                destination.push(startClientRenderedSuspenseBoundary);
                destination.push(clientRenderedSuspenseBoundaryError1);
                errorDigest && (destination.push(clientRenderedSuspenseBoundaryError1A), errorDigest = escapeTextForBrowser(errorDigest), destination.push(errorDigest), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial));
                errorMessage && (destination.push(clientRenderedSuspenseBoundaryError1B), errorMessage = escapeTextForBrowser(errorMessage), destination.push(errorMessage), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial));
                errorStack && (destination.push(clientRenderedSuspenseBoundaryError1C), errorStack = escapeTextForBrowser(errorStack), destination.push(errorStack), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial));
                boundary && (destination.push(clientRenderedSuspenseBoundaryError1D), errorStack = escapeTextForBrowser(boundary), destination.push(errorStack), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial));
                destination.push(clientRenderedSuspenseBoundaryError2);
            }
            flushSubtree(request, destination, segment, hoistableState);
            request = request.renderState.generateStaticMarkup ? !0 : destination.push(endSuspenseBoundary);
            return request;
        }
        if (boundary.status !== COMPLETED) return boundary.status === PENDING && (boundary.rootSegmentID = request.nextSegmentId++), 0 < boundary.completedSegments.length && request.partialBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), hoistableState && (errorStack = boundary.fallbackState, errorStack.styles.forEach(hoistStyleQueueDependency, hoistableState), errorStack.stylesheets.forEach(hoistStylesheetDependency, hoistableState)), flushSubtree(request, destination, segment, hoistableState), destination.push(endSuspenseBoundary);
        if (boundary.byteSize > request.progressiveChunkSize) return boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), flushSubtree(request, destination, segment, hoistableState), destination.push(endSuspenseBoundary);
        hoistableState && (segment = boundary.contentState, segment.styles.forEach(hoistStyleQueueDependency, hoistableState), segment.stylesheets.forEach(hoistStylesheetDependency, hoistableState));
        request.renderState.generateStaticMarkup || destination.push(startCompletedSuspenseBoundary);
        segment = boundary.completedSegments;
        if (1 !== segment.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        flushSegment(request, destination, segment[0], hoistableState);
        request = request.renderState.generateStaticMarkup ? !0 : destination.push(endSuspenseBoundary);
        return request;
    }
    function flushSegmentContainer(request, destination, segment, hoistableState) {
        writeStartSegment(destination, request.renderState, segment.parentFormatContext, segment.id);
        flushSegment(request, destination, segment, hoistableState);
        return writeEndSegment(destination, segment.parentFormatContext);
    }
    function flushCompletedBoundary(request, destination, boundary) {
        for(var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++)flushPartiallyCompletedSegment(request, destination, boundary, completedSegments[i]);
        completedSegments.length = 0;
        writeHoistablesForBoundary(destination, boundary.contentState, request.renderState);
        completedSegments = request.resumableState;
        request = request.renderState;
        i = boundary.rootSegmentID;
        boundary = boundary.contentState;
        var requiresStyleInsertion = request.stylesToHoist;
        request.stylesToHoist = !1;
        destination.push(request.startInlineScript);
        requiresStyleInsertion ? (completedSegments.instructions & SentCompleteBoundaryFunction) === NothingSent ? (completedSegments.instructions = completedSegments.instructions | SentStyleInsertionFunction | SentCompleteBoundaryFunction, destination.push(completeBoundaryWithStylesScript1FullBoth)) : (completedSegments.instructions & SentStyleInsertionFunction) === NothingSent ? (completedSegments.instructions |= SentStyleInsertionFunction, destination.push(completeBoundaryWithStylesScript1FullPartial)) : destination.push(completeBoundaryWithStylesScript1Partial) : (completedSegments.instructions & SentCompleteBoundaryFunction) === NothingSent ? (completedSegments.instructions |= SentCompleteBoundaryFunction, destination.push(completeBoundaryScript1Full)) : destination.push(completeBoundaryScript1Partial);
        completedSegments = i.toString(16);
        destination.push(request.boundaryPrefix);
        destination.push(completedSegments);
        destination.push(completeBoundaryScript2);
        destination.push(request.segmentPrefix);
        destination.push(completedSegments);
        requiresStyleInsertion ? (destination.push(completeBoundaryScript3a), writeStyleResourceDependenciesInJS(destination, boundary)) : destination.push(completeBoundaryScript3b);
        boundary = destination.push(completeBoundaryScriptEnd);
        return writeBootstrap(destination, request) && boundary;
    }
    function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
        if (segment.status === FLUSHED) return !0;
        var hoistableState = boundary.contentState, segmentID = segment.id;
        if (-1 === segmentID) {
            if (-1 === (segment.id = boundary.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
            return flushSegmentContainer(request, destination, segment, hoistableState);
        }
        if (segmentID === boundary.rootSegmentID) return flushSegmentContainer(request, destination, segment, hoistableState);
        flushSegmentContainer(request, destination, segment, hoistableState);
        boundary = request.resumableState;
        request = request.renderState;
        destination.push(request.startInlineScript);
        (boundary.instructions & SentCompleteSegmentFunction) === NothingSent ? (boundary.instructions |= SentCompleteSegmentFunction, destination.push(completeSegmentScript1Full)) : destination.push(completeSegmentScript1Partial);
        destination.push(request.segmentPrefix);
        segmentID = segmentID.toString(16);
        destination.push(segmentID);
        destination.push(completeSegmentScript2);
        destination.push(request.placeholderPrefix);
        destination.push(segmentID);
        destination = destination.push(completeSegmentScriptEnd);
        return destination;
    }
    function flushCompletedQueues(request, destination) {
        try {
            if (!(0 < request.pendingRootTasks)) {
                var i, completedRootSegment = request.completedRootSegment;
                if (null !== completedRootSegment) {
                    if (completedRootSegment.status === POSTPONED) return;
                    var renderState = request.renderState, htmlChunks = renderState.htmlChunks, headChunks = renderState.headChunks, i$jscomp$0;
                    if (htmlChunks) {
                        for(i$jscomp$0 = 0; i$jscomp$0 < htmlChunks.length; i$jscomp$0++)destination.push(htmlChunks[i$jscomp$0]);
                        if (headChunks) for(i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)destination.push(headChunks[i$jscomp$0]);
                        else {
                            var chunk = startChunkForTag("head");
                            destination.push(chunk);
                            destination.push(endOfStartTag);
                        }
                    } else if (headChunks) for(i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)destination.push(headChunks[i$jscomp$0]);
                    var charsetChunks = renderState.charsetChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < charsetChunks.length; i$jscomp$0++)destination.push(charsetChunks[i$jscomp$0]);
                    charsetChunks.length = 0;
                    renderState.preconnects.forEach(flushResource, destination);
                    renderState.preconnects.clear();
                    var viewportChunks = renderState.viewportChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < viewportChunks.length; i$jscomp$0++)destination.push(viewportChunks[i$jscomp$0]);
                    viewportChunks.length = 0;
                    renderState.fontPreloads.forEach(flushResource, destination);
                    renderState.fontPreloads.clear();
                    renderState.highImagePreloads.forEach(flushResource, destination);
                    renderState.highImagePreloads.clear();
                    renderState.styles.forEach(flushStylesInPreamble, destination);
                    var importMapChunks = renderState.importMapChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < importMapChunks.length; i$jscomp$0++)destination.push(importMapChunks[i$jscomp$0]);
                    importMapChunks.length = 0;
                    renderState.bootstrapScripts.forEach(flushResource, destination);
                    renderState.scripts.forEach(flushResource, destination);
                    renderState.scripts.clear();
                    renderState.bulkPreloads.forEach(flushResource, destination);
                    renderState.bulkPreloads.clear();
                    var hoistableChunks = renderState.hoistableChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < hoistableChunks.length; i$jscomp$0++)destination.push(hoistableChunks[i$jscomp$0]);
                    hoistableChunks.length = 0;
                    if (htmlChunks && null === headChunks) {
                        var chunk$jscomp$0 = endChunkForTag("head");
                        destination.push(chunk$jscomp$0);
                    }
                    flushSegment(request, destination, completedRootSegment, null);
                    request.completedRootSegment = null;
                    writeBootstrap(destination, request.renderState);
                }
                var renderState$jscomp$0 = request.renderState;
                completedRootSegment = 0;
                var viewportChunks$jscomp$0 = renderState$jscomp$0.viewportChunks;
                for(completedRootSegment = 0; completedRootSegment < viewportChunks$jscomp$0.length; completedRootSegment++)destination.push(viewportChunks$jscomp$0[completedRootSegment]);
                viewportChunks$jscomp$0.length = 0;
                renderState$jscomp$0.preconnects.forEach(flushResource, destination);
                renderState$jscomp$0.preconnects.clear();
                renderState$jscomp$0.fontPreloads.forEach(flushResource, destination);
                renderState$jscomp$0.fontPreloads.clear();
                renderState$jscomp$0.highImagePreloads.forEach(flushResource, destination);
                renderState$jscomp$0.highImagePreloads.clear();
                renderState$jscomp$0.styles.forEach(preloadLateStyles, destination);
                renderState$jscomp$0.scripts.forEach(flushResource, destination);
                renderState$jscomp$0.scripts.clear();
                renderState$jscomp$0.bulkPreloads.forEach(flushResource, destination);
                renderState$jscomp$0.bulkPreloads.clear();
                var hoistableChunks$jscomp$0 = renderState$jscomp$0.hoistableChunks;
                for(completedRootSegment = 0; completedRootSegment < hoistableChunks$jscomp$0.length; completedRootSegment++)destination.push(hoistableChunks$jscomp$0[completedRootSegment]);
                hoistableChunks$jscomp$0.length = 0;
                var clientRenderedBoundaries = request.clientRenderedBoundaries;
                for(i = 0; i < clientRenderedBoundaries.length; i++){
                    var boundary = clientRenderedBoundaries[i];
                    renderState$jscomp$0 = destination;
                    var resumableState = request.resumableState, renderState$jscomp$1 = request.renderState, id = boundary.rootSegmentID, errorDigest = boundary.errorDigest, errorMessage = boundary.errorMessage, errorStack = boundary.errorStack, errorComponentStack = boundary.errorComponentStack;
                    renderState$jscomp$0.push(renderState$jscomp$1.startInlineScript);
                    (resumableState.instructions & SentClientRenderFunction) === NothingSent ? (resumableState.instructions |= SentClientRenderFunction, renderState$jscomp$0.push(clientRenderScript1Full)) : renderState$jscomp$0.push(clientRenderScript1Partial);
                    renderState$jscomp$0.push(renderState$jscomp$1.boundaryPrefix);
                    var chunk$jscomp$1 = id.toString(16);
                    renderState$jscomp$0.push(chunk$jscomp$1);
                    renderState$jscomp$0.push(clientRenderScript1A);
                    if (errorDigest || errorMessage || errorStack || errorComponentStack) {
                        renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial);
                        var chunk$jscomp$2 = escapeJSStringsForInstructionScripts(errorDigest || "");
                        renderState$jscomp$0.push(chunk$jscomp$2);
                    }
                    if (errorMessage || errorStack || errorComponentStack) {
                        renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial);
                        var chunk$jscomp$3 = escapeJSStringsForInstructionScripts(errorMessage || "");
                        renderState$jscomp$0.push(chunk$jscomp$3);
                    }
                    if (errorStack || errorComponentStack) {
                        renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial);
                        var chunk$jscomp$4 = escapeJSStringsForInstructionScripts(errorStack || "");
                        renderState$jscomp$0.push(chunk$jscomp$4);
                    }
                    if (errorComponentStack) {
                        renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial);
                        var chunk$jscomp$5 = escapeJSStringsForInstructionScripts(errorComponentStack);
                        renderState$jscomp$0.push(chunk$jscomp$5);
                    }
                    var JSCompiler_inline_result = renderState$jscomp$0.push(clientRenderScriptEnd);
                    if (!JSCompiler_inline_result) {
                        request.destination = null;
                        i++;
                        clientRenderedBoundaries.splice(0, i);
                        return;
                    }
                }
                clientRenderedBoundaries.splice(0, i);
                var completedBoundaries = request.completedBoundaries;
                for(i = 0; i < completedBoundaries.length; i++)if (!flushCompletedBoundary(request, destination, completedBoundaries[i])) {
                    request.destination = null;
                    i++;
                    completedBoundaries.splice(0, i);
                    return;
                }
                completedBoundaries.splice(0, i);
                var partialBoundaries = request.partialBoundaries;
                for(i = 0; i < partialBoundaries.length; i++){
                    a: {
                        clientRenderedBoundaries = request;
                        boundary = destination;
                        var boundary$jscomp$0 = partialBoundaries[i], completedSegments = boundary$jscomp$0.completedSegments;
                        for(JSCompiler_inline_result = 0; JSCompiler_inline_result < completedSegments.length; JSCompiler_inline_result++)if (!flushPartiallyCompletedSegment(clientRenderedBoundaries, boundary, boundary$jscomp$0, completedSegments[JSCompiler_inline_result])) {
                            JSCompiler_inline_result++;
                            completedSegments.splice(0, JSCompiler_inline_result);
                            var JSCompiler_inline_result$jscomp$0 = !1;
                            break a;
                        }
                        completedSegments.splice(0, JSCompiler_inline_result);
                        JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary(boundary, boundary$jscomp$0.contentState, clientRenderedBoundaries.renderState);
                    }
                    if (!JSCompiler_inline_result$jscomp$0) {
                        request.destination = null;
                        i++;
                        partialBoundaries.splice(0, i);
                        return;
                    }
                }
                partialBoundaries.splice(0, i);
                var largeBoundaries = request.completedBoundaries;
                for(i = 0; i < largeBoundaries.length; i++)if (!flushCompletedBoundary(request, destination, largeBoundaries[i])) {
                    request.destination = null;
                    i++;
                    largeBoundaries.splice(0, i);
                    return;
                }
                largeBoundaries.splice(0, i);
            }
        } finally{
            0 === request.allPendingTasks && 0 === request.pingedTasks.length && 0 === request.clientRenderedBoundaries.length && 0 === request.completedBoundaries.length && (request.flushScheduled = !1, i = request.resumableState, i.hasBody && (partialBoundaries = endChunkForTag("body"), destination.push(partialBoundaries)), i.hasHtml && (i = endChunkForTag("html"), destination.push(i)), 0 !== request.abortableTasks.size && console.error("There was still abortable task at the root when we closed. This is a bug in React."), request.status = CLOSED, destination.push(null), request.destination = null);
        }
    }
    function startWork(request) {
        request.flushScheduled = null !== request.destination;
        performWork(request);
        10 === request.status && (request.status = 11);
        null === request.trackedPostpones && safelyEmitEarlyPreloads(request, 0 === request.pendingRootTasks);
    }
    function enqueueFlush(request) {
        if (!1 === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination) {
            request.flushScheduled = !0;
            var destination = request.destination;
            destination ? flushCompletedQueues(request, destination) : request.flushScheduled = !1;
        }
    }
    function startFlowing(request, destination) {
        if (13 === request.status) request.status = CLOSED, destination.destroy(request.fatalError);
        else if (request.status !== CLOSED && null === request.destination) {
            request.destination = destination;
            try {
                flushCompletedQueues(request, destination);
            } catch (error) {
                logRecoverableError(request, error, {}), fatalError(request, error);
            }
        }
    }
    function abort(request, reason) {
        if (11 === request.status || 10 === request.status) request.status = 12;
        try {
            var abortableTasks = request.abortableTasks;
            if (0 < abortableTasks.size) {
                var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason;
                request.fatalError = error;
                abortableTasks.forEach(function(task) {
                    return abortTask(task, request, error);
                });
                abortableTasks.clear();
            }
            null !== request.destination && flushCompletedQueues(request, request.destination);
        } catch (error$4) {
            logRecoverableError(request, error$4, {}), fatalError(request, error$4);
        }
    }
    function onError() {}
    function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
        var didFatal = !1, fatalError = null, result = "", readyToStream = !1;
        options = createResumableState(options ? options.identifierPrefix : void 0);
        children = createRequest(children, options, createRenderState(options, generateStaticMarkup), createFormatContext(ROOT_HTML_MODE, null, 0), Infinity, onError, void 0, function() {
            readyToStream = !0;
        }, void 0, void 0, void 0);
        startWork(children);
        abort(children, abortReason);
        startFlowing(children, {
            push: function(chunk) {
                null !== chunk && (result += chunk);
                return !0;
            },
            destroy: function(error) {
                didFatal = !0;
                fatalError = error;
            }
        });
        if (didFatal && fatalError !== abortReason) throw fatalError;
        if (!readyToStream) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        return result;
    }
    var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), ReactDOM = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_SCOPE_TYPE = Symbol.for("react.scope"), REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden"), REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, isArrayImpl = Array.isArray, jsxPropsParents = new WeakMap(), jsxChildrenParents = new WeakMap(), CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference"), assign = Object.assign, hasOwnProperty = Object.prototype.hasOwnProperty, VALID_ATTRIBUTE_NAME_REGEX = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), illegalAttributeNameCache = {}, validatedAttributeNameCache = {}, unitlessNumbers = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), aliases = new Map([
        [
            "acceptCharset",
            "accept-charset"
        ],
        [
            "htmlFor",
            "for"
        ],
        [
            "httpEquiv",
            "http-equiv"
        ],
        [
            "crossOrigin",
            "crossorigin"
        ],
        [
            "accentHeight",
            "accent-height"
        ],
        [
            "alignmentBaseline",
            "alignment-baseline"
        ],
        [
            "arabicForm",
            "arabic-form"
        ],
        [
            "baselineShift",
            "baseline-shift"
        ],
        [
            "capHeight",
            "cap-height"
        ],
        [
            "clipPath",
            "clip-path"
        ],
        [
            "clipRule",
            "clip-rule"
        ],
        [
            "colorInterpolation",
            "color-interpolation"
        ],
        [
            "colorInterpolationFilters",
            "color-interpolation-filters"
        ],
        [
            "colorProfile",
            "color-profile"
        ],
        [
            "colorRendering",
            "color-rendering"
        ],
        [
            "dominantBaseline",
            "dominant-baseline"
        ],
        [
            "enableBackground",
            "enable-background"
        ],
        [
            "fillOpacity",
            "fill-opacity"
        ],
        [
            "fillRule",
            "fill-rule"
        ],
        [
            "floodColor",
            "flood-color"
        ],
        [
            "floodOpacity",
            "flood-opacity"
        ],
        [
            "fontFamily",
            "font-family"
        ],
        [
            "fontSize",
            "font-size"
        ],
        [
            "fontSizeAdjust",
            "font-size-adjust"
        ],
        [
            "fontStretch",
            "font-stretch"
        ],
        [
            "fontStyle",
            "font-style"
        ],
        [
            "fontVariant",
            "font-variant"
        ],
        [
            "fontWeight",
            "font-weight"
        ],
        [
            "glyphName",
            "glyph-name"
        ],
        [
            "glyphOrientationHorizontal",
            "glyph-orientation-horizontal"
        ],
        [
            "glyphOrientationVertical",
            "glyph-orientation-vertical"
        ],
        [
            "horizAdvX",
            "horiz-adv-x"
        ],
        [
            "horizOriginX",
            "horiz-origin-x"
        ],
        [
            "imageRendering",
            "image-rendering"
        ],
        [
            "letterSpacing",
            "letter-spacing"
        ],
        [
            "lightingColor",
            "lighting-color"
        ],
        [
            "markerEnd",
            "marker-end"
        ],
        [
            "markerMid",
            "marker-mid"
        ],
        [
            "markerStart",
            "marker-start"
        ],
        [
            "overlinePosition",
            "overline-position"
        ],
        [
            "overlineThickness",
            "overline-thickness"
        ],
        [
            "paintOrder",
            "paint-order"
        ],
        [
            "panose-1",
            "panose-1"
        ],
        [
            "pointerEvents",
            "pointer-events"
        ],
        [
            "renderingIntent",
            "rendering-intent"
        ],
        [
            "shapeRendering",
            "shape-rendering"
        ],
        [
            "stopColor",
            "stop-color"
        ],
        [
            "stopOpacity",
            "stop-opacity"
        ],
        [
            "strikethroughPosition",
            "strikethrough-position"
        ],
        [
            "strikethroughThickness",
            "strikethrough-thickness"
        ],
        [
            "strokeDasharray",
            "stroke-dasharray"
        ],
        [
            "strokeDashoffset",
            "stroke-dashoffset"
        ],
        [
            "strokeLinecap",
            "stroke-linecap"
        ],
        [
            "strokeLinejoin",
            "stroke-linejoin"
        ],
        [
            "strokeMiterlimit",
            "stroke-miterlimit"
        ],
        [
            "strokeOpacity",
            "stroke-opacity"
        ],
        [
            "strokeWidth",
            "stroke-width"
        ],
        [
            "textAnchor",
            "text-anchor"
        ],
        [
            "textDecoration",
            "text-decoration"
        ],
        [
            "textRendering",
            "text-rendering"
        ],
        [
            "transformOrigin",
            "transform-origin"
        ],
        [
            "underlinePosition",
            "underline-position"
        ],
        [
            "underlineThickness",
            "underline-thickness"
        ],
        [
            "unicodeBidi",
            "unicode-bidi"
        ],
        [
            "unicodeRange",
            "unicode-range"
        ],
        [
            "unitsPerEm",
            "units-per-em"
        ],
        [
            "vAlphabetic",
            "v-alphabetic"
        ],
        [
            "vHanging",
            "v-hanging"
        ],
        [
            "vIdeographic",
            "v-ideographic"
        ],
        [
            "vMathematical",
            "v-mathematical"
        ],
        [
            "vectorEffect",
            "vector-effect"
        ],
        [
            "vertAdvY",
            "vert-adv-y"
        ],
        [
            "vertOriginX",
            "vert-origin-x"
        ],
        [
            "vertOriginY",
            "vert-origin-y"
        ],
        [
            "wordSpacing",
            "word-spacing"
        ],
        [
            "writingMode",
            "writing-mode"
        ],
        [
            "xmlnsXlink",
            "xmlns:xlink"
        ],
        [
            "xHeight",
            "x-height"
        ]
    ]), hasReadOnlyValue = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
    }, ariaProperties = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
    }, warnedProperties$1 = {}, rARIA$1 = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rARIACamel$1 = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), didWarnValueNull = !1, possibleStandardNames = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        fetchpriority: "fetchPriority",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        inert: "inert",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        popover: "popover",
        popovertarget: "popoverTarget",
        popovertargetaction: "popoverTargetAction",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        transformorigin: "transformOrigin",
        "transform-origin": "transformOrigin",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
    }, warnedProperties = {}, EVENT_NAME_REGEX = /^on./, INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/, rARIA = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rARIACamel = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/, msPattern$1 = /^-ms-/, hyphenPattern = /-(.)/g, badStyleValueWithSemicolonPattern = /;\s*$/, warnedStyleNames = {}, warnedStyleValues = {}, warnedForNaNValue = !1, warnedForInfinityValue = !1, matchHtmlRegExp = /["'&<>]/, uppercasePattern = /([A-Z])/g, msPattern = /^ms-/, isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, NotPending = Object.freeze({
        pending: !1,
        data: null,
        method: null,
        action: null
    }), previousDispatcher = ReactDOMSharedInternals.d;
    ReactDOMSharedInternals.d = {
        f: previousDispatcher.f,
        r: previousDispatcher.r,
        D: function(href) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if ("string" === typeof href && href) {
                    if (!resumableState.dnsResources.hasOwnProperty(href)) {
                        resumableState.dnsResources[href] = EXISTS;
                        resumableState = renderState.headers;
                        var header, JSCompiler_temp;
                        if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) JSCompiler_temp = (header = "<" + escapeHrefForLinkHeaderURLContext(href) + ">; rel=dns-prefetch", 0 <= (resumableState.remainingCapacity -= header.length + 2));
                        JSCompiler_temp ? (renderState.resets.dns[href] = EXISTS, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (header = [], pushLinkImpl(header, {
                            href: href,
                            rel: "dns-prefetch"
                        }), renderState.preconnects.add(header));
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.D(href);
        },
        C: function(href, crossOrigin) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if ("string" === typeof href && href) {
                    var bucket = "use-credentials" === crossOrigin ? "credentials" : "string" === typeof crossOrigin ? "anonymous" : "default";
                    if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
                        resumableState.connectResources[bucket][href] = EXISTS;
                        resumableState = renderState.headers;
                        var header, JSCompiler_temp;
                        if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) {
                            JSCompiler_temp = "<" + escapeHrefForLinkHeaderURLContext(href) + ">; rel=preconnect";
                            if ("string" === typeof crossOrigin) {
                                var escapedCrossOrigin = escapeStringForLinkHeaderQuotedParamValueContext(crossOrigin, "crossOrigin");
                                JSCompiler_temp += '; crossorigin="' + escapedCrossOrigin + '"';
                            }
                            JSCompiler_temp = (header = JSCompiler_temp, 0 <= (resumableState.remainingCapacity -= header.length + 2));
                        }
                        JSCompiler_temp ? (renderState.resets.connect[bucket][href] = EXISTS, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (bucket = [], pushLinkImpl(bucket, {
                            rel: "preconnect",
                            href: href,
                            crossOrigin: crossOrigin
                        }), renderState.preconnects.add(bucket));
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.C(href, crossOrigin);
        },
        L: function(href, as, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (as && href) {
                    switch(as){
                        case "image":
                            if (options) {
                                var imageSrcSet = options.imageSrcSet;
                                var imageSizes = options.imageSizes;
                                var fetchPriority = options.fetchPriority;
                            }
                            var key = imageSrcSet ? imageSrcSet + "\n" + (imageSizes || "") : href;
                            if (resumableState.imageResources.hasOwnProperty(key)) return;
                            resumableState.imageResources[key] = PRELOAD_NO_CREDS;
                            resumableState = renderState.headers;
                            var header;
                            resumableState && 0 < resumableState.remainingCapacity && "high" === fetchPriority && (header = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key] = PRELOAD_NO_CREDS, resumableState.highImagePreloads && (resumableState.highImagePreloads += ", "), resumableState.highImagePreloads += header) : (resumableState = [], pushLinkImpl(resumableState, assign({
                                rel: "preload",
                                href: imageSrcSet ? void 0 : href,
                                as: as
                            }, options)), "high" === fetchPriority ? renderState.highImagePreloads.add(resumableState) : (renderState.bulkPreloads.add(resumableState), renderState.preloads.images.set(key, resumableState)));
                            break;
                        case "style":
                            if (resumableState.styleResources.hasOwnProperty(href)) return;
                            imageSrcSet = [];
                            pushLinkImpl(imageSrcSet, assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options));
                            resumableState.styleResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            renderState.preloads.stylesheets.set(href, imageSrcSet);
                            renderState.bulkPreloads.add(imageSrcSet);
                            break;
                        case "script":
                            if (resumableState.scriptResources.hasOwnProperty(href)) return;
                            imageSrcSet = [];
                            renderState.preloads.scripts.set(href, imageSrcSet);
                            renderState.bulkPreloads.add(imageSrcSet);
                            pushLinkImpl(imageSrcSet, assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options));
                            resumableState.scriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            break;
                        default:
                            if (resumableState.unknownResources.hasOwnProperty(as)) {
                                if (imageSrcSet = resumableState.unknownResources[as], imageSrcSet.hasOwnProperty(href)) return;
                            } else imageSrcSet = {}, resumableState.unknownResources[as] = imageSrcSet;
                            imageSrcSet[href] = PRELOAD_NO_CREDS;
                            if ((resumableState = renderState.headers) && 0 < resumableState.remainingCapacity && "font" === as && (key = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= key.length + 2))) renderState.resets.font[href] = PRELOAD_NO_CREDS, resumableState.fontPreloads && (resumableState.fontPreloads += ", "), resumableState.fontPreloads += key;
                            else switch(resumableState = [], href = assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options), pushLinkImpl(resumableState, href), as){
                                case "font":
                                    renderState.fontPreloads.add(resumableState);
                                    break;
                                default:
                                    renderState.bulkPreloads.add(resumableState);
                            }
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.L(href, as, options);
        },
        m: function(href, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (href) {
                    var as = options && "string" === typeof options.as ? options.as : "script";
                    switch(as){
                        case "script":
                            if (resumableState.moduleScriptResources.hasOwnProperty(href)) return;
                            as = [];
                            resumableState.moduleScriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            renderState.preloads.moduleScripts.set(href, as);
                            break;
                        default:
                            if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
                                var resources = resumableState.unknownResources[as];
                                if (resources.hasOwnProperty(href)) return;
                            } else resources = {}, resumableState.moduleUnknownResources[as] = resources;
                            as = [];
                            resources[href] = PRELOAD_NO_CREDS;
                    }
                    pushLinkImpl(as, assign({
                        rel: "modulepreload",
                        href: href
                    }, options));
                    renderState.bulkPreloads.add(as);
                    enqueueFlush(request);
                }
            } else previousDispatcher.m(href, options);
        },
        X: function(src, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (src) {
                    var resourceState = resumableState.scriptResources.hasOwnProperty(src) ? resumableState.scriptResources[src] : void 0;
                    resourceState !== EXISTS && (resumableState.scriptResources[src] = EXISTS, options = assign({
                        src: src,
                        async: !0
                    }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.scripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
                }
            } else previousDispatcher.X(src, options);
        },
        S: function(href, precedence, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (href) {
                    precedence = precedence || "default";
                    var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
                    resourceState !== EXISTS && (resumableState.styleResources[href] = EXISTS, styleQueue || (styleQueue = {
                        precedence: escapeTextForBrowser(precedence),
                        rules: [],
                        hrefs: [],
                        sheets: new Map()
                    }, renderState.styles.set(precedence, styleQueue)), precedence = {
                        state: PENDING$1,
                        props: assign({
                            rel: "stylesheet",
                            href: href,
                            "data-precedence": precedence
                        }, options)
                    }, resourceState && (2 === resourceState.length && adoptPreloadCredentials(precedence.props, resourceState), (renderState = renderState.preloads.stylesheets.get(href)) && 0 < renderState.length ? renderState.length = 0 : precedence.state = PRELOADED), styleQueue.sheets.set(href, precedence), enqueueFlush(request));
                }
            } else previousDispatcher.S(href, precedence, options);
        },
        M: function(src, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (src) {
                    var resourceState = resumableState.moduleScriptResources.hasOwnProperty(src) ? resumableState.moduleScriptResources[src] : void 0;
                    resourceState !== EXISTS && (resumableState.moduleScriptResources[src] = EXISTS, options = assign({
                        src: src,
                        type: "module",
                        async: !0
                    }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.moduleScripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
                }
            } else previousDispatcher.M(src, options);
        }
    };
    var NothingSent = 0, SentCompleteSegmentFunction = 1, SentCompleteBoundaryFunction = 2, SentClientRenderFunction = 4, SentStyleInsertionFunction = 8, EXISTS = null, PRELOAD_NO_CREDS = [];
    Object.freeze(PRELOAD_NO_CREDS);
    var scriptRegex = /(<\/|<)(s)(cript)/gi;
    var didWarnForNewBooleanPropsWithEmptyValue = {};
    var ROOT_HTML_MODE = 0, HTML_HTML_MODE = 1, HTML_MODE = 2, SVG_MODE = 3, MATHML_MODE = 4, HTML_TABLE_MODE = 5, HTML_TABLE_BODY_MODE = 6, HTML_TABLE_ROW_MODE = 7, HTML_COLGROUP_MODE = 8, styleNameCache = new Map(), styleAttributeStart = ' style="', styleAssign = ":", styleSeparator = ";", attributeSeparator = " ", attributeAssign = '="', attributeEnd = '"', attributeEmptyString = '=""', actionJavaScriptURL = escapeTextForBrowser("javascript:throw new Error('React form unexpectedly submitted.')"), endOfStartTag = ">", endOfStartTagSelfClosing = "/>", didWarnDefaultInputValue = !1, didWarnDefaultChecked = !1, didWarnDefaultSelectValue = !1, didWarnDefaultTextareaValue = !1, didWarnInvalidOptionChildren = !1, didWarnInvalidOptionInnerHTML = !1, didWarnSelectedSetOnOption = !1, didWarnFormActionType = !1, didWarnFormActionName = !1, didWarnFormActionTarget = !1, didWarnFormActionMethod = !1, formReplayingRuntimeScript = 'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});', styleRegex = /(<\/|<)(s)(tyle)/gi, leadingNewline = "\n", VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, validatedTagCache = new Map(), endTagCache = new Map(), placeholder1 = '<template id="', placeholder2 = '"></template>', startCompletedSuspenseBoundary = "\x3c!--$--\x3e", startPendingSuspenseBoundary1 = '\x3c!--$?--\x3e<template id="', startPendingSuspenseBoundary2 = '"></template>', startClientRenderedSuspenseBoundary = "\x3c!--$!--\x3e", endSuspenseBoundary = "\x3c!--/$--\x3e", clientRenderedSuspenseBoundaryError1 = "<template", clientRenderedSuspenseBoundaryErrorAttrInterstitial = '"', clientRenderedSuspenseBoundaryError1A = ' data-dgst="', clientRenderedSuspenseBoundaryError1B = ' data-msg="', clientRenderedSuspenseBoundaryError1C = ' data-stck="', clientRenderedSuspenseBoundaryError1D = ' data-cstck="', clientRenderedSuspenseBoundaryError2 = "></template>", startSegmentHTML = '<div hidden id="', startSegmentHTML2 = '">', endSegmentHTML = "</div>", startSegmentSVG = '<svg aria-hidden="true" style="display:none" id="', startSegmentSVG2 = '">', endSegmentSVG = "</svg>", startSegmentMathML = '<math aria-hidden="true" style="display:none" id="', startSegmentMathML2 = '">', endSegmentMathML = "</math>", startSegmentTable = '<table hidden id="', startSegmentTable2 = '">', endSegmentTable = "</table>", startSegmentTableBody = '<table hidden><tbody id="', startSegmentTableBody2 = '">', endSegmentTableBody = "</tbody></table>", startSegmentTableRow = '<table hidden><tr id="', startSegmentTableRow2 = '">', endSegmentTableRow = "</tr></table>", startSegmentColGroup = '<table hidden><colgroup id="', startSegmentColGroup2 = '">', endSegmentColGroup = "</colgroup></table>", completeSegmentScript1Full = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("', completeSegmentScript1Partial = '$RS("', completeSegmentScript2 = '","', completeSegmentScriptEnd = '")\x3c/script>', completeBoundaryScript1Full = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("', completeBoundaryScript1Partial = '$RC("', completeBoundaryWithStylesScript1FullBoth = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("', completeBoundaryWithStylesScript1FullPartial = '$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("', completeBoundaryWithStylesScript1Partial = '$RR("', completeBoundaryScript2 = '","', completeBoundaryScript3a = '",', completeBoundaryScript3b = '"', completeBoundaryScriptEnd = ")\x3c/script>", clientRenderScript1Full = '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("', clientRenderScript1Partial = '$RX("', clientRenderScript1A = '"', clientRenderErrorScriptArgInterstitial = ",", clientRenderScriptEnd = ")\x3c/script>", regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g, regexForJSStringsInScripts = /[&><\u2028\u2029]/g, lateStyleTagResourceOpen1 = '<style media="not all" data-precedence="', lateStyleTagResourceOpen2 = '" data-href="', lateStyleTagResourceOpen3 = '">', lateStyleTagTemplateClose = "</style>", currentlyRenderingBoundaryHasStylesToHoist = !1, destinationHasCapacity = !0, stylesheetFlushingQueue = [], styleTagResourceOpen1 = '<style data-precedence="', styleTagResourceOpen2 = '" data-href="', spaceSeparator = " ", styleTagResourceOpen3 = '">', styleTagResourceClose = "</style>", arrayFirstOpenBracket = "[", arraySubsequentOpenBracket = ",[", arrayInterstitial = ",", arrayCloseBracket = "]", PENDING$1 = 0, PRELOADED = 1, PREAMBLE = 2, LATE = 3, regexForHrefInLinkHeaderURLContext = /[<>\r\n]/g, regexForLinkHeaderQuotedParamValueContext = /["';,\r\n]/g, doctypeChunk = "", bind = Function.prototype.bind, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), emptyContextObject = {};
    Object.freeze(emptyContextObject);
    var rendererSigil = {};
    var currentActiveSnapshot = null, didWarnAboutNoopUpdateForComponent = {}, didWarnAboutDeprecatedWillMount = {};
    var didWarnAboutUninitializedState = new Set();
    var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
    var didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
    var didWarnAboutDirectlyAssigningPropsToState = new Set();
    var didWarnAboutUndefinedDerivedState = new Set();
    var didWarnAboutContextTypes$1 = new Set();
    var didWarnAboutChildContextTypes = new Set();
    var didWarnAboutInvalidateContextType = new Set();
    var didWarnOnInvalidCallback = new Set();
    var classComponentUpdater = {
        isMounted: function() {
            return !1;
        },
        enqueueSetState: function(inst, payload, callback) {
            var internals = inst._reactInternals;
            null === internals.queue ? warnNoop(inst, "setState") : (internals.queue.push(payload), void 0 !== callback && null !== callback && warnOnInvalidCallback(callback));
        },
        enqueueReplaceState: function(inst, payload, callback) {
            inst = inst._reactInternals;
            inst.replace = !0;
            inst.queue = [
                payload
            ];
            void 0 !== callback && null !== callback && warnOnInvalidCallback(callback);
        },
        enqueueForceUpdate: function(inst, callback) {
            null === inst._reactInternals.queue ? warnNoop(inst, "forceUpdate") : void 0 !== callback && null !== callback && warnOnInvalidCallback(callback);
        }
    }, emptyTreeContext = {
        id: 1,
        overflow: ""
    }, clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log = Math.log, LN2 = Math.LN2, SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), suspendedThenable = null, objectIs = "function" === typeof Object.is ? Object.is : is, currentlyRenderingComponent = null, currentlyRenderingTask = null, currentlyRenderingRequest = null, currentlyRenderingKeyPath = null, firstWorkInProgressHook = null, workInProgressHook = null, isReRender = !1, didScheduleRenderPhaseUpdate = !1, localIdCounter = 0, actionStateCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, thenableState = null, renderPhaseUpdates = null, numberOfReRenders = 0, isInHookUserCodeInDev = !1, currentHookNameInDev, HooksDispatcher = {
        readContext: readContext,
        use: function(usable) {
            if (null !== usable && "object" === typeof usable) {
                if ("function" === typeof usable.then) return unwrapThenable(usable);
                if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
            }
            throw Error("An unsupported type was passed to use(): " + String(usable));
        },
        useContext: function(context) {
            currentHookNameInDev = "useContext";
            resolveCurrentlyRenderingComponent();
            return context._currentValue2;
        },
        useMemo: useMemo,
        useReducer: useReducer,
        useRef: function(initialValue) {
            currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
            workInProgressHook = createWorkInProgressHook();
            var previousRef = workInProgressHook.memoizedState;
            return null === previousRef ? (initialValue = {
                current: initialValue
            }, Object.seal(initialValue), workInProgressHook.memoizedState = initialValue) : previousRef;
        },
        useState: function(initialState) {
            currentHookNameInDev = "useState";
            return useReducer(basicStateReducer, initialState);
        },
        useInsertionEffect: noop$1,
        useLayoutEffect: noop$1,
        useCallback: function(callback, deps) {
            return useMemo(function() {
                return callback;
            }, deps);
        },
        useImperativeHandle: noop$1,
        useEffect: noop$1,
        useDebugValue: noop$1,
        useDeferredValue: function(value, initialValue) {
            resolveCurrentlyRenderingComponent();
            return void 0 !== initialValue ? initialValue : value;
        },
        useTransition: function() {
            resolveCurrentlyRenderingComponent();
            return [
                !1,
                unsupportedStartTransition
            ];
        },
        useId: function() {
            var treeId = currentlyRenderingTask.treeContext;
            var overflow = treeId.overflow;
            treeId = treeId.id;
            treeId = (treeId & ~(1 << 32 - clz32(treeId) - 1)).toString(32) + overflow;
            var resumableState = currentResumableState;
            if (null === resumableState) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
            overflow = localIdCounter++;
            treeId = ":" + resumableState.idPrefix + "R" + treeId;
            0 < overflow && (treeId += "H" + overflow.toString(32));
            return treeId + ":";
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
            if (void 0 === getServerSnapshot) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
            return getServerSnapshot();
        },
        useCacheRefresh: function() {
            return unsupportedRefresh;
        },
        useMemoCache: function(size) {
            for(var data = Array(size), i = 0; i < size; i++)data[i] = REACT_MEMO_CACHE_SENTINEL;
            return data;
        },
        useHostTransitionStatus: function() {
            resolveCurrentlyRenderingComponent();
            return NotPending;
        },
        useOptimistic: function(passthrough) {
            resolveCurrentlyRenderingComponent();
            return [
                passthrough,
                unsupportedSetOptimisticState
            ];
        }
    };
    HooksDispatcher.useFormState = useActionState;
    HooksDispatcher.useActionState = useActionState;
    var currentResumableState = null, currentTaskInDEV = null, DefaultAsyncDispatcher = {
        getCacheForType: function() {
            throw Error("Not implemented.");
        },
        getOwner: function() {
            return null === currentTaskInDEV ? null : currentTaskInDEV.componentStack;
        }
    }, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var callComponent = {
        "react-stack-bottom-frame": function(Component, props, secondArg) {
            return Component(props, secondArg);
        }
    }, callComponentInDEV = callComponent["react-stack-bottom-frame"].bind(callComponent), callRender = {
        "react-stack-bottom-frame": function(instance) {
            return instance.render();
        }
    }, callRenderInDEV = callRender["react-stack-bottom-frame"].bind(callRender), callLazyInit = {
        "react-stack-bottom-frame": function(lazy) {
            var init = lazy._init;
            return init(lazy._payload);
        }
    }, callLazyInitInDEV = callLazyInit["react-stack-bottom-frame"].bind(callLazyInit), CLIENT_RENDERED = 4, PENDING = 0, COMPLETED = 1, FLUSHED = 2, POSTPONED = 5, CLOSED = 14, currentRequest = null, didWarnAboutBadClass = {}, didWarnAboutContextTypes = {}, didWarnAboutContextTypeOnFunctionComponent = {}, didWarnAboutGetDerivedStateOnFunctionComponent = {}, didWarnAboutReassigningProps = !1, didWarnAboutGenerators = !1, didWarnAboutMaps = !1;
    exports.renderToStaticMarkup = function(children, options) {
        return renderToStringImpl(children, options, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.renderToString = function(children, options) {
        return renderToStringImpl(children, options, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.version = "19.0.0-rc-65e06cb7-20241218";
}();
}}),
"[project]/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server.browser.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*


 JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)

 Copyright (c) 2011 Gary Court
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function styleReplacer(match, prefix, s, suffix) {
        return "" + prefix + ("s" === s ? "\\73 " : "\\53 ") + suffix;
    }
    function scriptReplacer(match, prefix, s, suffix) {
        return "" + prefix + ("s" === s ? "\\u0073" : "\\u0053") + suffix;
    }
    function objectName(object) {
        return Object.prototype.toString.call(object).replace(/^\[object (.*)\]$/, function(m, p0) {
            return p0;
        });
    }
    function describeKeyForErrorMessage(key) {
        var encodedKey = JSON.stringify(key);
        return '"' + key + '"' === encodedKey ? key : encodedKey;
    }
    function describeValueForErrorMessage(value) {
        switch(typeof value){
            case "string":
                return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
            case "object":
                if (isArrayImpl(value)) return "[...]";
                if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
                value = objectName(value);
                return "Object" === value ? "{...}" : value;
            case "function":
                return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
            default:
                return String(value);
        }
    }
    function describeElementType(type) {
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeElementType(type.render);
            case REACT_MEMO_TYPE:
                return describeElementType(type.type);
            case REACT_LAZY_TYPE:
                var payload = type._payload;
                type = type._init;
                try {
                    return describeElementType(type(payload));
                } catch (x) {}
        }
        return "";
    }
    function describeObjectForErrorMessage(objectOrArray, expandedName) {
        var objKind = objectName(objectOrArray);
        if ("Object" !== objKind && "Array" !== objKind) return objKind;
        var start = -1, length = 0;
        if (isArrayImpl(objectOrArray)) if (jsxChildrenParents.has(objectOrArray)) {
            var type = jsxChildrenParents.get(objectOrArray);
            objKind = "<" + describeElementType(type) + ">";
            for(var i = 0; i < objectOrArray.length; i++){
                var value = objectOrArray[i];
                value = "string" === typeof value ? value : "object" === typeof value && null !== value ? "{" + describeObjectForErrorMessage(value) + "}" : "{" + describeValueForErrorMessage(value) + "}";
                "" + i === expandedName ? (start = objKind.length, length = value.length, objKind += value) : objKind = 15 > value.length && 40 > objKind.length + value.length ? objKind + value : objKind + "{...}";
            }
            objKind += "</" + describeElementType(type) + ">";
        } else {
            objKind = "[";
            for(type = 0; type < objectOrArray.length; type++)0 < type && (objKind += ", "), i = objectOrArray[type], i = "object" === typeof i && null !== i ? describeObjectForErrorMessage(i) : describeValueForErrorMessage(i), "" + type === expandedName ? (start = objKind.length, length = i.length, objKind += i) : objKind = 10 > i.length && 40 > objKind.length + i.length ? objKind + i : objKind + "...";
            objKind += "]";
        }
        else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) objKind = "<" + describeElementType(objectOrArray.type) + "/>";
        else {
            if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
            if (jsxPropsParents.has(objectOrArray)) {
                objKind = jsxPropsParents.get(objectOrArray);
                objKind = "<" + (describeElementType(objKind) || "...");
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++){
                    objKind += " ";
                    value = type[i];
                    objKind += describeKeyForErrorMessage(value) + "=";
                    var _value2 = objectOrArray[value];
                    var _substr2 = value === expandedName && "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2);
                    "string" !== typeof _value2 && (_substr2 = "{" + _substr2 + "}");
                    value === expandedName ? (start = objKind.length, length = _substr2.length, objKind += _substr2) : objKind = 10 > _substr2.length && 40 > objKind.length + _substr2.length ? objKind + _substr2 : objKind + "...";
                }
                objKind += ">";
            } else {
                objKind = "{";
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++)0 < i && (objKind += ", "), value = type[i], objKind += describeKeyForErrorMessage(value) + ": ", _value2 = objectOrArray[value], _value2 = "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2), value === expandedName ? (start = objKind.length, length = _value2.length, objKind += _value2) : objKind = 10 > _value2.length && 40 > objKind.length + _value2.length ? objKind + _value2 : objKind + "...";
                objKind += "}";
            }
        }
        return void 0 === expandedName ? objKind : -1 < start && 0 < length ? (objectOrArray = " ".repeat(start) + "^".repeat(length), "\n  " + objKind + "\n  " + objectOrArray) : "\n  " + objKind;
    }
    function murmurhash3_32_gc(key, seed) {
        var remainder = key.length & 3;
        var bytes = key.length - remainder;
        var h1 = seed;
        for(seed = 0; seed < bytes;){
            var k1 = key.charCodeAt(seed) & 255 | (key.charCodeAt(++seed) & 255) << 8 | (key.charCodeAt(++seed) & 255) << 16 | (key.charCodeAt(++seed) & 255) << 24;
            ++seed;
            k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295;
            k1 = k1 << 15 | k1 >>> 17;
            k1 = 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
            h1 ^= k1;
            h1 = h1 << 13 | h1 >>> 19;
            h1 = 5 * (h1 & 65535) + ((5 * (h1 >>> 16) & 65535) << 16) & 4294967295;
            h1 = (h1 & 65535) + 27492 + (((h1 >>> 16) + 58964 & 65535) << 16);
        }
        k1 = 0;
        switch(remainder){
            case 3:
                k1 ^= (key.charCodeAt(seed + 2) & 255) << 16;
            case 2:
                k1 ^= (key.charCodeAt(seed + 1) & 255) << 8;
            case 1:
                k1 ^= key.charCodeAt(seed) & 255, k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295, k1 = k1 << 15 | k1 >>> 17, h1 ^= 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
        }
        h1 ^= key.length;
        h1 ^= h1 >>> 16;
        h1 = 2246822507 * (h1 & 65535) + ((2246822507 * (h1 >>> 16) & 65535) << 16) & 4294967295;
        h1 ^= h1 >>> 13;
        h1 = 3266489909 * (h1 & 65535) + ((3266489909 * (h1 >>> 16) & 65535) << 16) & 4294967295;
        return (h1 ^ h1 >>> 16) >>> 0;
    }
    function scheduleWork(callback) {
        taskQueue.push(callback);
        channel.port2.postMessage(null);
    }
    function handleErrorInNextTick(error) {
        setTimeout(function() {
            throw error;
        });
    }
    function writeChunk(destination, chunk) {
        if (0 !== chunk.byteLength) if (2048 < chunk.byteLength) 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = new Uint8Array(2048), writtenBytes = 0), destination.enqueue(chunk);
        else {
            var allowableBytes = currentView.length - writtenBytes;
            allowableBytes < chunk.byteLength && (0 === allowableBytes ? destination.enqueue(currentView) : (currentView.set(chunk.subarray(0, allowableBytes), writtenBytes), destination.enqueue(currentView), chunk = chunk.subarray(allowableBytes)), currentView = new Uint8Array(2048), writtenBytes = 0);
            currentView.set(chunk, writtenBytes);
            writtenBytes += chunk.byteLength;
        }
    }
    function writeChunkAndReturn(destination, chunk) {
        writeChunk(destination, chunk);
        return !0;
    }
    function completeWriting(destination) {
        currentView && 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = null, writtenBytes = 0);
    }
    function stringToChunk(content) {
        return textEncoder.encode(content);
    }
    function stringToPrecomputedChunk(content) {
        content = textEncoder.encode(content);
        2048 < content.byteLength && console.error("precomputed chunks must be smaller than the view size configured for this host. This is a bug in React.");
        return content;
    }
    function closeWithError(destination, error) {
        "function" === typeof destination.error ? destination.error(error) : destination.close();
    }
    function typeName(value) {
        return "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
    }
    function willCoercionThrow(value) {
        try {
            return testStringCoercion(value), !1;
        } catch (e) {
            return !0;
        }
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkAttributeStringCoercion(value, attributeName) {
        if (willCoercionThrow(value)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", attributeName, typeName(value)), testStringCoercion(value);
    }
    function checkCSSPropertyStringCoercion(value, propName) {
        if (willCoercionThrow(value)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", propName, typeName(value)), testStringCoercion(value);
    }
    function checkHtmlStringCoercion(value) {
        if (willCoercionThrow(value)) return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", typeName(value)), testStringCoercion(value);
    }
    function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return !0;
        if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) return validatedAttributeNameCache[attributeName] = !0;
        illegalAttributeNameCache[attributeName] = !0;
        console.error("Invalid attribute name: `%s`", attributeName);
        return !1;
    }
    function checkControlledValueProps(tagName, props) {
        hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || null == props.value || ("select" === tagName ? console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.") : console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."));
        props.onChange || props.readOnly || props.disabled || null == props.checked || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function validateProperty$1(tagName, name) {
        if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) return !0;
        if (rARIACamel$1.test(name)) {
            tagName = "aria-" + name.slice(4).toLowerCase();
            tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
            if (null == tagName) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name), warnedProperties$1[name] = !0;
            if (name !== tagName) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = !0;
        }
        if (rARIA$1.test(name)) {
            tagName = name.toLowerCase();
            tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
            if (null == tagName) return warnedProperties$1[name] = !0, !1;
            name !== tagName && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = !0);
        }
        return !0;
    }
    function validateProperties$2(type, props) {
        var invalidProps = [], key;
        for(key in props)validateProperty$1(type, key) || invalidProps.push(key);
        props = invalidProps.map(function(prop) {
            return "`" + prop + "`";
        }).join(", ");
        1 === invalidProps.length ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type) : 1 < invalidProps.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type);
    }
    function validateProperty(tagName, name, value, eventRegistry) {
        if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) return !0;
        var lowerCasedName = name.toLowerCase();
        if ("onfocusin" === lowerCasedName || "onfocusout" === lowerCasedName) return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), warnedProperties[name] = !0;
        if ("function" === typeof value && ("form" === tagName && "action" === name || "input" === tagName && "formAction" === name || "button" === tagName && "formAction" === name)) return !0;
        if (null != eventRegistry) {
            tagName = eventRegistry.possibleRegistrationNames;
            if (eventRegistry.registrationNameDependencies.hasOwnProperty(name)) return !0;
            eventRegistry = tagName.hasOwnProperty(lowerCasedName) ? tagName[lowerCasedName] : null;
            if (null != eventRegistry) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", name, eventRegistry), warnedProperties[name] = !0;
            if (EVENT_NAME_REGEX.test(name)) return console.error("Unknown event handler property `%s`. It will be ignored.", name), warnedProperties[name] = !0;
        } else if (EVENT_NAME_REGEX.test(name)) return INVALID_EVENT_NAME_REGEX.test(name) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name), warnedProperties[name] = !0;
        if (rARIA.test(name) || rARIACamel.test(name)) return !0;
        if ("innerhtml" === lowerCasedName) return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), warnedProperties[name] = !0;
        if ("aria" === lowerCasedName) return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), warnedProperties[name] = !0;
        if ("is" === lowerCasedName && null !== value && void 0 !== value && "string" !== typeof value) return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value), warnedProperties[name] = !0;
        if ("number" === typeof value && isNaN(value)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name), warnedProperties[name] = !0;
        if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            if (lowerCasedName = possibleStandardNames[lowerCasedName], lowerCasedName !== name) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", name, lowerCasedName), warnedProperties[name] = !0;
        } else if (name !== lowerCasedName) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName), warnedProperties[name] = !0;
        switch(name){
            case "dangerouslySetInnerHTML":
            case "children":
            case "style":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                return !0;
            case "innerText":
            case "textContent":
                return !0;
        }
        switch(typeof value){
            case "boolean":
                switch(name){
                    case "autoFocus":
                    case "checked":
                    case "multiple":
                    case "muted":
                    case "selected":
                    case "contentEditable":
                    case "spellCheck":
                    case "draggable":
                    case "value":
                    case "autoReverse":
                    case "externalResourcesRequired":
                    case "focusable":
                    case "preserveAlpha":
                    case "allowFullScreen":
                    case "async":
                    case "autoPlay":
                    case "controls":
                    case "default":
                    case "defer":
                    case "disabled":
                    case "disablePictureInPicture":
                    case "disableRemotePlayback":
                    case "formNoValidate":
                    case "hidden":
                    case "loop":
                    case "noModule":
                    case "noValidate":
                    case "open":
                    case "playsInline":
                    case "readOnly":
                    case "required":
                    case "reversed":
                    case "scoped":
                    case "seamless":
                    case "itemScope":
                    case "capture":
                    case "download":
                    case "inert":
                        return !0;
                    default:
                        lowerCasedName = name.toLowerCase().slice(0, 5);
                        if ("data-" === lowerCasedName || "aria-" === lowerCasedName) return !0;
                        value ? console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name) : console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
                        return warnedProperties[name] = !0;
                }
            case "function":
            case "symbol":
                return warnedProperties[name] = !0, !1;
            case "string":
                if ("false" === value || "true" === value) {
                    switch(name){
                        case "checked":
                        case "selected":
                        case "multiple":
                        case "muted":
                        case "allowFullScreen":
                        case "async":
                        case "autoPlay":
                        case "controls":
                        case "default":
                        case "defer":
                        case "disabled":
                        case "disablePictureInPicture":
                        case "disableRemotePlayback":
                        case "formNoValidate":
                        case "hidden":
                        case "loop":
                        case "noModule":
                        case "noValidate":
                        case "open":
                        case "playsInline":
                        case "readOnly":
                        case "required":
                        case "reversed":
                        case "scoped":
                        case "seamless":
                        case "itemScope":
                        case "inert":
                            break;
                        default:
                            return !0;
                    }
                    console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, "false" === value ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
                    warnedProperties[name] = !0;
                }
        }
        return !0;
    }
    function warnUnknownProperties(type, props, eventRegistry) {
        var unknownProps = [], key;
        for(key in props)validateProperty(type, key, props[key], eventRegistry) || unknownProps.push(key);
        props = unknownProps.map(function(prop) {
            return "`" + prop + "`";
        }).join(", ");
        1 === unknownProps.length ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type) : 1 < unknownProps.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type);
    }
    function camelize(string) {
        return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
        });
    }
    function escapeTextForBrowser(text) {
        if ("boolean" === typeof text || "number" === typeof text || "bigint" === typeof text) return "" + text;
        checkHtmlStringCoercion(text);
        text = "" + text;
        var match = matchHtmlRegExp.exec(text);
        if (match) {
            var html = "", index, lastIndex = 0;
            for(index = match.index; index < text.length; index++){
                switch(text.charCodeAt(index)){
                    case 34:
                        match = "&quot;";
                        break;
                    case 38:
                        match = "&amp;";
                        break;
                    case 39:
                        match = "&#x27;";
                        break;
                    case 60:
                        match = "&lt;";
                        break;
                    case 62:
                        match = "&gt;";
                        break;
                    default:
                        continue;
                }
                lastIndex !== index && (html += text.slice(lastIndex, index));
                lastIndex = index + 1;
                html += match;
            }
            text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
        }
        return text;
    }
    function sanitizeURL(url) {
        return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    function escapeEntireInlineScriptContent(scriptText) {
        checkHtmlStringCoercion(scriptText);
        return ("" + scriptText).replace(scriptRegex, scriptReplacer);
    }
    function createRenderState(resumableState, nonce, externalRuntimeConfig, importMap, onHeaders, maxHeadersLength) {
        var inlineScriptWithNonce = void 0 === nonce ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">'), idPrefix = resumableState.idPrefix;
        externalRuntimeConfig = [];
        var bootstrapScriptContent = resumableState.bootstrapScriptContent, bootstrapScripts = resumableState.bootstrapScripts, bootstrapModules = resumableState.bootstrapModules;
        void 0 !== bootstrapScriptContent && externalRuntimeConfig.push(inlineScriptWithNonce, stringToChunk(escapeEntireInlineScriptContent(bootstrapScriptContent)), endInlineScript);
        bootstrapScriptContent = [];
        void 0 !== importMap && (bootstrapScriptContent.push(importMapScriptStart), bootstrapScriptContent.push(stringToChunk(escapeEntireInlineScriptContent(JSON.stringify(importMap)))), bootstrapScriptContent.push(importMapScriptEnd));
        onHeaders && "number" === typeof maxHeadersLength && 0 >= maxHeadersLength && console.error("React expected a positive non-zero `maxHeadersLength` option but found %s instead. When using the `onHeaders` option you may supply an optional `maxHeadersLength` option as well however, when setting this value to zero or less no headers will be captured.", 0 === maxHeadersLength ? "zero" : maxHeadersLength);
        importMap = onHeaders ? {
            preconnects: "",
            fontPreloads: "",
            highImagePreloads: "",
            remainingCapacity: 2 + ("number" === typeof maxHeadersLength ? maxHeadersLength : 2e3)
        } : null;
        onHeaders = {
            placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
            segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
            boundaryPrefix: stringToPrecomputedChunk(idPrefix + "B:"),
            startInlineScript: inlineScriptWithNonce,
            htmlChunks: null,
            headChunks: null,
            externalRuntimeScript: null,
            bootstrapChunks: externalRuntimeConfig,
            importMapChunks: bootstrapScriptContent,
            onHeaders: onHeaders,
            headers: importMap,
            resets: {
                font: {},
                dns: {},
                connect: {
                    default: {},
                    anonymous: {},
                    credentials: {}
                },
                image: {},
                style: {}
            },
            charsetChunks: [],
            viewportChunks: [],
            hoistableChunks: [],
            preconnects: new Set(),
            fontPreloads: new Set(),
            highImagePreloads: new Set(),
            styles: new Map(),
            bootstrapScripts: new Set(),
            scripts: new Set(),
            bulkPreloads: new Set(),
            preloads: {
                images: new Map(),
                stylesheets: new Map(),
                scripts: new Map(),
                moduleScripts: new Map()
            },
            nonce: nonce,
            hoistableState: null,
            stylesToHoist: !1
        };
        if (void 0 !== bootstrapScripts) for(importMap = 0; importMap < bootstrapScripts.length; importMap++){
            maxHeadersLength = bootstrapScripts[importMap];
            bootstrapScriptContent = idPrefix = void 0;
            var props = {
                rel: "preload",
                as: "script",
                fetchPriority: "low",
                nonce: nonce
            };
            "string" === typeof maxHeadersLength ? props.href = inlineScriptWithNonce = maxHeadersLength : (props.href = inlineScriptWithNonce = maxHeadersLength.src, props.integrity = bootstrapScriptContent = "string" === typeof maxHeadersLength.integrity ? maxHeadersLength.integrity : void 0, props.crossOrigin = idPrefix = "string" === typeof maxHeadersLength || null == maxHeadersLength.crossOrigin ? void 0 : "use-credentials" === maxHeadersLength.crossOrigin ? "use-credentials" : "");
            preloadBootstrapScriptOrModule(resumableState, onHeaders, inlineScriptWithNonce, props);
            externalRuntimeConfig.push(startScriptSrc, stringToChunk(escapeTextForBrowser(inlineScriptWithNonce)));
            nonce && externalRuntimeConfig.push(scriptNonce, stringToChunk(escapeTextForBrowser(nonce)));
            "string" === typeof bootstrapScriptContent && externalRuntimeConfig.push(scriptIntegirty, stringToChunk(escapeTextForBrowser(bootstrapScriptContent)));
            "string" === typeof idPrefix && externalRuntimeConfig.push(scriptCrossOrigin, stringToChunk(escapeTextForBrowser(idPrefix)));
            externalRuntimeConfig.push(endAsyncScript);
        }
        if (void 0 !== bootstrapModules) for(bootstrapScripts = 0; bootstrapScripts < bootstrapModules.length; bootstrapScripts++)importMap = bootstrapModules[bootstrapScripts], idPrefix = inlineScriptWithNonce = void 0, bootstrapScriptContent = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: nonce
        }, "string" === typeof importMap ? bootstrapScriptContent.href = maxHeadersLength = importMap : (bootstrapScriptContent.href = maxHeadersLength = importMap.src, bootstrapScriptContent.integrity = idPrefix = "string" === typeof importMap.integrity ? importMap.integrity : void 0, bootstrapScriptContent.crossOrigin = inlineScriptWithNonce = "string" === typeof importMap || null == importMap.crossOrigin ? void 0 : "use-credentials" === importMap.crossOrigin ? "use-credentials" : ""), preloadBootstrapScriptOrModule(resumableState, onHeaders, maxHeadersLength, bootstrapScriptContent), externalRuntimeConfig.push(startModuleSrc, stringToChunk(escapeTextForBrowser(maxHeadersLength))), nonce && externalRuntimeConfig.push(scriptNonce, stringToChunk(escapeTextForBrowser(nonce))), "string" === typeof idPrefix && externalRuntimeConfig.push(scriptIntegirty, stringToChunk(escapeTextForBrowser(idPrefix))), "string" === typeof inlineScriptWithNonce && externalRuntimeConfig.push(scriptCrossOrigin, stringToChunk(escapeTextForBrowser(inlineScriptWithNonce))), externalRuntimeConfig.push(endAsyncScript);
        return onHeaders;
    }
    function createResumableState(identifierPrefix, externalRuntimeConfig, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
        return {
            idPrefix: void 0 === identifierPrefix ? "" : identifierPrefix,
            nextFormID: 0,
            streamingFormat: 0,
            bootstrapScriptContent: bootstrapScriptContent,
            bootstrapScripts: bootstrapScripts,
            bootstrapModules: bootstrapModules,
            instructions: NothingSent,
            hasBody: !1,
            hasHtml: !1,
            unknownResources: {},
            dnsResources: {},
            connectResources: {
                default: {},
                anonymous: {},
                credentials: {}
            },
            imageResources: {},
            styleResources: {},
            scriptResources: {},
            moduleUnknownResources: {},
            moduleScriptResources: {}
        };
    }
    function createFormatContext(insertionMode, selectedValue, tagScope) {
        return {
            insertionMode: insertionMode,
            selectedValue: selectedValue,
            tagScope: tagScope
        };
    }
    function createRootFormatContext(namespaceURI) {
        return createFormatContext("http://www.w3.org/2000/svg" === namespaceURI ? SVG_MODE : "http://www.w3.org/1998/Math/MathML" === namespaceURI ? MATHML_MODE : ROOT_HTML_MODE, null, 0);
    }
    function getChildFormatContext(parentContext, type, props) {
        switch(type){
            case "noscript":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope | 1);
            case "select":
                return createFormatContext(HTML_MODE, null != props.value ? props.value : props.defaultValue, parentContext.tagScope);
            case "svg":
                return createFormatContext(SVG_MODE, null, parentContext.tagScope);
            case "picture":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope | 2);
            case "math":
                return createFormatContext(MATHML_MODE, null, parentContext.tagScope);
            case "foreignObject":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope);
            case "table":
                return createFormatContext(HTML_TABLE_MODE, null, parentContext.tagScope);
            case "thead":
            case "tbody":
            case "tfoot":
                return createFormatContext(HTML_TABLE_BODY_MODE, null, parentContext.tagScope);
            case "colgroup":
                return createFormatContext(HTML_COLGROUP_MODE, null, parentContext.tagScope);
            case "tr":
                return createFormatContext(HTML_TABLE_ROW_MODE, null, parentContext.tagScope);
        }
        return parentContext.insertionMode >= HTML_TABLE_MODE ? createFormatContext(HTML_MODE, null, parentContext.tagScope) : parentContext.insertionMode === ROOT_HTML_MODE ? "html" === type ? createFormatContext(HTML_HTML_MODE, null, parentContext.tagScope) : createFormatContext(HTML_MODE, null, parentContext.tagScope) : parentContext.insertionMode === HTML_HTML_MODE ? createFormatContext(HTML_MODE, null, parentContext.tagScope) : parentContext;
    }
    function pushTextInstance(target, text, renderState, textEmbedded) {
        if ("" === text) return textEmbedded;
        textEmbedded && target.push(textSeparator);
        target.push(stringToChunk(escapeTextForBrowser(text)));
        return !0;
    }
    function pushStyleAttribute(target, style) {
        if ("object" !== typeof style) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        var isFirst = !0, styleName;
        for(styleName in style)if (hasOwnProperty.call(style, styleName)) {
            var styleValue = style[styleName];
            if (null != styleValue && "boolean" !== typeof styleValue && "" !== styleValue) {
                if (0 === styleName.indexOf("--")) {
                    var nameChunk = stringToChunk(escapeTextForBrowser(styleName));
                    checkCSSPropertyStringCoercion(styleValue, styleName);
                    styleValue = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
                } else {
                    nameChunk = styleName;
                    var value = styleValue;
                    if (-1 < nameChunk.indexOf("-")) {
                        var name = nameChunk;
                        warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, console.error("Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern$1, "ms-"))));
                    } else if (badVendoredStyleNamePattern.test(nameChunk)) name = nameChunk, warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1)));
                    else if (badStyleValueWithSemicolonPattern.test(value)) {
                        name = nameChunk;
                        var value$jscomp$0 = value;
                        warnedStyleValues.hasOwnProperty(value$jscomp$0) && warnedStyleValues[value$jscomp$0] || (warnedStyleValues[value$jscomp$0] = !0, console.error('Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.', name, value$jscomp$0.replace(badStyleValueWithSemicolonPattern, "")));
                    }
                    "number" === typeof value && (isNaN(value) ? warnedForNaNValue || (warnedForNaNValue = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", nameChunk)) : isFinite(value) || warnedForInfinityValue || (warnedForInfinityValue = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", nameChunk)));
                    nameChunk = styleName;
                    value = styleNameCache.get(nameChunk);
                    void 0 !== value ? nameChunk = value : (value = stringToPrecomputedChunk(escapeTextForBrowser(nameChunk.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-"))), styleNameCache.set(nameChunk, value), nameChunk = value);
                    "number" === typeof styleValue ? styleValue = 0 === styleValue || unitlessNumbers.has(styleName) ? stringToChunk("" + styleValue) : stringToChunk(styleValue + "px") : (checkCSSPropertyStringCoercion(styleValue, styleName), styleValue = stringToChunk(escapeTextForBrowser(("" + styleValue).trim())));
                }
                isFirst ? (isFirst = !1, target.push(styleAttributeStart, nameChunk, styleAssign, styleValue)) : target.push(styleSeparator, nameChunk, styleAssign, styleValue);
            }
        }
        isFirst || target.push(attributeEnd);
    }
    function pushBooleanAttribute(target, name, value) {
        value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeEmptyString);
    }
    function pushStringAttribute(target, name, value) {
        "function" !== typeof value && "symbol" !== typeof value && "boolean" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
    }
    function pushAdditionalFormField(value, key) {
        this.push(startHiddenInputChunk);
        validateAdditionalFormField(value);
        pushStringAttribute(this, "name", key);
        pushStringAttribute(this, "value", value);
        this.push(endOfStartTagSelfClosing);
    }
    function validateAdditionalFormField(value) {
        if ("string" !== typeof value) throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
    }
    function getCustomFormFields(resumableState, formAction) {
        if ("function" === typeof formAction.$$FORM_ACTION) {
            var id = resumableState.nextFormID++;
            resumableState = resumableState.idPrefix + id;
            try {
                var customFields = formAction.$$FORM_ACTION(resumableState);
                if (customFields) {
                    var formData = customFields.data;
                    null != formData && formData.forEach(validateAdditionalFormField);
                }
                return customFields;
            } catch (x) {
                if ("object" === typeof x && null !== x && "function" === typeof x.then) throw x;
                console.error("Failed to serialize an action for progressive enhancement:\n%s", x);
            }
        }
        return null;
    }
    function pushFormActionAttribute(target, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name) {
        var formData = null;
        if ("function" === typeof formAction) {
            null === name || didWarnFormActionName || (didWarnFormActionName = !0, console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'));
            null === formEncType && null === formMethod || didWarnFormActionMethod || (didWarnFormActionMethod = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."));
            null === formTarget || didWarnFormActionTarget || (didWarnFormActionTarget = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
            var customFields = getCustomFormFields(resumableState, formAction);
            null !== customFields ? (name = customFields.name, formAction = customFields.action || "", formEncType = customFields.encType, formMethod = customFields.method, formTarget = customFields.target, formData = customFields.data) : (target.push(attributeSeparator, stringToChunk("formAction"), attributeAssign, actionJavaScriptURL, attributeEnd), formTarget = formMethod = formEncType = formAction = name = null, injectFormReplayingRuntime(resumableState, renderState));
        }
        null != name && pushAttribute(target, "name", name);
        null != formAction && pushAttribute(target, "formAction", formAction);
        null != formEncType && pushAttribute(target, "formEncType", formEncType);
        null != formMethod && pushAttribute(target, "formMethod", formMethod);
        null != formTarget && pushAttribute(target, "formTarget", formTarget);
        return formData;
    }
    function pushAttribute(target, name, value) {
        switch(name){
            case "className":
                pushStringAttribute(target, "class", value);
                break;
            case "tabIndex":
                pushStringAttribute(target, "tabindex", value);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                pushStringAttribute(target, name, value);
                break;
            case "style":
                pushStyleAttribute(target, value);
                break;
            case "src":
            case "href":
                if ("" === value) {
                    "src" === name ? console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name) : console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name);
                    break;
                }
            case "action":
            case "formAction":
                if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
                checkAttributeStringCoercion(value, name);
                value = sanitizeURL("" + value);
                target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "ref":
                break;
            case "autoFocus":
            case "multiple":
            case "muted":
                pushBooleanAttribute(target, name.toLowerCase(), value);
                break;
            case "xlinkHref":
                if ("function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
                checkAttributeStringCoercion(value, name);
                value = sanitizeURL("" + value);
                target.push(attributeSeparator, stringToChunk("xlink:href"), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "inert":
                "" !== value || didWarnForNewBooleanPropsWithEmptyValue[name] || (didWarnForNewBooleanPropsWithEmptyValue[name] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", name));
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeEmptyString);
                break;
            case "capture":
            case "download":
                !0 === value ? target.push(attributeSeparator, stringToChunk(name), attributeEmptyString) : !1 !== value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "rowSpan":
            case "start":
                "function" === typeof value || "symbol" === typeof value || isNaN(value) || target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "xlinkActuate":
                pushStringAttribute(target, "xlink:actuate", value);
                break;
            case "xlinkArcrole":
                pushStringAttribute(target, "xlink:arcrole", value);
                break;
            case "xlinkRole":
                pushStringAttribute(target, "xlink:role", value);
                break;
            case "xlinkShow":
                pushStringAttribute(target, "xlink:show", value);
                break;
            case "xlinkTitle":
                pushStringAttribute(target, "xlink:title", value);
                break;
            case "xlinkType":
                pushStringAttribute(target, "xlink:type", value);
                break;
            case "xmlBase":
                pushStringAttribute(target, "xml:base", value);
                break;
            case "xmlLang":
                pushStringAttribute(target, "xml:lang", value);
                break;
            case "xmlSpace":
                pushStringAttribute(target, "xml:space", value);
                break;
            default:
                if (!(2 < name.length) || "o" !== name[0] && "O" !== name[0] || "n" !== name[1] && "N" !== name[1]) {
                    if (name = aliases.get(name) || name, isAttributeNameSafe(name)) {
                        switch(typeof value){
                            case "function":
                            case "symbol":
                                return;
                            case "boolean":
                                var prefix = name.toLowerCase().slice(0, 5);
                                if ("data-" !== prefix && "aria-" !== prefix) return;
                        }
                        target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                    }
                }
        }
    }
    function pushInnerHTML(target, innerHTML, children) {
        if (null != innerHTML) {
            if (null != children) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof innerHTML || !("__html" in innerHTML)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
            innerHTML = innerHTML.__html;
            null !== innerHTML && void 0 !== innerHTML && (checkHtmlStringCoercion(innerHTML), target.push(stringToChunk("" + innerHTML)));
        }
    }
    function checkSelectProp(props, propName) {
        var value = props[propName];
        null != value && (value = isArrayImpl(value), props.multiple && !value ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName) : !props.multiple && value && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName));
    }
    function flattenOptionChildren(children) {
        var content = "";
        React.Children.forEach(children, function(child) {
            null != child && (content += child, didWarnInvalidOptionChildren || "string" === typeof child || "number" === typeof child || "bigint" === typeof child || (didWarnInvalidOptionChildren = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
        });
        return content;
    }
    function injectFormReplayingRuntime(resumableState, renderState) {
        (resumableState.instructions & 16) === NothingSent && (resumableState.instructions |= 16, renderState.bootstrapChunks.unshift(renderState.startInlineScript, formReplayingRuntimeScript, endInlineScript));
    }
    function pushLinkImpl(target, props) {
        target.push(startChunkForTag("link"));
        for(var propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
    }
    function escapeStyleTextContent(styleText) {
        checkHtmlStringCoercion(styleText);
        return ("" + styleText).replace(styleRegex, styleReplacer);
    }
    function pushSelfClosing(target, props, tag) {
        target.push(startChunkForTag(tag));
        for(var propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
    }
    function pushTitleImpl(target, props) {
        target.push(startChunkForTag("title"));
        var children = null, innerHTML = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    children = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        props = Array.isArray(children) ? 2 > children.length ? children[0] : null : children;
        "function" !== typeof props && "symbol" !== typeof props && null !== props && void 0 !== props && target.push(stringToChunk(escapeTextForBrowser("" + props)));
        pushInnerHTML(target, innerHTML, children);
        target.push(endChunkForTag("title"));
        return null;
    }
    function pushScriptImpl(target, props) {
        target.push(startChunkForTag("script"));
        var children = null, innerHTML = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    children = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        null != children && "string" !== typeof children && (props = "number" === typeof children ? "a number for children" : Array.isArray(children) ? "an array for children" : "something unexpected for children", console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", props));
        pushInnerHTML(target, innerHTML, children);
        "string" === typeof children && target.push(stringToChunk(escapeEntireInlineScriptContent(children)));
        target.push(endChunkForTag("script"));
        return null;
    }
    function pushStartGenericElement(target, props, tag) {
        target.push(startChunkForTag(tag));
        var innerHTML = tag = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    tag = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, tag);
        return "string" === typeof tag ? (target.push(stringToChunk(escapeTextForBrowser(tag))), null) : tag;
    }
    function startChunkForTag(tag) {
        var tagStartChunk = validatedTagCache.get(tag);
        if (void 0 === tagStartChunk) {
            if (!VALID_TAG_REGEX.test(tag)) throw Error("Invalid tag: " + tag);
            tagStartChunk = stringToPrecomputedChunk("<" + tag);
            validatedTagCache.set(tag, tagStartChunk);
        }
        return tagStartChunk;
    }
    function pushStartInstance(target$jscomp$0, type, props, resumableState, renderState, hoistableState, formatContext, textEmbedded, isFallback) {
        validateProperties$2(type, props);
        "input" !== type && "textarea" !== type && "select" !== type || null == props || null !== props.value || didWarnValueNull || (didWarnValueNull = !0, "select" === type && props.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type));
        b: if (-1 === type.indexOf("-")) var JSCompiler_inline_result = !1;
        else switch(type){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                JSCompiler_inline_result = !1;
                break b;
            default:
                JSCompiler_inline_result = !0;
        }
        JSCompiler_inline_result || "string" === typeof props.is || warnUnknownProperties(type, props, null);
        !props.suppressContentEditableWarning && props.contentEditable && null != props.children && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
        formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE && -1 === type.indexOf("-") && type.toLowerCase() !== type && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
        switch(type){
            case "div":
            case "span":
            case "svg":
            case "path":
                break;
            case "a":
                target$jscomp$0.push(startChunkForTag("a"));
                var children = null, innerHTML = null, propKey;
                for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (null != propValue) switch(propKey){
                        case "children":
                            children = propValue;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML = propValue;
                            break;
                        case "href":
                            "" === propValue ? pushStringAttribute(target$jscomp$0, "href", "") : pushAttribute(target$jscomp$0, propKey, propValue);
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey, propValue);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML, children);
                if ("string" === typeof children) {
                    target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children)));
                    var JSCompiler_inline_result$jscomp$0 = null;
                } else JSCompiler_inline_result$jscomp$0 = children;
                return JSCompiler_inline_result$jscomp$0;
            case "g":
            case "p":
            case "li":
                break;
            case "select":
                checkControlledValueProps("select", props);
                checkSelectProp(props, "value");
                checkSelectProp(props, "defaultValue");
                void 0 === props.value || void 0 === props.defaultValue || didWarnDefaultSelectValue || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultSelectValue = !0);
                target$jscomp$0.push(startChunkForTag("select"));
                var children$jscomp$0 = null, innerHTML$jscomp$0 = null, propKey$jscomp$0;
                for(propKey$jscomp$0 in props)if (hasOwnProperty.call(props, propKey$jscomp$0)) {
                    var propValue$jscomp$0 = props[propKey$jscomp$0];
                    if (null != propValue$jscomp$0) switch(propKey$jscomp$0){
                        case "children":
                            children$jscomp$0 = propValue$jscomp$0;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$0 = propValue$jscomp$0;
                            break;
                        case "defaultValue":
                        case "value":
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$0, propValue$jscomp$0);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
                return children$jscomp$0;
            case "option":
                var selectedValue = formatContext.selectedValue;
                target$jscomp$0.push(startChunkForTag("option"));
                var children$jscomp$1 = null, value = null, selected = null, innerHTML$jscomp$1 = null, propKey$jscomp$1;
                for(propKey$jscomp$1 in props)if (hasOwnProperty.call(props, propKey$jscomp$1)) {
                    var propValue$jscomp$1 = props[propKey$jscomp$1];
                    if (null != propValue$jscomp$1) switch(propKey$jscomp$1){
                        case "children":
                            children$jscomp$1 = propValue$jscomp$1;
                            break;
                        case "selected":
                            selected = propValue$jscomp$1;
                            didWarnSelectedSetOnOption || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), didWarnSelectedSetOnOption = !0);
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$1 = propValue$jscomp$1;
                            break;
                        case "value":
                            value = propValue$jscomp$1;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$1, propValue$jscomp$1);
                    }
                }
                if (null != selectedValue) {
                    if (null !== value) {
                        checkAttributeStringCoercion(value, "value");
                        var stringValue = "" + value;
                    } else null === innerHTML$jscomp$1 || didWarnInvalidOptionInnerHTML || (didWarnInvalidOptionInnerHTML = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), stringValue = flattenOptionChildren(children$jscomp$1);
                    if (isArrayImpl(selectedValue)) for(var i = 0; i < selectedValue.length; i++){
                        if (checkAttributeStringCoercion(selectedValue[i], "value"), "" + selectedValue[i] === stringValue) {
                            target$jscomp$0.push(selectedMarkerAttribute);
                            break;
                        }
                    }
                    else checkAttributeStringCoercion(selectedValue, "select.value"), "" + selectedValue === stringValue && target$jscomp$0.push(selectedMarkerAttribute);
                } else selected && target$jscomp$0.push(selectedMarkerAttribute);
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
                return children$jscomp$1;
            case "textarea":
                checkControlledValueProps("textarea", props);
                void 0 === props.value || void 0 === props.defaultValue || didWarnDefaultTextareaValue || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultTextareaValue = !0);
                target$jscomp$0.push(startChunkForTag("textarea"));
                var value$jscomp$0 = null, defaultValue = null, children$jscomp$2 = null, propKey$jscomp$2;
                for(propKey$jscomp$2 in props)if (hasOwnProperty.call(props, propKey$jscomp$2)) {
                    var propValue$jscomp$2 = props[propKey$jscomp$2];
                    if (null != propValue$jscomp$2) switch(propKey$jscomp$2){
                        case "children":
                            children$jscomp$2 = propValue$jscomp$2;
                            break;
                        case "value":
                            value$jscomp$0 = propValue$jscomp$2;
                            break;
                        case "defaultValue":
                            defaultValue = propValue$jscomp$2;
                            break;
                        case "dangerouslySetInnerHTML":
                            throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$2, propValue$jscomp$2);
                    }
                }
                null === value$jscomp$0 && null !== defaultValue && (value$jscomp$0 = defaultValue);
                target$jscomp$0.push(endOfStartTag);
                if (null != children$jscomp$2) {
                    console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
                    if (null != value$jscomp$0) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                    if (isArrayImpl(children$jscomp$2)) {
                        if (1 < children$jscomp$2.length) throw Error("<textarea> can only have at most one child.");
                        checkHtmlStringCoercion(children$jscomp$2[0]);
                        value$jscomp$0 = "" + children$jscomp$2[0];
                    }
                    checkHtmlStringCoercion(children$jscomp$2);
                    value$jscomp$0 = "" + children$jscomp$2;
                }
                "string" === typeof value$jscomp$0 && "\n" === value$jscomp$0[0] && target$jscomp$0.push(leadingNewline);
                null !== value$jscomp$0 && (checkAttributeStringCoercion(value$jscomp$0, "value"), target$jscomp$0.push(stringToChunk(escapeTextForBrowser("" + value$jscomp$0))));
                return null;
            case "input":
                checkControlledValueProps("input", props);
                target$jscomp$0.push(startChunkForTag("input"));
                var name = null, formAction = null, formEncType = null, formMethod = null, formTarget = null, value$jscomp$1 = null, defaultValue$jscomp$0 = null, checked = null, defaultChecked = null, propKey$jscomp$3;
                for(propKey$jscomp$3 in props)if (hasOwnProperty.call(props, propKey$jscomp$3)) {
                    var propValue$jscomp$3 = props[propKey$jscomp$3];
                    if (null != propValue$jscomp$3) switch(propKey$jscomp$3){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                        case "name":
                            name = propValue$jscomp$3;
                            break;
                        case "formAction":
                            formAction = propValue$jscomp$3;
                            break;
                        case "formEncType":
                            formEncType = propValue$jscomp$3;
                            break;
                        case "formMethod":
                            formMethod = propValue$jscomp$3;
                            break;
                        case "formTarget":
                            formTarget = propValue$jscomp$3;
                            break;
                        case "defaultChecked":
                            defaultChecked = propValue$jscomp$3;
                            break;
                        case "defaultValue":
                            defaultValue$jscomp$0 = propValue$jscomp$3;
                            break;
                        case "checked":
                            checked = propValue$jscomp$3;
                            break;
                        case "value":
                            value$jscomp$1 = propValue$jscomp$3;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$3, propValue$jscomp$3);
                    }
                }
                null === formAction || "image" === props.type || "submit" === props.type || didWarnFormActionType || (didWarnFormActionType = !0, console.error('An input can only specify a formAction along with type="submit" or type="image".'));
                var formData = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name);
                null === checked || null === defaultChecked || didWarnDefaultChecked || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultChecked = !0);
                null === value$jscomp$1 || null === defaultValue$jscomp$0 || didWarnDefaultInputValue || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultInputValue = !0);
                null !== checked ? pushBooleanAttribute(target$jscomp$0, "checked", checked) : null !== defaultChecked && pushBooleanAttribute(target$jscomp$0, "checked", defaultChecked);
                null !== value$jscomp$1 ? pushAttribute(target$jscomp$0, "value", value$jscomp$1) : null !== defaultValue$jscomp$0 && pushAttribute(target$jscomp$0, "value", defaultValue$jscomp$0);
                target$jscomp$0.push(endOfStartTagSelfClosing);
                null != formData && formData.forEach(pushAdditionalFormField, target$jscomp$0);
                return null;
            case "button":
                target$jscomp$0.push(startChunkForTag("button"));
                var children$jscomp$3 = null, innerHTML$jscomp$2 = null, name$jscomp$0 = null, formAction$jscomp$0 = null, formEncType$jscomp$0 = null, formMethod$jscomp$0 = null, formTarget$jscomp$0 = null, propKey$jscomp$4;
                for(propKey$jscomp$4 in props)if (hasOwnProperty.call(props, propKey$jscomp$4)) {
                    var propValue$jscomp$4 = props[propKey$jscomp$4];
                    if (null != propValue$jscomp$4) switch(propKey$jscomp$4){
                        case "children":
                            children$jscomp$3 = propValue$jscomp$4;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$2 = propValue$jscomp$4;
                            break;
                        case "name":
                            name$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formAction":
                            formAction$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formEncType":
                            formEncType$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formMethod":
                            formMethod$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formTarget":
                            formTarget$jscomp$0 = propValue$jscomp$4;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$4, propValue$jscomp$4);
                    }
                }
                null === formAction$jscomp$0 || null == props.type || "submit" === props.type || didWarnFormActionType || (didWarnFormActionType = !0, console.error('A button can only specify a formAction along with type="submit" or no type.'));
                var formData$jscomp$0 = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction$jscomp$0, formEncType$jscomp$0, formMethod$jscomp$0, formTarget$jscomp$0, name$jscomp$0);
                target$jscomp$0.push(endOfStartTag);
                null != formData$jscomp$0 && formData$jscomp$0.forEach(pushAdditionalFormField, target$jscomp$0);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
                if ("string" === typeof children$jscomp$3) {
                    target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children$jscomp$3)));
                    var JSCompiler_inline_result$jscomp$1 = null;
                } else JSCompiler_inline_result$jscomp$1 = children$jscomp$3;
                return JSCompiler_inline_result$jscomp$1;
            case "form":
                target$jscomp$0.push(startChunkForTag("form"));
                var children$jscomp$4 = null, innerHTML$jscomp$3 = null, formAction$jscomp$1 = null, formEncType$jscomp$1 = null, formMethod$jscomp$1 = null, formTarget$jscomp$1 = null, propKey$jscomp$5;
                for(propKey$jscomp$5 in props)if (hasOwnProperty.call(props, propKey$jscomp$5)) {
                    var propValue$jscomp$5 = props[propKey$jscomp$5];
                    if (null != propValue$jscomp$5) switch(propKey$jscomp$5){
                        case "children":
                            children$jscomp$4 = propValue$jscomp$5;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$3 = propValue$jscomp$5;
                            break;
                        case "action":
                            formAction$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "encType":
                            formEncType$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "method":
                            formMethod$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "target":
                            formTarget$jscomp$1 = propValue$jscomp$5;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$5, propValue$jscomp$5);
                    }
                }
                var formData$jscomp$1 = null, formActionName = null;
                if ("function" === typeof formAction$jscomp$1) {
                    null === formEncType$jscomp$1 && null === formMethod$jscomp$1 || didWarnFormActionMethod || (didWarnFormActionMethod = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."));
                    null === formTarget$jscomp$1 || didWarnFormActionTarget || (didWarnFormActionTarget = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
                    var customFields = getCustomFormFields(resumableState, formAction$jscomp$1);
                    null !== customFields ? (formAction$jscomp$1 = customFields.action || "", formEncType$jscomp$1 = customFields.encType, formMethod$jscomp$1 = customFields.method, formTarget$jscomp$1 = customFields.target, formData$jscomp$1 = customFields.data, formActionName = customFields.name) : (target$jscomp$0.push(attributeSeparator, stringToChunk("action"), attributeAssign, actionJavaScriptURL, attributeEnd), formTarget$jscomp$1 = formMethod$jscomp$1 = formEncType$jscomp$1 = formAction$jscomp$1 = null, injectFormReplayingRuntime(resumableState, renderState));
                }
                null != formAction$jscomp$1 && pushAttribute(target$jscomp$0, "action", formAction$jscomp$1);
                null != formEncType$jscomp$1 && pushAttribute(target$jscomp$0, "encType", formEncType$jscomp$1);
                null != formMethod$jscomp$1 && pushAttribute(target$jscomp$0, "method", formMethod$jscomp$1);
                null != formTarget$jscomp$1 && pushAttribute(target$jscomp$0, "target", formTarget$jscomp$1);
                target$jscomp$0.push(endOfStartTag);
                null !== formActionName && (target$jscomp$0.push(startHiddenInputChunk), pushStringAttribute(target$jscomp$0, "name", formActionName), target$jscomp$0.push(endOfStartTagSelfClosing), null != formData$jscomp$1 && formData$jscomp$1.forEach(pushAdditionalFormField, target$jscomp$0));
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
                if ("string" === typeof children$jscomp$4) {
                    target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children$jscomp$4)));
                    var JSCompiler_inline_result$jscomp$2 = null;
                } else JSCompiler_inline_result$jscomp$2 = children$jscomp$4;
                return JSCompiler_inline_result$jscomp$2;
            case "menuitem":
                target$jscomp$0.push(startChunkForTag("menuitem"));
                for(var propKey$jscomp$6 in props)if (hasOwnProperty.call(props, propKey$jscomp$6)) {
                    var propValue$jscomp$6 = props[propKey$jscomp$6];
                    if (null != propValue$jscomp$6) switch(propKey$jscomp$6){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$6, propValue$jscomp$6);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                return null;
            case "object":
                target$jscomp$0.push(startChunkForTag("object"));
                var children$jscomp$5 = null, innerHTML$jscomp$4 = null, propKey$jscomp$7;
                for(propKey$jscomp$7 in props)if (hasOwnProperty.call(props, propKey$jscomp$7)) {
                    var propValue$jscomp$7 = props[propKey$jscomp$7];
                    if (null != propValue$jscomp$7) switch(propKey$jscomp$7){
                        case "children":
                            children$jscomp$5 = propValue$jscomp$7;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$4 = propValue$jscomp$7;
                            break;
                        case "data":
                            checkAttributeStringCoercion(propValue$jscomp$7, "data");
                            var sanitizedValue = sanitizeURL("" + propValue$jscomp$7);
                            if ("" === sanitizedValue) {
                                console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', propKey$jscomp$7, propKey$jscomp$7);
                                break;
                            }
                            target$jscomp$0.push(attributeSeparator, stringToChunk("data"), attributeAssign, stringToChunk(escapeTextForBrowser(sanitizedValue)), attributeEnd);
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$7, propValue$jscomp$7);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
                if ("string" === typeof children$jscomp$5) {
                    target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children$jscomp$5)));
                    var JSCompiler_inline_result$jscomp$3 = null;
                } else JSCompiler_inline_result$jscomp$3 = children$jscomp$5;
                return JSCompiler_inline_result$jscomp$3;
            case "title":
                var insertionMode = formatContext.insertionMode, noscriptTagInScope = !!(formatContext.tagScope & 1);
                if (hasOwnProperty.call(props, "children")) {
                    var children$jscomp$6 = props.children, child = Array.isArray(children$jscomp$6) ? 2 > children$jscomp$6.length ? children$jscomp$6[0] : null : children$jscomp$6;
                    Array.isArray(children$jscomp$6) && 1 < children$jscomp$6.length ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be commong to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", children$jscomp$6.length) : "function" === typeof child || "symbol" === typeof child ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", "function" === typeof child ? "a Function" : "a Sybmol") : child && child.toString === ({}).toString && (null != child.$$typeof ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."));
                }
                if (insertionMode === SVG_MODE || noscriptTagInScope || null != props.itemProp) var JSCompiler_inline_result$jscomp$4 = pushTitleImpl(target$jscomp$0, props);
                else isFallback ? JSCompiler_inline_result$jscomp$4 = null : (pushTitleImpl(renderState.hoistableChunks, props), JSCompiler_inline_result$jscomp$4 = void 0);
                return JSCompiler_inline_result$jscomp$4;
            case "link":
                var rel = props.rel, href = props.href, precedence = props.precedence;
                if (formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp || "string" !== typeof rel || "string" !== typeof href || "" === href) {
                    "stylesheet" === rel && "string" === typeof props.precedence && ("string" === typeof href && href || console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.', null === href ? "`null`" : void 0 === href ? "`undefined`" : "" === href ? "an empty string" : 'something with type "' + typeof href + '"'));
                    pushLinkImpl(target$jscomp$0, props);
                    var JSCompiler_inline_result$jscomp$5 = null;
                } else if ("stylesheet" === props.rel) if ("string" !== typeof precedence || null != props.disabled || props.onLoad || props.onError) {
                    if ("string" === typeof precedence) {
                        if (null != props.disabled) console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.');
                        else if (props.onLoad || props.onError) {
                            var propDescription = props.onLoad && props.onError ? "`onLoad` and `onError` props" : props.onLoad ? "`onLoad` prop" : "`onError` prop";
                            console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.', propDescription, propDescription);
                        }
                    }
                    JSCompiler_inline_result$jscomp$5 = pushLinkImpl(target$jscomp$0, props);
                } else {
                    var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
                    if (resourceState !== EXISTS) {
                        resumableState.styleResources[href] = EXISTS;
                        styleQueue || (styleQueue = {
                            precedence: stringToChunk(escapeTextForBrowser(precedence)),
                            rules: [],
                            hrefs: [],
                            sheets: new Map()
                        }, renderState.styles.set(precedence, styleQueue));
                        var resource = {
                            state: PENDING$1,
                            props: assign({}, props, {
                                "data-precedence": props.precedence,
                                precedence: null
                            })
                        };
                        if (resourceState) {
                            2 === resourceState.length && adoptPreloadCredentials(resource.props, resourceState);
                            var preloadResource = renderState.preloads.stylesheets.get(href);
                            preloadResource && 0 < preloadResource.length ? preloadResource.length = 0 : resource.state = PRELOADED;
                        }
                        styleQueue.sheets.set(href, resource);
                        hoistableState && hoistableState.stylesheets.add(resource);
                    } else if (styleQueue) {
                        var _resource = styleQueue.sheets.get(href);
                        _resource && hoistableState && hoistableState.stylesheets.add(_resource);
                    }
                    textEmbedded && target$jscomp$0.push(textSeparator);
                    JSCompiler_inline_result$jscomp$5 = null;
                }
                else props.onLoad || props.onError ? JSCompiler_inline_result$jscomp$5 = pushLinkImpl(target$jscomp$0, props) : (textEmbedded && target$jscomp$0.push(textSeparator), JSCompiler_inline_result$jscomp$5 = isFallback ? null : pushLinkImpl(renderState.hoistableChunks, props));
                return JSCompiler_inline_result$jscomp$5;
            case "script":
                var asyncProp = props.async;
                if ("string" !== typeof props.src || !props.src || !asyncProp || "function" === typeof asyncProp || "symbol" === typeof asyncProp || props.onLoad || props.onError || formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp) var JSCompiler_inline_result$jscomp$6 = pushScriptImpl(target$jscomp$0, props);
                else {
                    var key = props.src;
                    if ("module" === props.type) {
                        var resources = resumableState.moduleScriptResources;
                        var preloads = renderState.preloads.moduleScripts;
                    } else resources = resumableState.scriptResources, preloads = renderState.preloads.scripts;
                    var resourceState$jscomp$0 = resources.hasOwnProperty(key) ? resources[key] : void 0;
                    if (resourceState$jscomp$0 !== EXISTS) {
                        resources[key] = EXISTS;
                        var scriptProps = props;
                        if (resourceState$jscomp$0) {
                            2 === resourceState$jscomp$0.length && (scriptProps = assign({}, props), adoptPreloadCredentials(scriptProps, resourceState$jscomp$0));
                            var preloadResource$jscomp$0 = preloads.get(key);
                            preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
                        }
                        var resource$jscomp$0 = [];
                        renderState.scripts.add(resource$jscomp$0);
                        pushScriptImpl(resource$jscomp$0, scriptProps);
                    }
                    textEmbedded && target$jscomp$0.push(textSeparator);
                    JSCompiler_inline_result$jscomp$6 = null;
                }
                return JSCompiler_inline_result$jscomp$6;
            case "style":
                var insertionMode$jscomp$0 = formatContext.insertionMode, noscriptTagInScope$jscomp$0 = !!(formatContext.tagScope & 1);
                if (hasOwnProperty.call(props, "children")) {
                    var children$jscomp$7 = props.children, child$jscomp$0 = Array.isArray(children$jscomp$7) ? 2 > children$jscomp$7.length ? children$jscomp$7[0] : null : children$jscomp$7;
                    ("function" === typeof child$jscomp$0 || "symbol" === typeof child$jscomp$0 || Array.isArray(child$jscomp$0)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", "function" === typeof child$jscomp$0 ? "a Function" : "symbol" === typeof child$jscomp$0 ? "a Sybmol" : "an Array");
                }
                var precedence$jscomp$0 = props.precedence, href$jscomp$0 = props.href;
                if (insertionMode$jscomp$0 === SVG_MODE || noscriptTagInScope$jscomp$0 || null != props.itemProp || "string" !== typeof precedence$jscomp$0 || "string" !== typeof href$jscomp$0 || "" === href$jscomp$0) {
                    target$jscomp$0.push(startChunkForTag("style"));
                    var children$jscomp$8 = null, innerHTML$jscomp$5 = null, propKey$jscomp$8;
                    for(propKey$jscomp$8 in props)if (hasOwnProperty.call(props, propKey$jscomp$8)) {
                        var propValue$jscomp$8 = props[propKey$jscomp$8];
                        if (null != propValue$jscomp$8) switch(propKey$jscomp$8){
                            case "children":
                                children$jscomp$8 = propValue$jscomp$8;
                                break;
                            case "dangerouslySetInnerHTML":
                                innerHTML$jscomp$5 = propValue$jscomp$8;
                                break;
                            default:
                                pushAttribute(target$jscomp$0, propKey$jscomp$8, propValue$jscomp$8);
                        }
                    }
                    target$jscomp$0.push(endOfStartTag);
                    var child$jscomp$1 = Array.isArray(children$jscomp$8) ? 2 > children$jscomp$8.length ? children$jscomp$8[0] : null : children$jscomp$8;
                    "function" !== typeof child$jscomp$1 && "symbol" !== typeof child$jscomp$1 && null !== child$jscomp$1 && void 0 !== child$jscomp$1 && target$jscomp$0.push(stringToChunk(escapeStyleTextContent(child$jscomp$1)));
                    pushInnerHTML(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$8);
                    target$jscomp$0.push(endChunkForTag("style"));
                    var JSCompiler_inline_result$jscomp$7 = null;
                } else {
                    href$jscomp$0.includes(" ") && console.error('React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".', href$jscomp$0);
                    var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0), resourceState$jscomp$1 = resumableState.styleResources.hasOwnProperty(href$jscomp$0) ? resumableState.styleResources[href$jscomp$0] : void 0;
                    if (resourceState$jscomp$1 !== EXISTS) {
                        resumableState.styleResources[href$jscomp$0] = EXISTS;
                        resourceState$jscomp$1 && console.error('React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.', href$jscomp$0);
                        styleQueue$jscomp$0 ? styleQueue$jscomp$0.hrefs.push(stringToChunk(escapeTextForBrowser(href$jscomp$0))) : (styleQueue$jscomp$0 = {
                            precedence: stringToChunk(escapeTextForBrowser(precedence$jscomp$0)),
                            rules: [],
                            hrefs: [
                                stringToChunk(escapeTextForBrowser(href$jscomp$0))
                            ],
                            sheets: new Map()
                        }, renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
                        var target = styleQueue$jscomp$0.rules, children$jscomp$9 = null, innerHTML$jscomp$6 = null, propKey$jscomp$9;
                        for(propKey$jscomp$9 in props)if (hasOwnProperty.call(props, propKey$jscomp$9)) {
                            var propValue$jscomp$9 = props[propKey$jscomp$9];
                            if (null != propValue$jscomp$9) switch(propKey$jscomp$9){
                                case "children":
                                    children$jscomp$9 = propValue$jscomp$9;
                                    break;
                                case "dangerouslySetInnerHTML":
                                    innerHTML$jscomp$6 = propValue$jscomp$9;
                            }
                        }
                        var child$jscomp$2 = Array.isArray(children$jscomp$9) ? 2 > children$jscomp$9.length ? children$jscomp$9[0] : null : children$jscomp$9;
                        "function" !== typeof child$jscomp$2 && "symbol" !== typeof child$jscomp$2 && null !== child$jscomp$2 && void 0 !== child$jscomp$2 && target.push(stringToChunk(escapeStyleTextContent(child$jscomp$2)));
                        pushInnerHTML(target, innerHTML$jscomp$6, children$jscomp$9);
                    }
                    styleQueue$jscomp$0 && hoistableState && hoistableState.styles.add(styleQueue$jscomp$0);
                    textEmbedded && target$jscomp$0.push(textSeparator);
                    JSCompiler_inline_result$jscomp$7 = void 0;
                }
                return JSCompiler_inline_result$jscomp$7;
            case "meta":
                if (formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp) var JSCompiler_inline_result$jscomp$8 = pushSelfClosing(target$jscomp$0, props, "meta");
                else textEmbedded && target$jscomp$0.push(textSeparator), JSCompiler_inline_result$jscomp$8 = isFallback ? null : "string" === typeof props.charSet ? pushSelfClosing(renderState.charsetChunks, props, "meta") : "viewport" === props.name ? pushSelfClosing(renderState.viewportChunks, props, "meta") : pushSelfClosing(renderState.hoistableChunks, props, "meta");
                return JSCompiler_inline_result$jscomp$8;
            case "listing":
            case "pre":
                target$jscomp$0.push(startChunkForTag(type));
                var children$jscomp$10 = null, innerHTML$jscomp$7 = null, propKey$jscomp$10;
                for(propKey$jscomp$10 in props)if (hasOwnProperty.call(props, propKey$jscomp$10)) {
                    var propValue$jscomp$10 = props[propKey$jscomp$10];
                    if (null != propValue$jscomp$10) switch(propKey$jscomp$10){
                        case "children":
                            children$jscomp$10 = propValue$jscomp$10;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$7 = propValue$jscomp$10;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$10, propValue$jscomp$10);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                if (null != innerHTML$jscomp$7) {
                    if (null != children$jscomp$10) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
                    if ("object" !== typeof innerHTML$jscomp$7 || !("__html" in innerHTML$jscomp$7)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
                    var html = innerHTML$jscomp$7.__html;
                    null !== html && void 0 !== html && ("string" === typeof html && 0 < html.length && "\n" === html[0] ? target$jscomp$0.push(leadingNewline, stringToChunk(html)) : (checkHtmlStringCoercion(html), target$jscomp$0.push(stringToChunk("" + html))));
                }
                "string" === typeof children$jscomp$10 && "\n" === children$jscomp$10[0] && target$jscomp$0.push(leadingNewline);
                return children$jscomp$10;
            case "img":
                var src = props.src, srcSet = props.srcSet;
                if (!("lazy" === props.loading || !src && !srcSet || "string" !== typeof src && null != src || "string" !== typeof srcSet && null != srcSet) && "low" !== props.fetchPriority && !1 === !!(formatContext.tagScope & 3) && ("string" !== typeof src || ":" !== src[4] || "d" !== src[0] && "D" !== src[0] || "a" !== src[1] && "A" !== src[1] || "t" !== src[2] && "T" !== src[2] || "a" !== src[3] && "A" !== src[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
                    var sizes = "string" === typeof props.sizes ? props.sizes : void 0, key$jscomp$0 = srcSet ? srcSet + "\n" + (sizes || "") : src, promotablePreloads = renderState.preloads.images, resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
                    if (resource$jscomp$1) {
                        if ("high" === props.fetchPriority || 10 > renderState.highImagePreloads.size) promotablePreloads.delete(key$jscomp$0), renderState.highImagePreloads.add(resource$jscomp$1);
                    } else if (!resumableState.imageResources.hasOwnProperty(key$jscomp$0)) {
                        resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS;
                        var input = props.crossOrigin;
                        var crossOrigin = "string" === typeof input ? "use-credentials" === input ? input : "" : void 0;
                        var headers = renderState.headers, header;
                        headers && 0 < headers.remainingCapacity && ("high" === props.fetchPriority || 500 > headers.highImagePreloads.length) && (header = getPreloadAsHeader(src, "image", {
                            imageSrcSet: props.srcSet,
                            imageSizes: props.sizes,
                            crossOrigin: crossOrigin,
                            integrity: props.integrity,
                            nonce: props.nonce,
                            type: props.type,
                            fetchPriority: props.fetchPriority,
                            referrerPolicy: props.refererPolicy
                        }), 0 <= (headers.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS, headers.highImagePreloads && (headers.highImagePreloads += ", "), headers.highImagePreloads += header) : (resource$jscomp$1 = [], pushLinkImpl(resource$jscomp$1, {
                            rel: "preload",
                            as: "image",
                            href: srcSet ? void 0 : src,
                            imageSrcSet: srcSet,
                            imageSizes: sizes,
                            crossOrigin: crossOrigin,
                            integrity: props.integrity,
                            type: props.type,
                            fetchPriority: props.fetchPriority,
                            referrerPolicy: props.referrerPolicy
                        }), "high" === props.fetchPriority || 10 > renderState.highImagePreloads.size ? renderState.highImagePreloads.add(resource$jscomp$1) : (renderState.bulkPreloads.add(resource$jscomp$1), promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
                    }
                }
                return pushSelfClosing(target$jscomp$0, props, "img");
            case "base":
            case "area":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "param":
            case "source":
            case "track":
            case "wbr":
                return pushSelfClosing(target$jscomp$0, props, type);
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                break;
            case "head":
                if (formatContext.insertionMode < HTML_MODE && null === renderState.headChunks) {
                    renderState.headChunks = [];
                    var JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(renderState.headChunks, props, "head");
                } else JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(target$jscomp$0, props, "head");
                return JSCompiler_inline_result$jscomp$9;
            case "html":
                if (formatContext.insertionMode === ROOT_HTML_MODE && null === renderState.htmlChunks) {
                    renderState.htmlChunks = [
                        doctypeChunk
                    ];
                    var JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(renderState.htmlChunks, props, "html");
                } else JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(target$jscomp$0, props, "html");
                return JSCompiler_inline_result$jscomp$10;
            default:
                if (-1 !== type.indexOf("-")) {
                    target$jscomp$0.push(startChunkForTag(type));
                    var children$jscomp$11 = null, innerHTML$jscomp$8 = null, propKey$jscomp$11;
                    for(propKey$jscomp$11 in props)if (hasOwnProperty.call(props, propKey$jscomp$11)) {
                        var propValue$jscomp$11 = props[propKey$jscomp$11];
                        if (null != propValue$jscomp$11) {
                            var attributeName = propKey$jscomp$11;
                            switch(propKey$jscomp$11){
                                case "children":
                                    children$jscomp$11 = propValue$jscomp$11;
                                    break;
                                case "dangerouslySetInnerHTML":
                                    innerHTML$jscomp$8 = propValue$jscomp$11;
                                    break;
                                case "style":
                                    pushStyleAttribute(target$jscomp$0, propValue$jscomp$11);
                                    break;
                                case "suppressContentEditableWarning":
                                case "suppressHydrationWarning":
                                case "ref":
                                    break;
                                case "className":
                                    attributeName = "class";
                                default:
                                    if (isAttributeNameSafe(propKey$jscomp$11) && "function" !== typeof propValue$jscomp$11 && "symbol" !== typeof propValue$jscomp$11 && !1 !== propValue$jscomp$11) {
                                        if (!0 === propValue$jscomp$11) propValue$jscomp$11 = "";
                                        else if ("object" === typeof propValue$jscomp$11) continue;
                                        target$jscomp$0.push(attributeSeparator, stringToChunk(attributeName), attributeAssign, stringToChunk(escapeTextForBrowser(propValue$jscomp$11)), attributeEnd);
                                    }
                            }
                        }
                    }
                    target$jscomp$0.push(endOfStartTag);
                    pushInnerHTML(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$11);
                    return children$jscomp$11;
                }
        }
        return pushStartGenericElement(target$jscomp$0, props, type);
    }
    function endChunkForTag(tag) {
        var chunk = endTagCache.get(tag);
        void 0 === chunk && (chunk = stringToPrecomputedChunk("</" + tag + ">"), endTagCache.set(tag, chunk));
        return chunk;
    }
    function writeBootstrap(destination, renderState) {
        renderState = renderState.bootstrapChunks;
        for(var i = 0; i < renderState.length - 1; i++)writeChunk(destination, renderState[i]);
        return i < renderState.length ? (i = renderState[i], renderState.length = 0, writeChunkAndReturn(destination, i)) : !0;
    }
    function writeStartPendingSuspenseBoundary(destination, renderState, id) {
        writeChunk(destination, startPendingSuspenseBoundary1);
        if (null === id) throw Error("An ID must have been assigned before we can complete the boundary.");
        writeChunk(destination, renderState.boundaryPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
    }
    function writeStartSegment(destination, renderState, formatContext, id) {
        switch(formatContext.insertionMode){
            case ROOT_HTML_MODE:
            case HTML_HTML_MODE:
            case HTML_MODE:
                return writeChunk(destination, startSegmentHTML), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentHTML2);
            case SVG_MODE:
                return writeChunk(destination, startSegmentSVG), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentSVG2);
            case MATHML_MODE:
                return writeChunk(destination, startSegmentMathML), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentMathML2);
            case HTML_TABLE_MODE:
                return writeChunk(destination, startSegmentTable), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTable2);
            case HTML_TABLE_BODY_MODE:
                return writeChunk(destination, startSegmentTableBody), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTableBody2);
            case HTML_TABLE_ROW_MODE:
                return writeChunk(destination, startSegmentTableRow), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTableRow2);
            case HTML_COLGROUP_MODE:
                return writeChunk(destination, startSegmentColGroup), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentColGroup2);
            default:
                throw Error("Unknown insertion mode. This is a bug in React.");
        }
    }
    function writeEndSegment(destination, formatContext) {
        switch(formatContext.insertionMode){
            case ROOT_HTML_MODE:
            case HTML_HTML_MODE:
            case HTML_MODE:
                return writeChunkAndReturn(destination, endSegmentHTML);
            case SVG_MODE:
                return writeChunkAndReturn(destination, endSegmentSVG);
            case MATHML_MODE:
                return writeChunkAndReturn(destination, endSegmentMathML);
            case HTML_TABLE_MODE:
                return writeChunkAndReturn(destination, endSegmentTable);
            case HTML_TABLE_BODY_MODE:
                return writeChunkAndReturn(destination, endSegmentTableBody);
            case HTML_TABLE_ROW_MODE:
                return writeChunkAndReturn(destination, endSegmentTableRow);
            case HTML_COLGROUP_MODE:
                return writeChunkAndReturn(destination, endSegmentColGroup);
            default:
                throw Error("Unknown insertion mode. This is a bug in React.");
        }
    }
    function escapeJSStringsForInstructionScripts(input) {
        return JSON.stringify(input).replace(regexForJSStringsInInstructionScripts, function(match) {
            switch(match){
                case "<":
                    return "\\u003c";
                case "\u2028":
                    return "\\u2028";
                case "\u2029":
                    return "\\u2029";
                default:
                    throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
        });
    }
    function escapeJSObjectForInstructionScripts(input) {
        return JSON.stringify(input).replace(regexForJSStringsInScripts, function(match) {
            switch(match){
                case "&":
                    return "\\u0026";
                case ">":
                    return "\\u003e";
                case "<":
                    return "\\u003c";
                case "\u2028":
                    return "\\u2028";
                case "\u2029":
                    return "\\u2029";
                default:
                    throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
        });
    }
    function flushStyleTagsLateForBoundary(styleQueue) {
        var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
        0 < rules.length && 0 === hrefs.length && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
        var i = 0;
        if (hrefs.length) {
            writeChunk(this, lateStyleTagResourceOpen1);
            writeChunk(this, styleQueue.precedence);
            for(writeChunk(this, lateStyleTagResourceOpen2); i < hrefs.length - 1; i++)writeChunk(this, hrefs[i]), writeChunk(this, spaceSeparator);
            writeChunk(this, hrefs[i]);
            writeChunk(this, lateStyleTagResourceOpen3);
            for(i = 0; i < rules.length; i++)writeChunk(this, rules[i]);
            destinationHasCapacity = writeChunkAndReturn(this, lateStyleTagTemplateClose);
            currentlyRenderingBoundaryHasStylesToHoist = !0;
            rules.length = 0;
            hrefs.length = 0;
        }
    }
    function hasStylesToHoist(stylesheet) {
        return stylesheet.state !== PREAMBLE ? currentlyRenderingBoundaryHasStylesToHoist = !0 : !1;
    }
    function writeHoistablesForBoundary(destination, hoistableState, renderState) {
        currentlyRenderingBoundaryHasStylesToHoist = !1;
        destinationHasCapacity = !0;
        hoistableState.styles.forEach(flushStyleTagsLateForBoundary, destination);
        hoistableState.stylesheets.forEach(hasStylesToHoist);
        currentlyRenderingBoundaryHasStylesToHoist && (renderState.stylesToHoist = !0);
        return destinationHasCapacity;
    }
    function flushResource(resource) {
        for(var i = 0; i < resource.length; i++)writeChunk(this, resource[i]);
        resource.length = 0;
    }
    function flushStyleInPreamble(stylesheet) {
        pushLinkImpl(stylesheetFlushingQueue, stylesheet.props);
        for(var i = 0; i < stylesheetFlushingQueue.length; i++)writeChunk(this, stylesheetFlushingQueue[i]);
        stylesheetFlushingQueue.length = 0;
        stylesheet.state = PREAMBLE;
    }
    function flushStylesInPreamble(styleQueue) {
        var hasStylesheets = 0 < styleQueue.sheets.size;
        styleQueue.sheets.forEach(flushStyleInPreamble, this);
        styleQueue.sheets.clear();
        var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
        if (!hasStylesheets || hrefs.length) {
            writeChunk(this, styleTagResourceOpen1);
            writeChunk(this, styleQueue.precedence);
            styleQueue = 0;
            if (hrefs.length) {
                for(writeChunk(this, styleTagResourceOpen2); styleQueue < hrefs.length - 1; styleQueue++)writeChunk(this, hrefs[styleQueue]), writeChunk(this, spaceSeparator);
                writeChunk(this, hrefs[styleQueue]);
            }
            writeChunk(this, styleTagResourceOpen3);
            for(styleQueue = 0; styleQueue < rules.length; styleQueue++)writeChunk(this, rules[styleQueue]);
            writeChunk(this, styleTagResourceClose);
            rules.length = 0;
            hrefs.length = 0;
        }
    }
    function preloadLateStyle(stylesheet) {
        if (stylesheet.state === PENDING$1) {
            stylesheet.state = PRELOADED;
            var props = stylesheet.props;
            pushLinkImpl(stylesheetFlushingQueue, {
                rel: "preload",
                as: "style",
                href: stylesheet.props.href,
                crossOrigin: props.crossOrigin,
                fetchPriority: props.fetchPriority,
                integrity: props.integrity,
                media: props.media,
                hrefLang: props.hrefLang,
                referrerPolicy: props.referrerPolicy
            });
            for(stylesheet = 0; stylesheet < stylesheetFlushingQueue.length; stylesheet++)writeChunk(this, stylesheetFlushingQueue[stylesheet]);
            stylesheetFlushingQueue.length = 0;
        }
    }
    function preloadLateStyles(styleQueue) {
        styleQueue.sheets.forEach(preloadLateStyle, this);
        styleQueue.sheets.clear();
    }
    function writeStyleResourceDependenciesInJS(destination, hoistableState) {
        writeChunk(destination, arrayFirstOpenBracket);
        var nextArrayOpenBrackChunk = arrayFirstOpenBracket;
        hoistableState.stylesheets.forEach(function(resource) {
            if (resource.state !== PREAMBLE) if (resource.state === LATE) writeChunk(destination, nextArrayOpenBrackChunk), resource = resource.props.href, checkAttributeStringCoercion(resource, "href"), writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts("" + resource))), writeChunk(destination, arrayCloseBracket), nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
            else {
                writeChunk(destination, nextArrayOpenBrackChunk);
                var precedence = resource.props["data-precedence"], props = resource.props, coercedHref = sanitizeURL("" + resource.props.href);
                writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(coercedHref)));
                checkAttributeStringCoercion(precedence, "precedence");
                precedence = "" + precedence;
                writeChunk(destination, arrayInterstitial);
                writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(precedence)));
                for(var propKey in props)if (hasOwnProperty.call(props, propKey) && (precedence = props[propKey], null != precedence)) switch(propKey){
                    case "href":
                    case "rel":
                    case "precedence":
                    case "data-precedence":
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                    default:
                        writeStyleResourceAttributeInJS(destination, propKey, precedence);
                }
                writeChunk(destination, arrayCloseBracket);
                nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
                resource.state = LATE;
            }
        });
        writeChunk(destination, arrayCloseBracket);
    }
    function writeStyleResourceAttributeInJS(destination, name, value) {
        var attributeName = name.toLowerCase();
        switch(typeof value){
            case "function":
            case "symbol":
                return;
        }
        switch(name){
            case "innerHTML":
            case "dangerouslySetInnerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "style":
            case "ref":
                return;
            case "className":
                attributeName = "class";
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
                break;
            case "hidden":
                if (!1 === value) return;
                name = "";
                break;
            case "src":
            case "href":
                value = sanitizeURL(value);
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
                break;
            default:
                if (2 < name.length && ("o" === name[0] || "O" === name[0]) && ("n" === name[1] || "N" === name[1]) || !isAttributeNameSafe(name)) return;
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
        }
        writeChunk(destination, arrayInterstitial);
        writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(attributeName)));
        writeChunk(destination, arrayInterstitial);
        writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(name)));
    }
    function createHoistableState() {
        return {
            styles: new Set(),
            stylesheets: new Set()
        };
    }
    function preloadBootstrapScriptOrModule(resumableState, renderState, href, props) {
        (resumableState.scriptResources.hasOwnProperty(href) || resumableState.moduleScriptResources.hasOwnProperty(href)) && console.error('Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue', href);
        resumableState.scriptResources[href] = EXISTS;
        resumableState.moduleScriptResources[href] = EXISTS;
        resumableState = [];
        pushLinkImpl(resumableState, props);
        renderState.bootstrapScripts.add(resumableState);
    }
    function adoptPreloadCredentials(target, preloadState) {
        null == target.crossOrigin && (target.crossOrigin = preloadState[0]);
        null == target.integrity && (target.integrity = preloadState[1]);
    }
    function getPreloadAsHeader(href, as, params) {
        href = escapeHrefForLinkHeaderURLContext(href);
        as = escapeStringForLinkHeaderQuotedParamValueContext(as, "as");
        as = "<" + href + '>; rel=preload; as="' + as + '"';
        for(var paramName in params)hasOwnProperty.call(params, paramName) && (href = params[paramName], "string" === typeof href && (as += "; " + paramName.toLowerCase() + '="' + escapeStringForLinkHeaderQuotedParamValueContext(href, paramName) + '"'));
        return as;
    }
    function escapeHrefForLinkHeaderURLContext(hrefInput) {
        checkAttributeStringCoercion(hrefInput, "href");
        return ("" + hrefInput).replace(regexForHrefInLinkHeaderURLContext, escapeHrefForLinkHeaderURLContextReplacer);
    }
    function escapeHrefForLinkHeaderURLContextReplacer(match) {
        switch(match){
            case "<":
                return "%3C";
            case ">":
                return "%3E";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    }
    function escapeStringForLinkHeaderQuotedParamValueContext(value, name) {
        willCoercionThrow(value) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", name, typeName(value)), testStringCoercion(value));
        return ("" + value).replace(regexForLinkHeaderQuotedParamValueContext, escapeStringForLinkHeaderQuotedParamValueContextReplacer);
    }
    function escapeStringForLinkHeaderQuotedParamValueContextReplacer(match) {
        switch(match){
            case '"':
                return "%22";
            case "'":
                return "%27";
            case ";":
                return "%3B";
            case ",":
                return "%2C";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    }
    function hoistStyleQueueDependency(styleQueue) {
        this.styles.add(styleQueue);
    }
    function hoistStylesheetDependency(stylesheet) {
        this.stylesheets.add(stylesheet);
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function popToNearestCommonAncestor(prev, next) {
        if (prev !== next) {
            prev.context._currentValue = prev.parentValue;
            prev = prev.parent;
            var parentNext = next.parent;
            if (null === prev) {
                if (null !== parentNext) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            } else {
                if (null === parentNext) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
                popToNearestCommonAncestor(prev, parentNext);
            }
            next.context._currentValue = next.value;
        }
    }
    function popAllPrevious(prev) {
        prev.context._currentValue = prev.parentValue;
        prev = prev.parent;
        null !== prev && popAllPrevious(prev);
    }
    function pushAllNext(next) {
        var parentNext = next.parent;
        null !== parentNext && pushAllNext(parentNext);
        next.context._currentValue = next.value;
    }
    function popPreviousToCommonLevel(prev, next) {
        prev.context._currentValue = prev.parentValue;
        prev = prev.parent;
        if (null === prev) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        prev.depth === next.depth ? popToNearestCommonAncestor(prev, next) : popPreviousToCommonLevel(prev, next);
    }
    function popNextToCommonLevel(prev, next) {
        var parentNext = next.parent;
        if (null === parentNext) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        prev.depth === parentNext.depth ? popToNearestCommonAncestor(prev, parentNext) : popNextToCommonLevel(prev, parentNext);
        next.context._currentValue = next.value;
    }
    function switchContext(newSnapshot) {
        var prev = currentActiveSnapshot;
        prev !== newSnapshot && (null === prev ? pushAllNext(newSnapshot) : null === newSnapshot ? popAllPrevious(prev) : prev.depth === newSnapshot.depth ? popToNearestCommonAncestor(prev, newSnapshot) : prev.depth > newSnapshot.depth ? popPreviousToCommonLevel(prev, newSnapshot) : popNextToCommonLevel(prev, newSnapshot), currentActiveSnapshot = newSnapshot);
    }
    function warnOnInvalidCallback(callback) {
        if (null !== callback && "function" !== typeof callback) {
            var key = String(callback);
            didWarnOnInvalidCallback.has(key) || (didWarnOnInvalidCallback.add(key), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", callback));
        }
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && getComponentNameFromType(publicInstance) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnAboutNoopUpdateForComponent[warningKey] || (console.error("Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, publicInstance), didWarnAboutNoopUpdateForComponent[warningKey] = !0);
    }
    function pushTreeContext(baseContext, totalChildren, index) {
        var baseIdWithLeadingBit = baseContext.id;
        baseContext = baseContext.overflow;
        var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
        baseIdWithLeadingBit &= ~(1 << baseLength);
        index += 1;
        var length = 32 - clz32(totalChildren) + baseLength;
        if (30 < length) {
            var numberOfOverflowBits = baseLength - baseLength % 5;
            length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
            baseIdWithLeadingBit >>= numberOfOverflowBits;
            baseLength -= numberOfOverflowBits;
            return {
                id: 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit,
                overflow: length + baseContext
            };
        }
        return {
            id: 1 << length | index << baseLength | baseIdWithLeadingBit,
            overflow: baseContext
        };
    }
    function clz32Fallback(x) {
        x >>>= 0;
        return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
    }
    function noop$2() {}
    function trackUsedThenable(thenableState, thenable, index) {
        index = thenableState[index];
        void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop$2, noop$2), thenable = index);
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                "string" === typeof thenable.status ? thenable.then(noop$2, noop$2) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
                    if ("pending" === thenable.status) {
                        var fulfilledThenable = thenable;
                        fulfilledThenable.status = "fulfilled";
                        fulfilledThenable.value = fulfilledValue;
                    }
                }, function(error) {
                    if ("pending" === thenable.status) {
                        var rejectedThenable = thenable;
                        rejectedThenable.status = "rejected";
                        rejectedThenable.reason = error;
                    }
                }));
                switch(thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
                suspendedThenable = thenable;
                throw SuspenseException;
        }
    }
    function getSuspendedThenable() {
        if (null === suspendedThenable) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
        var thenable = suspendedThenable;
        suspendedThenable = null;
        return thenable;
    }
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function resolveCurrentlyRenderingComponent() {
        if (null === currentlyRenderingComponent) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        isInHookUserCodeInDev && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks");
        return currentlyRenderingComponent;
    }
    function createHook() {
        if (0 < numberOfReRenders) throw Error("Rendered more hooks than during the previous render");
        return {
            memoizedState: null,
            queue: null,
            next: null
        };
    }
    function createWorkInProgressHook() {
        null === workInProgressHook ? null === firstWorkInProgressHook ? (isReRender = !1, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = !0, workInProgressHook = firstWorkInProgressHook) : null === workInProgressHook.next ? (isReRender = !1, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = !0, workInProgressHook = workInProgressHook.next);
        return workInProgressHook;
    }
    function getThenableStateAfterSuspending() {
        var state = thenableState;
        thenableState = null;
        return state;
    }
    function resetHooksState() {
        isInHookUserCodeInDev = !1;
        currentlyRenderingKeyPath = currentlyRenderingRequest = currentlyRenderingTask = currentlyRenderingComponent = null;
        didScheduleRenderPhaseUpdate = !1;
        firstWorkInProgressHook = null;
        numberOfReRenders = 0;
        workInProgressHook = renderPhaseUpdates = null;
    }
    function readContext(context) {
        isInHookUserCodeInDev && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        return context._currentValue;
    }
    function basicStateReducer(state, action) {
        return "function" === typeof action ? action(state) : action;
    }
    function useReducer(reducer, initialArg, init) {
        reducer !== basicStateReducer && (currentHookNameInDev = "useReducer");
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        if (isReRender) {
            init = workInProgressHook.queue;
            initialArg = init.dispatch;
            if (null !== renderPhaseUpdates) {
                var firstRenderPhaseUpdate = renderPhaseUpdates.get(init);
                if (void 0 !== firstRenderPhaseUpdate) {
                    renderPhaseUpdates.delete(init);
                    init = workInProgressHook.memoizedState;
                    do {
                        var action = firstRenderPhaseUpdate.action;
                        isInHookUserCodeInDev = !0;
                        init = reducer(init, action);
                        isInHookUserCodeInDev = !1;
                        firstRenderPhaseUpdate = firstRenderPhaseUpdate.next;
                    }while (null !== firstRenderPhaseUpdate)
                    workInProgressHook.memoizedState = init;
                    return [
                        init,
                        initialArg
                    ];
                }
            }
            return [
                workInProgressHook.memoizedState,
                initialArg
            ];
        }
        isInHookUserCodeInDev = !0;
        reducer = reducer === basicStateReducer ? "function" === typeof initialArg ? initialArg() : initialArg : void 0 !== init ? init(initialArg) : initialArg;
        isInHookUserCodeInDev = !1;
        workInProgressHook.memoizedState = reducer;
        reducer = workInProgressHook.queue = {
            last: null,
            dispatch: null
        };
        reducer = reducer.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, reducer);
        return [
            workInProgressHook.memoizedState,
            reducer
        ];
    }
    function useMemo(nextCreate, deps) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        if (null !== workInProgressHook) {
            var prevState = workInProgressHook.memoizedState;
            if (null !== prevState && null !== deps) {
                a: {
                    var JSCompiler_inline_result = prevState[1];
                    if (null === JSCompiler_inline_result) console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev), JSCompiler_inline_result = !1;
                    else {
                        deps.length !== JSCompiler_inline_result.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + deps.join(", ") + "]", "[" + JSCompiler_inline_result.join(", ") + "]");
                        for(var i = 0; i < JSCompiler_inline_result.length && i < deps.length; i++)if (!objectIs(deps[i], JSCompiler_inline_result[i])) {
                            JSCompiler_inline_result = !1;
                            break a;
                        }
                        JSCompiler_inline_result = !0;
                    }
                }
                if (JSCompiler_inline_result) return prevState[0];
            }
        }
        isInHookUserCodeInDev = !0;
        nextCreate = nextCreate();
        isInHookUserCodeInDev = !1;
        workInProgressHook.memoizedState = [
            nextCreate,
            deps
        ];
        return nextCreate;
    }
    function dispatchAction(componentIdentity, queue, action) {
        if (25 <= numberOfReRenders) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        if (componentIdentity === currentlyRenderingComponent) if (didScheduleRenderPhaseUpdate = !0, componentIdentity = {
            action: action,
            next: null
        }, null === renderPhaseUpdates && (renderPhaseUpdates = new Map()), action = renderPhaseUpdates.get(queue), void 0 === action) renderPhaseUpdates.set(queue, componentIdentity);
        else {
            for(queue = action; null !== queue.next;)queue = queue.next;
            queue.next = componentIdentity;
        }
    }
    function unsupportedStartTransition() {
        throw Error("startTransition cannot be called during server rendering.");
    }
    function unsupportedSetOptimisticState() {
        throw Error("Cannot update optimistic state while rendering.");
    }
    function useActionState(action, initialState, permalink) {
        resolveCurrentlyRenderingComponent();
        var actionStateHookIndex = actionStateCounter++, request = currentlyRenderingRequest;
        if ("function" === typeof action.$$FORM_ACTION) {
            var nextPostbackStateKey = null, componentKeyPath = currentlyRenderingKeyPath;
            request = request.formState;
            var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
            if (null !== request && "function" === typeof isSignatureEqual) {
                var postbackKey = request[1];
                isSignatureEqual.call(action, request[2], request[3]) && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
                    componentKeyPath,
                    null,
                    actionStateHookIndex
                ]), 0), postbackKey === nextPostbackStateKey && (actionStateMatchingIndex = actionStateHookIndex, initialState = request[0]));
            }
            var boundAction = action.bind(null, initialState);
            action = function(payload) {
                boundAction(payload);
            };
            "function" === typeof boundAction.$$FORM_ACTION && (action.$$FORM_ACTION = function(prefix) {
                prefix = boundAction.$$FORM_ACTION(prefix);
                void 0 !== permalink && (checkAttributeStringCoercion(permalink, "target"), permalink += "", prefix.action = permalink);
                var formData = prefix.data;
                formData && (null === nextPostbackStateKey && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
                    componentKeyPath,
                    null,
                    actionStateHookIndex
                ]), 0)), formData.append("$ACTION_KEY", nextPostbackStateKey));
                return prefix;
            });
            return [
                initialState,
                action,
                !1
            ];
        }
        var _boundAction = action.bind(null, initialState);
        return [
            initialState,
            function(payload) {
                _boundAction(payload);
            },
            !1
        ];
    }
    function unwrapThenable(thenable) {
        var index = thenableIndexCounter;
        thenableIndexCounter += 1;
        null === thenableState && (thenableState = []);
        return trackUsedThenable(thenableState, thenable, index);
    }
    function unsupportedRefresh() {
        throw Error("Cache cannot be refreshed during server rendering.");
    }
    function noop$1() {}
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter)
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeComponentStackByType(type) {
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        if ("function" === typeof type) return type.prototype && type.prototype.isReactComponent ? (type = describeNativeComponentFrame(type, !0), type) : describeNativeComponentFrame(type, !1);
        if ("object" === typeof type && null !== type) {
            switch(type.$$typeof){
                case REACT_FORWARD_REF_TYPE:
                    return describeNativeComponentFrame(type.render, !1);
                case REACT_MEMO_TYPE:
                    return describeNativeComponentFrame(type.type, !1);
                case REACT_LAZY_TYPE:
                    var lazyComponent = type, payload = lazyComponent._payload;
                    lazyComponent = lazyComponent._init;
                    try {
                        type = lazyComponent(payload);
                    } catch (x) {
                        return describeBuiltInComponentFrame("Lazy");
                    }
                    return describeComponentStackByType(type);
            }
            if ("string" === typeof type.name) return payload = type.env, describeBuiltInComponentFrame(type.name + (payload ? " [" + payload + "]" : ""));
        }
        switch(type){
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
        }
        return "";
    }
    function getStackByComponentStackNode(componentStack) {
        try {
            var info = "";
            do info += describeComponentStackByType(componentStack.type), componentStack = componentStack.parent;
            while (componentStack)
            return info;
        } catch (x) {
            return "\nError generating stack: " + x.message + "\n" + x.stack;
        }
    }
    function defaultErrorHandler(error) {
        if ("object" === typeof error && null !== error && "string" === typeof error.environmentName) {
            var JSCompiler_inline_result = error.environmentName;
            error = [
                error
            ].slice(0);
            "string" === typeof error[0] ? error.splice(0, 1, "%c%s%c " + error[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + JSCompiler_inline_result + " ", "") : error.splice(0, 0, "%c%s%c ", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + JSCompiler_inline_result + " ", "");
            error.unshift(console);
            JSCompiler_inline_result = bind.apply(console.error, error);
            JSCompiler_inline_result();
        } else console.error(error);
        return null;
    }
    function noop() {}
    function RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
        var abortSet = new Set();
        this.destination = null;
        this.flushScheduled = !1;
        this.resumableState = resumableState;
        this.renderState = renderState;
        this.rootFormatContext = rootFormatContext;
        this.progressiveChunkSize = void 0 === progressiveChunkSize ? 12800 : progressiveChunkSize;
        this.status = 10;
        this.fatalError = null;
        this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
        this.completedRootSegment = null;
        this.abortableTasks = abortSet;
        this.pingedTasks = [];
        this.clientRenderedBoundaries = [];
        this.completedBoundaries = [];
        this.partialBoundaries = [];
        this.trackedPostpones = null;
        this.onError = void 0 === onError ? defaultErrorHandler : onError;
        this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
        this.onAllReady = void 0 === onAllReady ? noop : onAllReady;
        this.onShellReady = void 0 === onShellReady ? noop : onShellReady;
        this.onShellError = void 0 === onShellError ? noop : onShellError;
        this.onFatalError = void 0 === onFatalError ? noop : onFatalError;
        this.formState = void 0 === formState ? null : formState;
        this.didWarnForKey = null;
    }
    function createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
        resumableState = new RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState);
        renderState = createPendingSegment(resumableState, 0, null, rootFormatContext, !1, !1);
        renderState.parentFlushed = !0;
        children = createRenderTask(resumableState, null, children, -1, null, renderState, null, resumableState.abortableTasks, null, rootFormatContext, null, emptyTreeContext, null, !1);
        pushComponentStack(children);
        resumableState.pingedTasks.push(children);
        return resumableState;
    }
    function createPrerenderRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone) {
        children = createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, void 0);
        children.trackedPostpones = {
            workingMap: new Map(),
            rootNodes: [],
            rootSlots: null
        };
        return children;
    }
    function pingTask(request, task) {
        request.pingedTasks.push(task);
        1 === request.pingedTasks.length && (request.flushScheduled = null !== request.destination, null !== request.trackedPostpones || 10 === request.status ? scheduleMicrotask(function() {
            return performWork(request);
        }) : scheduleWork(function() {
            return performWork(request);
        }));
    }
    function createSuspenseBoundary(request, fallbackAbortableTasks) {
        return {
            status: PENDING,
            rootSegmentID: -1,
            parentFlushed: !1,
            pendingTasks: 0,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks: fallbackAbortableTasks,
            errorDigest: null,
            contentState: createHoistableState(),
            fallbackState: createHoistableState(),
            trackedContentKeyPath: null,
            trackedFallbackNode: null,
            errorMessage: null,
            errorStack: null,
            errorComponentStack: null
        };
    }
    function createRenderTask(request, thenableState, node, childIndex, blockedBoundary, blockedSegment, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback) {
        request.allPendingTasks++;
        null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
        var task = {
            replay: null,
            node: node,
            childIndex: childIndex,
            ping: function() {
                return pingTask(request, task);
            },
            blockedBoundary: blockedBoundary,
            blockedSegment: blockedSegment,
            hoistableState: hoistableState,
            abortSet: abortSet,
            keyPath: keyPath,
            formatContext: formatContext,
            context: context,
            treeContext: treeContext,
            componentStack: componentStack,
            thenableState: thenableState,
            isFallback: isFallback
        };
        abortSet.add(task);
        return task;
    }
    function createReplayTask(request, thenableState, replay, node, childIndex, blockedBoundary, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback) {
        request.allPendingTasks++;
        null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
        replay.pendingTasks++;
        var task = {
            replay: replay,
            node: node,
            childIndex: childIndex,
            ping: function() {
                return pingTask(request, task);
            },
            blockedBoundary: blockedBoundary,
            blockedSegment: null,
            hoistableState: hoistableState,
            abortSet: abortSet,
            keyPath: keyPath,
            formatContext: formatContext,
            context: context,
            treeContext: treeContext,
            componentStack: componentStack,
            thenableState: thenableState,
            isFallback: isFallback
        };
        abortSet.add(task);
        return task;
    }
    function createPendingSegment(request, index, boundary, parentFormatContext, lastPushedText, textEmbedded) {
        return {
            status: PENDING,
            id: -1,
            index: index,
            parentFlushed: !1,
            chunks: [],
            children: [],
            parentFormatContext: parentFormatContext,
            boundary: boundary,
            lastPushedText: lastPushedText,
            textEmbedded: textEmbedded
        };
    }
    function getCurrentStackInDEV() {
        return null === currentTaskInDEV || null === currentTaskInDEV.componentStack ? "" : getStackByComponentStackNode(currentTaskInDEV.componentStack);
    }
    function pushServerComponentStack(task, debugInfo) {
        if (null != debugInfo) for(var i = 0; i < debugInfo.length; i++){
            var componentInfo = debugInfo[i];
            "string" === typeof componentInfo.name && (task.componentStack = {
                parent: task.componentStack,
                type: componentInfo,
                owner: componentInfo.owner,
                stack: null
            });
        }
    }
    function pushComponentStack(task) {
        var node = task.node;
        if ("object" === typeof node && null !== node) switch(node.$$typeof){
            case REACT_ELEMENT_TYPE:
                var type = node.type, owner = node._owner;
                pushServerComponentStack(task, node._debugInfo);
                task.componentStack = {
                    parent: task.componentStack,
                    type: type,
                    owner: owner,
                    stack: null
                };
                break;
            case REACT_LAZY_TYPE:
                pushServerComponentStack(task, node._debugInfo);
                break;
            default:
                "function" === typeof node.then && pushServerComponentStack(task, node._debugInfo);
        }
    }
    function getThrownInfo(node) {
        var errorInfo = {};
        node && Object.defineProperty(errorInfo, "componentStack", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var stack = getStackByComponentStackNode(node);
                Object.defineProperty(errorInfo, "componentStack", {
                    value: stack
                });
                return stack;
            }
        });
        return errorInfo;
    }
    function encodeErrorForBoundary(boundary, digest, error, thrownInfo, wasAborted) {
        boundary.errorDigest = digest;
        error instanceof Error ? (digest = String(error.message), error = String(error.stack)) : (digest = "object" === typeof error && null !== error ? describeObjectForErrorMessage(error) : String(error), error = null);
        wasAborted = wasAborted ? "Switched to client rendering because the server rendering aborted due to:\n\n" : "Switched to client rendering because the server rendering errored:\n\n";
        boundary.errorMessage = wasAborted + digest;
        boundary.errorStack = null !== error ? wasAborted + error : null;
        boundary.errorComponentStack = thrownInfo.componentStack;
    }
    function logRecoverableError(request, error, errorInfo) {
        request = request.onError;
        error = request(error, errorInfo);
        if (null != error && "string" !== typeof error) console.error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead', typeof error);
        else return error;
    }
    function fatalError(request, error) {
        var onShellError = request.onShellError, onFatalError = request.onFatalError;
        onShellError(error);
        onFatalError(error);
        null !== request.destination ? (request.status = CLOSED, closeWithError(request.destination, error)) : (request.status = 13, request.fatalError = error);
    }
    function renderWithHooks(request, task, keyPath, Component, props, secondArg) {
        var prevThenableState = task.thenableState;
        task.thenableState = null;
        currentlyRenderingComponent = {};
        currentlyRenderingTask = task;
        currentlyRenderingRequest = request;
        currentlyRenderingKeyPath = keyPath;
        isInHookUserCodeInDev = !1;
        actionStateCounter = localIdCounter = 0;
        actionStateMatchingIndex = -1;
        thenableIndexCounter = 0;
        thenableState = prevThenableState;
        for(request = callComponentInDEV(Component, props, secondArg); didScheduleRenderPhaseUpdate;)didScheduleRenderPhaseUpdate = !1, actionStateCounter = localIdCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, numberOfReRenders += 1, workInProgressHook = null, request = Component(props, secondArg);
        resetHooksState();
        return request;
    }
    function finishFunctionComponent(request, task, keyPath, children, hasId, actionStateCount, actionStateMatchingIndex) {
        var didEmitActionStateMarkers = !1;
        if (0 !== actionStateCount && null !== request.formState) {
            var segment = task.blockedSegment;
            if (null !== segment) {
                didEmitActionStateMarkers = !0;
                segment = segment.chunks;
                for(var i = 0; i < actionStateCount; i++)i === actionStateMatchingIndex ? segment.push(formStateMarkerIsMatching) : segment.push(formStateMarkerIsNotMatching);
            }
        }
        actionStateCount = task.keyPath;
        task.keyPath = keyPath;
        hasId ? (keyPath = task.treeContext, task.treeContext = pushTreeContext(keyPath, 1, 0), renderNode(request, task, children, -1), task.treeContext = keyPath) : didEmitActionStateMarkers ? renderNode(request, task, children, -1) : renderNodeDestructive(request, task, children, -1);
        task.keyPath = actionStateCount;
    }
    function renderElement(request, task, keyPath, type, props, ref) {
        if ("function" === typeof type) if (type.prototype && type.prototype.isReactComponent) {
            var newProps = props;
            if ("ref" in props) {
                newProps = {};
                for(var propName in props)"ref" !== propName && (newProps[propName] = props[propName]);
            }
            var defaultProps = type.defaultProps;
            if (defaultProps) {
                newProps === props && (newProps = assign({}, newProps, props));
                for(var _propName in defaultProps)void 0 === newProps[_propName] && (newProps[_propName] = defaultProps[_propName]);
            }
            var resolvedProps = newProps;
            var context = emptyContextObject, contextType = type.contextType;
            if ("contextType" in type && null !== contextType && (void 0 === contextType || contextType.$$typeof !== REACT_CONTEXT_TYPE) && !didWarnAboutInvalidateContextType.has(type)) {
                didWarnAboutInvalidateContextType.add(type);
                var addendum = void 0 === contextType ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : "object" !== typeof contextType ? " However, it is set to a " + typeof contextType + "." : contextType.$$typeof === REACT_CONSUMER_TYPE ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(type) || "Component", addendum);
            }
            "object" === typeof contextType && null !== contextType && (context = contextType._currentValue);
            var instance = new type(resolvedProps, context);
            if ("function" === typeof type.getDerivedStateFromProps && (null === instance.state || void 0 === instance.state)) {
                var componentName = getComponentNameFromType(type) || "Component";
                didWarnAboutUninitializedState.has(componentName) || (didWarnAboutUninitializedState.add(componentName), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, null === instance.state ? "null" : "undefined", componentName));
            }
            if ("function" === typeof type.getDerivedStateFromProps || "function" === typeof instance.getSnapshotBeforeUpdate) {
                var foundWillMountName = null, foundWillReceivePropsName = null, foundWillUpdateName = null;
                "function" === typeof instance.componentWillMount && !0 !== instance.componentWillMount.__suppressDeprecationWarning ? foundWillMountName = "componentWillMount" : "function" === typeof instance.UNSAFE_componentWillMount && (foundWillMountName = "UNSAFE_componentWillMount");
                "function" === typeof instance.componentWillReceiveProps && !0 !== instance.componentWillReceiveProps.__suppressDeprecationWarning ? foundWillReceivePropsName = "componentWillReceiveProps" : "function" === typeof instance.UNSAFE_componentWillReceiveProps && (foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps");
                "function" === typeof instance.componentWillUpdate && !0 !== instance.componentWillUpdate.__suppressDeprecationWarning ? foundWillUpdateName = "componentWillUpdate" : "function" === typeof instance.UNSAFE_componentWillUpdate && (foundWillUpdateName = "UNSAFE_componentWillUpdate");
                if (null !== foundWillMountName || null !== foundWillReceivePropsName || null !== foundWillUpdateName) {
                    var _componentName = getComponentNameFromType(type) || "Component", newApiName = "function" === typeof type.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                    didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName) || (didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", _componentName, newApiName, null !== foundWillMountName ? "\n  " + foundWillMountName : "", null !== foundWillReceivePropsName ? "\n  " + foundWillReceivePropsName : "", null !== foundWillUpdateName ? "\n  " + foundWillUpdateName : ""));
                }
            }
            var name = getComponentNameFromType(type) || "Component";
            instance.render || (type.prototype && "function" === typeof type.prototype.render ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", name) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", name));
            !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
            instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
            instance.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
            type.childContextTypes && !didWarnAboutChildContextTypes.has(type) && (didWarnAboutChildContextTypes.add(type), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", name));
            type.contextTypes && !didWarnAboutContextTypes$1.has(type) && (didWarnAboutContextTypes$1.add(type), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", name));
            "function" === typeof instance.componentShouldUpdate && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
            type.prototype && type.prototype.isPureReactComponent && "undefined" !== typeof instance.shouldComponentUpdate && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(type) || "A pure component");
            "function" === typeof instance.componentDidUnmount && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
            "function" === typeof instance.componentDidReceiveProps && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
            "function" === typeof instance.componentWillRecieveProps && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
            "function" === typeof instance.UNSAFE_componentWillRecieveProps && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
            var hasMutatedProps = instance.props !== resolvedProps;
            void 0 !== instance.props && hasMutatedProps && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name);
            instance.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
            "function" !== typeof instance.getSnapshotBeforeUpdate || "function" === typeof instance.componentDidUpdate || didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(type) || (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(type), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(type)));
            "function" === typeof instance.getDerivedStateFromProps && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            "function" === typeof instance.getDerivedStateFromError && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
            "function" === typeof type.getSnapshotBeforeUpdate && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
            var state = instance.state;
            state && ("object" !== typeof state || isArrayImpl(state)) && console.error("%s.state: must be set to an object or null", name);
            "function" === typeof instance.getChildContext && "object" !== typeof type.childContextTypes && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
            var initialState = void 0 !== instance.state ? instance.state : null;
            instance.updater = classComponentUpdater;
            instance.props = resolvedProps;
            instance.state = initialState;
            var internalInstance = {
                queue: [],
                replace: !1
            };
            instance._reactInternals = internalInstance;
            var contextType$jscomp$0 = type.contextType;
            instance.context = "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 ? contextType$jscomp$0._currentValue : emptyContextObject;
            if (instance.state === resolvedProps) {
                var componentName$jscomp$0 = getComponentNameFromType(type) || "Component";
                didWarnAboutDirectlyAssigningPropsToState.has(componentName$jscomp$0) || (didWarnAboutDirectlyAssigningPropsToState.add(componentName$jscomp$0), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName$jscomp$0));
            }
            var getDerivedStateFromProps = type.getDerivedStateFromProps;
            if ("function" === typeof getDerivedStateFromProps) {
                var partialState = getDerivedStateFromProps(resolvedProps, initialState);
                if (void 0 === partialState) {
                    var componentName$jscomp$1 = getComponentNameFromType(type) || "Component";
                    didWarnAboutUndefinedDerivedState.has(componentName$jscomp$1) || (didWarnAboutUndefinedDerivedState.add(componentName$jscomp$1), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName$jscomp$1));
                }
                var JSCompiler_inline_result = null === partialState || void 0 === partialState ? initialState : assign({}, initialState, partialState);
                instance.state = JSCompiler_inline_result;
            }
            if ("function" !== typeof type.getDerivedStateFromProps && "function" !== typeof instance.getSnapshotBeforeUpdate && ("function" === typeof instance.UNSAFE_componentWillMount || "function" === typeof instance.componentWillMount)) {
                var oldState = instance.state;
                if ("function" === typeof instance.componentWillMount) {
                    if (!0 !== instance.componentWillMount.__suppressDeprecationWarning) {
                        var componentName$jscomp$2 = getComponentNameFromType(type) || "Unknown";
                        didWarnAboutDeprecatedWillMount[componentName$jscomp$2] || (console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", componentName$jscomp$2), didWarnAboutDeprecatedWillMount[componentName$jscomp$2] = !0);
                    }
                    instance.componentWillMount();
                }
                "function" === typeof instance.UNSAFE_componentWillMount && instance.UNSAFE_componentWillMount();
                oldState !== instance.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component"), classComponentUpdater.enqueueReplaceState(instance, instance.state, null));
                if (null !== internalInstance.queue && 0 < internalInstance.queue.length) {
                    var oldQueue = internalInstance.queue, oldReplace = internalInstance.replace;
                    internalInstance.queue = null;
                    internalInstance.replace = !1;
                    if (oldReplace && 1 === oldQueue.length) instance.state = oldQueue[0];
                    else {
                        for(var nextState = oldReplace ? oldQueue[0] : instance.state, dontMutate = !0, i = oldReplace ? 1 : 0; i < oldQueue.length; i++){
                            var partial = oldQueue[i], partialState$jscomp$0 = "function" === typeof partial ? partial.call(instance, nextState, resolvedProps, void 0) : partial;
                            null != partialState$jscomp$0 && (dontMutate ? (dontMutate = !1, nextState = assign({}, nextState, partialState$jscomp$0)) : assign(nextState, partialState$jscomp$0));
                        }
                        instance.state = nextState;
                    }
                } else internalInstance.queue = null;
            }
            var nextChildren = callRenderInDEV(instance);
            if (12 === request.status) throw null;
            instance.props !== resolvedProps && (didWarnAboutReassigningProps || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(type) || "a component"), didWarnAboutReassigningProps = !0);
            var prevKeyPath = task.keyPath;
            task.keyPath = keyPath;
            renderNodeDestructive(request, task, nextChildren, -1);
            task.keyPath = prevKeyPath;
        } else {
            if (type.prototype && "function" === typeof type.prototype.render) {
                var componentName$jscomp$3 = getComponentNameFromType(type) || "Unknown";
                didWarnAboutBadClass[componentName$jscomp$3] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName$jscomp$3, componentName$jscomp$3), didWarnAboutBadClass[componentName$jscomp$3] = !0);
            }
            var value = renderWithHooks(request, task, keyPath, type, props, void 0);
            if (12 === request.status) throw null;
            var hasId = 0 !== localIdCounter, actionStateCount = actionStateCounter, actionStateMatchingIndex$jscomp$0 = actionStateMatchingIndex;
            if (type.contextTypes) {
                var _componentName$jscomp$0 = getComponentNameFromType(type) || "Unknown";
                didWarnAboutContextTypes[_componentName$jscomp$0] || (didWarnAboutContextTypes[_componentName$jscomp$0] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", _componentName$jscomp$0));
            }
            type && type.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", type.displayName || type.name || "Component");
            if ("function" === typeof type.getDerivedStateFromProps) {
                var _componentName2 = getComponentNameFromType(type) || "Unknown";
                didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] || (console.error("%s: Function components do not support getDerivedStateFromProps.", _componentName2), didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] = !0);
            }
            if ("object" === typeof type.contextType && null !== type.contextType) {
                var _componentName3 = getComponentNameFromType(type) || "Unknown";
                didWarnAboutContextTypeOnFunctionComponent[_componentName3] || (console.error("%s: Function components do not support contextType.", _componentName3), didWarnAboutContextTypeOnFunctionComponent[_componentName3] = !0);
            }
            finishFunctionComponent(request, task, keyPath, value, hasId, actionStateCount, actionStateMatchingIndex$jscomp$0);
        }
        else if ("string" === typeof type) {
            var segment = task.blockedSegment;
            if (null === segment) {
                var children = props.children, prevContext = task.formatContext, prevKeyPath$jscomp$0 = task.keyPath;
                task.formatContext = getChildFormatContext(prevContext, type, props);
                task.keyPath = keyPath;
                renderNode(request, task, children, -1);
                task.formatContext = prevContext;
                task.keyPath = prevKeyPath$jscomp$0;
            } else {
                var _children = pushStartInstance(segment.chunks, type, props, request.resumableState, request.renderState, task.hoistableState, task.formatContext, segment.lastPushedText, task.isFallback);
                segment.lastPushedText = !1;
                var _prevContext = task.formatContext, _prevKeyPath2 = task.keyPath;
                task.formatContext = getChildFormatContext(_prevContext, type, props);
                task.keyPath = keyPath;
                renderNode(request, task, _children, -1);
                task.formatContext = _prevContext;
                task.keyPath = _prevKeyPath2;
                a: {
                    var target = segment.chunks, resumableState = request.resumableState;
                    switch(type){
                        case "title":
                        case "style":
                        case "script":
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "embed":
                        case "hr":
                        case "img":
                        case "input":
                        case "keygen":
                        case "link":
                        case "meta":
                        case "param":
                        case "source":
                        case "track":
                        case "wbr":
                            break a;
                        case "body":
                            if (_prevContext.insertionMode <= HTML_HTML_MODE) {
                                resumableState.hasBody = !0;
                                break a;
                            }
                            break;
                        case "html":
                            if (_prevContext.insertionMode === ROOT_HTML_MODE) {
                                resumableState.hasHtml = !0;
                                break a;
                            }
                    }
                    target.push(endChunkForTag(type));
                }
                segment.lastPushedText = !1;
            }
        } else {
            switch(type){
                case REACT_LEGACY_HIDDEN_TYPE:
                case REACT_DEBUG_TRACING_MODE_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_FRAGMENT_TYPE:
                    var prevKeyPath$jscomp$1 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, props.children, -1);
                    task.keyPath = prevKeyPath$jscomp$1;
                    return;
                case REACT_OFFSCREEN_TYPE:
                    if ("hidden" !== props.mode) {
                        var prevKeyPath$jscomp$2 = task.keyPath;
                        task.keyPath = keyPath;
                        renderNodeDestructive(request, task, props.children, -1);
                        task.keyPath = prevKeyPath$jscomp$2;
                    }
                    return;
                case REACT_SUSPENSE_LIST_TYPE:
                    var _prevKeyPath3 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, props.children, -1);
                    task.keyPath = _prevKeyPath3;
                    return;
                case REACT_SCOPE_TYPE:
                    throw Error("ReactDOMServer does not yet support scope components.");
                case REACT_SUSPENSE_TYPE:
                    a: if (null !== task.replay) {
                        var _prevKeyPath = task.keyPath;
                        task.keyPath = keyPath;
                        var _content = props.children;
                        try {
                            renderNode(request, task, _content, -1);
                        } finally{
                            task.keyPath = _prevKeyPath;
                        }
                    } else {
                        var prevKeyPath$jscomp$3 = task.keyPath, parentBoundary = task.blockedBoundary, parentHoistableState = task.hoistableState, parentSegment = task.blockedSegment, fallback = props.fallback, content = props.children, fallbackAbortSet = new Set(), newBoundary = createSuspenseBoundary(request, fallbackAbortSet);
                        null !== request.trackedPostpones && (newBoundary.trackedContentKeyPath = keyPath);
                        var boundarySegment = createPendingSegment(request, parentSegment.chunks.length, newBoundary, task.formatContext, !1, !1);
                        parentSegment.children.push(boundarySegment);
                        parentSegment.lastPushedText = !1;
                        var contentRootSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
                        contentRootSegment.parentFlushed = !0;
                        if (null !== request.trackedPostpones) {
                            var fallbackKeyPath = [
                                keyPath[0],
                                "Suspense Fallback",
                                keyPath[2]
                            ], fallbackReplayNode = [
                                fallbackKeyPath[1],
                                fallbackKeyPath[2],
                                [],
                                null
                            ];
                            request.trackedPostpones.workingMap.set(fallbackKeyPath, fallbackReplayNode);
                            newBoundary.trackedFallbackNode = fallbackReplayNode;
                            task.blockedSegment = boundarySegment;
                            task.keyPath = fallbackKeyPath;
                            boundarySegment.status = 6;
                            try {
                                renderNode(request, task, fallback, -1), boundarySegment.lastPushedText && boundarySegment.textEmbedded && boundarySegment.chunks.push(textSeparator), boundarySegment.status = COMPLETED;
                            } catch (thrownValue) {
                                throw boundarySegment.status = 12 === request.status ? 3 : 4, thrownValue;
                            } finally{
                                task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$3;
                            }
                            var suspendedPrimaryTask = createRenderTask(request, null, content, -1, newBoundary, contentRootSegment, newBoundary.contentState, task.abortSet, keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
                            pushComponentStack(suspendedPrimaryTask);
                            request.pingedTasks.push(suspendedPrimaryTask);
                        } else {
                            task.blockedBoundary = newBoundary;
                            task.hoistableState = newBoundary.contentState;
                            task.blockedSegment = contentRootSegment;
                            task.keyPath = keyPath;
                            contentRootSegment.status = 6;
                            try {
                                if (renderNode(request, task, content, -1), contentRootSegment.lastPushedText && contentRootSegment.textEmbedded && contentRootSegment.chunks.push(textSeparator), contentRootSegment.status = COMPLETED, queueCompletedSegment(newBoundary, contentRootSegment), 0 === newBoundary.pendingTasks && newBoundary.status === PENDING) {
                                    newBoundary.status = COMPLETED;
                                    break a;
                                }
                            } catch (thrownValue$2) {
                                newBoundary.status = CLIENT_RENDERED;
                                if (12 === request.status) {
                                    contentRootSegment.status = 3;
                                    var error = request.fatalError;
                                } else contentRootSegment.status = 4, error = thrownValue$2;
                                var thrownInfo = getThrownInfo(task.componentStack);
                                var errorDigest = logRecoverableError(request, error, thrownInfo);
                                encodeErrorForBoundary(newBoundary, errorDigest, error, thrownInfo, !1);
                                untrackBoundary(request, newBoundary);
                            } finally{
                                task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$3;
                            }
                            var suspendedFallbackTask = createRenderTask(request, null, fallback, -1, parentBoundary, boundarySegment, newBoundary.fallbackState, fallbackAbortSet, [
                                keyPath[0],
                                "Suspense Fallback",
                                keyPath[2]
                            ], task.formatContext, task.context, task.treeContext, task.componentStack, !0);
                            pushComponentStack(suspendedFallbackTask);
                            request.pingedTasks.push(suspendedFallbackTask);
                        }
                    }
                    return;
            }
            if ("object" === typeof type && null !== type) switch(type.$$typeof){
                case REACT_FORWARD_REF_TYPE:
                    if ("ref" in props) {
                        var propsWithoutRef = {};
                        for(var key in props)"ref" !== key && (propsWithoutRef[key] = props[key]);
                    } else propsWithoutRef = props;
                    var children$jscomp$0 = renderWithHooks(request, task, keyPath, type.render, propsWithoutRef, ref);
                    finishFunctionComponent(request, task, keyPath, children$jscomp$0, 0 !== localIdCounter, actionStateCounter, actionStateMatchingIndex);
                    return;
                case REACT_MEMO_TYPE:
                    renderElement(request, task, keyPath, type.type, props, ref);
                    return;
                case REACT_PROVIDER_TYPE:
                case REACT_CONTEXT_TYPE:
                    var value$jscomp$0 = props.value, children$jscomp$1 = props.children;
                    var prevSnapshot = task.context;
                    var prevKeyPath$jscomp$4 = task.keyPath;
                    var prevValue = type._currentValue;
                    type._currentValue = value$jscomp$0;
                    void 0 !== type._currentRenderer && null !== type._currentRenderer && type._currentRenderer !== rendererSigil && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
                    type._currentRenderer = rendererSigil;
                    var prevNode = currentActiveSnapshot, newNode = {
                        parent: prevNode,
                        depth: null === prevNode ? 0 : prevNode.depth + 1,
                        context: type,
                        parentValue: prevValue,
                        value: value$jscomp$0
                    };
                    currentActiveSnapshot = newNode;
                    task.context = newNode;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, children$jscomp$1, -1);
                    var prevSnapshot$jscomp$0 = currentActiveSnapshot;
                    if (null === prevSnapshot$jscomp$0) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
                    prevSnapshot$jscomp$0.context !== type && console.error("The parent context is not the expected context. This is probably a bug in React.");
                    prevSnapshot$jscomp$0.context._currentValue = prevSnapshot$jscomp$0.parentValue;
                    void 0 !== type._currentRenderer && null !== type._currentRenderer && type._currentRenderer !== rendererSigil && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
                    type._currentRenderer = rendererSigil;
                    var JSCompiler_inline_result$jscomp$0 = currentActiveSnapshot = prevSnapshot$jscomp$0.parent;
                    task.context = JSCompiler_inline_result$jscomp$0;
                    task.keyPath = prevKeyPath$jscomp$4;
                    prevSnapshot !== task.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
                    return;
                case REACT_CONSUMER_TYPE:
                    var context$jscomp$0 = type._context, render = props.children;
                    "function" !== typeof render && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
                    var newChildren = render(context$jscomp$0._currentValue), prevKeyPath$jscomp$5 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, newChildren, -1);
                    task.keyPath = prevKeyPath$jscomp$5;
                    return;
                case REACT_LAZY_TYPE:
                    var Component = callLazyInitInDEV(type);
                    if (12 === request.status) throw null;
                    renderElement(request, task, keyPath, Component, props, ref);
                    return;
            }
            var info = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == type ? type : typeof type) + "." + info));
        }
    }
    function resumeNode(request, task, segmentId, node, childIndex) {
        var prevReplay = task.replay, blockedBoundary = task.blockedBoundary, resumedSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
        resumedSegment.id = segmentId;
        resumedSegment.parentFlushed = !0;
        try {
            task.replay = null, task.blockedSegment = resumedSegment, renderNode(request, task, node, childIndex), resumedSegment.status = COMPLETED, null === blockedBoundary ? request.completedRootSegment = resumedSegment : (queueCompletedSegment(blockedBoundary, resumedSegment), blockedBoundary.parentFlushed && request.partialBoundaries.push(blockedBoundary));
        } finally{
            task.replay = prevReplay, task.blockedSegment = null;
        }
    }
    function renderNodeDestructive(request, task, node, childIndex) {
        null !== task.replay && "number" === typeof task.replay.slots ? resumeNode(request, task, task.replay.slots, node, childIndex) : (task.node = node, task.childIndex = childIndex, node = task.componentStack, pushComponentStack(task), retryNode(request, task), task.componentStack = node);
    }
    function retryNode(request, task) {
        var node = task.node, childIndex = task.childIndex;
        if (null !== node) {
            if ("object" === typeof node) {
                switch(node.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = node.type, key = node.key, props = node.props;
                        node = props.ref;
                        var ref = void 0 !== node ? node : null, name = getComponentNameFromType(type), keyOrIndex = null == key ? -1 === childIndex ? 0 : childIndex : key, keyPath = [
                            task.keyPath,
                            name,
                            keyOrIndex
                        ];
                        if (null !== task.replay) {
                            var replay = task.replay;
                            childIndex = replay.nodes;
                            for(node = 0; node < childIndex.length; node++)if (key = childIndex[node], keyOrIndex === key[1]) {
                                if (4 === key.length) {
                                    if (null !== name && name !== key[0]) throw Error("Expected the resume to render <" + key[0] + "> in this slot but instead it rendered <" + name + ">. The tree doesn't match so React will fallback to client rendering.");
                                    var childNodes = key[2];
                                    key = key[3];
                                    name = task.node;
                                    task.replay = {
                                        nodes: childNodes,
                                        slots: key,
                                        pendingTasks: 1
                                    };
                                    try {
                                        renderElement(request, task, keyPath, type, props, ref);
                                        if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                                        task.replay.pendingTasks--;
                                    } catch (x) {
                                        if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then)) throw task.node === name && (task.replay = replay), x;
                                        task.replay.pendingTasks--;
                                        props = getThrownInfo(task.componentStack);
                                        erroredReplay(request, task.blockedBoundary, x, props, childNodes, key);
                                    }
                                    task.replay = replay;
                                } else {
                                    if (type !== REACT_SUSPENSE_TYPE) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (getComponentNameFromType(type) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
                                    a: {
                                        type = void 0;
                                        ref = key[5];
                                        replay = key[2];
                                        name = key[3];
                                        keyOrIndex = null === key[4] ? [] : key[4][2];
                                        key = null === key[4] ? null : key[4][3];
                                        var prevKeyPath = task.keyPath, previousReplaySet = task.replay, parentBoundary = task.blockedBoundary, parentHoistableState = task.hoistableState, content = props.children;
                                        props = props.fallback;
                                        var fallbackAbortSet = new Set(), resumedBoundary = createSuspenseBoundary(request, fallbackAbortSet);
                                        resumedBoundary.parentFlushed = !0;
                                        resumedBoundary.rootSegmentID = ref;
                                        task.blockedBoundary = resumedBoundary;
                                        task.hoistableState = resumedBoundary.contentState;
                                        task.keyPath = keyPath;
                                        task.replay = {
                                            nodes: replay,
                                            slots: name,
                                            pendingTasks: 1
                                        };
                                        try {
                                            renderNode(request, task, content, -1);
                                            if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                                            task.replay.pendingTasks--;
                                            if (0 === resumedBoundary.pendingTasks && resumedBoundary.status === PENDING) {
                                                resumedBoundary.status = COMPLETED;
                                                request.completedBoundaries.push(resumedBoundary);
                                                break a;
                                            }
                                        } catch (error) {
                                            resumedBoundary.status = CLIENT_RENDERED, childNodes = getThrownInfo(task.componentStack), type = logRecoverableError(request, error, childNodes), encodeErrorForBoundary(resumedBoundary, type, error, childNodes, !1), task.replay.pendingTasks--, request.clientRenderedBoundaries.push(resumedBoundary);
                                        } finally{
                                            task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.replay = previousReplaySet, task.keyPath = prevKeyPath;
                                        }
                                        childNodes = createReplayTask(request, null, {
                                            nodes: keyOrIndex,
                                            slots: key,
                                            pendingTasks: 0
                                        }, props, -1, parentBoundary, resumedBoundary.fallbackState, fallbackAbortSet, [
                                            keyPath[0],
                                            "Suspense Fallback",
                                            keyPath[2]
                                        ], task.formatContext, task.context, task.treeContext, task.componentStack, !0);
                                        pushComponentStack(childNodes);
                                        request.pingedTasks.push(childNodes);
                                    }
                                }
                                childIndex.splice(node, 1);
                                break;
                            }
                        } else renderElement(request, task, keyPath, type, props, ref);
                        return;
                    case REACT_PORTAL_TYPE:
                        throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
                    case REACT_LAZY_TYPE:
                        node = callLazyInitInDEV(node);
                        if (12 === request.status) throw null;
                        renderNodeDestructive(request, task, node, childIndex);
                        return;
                }
                if (isArrayImpl(node)) {
                    renderChildrenArray(request, task, node, childIndex);
                    return;
                }
                null === node || "object" !== typeof node ? props = null : (childNodes = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], props = "function" === typeof childNodes ? childNodes : null);
                if (props && (childNodes = props.call(node))) {
                    if (childNodes === node) {
                        if (-1 !== childIndex || null === task.componentStack || "function" !== typeof task.componentStack.type || "[object GeneratorFunction]" !== Object.prototype.toString.call(task.componentStack.type) || "[object Generator]" !== Object.prototype.toString.call(childNodes)) didWarnAboutGenerators || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), didWarnAboutGenerators = !0;
                    } else node.entries !== props || didWarnAboutMaps || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0);
                    node = childNodes.next();
                    if (!node.done) {
                        props = [];
                        do props.push(node.value), node = childNodes.next();
                        while (!node.done)
                        renderChildrenArray(request, task, props, childIndex);
                    }
                    return;
                }
                if ("function" === typeof node.then) return task.thenableState = null, renderNodeDestructive(request, task, unwrapThenable(node), childIndex);
                if (node.$$typeof === REACT_CONTEXT_TYPE) return renderNodeDestructive(request, task, node._currentValue, childIndex);
                childIndex = Object.prototype.toString.call(node);
                throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === childIndex ? "object with keys {" + Object.keys(node).join(", ") + "}" : childIndex) + "). If you meant to render a collection of children, use an array instead.");
            }
            "string" === typeof node ? (childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(childIndex.chunks, node, request.renderState, childIndex.lastPushedText))) : "number" === typeof node || "bigint" === typeof node ? (childIndex = task.blockedSegment, null !== childIndex && (childIndex.lastPushedText = pushTextInstance(childIndex.chunks, "" + node, request.renderState, childIndex.lastPushedText))) : ("function" === typeof node && (childIndex = node.displayName || node.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", childIndex, childIndex)), "symbol" === typeof node && console.error("Symbols are not valid as a React child.\n  %s", String(node)));
        }
    }
    function renderChildrenArray(request$jscomp$0, task, children, childIndex) {
        var prevKeyPath = task.keyPath, previousComponentStack = task.componentStack;
        pushServerComponentStack(task, task.node._debugInfo);
        if (-1 !== childIndex && (task.keyPath = [
            task.keyPath,
            "Fragment",
            childIndex
        ], null !== task.replay)) {
            for(var replay = task.replay, replayNodes = replay.nodes, j = 0; j < replayNodes.length; j++){
                var node = replayNodes[j];
                if (node[1] === childIndex) {
                    childIndex = node[2];
                    node = node[3];
                    task.replay = {
                        nodes: childIndex,
                        slots: node,
                        pendingTasks: 1
                    };
                    try {
                        renderChildrenArray(request$jscomp$0, task, children, -1);
                        if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                        task.replay.pendingTasks--;
                    } catch (x) {
                        if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then)) throw x;
                        task.replay.pendingTasks--;
                        children = getThrownInfo(task.componentStack);
                        erroredReplay(request$jscomp$0, task.blockedBoundary, x, children, childIndex, node);
                    }
                    task.replay = replay;
                    replayNodes.splice(j, 1);
                    break;
                }
            }
            task.keyPath = prevKeyPath;
            task.componentStack = previousComponentStack;
            return;
        }
        replay = task.treeContext;
        replayNodes = children.length;
        if (null !== task.replay && (j = task.replay.slots, null !== j && "object" === typeof j)) {
            for(childIndex = 0; childIndex < replayNodes; childIndex++){
                node = children[childIndex];
                task.treeContext = pushTreeContext(replay, replayNodes, childIndex);
                var resumeSegmentID = j[childIndex];
                "number" === typeof resumeSegmentID ? (resumeNode(request$jscomp$0, task, resumeSegmentID, node, childIndex), delete j[childIndex]) : renderNode(request$jscomp$0, task, node, childIndex);
            }
            task.treeContext = replay;
            task.keyPath = prevKeyPath;
            task.componentStack = previousComponentStack;
            return;
        }
        for(j = 0; j < replayNodes; j++){
            childIndex = children[j];
            var request = request$jscomp$0;
            node = task;
            resumeSegmentID = childIndex;
            if (null !== resumeSegmentID && "object" === typeof resumeSegmentID && (resumeSegmentID.$$typeof === REACT_ELEMENT_TYPE || resumeSegmentID.$$typeof === REACT_PORTAL_TYPE) && resumeSegmentID._store && (!resumeSegmentID._store.validated && null == resumeSegmentID.key || 2 === resumeSegmentID._store.validated)) {
                if ("object" !== typeof resumeSegmentID._store) throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
                resumeSegmentID._store.validated = 1;
                var didWarnForKey = request.didWarnForKey;
                null == didWarnForKey && (didWarnForKey = request.didWarnForKey = new WeakSet());
                request = node.componentStack;
                if (null !== request && !didWarnForKey.has(request)) {
                    didWarnForKey.add(request);
                    var componentName = getComponentNameFromType(resumeSegmentID.type);
                    didWarnForKey = resumeSegmentID._owner;
                    var parentOwner = request.owner;
                    request = "";
                    if (parentOwner && "undefined" !== typeof parentOwner.type) {
                        var name = getComponentNameFromType(parentOwner.type);
                        name && (request = "\n\nCheck the render method of `" + name + "`.");
                    }
                    request || componentName && (request = "\n\nCheck the top-level render call using <" + componentName + ">.");
                    componentName = "";
                    null != didWarnForKey && parentOwner !== didWarnForKey && (parentOwner = null, "undefined" !== typeof didWarnForKey.type ? parentOwner = getComponentNameFromType(didWarnForKey.type) : "string" === typeof didWarnForKey.name && (parentOwner = didWarnForKey.name), parentOwner && (componentName = " It was passed a child from " + parentOwner + "."));
                    didWarnForKey = node.componentStack;
                    node.componentStack = {
                        parent: node.componentStack,
                        type: resumeSegmentID.type,
                        owner: resumeSegmentID._owner,
                        stack: null
                    };
                    console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', request, componentName);
                    node.componentStack = didWarnForKey;
                }
            }
            task.treeContext = pushTreeContext(replay, replayNodes, j);
            renderNode(request$jscomp$0, task, childIndex, j);
        }
        task.treeContext = replay;
        task.keyPath = prevKeyPath;
        task.componentStack = previousComponentStack;
    }
    function untrackBoundary(request, boundary) {
        request = request.trackedPostpones;
        null !== request && (boundary = boundary.trackedContentKeyPath, null !== boundary && (boundary = request.workingMap.get(boundary), void 0 !== boundary && (boundary.length = 4, boundary[2] = [], boundary[3] = null)));
    }
    function spawnNewSuspendedReplayTask(request, task, thenableState) {
        return createReplayTask(request, thenableState, task.replay, task.node, task.childIndex, task.blockedBoundary, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
    }
    function spawnNewSuspendedRenderTask(request, task, thenableState) {
        var segment = task.blockedSegment, newSegment = createPendingSegment(request, segment.chunks.length, null, task.formatContext, segment.lastPushedText, !0);
        segment.children.push(newSegment);
        segment.lastPushedText = !1;
        return createRenderTask(request, thenableState, task.node, task.childIndex, task.blockedBoundary, newSegment, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback);
    }
    function renderNode(request, task, node, childIndex) {
        var previousFormatContext = task.formatContext, previousContext = task.context, previousKeyPath = task.keyPath, previousTreeContext = task.treeContext, previousComponentStack = task.componentStack, segment = task.blockedSegment;
        if (null === segment) try {
            return renderNodeDestructive(request, task, node, childIndex);
        } catch (thrownValue) {
            if (resetHooksState(), node = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, "object" === typeof node && null !== node) {
                if ("function" === typeof node.then) {
                    childIndex = getThenableStateAfterSuspending();
                    request = spawnNewSuspendedReplayTask(request, task, childIndex).ping;
                    node.then(request, request);
                    task.formatContext = previousFormatContext;
                    task.context = previousContext;
                    task.keyPath = previousKeyPath;
                    task.treeContext = previousTreeContext;
                    task.componentStack = previousComponentStack;
                    switchContext(previousContext);
                    return;
                }
                if ("Maximum call stack size exceeded" === node.message) {
                    node = getThenableStateAfterSuspending();
                    node = spawnNewSuspendedReplayTask(request, task, node);
                    request.pingedTasks.push(node);
                    task.formatContext = previousFormatContext;
                    task.context = previousContext;
                    task.keyPath = previousKeyPath;
                    task.treeContext = previousTreeContext;
                    task.componentStack = previousComponentStack;
                    switchContext(previousContext);
                    return;
                }
            }
        }
        else {
            var childrenLength = segment.children.length, chunkLength = segment.chunks.length;
            try {
                return renderNodeDestructive(request, task, node, childIndex);
            } catch (thrownValue$3) {
                if (resetHooksState(), segment.children.length = childrenLength, segment.chunks.length = chunkLength, node = thrownValue$3 === SuspenseException ? getSuspendedThenable() : thrownValue$3, "object" === typeof node && null !== node) {
                    if ("function" === typeof node.then) {
                        childIndex = getThenableStateAfterSuspending();
                        request = spawnNewSuspendedRenderTask(request, task, childIndex).ping;
                        node.then(request, request);
                        task.formatContext = previousFormatContext;
                        task.context = previousContext;
                        task.keyPath = previousKeyPath;
                        task.treeContext = previousTreeContext;
                        task.componentStack = previousComponentStack;
                        switchContext(previousContext);
                        return;
                    }
                    if ("Maximum call stack size exceeded" === node.message) {
                        node = getThenableStateAfterSuspending();
                        node = spawnNewSuspendedRenderTask(request, task, node);
                        request.pingedTasks.push(node);
                        task.formatContext = previousFormatContext;
                        task.context = previousContext;
                        task.keyPath = previousKeyPath;
                        task.treeContext = previousTreeContext;
                        task.componentStack = previousComponentStack;
                        switchContext(previousContext);
                        return;
                    }
                }
            }
        }
        task.formatContext = previousFormatContext;
        task.context = previousContext;
        task.keyPath = previousKeyPath;
        task.treeContext = previousTreeContext;
        switchContext(previousContext);
        throw node;
    }
    function erroredReplay(request, boundary, error, errorInfo, replayNodes, resumeSlots) {
        var errorDigest = logRecoverableError(request, error, errorInfo);
        abortRemainingReplayNodes(request, boundary, replayNodes, resumeSlots, error, errorDigest, errorInfo, !1);
    }
    function abortTaskSoft(task) {
        var boundary = task.blockedBoundary;
        task = task.blockedSegment;
        null !== task && (task.status = 3, finishedTask(this, boundary, task));
    }
    function abortRemainingReplayNodes(request$jscomp$0, boundary, nodes, slots, error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted) {
        for(var i = 0; i < nodes.length; i++){
            var node = nodes[i];
            if (4 === node.length) abortRemainingReplayNodes(request$jscomp$0, boundary, node[2], node[3], error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted);
            else {
                var request = request$jscomp$0;
                node = node[5];
                var error = error$jscomp$0, errorDigest = errorDigest$jscomp$0, errorInfo = errorInfo$jscomp$0, wasAborted = aborted, resumedBoundary = createSuspenseBoundary(request, new Set());
                resumedBoundary.parentFlushed = !0;
                resumedBoundary.rootSegmentID = node;
                resumedBoundary.status = CLIENT_RENDERED;
                encodeErrorForBoundary(resumedBoundary, errorDigest, error, errorInfo, wasAborted);
                resumedBoundary.parentFlushed && request.clientRenderedBoundaries.push(resumedBoundary);
            }
        }
        nodes.length = 0;
        if (null !== slots) {
            if (null === boundary) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
            boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, errorDigest$jscomp$0, error$jscomp$0, errorInfo$jscomp$0, aborted), boundary.parentFlushed && request$jscomp$0.clientRenderedBoundaries.push(boundary));
            if ("object" === typeof slots) for(var index in slots)delete slots[index];
        }
    }
    function abortTask(task, request, error) {
        var boundary = task.blockedBoundary, segment = task.blockedSegment;
        if (null !== segment) {
            if (6 === segment.status) return;
            segment.status = 3;
        }
        segment = getThrownInfo(task.componentStack);
        if (null === boundary) {
            if (13 !== request.status && request.status !== CLOSED) {
                boundary = task.replay;
                if (null === boundary) {
                    logRecoverableError(request, error, segment);
                    fatalError(request, error);
                    return;
                }
                boundary.pendingTasks--;
                0 === boundary.pendingTasks && 0 < boundary.nodes.length && (task = logRecoverableError(request, error, segment), abortRemainingReplayNodes(request, null, boundary.nodes, boundary.slots, error, task, segment, !0));
                request.pendingRootTasks--;
                0 === request.pendingRootTasks && completeShell(request);
            }
        } else boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, task = logRecoverableError(request, error, segment), boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, task, error, segment, !0), untrackBoundary(request, boundary), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary)), boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
            return abortTask(fallbackTask, request, error);
        }), boundary.fallbackAbortableTasks.clear();
        request.allPendingTasks--;
        0 === request.allPendingTasks && completeAll(request);
    }
    function safelyEmitEarlyPreloads(request, shellComplete) {
        try {
            var renderState = request.renderState, onHeaders = renderState.onHeaders;
            if (onHeaders) {
                var headers = renderState.headers;
                if (headers) {
                    renderState.headers = null;
                    var linkHeader = headers.preconnects;
                    headers.fontPreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.fontPreloads);
                    headers.highImagePreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.highImagePreloads);
                    if (!shellComplete) {
                        var queueIter = renderState.styles.values(), queueStep = queueIter.next();
                        b: for(; 0 < headers.remainingCapacity && !queueStep.done; queueStep = queueIter.next())for(var sheetIter = queueStep.value.sheets.values(), sheetStep = sheetIter.next(); 0 < headers.remainingCapacity && !sheetStep.done; sheetStep = sheetIter.next()){
                            var sheet = sheetStep.value, props = sheet.props, key = props.href, props$jscomp$0 = sheet.props;
                            var header = getPreloadAsHeader(props$jscomp$0.href, "style", {
                                crossOrigin: props$jscomp$0.crossOrigin,
                                integrity: props$jscomp$0.integrity,
                                nonce: props$jscomp$0.nonce,
                                type: props$jscomp$0.type,
                                fetchPriority: props$jscomp$0.fetchPriority,
                                referrerPolicy: props$jscomp$0.referrerPolicy,
                                media: props$jscomp$0.media
                            });
                            if (0 <= (headers.remainingCapacity -= header.length + 2)) renderState.resets.style[key] = PRELOAD_NO_CREDS, linkHeader && (linkHeader += ", "), linkHeader += header, renderState.resets.style[key] = "string" === typeof props.crossOrigin || "string" === typeof props.integrity ? [
                                props.crossOrigin,
                                props.integrity
                            ] : PRELOAD_NO_CREDS;
                            else break b;
                        }
                    }
                    linkHeader ? onHeaders({
                        Link: linkHeader
                    }) : onHeaders({});
                }
            }
        } catch (error) {
            logRecoverableError(request, error, {});
        }
    }
    function completeShell(request) {
        null === request.trackedPostpones && safelyEmitEarlyPreloads(request, !0);
        request.onShellError = noop;
        request = request.onShellReady;
        request();
    }
    function completeAll(request) {
        safelyEmitEarlyPreloads(request, null === request.trackedPostpones ? !0 : null === request.completedRootSegment || request.completedRootSegment.status !== POSTPONED);
        request = request.onAllReady;
        request();
    }
    function queueCompletedSegment(boundary, segment) {
        if (0 === segment.chunks.length && 1 === segment.children.length && null === segment.children[0].boundary && -1 === segment.children[0].id) {
            var childSegment = segment.children[0];
            childSegment.id = segment.id;
            childSegment.parentFlushed = !0;
            childSegment.status === COMPLETED && queueCompletedSegment(boundary, childSegment);
        } else boundary.completedSegments.push(segment);
    }
    function finishedTask(request, boundary, segment) {
        if (null === boundary) {
            if (null !== segment && segment.parentFlushed) {
                if (null !== request.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
                request.completedRootSegment = segment;
            }
            request.pendingRootTasks--;
            0 === request.pendingRootTasks && completeShell(request);
        } else boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (0 === boundary.pendingTasks ? (boundary.status === PENDING && (boundary.status = COMPLETED), null !== segment && segment.parentFlushed && segment.status === COMPLETED && queueCompletedSegment(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), boundary.status === COMPLETED && (boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request), boundary.fallbackAbortableTasks.clear())) : null !== segment && segment.parentFlushed && segment.status === COMPLETED && (queueCompletedSegment(boundary, segment), 1 === boundary.completedSegments.length && boundary.parentFlushed && request.partialBoundaries.push(boundary)));
        request.allPendingTasks--;
        0 === request.allPendingTasks && completeAll(request);
    }
    function performWork(request$jscomp$1) {
        if (request$jscomp$1.status !== CLOSED && 13 !== request$jscomp$1.status) {
            var prevContext = currentActiveSnapshot, prevDispatcher = ReactSharedInternals.H;
            ReactSharedInternals.H = HooksDispatcher;
            var prevAsyncDispatcher = ReactSharedInternals.A;
            ReactSharedInternals.A = DefaultAsyncDispatcher;
            var prevRequest = currentRequest;
            currentRequest = request$jscomp$1;
            var prevGetCurrentStackImpl = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = getCurrentStackInDEV;
            var prevResumableState = currentResumableState;
            currentResumableState = request$jscomp$1.resumableState;
            try {
                var pingedTasks = request$jscomp$1.pingedTasks, i;
                for(i = 0; i < pingedTasks.length; i++){
                    var request = request$jscomp$1, task = pingedTasks[i], segment = task.blockedSegment;
                    if (null === segment) {
                        var prevTaskInDEV = void 0, request$jscomp$0 = request;
                        request = task;
                        if (0 !== request.replay.pendingTasks) {
                            switchContext(request.context);
                            prevTaskInDEV = currentTaskInDEV;
                            currentTaskInDEV = request;
                            try {
                                "number" === typeof request.replay.slots ? resumeNode(request$jscomp$0, request, request.replay.slots, request.node, request.childIndex) : retryNode(request$jscomp$0, request);
                                if (1 === request.replay.pendingTasks && 0 < request.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                                request.replay.pendingTasks--;
                                request.abortSet.delete(request);
                                finishedTask(request$jscomp$0, request.blockedBoundary, null);
                            } catch (thrownValue) {
                                resetHooksState();
                                var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                                if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                                    var ping = request.ping;
                                    x.then(ping, ping);
                                    request.thenableState = getThenableStateAfterSuspending();
                                } else {
                                    request.replay.pendingTasks--;
                                    request.abortSet.delete(request);
                                    var errorInfo = getThrownInfo(request.componentStack);
                                    erroredReplay(request$jscomp$0, request.blockedBoundary, 12 === request$jscomp$0.status ? request$jscomp$0.fatalError : x, errorInfo, request.replay.nodes, request.replay.slots);
                                    request$jscomp$0.pendingRootTasks--;
                                    0 === request$jscomp$0.pendingRootTasks && completeShell(request$jscomp$0);
                                    request$jscomp$0.allPendingTasks--;
                                    0 === request$jscomp$0.allPendingTasks && completeAll(request$jscomp$0);
                                }
                            } finally{
                                currentTaskInDEV = prevTaskInDEV;
                            }
                        }
                    } else {
                        request$jscomp$0 = prevTaskInDEV = void 0;
                        var task$jscomp$0 = task, segment$jscomp$0 = segment;
                        if (segment$jscomp$0.status === PENDING) {
                            segment$jscomp$0.status = 6;
                            switchContext(task$jscomp$0.context);
                            request$jscomp$0 = currentTaskInDEV;
                            currentTaskInDEV = task$jscomp$0;
                            var childrenLength = segment$jscomp$0.children.length, chunkLength = segment$jscomp$0.chunks.length;
                            try {
                                retryNode(request, task$jscomp$0), segment$jscomp$0.lastPushedText && segment$jscomp$0.textEmbedded && segment$jscomp$0.chunks.push(textSeparator), task$jscomp$0.abortSet.delete(task$jscomp$0), segment$jscomp$0.status = COMPLETED, finishedTask(request, task$jscomp$0.blockedBoundary, segment$jscomp$0);
                            } catch (thrownValue) {
                                resetHooksState();
                                segment$jscomp$0.children.length = childrenLength;
                                segment$jscomp$0.chunks.length = chunkLength;
                                var x$jscomp$0 = thrownValue === SuspenseException ? getSuspendedThenable() : 12 === request.status ? request.fatalError : thrownValue;
                                if ("object" === typeof x$jscomp$0 && null !== x$jscomp$0 && "function" === typeof x$jscomp$0.then) {
                                    segment$jscomp$0.status = PENDING;
                                    task$jscomp$0.thenableState = getThenableStateAfterSuspending();
                                    var ping$jscomp$0 = task$jscomp$0.ping;
                                    x$jscomp$0.then(ping$jscomp$0, ping$jscomp$0);
                                } else {
                                    var errorInfo$jscomp$0 = getThrownInfo(task$jscomp$0.componentStack);
                                    task$jscomp$0.abortSet.delete(task$jscomp$0);
                                    segment$jscomp$0.status = 4;
                                    var boundary = task$jscomp$0.blockedBoundary;
                                    prevTaskInDEV = logRecoverableError(request, x$jscomp$0, errorInfo$jscomp$0);
                                    null === boundary ? fatalError(request, x$jscomp$0) : (boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, prevTaskInDEV, x$jscomp$0, errorInfo$jscomp$0, !1), untrackBoundary(request, boundary), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary)));
                                    request.allPendingTasks--;
                                    0 === request.allPendingTasks && completeAll(request);
                                }
                            } finally{
                                currentTaskInDEV = request$jscomp$0;
                            }
                        }
                    }
                }
                pingedTasks.splice(0, i);
                null !== request$jscomp$1.destination && flushCompletedQueues(request$jscomp$1, request$jscomp$1.destination);
            } catch (error) {
                logRecoverableError(request$jscomp$1, error, {}), fatalError(request$jscomp$1, error);
            } finally{
                currentResumableState = prevResumableState, ReactSharedInternals.H = prevDispatcher, ReactSharedInternals.A = prevAsyncDispatcher, ReactSharedInternals.getCurrentStack = prevGetCurrentStackImpl, prevDispatcher === HooksDispatcher && switchContext(prevContext), currentRequest = prevRequest;
            }
        }
    }
    function flushSubtree(request, destination, segment, hoistableState) {
        segment.parentFlushed = !0;
        switch(segment.status){
            case PENDING:
                segment.id = request.nextSegmentId++;
            case POSTPONED:
                return hoistableState = segment.id, segment.lastPushedText = !1, segment.textEmbedded = !1, request = request.renderState, writeChunk(destination, placeholder1), writeChunk(destination, request.placeholderPrefix), request = stringToChunk(hoistableState.toString(16)), writeChunk(destination, request), writeChunkAndReturn(destination, placeholder2);
            case COMPLETED:
                segment.status = FLUSHED;
                var r = !0, chunks = segment.chunks, chunkIdx = 0;
                segment = segment.children;
                for(var childIdx = 0; childIdx < segment.length; childIdx++){
                    for(r = segment[childIdx]; chunkIdx < r.index; chunkIdx++)writeChunk(destination, chunks[chunkIdx]);
                    r = flushSegment(request, destination, r, hoistableState);
                }
                for(; chunkIdx < chunks.length - 1; chunkIdx++)writeChunk(destination, chunks[chunkIdx]);
                chunkIdx < chunks.length && (r = writeChunkAndReturn(destination, chunks[chunkIdx]));
                return r;
            default:
                throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
        }
    }
    function flushSegment(request, destination, segment, hoistableState) {
        var boundary = segment.boundary;
        if (null === boundary) return flushSubtree(request, destination, segment, hoistableState);
        boundary.parentFlushed = !0;
        if (boundary.status === CLIENT_RENDERED) {
            var errorDigest = boundary.errorDigest, errorMessage = boundary.errorMessage, errorStack = boundary.errorStack;
            boundary = boundary.errorComponentStack;
            writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
            writeChunk(destination, clientRenderedSuspenseBoundaryError1);
            errorDigest && (writeChunk(destination, clientRenderedSuspenseBoundaryError1A), writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
            errorMessage && (writeChunk(destination, clientRenderedSuspenseBoundaryError1B), writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMessage))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
            errorStack && (writeChunk(destination, clientRenderedSuspenseBoundaryError1C), writeChunk(destination, stringToChunk(escapeTextForBrowser(errorStack))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
            boundary && (writeChunk(destination, clientRenderedSuspenseBoundaryError1D), writeChunk(destination, stringToChunk(escapeTextForBrowser(boundary))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
            writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
            flushSubtree(request, destination, segment, hoistableState);
        } else if (boundary.status !== COMPLETED) boundary.status === PENDING && (boundary.rootSegmentID = request.nextSegmentId++), 0 < boundary.completedSegments.length && request.partialBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), hoistableState && (boundary = boundary.fallbackState, boundary.styles.forEach(hoistStyleQueueDependency, hoistableState), boundary.stylesheets.forEach(hoistStylesheetDependency, hoistableState)), flushSubtree(request, destination, segment, hoistableState);
        else if (boundary.byteSize > request.progressiveChunkSize) boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), flushSubtree(request, destination, segment, hoistableState);
        else {
            hoistableState && (segment = boundary.contentState, segment.styles.forEach(hoistStyleQueueDependency, hoistableState), segment.stylesheets.forEach(hoistStylesheetDependency, hoistableState));
            writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
            segment = boundary.completedSegments;
            if (1 !== segment.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
            flushSegment(request, destination, segment[0], hoistableState);
        }
        return writeChunkAndReturn(destination, endSuspenseBoundary);
    }
    function flushSegmentContainer(request, destination, segment, hoistableState) {
        writeStartSegment(destination, request.renderState, segment.parentFormatContext, segment.id);
        flushSegment(request, destination, segment, hoistableState);
        return writeEndSegment(destination, segment.parentFormatContext);
    }
    function flushCompletedBoundary(request, destination, boundary) {
        for(var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++)flushPartiallyCompletedSegment(request, destination, boundary, completedSegments[i]);
        completedSegments.length = 0;
        writeHoistablesForBoundary(destination, boundary.contentState, request.renderState);
        completedSegments = request.resumableState;
        request = request.renderState;
        i = boundary.rootSegmentID;
        boundary = boundary.contentState;
        var requiresStyleInsertion = request.stylesToHoist;
        request.stylesToHoist = !1;
        writeChunk(destination, request.startInlineScript);
        requiresStyleInsertion ? (completedSegments.instructions & SentCompleteBoundaryFunction) === NothingSent ? (completedSegments.instructions = completedSegments.instructions | SentStyleInsertionFunction | SentCompleteBoundaryFunction, writeChunk(destination, completeBoundaryWithStylesScript1FullBoth)) : (completedSegments.instructions & SentStyleInsertionFunction) === NothingSent ? (completedSegments.instructions |= SentStyleInsertionFunction, writeChunk(destination, completeBoundaryWithStylesScript1FullPartial)) : writeChunk(destination, completeBoundaryWithStylesScript1Partial) : (completedSegments.instructions & SentCompleteBoundaryFunction) === NothingSent ? (completedSegments.instructions |= SentCompleteBoundaryFunction, writeChunk(destination, completeBoundaryScript1Full)) : writeChunk(destination, completeBoundaryScript1Partial);
        completedSegments = stringToChunk(i.toString(16));
        writeChunk(destination, request.boundaryPrefix);
        writeChunk(destination, completedSegments);
        writeChunk(destination, completeBoundaryScript2);
        writeChunk(destination, request.segmentPrefix);
        writeChunk(destination, completedSegments);
        requiresStyleInsertion ? (writeChunk(destination, completeBoundaryScript3a), writeStyleResourceDependenciesInJS(destination, boundary)) : writeChunk(destination, completeBoundaryScript3b);
        boundary = writeChunkAndReturn(destination, completeBoundaryScriptEnd);
        return writeBootstrap(destination, request) && boundary;
    }
    function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
        if (segment.status === FLUSHED) return !0;
        var hoistableState = boundary.contentState, segmentID = segment.id;
        if (-1 === segmentID) {
            if (-1 === (segment.id = boundary.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
            return flushSegmentContainer(request, destination, segment, hoistableState);
        }
        if (segmentID === boundary.rootSegmentID) return flushSegmentContainer(request, destination, segment, hoistableState);
        flushSegmentContainer(request, destination, segment, hoistableState);
        boundary = request.resumableState;
        request = request.renderState;
        writeChunk(destination, request.startInlineScript);
        (boundary.instructions & SentCompleteSegmentFunction) === NothingSent ? (boundary.instructions |= SentCompleteSegmentFunction, writeChunk(destination, completeSegmentScript1Full)) : writeChunk(destination, completeSegmentScript1Partial);
        writeChunk(destination, request.segmentPrefix);
        segmentID = stringToChunk(segmentID.toString(16));
        writeChunk(destination, segmentID);
        writeChunk(destination, completeSegmentScript2);
        writeChunk(destination, request.placeholderPrefix);
        writeChunk(destination, segmentID);
        destination = writeChunkAndReturn(destination, completeSegmentScriptEnd);
        return destination;
    }
    function flushCompletedQueues(request, destination) {
        currentView = new Uint8Array(2048);
        writtenBytes = 0;
        try {
            if (!(0 < request.pendingRootTasks)) {
                var i, completedRootSegment = request.completedRootSegment;
                if (null !== completedRootSegment) {
                    if (completedRootSegment.status === POSTPONED) return;
                    var renderState = request.renderState, htmlChunks = renderState.htmlChunks, headChunks = renderState.headChunks, i$jscomp$0;
                    if (htmlChunks) {
                        for(i$jscomp$0 = 0; i$jscomp$0 < htmlChunks.length; i$jscomp$0++)writeChunk(destination, htmlChunks[i$jscomp$0]);
                        if (headChunks) for(i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)writeChunk(destination, headChunks[i$jscomp$0]);
                        else writeChunk(destination, startChunkForTag("head")), writeChunk(destination, endOfStartTag);
                    } else if (headChunks) for(i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)writeChunk(destination, headChunks[i$jscomp$0]);
                    var charsetChunks = renderState.charsetChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < charsetChunks.length; i$jscomp$0++)writeChunk(destination, charsetChunks[i$jscomp$0]);
                    charsetChunks.length = 0;
                    renderState.preconnects.forEach(flushResource, destination);
                    renderState.preconnects.clear();
                    var viewportChunks = renderState.viewportChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < viewportChunks.length; i$jscomp$0++)writeChunk(destination, viewportChunks[i$jscomp$0]);
                    viewportChunks.length = 0;
                    renderState.fontPreloads.forEach(flushResource, destination);
                    renderState.fontPreloads.clear();
                    renderState.highImagePreloads.forEach(flushResource, destination);
                    renderState.highImagePreloads.clear();
                    renderState.styles.forEach(flushStylesInPreamble, destination);
                    var importMapChunks = renderState.importMapChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < importMapChunks.length; i$jscomp$0++)writeChunk(destination, importMapChunks[i$jscomp$0]);
                    importMapChunks.length = 0;
                    renderState.bootstrapScripts.forEach(flushResource, destination);
                    renderState.scripts.forEach(flushResource, destination);
                    renderState.scripts.clear();
                    renderState.bulkPreloads.forEach(flushResource, destination);
                    renderState.bulkPreloads.clear();
                    var hoistableChunks = renderState.hoistableChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < hoistableChunks.length; i$jscomp$0++)writeChunk(destination, hoistableChunks[i$jscomp$0]);
                    hoistableChunks.length = 0;
                    htmlChunks && null === headChunks && writeChunk(destination, endChunkForTag("head"));
                    flushSegment(request, destination, completedRootSegment, null);
                    request.completedRootSegment = null;
                    writeBootstrap(destination, request.renderState);
                }
                var renderState$jscomp$0 = request.renderState;
                completedRootSegment = 0;
                var viewportChunks$jscomp$0 = renderState$jscomp$0.viewportChunks;
                for(completedRootSegment = 0; completedRootSegment < viewportChunks$jscomp$0.length; completedRootSegment++)writeChunk(destination, viewportChunks$jscomp$0[completedRootSegment]);
                viewportChunks$jscomp$0.length = 0;
                renderState$jscomp$0.preconnects.forEach(flushResource, destination);
                renderState$jscomp$0.preconnects.clear();
                renderState$jscomp$0.fontPreloads.forEach(flushResource, destination);
                renderState$jscomp$0.fontPreloads.clear();
                renderState$jscomp$0.highImagePreloads.forEach(flushResource, destination);
                renderState$jscomp$0.highImagePreloads.clear();
                renderState$jscomp$0.styles.forEach(preloadLateStyles, destination);
                renderState$jscomp$0.scripts.forEach(flushResource, destination);
                renderState$jscomp$0.scripts.clear();
                renderState$jscomp$0.bulkPreloads.forEach(flushResource, destination);
                renderState$jscomp$0.bulkPreloads.clear();
                var hoistableChunks$jscomp$0 = renderState$jscomp$0.hoistableChunks;
                for(completedRootSegment = 0; completedRootSegment < hoistableChunks$jscomp$0.length; completedRootSegment++)writeChunk(destination, hoistableChunks$jscomp$0[completedRootSegment]);
                hoistableChunks$jscomp$0.length = 0;
                var clientRenderedBoundaries = request.clientRenderedBoundaries;
                for(i = 0; i < clientRenderedBoundaries.length; i++){
                    var boundary = clientRenderedBoundaries[i];
                    renderState$jscomp$0 = destination;
                    var resumableState = request.resumableState, renderState$jscomp$1 = request.renderState, id = boundary.rootSegmentID, errorDigest = boundary.errorDigest, errorMessage = boundary.errorMessage, errorStack = boundary.errorStack, errorComponentStack = boundary.errorComponentStack;
                    writeChunk(renderState$jscomp$0, renderState$jscomp$1.startInlineScript);
                    (resumableState.instructions & SentClientRenderFunction) === NothingSent ? (resumableState.instructions |= SentClientRenderFunction, writeChunk(renderState$jscomp$0, clientRenderScript1Full)) : writeChunk(renderState$jscomp$0, clientRenderScript1Partial);
                    writeChunk(renderState$jscomp$0, renderState$jscomp$1.boundaryPrefix);
                    writeChunk(renderState$jscomp$0, stringToChunk(id.toString(16)));
                    writeChunk(renderState$jscomp$0, clientRenderScript1A);
                    if (errorDigest || errorMessage || errorStack || errorComponentStack) writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || "")));
                    if (errorMessage || errorStack || errorComponentStack) writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || "")));
                    if (errorStack || errorComponentStack) writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, stringToChunk(escapeJSStringsForInstructionScripts(errorStack || "")));
                    errorComponentStack && (writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack))));
                    var JSCompiler_inline_result = writeChunkAndReturn(renderState$jscomp$0, clientRenderScriptEnd);
                    if (!JSCompiler_inline_result) {
                        request.destination = null;
                        i++;
                        clientRenderedBoundaries.splice(0, i);
                        return;
                    }
                }
                clientRenderedBoundaries.splice(0, i);
                var completedBoundaries = request.completedBoundaries;
                for(i = 0; i < completedBoundaries.length; i++)if (!flushCompletedBoundary(request, destination, completedBoundaries[i])) {
                    request.destination = null;
                    i++;
                    completedBoundaries.splice(0, i);
                    return;
                }
                completedBoundaries.splice(0, i);
                completeWriting(destination);
                currentView = new Uint8Array(2048);
                writtenBytes = 0;
                var partialBoundaries = request.partialBoundaries;
                for(i = 0; i < partialBoundaries.length; i++){
                    a: {
                        clientRenderedBoundaries = request;
                        boundary = destination;
                        var boundary$jscomp$0 = partialBoundaries[i], completedSegments = boundary$jscomp$0.completedSegments;
                        for(JSCompiler_inline_result = 0; JSCompiler_inline_result < completedSegments.length; JSCompiler_inline_result++)if (!flushPartiallyCompletedSegment(clientRenderedBoundaries, boundary, boundary$jscomp$0, completedSegments[JSCompiler_inline_result])) {
                            JSCompiler_inline_result++;
                            completedSegments.splice(0, JSCompiler_inline_result);
                            var JSCompiler_inline_result$jscomp$0 = !1;
                            break a;
                        }
                        completedSegments.splice(0, JSCompiler_inline_result);
                        JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary(boundary, boundary$jscomp$0.contentState, clientRenderedBoundaries.renderState);
                    }
                    if (!JSCompiler_inline_result$jscomp$0) {
                        request.destination = null;
                        i++;
                        partialBoundaries.splice(0, i);
                        return;
                    }
                }
                partialBoundaries.splice(0, i);
                var largeBoundaries = request.completedBoundaries;
                for(i = 0; i < largeBoundaries.length; i++)if (!flushCompletedBoundary(request, destination, largeBoundaries[i])) {
                    request.destination = null;
                    i++;
                    largeBoundaries.splice(0, i);
                    return;
                }
                largeBoundaries.splice(0, i);
            }
        } finally{
            0 === request.allPendingTasks && 0 === request.pingedTasks.length && 0 === request.clientRenderedBoundaries.length && 0 === request.completedBoundaries.length ? (request.flushScheduled = !1, i = request.resumableState, i.hasBody && writeChunk(destination, endChunkForTag("body")), i.hasHtml && writeChunk(destination, endChunkForTag("html")), completeWriting(destination), 0 !== request.abortableTasks.size && console.error("There was still abortable task at the root when we closed. This is a bug in React."), request.status = CLOSED, destination.close(), request.destination = null) : completeWriting(destination);
        }
    }
    function startWork(request) {
        request.flushScheduled = null !== request.destination;
        scheduleMicrotask(function() {
            return performWork(request);
        });
        scheduleWork(function() {
            10 === request.status && (request.status = 11);
            null === request.trackedPostpones && safelyEmitEarlyPreloads(request, 0 === request.pendingRootTasks);
        });
    }
    function enqueueFlush(request) {
        !1 === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination && (request.flushScheduled = !0, scheduleWork(function() {
            var destination = request.destination;
            destination ? flushCompletedQueues(request, destination) : request.flushScheduled = !1;
        }));
    }
    function startFlowing(request, destination) {
        if (13 === request.status) request.status = CLOSED, closeWithError(destination, request.fatalError);
        else if (request.status !== CLOSED && null === request.destination) {
            request.destination = destination;
            try {
                flushCompletedQueues(request, destination);
            } catch (error) {
                logRecoverableError(request, error, {}), fatalError(request, error);
            }
        }
    }
    function abort(request, reason) {
        if (11 === request.status || 10 === request.status) request.status = 12;
        try {
            var abortableTasks = request.abortableTasks;
            if (0 < abortableTasks.size) {
                var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason;
                request.fatalError = error;
                abortableTasks.forEach(function(task) {
                    return abortTask(task, request, error);
                });
                abortableTasks.clear();
            }
            null !== request.destination && flushCompletedQueues(request, request.destination);
        } catch (error$4) {
            logRecoverableError(request, error$4, {}), fatalError(request, error$4);
        }
    }
    function ensureCorrectIsomorphicReactVersion() {
        var isomorphicReactPackageVersion = React.version;
        if ("19.0.0-rc-65e06cb7-20241218" !== isomorphicReactPackageVersion) throw Error('Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:\n  - react:      ' + (isomorphicReactPackageVersion + "\n  - react-dom:  19.0.0-rc-65e06cb7-20241218\nLearn more: https://react.dev/warnings/version-mismatch"));
    }
    var React = __turbopack_require__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), ReactDOM = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_SCOPE_TYPE = Symbol.for("react.scope"), REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden"), REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, isArrayImpl = Array.isArray, jsxPropsParents = new WeakMap(), jsxChildrenParents = new WeakMap(), CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference"), channel = new MessageChannel(), taskQueue = [];
    channel.port1.onmessage = function() {
        var task = taskQueue.shift();
        task && task();
    };
    var LocalPromise = Promise, scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : function(callback) {
        LocalPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
    }, currentView = null, writtenBytes = 0, textEncoder = new TextEncoder(), assign = Object.assign, hasOwnProperty = Object.prototype.hasOwnProperty, VALID_ATTRIBUTE_NAME_REGEX = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), illegalAttributeNameCache = {}, validatedAttributeNameCache = {}, unitlessNumbers = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), aliases = new Map([
        [
            "acceptCharset",
            "accept-charset"
        ],
        [
            "htmlFor",
            "for"
        ],
        [
            "httpEquiv",
            "http-equiv"
        ],
        [
            "crossOrigin",
            "crossorigin"
        ],
        [
            "accentHeight",
            "accent-height"
        ],
        [
            "alignmentBaseline",
            "alignment-baseline"
        ],
        [
            "arabicForm",
            "arabic-form"
        ],
        [
            "baselineShift",
            "baseline-shift"
        ],
        [
            "capHeight",
            "cap-height"
        ],
        [
            "clipPath",
            "clip-path"
        ],
        [
            "clipRule",
            "clip-rule"
        ],
        [
            "colorInterpolation",
            "color-interpolation"
        ],
        [
            "colorInterpolationFilters",
            "color-interpolation-filters"
        ],
        [
            "colorProfile",
            "color-profile"
        ],
        [
            "colorRendering",
            "color-rendering"
        ],
        [
            "dominantBaseline",
            "dominant-baseline"
        ],
        [
            "enableBackground",
            "enable-background"
        ],
        [
            "fillOpacity",
            "fill-opacity"
        ],
        [
            "fillRule",
            "fill-rule"
        ],
        [
            "floodColor",
            "flood-color"
        ],
        [
            "floodOpacity",
            "flood-opacity"
        ],
        [
            "fontFamily",
            "font-family"
        ],
        [
            "fontSize",
            "font-size"
        ],
        [
            "fontSizeAdjust",
            "font-size-adjust"
        ],
        [
            "fontStretch",
            "font-stretch"
        ],
        [
            "fontStyle",
            "font-style"
        ],
        [
            "fontVariant",
            "font-variant"
        ],
        [
            "fontWeight",
            "font-weight"
        ],
        [
            "glyphName",
            "glyph-name"
        ],
        [
            "glyphOrientationHorizontal",
            "glyph-orientation-horizontal"
        ],
        [
            "glyphOrientationVertical",
            "glyph-orientation-vertical"
        ],
        [
            "horizAdvX",
            "horiz-adv-x"
        ],
        [
            "horizOriginX",
            "horiz-origin-x"
        ],
        [
            "imageRendering",
            "image-rendering"
        ],
        [
            "letterSpacing",
            "letter-spacing"
        ],
        [
            "lightingColor",
            "lighting-color"
        ],
        [
            "markerEnd",
            "marker-end"
        ],
        [
            "markerMid",
            "marker-mid"
        ],
        [
            "markerStart",
            "marker-start"
        ],
        [
            "overlinePosition",
            "overline-position"
        ],
        [
            "overlineThickness",
            "overline-thickness"
        ],
        [
            "paintOrder",
            "paint-order"
        ],
        [
            "panose-1",
            "panose-1"
        ],
        [
            "pointerEvents",
            "pointer-events"
        ],
        [
            "renderingIntent",
            "rendering-intent"
        ],
        [
            "shapeRendering",
            "shape-rendering"
        ],
        [
            "stopColor",
            "stop-color"
        ],
        [
            "stopOpacity",
            "stop-opacity"
        ],
        [
            "strikethroughPosition",
            "strikethrough-position"
        ],
        [
            "strikethroughThickness",
            "strikethrough-thickness"
        ],
        [
            "strokeDasharray",
            "stroke-dasharray"
        ],
        [
            "strokeDashoffset",
            "stroke-dashoffset"
        ],
        [
            "strokeLinecap",
            "stroke-linecap"
        ],
        [
            "strokeLinejoin",
            "stroke-linejoin"
        ],
        [
            "strokeMiterlimit",
            "stroke-miterlimit"
        ],
        [
            "strokeOpacity",
            "stroke-opacity"
        ],
        [
            "strokeWidth",
            "stroke-width"
        ],
        [
            "textAnchor",
            "text-anchor"
        ],
        [
            "textDecoration",
            "text-decoration"
        ],
        [
            "textRendering",
            "text-rendering"
        ],
        [
            "transformOrigin",
            "transform-origin"
        ],
        [
            "underlinePosition",
            "underline-position"
        ],
        [
            "underlineThickness",
            "underline-thickness"
        ],
        [
            "unicodeBidi",
            "unicode-bidi"
        ],
        [
            "unicodeRange",
            "unicode-range"
        ],
        [
            "unitsPerEm",
            "units-per-em"
        ],
        [
            "vAlphabetic",
            "v-alphabetic"
        ],
        [
            "vHanging",
            "v-hanging"
        ],
        [
            "vIdeographic",
            "v-ideographic"
        ],
        [
            "vMathematical",
            "v-mathematical"
        ],
        [
            "vectorEffect",
            "vector-effect"
        ],
        [
            "vertAdvY",
            "vert-adv-y"
        ],
        [
            "vertOriginX",
            "vert-origin-x"
        ],
        [
            "vertOriginY",
            "vert-origin-y"
        ],
        [
            "wordSpacing",
            "word-spacing"
        ],
        [
            "writingMode",
            "writing-mode"
        ],
        [
            "xmlnsXlink",
            "xmlns:xlink"
        ],
        [
            "xHeight",
            "x-height"
        ]
    ]), hasReadOnlyValue = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
    }, ariaProperties = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
    }, warnedProperties$1 = {}, rARIA$1 = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rARIACamel$1 = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), didWarnValueNull = !1, possibleStandardNames = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        fetchpriority: "fetchPriority",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        inert: "inert",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        popover: "popover",
        popovertarget: "popoverTarget",
        popovertargetaction: "popoverTargetAction",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        transformorigin: "transformOrigin",
        "transform-origin": "transformOrigin",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
    }, warnedProperties = {}, EVENT_NAME_REGEX = /^on./, INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/, rARIA = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rARIACamel = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/, msPattern$1 = /^-ms-/, hyphenPattern = /-(.)/g, badStyleValueWithSemicolonPattern = /;\s*$/, warnedStyleNames = {}, warnedStyleValues = {}, warnedForNaNValue = !1, warnedForInfinityValue = !1, matchHtmlRegExp = /["'&<>]/, uppercasePattern = /([A-Z])/g, msPattern = /^ms-/, isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, NotPending = Object.freeze({
        pending: !1,
        data: null,
        method: null,
        action: null
    }), previousDispatcher = ReactDOMSharedInternals.d;
    ReactDOMSharedInternals.d = {
        f: previousDispatcher.f,
        r: previousDispatcher.r,
        D: function(href) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if ("string" === typeof href && href) {
                    if (!resumableState.dnsResources.hasOwnProperty(href)) {
                        resumableState.dnsResources[href] = EXISTS;
                        resumableState = renderState.headers;
                        var header, JSCompiler_temp;
                        if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) JSCompiler_temp = (header = "<" + escapeHrefForLinkHeaderURLContext(href) + ">; rel=dns-prefetch", 0 <= (resumableState.remainingCapacity -= header.length + 2));
                        JSCompiler_temp ? (renderState.resets.dns[href] = EXISTS, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (header = [], pushLinkImpl(header, {
                            href: href,
                            rel: "dns-prefetch"
                        }), renderState.preconnects.add(header));
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.D(href);
        },
        C: function(href, crossOrigin) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if ("string" === typeof href && href) {
                    var bucket = "use-credentials" === crossOrigin ? "credentials" : "string" === typeof crossOrigin ? "anonymous" : "default";
                    if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
                        resumableState.connectResources[bucket][href] = EXISTS;
                        resumableState = renderState.headers;
                        var header, JSCompiler_temp;
                        if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) {
                            JSCompiler_temp = "<" + escapeHrefForLinkHeaderURLContext(href) + ">; rel=preconnect";
                            if ("string" === typeof crossOrigin) {
                                var escapedCrossOrigin = escapeStringForLinkHeaderQuotedParamValueContext(crossOrigin, "crossOrigin");
                                JSCompiler_temp += '; crossorigin="' + escapedCrossOrigin + '"';
                            }
                            JSCompiler_temp = (header = JSCompiler_temp, 0 <= (resumableState.remainingCapacity -= header.length + 2));
                        }
                        JSCompiler_temp ? (renderState.resets.connect[bucket][href] = EXISTS, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (bucket = [], pushLinkImpl(bucket, {
                            rel: "preconnect",
                            href: href,
                            crossOrigin: crossOrigin
                        }), renderState.preconnects.add(bucket));
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.C(href, crossOrigin);
        },
        L: function(href, as, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (as && href) {
                    switch(as){
                        case "image":
                            if (options) {
                                var imageSrcSet = options.imageSrcSet;
                                var imageSizes = options.imageSizes;
                                var fetchPriority = options.fetchPriority;
                            }
                            var key = imageSrcSet ? imageSrcSet + "\n" + (imageSizes || "") : href;
                            if (resumableState.imageResources.hasOwnProperty(key)) return;
                            resumableState.imageResources[key] = PRELOAD_NO_CREDS;
                            resumableState = renderState.headers;
                            var header;
                            resumableState && 0 < resumableState.remainingCapacity && "high" === fetchPriority && (header = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key] = PRELOAD_NO_CREDS, resumableState.highImagePreloads && (resumableState.highImagePreloads += ", "), resumableState.highImagePreloads += header) : (resumableState = [], pushLinkImpl(resumableState, assign({
                                rel: "preload",
                                href: imageSrcSet ? void 0 : href,
                                as: as
                            }, options)), "high" === fetchPriority ? renderState.highImagePreloads.add(resumableState) : (renderState.bulkPreloads.add(resumableState), renderState.preloads.images.set(key, resumableState)));
                            break;
                        case "style":
                            if (resumableState.styleResources.hasOwnProperty(href)) return;
                            imageSrcSet = [];
                            pushLinkImpl(imageSrcSet, assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options));
                            resumableState.styleResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            renderState.preloads.stylesheets.set(href, imageSrcSet);
                            renderState.bulkPreloads.add(imageSrcSet);
                            break;
                        case "script":
                            if (resumableState.scriptResources.hasOwnProperty(href)) return;
                            imageSrcSet = [];
                            renderState.preloads.scripts.set(href, imageSrcSet);
                            renderState.bulkPreloads.add(imageSrcSet);
                            pushLinkImpl(imageSrcSet, assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options));
                            resumableState.scriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            break;
                        default:
                            if (resumableState.unknownResources.hasOwnProperty(as)) {
                                if (imageSrcSet = resumableState.unknownResources[as], imageSrcSet.hasOwnProperty(href)) return;
                            } else imageSrcSet = {}, resumableState.unknownResources[as] = imageSrcSet;
                            imageSrcSet[href] = PRELOAD_NO_CREDS;
                            if ((resumableState = renderState.headers) && 0 < resumableState.remainingCapacity && "font" === as && (key = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= key.length + 2))) renderState.resets.font[href] = PRELOAD_NO_CREDS, resumableState.fontPreloads && (resumableState.fontPreloads += ", "), resumableState.fontPreloads += key;
                            else switch(resumableState = [], href = assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options), pushLinkImpl(resumableState, href), as){
                                case "font":
                                    renderState.fontPreloads.add(resumableState);
                                    break;
                                default:
                                    renderState.bulkPreloads.add(resumableState);
                            }
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.L(href, as, options);
        },
        m: function(href, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (href) {
                    var as = options && "string" === typeof options.as ? options.as : "script";
                    switch(as){
                        case "script":
                            if (resumableState.moduleScriptResources.hasOwnProperty(href)) return;
                            as = [];
                            resumableState.moduleScriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            renderState.preloads.moduleScripts.set(href, as);
                            break;
                        default:
                            if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
                                var resources = resumableState.unknownResources[as];
                                if (resources.hasOwnProperty(href)) return;
                            } else resources = {}, resumableState.moduleUnknownResources[as] = resources;
                            as = [];
                            resources[href] = PRELOAD_NO_CREDS;
                    }
                    pushLinkImpl(as, assign({
                        rel: "modulepreload",
                        href: href
                    }, options));
                    renderState.bulkPreloads.add(as);
                    enqueueFlush(request);
                }
            } else previousDispatcher.m(href, options);
        },
        X: function(src, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (src) {
                    var resourceState = resumableState.scriptResources.hasOwnProperty(src) ? resumableState.scriptResources[src] : void 0;
                    resourceState !== EXISTS && (resumableState.scriptResources[src] = EXISTS, options = assign({
                        src: src,
                        async: !0
                    }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.scripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
                }
            } else previousDispatcher.X(src, options);
        },
        S: function(href, precedence, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (href) {
                    precedence = precedence || "default";
                    var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
                    resourceState !== EXISTS && (resumableState.styleResources[href] = EXISTS, styleQueue || (styleQueue = {
                        precedence: stringToChunk(escapeTextForBrowser(precedence)),
                        rules: [],
                        hrefs: [],
                        sheets: new Map()
                    }, renderState.styles.set(precedence, styleQueue)), precedence = {
                        state: PENDING$1,
                        props: assign({
                            rel: "stylesheet",
                            href: href,
                            "data-precedence": precedence
                        }, options)
                    }, resourceState && (2 === resourceState.length && adoptPreloadCredentials(precedence.props, resourceState), (renderState = renderState.preloads.stylesheets.get(href)) && 0 < renderState.length ? renderState.length = 0 : precedence.state = PRELOADED), styleQueue.sheets.set(href, precedence), enqueueFlush(request));
                }
            } else previousDispatcher.S(href, precedence, options);
        },
        M: function(src, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (src) {
                    var resourceState = resumableState.moduleScriptResources.hasOwnProperty(src) ? resumableState.moduleScriptResources[src] : void 0;
                    resourceState !== EXISTS && (resumableState.moduleScriptResources[src] = EXISTS, options = assign({
                        src: src,
                        type: "module",
                        async: !0
                    }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.moduleScripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
                }
            } else previousDispatcher.M(src, options);
        }
    };
    var NothingSent = 0, SentCompleteSegmentFunction = 1, SentCompleteBoundaryFunction = 2, SentClientRenderFunction = 4, SentStyleInsertionFunction = 8, EXISTS = null, PRELOAD_NO_CREDS = [];
    Object.freeze(PRELOAD_NO_CREDS);
    stringToPrecomputedChunk('"></template>');
    var startInlineScript = stringToPrecomputedChunk("<script>"), endInlineScript = stringToPrecomputedChunk("\x3c/script>"), startScriptSrc = stringToPrecomputedChunk('<script src="'), startModuleSrc = stringToPrecomputedChunk('<script type="module" src="'), scriptNonce = stringToPrecomputedChunk('" nonce="'), scriptIntegirty = stringToPrecomputedChunk('" integrity="'), scriptCrossOrigin = stringToPrecomputedChunk('" crossorigin="'), endAsyncScript = stringToPrecomputedChunk('" async="">\x3c/script>'), scriptRegex = /(<\/|<)(s)(cript)/gi, importMapScriptStart = stringToPrecomputedChunk('<script type="importmap">'), importMapScriptEnd = stringToPrecomputedChunk("\x3c/script>");
    var didWarnForNewBooleanPropsWithEmptyValue = {};
    var ROOT_HTML_MODE = 0, HTML_HTML_MODE = 1, HTML_MODE = 2, SVG_MODE = 3, MATHML_MODE = 4, HTML_TABLE_MODE = 5, HTML_TABLE_BODY_MODE = 6, HTML_TABLE_ROW_MODE = 7, HTML_COLGROUP_MODE = 8, textSeparator = stringToPrecomputedChunk("\x3c!-- --\x3e"), styleNameCache = new Map(), styleAttributeStart = stringToPrecomputedChunk(' style="'), styleAssign = stringToPrecomputedChunk(":"), styleSeparator = stringToPrecomputedChunk(";"), attributeSeparator = stringToPrecomputedChunk(" "), attributeAssign = stringToPrecomputedChunk('="'), attributeEnd = stringToPrecomputedChunk('"'), attributeEmptyString = stringToPrecomputedChunk('=""'), actionJavaScriptURL = stringToPrecomputedChunk(escapeTextForBrowser("javascript:throw new Error('React form unexpectedly submitted.')")), startHiddenInputChunk = stringToPrecomputedChunk('<input type="hidden"'), endOfStartTag = stringToPrecomputedChunk(">"), endOfStartTagSelfClosing = stringToPrecomputedChunk("/>"), didWarnDefaultInputValue = !1, didWarnDefaultChecked = !1, didWarnDefaultSelectValue = !1, didWarnDefaultTextareaValue = !1, didWarnInvalidOptionChildren = !1, didWarnInvalidOptionInnerHTML = !1, didWarnSelectedSetOnOption = !1, didWarnFormActionType = !1, didWarnFormActionName = !1, didWarnFormActionTarget = !1, didWarnFormActionMethod = !1, selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""'), formReplayingRuntimeScript = stringToPrecomputedChunk('addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});'), formStateMarkerIsMatching = stringToPrecomputedChunk("\x3c!--F!--\x3e"), formStateMarkerIsNotMatching = stringToPrecomputedChunk("\x3c!--F--\x3e"), styleRegex = /(<\/|<)(s)(tyle)/gi, leadingNewline = stringToPrecomputedChunk("\n"), VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, validatedTagCache = new Map(), doctypeChunk = stringToPrecomputedChunk("<!DOCTYPE html>"), endTagCache = new Map(), placeholder1 = stringToPrecomputedChunk('<template id="'), placeholder2 = stringToPrecomputedChunk('"></template>'), startCompletedSuspenseBoundary = stringToPrecomputedChunk("\x3c!--$--\x3e"), startPendingSuspenseBoundary1 = stringToPrecomputedChunk('\x3c!--$?--\x3e<template id="'), startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>'), startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("\x3c!--$!--\x3e"), endSuspenseBoundary = stringToPrecomputedChunk("\x3c!--/$--\x3e"), clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template"), clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"'), clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="'), clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="'), clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="'), clientRenderedSuspenseBoundaryError1D = stringToPrecomputedChunk(' data-cstck="'), clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>"), startSegmentHTML = stringToPrecomputedChunk('<div hidden id="'), startSegmentHTML2 = stringToPrecomputedChunk('">'), endSegmentHTML = stringToPrecomputedChunk("</div>"), startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="'), startSegmentSVG2 = stringToPrecomputedChunk('">'), endSegmentSVG = stringToPrecomputedChunk("</svg>"), startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="'), startSegmentMathML2 = stringToPrecomputedChunk('">'), endSegmentMathML = stringToPrecomputedChunk("</math>"), startSegmentTable = stringToPrecomputedChunk('<table hidden id="'), startSegmentTable2 = stringToPrecomputedChunk('">'), endSegmentTable = stringToPrecomputedChunk("</table>"), startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="'), startSegmentTableBody2 = stringToPrecomputedChunk('">'), endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>"), startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="'), startSegmentTableRow2 = stringToPrecomputedChunk('">'), endSegmentTableRow = stringToPrecomputedChunk("</tr></table>"), startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="'), startSegmentColGroup2 = stringToPrecomputedChunk('">'), endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>"), completeSegmentScript1Full = stringToPrecomputedChunk('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("'), completeSegmentScript2 = stringToPrecomputedChunk('","'), completeSegmentScriptEnd = stringToPrecomputedChunk('")\x3c/script>');
    stringToPrecomputedChunk('<template data-rsi="" data-sid="');
    stringToPrecomputedChunk('" data-pid="');
    var completeBoundaryScript1Full = stringToPrecomputedChunk('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'), completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("'), completeBoundaryWithStylesScript1FullBoth = stringToPrecomputedChunk('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("'), completeBoundaryWithStylesScript1FullPartial = stringToPrecomputedChunk('$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("'), completeBoundaryWithStylesScript1Partial = stringToPrecomputedChunk('$RR("'), completeBoundaryScript2 = stringToPrecomputedChunk('","'), completeBoundaryScript3a = stringToPrecomputedChunk('",'), completeBoundaryScript3b = stringToPrecomputedChunk('"'), completeBoundaryScriptEnd = stringToPrecomputedChunk(")\x3c/script>");
    stringToPrecomputedChunk('<template data-rci="" data-bid="');
    stringToPrecomputedChunk('<template data-rri="" data-bid="');
    stringToPrecomputedChunk('" data-sid="');
    stringToPrecomputedChunk('" data-sty="');
    var clientRenderScript1Full = stringToPrecomputedChunk('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'), clientRenderScript1Partial = stringToPrecomputedChunk('$RX("'), clientRenderScript1A = stringToPrecomputedChunk('"'), clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(","), clientRenderScriptEnd = stringToPrecomputedChunk(")\x3c/script>");
    stringToPrecomputedChunk('<template data-rxi="" data-bid="');
    stringToPrecomputedChunk('" data-dgst="');
    stringToPrecomputedChunk('" data-msg="');
    stringToPrecomputedChunk('" data-stck="');
    stringToPrecomputedChunk('" data-cstck="');
    var regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g, regexForJSStringsInScripts = /[&><\u2028\u2029]/g, lateStyleTagResourceOpen1 = stringToPrecomputedChunk('<style media="not all" data-precedence="'), lateStyleTagResourceOpen2 = stringToPrecomputedChunk('" data-href="'), lateStyleTagResourceOpen3 = stringToPrecomputedChunk('">'), lateStyleTagTemplateClose = stringToPrecomputedChunk("</style>"), currentlyRenderingBoundaryHasStylesToHoist = !1, destinationHasCapacity = !0, stylesheetFlushingQueue = [], styleTagResourceOpen1 = stringToPrecomputedChunk('<style data-precedence="'), styleTagResourceOpen2 = stringToPrecomputedChunk('" data-href="'), spaceSeparator = stringToPrecomputedChunk(" "), styleTagResourceOpen3 = stringToPrecomputedChunk('">'), styleTagResourceClose = stringToPrecomputedChunk("</style>"), arrayFirstOpenBracket = stringToPrecomputedChunk("["), arraySubsequentOpenBracket = stringToPrecomputedChunk(",["), arrayInterstitial = stringToPrecomputedChunk(","), arrayCloseBracket = stringToPrecomputedChunk("]"), PENDING$1 = 0, PRELOADED = 1, PREAMBLE = 2, LATE = 3, regexForHrefInLinkHeaderURLContext = /[<>\r\n]/g, regexForLinkHeaderQuotedParamValueContext = /["';,\r\n]/g, bind = Function.prototype.bind, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), emptyContextObject = {};
    Object.freeze(emptyContextObject);
    var rendererSigil = {};
    var currentActiveSnapshot = null, didWarnAboutNoopUpdateForComponent = {}, didWarnAboutDeprecatedWillMount = {};
    var didWarnAboutUninitializedState = new Set();
    var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
    var didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
    var didWarnAboutDirectlyAssigningPropsToState = new Set();
    var didWarnAboutUndefinedDerivedState = new Set();
    var didWarnAboutContextTypes$1 = new Set();
    var didWarnAboutChildContextTypes = new Set();
    var didWarnAboutInvalidateContextType = new Set();
    var didWarnOnInvalidCallback = new Set();
    var classComponentUpdater = {
        isMounted: function() {
            return !1;
        },
        enqueueSetState: function(inst, payload, callback) {
            var internals = inst._reactInternals;
            null === internals.queue ? warnNoop(inst, "setState") : (internals.queue.push(payload), void 0 !== callback && null !== callback && warnOnInvalidCallback(callback));
        },
        enqueueReplaceState: function(inst, payload, callback) {
            inst = inst._reactInternals;
            inst.replace = !0;
            inst.queue = [
                payload
            ];
            void 0 !== callback && null !== callback && warnOnInvalidCallback(callback);
        },
        enqueueForceUpdate: function(inst, callback) {
            null === inst._reactInternals.queue ? warnNoop(inst, "forceUpdate") : void 0 !== callback && null !== callback && warnOnInvalidCallback(callback);
        }
    }, emptyTreeContext = {
        id: 1,
        overflow: ""
    }, clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log = Math.log, LN2 = Math.LN2, SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), suspendedThenable = null, objectIs = "function" === typeof Object.is ? Object.is : is, currentlyRenderingComponent = null, currentlyRenderingTask = null, currentlyRenderingRequest = null, currentlyRenderingKeyPath = null, firstWorkInProgressHook = null, workInProgressHook = null, isReRender = !1, didScheduleRenderPhaseUpdate = !1, localIdCounter = 0, actionStateCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, thenableState = null, renderPhaseUpdates = null, numberOfReRenders = 0, isInHookUserCodeInDev = !1, currentHookNameInDev, HooksDispatcher = {
        readContext: readContext,
        use: function(usable) {
            if (null !== usable && "object" === typeof usable) {
                if ("function" === typeof usable.then) return unwrapThenable(usable);
                if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
            }
            throw Error("An unsupported type was passed to use(): " + String(usable));
        },
        useContext: function(context) {
            currentHookNameInDev = "useContext";
            resolveCurrentlyRenderingComponent();
            return context._currentValue;
        },
        useMemo: useMemo,
        useReducer: useReducer,
        useRef: function(initialValue) {
            currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
            workInProgressHook = createWorkInProgressHook();
            var previousRef = workInProgressHook.memoizedState;
            return null === previousRef ? (initialValue = {
                current: initialValue
            }, Object.seal(initialValue), workInProgressHook.memoizedState = initialValue) : previousRef;
        },
        useState: function(initialState) {
            currentHookNameInDev = "useState";
            return useReducer(basicStateReducer, initialState);
        },
        useInsertionEffect: noop$1,
        useLayoutEffect: noop$1,
        useCallback: function(callback, deps) {
            return useMemo(function() {
                return callback;
            }, deps);
        },
        useImperativeHandle: noop$1,
        useEffect: noop$1,
        useDebugValue: noop$1,
        useDeferredValue: function(value, initialValue) {
            resolveCurrentlyRenderingComponent();
            return void 0 !== initialValue ? initialValue : value;
        },
        useTransition: function() {
            resolveCurrentlyRenderingComponent();
            return [
                !1,
                unsupportedStartTransition
            ];
        },
        useId: function() {
            var treeId = currentlyRenderingTask.treeContext;
            var overflow = treeId.overflow;
            treeId = treeId.id;
            treeId = (treeId & ~(1 << 32 - clz32(treeId) - 1)).toString(32) + overflow;
            var resumableState = currentResumableState;
            if (null === resumableState) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
            overflow = localIdCounter++;
            treeId = ":" + resumableState.idPrefix + "R" + treeId;
            0 < overflow && (treeId += "H" + overflow.toString(32));
            return treeId + ":";
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
            if (void 0 === getServerSnapshot) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
            return getServerSnapshot();
        },
        useCacheRefresh: function() {
            return unsupportedRefresh;
        },
        useMemoCache: function(size) {
            for(var data = Array(size), i = 0; i < size; i++)data[i] = REACT_MEMO_CACHE_SENTINEL;
            return data;
        },
        useHostTransitionStatus: function() {
            resolveCurrentlyRenderingComponent();
            return NotPending;
        },
        useOptimistic: function(passthrough) {
            resolveCurrentlyRenderingComponent();
            return [
                passthrough,
                unsupportedSetOptimisticState
            ];
        }
    };
    HooksDispatcher.useFormState = useActionState;
    HooksDispatcher.useActionState = useActionState;
    var currentResumableState = null, currentTaskInDEV = null, DefaultAsyncDispatcher = {
        getCacheForType: function() {
            throw Error("Not implemented.");
        },
        getOwner: function() {
            return null === currentTaskInDEV ? null : currentTaskInDEV.componentStack;
        }
    }, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var callComponent = {
        "react-stack-bottom-frame": function(Component, props, secondArg) {
            return Component(props, secondArg);
        }
    }, callComponentInDEV = callComponent["react-stack-bottom-frame"].bind(callComponent), callRender = {
        "react-stack-bottom-frame": function(instance) {
            return instance.render();
        }
    }, callRenderInDEV = callRender["react-stack-bottom-frame"].bind(callRender), callLazyInit = {
        "react-stack-bottom-frame": function(lazy) {
            var init = lazy._init;
            return init(lazy._payload);
        }
    }, callLazyInitInDEV = callLazyInit["react-stack-bottom-frame"].bind(callLazyInit), CLIENT_RENDERED = 4, PENDING = 0, COMPLETED = 1, FLUSHED = 2, POSTPONED = 5, CLOSED = 14, currentRequest = null, didWarnAboutBadClass = {}, didWarnAboutContextTypes = {}, didWarnAboutContextTypeOnFunctionComponent = {}, didWarnAboutGetDerivedStateOnFunctionComponent = {}, didWarnAboutReassigningProps = !1, didWarnAboutGenerators = !1, didWarnAboutMaps = !1;
    ensureCorrectIsomorphicReactVersion();
    ensureCorrectIsomorphicReactVersion();
    exports.prerender = function(children, options) {
        return new Promise(function(resolve, reject) {
            var onHeaders = options ? options.onHeaders : void 0, onHeadersImpl;
            onHeaders && (onHeadersImpl = function(headersDescriptor) {
                onHeaders(new Headers(headersDescriptor));
            });
            var resources = createResumableState(options ? options.identifierPrefix : void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), request = createPrerenderRequest(children, resources, createRenderState(resources, void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.importMap : void 0, onHeadersImpl, options ? options.maxHeadersLength : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, function() {
                var result = {
                    prelude: new ReadableStream({
                        type: "bytes",
                        pull: function(controller) {
                            startFlowing(request, controller);
                        },
                        cancel: function(reason) {
                            request.destination = null;
                            abort(request, reason);
                        }
                    }, {
                        highWaterMark: 0
                    })
                };
                resolve(result);
            }, void 0, void 0, reject, options ? options.onPostpone : void 0);
            if (options && options.signal) {
                var signal = options.signal;
                if (signal.aborted) abort(request, signal.reason);
                else {
                    var listener = function() {
                        abort(request, signal.reason);
                        signal.removeEventListener("abort", listener);
                    };
                    signal.addEventListener("abort", listener);
                }
            }
            startWork(request);
        });
    };
    exports.renderToReadableStream = function(children, options) {
        return new Promise(function(resolve, reject) {
            var onFatalError, onAllReady, allReady = new Promise(function(res, rej) {
                onAllReady = res;
                onFatalError = rej;
            }), onHeaders = options ? options.onHeaders : void 0, onHeadersImpl;
            onHeaders && (onHeadersImpl = function(headersDescriptor) {
                onHeaders(new Headers(headersDescriptor));
            });
            var resumableState = createResumableState(options ? options.identifierPrefix : void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), request = createRequest(children, resumableState, createRenderState(resumableState, options ? options.nonce : void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.importMap : void 0, onHeadersImpl, options ? options.maxHeadersLength : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, onAllReady, function() {
                var stream = new ReadableStream({
                    type: "bytes",
                    pull: function(controller) {
                        startFlowing(request, controller);
                    },
                    cancel: function(reason) {
                        request.destination = null;
                        abort(request, reason);
                    }
                }, {
                    highWaterMark: 0
                });
                stream.allReady = allReady;
                resolve(stream);
            }, function(error) {
                allReady.catch(function() {});
                reject(error);
            }, onFatalError, options ? options.onPostpone : void 0, options ? options.formState : void 0);
            if (options && options.signal) {
                var signal = options.signal;
                if (signal.aborted) abort(request, signal.reason);
                else {
                    var listener = function() {
                        abort(request, signal.reason);
                        signal.removeEventListener("abort", listener);
                    };
                    signal.addEventListener("abort", listener);
                }
            }
            startWork(request);
        });
    };
    exports.version = "19.0.0-rc-65e06cb7-20241218";
}();
}}),
"[project]/node_modules/next/dist/compiled/react-dom/server.browser.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
var l, s;
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    l = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server-legacy.browser.development.js [app-client] (ecmascript)");
    s = __turbopack_require__("[project]/node_modules/next/dist/compiled/react-dom/cjs/react-dom-server.browser.development.js [app-client] (ecmascript)");
}
exports.version = l.version;
exports.renderToString = l.renderToString;
exports.renderToStaticMarkup = l.renderToStaticMarkup;
exports.renderToReadableStream = s.renderToReadableStream;
if (s.resume) {
    exports.resume = s.resume;
}
}}),
"[project]/node_modules/@vercel/speed-insights/dist/next/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SpeedInsights": (()=>SpeedInsights2)
});
// src/nextjs/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/nextjs/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use client";
;
;
// package.json
var name = "@vercel/speed-insights";
var version = "1.1.0";
// src/queue.ts
var initQueue = ()=>{
    if (window.si) return;
    window.si = function a(...params) {
        (window.siq = window.siq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return typeof window !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function isDevelopment() {
    return detectEnvironment() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
// src/generic.ts
var SCRIPT_URL = "https://va.vercel-scripts.com/v1/speed-insights";
var PROD_SCRIPT_URL = `${SCRIPT_URL}/script.js`;
var DEV_SCRIPT_URL = `${SCRIPT_URL}/script.debug.js`;
var PROXY_SCRIPT_URL = "/_vercel/speed-insights/script.js";
function injectSpeedInsights(props = {}) {
    var _a;
    if (!isBrowser() || props.route === null) return null;
    initQueue();
    const isSelfHosted = Boolean(props.dsn);
    const productionScript = isSelfHosted ? PROD_SCRIPT_URL : PROXY_SCRIPT_URL;
    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : productionScript);
    if (document.head.querySelector(`script[src*="${src}"]`)) return null;
    if (props.beforeSend) {
        (_a = window.si) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
    script.dataset.sdkv = version;
    if (props.sampleRate) {
        script.dataset.sampleRate = props.sampleRate.toString();
    }
    if (props.route) {
        script.dataset.route = props.route;
    }
    if (props.endpoint) {
        script.dataset.endpoint = props.endpoint;
    }
    if (props.dsn) {
        script.dataset.dsn = props.dsn;
    }
    if (isDevelopment() && props.debug === false) {
        script.dataset.debug = "false";
    }
    script.onerror = ()=>{
        console.log(`[Vercel Speed Insights] Failed to load script from ${src}. Please check if any content blockers are enabled and try again.`);
    };
    document.head.appendChild(script);
    return {
        setRoute: (route)=>{
            script.dataset.route = route ?? void 0;
        }
    };
}
// src/react/index.tsx
function SpeedInsights(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpeedInsights.useEffect": ()=>{
            var _a;
            if (props.beforeSend) {
                (_a = window.si) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
            }
        }
    }["SpeedInsights.useEffect"], [
        props.beforeSend
    ]);
    const setScriptRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpeedInsights.useEffect": ()=>{
            if (!setScriptRoute.current) {
                const script = injectSpeedInsights({
                    framework: props.framework || "react",
                    ...props
                });
                if (script) {
                    setScriptRoute.current = script.setRoute;
                }
            } else if (props.route) {
                setScriptRoute.current(props.route);
            }
        }
    }["SpeedInsights.useEffect"], [
        props.route
    ]);
    return null;
}
;
var useRoute = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])() || new URLSearchParams();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!params) {
        return null;
    }
    const finalParams = Object.keys(params).length ? params : Object.fromEntries(searchParams.entries());
    return computeRoute(path, finalParams);
};
// src/nextjs/index.tsx
function SpeedInsightsComponent(props) {
    const route = useRoute();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SpeedInsights, {
        route,
        ...props,
        framework: "next"
    });
}
function SpeedInsights2(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(SpeedInsightsComponent, {
        ...props
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}}),
}]);

//# sourceMappingURL=08b5e_a2feea._.js.map