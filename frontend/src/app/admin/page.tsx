"use client";
import React, { useState } from "react";

const mockMedicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    price: 49,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80",
    details: "Pain reliever and fever reducer.",
    stock: 120,
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    price: 120,
    image: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=400&q=80",
    details: "Antibiotic for bacterial infections.",
    stock: 60,
  },
];

const mockOrders = [
  {
    id: 'ORD123456',
    date: '2024-06-01',
    status: 'Processing',
    items: [
      { name: 'Paracetamol 500mg', qty: 2 },
      { name: 'Vitamin C 1000mg', qty: 1 },
    ],
    total: 178,
  },
  {
    id: 'ORD123457',
    date: '2024-05-28',
    status: 'Shipped',
    items: [
      { name: 'Amoxicillin 250mg', qty: 1 },
    ],
    total: 120,
  },
];

const TrashIcon = (
  <svg width="20" height="20" fill="none" stroke="#f44336" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
);
const EditIcon = (
  <svg width="20" height="20" fill="none" stroke="#1976d2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z" /></svg>
);
const SaveIcon = (
  <svg width="20" height="20" fill="none" stroke="#43cea2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
);
const PlusIcon = (
  <svg width="20" height="20" fill="none" stroke="#1976d2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);

const statusColors: Record<string, string> = {
  Processing: '#ff9800',
  Shipped: '#1976d2',
  Delivered: '#43cea2',
};

export default function AdminDashboard() {
  const [tab, setTab] = useState<'medicines' | 'orders'>('medicines');
  const [medicines, setMedicines] = useState(mockMedicines);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', price: '', image: '', details: '', stock: '' });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.image || !form.details || !form.stock) return;
    setMedicines(prev => [
      ...prev,
      {
        id: Date.now(),
        name: form.name,
        price: Number(form.price),
        image: form.image,
        details: form.details,
        stock: Number(form.stock),
      },
    ]);
    setForm({ name: '', price: '', image: '', details: '', stock: '' });
  };

  const handleDelete = (id: number) => {
    setMedicines(prev => prev.filter(m => m.id !== id));
  };

  const handleEdit = (id: number) => {
    setEditingId(id);
    const med = medicines.find(m => m.id === id);
    if (med) setForm({ name: med.name, price: String(med.price), image: med.image, details: med.details, stock: String(med.stock) });
  };

  const handleSave = (id: number) => {
    setMedicines(prev => prev.map(m => m.id === id ? { ...m, ...form, price: Number(form.price), stock: Number(form.stock) } : m));
    setEditingId(null);
    setForm({ name: '', price: '', image: '', details: '', stock: '' });
  };

  return (
    <div style={{
      maxWidth: 1000,
      margin: '0 auto',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)',
      padding: 32,
      marginTop: 24,
      marginBottom: 24,
      animation: 'fadeInAdmin 0.7s cubic-bezier(.4,2,.6,1)',
    }}>
      <style>{`
        @keyframes fadeInAdmin { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
        @keyframes popInAdmin { 0% { opacity: 0; transform: scale(0.95);} 100% { opacity: 1; transform: scale(1);} }
        .tab-btn:hover { background: #e3f0ff !important; color: #1976d2 !important; }
      `}</style>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1976d2', marginBottom: 32, textAlign: 'center', letterSpacing: 1 }}>
        Admin Dashboard
      </h2>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 32 }}>
        <button onClick={() => setTab('medicines')} style={{
          background: tab === 'medicines' ? 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)' : '#f7f9fa',
          color: tab === 'medicines' ? '#fff' : '#1976d2',
          fontWeight: 700,
          fontSize: 18,
          border: 'none',
          borderRadius: 8,
          padding: '12px 32px',
          cursor: 'pointer',
          boxShadow: tab === 'medicines' ? '0 2px 8px #1976d244' : 'none',
          transition: 'all 0.2s',
        }} className="tab-btn">Medicines</button>
        <button onClick={() => setTab('orders')} style={{
          background: tab === 'orders' ? 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)' : '#f7f9fa',
          color: tab === 'orders' ? '#fff' : '#1976d2',
          fontWeight: 700,
          fontSize: 18,
          border: 'none',
          borderRadius: 8,
          padding: '12px 32px',
          cursor: 'pointer',
          boxShadow: tab === 'orders' ? '0 2px 8px #1976d244' : 'none',
          transition: 'all 0.2s',
        }} className="tab-btn">Orders</button>
      </div>
      {tab === 'medicines' ? (
        <>
          <form onSubmit={handleAdd} style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32, alignItems: 'flex-end', background: '#f7f9fa', borderRadius: 12, padding: 20, boxShadow: '0 2px 8px #1976d211' }}>
            <input type="text" placeholder="Image URL" value={form.image} onChange={e => setForm(f => ({ ...f, image: e.target.value }))} style={inputStyle} required />
            <input type="text" placeholder="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={inputStyle} required />
            <input type="number" placeholder="Price" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} style={inputStyle} required min={1} />
            <input type="text" placeholder="Details" value={form.details} onChange={e => setForm(f => ({ ...f, details: e.target.value }))} style={inputStyle} required />
            <input type="number" placeholder="Stock" value={form.stock} onChange={e => setForm(f => ({ ...f, stock: e.target.value }))} style={inputStyle} required min={0} />
            <button type="submit" style={{ background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: '10px 28px', cursor: 'pointer', boxShadow: '0 2px 8px #1976d244', display: 'flex', alignItems: 'center', gap: 8 }}>{PlusIcon} Add</button>
          </form>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {medicines.map((med, idx) => (
              <div key={med.id} style={{ background: '#f7f9fa', borderRadius: 12, boxShadow: '0 2px 8px #1976d211', padding: 24, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', animation: `popInAdmin 0.5s cubic-bezier(.4,2,.6,1) ${0.1 * idx}s both` }}>
                <img src={med.image} alt={med.name} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 8, border: '2px solid #e3f0ff', boxShadow: '0 1px 4px #1976d211', marginBottom: 8 }} />
                {editingId === med.id ? (
                  <>
                    <input type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={inputStyle} />
                    <input type="number" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} style={inputStyle} min={1} />
                    <input type="text" value={form.details} onChange={e => setForm(f => ({ ...f, details: e.target.value }))} style={inputStyle} />
                    <input type="number" value={form.stock} onChange={e => setForm(f => ({ ...f, stock: e.target.value }))} style={inputStyle} min={0} />
                    <button onClick={() => handleSave(med.id)} style={{ background: 'linear-gradient(90deg, #43cea2 0%, #1976d2 100%)', color: '#fff', fontWeight: 700, fontSize: 16, border: 'none', borderRadius: 8, padding: '8px 20px', cursor: 'pointer', boxShadow: '0 2px 8px #1976d244', display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>{SaveIcon} Save</button>
                  </>
                ) : (
                  <>
                    <div style={{ fontWeight: 700, fontSize: 18, color: '#1976d2', textAlign: 'center' }}>{med.name}</div>
                    <div style={{ color: '#555', fontSize: 15, textAlign: 'center', marginBottom: 4 }}>{med.details}</div>
                    <div style={{ color: '#43cea2', fontWeight: 700, fontSize: 18 }}>₹{med.price}</div>
                    <div style={{ color: '#888', fontSize: 15 }}>Stock: {med.stock}</div>
                    <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
                      <button onClick={() => handleEdit(med.id)} style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>{EditIcon} Edit</button>
                      <button onClick={() => handleDelete(med.id)} style={{ background: 'none', border: 'none', color: '#f44336', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>{TrashIcon} Delete</button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {mockOrders.map((order, idx) => (
            <div key={order.id} style={{ background: 'linear-gradient(90deg, #e3f0ff 0%, #f5faff 100%)', borderRadius: 14, boxShadow: '0 2px 8px #1976d211', padding: 24, display: 'flex', flexDirection: 'column', gap: 12, animation: `popInAdmin 0.5s cubic-bezier(.4,2,.6,1) ${0.1 * idx}s both` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#1976d2', letterSpacing: 0.5 }}>
                  Order <span style={{ color: '#43cea2' }}>{order.id}</span>
                </div>
                <div style={{ color: '#888', fontSize: 15 }}>Placed on {order.date}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 16, color: statusColors[order.status] }}>
                  <svg width="22" height="22" fill="none" stroke={statusColors[order.status]} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg> {order.status}
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, alignItems: 'center', marginTop: 8 }}>
                {order.items.map((item, i) => (
                  <div key={i} style={{ background: '#fff', borderRadius: 8, boxShadow: '0 1px 4px #1976d211', padding: '8px 16px', fontSize: 15, color: '#1976d2', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width="18" height="18" fill="#43cea2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    {item.name} <span style={{ color: '#888', fontWeight: 400, fontSize: 14 }}>x{item.qty}</span>
                  </div>
                ))}
              </div>
              <div style={{ fontWeight: 700, color: '#43cea2', fontSize: 18, marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="20" height="20" fill="none" stroke="#43cea2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><text x="2" y="17" fontSize="18" fill="#43cea2">₹</text></svg>
                Total: {order.total}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  padding: '10px 14px',
  borderRadius: 8,
  border: '1.5px solid #e3f0ff',
  fontSize: 16,
  minWidth: 120,
  outline: 'none',
  marginBottom: 4,
} as React.CSSProperties; 