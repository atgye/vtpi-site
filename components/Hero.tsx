"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-0 overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/10 blur-[150px] rounded-full z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
            <span className="text-sm font-medium tracking-wide text-cyan-50">Sécurité & Anonymat Absolu</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Votre Vie Privée,<br />
            <span className="text-gradient">Notre Priorité.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-sans leading-relaxed">
            Profitez d'un accès Internet illimité, ultra-rapide et entièrement sécurisé. Dites adieu aux restrictions et naviguez en toute tranquillité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToPricing}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan to-violet text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] transition-all duration-300 flex items-center gap-2"
            >
              Voir les offres <ArrowRight size={20} />
            </button>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-full glass-button text-white font-bold text-lg flex items-center gap-2"
            >
              <ShieldCheck size={20} className="text-cyan-400" />
              Pourquoi VTPI ?
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements (Liquid UI) */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-cyan/30 to-violet/30 backdrop-blur-md border border-white/10 hidden md:block"
        style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute left-10 bottom-1/4 w-32 h-32 rounded-full bg-gradient-to-tr from-violet/20 to-cyan/20 backdrop-blur-md border border-white/10 hidden md:block"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      ></motion.div>
    </section>
  );
}
