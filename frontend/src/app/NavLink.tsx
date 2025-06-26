"use client";
import Link from "next/link";
import React from "react";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Link
      href={href}
      style={{
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: 0.5,
        padding: '8px 0',
        borderBottom: hover ? '3px solid #43cea2' : '3px solid transparent',
        transition: 'border 0.25s cubic-bezier(.4,2,.6,1), color 0.2s',
        cursor: 'pointer',
        display: 'inline-block',
        position: 'relative',
        background: 'none',
        outline: 'none',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      tabIndex={0}
    >
      {children}
      <span style={{
        display: 'block',
        height: 3,
        width: '100%',
        background: hover ? 'linear-gradient(90deg, #43cea2 0%, #1976d2 100%)' : 'transparent',
        borderRadius: 2,
        position: 'absolute',
        left: 0,
        bottom: -3,
        transition: 'background 0.25s cubic-bezier(.4,2,.6,1)',
      }} />
    </Link>
  );
} 