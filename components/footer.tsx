"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#351E73] text-[#B9C0EA] py-16 px-6 border-t border-[#351E73]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo-menta.png"
                alt="Whaly Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-[#B9C0EA]/80 font-normal leading-relaxed">+30 años protegiendo tu tranquilidad</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-base">Enlaces rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[#BFEAC1] transition-colors duration-300 font-normal">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#BFEAC1] transition-colors duration-300 font-normal">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#BFEAC1] transition-colors duration-300 font-normal">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-base">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-[#BFEAC1] transition-colors duration-300 font-normal">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#BFEAC1] transition-colors duration-300 font-normal">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#BFEAC1] transition-colors duration-300 font-normal">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#351E73]/40 pt-8 text-center text-sm text-[#B9C0EA]/70">
          <p className="font-normal">
            © {currentYear} Whaly Seguros. Todos los derechos reservados. |{" "}
            <span className="text-[#BFEAC1] font-semibold">
              Diferentes de verdad
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
