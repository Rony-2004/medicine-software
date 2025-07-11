"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type AuthType = "user" | "admin" | null;
interface AuthContextType {
  auth: AuthType;
  login: (type: AuthType, token?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  auth: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthType>(null);

  useEffect(() => {
    const stored = localStorage.getItem("authType");
    if (stored === "user" || stored === "admin") setAuth(stored);
  }, []);

  const login = (type: AuthType, token?: string) => {
    setAuth(type);
    if (type) localStorage.setItem("authType", type);
    else localStorage.removeItem("authType");
    if (token) localStorage.setItem("token", token);
  };
  const logout = () => {
    setAuth(null);
    localStorage.removeItem("authType");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 