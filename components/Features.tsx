"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Lock, Smartphone, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: <Zap size={32} className="text-cyan-400" />,
    title: "Vitesse Ultra-Rapide",
    description: "Serveurs optimisés pour un streaming sans buffering et des téléchargements éclairs."
  },
  {
    icon: <Lock size={32} className="text-violet-400" />,
    title: "Chiffrement Militaire",
    description: "Vos données sont protégées par un algorithme AES-256 de bout en bout."
  },
  {
    icon: <Globe size={32} className="text-cyan-400" />,
    title: "Accès Mondial",
    description: "Contournez les géo-restrictions et accédez à n'importe quel contenu global."
  },
  {
    icon: <Shield size={32} className="text-violet-400" />,
    title: "Politique Zero-Log",
    description: "Nous ne conservons aucune trace de vos activités en ligne."
  },
  {
    icon: <Smartphone size={32} className="text-cyan-400" />,
    title: "Multi-Appareils",
    description: "Protégez simultanément votre smartphone, tablette et ordinateur."
  },
  {
    icon: <HeadphonesIcon size={32} className="text-violet-400" />,
    title: "Support 24/7",
    description: "Notre équipe technique est toujours là pour vous aider à tout moment."
  }
];

export default function Features() {
  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pourquoi Choisir <span className="text-gradient">VTPI ?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Découvrez les avantages exclusifs d'un service premium conçu pour votre sécurité absolue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
