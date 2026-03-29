"use client";
import React from "react";
import { Check, ShoppingCart, CreditCard } from "lucide-react";
import { Plan } from "@/types";

interface PricingCardProps {
  plan: Plan;
  onAddToCart?: (plan: Plan) => void;
  onPayNow: (plan: Plan) => void;
}

export default function PricingCard({ plan, onAddToCart, onPayNow }: PricingCardProps) {
  return (
    <div className={`relative light-card rounded-3xl p-8 flex flex-col h-full bg-white ${plan.isPopular ? 'border-primary ring-2 ring-primary/20 shadow-xl' : 'border-gray-100'}`}>
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
          Le Plus Populaire
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
        <p className="text-gray-500 text-sm mb-4">Abonnement {plan.duration}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-gray-900">{plan.price.toLocaleString('fr-FR')}</span>
          <span className="text-xl text-gray-500 font-medium">FCFA</span>
        </div>
      </div>

      <div className="flex-grow">
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        {onAddToCart && (
          <button 
            onClick={() => onAddToCart(plan)}
            className="w-full py-3.5 rounded-xl btn-secondary font-medium flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} /> Ajouter au panier
          </button>
        )}
        <button 
          onClick={() => onPayNow(plan)}
          className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
            plan.isPopular 
              ? 'btn-primary' 
              : 'bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg'
          }`}
        >
          <CreditCard size={18} /> Acheter Maintenant
        </button>
      </div>
    </div>
  );
}
