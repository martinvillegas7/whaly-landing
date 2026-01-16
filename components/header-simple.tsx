"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeaderSimple() {
  return (
    <header className="sticky top-0 z-50 bg-[#351E73] text-white py-5 px-6 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-menta.png"
            alt="Whaly Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </Link>

        {/* Contact Button */}
        <Link
          href="/#contacto"
          className="bg-[#BFEAC1] text-[#351E73] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#a8d4aa] transition-all duration-200 shadow-md"
        >
          Contactar
        </Link>
      </div>
    </header>
  );
}
