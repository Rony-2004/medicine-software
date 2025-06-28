(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/shop/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// NEED TO UPDATE
__turbopack_context__.s({
    "default": (()=>Shop)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const mockMedicines = [
    {
        id: 1,
        name: "Paracetamol 500mg",
        price: 49,
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80",
        details: "Pain reliever and fever reducer."
    },
    {
        id: 2,
        name: "Amoxicillin 250mg",
        price: 120,
        image: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=400&q=80",
        details: "Antibiotic for bacterial infections."
    },
    {
        id: 3,
        name: "Vitamin C 1000mg",
        price: 80,
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        details: "Boosts immunity and antioxidant."
    },
    {
        id: 4,
        name: "Cetirizine 10mg",
        price: 35,
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
        details: "Allergy relief tablet."
    }
];
function Shop() {
    _s();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const addToCart = (id)=>{
        setCart((prev)=>({
                ...prev,
                [id]: (prev[id] || 0) + 1
            }));
        alert("Added to cart!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: 'linear-gradient(120deg, #e3f0ff 0%, #f5faff 100%)',
            minHeight: '100vh',
            padding: '32px 0'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: 36,
                    fontWeight: 800,
                    color: '#1976d2',
                    marginBottom: 32,
                    textAlign: 'center',
                    letterSpacing: 1
                },
                children: "Shop Medicines"
            }, void 0, false, {
                fileName: "[project]/src/app/shop/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 32,
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '0 16px'
                },
                children: mockMedicines.map((med)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: '#fff',
                            borderRadius: 16,
                            boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)',
                            padding: 24,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            transition: 'box-shadow 0.2s, transform 0.2s',
                            border: '1.5px solid #e3f0ff'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: med.image,
                                alt: med.name,
                                style: {
                                    width: 120,
                                    height: 120,
                                    objectFit: 'cover',
                                    borderRadius: 10,
                                    marginBottom: 16,
                                    boxShadow: '0 2px 12px #1976d233',
                                    border: '2px solid #f5faff'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/page.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: 22,
                                    fontWeight: 700,
                                    color: '#1976d2',
                                    marginBottom: 8,
                                    textAlign: 'center'
                                },
                                children: med.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/page.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: '#555',
                                    fontSize: 16,
                                    marginBottom: 8,
                                    textAlign: 'center',
                                    minHeight: 40
                                },
                                children: med.details
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 700,
                                    color: '#43cea2',
                                    fontSize: 20,
                                    marginBottom: 16,
                                    letterSpacing: 0.5
                                },
                                children: [
                                    "₹",
                                    med.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>addToCart(med.id),
                                style: {
                                    background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)',
                                    color: '#fff',
                                    padding: '10px 28px',
                                    borderRadius: 6,
                                    fontSize: 18,
                                    fontWeight: 700,
                                    border: 'none',
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 8px #1976d244',
                                    marginTop: 8,
                                    letterSpacing: 1,
                                    transition: 'background 0.2s, transform 0.2s'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.background = 'linear-gradient(90deg, #43cea2 0%, #1976d2 100%)',
                                onMouseLeave: (e)=>e.currentTarget.style.background = 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)',
                                children: "Add to Cart"
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/page.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        ]
                    }, med.id, true, {
                        fileName: "[project]/src/app/shop/page.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/shop/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/shop/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Shop, "NFGnZJXrHtOOeNPI2HX7AhtE0sQ=");
_c = Shop;
var _c;
__turbopack_context__.k.register(_c, "Shop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_shop_page_tsx_d98db469._.js.map