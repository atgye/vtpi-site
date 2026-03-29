"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden bg-white">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full z-0 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[100px] rounded-full z-0 translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary"></span>
              <span className="text-sm font-semibold tracking-wide text-primary">Nouveau Design Épuré</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-gray-900">
              Votre Connexion,<br />
              <span className="text-gradient">En Toute Sécurité.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Découvrez la liberté d'un accès Internet sans limites. Rapide, privé, et conçu pour votre confort sur tous vos appareils.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/produits"
                className="w-full sm:w-auto px-8 py-4 rounded-full btn-primary font-bold text-lg flex items-center justify-center gap-2"
              >
                Découvrir nos offres <ArrowRight size={20} />
              </Link>
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 rounded-full btn-secondary font-bold text-lg flex items-center justify-center gap-2"
              >
                <ShieldCheck size={20} className="text-primary" />
                Pourquoi choisir VTPI ?
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            {/* 
              Tutoriel "Comment ajouter des images" :
              On utilise <Image /> de Next.js.
              Ici on utilisera l'image générée "hero_illustration.png" que l'on placera dans public/
            */}
            <div className="mx-auto w-full aspect-square relative rounded-3xl overflow-hidden light-card shadow-2xl">
              <Image 
                src="/hero_illustration.png" 
                alt="Illustration VTPI"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
