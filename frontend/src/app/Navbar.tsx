"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useAuth } from "./AuthContext";

export default function Navbar() {
  const { auth, logout } = useAuth();
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(25, 118, 210, 0.85)',
      color: '#fff',
      marginBottom: 32,
      boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1.5px solid #e3f0ff',
    }}>
      <nav style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        height: 72,
      }}>
        <Link href="/" style={{
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 900,
          fontSize: 28,
          letterSpacing: 1,
          fontFamily: 'Inter, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          textShadow: '0 2px 8px #1976d288',
        }}>
          <span style={{
            display: 'inline-block',
            width: 36,
            height: 36,
            background: 'linear-gradient(135deg, #43cea2 0%, #1976d2 100%)',
            borderRadius: '50%',
            marginRight: 10,
            boxShadow: '0 2px 8px #1976d244',
            border: '2.5px solid #fff',
          }} />
          MediStore
        </Link>
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          {auth === "user" && <NavLink href="/shop">Shop</NavLink>}
          {auth === "user" && <NavLink href="/cart">Cart</NavLink>}
          {auth === "user" && <NavLink href="/orders">Orders</NavLink>}
          {auth === "admin" && <NavLink href="/admin/dashboard">Admin Dashboard</NavLink>}
          {auth === null && <NavLink href="/login">User Login</NavLink>}
          {auth === null && <NavLink href="/admin/login">Admin Login</NavLink>}
          {auth && (
            <button onClick={logout} style={{
              background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
              padding: '8px 22px',
              marginLeft: 12,
              cursor: 'pointer',
              boxShadow: '0 2px 8px #1976d244',
              letterSpacing: 1,
            }}>Logout</button>
          )}
        </div>
      </nav>
    </header>
  );
} 