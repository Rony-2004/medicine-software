"use client";

import { cn } from '@/lib/utils';
import { 
  Heart, 
  Thermometer, 
  Shield, 
  Baby, 
  Utensils, 
  Stethoscope,
  Pill,
  Activity
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Medicines', icon: Pill },
  { id: 'pain-relief', name: 'Pain Relief', icon: Heart },
  { id: 'fever', name: 'Fever & Flu', icon: Thermometer },
  { id: 'immunity', name: 'Immunity Boosters', icon: Shield },
  { id: 'baby-care', name: 'Baby Care', icon: Baby },
  { id: 'nutrition', name: 'Nutrition', icon: Utensils },
  { id: 'diagnostics', name: 'Diagnostics', icon: Activity },
  { id: 'prescription', name: 'Prescription Drugs', icon: Stethoscope },
];

interface SidebarProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

export default function Sidebar({ selectedCategory, onCategorySelect }: SidebarProps) {
  return (
    <>
      <style>{`
        .sidebar-hide-scrollbar::-webkit-scrollbar { display: none; }
        .sidebar-hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <aside className="fixed top-15 left-0 h-[calc(100vh-5rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto z-20 scrollbar-none sidebar-hide-scrollbar">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
          <nav className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => onCategorySelect(category.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors group border-l-4",
                    isActive
                      ? "bg-blue-50 text-blue-700 border-blue-500 shadow-sm"
                      : "text-gray-700 border-transparent hover:bg-gray-50 hover:text-blue-600"
                  )}
                >
                  <Icon className={cn("w-5 h-5 flex-shrink-0", isActive ? "text-blue-600" : "text-gray-400 group-hover:text-blue-500")}/>
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-8 p-4 bg-green-50 rounded-lg">
            <h3 className="text-sm font-semibold text-green-800 mb-2">24/7 Support</h3>
            <p className="text-xs text-green-600">Need help? Our pharmacists are available 24/7</p>
            <button className="mt-2 text-xs text-green-700 font-medium hover:underline">
              Contact Support
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}