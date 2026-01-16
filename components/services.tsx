"use client"

import Link from "next/link"
import Image from "next/image"

export default function Services() {
  const mainServices = [
    {
      title: "Seguros para Personas",
      description: "Protección integral para ti y tu familia con coberturas personalizadas",
      image: "/Escenarios/Escenarios-1.jpg",
      href: "/personas",
    },
    {
      title: "Seguros para Empresas",
      description: "Soluciones completas para proteger tu negocio y activos",
      image: "/Escenarios/Escenarios-2.jpg",
      href: "/empresas",
    },
  ]

  return (
    <section id="servicios" className="bg-[#EBF4F6] text-[#351E73] py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#351E73]/70 text-sm md:text-base font-semibold tracking-[0.2em] uppercase">
              NUESTROS SERVICIOS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#351E73] tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
            <span className="text-[#351E73] font-[800]">Servicios que </span>
            <span className="text-[#351E73] font-[800]">
              protegen tu vida
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#351E73]/70 max-w-2xl mx-auto leading-relaxed font-normal mt-4">
            Soluciones de seguros diseñadas para proteger lo que más importa
          </p>
        </div>

        {/* Services with Images */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {mainServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#351E73]/40 via-[#351E73]/10 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-normal mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors duration-200">
                    <span className="font-semibold">Ver más</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
