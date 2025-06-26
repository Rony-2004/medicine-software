import Link from "next/link";
import Navbar from "./Navbar";
import React from "react";
import { AuthProvider } from "./AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Inter, sans-serif', background: '#f7f9fa' }}>
        <AuthProvider>
          <Navbar />
          <main style={{ minHeight: '80vh', maxWidth: 1200, margin: '0 auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 16px #0001', padding: 32 }}>
            {children}
          </main>
          <footer style={{ textAlign: 'center', color: '#888', padding: 24, fontSize: 14 }}>
            &copy; {new Date().getFullYear()} MediStore. All rights reserved.
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
} 