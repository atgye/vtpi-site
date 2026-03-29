"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Plan } from "@/types";

interface CartToastProps {
  plan: Plan | null;
}

export default function CartToast({ plan }: CartToastProps) {
  return (
    <AnimatePresence>
      {plan && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-10 left-1/2 z-50 glass-card px-6 py-4 rounded-2xl flex items-center gap-4 border-cyan-400/30"
        >
          <CheckCircle2 className="text-cyan-400" size={24} />
          <div>
            <p className="font-bold text-white">Ajouté au panier !</p>
            <p className="text-sm text-gray-300">Plan {plan.name} ({plan.duration})</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
