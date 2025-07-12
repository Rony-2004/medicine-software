"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaPills, FaListAlt, FaShoppingCart, FaSignOutAlt, FaCapsules } from 'react-icons/fa';

const NAV_ITEMS = [
  { key: "add", label: "Add Medicine" },
  { key: "view", label: "View Medicines" },
  { key: "orders", label: "Orders" },
];

const CATEGORIES = ["Tablet", "Syrup", "Injection", "Ointment", "Drops"];
const ORDER_STATUSES = ["Placed", "Confirmed", "Dispatched", "Delivered"];

// Medicine and Order types
interface Medicine {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  highlights: string[];
  images: string[]; // image URLs (object URLs)
}
interface Order {
  id: string;
  medicineId: string;
  medicineName: string;
  quantity: number;
  status: string;
  date: string;
}

export default function AdminDashboard() {
  const [section, setSection] = useState("add");

  // Shared state
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [allMedicineNames, setAllMedicineNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Add Medicine state
  const [name, setName] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState<string[]>([""]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [nameSuggestions, setNameSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // Edit modal state
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<Partial<Medicine>>({});
  // Delete confirmation state
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  // Order state
  const [orderMedicineId, setOrderMedicineId] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderError, setOrderError] = useState("");

  // --- Fetch Medicines Logic ---
  const fetchMedicines = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
      const response = await fetch(`${API_BASE}/api/products`, {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
      });
      if (response.ok) {
        const data = await response.json();
        setMedicines(data.products || []);
        setAllMedicineNames(data.products?.map((m: Medicine) => m.name) || []);
      } else {
        console.error('Failed to fetch medicines');
      }
    } catch (error) {
      console.error('Error fetching medicines:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch medicines on component mount and when switching to view section
  React.useEffect(() => {
    if (section === "view") {
      fetchMedicines();
    }
  }, [section]);

  // --- Add Medicine Logic ---
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).slice(0, 3);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleHighlightChange = (idx: number, value: string) => {
    setHighlights((prev) => prev.map((h, i) => (i === idx ? value : h)));
  };
  const addHighlight = () => setHighlights((prev) => [...prev, ""]);
  const removeHighlight = (idx: number) => setHighlights((prev) => prev.filter((_, i) => i !== idx));

  // Autocomplete for medicine name
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    if (value.length > 0) {
      const matches = allMedicineNames.filter((n) => n.toLowerCase().includes(value.toLowerCase()));
      setNameSuggestions(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      setShowSuggestions(false);
    }
  };
  const handleSuggestionClick = (suggestion: string) => {
    setName(suggestion);
    setShowSuggestions(false);
  };

  // Add Medicine submit
  const handleAddMedicine = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('stock_quantity', stock);
    formData.append('description', description);
    highlights.forEach((h, idx) => formData.append(`highlights[${idx}]`, h));
    const imageInput = document.getElementById('medicine-image') as HTMLInputElement | null;
    if (imagePreviews.length > 0 && imageInput && imageInput.files && imageInput.files[0]) {
      formData.append('image', imageInput.files[0]);
    }
    try {
      const token = localStorage.getItem("token");
      const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
      const response = await fetch(`${API_BASE}/api/products`, {
        method: 'POST',
        body: formData,
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        },
      });
      if (response.ok) {
        setName("");
        setCategory(CATEGORIES[0]);
        setPrice("");
        setStock("");
        setDescription("");
        setHighlights([""]);
        setImagePreviews([]);
        alert('Medicine added successfully!');
        // Refresh medicines list if we're on the view section
        if (section === "view") {
          fetchMedicines();
        }
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to add medicine');
      }
    } catch {
      alert('Network error. Please try again.');
    }
  };

  // --- View Medicines Logic ---
  const handleDeleteMedicine = (id: string) => {
    setDeleteId(id);
    setShowDeleteDialog(true);
  };
  const confirmDeleteMedicine = () => {
    if (deleteId) setMedicines((prev) => prev.filter((m) => m.id !== deleteId));
    setShowDeleteDialog(false);
    setDeleteId(null);
  };

  // Edit logic
  const openEditModal = (idx: number) => {
    setEditIdx(idx);
    setEditForm({ ...medicines[idx] });
    setEditModalOpen(true);
  };
  const closeEditModal = () => {
    setEditModalOpen(false);
    setEditIdx(null);
    setEditForm({});
  };
  const handleEditFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: name === 'price' || name === 'stock' ? Number(value) : value }));
  };
  const handleEditHighlightsChange = (idx: number, value: string) => {
    setEditForm((prev) => ({
      ...prev,
      highlights: prev.highlights?.map((h, i) => (i === idx ? value : h)) || [],
    }));
  };
  const addEditHighlight = () => {
    setEditForm((prev) => ({
      ...prev,
      highlights: [...(prev.highlights || []), ''],
    }));
  };
  const removeEditHighlight = (idx: number) => {
    setEditForm((prev) => ({
      ...prev,
      highlights: (prev.highlights || []).filter((_, i) => i !== idx),
    }));
  };
  const handleEditImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).slice(0, 3);
    setEditForm((prev) => ({
      ...prev,
      images: files.map((file) => URL.createObjectURL(file)),
    }));
  };
  const handleEditSave = (e: FormEvent) => {
    e.preventDefault();
    if (editIdx === null) return;
    setMedicines((prev) =>
      prev.map((m, i) => (i === editIdx ? { ...m, ...editForm, highlights: (editForm.highlights || []).filter((h) => h.trim()) } : m))
    );
    closeEditModal();
  };

  // --- Orders Logic ---
  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();
    setOrderError("");
    if (!orderMedicineId) {
      setOrderError("Select a medicine");
      return;
    }
    const medIdx = medicines.findIndex((m) => m.id === orderMedicineId);
    if (medIdx === -1) {
      setOrderError("Medicine not found");
      return;
    }
    if (orderQuantity < 1) {
      setOrderError("Quantity must be at least 1");
      return;
    }
    if (medicines[medIdx].stock < orderQuantity) {
      setOrderError("Not enough stock");
      return;
    }
    // Place order
    const newOrder: Order = {
      id: Date.now().toString(),
      medicineId: orderMedicineId,
      medicineName: medicines[medIdx].name,
      quantity: orderQuantity,
      status: ORDER_STATUSES[0],
      date: new Date().toLocaleString(),
    };
    setOrders((prev) => [...prev, newOrder]);
    // Decrease stock
    setMedicines((prev) =>
      prev.map((m, i) =>
        i === medIdx ? { ...m, stock: m.stock - orderQuantity } : m
      )
    );
    setOrderMedicineId("");
    setOrderQuantity(1);
    setOrderError("");
    alert("Order placed!");
  };

  const handleOrderStatusChange = (orderId: string, status: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex bg-gray-50 overflow-hidden">
      <div className="w-full h-full flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full md:w-56 bg-gradient-to-b from-blue-700 to-green-400 text-white flex flex-col min-h-[64px] md:min-h-full h-full border-r border-blue-200 shadow-lg z-10">
          <div className="flex flex-col items-center py-8">
            <div className="bg-white rounded-full p-2 shadow-md mb-2">
              <FaCapsules className="text-3xl text-blue-600" />
            </div>
            <span className="text-xl font-extrabold tracking-wide">MediStore</span>
            <span className="text-xs text-blue-100 mt-1">Admin Panel</span>
          </div>
          <nav className="flex flex-col gap-1 mt-2 flex-grow">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                className={`flex items-center gap-3 text-left pl-6 pr-4 py-3 text-base font-semibold transition-all duration-200 focus:outline-none
                ${section === item.key
                  ? "bg-white text-blue-700 font-bold shadow-md"
                  : "text-white hover:bg-blue-400/60"}
                `}
                style={{ borderRadius: 8 }}
                onClick={() => setSection(item.key)}
              >
                {item.key === 'add' && <FaPills className="text-lg" />}
                {item.key === 'view' && <FaListAlt className="text-lg" />}
                {item.key === 'orders' && <FaShoppingCart className="text-lg" />}
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-2 pb-6 px-4">
          <button
              className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-green-400 text-white font-bold text-base flex items-center justify-center gap-2 hover:from-blue-700 hover:to-green-500 transition shadow-md"
              onClick={() => { window.location.href = '/'; }}
          >
              <FaSignOutAlt className="inline-block text-lg" /> Logout
          </button>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 bg-gradient-to-br from-blue-100 to-green-50 overflow-auto px-4 py-8 flex flex-col items-start min-h-screen">
          {section === "add" && (
            <div className="animate-fade-in w-full max-w-2xl mx-auto flex flex-col gap-6 min-h-0">
              <div className="flex items-center gap-4 mb-2 mt-2">
                <div className="w-2 h-10 rounded bg-gradient-to-b from-blue-500 to-green-400 shadow-md"></div>
                <h1 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-blue-700 via-blue-500 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Add Medicine</h1>
              </div>
              <div className="text-gray-500 text-base mb-6 ml-6">Fill the form below to add a new medicine to your inventory.</div>
              <form onSubmit={handleAddMedicine} className="space-y-8 w-full bg-white rounded-2xl shadow-lg border border-blue-100 p-8 flex flex-col">
                {/* Images */}
                <div>
                  <label className="block font-semibold mb-2">Product Images (max 3)</label>
                  <input
                    id="medicine-image"
                    type="file"
                    name="image"
                    accept="image/*"
                    multiple={false}
                    onChange={handleImageChange}
                    title="Upload product images"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 transition"
                  />
                  <div className="flex gap-4 mt-2">
                    {imagePreviews.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`Preview ${idx + 1}`}
                        className="w-20 h-20 object-cover rounded-lg shadow border border-blue-200"
            />
                    ))}
                  </div>
        </div>
                {/* Name & Category */}
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <label className="block font-semibold mb-1" htmlFor="name">Medicine Name</label>
          <input
                      id="name"
                      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 placeholder:text-blue-300 text-lg transition"
            value={name}
                      onChange={handleNameChange}
                      onFocus={() => name && nameSuggestions.length > 0 && setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                      autoComplete="off"
            required
          />
                    {showSuggestions && (
                      <ul className="absolute z-10 left-0 right-0 bg-white border border-gray-200 rounded shadow mt-1 max-h-40 overflow-y-auto">
                        {nameSuggestions.map((suggestion, idx) => (
                          <li
                            key={idx}
                            className="px-3 py-2 cursor-pointer hover:bg-blue-100"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="w-48">
                    <label className="block font-semibold mb-1" htmlFor="category">Category</label>
                    <select
                      id="category"
                      className="w-full border rounded-lg px-4 py-3 bg-blue-50 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={category}
            onChange={e => setCategory(e.target.value)}
                    >
                      {CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
                    </select>
                  </div>
                </div>
                {/* Price & Stock */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block font-semibold mb-1" htmlFor="price">Price</label>
          <input
                      id="price"
            type="number"
                      min="0"
                      className="w-full border rounded-lg px-4 py-3 bg-blue-50 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
                  </div>
                  <div className="flex-1">
                    <label className="block font-semibold mb-1" htmlFor="stock">Stock Quantity</label>
          <input
                      id="stock"
            type="number"
                      min="0"
                      className="w-full border rounded-lg px-4 py-3 bg-blue-50 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={stock}
            onChange={e => setStock(e.target.value)}
            required
          />
        </div>
                </div>
                {/* Description */}
                <div>
                  <label className="block font-semibold mb-1" htmlFor="description">Description</label>
        <textarea
                    id="description"
                    className="w-full border rounded-lg px-4 py-3 bg-blue-50 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={3}
                  />
                </div>
                {/* Key Highlights */}
                <div>
                  <label className="block font-semibold mb-2">Key Highlights</label>
                  <div className="space-y-2">
                    {highlights.map((h, idx) => (
                      <div key={idx} className="flex gap-2 items-center">
                        <input
                          className="flex-1 border rounded-lg px-4 py-3 bg-blue-50 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                          value={h}
                          onChange={e => handleHighlightChange(idx, e.target.value)}
                          placeholder={`Highlight ${idx + 1}`}
          required
        />
                        {highlights.length > 1 && (
                          <button
                            type="button"
                            className="text-red-500 hover:text-red-700 text-lg font-bold px-2"
                            onClick={() => removeHighlight(idx)}
                            aria-label="Remove highlight"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-green-500 transition shadow"
                      onClick={addHighlight}
                    >
                      <span className="inline-block mr-1">+</span> Add Highlight
                    </button>
                  </div>
                </div>
                {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-green-400 text-white font-bold rounded-xl shadow-lg text-lg hover:from-blue-700 hover:to-green-500 transition"
                >
                  <FaPills className="inline-block mr-2" /> Add Medicine
                </button>
              </div>
      </form>
            </div>
          )}
          {section === "view" && (
            <div className="animate-fade-in w-full max-w-5xl mx-auto px-4 mt-4">
              <div className="flex items-center gap-4 mb-2 mt-2">
                <div className="w-2 h-10 rounded bg-gradient-to-b from-blue-500 to-green-400 shadow-md"></div>
                <h1 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-blue-700 via-blue-500 to-green-400 bg-clip-text text-transparent drop-shadow-lg">View Medicines</h1>
              </div>
              <div className="text-gray-500 text-base mb-6 ml-6">Browse, edit, or remove medicines from your inventory.</div>
              <div className="overflow-x-auto w-full bg-white rounded-2xl shadow-lg border border-blue-100 p-4">
                {loading ? (
                  <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <p className="mt-2 text-gray-500">Loading medicines...</p>
                  </div>
                ) : (
                  <table className="w-full text-base">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="py-2 px-4">Images</th>
                        <th className="py-2 px-4">Name</th>
                        <th className="py-2 px-4">Category</th>
                        <th className="py-2 px-4">Price</th>
                        <th className="py-2 px-4">Stock</th>
                        <th className="py-2 px-4">Description</th>
                        <th className="py-2 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicines.length === 0 && (
                        <tr>
                          <td colSpan={7} className="text-center py-8 text-gray-400 text-lg">No medicines added yet.</td>
                        </tr>
                      )}
                    {medicines.map((med, idx) => (
                      <tr key={med.id} className={"border-t transition " + (idx % 2 === 0 ? "bg-blue-50/40" : "bg-white") + " hover:bg-blue-100/60"}>
                        <td className="py-2 px-4">
                          <div className="flex gap-2">
                            {med.images.map((img, idx) => (
                              <img key={idx} src={img} alt={med.name} className="w-10 h-10 object-cover rounded" />
                            ))}
                          </div>
                        </td>
                        <td className="py-2 px-4 font-medium">{med.name}</td>
                        <td className="py-2 px-4">{med.category}</td>
                        <td className="py-2 px-4">₹{med.price}</td>
                        <td className="py-2 px-4">{med.stock}</td>
                        <td className="py-2 px-4">
                          <div className="max-w-xs truncate" title={med.description}>
                            {med.description}
                          </div>
                        </td>
                        <td className="py-2 px-4">
                          <div className="flex gap-2">
                            <button
                              className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                              onClick={() => openEditModal(idx)}
                            >Edit</button>
                            <button
                              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                              onClick={() => handleDeleteMedicine(med.id)}
                            >Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                )}
              </div>
            </div>
          )}
          {section === "orders" && (
            <div className="animate-fade-in w-full max-w-5xl mx-auto px-4 mt-4">
              <div className="flex items-center gap-4 mb-2 mt-2">
                <div className="w-2 h-10 rounded bg-gradient-to-b from-blue-500 to-green-400 shadow-md"></div>
                <h1 className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-blue-700 via-blue-500 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Orders</h1>
              </div>
              <div className="text-gray-500 text-base mb-6 ml-6">Manage and track all customer orders here.</div>
              {/* Place Order */}
              <form onSubmit={handlePlaceOrder} className="mb-8 flex gap-4 items-end flex-wrap">
                <div className="flex-1 min-w-[200px]">
                  <label className="block font-semibold mb-1" htmlFor="order-medicine">Medicine</label>
                  <select
                    id="order-medicine"
                    className="w-full border rounded px-3 py-2"
                    value={orderMedicineId}
                    onChange={e => setOrderMedicineId(e.target.value)}
                    required
                  >
                    <option value="">Select Medicine</option>
                    {medicines.map((m) => (
                      <option key={m.id} value={m.id}>{m.name} (Stock: {m.stock})</option>
                    ))}
                  </select>
                </div>
                <div className="w-32">
                  <label className="block font-semibold mb-1" htmlFor="order-qty">Quantity</label>
                  <input
                    id="order-qty"
                    type="number"
                    min={1}
                    className="w-full border rounded px-3 py-2"
                    value={orderQuantity}
                    onChange={e => setOrderQuantity(Number(e.target.value))}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:scale-105 hover:shadow-lg focus:outline-none"
                >
                  Place Order
                </button>
                {orderError && <div className="text-red-500 font-semibold ml-4">{orderError}</div>}
              </form>
              {/* Orders Table */}
              <div className="overflow-x-auto w-full bg-white rounded-2xl shadow-lg border border-blue-100 p-4">
                <table className="w-full text-base">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="py-2 px-4">Order ID</th>
                      <th className="py-2 px-4">Medicine</th>
                      <th className="py-2 px-4">Quantity</th>
                      <th className="py-2 px-4">Status</th>
                      <th className="py-2 px-4">Date</th>
                      <th className="py-2 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length === 0 && (
                      <tr>
                        <td colSpan={6} className="text-center py-8 text-gray-400 text-lg">No orders placed yet.</td>
                      </tr>
                    )}
                    {orders.map((order, idx) => (
                      <tr key={order.id} className={"border-t transition " + (idx % 2 === 0 ? "bg-blue-50/40" : "bg-white") + " hover:bg-blue-100/60"}>
                        <td className="py-2 px-4">{order.id}</td>
                        <td className="py-2 px-4">{order.medicineName}</td>
                        <td className="py-2 px-4">{order.quantity}</td>
                        <td className="py-2 px-4">
                          <select
                            className="border rounded px-2 py-1"
                            value={order.status}
                            onChange={e => handleOrderStatusChange(order.id, e.target.value)}
                            title="Order Status"
                          >
                            {ORDER_STATUSES.map((s) => <option key={s}>{s}</option>)}
                          </select>
                        </td>
                        <td className="py-2 px-4 text-xs">{order.date}</td>
                        <td className="py-2 px-4">-</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
      {/* Edit Medicine Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-white/30">
          <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 w-full max-w-lg min-w-[320px] max-h-[90vh] flex flex-col p-0 sm:p-0 relative animate-fade-in">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-2xl font-bold focus:outline-none z-10"
              onClick={closeEditModal}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
            <div
              className="overflow-y-auto p-6 sm:p-10 flex-1"
              style={{
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE 10+ */
              }}
            >
              <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
              `}</style>
              <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-700 via-blue-500 to-green-400 bg-clip-text text-transparent drop-shadow-lg">Edit Medicine</h2>
              <form onSubmit={handleEditSave} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block font-semibold mb-1" htmlFor="edit-name">Medicine Name</label>
                    <input
                      id="edit-name"
                      name="name"
                      className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 placeholder:text-blue-300 text-lg transition"
                      value={editForm.name || ''}
                      onChange={handleEditFormChange}
                      required
                    />
                  </div>
                  <div className="w-full sm:w-48">
                    <label className="block font-semibold mb-1" htmlFor="edit-category">Category</label>
                    <select
                      id="edit-category"
                      name="category"
                      className="w-full border rounded-xl px-4 py-3 bg-blue-50 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      value={editForm.category || CATEGORIES[0]}
                      onChange={handleEditFormChange}
                    >
                      {CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block font-semibold mb-1" htmlFor="edit-price">Price</label>
                    <input
                      id="edit-price"
                      name="price"
                      type="number"
                      min="0"
                      className="w-full border rounded-xl px-4 py-3 bg-blue-50 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      value={editForm.price || ''}
                      onChange={handleEditFormChange}
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-semibold mb-1" htmlFor="edit-stock">Stock Quantity</label>
                    <input
                      id="edit-stock"
                      name="stock"
                      type="number"
                      min="0"
                      className="w-full border rounded-xl px-4 py-3 bg-blue-50 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                      value={editForm.stock || ''}
                      onChange={handleEditFormChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-1" htmlFor="edit-description">Description</label>
                  <textarea
                    id="edit-description"
                    name="description"
                    className="w-full border rounded-xl px-4 py-3 bg-blue-50 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    value={editForm.description || ''}
                    onChange={handleEditFormChange}
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Key Highlights</label>
                  <div className="space-y-2">
                    {(editForm.highlights || []).map((h, idx) => (
                      <div key={idx} className="flex gap-2 items-center">
                        <input
                          className="flex-1 border rounded-xl px-4 py-3 bg-blue-50 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                          value={h}
                          onChange={e => handleEditHighlightsChange(idx, e.target.value)}
                          placeholder={`Highlight ${idx + 1}`}
                          required
                        />
                        {(editForm.highlights || []).length > 1 && (
                          <button
                            type="button"
                            className="text-red-500 hover:text-red-700 text-lg font-bold px-2"
                            onClick={() => removeEditHighlight(idx)}
                            aria-label="Remove highlight"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-semibold hover:bg-blue-200 transition shadow"
                      onClick={addEditHighlight}
                    >
                      + Add Highlight
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block font-semibold mb-2">Product Images (max 3)</label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleEditImageChange}
                    title="Upload product images"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                  <div className="flex gap-4 mt-2">
                    {(editForm.images || []).map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`Preview ${idx + 1}`}
                        className="w-16 h-16 object-cover rounded shadow border"
                      />
                    ))}
                  </div>
                </div>
              </form>
            </div>
            <div className="border-t border-blue-100 px-6 sm:px-10 py-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end bg-white rounded-b-2xl">
              <button
                type="button"
                className="px-6 py-3 bg-gray-200 text-gray-700 font-bold rounded-xl text-lg hover:bg-gray-300 transition focus:outline-none"
                onClick={closeEditModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                form="edit-medicine-form"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-400 text-white font-bold rounded-xl shadow-lg text-lg hover:from-blue-700 hover:to-green-500 transition focus:outline-none"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xs animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Delete Medicine?</h2>
            <p className="mb-6">Are you sure you want to delete this medicine?</p>
            <div className="flex gap-4">
              <button
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                onClick={confirmDeleteMedicine}
              >
                Delete
              </button>
              <button
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                onClick={() => setShowDeleteDialog(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 