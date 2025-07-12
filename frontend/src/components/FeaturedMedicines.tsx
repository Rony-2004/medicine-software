"use client";

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const featuredOffers = [
  {
    id: 1,
    title: "Up to 25% OFF",
    subtitle: "On Health Supplements",
    image: "https://images.pexels.com/photos/3873151/pexels-photo-3873151.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Free Home Delivery",
    subtitle: "On orders above ₹500",
    image: "https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Prescription Upload",
    subtitle: "Get medicines delivered",
    image: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=400",
    color: "bg-purple-500"
  }
];

export default function FeaturedMedicines() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {featuredOffers.map((offer) => (
          <Card key={offer.id} className="relative overflow-hidden h-32 cursor-pointer rounded-xl shadow-md p-6 transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            <div className={`absolute inset-0 ${offer.color} opacity-90 rounded-xl`} />
            <div className="relative z-10 text-white h-full flex flex-col justify-center">
              <h3 className="text-lg font-bold mb-1">{offer.title}</h3>
              <p className="text-sm opacity-90">{offer.subtitle}</p>
            </div>
            <div 
              className="absolute right-0 top-0 w-24 h-full bg-cover bg-center opacity-20 rounded-xl"
              style={{ backgroundImage: `url(${offer.image})` }}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}