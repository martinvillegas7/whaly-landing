"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#351E73] text-white py-5 px-6 shadow-lg backdrop-blur-sm">
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
          <button className="hover:text-[#BFEAC1] transition-colors duration-300 font-medium text-sm tracking-wide">
            Inicio
          </button>
          <button className="hover:text-[#B9C0EA] transition-colors duration-300 font-medium text-sm tracking-wide">
            Servicios
          </button>
          <button className="hover:text-[#BFEAC1] transition-colors duration-300 font-medium text-sm tracking-wide">
            Contacto
          </button>
        </nav>

        {/* CTA Button */}
        <button className="bg-[#BFEAC1] text-[#351E73] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#a8d4aa] transition-all duration-300 shadow-md">
          Contactar
        </button>
      </div>
    </header>
  );
}
