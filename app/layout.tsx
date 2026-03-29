import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
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
  return (
    <html lang="fr" className="dark">
      <body
        className={`${syne.variable} ${dmSans.variable} antialiased bg-[#030314] text-white min-h-screen relative`}
      >
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan/20 blur-[120px] rounded-full animate-blob"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet/20 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
          <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-cyan/10 blur-[100px] rounded-full animate-blob animation-delay-4000"></div>
        </div>
        
        {children}
      </body>
    </html>
  );
}
