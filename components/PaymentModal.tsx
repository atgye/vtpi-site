"use client";
import React, { useState } from "react";
import { X, ShieldCheck, Smartphone, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Plan } from "@/types";

interface PaymentModalProps {
  plan: Plan | null;
  onClose: () => void;
}

export default function PaymentModal({ plan, onClose }: PaymentModalProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  if (!plan) return null;

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
        if (data.redirect_url) {
          // Redirection vers la page PayTech
          window.location.href = data.redirect_url;
        } else {
          setStatus("success");
          setMessage(data.message || "Paiement initié avec succès. Veuillez valider sur votre téléphone.");
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
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md bg-[#0a0a1a] border border-cyan-500/30 rounded-3xl shadow-[0_0_50px_rgba(0,245,255,0.1)] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-900/40 to-violet-900/40 p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-xl font-bold flex items-center gap-2 text-white">
              <ShieldCheck className="text-cyan-400" /> Paiement Sécurisé
            </h3>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={20} className="text-gray-400 hover:text-white" />
            </button>
          </div>

          <div className="p-6">
            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Offre choisie</span>
                <span className="font-bold text-cyan-400">{plan.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total à payer</span>
                <span className="text-xl font-bold text-white">{plan.price.toLocaleString('fr-FR')} FCFA</span>
              </div>
            </div>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-xl font-bold text-green-400 mb-2">Paiement Initié</h4>
                <p className="text-gray-300">{message}</p>
                <button 
                  onClick={onClose}
                  className="mt-6 w-full py-3 rounded-xl glass-button text-white font-medium"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handlePayment}>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Numéro de Téléphone (Mobile Money)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Smartphone size={20} className="text-gray-500" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Ex: 771234567"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading || !phoneNumber}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan to-violet hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] text-white font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Traitement...
                    </>
                  ) : (
                    "Confirmer le paiement"
                  )}
                </button>
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                    <ShieldCheck size={12} /> Transactions 100% sécurisées par PayTeck
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
