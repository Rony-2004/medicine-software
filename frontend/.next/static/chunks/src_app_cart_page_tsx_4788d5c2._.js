(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/cart/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CartPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// SVG icons
const MinusIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    width: "20",
    height: "20",
    fill: "none",
    stroke: "#1976d2",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
    }, void 0, false, {
        fileName: "[project]/src/app/cart/page.tsx",
        lineNumber: 7,
        columnNumber: 143
    }, this)
}, void 0, false, {
    fileName: "[project]/src/app/cart/page.tsx",
    lineNumber: 7,
    columnNumber: 3
}, this);
const PlusIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    width: "20",
    height: "20",
    fill: "none",
    stroke: "#1976d2",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "12",
            y1: "5",
            x2: "12",
            y2: "19"
        }, void 0, false, {
            fileName: "[project]/src/app/cart/page.tsx",
            lineNumber: 10,
            columnNumber: 143
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12"
        }, void 0, false, {
            fileName: "[project]/src/app/cart/page.tsx",
            lineNumber: 10,
            columnNumber: 182
        }, this)
    ]
}, void 0, true, {
    fileName: "[project]/src/app/cart/page.tsx",
    lineNumber: 10,
    columnNumber: 3
}, this);
const TrashIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    width: "22",
    height: "22",
    fill: "none",
    stroke: "#f44336",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
            points: "3 6 5 6 21 6"
        }, void 0, false, {
            fileName: "[project]/src/app/cart/page.tsx",
            lineNumber: 13,
            columnNumber: 143
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
        }, void 0, false, {
            fileName: "[project]/src/app/cart/page.tsx",
            lineNumber: 13,
            columnNumber: 177
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "10",
            y1: "11",
            x2: "10",
            y2: "17"
        }, void 0, false, {
            fileName: "[project]/src/app/cart/page.tsx",
            lineNumber: 13,
            columnNumber: 268
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "14",
            y1: "11",
            x2: "14",
            y2: "17"
        }, void 0, false, {
            fileName: "[project]/src/app/cart/page.tsx",
            lineNumber: 13,
            columnNumber: 308
        }, this)
    ]
}, void 0, true, {
    fileName: "[project]/src/app/cart/page.tsx",
    lineNumber: 13,
    columnNumber: 3
}, this);
const CartIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    width: "28",
    height: "28",
    fill: "none",
    stroke: "#1976d2",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "9",
            cy: "21",
            r: "1"
        }, void 0, false, {
            fileName: "[project]/src/app/cart/page.tsx",
            lineNumber: 16,
            columnNumber: 143
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "20",
            cy: "21",
            r: "1"
        }, void 0, false, {
            fileName: "[project]/src/app/cart/page.tsx",
            lineNumber: 16,
            columnNumber: 174
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
        }, void 0, false, {
            fileName: "[project]/src/app/cart/page.tsx",
            lineNumber: 16,
            columnNumber: 206
        }, this)
    ]
}, void 0, true, {
    fileName: "[project]/src/app/cart/page.tsx",
    lineNumber: 16,
    columnNumber: 3
}, this);
const RupeeIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    width: "20",
    height: "20",
    fill: "none",
    stroke: "#43cea2",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
        x: "2",
        y: "17",
        fontSize: "18",
        fill: "#43cea2",
        children: "₹"
    }, void 0, false, {
        fileName: "[project]/src/app/cart/page.tsx",
        lineNumber: 19,
        columnNumber: 143
    }, this)
}, void 0, false, {
    fileName: "[project]/src/app/cart/page.tsx",
    lineNumber: 19,
    columnNumber: 3
}, this);
const CheckoutIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    width: "24",
    height: "24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
        d: "M9 18l6-6-6-6"
    }, void 0, false, {
        fileName: "[project]/src/app/cart/page.tsx",
        lineNumber: 22,
        columnNumber: 140
    }, this)
}, void 0, false, {
    fileName: "[project]/src/app/cart/page.tsx",
    lineNumber: 22,
    columnNumber: 3
}, this);
const mockCart = [
    {
        id: 1,
        name: "Paracetamol 500mg",
        price: 49,
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80",
        details: "Pain reliever and fever reducer.",
        quantity: 2
    },
    {
        id: 2,
        name: "Vitamin C 1000mg",
        price: 80,
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        details: "Boosts immunity and antioxidant.",
        quantity: 1
    }
];
function CartPage() {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mockCart);
    const updateQuantity = (id, qty)=>{
        setCart((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    quantity: Math.max(1, qty)
                } : item));
    };
    const removeItem = (id)=>{
        setCart((prev)=>prev.filter((item)=>item.id !== id));
    };
    const subtotal = cart.reduce((sum, item)=>sum + item.price * item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: 900,
            margin: '0 auto',
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)',
            padding: 32,
            marginTop: 24,
            marginBottom: 24,
            animation: 'fadeInCart 0.7s cubic-bezier(.4,2,.6,1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes fadeInCart { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.95);} 100% { opacity: 1; transform: scale(1);} }
        @keyframes pulseBtn { 0% { box-shadow: 0 0 0 0 #43cea244; } 70% { box-shadow: 0 0 0 10px #43cea200; } 100% { box-shadow: 0 0 0 0 #43cea200; } }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/cart/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: 32,
                    fontWeight: 800,
                    color: '#1976d2',
                    marginBottom: 32,
                    textAlign: 'center',
                    letterSpacing: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12
                },
                children: [
                    CartIcon,
                    " Your Cart"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/cart/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    color: '#888',
                    fontSize: 20,
                    margin: 48
                },
                children: [
                    "Your cart is empty.",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/cart/page.tsx",
                        lineNumber: 83,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shop",
                        style: {
                            color: '#1976d2',
                            fontWeight: 700,
                            textDecoration: 'underline',
                            fontSize: 18
                        },
                        children: "Go to Shop"
                    }, void 0, false, {
                        fileName: "[project]/src/app/cart/page.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/cart/page.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 24
                        },
                        children: cart.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 24,
                                    background: '#f7f9fa',
                                    borderRadius: 12,
                                    padding: 18,
                                    boxShadow: '0 2px 8px #1976d211',
                                    flexWrap: 'wrap',
                                    animation: `popIn 0.5s cubic-bezier(.4,2,.6,1) ${0.1 * idx}s both`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.image,
                                        alt: item.name,
                                        style: {
                                            width: 80,
                                            height: 80,
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            border: '2px solid #e3f0ff',
                                            boxShadow: '0 1px 4px #1976d211'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/cart/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 180
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 20,
                                                    fontWeight: 700,
                                                    color: '#1976d2',
                                                    marginBottom: 4
                                                },
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/cart/page.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: '#555',
                                                    fontSize: 15,
                                                    marginBottom: 6
                                                },
                                                children: item.details
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/cart/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: '#43cea2',
                                                    fontWeight: 700,
                                                    fontSize: 18,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 4
                                                },
                                                children: [
                                                    RupeeIcon,
                                                    item.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/cart/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/cart/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>updateQuantity(item.id, item.quantity - 1),
                                                style: qtyBtnStyle,
                                                "aria-label": "Decrease quantity",
                                                children: MinusIcon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/cart/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: `qty-${item.id}`,
                                                style: {
                                                    position: 'absolute',
                                                    left: '-9999px',
                                                    width: 1,
                                                    height: 1,
                                                    overflow: 'hidden'
                                                },
                                                children: "Quantity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/cart/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: `qty-${item.id}`,
                                                type: "number",
                                                min: 1,
                                                value: item.quantity,
                                                onChange: (e)=>updateQuantity(item.id, Number(e.target.value)),
                                                style: {
                                                    width: 40,
                                                    textAlign: 'center',
                                                    fontSize: 16,
                                                    border: '1.5px solid #e3f0ff',
                                                    borderRadius: 6,
                                                    padding: 4
                                                },
                                                title: "Quantity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/cart/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>updateQuantity(item.id, item.quantity + 1),
                                                style: qtyBtnStyle,
                                                "aria-label": "Increase quantity",
                                                children: PlusIcon
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/cart/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/cart/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>removeItem(item.id),
                                        style: {
                                            background: 'none',
                                            border: 'none',
                                            color: '#f44336',
                                            fontWeight: 700,
                                            fontSize: 18,
                                            cursor: 'pointer',
                                            marginLeft: 16,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 4
                                        },
                                        "aria-label": "Remove item",
                                        children: [
                                            TrashIcon,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: 15
                                                },
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/cart/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 31
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/cart/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 700,
                                            color: '#1976d2',
                                            fontSize: 18,
                                            minWidth: 80,
                                            textAlign: 'right',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 4
                                        },
                                        children: [
                                            RupeeIcon,
                                            item.price * item.quantity
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/cart/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/app/cart/page.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/cart/page.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 32,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: 16,
                            background: 'linear-gradient(90deg, #e3f0ff 0%, #f5faff 100%)',
                            borderRadius: 12,
                            boxShadow: '0 2px 8px #1976d222',
                            padding: 24,
                            minWidth: 320,
                            animation: 'fadeInCart 0.7s cubic-bezier(.4,2,.6,1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 22,
                                    fontWeight: 700,
                                    color: '#1976d2',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8
                                },
                                children: [
                                    CartIcon,
                                    " Subtotal: ",
                                    RupeeIcon,
                                    subtotal
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/cart/page.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)',
                                    color: '#fff',
                                    padding: '16px 48px',
                                    borderRadius: 8,
                                    fontSize: 20,
                                    fontWeight: 700,
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 8px #1976d244',
                                    letterSpacing: 1,
                                    marginTop: 8,
                                    transition: 'background 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    animation: 'pulseBtn 1.5s infinite'
                                },
                                onClick: ()=>alert('Checkout coming soon!'),
                                children: [
                                    "Proceed to Checkout ",
                                    CheckoutIcon
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/cart/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/cart/page.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/cart/page.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/cart/page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(CartPage, "m7QJFb/XaeiBGJl7YI5JaI3/q24=");
_c = CartPage;
const qtyBtnStyle = {
    background: 'linear-gradient(90deg, #e3f0ff 0%, #1976d2 100%)',
    color: '#1976d2',
    border: 'none',
    borderRadius: 6,
    width: 32,
    height: 32,
    fontSize: 18,
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 1px 4px #1976d222',
    transition: 'background 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};
var _c;
__turbopack_context__.k.register(_c, "CartPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_cart_page_tsx_4788d5c2._.js.map