"use client"

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#B9C0EA] via-[#E8E9F5] to-[#B9C0EA] text-[#351E73] py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#351E73] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute -bottom-8 left-0 w-96 h-96 bg-[#BFEAC1] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-6 mb-12">
          {/* Tagline */}
          <div className="inline-block">
            <span className="bg-gradient-to-r from-[#351E73] to-[#4F6F71] bg-clip-text text-transparent text-lg font-bold tracking-widest">
              DIFERENTES DE VERDAD
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#351E73]">
            <span className="text-[#351E73]">Más de </span>
            <span className="bg-gradient-to-r from-[#351E73] via-[#4F6F71] to-[#351E73] bg-clip-text text-transparent">
              30 años
            </span>
            <br />
            <span className="text-[#351E73]">de experiencia</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#351E73]/80 max-w-2xl mx-auto leading-relaxed font-light">
            <span className="font-bold bg-gradient-to-r from-[#351E73] to-[#4F6F71] bg-clip-text text-transparent">
              Protegemos tu tranquilidad
            </span>
            <br />
            con soluciones de seguros confiables y personalizadas
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <button className="bg-gradient-to-r from-[#351E73] to-[#4F6F71] text-[#B9C0EA] px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#351E73]/50 transition-all transform hover:scale-105">
              Comenzar
            </button>
            <button className="border-2 border-[#351E73] text-[#351E73] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#351E73]/10 transition-all">
              Conocer Más
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
