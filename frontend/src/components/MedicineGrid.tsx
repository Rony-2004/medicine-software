"use client";

import { useEffect, useState } from 'react';
import MedicineCard from '@/components/MedicineCard';
import { Medicine } from '@/context/CartContext';

interface MedicineGridProps {
  category: string;
  searchQuery: string;
}

function mapProductToMedicine(product: any): Medicine {
  return {
    id: product.id,
    name: product.name,
    manufacturer: product.manufacturer || 'Unknown',
    price: product.price,
    mrp: product.mrp || product.price, // fallback to price
    discount: product.discount || 0,
    image: product.image_url || (product.images && product.images[0]) || '',
    category: product.category || product.category_name || '',
    prescription: product.prescription || false,
    inStock: typeof product.stock === 'number' ? product.stock > 0 : true,
    description: product.description || '',
    dosage: product.dosage || '',
  };
}

export default function MedicineGrid({ category, searchQuery }: MedicineGridProps) {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMedicines() {
      setLoading(true);
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setMedicines((data.products || []).map(mapProductToMedicine));
      } catch (e) {
        setMedicines([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMedicines();
  }, []);

  const filtered = medicines.filter(med => {
    const matchesCategory = category === 'all' || med.category === category;
    const matchesSearch = med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return <div className="text-center py-12 text-gray-500">Loading medicines...</div>;
  }

  if (filtered.length === 0) {
    return <div className="text-center py-12 text-gray-500">No medicines found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {filtered.map(medicine => (
        <MedicineCard key={medicine.id} medicine={medicine} />
      ))}
    </div>
  );
}