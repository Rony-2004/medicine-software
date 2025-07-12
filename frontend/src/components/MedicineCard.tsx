"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, FileText } from 'lucide-react';
import { Medicine, useCart } from '@/context/CartContext';

interface MedicineCardProps {
  medicine: Medicine;
}

export default function MedicineCard({ medicine }: MedicineCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="group hover:shadow-lg hover:scale-[1.03] transition-all duration-200 overflow-hidden relative">
      <div className="relative">
        <img
          src={medicine.image}
          alt={medicine.name}
          className="w-full h-32 object-cover rounded-md transition-transform duration-200 group-hover:scale-105"
        />
        {medicine.discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
            {medicine.discount}% OFF
          </span>
        )}
        <button className="absolute top-2 right-2 bg-white shadow-sm rounded-full p-1 hover:bg-gray-100 transition-colors z-10" title="Add to favorites">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
        {medicine.prescription && (
          <Badge variant="outline" className="absolute bottom-2 left-2 bg-white">
            <FileText className="w-3 h-3 mr-1" />
            Rx
          </Badge>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
          {medicine.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{medicine.manufacturer}</p>
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">{medicine.description}</p>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">₹{medicine.price}</span>
            {medicine.mrp > medicine.price && (
              <span className="text-sm text-gray-500 line-through">₹{medicine.mrp}</span>
            )}
          </div>
          {medicine.inStock ? (
            <Badge variant="outline" className="text-green-600 border-green-600">
              In Stock
            </Badge>
          ) : (
            <Badge variant="outline" className="text-red-600 border-red-600">
              Out of Stock
            </Badge>
          )}
        </div>

        <Button
          onClick={() => addToCart(medicine)}
          disabled={!medicine.inStock}
          className="w-full flex items-center justify-center space-x-2 transition-transform transition-shadow duration-150 hover:scale-105 hover:shadow-md active:scale-95"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{medicine.prescription ? 'Upload Prescription' : 'Add to Cart'}</span>
        </Button>
      </div>
    </Card>
  );
}