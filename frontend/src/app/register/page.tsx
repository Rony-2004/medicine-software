"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../AuthContext";

export default function UserRegister() {
  const { login } = useAuth();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
      const res = await fetch(`${API_BASE}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          phone,
          address
        })
      });
      const data = await res.json();
      if (res.ok && data.token && data.user) {
        login("user", data.user, data.token);
        router.push("/");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)', padding: 40, minWidth: 340, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1976d2', textAlign: 'center', marginBottom: 8 }}>User Registration</h2>
        <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required style={inputStyle} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required style={inputStyle} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={inputStyle} />
        <input type="tel" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required style={inputStyle} />
        <textarea placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required style={{ ...inputStyle, minHeight: 60 }} />
        {error && <div style={{ color: '#f44336', fontWeight: 600, textAlign: 'center' }}>{error}</div>}
        <button type="submit" disabled={loading} style={{ background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: '12px 0', cursor: 'pointer', boxShadow: '0 2px 8px #1976d244', letterSpacing: 1, opacity: loading ? 0.7 : 1 }}>{loading ? "Registering..." : "Register"}</button>
        <div style={{ color: '#888', fontSize: 14, textAlign: 'center', marginTop: 8 }}>
          Already have an account? <a href="/login" style={{ color: '#1976d2', textDecoration: 'underline' }}>Login</a>
        </div>
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