import './globals.css';
import React from "react";
import { AuthProvider } from "./AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-cyan-50 to-gray-100 min-h-screen">
        <AuthProvider>
          <main className="min-h-[80vh] max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 my-8">
            {children}
          </main>
          <footer className="text-center text-gray-500 py-6 text-sm">
            &copy; {new Date().getFullYear()} MediStore. All rights reserved.
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
} 