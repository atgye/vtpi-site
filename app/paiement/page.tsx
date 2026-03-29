"use client";
import React, { useState, useEffect, Suspense } from "react";
import { ShieldCheck, Smartphone, Loader2, CreditCard } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { Plan } from "@/types";
import Footer from "@/components/Footer";

const plans: Plan[] = [
  { id: "starter", name: "Starter", duration: "1 mois", price: 4900, priceLabel: "4 900 FCFA", features: [] },
  { id: "standard", name: "Standard", duration: "3 mois", price: 12900, priceLabel: "12 900 FCFA", isPopular: true, features: [] },
  { id: "premium", name: "Premium", duration: "1 an", price: 39900, priceLabel: "39 900 FCFA", features: [] }
];

function PaymentForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planId = searchParams.get("plan");
  
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const plan = plans.find(p => p.id === planId);

  useEffect(() => {
    if (!planId || !plan) {
      router.push("/produits"); 
    }
  }, [planId, plan, router]);

  if (!plan) return <div className="py-32 text-center text-gray-500">Chargement de votre panier...</div>;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;

    setIsLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      const res = await fetch("/api/payteck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: plan.id,
          phoneNumber,
          amount: plan.price
        })
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage(data.message || "Paiement initié avec succès. Veuillez valider sur votre téléphone.");
        
        // Redirection Optionnelle si l'API PayTech fournit une URL (hosted page)
        if (data.paymentUrl) {
          window.location.href = data.paymentUrl;
        }
      } else {
        setStatus("error");
        setMessage(data.error || "Une erreur est survenue lors du paiement.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Erreur de connexion au serveur de paiement.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white light-card rounded-3xl border border-gray-100 shadow-xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard size={32} />
        </div>
        <h1 className="text-3xl font-bold font-syne text-gray-900">Finaliser la Commande</h1>
        <p className="text-gray-500 mt-2">Paiement 100% sécurisé via PayTech</p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
        <h3 className="font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Résumé de votre commande</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Offre choisie</span>
          <span className="font-bold text-primary">{plan.name} ({plan.duration})</span>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 pt-4 border-t border-gray-200">
          <span className="text-gray-900 font-bold">Total à payer</span>
          <span className="font-bold text-gray-900">{plan.price.toLocaleString('fr-FR')} FCFA</span>
        </div>
      </div>

      {status === "success" ? (
        <div className="text-center py-8">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={40} />
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mb-3">Redirection en cours...</h4>
          <p className="text-gray-600 text-lg mb-8">{message}</p>
          <button 
            onClick={() => router.push("/")}
            className="w-full py-4 rounded-xl btn-primary font-bold"
          >
            Retour à l'accueil
          </button>
        </div>
      ) : (
        <form onSubmit={handlePayment}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Numéro de téléphone (Mobile Money) ou ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Smartphone size={20} className="text-gray-400" />
              </div>
              <input
                type="tel"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Ex: 771234567"
                className="w-full bg-white border border-gray-300 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-lg"
              />
            </div>
          </div>

          {status === "error" && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !phoneNumber}
            className="w-full py-4 rounded-xl btn-primary text-white font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {isLoading ? (
              <>
                <Loader2 size={24} className="animate-spin" /> Traitement en cours...
              </>
            ) : (
              "Confirmer le paiement"
            )}
          </button>
          
          <div className="mt-6 text-center flex items-center justify-center gap-2 text-gray-500 text-sm">
            <ShieldCheck size={16} className="text-green-500" />
            Transactions cryptées et sécurisées par PayTech
          </div>
        </form>
      )}
    </div>
  );
}

export default function PaiementPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <div className="flex-grow container mx-auto px-6 pb-24">
        <Suspense fallback={<div className="text-center py-20 text-gray-500">Chargement du système de paiement...</div>}>
          <PaymentForm />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
