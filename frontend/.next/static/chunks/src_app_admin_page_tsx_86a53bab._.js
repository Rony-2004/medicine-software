(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/admin/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminDashboard)
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
        details: "Pain reliever and fever reducer.",
        stock: 120
    },
    {
        id: 2,
        name: "Amoxicillin 250mg",
        price: 120,
        image: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=400&q=80",
        details: "Antibiotic for bacterial infections.",
        stock: 60
    }
];
const mockOrders = [
    {
        id: 'ORD123456',
        date: '2024-06-01',
        status: 'Processing',
        items: [
            {
                name: 'Paracetamol 500mg',
                qty: 2
            },
            {
                name: 'Vitamin C 1000mg',
                qty: 1
            }
        ],
        total: 178
    },
    {
        id: 'ORD123457',
        date: '2024-05-28',
        status: 'Shipped',
        items: [
            {
                name: 'Amoxicillin 250mg',
                qty: 1
            }
        ],
        total: 120
    }
];
const TrashIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    width: "20",
    height: "20",
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
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 46,
            columnNumber: 143
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 46,
            columnNumber: 177
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "10",
            y1: "11",
            x2: "10",
            y2: "17"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 46,
            columnNumber: 268
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "14",
            y1: "11",
            x2: "14",
            y2: "17"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 46,
            columnNumber: 308
        }, this)
    ]
}, void 0, true, {
    fileName: "[project]/src/app/admin/page.tsx",
    lineNumber: 46,
    columnNumber: 3
}, this);
const EditIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    width: "20",
    height: "20",
    fill: "none",
    stroke: "#1976d2",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    children: [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 20h9"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 49,
            columnNumber: 143
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 49,
            columnNumber: 164
        }, this)
    ]
}, void 0, true, {
    fileName: "[project]/src/app/admin/page.tsx",
    lineNumber: 49,
    columnNumber: 3
}, this);
const SaveIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
    width: "20",
    height: "20",
    fill: "none",
    stroke: "#43cea2",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
        points: "20 6 9 17 4 12"
    }, void 0, false, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 52,
        columnNumber: 143
    }, this)
}, void 0, false, {
    fileName: "[project]/src/app/admin/page.tsx",
    lineNumber: 52,
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
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 55,
            columnNumber: 143
        }, this),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/page.tsx",
            lineNumber: 55,
            columnNumber: 182
        }, this)
    ]
}, void 0, true, {
    fileName: "[project]/src/app/admin/page.tsx",
    lineNumber: 55,
    columnNumber: 3
}, this);
const statusColors = {
    Processing: '#ff9800',
    Shipped: '#1976d2',
    Delivered: '#43cea2'
};
function AdminDashboard() {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('medicines');
    const [medicines, setMedicines] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mockMedicines);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        price: '',
        image: '',
        details: '',
        stock: ''
    });
    const handleAdd = (e)=>{
        e.preventDefault();
        if (!form.name || !form.price || !form.image || !form.details || !form.stock) return;
        setMedicines((prev)=>[
                ...prev,
                {
                    id: Date.now(),
                    name: form.name,
                    price: Number(form.price),
                    image: form.image,
                    details: form.details,
                    stock: Number(form.stock)
                }
            ]);
        setForm({
            name: '',
            price: '',
            image: '',
            details: '',
            stock: ''
        });
    };
    const handleDelete = (id)=>{
        setMedicines((prev)=>prev.filter((m)=>m.id !== id));
    };
    const handleEdit = (id)=>{
        setEditingId(id);
        const med = medicines.find((m)=>m.id === id);
        if (med) setForm({
            name: med.name,
            price: String(med.price),
            image: med.image,
            details: med.details,
            stock: String(med.stock)
        });
    };
    const handleSave = (id)=>{
        setMedicines((prev)=>prev.map((m)=>m.id === id ? {
                    ...m,
                    ...form,
                    price: Number(form.price),
                    stock: Number(form.stock)
                } : m));
        setEditingId(null);
        setForm({
            name: '',
            price: '',
            image: '',
            details: '',
            stock: ''
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: 1000,
            margin: '0 auto',
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)',
            padding: 32,
            marginTop: 24,
            marginBottom: 24,
            animation: 'fadeInAdmin 0.7s cubic-bezier(.4,2,.6,1)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes fadeInAdmin { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
        @keyframes popInAdmin { 0% { opacity: 0; transform: scale(0.95);} 100% { opacity: 1; transform: scale(1);} }
        .tab-btn:hover { background: #e3f0ff !important; color: #1976d2 !important; }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: 32,
                    fontWeight: 800,
                    color: '#1976d2',
                    marginBottom: 32,
                    textAlign: 'center',
                    letterSpacing: 1
                },
                children: "Admin Dashboard"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 16,
                    justifyContent: 'center',
                    marginBottom: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab('medicines'),
                        style: {
                            background: tab === 'medicines' ? 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)' : '#f7f9fa',
                            color: tab === 'medicines' ? '#fff' : '#1976d2',
                            fontWeight: 700,
                            fontSize: 18,
                            border: 'none',
                            borderRadius: 8,
                            padding: '12px 32px',
                            cursor: 'pointer',
                            boxShadow: tab === 'medicines' ? '0 2px 8px #1976d244' : 'none',
                            transition: 'all 0.2s'
                        },
                        className: "tab-btn",
                        children: "Medicines"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab('orders'),
                        style: {
                            background: tab === 'orders' ? 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)' : '#f7f9fa',
                            color: tab === 'orders' ? '#fff' : '#1976d2',
                            fontWeight: 700,
                            fontSize: 18,
                            border: 'none',
                            borderRadius: 8,
                            padding: '12px 32px',
                            cursor: 'pointer',
                            boxShadow: tab === 'orders' ? '0 2px 8px #1976d244' : 'none',
                            transition: 'all 0.2s'
                        },
                        className: "tab-btn",
                        children: "Orders"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            tab === 'medicines' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAdd,
                        style: {
                            display: 'flex',
                            gap: 16,
                            flexWrap: 'wrap',
                            marginBottom: 32,
                            alignItems: 'flex-end',
                            background: '#f7f9fa',
                            borderRadius: 12,
                            padding: 20,
                            boxShadow: '0 2px 8px #1976d211'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Image URL",
                                value: form.image,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            image: e.target.value
                                        })),
                                style: inputStyle,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Name",
                                value: form.name,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            name: e.target.value
                                        })),
                                style: inputStyle,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "Price",
                                value: form.price,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            price: e.target.value
                                        })),
                                style: inputStyle,
                                required: true,
                                min: 1
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Details",
                                value: form.details,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            details: e.target.value
                                        })),
                                style: inputStyle,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "Stock",
                                value: form.stock,
                                onChange: (e)=>setForm((f)=>({
                                            ...f,
                                            stock: e.target.value
                                        })),
                                style: inputStyle,
                                required: true,
                                min: 0
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                style: {
                                    background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)',
                                    color: '#fff',
                                    fontWeight: 700,
                                    fontSize: 18,
                                    border: 'none',
                                    borderRadius: 8,
                                    padding: '10px 28px',
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 8px #1976d244',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 8
                                },
                                children: [
                                    PlusIcon,
                                    " Add"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: 32
                        },
                        children: medicines.map((med, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#f7f9fa',
                                    borderRadius: 12,
                                    boxShadow: '0 2px 8px #1976d211',
                                    padding: 24,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 10,
                                    alignItems: 'center',
                                    animation: `popInAdmin 0.5s cubic-bezier(.4,2,.6,1) ${0.1 * idx}s both`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: med.image,
                                        alt: med.name,
                                        style: {
                                            width: 100,
                                            height: 100,
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            border: '2px solid #e3f0ff',
                                            boxShadow: '0 1px 4px #1976d211',
                                            marginBottom: 8
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this),
                                    editingId === med.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: form.name,
                                                onChange: (e)=>setForm((f)=>({
                                                            ...f,
                                                            name: e.target.value
                                                        })),
                                                style: inputStyle
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: form.price,
                                                onChange: (e)=>setForm((f)=>({
                                                            ...f,
                                                            price: e.target.value
                                                        })),
                                                style: inputStyle,
                                                min: 1
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: form.details,
                                                onChange: (e)=>setForm((f)=>({
                                                            ...f,
                                                            details: e.target.value
                                                        })),
                                                style: inputStyle
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: form.stock,
                                                onChange: (e)=>setForm((f)=>({
                                                            ...f,
                                                            stock: e.target.value
                                                        })),
                                                style: inputStyle,
                                                min: 0
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleSave(med.id),
                                                style: {
                                                    background: 'linear-gradient(90deg, #43cea2 0%, #1976d2 100%)',
                                                    color: '#fff',
                                                    fontWeight: 700,
                                                    fontSize: 16,
                                                    border: 'none',
                                                    borderRadius: 8,
                                                    padding: '8px 20px',
                                                    cursor: 'pointer',
                                                    boxShadow: '0 2px 8px #1976d244',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 6,
                                                    marginTop: 6
                                                },
                                                children: [
                                                    SaveIcon,
                                                    " Save"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontWeight: 700,
                                                    fontSize: 18,
                                                    color: '#1976d2',
                                                    textAlign: 'center'
                                                },
                                                children: med.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: '#555',
                                                    fontSize: 15,
                                                    textAlign: 'center',
                                                    marginBottom: 4
                                                },
                                                children: med.details
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: '#43cea2',
                                                    fontWeight: 700,
                                                    fontSize: 18
                                                },
                                                children: [
                                                    "₹",
                                                    med.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: '#888',
                                                    fontSize: 15
                                                },
                                                children: [
                                                    "Stock: ",
                                                    med.stock
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 10,
                                                    marginTop: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleEdit(med.id),
                                                        style: {
                                                            background: 'none',
                                                            border: 'none',
                                                            color: '#1976d2',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 4
                                                        },
                                                        children: [
                                                            EditIcon,
                                                            " Edit"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDelete(med.id),
                                                        style: {
                                                            background: 'none',
                                                            border: 'none',
                                                            color: '#f44336',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 4
                                                        },
                                                        children: [
                                                            TrashIcon,
                                                            " Delete"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, med.id, true, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 32
                },
                children: mockOrders.map((order, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            background: 'linear-gradient(90deg, #e3f0ff 0%, #f5faff 100%)',
                            borderRadius: 14,
                            boxShadow: '0 2px 8px #1976d211',
                            padding: 24,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12,
                            animation: `popInAdmin 0.5s cubic-bezier(.4,2,.6,1) ${0.1 * idx}s both`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: 16,
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 700,
                                            fontSize: 18,
                                            color: '#1976d2',
                                            letterSpacing: 0.5
                                        },
                                        children: [
                                            "Order ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#43cea2'
                                                },
                                                children: order.id
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: '#888',
                                            fontSize: 15
                                        },
                                        children: [
                                            "Placed on ",
                                            order.date
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 8,
                                            fontWeight: 700,
                                            fontSize: 16,
                                            color: statusColors[order.status]
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "22",
                                                height: "22",
                                                fill: "none",
                                                stroke: statusColors[order.status],
                                                strokeWidth: "2.2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 178
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            order.status
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 18,
                                    alignItems: 'center',
                                    marginTop: 8
                                },
                                children: order.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: '#fff',
                                            borderRadius: 8,
                                            boxShadow: '0 1px 4px #1976d211',
                                            padding: '8px 16px',
                                            fontSize: 15,
                                            color: '#1976d2',
                                            fontWeight: 600,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 6
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "18",
                                                height: "18",
                                                fill: "#43cea2",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 84
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 21
                                            }, this),
                                            item.name,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#888',
                                                    fontWeight: 400,
                                                    fontSize: 14
                                                },
                                                children: [
                                                    "x",
                                                    item.qty
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 200,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontWeight: 700,
                                    color: '#43cea2',
                                    fontSize: 18,
                                    marginTop: 8,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                            fileName: "[project]/src/app/admin/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 157
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    "Total: ",
                                    order.total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/page.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this)
                        ]
                    }, order.id, true, {
                        fileName: "[project]/src/app/admin/page.tsx",
                        lineNumber: 190,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/page.tsx",
                lineNumber: 188,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/page.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(AdminDashboard, "Qk6fQdezRShAAcvZ+ri7Td3jzV4=");
_c = AdminDashboard;
const inputStyle = {
    padding: '10px 14px',
    borderRadius: 8,
    border: '1.5px solid #e3f0ff',
    fontSize: 16,
    minWidth: 120,
    outline: 'none',
    marginBottom: 4
};
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_admin_page_tsx_86a53bab._.js.map