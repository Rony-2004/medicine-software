"use client";
import React from "react";
import { useAuth } from "../AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Status icons
const statusIcons: Record<string, JSX.Element> = {
  Processing: (
    <svg width="22" height="22" fill="none" stroke="#ff9800" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
  ),
  Shipped: (
    <svg width="22" height="22" fill="none" stroke="#1976d2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="1" y="7" width="15" height="13" rx="2" /><path d="M16 3h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-3" /><circle cx="5.5" cy="18.5" r="1.5" /><circle cx="18.5" cy="18.5" r="1.5" /></svg>
  ),
  Delivered: (
    <svg width="22" height="22" fill="none" stroke="#43cea2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
  ),
};

const statusColors: Record<string, string> = {
  Processing: '#ff9800',
  Shipped: '#1976d2',
  Delivered: '#43cea2',
};

export default function OrdersPage() {
  const { user, token, auth } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!auth || !token) {
      router.replace('/login');
      return;
    }
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
        const res = await fetch(`${API_BASE}/api/orders`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok) {
          setOrders(data.orders || []);
        } else {
          setError(data.message || "Failed to load orders");
        }
      } catch {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [auth, token, router]);

  return (
    <div style={{
      maxWidth: 900,
      margin: '0 auto',
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)',
      padding: 32,
      marginTop: 24,
      marginBottom: 24,
      animation: 'fadeInOrders 0.7s cubic-bezier(.4,2,.6,1)',
    }}>
      <style>{`
        @keyframes fadeInOrders { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
        @keyframes popInOrder { 0% { opacity: 0; transform: scale(0.95);} 100% { opacity: 1; transform: scale(1);} }
      `}</style>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1976d2', marginBottom: 32, textAlign: 'center', letterSpacing: 1 }}>
        Your Orders
      </h2>
      {loading ? (
        <div style={{ textAlign: 'center', color: '#888', fontSize: 20, margin: 48 }}>
          Loading your orders...
        </div>
      ) : error ? (
        <div style={{ textAlign: 'center', color: '#f44336', fontSize: 20, margin: 48 }}>
          {error}
        </div>
      ) : orders.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#888', fontSize: 20, margin: 48 }}>
          You have no orders yet.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {orders.map((order, idx) => (
            <div key={order.id} style={{
              background: 'linear-gradient(90deg, #e3f0ff 0%, #f5faff 100%)',
              borderRadius: 14,
              boxShadow: '0 2px 8px #1976d211',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              animation: `popInOrder 0.5s cubic-bezier(.4,2,.6,1) ${0.1 * idx}s both`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                <div style={{ fontWeight: 700, fontSize: 18, color: '#1976d2', letterSpacing: 0.5 }}>
                  Order <span style={{ color: '#43cea2' }}>{order.id}</span>
                </div>
                <div style={{ color: '#888', fontSize: 15 }}>Placed on {order.date}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 16, color: statusColors[order.status] }}>
                  {statusIcons[order.status]} {order.status}
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