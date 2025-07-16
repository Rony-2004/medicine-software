"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type AuthType = "user" | "admin" | null;
interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  [key: string]: any;
}
interface AuthContextType {
  auth: AuthType;
  user: User | null;
  token: string | null;
  login: (type: AuthType, user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  auth: null,
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthType>(null);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedType = localStorage.getItem("authType");
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedType === "user" || storedType === "admin") setAuth(storedType);
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedToken) setToken(storedToken);
  }, []);

  const login = (type: AuthType, user: User, token: string) => {
    setAuth(type);
    setUser(user);
    setToken(token);
    if (type) localStorage.setItem("authType", type);
    else localStorage.removeItem("authType");
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");
  };
  const logout = () => {
    setAuth(null);
    setUser(null);
    setToken(null);
    localStorage.removeItem("authType");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ auth, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 