"use client";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import CartToast from "./CartToast";
import { useRouter } from "next/navigation";
import { Plan } from "@/types";

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    duration: "1 mois",
    price: 4900,
    priceLabel: "4 900 FCFA",
    features: [
      "Vitesse de base",
      "Sécurité standard",
      "Jusqu'à 2 appareils",
      "Aucun fichier log",
      "Support par email"
    ]
  },
  {
    id: "standard",
    name: "Standard",
    duration: "3 mois",
    price: 12900,
    priceLabel: "12 900 FCFA",
    isPopular: true,
    features: [
      "Vitesse Ultra-Rapide",
      "Sécurité militaire (AES-256)",
      "Jusqu'à 5 appareils",
      "Anti-fuite DNS",
      "Support prioritaire"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    duration: "1 an",
    price: 39900,
    priceLabel: "39 900 FCFA",
    features: [
      "Vitesse Illimitée",
      "Sécurité maximale",
      "Appareils illimités",
      "IP dédiée incluse",
      "Support VIP 24/7"
    ]
  }
];

export default function PricingSection() {
  const router = useRouter();
  const [toastPlan, setToastPlan] = useState<Plan | null>(null);

  const handleAddToCart = (plan: Plan) => {
    setToastPlan(plan);
    setTimeout(() => setToastPlan(null), 3000);
  };

  const handlePayNow = (plan: Plan) => {
    router.push(`/paiement?plan=${plan.id}`);
  };

  return (
    <section className="py-24 relative bg-gray-50/50" id="pricing">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nos <span className="text-gradient">Abonnements</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choisissez le plan qui correspond parfaitement à vos besoins de navigation et de sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div key={plan.id} className={`h-full ${plan.isPopular ? "md:-translate-y-4" : ""}`}>
              <PricingCard
                plan={plan}
                onAddToCart={handleAddToCart}
                onPayNow={handlePayNow}
              />
            </div>
          ))}
        </div>
      </div>
      
      <CartToast plan={toastPlan} />
    </section>
  );
}
