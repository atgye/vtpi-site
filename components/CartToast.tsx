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
          className="fixed bottom-10 left-1/2 z-[100] bg-white shadow-2xl px-6 py-4 rounded-2xl flex items-center gap-4 border border-gray-100"
        >
          <CheckCircle2 className="text-green-500" size={24} />
          <div>
            <p className="font-bold text-gray-900">Ajouté au panier !</p>
            <p className="text-sm text-gray-500">Plan {plan.name} ({plan.duration})</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
