"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../AuthContext";
import Link from "next/link";

export default function AdminDashboard() {
  const { auth, logout } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (auth !== "admin") router.replace("/admin/login");
  }, [auth, router]);

  if (auth !== "admin") return null;

  const handleLogout = () => {
    logout();
    router.replace("/admin/login");
  };

  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
      <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1976d2', marginBottom: 8 }}>Welcome, Admin!</h2>
      <p style={{ fontSize: 18, color: '#333', textAlign: 'center', maxWidth: 500 }}>
        You are logged in as admin. You can now manage medicines and view all orders.
      </p>
      <Link href="/admin" style={{ background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: '14px 44px', textDecoration: 'none', boxShadow: '0 2px 8px #1976d244', letterSpacing: 1 }}>Manage Medicines</Link>
      <button onClick={handleLogout} style={{ background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: '12px 44px', marginTop: 16, cursor: 'pointer', boxShadow: '0 2px 8px #1976d244', letterSpacing: 1 }}>Logout</button>
    </div>
  );
} 