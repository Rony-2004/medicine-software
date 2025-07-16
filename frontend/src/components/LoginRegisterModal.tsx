import React, { useState } from "react";
import { useAuth } from "../app/AuthContext";

interface LoginRegisterModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  closable?: boolean;
}

export default function LoginRegisterModal({ open, onClose, onSuccess, closable = true }: LoginRegisterModalProps) {
  const { login } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Register state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // Shared
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        login("user", data.token);
        onClose();
        if (onSuccess) onSuccess();
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
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
      if (res.ok && data.token) {
        login("user", data.token);
        onClose();
        if (onSuccess) onSuccess();
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
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.25)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)', padding: 36, minWidth: 340, maxWidth: 400, width: '100%', display: 'flex', flexDirection: 'column', gap: 18, position: 'relative' }}>
        {closable && (
          <button onClick={onClose} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 22, color: '#888', cursor: 'pointer' }}>&times;</button>
        )}
        <h2 style={{ fontSize: 26, fontWeight: 800, color: '#1976d2', textAlign: 'center', marginBottom: 8 }}>{mode === 'login' ? 'Login' : 'Register'}</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 8 }}>
          <button onClick={() => setMode('login')} style={{ fontWeight: mode === 'login' ? 700 : 500, color: mode === 'login' ? '#1976d2' : '#888', background: 'none', border: 'none', fontSize: 16, cursor: 'pointer', borderBottom: mode === 'login' ? '2px solid #1976d2' : '2px solid transparent', paddingBottom: 2 }}>Login</button>
          <button onClick={() => setMode('register')} style={{ fontWeight: mode === 'register' ? 700 : 500, color: mode === 'register' ? '#1976d2' : '#888', background: 'none', border: 'none', fontSize: 16, cursor: 'pointer', borderBottom: mode === 'register' ? '2px solid #1976d2' : '2px solid transparent', paddingBottom: 2 }}>Register</button>
        </div>
        {mode === 'login' ? (
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={inputStyle} />
            {error && <div style={{ color: '#f44336', fontWeight: 600, textAlign: 'center' }}>{error}</div>}
            <button type="submit" disabled={loading} style={{ background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: '12px 0', cursor: 'pointer', boxShadow: '0 2px 8px #1976d244', letterSpacing: 1, opacity: loading ? 0.7 : 1 }}>{loading ? "Logging in..." : "Login"}</button>
          </form>
        ) : (
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required style={inputStyle} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required style={inputStyle} />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={inputStyle} />
            <input type="tel" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required style={inputStyle} />
            <textarea placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required style={{ ...inputStyle, minHeight: 60 }} />
            {error && <div style={{ color: '#f44336', fontWeight: 600, textAlign: 'center' }}>{error}</div>}
            <button type="submit" disabled={loading} style={{ background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)', color: '#fff', fontWeight: 700, fontSize: 18, border: 'none', borderRadius: 8, padding: '12px 0', cursor: 'pointer', boxShadow: '0 2px 8px #1976d244', letterSpacing: 1, opacity: loading ? 0.7 : 1 }}>{loading ? "Registering..." : "Register"}</button>
          </form>
        )}
      </div>
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