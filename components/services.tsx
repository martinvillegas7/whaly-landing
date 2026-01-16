"use client"

import Link from "next/link"

export default function Services() {
  const mainServices = [
    {
      title: "Seguros para Personas",
      description: "Protección integral para ti y tu familia con coberturas personalizadas",
      icon: "👨‍👩‍👧‍👦",
      bgColor: "bg-[#BFEAC1]/30",
      borderColor: "border-[#BFEAC1]/40",
      hoverBg: "hover:bg-[#BFEAC1]/40",
      accentColor: "bg-[#4F6F71]",
      href: "/personas",
    },
    {
      title: "Seguros para Empresas",
      description: "Soluciones completas para proteger tu negocio y activos",
      icon: "🏢",
      bgColor: "bg-[#B9C0EA]/30",
      borderColor: "border-[#B9C0EA]/40",
      hoverBg: "hover:bg-[#B9C0EA]/40",
      accentColor: "bg-[#351E73]",
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

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {mainServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group ${service.bgColor} ${service.borderColor} border-2 rounded-xl p-8 md:p-10 ${service.hoverBg} transition-all duration-200 hover:border-opacity-60 block`}
            >
              {/* Icon */}
              <div className="text-5xl md:text-6xl mb-6 transition-transform duration-200 group-hover:scale-105">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#351E73] tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
                {service.title}
              </h3>
              <p className="text-[#351E73]/80 text-base md:text-lg leading-relaxed font-normal mb-6">
                {service.description}
              </p>

              {/* Accent Bar */}
              <div className={`h-1 w-20 ${service.accentColor} rounded-full mt-6 transition-all duration-300 group-hover:w-24`}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
