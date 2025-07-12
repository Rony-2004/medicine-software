"use client";

import { ShoppingCart, User, Upload, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState, useRef } from 'react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onCartOpen: () => void;
}

export default function Header({ searchQuery, setSearchQuery, onCartOpen }: HeaderProps) {
  const { totalItems } = useCart();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center gap-4 min-w-fit">
        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl">M</div>
        <span className="text-2xl font-bold text-blue-700 tracking-tight">MediCare</span>
      </div>
      <div className="flex-1 flex items-center gap-6 mx-8 min-w-0">
        <input
          type="text"
          placeholder="Search medicines, health products..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full min-w-0 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-100 hover:bg-blue-50 transition text-blue-700 font-medium whitespace-nowrap">
          <Upload className="w-5 h-5" />
          <span className="hidden sm:inline">Upload Prescription</span>
        </button>
      </div>
      <div className="flex items-center gap-6 md:gap-8">
        <button className="relative flex items-center justify-center p-2 rounded-full hover:scale-105 hover:shadow-md transition group" onClick={onCartOpen} aria-label="Open cart">
          <ShoppingCart className="w-7 h-7 text-blue-700" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold min-w-[20px] text-center">
              {totalItems}
            </span>
          )}
        </button>
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition" aria-label="Favorites">
          <Heart className="w-7 h-7 text-gray-400" />
        </button>
        <div className="relative">
          <button ref={profileRef} onClick={() => setProfileOpen(v => !v)} className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-50 transition">
            <User className="w-7 h-7 text-blue-700" />
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
              <div className="px-4 py-2 text-gray-700 font-medium">User Profile</div>
              <div className="px-4 py-2 text-gray-500 text-sm cursor-pointer hover:bg-gray-50">My Orders</div>
              <div className="px-4 py-2 text-gray-500 text-sm cursor-pointer hover:bg-gray-50">Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}