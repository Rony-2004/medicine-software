"use client";
import { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import FeaturedMedicines from '@/components/FeaturedMedicines';
import MedicineGrid from '@/components/MedicineGrid';
import Cart from '@/components/Cart';
import { CartProvider } from '@/context/CartContext';
import LoginRegisterModal from '@/components/LoginRegisterModal';

export default function Home() {
  const { auth } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (!auth) setShowLoginModal(true);
    else setShowLoginModal(false);
  }, [auth]);

  const handleLoginClick = () => setShowLoginModal(true);

  return (
    <CartProvider>
      <div className="min-h-screen w-full bg-gradient-to-br from-cyan-50 to-gray-100 flex flex-col">
        <Header 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onCartOpen={() => setIsCartOpen(true)}
          onLoginClick={handleLoginClick}
        />
        <div className="flex flex-1 w-full h-[calc(100vh-4rem)]">
          <Sidebar 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
          <main className="flex-1 px-8 py-8 pt-24 pl-72 overflow-y-auto">
            <FeaturedMedicines />
            <MedicineGrid 
              category={selectedCategory}
              searchQuery={searchQuery}
            />
          </main>
        </div>
        <Cart 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />
        <LoginRegisterModal open={showLoginModal} onClose={() => setShowLoginModal(false)} closable={true} />
      </div>
    </CartProvider>
  );
} 