"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#351E73] text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo-menta.png"
            alt="Whaly Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <button className="hover:text-[#BFEAC1] transition-colors font-medium">
            Inicio
          </button>
          <button className="hover:text-[#B9C0EA] transition-colors font-medium">
            Servicios
          </button>
          <button className="hover:text-[#BFEAC1] transition-colors font-medium">
            Contacto
          </button>
        </nav>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-[#BFEAC1] to-[#4F6F71] text-[#351E73] px-6 py-2 rounded-full font-bold hover:shadow-lg hover:shadow-[#BFEAC1]/50 transition-all">
          Contactar
        </button>
      </div>
    </header>
  );
}
