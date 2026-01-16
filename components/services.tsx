"use client"

import Link from "next/link"

export default function Services() {
  const mainServices = [
    {
      title: "Seguros para Personas",
      description: "Protección integral para ti y tu familia con coberturas personalizadas",
      icon: "👨‍👩‍👧‍👦",
      accentColor: "[#351E73]",
      href: "/personas",
    },
    {
      title: "Seguros para Empresas",
      description: "Soluciones completas para proteger tu negocio y activos",
      icon: "🏢",
      accentColor: "[#4F6F71]",
      href: "/empresas",
    },
  ]

  return (
    <section className="bg-[#EBF4F6] text-[#351E73] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#351E73] tracking-tight" style={{ fontFamily: 'var(--font-display), serif' }}>
            <span className="text-[#351E73] font-[800]">Servicios que </span>
            <span className="text-[#351E73] font-[800]">
              protegen tu vida
            </span>
          </h2>
          <div className="h-1 w-32 bg-[#351E73] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mainServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white border-2 border-[#351E73]/20 rounded-2xl p-8 md:p-10 hover:border-[#351E73] transition-all duration-300 hover:shadow-xl hover:shadow-[#351E73]/20 hover:-translate-y-1 block"
            >
              {/* Icon */}
              <div className={`text-5xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#351E73] transition-all tracking-tight">
                {service.title}
              </h3>
              <p className="text-[#351E73] text-base md:text-lg leading-relaxed font-normal">{service.description}</p>

              {/* Accent Bar */}
              <div
                className={`h-1.5 w-16 rounded-full mt-8 group-hover:w-full transition-all duration-500 ${service.accentColor === '[#351E73]' ? 'bg-[#351E73]' : 'bg-[#4F6F71]'}`}
              ></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
