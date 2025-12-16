"use client"

interface ServicesProps {
  onViewMore: () => void
}

export default function Services({ onViewMore }: ServicesProps) {
  const mainServices = [
    {
      title: "Seguros Personas y Familias",
      description: "Protección integral para ti y tu familia con coberturas personalizadas",
      icon: "👨‍👩‍👧‍👦",
      accentColor: "from-[#351E73] to-[#4F6F71]",
    },
    {
      title: "Seguros Empresariales",
      description: "Soluciones completas para proteger tu negocio y activos",
      icon: "🏢",
      accentColor: "from-[#4F6F71] to-[#351E73]",
    },
    {
      title: "Seguros Obligatorios",
      description: "Cumplimiento legal con la mejor cobertura del mercado",
      icon: "📋",
      accentColor: "from-[#351E73] to-[#BFEAC1]",
    },
    {
      title: "Financiación y Análisis Personalizado",
      description: "Planes financieros adaptados a tus necesidades específicas",
      icon: "💰",
      accentColor: "from-[#BFEAC1] to-[#4F6F71]",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-[#B9C0EA] via-[#E8E9F5] to-[#B9C0EA] text-[#351E73] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#351E73]">
            <span className="text-[#351E73]">Servicios que </span>
            <span className="bg-gradient-to-r from-[#351E73] to-[#4F6F71] bg-clip-text text-transparent">
              protegen tu vida
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#351E73] to-[#4F6F71] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white/50 border border-[#351E73]/20 rounded-2xl p-8 hover:border-[#351E73]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#351E73]/10 hover:bg-white"
            >
              {/* Icon */}
              <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-[#351E73] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#351E73] group-hover:to-[#4F6F71] group-hover:bg-clip-text transition-all">
                {service.title}
              </h3>
              <p className="text-[#351E73]/70 text-lg leading-relaxed">{service.description}</p>

              {/* Accent Bar */}
              <div
                className={`h-1 w-12 bg-gradient-to-r ${service.accentColor} rounded-full mt-6 group-hover:w-full transition-all duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button
            onClick={onViewMore}
            className="bg-gradient-to-r from-[#351E73] to-[#4F6F71] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#351E73]/50 transition-all transform hover:scale-105 inline-block"
          >
            Ver todos los servicios →
          </button>
        </div>
      </div>
    </section>
  )
}
