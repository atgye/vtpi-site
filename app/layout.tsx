import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VTPI - Premium Secure Internet",
  description: "VPN et accès internet haute vitesse avec sécurité avancée par VTPI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Numéro WhatsApp par défaut
  const whatsappNumber = "221770000000"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Bonjour%20l'équipe%20VTPI,%20j'ai%20besoin%20d'aide.`;

  return (
    <html lang="fr" className="bg-[#f8fafc]">
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased text-foreground min-h-screen flex flex-col`}
      >
        {/* Navbar claire et moderne */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold font-syne text-gradient">
              VTPI
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-primary font-medium transition-colors">Accueil</Link>
              <Link href="/produits" className="text-gray-600 hover:text-primary font-medium transition-colors">Nos Produits</Link>
              <Link href="/produits" className="px-6 py-2.5 rounded-full btn-primary font-medium text-sm">S'abonner</Link>
            </nav>
            {/* Mobile menu button could go here */}
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
          title="Contactez-nous sur WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </body>
    </html>
  );
}
