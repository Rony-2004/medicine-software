"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import LoginRegisterModal from './LoginRegisterModal';
import { useAuth } from '../app/AuthContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'Online'>('COD');
  const { auth } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const deliveryFee = totalPrice > 500 ? 0 : 50;
  const finalTotal = totalPrice + deliveryFee;

  const handleCheckoutClick = () => {
    if (!auth) {
      setShowLoginModal(true);
      return;
    }
    setShowPayment(true);
    setSuccess("");
    setError("");
  };

  const handleConfirmOrder = async () => {
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";
      const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {})
        },
        body: JSON.stringify({
          items: items.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price
          })),
          total: finalTotal,
          payment_method: paymentMethod
        })
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(`Order placed successfully! ${paymentMethod === 'COD' ? 'Cash on Delivery' : 'Online Payment'} selected.`);
        clearCart();
        setShowPayment(false);
      } else {
        setError(data.message || "Failed to place order.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Shopping Cart ({items.length})</span>
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col h-full">
            {items.length === 0 ? (
              <div className="flex-1 flex items-center justify-center flex-col space-y-4">
                <ShoppingBag className="w-16 h-16 text-gray-300" />
                <p className="text-gray-500 text-center">Your cart is empty</p>
                <Button onClick={onClose}>Continue Shopping</Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto py-4 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex space-x-3 p-3 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                        <p className="text-xs text-gray-500">{item.manufacturer}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-sm">₹{item.price}</span>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => removeFromCart(item.id)}
                              className="w-8 h-8 p-0 text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Delivery Fee</span>
                      <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                    </div>
                    {totalPrice < 500 && deliveryFee > 0 && (
                      <p className="text-xs text-blue-600">
                        Add ₹{500 - totalPrice} more for free delivery
                      </p>
                    )}
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{finalTotal}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      className={`w-full py-3 rounded-lg font-bold text-lg transition-colors duration-200 ${items.length === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white shadow-lg'}`}
                      style={{ boxShadow: '0 2px 8px #43cea288' }}
                      disabled={loading || items.length === 0}
                      onClick={handleCheckoutClick}
                    >
                      Proceed to Checkout
                    </button>
                    {showPayment && (
                      <div className="mt-4 p-4 rounded-xl border border-gray-200 bg-white shadow-md animate-fadeIn">
                        <div className="mb-3 font-semibold text-gray-700 text-center">Select Payment Method</div>
                        <div className="flex flex-col gap-3 mb-4">
                          <label className={`flex items-center gap-2 p-2 rounded cursor-pointer border ${paymentMethod === 'COD' ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                            onClick={() => setPaymentMethod('COD')}>
                            <span className={`w-4 h-4 inline-block rounded-full border-2 ${paymentMethod === 'COD' ? 'border-green-500 bg-green-500' : 'border-gray-300 bg-white'}`}></span>
                            <span className="ml-2 font-medium">Cash on Delivery (COD)</span>
                          </label>
                          <label className={`flex items-center gap-2 p-2 rounded cursor-pointer border ${paymentMethod === 'Online' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                            onClick={() => setPaymentMethod('Online')}>
                            <span className={`w-4 h-4 inline-block rounded-full border-2 ${paymentMethod === 'Online' ? 'border-blue-500 bg-blue-500' : 'border-gray-300 bg-white'}`}></span>
                            <span className="ml-2 font-medium">Online Payment (Coming Soon)</span>
                          </label>
                        </div>
                        <button
                          className={`w-full py-2 rounded-lg font-bold text-white transition-colors duration-200 ${loading ? 'bg-gray-400' : paymentMethod === 'COD' ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                          onClick={handleConfirmOrder}
                          disabled={loading}
                        >
                          {loading ? 'Placing Order...' : 'Confirm Order'}
                        </button>
                        <button
                          className="w-full mt-2 py-2 rounded-lg font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 border border-gray-200"
                          onClick={() => setShowPayment(false)}
                          disabled={loading}
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                    {success && <div className="text-green-600 text-center mt-2">{success}</div>}
                    {error && <div className="text-red-600 text-center mt-2">{error}</div>}
                    <Button variant="outline" className="w-full" onClick={clearCart}>
                      Clear Cart
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
      <LoginRegisterModal open={showLoginModal} onClose={() => setShowLoginModal(false)} closable={false} />
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s cubic-bezier(.4,2,.6,1);
        }
      `}</style>
    </>
  );
}