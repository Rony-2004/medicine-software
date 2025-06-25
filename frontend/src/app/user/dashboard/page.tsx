"use client";

import { useState } from "react";
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  LogOut, 
  Package, 
  Clock,
  Star,
  Filter,
  Plus,
  Minus
} from "lucide-react";

interface Medicine {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  prescription: boolean;
}

export default function UserDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [showCart, setShowCart] = useState(false);

  const categories = [
    "all",
    "pain-relief",
    "vitamins",
    "antibiotics",
    "diabetes",
    "heart",
    "respiratory"
  ];

  const medicines: Medicine[] = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      description: "Effective pain relief and fever reduction",
      price: 5.99,
      originalPrice: 7.99,
      image: "💊",
      category: "pain-relief",
      rating: 4.5,
      inStock: true,
      prescription: false,
    },
    {
      id: 2,
      name: "Vitamin D3 1000IU",
      description: "Supports bone health and immune system",
      price: 12.99,
      originalPrice: 15.99,
      image: "💊",
      category: "vitamins",
      rating: 4.8,
      inStock: true,
      prescription: false,
    },
    {
      id: 3,
      name: "Amoxicillin 250mg",
      description: "Antibiotic for bacterial infections",
      price: 8.99,
      originalPrice: 10.99,
      image: "💊",
      category: "antibiotics",
      rating: 4.2,
      inStock: true,
      prescription: true,
    },
    {
      id: 4,
      name: "Metformin 500mg",
      description: "Diabetes medication",
      price: 15.99,
      originalPrice: 18.99,
      image: "💊",
      category: "diabetes",
      rating: 4.6,
      inStock: true,
      prescription: true,
    },
    {
      id: 5,
      name: "Aspirin 100mg",
      description: "Heart health and pain relief",
      price: 6.99,
      originalPrice: 8.99,
      image: "💊",
      category: "heart",
      rating: 4.4,
      inStock: true,
      prescription: false,
    },
    {
      id: 6,
      name: "Ventolin Inhaler",
      description: "Asthma and respiratory relief",
      price: 22.99,
      originalPrice: 25.99,
      image: "💊",
      category: "respiratory",
      rating: 4.7,
      inStock: true,
      prescription: true,
    },
  ];

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (medicineId: number) => {
    setCart(prev => ({
      ...prev,
      [medicineId]: (prev[medicineId] || 0) + 1
    }));
  };

  const removeFromCart = (medicineId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[medicineId] > 1) {
        newCart[medicineId] -= 1;
      } else {
        delete newCart[medicineId];
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [medicineId, quantity]) => {
      const medicine = medicines.find(m => m.id === parseInt(medicineId));
      return total + (medicine?.price || 0) * quantity;
    }, 0);
  };

  const getCartItems = () => {
    return Object.entries(cart).map(([medicineId, quantity]) => {
      const medicine = medicines.find(m => m.id === parseInt(medicineId));
      return { ...medicine, quantity };
    }).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold text-gray-900">MediCare</span>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search medicines..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowCart(true)}
                className="relative p-2 text-gray-600 hover:text-gray-900"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {Object.keys(cart).length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {Object.keys(cart).length}
                  </span>
                )}
              </button>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">John Doe</span>
              </div>
              <button className="text-gray-600 hover:text-gray-900" aria-label="Logout">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Medicines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedicines.map((medicine) => (
            <div key={medicine.id} className="bg-white rounded-lg shadow-sm border medicine-card">
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{medicine.image}</div>
                  {medicine.prescription && (
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mb-2">
                      Prescription Required
                    </span>
                  )}
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{medicine.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{medicine.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(medicine.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({medicine.rating})</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">${medicine.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${medicine.originalPrice}</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">
                    {medicine.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <button
                  onClick={() => addToCart(medicine.id)}
                  disabled={!medicine.inStock}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            {getCartItems().length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {getCartItems().map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{item.image}</div>
                        <div>
                          <h3 className="font-medium text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">${item.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 rounded-full hover:bg-gray-100"
                          aria-label="Remove item"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item.id)}
                          className="p-1 rounded-full hover:bg-gray-100"
                          aria-label="Add item"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-gray-900">${getCartTotal().toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 