"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { useAuth } from "./AuthContext";
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar({ onLoginClick }: { onLoginClick: () => void }) {
  const { auth, user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showDropdown]);

  // Auto-close dropdown on navigation
  useEffect(() => {
    const handleRouteChange = () => setShowDropdown(false);
    router.events?.on?.('routeChangeStart', handleRouteChange);
    return () => router.events?.off?.('routeChangeStart', handleRouteChange);
  }, [router]);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    // No redirect after logout
  };

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
        <div style={{ display: 'flex', gap: 36, alignItems: 'center', position: 'relative' }}>
          {auth === "user" && <NavLink href="/shop">Shop</NavLink>}
          {auth === "user" && <NavLink href="/cart">Cart</NavLink>}
          {auth === "user" && <NavLink href="/orders">Orders</NavLink>}
          {auth === "admin" && <NavLink href="/admin/dashboard">Admin Dashboard</NavLink>}
          {/* User Dropdown */}
          <div style={{ position: 'relative' }} ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown((v) => !v)}
              style={{
                background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                fontWeight: 700,
                fontSize: 20,
                marginLeft: 12,
                cursor: 'pointer',
                boxShadow: '0 2px 8px #1976d244',
                letterSpacing: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none',
              }}
              aria-label="User menu"
            >
              <span role="img" aria-label="user">👤</span>
            </button>
            {showDropdown && (
              <div style={{
                position: 'absolute',
                right: 0,
                top: 48,
                background: '#fff',
                color: '#222',
                borderRadius: 16,
                boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)',
                minWidth: 180,
                padding: '18px 0 8px 0',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                fontSize: 17,
                fontWeight: 500,
              }}>
                {auth === "user" ? (
                  <>
                    <div style={{ padding: '8px 24px', color: '#1976d2', fontWeight: 700, fontSize: 16 }}>
                      {user ? `${user.first_name} ${user.last_name}` : 'User'}
                    </div>
                    <Link href="/user/profile" style={{ padding: '8px 24px', color: '#1976d2', fontWeight: 700, textDecoration: 'none', cursor: 'pointer' }} onClick={() => setShowDropdown(false)}>User Profile</Link>
                    <Link href="/orders" style={{ padding: '8px 24px', color: '#555', textDecoration: 'none', cursor: 'pointer' }} onClick={() => setShowDropdown(false)}>My Orders</Link>
                    <button onClick={handleLogout} style={{ padding: '8px 24px', color: '#f44336', background: 'none', border: 'none', textAlign: 'left', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Logout</button>
                  </>
                ) : (
                  <>
                    <button style={{ padding: '8px 24px', color: '#1976d2', fontWeight: 700, background: 'none', border: 'none', textAlign: 'left', fontSize: 16, cursor: 'pointer' }} onClick={() => { setShowDropdown(false); onLoginClick(); }}>Login</button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
} 