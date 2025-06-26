"use client";
import React, { useState } from "react";

const mockMedicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    price: 49,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80",
    details: "Pain reliever and fever reducer.",
  },
  {
    id: 2,
    name: "Amoxicillin 250mg",
    price: 120,
    image: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=400&q=80",
    details: "Antibiotic for bacterial infections.",
  },
  {
    id: 3,
    name: "Vitamin C 1000mg",
    price: 80,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    details: "Boosts immunity and antioxidant.",
  },
  {
    id: 4,
    name: "Cetirizine 10mg",
    price: 35,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
    details: "Allergy relief tablet.",
  },
];

export default function Shop() {
  const [cart, setCart] = useState<{ [id: number]: number }>({});

  const addToCart = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    alert("Added to cart!");
  };

  return (
    <div style={{
      background: 'linear-gradient(120deg, #e3f0ff 0%, #f5faff 100%)',
      minHeight: '100vh',
      padding: '32px 0',
    }}>
      <h2
        style={{
          fontSize: 36,
          fontWeight: 800,
          color: '#1976d2',
          marginBottom: 32,
          textAlign: 'center',
          letterSpacing: 1,
        }}
      >
        Shop Medicines
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32,
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 16px',
        }}
      >
        {mockMedicines.map((med) => (
          <div
            key={med.id}
            style={{
              background: '#fff',
              borderRadius: 16,
              boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)',
              padding: 24,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'box-shadow 0.2s, transform 0.2s',
              border: '1.5px solid #e3f0ff',
            }}
          >
            <img
              src={med.image}
              alt={med.name}
              style={{
                width: 120,
                height: 120,
                objectFit: 'cover',
                borderRadius: 10,
                marginBottom: 16,
                boxShadow: '0 2px 12px #1976d233',
                border: '2px solid #f5faff',
              }}
            />
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: '#1976d2',
                marginBottom: 8,
                textAlign: 'center',
              }}
            >
              {med.name}
            </h3>
            <div
              style={{
                color: '#555',
                fontSize: 16,
                marginBottom: 8,
                textAlign: 'center',
                minHeight: 40,
              }}
            >
              {med.details}
            </div>
            <div
              style={{
                fontWeight: 700,
                color: '#43cea2',
                fontSize: 20,
                marginBottom: 16,
                letterSpacing: 0.5,
              }}
            >
              ₹{med.price}
            </div>
            <button
              onClick={() => addToCart(med.id)}
              style={{
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
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #43cea2 0%, #1976d2 100%)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)')}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
