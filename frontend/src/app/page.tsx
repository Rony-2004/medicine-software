"use client";

import { useState } from "react";
import { Heart, ShoppingCart, User, Shield, Truck, Clock, Star } from "lucide-react";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle authentication
    if (isUserLogin) {
      window.location.href = "/user/dashboard";
    } else {
      window.location.href = "/admin/dashboard";
    }
  };

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Genuine Products",
      description: "100% authentic medicines from trusted manufacturers",
    },
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Fast Delivery",
      description: "Same day delivery in your city",
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "24/7 Support",
      description: "Round the clock customer support",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Best Prices",
      description: "Competitive prices with regular discounts",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold text-gray-900">MediCare</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Buy genuine medicines online with fast delivery and expert consultation. 
              Your trusted partner for all your healthcare needs.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  setIsUserLogin(true);
                  setIsLoginOpen(true);
                }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <User className="w-5 h-5" />
                <span>Shop as User</span>
              </button>
              <button
                onClick={() => {
                  setIsUserLogin(false);
                  setIsLoginOpen(true);
                }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center space-x-2"
              >
                <Shield className="w-5 h-5" />
                <span>Admin Access</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose MediCare?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the best healthcare experience with quality products and excellent service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {isUserLogin ? "User Login" : "Admin Login"}
              </h2>
              <button
                onClick={() => setIsLoginOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="flex mb-6">
              <button
                onClick={() => setIsUserLogin(true)}
                className={`flex-1 py-2 px-4 rounded-l-lg font-medium ${
                  isUserLogin
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                User
              </button>
              <button
                onClick={() => setIsUserLogin(false)}
                className={`flex-1 py-2 px-4 rounded-r-lg font-medium ${
                  !isUserLogin
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Admin
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {isUserLogin ? "Login as User" : "Login as Admin"}
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Demo Credentials:
              </p>
              <p className="text-xs text-gray-500 mt-1">
                User: user@example.com / password123
              </p>
              <p className="text-xs text-gray-500">
                Admin: admin@example.com / admin123
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
