"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section id="inicio" className="bg-[#BFEAC1] text-[#351E73] h-[calc(100vh-88px)] flex items-center px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Tagline */}
          <div className="inline-block">
            <span className="text-[#351E73] text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
              Hellooo ¿cómo vas?
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-[#351E73] tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
            <span className="text-[#351E73] font-[800]">Bienvenido a </span>
            <span className="text-[#351E73] font-[800]">
              la agencia 
            </span>
            <br />
            <span className="text-[#351E73] font-[800]">de seguros más cool de </span>
            <br />
            <span className="text-[#351E73] font-[800]">Colombia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-[#351E73] max-w-3xl mx-auto leading-relaxed font-normal">
            <span className="font-semibold text-[#351E73]">
              Somos Whaly
            </span>
            <br />
            <span className="font-normal">Tenemos más de 30 años de experiencia ayudando a las personas a entender sus riesgos y creando planes 100% personalizados de acuerdo a las necesidades</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-10">
            <Link href="/personas" className="bg-[#351E73] text-white px-10 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#2a1859] transition-all duration-300 shadow-lg">
              Soluciones para personas
            </Link>
            <Link href="/empresas" className="border-2 border-[#351E73] text-[#351E73] bg-transparent px-10 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#351E73] hover:text-white transition-all duration-300">
              Soluciones para empresas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
