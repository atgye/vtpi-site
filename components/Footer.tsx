"use client";
import React from "react";
import { ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 relative mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold font-syne tracking-wider text-gradient">VTPI</span>
          </div>
          
          <div className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} VTPI Networks. Tous droits réservés.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Confidentialité</a>
            <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">CGV</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
