"use client";
import React from "react";
import { Check, ShoppingCart, CreditCard } from "lucide-react";
import { Plan } from "@/types";

interface PricingCardProps {
  plan: Plan;
  onAddToCart: (plan: Plan) => void;
  onPayNow: (plan: Plan) => void;
}

export default function PricingCard({ plan, onAddToCart, onPayNow }: PricingCardProps) {
  return (
    <div className={`relative glass-card rounded-3xl p-8 flex flex-col h-full transition-all duration-300 hover:scale-[1.02] ${plan.isPopular ? 'border-cyan-400/50 shadow-[0_0_30px_rgba(0,245,255,0.15)] bg-white/10' : ''}`}>
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan to-violet text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-cyan-500/20">
          Le Plus Populaire
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-400 text-sm mb-4">Abonnement {plan.duration}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold">{plan.price.toLocaleString('fr-FR')}</span>
          <span className="text-xl text-gray-400">FCFA</span>
        </div>
      </div>

      <div className="flex-grow">
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-1 bg-cyan-400/20 p-1.5 rounded-full text-cyan-400 shrink-0">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        <button 
          onClick={() => onAddToCart(plan)}
          className="w-full py-3.5 rounded-xl glass-button text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10"
        >
          <ShoppingCart size={18} /> Ajouter au panier
        </button>
        <button 
          onClick={() => onPayNow(plan)}
          className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
            plan.isPopular 
              ? 'bg-gradient-to-r from-cyan to-violet hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] text-white' 
              : 'bg-white text-background hover:bg-gray-200'
          }`}
        >
          <CreditCard size={18} /> Payer avec PayTeck
        </button>
      </div>
    </div>
  );
}
