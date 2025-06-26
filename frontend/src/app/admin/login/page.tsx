"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../AuthContext";

export default function AdminLogin() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "admin123") {
      login("admin");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials. Try admin@example.com / admin123");
    }
  };

  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)', padding: 40, minWidth: 340, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1976d2', textAlign: 'center', marginBottom: 8 }}>Admin Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={inputStyle} />
        {error && <div style={{ color: '#f44336', fontWeight: 600, textAlign: 'center' }}>{error}</div>}
        <button type="submit" style={{ background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: '12px 0', cursor: 'pointer', boxShadow: '0 2px 8px #1976d244', letterSpacing: 1 }}>Login</button>
        <div style={{ color: '#888', fontSize: 14, textAlign: 'center', marginTop: 8 }}>Demo: admin@example.com / admin123</div>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '12px 16px',
  borderRadius: 8,
  border: '1.5px solid #e3f0ff',
  fontSize: 16,
  outline: 'none',
} as React.CSSProperties; 