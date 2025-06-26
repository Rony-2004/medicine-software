"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      background: 'linear-gradient(120deg, #e3f0ff 0%, #f5faff 100%)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 600,
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.10)',
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
      }}>
        <h1 style={{
          fontSize: 40,
          fontWeight: 800,
          color: '#1976d2',
          margin: 0,
          textAlign: 'center',
          letterSpacing: 1,
        }}>
          Welcome to MediStore
        </h1>
        <p style={{
          fontSize: 20,
          color: '#333',
          textAlign: 'center',
          margin: 0,
        }}>
          Your trusted online pharmacy for genuine medicines. Fast delivery, best prices, and a wide range of healthcare products. Shop with confidence!
        </p>
        <input
          type="text"
          placeholder="Search for medicines, brands, or health products..."
          style={{
            width: '100%',
            padding: '14px 18px',
            borderRadius: 8,
            border: '1.5px solid #b3c6e0',
            fontSize: 18,
            marginBottom: 8,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        <Link href="/shop" style={{
          background: 'linear-gradient(90deg, #1976d2 0%, #43cea2 100%)',
          color: '#fff',
          padding: '16px 48px',
          borderRadius: 8,
          fontSize: 22,
          fontWeight: 700,
          textDecoration: 'none',
          boxShadow: '0 2px 8px #1976d244',
          marginTop: 8,
          letterSpacing: 1,
          textAlign: 'center',
        }}>
          Shop Medicines
        </Link>
      </div>
      <div style={{marginTop: 48, color: '#888', fontSize: 16, textAlign: 'center'}}>
        &copy; {new Date().getFullYear()} MediStore. All rights reserved.
      </div>
    </div>
  );
} 