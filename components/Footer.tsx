"use client";
import React from "react";
import { ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold font-syne tracking-wider text-gradient">VTPI</span>
          </div>
          
          <div className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} VTPI Networks. Tous droits réservés.
          </div>
          
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-primary transition-colors">Confidentialité</Link>
            <Link href="#" className="text-gray-500 hover:text-secondary transition-colors">CGV</Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
