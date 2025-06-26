"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../AuthContext";
import Link from "next/link";

export default function UserDashboard() {
  const { auth, logout } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (auth !== "user") router.replace("/login");
  }, [auth, router]);

  if (auth !== "user") return null;

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };

  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1976d2', marginBottom: 8 }}>Welcome, User!</h2>
      <p style={{ fontSize: 18, color: '#333', textAlign: 'center', maxWidth: 500 }}>
        You are logged in. You can now browse and buy medicines, view your cart, and track your orders.
      </p>
      <Link href="/shop" style={{ background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: '14px 44px', textDecoration: 'none', boxShadow: '0 2px 8px #1976d244', letterSpacing: 1 }}>Go to Shop</Link>
      <button onClick={handleLogout} style={{ background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: '12px 44px', marginTop: 16, cursor: 'pointer', boxShadow: '0 2px 8px #1976d244', letterSpacing: 1 }}>Logout</button>
    </div>
  );
} 