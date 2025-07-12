import './globals.css';
import React from "react";
import { AuthProvider } from "./AuthContext";
import { CartProvider } from "../context/CartContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-cyan-50 to-gray-100 min-h-screen">
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
} 