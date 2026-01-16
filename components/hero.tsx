"use client"

export default function Hero() {
  return (
    <section id="inicio" className="bg-[#BFEAC1] text-[#351E73] h-[calc(100vh-88px)] flex items-center px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Tagline */}
          <div className="inline-block">
            <span className="text-[#351E73] text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
              DIFERENTES DE VERDAD
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-[#351E73] tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
            <span className="text-[#351E73] font-[800]">Más de </span>
            <span className="text-[#351E73] font-[800]">
              30 años
            </span>
            <br />
            <span className="text-[#351E73] font-[800]">de experiencia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-[#351E73] max-w-3xl mx-auto leading-relaxed font-normal">
            <span className="font-semibold text-[#351E73]">
              Protegemos tu tranquilidad
            </span>
            <br />
            <span className="font-normal">con soluciones de seguros confiables y personalizadas</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-10">
            <button className="bg-[#351E73] text-white px-10 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#2a1859] transition-all duration-300 shadow-lg">
              Comenzar
            </button>
            <button className="border-2 border-[#351E73] text-[#351E73] bg-transparent px-10 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-[#351E73] hover:text-white transition-all duration-300">
              Conocer Más
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
