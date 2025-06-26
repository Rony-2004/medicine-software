"use client";
import React, { useState } from "react";
import Link from "next/link";

// SVG icons
const MinusIcon = (
  <svg width="20" height="20" fill="none" stroke="#1976d2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const PlusIcon = (
  <svg width="20" height="20" fill="none" stroke="#1976d2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const TrashIcon = (
  <svg width="22" height="22" fill="none" stroke="#f44336" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
);
const CartIcon = (
  <svg width="28" height="28" fill="none" stroke="#1976d2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
);
const RupeeIcon = (
  <svg width="20" height="20" fill="none" stroke="#43cea2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><text x="2" y="17" fontSize="18" fill="#43cea2">₹</text></svg>
);
const CheckoutIcon = (
  <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" /></svg>
);

const mockCart = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    price: 49,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80",
    details: "Pain reliever and fever reducer.",
    quantity: 2,
  },
  {
    id: 2,
    name: "Vitamin C 1000mg",
    price: 80,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    details: "Boosts immunity and antioxidant.",
    quantity: 1,
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(mockCart);

  const updateQuantity = (id: number, qty: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
      animation: 'fadeInCart 0.7s cubic-bezier(.4,2,.6,1)',
    }}>
      <style>{`
        @keyframes fadeInCart { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.95);} 100% { opacity: 1; transform: scale(1);} }
        @keyframes pulseBtn { 0% { box-shadow: 0 0 0 0 #43cea244; } 70% { box-shadow: 0 0 0 10px #43cea200; } 100% { box-shadow: 0 0 0 0 #43cea200; } }
      `}</style>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1976d2', marginBottom: 32, textAlign: 'center', letterSpacing: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        {CartIcon} Your Cart
      </h2>
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#888', fontSize: 20, margin: 48 }}>
          Your cart is empty.<br />
          <Link href="/shop" style={{ color: '#1976d2', fontWeight: 700, textDecoration: 'underline', fontSize: 18 }}>Go to Shop</Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {cart.map((item, idx) => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                background: '#f7f9fa',
                borderRadius: 12,
                padding: 18,
                boxShadow: '0 2px 8px #1976d211',
                flexWrap: 'wrap',
                animation: `popIn 0.5s cubic-bezier(.4,2,.6,1) ${0.1 * idx}s both`,
              }}>
                <img src={item.image} alt={item.name} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8, border: '2px solid #e3f0ff', boxShadow: '0 1px 4px #1976d211' }} />
                <div style={{ flex: 1, minWidth: 180 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: '#1976d2', marginBottom: 4 }}>{item.name}</div>
                  <div style={{ color: '#555', fontSize: 15, marginBottom: 6 }}>{item.details}</div>
                  <div style={{ color: '#43cea2', fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', gap: 4 }}>{RupeeIcon}{item.price}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={qtyBtnStyle} aria-label="Decrease quantity">{MinusIcon}</button>
                  <label htmlFor={`qty-${item.id}`} style={{position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden'}}>Quantity</label>
                  <input
                    id={`qty-${item.id}`}
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={e => updateQuantity(item.id, Number(e.target.value))}
                    style={{ width: 40, textAlign: 'center', fontSize: 16, border: '1.5px solid #e3f0ff', borderRadius: 6, padding: 4 }}
                    title="Quantity"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={qtyBtnStyle} aria-label="Increase quantity">{PlusIcon}</button>
                </div>
                <button onClick={() => removeItem(item.id)} style={{
                  background: 'none',
                  border: 'none',
                  color: '#f44336',
                  fontWeight: 700,
                  fontSize: 18,
                  cursor: 'pointer',
                  marginLeft: 16,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }} aria-label="Remove item">
                  {TrashIcon} <span style={{fontSize: 15}}>Remove</span>
                </button>
                <div style={{ fontWeight: 700, color: '#1976d2', fontSize: 18, minWidth: 80, textAlign: 'right', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {RupeeIcon}{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          <div style={{
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
            animation: 'fadeInCart 0.7s cubic-bezier(.4,2,.6,1)',
          }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#1976d2', display: 'flex', alignItems: 'center', gap: 8 }}>
              {CartIcon} Subtotal: {RupeeIcon}{subtotal}
            </div>
            <button style={{
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
              animation: 'pulseBtn 1.5s infinite',
            }}
            onClick={() => alert('Checkout coming soon!')}
            >
              Proceed to Checkout {CheckoutIcon}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

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
  justifyContent: 'center',
} as React.CSSProperties; 